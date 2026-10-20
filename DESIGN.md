# DESIGN.md

**Status: binding under `CHARTER.md` P10. Amendable only by board decision.**

The checker is for a citizen who is worried about money and does not trust websites.
Everything follows from that.

## Principles

1. **Dutch, at B1.** The site is in Dutch, written at the level the Rijksoverheid aims for
   and often misses. Short sentences. The legal term shown once, explained once, then the
   plain word. English only in the repository.
2. **The computation is the page.** The result is not a number; it is the steps that reach
   the number, each step with its article beside it and a one-line plain-Dutch reading of
   that article. A citizen or their helper can follow it with the official letter in hand.
3. **One honest sentence, not a disclaimer wall.** Once, near the result: this computes what
   the law says for what you entered; it is not advice; apply at toeslagen.nl. Then
   nothing more about it.
4. **Status in words.** Each rule the result used shows its status — draft, tested,
   reviewed, established, contested — as a word, in one consistent place, never as a colour
   alone.
5. **Nothing leaves the device, and the page says so.** One line, plainly, where the inputs
   are entered. No account, no cookie, no banner.
6. **Accessible without exception.** WCAG 2.2 AA at minimum: keyboard, screen reader, zoom
   to 200%, contrast, no reliance on colour. The people who need this most are the ones
   most often locked out.
7. **Phone first.** Most citizens will arrive on a phone, often an old one. Static files,
   loads in under a second, works with JavaScript off for everything but the computation
   itself, which degrades to a plain form.
8. **Looks like it has nothing to sell.** Plain typography — a system or self-hosted sans
   for the interface, a text serif for the law — generous spacing, no logos, no hero, no
   illustration, no stock photographs. The reference points are a well-made government form
   and a court's own website, not a fintech.
9. **The record is one click away.** From any rule: the law text, the dated versions, the
   cases that test it, the discrepancies it appears in, the disputes on it. The record is
   not hidden behind the checker; the checker is the door to the record.

## Internal matters stay in the repository

**Owner decision of 2026-10-11 (`BOARD.md`, Decisions), transcribed 2026-10-12.** Board decisions, the
layout choice, design choices, asks, and anything else that is for the board are never published on the
website. They live in the repository files (`BOARD.md`, `DESIGN.md`, `CHANGELOG.md`, `ASKS.md`). The
website shows the citizen only what helps the citizen: the checker, the law, the cases, the discrepancy
log, the disputes, and how to submit or dispute. Consequences applied the same day: the section "Hoe de
pagina gekozen is" and every link to `site/layouts/` were removed from the public pages; `site/layouts/`
stays in the repository as the record of Ask 3 but is removed from the deployed site by the Pages
workflow. Binding under P10.

## Not permitted

Ads. Sponsorship. Pop-ups. Chat widgets. Newsletter interrupts. "Share" buttons. Urgency
of any kind. Collecting an email address to show a result. Any copy that suggests the tool
can get the citizen more money.

## The result page: layout B, "het verhaal"

**Owner decision of 2026-10-09 (`BOARD.md`, Decisions; Ask 3), transcribed 2026-10-10.** The
result page follows layout B, *het verhaal* (`site/layouts/b.html`): the granted year amount
first, then one honest sentence, then the computation as a numbered list in which every step
is one sentence of plain Dutch with its outcome, and the article, its status word and the
arithmetic stand beside it in a margin note. Chosen against A (*de tabel*: one row per step,
the article in the last column) and C (*de brief*: the four lines of the beschikking first,
then the origin of each figure), which stay in `site/layouts/` as the record of the choice.
Binding under P10.

*The ask as it stood from 2026-10-05 to 2026-10-09:* before the first page is built the
operator shows the owner three layouts of the result page — the same zorgtoeslag computation,
three ways — and he chooses. That choice is recorded here and becomes binding.

## Kleur, ruimte en pagina's

**Owner decision of 2026-10-20 (`BOARD.md`, Decisions; Ask 12), on the owner's brief of 2026-10-19
(`DESIGN-BRIEF-2026-10-19.md`). Design is the owner's alone; the board does not vote on it.**
The owner saw the specimen (`site/specimens/narekenen-a.html`, the front page filled from
`zt-2026-pub-007`, and the rule page `zt-2026-art2-1`), asked for one change (the space above the
page title equals the space above a field) and said yes on 2026-10-20. Binding under P10.

1. **Direction A, "het formulier".** White paper, near-black text, grey hairlines, a numbered form
   with large labels, the year as a row of choices, one button; the result in layout B.
2. **One accent colour, green**, for the one action and for links; nothing else green except the
   step numbers and the border of a chosen option.
3. **One error colour, red**, only for an error in what the citizen typed, always with a sentence
   that says what to do, never alone. No red in the result or the dossier: the law is not an error.
4. **The status word in two places**: beside the result, once ("Alle regels in deze berekening:
   …"), and beside each rule on its page. The site-wide status line is one sentence in the footer.
   The words are the repository's (`LAW.md`), untranslated, in small caps.
5. **The dossier rendered on the site** (P9): one page per rule, per year of the law, per case and
   per discrepancy, under the site's own addresses; GitHub is the "Bron" link in the footer and on
   the Over page, nowhere else.
6. **A menu of four words**: Narekenen · Dossier · Wet · Over. It does not stick. No hamburger.
7. **Four type sizes** that scale with the viewport (18px body on a phone, about 20px at 1280px,
   22px at 1920px). Sans for everything the site says in its own voice; serif for every quotation
   of the law and every article reference. Both self-hosted, subset, under `site/fonts/`.
8. **Every colour, size and spacing is a token** in `site/static/tokens.css`; no other file carries
   a hex value or a pixel size (the two media-query breakpoints excepted, which CSS cannot read
   from a token). The space above every page title equals the space above a field (`--kop-ruimte`).
9. **Phone first, one breakpoint** at 720px: one column below it, the margin note under its step,
   the menu under the wordmark; 44px targets; no horizontal scroll at 320px or 400% zoom.
10. **No dark mode, no shadows, no gradients, no illustration**; the only icons are the padlock on
    the privacy line and the fold arrow.

The token values, the fifteen components, the address map from `law/` to the site, the decisions
taken in building it and the verification are in `site/DESIGN-amendment.md`, which is the working
record of this section. A change to a colour, a size or a spacing is a change to `tokens.css` and a
line here; the owner decides it.

**Verification (2026-10-20, branch `design`, after merging `main` and before the merge into it; the full
record is in `site/DESIGN-amendment.md`, "Verification").** axe-core 4.10.2 with the WCAG 2.0/2.1/2.2 A and
AA rules: 0 violations on all 18 pages checked, one of every kind. Reflow: no horizontal scroll at 320 px or
at 400% zoom on any of them. Keyboard-only run through the form to the result, with the network cut after
first load: the result renders, the amount equals the server-rendered specimen, seven same-origin requests
and nothing else. Slow 3G (400 kbit/s, 400 ms), cache off: front page 214 KB uncompressed
(about 99 KB as served, compressed) in 7 requests, loaded in 4.9 s; a rule
page 96 KB (about 72 KB compressed) in 6 requests, 3.0 s.
All 251 addresses reachable from the front page, 0 broken links; every address the site served before
still answers. Both encodings agree on all 205 cases. Contrast of every pair measured and passing. Every
sentence in the site's own voice checked at B1. The result printed to PDF
(`site/specimens/narekenen-a.pdf`). Screenshots of every page kind at 390 and 1280 px in `site/specimens/`.

**Merged 2026-10-20.** The owner answered Ask 13 ("Design branch complete; verification in `DESIGN.md`.
Merge?") with "Yes go ahead and merge." Branch `design` merged into `main` the same day (merge commit
on `main`), after `main` (the operator's runs 6–11) was merged into it once more. Live check: checked 2026-10-20 08:54 UTC: https://toeslagrecht.nl/static/tokens.css answers 200 with the new tokens, https://toeslagrecht.nl/dossier/zorgtoeslag/zt-2026-art2-1/ answers 200 (title: aanspraak), the front page is the form, and /layouts/b.html is 404 as the workflow intends.
