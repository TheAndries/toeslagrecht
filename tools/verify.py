#!/usr/bin/env python3
"""The verification of site/ for DESIGN.md "Kleur, ruimte en pagina's" (brief step 7).

  python tools/verify.py <path to axe.min.js>

Over a local server rooted at site/, in Edge (Playwright): crawls every internal link from the front
page (every page reachable, every link answers); checks that every address the site served before
2026-10-19 still answers; runs axe-core on one page of every kind; screenshots each at 390 and 1280 px
(first screen) into site/specimens/; checks reflow at 320 px and at 400% zoom on 1280 px; takes an
accessibility-tree snapshot of the form, the result and a rule page; times the front page and a rule
page on emulated slow 3G with the cache off; prints the result to PDF. Prints a Markdown report.
Stdlib + Playwright (+ Pillow for the screenshot palette). Licence: MIT."""
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urldefrag

sys.path.insert(0, str(Path(__file__).resolve().parent))
import shoot  # noqa: E402
from playwright.sync_api import sync_playwright  # noqa: E402

SITE = shoot.SITE
BASE = f"http://127.0.0.1:{shoot.PORT}/"

KINDS = [  # one page of every kind (and the specimen)
    ("narekenen", "index.html"),
    ("narekenen-oud-adres", "zorgtoeslag.html"),
    ("specimen", "specimens/narekenen-a.html"),
    ("dossier", "dossier/index.html"),
    ("dossier-toeslag", "dossier/zorgtoeslag/index.html"),
    ("regel", "dossier/zorgtoeslag/zt-2026-art2-1/index.html"),
    ("regel-awir", "dossier/awir/awir-2026-art14-4/index.html"),
    ("voorbeelden", "dossier/voorbeelden/index.html"),
    ("voorbeeld", "dossier/voorbeelden/zt-2026-pub-007/index.html"),
    ("wet", "wet/index.html"),
    ("wet-jaar", "wet/2026/index.html"),
    ("wet-wijzigingen", "wet/wijzigingen/index.html"),
    ("wet-bronnen", "wet/bronnen/index.html"),
    ("verschillen", "verschillen/index.html"),
    ("verschil", "verschillen/1/index.html"),
    ("betwisten", "betwisten/index.html"),
    ("insturen", "insturen/index.html"),
    ("over", "over/index.html"),
]
OLD = ["index.html", "zorgtoeslag.html", "layouts/a.html", "layouts/b.html", "layouts/c.html",
       "zorgtoeslag-regels.js", "zorgtoeslag-parameters.js"]


def crawl(page):
    seen, queue, broken = set(), ["index.html"], []
    while queue:
        rel = queue.pop()
        if rel in seen:
            continue
        seen.add(rel)
        r = page.goto(BASE + rel, wait_until="domcontentloaded")
        if r is None or r.status != 200:
            broken.append((rel, r.status if r else None)); continue
        if not rel.endswith(".html"):
            continue
        for href in page.evaluate("Array.from(document.querySelectorAll('a[href]')).map(a => a.getAttribute('href'))"):
            if href.startswith(("http:", "https:", "mailto:")):
                continue
            target = urldefrag(urljoin(BASE + rel, href))[0]
            if not target.startswith(BASE):
                broken.append((rel + " -> " + href, "outside")); continue
            t = target[len(BASE):]
            if t.endswith("/") or t == "":
                t += "index.html"
            if t not in seen:
                queue.append(t)
    return seen, broken


def main(axe_path):
    axe = Path(axe_path).read_text(encoding="utf-8")
    httpd = shoot.serve()
    report = []
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(channel="msedge")
            page = browser.new_page()

            # 1 crawl
            seen, broken = crawl(page)
            all_html = {x.relative_to(SITE).as_posix() for x in SITE.rglob("*.html")}
            unlinked = sorted(x for x in all_html - seen if not x.startswith(("layouts/", "specimens/")))
            report.append(f"- **Links.** {len(seen)} addresses reached from the front page, {len(broken)} broken"
                          + (": " + "; ".join(f"`{a}` ({b})" for a, b in broken) if broken else "")
                          + f". Pages not reachable from any link (layouts and specimens excepted): {len(unlinked)}"
                          + (": " + ", ".join(f"`{u}`" for u in unlinked) if unlinked else "") + ".")
            # 2 old addresses
            old = []
            for rel in OLD:
                r = page.goto(BASE + rel, wait_until="domcontentloaded")
                old.append((rel, r.status))
            report.append("- **Old addresses.** " + ", ".join(f"`{a}` {b}" for a, b in old) + ".")

            # 3 axe, screenshots, reflow per kind
            axe_lines, shot_lines, reflow_lines = [], [], []
            for kind, rel in KINDS:
                page.set_viewport_size({"width": 1280, "height": 800})
                page.goto(BASE + rel, wait_until="networkidle")
                page.add_script_tag(content=axe)
                res = page.evaluate("axe.run(document, {runOnly: {type: 'tag', values: ['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']}})")
                viol = res["violations"]
                axe_lines.append(f"`{rel}`: {len(viol)} violations" + ("" if not viol else " — " + "; ".join(
                    f"{v['id']} ({v['impact']}, {len(v['nodes'])} nodes)" for v in viol)))
                for w in (390, 1280):
                    page.set_viewport_size({"width": w, "height": 844 if w < 720 else 800})
                    page.goto(BASE + rel, wait_until="networkidle")
                    out = SITE / "specimens" / f"{kind}-{w}.png"
                    page.screenshot(path=str(out), type="png")
                    try:
                        from PIL import Image
                        Image.open(out).convert("RGB").quantize(colors=128).save(out, optimize=True)
                    except Exception:
                        pass
                    shot_lines.append(f"`{out.name}` {out.stat().st_size // 1024} KB")
                page.set_viewport_size({"width": 320, "height": 640})
                page.goto(BASE + rel, wait_until="networkidle")
                sw, cw = page.evaluate("[document.documentElement.scrollWidth, document.documentElement.clientWidth]")
                # 400% browser zoom on a 1280px window is a 320 CSS-px layout viewport at device scale 4
                zc = browser.new_context(viewport={"width": 320, "height": 200}, device_scale_factor=4)
                zp = zc.new_page()
                zp.goto(BASE + rel, wait_until="networkidle")
                sw4, cw4 = zp.evaluate("[document.documentElement.scrollWidth, document.documentElement.clientWidth]")
                zc.close()
                reflow_lines.append(f"`{rel}`: 320px {'ok' if sw <= cw else 'OVERFLOW ' + str(sw)}; 400% zoom on 1280px {'ok' if sw4 <= cw4 else 'OVERFLOW ' + str(sw4)}")
            report.append("- **axe-core 4.10.2 (WCAG 2.0/2.1/2.2 A+AA rules and best practice):**\n  - " + "\n  - ".join(axe_lines))
            report.append("- **Reflow (SC 1.4.10):**\n  - " + "\n  - ".join(reflow_lines))
            report.append("- **Screenshots** in `site/specimens/`: " + ", ".join(shot_lines) + ".")

            # 4 accessibility tree
            def tree(rel, sel, note):
                page.set_viewport_size({"width": 1280, "height": 800})
                page.goto(BASE + rel, wait_until="networkidle")
                try:
                    snap = page.locator(sel).aria_snapshot()
                except Exception:
                    snap = json.dumps(page.accessibility.snapshot(), ensure_ascii=False)
                return f"**{note}** (`{rel}`, `{sel}`):\n\n```\n{snap[:2500]}\n```"
            trees = [tree("index.html", "form#invoer", "The form"),
                     tree("specimens/narekenen-a.html", "#uitkomst", "The result"),
                     tree("dossier/zorgtoeslag/zt-2026-art2-1/index.html", "main", "A rule page")]
            # 5 slow 3G timing, cache off
            timings = []
            for rel in ("index.html", "dossier/zorgtoeslag/zt-2026-art2-1/index.html"):
                ctx = browser.new_context(viewport={"width": 390, "height": 844})
                pg = ctx.new_page()
                cdp = ctx.new_cdp_session(pg)
                cdp.send("Network.enable")
                cdp.send("Network.setCacheDisabled", {"cacheDisabled": True})
                cdp.send("Network.emulateNetworkConditions", {"offline": False, "latency": 400, "downloadThroughput": 400 * 1024 / 8, "uploadThroughput": 400 * 1024 / 8})
                sizes = {}
                pg.on("response", lambda r: sizes.__setitem__(r.url, int(r.headers.get("content-length", "0") or 0)))
                t0 = time.time()
                pg.goto(BASE + rel, wait_until="load", timeout=180000)
                t_load = time.time() - t0
                pg.wait_for_load_state("networkidle", timeout=180000)
                t_idle = time.time() - t0
                timings.append(f"`{rel}`: {len(sizes)} requests, {sum(sizes.values()) // 1024} KB uncompressed, load event {t_load:.1f} s, network idle {t_idle:.1f} s (slow 3G: 400 kbit/s, 400 ms latency, cache off)")
                ctx.close()
            report.append("- **Weight and timing:**\n  - " + "\n  - ".join(timings))
            # 6 pdf
            pg = browser.new_page()
            pg.goto(BASE + "specimens/narekenen-a.html", wait_until="networkidle")
            pg.emulate_media(media="print")
            out = SITE / "specimens" / "narekenen-a.pdf"
            pg.pdf(path=str(out), format="A4")
            report.append(f"- **Print.** `site/specimens/narekenen-a.pdf`, {out.stat().st_size // 1024} KB, A4, from the specimen with `@media print`.")
            browser.close()
    finally:
        httpd.shutdown()
    print("\n".join(report))
    print("\n" + "\n\n".join(trees))


if __name__ == "__main__":
    main(sys.argv[1])
