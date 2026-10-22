# CHANGELOG.md

Newest first. What was done, decided, and got wrong.

## 2026-10-22 — thirteenth run: 2016 encoded from primary texts, the first Dienst amounts for 2016 and 2018 found in case law, a second edition of the 2026 leaflet that corrects the #4 misprint

Thirteenth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as configured for the session: `claude-fable-5-1`, the same as the
previous entry; no handover note needed. The checkout arrived as a detached HEAD at a current `origin/main` (`228360c`, the previous
run's commit; `git fetch` confirmed it). The routine fired the day after the previous run: no new gap. `git log -3 --stat` shows no owner
commit since 10-21.

**Step 1 — asks marked done.** None since 10-21. Asks 4, 6, 8, 9 and 10 stay open as recorded; 8 and 9 extended today (step 8).

**Step 2 — the inbox.** `INBOX.md` is empty and nothing arrived outside it. No case, dispute, review or owner note to handle.

**Step 3.** No open motion.

**Step 4 — done (item 2 of `memory.md`: 2016, the next year of history; twenty-four fetches in four parallel batches, four web searches).**
- *Zorgtoeslag 2016 encoded from the primary texts*, `parameters/2016.yaml` and `awir/parameters/2016.yaml`, status `draft`, each number with
  its article, instrument and quoted text: standaardpremie € 1.468 (Stcrt. 2015, 43794: € 1.228 premie + € 240 eigen risico; found through the
  Wzt art. 4 informatie page, BWBR0037279); WML januari 2016 € 1.524,60 (Stcrt. 2015, 38647) → drempelinkomen € 19.758,816; percentages
  2,380% / 5,220% / 13,430% (Wzt art. 2 lid 3, text of 01-01-2016; Stb. 2015, 472, whose nota van toelichting says the normpercentages were
  lowered for 2016 only, by 0,26 and 0,52 procentpunt, as the 'verlenging van de tijdelijke verhoging' of the koopkrachtpakket 2016, and that
  the afbouw stays on its schema); vermogensgrens € 82.504 on the grondslag sparen en beleggen (Stcrt. 2015, 40655, from € 82.093, 0,5%);
  heffingvrij vermogen € 24.437 (Wet IB 2001 art. 5.5, versions 01-01-2016 and 01-07-2016; the Bijstellingsregeling 2016, Stcrt. 2015,
  47097, set € 21.437 and its toelichting says the Belastingplan 2016 raised that to € 24.437 — the Staatsblad itself not read, written as
  such) → effective € 106.941 / € 131.378 on the rendementsgrondslag; 39 woonlandfactoren (Stcrt. 2015, 40860, found by a search
  restricted to `zoek.officielebekendmakingen.nl`; identical on all 39 lines to the consolidated bijlage 4 of 01-01-2016 *and* of 01-12-2016,
  both read, so the table did not change in the year; no retroactive correction of a 2016 factor found); Awir art. 7 lid 6 € 4.773 (Stcrt.
  2015, 47097 art. VI) and art. 14 lid 4–5 unchanged across the Awir's two 2016 versions (01-01 and 01-04-2016, Stb. 2013, 567, diffed:
  art. 7 and 14 identical). The Wzt had one version in 2016. The diff of 01-01-2015 against 01-01-2016 shows only the percentages
  (2,395% / 5,265% / 13,400%) and the art. 2a amount (€ 82.093) — the 2015 values now stand in the 'old' columns as read. No code change: the
  2020 switches cover 2016. The 2017 rows' 'old' columns that were open on 10-21 (the standaardpremie 2016, the WML of July 2016, the
  2016 woonlandfactor table) are filled from today's texts; a 2017 row for Wet IB art. 5.5 (€ 24.437 → € 25.000) added with the instrument
  honestly 'not identified'.
- *The first Dienst amounts for 2016, and one for 2018, from case law.* A web search for the 2016 leaflet title found none, but returned two
  Raad van State rulings quoting 2016 amounts. ECLI:NL:RVS:2024:2798 (10-07-2024): zorgtoeslag 2016 herzien and vastgesteld op € 998;
  zorgtoeslag 2018 first € 708, then € 1.139 on bezwaar. ECLI:NL:RVS:2022:2397 (17-08-2022, zaaknr. 202104114/1/A2, the ECLI found by a
  second search on the zaaknummer): a couple's definitieve berekening 2016 of € 1.905, later herzien to nihil because the Basisregistratie
  inkomen gave their gezamenlijk inkomen as € 45.149. The encoding reproduces every one of these from the text: € 998 is the 2016 maximum
  zonder partner (€ 1.468 − 2,380% × € 19.758,816 = € 997,74 → € 998), € 1.905 the 2016 maximum met partner (€ 1.904,59 → € 1.905), € 1.139
  the 2018 maximum zonder partner (€ 1.139,03 → € 1.139), and nihil at € 45.149 against a ceiling of € 33.765 — run through `build.run_case`
  today, not computed by hand. Only the nihil decision carries an income, so only it is a case: **`zt-2016-rul-001`** (`ruling`, passes, under
  Ask 9). The three maxima are recorded in `SOURCES.md` §4 and in the parameter files as corroboration: they confirm standaardpremie,
  normpercentage and drempelinkomen together, and decide nothing on #1 (the same whole euro under any rounding of the drempelinkomen).
  The record now has a Dienst amount for 2016 and for 2018, which had none.
- *Four synthetic cases*, `zt-2016-syn-028..031`: the income ceilings from the text, € 27.013 zonder and € 33.765 met partner, each with the
  euro above. As in 2018 and 2017, the rounding of the drempelinkomen decides: rounded down to € 19.758 both ceilings move one euro down
  (€ 23,41 / € 23,49 → € 23 → none), rounded up to € 19.759 neither moves. Computed analytically and verified on the boundary euros.
- *A second edition of the 2026 leaflet.* Trying the 2016 edition digits (`tg0821z60fd`, `z62fd`–`z64fd`), `z62fd` answered with a real PDF:
  not 2016 but *Berekening zorgtoeslag 2026*, TG 082 - 1Z62FD, created 2026-08-25 — the edition scheme collides across decades. Diffed against
  the first edition (1Z61FD) the record was built from: two lines differ. Rekenvoorbeeld 2's "Bedrag per maand" now reads "€ 103,62" where
  the first edition printed "€ 103,02" — the misprint `DISCREPANCIES.md` #4 was opened on and withdrawn as a data error on 10-08; the Dienst
  has corrected it. But € 1.243,51 / 12 = € 103,6258, so the corrected figure is truncated to the cent where the rest of the 2024–2026 series
  rounds (#7); the whole-euro month is € 103 either way. The other line: "het gezamenlijke toetsingsinkomen" → "het toetsingsinkomen" under
  stap 3. Every parameter and every other figure is unchanged. Recorded as a dated note in #4 (status stays `withdrawn`), a row in
  `SOURCES.md` §3, and a note in `zt-2026-pub-008`, which keeps the first edition's figure as the source it was taken from.
- *Check:* 214 cases, 194 pass, 20 fail (the twenty of 10-20, every one logged), 0 blocking; both encodings agree on 214. The site rebuilt:
  264 pages, 2016 in the form, `/wet/2016/`, five new case pages, the #4 note on `/verschillen/4/`.
- *The record's files:* `CHANGES.md` — seven rows for 2016-01-01 (Stb. 2015, 472's 2017 row, replaced by Stb. 2016, 469, as the eighth
  pre-effect revision found, read today from the earlier side) and one for Wet IB art. 5.5 2016 → 2017; the three 2017 old columns filled.
  `SOURCES.md` — nine rows for the 2016 instruments and texts, the leaflet 2016 as not found, the 2026 second edition, two rulings, open item
  4 rewritten for 2015. `rules.md`, `cases/README.md`, `README.md`, `DISCREPANCIES.md` #4, `ASKS.md` 8 and 9.

**What was wrong and why.**
- *A count printed into a parameter file.* The script that generates the landen block printed its row count (`39`) to stdout before the
  rows, and the count landed in `parameters/2016.yaml`; PyYAML refused the file and the line was removed. The check would have caught it
  too, but the rule is older: read every string of a new parameter file back before the check (`memory.md`, 10-19). Cost: one turn.
- *A leaflet taken for the year by its filename.* `z62fd` returned a PDF of the right size and the run nearly logged it as the 2016 leaflet
  before reading its first page, which says 2026. Caught on reading; it became the second-edition finding above. Lesson in `memory.md`.
- *Three calls to reach the encoding's result object.* `build.run_case` needs the rules module and a `verwacht` key and returns the outcome
  under `uitkomst`; three attempts before the maxima were confirmed. Written into `memory.md` item 2 so the next year costs one.
- Nothing dropped from scope. Items 3 (the Dutch B1 protocol pages) and 4 (a dedicated ruling pass) not started; today's ruling route was a
  by-product of the leaflet search and is recorded as the cheapest one found. `PLAN.md` unchanged: the strategy holds (history continuing
  while Checkpoint 1 waits on the owner; huurtoeslag not before that); no checkpoint has a date to miss.

**Step 8 — asks.** None new. Ask 8 extended (the 2016 leaflet not found; `z62` is 2026's second edition). Ask 9 extended to the ninth ruling
case, `zt-2016-rul-001`, same ten minutes per ruling.

**Dropped from memory.** Open item 2 (2016) replaced by 2015 with the method as it worked today; the sentence "2018 has amounts but no
income" replaced by the per-year state and the leaflet-search route. Nothing else dropped; 5,691 words.

**Effort.** Roughly 245,000 of the 300,000-token ceiling: about 95,000 reading the files, the previous three entries, the parameter and
rules files and the pipeline; about 45,000 on twenty-four fetches and four searches (two 47 MB Regeling zorgverzekering pages, both cut by
script, and two 4 MB Wet IB texts among them); about 105,000 writing and checking the two parameter files, the five cases, the rows in
`CHANGES.md` and `SOURCES.md`, the notes in `rules.md`, `DISCREPANCIES.md` and `ASKS.md`, the memory and this entry. Comparable to 10-21's
2017 run; the second-edition diff and the two rulings were cheap because the leaflet search had already paid for them.

**Record under the ten-year rule.** This run added to the record: the law of 2016 as it stood, dated and sourced — every parameter with its
instrument and quoted text, the one Wzt version of 2016 with the diff against 2015 that shows what Stb. 2015, 472 and Stcrt. 2015, 40655
changed, the two Awir versions compared, bijlage 4 read at both ends of the year, and the 2015 values read into the 'old' columns; the
first amounts of the Dienst Toeslagen for 2016 (three) and 2018 (one) in the record, each traced to its ruling and reproduced from the
text through the encoding, and the first 2016 case from case law; the 2016 income ceilings from the text with the proof that the
drempelinkomen's rounding decides them, the third year in a row (2018, 2017, 2016); the eighth pre-effect revision of the percentages
schema; and the dated finding that the Dienst issued a second edition of its 2026 leaflet in August 2026 that corrects the misprint of
#4 with a truncated cent — a fact about the source that nothing else records. The encoding of 2016 (no code changed), the cases' arithmetic
and the site build are regenerable and are not counted.

## 2026-10-21 — twelfth run: 2017 encoded from primary texts, the 2017 Zweden correction settled as bijdrage-only, the design session's inbox handled, the record's old columns filled

Twelfth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as configured for the session: `claude-fable-5-1`, the same as the
previous scheduled entry (10-20) and as the owner session's agent; no handover note needed. The checkout arrived on `main` at a
current `origin/main` (`bea3f3e`, the owner session's last commit). The routine fired the day after the previous run: no new gap.

**Step 1 — asks marked done.** 11 (the design brief), 12 (the specimen) and 13 (the merge) were marked done in the owner session of
2026-10-20. What they unblock: the restyling of the checker that `memory.md` had carried as item 2 since 10-20 is done by the design
agent and dropped; the site is now rendered by `tools/render.py`, and a new parameter file adds its year to the form, the Wet pages and
the dossier without a code change (used today for 2017). Asks 4, 6, 8, 9 and 10 stay open as recorded.

**Step 2 — the inbox.** Three entries, all from the owner-initiated design session, all already transcribed into `BOARD.md` and
`DESIGN.md` by that session; recorded here as handled and `INBOX.md` emptied.
- *2026-10-19, owner note: the design brief* (source: the owner, Andries, in the owner-initiated session; the brief filed as
  `DESIGN-BRIEF-2026-10-19.md`). Accepted as the owner's design, as `BOARD.md` 2026-10-20 settles: design is the owner's alone. The
  design agent filed five notes for the board while reading; the operator decides each, since none changes the charter or a protocol:
  (1) *The Over page does not describe layouts A, B and C.* Accepted: the owner decision of 2026-10-11 (internal matters never on the
  website) governs and the owner confirmed it at the specimen (Ask 12). (2) *`site/layouts/` still sits under `site/`.* Left as it is: the
  Pages workflow removes it from the deployment and the live check of 10-20 shows `/layouts/b.html` as 404; the record (`ASKS.md` 3,
  `BOARD.md` 2026-10-09) points at those addresses, and moving the files would change the record to save a step the workflow already
  takes. (3) *The protocols and the discrepancy log are rendered in English.* Accepted as work, not as a motion: `DISPUTES.md` and
  `CASES.md` are binding and stay in English; a Dutch B1 explanation above the verbatim text on `/betwisten/` and `/insturen/`, saying
  that the English text is the binding one, is what the checker shows and so the operator's day-to-day remit under `DESIGN.md` P1 — no
  protocol changes, so no board motion is needed. Item 3 of `memory.md`; not done this run (the encoding came first). (4) *`law/` holds
  no article-by-article text of the acts.* Rejected as scope: the record is the dated parameters with each article's text quoted and
  `CHANGES.md`, not a mirror of wetten.overheid.nl; each Wet year page links the consolidated version it rests on. (5) *The status
  words are English on the site.* Kept: `LAW.md` defines them, `DESIGN.md` P4 asks for the word in one consistent place, the Over page
  explains each once, and the owner approved the specimen with them. A Dutch vocabulary would be a `LAW.md` change and is not
  proposed.
- *2026-10-20, owner decision: design is the owner's, not the board's* (source: the owner, verbatim in the entry). Recorded in
  `BOARD.md` (tie-break rule and decision log) by the session; nothing left to do. The operator notes for its own conduct: it files no
  design motion again; design questions go to the owner as asks.
- *2026-10-20, owner: the specimen is a yes* (source: the owner). Recorded in `BOARD.md` and `DESIGN.md`; Ask 12 done; nothing left.

**Step 3.** No open motion.

**Step 4 — done (item 3 of `memory.md`: 2017, the next year of history; fourteen fetches in two parallel batches, one web search).**
- *Zorgtoeslag 2017 encoded from the primary texts*, `parameters/2017.yaml` and `awir/parameters/2017.yaml`, status `draft`, each number
  with its article, instrument and quoted text: standaardpremie € 1.530 (Stcrt. 2016, 64077: € 1.290 premie + € 240 eigen risico); WML
  januari 2017 € 1.551,60 (Stcrt. 2016, 60172) → drempelinkomen € 20.108,736; percentages 2,305% / 5,055% / 13,460% (Wzt art. 2 lid 3,
  text of 01-01-2017; Stb. 2016, 469); vermogensgrens € 82.752 on the grondslag sparen en beleggen (Stcrt. 2016, 60569, from € 82.504);
  heffingvrij vermogen € 25.000 (Wet IB 2001 art. 5.5, versions 01-01-2017 and 01-07-2017) → effective € 107.752 / € 132.752 on the
  rendementsgrondslag; 39 woonlandfactoren (Stcrt. 2016, 61016, identical to the consolidated bijlage 4 of 01-01-2017, generated from
  the consolidated text by script, each line carrying the bijlage's berekeningsjaar and zorgkosten); Awir art. 7 lid 6 € 4.788 (Stcrt.
  2016, 70381 art. VII) and art. 14 lid 4–5 unchanged. The Wzt had two versions in 2017: the diff of 01-01 and 01-07 shows only art. 1
  onder e (the eigen risico named in the definition of zorgtoeslag) and art. 4 (22 instead of 15 days) — Stb. 2017, 146 — no rule. The
  diff of 01-01-2016 against 01-01-2017 shows the percentages, the art. 2a amount, and art. 5 lid 2 (CAK for Zorginstituut, Stb. 2016,
  173) — the 2016 values now stand in the 'old' columns as read, not recalled. The Awir's art. 7 and 14 are identical in its two 2017
  versions. No code change: the 2020 switches (`art2_lid5_oud_aanwezig`, `vermogenstoets_basis`, `artikel_wml_onderdeel`) cover 2017.
- *The Zweden question settled.* Since 10-19 the record said that Stcrt. 2017, 66088 art. II set Zweden's 2017 factor anew at 0,8263
  and that whether this reached the zorgtoeslag was "not stated". Read today: art. II names only "het in artikel 6.3.1, eerste lid, van de
  Regeling zorgverzekering bedoelde verhoudingsgetal" (the verdragsbijdrage), and the toelichting says in so many words "Deze wijziging
  heeft geen effect op de hoogte van de zorgtoeslag. Deze wordt niet ten nadele van de verdragsgerechtigden gecorrigeerd." The
  encoding keeps the published 1,0948 for the zorgtoeslag, as 2018 keeps Duitsland's published 0,9559 (Stcrt. 2019, 58198, same
  pattern). `CHANGES.md` rows of 10-19, `parameters/2018.yaml`'s cross-reference and `memory.md` corrected.
- *Four synthetic cases*, `zt-2017-syn-024..027`: the income ceilings from the text, € 27.857 zonder and € 35.116 met partner, each with
  the euro above. As in 2018, the rounding of the drempelinkomen decides: rounded down to € 20.108 both ceilings move one euro down
  (€ 23,4952 → € 23 → none), rounded up to € 20.109 neither moves. A Dienst figure for 2017 would settle `DISCREPANCIES.md` #1 for 2017;
  the leaflet 2017 is a 404 (`tg0821z71fd`, `z72fd`), recorded in `SOURCES.md` and in Ask 8's note. Computed analytically and verified
  on the boundary euros through the encoding. Maximum 2017 from the text: € 1.066 / € 2.044 (€ 2.043,50 rounds up under Awir art. 14
  lid 4).
- *Check:* 209 cases, 189 pass, 20 fail (the twenty of 10-20, every one logged), 0 blocking; both encodings agree on 209. The site
  rebuilt: 258 pages, 2017 in the form, `/wet/2017/`, four new case pages.
- *The record's files:* `CHANGES.md` — eight rows for 2017 (the 2017-07-01 and 2017-01-01 changes, with Stb. 2016, 469's 2018 row as
  the seventh pre-effect revision found) and one for Wet IB art. 5.5 2017 → 2018; the 2018 rows' old columns filled from the texts read
  today (the percentages, the standaardpremie, the woonlandfactoren table, Zweden). `SOURCES.md` — twelve rows for the 2017 instruments
  and texts, the leaflet 2017 as not found, open item 4 resolved and rewritten for 2016. `rules.md`, `cases/README.md`, `README.md`.

**What was wrong and why.**
- *An instrument almost named without being read.* The new `CHANGES.md` row for the heffingvrij vermogen 2017 → 2018 first said
  "Belastingplan 2018 chain" as the instrument — a plausible name, not a read one. Caught on re-reading the row; replaced by "not
  identified". Same rule as for numbers and article references: read or not written.
- *"Not stated" written where the text had not been read to the end.* The 10-19 run read Stcrt. 2017, 66088 for the 2018 table and
  wrote that the effect of art. II on the zorgtoeslag was not stated; the toelichting states it. The entry was honest about what had
  been read, but the record carried a question that the same document answered. Lesson in `memory.md`: read the toelichting before
  writing "not stated".
- *Two tool mistakes that cost time, not the record:* a ceiling search that ran the encoding one euro at a time from € 25.000 and
  timed out (replaced by the analytic bound, verified on the two boundary euros); and `pkill -f` on a script name, which killed the
  Bash call carrying that name as well.
- Nothing dropped from scope. Items 3 (now 2016), 4 (rulings) and the Dutch B1 protocol pages not started. `PLAN.md` unchanged:
  the strategy holds (zorgtoeslag proven against published cases, history continuing while Checkpoint 1 waits on the owner,
  huurtoeslag not before that); no checkpoint has a date to miss.

**Step 8 — asks.** None new. Ask 8 extended with a dated note (the 2017 leaflet is a 404 too).

**Dropped from memory.** The owner-mockup paragraph and open item 2 (the restyle: done by the design agent), the old checker
paragraph (template, layouts regenerated), open item 7 (checker polish inside §8: done by the design); replaced by one paragraph on
the rendered site and its tools, the 2017 key figures, and the three new lessons.

**Effort.** Roughly 265,000 of the 300,000-token ceiling: about 95,000 reading the files, the previous entries, the parameter and
rules files and the pipeline; about 25,000 on fourteen fetches and one search (the 47 MB Regeling zorgverzekering among them, stripped
and cut by script); about 145,000 writing and checking the two parameter files, the four cases, the records in `CHANGES.md`,
`SOURCES.md` and `rules.md`, the memory and this entry. More than 10-19's 2018 run because the inbox carried the design session's
three entries and five notes to decide, and because the Zweden question needed one more document.

**Record under the ten-year rule.** This run added to the record: the law of 2017 as it stood, dated and sourced — every parameter
with its instrument and quoted text, the two Wzt versions of 2017 with the diff that shows what Stb. 2017, 146 and Stb. 2016, 173
changed, and the 2016 values read into the 'old' columns; the dated finding that Zweden's 2017 correction (Stcrt. 2017, 66088 art. II)
was for the verdragsbijdrage only, with the toelichting's sentence, settling a question the record had carried since 10-19; the 2017
income ceilings from the text with the proof that the drempelinkomen's rounding decides them, the second year in a row (2018, 2017)
where it does; the seventh pre-effect revision of the percentages schema; the owner session's three inbox entries with their sources
and the operator's decision on each of the design agent's five notes. The encoding of 2017 (no code changed), the cases' arithmetic
and the site build are regenerable and are not counted.

## 2026-10-20 — owner session: the design branch merged; the site in direction A, the dossier rendered on the site

Owner-initiated session with the design agent (not a scheduled run; nothing here was filed for the routine).
On the owner's brief of 2026-10-19 (`DESIGN-BRIEF-2026-10-19.md`, filed verbatim; mockup beside it) the
agent built branch `design` in four steps, stopped at a specimen checkpoint, and merged on the owner's yes.

- **Owner decisions** (`BOARD.md`): direction A, *het formulier* (2026-10-19); design is the owner's alone
  and is not voted on by the board, which votes on functionality (2026-10-20); the specimen is a yes after one
  change, the space above every page title equals the space above a field (2026-10-20); merge (2026-10-20).
  Transcribed into `DESIGN.md` under "Kleur, ruimte en pagina's" with the verification.
- **What changed on the site.** The front page is the form (the old `zorgtoeslag.html` serves the same page);
  the result in layout B with the article, the status word and the arithmetic in a serif margin note; one
  green, one red (errors only), four type sizes, every value a token in `site/static/tokens.css`; self-hosted
  Source Sans 3 and Source Serif 4, subset, 116 KB. The dossier is rendered on the site by `tools/render.py`
  (called by `tools/build.py build`): one page per rule (`/dossier/<toeslag>/<id>/`), per case
  (`/dossier/voorbeelden/<id>/`), per year of the law (`/wet/<jaar>/`), per discrepancy (`/verschillen/<n>/`),
  plus `/wet/wijzigingen/`, `/wet/bronnen/`, `/betwisten/`, `/insturen/` (the protocols verbatim, in English, with
  a textarea that sends nothing) and `/over/`. GitHub is one "Bron" link in the footer and one on the Over page.
  The old checker template `tools/zorgtoeslag.template.html` is removed; `site/layouts/` are no longer
  regenerated and stay as the record of Ask 3. Nothing in `law/` or the governing protocols changed.
- **Merged from `main` before the merge:** the operator's runs 6–11 (zorgtoeslag 2018–2022, the inputs
  `maanden_aanspraak` and `partner_verzekeringsplicht_niet_nagekomen`, the part-year result); both ported into
  the new form with the operator's own sentences. Asks: the agent's asks renumbered 12 (specimen, done) and 13
  (merge, done); Ask 11 (the brief) answered.
- **Verification** (`DESIGN.md`, in full in `site/DESIGN-amendment.md`): axe-core 0 violations on 18 pages, one
  of every kind; no horizontal scroll at 320 px or 400% zoom; keyboard-only and offline form run equal to the
  server-rendered specimen; slow-3G timing; 251 addresses reachable, 0 broken; every old address answers; both
  encodings agree on all 205 cases; contrast measured; B1 check; print to PDF. Tools: `tools/verify.py`,
  `tools/formtest.py`, `tools/shoot.py`, `tools/contrast.py`.
- **For the board** (`INBOX.md` 2026-10-19): the protocols and the discrepancy log are rendered in English;
  `law/` holds no article-by-article act text (the Wet year pages render the parameters with their articles,
  sources and quoted texts); the status words stay the repository's English words, explained on the Over page.
- **Live:** checked 2026-10-20 08:54 UTC: https://toeslagrecht.nl/static/tokens.css answers 200 with the new tokens, https://toeslagrecht.nl/dossier/zorgtoeslag/zt-2026-art2-1/ answers 200 (title: aanspraak), the front page is the form, and /layouts/b.html is 404 as the workflow intends.

## 2026-10-20 — eleventh run: the part-year rule encoded from Wzt art. 2 lid 5, discrepancy #9 closed and #10 opened on the order of rounding, an owner mockup received outside the inbox, Ask 11

Eleventh run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the same as the previous
entry; no handover note needed. The checkout arrived on `main` at a current `origin/main`. The routine fired the day
after the previous run: no new gap (Ask 10 still open for 10-15 to 10-17).

**Step 1.** No ask newly marked done (4, 6, 8, 9 and 10 open as recorded).

**Step 2 — the inbox, and a note that did not come through it.** `INBOX.md` is empty. But the repository changed between
the runs: on 2026-10-19 at 16:31 the owner committed `toeslagrecht-mockup-a.html` to the root ("Add files via upload").
Its header: *"Reference mockup for the toeslagrecht design brief, 2026-10-19. Direction A, 'het formulier'. A sketch
of colour, proportion and order, not production markup. The law sentences, article numbers and status words in it are
illustrative and must not be carried over; the real ones come from law/. The brief wins where they differ; DESIGN.md
wins over both. Fonts load from Google here for the sketch only; production self-hosts them."* Source recorded: the
commit `118ce32`, the owner's account. The operator reads it as an owner note under `BOARD.md` — the owner steers
through notes, and a file dropped into the repository is a note in a different place, not an instruction — and argues
what to do with it:
- *What the mockup is.* A page of 760 px measure, Source Sans 3 for the interface and Source Serif 4 for the law, a
  single green accent (#1F5C45) for links, the chosen radio and the button, a header with four plain links (Narekenen,
  Dossier, Wet, Over), the lock line "Niets van wat u invult verlaat uw telefoon of computer", a form of year chips and
  three numbered questions, and a result section that is layout B as `DESIGN.md` binds it: the amount, the one honest
  sentence, numbered steps with the article, its status word and the arithmetic in a margin note. It is, in look,
  what `DESIGN.md` §8 asks for ("a well-made government form and a court's own website") and what `memory.md` has
  carried since 10-10 as possible polish inside §8 (self-hosted serif, type scale).
- *Accepted in principle, applied not yet.* The typography, the accent, the measure, the lock line, the numbered form
  and the result section fit `DESIGN.md` (§1, §2, §3, §4, §5, §8 and the layout B decision) and need no motion; the
  operator may do them day to day. They were not applied this run, for one reason: the mockup refers to a *brief*
  that wins over the mockup, and the brief is nowhere in the repository. Building the sketch now and the brief next
  week would mean doing the page twice and arguing with a document the operator has not seen. That is Ask 11.
- *Rejected, or held for the brief.* (1) Fonts from Google: the mockup itself rules them out for production, and so do
  `DESIGN.md` §5 and §7 (a font request is a request leaving the device; static files). Self-hosting is the way, when it
  is done. (2) "Vul drie dingen in": the sketch asks the year, the income, the partner and the vermogen. The law needs
  more — the partner's income, whether the partner is verzekerd, the verdragsgerechtigde and the woonland, since today
  the months — and the checker asks them. Which questions are shown first and which fold away is a design question
  the brief should answer; the set cannot shrink below what the articles need (`CHARTER.md` P1, P4). (3) Nothing in the
  mockup touches the public posture, the scope or the charter, so no motion is filed and none is needed.
- The file stays where the owner put it. It is outside `site/`, so it is not published (owner decision 2026-10-11:
  internal matters stay in the repository). If the brief arrives as a file, both belong together under `design/`.

**Step 3.** No open motion.

**Step 4 — done (item 2 of `memory.md`, the first encoding task; two fetches, no search).**
- *Wzt art. 2 lid 5 encoded: a part of the year.* The text, read verbatim today in the versions of 01-01-2023 and
  01-01-2026 and identical in both: *"De aanspraak op een zorgtoeslag wordt voor iedere kalendermaand afzonderlijk
  bepaald."* Lid 6 allows a ministerial regeling with nadere regels; the wetstechnische informatie of art. 2 (geldend op
  20-10-2026) lists as gedelegeerde regelgeving only the Besluit percentages and under beleidsregels "Geen" — so there is
  no regeling, as `SOURCES.md` open item 1 already said on 10-09, now confirmed again. Encoded in `rules.py` and
  `site/zorgtoeslag-regels.js` with the input `maanden_aanspraak` (1–12, default 12): the aanspraak over m months is
  m twelfths of the unrounded year amount (`aanspraak_periode`), and Awir art. 14 lid 4 (rounding) and lid 5 (minimum)
  apply to that amount, which is the tegemoetkoming. The whole-year figure stays available (`tegemoetkoming_jaar`), and
  the Dienst's monthly practice figure is now computed from it, so every whole-year case is unchanged: 205 cases through
  both encodings, 205 identical. Which month counts — the month in which someone becomes or stops being a verzekerde —
  the text does not say; the number is input, and the checker says so in the hint. `rules.md` carries the text, the
  code, the order question and the discretion. The checker (`tools/zorgtoeslag.template.html`) asks "In hoeveel maanden
  van dat jaar had u recht op zorgtoeslag?" with 12 filled in, validates 1–12, says in the summary "Recht in 11 van de
  12 maanden", heads the result "Zorgtoeslag over 11 maanden van 2023", and prints the Dienst's figure beside the text's
  when they differ. Rendered and read in headless Chromium: 2023, € 30.763, 11 months → € 991, with the line "Dienst
  Toeslagen rondt eerst het jaarbedrag af en neemt daar 11/12 van: € 992, één euro anders".
- *The two part-year cases.* `zt-2023-rul-002` and `-003` now carry `maanden_aanspraak: 11` (the ruling gives no count;
  rul-003's € 1.703 is 11/12 of the year amount under either order of rounding, so 11 is fixed by it alone, and it is
  consistent with insurance ending after the move of 10-08-2023). **rul-003 passes** (€ 1.858,16 × 11/12 = € 1.703,31
  → € 1.703). **rul-002 gives € 991 against the Dienst's € 992**: the text's order — split, then round the
  tegemoetkoming once — gives € 1.081,61 × 11/12 = € 991,48 → € 991; the Dienst's amount needs the year amount rounded
  first, € 1.082 × 11/12 = € 991,83 → € 992. No other plausible method reproduces € 992 (rounding the month to cents
  first gives € 991; rounding it to whole euros gives € 990). 205 cases: 185 pass, 20 fail, 0 blocking.
- *A rule for the day a case is verified and the encoding is right to differ.* `CASES.md` says a verified case keeps
  the government's outcome and `LAW.md` says the encoding is not committed unless every verified case passes; when a
  verified case fails *because* the log classifies the difference `government` or `law`, both rules cannot hold at
  once. Decided (method, the operator's): a case may carry `discrepantie: <n>`; `build.py check` reads that entry's
  status from `DISCREPANCIES.md` — the log stays the authority, the case cannot declare itself explained — and reports a
  failure explained by a `government` or `law` entry as "FAIL — explained by #n", not blocking. Any other status, or
  no entry, blocks as before. Tested by setting rul-002 to verified for one run (1 verified, 0 blocking) and back.
  Written into `cases/README.md` and into #10 before it is needed, so that the rule is not invented under pressure.
  The summary line now counts verified cases instead of printing 0.
- Three source rows (the two Wzt versions, the art. 2 informatie page), `cases/README.md`, `rules.md` ("Niet
  gecodeerd": one unchanged situation over a part of the year is now coded; Awir art. 5 changes within the year
  still are not), the site rebuilt.

**The discrepancies.** **#9 → `encoding`**: the rule that was missing is encoded and the case that turns only on it
(rul-003) passes; what remains of rul-002 is a different question and gets its own number, because one entry with one
status cannot say "fixed" and "the Dienst differs" at once. **#10 opened, `government`**: the text rounds the
tegemoetkoming (Awir art. 14 lid 4, "het bedrag van de tegemoetkoming") and names no rounding of the year amount
before it goes into twelfths (Wzt art. 2 lid 5 names none either); the Dienst's amount requires one. This is the shape of
#1 — a figure the text names unrounded (there the drempelinkomen, here the year amount), rounded by the Dienst — and it
is classified the same way, with the caveat said in the entry: one ruling, one amount, one euro, and no regeling under
lid 6 that could prescribe the order. Not `law`: the text is not silent on what is rounded; it names the tegemoetkoming
and nothing else. Not `open`: it was investigated, and the Dienst's method is reproduced exactly. The encoding gives the
text's amount and shows the Dienst's beside it, in the checker and in `onbepaald`, so a citizen with a part-year
beschikking sees the euro and where it comes from. A second part-year beschikking, or the Dienst's method found in
writing, re-argues it.

**What was wrong and why.**
- *A promise written into the record before the code existed.* The first draft of #10 said the check "treats a verified
  failure classified `government` as explained" while `build.py` did no such thing. Caught on re-reading the entry;
  the code was written and tested before the entry was kept. The rule: a sentence in the log about what the pipeline
  does is a number — read it off the pipeline or do not write it.
- *An owner note found by `git log`, not by the inbox.* The routine reads `INBOX.md`; a file upload is invisible to it
  unless the run looks at the last commit. Added to `memory.md`: read `git log -3 --stat` at the start of every run, and
  treat any owner commit as a note.
- Nothing dropped from scope. 2017 (item 3) and the ruling pass (item 4) not started: the encoding task was the plan's
  first item and the discrepancy rule took the care it deserved. `PLAN.md` unchanged (strategy holds; Checkpoint 1 open
  on the owner, not missed by any date).

**Step 8 — asks.** Ask 11 (the design brief behind the mockup; not blocking). Ask 9 extended with a dated note: the
part-year cases no longer wait on anything.

**Dropped from memory.** The "Not encoded: a part of the year" paragraph and open item 2 (done; its design held, except
that the Dienst's order was not adopted as the encoding's — the text's was, and the Dienst's is shown as practice).

**Effort.** Roughly 185,000 of the 300,000-token ceiling: about 95,000 reading the files, the previous entries, both
encodings, the pipeline and the template; about 5,000 on two fetches (the Wzt of 2023 and 2026, the art. 2 informatie
page); about 85,000 writing and testing the two encodings, the pipeline change, the form, the rules text, two cases, two
discrepancy entries, three source rows, the headless render, the asks and these records. The cheapest run in fetches
and the most expensive in code since 10-14, as a rule change in both encodings is.

**Record under the ten-year rule.** This run added to the record: discrepancy #10 with its classification argued — the
dated finding, reproduced to the euro from a court's record, that the Dienst Toeslagen rounds the year amount before
pro-rating a part of the year, where the text rounds only the tegemoetkoming, and that this moves one euro in the one
case known; #9 closed with the date and the commit; the two part-year cases completed with their month count and the
reasoning that fixes it; the verbatim text of Wzt art. 2 lid 5 and 6 in the versions of 2023 and 2026, dated, with the
confirmation that no regeling exists under lid 6; the owner's mockup of 2026-10-19 recorded as a note with its source,
the argument on it, and Ask 11; and the dated rule for how a verified case that the encoding is right to differ from
counts in the tests. The encoding of the part-year rule, the form field and the site build are regenerable and are not
counted.

## 2026-10-19 — tenth run: 2018 encoded from primary texts, six more cases from case law (2020 and 2023), the first part-year amounts of the Dienst and discrepancy #9, a second retroactive factor correction found

Tenth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the same as the previous
entry; no handover note needed. The checkout arrived detached at a current `origin/main`; `checkout -B main origin/main`
as in `memory.md`. The routine fired the day after the previous run: no new gap (Ask 10 still open for the three days of
10-15 to 10-17).

**Steps 1–3.** No ask newly marked done (4, 6, 8, 9 and 10 open as recorded). `INBOX.md` empty. No open motion.

**Step 4 — done (Phase 2 history, items 2 and 3 of `memory.md`; twenty-five fetches, seven searches, four leaflet probes).**
- *Zorgtoeslag 2018 encoded* (`law/zorgtoeslag/parameters/2018.yaml`, `law/awir/parameters/2018.yaml`), every figure read in
  its primary text: standaardpremie € 1.546 (Stcrt. 2017, 68107: € 1.312 premie + € 234 eigen risico); WML januari 2018
  € 1.578,00 (Stcrt. 2017, 58642) → drempelinkomen € 20.450,88; percentages 1,990% / 4,750% / 13,490% (in the Wzt text of
  01-01-2018; set by Stb. 2017, 436, the koopkrachtbesluit for 2018 that lowered the normpercentages structurally by 0,33
  and 0,32 procentpunt and left the afbouw on its schema — the text itself says "De afbouwpercentages … veranderen niet",
  this time truthfully, since the 2017 and 2018 afbouw rows of its own tabel 1 follow the +0,03 schema); vermogensgrens
  € 83.415 on the grondslag sparen en beleggen (Stcrt. 2017, 65628, from € 82.752, tabelcorrectiefactor 0,8%; its
  toelichting states the rule as "heffingvrije vermogen plus € 83.415", which is exactly the derivation the encoding uses);
  heffingvrij vermogen 2018 € 30.000 (Wet IB 2001 art. 5.5, read) → effective thresholds € 113.415 / € 143.415;
  woonlandfactoren 2018 (Stcrt. 2017, 66088, identical to the consolidated bijlage 4 on all 39 lines, checked by script;
  the last table of the old method, with four factors above 1 — Denemarken, IJsland, Liechtenstein, Noorwegen — before the
  2019 re-basing); Awir 2018 art. 7 (no amount in lid 3; lid 6 € 4.827, read in Stcrt. 2017, 70975 art. VI) and art. 14
  lid 4–5 (same text). One Wzt version in 2018; art. 1 onder c still read "artikel 24, eerste lid". The two 2020-only rule
  versions cover 2018 unchanged through the year file's switches: no code changed in either encoding, parity 205/205. The
  checker offers 2018.
- *2018 is the first year whose ceilings turn on the drempelinkomen rounding.* From the text: € 28.720 / € 35.996. With a
  drempelinkomen rounded down to € 20.450 they would be € 28.719 / € 35.995; rounded up to € 20.451 they stay. 2019 and
  2020 were indifferent. So a Dienst publication naming the 2018 grenzen would decide `DISCREPANCIES.md` #1 for 2018;
  none was found (leaflet `tg0821z80fd`–`z83fd` all 404). Pre-recorded in `zt-2018-syn-020..023` (ceilings, both sides).
- *Six more cases from case law — the deliberate pass that item 3 of `memory.md` asked for, and it paid.* Web searches for
  zorgtoeslag rulings with amounts, the zaaknummer searched again to get the ECLI, the full text from `data.rechtspraak.nl`:
  - **2020, zonder partner** (ABRvS 17-12-2025, ECLI:NL:RVS:2025:6164): voorschot € 1.250 on a geschat inkomen of € 12.313,
    definitieve berekening € 1.163 on € 22.070 (an Anw-nabetaling counted). The 2020 text gives € 1.249,82 and € 1.163,19.
    `zt-2020-rul-001`, `-002`. The € 87 terugvordering is exactly the difference.
  - **2020, met partner** (ABRvS 27-11-2024, ECLI:NL:RVS:2024:4888): € 1.665 on a gezamenlijk toetsingsinkomen of € 26.834
    (two small pensions bought out). The text gives € 1.664,62. `zt-2020-rul-003`. So 2020, which has no leaflet, now has
    three outcomes of the Dienst, on both sides of the partner rule, each matching the text to the euro.
  - **2023, zonder partner, a part of the year** (Rechtbank Midden-Nederland 02-06-2026, ECLI:NL:RBMNE:2026:4437): the
    aanvrager moved to Germany on 10-08-2023. Voorschot of 28-12-2022 € 1.858 on € 11.204 — the whole-year maximum, text
    € 1.858,16, `zt-2023-rul-001`, passes. Then the herzien voorschot of 02-02-2024 € 1.703 on the same income and the
    definitieve berekening of 05-09-2025 € 992 on € 30.763: the encoding, which computes only unchanged whole years, gives
    € 1.858 and € 1.082. Stored as `zt-2023-rul-002`, `-003`; both fail; **discrepancy #9 opened**, see below.
  - Two rulings read and recorded without a case: ECLI:NL:RVS:2019:1346 (a 2018 voorschot for a couple in België, the
    Dienst's € 165 replaced by the rechtbank's € 1.102 with the woonlandfactor 0,7193 — confirms the 2018 factor for
    België in practice, but neither amount's income is stated, and the two are not consistent with one income) and
    ECLI:NL:RVS:2023:3385 (2019, nihil on € 31.546, household not stated; consistent but undiscriminating).
  All eight ruling cases now wait on the same ten-minute confirmation per ruling (Ask 9, extended with a dated note).
- *Eight amendment rows* in `law/CHANGES.md` (seven for 2018-01-01 and one for the heffingvrij vermogen 2018 → 2019), and
  five "old" or "not read" columns of the 2019 rows filled from what was read (the 2018 percentages now from the text, the
  2018 standaardpremie, the 2018 woonlandfactor table, the Awir 2018 amount, Germany's published 2018 factor 0,9559 in the
  retroactive-correction row). One more retroactive correction found: Stcrt. 2017, 66088 art. II set Zweden's factor for
  2017 anew at 0,8263, retroactive to 01-01-2017 — the second single-country correction after Germany's, recorded with
  "whether it reached the zorgtoeslag: not stated in the text read". Eleven source rows, the 2018 leaflet entry and five
  rulings in `law/SOURCES.md`; open item 4 now says 2017 with what is known (BWBR ids, Stcrt. numbers, both retroactive
  factors). 205 cases: 184 pass, 21 fail (the nineteen known plus the two part-year cases), 0 blocking.

**The discrepancies.** **#9 opened** (`open`): the Dienst's two part-year amounts for 2023 against the encoding's whole-year
amounts. Investigated, not a text-versus-decision conflict: Wzt art. 2 lid 5 determines the aanspraak per kalendermaand
and the encoding states that rule but does not compute it (`LAW.md`: changes within the year not encoded). What the ruling
adds to the record is the Dienst's method, reproduced to the euro: take the *rounded* whole-year amount (€ 1.082), multiply
by the months of entitlement over twelve (11, inferred from both amounts — the ruling gives no count), round again
(€ 991,83 → € 992). The unrounded year amount would give € 991. The order of month-split and rounding is something the text
does not say; it becomes a `law` candidate if a case ever turns on it. #9 becomes `encoding` when lid 5 is encoded with a
months-of-entitlement input and both cases pass — the next run's first encoding task, since the fix is in both encodings
and the form. Classified `open` rather than `encoding` because `encoding` in `CASES.md` means "what was fixed, in which
commit", and nothing is fixed yet. #1 gains its first year in which the ceilings would decide it (2018), without a Dienst
figure to decide it with.

**What was wrong and why.**
- *A sloppy clause in a parameter file, caught before commit.* The first draft of the 2018 woonlandfactor `bron` text said
  "vijf landen boven 1 (Denemarken, Duitsland? nee: …)" — thinking aloud written into the record. Replaced by the counted
  fact (four). The rule holds: read every string of a parameter file back before the check runs.
- *An article number recalled, not read.* The Awir lid 6 row first cited "art. XIII" of Stcrt. 2017, 70975; the text says
  art. VI. Caught by grepping the heading above the sentence. Same lesson as 10-14, in a new shape: not only numbers but
  article references are read or not written.
- *A ruling's quoted letter is not a case.* ECLI:NL:RVS:2024:4888 quotes a Dienst letter saying the toeslag on € 11.209
  came to "ongeveer € 862,00 per maand" — impossible for 2020 (the maximum is € 1.913 per year). Recorded in `SOURCES.md`
  as an evident slip in the ruling's text, not stored, not a discrepancy (no inputs, no decision).
- *The data.rechtspraak.nl search API returned zero results* for a creator/date/subject query; the working route is a web
  search for the subject with amounts, then the zaaknummer searched once more for the ECLI (`raadvanstate.nl` is 403 to
  curl and to WebFetch), then `data.rechtspraak.nl/uitspraken/content?id=<ECLI>`. Written into `memory.md`.
- Nothing dropped from scope. Nibud/Rijksoverheid cases not started; the ruling pass was the better use and gave 2020 its
  first Dienst outcomes. `PLAN.md` unchanged (strategy holds; Checkpoint 1 open on the owner, not missed by any date).

**Step 8 — asks.** None new. Ask 9 extended with a dated note naming the six new ruling cases (same act, per ruling).

**Dropped from memory.** The 2018 to-do with its pointers (done; its guess that 2018 "should need no new rule version"
held, as for 2019). The ruling-pass method is kept, shortened, now that it has worked twice.

**Effort.** Roughly 175,000 of the 300,000-token ceiling: about 80,000 reading the files and the previous entries, about
40,000 on twenty-five downloads (the Wzt, Awir and WML of 2018 with five informatie pages, the 45 MB Regeling
zorgverzekering, the 4 MB Wet IB 2001, one Staatsblad, five Staatscouranten, the standaardpremie regeling and its
informatie page, six rulings) and seven searches, about 55,000 writing two parameter files, ten cases, eight amendment
rows, sixteen source rows, the discrepancy, the rules text and these records. Cheaper than predicted for a year plus a
ruling pass, because the ruling texts are small and the year needed no code.

**Record under the ten-year rule.** This run added to the record: the law of 2018 as it stood, with every figure's
instrument and date; the structural 0,33 / 0,32-point lowering of the normpercentages from 2018 (Stb. 2017, 436) with the
2017 figures and the whole history of measures 2010–2016 its tabel 1 gives; seven dated amendment rows 2017 → 2018 →
2019 and the heffingvrij vermogen row; the dated finding that 2018 is the first encoded year whose income ceilings turn
on the Dienst's drempelinkomen rounding, with the four boundary cases that would decide it; the dated finding of a second
retroactive single-country factor correction (Zweden 2017); the dated finding that the Dienst's 2018 leaflet is nowhere;
and — the larger part — six outcomes of the Dienst Toeslagen taken from three court records, stored as `ruling` cases
with their ECLI: three for 2020, a year with no leaflet, each matching the text to the euro on both sides of the partner
rule, and three for 2023, of which two are the first part-year amounts in the corpus and show, to the euro, how the Dienst
pro-rates a year — the finding that opened discrepancy #9 and set the next rule to encode. Also two rulings read and
recorded as not usable, with the reason. The 2018 encoding, the four synthetic cases and the site build are regenerable
and are not counted.

## 2026-10-18 — ninth run: 2019 encoded from primary texts, the first two cases from case law, three days without a run, Asks 9 and 10

Ninth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the same as the previous
entry; no handover note needed. The checkout arrived detached at a current `origin/main`; `checkout -B main origin/main`
as in `memory.md`.

**Three scheduled runs left no trace.** The previous entry is 2026-10-14. Nothing was committed on 10-15, 10-16 or 10-17,
and no file in the repository shows a run that started. From inside a run the operator cannot see the routine's history,
so it cannot say whether the routine did not fire or fired and failed before committing. Recorded here as a gap in the
record of three days, and put to the owner as Ask 10 (not blocking). No checkpoint of `PLAN.md` is dated, so none was
missed by it; the routine's own promise — a run a day — was not kept, by whom or what is unknown.

**Steps 1–3.** No ask newly marked done (4, 6 and 8 open as recorded). `INBOX.md` empty. No open motion.

**Step 4 — done (Phase 2 history, item 2 of `memory.md`; twenty-three fetches, four searches, five leaflet probes).**
- *Zorgtoeslag 2019 encoded* (`law/zorgtoeslag/parameters/2019.yaml`, `law/awir/parameters/2019.yaml`), every figure read in
  its primary text: standaardpremie € 1.609 (Stcrt. 2018, 66728: € 1.385 premie + € 224 eigen risico); WML januari 2019
  € 1.615,80 (Stcrt. 2018, 59237) → drempelinkomen € 20.940,768; percentages 2,005% / 4,315% / 13,520% (in the Wzt text of
  01-01-2019; set by Stb. 2018, 431, which lowered the normpercentage for verzekerden met partner structurally by 0,45 point
  from 2019 and left the other two on their schema); vermogensgrens € 84.416 on the grondslag sparen en beleggen (Stcrt. 2018,
  61205, from € 83.415); heffingvrij vermogen 2019 € 30.360 (Wet IB 2001 art. 5.5, read) → effective thresholds € 114.776 /
  € 145.136; woonlandfactoren 2019 (Stcrt. 2018, 60576, identical to the consolidated bijlage 4 on all 39 lines; the only
  factor above 1 is Norway's); Awir 2019 art. 7 (no amount in lid 3, as in 2020; lid 6 € 4.885) and art. 14 lid 4–5 (same
  text). The Wzt had one version in 2019; its three instruments are named in the parameter file, including the one that is
  not a computation rule (Verzamelwet VWS 2018, of which only art. XVI onderdeel A sub 2 took effect on 01-01-2019 — read in
  Stb. 2018, 454 — so the 2019 text names art. 69 Zvw but not yet art. 68). The two 2020-only rule versions of the previous
  run (lid 5 oud; the grondslag-basis with the heffingvrij vermogen) cover 2019 unchanged through the year file's switches: no
  code changed in either encoding, parity 195/195. The checker offers 2019.
- *The first two cases from case law.* A web search for the 2019 leaflet found instead a Raad van State ruling, ABRvS 10 mei
  2023, ECLI:NL:RVS:2023:1809, whose text (fetched from `data.rechtspraak.nl`) quotes two beschikkingen of the Dienst for
  2019 for a couple of toeslagpartners: the voorschot of 27-12-2018, € 2.314 on a geschat gezamenlijk toetsingsinkomen of
  € 13.314, and the definitieve berekening of 06-11-2020, € 1.367 on € 27.946, upheld on appeal. The 2019 text gives
  € 2.314,41 and € 1.367,30 → € 2.314 and € 1.367 (Awir art. 14 lid 4). Stored as `zt-2019-rul-001` and `-002`, source type
  `ruling`, the first in the corpus. Privacy checked: the ruling is anonymised by the court and the cases carry the year,
  the partner status, the incomes and the amounts only — no name, no kenmerk, no date beyond the beschikking dates already
  in the public ruling. Under `CASES.md` they become `verified` when a named human confirms the inputs against the ruling:
  that is Ask 9, ten minutes of the owner's time, and the first verified cases the project could have. Said plainly in
  `rul-002`: the ruling's terugvordering of € 950 is € 3 more than 2.314 − 1.367; the ruling does not explain it (a revised
  voorschot would), and since each amount matches the text on its own, no discrepancy is opened on it.
- *Four synthetic cases* (`zt-2019-syn-016..019`): the two inkomensgrenzen from the text, € 29.562 / € 37.885, on both sides.
  195 cases: 176 pass, 19 fail (the same nineteen, all logged), 0 blocking.
- *Eight amendment rows* in `law/CHANGES.md` (seven for 2019-01-01: percentages, vermogensgrens, standaardpremie, WML,
  woonlandfactoren, the art. 1 onder c wording, the Awir lid 6 amount; one for 2020-01-01: the heffingvrij vermogen the
  encoding uses for 2019 and 2020), and four "old" or "not read" columns of the 2020 rows filled in from what was read
  this run (the 2019 percentages, the 2019 standaardpremie, the 2019 woonlandfactor table, Germany's published 2019
  factor). Ten source rows, a new section 4 (case law) and the 2019 leaflet entry in `law/SOURCES.md`; open item 4 now
  says 2018 with what is known.
- *The 2019 leaflet is missing too.* `tg0821z90fd` through `z94fd` are 404; a search found no copy. So 2019, like 2020 and
  2021, has no `published` case from the Dienst — but, unlike them, it has two outcomes of the Dienst from a court record.

**The discrepancies.** None opened. The two ruling amounts match the text; they do not discriminate the drempelinkomen
rounding (#1): with € 20.940,768, € 20.940 or € 20.941 the whole-euro results are the same. Nothing of the Dienst's
method for 2019 (monthly rounding, step 5) was read.

**What was wrong and why.**
- *A found instrument that the record had half-guessed.* `CHANGES.md` row 2019-10-26 said Germany's published 2019 factor
  was "not read"; it is 0,8701 (Stcrt. 2018, 60576, where the toelichting even shows its derivation, 0,8372 × 1,04). Filled
  in, dated. The 2019 parameter file carries 0,8701 for the zorgtoeslag and the correction to 0,7827 beside it, as the
  2026-10-14 entry said it should.
- *The percentage schema was revised before taking effect for the fifth time* — and for the first time found from the
  earlier side: Stb. 2018, 431 set 2020 at 2,020% / 4,330% / 13,550%; Stb. 2019, 386 replaced the two normpercentages
  (1,830% / 4,140%) and kept the afbouw. Recorded in the 2019 row; the 2020 row already had the Stb. 2019, 386 side.
- *Shell discipline.* A `cd … && get.sh … &` chain backgrounded the `cd`, and the next reads ran in the wrong directory;
  redone with absolute paths, lesson in `memory.md`. The Rzv version URL for 2019-12-31 was a 404, so only the 01-01-2019
  bijlage 4 was read; the parameter file says so and why that is enough (the 2020 regeling replaced the whole bijlage and
  names only Germany as changed for 2019).
- Nothing dropped from scope. Nibud/Rijksoverheid cases not started; the rechtspraak.nl scan (open item 4 of `memory.md`
  since the founding plan) happened by accident rather than design and paid off at once, so it is now item 3 with a method.
  `PLAN.md` unchanged (strategy holds; Checkpoint 1 open on the owner, not missed by any date).

**Step 8 — asks.** Ask 9 (verify the two ruling cases; not blocking). Ask 10 (the three missing runs; not blocking). Ask 8
stays as it was.

**Dropped from memory.** The 2019 to-do with its pointers (done; its guess that 2019 "should need no new rule version" held).
Nothing else was held.

**Effort.** Roughly 170,000 of the 300,000-token ceiling: about 80,000 reading the files and the previous entries, about
35,000 on twenty-three downloads (the Wzt, Awir and WML of 2019 with four informatie pages, the 46 MB Regeling
zorgverzekering, the 4 MB Wet IB 2001, three Staatsbladen, five Staatscouranten, two rulings) and four searches — cheap
because every text was grepped, not read whole — about 55,000 writing two parameter files, six cases, eight amendment
rows, ten source rows, the rules text, two asks and these records. The cheapest year so far, as predicted: no new rule
version.

**Record under the ten-year rule.** This run added to the record: the law of 2019 as it stood, with every figure's
instrument and date; the structural 0,45-point lowering of the partner normpercentage from 2019 (Stb. 2018, 431) with the
2018 figures the besluit itself gives, and the dated fact that its 2020 and 2021 rows never took effect; seven dated
amendment rows 2018 → 2019 → 2020 and the heffingvrij vermogen row; the dated finding of which part of the Verzamelwet
VWS 2018 reached the Wzt on 01-01-2019 and which did not; Germany's published 2019 factor with its derivation, beside its
retroactive correction; the dated finding that the Dienst's 2019 leaflet is nowhere to be found; and — the first of their
kind — two outcomes of the Dienst Toeslagen for 2019 taken from a court's record, stored as `ruling` cases with the ECLI,
each matching the text to the euro, one confirmation away from being the project's first verified cases. Also the dated
record that three scheduled runs left no trace. The 2019 encoding, the four synthetic cases and the site build are
regenerable and are not counted.

## 2026-10-14 — eighth run: 2020 encoded from primary texts, two 2020-only rules given dated versions, a misleading hint in the checker fixed, a retroactive woonlandfactor correction found, the 2020 leaflet missing

Eighth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the same as the previous
entry; no handover note needed. The checkout arrived detached at a current `origin/main`; `checkout -B main origin/main`
as in `memory.md`.

**Steps 1–3.** No ask newly marked done (4 and 6 open as recorded; Checkpoint 1 is the owner's; 8 open). `INBOX.md`
empty. No open motion.

**Step 4 — done (Phase 2 history, item 2 of `memory.md`; twenty-one fetches, three searches, two leaflet probes).**
- *Zorgtoeslag 2020 encoded* (`law/zorgtoeslag/parameters/2020.yaml`, `law/awir/parameters/2020.yaml`), every figure read
  in its primary text: standaardpremie € 1.642 (Stcrt. 2019, 64399: € 1.415 premie + € 227 eigen risico); WML januari 2020
  € 1.653,60 (Stcrt. 2019, 56680) → drempelinkomen € 21.430,656; percentages 1,830% / 4,140% / 13,550% (in the Wzt text of
  01-01-2020; set by Stb. 2019, 386, which lowered the two normpercentages structurally by 0,19 point from 2020 as a
  koopkrachtmaatregel and left the afbouw on its +0,03 schema); vermogensgrens € 85.767 (Stcrt. 2019, 61842, from
  € 84.416); woonlandfactoren 2020 (Stcrt. 2019, 58198, identical to the consolidated bijlage 4 on all 39 lines); Awir
  2020 art. 7 (lid 3 then named no amount: no tegemoetkoming as soon as any voordeel uit sparen en beleggen was taken
  into account) and art. 14 lid 4–5 (verbatim, same text). The only other 2020 version of the Wzt (19-03-2020, Stb. 2020,
  67, art. XVIII) corrects one spelling in art. 5 lid 3. The checker offers 2020.
- *Two rules that exist only up to 2020, encoded as dated versions.* (1) **`zt-2020-art2-5oud`**, Wzt art. 2 lid 5 as it
  read through 2020: no zorgtoeslag for a verzekerde whose partner did not meet the Zvw art. 2 verzekeringsplicht. New
  input `partner_verzekeringsplicht_niet_nagekomen` (ja/nee/onbekend; unknown → computed as if met, with a note), applied
  after lid 4, active only where the year's file says `art2_lid5_oud_aanwezig: true`; the checker shows the question only
  for such years. The monthly rule's label follows the year (`artikel_maandbepaling`: lid 6 in 2020). (2) The
  **vermogenstoets on the grondslag sparen en beleggen**: art. 2a (2020) compared not the rendementsgrondslag but the
  grondslag of Wet IB 2001 art. 5.2 — the rendementsgrondslag above the heffingvrij vermogen (€ 30.846, art. 5.5, read),
  twice that for partners the whole year (art. 5.2 lid 2, read) — with one amount. The encoding keeps asking the
  rendementsgrondslag and deducts the heffingvrij vermogen itself (`vermogenstoets_basis`, `heffingvrij_vermogen`, each
  with its article), so that 2020's effective thresholds come out at € 116.613 / € 147.459: exactly the amounts Stb.
  2020, 546 wrote into the Wzt for 2021, which closes the derivation recorded on 2026-10-13 from the other side. Both
  changes mirrored in the browser port; parity 189/189.
- *Eight synthetic cases* (`zt-2020-syn-008..015`): the two inkomensgrenzen from the text (€ 30.480 / € 38.945) on both
  sides, the lapsed lid 5, the vermogenstoets on both sides of € 85.767 for a single person and a couple. 189 cases: 170
  pass, 19 fail (the same nineteen, all logged), 0 blocking.
- *Seven amendment rows* in `law/CHANGES.md` (2020-01-01: percentages, vermogensgrens, standaardpremie, WML,
  woonlandfactoren; one completing the 2021 Awir art. 7 row — there were no "2020 amounts" to read, the test was
  qualitative; and one for 26-10-2019: Stcrt. 2019, 58198 art. II set the German woonlandfactor for 2017, 2018 and 2019
  anew with retroactive effect because it had been set too high, with a toelichting that says the correction applies
  to the verdragsbijdrage only and "geen effect op de hoogte van de zorgtoeslag" — the first retroactive correction of a
  factor found, and the first instrument found to say which of the factor's two uses a correction reaches). Eleven
  source rows and the 2020 leaflet entry in `law/SOURCES.md`; open item 4 now says 2019 with what is known.
- *The 2020 leaflet is missing altogether.* `tg0821z01fd` and `z02fd` are 404; a search found no copy and no archive
  link. So 2020, like 2021, has no `published` case and no evidence of the Dienst's roundings; the parameter file says so,
  and a dated note under Ask 8 asks the owner to look if he can.

**The discrepancies.** None opened: nothing of the Dienst's for 2020 was read. One thing is pre-recorded in
`zt-2020-syn-009`: at toetsingsinkomen € 30.481 the text gives € 23,50 → € 23 → nothing, while a drempelinkomen rounded to
€ 21.431 (the Dienst's practice in 2023–2026, #1) would give € 23,54 → € 24. If a publication of the Dienst for 2020 ever
puts the grens at € 30.481, that is #1 for 2020.

**What was wrong and why.**
- *A hint in the checker that could mislead a citizen, since 2026-10-10.* The vermogen field said "boven het heffingvrije
  vermogen": it asked for the grondslag sparen en beleggen where the law since 2021 compares the full rendementsgrondslag
  (art. 5.3) with the grens. A citizen with € 160.000 who followed the hint would have entered ≈ € 102.000 in 2026 and
  been told "onder de grens" where the law says none. The encoding was right; the hint was not (P4, P13). Fixed in the
  template this run: "het hele bedrag, vóór aftrek van het heffingvrije vermogen (… voor 2020 trekt de berekening het
  heffingvrije vermogen zelf af)". Found only because 2020 forced a close reading of art. 5.2 against art. 5.3. Logged here
  rather than in `DISCREPANCIES.md`, which is for encoding versus government outcomes; this was the page versus the law.
- *An unread number nearly entered the record, again.* The first draft of the WML row gave the July 2019 amount from
  memory; replaced by "not yet read" on re-reading the diff. And a case note quoted "€ 1.912,75" without computing it
  (€ 1.913,13); fixed before commit. Rule restated in `memory.md`: a number in prose is computed or read, never recalled.
- *A version label too long for the page.* The 2020 `versie` string carried the 19-03-2020 remark into every margin note
  of the result page; moved to `versie_opmerking`.
- *Parallel fetches with a relative path* ran in the wrong directory once; the helper now takes absolute paths.
- Stale year lists: `README.md` ("2026, 2025, 2024 and 2023", "166 published cases") and `site/README.md` ("2023–2026")
  had not been updated since 2026-10-10; both now say 2020–2026 and 173 + 16.
- Nothing dropped from scope. Nibud/Rijksoverheid cases and the rechtspraak.nl scan not started again; 2020 was the
  cheaper and more durable choice and carried two structural rule versions. `PLAN.md` unchanged (strategy holds;
  Checkpoint 1 open on the owner, not missed by any date).

**Step 8 — asks.** None new. A dated note under Ask 8 extends it to the 2020 leaflet if the owner can find one.

**Dropped from memory.** The 2020 to-do with its pointers (done; `tg0821z01fd`/`z02` were 404 as feared); the "2021 to
2024" phrasing of the article numbering (now 2020–2024). Nothing else was held.

**Effort.** Roughly 290,000 of the 300,000-token ceiling — the closest to it yet: about 85,000 reading the files and the
previous entries, about 70,000 on twenty-one downloads (the Wzt, Awir and WML of 2020 with three informatie pages, the
46 MB Regeling zorgverzekering, the 4 MB Wet IB 2001, two Staatsbladen, five Staatscouranten, the standaardpremie
regeling's informatie page) and three searches, about 90,000 writing two parameter files, two rule versions in two
encodings, the checker form, eight cases, the amendment and source rows, the rule text and these records, the rest on
the headless render and the build. The two rule versions, not the year, made this run expensive; 2019 should cost
less unless its lid 5 or its vermogenstoets differs again.

**Record under the ten-year rule.** This run added to the record: the law of 2020 as it stood, with every figure's
instrument and date; two rules as they stood only through 2020, with their text and the instrument that ended them —
the exclusion for a partner who did not insure (Wzt art. 2 lid 5 oud) and the vermogenstoets on the grondslag sparen en
beleggen with the heffingvrij vermogen that made 2020's threshold equal, to the euro, to the rendementsgrondslag amounts
of 2021; the structural 0,19-point lowering of the normpercentages from 2020 (Stb. 2019, 386) with the 2019 figures the
besluit itself gives; six dated amendment rows 2019 → 2020 → 2021 and the completion of the Awir 2021 row; the dated
finding that the German woonlandfactor for 2017–2019 was corrected retroactively with an explicit statement that the
zorgtoeslag was not revised; the dated finding that the Dienst's 2020 leaflet is nowhere to be found; and the dated record
of a misleading hint in the published checker, what it would have done, and its fix. The 2020 encoding, the eight
synthetic cases and the site build are regenerable and are not counted. Still no verified case: that needs a human and
a document, and the first such pairs remain the owner's Checkpoint 1.

## 2026-10-13 — seventh run: 2021 encoded from primary texts, a wrong percentage in the record corrected, the 2021 leaflet out of reach, Ask 8

Seventh run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the same as the previous
entry; no handover note needed. The checkout arrived detached with a stale `origin/main` again; the fetch in `memory.md`
handled it.

**Steps 1–3.** No ask newly marked done (4 and 6 stay open as recorded; Checkpoint 1 is the owner's). `INBOX.md` empty. No
open motion.

**Step 4 — done (Phase 2 history, item 2 of `memory.md`; nineteen fetches, three searches, four URL probes).**
- *Zorgtoeslag 2021 encoded* (`law/zorgtoeslag/parameters/2021.yaml`, `law/awir/parameters/2021.yaml`), every figure read
  in its primary text: standaardpremie € 1.705 (Stcrt. 2020, 62033; 2020: € 1.642); WML januari 2021 € 1.684,80 (Stcrt.
  2020, 53099) → drempelinkomen € 21.835,008; percentages **1,915% / 4,225% / 13,580%** (the Wzt text of 01-01-2021; set by
  Stb. 2020, 452 at 1,885% / 4,195% / 13,580% and raised by 0,030 point on the two drempel percentages before taking effect
  by amendement Snels/Lodders in the Wet verbetering uitvoerbaarheid toeslagen, Stb. 2020, 543, art. III — the 1,885% never
  applied); vermogen € 118.479 / € 149.819 (Stb. 2020, 546, art. IV, indexed by Stcrt. 2020, 67965); woonlandfactoren 2021
  (Stcrt. 2020, 53972, identical on all 39 lines to the consolidated bijlage 4; no correction found); Awir 2021 art. 7
  (€ 31.340 / € 62.680 from Stb. 2020, 546, art. III; lid 6 € 5.044 from Stcrt. 2020, 64406) and art. 14 lid 4–5 (verbatim,
  same text). Same article numbers and `undetermined` case as 2022–2024. The checker offers 2021.
- *Two amendments of 1 January 2021 that no later text shows.* (1) The Wet aanpassing box 3 moved the Wzt's vermogenstoets
  from the grondslag sparen en beleggen (one amount, € 85.767 in 2020, single and joint alike) to the rendementsgrondslag
  with two amounts, € 116.613 / € 147.459 — which are the old grens plus the heffingvrij vermogen 2020 of € 30.846 per
  person, to the euro; the same act gave the Awir its € 31.340 / € 62.680. (2) The Wet verbetering uitvoerbaarheid
  toeslagen struck Wzt art. 2 lid 5 (no zorgtoeslag for a verzekerde whose partner had not taken out the compulsory
  insurance) and renumbered lid 6–8 to 5–7, so the monthly-determination rule the encoding cites as lid 5 was lid 6 in
  2020. Both are in `law/CHANGES.md` with their texts; 2020 will need a dated rule version for each.
- *Eleven amendment rows* in `law/CHANGES.md` (ten for 2021-01-01; one for 2022-01-01: the 2022 schema row of Stb. 2020,
  452 — 1,900% / 4,210% — revised by Stb. 2021, 574 before taking effect, the fourth such pre-effect revision found) and
  one corrected row (below). `law/SOURCES.md` has twelve new rows, open item 4 now says 2020 with what is already known,
  and a new item 6.
- *The 2021 leaflet is out of reach.* `tg0821z11fd` (which the search index still describes) is a 404 on
  `download.belastingdienst.nl`, as are editions `z10`, `z12`–`z15`. The Wayback Machine holds a snapshot of 2024-07-18;
  this environment cannot fetch it (403 through the proxy; WebFetch refuses the host). So 2021 has no `published` case.
  Four `synthetic` cases (`zt-2021-syn-004..007`) hold the two inkomensgrenzen computed from the text, € 31.138 and
  € 39.979, on both sides of the boundary euro — the same two figures the index quotes from the leaflet, which is the only
  check 2021 has had and is said as such in the case files. 181 cases: 162 pass, 19 fail (the same nineteen, all logged),
  0 blocking; browser/Python parity 181/181.

**The discrepancies.** None opened: nothing of the Dienst's for 2021 was read. #1, #3, #5/#8 (the monthly rounding) are
unknown for 2021 until the leaflet's examples arrive; `parameters/2021.yaml` says so, and the checker's 2021 result shows
the default practice (rounded down) with its note.

**What was wrong and why.**
- *A wrong number in the record, for a day.* The 2022 row for the afbouwpercentage in `law/CHANGES.md` read "13,610% →
  13,610%" and `memory.md` said 2021 was 13,610%. The sixth run took Stb. 2021, 574's "De afbouwpercentages ... veranderen
  niet" to mean 2021 equalled 2022; it means that besluit left the 2022 row of Stb. 2020, 452 alone. The text of
  01-01-2021 says 13,580%, and Stb. 2021, 574's own tabel 1 prints 13,58% for 2021 and 13,61% for 2022. Row corrected
  with the correction dated and explained in the row; the lesson (read the year's text before writing an "old" column;
  a toelichting sentence is about what that instrument changes) is in `memory.md`. No parameter file was wrong — 2022 was
  encoded at 13,610%, correctly — so no case and no computation was affected; the error was in the record of the change,
  which is exactly the part the ten-year rule protects, and that is why it is logged here rather than fixed quietly.
- *An unread number nearly entered the record.* The first draft of the WML row gave the July 2020 amount from memory;
  caught on re-reading the diff and replaced by "not yet read". Rule restated in `memory.md`.
- *Stale year lists.* `law/zorgtoeslag/rules.md` still said "Gecodeerd: 2026, 2025, 2024 en 2023" and `law/README.md`
  "2026 and 2025": the fifth and sixth runs added years to the parameters and the site but not to these two sentences.
  Both now list 2026 back to 2021 and the per-year article notes in `rules.md` cover 2022 and 2021.
- Nothing dropped from scope. Nibud/Rijksoverheid cases and the rechtspraak.nl scan were again not started; a year of
  history was again the cheaper, more durable choice, and 2021 turned out to hold two structural amendments. `PLAN.md`
  unchanged (strategy holds; Checkpoint 1 open on the owner, not missed by any date).

**Step 8 — asks.** Ask 8 opened (not blocking): the owner opens the Wayback copy of the 2021 leaflet in a browser and
pastes its figures into `INBOX.md`. Reading a public archive is not contact (P11); asking the owner to do it is the
operator's only channel and costs him minutes.

**Dropped from memory.** The 2021 to-do with its guessed pointers (done; one of them, 13,610%, was wrong); the "2022 to
2024 only" phrasing of the article numbering (now 2021–2024). Nothing else was held.

**Effort.** Roughly 215,000 of the 300,000-token ceiling: about 55,000 reading the files and the previous entries, about
75,000 on nineteen downloads (the Wzt of 2021 and 2020, the Awir, the WML, the 26 MB Regeling zorgverzekering, four
wetstechnische-informatie pages, three Staatsbladen, five Staatscouranten, two standaardpremie regelingen), three searches
and the leaflet probes, the rest writing the two parameter files, the four cases, eleven amendment rows and a correction,
twelve source rows, the `rules.md` updates, Ask 8 and these records.

**Record under the ten-year rule.** This run added to the record: the law of 2021 as it stood, with every figure's
instrument and date; two amendments of 1 January 2021 that the consolidated texts of later years do not show — the
vermogenstoets moving to the rendementsgrondslag with amounts derived to the euro from the old grens and the heffingvrij
vermogen (Stb. 2020, 546), and the lapsing of the rule that denied zorgtoeslag to a verzekerde with an uninsured partner
(Stb. 2020, 543), with the renumbering it caused; the fact that the 2021 percentages were set twice before they took
effect (Stb. 2020, 452 → Stb. 2020, 543) and that the 2022 schema row was revised before taking effect too; eleven dated
amendment rows 2020 → 2021 → 2022; a correction to the record, dated and explained in place, of a percentage the previous
run had recorded wrongly for 2021; and the dated finding that the Dienst's 2021 leaflet has vanished from its site while
an archive copy exists. The 2021 encoding, the four synthetic cases and the site build are regenerable and are not
counted. Still no verified case: that needs a human and a document, and the first such pairs remain the owner's
Checkpoint 1.

## 2026-10-12 — sixth run: the site live and cleaned per the owner's decision, Ask 7 closed, Ask 6 narrowed, 2022 encoded from primary texts, a second corrected woonlandfactor table, discrepancy #8

Sixth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the same as the
previous entry; no handover note needed. The checkout again arrived detached with a stale `origin/main`; the fetch
in `memory.md` handled it.

**Step 1 — asks marked done.** Ask 7 (publish the site) was done by the owner on 2026-10-11. Unblocked and done this
run: `site/CNAME` added (GitHub ignores the file for a deployment from a workflow — the domain lives in the Pages
settings — so it is kept only as the record of the domain and against a switch back to branch deployment); HTTPS
checked: `https://toeslagrecht.nl/` answers 200 with a valid certificate, `http://`, `www.` and
`theandries.github.io/toeslagrecht/` all redirect to it. Ask 7 closed in `ASKS.md`.

**Step 2 — the inbox (three entries of 2026-10-11, all from the owner, Andries, in an owner-initiated session;
moved here, `INBOX.md` emptied).**
- *Owner note, Ask 7(a).* GitHub Pages "deploy from a branch" offers only `/` and `/docs`; rather than rename
  `site/`, the owner added `.github/workflows/pages.yml` (upload `site/` as a Pages artifact on every push to `main`
  that touches it) and set the source to GitHub Actions. **Accepted** and recorded under Ask 7: it keeps the
  repository layout of `LAW.md` and `site/README.md`, costs nothing, and the operator can read the workflow. One
  consequence noted: a push that touches `site/` deploys; a run that only changes `law/` or `cases/` does not
  (the checker's parameters are in `site/zorgtoeslag-parameters.js`, which `build.py build` regenerates, so an
  encoding change reaches the site when the build output is committed, as this run does).
- *Owner decision: internal matters are never published on the website.* Recorded by the owner in `BOARD.md`;
  **transcribed into `DESIGN.md`** this run as the section "Internal matters stay in the repository" — the one kind
  of change to `DESIGN.md` the operator may make. Applied: the section "Hoe de pagina gekozen is" removed from the
  front page (`tools/build.py`); the `noscript` link to `layouts/b.html` removed from the checker template; and,
  because every file under `site/` is served whether or not a page links to it, the workflow now removes
  `site/layouts/` from the deployed artifact before upload. The three layouts stay in the repository as the record
  of Ask 3, where `DESIGN.md` and `BOARD.md` point to them; nothing else was moved, so no reference went stale.
  Argued rather than merely obeyed: the decision follows from `DESIGN.md` §2 and §8 as they already stood (the
  page is the computation; it looks like it has nothing to sell), and the operator had put the section there as a
  "record one click away" (§9) — but §9 is about the record of the *law*, not of the board. The owner is right.
- *Owner note on Ask 6 (Checkpoint 1): "calculator is tested."* **Recorded, not accepted as closing the ask.**
  The sentence is the owner's report that he tested the checker, and it is welcome; but Checkpoint 1 exists to
  produce the first comparison record — twenty pairs of outcomes, each a `published` case, each difference a
  discrepancy classified — and from the sentence alone the record gets nothing. `PLAN.md` says Phase 2 does not
  start until every difference is explained, and no difference can be explained that was not written down. The ask
  is **narrowed** in `ASKS.md` to the least the owner can do: paste the situations he tested, however many, with
  both outcomes, and write the worried-relative sentence in `BOARD.md`; or, as an owner decision, let the operator
  run the comparison itself against the public proefberekening on toeslagen.nl with situations of its own (that is
  reading a public page, not contact, so P11 allows it; the operator does not do it on its own authority because
  the plan deliberately gives the choosing of the situations to a human). Until one of these, huurtoeslag does not
  start; history and sources continue, which the plan allows and which is where the record has been growing.

**Step 3 — motions.** None open.

**Step 4 — done (Phase 2 history, item 2 of `memory.md`; "only if cheap", and it was: seventeen fetches, five
searches).**
- *Zorgtoeslag 2022 encoded* (`law/zorgtoeslag/parameters/2022.yaml`, `law/awir/parameters/2022.yaml`), every
  figure read in its primary text: standaardpremie € 1.749 (Stcrt. 2021, 47872); WML januari 2022 € 1.725,00
  (Stcrt. 2021, 44177) → drempelinkomen € 22.356,00 exactly, the first year in the record where the text itself
  gives a whole amount; 1,848% / 4,225% / 13,610% (Stb. 2021, 574, in the Wzt text of 01-01-2022 itself); vermogen
  € 120.020 / € 151.767 (Stcrt. 2021, 47692, from € 118.479 / € 149.819); woonlandfactoren 2022 (Stcrt. 2021, 46565);
  Awir 2022 art. 7 and 14 (verbatim; Stcrt. 2021, 48308). Same article numbers and `undetermined` case as 2023.
- *A second corrected table.* Stcrt. 2021, 46565 as published gives Liechtenstein 0,9229; the Dienst's 2022 leaflet
  has 0,9172. Per the lesson of 2026-10-11 the run searched for a correction before logging anything and found it:
  Stcrt. 2021, 47687, art. I onderdeel E, a regeling of one week later that replaces the figure ("een inmiddels
  achterhaald verhoudingsgetal") and whose toelichting fixes the order of entry into force (aanwijzing 5.70). The
  consolidated bijlage 4 of 01-01-2022 carries 0,9172. Not a discrepancy; both instruments cited.
- *A third pre-effect revision of the percentage schema.* Stb. 2021, 574 had set 2023 at 1,863% / 4,240% / 13,640%
  and 2024 at 1,878% / 4,255% / 13,670%; Stb. 2022, 472 replaced both before they took effect. One `CHANGES.md` row.
- *The 2022 leaflet* (`tg0821z21fd`; `z22` is a 404) gave seven cases (`zt-2022-pub-001..007`): three
  rekenvoorbeelden and the ceilings € 31.998 / € 40.944 on both sides of the boundary euro — which here equal the
  text's, since no drempelinkomen rounding was needed. 177 cases: 158 pass, 19 fail, 0 blocking; browser/Python
  parity 177/177. The checker offers 2022; the front page's year list is now generated from the parameter files.
- `law/CHANGES.md` grew by eleven rows (2022-01-01: the three percentages with their 2021 values from the besluit's
  own table, the two vermogensgrenzen, the standaardpremie, the WML amount, the woonlandfactor table and its
  Liechtenstein correction, the Awir amounts; 2023-01-01: the revised schema). `law/SOURCES.md` has twelve new rows
  and open item 4 now says 2021, with a new item 5.

**The discrepancies, and how they are classified.**
- *#8 (new) → `encoding`, fixed.* The 2022 leaflet's rekenvoorbeeld 2 prints "€ 44,89 (na afronding € 45)": the
  month rounded *up*, which no flooring model gives; the encoding's practice model, derived on 2026-10-09 from 130
  table rows of 2025 and 2026 and applied to every year, gave € 44. The 2023 leaflet rounds the month down
  (€ 154,84 → € 154), as do 2025 and the tables. Classified `encoding` for the same reason as #5: the practice field
  claims to reproduce what the Dienst pays, and for 2022 the only published evidence says it rounded. Fixed by a
  year parameter `maand_afronding_praktijk` ("rekenkundig" in 2022, "naar_beneden" by default), cited to the leaflet,
  marked as practice in the parameter file, `rules.md` and both encodings, with the note the checker shows changed for
  2022. Said plainly: one example out of three discriminates, so this rests on one printed figure; a 2022 voorschot
  table or beschikking would settle it (`SOURCES.md` open item 5). Not #5 (whose model 130 rows confirm) and not #7.
- *#7 extended.* The 2022 leaflet is mixed: it rounds the normpremie and the 50% step of example 2 (€ 538,795 →
  € 538,80) but truncates the 50% step of example 3 (€ 951,065 → € 951,06) and the month in both examples
  (€ 44,8996 → € 44,89; € 79,2554 → € 79,25); it also misprints example 3's subtotal (€ 1.602,13 for € 1.902,13 —
  the 50% figure proves the intended value). Five editions, three printed methods, no text behind any. Two cases.
- *#3 extended.* The 2022 leaflet's step 5 has the four formulas of 2023 and 2024, and its example 3 is the only
  worked example of onder c in five leaflets; the encoding passes it, because for a *verdragsgerechtigde* aanvrager
  the text and the Dienst agree. The entry's difference remains confined to a *verzekerde* aanvrager (`syn-001`).
- *#1 noted.* 2022 is evidence of nothing: the drempelinkomen was a whole amount by the text.

**What was wrong and why.**
- The practice model had been written as if the Dienst's monthly method were constant across years; it was
  constant across the years the evidence covered. The lesson is now in `memory.md` with the one about leaflets'
  arithmetic: read every example's cents before assuming the series.
- `pdftotext -layout` dropped the right column of the leaflet's woonlandfactor table; the numbers were taken from
  the Staatscourant and the consolidated text instead, which is the right order of authority anyway.
- The front page carried a duplicated top line ("toeslagrecht · zorgtoeslag · 2026 · …") above its own header since
  2026-10-10, from the helper shared with the layout stubs; fixed while editing the index.
- Nothing dropped from scope: Nibud/Rijksoverheid cases and the rechtspraak.nl scan were again not started; 2022
  was cheaper and more durable. `PLAN.md` unchanged: the strategy holds, Checkpoint 1 stands as written and is now
  narrowed in the ask rather than rewritten in the plan — rewriting the gate because the owner has not yet walked
  through it would be the plan bending to convenience, which `CHARTER.md` forbids. No checkpoint missed: Checkpoint 1
  is open on the owner, not late by any date the plan sets.

**Step 8 — asks.** None new. Ask 6 narrowed as above; Ask 7 closed; Ask 4 stays open as recorded.

**Dropped from memory.** The "not published yet" state and the Ask 7 to-do (done); the 2022 to-do with its guessed
Stcrt. numbers (done); the "2023 to 2024 only" phrasing of the article numbering (now 2022–2024). Nothing else was
held.

**Effort.** Roughly 235,000 of the 300,000-token ceiling: about 50,000 reading the files and the previous entries,
about 60,000 on seventeen downloads and five searches (the Wzt, Awir and WML of 2022, the 25 MB Regeling
zorgverzekering, two wetstechnische-informatie pages, eight Staatscourant/Staatsblad texts, the leaflet), about
40,000 on the governance edits and the site, the rest writing the parameters, the cases, the practice parameter in
two encodings, the eleven amendment rows, the log entries and these records. Closer to the ceiling than the fifth
run because three inbox entries and a code change came on top of a year of history.

**Record under the ten-year rule.** This run added to the record: the law of 2022 as it stood, with every figure's
instrument and date, including two things no consolidated text shows — that Liechtenstein's woonlandfactor for 2022
was published wrong and corrected a week later before it took effect (Stcrt. 2021, 46565 → 47687), and that the
percentage schema of Stb. 2021, 574 for 2023 and 2024 never took effect (replaced by Stb. 2022, 472), the third such
pre-effect revision found; eleven dated amendment rows 2021 → 2022 → 2023; seven published cases carrying the
Dienst's 2022 figures; a new discrepancy entry (#8) documenting that the Dienst's monthly rounding changed between
its 2022 and 2023 editions while the text did not, with the one figure it rests on named as such; the extensions of
#7 (a third printed arithmetic in the series) and #3 (the 2022 method); the owner's decision of 2026-10-11 as
binding design text in `DESIGN.md`; the site's going live, dated, with the owner's note on how; and the owner's
statement on Checkpoint 1, verbatim, with the operator's reasoned refusal to let it close the checkpoint. The 2022
encoding, the practice parameter and the site changes are regenerable and are not counted. Still no verified case:
that needs a human and a document (`CASES.md`), and the first such pairs are the owner's Checkpoint 1.

## 2026-10-11 — fifth run: 2023 encoded from primary texts, a rectified Staatscourant table, the moved WML reference, discrepancy #7

Fifth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the same as
the previous entry; no handover note needed. Steps 1–3 found nothing: no ask newly marked done (4, 6 and 7
stay open; Checkpoint 1 is the owner's), `INBOX.md` empty, no open motion. One mechanical thing was wrong at
the start: the checkout's `origin/main` ref was stale (2026-10-06) while HEAD sat on the 2026-10-10 commit;
a `git fetch origin main` before `checkout -B main origin/main` fixed it and is now in `memory.md`.

**Step 4 — done (Phase 2 history, item 2 of `memory.md`; `PLAN.md` "only if cheap", and it was: fourteen
fetches, three searches).**
- *Zorgtoeslag 2023 encoded* (`law/zorgtoeslag/parameters/2023.yaml`, `law/awir/parameters/2023.yaml`),
  every figure read in its primary text: standaardpremie € 1.889 (Stcrt. 2022, 32017, read); WML januari 2023
  € 1.934,40 (Stb. 2022, 381, the one-off 8,05% rise of the coalitieakkoord plus the indexatie, read — the
  consolidated WML text of 01-01-2023 still prints an older amount and carries € 1.934,40 only as an editorial
  note); drempelinkomen € 25.069,824; the one-off 2023 percentages 0,123% / 2,378% / 13,640% (in the Wzt text of
  01-01-2023 itself; Stb. 2022, 472 read on 2026-10-09); vermogen € 127.582 / € 161.329 in art. 2a (Stcrt. 2022,
  28997, read); woonlandfactoren 2023 (Stcrt. 2022, 29339, read); Awir 2023 art. 7 and 14 (verbatim). 2023 has the
  2024 article numbers (art. 2a, art. 3) and no art. 4a lid 3; the same `undetermined` applies.
- *The rectified table.* Stcrt. 2022, 29339 as published gives Malta 0,0584, Marokko 0,3957, Montenegro 0,0226
  and Noord-Macedonië 0,0887 — four values shifted one row, because the bijlage renamed Macedonië to
  Noord-Macedonië and re-sorted the names but not the numbers. The Dienst's 2023 leaflet has the other
  assignment. Before logging a discrepancy the run searched for a rectification and found it: Stcrt. 2022,
  32002, art. I onder D ("bij een viertal landen is per abuis de verkeerde woonlandfactor genoemd"), in force
  01-01-2023 after 29339. The encoding carries the rectified figures and cites both instruments; the four lines
  are marked in the parameter file. Not a discrepancy: the text as rectified and the Dienst agree.
- *The moved WML reference.* Wzt art. 1 lid 1 onder f referred to WML art. 8 lid 1 "onderdeel a" in 2023 and
  "onderdeel b" since 2024. The instrument: Wet invoering minimumuurloon, Stb. 2023, 168, art. XXXI (read),
  in force 01-01-2024 — onderdeel a became the hourly minimum. Both encodings now cite the onderdeel the year's
  file names (`artikel_wml_onderdeel`, default b); a one-line change in `rules.py`, mirrored in the browser port.
- *The 2023 leaflet found.* `tg0821z31fd` is a 404 (2026-10-10); a web search found `tg0821z32fd`: the second
  digit is an edition number, not a constant. Seven cases from it (`zt-2023-pub-001..007`): three rekenvoorbeelden
  and the ceilings € 38.520 / € 48.224 on both sides of the boundary euro. 170 cases: 153 pass, 17 fail,
  0 blocking; browser/Python parity 170/170. The checker offers 2023; its year list and country list are
  generated from the parameter files, and the index says so. No headless render this run — the parity harness
  proves the browser computation on every case, and the page template did not change.
- `law/CHANGES.md` grew by eight rows (2023 → 2024: standaardpremie, WML amount and the Wzt reference, the
  woonlandfactoren with the rectification, the Awir amounts with their Bijstellingsregelingen; the 2023 rows:
  the one-off percentages from the 2022 values 1,848% / 4,225% / 13,610% read in the Wzt of 01-01-2022, the
  vermogensgrenzen from € 120.020 / € 151.767, the standaardpremie, the WML). `law/SOURCES.md` has eleven new
  rows and open item 4 now says 2022.

**The discrepancies, and how they are classified.**
- *#7 (new) → `government`.* The 2023 leaflet truncates every intermediate cent: € 1.858,16 / 12 = € 154,847 is
  printed € 154,84; € 3.778 × 0,8814 = € 3.329,9292 is printed € 3.329,92; € 113,907 is printed € 113,90. The
  2024 leaflet of the same series rounds the same kind of figures arithmetically (€ 123,589 → € 123,59;
  € 3.769,339 → € 3.769,34; € 109,497 → € 109,50), as do 2025 and 2026. The text rounds nothing but the year
  amount (Awir art. 14 lid 4), so the encoding prints the arithmetic figure and differs by a cent in
  `zt-2023-pub-001` and `-003`. Classified `government` because that is what the status means here — the
  encoding follows the text, the Dienst's printed arithmetic does not follow any text and changed between two
  editions of its own leaflet — and said plainly: no granted amount is affected, the whole-euro month is the same
  under both. It is not #1 (a different cause) and not #5 (the whole-euro month of 2023 behaves as #5 says).
- *#1 extended.* 2023: "vastgesteld op € 25.070" for € 25.069,824 — rounded up, as 2025 and 2026; 2024 stays the
  only year rounded down. `zt-2023-pub-002` differs by three cents from this cause. The 2023 ceilings coincide
  under both drempelinkomens.
- *#3 extended.* The 2023 leaflet's step 5 has the four formulas of 2024, onder c identical (the factor on both
  premies), so the Dienst's method of 2023 and 2024 was one method, changed by 2026 while the text did not.

**What was wrong and why.**
- The leaflet URL "pattern" in `memory.md` was a guess from four samples and cost the previous run a 404 and
  this run a search; corrected to what the five samples now show.
- A `mkdir -p … && cd …` chained into six parallel `curl` jobs raced: five jobs ran before the directory
  existed. Redone with a script; lesson kept.
- The Wayback CDX API is blocked by the egress policy (`archive.org/wayback/available` is not, but had no
  snapshot); the search engine found the leaflet instead.
- Nothing dropped from scope: Nibud/Rijksoverheid cases and the rechtspraak.nl scan (item 4 of `memory.md`)
  were not started; 2023 was the cheaper and more durable addition. `PLAN.md` unchanged: the strategy holds;
  the plan allows history when cheap. No checkpoint missed: Checkpoint 1 is open on the owner (Ask 6), not late.

**Step 8 — asks.** None new. Asks 4, 6 and 7 stay open as recorded.

**Dropped from memory.** The 2023 to-do with its guessed Stcrt. numbers (done); the line "2023 is a 404"
(wrong); nothing else was held.

**Effort.** Roughly 120,000 of the 300,000-token ceiling: about 45,000 reading the files and the previous
entries, about 35,000 on fourteen downloads and three searches (the Wzt in three versions, the Awir 2023, the
WML and its info pages, Stb. 2022, 381, Stb. 2023, 168, five Staatscourant texts, the 42 MB Regeling
zorgverzekering, the leaflet), the rest writing the parameters, the cases, the eight amendment rows, the log
entries and these records. The ceiling was not approached because the sources were cheap and no new rule was
needed.

**Record under the ten-year rule.** This run added to the record: the law of 2023 as it stood, with every
figure's instrument and date, including two things no consolidated text shows — that the woonlandfactoren of
2023 were published wrong for four countries and rectified before they took effect (Stcrt. 2022, 29339 →
32002), and that the Wzt's reference to the minimum wage moved from onderdeel a to b by art. XXXI of the Wet
invoering minimumuurloon; eight dated amendment rows 2022 → 2023 → 2024; seven published cases carrying the
Dienst's 2023 figures from a leaflet whose URL no longer follows the series; a new discrepancy entry (#7) with
both sources, documenting that the Dienst's printed arithmetic changed between the 2023 and 2024 editions of
the same leaflet; and the extensions of #1 (the rounding direction of 2023) and #3 (the 2023 method). The 2023
encoding itself is regenerable and is not counted. Still no verified case: that needs a human and a document
(`CASES.md`), and the first such pairs are the owner's Checkpoint 1.

## 2026-10-10 — fourth run: the layout decision transcribed, the checker built and proved against the Python encoding, Ask 5 closed, a hidden Norway defect fixed

Fourth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the same as
the previous entry; no handover note needed. Step 1: no ask newly marked done, but two were answered in
`INBOX.md` on 2026-10-09 (Ask 3, Ask 5) and both are closed below. Step 3: no open motion.

**Step 2 — the inbox (three entries of 2026-10-09, all from the owner, Andries, in an owner-initiated
session; moved here, `INBOX.md` emptied).**
- *Owner decision, Ask 3: layout B, "het verhaal".* Recorded in `BOARD.md` on 2026-10-09; **transcribed into
  `DESIGN.md`** this run (the "Open design ask" section is now the decision, with the original ask kept as
  history) — the one kind of change to `DESIGN.md` the operator may make. Ask 3 done.
- *Owner note 1 ("the design of the website is not very appealing … eventually we would need to make it
  look like a genuine website").* **Accepted in part.** What the owner saw were three layout stubs of one
  fixed computation, not a site. Within `DESIGN.md` §8 (plain typography, generous spacing, no hero, no
  illustration, looks like it has nothing to sell) a great deal of "genuine" is available and this run used
  some of it: a real front page in Dutch, a header and footer that frame every page, a form designed like a
  good government form (one question per field, a hint under each, large touch targets, visible focus), the
  law in a serif, status in words. The rest of §8's room — a self-hosted text serif for the law, finer
  spacing and type scale, a print stylesheet — is work for later runs and needs no decision. What §8 does
  *not* allow — a hero, illustration, stock imagery, a brand look, anything that resembles a fintech — is
  not the operator's to add: changing §8 is a motion for the board (`BOARD.md`, "the design rules"), and the
  operator does not file one, because the reference points (a well-made government form, a court's own
  website) were chosen at founding for the citizen this is for: worried about money and distrustful of
  websites. If the owner wants those reference points changed, he files the motion and the operator
  responds in its next run. The look should now be judged on `site/zorgtoeslag.html`, not on the stubs.
- *Owner note 2 ("a citizen would definitely want a calculator that allows them to put their income in …
  just as berekenhet.nl has").* **Confirmed and done.** This is the checker of `PLAN.md` Phase 1 — inputs
  entered, computed on the device, every step shown — and it was always the next item once the layout was
  chosen. It landed this run (below). Unlike berekenhet.nl it shows the article beside every step, says
  what the law leaves undetermined, and sends nothing anywhere.
- *Owner note, Ask 5(a) (the rounding practice).* Verbatim: "Rounding rule is not written (so far I know)
  but it is as follow if you have to pay it is rounded down. If you get money from the government it is
  rounded up." And: "Threshholds arent rounded up or down, they are as they are down to 2 numbers behind
  the comma, so 0,485 becomes 0,49." Treated as a dated practitioner's statement, evidence not authority
  (`BOARD.md`), and **recorded in `DISCREPANCIES.md` #1** with this reading: the drempelinkomen is a
  threshold, yet the Dienst rounds it to whole euros, not two decimals — down in 2024, up in 2025 and 2026;
  the monthly amount is money the citizen receives, yet the Dienst rounds it *down* (#5); the year amount
  is rounded arithmetically by a written rule (Awir art. 14 lid 4). So the practice rule as stated explains
  none of the three roundings in the record. No text was named; **#1 stays `government`; Ask 5 closed.**
  Not used for any encoding — the encoding follows the text, as `BOARD.md` requires.

**Step 4 — done (Phase 1: the checker; `PLAN.md` item 4 of `memory.md`).**
- *The rules in the browser:* `site/zorgtoeslag-regels.js`, a line-by-line port of `rules.py` with the same
  rule ids, computing in exact BigInt arithmetic (ten decimals) so that € 23,50 rounds to € 24 in the
  browser exactly as in Python. `tools/build.py check` now runs every case through both encodings
  (`tools/parity.js`, node) and compares the four amounts to the cent, the practice month, the vermogen
  outcome, every step's rule id and outcome, and the count of undetermined notes; **any difference blocks
  the commit** like a failing verified case. Result: 163 cases, 163 identical.
- *The parameters exported:* `site/zorgtoeslag-parameters.js`, generated from the yaml files with every
  number's article, source and URL, plus the GitHub anchor of every rule in `rules.md` so each step links
  to its rule (`DESIGN.md` §9).
- *The checker:* `site/zorgtoeslag.html` from `tools/zorgtoeslag.template.html`, layout B. Years 2026,
  2025, 2024; partner; both incomes; partner verzekerd (ja / nee / weet niet → `undetermined`, computed as
  if yes and said so); vermogen with the whole-year-partner question under a `<details>`; verdragsgerechtigde
  and woonland (39 countries) under another. The result: granted year amount first, the computed amount,
  the month, the Dienst's practice and the one honest sentence; then every step with its outcome, the
  article linked to the rule, the status as a word ("concept: door niemand nagelezen"), and the arithmetic;
  then what the law leaves undetermined; then the dossier links (rules, the year's parameters, the Wzt as it
  stood on 1 January of that year, the standaardpremie regeling, the discrepancy log, the test report,
  disputes). Nothing is sent, stored or tracked; the page says so once. Without JavaScript the form shows
  and a line says the computation needs it and where the rules can be read. Rendered in headless Chromium
  with a prefilled form to confirm it computes (2026, partner € 12.000 not verzekerd, € 32.000: € 502).
- *The front page* `site/index.html` is now Dutch, for the citizen, with the checker first and the record
  under it; the three layouts stay as the record of the choice.
- *One synthetic case* `zt-2026-syn-004` (Norway) for the defect below. 163 cases: 149 pass, 14 fail, 0
  blocking — the same fourteen as yesterday, every one in the log.

**What was wrong and why.**
- *A hidden defect since 2026-10-08:* YAML 1.1 reads the bare key `NO` as the boolean false, so the
  woonlandfactor of **Noorwegen** was stored under `False` in all three parameter files and unreachable:
  a verdragsgerechtigde in Norway would have been computed without a factor and told "woonland onbekend".
  Found only because the JSON export of the parameters turned the key into `"false"`. Fixed by quoting the
  key (`"NO"`) in 2024, 2025 and 2026; the same trap bit the new case file (`woonland: NO`) and is now a
  lesson in `memory.md`. No published figure was affected (Norway's factor is 1,0000 and no case used it);
  not a discrepancy, since no government outcome differed — an encoding defect, logged here.
- The browser port's header comment contained `law/*/parameters`, which closes a JavaScript block comment;
  node refused the file on the first run. Fixed; the parity check would have caught any silent variant.
- The first render printed the vermogen outcome as the code `niet_getoetst`; outcome codes are now plain
  Dutch words on the page (`DESIGN.md` §1).
- The Dienst's 2023 leaflet does not exist at the URL the pattern predicts (`tg0821z31fd`: 404 on
  2026-10-10); the 2023 history waits for a search next run. Nothing else attempted for 2023.
- `PLAN.md` unchanged: the strategy holds; Phase 1 is complete except Checkpoint 1, which is now the
  owner's (Ask 6). No checkpoint missed.

**Step 8 — asks.** Ask 6: Checkpoint 1 (twenty situations in both the checker and the official rekenhulp,
pairs pasted into `INBOX.md`, the "worried relative" sentence in `BOARD.md`). Ask 7: publish the site
(GitHub Pages from `main`/`site`, DNS at TransIP) — repository settings and DNS are the owner's. Both open.

**Dropped from memory.** The "Ask 3 waiting since 2026-10-07" state and the layout descriptions (decided,
transcribed); the "no input form until Ask 3" rule (done); the per-step notes on how the three layouts were
rendered. Nothing else was held.

**Effort.** Roughly 205,000 of the 300,000-token ceiling: about 110,000 reading the files and the encoding
(more than earlier runs, because the checker needed every rule's text and the parameter structure in
context), about 60,000 writing the browser port, the harness, the template and the build changes and
running the checks, about 5,000 on one failed download, the rest on the governance edits and these records.

**Record under the ten-year rule.** This run added to the record two dated things that cannot be
regenerated: the board's layout decision as binding design text in `DESIGN.md` with the ask it closed, and
a named practitioner's statement of the Dienst's rounding practice, dated, verbatim, read against three
observed roundings in `DISCREPANCIES.md` #1 and found not to explain them — the first piece of practice
evidence in the log. That is thin, and it is said so plainly: the checker, the browser port, the parity
harness, the Norway fix and the synthetic case are all regenerable and are not counted. No case, amendment
or verified outcome was added. The run spent its budget on the checker because Checkpoint 1 — the first
time the owner compares twenty real situations with the official rekenhulp, each difference a discrepancy
for the log — cannot happen without it, and that is where the next real additions to the record come from.

## 2026-10-09 — third run: 2024 encoded, the full tables swept, two discrepancies found, the Wzt renumbering dated

Third run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the same as
the previous entry; no handover note needed. Steps 1–3 found nothing: no ask newly marked done,
`INBOX.md` empty, no open motion. Ask 3 (the layout choice) is still waiting for the owner, since
2026-10-07.

**Done (Phase 1, and the first year of history from Phase 2).**
- *Zorgtoeslag 2024 encoded* (`law/zorgtoeslag/parameters/2024.yaml`, `law/awir/parameters/2024.yaml`),
  every figure read in its primary text: standaardpremie € 1.987 (Stcrt. 2023, 32413), WML januari
  € 2.069,40 (Stcrt. 2023, 28170), percentages 1,879% / 4,256% / 13,670% (Wzt art. 2 lid 3 text 2024;
  Stb. 2022, 472), vermogen € 140.213 / € 177.301 (Stcrt. 2023, 29706), woonlandfactoren 2024 (Rzv
  bijlage 4; Stcrt. 2023, 29907), Awir art. 7 and 14 (version 01-01-2024). The Awir 2025 file now has
  its art. 7 amounts (Stcrt. 2024, 38492).
- *The Wzt renumbering dated.* The 2024 text numbers the vermogenstoets art. 2a and the woonlandfactor
  art. 3. Diffing the versions of 01-01-2024 and 06-11-2024 and reading Stb. 2024, 291 (art. XIX) showed
  the renumbering to art. 3 / art. 4a *and* a new art. 4a lid 3 — the rule for a verzekerde with a
  verdragsgerechtigde partner did not exist before 06-11-2024. The encoding now cites each year's own
  article numbers and returns `undetermined` for that case in 2024. The "artikel 3a" that Stcrt. 2025,
  38110 names has never existed in the versions read.
- *The full Belastingdienst tables as cases:* 135 rows for 2025 and 2026, zonder and met partner
  (`cases/zt-<jaar>-tab-*`), generated by script from the page as retrieved 2026-10-09; the 2024
  leaflet's three rekenvoorbeelden and the 2024 ceilings on both sides of the boundary euro; two
  synthetic vermogen cases. 162 cases run: 148 pass, 14 fail, 0 blocking, 0 skipped. Every failure is
  in the log.
- *Open source items closed* (`law/SOURCES.md`): the Stcrt. numbers of all three woonlandfactor
  regelingen; the Awir 2025 amounts; the history of Awir art. 14 (the site lists no amendment; the text
  is identical 2024–2026); nothing delegated under Wzt art. 2 besides the Besluit percentages. The 2024
  Wzt text of art. 2 lid 6 refers to "het zesde lid", i.e. to itself, where lid 5 is meant — recorded.
- `law/CHANGES.md` grew by nine rows: the 2024 → 2025 changes with their instruments, the two
  pre-effect revisions of the percentage schema (2025 by Stb. 2024, 351; 2026 by Stb. 2025, 412), the
  2023 one-off percentages and the 2024 → 2025 rows of Stb. 2022, 472, and the renumbering.

**The discrepancies, and how they are classified.**
- *#5 (new) → `encoding`, fixed.* Five table rows (2025 zp € 33.500, mp € 34.000 and € 46.000; 2026
  zp € 35.000, mp € 32.000) were one euro above the encoding's model of the Dienst's monthly practice.
  In all five the unrounded month is x,96–x,99, and the published figure is floor(whole-euro year
  amount / 12): € 2.243,83 → € 2.244 (Awir art. 14 lid 4) → € 187, not € 186,99 → € 186. The practice
  field now divides the granted amount. The leaflets' examples fit both models and could not have shown
  this; 130 table rows could. The law still rounds only the year amount; the month stays practice.
- *#6 (new) → `withdrawn`.* The 2025 table's last rows say "€ 39.719 en meer — geen zorgtoeslag" and
  "€ 50.206 en meer"; the same site's ceiling page says "niet boven de grens van € 39.719", the leaflet
  says no right only *above* it, and the Dienst's own formula gives € 24 at exactly € 39.719. A data
  error in the source's wording, kept as published; it reopens if a beschikking at that income shows
  nothing. The 2026 tables avoid the question ("€ 41.000 en meer").
- *#1 extended.* The 2024 leaflet rounds the drempelinkomen *down* (€ 26.819,424 → € 26.819); 2025
  and 2026 round up (2026 even where arithmetic rounding would give € 29.735). One more outcome case:
  2026 met partner € 44.500 — € 935,46 → € 935 → € 77 by the text, € 935,53 → € 936 → € 78 by the
  Dienst. Ask 5(a) annotated: no single rounding rule exists across years.
- *#3 extended.* The 2024 leaflet's step 5 applied the woonlandfactor to *both* premies for a partner
  who is neither verzekerd nor verdragsgerechtigd; the 2026 leaflet applies it to the partner's only;
  the text (art. 3 then, art. 4a now) did not change on that point. Still `open`.

**What was wrong and why.**
- The encoding's practice model (floor of the unrounded month) was wrong since 2026-10-07; it passed
  every leaflet example because leaflets print the month to the cent before rounding. The lesson is
  in `memory.md`: tables discriminate rounding models, worked examples do not.
- The 2024 leaflet's rekenvoorbeeld 3 (CAK, Duitsland) passes on the standaardpremie, the month and the
  rounded month and fails by a cent on the normpremie — #1, not a new entry.
- Not done: Nibud / Rijksoverheid cases; rechtspraak.nl rulings; 2023. `PLAN.md` unchanged: the
  strategy holds; history was brought forward because the 2024 sources cost one fetch each, which the
  plan allowed ("only if cheap"). No checkpoint missed: Checkpoint 1 waits on the checker, which waits
  on Ask 3.

**Dropped from memory.** The per-step search notes of 2026-10-08 (which leaflets were tried, which
WebFetch calls failed) and the item "Belastingdienst table sweep" (done). Nothing else was held.

**Effort.** Roughly 250,000 of the 300,000-token ceiling: about 45,000 reading the files, about
110,000 on twenty-eight downloads and nine searches (the Wzt 2024 in two versions, the Awir 2024 and
2025 in full, the Regeling zorgverzekering 2024, eleven Staatsblad/Staatscourant texts, five
wetstechnische-informatie pages, the leaflet and the tables), the rest writing the parameters, the
generator, the cases, the fix and these records.

**Record under the ten-year rule.** This run added to the record: the law of 2024 as it stood, with
every figure's instrument and date (a year's parameter files and nine dated amendment rows, including
the renumbering of 06-11-2024 and the insertion of art. 4a lid 3, which no consolidated text explains);
142 published cases carrying the Dienst's figures of 2024 (leaflet, January 2024) and the full
monthly tables of 2025 and 2026 as published on 2026-10-09 — a page that will change; two new
discrepancy entries with both sources (#5, the Dienst's actual monthly method, found only through the
tables; #6, a contradiction between two Belastingdienst pages on the boundary euro); the extension of
#1 (the rounding direction differs by year) and #3 (the Dienst's method changed between 2024 and 2026
while the text did not); and the Staatscourant numbers of the three woonlandfactor regelingen and the
Awir 2025 amounts. The 2024 encoding itself and the generator are regenerable and are not counted.
Still no verified case: that needs a human and a document (`CASES.md`).

## 2026-10-08 — second run: the missing texts found, two discrepancies closed, two opened, eight new cases

Second run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the same
as the previous entry; no handover note needed. Steps 1–3 found nothing: no ask newly marked done,
`INBOX.md` empty, no open motion. Ask 3 (the layout choice) is still waiting for the owner.

**Done (Phase 1).**
- *The two texts the first run could not find.* **Awir art. 14 lid 4**: "Het bedrag van de
  tegemoetkoming wordt rekenkundig afgerond op hele euro's." **Lid 5**: "Een tegemoetkoming wordt
  niet toegekend indien deze minder dan € 24 zou bedragen." Both in the versions of 01-01-2025 and
  01-01-2026. Encoded as `awir-2026-art14-4` and `-art14-5` (`law/awir/rules.md`,
  `law/awir/parameters/2025.yaml`, `2026.yaml`), applied after the Wzt art. 2 computation. The
  result now has two amounts: the computed `aanspraak_jaar` and the `tegemoetkoming` the law grants.
- *Wzt art. 4a*, the woonlandfactor for verdragsgerechtigden, encoded as `zt-2026-art4a` with the 39
  factors per country for 2025 and 2026 from Regeling zorgverzekering bijlage 4 (art. 6.3.1 lid 9).
  Case `zt-2025-pub-003` is no longer skipped.
- *Primary sources opened* for everything that was secondary: Stcrt. 2024, 38887 (standaardpremie
  2025), Stcrt. 2025, 34131 and Stcrt. 2024, 33625 (WML 2026 and 2025). *Instruments identified*
  for the 2025→2026 changes: Stb. 2025, 412 and Stb. 2024, 351 (percentages; the 2026 row was revised
  from 1,911% / 4,288% to 1,912% / 4,289% a month before it took effect), Stcrt. 2025, 38110 and
  Stcrt. 2024, 37672 (vermogensgrenzen), Stcrt. 2025, 40487 (Awir amounts). *The Awir change of
  01-10-2026* identified by diffing the two consolidated versions: art. 13 and 13a only, the choice
  between paper and electronic post; no computation rule. All in `law/SOURCES.md` and `law/CHANGES.md`.
- *Eight new cases* (`cases/`): the three rekenvoorbeelden of the Dienst's *Berekening zorgtoeslag
  2026* (January 2026, found by the leaflet URL pattern), the 2026 and 2025 income ceilings on the
  boundary euro, both sides, and one synthetic case for the art. 4a reading. 18 cases run: 10 pass,
  8 fail, 0 blocking, 0 skipped. Every failure is in the log.
- The three layouts rebuilt from the new encoding: the headline is now the granted year amount
  (whole euros, Awir art. 14), with the computed amount, the month and the Dienst's practice under it.

**The discrepancies, and how they are classified.**
- *#2 (income ceiling) → `encoding`.* The first run read Wzt art. 1–5 and Awir art. 2–9 and 26a and
  did not find a minimum; it is in Awir art. 14. With lid 4 and 5 the formula reproduces the
  published ceilings: at € 51.142 with partner the amount is € 23,5x → € 24 → granted, at € 51.143
  it is € 23 → nothing; 2025 likewise at € 39.719 / € 39.720. Fixed in this commit.
- *#1 (drempelinkomen rounding) → `government`.* Searched in full on 2026-10-08: the Wzt, the Awir
  and the Uitvoeringsregeling Awir contain no rounding of the drempelinkomen; the only rounding
  provision is art. 14 lid 4, which rounds the final amount. The Dienst's 2026 leaflet says the
  drempelinkomen is "vastgesteld op € 29.736"; the text gives € 29.735,424, so the Dienst rounds up.
  The effect is cents in every intermediate figure and, in 2026 alone, one euro of income at the
  ceiling: at toetsingsinkomen € 40.857 the Dienst grants € 24 and the text grants nothing
  (`zt-2026-pub-010`); the text's ceiling is € 40.856. Classified `government` under `CASES.md`: the
  encoding follows the text, the published method does not, both are cited, and the project does
  not speculate why. Ask 5(a) stays open in case the owner knows a text the search missed; a text
  would re-classify the entry, not delete it.
- *#3 (new, `open`).* The 2026 leaflet's step 5 applies the woonlandfactor to the partner's
  standaardpremie when a *verzekerde* has a partner who is neither verzekerde nor verdragsgerechtigde.
  Wzt art. 4a lid 4 does that only for the partner of a verdragsgerechtigde. No published figure
  exists, so a synthetic case (`zt-2026-syn-001`, never verification) shows the difference: € 1.296,11
  by the leaflet, € 1.481,32 by the text. `open` until a decision or a better reading appears; the
  encoding follows the text.
- *#4 (new, `withdrawn`).* The 2026 leaflet's rekenvoorbeeld 2 prints "€ 1.243,51 per jaar, € 103,02
  per maand"; € 1.243,51 / 12 is € 103,63, and the Dienst's own rounded € 103 matches the latter. A
  misprint in the source, kept as published and marked.

**What was wrong and why.**
- The first run missed Wzt art. 4a and Awir art. 14 because it read articles through WebFetch
  summaries, article by article, and looked for an "art. 2a". This run downloaded the full
  consolidated texts with `curl --http1.1` and searched them; that is now the method (`memory.md`,
  Lessons). The record was not wrong, but `law/SOURCES.md` claimed "art. 1–5 read" as if the law
  ended there; corrected.
- A parameter-update script failed on a mistyped assertion after writing one file; the file was
  restored from git and the script rerun from the scratchpad. Two case files had the publication
  string closed too early and broke the YAML parser; fixed before the check ran.
- `zt-2026-pub-006` compared the formula amount with the published ceiling; the right quantity is
  the granted amount. Its expected field was changed from `aanspraak_jaar` to `tegemoetkoming`, with
  the change noted in the case file.
- Stcrt. 2025, 38110 amends "artikel 3a" of the Wzt, which does not exist; wetten.overheid.nl
  consolidated it into art. 3 lid 1. Recorded in `CHANGES.md` and the parameter file; not a
  discrepancy, since the amounts are not in doubt.
- Not done: the Belastingdienst table sweep and Nibud cases (item 1 for the next run); the Stcrt.
  numbers of the woonlandfactor regelingen; the history of Awir art. 14. `PLAN.md` unchanged: the
  strategy holds and Phase 1 is ahead of its pace.

**Dropped from memory.** The first run's detailed search plan for the two discrepancies (resolved),
the "WebFetch returns summaries" lesson (superseded by the curl method), and the per-URL notes on the
Belastingdienst 404. Nothing else was held.

**Effort.** Roughly 190,000 of the 300,000-token ceiling: about 45,000 reading the files, about
70,000 on downloads and the full-text searches (the Awir, the Wzt, the Regeling zorgverzekering and
nine Staatsblad/Staatscourant texts), the rest writing the encoding, the cases and these records.

**Record under the ten-year rule.** This run added to the record: two discrepancy classifications
with the texts that decide them (#1 `government`, #2 `encoding`) and two new entries (#3, #4), one of
them a documented misprint in the Dienst's own 2026 leaflet; eight published cases carrying the
Dienst's method and figures as they stood in January 2026 and the published income ceilings of two
years on the boundary euro; the dated woonlandfactor tables for 2025 and 2026 (78 values with their
regeling); seven dated amendment rows with their instruments, including the pre-effect revision of
the 2026 percentages and the 2027 percentages already in the Staatsblad, and the finding that the
Awir change of 01-10-2026 touches no computation rule; the primary Staatscourant texts for four
figures previously taken from secondary sources. The encoding of art. 4a and art. 14 is regenerable
and is not counted. Still no verified case: that needs a human and a document (`CASES.md`).

## 2026-10-07 — first scheduled run: pipeline, sources, zorgtoeslag draft, three layouts

First run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as served: `claude-fable-5-1`, the
same the founding session records; no handover note needed. Steps 1–3 of the prompt found
nothing: no ask newly marked done, `INBOX.md` empty, no open motion.

**Done (Phase 0, and the start of Phase 1).**
- *Dated source index* `law/SOURCES.md`: Wet op de zorgtoeslag (BWBR0018451) versions
  01-01-2026 and 01-01-2025, Awir (BWBR0018472) versions 01-01-2026 and 01-10-2026, WML
  art. 8, the standaardpremie regelingen 2026 (Stcrt. 2025, 40022, read in primary) and 2025
  (Stcrt. 2024, 38887, secondary), the WML indexation regelingen 2026 (Stcrt. 2025, 34131)
  and 2025, the Dienst Toeslagen leaflet *Berekening zorgtoeslag 2025*, and three
  Belastingdienst pages. Each with the version dates and the retrieval date 2026-10-07.
- *Pipeline* `tools/build.py`: `check` runs every case in `cases/` through the encoding and
  writes `law/zorgtoeslag/tests/report.md`; `build` renders `site/`. Verified cases block a
  commit; published and synthetic cases are checks.
- *Zorgtoeslag encoded for 2026 and 2025*, every rule `draft`, every number with its article
  (`law/zorgtoeslag/rules.md`, `rules.py`, `parameters/`): drempelinkomen (Wzt art. 1 lid 1
  onder f, WML art. 8 lid 1 onder b), normpremie (art. 2 lid 2–3), aanspraak with twice the
  standaardpremie for partners (art. 2 lid 1), 50% for a partner who is not verzekerd (art. 2
  lid 4), per month (art. 2 lid 5), vermogenstoets (art. 3 lid 1), standaardpremie (art. 4 and
  the yearly regeling). The Awir layer (art. 3, 5, 7 lid 1, 8) is documented and taken as
  input. What is not encoded is listed and returned as `undetermined`, not guessed.
- *Nine published cases*, none verified: the leaflet's three rekenvoorbeelden for 2025 and six
  rows and the income ceiling from the Belastingdienst's 2026 tables. Result: 5 pass, 3 fail,
  1 skipped (woonlandfactor, basis untraced), 0 blocking.
- *Three result-page layouts* for Ask 3 in `site/layouts/` — A de tabel, B het verhaal,
  C de brief — the same computation (2026, zonder partner, toetsingsinkomen € 32.000, which
  is also a row in the Belastingdienst table: € 103) rendered from the encoding, so every
  figure on them carries its article. Dutch, no JavaScript, system fonts, dark mode, phone
  width, status as a word, one honest sentence. Ask 3 marked *ready for you*.
- `law/CHANGES.md` opened with the 2025→2026 changes to Wzt art. 2 lid 3, art. 3 lid 1, the
  standaardpremie and the WML month amount, and the Awir amendment of 01-10-2026 as an
  unresolved item.

**The two discrepancies, and how they are classified.** Both `open`, deliberately.
- *#1 Rounding of the drempelinkomen.* Wzt art. 1 lid 1 onder f defines the drempelinkomen
  as 108% of twelve times the WML month amount; the text has no rounding. The Dienst's leaflet
  says the 2025 drempelinkomen is "vastgesteld op € 28.406"; the text gives € 28.405,728. Every
  leaflet example therefore differs from the encoding by one cent (normpremie € 538,58 vs
  € 538,57). The monthly amounts after the Dienst's own rounding agree. Not yet classified
  `government` because a rounding provision may exist in a text not yet read (Uitvoeringsregeling
  Awir, Awir art. 10–42); not `law` because the text as read determines the figure. `open`
  until that search is done; the search is item 1 in `memory.md`.
- *#2 The income ceiling.* The Belastingdienst publishes "niet boven de grens van € 40.857"
  (2026, zonder partner) and € 51.142 with partner; the encoded formula still yields
  € 23,33 per year at € 40.858 and reaches zero near € 41.028. The 2025 ceilings show the
  same pattern (≈ € 23,5 per year at the ceiling). This looks like a minimum amount of about
  € 24 per year below which no toeslag is granted, but no such provision was found in Wzt
  art. 1–5 or Awir art. 2–9 and 26a. Until the text is found the encoding keeps computing
  what art. 2 says and the discrepancy is `open`. If the text is found, this becomes
  `encoding` and a rule is added with its article; if it is not, `government`.

**What was wrong and why.**
- The first version of the pipeline crashed loading `rules.py` (dataclasses need the module in
  `sys.modules` before execution). Fixed; the fix is in `memory.md` as a lesson.
- One step's citation printed "art. 4 jo." twice; fixed before commit.
- Three Staatscourant texts were read through secondary sources (taxlive.nl,
  salarisvanmorgen.nl, taxence.nl) rather than opened; each is marked so in `law/SOURCES.md`
  and used only where corroborated by a primary or by the Dienst's own figures. Opening them
  is item 3 for the next runs.
- The Awir version of 01-10-2026 exists (Stb. 2025, 431) but what it changed was not
  identified: the wetstechnische informatie page is long and the fetch returned only the
  table head. Recorded as an open amendment, not guessed.
- The Belastingdienst URL remembered from training was a 404; the live page was found by
  search. The leaflet PDF came back as binary from the fetch tool and was read with
  `pdftotext` instead.
- Not done from the founding session's list: nothing. Beyond it: Phase 1 encoding started a
  day earlier than planned because the sources were in hand; `PLAN.md` is unchanged, since
  the strategy did not change, only the pace.

**Dropped from memory.** The founding session's verification detail (connector clearing,
prompt diff, API read-backs) now lives only in `ROUTINE.md` and the founding changelog entry;
`memory.md` keeps a pointer. Nothing else was held.

**Effort.** Roughly 175,000 of the 300,000-token ceiling: about 45,000 reading the files,
about 60,000 on fourteen fetches and searches, the rest writing and running the encoding, the
pipeline, the layouts and these records.

**Record under the ten-year rule.** This run added to the record: two discrepancies with
both outcomes and both sources cited (`DISCREPANCIES.md` #1, #2); eight dated amendments
2025→2026 with old and new values (`law/CHANGES.md`); nine published cases with their
publication, page and retrieval date (`cases/`), the three leaflet examples being the
Dienst's own method as it stood in February 2025; and the dated source index with the
version windows of every text as consulted on 2026-10-07 (`law/SOURCES.md`). The encoding,
the pipeline and the layouts are regenerable and are not counted. No verified case yet:
that needs a human and a document (`CASES.md`).

## 2026-10-05 / 2026-10-06 — founding session: setup

Owner-initiated session with Andries, run from `SETUP.md`. Started 2026-10-05, finished
2026-10-06 because the repository and GitHub App access arrived on the second day.

**Named.** Three names proposed with RDAP availability and TransIP prices: `aanspraak`
(`.nl` taken since 2019, parked), `toeslagrecht` and `toeslagregels` (both free on `.nl`,
`.org`, `.eu`). The owner chose **`toeslagrecht`**, "my right to a toeslag"; he found
`toeslagregels` sounded like an information site. The working name was replaced in every
file except `SETUP.md`, which is the brief that asked for the rename and keeps its history.
`toeslagrecht.nl` registered by the owner 2026-10-06 (Ask 1 done; spend in `LEDGER.md`,
provisional at list price until the invoice is reported).

**Created.** Public repository `TheAndries/toeslagrecht` (made by the owner; `gh` is not on
his machine and the operator may not read stored credentials). Added `LICENSE` (MIT),
`LICENSE-DATA` (CC BY-SA 4.0), `.gitignore`, `law/`, `cases/`, `site/` with READMEs pointing
at `LAW.md`, `CASES.md`, `DESIGN.md`, and an empty `DISCREPANCIES.md`. Founding commit
`300094b` "2026-10-05 founding" pushed to `main` 2026-10-06 12:12 UTC. Verified by the
GitHub API: 23 files on `main`, identical to the local list, head `300094b`, no other branch.

**Configured.** Routine `trig_012xyD5r5rxFDCjfHbZ58Kib` created through the API
2026-10-06 12:12:21 UTC per `ROUTINE.md`: name `toeslagrecht — daily run`, `56 5 * * *` UTC,
`claude-fable-5-1`, the eight listed tools, repository `TheAndries/toeslagrecht`.

**Verifications and results.**
- Prompt: stored copy diffed character by character against the fenced block in
  `ROUTINE.md`: identical, 1,949 characters.
- Connectors: creation attached **three account defaults unasked** (Google_Calendar,
  Claude_Docs, Claude_Code_Remote), the keel lesson exactly. Cleared with
  `clear_mcp_connections: true` at 12:12:59 UTC; read back as `mcp_connections: []`.
- Outcomes: `outcomes: []` on creation, after the update, and on an independent `get`.
- Model as actually set: `claude-fable-5-1` in both `session_context` and `derived_state`.
- Repository as stored: `https://github.com/TheAndries/toeslagrecht`.
- First scheduled run as reported by the API: `2026-10-07T05:56:00Z` = 07:56 Europe/Amsterdam.

**What failed and why.** The planned first run of 2026-10-06 07:56 was missed: the owner's
repository creation and App access came at 12:09 UTC that day. Not caught up; the schedule
stands. `aanspraak.nl` was not available, so the working name could not be kept. The .eu
availability check rests on DNS (EURid blocks automated whois); moot after the `.nl`
choice. Step 5 (mailbox) deferred by the owner; Ask 4 stays open and blocks Phase 2 only.

**Tomorrow's run (2026-10-07) should produce**, as the next entry above this one: the
build pipeline skeleton (`law/` + `cases/` -> tests -> `site/`), three result-page layouts
for Ask 3, the dated source index for the current year's Awir and Wet op de zorgtoeslag
from `wetten.overheid.nl` with article references and effective dates, every rule `draft`,
no synthetic case presented as verified, and a ten-year-rule line saying what was added
to the record. On day one that is probably only the dated source index, and it should say
so. If that entry is missing, lands on a `claude/*` branch, or claims a verified case, the
routine's stored config in `ROUTINE.md` *As created* is where to look first.

**Record under the ten-year rule.** This session added nothing to the record: no case,
amendment, discrepancy or dispute. It created the place where the record will live.

## 2026-10-05 — founding

Owner-initiated session. The project was founded and its governing files drafted:
`CHARTER.md`, `BOARD.md`, `LAW.md`, `CASES.md`, `DISPUTES.md`, `DESIGN.md`, `GRANT.md`,
`PLAN.md`. Decisions at founding:

- **Goal:** the open, independent record of how Dutch benefit law is applied; the checker
  is its front. If the government ships canonical rules-as-code, the project audits it.
- **The ten-year rule** (`CHARTER.md` P3): every run adds to the record or says it did not.
- **Governance:** two seats, operator runs, owner steers; tie-break by domain; the owner's
  practitioner knowledge is evidence, not authority (`BOARD.md`).
- **Order:** zorgtoeslag, then huurtoeslag, then history, then grant (`PLAN.md`).
- **Grants:** fuel, not goal; spent only within their own budget; the owner's hours on the
  budget at a public-interest rate (`GRANT.md`).
- **Privacy:** nothing leaves the browser; submitter identity never in the repository
  (`CHARTER.md` P5, `CASES.md`).
- **Money:** 200 EUR per quarter.
- **Open:** name and domain, repository, result-page choice, mailbox (Asks 1–4).

Nothing built. No run has yet occurred.
