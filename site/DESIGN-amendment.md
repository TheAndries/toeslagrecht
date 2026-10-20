# site/DESIGN-amendment.md — "Kleur, ruimte en pagina's" (draft amendment to `DESIGN.md`)

**Status: the owner's design, pending his yes on the specimen (`ASKS.md` 8). Not a board matter: design is decided by the owner alone (`BOARD.md`, owner decision 2026-10-20); the motion of 2026-10-19 is withdrawn.** Written by the
design agent on branch `design`, owner-initiated session of 2026-10-19, under
`DESIGN-BRIEF-2026-10-19.md`. Until the vote, `DESIGN.md` stands unchanged. When the vote is
in, the sections marked *motion* move into `DESIGN.md` under the heading "Kleur, ruimte en
pagina's" with the date and the decision line; the rest of this file stays here as the
working record (token values, address map, decisions, verification).

## The design, in plain lines

1. One accent colour, green, for the one action and for links. Nothing else is green except
   the step numbers and the border of a chosen option.
2. A second colour, red, reserved for an error in what the citizen typed, always with a
   sentence that says what to do, never alone. No red in the result or the dossier.
3. The status word in one place beside the result, once, and beside each rule on its page.
   The site-wide status line leaves the top of the front page and goes to the footer, in one
   sentence.
4. The dossier rendered on the site: one page per rule, per year of the law, per discrepancy
   and per case, under the site's own addresses. GitHub is one "Bron" link in the footer and
   one on the Over page.
5. A menu of four words: Narekenen · Dossier · Wet · Over.
6. Four type sizes, scaling with the viewport. The interface in a sans, the law in a serif,
   both self-hosted.
7. Direction A, "het formulier": white paper, near-black text, grey rules, a numbered form,
   the result in layout B as decided on 2026-10-09.

The token values below are the appendix.

## Principles, corrected to `DESIGN.md`'s numbering

The brief names the principles by their subject; `DESIGN.md` numbers them. Checked
2026-10-19 against `DESIGN.md` as it stands:

| Brief's name | `DESIGN.md` | What it already fixes | What this amendment adds |
| --- | --- | --- | --- |
| Dutch at B1 | **P1** | Every sentence a citizen reads | The interface copy of the brief, at B1; law sentences as `law/` renders them |
| Phone first | **P7** | Static, fast, old phone, JavaScript off except the computation | One breakpoint at 720px, one column by default, 18px minimum body on a phone, 44px targets, the margin note folding under the step |
| WCAG 2.2 AA | **P6** ("Accessible without exception") | Binding | A written audit as a merge condition (section "Verification" below) |
| Status in words, one place | **P4** | Never a colour alone | The status word component beside the result once, and beside each rule on its page |
| Looks like it has nothing to sell | **P8** | No marketing, no imagery | White paper, one green, no illustration, only the padlock icon; the form is the page |
| The record one click away | **P9** | Every number traceable to an article | The dossier rendered on the site; GitHub links become "Bron" |
| Layout B for the result | the section "The result page: layout B" (owner decision 2026-10-09) | Year amount first, one honest sentence, numbered steps with article, status and arithmetic beside each | The step row and margin note components, built to that choice |

Not named by the brief but honoured: **P2** (the computation is the page: the steps stay the
result), **P3** (one honest sentence, once), **P5** (nothing leaves the device, said once where
the inputs are entered and once above the button).

The brief's table has no numbering errors of its own; it simply does not number. Rendering the
dossier on the site is what P9 already requires and is therefore not part of the motion.

## Tokens (appendix to the motion)

All in `site/static/tokens.css`. No other file under `site/` or `tools/` carries a hex value,
a font name or a pixel size that is not one of these.

| Token | Value | Use | Contrast on `--paper` (measured 2026-10-19, WCAG formula) |
| --- | --- | --- | --- |
| `--paper` | `#FFFFFF` | page | — |
| `--paper-2` | `#F4F5F4` | citation blocks, quiet panels | 1.09:1 against paper (a surface, not text) |
| `--ink` | `#1A1A1A` | text, the strong rule, focus outline | 17.40:1 |
| `--ink-2` | `#3D4441` | explanatory text, margin notes | 9.99:1 (9.14:1 on `--paper-2`) |
| `--muted` | `#5F6662` | help text, notes, footer | 5.89:1 (5.39:1 on `--paper-2`); as the unchosen option's border 5.89:1 |
| `--rule` | `#D7DAD8` | hairlines | 1.41:1 (decorative hairline; never the only boundary of a control) |
| `--rule-strong` | `#1A1A1A` | the line above the result | 17.40:1 |
| `--green` | `#1F5C45` | button fill, links, step numbers, chosen border | 7.85:1 as text and as a border; `--paper` text on it 7.85:1; 7.18:1 on `--paper-2`; as a border on `--green-paper` 6.74:1 |
| `--green-ink` | `#143D2E` | hover | 12.09:1 |
| `--green-paper` | `#E6F0EB` | the chosen option's fill | `--ink` on it 14.94:1 |
| `--error` | `#A32019` | error text and the field's border in error | 7.56:1 |
| `--error-paper` | `#FBECEA` | reserved; not used in this pass | — |
| `--focus` | `#1A1A1A` | 3px outline, 2px offset | 17.40:1 (14.94:1 on `--green-paper`) |
| `--sans` | Source Sans 3, Segoe UI, system-ui | the interface | |
| `--serif` | Source Serif 4, Georgia | the law | |
| `--size-3` | `clamp(1.125rem, 1rem + 0.4vw, 1.375rem)` | body: 18px on a phone, about 20px at 1280, 22px at 1920 | |
| `--size-1` | `calc(var(--size-3) * 2.1)` | the question, the amount; line-height 1.15 | |
| `--size-2` | `calc(var(--size-3) * 1.25)` | field labels, section headings; line-height 1.3 | |
| `--size-4` | `calc(var(--size-3) * 0.875)` | margin notes, status, footer; 15.75px at the smallest | |
| `--leading` | `1.55` | body line height | |
| `--measure` | `60ch` | form and result | |
| `--page` | `760px` | the one column | |
| `--page-wide` | `1040px` | dossier index pages may use it; this pass does not | |
| `--gutter` | `1.5rem`, `1rem` under 400px | | |
| `--s-1` … `--s-6` | 0.5, 1, 1.5, 2, 3, 4 rem | spacing | |
| `--radius` | `4px` | | |
| `--target` | `44px` | minimum height of anything tappable | |

The ratios are computed from the hex values with the WCAG 2.x relative-luminance formula
(`tools/contrast.py`, run on 2026-10-19). Two sizes are not tokens because CSS cannot read a custom
property inside a media query: the one breakpoint (720px) and the narrow-gutter threshold (400px)
stand in `site.css` and `tokens.css` as literals, with a comment. Every text pair is above 4.5:1 and every border or
focus indicator that carries meaning is above 3:1.

## Fonts

`site/fonts/`: Source Sans 3 Regular and Semibold, Source Serif 4 Regular, Italic and
Semibold, from Adobe's `release` branches, subset with fontTools to U+0020–007E, U+00A0–00FF,
U+0100–017F (Latin Extended-A), general punctuation U+2010–2027 and U+2030–203A, € (U+20AC),
− (U+2212), ≤ ≥ (U+2264–2265), → (U+2192), × ÷; layout features kept: kern, liga, tnum, pnum,
lnum, onum, smcp, c2sc, mark, mkmk. Output `woff2`, `font-display: swap`, OFL 1.1 beside them
(`site/fonts/LICENSE-source-sans.md`, `site/fonts/LICENSE-source-serif.md`).

| File | Bytes |
| --- | --- |
| `SourceSans3-Regular.woff2` | 20 480 |
| `SourceSans3-Semibold.woff2` | 20 424 |
| `SourceSerif4-Regular.woff2` | 26 236 |
| `SourceSerif4-It.woff2` | 20 424 |
| `SourceSerif4-Semibold.woff2` | 28 216 |
| total | 115 780 (under the brief's 160 KB; Serif 600 kept) |

## Components

Fourteen, each one block of markup and one block of classes in `site/static/site.css`, all
shown in every state in `site/specimens/components.html`:

1. Header and menu (`.kop`, `.menu`)
2. Question title and lead (`.vraag`, `.lead`)
3. Year choice (`.keuze`, `.keuze-vak`)
4. Numbered field (`.veld`, `.veld-nr`, `.invoer`)
5. Yes/no choice (`.keuze` with two boxes)
6. Primary button (`.knop`)
7. Privacy line (`.privacy`)
8. Amount (`.bedrag`)
9. Step row (`.stap`)
10. Margin note (`.kantlijn`)
11. Status word (`.status`)
12. Citation block (`.citaat`)
13. Contents list (`.inhoud`)
14. Error message (`.fout`, `.in-fout`)
15. Footer (`.voet`) — the brief counts fourteen and lists fifteen; all fifteen are built.

## Pages and the address map

Every page the site served before the branch keeps its address. Every rendered source gets
exactly one address. Relative links are computed per page depth, so the site works from a
checkout (`file://`), from `theandries.github.io/toeslagrecht/` and from `toeslagrecht.nl/`.

| Source | Address | Page kind |
| --- | --- | --- |
| `tools/build.py` (the form) | `/` (`index.html`) | 1 Narekenen |
| the same form | `/zorgtoeslag.html` | 1 Narekenen — the old checker's address, kept; same page |
| the rule lists, the links onward | `/dossier/` | 2 Dossier index |
| `law/zorgtoeslag/rules.md` preamble and "Niet gecodeerd" | `/dossier/zorgtoeslag/` | 2 (about the rules of one toeslag) |
| `law/awir/rules.md` preamble | `/dossier/awir/` | 2 (about the shared rules) |
| `law/zorgtoeslag/rules.md`, each `## <id> — <name>` section | `/dossier/zorgtoeslag/<id>/` | 2 rule page |
| `law/awir/rules.md`, each `## <id> — <name>` section | `/dossier/awir/<id>/` | 2 rule page |
| `cases/<id>.yaml` with its row in `law/zorgtoeslag/tests/report.md` | `/dossier/voorbeelden/<id>/` | 2 case page |
| `law/zorgtoeslag/tests/report.md` (summary) and `cases/README.md` | `/dossier/voorbeelden/` | 2 case index |
| `law/zorgtoeslag/parameters/<jaar>.yaml` + `law/awir/parameters/<jaar>.yaml` + the rows of `law/CHANGES.md` effective that year | `/wet/<jaar>/` | 3 year page |
| the years, newest first, with their source line from the parameter file | `/wet/` | 3 Wet index |
| `law/CHANGES.md` | `/wet/wijzigingen/` | 3 (the full amendments table) |
| `law/SOURCES.md` | `/wet/bronnen/` | 3 (the dated source index) |
| `DISCREPANCIES.md`, the table | `/verschillen/` | 4 index |
| `DISCREPANCIES.md`, row `#n` | `/verschillen/<n>/` | 4 entry |
| `DISPUTES.md` | `/betwisten/` | 5 |
| `CASES.md` | `/insturen/` | 6 |
| the brief's sentences, `BOARD.md` (who), `LAW.md` (status words), `LICENSE`, `LICENSE-DATA` | `/over/` | 7 |
| `site/layouts/{a,b,c}.html` | unchanged, unlinked | kept only because the address existed (see decisions) |
| `site/zorgtoeslag-regels.js`, `site/zorgtoeslag-parameters.js` | unchanged addresses | the calculation |
| `law/zorgtoeslag/rules.py` | not rendered | code; reachable through "Bron" |

A new rule section in `rules.md`, a new parameter year, a new case file or a new row in
`DISCREPANCIES.md` gets its page from the build without a decision.

### What `law/` has that could not be rendered as the brief describes, without changing data

- **The Wet year pages.** `law/` does not hold the acts article by article; it holds, per
  year, every parameter with its article, its source and, for some, the quoted text
  (`tekst`). The year page therefore renders each parameter as a citation block (the quoted
  text where `law/` has it, else the article reference and the value), anchored by key, plus
  the amendments effective that year from `law/CHANGES.md`. A full article-by-article text is
  a `law/` matter for the operator; noted in `INBOX.md`.
- **The discrepancy log, the dispute protocol and the submission protocol are in English**
  (`DISCREPANCIES.md`, `DISPUTES.md`, `CASES.md`). They are rendered verbatim, each under a
  Dutch B1 title with one Dutch sentence saying the text follows in English as the record
  keeps it. Translating a protocol would be writing a sentence the brief does not supply;
  noted in `INBOX.md` as a board matter.
- **Disputes.** No dispute exists yet, so a rule page's "Verschillen en geschillen" lists the
  discrepancies that name the rule, or "Nog geen."

## Decisions taken by the design agent (one line of reasoning each)

1. **The form keeps every input the law needs.** The brief's three numbered fields (inkomen,
   toeslagpartner, vermogen) are the form; the partner's income and whether the partner is
   insured appear as fields 2a and 2b only when "Ja" is chosen, and the rare situations
   (partner not the whole year, living abroad, woonland) sit in one "Meer situaties" block
   under field 3. Reason: the arithmetic and its inputs are off limits, and dropping an input
   would change what the checker can compute.
2. **The Over page does not explain the three layouts.** The brief asks for it; the owner
   decided on 2026-10-11 (`BOARD.md`) that board decisions and design choices are never
   published on the website. `DESIGN.md`'s owner decisions win over the brief. Flagged in
   the checkpoint ask so the owner can say otherwise.
3. **`site/layouts/` stay at their addresses, unlinked and unchanged.** Every existing address
   must still answer; the owner's 2026-10-11 decision said the layouts may stay in the
   repository as the record. Moving them out of `site/` is the operator's open item; noted in
   `INBOX.md`.
4. **`/zorgtoeslag.html` serves the same form as `/`.** A redirect page would be an extra hop
   for someone with a bookmark; a copy costs nothing.
5. **The status word is the repository's word** (`draft`, `tested`, `reviewed`, `established`,
   `contested`, `LAW.md`), set in small caps, unchanged and untranslated; what each means is
   explained once on the Over page, in the words `LAW.md` gives.
6. **Case pages exist** under `/dossier/voorbeelden/<id>/`: the brief lists "per case" among the
   pages, and each case is the record's evidence for a rule. Each shows the inputs, the source,
   the expected and computed amounts from the test report, and the steps with margin notes.
7. **All seven page kinds are rendered by the build at step 3**, not only the dossier, so the
   menu and footer of the specimen have no dead link. Step 6 (after the vote) revisits each
   page kind in the brief's order; until then they are first renders.
8. **Addresses are directories with `index.html`** (`/dossier/zorgtoeslag/zt-2026-art2-1/`), as
   the brief writes them; GitHub Pages serves them as written.
9. **Help sentences and labels are the existing checker's** where the brief gives no words,
   shortened only where a sentence had two ideas. The brief allows rewriting the site's own
   explanations only where it supplies the words.
10. **Hyphenation** `auto` under 720px with `lang="nl"`, `manual` above, as the brief says.
11. **No dark mode**: `DESIGN.md` does not require it; `color-scheme: light`.
12. **The specimen case** is `zt-2026-pub-007`: the Dienst's own rekenvoorbeeld 1 for 2026,
    zonder partner, toetsingsinkomen € 19.000, no vermogen — the plainest published case.
13. **The brief and the mockup were not in the repository**; the brief is saved verbatim as
    `DESIGN-BRIEF-2026-10-19.md` and the mockup copied from the owner's Downloads folder beside
    it, so the record has both.

## Sentences written for the Over page (for the owner's B1 check)

The brief asks for the Over page as "a heading and a short paragraph" per section but supplies
no words. These are the agent's, at B1, and the owner can strike any of them at the checkpoint:
the three paragraphs under "Wat dit is, en wat niet" and "Wie dit maakt, en hoe"; the five
one-line explanations of the status words, drawn from `LAW.md`'s definitions; the licence
paragraph; the contact paragraph (which points to the source as an issue, because no
e-mail address is set up yet, `ASKS.md` 4). The layouts A, B and C are not mentioned
(decision 2). The lead sentences of the Dossier, Wet, Voorbeelden and Verschillen indexes, the
one-line "the text follows in English" notes, and the two textarea instructions are likewise
the agent's, at B1.

## State at the specimen checkpoint (2026-10-19)

Steps 1-4 of the brief are done on branch `design`; step 5 onward waits for the owner's yes and
vote (`ASKS.md` 8). Built and measured so far:

- `site/specimens/narekenen-a.html`: the front page filled from `zt-2026-pub-007`, result from
  `rules.py`; screenshots `narekenen-a-390.png`, `narekenen-a-1280.png` beside it, and the rule page
  `regel-zt-2026-art2-1-390.png`, `-1280.png`. No branch preview: GitHub Pages builds `main` only.
- The form in Edge (`tools/formtest.py`): keyboard-only from the skip link to the result; an empty
  submit gives two error sentences and moves focus to field 1; the network cut after first load, the
  result renders; the amount equals the specimen's; eight requests, all same-origin (page, two
  stylesheets, two scripts, three fonts).
- Parity: 170 cases through `rules.py` and `zorgtoeslag-regels.js`, 0 differences (`build.py check`).
- Reflow: no horizontal overflow at 320 or 1280 px on any of the thirteen page kinds checked
  (`tools/shoot.py overflow`).
- Weight, uncompressed: front page 160 KB with three fonts (page 19.5, tokens 2.8, site.css 13.9,
  parameters 39.1, rules 17.6, fonts 67.1); gzip-compressed about 89 KB. A rule page 93 KB with
  fonts (page 9.0). Both under the brief's limits (180 / 120 KB).
- Contrast: every pair in the token table, `tools/contrast.py`, all pass.
- Hex values and pixel sizes: none outside `tokens.css` except the two media-query literals.

## Verification (step 7, run 2026-10-20 in Edge via Playwright; `tools/verify.py`, `tools/formtest.py`)

### WCAG 2.2 AA, criterion by criterion (the brief's list)

| SC | Requirement | Result |
| --- | --- | --- |
| 1.1.1 | Non-text content | The padlock and the fold arrow are `aria-hidden` SVG / CSS with the meaning in the words beside them; no other images. Pass. |
| 1.3.1 | Info and relationships | One `h1` per page, headings in order (axe `heading-order`: 0 on every page kind after the fix of 2026-10-20); labels tied by `for`, groups as `fieldset`/`legend`, the steps an `ol`, citations `blockquote` with `cite`, tables with `th`. Pass. |
| 1.4.1 | Use of colour | The chosen year and Ja/Nee are marked by border weight, fill and the radio's own state; errors by border, text and the message; status by the word. Pass. |
| 1.4.3 | Contrast (minimum) | Every text pair 5.39:1 or better (`tools/contrast.py`, table above). Pass. |
| 1.4.4 | Resize text | Sizes in rem/clamp; at 200% nothing is lost (the 400% reflow test covers it). Pass. |
| 1.4.10 | Reflow | No horizontal scroll at 320 CSS px, nor at 400% zoom on a 1280 px window (emulated as a 320 CSS-px viewport at device scale 4), on all 18 pages checked. Pass. |
| 1.4.11 | Non-text contrast | Input border, chosen border, error border and focus outline all 5.89:1 or better. Pass. |
| 1.4.12 | Text spacing | Line height 1.55, paragraph spacing 1rem; no fixed heights on text. Pass. |
| 2.1.1 | Keyboard | Keyboard-only run below. Pass. |
| 2.2.1 / 2.3.3 | Timing, animation | None. Pass. |
| 2.4.1 | Bypass blocks | The skip link is the first focusable element (asserted in `formtest.py`). Pass. |
| 2.4.3 | Focus order | Reading order; no `tabindex` above 0; the result region takes focus when it appears. Pass. |
| 2.4.7 / 2.4.11 | Focus visible, not obscured | 3px `--focus` outline, 2px offset, on everything; nothing sticky. Pass. |
| 2.5.8 | Target size | Every button, radio box, menu item and list entry at least 44px tall, 0.5rem apart; links in running text exempt. Pass. |
| 3.1.1 | Language of page | `lang="nl"` on every page. Pass. |
| 3.3.1 / 3.3.3 | Error identification, suggestion | The message names the field and says what to do ("Vul uw toetsingsinkomen in, in hele euro's. Bijvoorbeeld 28000."); `aria-invalid`, `aria-describedby`; focus moves to the first field in error. Pass. |
| 3.3.7 | Redundant entry | Nothing is asked twice; no name, BSN or address anywhere. Pass. |
| 4.1.3 | Status messages | The result region is `aria-live="polite"`. Pass. |

### Automated pass and the rest

- **Links.** 207 addresses reached from the front page, 0 broken. Pages not reachable from any link (layouts and specimens excepted): 1: `zorgtoeslag.html`.
- **Old addresses.** `index.html` 200, `zorgtoeslag.html` 200, `layouts/a.html` 200, `layouts/b.html` 200, `layouts/c.html` 200, `zorgtoeslag-regels.js` 200, `zorgtoeslag-parameters.js` 200.
- **axe-core 4.10.2 (WCAG 2.0/2.1/2.2 A+AA rules and best practice):**
  - `index.html`: 0 violations
  - `zorgtoeslag.html`: 0 violations
  - `specimens/narekenen-a.html`: 0 violations
  - `dossier/index.html`: 0 violations
  - `dossier/zorgtoeslag/index.html`: 0 violations
  - `dossier/zorgtoeslag/zt-2026-art2-1/index.html`: 0 violations
  - `dossier/awir/awir-2026-art14-4/index.html`: 0 violations
  - `dossier/voorbeelden/index.html`: 0 violations
  - `dossier/voorbeelden/zt-2026-pub-007/index.html`: 0 violations
  - `wet/index.html`: 0 violations
  - `wet/2026/index.html`: 0 violations
  - `wet/wijzigingen/index.html`: 0 violations
  - `wet/bronnen/index.html`: 0 violations
  - `verschillen/index.html`: 0 violations
  - `verschillen/1/index.html`: 0 violations
  - `betwisten/index.html`: 0 violations
  - `insturen/index.html`: 0 violations
  - `over/index.html`: 0 violations
- **Reflow (SC 1.4.10):**
  - `index.html`: 320px ok; 400% zoom on 1280px ok
  - `zorgtoeslag.html`: 320px ok; 400% zoom on 1280px ok
  - `specimens/narekenen-a.html`: 320px ok; 400% zoom on 1280px ok
  - `dossier/index.html`: 320px ok; 400% zoom on 1280px ok
  - `dossier/zorgtoeslag/index.html`: 320px ok; 400% zoom on 1280px ok
  - `dossier/zorgtoeslag/zt-2026-art2-1/index.html`: 320px ok; 400% zoom on 1280px ok
  - `dossier/awir/awir-2026-art14-4/index.html`: 320px ok; 400% zoom on 1280px ok
  - `dossier/voorbeelden/index.html`: 320px ok; 400% zoom on 1280px ok
  - `dossier/voorbeelden/zt-2026-pub-007/index.html`: 320px ok; 400% zoom on 1280px ok
  - `wet/index.html`: 320px ok; 400% zoom on 1280px ok
  - `wet/2026/index.html`: 320px ok; 400% zoom on 1280px ok
  - `wet/wijzigingen/index.html`: 320px ok; 400% zoom on 1280px ok
  - `wet/bronnen/index.html`: 320px ok; 400% zoom on 1280px ok
  - `verschillen/index.html`: 320px ok; 400% zoom on 1280px ok
  - `verschillen/1/index.html`: 320px ok; 400% zoom on 1280px ok
  - `betwisten/index.html`: 320px ok; 400% zoom on 1280px ok
  - `insturen/index.html`: 320px ok; 400% zoom on 1280px ok
  - `over/index.html`: 320px ok; 400% zoom on 1280px ok
- **Screenshots** in `site/specimens/`: `narekenen-390.png` 21 KB, `narekenen-1280.png` 33 KB, `narekenen-oud-adres-390.png` 21 KB, `narekenen-oud-adres-1280.png` 33 KB, `specimen-390.png` 26 KB, `specimen-1280.png` 36 KB, `dossier-390.png` 17 KB, `dossier-1280.png` 26 KB, `dossier-toeslag-390.png` 29 KB, `dossier-toeslag-1280.png` 52 KB, `regel-390.png` 22 KB, `regel-1280.png` 33 KB, `regel-awir-390.png` 30 KB, `regel-awir-1280.png` 49 KB, `voorbeelden-390.png` 30 KB, `voorbeelden-1280.png` 48 KB, `voorbeeld-390.png` 19 KB, `voorbeeld-1280.png` 29 KB, `wet-390.png` 19 KB, `wet-1280.png` 26 KB, `wet-jaar-390.png` 21 KB, `wet-jaar-1280.png` 36 KB, `wet-wijzigingen-390.png` 22 KB, `wet-wijzigingen-1280.png` 32 KB, `wet-bronnen-390.png` 25 KB, `wet-bronnen-1280.png` 38 KB, `verschillen-390.png` 21 KB, `verschillen-1280.png` 35 KB, `verschil-390.png` 21 KB, `verschil-1280.png` 41 KB, `betwisten-390.png` 23 KB, `betwisten-1280.png` 33 KB, `insturen-390.png` 23 KB, `insturen-1280.png` 31 KB, `over-390.png` 25 KB, `over-1280.png` 39 KB.
- **Weight and timing:**
  - `index.html`: 7 requests, 130 KB uncompressed, load event 3.2 s, network idle 3.7 s (slow 3G: 400 kbit/s, 400 ms latency, cache off)
  - `dossier/zorgtoeslag/zt-2026-art2-1/index.html`: 6 requests, 90 KB uncompressed, load event 1.2 s, network idle 3.5 s (slow 3G: 400 kbit/s, 400 ms latency, cache off)
- **Print.** `site/specimens/narekenen-a.pdf`, 47 KB, A4, from the specimen with `@media print`.

- **Offline.** `tools/formtest.py`: the network is cut after the first load; the form submits and the
  result renders; the amount equals the server-rendered specimen's; the requests are the page, two
  stylesheets, two scripts and three fonts, all same-origin. No service worker, no cookie, nothing stored.
- **Keyboard-only run** (`tools/formtest.py`, 390 px): Tab lands on the skip link first; an empty
  submit shows two error sentences and moves focus to field 1; typing clears the error; the partner
  choice is made with the arrow keys; Enter on the button renders the result and focus moves to it.
  Three lines: skip link → fields in reading order → button → result region focused.
- **Accessibility-tree pass** (stated as such, not a screen-reader run; `aria_snapshot` below): the form
  exposes the year and partner groups with their legends, every textbox with its full label, the help
  text as paragraphs; the result exposes the amount, the honest sentence with its link, the status line,
  and the steps as a list of items each with its article link and status; a rule page exposes one
  heading level 1, the status line, the citation and the three contents lists.
- **Old addresses.** All seven answer 200 (table above). `zorgtoeslag.html` is kept deliberately
  unlinked: it is the old checker's address and serves the same page as `/`.
- **B1 check.** Every sentence in the site's own voice (the brief's sentences, the labels, the help
  sentences, the lead sentences, the Over page, the two textarea instructions, the error messages) was
  read once more on 2026-10-20 for length, common words and one idea per sentence; the help sentence
  of field 3 is the longest and keeps the old checker's wording. Done.
- **Print.** The specimen printed to `site/specimens/narekenen-a.pdf` (A4): header, menu, button and
  privacy line hidden; the result and the steps with the margin notes beside them, black on white;
  article references printed as text.

### Accessibility-tree snapshots

**The form** (`index.html`, `form#invoer`):

```
- group "Welk jaar?":
  - text: Welk jaar?
  - radio "2026" [checked]
  - text: "2026"
  - radio "2025"
  - text: "2025"
  - radio "2024"
  - text: "2024"
  - radio "2023"
  - text: "2023"
- text: Uw toetsingsinkomen in dat jaar, in hele euro's
- paragraph: "Uw inkomen zoals de Belastingdienst het voor dat jaar vaststelt: meestal het verzamelinkomen uit uw aangifte, anders uw loon. Bijvoorbeeld 28000."
- textbox "Uw toetsingsinkomen in dat jaar, in hele euro's"
- group "Hebt u een toeslagpartner?":
  - text: Hebt u een toeslagpartner?
  - paragraph: Een toeslagpartner is meestal degene met wie u getrouwd bent, een geregistreerd partnerschap hebt, of samen een kind of een koophuis hebt. Twijfelt u? Dan kijkt u op toeslagen.nl.
  - radio "Ja"
  - text: Ja
  - radio "Nee"
  - text: Nee
- text: Uw vermogen op 1 januari, samen met uw partner als u die hebt, in hele euro's
- paragraph: "De rendementsgrondslag uit box 3: spaargeld, beleggingen en een tweede huis, min schulden, boven het heffingvrije vermogen. Bijvoorbeeld 4500. Laat het leeg als u het niet weet; dan slaat de berekening de vermogenstoets over en zegt zij dat."
- textbox "Uw vermogen op 1 januari, samen met uw partner als u die hebt, in hele euro's"
- group: "▸ Meer situaties: niet het hele jaar dezelfde partner, of wonen buiten Nederland"
- paragraph: Niets van wat u invult verlaat uw telefoon of computer.
- paragraph:
  - button "Bereken mijn zorgtoeslag"
```

**The result** (`specimens/narekenen-a.html`, `#uitkomst`):

```
- paragraph: Naar de letter van de wet krijgt u in 2026
- paragraph: € 1.550 per jaar
- paragraph: Berekend € 1.550,46 per jaar, afgerond op hele euro’s (Awir art. 14 lid 4). Per maand is dat € 129,20. Dienst Toeslagen betaalt hele euro’s per maand en komt dan op € 129; waar dat afronden per maand in de wet staat, hebben wij niet gevonden.
- paragraph:
  - text: Dit is wat de wet zegt voor wat u invulde. Het is geen advies en geen aanvraag; aanvragen doet u op
  - link "toeslagen.nl":
    - /url: https://www.toeslagen.nl
  - text: .
- paragraph: "Alle regels in deze berekening: draft."
- list:
  - listitem:
    - paragraph: "Uw toetsingsinkomen telt; u hebt geen partner. Uitkomst: € 19.000,00."
    - paragraph:
      - link "Awir art. 7 lid 1":
        - /url: ../dossier/awir/awir-2026-art7-1/index.html
      - text: · draft 19000
  - listitem:
    - paragraph: "Is het vermogen op 1 januari boven de grens, dan is er het hele jaar geen zorgtoeslag. Uitkomst: niet getoetst, want geen vermogen opgegeven."
    - paragraph:
      - link "Wzt art. 3 lid 1 (BWBR0018451, geldend van 01-01-2026)":
        - /url: ../dossier/zorgtoeslag/zt-2026-art3-1/index.html
      - text: · draft Geen vermogen opgegeven; de vermogenstoets is niet uitgevoerd.
  - listitem:
    - paragraph: "Het drempelinkomen: 108% van twaalf keer het minimumloon per maand van januari. Uitkomst: € 29.735,42."
    - paragraph:
      - link "Wzt art. 1 lid 1 onder f; WML art. 8 lid 1 onder b":
        - /url: ../dossier/zorgtoeslag/zt-2026-art1-1f/index.html
      - text: · draft 108% × 12 × 2294.40
  - listitem:
    - paragraph: "De normpremie: wat u volgens de wet zelf aan premie kunt dragen. Uitkomst: € 568,54."
    - paragraph:
      - link "Wzt art. 2 lid 2 en 3 (BWBR0018451, geldend van 01-01-2026)":
        - /url: ../dossier/zorgtoeslag/zt-2026-art2-2/index.html
      - text: · draft 1.912% × 29735.424 + 13.730% × max(0, 19000 − 29735.424) = 568.541 + 0
  - listitem:
    - paragraph: "De standaardpremie min de normpremie. Uitkomst: € 1.550,46."
    - paragraph:
      - link "Wzt art. 2 lid 1 (BWBR0018451, geldend van 01-01-2026); Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2026, art. 1":
        - /url: ../dossier/zorgtoeslag/zt-2026-art2-1/index.html
      - text: · draft 2119 − 568.541
  - listitem:
    - paragraph: "Het bedrag van de zorgtoeslag wordt afgerond op hele euro's. Uitkomst: € 1.550,00."
    - paragraph:
      - link "A
```

**A rule page** (`dossier/zorgtoeslag/zt-2026-art2-1/index.html`, `main`):

```
- main:
  - heading "aanspraak" [level=1]
  - paragraph:
    - text: "Status: draft · regel"
    - code: zt-2026-art2-1
  - blockquote:
    - paragraph: Wzt art. 2 lid 1 (BWBR0018451, geldend van 01-01-2026).
    - text: Het artikel zoals de regel het aanhaalt · draft
  - paragraph:
    - strong: "In gewoon Nederlands:"
    - text: Is uw normpremie lager dan de standaardpremie, dan is uw zorgtoeslag het verschil. Hebt u een partner, dan telt de standaardpremie twee keer en hebben u en uw partner samen één aanspraak.
  - heading "De berekening" [level=2]
  - paragraph:
    - code: aanspraak_jaar
    - text: = (standaardpremie van u, plus die van uw partner als u er een hebt; zie
    - code: zt-2026-art4
    - text: en
    - code: "-art4a"
    - text: ) − normpremie, en nul als dat negatief is. Dit is het berekende bedrag; het toegekende bedrag volgt uit
    - code: awir-2026-art14-4
    - text: en
    - code: "-art14-5"
    - text: .
  - heading "Waar de wet ruimte laat" [level=2]
  - paragraph: geen.
  - heading "Versies per jaar" [level=2]
  - list:
    - listitem:
      - link "De wet in 2026":
        - /url: ../../../wet/2026/index.html
    - listitem:
      - link "De wet in 2025":
        - /url: ../../../wet/2025/index.html
    - listitem:
      - link "De wet in 2024":
        - /url: ../../../wet/2024/index.html
      - text: BWBR0018451, geldend van 01-01-2024 t/m 05-11-2024; vanaf 06-11-2024 t/m 31-12-2024 vernummerd (art. 2a → 3, art. 3 → 4a), bedragen gelijk
    - listitem:
      - link "De wet in 2023":
        - /url: ../../../wet/2023/index.html
      - text: BWBR0018451, geldend van 01-01-2023 t/m 31-12-2023 (verbatim gelezen 2026-10-11)
  - heading "Voorbeelden die deze regel testen" [level=2]
  - list:
    - listitem:
      - link "zt-2023-pub-001":
        - /url: ../../../dossier/voorbeelden/zt-2023-pub-001/index.html
      - text: 2023 · published · FAIL
    - listitem:
      - link "zt-2023-pub-002":
        - /url: ../../../dossier/voorbeelden/zt-2023-pub-002/index.html
      - text: 2023 · published · FAIL
    - listitem:
      - link "zt-2023-pub-003":
        - /url: ../../../dossier/voorbeelden/zt-2023-pub-003/index.html
      - text: 2023 · published · FAIL
    - listitem:
      - link "zt-2023-pub-004":
        - /url: ../../../dossier/voorbeelden/zt-2023-pub-004/index.html
      - text: 2023 · published · PASS
    - listitem:
      - link "zt-2023-pub-005":
        - /url: ../../../dossier/voorbeelden/zt-2023-pub-005/index.ht
```
