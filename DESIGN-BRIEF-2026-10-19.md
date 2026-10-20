# toeslagrecht design brief for the design agent

Oct 19, 2026 · @Andries

*Filed in the repository by the design agent on 2026-10-19, verbatim from the owner's paste, so that the owner note in `INBOX.md` and the decision in `BOARD.md` have the brief beside them. The reference mockup `toeslagrecht-mockup-a.html` sits beside it.*

## Read this first

You are the design agent for toeslagrecht.nl, in an owner-initiated session, on a branch, under `DESIGN.md` as it stands. You are not the operator and you do not file work for the operator's scheduled runs: everything in this brief is done in this session, by you, and merged by you after the owner's yes. The site's principles already bind (Dutch at B1, phone first, WCAG 2.2 AA, status in words, nothing to sell, the record one click away, layout B for the result as the owner chose on 2026-10-09). This work adds what was never decided — colour, spacing, type sizes, a menu, a page system — and makes one structural change: the dossier is rendered on the site instead of linked to GitHub.

**How this sits under the board.** toeslagrecht is a two-seat board. File this brief as an owner note in `INBOX.md` at the start, dated, and log the owner's choice of direction A (het formulier, chosen 2026-10-19) in `BOARD.md` as an owner decision. What the brief asks for in colour, type and pages is an *amendment* to `DESIGN.md` under a new heading "Kleur, ruimte en pagina's"; draft it as a motion and table it at the specimen checkpoint with the specimen as exhibit. Until the owner votes, `DESIGN.md` does not change. Rendering the dossier on the site is not an amendment: it is what principle 9 already requires, and a GitHub page is not "one click away" for a citizen on a phone.

**Off limits.** `law/` and everything in it: the rules, the cases, the law texts, the article references, the status of any rule. The status vocabulary as the repository defines it: use its words, in its language, and never invent one. The dispute protocol and the submission protocol. Every sentence that states what the law says. The year selector's logic and the arithmetic. Nothing stored, no network request, no cookie, no analytics, no framework, no font that is not self-hosted. No colour or wordmark that imitates Rijksoverheid, Belastingdienst or Dienst Toeslagen: the site must be as trustworthy as a government form, not mistaken for one.

**Not off limits.** The templates and stylesheets under `site/`, the build's output structure, the front page's order and interface copy, where the status line sits, how the dossier is rendered, and the explanatory text about the site itself.

**Branch and files.** Branch `design`. Tokens in `site/static/tokens.css`; page and component styles in `site/static/site.css`; fonts under `site/fonts/`; specimens under `site/specimens/`. Small commits with messages a reader can follow.

**Reference.** One static HTML mockup of direction A's front page, `toeslagrecht-mockup-a.html`, at the repository root beside this brief (`DESIGN-BRIEF-2026-10-19.md`). It is a sketch of colour, proportion and order, not a template. Its law sentences, article numbers and status words are illustrative and must not be carried over; the real ones come from `law/`. Where the mockup and this brief differ, the brief wins; where the brief and `DESIGN.md` differ, `DESIGN.md` wins.

## What this amendment adds, and the one structural change

The principles are named here as the brief understands them; check each against the numbering in `DESIGN.md` and correct the table in `site/DESIGN-amendment.md` if a number differs. Every principle is honoured as written.

| Principle | What it already fixes | What this brief adds |
| --- | --- | --- |
| Dutch at B1 | Every sentence a citizen reads | The interface copy below is written at B1; law sentences stay as `law/` renders them; the site's own explanations are rewritten only where this brief gives the words |
| Phone first | Built for an old phone on a slow connection | One breakpoint, one column by default, 18px minimum body on a phone, 24px targets, the margin note folding under the step |
| WCAG 2.2 AA | Binding | A written audit as a merge condition, not a wish; the list is in the requirements section |
| Status in words, one place | Never colour alone | The status word component, sitting beside the result once, and beside each rule on its page; the site-wide status line leaves the top of the front page |
| Looks like it has nothing to sell | No marketing, no imagery | White paper, one green, no illustration, no icons except the padlock and the arrow; the form is the page |
| The record one click away | Every number traceable to an article | The dossier rendered on the site: one page per rule, per law version, per discrepancy, per case; GitHub links become a single "bron" link in the footer |
| Layout B for the result (owner, 2026-10-09) | The year amount first, one honest sentence, numbered steps with article, status and arithmetic beside each | The step row component with its margin note, built exactly to that choice |

**The structural change.** Today six of the seven links on the front page open Markdown files in GitHub's interface. The build must read `law/` and render each rule, law version, discrepancy and case as a page under the site's own addresses, in the site's type, with the article reference and status word in the same component the result uses. The Markdown stays the source; the site is the reader's copy. This is build work, not design work, and it is in scope because the design cannot be judged without the pages it is for. If the build cannot render some part of `law/` without changing the data, do not change the data: render what renders, list what does not in `DESIGN-amendment.md`, and leave that part as a link with a plain-Dutch note.

**Two things that leave the front page.** The status line "alle regels: draft" moves from above the title to beside the result, once, in the status word component, and to the footer in one sentence. The explanation of layouts A, B and C and how B was chosen moves to the Over page; it is the repository's history, not the citizen's business.

## The direction, and the checkpoint

The owner chose direction A, het formulier, on 2026-10-19, from the two mockups. Direction B (het dossier: grey ground, charcoal button, ochre article references, law quotations in a shaded serif block) is not built. One piece of it is borrowed: the shaded citation block for law text, used on the Wet pages and wherever a law article is quoted in full.

**A, het formulier.** White paper, near-black text, one deep green for the single action and for links, grey rules. A numbered form with large labels, each field a plain box, the year as a row of choices, one button. The result in layout B: the year amount set large, one honest sentence, then numbered steps, each one sentence of plain Dutch with the article, the status word and the arithmetic beside it in a serif margin note. The reference is the best paper form the government never printed. It is calm, familiar, slightly official, and it gets a worried person to the number with the fewest things on the screen.

**The specimen.** One file, `site/specimens/narekenen-a.html`: the front page as it will ship, with the form filled from a real case in `law/` and the result rendered from the real rules for 2026, at 390px and 1280px. Beside it, one rule page from the dossier, rendered from `law/`, so the owner sees both the form and the record in the same system. Published on the branch preview if the host builds non-production branches, else screenshots committed beside it. Then the ask: "Specimen at \[address\]: yes, or what to change? And the motion 'Kleur, ruimte en pagina's' is tabled beside it." Nothing else is built until the owner answers both.

**What the motion says, plainly.** One accent colour, green, for the action and for links; a second colour, red, reserved for errors in the form and shown with a word and an icon-free message, never alone. The status word in one place beside the result and beside each rule. The dossier rendered on the site. A menu of four words. Four type sizes. These are the lines the owner votes on; the token values are an appendix.

## The design system

One file, `site/static/tokens.css`, holds every colour, size and spacing as a custom property. No template or stylesheet contains a hex value, a font name or a pixel size that is not a token. Four type sizes. The type scales with the viewport so that a wide screen gets larger text, not longer lines; the lesson from praemisse, applied from the start.

```css
/* toeslagrecht — kleur, ruimte en pagina's. Direction A, het formulier: owner decision 2026-10-19. */
:root {
  /* paper and ink */
  --paper: #FFFFFF;
  --paper-2: #F4F5F4;        /* citation blocks, quiet panels */
  --ink: #1A1A1A;
  --ink-2: #3D4441;          /* explanatory text; 9:1 on paper */
  --muted: #5F6662;          /* notes, footer; 5.6:1 on paper */
  --rule: #D7DAD8;
  --rule-strong: #1A1A1A;

  /* one action colour, one error colour */
  --green: #1F5C45;          /* button, links, step numbers; 7.2:1 on paper */
  --green-ink: #143D2E;      /* hover */
  --green-paper: #E6F0EB;    /* the chosen option's fill */
  --error: #A32019;          /* error text and border only; 6.8:1 on paper */
  --error-paper: #FBECEA;
  --focus: #1A1A1A;          /* 3px outline, 2px offset, on everything focusable */

  /* type: interface sans, law serif, both self-hosted */
  --sans: 'Source Sans 3', 'Segoe UI', system-ui, sans-serif;
  --serif: 'Source Serif 4', Georgia, serif;
  --size-3: clamp(1.125rem, 1rem + 0.4vw, 1.375rem);   /* body: 18px phone, ~20px at 1280, 22px at 1920 */
  --size-1: calc(var(--size-3) * 2.1);                 /* the question, the amount; line-height 1.15 */
  --size-2: calc(var(--size-3) * 1.25);                /* field labels, section headings; 1.3 */
  --size-4: calc(var(--size-3) * 0.875);               /* margin notes, status, footer; never under 15px; 1.5 */
  --leading: 1.55;

  --measure: 60ch;           /* form and result; a worried reader wants short lines */
  --page: 760px;             /* the one column; dossier index pages may use 1040px */
  --gutter: 1.5rem;          /* 1rem under 400px */
  --s-1: 0.5rem; --s-2: 1rem; --s-3: 1.5rem; --s-4: 2rem; --s-5: 3rem; --s-6: 4rem;
  --radius: 4px;
  --target: 44px;            /* minimum height of anything tappable; WCAG 2.2 asks 24, the form gets 44 */
}
```

Rules for using them:

- **Fonts are self-hosted** under `site/fonts/`: Source Sans 3 (400, 600) and Source Serif 4 (400, 400 italic, 600), `woff2`, subset to Latin and Latin Extended-A, with `font-display: swap`, the OFL licence file beside them, and a total under 160 KB. If it is over, drop Serif 600.
- **Sans is the interface; serif is the law.** Everything the site says in its own voice is sans. Every quotation of a law text, every article reference in a margin note, is serif. A reader learns in one page that serif means "this is what the law says" and sans means "this is us talking."
- **Green means the one action and links.** One primary button per screen. Links in running text are green, underlined, `text-underline-offset: 3px`. Nothing else is green except the step numbers and the chosen option's border.
- **Red means an error in what you typed, and nothing else.** It is always accompanied by a sentence that says what to do ("Vul een bedrag in, bijvoorbeeld 28000"), set in `--error`, with the field's border in `--error` 2px. No red anywhere in the result or the dossier; the law is not an error.
- **Tabular figures** on every euro amount and every year. Amounts are written the Dutch way: € 1.234 with a thin space after the sign, no decimals unless the law gives them.
- **No dark mode** in this pass: the citizen's reference is a paper form, and a dark form reads as a different kind of site. If `DESIGN.md` requires it, add the pairs and verify them; otherwise `color-scheme: light` and leave it.
- **No shadows, gradients, icons as decoration, or illustration.** The only icons are the padlock on the privacy line and, if a field needs it, a plain error mark before the message; both inline SVG, `aria-hidden`, with the meaning in the words beside them.
- **Hyphenation off** above 720px, `hyphens: auto` with `lang="nl"` below.

## Components

Fourteen components build every page. Each is one block of markup and one block of classes in `site.css`; no inline styles. Build them once in `site/specimens/components.html` at 390px and 1280px, every state included (empty, filled, focused, in error).

**Header and menu.** Wordmark "toeslagrecht" in sans 600 at `--size-2`, `--ink`; the menu at the right on wide screens and on a second line under the wordmark on a phone: Narekenen · Dossier · Wet · Over, sans at `--size-3`, each item at least `--target` tall, the current page in 600 with a 2px `--green` underline. A `--rule` hairline below. It does not stick. No hamburger: four words fit at 320px; verify.

**Question title.** The `h1` is the citizen's question: "Hoeveel zorgtoeslag krijg ik in \[jaar\]?" at `--size-1`, 600, with the year from the selected choice. Under it one lead sentence at `--size-3` in `--ink-2`: "Vul drie dingen in. U ziet het bedrag, en stap voor stap hoe de wet daar komt, met bij elke stap het artikel."

**Year choice.** A `fieldset` with the legend "Welk jaar?" and one radio per available year, rendered as boxes: `--target` tall, `1px --muted` border, `--radius`; the chosen one `2px --green` border with `--green-paper` fill and 600 text. The real radio input is visible and focusable inside the box, not hidden. The years come from `law/`, newest first, newest chosen by default.

**Numbered field.** A `label` at `--size-2` 600, with the step number before it in `--green`; under it one help sentence at `--size-4` in `--muted` that says what to fill in and gives an example; then the input: `type="text"`, `inputmode="numeric"`, `autocomplete="off"`, a € sign before it outside the box, `1px --ink` border, `--target` tall, `--radius`, tabular figures, no placeholder that could be mistaken for a value (the example is in the help sentence, not the box). A `--rule` hairline above each field. Three of them on the form: inkomen, toeslagpartner, vermogen; the middle one is a yes/no choice.

**Yes/no choice.** A `fieldset` with the question as legend at `--size-2` 600, one help sentence, and two radio boxes "Ja" and "Nee" in the year-choice style. Nothing chosen by default; the form cannot be submitted until one is.

**Primary button.** `--green` fill, `--paper` text, sans 600 at `--size-3`, `--target` tall, `--radius`, `0 28px` padding; hover `--green-ink`; focus `--focus` 3px outline offset 2px. Text: "Bereken mijn zorgtoeslag". One per page. There is no secondary button on the form; the dossier pages have none at all.

**Privacy line.** Padlock, then one sentence at `--size-4` in `--muted`: "Niets van wat u invult verlaat uw telefoon of computer." Directly under the lead and again directly above the button. These are the only two places it appears.

**Amount.** The result's first block. One line at `--size-3` in `--ink-2`: "Naar de letter van de wet krijgt u in \[jaar\]"; then the amount at `--size-1` 600 with tabular figures and "per jaar" after it at `--size-2` in `--muted`; then the one honest sentence at `--size-3`: "Dit is wat de wet zegt voor wat u invulde. Het is geen advies en geen aanvraag; aanvragen doet u op toeslagen.nl." with the link green. A `2px --rule-strong` above the whole block.

**Step row.** Layout B. Each step a list item: on wide screens a grid `minmax(0, 3fr) minmax(0, 2fr)`, gap `--s-3`; the step sentence at `--size-3` with its number in `--green` 600 before it; the margin note at the right. Under 720px the margin note sits under the sentence, indented `--s-3`, with a `--rule` hairline above, in the same type, so it still reads as the law speaking. A `--rule` hairline between steps. The sentence is `law/`'s plain-Dutch line for that rule; you never write one.

**Margin note.** Serif at `--size-4` in `--ink-2`: the article reference as a link to the rule's page, then the status word, then the arithmetic on its own line with tabular figures, in the form `law/` provides ("€ 1.234 − € 567 = € 667"). Three lines at most; the arithmetic may wrap.

**Status word.** The repository's word for the rule's status, in sans small caps letterspaced 0.06em at `--size-4` in `--ink`. The words come from `law/` and the governing files; the brief does not supply them. Beside the result, once, after the amount: "Alle regels in deze berekening: \[status\]." Beside each rule on its page. Never a colour.

**Citation block.** Borrowed from direction B. A `blockquote` on `--paper-2` with a `--rule` border and a `4px --green` left border, `--s-3` padding; the law text in serif at `--size-3`, `--leading`; a `footer` line in sans at `--size-4` in `--muted` with the act, the article and the year it applied, and the status word. Used on the Wet pages and wherever an article is quoted in full, with "In gewoon Nederlands:" and a B1 sentence after it only when `law/` provides that sentence.

**Contents list.** The layout of every dossier index: a list with no bullets, a `--rule` hairline above each entry, the entry's name in sans at the left and a `--size-4` note at the right (the article, the year, the status word). The last entry has a hairline below. Entries are links in `--ink`, underlined on hover only.

**Error message.** When a field is empty or not a number on submit: the field's border becomes `2px --error`, a sentence appears directly under the help text in `--error` at `--size-4` beginning with what to do, and the error is announced (`aria-describedby` to the message, `aria-invalid="true"`, focus moved to the first field in error). The message disappears when the field is corrected. The button never disables; it tells.

**Footer.** `--rule` hairline above, sans at `--size-4` in `--muted`, three short lines: what the site is ("toeslagrecht · de toeslagenwet als rekenregels die u zelf kunt nalopen"), the site-wide status in one sentence as the repository words it, and the links: Dossier · Iets betwisten · Een beschikking insturen · Over · Bron (the only GitHub link on the site) with the licences after it.

## Page by page

Seven kinds of page. Every page: header, body, footer. Nothing else. Dutch at B1 throughout; the sentences the brief supplies are to be used as written, everything about the law comes from `law/` unchanged.

**1. Narekenen (`/`).** The front page is the form; there is no separate start page, because a worried person came for the number. One column, `--page` wide, in this order: question title and lead; privacy line; year choice; the three numbered fields; the button. On submit, without leaving the page and without a network request, the result renders directly under the button: amount; status line; the step rows; then one closing sentence at `--size-4` in `--muted`: "Klik op een artikel voor de wettekst, de versies per jaar en de voorbeelden die de regel testen." The URL does not change and nothing is stored, as now. An empty or invalid field shows the error message component and nothing else happens. If JavaScript is off, the form posts nowhere and a sentence under the button says the calculation needs it; the rest of the site works without it.

**2. Dossier (`/dossier/`) and rule pages (`/dossier/<toeslag>/<regel>/`).** The index: title "Het dossier", one sentence ("Elke regel, elke versie van de wet, elk verschil en elk voorbeeld, als eigen pagina."), then a contents list per toeslag, each entry the rule's name with its article and status word at the right. A rule page: title (the rule's name), the status word under it, the citation block with the article as it applied in the chosen year, "In gewoon Nederlands" if `law/` has it, the arithmetic as `law/` states it, then contents lists under three headings: "Versies per jaar", "Voorbeelden die deze regel testen" (the cases), "Verschillen en geschillen" (discrepancies and disputes, or one sentence "Nog geen."). Rendered from the rule's Markdown; headings, lists and tables in the Markdown map to the site's type, never to raw GitHub styling.

**3. Wet (`/wet/`) and year pages (`/wet/<jaar>/`).** The index: title "De wet, per jaar", one sentence, a contents list of years newest first with the Staatsblad reference at the right as `law/` gives it. A year page: the act's articles as they stood that year, each in a citation block, in article order, each anchored (`#art-2`) so a margin note can link to it. Long pages are fine; a sticky in-page list is not: a plain list of article links at the top is enough.

**4. Verschillen (`/verschillen/`).** Title "Waar de wettekst en Dienst Toeslagen verschillen", one sentence of what a difference is, then one entry per discrepancy from `law/` as a contents list; each its own page under `/verschillen/<id>/` with the law text in a citation block, what the Dienst does in plain Dutch, and the amount it differs by, all from `law/`. Empty: one sentence, "Nog geen verschil vastgesteld."

**5. Betwisten (`/betwisten/`).** The dispute protocol from the governing file rendered as a page, in its own words, under the title "Iets betwisten". If the protocol asks the citizen to produce a text (an issue, an email), the page ends with a plain `textarea` pre-filled with the protocol's template, a sentence saying to copy it, and no button that sends anything. Nothing is stored.

**6. Insturen (`/insturen/`).** The submission protocol rendered the same way, under the title "Een echte beschikking insturen, anoniem", opening with the one sentence that matters: what to leave out (name, BSN, address) as the protocol words it. Same `textarea` pattern.

**7. Over (`/over/`).** Title "Over toeslagrecht". Sections, each a heading and a short paragraph in B1: what this is and is not; who makes it and how (the board, the AI operator, in plain words); how the result page was designed, including the three layouts and why B was chosen, moved here from the front page; the status words and what each means, once in full; the licences; contact; the source, as the one GitHub link beside the footer's.

**Addresses.** Every page the site serves today keeps its address. Every `.md` in `law/` that is rendered gets exactly one site address, listed in `DESIGN-amendment.md` beside its source path, so a future rule or year gets its page from the build without a decision.

## Phone, offline and WCAG 2.2 AA

The reader is on an old phone, on a slow connection, worried, with a letter in one hand. WCAG 2.2 AA is binding in `DESIGN.md`; here it is a merge condition with a written audit, not a line in a commit message.

- **Breakpoints:** one, at 720px. Below it, one column, the margin note under the step, the menu under the wordmark, `--gutter` at 1rem under 400px. Test at 320px, 390px, 768px and 1280px, and at 1920px for the type scale.
- **Reflow:** at 320px wide and at 400% zoom on a 1280px window, no horizontal scroll, no clipped content, no two-dimensional scrolling (SC 1.4.10). Nothing on this site is wide enough to need a scroll box; if something is, it is laid out wrong.
- **Text:** body never under 18px on a phone; everything resizable to 200% without loss (1.4.4); line height `--leading`; paragraph spacing at least `--s-2`; no justified text.
- **Contrast:** every text pair at 4.5:1, every border and focus indicator at 3:1 (1.4.3, 1.4.11), measured with a tool and the ratios written into `DESIGN-amendment.md`. The tokens above are chosen to pass; verify anyway.
- **Colour never alone:** the chosen year and the chosen yes/no are marked by border weight and fill and the radio's own state; errors by border, text and the message; status by the word (1.4.1).
- **Targets:** everything tappable at least 44px tall and with `--s-1` between neighbours (2.5.8 asks 24; the form gets 44).
- **Focus:** visible on everything, `--focus` 3px offset 2px, never obscured by a sticky element because there are none (2.4.7, 2.4.11); focus order is reading order (2.4.3); a skip link to the form is the first focusable element (2.4.1).
- **Forms:** every input has a visible `label` tied by `for`; help text tied by `aria-describedby`; errors identified in text and announced (3.3.1), with a suggestion (3.3.3); `inputmode="numeric"` so a phone shows a number pad; `autocomplete="off"` because nothing should be remembered; no field asks for a name, BSN or address, anywhere (3.3.7, and the project's own rule).
- **Structure:** `lang="nl"` on the page (3.1.1); one `h1` per page, headings in order (1.3.1); the result region `aria-live="polite"` so the amount is announced when it appears (4.1.3); the steps an ordered list; the citation a `blockquote` with `cite`.
- **Motion and time:** none. No animation, no timeout, no auto-advance (2.2.1, 2.3.3).
- **Offline:** after first load, submitting the form works with the network off; the only requests on the whole site are the page, two stylesheets and the fonts, all same-origin. No service worker.
- **JavaScript off:** every page but the calculation readable and complete; the form says, in one sentence, that the calculation needs it.
- **Weight:** a dossier page under 120 KB transferred on first visit including fonts; the front page under 180 KB including the calculation script. Measured, written down.
- **Print:** `@media print` keeps the result and the steps with margin notes beside them, black on white, and prints the article references as text, so a citizen can print the calculation and bring it to a desk.
- **Reading level:** every sentence the site says in its own voice is checked against B1 (short sentences, common words, one idea each). The brief's sentences are written to pass; if you write a sentence the brief did not supply, it must be a heading, a label or a link text, and it must pass too. Record the check as done in `DESIGN-amendment.md`.

## How to work

Specimen first, the owner's yes and vote second, the rest third. You do every step in this session, you stop twice, and you merge when told. Nothing is filed for a scheduled run.

1. **Read before writing.** The whole of `site/`, the build, `law/` as data (to know its shape, not to change it), `DESIGN.md`, `BOARD.md`, the layout decision of 2026-10-09, the dispute and submission protocols, and the mockup. File this brief as an owner note in `INBOX.md`, dated, and log the owner's choice of direction A in `BOARD.md`. Write `site/DESIGN-amendment.md`: the token table, the component list, the page list with the address map from `law/` to the site, and the principle table corrected to `DESIGN.md`'s numbering. Commit.
2. **Tokens, fonts and components.** `tokens.css`, `site.css`, the self-hosted fonts, and `site/specimens/components.html` with every component in every state at 390px and 1280px. Commit.
3. **The build change.** Make the build render `law/` to pages as the page-by-page section says, with the address map applied. Rebuild; confirm every existing address still answers. Commit. If some part of `law/` cannot be rendered without touching the data, list it in `DESIGN-amendment.md` and leave it as a plain link with a B1 sentence.
4. **Specimen checkpoint.** Build Narekenen with the result, from a real case in `law/`, and one rule page. Publish the branch to a preview if the host builds non-production branches; otherwise commit screenshots at 390px and 1280px beside `site/specimens/narekenen-a.html`. Draft the motion "Kleur, ruimte en pagina's" from `DESIGN-amendment.md`, table it in `BOARD.md`. File a non-blocking ask: "Specimen at \[address\]: yes, or what to change? Motion tabled beside it." Stop. Build nothing else until both are answered.
5. **Record.** On the yes and the vote: apply any token change in `tokens.css` only, move the amendment into `DESIGN.md` under "Kleur, ruimte en pagina's" with the date and the decision line, log it in `BOARD.md`. One commit.
6. **The other pages,** in this order: Dossier index, Wet and year pages, Verschillen, Over, Betwisten, Insturen. One commit per page kind.
7. **Verification,** all of it, before the merge ask, written into `DESIGN-amendment.md` and then `DESIGN.md`:
   - Screenshots of every page kind at 390px and 1280px, first screen, under 100 KB each, under `site/specimens/`.
   - The WCAG 2.2 AA audit: every criterion in the requirements section, one line each with the result, plus an automated pass (axe or equivalent) on every page kind with zero violations.
   - Reflow at 320px and at 400% zoom: no horizontal scroll on any page.
   - Offline: form submitted with the network off, result renders; the request log shows nothing but the page, two stylesheets and the fonts.
   - Weight and throttled-3G timing for the front page and a dossier page.
   - Every address that existed before the branch still answers 200; every `.md` rendered from `law/` reachable from the Dossier or Wet index; the lists in `DESIGN.md`.
   - A keyboard-only run through the whole form to a result; a screen-reader run (or an accessibility-tree pass, stated as such) through the form, the result and one rule page; each described in three lines.
   - The B1 check on every sentence in the site's own voice, stated as done.
   - A print of the result to PDF, committed.
8. **Merge ask.** File a blocking ask: "Design branch complete; verification in `DESIGN.md`; merge?" On the yes: merge `main` into the branch once more, the branch into `main`, push, confirm the live site serves the new `tokens.css` and a rendered rule page, and record the date and the owner's line in `DESIGN.md`, `BOARD.md` and the changelog.

**Done means:** the form is the front page and reaches a result in layout B; every rule, year, discrepancy and case from `law/` has its own page on the site and the only GitHub links are the two "bron" links; one green, one red, four type sizes, no hex outside `tokens.css`; the status word in its two places and nowhere else; the WCAG audit written and passed; nothing stored, nothing requested; the owner's vote and yes recorded.

**Scope discipline.** You will see rules that look wrong, law text that could be clearer, and protocols that could be simpler. None of it is yours. Write each as a note in `INBOX.md` for the board; change nothing in `law/` or the governing files. The only sentences you write new are the ones this brief gives you and the headings, labels and link texts the pages need, all at B1.

## What to ask the owner, and how

Two asks, through `ASKS.md`, each answerable in a minute. The owner has chosen the direction; the asks are where he sees it built on a real case, and where he votes.

| When | Ask | Blocking? |
| --- | --- | --- |
| After step 4 | Specimen at \[address\]: yes, or what to change? Motion "Kleur, ruimte en pagina's" tabled beside it. | Yes, for everything after the front page and one rule page |
| After step 7 | Design branch complete; verification in `DESIGN.md`. Merge? | Yes |

Decide everything else yourself from this brief and `DESIGN.md`, and record each decision in `site/DESIGN-amendment.md` with one line of reasoning. Things you do not ask about: pixel values, spacing, the wording of a heading or label (write it at B1 and move on), the exact address scheme under `/dossier/`, how the build maps Markdown to pages, which case to use in the specimen (pick the plainest one). Things you do not decide: anything that changes a principle in `DESIGN.md`, a sentence that states what the law says, a status word, the protocols, an existing address. Those go to the board as a note and the current state stays.

If the owner answers the first ask with a change to a colour, a size or a spacing, make it in `tokens.css` only and continue. If he asks for something the brief rules out (a dark mode, a second accent, a hero), stop and file a note saying what it would take; do not build it without a decision line in `BOARD.md`.
