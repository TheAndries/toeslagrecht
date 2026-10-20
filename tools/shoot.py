#!/usr/bin/env python3
"""Screenshots and layout checks for site/ pages, with Playwright and the Edge channel.

  python tools/shoot.py shot <html path> <out.png> <width> [full]   # first screen (or the full page)
  python tools/shoot.py overflow <html path> <width>...             # prints scrollWidth vs clientWidth per width
  python tools/shoot.py pdf <html path> <out.pdf>                   # print to PDF

Pages are opened over a local static server rooted at site/, so relative links resolve as on
GitHub Pages. Stdlib + Playwright. Licence: MIT."""
import http.server
import socketserver
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
PORT = 8765


class Quiet(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=str(SITE), **k)

    def log_message(self, *a):
        pass


def serve():
    socketserver.ThreadingTCPServer.allow_reuse_address = True
    socketserver.ThreadingTCPServer.daemon_threads = True
    httpd = socketserver.ThreadingTCPServer(("127.0.0.1", PORT), Quiet)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def url_for(path: str) -> str:
    rel = Path(path).resolve().relative_to(SITE.resolve()).as_posix()
    return f"http://127.0.0.1:{PORT}/{rel}"


def main(argv):
    cmd, path = argv[0], argv[1]
    httpd = serve()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(channel="msedge")
            if cmd == "shot":
                out, width = argv[2], int(argv[3])
                full = len(argv) > 4 and argv[4] == "full"
                ctx = browser.new_context(viewport={"width": width, "height": 844 if width < 720 else 800}, device_scale_factor=1)
                page = ctx.new_page()
                page.goto(url_for(path), wait_until="networkidle")
                page.wait_for_timeout(300)
                page.screenshot(path=out, full_page=full, type="png")
                print(out, Path(out).stat().st_size, "bytes")
            elif cmd == "overflow":
                for w in argv[2:]:
                    ctx = browser.new_context(viewport={"width": int(w), "height": 800})
                    page = ctx.new_page()
                    page.goto(url_for(path), wait_until="networkidle")
                    sw, cw = page.evaluate("[document.documentElement.scrollWidth, document.documentElement.clientWidth]")
                    print(f"{path} @ {w}px: scrollWidth {sw}, clientWidth {cw}, {'ok' if sw <= cw else 'OVERFLOW'}")
                    ctx.close()
            elif cmd == "pdf":
                out = argv[2]
                page = browser.new_page()
                page.goto(url_for(path), wait_until="networkidle")
                page.emulate_media(media="print")
                page.pdf(path=out, format="A4", print_background=False)
                print(out, Path(out).stat().st_size, "bytes")
            browser.close()
    finally:
        httpd.shutdown()


if __name__ == "__main__":
    main(sys.argv[1:])
