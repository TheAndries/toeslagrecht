#!/usr/bin/env python3
"""toeslagrecht build pipeline: law/ + cases/ -> tests -> site/.

  python3 tools/build.py check   # run every case through the encoding; write law/<toeslag>/tests/report.md
  python3 tools/build.py build   # render site/ (index + the three result-page layouts for Ask 3)
  python3 tools/build.py all

Exit code 1 on `check` only if a *verified* case fails (LAW.md: the encoding is not committed
unless every verified case passes). Published/synthetic cases are checks: reported, never blocking.
Licence: MIT (LICENSE). Stdlib + PyYAML.
"""
from __future__ import annotations

import html
import importlib.util
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
    lines += ["---", "",
              f"Cases run: {counts['pass'] + counts['fail']}, passed: {counts['pass']}, failed: {counts['fail']}, "
              f"skipped: {counts['skip']}. Verified cases: 0. Blocking failures: {blocking_fail}."]
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


def build() -> None:
    rules = load_rules("zorgtoeslag")
    par = load_params("zorgtoeslag", 2026)
    u = rules.bereken(2026, par, toetsingsinkomen_aanvrager=D(32000), partner=False, awir=load_awir(2026))
    out = ROOT / "site" / "layouts"
    out.mkdir(parents=True, exist_ok=True)
    (out / "a.html").write_text(layout_a(u), encoding="utf-8")
    (out / "b.html").write_text(layout_b(u), encoding="utf-8")
    (out / "c.html").write_text(layout_c(u), encoding="utf-8")
    index = f"""<h1>toeslagrecht</h1>
<p>Dutch benefit law as open, dated, testable code, with the record behind it. Nothing here is finished:
every rule is <span class="status">draft</span>, no case is verified, and the result page has not been chosen.</p>
<h2>Three layouts of one computation (Ask 3)</h2>
<p>Zorgtoeslag 2026, zonder partner, toetsingsinkomen € 32.000. The same steps, three ways:</p>
<ul><li><a href="layouts/a.html">A — de tabel</a></li><li><a href="layouts/b.html">B — het verhaal</a></li><li><a href="layouts/c.html">C — de brief</a></li></ul>
<h2>The record</h2>
<ul><li><a href="https://github.com/TheAndries/toeslagrecht/blob/main/law/zorgtoeslag/rules.md">Rules, with articles</a></li>
<li><a href="https://github.com/TheAndries/toeslagrecht/blob/main/law/CHANGES.md">Dated amendments</a></li>
<li><a href="https://github.com/TheAndries/toeslagrecht/tree/main/cases">Cases</a> · <a href="https://github.com/TheAndries/toeslagrecht/blob/main/law/zorgtoeslag/tests/report.md">Test report</a></li>
<li><a href="https://github.com/TheAndries/toeslagrecht/blob/main/DISCREPANCIES.md">Discrepancy log</a></li></ul>"""
    (ROOT / "site" / "index.html").write_text(page("Index", index), encoding="utf-8")
    print("site built:", [p.name for p in out.iterdir()], "index.html")


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "all"
    rc = 0
    if cmd in ("check", "all"):
        rc = check()
    if cmd in ("build", "all"):
        build()
    sys.exit(rc)
