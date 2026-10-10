#!/usr/bin/env python3
"""toeslagrecht build pipeline: law/ + cases/ -> tests -> site/.

  python3 tools/build.py check   # run every case through the Python encoding AND the browser encoding
                                 # (site/zorgtoeslag-regels.js via node, if present); write law/<toeslag>/tests/report.md
  python3 tools/build.py build   # write site/zorgtoeslag-parameters.js from law/*/parameters, render site/
  python3 tools/build.py all

Exit code 1 on `check` only if a *verified* case fails (LAW.md: the encoding is not committed
unless every verified case passes). Published/synthetic cases are checks: reported, never blocking.
Licence: MIT (LICENSE). Stdlib + PyYAML.
"""
from __future__ import annotations

import html
import importlib.util
import json
import re
import shutil
import subprocess
import sys
from datetime import date
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
D = Decimal
TODAY = date.today().isoformat()


def load_rules(toeslag: str):
    spec = importlib.util.spec_from_file_location(f"{toeslag}_rules", ROOT / "law" / toeslag / "rules.py")
    mod = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = mod
    spec.loader.exec_module(mod)
    return mod


def load_params(toeslag: str, jaar: int) -> dict:
    p = ROOT / "law" / toeslag / "parameters" / f"{jaar}.yaml"
    with open(p, encoding="utf-8") as f:
        par = yaml.safe_load(f)
    if toeslag == "zorgtoeslag":
        par.setdefault("versie", f"BWBR0018451, geldend van 01-01-{jaar}")
    return par


def load_awir(jaar: int) -> dict:
    """The Awir shared layer's parameters for the year (art. 14 lid 4-5 among them); {} if none."""
    p = ROOT / "law" / "awir" / "parameters" / f"{jaar}.yaml"
    if not p.exists():
        return {}
    with open(p, encoding="utf-8") as f:
        return yaml.safe_load(f)


def load_cases() -> list[dict]:
    out = []
    for p in sorted((ROOT / "cases").glob("*.yaml")):
        with open(p, encoding="utf-8") as f:
            c = yaml.safe_load(f)
        c["_file"] = p.name
        out.append(c)
    return out


def dec(v):
    return None if v is None else D(str(v))


def cents(v: Decimal) -> Decimal:
    return v.quantize(D("0.01"), rounding=ROUND_HALF_UP)


def run_case(c: dict, rules) -> dict:
    inv = c["invoer"]
    par = load_params(c["toeslag"], c["jaar"])
    u = rules.bereken(
        jaar=c["jaar"], par=par,
        toetsingsinkomen_aanvrager=dec(inv["toetsingsinkomen_aanvrager"]),
        partner=bool(inv.get("partner")),
        toetsingsinkomen_partner=dec(inv.get("toetsingsinkomen_partner")),
        partner_verzekerd=inv.get("partner_verzekerd"),
        rendementsgrondslag=dec(inv.get("rendementsgrondslag")),
        hele_jaar_dezelfde_partner=inv.get("hele_jaar_dezelfde_partner"),
        awir=load_awir(c["jaar"]),
        aanvrager_verdragsgerechtigd=bool(inv.get("aanvrager_verdragsgerechtigd")),
        partner_verdragsgerechtigd=inv.get("partner_verdragsgerechtigd"),
        woonland=inv.get("woonland"),
    )
    got = {
        "normpremie": next((s.uitkomst for s in u.stappen if s.regel == "zt-2026-art2-2"), None),
        "standaardpremie_totaal": next((s.uitkomst for s in u.stappen if s.regel == "zt-2026-art4a"), None),
        "aanspraak_jaar": u.aanspraak_jaar,
        "tegemoetkoming": u.tegemoetkoming,
        "aanspraak_maand": u.aanspraak_maand,
        "aanspraak_maand_afgerond_praktijk": u.aanspraak_maand_afgerond_praktijk,
    }
    rows = []
    ok = True
    for k, exp in c["verwacht"].items():
        g = got.get(k)
        if k == "aanspraak_maand_afgerond_praktijk":
            match = (g == int(exp))
            rows.append((k, str(exp), str(g), match))
        else:
            gc = None if g is None else cents(g)
            match = (gc is not None and gc == cents(D(str(exp))))
            rows.append((k, str(cents(D(str(exp)))), "—" if g is None else f"{gc} (exact {g})", match))
        ok = ok and match
    return {"ok": ok, "rows": rows, "uitkomst": u}



# ---------------------------------------------------------------- browser encoding

RULE_HEADING = re.compile(r"^## ([a-z0-9-]+) — (.+)$")


def rule_anchors() -> dict[str, dict]:
    """Rule id -> {titel, bestand, anker}: the heading of each rule in law/*/rules.md, with the anchor
    GitHub gives it, so the checker can link every step to its rule (DESIGN.md §9)."""
    out = {}
    for bestand in ("law/zorgtoeslag/rules.md", "law/awir/rules.md"):
        for line in (ROOT / bestand).read_text(encoding="utf-8").splitlines():
            m = RULE_HEADING.match(line)
            if m:
                heading = f"{m.group(1)} — {m.group(2)}".lower()
                anker = re.sub(r"[^\w\s-]", "", heading, flags=re.UNICODE).replace(" ", "-")
                out[m.group(1)] = {"titel": m.group(2), "bestand": bestand, "anker": anker}
    return out


def export_parameters() -> Path:
    """site/zorgtoeslag-parameters.js: every parameter file, verbatim, as one JS object. Generated; the
    yaml files under law/ are the source and carry each number's article."""
    data = {"gegenereerd": TODAY, "zorgtoeslag": {}, "awir": {}, "regels": rule_anchors()}
    for p in sorted((ROOT / "law" / "zorgtoeslag" / "parameters").glob("*.yaml")):
        data["zorgtoeslag"][int(p.stem)] = load_params("zorgtoeslag", int(p.stem))
    for p in sorted((ROOT / "law" / "awir" / "parameters").glob("*.yaml")):
        data["awir"][int(p.stem)] = load_awir(int(p.stem))
    js = ("/* Gegenereerd door tools/build.py op " + TODAY + " uit law/zorgtoeslag/parameters/*.yaml en "
          "law/awir/parameters/*.yaml. Niet bewerken: de yaml-bestanden zijn de bron en dragen bij elk getal "
          "zijn artikel. Licentie: CC BY-SA 4.0 (LICENSE-DATA). */\n"
          "var PARAMETERS = " + json.dumps(data, ensure_ascii=False, indent=1, default=str) + ";\n")
    out = ROOT / "site" / "zorgtoeslag-parameters.js"
    out.write_text(js, encoding="utf-8")
    return out


def parity(cases: list[dict], rules) -> tuple[list[str], int]:
    """Run every runnable case through the browser encoding (node) and compare with the Python encoding:
    the four amounts to the cent, the practice month, the vermogen outcome, the rule ids of the steps, the
    number of undetermined notes. Returns (report lines, number of mismatches). Skipped with a note if node
    is missing."""
    node = shutil.which("node")
    if not node:
        return ["Browser encoding: node not found; parity not checked."], 0
    export_parameters()
    runnable = [c for c in cases if c["toeslag"] == "zorgtoeslag" and not c.get("niet_gecodeerd")]
    payload = json.dumps([{"id": c["id"], "invoer": {**c["invoer"], "jaar": c["jaar"]}} for c in runnable])
    r = subprocess.run([node, str(ROOT / "tools" / "parity.js")], input=payload, capture_output=True, text=True)
    if r.returncode != 0:
        return [f"Browser encoding: node failed: {r.stderr.strip()}"], 1
    js = {x["id"]: x for x in json.loads(r.stdout)}
    lines, bad = [], 0
    for c in runnable:
        py = run_case(c, rules)["uitkomst"]
        j = js[c["id"]]
        if "fout" in j:
            bad += 1
            lines.append(f"- `{c['id']}`: browser encoding raised: {j['fout']}")
            continue
        u = j["uitkomst"]

        def same(a, b):
            if a is None or b is None:
                return a is None and b is None
            return cents(D(str(a))) == cents(D(str(b)))

        diffs = []
        for k in ("aanspraak_jaar", "tegemoetkoming", "aanspraak_maand"):
            if not same(getattr(py, k), u[k]):
                diffs.append(f"{k}: py {getattr(py, k)} js {u[k]}")
        if py.aanspraak_maand_afgerond_praktijk != u["aanspraak_maand_afgerond_praktijk"]:
            diffs.append(f"praktijk: py {py.aanspraak_maand_afgerond_praktijk} js {u['aanspraak_maand_afgerond_praktijk']}")
        if py.vermogen != u["vermogen"]:
            diffs.append(f"vermogen: py {py.vermogen} js {u['vermogen']}")
        if [s.regel for s in py.stappen] != [s["regel"] for s in u["stappen"]]:
            diffs.append("steps differ: py " + ",".join(s.regel for s in py.stappen) + " js " + ",".join(s["regel"] for s in u["stappen"]))
        else:
            for sp, sj in zip(py.stappen, u["stappen"]):
                a, b = sp.uitkomst, sj["uitkomst"]
                if isinstance(a, Decimal):
                    if not same(a, b):
                        diffs.append(f"step {sp.regel}: py {a} js {b}")
                elif str(a) != str(b):
                    diffs.append(f"step {sp.regel}: py {a} js {b}")
        if len(py.onbepaald) != len(u["onbepaald"]):
            diffs.append(f"onbepaald: py {len(py.onbepaald)} js {len(u['onbepaald'])}")
        if diffs:
            bad += 1
            lines.append(f"- `{c['id']}`: " + "; ".join(diffs))
    head = (f"Browser encoding (`site/zorgtoeslag-regels.js`, node {subprocess.run([node, '--version'], capture_output=True, text=True).stdout.strip()}): "
            f"{len(runnable)} cases compared with the Python encoding, {len(runnable) - bad} identical, {bad} different.")
    return [head] + lines, bad


def check() -> int:
    rules = load_rules("zorgtoeslag")
    cases = load_cases()
    lines = [f"# Zorgtoeslag — test report, generated {TODAY} by tools/build.py", "",
             "Generated file; do not edit. Verified cases are tests (blocking); published and synthetic",
             "cases are checks (reported). Every failing check is a discrepancy in `DISCREPANCIES.md`.", ""]
    blocking_fail = 0
    counts = {"pass": 0, "fail": 0, "skip": 0}
    for c in cases:
        if c["toeslag"] != "zorgtoeslag":
            continue
        kind = "TEST (verified)" if c.get("verified") else f"check ({c['bron']['type']})"
        if c.get("niet_gecodeerd"):
            counts["skip"] += 1
            lines += [f"## {c['id']} — SKIPPED — {kind}", "", f"Not run: {c['niet_gecodeerd']}", ""]
            continue
        r = run_case(c, rules)
        status = "PASS" if r["ok"] else "FAIL"
        counts["pass" if r["ok"] else "fail"] += 1
        if not r["ok"] and c.get("verified"):
            blocking_fail += 1
        lines += [f"## {c['id']} — {status} — {kind}", "", f"Source: {c['bron']['publicatie']}", "",
                  "| field | expected | encoding | match |", "|---|---|---|---|"]
        for k, e, g, m in r["rows"]:
            lines.append(f"| {k} | {e} | {g} | {'yes' if m else 'NO'} |")
        if c.get("opmerking"):
            lines += ["", f"Note: {c['opmerking']}"]
        lines.append("")
    par_lines, par_bad = parity(cases, rules)
    lines += ["---", ""] + par_lines + ["", "---", "",
              f"Cases run: {counts['pass'] + counts['fail']}, passed: {counts['pass']}, failed: {counts['fail']}, "
              f"skipped: {counts['skip']}. Verified cases: 0. Blocking failures: {blocking_fail}. "
              f"Browser/Python differences: {par_bad} (blocking: the two encodings must agree)."]
    blocking_fail += par_bad
    out = ROOT / "law" / "zorgtoeslag" / "tests"
    out.mkdir(parents=True, exist_ok=True)
    (out / "report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("\n".join(lines))
    return 1 if blocking_fail else 0


# ---------------------------------------------------------------- site

CSS = """
:root{--ink:#1a1a1a;--paper:#fff;--rule:#bbb;--law:#444;--muted:#555;--mark:#f4f1ea}
@media (prefers-color-scheme:dark){:root{--ink:#eee;--paper:#161616;--rule:#555;--law:#ccc;--muted:#aaa;--mark:#242220}}
*{box-sizing:border-box}html{font-size:112.5%}
body{margin:0;background:var(--paper);color:var(--ink);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.55}
main{max-width:40rem;margin:0 auto;padding:1.25rem 1rem 3rem}
h1{font-size:1.5rem;line-height:1.25;margin:.5rem 0 1rem}h2{font-size:1.15rem;margin:1.75rem 0 .5rem}
p{margin:.6rem 0}a{color:inherit}
.law{font-family:Georgia,"Times New Roman",serif;color:var(--law)}
.status{font-variant:small-caps;letter-spacing:.03em;color:var(--muted)}
.eerlijk{border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);padding:.6rem 0;margin:1.25rem 0}
.res{font-size:1.6rem;font-weight:600;margin:.25rem 0}
.klein{font-size:.9rem;color:var(--muted)}
table{border-collapse:collapse;width:100%;margin:.75rem 0}th,td{text-align:left;vertical-align:top;padding:.45rem .4rem;border-bottom:1px solid var(--rule)}
th{font-weight:600}td.n,th.n{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}
ol.stappen{padding-left:1.25rem}ol.stappen li{margin:.9rem 0}ol.stappen .bedrag{font-variant-numeric:tabular-nums}
aside.wet{margin:.3rem 0 0;padding-left:.75rem;border-left:3px solid var(--rule)}
.brief{border:1px solid var(--rule);padding:.9rem;margin:.75rem 0;background:var(--mark)}
.brief dl{display:grid;grid-template-columns:1fr auto;gap:.3rem .75rem;margin:0}.brief dd{margin:0;text-align:right;font-variant-numeric:tabular-nums}
nav.layouts a{margin-right:1rem}
header.kop{border-bottom:1px solid var(--rule);margin-bottom:.75rem}header.kop p{margin:.4rem 0}
fieldset{border:1px solid var(--rule);padding:.75rem 1rem 1rem;margin:1rem 0}legend{font-weight:600;padding:0 .3rem}
.veld{margin:.9rem 0}.veld label,.veld .label{display:block;font-weight:600;margin:0 0 .3rem}
.keuzes label{display:inline-block;font-weight:400;margin:.2rem 1.25rem .2rem 0;min-height:2.75rem;line-height:2.75rem}
.keuzes input{width:1.3rem;height:1.3rem;vertical-align:middle;margin:0 .35rem 0 0}
input[type=text],select{font:inherit;color:inherit;background:var(--paper);border:1px solid var(--law);border-radius:3px;padding:.5rem .6rem;min-height:2.75rem;width:100%;max-width:18rem}
.hint{font-size:.9rem;color:var(--muted);margin:.3rem 0 0}
details.meer{border:1px solid var(--rule);padding:.5rem 1rem;margin:1rem 0}details.meer summary{font-weight:600;cursor:pointer;min-height:2rem;line-height:2rem}
.knop{font:inherit;font-weight:600;color:var(--paper);background:var(--ink);border:0;border-radius:3px;padding:.75rem 1.5rem;min-height:2.75rem;cursor:pointer}
.fout{border-left:3px solid var(--ink);padding-left:.75rem;font-weight:600}
section#uitkomst{margin-top:2rem;padding-top:1rem;border-top:2px solid var(--ink)}section#uitkomst:focus{outline:none}
footer.voet{margin-top:2.5rem;border-top:1px solid var(--rule);padding-top:.5rem}
ul.dossier,ul.onbepaald{padding-left:1.25rem}ul.dossier li,ul.onbepaald li{margin:.35rem 0}
:focus-visible{outline:3px solid currentColor;outline-offset:2px}
@media (max-width:30rem){table,thead,tbody,tr,td,th{display:block}thead{position:absolute;left:-9999px}td{border:0;padding:.15rem 0}td.n{text-align:left}tr{border-bottom:1px solid var(--rule);padding:.5rem 0}td::before{content:attr(data-h) " ";color:var(--muted)}}
"""


def eur(v: Decimal | None, cents_: bool = True) -> str:
    if v is None:
        return "—"
    q = v.quantize(D("0.01"), rounding=ROUND_HALF_UP) if cents_ else v
    s = f"{q:,.2f}" if cents_ else str(q)
    s = s.replace(",", "X").replace(".", ",").replace("X", ".")
    return "€ " + s


def page(title: str, body: str, lang_note: bool = True) -> str:
    return f"""<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)} — toeslagrecht</title><style>{CSS}</style></head>
<body><main>
<p class="klein">toeslagrecht · zorgtoeslag · 2026 · <span class="status">alle regels: draft</span></p>
{body}
<p class="klein">Niets van wat u invult verlaat uw telefoon of computer. Deze pagina slaat niets op.</p>
<p class="klein">Bron: <a href="https://github.com/TheAndries/toeslagrecht">de open encoding en het dossier</a> (MIT / CC BY-SA 4.0). Gebouwd {TODAY}.</p>
</main></body></html>
"""


EERLIJK = ("<div class=\"eerlijk\"><p>Dit berekent wat de wet zegt voor wat u hier invulde. Het is geen advies en "
           "het kent uw hele situatie niet. Aanvragen doet u op <a href=\"https://www.toeslagen.nl\">toeslagen.nl</a>.</p></div>")

INVOER = ("<h2>Wat is ingevuld</h2><p>Een rekenvoorbeeld. Jaar 2026. Geen toeslagpartner. Toetsingsinkomen "
          "€ 32.000. Vermogen niet opgegeven.</p>")


def kop(u) -> str:
    return (f"<p>Zorgtoeslag per jaar, volgens de wet:</p><p class=\"res\">{eur(u.tegemoetkoming)}</p>"
            f"<p class=\"klein\">Berekend {eur(u.aanspraak_jaar)} per jaar, afgerond op hele euro's (Awir art. 14 lid 4). "
            f"Per maand is dat {eur(u.aanspraak_maand)}; Dienst Toeslagen rondt het maandbedrag in haar voorbeelden naar "
            f"beneden af op hele euro's: € {u.aanspraak_maand_afgerond_praktijk}. Waar dat afronden per maand in de wet "
            f"staat, hebben wij niet gevonden.</p>")


def layout_a(u) -> str:
    rows = "".join(
        f"<tr><td data-h=\"Stap\">{i}. {html.escape(s.omschrijving)}</td>"
        f"<td data-h=\"Berekening\" class=\"n\">{html.escape(s.berekening)}</td>"
        f"<td data-h=\"Uitkomst\" class=\"n\"><span class=\"bedrag\">{eur(s.uitkomst) if isinstance(s.uitkomst, Decimal) else html.escape(str(s.uitkomst))}</span></td>"
        f"<td data-h=\"Artikel\" class=\"law\">{html.escape(s.artikel)}<br><span class=\"status\">{s.status}</span></td></tr>"
        for i, s in enumerate(u.stappen, 1))
    body = f"""<h1>Uw zorgtoeslag, stap voor stap</h1>{INVOER}{kop(u)}{EERLIJK}
<h2>De berekening</h2>
<table><thead><tr><th>Stap</th><th class="n">Berekening</th><th class="n">Uitkomst</th><th>Artikel en status</th></tr></thead>
<tbody>{rows}</tbody></table>
<p class="klein">Layout A — <em>de tabel</em>: elke stap een rij, het artikel in de laatste kolom. Voor wie met de brief ernaast wil narekenen.</p>
<nav class="layouts" aria-label="Andere layouts"><a href="a.html" aria-current="page">A</a><a href="b.html">B</a><a href="c.html">C</a><a href="../index.html">terug</a></nav>"""
    return page("Layout A: de tabel", body)


def layout_b(u) -> str:
    items = "".join(
        f"<li><p>{html.escape(s.omschrijving)} <span class=\"bedrag\">Uitkomst: "
        f"{eur(s.uitkomst) if isinstance(s.uitkomst, Decimal) else html.escape(str(s.uitkomst))}</span>.</p>"
        f"<aside class=\"wet law\"><p>{html.escape(s.artikel)} <span class=\"status\">({s.status})</span><br>"
        f"<span class=\"klein\">{html.escape(s.berekening)}</span></p></aside></li>"
        for s in u.stappen)
    body = f"""<h1>Hoe de wet bij uw bedrag komt</h1>{INVOER}{kop(u)}{EERLIJK}
<h2>Stap voor stap</h2>
<ol class="stappen">{items}</ol>
<p class="klein">Layout B — <em>het verhaal</em>: elke stap één zin in gewoon Nederlands, de wet er in een kantlijn naast. Voor wie het eerst wil begrijpen.</p>
<nav class="layouts" aria-label="Andere layouts"><a href="a.html">A</a><a href="b.html" aria-current="page">B</a><a href="c.html">C</a><a href="../index.html">terug</a></nav>"""
    return page("Layout B: het verhaal", body)


def layout_c(u) -> str:
    by = {s.regel: s for s in u.stappen}
    sp = by["zt-2026-art2-1"]; norm = by["zt-2026-art2-2"]; dr = by["zt-2026-art1-1f"]
    brief = f"""<div class="brief" aria-label="Zoals het op de brief staat"><dl>
<dt>Standaardpremie 2026</dt><dd>€ 2.119,00</dd>
<dt>Normpremie</dt><dd>{eur(norm.uitkomst)}</dd>
<dt>Zorgtoeslag per jaar</dt><dd>{eur(u.tegemoetkoming)}</dd>
<dt>Per maand</dt><dd>{eur(u.aanspraak_maand)}</dd></dl></div>"""
    body = f"""<h1>Naast uw brief gelegd</h1>{INVOER}{kop(u)}{EERLIJK}
<h2>Dezelfde regels als op de beschikking</h2>
<p>Op de brief van Dienst Toeslagen staan meestal deze vier regels. Hier staan ze zoals de wet ze berekent, met het artikel erbij.</p>
{brief}
<h2>Waar elk getal vandaan komt</h2>
<p class="law">Standaardpremie — {html.escape(sp.artikel)}. <span class="status">draft</span></p>
<p class="law">Drempelinkomen {eur(dr.uitkomst)} — {html.escape(dr.artikel)}: {html.escape(dr.berekening)}. <span class="status">draft</span></p>
<p class="law">Normpremie — {html.escape(norm.artikel)}: {html.escape(norm.berekening)}. <span class="status">draft</span></p>
<p class="law">Zorgtoeslag — {html.escape(sp.artikel)}: {html.escape(sp.berekening)}; per maand: {html.escape(by["zt-2026-art2-5"].berekening)} ({html.escape(by["zt-2026-art2-5"].artikel)}). <span class="status">draft</span></p>
<p class="law">Afronding en minimum — {html.escape(by["awir-2026-art14-4"].artikel)}: {html.escape(by["awir-2026-art14-4"].berekening)} {eur(by["awir-2026-art14-4"].uitkomst)}; {html.escape(by["awir-2026-art14-5"].artikel)}: {html.escape(by["awir-2026-art14-5"].omschrijving)} <span class="status">draft</span></p>
<p class="law">Vermogen — {html.escape(by["zt-2026-art3-1"].artikel)}: {html.escape(by["zt-2026-art3-1"].berekening)} <span class="status">draft</span></p>
<p class="klein">Layout C — <em>de brief</em>: eerst de vier regels zoals ze op de beschikking staan, daaronder de herkomst van elk getal. Voor wie een brief heeft en wil weten of die klopt.</p>
<nav class="layouts" aria-label="Andere layouts"><a href="a.html">A</a><a href="b.html">B</a><a href="c.html" aria-current="page">C</a><a href="../index.html">terug</a></nav>"""
    return page("Layout C: de brief", body)


LANDNAMEN = {
    "BE": "België", "BA": "Bosnië-Herzegovina", "BG": "Bulgarije", "CY": "Cyprus", "DK": "Denemarken", "DE": "Duitsland",
    "EE": "Estland", "FI": "Finland", "FR": "Frankrijk", "GR": "Griekenland", "HU": "Hongarije", "IS": "IJsland",
    "IE": "Ierland", "IT": "Italië", "CV": "Kaapverdië", "HR": "Kroatië", "LV": "Letland", "LI": "Liechtenstein",
    "LT": "Litouwen", "LU": "Luxemburg", "MT": "Malta", "MA": "Marokko", "ME": "Montenegro", "MK": "Noord-Macedonië",
    "NO": "Noorwegen", "AT": "Oostenrijk", "PL": "Polen", "PT": "Portugal", "RO": "Roemenië", "RS": "Servië",
    "SI": "Slovenië", "SK": "Slowakije", "ES": "Spanje", "CZ": "Tsjechië", "TN": "Tunesië", "TR": "Turkije",
    "GB": "Verenigd Koninkrijk", "SE": "Zweden", "CH": "Zwitserland",
}


def checker() -> None:
    """site/zorgtoeslag.html: the checker (DESIGN.md; layout B, owner decision 2026-10-09) from
    tools/zorgtoeslag.template.html, with the years encoded and the countries of Rzv bijlage 4."""
    jaren = sorted((int(p.stem) for p in (ROOT / "law" / "zorgtoeslag" / "parameters").glob("*.yaml")), reverse=True)
    landen = set()
    for j in jaren:
        landen |= set(load_params("zorgtoeslag", j).get("woonlandfactoren", {}).get("landen", {}))
    opties_j = "".join(f'<option value="{j}"{" selected" if i == 0 else ""}>{j}</option>' for i, j in enumerate(jaren))
    opties_l = "".join(f'<option value="{c}">{html.escape(LANDNAMEN.get(c, c))}</option>'
                       for c in sorted(landen, key=lambda c: LANDNAMEN.get(c, c)))
    tpl = (ROOT / "tools" / "zorgtoeslag.template.html").read_text(encoding="utf-8")
    out = tpl.replace("{{CSS}}", CSS).replace("{{DATUM}}", TODAY).replace("{{JAREN}}", opties_j).replace("{{LANDEN}}", opties_l)
    (ROOT / "site" / "zorgtoeslag.html").write_text(out, encoding="utf-8")


def build() -> None:
    export_parameters()
    checker()
    rules = load_rules("zorgtoeslag")
    par = load_params("zorgtoeslag", 2026)
    u = rules.bereken(2026, par, toetsingsinkomen_aanvrager=D(32000), partner=False, awir=load_awir(2026))
    out = ROOT / "site" / "layouts"
    out.mkdir(parents=True, exist_ok=True)
    (out / "a.html").write_text(layout_a(u), encoding="utf-8")
    (out / "b.html").write_text(layout_b(u), encoding="utf-8")
    (out / "c.html").write_text(layout_c(u), encoding="utf-8")
    index = f"""<header class="kop"><p class="klein">toeslagrecht · <span class="status">alle regels: draft</span></p></header>
<h1>toeslagrecht</h1>
<p>Hier staat de Nederlandse toeslagenwet als open, controleerbare rekenregels, met bij elk getal het artikel
waar het vandaan komt. U kunt uw zorgtoeslag narekenen en zien hoe de wet bij het bedrag komt. Daarachter ligt
het dossier: de wet zoals zij elk jaar gold, de gepubliceerde rekenvoorbeelden, en elk verschil tussen de
wettekst en wat Dienst Toeslagen doet.</p>
<h2>Narekenen</h2>
<ul><li><a href="zorgtoeslag.html">Zorgtoeslag narekenen</a> — 2026, 2025 en 2024, stap voor stap, op uw eigen apparaat.</li></ul>
<p class="klein">Nog niets hier is af. Elke regel heeft de status <span class="status">draft</span>: door niemand met
vakkennis nagelezen. Geen enkele case is geverifieerd aan een echte beschikking. Dit is een controle, geen advies;
aanvragen doet u op <a href="https://www.toeslagen.nl">toeslagen.nl</a>. De huurtoeslag komt later.</p>
<h2>Het dossier</h2>
<ul><li><a href="https://github.com/TheAndries/toeslagrecht/blob/main/law/zorgtoeslag/rules.md">De regels, met hun artikelen en status</a></li>
<li><a href="https://github.com/TheAndries/toeslagrecht/blob/main/law/CHANGES.md">De wijzigingen in de wet, per datum, met het Staatsblad of de Staatscourant</a></li>
<li><a href="https://github.com/TheAndries/toeslagrecht/tree/main/cases">De cases</a> · <a href="https://github.com/TheAndries/toeslagrecht/blob/main/law/zorgtoeslag/tests/report.md">de controle van de regels tegen de cases</a></li>
<li><a href="https://github.com/TheAndries/toeslagrecht/blob/main/DISCREPANCIES.md">Waar de wettekst en Dienst Toeslagen verschillen</a></li>
<li><a href="https://github.com/TheAndries/toeslagrecht/blob/main/DISPUTES.md">Iets betwisten</a> · <a href="https://github.com/TheAndries/toeslagrecht/blob/main/CASES.md">een echte beschikking insturen, anoniem</a></li></ul>
<h2>Hoe de pagina gekozen is</h2>
<p class="klein">Op 2026-10-09 koos de eigenaar uit drie opzetten van dezelfde berekening voor <a href="layouts/b.html">B, het verhaal</a>
(<a href="layouts/a.html">A, de tabel</a> en <a href="layouts/c.html">C, de brief</a> blijven staan als dossier; <code>BOARD.md</code>).</p>"""
    (ROOT / "site" / "index.html").write_text(page("Start", index), encoding="utf-8")
    print("site built:", [p.name for p in out.iterdir()], "index.html zorgtoeslag.html zorgtoeslag-parameters.js")


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "all"
    rc = 0
    if cmd in ("check", "all"):
        rc = check()
    if cmd in ("build", "all"):
        build()
    sys.exit(rc)
