#!/usr/bin/env python3
"""Drives the form on site/index.html in Edge (Playwright): keyboard only, with the network cut after
the first load, and compares the amount with the server-rendered specimen. Also logs every request.

  python tools/formtest.py            # the specimen case: 2026, zonder partner, € 19.000
Licence: MIT."""
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import shoot  # noqa: E402
from playwright.sync_api import sync_playwright  # noqa: E402


def main():
    httpd = shoot.serve()
    requests = []
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(channel="msedge")
            ctx = browser.new_context(viewport={"width": 390, "height": 844})
            page = ctx.new_page()
            page.on("request", lambda r: requests.append(r.url))
            page.goto(shoot.url_for("site/index.html"), wait_until="networkidle")
            # network off from here on: the calculation must not need it
            ctx.set_offline(True)
            # keyboard only: skip link, then tab through to the fields
            page.keyboard.press("Tab")
            assert page.evaluate("document.activeElement.className") == "skip", "skip link is not the first focusable element"
            # first submit with nothing filled: errors, focus on the first field in error
            page.click("button.knop")
            page.wait_for_timeout(100)
            errs = page.locator(".fout:not([hidden])").all_text_contents()
            print("errors on an empty submit:", errs)
            assert page.evaluate("document.activeElement.id") == "ti", "focus did not move to the first field in error"
            page.keyboard.type("19000")
            page.wait_for_timeout(50)
            assert page.locator("#f-ti").is_hidden(), "error did not clear on input"
            # choose Nee with the keyboard: tab to the partner group, arrow to Nee
            page.focus('input[name="partner"][value="ja"]')
            page.keyboard.press("ArrowRight")
            page.focus("button.knop")
            page.keyboard.press("Enter")
            page.wait_for_selector("#uitkomst:not([hidden])")
            bedrag = page.locator(".bedrag").first.inner_text()
            stappen = page.locator(".stap").count()
            print("amount (browser):", bedrag, "| steps:", stappen)
            print("focus after result:", page.evaluate("document.activeElement.id"))
            spec = (shoot.SITE / "specimens" / "narekenen-a.html").read_text(encoding="utf-8")
            m = re.search(r'<p class="bedrag">(.*?)</p>', spec)
            spec_bedrag = re.sub(r"<[^>]+>", "", m.group(1)).strip()
            print("amount (specimen):", spec_bedrag)
            assert bedrag.replace(" ", " ") == spec_bedrag.replace(" ", " "), "browser and specimen differ"
            same_origin = [u for u in requests if u.startswith("http://127.0.0.1")]
            print("requests:", len(requests), "all same-origin:", len(same_origin) == len(requests))
            for u in requests:
                print("  ", u.replace("http://127.0.0.1:8765/", "/"))
            browser.close()
    finally:
        httpd.shutdown()


if __name__ == "__main__":
    main()
