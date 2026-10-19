#!/usr/bin/env python3
"""WCAG 2.x contrast ratios for the tokens in site/static/tokens.css (site/DESIGN-amendment.md).
Usage: python tools/contrast.py  -- prints every pair the site uses, exit 1 if one is under its minimum.
Stdlib only. Licence: MIT."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOKENS = ROOT / "site" / "static" / "tokens.css"


def lum(hexv: str) -> float:
    r, g, b = (int(hexv.lstrip("#")[i:i + 2], 16) / 255 for i in (0, 2, 4))

    def f(c):
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4

    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)


def ratio(a: str, b: str) -> float:
    la, lb = lum(a), lum(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def tokens() -> dict:
    src = TOKENS.read_text(encoding="utf-8") if TOKENS.exists() else ""
    return dict(re.findall(r"(--[\w-]+):\s*(#[0-9A-Fa-f]{6})", src))


PAIRS = [  # (foreground, background, minimum, what)
    ("--ink", "--paper", 4.5, "body text"),
    ("--ink-2", "--paper", 4.5, "explanatory text, margin notes"),
    ("--muted", "--paper", 4.5, "help text, footer"),
    ("--green", "--paper", 4.5, "links, step numbers"),
    ("--green-ink", "--paper", 4.5, "link hover"),
    ("--paper", "--green", 4.5, "button text on green"),
    ("--paper", "--green-ink", 4.5, "button text on hover"),
    ("--error", "--paper", 4.5, "error text"),
    ("--ink", "--green-paper", 4.5, "chosen option text"),
    ("--ink", "--paper-2", 4.5, "citation text"),
    ("--ink-2", "--paper-2", 4.5, "citation text (ink-2)"),
    ("--muted", "--paper-2", 4.5, "citation footer"),
    ("--green", "--paper-2", 4.5, "links in a citation"),
    ("--green", "--green-paper", 3.0, "chosen option's border on its fill"),
    ("--green", "--paper", 3.0, "chosen option's border, button edge"),
    ("--ink", "--paper", 3.0, "input border, focus outline"),
    ("--muted", "--paper", 3.0, "unchosen option's border"),
    ("--error", "--paper", 3.0, "field border in error"),
    ("--focus", "--paper", 3.0, "focus outline on paper"),
    ("--focus", "--green-paper", 3.0, "focus outline on a chosen option"),
    ("--rule", "--paper", 1.0, "hairline (decorative)"),
]

if __name__ == "__main__":
    t = tokens()
    bad = 0
    for fg, bg, mn, what in PAIRS:
        if fg not in t or bg not in t:
            print(f"{fg} on {bg}: token missing")
            bad += 1
            continue
        r = ratio(t[fg], t[bg])
        ok = r >= mn
        bad += 0 if ok else 1
        print(f"{fg:14} on {bg:14} {r:5.2f}:1  min {mn}  {'ok' if ok else 'FAIL'}  {what}")
    sys.exit(1 if bad else 0)
