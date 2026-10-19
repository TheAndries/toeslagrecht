#!/usr/bin/env python3
"""toeslagrecht site renderer: law/ + cases/ + the governing files -> site/ (seven page kinds).

Called by tools/build.py build. The Markdown and yaml under law/ stay the source; the site is the
reader's copy (DESIGN.md P9; site/DESIGN-amendment.md, address map). Nothing here changes data.
Every colour, size and font is a token in site/static/tokens.css; this file writes markup only.
Stdlib + PyYAML. Licence: MIT (LICENSE)."""
from __future__ import annotations

import html
import re
from datetime import date
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
TODAY = date.today().isoformat()
REPO = "https://github.com/TheAndries/toeslagrecht"
D = Decimal

# Where a repository file is read on the site (site/DESIGN-amendment.md, address map).
SITE_FOR = {
    "DISCREPANCIES.md": "verschillen/index.html",
    "DISPUTES.md": "betwisten/index.html",
    "CASES.md": "insturen/index.html",
    "law/CHANGES.md": "wet/wijzigingen/index.html",
    "law/SOURCES.md": "wet/bronnen/index.html",
    "law/zorgtoeslag/rules.md": "dossier/zorgtoeslag/index.html",
    "law/awir/rules.md": "dossier/awir/index.html",
    "law/zorgtoeslag/tests/report.md": "dossier/voorbeelden/index.html",
    "cases/": "dossier/voorbeelden/index.html",
}

# Words the old checker already used for a step's non-numeric outcome (the site's own voice).
WOORD = {"niet_getoetst": "niet getoetst, want geen vermogen opgegeven", "aanspraak": "onder de grens",
         "geen_aanspraak": "boven de grens: geen zorgtoeslag", "undetermined": "niet bepaald door de wet"}

LANDNAMEN = {
    "BE": "België", "BA": "Bosnië-Herzegovina", "BG": "Bulgarije", "CY": "Cyprus", "DK": "Denemarken", "DE": "Duitsland",
    "EE": "Estland", "FI": "Finland", "FR": "Frankrijk", "GR": "Griekenland", "HU": "Hongarije", "IS": "IJsland",
    "IE": "Ierland", "IT": "Italië", "CV": "Kaapverdië", "HR": "Kroatië", "LV": "Letland", "LI": "Liechtenstein",
    "LT": "Litouwen", "LU": "Luxemburg", "MT": "Malta", "MA": "Marokko", "ME": "Montenegro", "MK": "Noord-Macedonië",
    "NO": "Noorwegen", "AT": "Oostenrijk", "PL": "Polen", "PT": "Portugal", "RO": "Roemenië", "RS": "Servië",
    "SI": "Slovenië", "SK": "Slowakije", "ES": "Spanje", "CZ": "Tsjechië", "TN": "Tunesië", "TR": "Turkije",
    "GB": "Verenigd Koninkrijk", "SE": "Zweden", "CH": "Zwitserland",
}

esc = html.escape


# ---------------------------------------------------------------- amounts

def eur(v, cents: bool = True) -> str:
    """€ 1.234,56 the Dutch way; cents=False rounds to whole euros (for the granted amount only)."""
    if v is None:
        return "—"
    if not isinstance(v, Decimal):
        return esc(WOORD.get(str(v), str(v)))
    q = v.quantize(D("0.01"), rounding=ROUND_HALF_UP) if cents else v.quantize(D("1"), rounding=ROUND_HALF_UP)
    s = f"{q:,.2f}" if cents else f"{q:,}"
    s = s.replace(",", "X").replace(".", ",").replace("X", ".")
    return "€ " + s


# ---------------------------------------------------------------- markdown (a small, faithful subset)

_INLINE_CODE = re.compile(r"`([^`]+)`")
_LINK = re.compile(r"\[([^\]]+)\]\(([^)\s]+)\)")
_AUTOLINK = re.compile(r"<(https?://[^>]+)>")
_BARE = re.compile(r"(?<![\"'=>])(https?://[^\s<)\]]+)")
_BOLD = re.compile(r"\*\*(.+?)\*\*")
_ITAL = re.compile(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])")
_TABLE_SPLIT = re.compile(r"(?<!\\)\|")


def _rewrite(url: str, rel: str) -> str:
    """Repository-relative links become site links where a page exists; anything else is left alone."""
    if url.startswith(("http://", "https://", "#", "mailto:")):
        return url
    clean = url.lstrip("./")
    while clean.startswith("../"):
        clean = clean[3:]
    for src, dst in SITE_FOR.items():
        if clean == src or clean.startswith(src.rstrip("/") + "#"):
            frag = "#" + clean.split("#", 1)[1] if "#" in clean else ""
            return rel + dst + frag
    return REPO + "/blob/main/" + clean


def inline(text: str, rel: str = "") -> str:
    """Inline Markdown -> HTML. Escapes first; code spans are protected."""
    codes: list[str] = []

    def keep(m):
        codes.append("<code>" + esc(m.group(1)) + "</code>")
        return f"\x00{len(codes) - 1}\x00"

    t = _INLINE_CODE.sub(keep, text)
    t = esc(t, quote=False)
    t = _AUTOLINK.sub(lambda m: f'<a href="{esc(m.group(1))}">{esc(m.group(1))}</a>', t)
    t = _LINK.sub(lambda m: f'<a href="{esc(_rewrite(m.group(2), rel))}">{m.group(1)}</a>', t)
    t = _BARE.sub(lambda m: f'<a href="{m.group(1)}">{m.group(1)}</a>', t)
    t = _BOLD.sub(r"<strong>\1</strong>", t)
    t = _ITAL.sub(r"<em>\1</em>", t)
    t = re.sub("\x00(\\d+)\x00", lambda m: codes[int(m.group(1))], t)
    return t


def md(text: str, rel: str = "", shift: int = 0, table_cls: str = "") -> str:
    """Block Markdown -> HTML: headings (shifted by `shift`), paragraphs, lists, tables, quotes, rules,
    fenced code. Tables get data-h on every cell so they stack on a phone (site.css)."""
    out: list[str] = []
    lines = text.splitlines()
    i = 0
    para: list[str] = []

    def flush():
        if para:
            out.append("<p>" + inline(" ".join(s.strip() for s in para), rel) + "</p>")
            para.clear()

    while i < len(lines):
        ln = lines[i]
        s = ln.strip()
        if s.startswith("```"):
            flush()
            j = i + 1
            buf = []
            while j < len(lines) and not lines[j].strip().startswith("```"):
                buf.append(lines[j]); j += 1
            out.append("<pre><code>" + esc("\n".join(buf)) + "</code></pre>")
            i = j + 1
            continue
        if not s:
            flush(); i += 1; continue
        m = re.match(r"^(#{1,6})\s+(.*)$", s)
        if m:
            flush()
            lvl = min(6, len(m.group(1)) + shift)
            out.append(f"<h{lvl}>{inline(m.group(2), rel)}</h{lvl}>")
            i += 1; continue
        if re.match(r"^(-{3,}|\*{3,})$", s):
            flush(); out.append("<hr>"); i += 1; continue
        if s.startswith("|"):
            flush()
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                rows.append(lines[i].strip()); i += 1
            cells = [[c.strip().replace("\\|", "|") for c in _TABLE_SPLIT.split(r)[1:-1]] for r in rows]
            if len(cells) >= 2 and all(re.match(r"^:?-+:?$", c) for c in cells[1] if c):
                head, body = cells[0], cells[2:]
            else:
                head, body = None, cells
            t = ['<table class="' + table_cls + '">'] if table_cls else ["<table>"]
            if head:
                t.append("<thead><tr>" + "".join(f"<th>{inline(c, rel)}</th>" for c in head) + "</tr></thead>")
            t.append("<tbody>")
            for r in body:
                t.append("<tr>" + "".join(
                    f'<td data-h="{esc(head[k]) if head and k < len(head) else ""}">{inline(c, rel)}</td>'
                    for k, c in enumerate(r)) + "</tr>")
            t.append("</tbody></table>")
            out.append("".join(t))
            continue
        if s.startswith(">"):
            flush()
            buf = []
            while i < len(lines) and lines[i].strip().startswith(">"):
                buf.append(lines[i].strip()[1:].strip()); i += 1
            out.append("<blockquote>" + md("\n".join(buf), rel, shift) + "</blockquote>")
            continue
        m = re.match(r"^(\s*)([-*]|\d+\.)\s+(.*)$", ln)
        if m:
            flush()
            ordered = m.group(2)[0].isdigit()
            items = []
            while i < len(lines):
                m2 = re.match(r"^(\s*)([-*]|\d+\.)\s+(.*)$", lines[i])
                if m2 and len(m2.group(1)) == len(m.group(1)):
                    items.append(m2.group(3)); i += 1
                elif lines[i].strip() and not re.match(r"^(#{1,6}\s|\||>|```)", lines[i].strip()) and (
                        lines[i].startswith(" ") or lines[i].startswith("\t")):
                    items[-1] += " " + lines[i].strip(); i += 1
                else:
                    break
            tag = "ol" if ordered else "ul"
            out.append(f"<{tag}>" + "".join(f"<li>{inline(x, rel)}</li>" for x in items) + f"</{tag}>")
            continue
        para.append(ln)
        i += 1
    flush()
    return "\n".join(out)


# ---------------------------------------------------------------- the page frame

PADLOCK = ('<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">'
           '<rect x="5" y="10" width="14" height="10" rx="1"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg>')


def status_word(w: str) -> str:
    return f'<span class="status">{esc(w)}</span>'


def privacy() -> str:
    return f'<p class="privacy">{PADLOCK}Niets van wat u invult verlaat uw telefoon of computer.</p>'


def page(title: str, body: str, rel: str, current: str, site_status: str, description: str = "",
         head_extra: str = "", scripts: str = "", h1_in_body: bool = True) -> str:
    menu = [("Narekenen", "index.html"), ("Dossier", "dossier/index.html"), ("Wet", "wet/index.html"), ("Over", "over/index.html")]
    items = ""
    for name, href in menu:
        cur = ' aria-current="page"' if name == current else ""
        items += f'<li><a href="{rel}{href}"{cur}>{name}</a></li>'
    desc = f'<meta name="description" content="{esc(description)}">\n' if description else ""
    return f"""<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)} — toeslagrecht</title>
{desc}<link rel="stylesheet" href="{rel}static/tokens.css">
<link rel="stylesheet" href="{rel}static/site.css">
{head_extra}</head>
<body>
<a class="skip" href="#inhoud">Naar de inhoud</a>
<header class="kop">
  <div class="kop-in">
    <a class="woordmerk" href="{rel}index.html">toeslagrecht</a>
    <nav aria-label="Menu"><ul class="menu">{items}</ul></nav>
  </div>
</header>
<main id="inhoud" class="pagina">
{body}
</main>
<footer class="voet">
  <div class="pagina">
    <p>toeslagrecht · de toeslagenwet als rekenregels die u zelf kunt nalopen</p>
    <p>{site_status}</p>
    <p class="voet-links"><a href="{rel}dossier/index.html">Dossier</a> · <a href="{rel}betwisten/index.html">Iets betwisten</a> · <a href="{rel}insturen/index.html">Een beschikking insturen</a> · <a href="{rel}over/index.html">Over</a> · <a href="{REPO}">Bron</a> (MIT / CC BY-SA 4.0) · Gebouwd {TODAY}</p>
  </div>
</footer>
{scripts}</body>
</html>
"""


def write(path: str, content: str) -> None:
    p = SITE / path
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")


def rel_for(path: str) -> str:
    return "../" * (path.count("/"))


# ---------------------------------------------------------------- reading law/

RULE_HEADING = re.compile(r"^## ([a-z0-9-]+) — (.+)$")
FIELD = re.compile(r"^\*\*([^*]+):\*\*\s*(.*)$")


def read_rules(bestand: str) -> dict:
    """law/<x>/rules.md -> {preamble, rules: [{id, naam, velden{Artikel, Status, ...}, body}], rest}."""
    text = (ROOT / bestand).read_text(encoding="utf-8")
    lines = text.splitlines()
    title = lines[0].lstrip("# ").strip() if lines and lines[0].startswith("# ") else bestand
    preamble, rules, rest = [], [], []
    cur = None
    mode = "pre"
    for ln in lines[1:]:
        m = RULE_HEADING.match(ln)
        if m:
            cur = {"id": m.group(1), "naam": m.group(2).strip(), "lines": []}
            rules.append(cur); mode = "rule"; continue
        if ln.startswith("## ") and cur is not None:
            cur = None; mode = "rest"; rest.append(ln); continue
        if mode == "pre":
            preamble.append(ln)
        elif mode == "rule":
            cur["lines"].append(ln)
        else:
            rest.append(ln)
    for r in rules:
        velden: dict[str, str] = {}
        key = None
        for ln in r["lines"]:
            if ln.strip() == "---":
                continue
            m = FIELD.match(ln.strip())
            if m:
                key = m.group(1).strip(); velden[key] = m.group(2).strip()
            elif key and ln.strip():
                velden[key] += " " + ln.strip()
            elif not ln.strip():
                key = None
        r["velden"] = velden
        r["status"] = velden.get("Status", "").rstrip(".").strip() or "draft"
        r["artikel"] = velden.get("Artikel", "")
        r["artikel_kort"] = re.split(r"\s\(|;", r["artikel"])[0].strip()
    pre = "\n".join(preamble).strip()
    pre = re.sub(r"^-{3,}\s*$", "", pre, flags=re.M).strip()
    return {"bestand": bestand, "titel": title, "preamble": pre, "rules": rules, "rest": "\n".join(rest).strip()}


def read_params(toeslag: str) -> dict[int, dict]:
    out = {}
    for p in sorted((ROOT / "law" / toeslag / "parameters").glob("*.yaml")):
        with open(p, encoding="utf-8") as f:
            out[int(p.stem)] = yaml.safe_load(f)
    return out


def read_cases() -> list[dict]:
    out = []
    for p in sorted((ROOT / "cases").glob("*.yaml")):
        with open(p, encoding="utf-8") as f:
            c = yaml.safe_load(f)
        c["_file"] = p.name
        out.append(c)
    return out


def read_discrepancies() -> tuple[str, list[dict], list[str]]:
    """DISCREPANCIES.md -> (intro markdown, rows as dicts by header, header list)."""
    text = (ROOT / "DISCREPANCIES.md").read_text(encoding="utf-8")
    intro, rows, head = [], [], []
    for ln in text.splitlines():
        if ln.startswith("|"):
            cells = [c.strip() for c in _TABLE_SPLIT.split(ln.strip())[1:-1]]
            if not head:
                head = cells
            elif all(re.match(r"^:?-+:?$", c) for c in cells if c):
                continue
            else:
                rows.append(dict(zip(head, cells)))
        elif not ln.startswith("# "):
            intro.append(ln)
    return "\n".join(intro).strip(), rows, head


def read_changes() -> tuple[str, list[dict], list[str]]:
    text = (ROOT / "law" / "CHANGES.md").read_text(encoding="utf-8")
    intro, rows, head = [], [], []
    for ln in text.splitlines():
        if ln.startswith("|"):
            cells = [c.strip() for c in _TABLE_SPLIT.split(ln.strip())[1:-1]]
            if not head:
                head = cells
            elif all(re.match(r"^:?-+:?$", c) for c in cells if c):
                continue
            else:
                rows.append(dict(zip(head, cells)))
        elif not ln.startswith("# "):
            intro.append(ln)
    return "\n".join(intro).strip(), rows, head


def strip_title(mdtext: str) -> str:
    """Drop the file's own `# Title` line; the page gives its title."""
    return re.sub(r"^# .*\n", "", mdtext, count=1)


# ---------------------------------------------------------------- components

def citation(text_html: str, footer_html: str, anchor: str = "", cite: str = "") -> str:
    a = f' id="{esc(anchor)}"' if anchor else ""
    c = f' cite="{esc(cite)}"' if cite else ""
    return f'<blockquote class="citaat"{a}{c}><p>{text_html}</p><footer>{footer_html}</footer></blockquote>'


def contents(entries: list[tuple[str, str, str]]) -> str:
    """[(href, name_html, note_html)] -> contents list."""
    if not entries:
        return ""
    return '<ul class="inhoud">' + "".join(
        f'<li><a href="{esc(h)}">{n}</a><span class="noot">{note}</span></li>' for h, n, note in entries) + "</ul>"


def step_rows(stappen, rel: str, rule_pages: dict[str, str]) -> str:
    items = []
    for i, s in enumerate(stappen, 1):
        href = rel + rule_pages.get(s.regel, "dossier/index.html")
        uit = eur(s.uitkomst) if isinstance(s.uitkomst, Decimal) else eur(s.uitkomst)
        items.append(
            f'<li class="stap"><p class="stap-zin"><span class="stap-nr" aria-hidden="true">{i}</span>'
            f'<span>{esc(s.omschrijving)} <span class="getal">Uitkomst: {uit}.</span></span></p>'
            f'<p class="kantlijn"><a href="{href}">{esc(s.artikel)}</a> · {status_word(s.status)}'
            f'<span class="rekensom">{esc(s.berekening)}</span></p></li>')
    return '<ol class="stappen">' + "".join(items) + "</ol>"


def amount_block(u, jaar: int, rel: str) -> str:
    h = []
    if u.vermogen == "geen_aanspraak":
        h.append(f'<p class="bedrag-intro">Naar de letter van de wet krijgt u in {jaar}</p><p class="bedrag">€ 0 <span class="per-jaar">per jaar</span></p>')
        h.append('<p>Uw vermogen op 1 januari is hoger dan de grens van dat jaar. Dan is er volgens de wet het hele jaar geen zorgtoeslag.</p>')
    elif u.tegemoetkoming is None:
        h.append(f'<p class="bedrag-intro">Naar de letter van de wet krijgt u in {jaar}</p><p class="bedrag">niet bepaald door de wet</p>')
        h.append(f'<p>Voor deze situatie zegt de wettekst van {jaar} niet wat de uitkomst is. Hieronder staat waar de tekst ophoudt.</p>')
    else:
        h.append(f'<p class="bedrag-intro">Naar de letter van de wet krijgt u in {jaar}</p>'
                 f'<p class="bedrag">{eur(u.tegemoetkoming, False)} <span class="per-jaar">per jaar</span></p>')
        h.append(f'<p class="klein">Berekend {eur(u.aanspraak_jaar)} per jaar, afgerond op hele euro’s (Awir art. 14 lid 4). '
                 f'Per maand is dat {eur(u.aanspraak_maand)}. Dienst Toeslagen betaalt hele euro’s per maand en komt dan op '
                 f'€ {u.aanspraak_maand_afgerond_praktijk}; waar dat afronden per maand in de wet staat, hebben wij niet gevonden.</p>')
    h.append('<p class="eerlijk">Dit is wat de wet zegt voor wat u invulde. Het is geen advies en geen aanvraag; aanvragen doet u op <a href="https://www.toeslagen.nl">toeslagen.nl</a>.</p>')
    statuses = sorted({s.status for s in u.stappen})
    h.append('<p class="statusregel">Alle regels in deze berekening: ' + ", ".join(status_word(s) for s in statuses) + '.</p>')
    return "".join(h)


# ---------------------------------------------------------------- the site

class Site:
    def __init__(self, rules_mod, run_case, load_params, load_awir):
        self.rules_mod = rules_mod
        self.run_case = run_case
        self.load_params = load_params
        self.load_awir = load_awir
        self.zt = read_rules("law/zorgtoeslag/rules.md")
        self.awir = read_rules("law/awir/rules.md")
        self.params = {"zorgtoeslag": read_params("zorgtoeslag"), "awir": read_params("awir")}
        self.jaren = sorted(self.params["zorgtoeslag"], reverse=True)
        self.cases = read_cases()
        self.disc_intro, self.disc_rows, self.disc_head = read_discrepancies()
        self.ch_intro, self.ch_rows, self.ch_head = read_changes()
        self.rule_pages = {r["id"]: f"dossier/zorgtoeslag/{r['id']}/index.html" for r in self.zt["rules"]}
        self.rule_pages.update({r["id"]: f"dossier/awir/{r['id']}/index.html" for r in self.awir["rules"]})
        self.rule_by_id = {r["id"]: r for r in self.zt["rules"] + self.awir["rules"]}
        words = sorted({r["status"] for r in self.zt["rules"] + self.awir["rules"]})
        if words == ["draft"]:
            self.site_status = f'Elke regel heeft de status {status_word("draft")}: door niemand met vakkennis nagelezen. Geen enkele case is geverifieerd aan een echte beschikking.'
        else:
            self.site_status = "Status van de regels: " + ", ".join(status_word(w) for w in words) + " (zie het dossier)."
        self.results = {}
        for c in self.cases:
            if c["toeslag"] == "zorgtoeslag" and not c.get("niet_gecodeerd"):
                self.results[c["id"]] = self.run_case(c, self.rules_mod)
        self.written: list[str] = []

    def out(self, path: str, content: str) -> None:
        write(path, content)
        self.written.append(path)

    # ---- 1 Narekenen
    def form_html(self, rel: str, filled: dict | None = None, result_html: str = "") -> str:
        f = filled or {}
        jaar_gekozen = int(f.get("jaar", self.jaren[0]))
        jaren = "".join(
            f'<label class="keuze-vak{" gekozen" if j == jaar_gekozen else ""}"><input type="radio" name="jaar" value="{j}"{" checked" if j == jaar_gekozen else ""}> {j}</label>'
            for j in self.jaren)
        landen = set()
        for j in self.jaren:
            landen |= set(self.params["zorgtoeslag"][j].get("woonlandfactoren", {}).get("landen", {}))
        opties_l = "".join(f'<option value="{c}"{" selected" if f.get("woonland") == c else ""}>{esc(LANDNAMEN.get(c, c))}</option>'
                           for c in sorted(landen, key=lambda c: LANDNAMEN.get(c, c)))

        def radio(name, value, label, checked):
            return (f'<label class="keuze-vak{" gekozen" if checked else ""}"><input type="radio" name="{name}" value="{value}"'
                    f'{" checked" if checked else ""}> {label}</label>')

        def val(k):
            v = f.get(k)
            return f' value="{esc(str(v))}"' if v not in (None, "") else ""

        partner = f.get("partner")
        pv = f.get("partner_verzekerd")
        pv_val = "ja" if pv is True else "nee" if pv is False else "onbekend" if partner and pv is None and "partner_verzekerd" in f else None
        hj = f.get("hele_jaar_dezelfde_partner")
        avg = f.get("aanvrager_verdragsgerechtigd")
        pvg = f.get("partner_verdragsgerechtigd")
        js_off = ('<noscript><p class="nojs">Deze berekening gebeurt op uw eigen apparaat en heeft daarvoor JavaScript nodig. '
                  f'Zonder JavaScript kunt u <a href="{rel}dossier/zorgtoeslag/index.html">de regels zelf lezen en narekenen</a>.</p></noscript>')
        return f"""<h1 class="vraag" id="vraag">Hoeveel zorgtoeslag krijg ik in <span id="vraag-jaar">{jaar_gekozen}</span>?</h1>
<p class="lead">Vul drie dingen in. U ziet het bedrag, en stap voor stap hoe de wet daar komt, met bij elke stap het artikel.</p>
{privacy()}
<form id="invoer" autocomplete="off" novalidate action="" method="get">
<fieldset>
  <legend>Welk jaar?</legend>
  <div class="keuze" id="jaren">{jaren}</div>
</fieldset>

<div class="veld" id="veld-ti">
  <label class="veld-label" for="ti"><span class="veld-nr" aria-hidden="true">1</span>Uw toetsingsinkomen in dat jaar, in hele euro's</label>
  <p class="hulp" id="h-ti">Uw inkomen zoals de Belastingdienst het voor dat jaar vaststelt: meestal het verzamelinkomen uit uw aangifte, anders uw loon. Bijvoorbeeld 28000.</p>
  <p class="fout" id="f-ti" hidden></p>
  <div class="euro"><span class="euro-teken" aria-hidden="true">€</span><input class="invoer" id="ti" name="toetsingsinkomen_aanvrager" type="text" inputmode="numeric" autocomplete="off" aria-describedby="h-ti"{val("toetsingsinkomen_aanvrager")}></div>
</div>

<div class="veld" id="veld-partner"><fieldset>
  <legend class="veld-label"><span class="veld-nr" aria-hidden="true">2</span>Hebt u een toeslagpartner?</legend>
  <p class="hulp" id="h-partner">Een toeslagpartner is meestal degene met wie u getrouwd bent, een geregistreerd partnerschap hebt, of samen een kind of een koophuis hebt. Twijfelt u? Dan kijkt u op toeslagen.nl.</p>
  <p class="fout" id="f-partner" hidden></p>
  <div class="keuze">{radio("partner", "ja", "Ja", partner is True)}{radio("partner", "nee", "Nee", partner is False)}</div>
</fieldset></div>

<div class="veld alleen-partner" id="veld-tip"{"" if partner else " hidden"}>
  <label class="veld-label" for="tip"><span class="veld-nr" aria-hidden="true">2a</span>Het toetsingsinkomen van uw partner, in hele euro's</label>
  <p class="hulp" id="h-tip">Op dezelfde manier als uw eigen inkomen. Bijvoorbeeld 15000. Laat het leeg als uw partner geen inkomen had.</p>
  <p class="fout" id="f-tip" hidden></p>
  <div class="euro"><span class="euro-teken" aria-hidden="true">€</span><input class="invoer" id="tip" name="toetsingsinkomen_partner" type="text" inputmode="numeric" autocomplete="off" aria-describedby="h-tip"{val("toetsingsinkomen_partner")}></div>
</div>

<div class="veld alleen-partner" id="veld-pv"{"" if partner else " hidden"}><fieldset>
  <legend class="veld-label"><span class="veld-nr" aria-hidden="true">2b</span>Is uw partner in Nederland verzekerd voor zorg?</legend>
  <p class="hulp">Bijna iedereen die in Nederland woont of werkt is verzekerd. Militairen in actieve dienst en mensen die alleen in het buitenland verzekerd zijn, zijn het niet.</p>
  <div class="keuze">{radio("partner_verzekerd", "ja", "Ja", pv_val in ("ja", None))}{radio("partner_verzekerd", "nee", "Nee", pv_val == "nee")}{radio("partner_verzekerd", "onbekend", "Weet ik niet", pv_val == "onbekend")}</div>
</fieldset></div>

<div class="veld" id="veld-rg">
  <label class="veld-label" for="rg"><span class="veld-nr" aria-hidden="true">3</span>Uw vermogen op 1 januari, samen met uw partner als u die hebt, in hele euro's</label>
  <p class="hulp" id="h-rg">De rendementsgrondslag uit box 3: spaargeld, beleggingen en een tweede huis, min schulden, boven het heffingvrije vermogen. Bijvoorbeeld 4500. Laat het leeg als u het niet weet; dan slaat de berekening de vermogenstoets over en zegt zij dat.</p>
  <p class="fout" id="f-rg" hidden></p>
  <div class="euro"><span class="euro-teken" aria-hidden="true">€</span><input class="invoer" id="rg" name="rendementsgrondslag" type="text" inputmode="numeric" autocomplete="off" aria-describedby="h-rg"{val("rendementsgrondslag")}></div>
</div>

<details class="meer" id="meer"{" open" if (avg or pvg or hj is False) else ""}>
  <summary>Meer situaties: niet het hele jaar dezelfde partner, of wonen buiten Nederland</summary>
  <div class="veld alleen-partner"{"" if partner else " hidden"}><fieldset>
    <legend class="veld-label">Had u het hele jaar dezelfde toeslagpartner?</legend>
    <div class="keuze">{radio("hele_jaar_dezelfde_partner", "ja", "Ja", hj is not False)}{radio("hele_jaar_dezelfde_partner", "nee", "Nee", hj is False)}</div>
  </fieldset></div>
  <div class="veld"><fieldset>
    <legend class="veld-label">Woont u buiten Nederland en betaalt u een bijdrage aan het CAK voor zorg?</legend>
    <p class="hulp">De wet noemt u dan een verdragsgerechtigde (Zvw art. 69). Uw standaardpremie wordt dan vermenigvuldigd met de woonlandfactor van uw land.</p>
    <div class="keuze">{radio("aanvrager_verdragsgerechtigd", "nee", "Nee", not avg)}{radio("aanvrager_verdragsgerechtigd", "ja", "Ja", bool(avg))}</div>
  </fieldset></div>
  <div class="veld alleen-partner"{"" if partner else " hidden"}><fieldset>
    <legend class="veld-label">Geldt dat voor uw partner?</legend>
    <div class="keuze">{radio("partner_verdragsgerechtigd", "nee", "Nee", not pvg)}{radio("partner_verdragsgerechtigd", "ja", "Ja", bool(pvg))}</div>
  </fieldset></div>
  <div class="veld" id="veld-woonland">
    <label class="veld-label" for="woonland">Het woonland</label>
    <p class="fout" id="f-woonland" hidden></p>
    <select class="invoer" id="woonland" name="woonland" aria-describedby="f-woonland"><option value="">— kies een land —</option>{opties_l}</select>
  </div>
</details>

{privacy()}
<p class="knop-rij"><button type="submit" class="knop">Bereken mijn zorgtoeslag</button></p>
{js_off}
</form>

<section id="uitkomst" class="uitkomst" aria-live="polite" tabindex="-1"{"" if result_html else " hidden"}>{result_html}</section>"""

    def narekenen_script(self, rel: str) -> str:
        rule_pages = {k: rel + v for k, v in self.rule_pages.items()}
        import json
        return f"""<script src="{rel}zorgtoeslag-parameters.js"></script>
<script src="{rel}zorgtoeslag-regels.js"></script>
<script>
(function () {{
  "use strict";
  var Z = window.toeslagrecht.zorgtoeslag;
  var form = document.getElementById("invoer");
  var out = document.getElementById("uitkomst");
  var REGELPAGINA = {json.dumps(rule_pages)};
  var WOORD = {json.dumps(WOORD, ensure_ascii=False)};
  var NBSP = "\\u202f";

  function esc(s) {{ return String(s).replace(/[&<>"']/g, function (c) {{
    return {{ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }}[c]; }}); }}
  function radio(name) {{ var el = form.querySelector('input[name="' + name + '"]:checked'); return el ? el.value : null; }}
  function jaNee(v) {{ return v === "ja" ? true : v === "nee" ? false : null; }}
  function bedrag(v, hele) {{ return typeof v === "bigint" ? Z.eur(v, hele === false ? false : undefined).replace("€ ", "€" + NBSP) : esc(WOORD[v] || v); }}

  // the chosen box: a class beside the radio's own state, for browsers without :has()
  function markeer() {{
    form.querySelectorAll(".keuze-vak").forEach(function (l) {{
      var r = l.querySelector("input"); l.classList.toggle("gekozen", !!(r && r.checked));
    }});
    var j = radio("jaar"); if (j) document.getElementById("vraag-jaar").textContent = j;
    var p = radio("partner") === "ja";
    form.querySelectorAll(".alleen-partner").forEach(function (el) {{ el.hidden = !p; }});
  }}
  form.addEventListener("change", markeer);
  markeer();

  // errors: the field's border, a sentence under the help text, announced through aria-describedby
  function zetFout(id, tekst) {{
    var veld = document.getElementById("veld-" + id), msg = document.getElementById("f-" + id);
    var input = document.getElementById(id);
    if (tekst) {{
      veld.classList.add("in-fout"); msg.textContent = tekst; msg.hidden = false;
      if (input) {{ input.setAttribute("aria-invalid", "true"); input.setAttribute("aria-describedby", (document.getElementById("h-" + id) ? "h-" + id + " " : "") + "f-" + id); }}
      else veld.querySelectorAll("input").forEach(function (r) {{ r.setAttribute("aria-invalid", "true"); r.setAttribute("aria-describedby", "f-" + id); }});
    }} else {{
      veld.classList.remove("in-fout"); msg.textContent = ""; msg.hidden = true;
      if (input) {{ input.removeAttribute("aria-invalid"); input.setAttribute("aria-describedby", document.getElementById("h-" + id) ? "h-" + id : ""); }}
      else veld.querySelectorAll("input").forEach(function (r) {{ r.removeAttribute("aria-invalid"); r.removeAttribute("aria-describedby"); }});
    }}
  }}
  ["ti", "tip", "rg", "woonland"].forEach(function (id) {{
    document.getElementById(id).addEventListener("input", function () {{ zetFout(id, ""); }});
  }});
  form.querySelectorAll('input[name="partner"]').forEach(function (r) {{ r.addEventListener("change", function () {{ zetFout("partner", ""); }}); }});

  function getal(id, verplicht, naam) {{
    var raw = document.getElementById(id).value.trim().replace(/\\./g, "").replace(/\\s/g, "").replace(/,.*$/, "");
    if (raw === "") {{ if (verplicht) return {{ fout: "Vul " + naam + " in, in hele euro's. Bijvoorbeeld 28000." }}; return {{ waarde: null }}; }}
    if (!/^-?\\d+$/.test(raw)) return {{ fout: "Vul een bedrag in hele euro's in, zonder letters. Bijvoorbeeld 28000." }};
    return {{ waarde: raw }};
  }}

  function render(u, inv) {{
    var jaar = u.jaar;
    var h = [];
    if (u.vermogen === "geen_aanspraak") {{
      h.push('<p class="bedrag-intro">Naar de letter van de wet krijgt u in ' + jaar + '</p><p class="bedrag">€' + NBSP + '0 <span class="per-jaar">per jaar</span></p>');
      h.push('<p>Uw vermogen op 1 januari is hoger dan de grens van dat jaar. Dan is er volgens de wet het hele jaar geen zorgtoeslag.</p>');
    }} else if (u.tegemoetkoming === null) {{
      h.push('<p class="bedrag-intro">Naar de letter van de wet krijgt u in ' + jaar + '</p><p class="bedrag">niet bepaald door de wet</p>');
      h.push('<p>Voor deze situatie zegt de wettekst van ' + jaar + ' niet wat de uitkomst is. Hieronder staat waar de tekst ophoudt.</p>');
    }} else {{
      h.push('<p class="bedrag-intro">Naar de letter van de wet krijgt u in ' + jaar + '</p><p class="bedrag">' + bedrag(u.tegemoetkoming, false) + ' <span class="per-jaar">per jaar</span></p>');
      h.push('<p class="klein">Berekend ' + bedrag(u.aanspraak_jaar) + ' per jaar, afgerond op hele euro’s (Awir art. 14 lid 4). ' +
        'Per maand is dat ' + bedrag(u.aanspraak_maand) + '. Dienst Toeslagen betaalt hele euro’s per maand en komt dan op €' + NBSP +
        u.aanspraak_maand_afgerond_praktijk + '; waar dat afronden per maand in de wet staat, hebben wij niet gevonden.</p>');
    }}
    h.push('<p class="eerlijk">Dit is wat de wet zegt voor wat u invulde. Het is geen advies en geen aanvraag; aanvragen doet u op <a href="https://www.toeslagen.nl">toeslagen.nl</a>.</p>');
    var statussen = []; u.stappen.forEach(function (s) {{ if (statussen.indexOf(s.status) < 0) statussen.push(s.status); }}); statussen.sort();
    h.push('<p class="statusregel">Alle regels in deze berekening: ' + statussen.map(function (s) {{ return '<span class="status">' + esc(s) + '</span>'; }}).join(", ") + '.</p>');
    h.push('<ol class="stappen">');
    u.stappen.forEach(function (s, i) {{
      h.push('<li class="stap"><p class="stap-zin"><span class="stap-nr" aria-hidden="true">' + (i + 1) + '</span><span>' + esc(s.omschrijving) +
        ' <span class="getal">Uitkomst: ' + bedrag(s.uitkomst) + '.</span></span></p>' +
        '<p class="kantlijn"><a href="' + esc(REGELPAGINA[s.regel] || "{rel}dossier/index.html") + '">' + esc(s.artikel) + '</a> · ' +
        '<span class="status">' + esc(s.status) + '</span><span class="rekensom">' + esc(s.berekening) + '</span></p></li>');
    }});
    h.push('</ol>');
    if (u.onbepaald.length) {{
      h.push('<h2>Wat de wet hier niet bepaalt</h2><ul class="prose">');
      u.onbepaald.forEach(function (n) {{ h.push('<li class="klein">' + esc(n) + '</li>'); }});
      h.push('</ul>');
    }}
    h.push('<p class="slot klein">Klik op een artikel voor de wettekst, de versies per jaar en de voorbeelden die de regel testen.</p>');
    out.innerHTML = h.join("");
    out.hidden = false;
    out.focus();
  }}

  form.addEventListener("submit", function (ev) {{
    ev.preventDefault();
    var eerste = null;
    function fout(id, tekst) {{ zetFout(id, tekst); if (!eerste) eerste = id; }}
    ["ti", "tip", "rg", "woonland", "partner"].forEach(function (id) {{ zetFout(id, ""); }});
    var ti = getal("ti", true, "uw toetsingsinkomen"); if (ti.fout) fout("ti", ti.fout);
    var partnerKeuze = radio("partner");
    if (partnerKeuze === null) fout("partner", "Kies Ja of Nee.");
    var partner = partnerKeuze === "ja";
    var tip = partner ? getal("tip", false, "het inkomen van uw partner") : {{ waarde: null }}; if (tip.fout) fout("tip", tip.fout);
    var rg = getal("rg", false, "uw vermogen"); if (rg.fout) fout("rg", rg.fout);
    var inv = {{
      jaar: radio("jaar"),
      partner: partner,
      toetsingsinkomen_aanvrager: ti.waarde,
      toetsingsinkomen_partner: partner ? tip.waarde : null,
      partner_verzekerd: partner ? jaNee(radio("partner_verzekerd")) : null,
      rendementsgrondslag: rg.waarde,
      hele_jaar_dezelfde_partner: partner ? jaNee(radio("hele_jaar_dezelfde_partner")) : null,
      aanvrager_verdragsgerechtigd: radio("aanvrager_verdragsgerechtigd") === "ja",
      partner_verdragsgerechtigd: partner ? radio("partner_verdragsgerechtigd") === "ja" : null,
      woonland: document.getElementById("woonland").value || null
    }};
    if ((inv.aanvrager_verdragsgerechtigd || inv.partner_verdragsgerechtigd) && !inv.woonland) {{
      document.getElementById("meer").open = true;
      fout("woonland", "Kies het woonland: de woonlandfactor hangt ervan af (Wzt art. 4a).");
    }}
    if (eerste) {{
      out.hidden = true;
      var el = document.getElementById(eerste) || document.querySelector('#veld-' + eerste + ' input');
      if (el) el.focus();
      return;
    }}
    try {{
      render(Z.bereken(inv, PARAMETERS), inv);
    }} catch (e) {{
      zetFout("ti", "Er ging iets mis bij het rekenen: " + (e.message || String(e)));
      out.hidden = true;
    }}
  }});
}})();
</script>"""

    def narekenen(self) -> None:
        body = self.form_html("")
        html_ = page("Zorgtoeslag narekenen", body, "", "Narekenen", self.site_status,
                     "Reken uw zorgtoeslag na, stap voor stap, met het wetsartikel bij elke stap. Alles gebeurt op uw eigen telefoon of computer.",
                     scripts=self.narekenen_script(""))
        self.out("index.html", html_)
        self.out("zorgtoeslag.html", html_)

    def specimen(self, case_id: str) -> None:
        """site/specimens/narekenen-a.html: the form filled from one real case, the result rendered from rules.py."""
        c = next(x for x in self.cases if x["id"] == case_id)
        r = self.results[case_id]
        u = r["uitkomst"]
        inv = dict(c["invoer"]); inv["jaar"] = c["jaar"]
        rel = "../"
        result = amount_block(u, c["jaar"], rel) + step_rows(u.stappen, rel, self.rule_pages)
        if u.onbepaald:
            result += '<h2>Wat de wet hier niet bepaalt</h2><ul class="prose">' + "".join(f'<li class="klein">{esc(n)}</li>' for n in u.onbepaald) + "</ul>"
        result += '<p class="slot klein">Klik op een artikel voor de wettekst, de versies per jaar en de voorbeelden die de regel testen.</p>'
        body = (f'<p class="klein">Specimen van 2026-10-19: de voorpagina, ingevuld met voorbeeld <a href="{rel}dossier/voorbeelden/{case_id}/index.html">{case_id}</a> '
                f'({esc(c["bron"]["publicatie"])}), de uitkomst gerekend met de regels van {c["jaar"]}. Niet gelinkt vanaf de site.</p>'
                + self.form_html(rel, inv, result))
        self.out("specimens/narekenen-a.html", page("Specimen: narekenen (A, het formulier)", body, rel, "Narekenen", self.site_status,
                                                    head_extra='<meta name="robots" content="noindex">\n', scripts=self.narekenen_script(rel)))

    # ---- 2 Dossier
    def rule_entries(self, rules: list[dict], rel: str, folder: str) -> list[tuple[str, str, str]]:
        return [(f"{rel}dossier/{folder}/{r['id']}/index.html", esc(r["naam"]),
                 f'<span class="wet">{esc(r["artikel_kort"])}</span> · {status_word(r["status"])}') for r in rules]

    def dossier(self) -> None:
        rel = "../"
        body = ['<h1>Het dossier</h1>',
                '<p class="lead">Elke regel, elke versie van de wet, elk verschil en elk voorbeeld, als eigen pagina.</p>',
                '<h2>Zorgtoeslag</h2>', contents(self.rule_entries(self.zt["rules"], rel, "zorgtoeslag")),
                f'<p><a href="{rel}dossier/zorgtoeslag/index.html">Over deze regels: wat de encoding kan en wat niet</a></p>',
                '<h2>Awir: de gedeelde regels</h2>', contents(self.rule_entries(self.awir["rules"], rel, "awir")),
                f'<p><a href="{rel}dossier/awir/index.html">Over de gedeelde regels</a></p>',
                '<h2>Verder in het dossier</h2>',
                contents([(f"{rel}wet/index.html", "De wet, per jaar", " · ".join(str(j) for j in self.jaren)),
                          (f"{rel}dossier/voorbeelden/index.html", "De voorbeelden die de regels testen", f"{len(self.cases)} voorbeelden"),
                          (f"{rel}verschillen/index.html", "Waar de wettekst en Dienst Toeslagen verschillen", f"{len(self.disc_rows)} verschillen"),
                          (f"{rel}wet/wijzigingen/index.html", "De wijzigingen in de wet, per datum", f"{len(self.ch_rows)} wijzigingen"),
                          (f"{rel}wet/bronnen/index.html", "Elke tekst die is gelezen, met datum", ""),
                          (f"{rel}betwisten/index.html", "Iets betwisten", ""),
                          (f"{rel}insturen/index.html", "Een echte beschikking insturen, anoniem", "")])]
        self.out("dossier/index.html", page("Het dossier", "\n".join(body), rel, "Dossier", self.site_status,
                                            "Elke regel, elke versie van de wet, elk verschil en elk voorbeeld, als eigen pagina."))
        for src, folder, naam in ((self.zt, "zorgtoeslag", "Zorgtoeslag"), (self.awir, "awir", "Awir: de gedeelde regels")):
            rel2 = "../../"
            b = [f'<h1>{esc(naam)}: de regels</h1>',
                 '<div class="prose">', md(src["preamble"], rel2, shift=1), '</div>',
                 '<h2>De regels</h2>', contents(self.rule_entries(src["rules"], rel2, folder))]
            if src["rest"]:
                b += ['<div class="prose">', md(src["rest"], rel2, shift=0), '</div>']
            self.out(f"dossier/{folder}/index.html", page(f"{naam}: de regels", "\n".join(b), rel2, "Dossier", self.site_status))
            for r in src["rules"]:
                self.rule_page(r, folder)

    def rule_page(self, r: dict, folder: str) -> None:
        rel = "../../../"
        v = r["velden"]
        b = [f'<h1>{esc(r["naam"])}</h1>', f'<p class="statusregel">Status: {status_word(r["status"])} · regel <code>{esc(r["id"])}</code></p>']
        b.append(citation(inline(v.get("Artikel", ""), rel),
                          f'Het artikel zoals de regel het aanhaalt · {status_word(r["status"])}', anchor="artikel"))
        if v.get("Gewoon Nederlands"):
            b.append(f'<p><strong>In gewoon Nederlands:</strong> {inline(v["Gewoon Nederlands"], rel)}</p>')
        if v.get("Code"):
            b.append(f'<h2>De berekening</h2><p>{inline(v["Code"], rel)}</p>')
        if v.get("Discretie"):
            b.append(f'<h2>Waar de wet ruimte laat</h2><p>{inline(v["Discretie"], rel)}</p>')
        for k, val in v.items():
            if k not in ("Artikel", "Status", "Gewoon Nederlands", "Code", "Discretie"):
                b.append(f'<h2>{esc(k)}</h2><p>{inline(val, rel)}</p>')
        # versions per year
        b.append('<h2>Versies per jaar</h2>')
        ents = []
        for j in self.jaren:
            par = self.params["zorgtoeslag"][j] if folder == "zorgtoeslag" else self.params["awir"].get(j, {})
            noot = esc(par.get("versie", par.get("bron", ""))) if isinstance(par, dict) else ""
            ents.append((f"{rel}wet/{j}/index.html", f"De wet in {j}", f'<span class="wet">{noot}</span>' if noot else ""))
        b.append(contents(ents))
        # cases that exercise the rule
        b.append('<h2>Voorbeelden die deze regel testen</h2>')
        ents = []
        tabel: dict[int, list] = {}
        for c in self.cases:
            res = self.results.get(c["id"])
            if res and any(s.regel == r["id"] for s in res["uitkomst"].stappen):
                if "-tab-" in c["id"]:
                    tabel.setdefault(c["jaar"], []).append(res["ok"])
                    continue
                ents.append((f"{rel}dossier/voorbeelden/{c['id']}/index.html", esc(c["id"]),
                             f'{c["jaar"]} · {esc(c["bron"]["type"])} · {"PASS" if res["ok"] else "FAIL"}'))
        for j, oks in sorted(tabel.items(), reverse=True):
            ents.append((f"{rel}dossier/voorbeelden/index.html#jaar-{j}", f"De tabellen van de Belastingdienst {j}",
                         f'{len(oks)} rijen · published · {sum(oks)} PASS, {len(oks) - sum(oks)} FAIL'))
        b.append(contents(ents) if ents else "<p>Nog geen.</p>")
        # discrepancies and disputes naming the rule
        b.append('<h2>Verschillen en geschillen</h2>')
        ents = []
        for row in self.disc_rows:
            if r["id"] in row.get("Rule(s)", ""):
                n = row.get("#", "").strip()
                ents.append((f"{rel}verschillen/{n}/index.html", f"Verschil #{esc(n)}", f'{esc(row.get("Date", ""))} · <code>{esc(row.get("Status", "").split(" ")[0].strip("`"))}</code>'))
        b.append(contents(ents) if ents else "<p>Nog geen.</p>")
        self.out(f"dossier/{folder}/{r['id']}/index.html",
                 page(r["naam"], "\n".join(b), rel, "Dossier", self.site_status, f"Regel {r['id']}: {r['naam']}, met het artikel, de status en de voorbeelden."))

    # ---- cases
    def voorbeelden(self) -> None:
        rel = "../../"
        b = ['<h1>De voorbeelden</h1>',
             '<p class="lead">Elk voorbeeld is één situatie met een bekende uitkomst, uit een publicatie van de Dienst Toeslagen of de Belastingdienst, of door het project gemaakt om een regel te testen. De regels worden tegen elk voorbeeld gecontroleerd.</p>',
             '<div class="prose">', md(strip_title((ROOT / "cases" / "README.md").read_text(encoding="utf-8")), rel), '</div>']
        for j in self.jaren:
            cs = [c for c in self.cases if c["jaar"] == j]
            if not cs:
                continue
            b.append(f'<h2 id="jaar-{j}">{j}</h2>')
            ents = []
            for c in cs:
                res = self.results.get(c["id"])
                uit = ("PASS" if res["ok"] else "FAIL") if res else "niet gedraaid"
                ents.append((f"{rel}dossier/voorbeelden/{c['id']}/index.html", esc(c["id"]), f'{esc(c["bron"]["type"])} · {uit}'))
            b.append(contents(ents))
        self.out("dossier/voorbeelden/index.html", page("De voorbeelden", "\n".join(b), rel, "Dossier", self.site_status))
        for c in self.cases:
            self.case_page(c)

    def case_page(self, c: dict) -> None:
        rel = "../../../"
        inv = c["invoer"]
        b = [f'<h1>Voorbeeld {esc(c["id"])}</h1>',
             f'<p class="statusregel">{esc(c["toeslag"])} · {c["jaar"]} · bron: <code>{esc(c["bron"]["type"])}</code> · '
             + ("geverifieerd" if c.get("verified") else "niet geverifieerd") + '</p>',
             '<h2>De bron</h2>', f'<p>{inline(c["bron"].get("publicatie", ""), rel)}</p>']
        if c["bron"].get("url"):
            b.append(f'<p><a href="{esc(c["bron"]["url"])}">{esc(c["bron"]["url"])}</a> (opgehaald {esc(str(c["bron"].get("opgehaald", "")))})</p>')
        b.append('<h2>Wat is ingevuld</h2><dl class="feiten">')
        for k, v in inv.items():
            b.append(f'<dt>{esc(k)}</dt><dd>{esc("—" if v is None else str(v))}</dd>')
        b.append('</dl>')
        res = self.results.get(c["id"])
        b.append('<h2>Verwacht en berekend</h2>')
        if c.get("niet_gecodeerd"):
            b.append(f'<p>Niet gedraaid: {inline(str(c["niet_gecodeerd"]), rel)}</p>')
        elif res:
            b.append('<div class="prose"><table><thead><tr><th>Veld</th><th>Verwacht (bron)</th><th>Berekend (wettekst)</th><th>Gelijk</th></tr></thead><tbody>')
            for k, e, g, m in res["rows"]:
                b.append(f'<tr><td data-h="Veld"><code>{esc(k)}</code></td><td data-h="Verwacht (bron)" class="getal">{esc(e)}</td><td data-h="Berekend (wettekst)" class="getal">{esc(g)}</td><td data-h="Gelijk">{"ja" if m else "NEE"}</td></tr>')
            b.append('</tbody></table></div>')
        if c.get("opmerking"):
            b.append(f'<p>{inline(str(c["opmerking"]), rel)}</p>')
        if res:
            u = res["uitkomst"]
            b.append('<h2>Stap voor stap, volgens de wettekst</h2>')
            b.append('<section class="uitkomst">' + amount_block(u, c["jaar"], rel) + step_rows(u.stappen, rel, self.rule_pages) + '</section>')
            if u.onbepaald:
                b.append('<h2>Wat de wet hier niet bepaalt</h2><ul class="prose">' + "".join(f'<li class="klein">{esc(n)}</li>' for n in u.onbepaald) + '</ul>')
        self.out(f"dossier/voorbeelden/{c['id']}/index.html", page(f"Voorbeeld {c['id']}", "\n".join(b), rel, "Dossier", self.site_status))

    # ---- 3 Wet
    def wet(self) -> None:
        rel = "../"
        ents = []
        for j in self.jaren:
            par = self.params["zorgtoeslag"][j]
            ents.append((f"{rel}wet/{j}/index.html", f"De wet in {j}", f'<span class="wet">{esc(par.get("versie", ""))}</span>'))
        b = ['<h1>De wet, per jaar</h1>',
             '<p class="lead">Elk bedrag en elk percentage zoals het dat jaar gold, met het artikel en de bron erbij.</p>',
             contents(ents),
             '<h2>Verder</h2>',
             contents([(f"{rel}wet/wijzigingen/index.html", "De wijzigingen in de wet, per datum", f"{len(self.ch_rows)} wijzigingen"),
                       (f"{rel}wet/bronnen/index.html", "Elke tekst die is gelezen, met datum", "")])]
        self.out("wet/index.html", page("De wet, per jaar", "\n".join(b), rel, "Wet", self.site_status))
        for j in self.jaren:
            self.year_page(j)
        rel2 = "../../"
        b = ['<h1>De wijzigingen in de wet</h1>', '<div class="prose">', md(self.ch_intro, rel2),
             md("\n".join(["| " + " | ".join(self.ch_head) + " |", "|" + "---|" * len(self.ch_head)] +
                          ["| " + " | ".join(r.get(h, "") for h in self.ch_head) + " |" for r in self.ch_rows]), rel2),
             '</div>']
        self.out("wet/wijzigingen/index.html", page("De wijzigingen in de wet", "\n".join(b), rel2, "Wet", self.site_status))
        b = ['<h1>De bronnen</h1>', '<div class="prose">', md(strip_title((ROOT / "law" / "SOURCES.md").read_text(encoding="utf-8")), rel2, shift=1), '</div>']
        self.out("wet/bronnen/index.html", page("De bronnen", "\n".join(b), rel2, "Wet", self.site_status))

    def year_page(self, j: int) -> None:
        rel = "../../"
        b = [f'<h1>De wet in {j}</h1>']
        par = self.params["zorgtoeslag"][j]
        b.append(f'<p class="lead"><span class="wet">{esc(par.get("versie", ""))}</span></p>')
        b.append('<p class="klein">Deze pagina toont wat het dossier van dat jaar vastlegt: elk bedrag en elk percentage met zijn artikel, zijn bron en, waar het dossier die heeft, de tekst van het artikel. De volledige wettekst staat op wetten.overheid.nl; de link staat bij elk onderdeel.</p>')
        keys = []
        for toeslag, naam in (("zorgtoeslag", "Wet op de zorgtoeslag"), ("awir", "Awir")):
            p = self.params[toeslag].get(j)
            if not p:
                continue
            for k, v in p.items():
                if isinstance(v, dict) and "artikel" in v:
                    keys.append((toeslag, naam, k, v))
        b.append('<h2>Inhoud</h2><ul class="prose">' + "".join(f'<li><a href="#{esc(k)}">{esc(v["artikel"].split(" jo.")[0].split(" (")[0])}</a> — <code>{esc(k)}</code></li>' for _, _, k, v in keys) + '</ul>')
        notes = {k: v for k, v in par.items() if not isinstance(v, dict) and k not in ("jaar", "status", "geraadpleegd", "versie")}
        if notes:
            b.append('<h2>Bij dit jaar</h2><dl class="feiten">' + "".join(f'<dt><code>{esc(k)}</code></dt><dd>{esc(str(v))}</dd>' for k, v in notes.items()) + '</dl>')
        last = None
        for toeslag, naam, k, v in keys:
            if naam != last:
                b.append(f'<h2>{esc(naam)}</h2>'); last = naam
            if "landen" in v:
                tekst = f'{esc(v["artikel"])}'
                rows = "".join(f'<tr><td data-h="Land">{esc(LANDNAMEN.get(c, c))}</td><td data-h="Code"><code>{esc(c)}</code></td><td data-h="Woonlandfactor" class="getal">{esc(str(f))}</td></tr>' for c, f in v["landen"].items())
                extra = f'<div class="prose"><table><thead><tr><th>Land</th><th>Code</th><th>Woonlandfactor</th></tr></thead><tbody>{rows}</tbody></table></div>'
            else:
                waarde = str(v.get("waarde", ""))
                eenheid = v.get("eenheid", "")
                if eenheid == "procent":
                    w = waarde.replace(".", ",") + "%"
                elif eenheid == "euro":
                    w = "€ " + waarde
                else:
                    try:
                        w = eur(D(waarde), cents="." in waarde)
                    except Exception:
                        w = waarde
                tekst = esc(v["tekst"]) if v.get("tekst") else f'{esc(v["artikel"])}: <span class="getal">{w}</span>'
                extra = "" if not v.get("tekst") else f'<p>Waarde in het dossier: <span class="getal">{w}</span>.</p>'
            foot = f'{esc(v["artikel"])} · {j} · {status_word(str(par.get("status", "draft")))}'
            if v.get("bron"):
                foot += f'<br>Bron: {esc(v["bron"])}'
            if v.get("url"):
                foot += f' · <a href="{esc(v["url"])}">tekst</a>'
            if v.get("opmerking"):
                foot += f'<br>{esc(v["opmerking"])}'
            b.append(citation(tekst, foot, anchor=k, cite=v.get("url", "")))
            if extra:
                b.append(extra)
        rows = [r for r in self.ch_rows if r.get("Effective", "").startswith(str(j))]
        b.append(f'<h2>Wijzigingen die in {j} ingingen</h2>')
        if rows:
            b.append('<div class="prose">' + md("\n".join(["| " + " | ".join(self.ch_head) + " |", "|" + "---|" * len(self.ch_head)] +
                                                   ["| " + " | ".join(r.get(h, "") for h in self.ch_head) + " |" for r in rows]), rel) + '</div>')
        else:
            b.append('<p>Nog geen.</p>')
        self.out(f"wet/{j}/index.html", page(f"De wet in {j}", "\n".join(b), rel, "Wet", self.site_status))

    # ---- 4 Verschillen
    def verschillen(self) -> None:
        rel = "../"
        b = ['<h1>Waar de wettekst en Dienst Toeslagen verschillen</h1>',
             '<p class="lead">Een verschil is elke situatie waarin de wettekst en een uitkomst van de overheid niet hetzelfde bedrag geven. Elk verschil blijft staan, met beide bronnen.</p>']
        if self.disc_rows:
            ents = []
            for row in self.disc_rows:
                n = row.get("#", "").strip()
                st = row.get("Status", "").split(" ")[0].strip("`")
                ents.append((f"{rel}verschillen/{n}/index.html", f"Verschil #{esc(n)} · {esc(row.get('Toeslag / year', ''))}",
                             f'{esc(row.get("Date", ""))} · <code>{esc(st)}</code>'))
            b.append(contents(ents))
            b.append('<p class="klein">Het logboek zelf is in het Engels, zoals het dossier het bijhoudt.</p>')
            b.append('<div class="prose">' + md(self.disc_intro, rel) + '</div>')
        else:
            b.append('<p>Nog geen verschil vastgesteld.</p>')
        self.out("verschillen/index.html", page("Waar de wettekst en Dienst Toeslagen verschillen", "\n".join(b), rel, "Dossier", self.site_status))
        rel2 = "../../"
        for row in self.disc_rows:
            n = row.get("#", "").strip()
            b = [f'<h1>Verschil #{esc(n)}</h1>',
                 f'<p class="statusregel">{esc(row.get("Date", ""))} · {esc(row.get("Toeslag / year", ""))} · status <code>{esc(row.get("Status", "").split(" ")[0].strip("`"))}</code></p>',
                 '<p class="klein">De tekst hieronder is in het Engels, zoals het logboek het bijhoudt.</p>']
            rule_ids = re.findall(r"`([a-z0-9-]+)`", row.get("Rule(s)", ""))
            for rid in rule_ids:
                r = self.rule_by_id.get(rid)
                if r:
                    b.append(citation(inline(r["artikel"], rel2),
                                      f'<a href="{rel2}{self.rule_pages[rid]}">{esc(r["naam"])}</a> · <code>{esc(rid)}</code> · {status_word(r["status"])}'))
            b.append('<dl class="feiten">')
            for h in self.disc_head:
                if h == "#":
                    continue
                b.append(f'<dt>{esc(h)}</dt><dd>{inline(row.get(h, ""), rel2)}</dd>')
            b.append('</dl>')
            self.out(f"verschillen/{n}/index.html", page(f"Verschil #{n}", "\n".join(b), rel2, "Dossier", self.site_status))

    # ---- 5 Betwisten, 6 Insturen
    def protocol(self, path: str, src: str, title: str, lead: str, template: str, uitleg: str) -> None:
        rel = "../"
        text = strip_title((ROOT / src).read_text(encoding="utf-8"))
        b = [f'<h1>{esc(title)}</h1>', f'<p class="lead">{lead}</p>',
             '<div class="prose">', md(text, rel, shift=1), '</div>',
             '<h2>De tekst om te sturen</h2>', f'<p>{uitleg}</p>',
             f'<label class="veld-label" for="tekst">Uw tekst</label>',
             f'<textarea class="tekstvak" id="tekst" rows="14" spellcheck="false">{esc(template)}</textarea>',
             '<p class="klein">Deze pagina slaat niets op en stuurt niets. U kopieert de tekst zelf.</p>']
        self.out(path, page(title, "\n".join(b), rel, "Dossier", self.site_status))

    def betwisten(self) -> None:
        template = ("1. The rule's or entry's permanent id:\n\n2. What is contested, quoted:\n\n3. The alternative, stated as precisely as the rule states itself:\n\n"
                    "4. At least one source (an article, a beleidsregel, an ECLI, or an anonymised decision):\n\n5. Optionally, a case that would show the difference:\n\n"
                    "Name (real name; role or affiliation if you wish):\n")
        self.protocol("betwisten/index.html", "DISPUTES.md", "Iets betwisten",
                      "Iedereen mag een regel betwisten, onder eigen naam en met een bron. Het protocol hieronder is in het Engels, zoals het dossier het bijhoudt.",
                      template, "Kopieer de tekst, vul de vijf punten in en stuur die naar het project. Hoe u het project bereikt, staat op de pagina Over.")

    def insturen(self) -> None:
        template = ("toeslag:\njaar:\ninvoer:\n  partner:\n  toetsingsinkomen_aanvrager:\n  toetsingsinkomen_partner:\n  partner_verzekerd:\n  rendementsgrondslag:\n"
                    "verwacht (bedragen op de beschikking):\n  aanspraak_jaar:\n  aanspraak_maand:\nbron: beschikking van Dienst Toeslagen, datum:\n"
                    "\nLaat weg: naam, BSN, adres, naam van de partner, kenmerk, geboortedatum.\n")
        self.protocol("insturen/index.html", "CASES.md", "Een echte beschikking insturen, anoniem",
                      "Laat weg: uw naam, uw BSN, uw adres, de naam van uw partner, het kenmerk van de brief en uw geboortedatum. Het protocol hieronder is in het Engels, zoals het dossier het bijhoudt.",
                      template, "Kopieer de tekst, vul de bedragen van uw beschikking in en stuur die naar het project. Hoe u het project bereikt, staat op de pagina Over.")

    # ---- 7 Over
    def over(self) -> None:
        rel = "../"
        b = ['<h1>Over toeslagrecht</h1>',
             '<h2>Wat dit is, en wat niet</h2>',
             '<p>Hier staat de wet op de zorgtoeslag als rekenregels. U vult drie dingen in en ziet wat de wet zegt, stap voor stap, met bij elke stap het artikel. Dit is een controle, geen advies. De site kent uw hele situatie niet. Aanvragen doet u op <a href="https://www.toeslagen.nl">toeslagen.nl</a>.</p>',
             '<p>Achter de berekening ligt het dossier: de wet zoals zij elk jaar gold, de voorbeelden waartegen de regels zijn getest, en elk verschil tussen de wettekst en wat Dienst Toeslagen doet.</p>',
             '<h2>Wie dit maakt, en hoe</h2>',
             '<p>Het project wordt bestuurd door twee zetels: een eigenaar, Andries, en een AI-systeem dat het dagelijkse werk doet. Het AI-systeem leest de wet, zet die om in regels, test de regels tegen voorbeelden en houdt het dossier bij. Alles wat het doet, staat openbaar in de bron.</p>',
             '<h2>Wat de statuswoorden betekenen</h2>',
             '<p>Elke regel draagt één woord dat zegt hoe ver zij is nagekeken. De woorden komen uit het dossier en worden niet vertaald.</p>',
             '<dl class="feiten">',
             f'<dt>{status_word("draft")}</dt><dd>Geschreven, maar door niemand met vakkennis nagelezen tegen het artikel.</dd>',
             f'<dt>{status_word("tested")}</dt><dd>De regel klopt met elk geverifieerd voorbeeld dat haar raakt.</dd>',
             f'<dt>{status_word("reviewed")}</dt><dd>Eén mens met vakkennis heeft de regel onder eigen naam tegen het artikel gelezen.</dd>',
             f'<dt>{status_word("established")}</dt><dd>Twee onafhankelijke mensen met vakkennis hebben dat gedaan.</dd>',
             f'<dt>{status_word("contested")}</dt><dd>Iemand betwist de regel met een bron, en de zaak is nog niet beslist. De site toont dan beide lezingen.</dd>',
             '</dl>',
             '<h2>Licenties</h2>',
             '<p>De code is vrij onder de MIT-licentie. De regels, de bedragen, de voorbeelden en het logboek van verschillen zijn vrij onder CC BY-SA 4.0. Er is geen reclame, geen abonnement en geen account. Er wordt niets over u bijgehouden.</p>',
             '<h2>Contact</h2>',
             '<p>Wilt u een regel betwisten of een beschikking insturen? Lees eerst <a href="' + rel + 'betwisten/index.html">Iets betwisten</a> of <a href="' + rel + 'insturen/index.html">Een beschikking insturen</a>. Stuur uw tekst daarna via de bron hieronder, als een issue. Een e-mailadres volgt.</p>',
             '<h2>De bron</h2>',
             f'<p>Alle bestanden van het project, met de geschiedenis van elke wijziging: <a href="{REPO}">github.com/TheAndries/toeslagrecht</a>.</p>']
        self.out("over/index.html", page("Over toeslagrecht", "\n".join(b), rel, "Over", self.site_status))

    def build(self, specimen_case: str = "zt-2026-pub-007") -> list[str]:
        self.narekenen()
        self.dossier()
        self.voorbeelden()
        self.wet()
        self.verschillen()
        self.betwisten()
        self.insturen()
        self.over()
        self.specimen(specimen_case)
        return self.written
