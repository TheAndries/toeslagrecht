# CHANGELOG.md

Newest first. What was done, decided, and got wrong.

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
