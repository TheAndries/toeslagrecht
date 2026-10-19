# site/DESIGN-amendment.md — "Kleur, ruimte en pagina's" (draft amendment to `DESIGN.md`)

**Status: draft. Not binding until the owner votes (`BOARD.md`, open motions).** Written by the
design agent on branch `design`, owner-initiated session of 2026-10-19, under
`DESIGN-BRIEF-2026-10-19.md`. Until the vote, `DESIGN.md` stands unchanged. When the vote is
in, the sections marked *motion* move into `DESIGN.md` under the heading "Kleur, ruimte en
pagina's" with the date and the decision line; the rest of this file stays here as the
working record (token values, address map, decisions, verification).

## The motion, in plain lines (what the owner votes on)

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

The token values below are the appendix to the motion, not the motion.

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
(`tools/contrast.py`, run on 2026-10-19). Every text pair is above 4.5:1 and every border or
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
| `law/zorgtoeslag/rules.md` preamble and "Niet gecodeerd", `law/awir/rules.md` preamble, `law/README.md` | `/dossier/` | 2 Dossier index |
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

## Verification (filled in at step 7)

*Not yet run. Sections to be written: screenshots, the WCAG 2.2 AA audit line by line, reflow,
offline, weight and timing, addresses, keyboard and accessibility-tree runs, the B1 check,
the print.*
