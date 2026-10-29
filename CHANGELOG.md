# CHANGELOG.md

Newest first. What was done, decided, and got wrong.

## 2026-10-29 — twentieth run: ten Dienst outcomes from eight rulings — the 2013–2014 decisions swept and a looser filter run over both sweeps; the second case decided by the € 24 minimum, this time through a woonlandfactor (Duitsland 2017); vermogenstoets outcomes for 2015 and 2016; a ruling whose incomes do not add up, read by its own arithmetic

Twentieth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as configured for the session: `claude-fable-5-1`, the same as the
previous entry; no handover note needed. The checkout arrived detached at `095eeea` (the previous run's commit) with a stale local
`origin/main` (`211564e`); `git fetch origin main` moved it to `095eeea`, so nothing was missed. The routine fired the day after the
previous run: no new gap. `git log -3 --stat` shows no owner commit since 10-28.

**Step 1 — asks marked done.** None since 10-28. Asks 4, 6, 8, 9 and 10 stay open as recorded; 9 extended today (step 8).

**Step 2 — the inbox.** `INBOX.md` is empty and nothing arrived outside it. No case, dispute, review or owner note to handle.

**Step 3.** No open motion.

**Step 4 — done (item 4 of `memory.md`: the seven rulings read in part on 10-28 finished; the open-data feed swept for decisions dated
2013–2014; a looser filter run over every text of both sweeps; forty-six rulings read through their amount sentences, four in their
facts in full.)**
- *The seven of 10-28, finished: three cases, all reproduced through `build.run_case` before the file was written.* Rechtbank
  Midden-Nederland 29-09-2020, ECLI:NL:RBMNE:2020:4351: a verdragsgerechtigde (Zvw art. 69) in Duitsland, zonder partner as read; the
  definitieve berekening 2017 nihil at the inspecteur's verzamelinkomen € 26.121, the woonlandfactor applied for the first time at that
  stage because the CAK's melding came on 06-04-2018. The 2017 text reaches nihil, but only just: € 1.530 × 0,8372 = € 1.280,92 against
  a normpremie of € 1.272,76 leaves € 8,16 → € 8 → below the € 24 of Awir art. 14 lid 5 → **`zt-2017-rul-003`**, the second case in the
  record decided by the minimum (after `zt-2013-rul-008`) and the first in which the minimum and a woonlandfactor act together; without
  the factor the text would give € 257, so what the 10-28 note feared ('the text gives an amount zonder partner') is explained by the
  factor, not a discrepancy. Rechtbank Den Haag 05-02-2021, ECLI:NL:RBDHA:2021:2781 (bevestigd ECLI:NL:RVS:2021:2830 per the feed's
  metadata, not read): one aanvrager's 2015 and 2016 set to nihil on BRI grondslagen sparen en beleggen of € 391.765 and € 479.973 against
  the € 82.093 / € 82.504 of art. 2a → **`zt-2015-rul-006`, `zt-2016-rul-004`**, the third and fourth vermogenstoets outcomes and the first
  for those years, with the input reconstructed as grondslag + heffingvrij vermogen (as on 10-26) and the income — which the ruling does not
  state — entered as € 0 and said so: art. 2a gives nihil at every income. The voorschotten of € 942 and € 998 (the maxima zonder partner
  of both years, which is how the case reads 'zonder partner') have no stated income and are no case. ECLI:NL:RBNNE:2017:986 (2013 nihil
  on a € 303.000 lumpsum, the grondslag not stated; the rechtbank: the Dienst must itself determine the immateriële part, Uitvoeringsregeling
  Awir art. 9) and ECLI:NL:RVS:2020:1415 (2013 herzien to € 1.060 and then nihil on vermogen, neither income nor grondslag stated; the
  box 1/2 versus box 3 distinction upheld) give no case; both in `SOURCES.md` §4 with their findings.
- *The sweeps.* The feed was swept for decisions dated 2013-01-01 → 2014-12-31 (71 rulings mention zorgtoeslag) and, as a check,
  2015–2020 again (217 — the same count as 10-28; the feed is stable). All 288 texts were fetched and a looser filter run (an amount and
  'zorgtoeslag' in one sentence, an income or vermogen word in that sentence or its neighbours), skipping every ECLI already in
  `SOURCES.md` or a case file: 41 rulings. Sweep, fetch and filter ran in the background and cost no tokens; reading the 41 digests did.
- *Seven more cases from six of them, all reproduced before writing.* **2019:** Rechtbank Midden-Nederland 06-11-2020,
  ECLI:NL:RBMNE:2020:5266: a voorschot herzien to € 640 for the whole year on a self-changed geschat inkomen of € 25.000 (the text: € 640,33)
  → **`zt-2019-rul-009`**; the rechtbank: a voorschot follows the estimated year income, not the months before the rise. **2016:** Rechtbank
  Zeeland-West-Brabant 10-04-2018, ECLI:NL:RBZWB:2018:2319: definitief € 439 met partner — see the next point → **`zt-2016-rul-005`**; ABRvS
  05-12-2018, ECLI:NL:RVS:2018:3958: voorschotten € 945 at a geschat € 26.901 and definitief € 761 at the BRI € 28.272, a partner proven by
  the amounts (zonder partner the text gives € 39 and nihil) → **`zt-2016-rul-006`, `-007`**. **2014:** ABRvS 31-01-2018, ECLI:NL:RVS:2018:317:
  definitief € 82 at € 27.840 zonder partner (the text: € 82,07; met partner € 872) → **`zt-2014-rul-008`**. **2015:** two voorschotten of
  € 942 — the maximum — at stated incomes of € 443 and € 2.655 (ABRvS 09-08-2017, ECLI:NL:RVS:2017:2138; ABRvS 15-11-2017,
  ECLI:NL:RVS:2017:3139) → **`zt-2015-rul-007`, `-008`**.
- *A ruling whose figures contradict each other, read by its arithmetic.* ECLI:NL:RBZWB:2018:2319 gives the two incomes as € 15.070 and
  € 16.604, their sum as '€ 30.674' and, in its conclusion, '€ 30.670'. € 15.070 + € 16.604 is € 31.674, at which the 2016 text gives € 304;
  at € 30.670 it gives € 439,22 → the Dienst's € 439 to the euro. The case enters € 30.670 as the gezamenlijk toetsingsinkomen, names all
  three figures and the reason, and Ask 9 asks the owner to check that reading first. Stored as the operator's reading, not as a discrepancy:
  the ruling itself states the figure the amount fits.
- *One outcome neither stored nor logged, and why.* ECLI:NL:RVS:2017:3139 also says the Dienst set the voorschot 2015 to nihil at a
  gezamenlijk € 17.736 once a medebewoner counted as toeslagpartner from 21-03-2015. The whole-year text gives € 1.791 there. But the ruling
  does not say whether the partner was verzekerd (Wzt art. 2 lid 5, tekst 2015: no zorgtoeslag if not) or rechtmatig verblijvend (Awir
  art. 9), and the situation changed within the year (Awir art. 5, not encoded). An outcome that depends on inputs the text does not state
  is not a case, and the project does not log a discrepancy it would have to manufacture an input for; the finding is in `SOURCES.md` §4
  with both figures, for a full read. The same reasoning kept ECLI:NL:RVS:2018:1687 out (2013: € 1.889 → € 1.057 when the partner's income
  went from € 0 to € 9.545; the aanvrager's own income is not stated — the text gives both amounts at about € 21.028, a derived figure).
- *A Dienst figure on the 2013 ceiling.* In ECLI:NL:RBGEL:2013:1122 the verweerschrift calls the 2013 'maximale inkomensgrens' met partner
  'vastgesteld op € 42.438' — the text's ceiling to the euro (`zt-2013-syn-042`/`-043`); 2013 is a year where the drempelinkomen rounding
  moves neither ceiling, so this confirms the ceiling and says nothing on #1. Recorded in §4.
- *Thirty-two rulings read, no case,* in two §4 rows so no run reads them again: most hits of 2013–2014 concern toeslagjaren 2007–2012,
  outside the encoding (one, ECLI:NL:RBNHO:2016:2348, holds five 2011 beschikkingen with both incomes — a ready case set should 2011 ever
  be encoded); the rest state an amount without an income or quote art. 2a without figures.
- *Check:* 292 cases, 271 pass, 21 fail (the twenty of 10-20 plus `zt-2021-rul-006`, every one logged), 0 blocking; both encodings agree
  on 292. Site rebuilt: 346 pages, ten new case pages.
- *The record's files:* ten case files; `SOURCES.md` (thirteen §4 rows, the 10-28 'read in part' row closed, open item 7 rewritten);
  `cases/README.md` and `README.md` (seventy-five ruling cases); `ASKS.md` 9. `DISCREPANCIES.md` unchanged: nothing today is a
  discrepancy.

**What was wrong and why.**
- *The local `origin/main` was stale again* (`211564e` against a HEAD at `095eeea`); the fetch memory prescribes caught it. No harm.
- *The first reading of ECLI:NL:RBZWB:2018:2319 took the two incomes at their word* and computed € 304 before the conclusion's € 30.670
  was seen; had the case been written then it would have been a false discrepancy. The 10-28 lesson (settle a figure from the ruling's own
  arithmetic) applied a second time; written into memory as its own rule.
- *Memory went over the cap after today's additions* (8,011 words); the 10-26 cases passage and the 10-18/10-19 ruling passage were
  compressed to their ids and ECLIs (details live in the case files and §4). Under the cap again (wc, below).
- Nothing dropped from scope. `PLAN.md` unchanged: the strategy holds (Checkpoint 1 waits on the owner; huurtoeslag not before that;
  history paused at 2013); no checkpoint has a date to miss.

**Step 8 — asks.** None new. Ask 9 extended to the ten new ruling cases, per ruling, eight rulings; the readings to check are named there
(the € 30.670 of `zt-2016-rul-005` first; the factor and the absent partner in `zt-2017-rul-003`; the € 0 income in the two vermogen cases).

**Dropped from memory.** The 10-26 cases passage and the 10-18/10-19 ruling-cases passage compressed to ids and ECLIs; open item 4
rewritten around the state after both sweeps and the four next passes; three lessons added. 7,894 words (wc).

**Effort.** Roughly 270,000 of the 300,000-token ceiling: about 120,000 reading the files, the previous three entries, memory and the
pipeline; about 45,000 fetching and reading forty-six rulings through their amount sentences (four in their facts) and computing the
candidates; about 95,000 writing and checking the ten cases, the thirteen `SOURCES.md` rows, the memory edits and this entry; the rest on
the sweep scripts, two checks and the build. The sweeps, the fetch of 288 texts and the filter cost no tokens.

**Record under the ten-year rule.** This run added to the record: ten Dienst outcomes with their incomes, each traced to its ruling and
reproduced from the year's text — nihil for 2017 at € 26.121 for a verdragsgerechtigde in Duitsland, with the dated finding that the
Dienst applied the woonlandfactor first at the definitieve berekening after the CAK's melding, and that the text reaches the same nihil
only through the € 24 minimum of Awir art. 14 lid 5; nihil for 2015 and 2016 on grondslagen of € 391.765 and € 479.973 (the third and
fourth vermogenstoets decisions); € 640 at € 25.000 for 2019; € 439 at € 30.670, € 945 at € 26.901 and € 761 at € 28.272 for 2016 met
partner; € 82 at € 27.840 for 2014; two 2015 voorschotten of € 942 at stated incomes; the dated finding that the Dienst's 2013
inkomensgrens met partner was € 42.438; the dated findings that a voorschot follows the estimated year income and not the months
(ECLI:NL:RBMNE:2020:5266) and that the Dienst may not depart from the BRI inkomensgegeven nor await a bezwaar against the aanslag
(ECLI:NL:RBDHA:2021:2781); one Dienst outcome the text does not reproduce on the stated facts, recorded with both figures and the inputs
that are missing (ECLI:NL:RVS:2017:3139); and forty-six rulings recorded so no later run reads them again. The sweep and filter scripts
and the site build are regenerable and are not counted.

## 2026-10-28 — nineteenth run: twenty-two Dienst outcomes from fourteen rulings — the first for 2024, the first two decisions that apply a woonlandfactor to a stated income, the first decided by the € 24 minimum, and twelve for 2013–2016 from a second sweep of decisions dated 2015–2020; the 10-27 sweep's hits all read

Nineteenth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as configured for the session: `claude-fable-5-1`, the same as the
previous entry; no handover note needed. The checkout arrived detached at `fb47a19` (the previous run's commit) with a stale local
`origin/main` (`211564e`); `git fetch origin main` moved it to `fb47a19`, so nothing was missed. The routine fired the day after the
previous run: no new gap. `git log -3 --stat` shows no owner commit since 10-27.

**Step 1 — asks marked done.** None since 10-27. Asks 4, 6, 8, 9 and 10 stay open as recorded; 9 extended today (step 8).

**Step 2 — the inbox.** `INBOX.md` is empty and nothing arrived outside it. No case, dispute, review or owner note to handle.

**Step 3.** No open motion.

**Step 4 — done (item 4 of `memory.md`: the sixteen rulings the open-data sweep of 10-27 had listed with a 2021, 2024, 2025 or 2026
amount, all fetched from `data.rechtspraak.nl` in one batch and read — the three with 2024 amounts in full, the rest through a digest
of their amount sentences and the facts around them; then item 3's one remaining check.)**
- *Ten `ruling` cases from five rulings, every one reproduced by the encoding through `build.run_case` before the file was written.*
  **2024 — the first Dienst outcome, and the first two decisions in the record that apply a woonlandfactor to a stated income:**
  Rechtbank Midden-Nederland 26-09-2024, ECLI:NL:RBMNE:2024:5552, a verdragsgerechtigd couple in Polen. The rechtbank quotes the
  Dienst's computation step by step: for 2022 the standaardpremie for two, € 3.498, × the woonlandfactor 0,1829 = € 640, against a
  normpremie of € 955 (4,225% over the drempelinkomen 'vastgesteld op € 22.356' plus 13,61% over the € 77 above it) at a toetsingsinkomen
  of € 22.433 → nihil; for 2024 € 3.974 × 0,1613 = € 641 against € 1.790 (4,256% of € 26.819 plus 13,67% of € 4.746) at € 31.565 → nihil.
  The text gives € 639,78 against € 955,02 and € 641,01 against € 1.790,16: the same euros, nihil both years → **`zt-2022-rul-003`,
  `zt-2024-rul-001`**. The factors the Dienst applied are the ones `parameters/2022.yaml` and `2024.yaml` carry from the Staatscourant —
  the first confirmation in practice of a woonlandfactor other than België's. Rechtbank Midden-Nederland 17-09-2025,
  ECLI:NL:RBMNE:2025:4925: a couple abroad (the country anonymised) with geschat € 21.441 + € 821; the Dienst's voorschot of 23-04-2024,
  € 2.833, computed 'abusievelijk' without the woonlandfactor, is the text's maximum met partner for 2024 (€ 2.832,57) →
  **`zt-2024-rul-002`**, stored with the inputs the Dienst used and saying what the Dienst said about them; the later € 0 with the
  factor cannot be checked without the country (the text only says the factor was below 0,2932). **2021:** Rechtbank Den Haag
  10-12-2024, ECLI:NL:RBDHA:2024:23678: a voorschot of 28-12-2020, € 1.287 at € 17.848 (unchanged at € 19.162 and € 19.233), and the
  herziene definitieve berekening € 1.091 at the inspecteur's € 23.280 → **`zt-2021-rul-007`, `-008`**; Rechtbank Noord-Holland
  04-04-2024, ECLI:NL:RBNHO:2024:3591: a herzien voorschot of 21-10-2021, € 1.287 at a self-reported € 18.500, and the definitieve
  berekening € 600 at the BRI income € 26.894, a levenslooptegoed of € 6.899 counted → **`zt-2021-rul-009`, `-010`** (the text:
  € 1.286,86 and € 599,85). **2020:** Rechtbank Oost-Brabant 20-03-2025, ECLI:NL:RBOBR:2025:1536: a voorschot of 27-12-2019, € 1.250 at
  € 3.439; after a samenlevingscontract of 21-10-2020 the partnership taken over the whole of 2020 (Awir art. 3 as it stood: the same
  BRP address at the start of the year) and the voorschot herzien on 13-03-2021 to € 1.786 at a gezamenlijk € 25.939; the definitieve
  vaststelling nihil at € 20.286 + € 25.185 → **`zt-2020-rul-010`, `-011`, `-012`** (the text: € 1.249,82; € 1.785,89; nihil above the
  ceiling of € 38.945).
- *One reading, stated as such.* The Oost-Brabant ruling calls the € 1.786 a 'voorschot zorgtoeslag 2021'. The case takes 2020 and says
  why in its own text: the case concerns only the zorgtoeslag 2020; the same ruling calls the 2020 terugvordering 'over 2021' in one
  place and 'over 2020' in another; the amount reclaimed, € 1.805 'inclusief € 19 rente', is € 1.786 + € 19; and the 2020 text gives
  € 1.786 to the euro where the 2021 text gives € 1.930. The case notes that this is the operator's reading and that the verifier
  (Ask 9) tests it too. Had it been stored as 2021 it would have been a discrepancy; it is not one.
- *Eleven rulings read, no case,* each with its figures in `SOURCES.md` §4 so no later run reads them again. Two carry findings worth
  the record: Rechtbank Midden-Nederland 03-02-2022, ECLI:NL:RBMNE:2022:486 — **the first decision in the record on Wzt art. 2 lid 4**,
  the 50% rule: a partner whose verblijfsrecht was established on 19-11-2021 and who insured on 30-11-2021 was no verzekerde for January
  through November, so for those months the aanvrager got 'vijftig procent van het bedrag aan zorgtoeslag dat hij zou krijgen als hij en
  zijn toeslagpartner allebei verzekerde zouden zijn' — applied per month; no income stated. Rechtbank Noord-Nederland 16-02-2024,
  ECLI:NL:RBNNE:2024:631 — two toeslagpartners each with their own 2020 and 2021 amounts (€ 73; € 0 and € 218) at incomes whose sum is far
  above the ceiling; the ruling does not say for which months they were partners, so the whole-year text cannot be compared and the
  case is not stored. The others: a 2024 stopzetting at an indexed € 143.932 (ECLI:NL:RBDHA:2025:10771, Awir art. 15 lid 5 — a
  stopzetting, not a berekening); 2021 amounts without incomes (ECLI:NL:RVS:2023:2768, ECLI:NL:RBAMS:2023:7745, ECLI:NL:RBMNE:2025:3860,
  ECLI:NL:RVS:2025:1273 with its first instance ECLI:NL:RBAMS:2023:1466); two late applications with incomes but no amount
  (ECLI:NL:RBZWB:2024:5649, ECLI:NL:RBLIM:2024:5915); and ECLI:NL:RBMNE:2023:7512 re-read: neither amount is stated, the € 422 reclaimed
  against the text's € 1.287 − € 866 = € 421 is noted, derived amounts are not stored.
- *#11 and #1, dated notes.* Two of the € 1.287 voorschotten that #11 cited from unread rulings are now cases (`zt-2021-rul-007`,
  `-009`); every dated 2021 voorschot below the drempelinkomen in the record is € 1.287 except the € 1.289 — #11 stays `open`, the
  ruling gives it no date and no parameters. #1 gains the Dienst's drempelinkomen as quoted from a *decision* rather than a leaflet:
  'vastgesteld op € 22.356' for 2022 (exact) and € 26.819 for 2024 (down, as the leaflet); status unchanged.
- *Item 3's last check:* `/betwisten/` and `/insturen/` rendered in headless Chromium (Playwright, node): both show the six-point
  'In het kort' and the line that the English text applies; no console errors. Item closed in memory.
- *The second sweep, run and read the same day.* Decisions dated 2015-01-01 → 2020-12-31 swept week by week in the background (about
  six minutes, no tokens): 217 rulings mention zorgtoeslag; all 217 texts fetched and filtered for sentences that pair an amount with
  'zorgtoeslag' and an income word — 24 rulings. Nine of them gave **twelve more cases, all reproduced before writing**: 2013
  `zt-2013-rul-005`/`-006` (€ 1.060 at € 12.922 and € 1.002 at € 19.708, Rechtbank Noord-Holland 07-04-2020, ECLI:NL:RBNHO:2020:2696),
  `-007` (nihil at a gezamenlijk € 62.145 once the echtgenoot counted as partner, ABRvS 05-10-2016, ECLI:NL:RVS:2016:2600) and **`-008`
  (nihil at € 31.028, ABRvS 07-03-2018, ECLI:NL:RVS:2018:768 — the text gives € 15,78, below the € 24 of Awir art. 14 lid 5: the first
  case in the record decided by the minimum)**; 2014 `zt-2014-rul-005`/`-006` (a voorschot of € 865 at € 14.591 and € 699 at € 21.073,
  ABRvS 24-10-2018, ECLI:NL:RVS:2018:3454) and `-007` (nihil at the inspecteur's € 40.775, ABRvS 09-01-2019, ECLI:NL:RVS:2019:51); 2015
  `zt-2015-rul-002` (€ 495 at € 22.797, ABRvS 09-05-2018, ECLI:NL:RVS:2018:1514), `-003` (nihil at € 27.104, Rechtbank Den Haag
  16-03-2018, ECLI:NL:RBDHA:2018:3299), `-004` and `-005` (nihil at € 58.340 and € 35.695 met partner, ABRvS 28-02-2018,
  ECLI:NL:RVS:2018:664, and 17-01-2018, ECLI:NL:RVS:2018:133); 2016 `zt-2016-rul-003` (nihil at € 29.027, a transitievergoeding counted,
  ABRvS 14-10-2020, ECLI:NL:RVS:2020:2416). Seven more were read in part and are listed in `SOURCES.md` §4 for the next run — among
  them two on the 2013 vermogenstoets (ECLI:NL:RBNNE:2017:986: nihil on a grondslag above € 80.000 from a € 303.000 schadevergoeding,
  the grondslag not stated; ECLI:NL:RVS:2020:1415: the Afdeling on Awir art. 7 lid 3 jo. Wzt art. 2a) and one that needs the full text
  before anything is logged (ECLI:NL:RBMNE:2020:4351: 2017 nihil at € 26.121, where the 2017 text gives an amount zonder partner).
  The 193 texts without such a sentence pair are the next cheap pass with a looser filter.
- *Check:* 282 cases, 261 pass, 21 fail (the twenty of 10-20 plus `zt-2021-rul-006`, every one logged), 0 blocking; both encodings
  agree on 282. Site rebuilt: 336 pages, twenty-two new case pages.
- *The record's files:* twenty-two case files; `DISCREPANCIES.md` (#11, #1 notes); `SOURCES.md` (twenty-five §4 rows, open item 7
  rewritten twice); `cases/README.md` and `README.md` (sixty-five ruling cases; 2024 joins the years with a Dienst outcome; the README's discrepancy
  count corrected from ten to eleven — it had not been updated on 10-27); `ASKS.md` 9.

**What was wrong and why.**
- *The README said the log had ten entries since 10-27, when #11 made it eleven.* A count in prose that the previous run did not read
  back after adding an entry; fixed today. The same rule as for numbers: a count is read off the file or not written.
- *The `€ 1.786` nearly became discrepancy #12.* Taken at the ruling's word ('voorschot zorgtoeslag 2021') the amount is € 144 off the
  2021 text; the first arithmetic was done with 2021 parameters and the entry was half-planned before the facts paragraph was read in
  full and the 2020 computation tried. Lesson in `memory.md`: a ruling can misname a year; check the ruling's own arithmetic and scope
  before logging.
- *Memory went over the cap by the first edit* (7,958 words after today's additions); the 2017–2019 key-figure passages were compressed
  to headline figures (7,520 words). The remaining long paragraphs are 2020–2026, next in line.
- Nothing dropped from scope. `PLAN.md` unchanged: the strategy holds (Checkpoint 1 waits on the owner; huurtoeslag not before that;
  history paused at 2013); no checkpoint has a date to miss.

**Step 8 — asks.** None new. Ask 9 extended to the twenty-two new ruling cases, per ruling, fourteen rulings; the readings to check
are named there (the Polen inputs; the 2020 year of the € 1.786; the € 24 minimum in `zt-2013-rul-008`).

**Dropped from memory.** The 2019, 2018 and 2017 key-figure passages compressed (instrument-by-instrument detail that lives in the
parameter files and `CHANGES.md`); open item 3 closed; open item 4 rewritten around the sweep's state and the two sweeps still to do.
7,520 words (wc).

**Effort.** Roughly 250,000 of the 300,000-token ceiling: about 95,000 reading the files, the previous three entries, memory and the
pipeline; about 60,000 fetching and reading twenty-five rulings (three in full, the rest through their amount sentences) and computing
the candidates; about 80,000 writing and checking the twenty-two cases, the twenty-five `SOURCES.md` rows, the notes, the memory edits
and this entry; the rest on the Chromium check, the sweep scripts and two builds. The second sweep and its digest cost no tokens; its
reading did.

**Record under the ten-year rule.** This run added to the record: ten Dienst outcomes with their incomes, each traced to its ruling and
reproduced from the year's text — the first for 2024 (nihil at € 31.565 for a verdragsgerechtigd couple in Polen, with the Dienst's
own arithmetic quoted) and the first two decisions in which the Dienst applies a woonlandfactor to a stated income (Polen 0,1829 in
2022, 0,1613 in 2024, the parameter files' figures confirmed in practice); a 2024 voorschot of € 2.833 at € 22.262 that the Dienst
computed without the factor; four 2021 outcomes (€ 1.287 at € 17.848 and € 18.500, € 1.091 at € 23.280, € 600 at € 26.894) and three
2020 outcomes (€ 1.250 at € 3.439, € 1.786 at € 25.939 met partner, nihil at € 45.471); twelve outcomes for 2013–2016 from
decisions of 2016–2020 (among them € 1.060 and € 1.002 for 2013, € 865 and € 699 for 2014, € 495 for 2015, and the nihil at € 31.028
for 2013 that the text reaches only through the € 24 minimum of Awir art. 14 lid 5); the dated finding that the Dienst applies
Wzt art. 2 lid 4 per month to a partner without established verblijfsrecht (ECLI:NL:RBMNE:2022:486); the dated finding that the
Dienst's drempelinkomen figures in decisions are € 22.356 for 2022 and € 26.819 for 2024; the dated facts that a levenslooptegoed
counts in the year paid (two rulings) and that toeslagpartnerschap was retroactive over the whole year until Awir art. 3 changed on
01-01-2021 (Stb. 2020, 518), as the Dienst applied it for 2020; and twenty-five rulings recorded so no later run reads them again. The
sweep scripts and the site build are regenerable and are not counted.

## 2026-10-27 — eighteenth run: seventeen Dienst outcomes from nine rulings through the rechtspraak.nl open-data feed — the first for 2018 and 2021, a second vermogenstoets decision, a 2018 figure on the drempelinkomen rounding, and discrepancy #11 opened on a 2021 voorschot

Eighteenth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as configured for the session: `claude-fable-5-1`, the same as the
previous entry; no handover note needed. The checkout arrived on `main` at a current `origin/main` (`211564e`, the previous run's second
commit; `git fetch` confirmed it). The routine fired the day after the previous run: no new gap. `git log -4 --stat` shows no owner commit
since 10-26.

**Step 1 — asks marked done.** None since 10-26. Asks 4, 6, 8, 9 and 10 stay open as recorded; 9 extended today (step 8).

**Step 2 — the inbox.** `INBOX.md` is empty and nothing arrived outside it. No case, dispute, review or owner note to handle.

**Step 3.** No open motion.

**Step 4 — done (item 4 of `memory.md`: Dienst outcomes from case law for the years that had none. Three web searches for 2021/2024/2025
rulings and three zaaknummer searches, all fruitless; then a new route — the rechtspraak.nl open-data feed — swept 2021–2026 in the
background; fourteen rulings fetched and read in full, eleven recorded.)**
- *The route.* The web search found nothing for 2021 again (as on 10-26) and the zaaknummer searches returned unrelated pages; the search
  API of `uitspraken.rechtspraak.nl` answers 403. The open-data feed `data.rechtspraak.nl/uitspraken/zoeken` does not: with a date range,
  the bestuursrecht subject and `return=DOC` it lists every ruling of the period with its inhoudsindicatie. Swept week by week from
  2021-01-01 to today (about 300 requests, ten minutes, no tokens), it gave 259 rulings mentioning zorgtoeslag; each full text was then
  fetched from `data.rechtspraak.nl/uitspraken/content` and grepped for sentences with an amount and the toeslagjaar. Thirty-four carry a
  2021, 2024, 2025 or 2026 outcome. Nine rulings were read today; the rest are listed in `law/SOURCES.md` open item 7 for the next runs.
- *Seventeen `ruling` cases from nine rulings, sixteen reproduced by the encoding through `build.run_case` before the file was written,
  one not.* **2018 — the first Dienst outcomes with an income:** Rechtbank Midden-Nederland 05-02-2021, ECLI:NL:RBMNE:2021:668: a couple's
  voorschot of € 1.061 at a geschat gezamenlijk inkomen of € 28.304 (the text: € 1.061,20) and nihil at € 37.125 → `zt-2018-rul-001`, `-002`;
  the rechtbank quotes the Dienst's 'maximale inkomensgrens van € 35.996' — see #1 below. **2019:** Rechtbank Gelderland 10-03-2022,
  ECLI:NL:RBGEL:2022:1259: voorschot € 1.093 at € 21.655, definitief € 941 at € 22.779, zonder partner by the amounts → `zt-2019-rul-005`,
  `-006`; Rechtbank Noord-Holland 07-03-2024, ECLI:NL:RBNHO:2024:2245: one aanvrager's 2019 and 2020 set to nihil at registered incomes of
  € 36.428 and € 41.466 and then to € 1.189 and € 1.250 (the maxima zonder partner) at the inspecteur's corrected € 18.214 and € 20.733 →
  `zt-2019-rul-007`, `-008`, `zt-2020-rul-005`, `-006`. **2020:** ABRvS 30-08-2023, ECLI:NL:RVS:2023:3323: voorschot € 1.250 at a geschat
  toetsingsinkomen of € 0, then nihil because the BRI grondslag sparen en beleggen, € 99.000, exceeded the € 85.767 of Wzt art. 2a (text
  2020) — **the record's second decision on the vermogenstoets**, input reconstructed as € 99.000 + € 30.846 and said so, as on 10-26 →
  `zt-2020-rul-007`, `-008`; Rechtbank Rotterdam 20-10-2021, ECLI:NL:RBROT:2021:10386: a couple's voorschot of € 1.238 at € 21.980 + € 8.000
  (the text: € 1.238,33) → `zt-2020-rul-009`. **2021 — the first Dienst outcomes at all** (2021 had only the four synthetic ceiling cases):
  Rechtbank Den Haag 01-12-2023, ECLI:NL:RBDHA:2023:19139, confirmed by ABRvS 20-11-2024, ECLI:NL:RVS:2024:4751: voorschot € 1.287 at
  € 9.439 and definitief € 54 at € 30.913 (an AOW-nabetaling over 2019–2021 counted in 2021; the text: € 54,07) → `zt-2021-rul-001`, `-002`
  — the first 2021 point on the afbouw line; Rechtbank Zeeland-West-Brabant 29-10-2024, ECLI:NL:RBZWB:2024:7431: € 1.287 at € 12.242 and
  nihil at € 44.615 → `-003`, `-004`; Rechtbank Noord-Nederland 27-02-2024, ECLI:NL:RBNNE:2024:632: herzien € 487 at € 27.725 — the text
  gives € 486,9987, two tenths of a cent from the rounding edge, and the Dienst lands on the same euro → `-005`; and **a voorschot of
  € 1.289 at € 14.766, which the text does not give** (its maximum zonder partner is € 1.286,86 → € 1.287) → `-006`, see #11.
- *Discrepancy #11 opened, `open`.* The € 1.289 is two euro above the text's 2021 maximum. What is known is in the entry: four other 2021
  voorschotten below the drempelinkomen in today's rulings are € 1.287; a partner does not explain it (€ 2.487); the same ruling's revised
  amount matches the text to the euro; the ruling gives neither the date of the voorschot nor its parameters. Classification waits on an
  investigation (a later voorschot date; other parameters than the final ones) — it is not guessed. The case carries `discrepantie: 11`
  and is reported as a failure, not blocking.
- *#1, a 2018 figure.* The Dienst's inkomensgrens met partner for 2018, € 35.996 as the rechtbank quotes it, equals the text's ceiling with
  the unrounded drempelinkomen (€ 20.450,88) or one rounded up (€ 20.451); a drempelinkomen rounded down (€ 20.450) would give € 35.995
  (`zt-2018-syn-022`/`-023`, written 10-19 for exactly this test). So in 2018 the Dienst did not round down — the first year before 2023 with
  a Dienst figure on the question. Added to #1 as a dated note; status unchanged.
- *Five rulings read, no case:* ECLI:NL:RBMNE:2023:7512 (2021: incomes € 13.157 and € 24.931, € 422 reclaimed, no amount stated — € 865
  would be derived, and the text gives € 866; worth a re-read), ECLI:NL:RBOVE:2021:1460 (2017 split by a partner's departure — Awir art. 5,
  not encoded), ECLI:NL:RBDHA:2021:2394 (2019 part-year partner, no incomes), and the two summaries without usable figures. All in
  `SOURCES.md` §4.
- *Check:* 260 cases, 239 pass, 21 fail (the twenty of 10-20 plus `zt-2021-rul-006`, every one logged), 0 blocking; both encodings agree on
  260. Site rebuilt: seventeen new case pages, `/verschillen/11/`.
- *The record's files:* seventeen case files; `DISCREPANCIES.md` (#11, #1 note); `SOURCES.md` (eleven §4 rows, open item 7 with the unread
  hits and the route); `cases/README.md` and `README.md` (forty-three ruling cases; 2018 and 2021 join the years with a Dienst outcome);
  `ASKS.md` 9.

**What was wrong and why.**
- *Three zaaknummer web searches returned nothing* and the year searches for 2021/2024/2025 gave only known rulings — about 15,000 tokens
  spent before the feed route was tried. The feed should have been tried on 10-26, when memory already recorded that the `zoeken` API
  existed and 'returned 0 for a creator/date/subject query': that query was malformed, the API works. Lesson in `memory.md` item 4.
- *The digest script crashed on its first run:* one inhoudsindicatie in the feed contained a newline, so a continuation line was read as an
  ECLI. Fixed by skipping lines not starting with `ECLI:`; the script re-runs idempotently.
- *An explanation of #11 almost entered the log.* The first thought was that a December-2020 voorschot might rest on provisional
  parameters; that is a guess about the Dienst's method, which the project does not record (`CASES.md`). The entry says 'to investigate'.
- *Fourteen rulings were fetched and only nine read to the end*; the five with 2024 outcomes (`SOURCES.md` item 7) were left for the next
  run because the ceiling was near — 2024, 2025 and 2026 still have no Dienst outcome.
- Nothing dropped from scope. `PLAN.md` unchanged: the strategy holds (Checkpoint 1 waits on the owner; huurtoeslag not before that;
  history paused at 2013); no checkpoint has a date to miss.

**Step 8 — asks.** None new. Ask 9 extended to the seventeen new ruling cases, per ruling, nine rulings; the owner's confirmation of
ECLI:NL:RBNNE:2024:632's figures is the one that matters most (#11).

**Dropped from memory.** Open item 4 rewritten around the feed route (the three older routes kept in one sentence); the cases paragraph's
10-26 detail kept, today's added. About 7,460 words (wc) after today's additions — under the cap; the key-figures paragraph is still the
part to compress next.

**Effort.** Roughly 290,000 of the 300,000-token ceiling: about 95,000 reading the files, the previous three entries, memory and the
pipeline; about 60,000 on the searches, the feed, fourteen rulings and the computations; about 135,000 writing and checking the seventeen
cases, #11, the `SOURCES.md` rows, the memory edits and this entry. The sweep itself cost no tokens; reading its hits is what the next runs
spend on.

**Record under the ten-year rule.** This run added to the record: seventeen Dienst outcomes with their incomes, each traced to its ruling
and reproduced from the year's text except one — the first for 2018 (€ 1.061 at € 28.304 and nihil at € 37.125, met partner) and the first
six for 2021 (€ 1.287 at € 9.439 and € 12.242, € 54 at € 30.913, € 487 at € 27.725, nihil at € 44.615, and € 1.289 at € 14.766); the second
decision on the vermogenstoets (2020, nihil at a grondslag sparen en beleggen of € 99.000); four 2019 and three more 2020 outcomes; the
dated finding that the Dienst's 2018 inkomensgrens met partner was € 35.996, so the 2018 drempelinkomen was not rounded down; discrepancy
#11, a 2021 voorschot two euro above the text, with what is known; the dated finding that the Afdeling counts an AOW-nabetaling in the
year paid for 2021 as it did for 2022; and eleven rulings recorded so no later run reads them again. The sweep scripts and the site build
are regenerable and are not counted.

## 2026-10-26 — seventeenth run: eight Dienst outcomes from five rulings — the first on the vermogenstoets, the first for 2017 and the first for 2022 outside a leaflet; the protocol pages get a plain-Dutch summary; Awir 2024 art. 7 lid 3 read in the consolidated text

Seventeenth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as configured for the session: `claude-fable-5-1`, the same as the
previous entry; no handover note needed. The checkout arrived detached at a current `origin/main` (`0d49d6d`, the previous run's second
commit; `git fetch` confirmed it). The routine fired the day after the previous run: no new gap. `git log -3 --stat` shows no owner commit
since 10-25.

**Step 1 — asks marked done.** None since 10-25. Asks 4, 6, 8, 9 and 10 stay open as recorded; 9 extended today (step 8).

**Step 2 — the inbox.** `INBOX.md` is empty and nothing arrived outside it. No case, dispute, review or owner note to handle.

**Step 3.** No open motion.

**Step 4 — done (items 4, 3 and 5 of `memory.md`, in the order history's pause of 10-25 set: Dienst outcomes from case law for the years
that had none; the plain-Dutch summary on the protocol pages; one `SOURCES.md` open item. Four year searches, eight zaaknummer and
follow-up searches, eleven rulings fetched from `data.rechtspraak.nl` and read, one Awir text.)**
- *Eight `ruling` cases from five rulings, all reproduced by the encoding through `build.run_case` before the file was written.*
  ECLI:NL:RVS:2023:1843 (10-05-2023): zorgtoeslag 2016 and 2017 'vastgesteld op nihil ... omdat het gezamenlijk toetsingsinkomen over die
  jaren te hoog is', at the inspecteur's verzamelinkomen of the aanvrager, € 35.088 and € 35.358, met partner (the partner's income not
  stated; nihil under either year's text at the aanvrager's income alone) → **`zt-2016-rul-002`, `zt-2017-rul-001`** — the first Dienst
  outcome for 2017. ECLI:NL:RVS:2019:4069 (04-12-2019): for January 2017 alone an ex-partner on the same address until 11 January counts
  as toeslagpartner (Awir art. 3 lid 2, art. 5), his whole-year income counts for that month (Awir art. 7 lid 1 jo. art. 8 lid 1 leave
  'geen ruimte de draagkracht ... per maand te bepalen'), and at a gezamenlijk toetsingsinkomen of € 35.410 there is 'over de maand januari
  2017 geen aanspraak' → **`zt-2017-rul-002`** with `maanden_aanspraak: 1`; the eleven months without the partner are no case (her own
  income is not in the text; the year total € 978 is). ECLI:NL:RVS:2022:2396 (17-08-2022): a voorschot 2019 of € 2.314 at a geschat inkomen
  of € 5.063 → **`zt-2019-rul-003`** (no partner named; the amount is the text's maximum met partner, € 2.314,41, against € 1.189,14 zonder),
  and the definitieve berekening nihil at € 3.665 because the grondslag sparen en beleggen, € 106.904 'na aftrek van het heffingvrij
  vermogen', exceeds the € 84.416 of Wzt art. 2a lid 1 (text 2019), which the Afdeling quotes → **`zt-2019-rul-004`, the record's first
  Dienst outcome on the vermogenstoets.** ECLI:NL:RVS:2024:5262 (18-12-2024): a definitieve vaststelling 2020 of € 722 at a verzamelinkomen
  of € 25.328 (a beëindigingsvergoeding counted), zonder partner by the amount (€ 721,73; met partner € 1.869) → **`zt-2020-rul-004`**.
  ECLI:NL:RVS:2024:4094 (09-10-2024): a voorschot 2022 of € 1.336 at a geschat toetsingsinkomen of € 3.628 — the text's maximum zonder
  partner, € 1.335,86 — and its herziening to nihil at a self-reported € 47.000 including a UWV nabetaling of € 31.102,13 over 2017–2022,
  which the Wzt and the Awir give no basis to leave out → **`zt-2022-rul-001`, `-002`** — the first 2022 outcomes not taken from the
  Dienst's own leaflet. Each case quotes the ruling's sentences, names what is inferred (a partner from an amount) and what the text
  does not explain (€ 2.323 reclaimed against a € 2.314 voorschot; € 722 + € 529 against the text's € 1.250).
- *The vermogenstoets case's input is reconstructed, and says so.* The ruling states the grondslag after the heffingvrij vermogen; for
  2017–2020 the encoding asks for the rendementsgrondslag and deducts the heffingvrij vermogen itself (once, or twice with the whole year
  the same partner, Wet IB art. 5.2 lid 2 — which it assumes for a partner without other information). The case therefore carries
  `rendementsgrondslag: 167624` = € 106.904 + 2 × € 30.360, with the zonder-partner alternative (€ 137.264) and the finding that the
  outcome is nihil under every reading, since € 106.904 alone exceeds € 84.416. This is the first time a case input had to be derived
  from a stated figure; the derivation is in the case, the report and `SOURCES.md`.
- *Six more rulings read, no case:* ECLI:NL:RVS:2018:3524 — voorschotten 2016 (€ 1.113) and 2017 (€ 70) for an AOW-gerechtigde with her
  partner in België, 'Deze woonlandfactor bedraagt in zowel 2016 als 2017 0,7029', the figure the parameter files carry for BE in both
  years, now confirmed in practice; ECLI:NL:RVS:2023:2062 — zorgtoeslag 2014 € 721, after bezwaar € 865 (the 2014 maximum zonder partner),
  no income; ECLI:NL:RVS:2024:5428 — no amounts, a herziening for 2013 ordered on the Dienst's own letters; ECLI:NL:RBNNE:2023:5325 — the
  first instance of the 2022 case, without the incomes; ECLI:NL:RBZWB:2022:3973 and ECLI:NL:RBMNE:2025:7085 — huurtoeslag only. All eleven
  in `SOURCES.md` §4 so no later run reads them again.
- *`SOURCES.md` open item 3 resolved:* the consolidated Awir text of 01-01-2024 t/m 05-11-2024 reads, in art. 7 lid 3, '€ 36.952' and
  'een gezamenlijke rendementsgrondslag ... van meer dan € 73.904' — the second amount had been derived from its replacement in Stcrt.
  2024, 38492; `awir/parameters/2024.yaml` now cites the text it was read in.
- *The protocol pages, item 3 of memory (the design agent's note of 10-19, argued 10-21 as day-to-day work under `DESIGN.md` P1):*
  `/betwisten/` and `/insturen/` now open with 'In het kort', six short sentences in plain Dutch — who may dispute, what a dispute needs,
  one reply, one counter, 'betwist' until a second named expert sides; for a case: what to send, what to leave out, that the name stays
  out of the dossier, what happens when the checker agrees or disagrees, the licence — followed by the line that the English text below
  is the one that applies, then the protocol verbatim as before. In `tools/render.py` (`protocol(..., kort)`), rendered and read back in the
  built HTML; not yet read in headless Chromium (memory item 3 keeps that one check).
- *Check:* 243 cases, 223 pass, 20 fail (the twenty of 10-20, every one logged), 0 blocking; both encodings agree on 243. Site rebuilt: 296
  pages, eight new case pages, the two protocol pages changed.
- *The record's files:* eight case files; `SOURCES.md` (ten §4 rows, item 3 resolved, a dated resolved line); `awir/parameters/2024.yaml`;
  `cases/README.md` and `README.md` (twenty-six ruling cases; 2017 and 2022 join the years with a Dienst outcome); `ASKS.md` 9.

**What was wrong and why.**
- *A guess about the Dienst's reasons, in brackets.* The first draft of `zt-2019-rul-004`'s note explained the € 9 between the voorschot
  and the amount reclaimed with '(rente? een eerder voorschot?)'. The project never speculates about why (`CASES.md`); a question mark
  does not make it less of a guess. Replaced by 'de uitspraak verklaart dat niet' before the check ran. Lesson in `memory.md`.
- *An arithmetic sentence written before it was computed.* The first draft of `zt-2019-rul-003`'s note worked the 2019 maximum met partner
  by hand with the wrong normpercentage and caught itself mid-sentence; rewritten from the encoding's step output (normpremie € 903,59 =
  4,315% × € 20.940,768; 2 × € 1.609 − € 903,59 = € 2.314,41). The 10-24 rule again: a sentence that explains a number is a number.
- *The year searches for 2021 and 2024 returned nothing for those years* — only 2020 decisions and huurtoeslag rulings; the useful hits for
  the run came from the 2017 search (2016/2017, 2019 and 2014 rulings) and from following the 2022 snippet to its ECLI through the
  rechtbank's zaaknummer when the Afdeling's own zaaknummer search failed. Both routes recorded in `memory.md` item 4; 2021, 2024, 2025
  and 2026 still have no Dienst outcome.
- *`tools/render.py` shows a whole-file diff for an 18-line change.* The file had CRLF line endings (from the design branch); the edit was
  written back with LF, so git shows all 1,086 lines changed (`git diff --ignore-all-space`: 18 insertions, 3 deletions). Noticed after the
  push from the commit's stat. Left as LF — every other source file is LF and mixed endings would be worse — and recorded here so the
  history is read right. Lesson in `memory.md`: check `file` on a source before rewriting it with a script.
- Nothing dropped from scope. `PLAN.md` unchanged: the strategy holds (Checkpoint 1 waits on the owner; huurtoeslag not before that; history
  paused at 2013 as argued 10-25); no checkpoint has a date to miss.

**Step 8 — asks.** None new. Ask 9 extended to the eight new ruling cases, per ruling, five rulings.

**Dropped from memory.** The 2016–2013 key-figure paragraphs (about 1,100 words of instrument-by-instrument detail that lives in the
parameter files and `CHANGES.md`) compressed to one line per year with the headline figures and the one dated finding each; open item 3
marked done with its one remaining check; item 5 trimmed. 6,815 words (wc) after today's additions — well under the cap.

**Effort.** Roughly 150,000 of the 300,000-token ceiling: about 55,000 reading the files, the previous three entries, memory and the
pipeline; about 35,000 on four year searches, eight follow-up searches, eleven rulings and the Awir text; about 60,000 writing and checking
the eight cases, the `SOURCES.md` rows, the render change, the memory rewrite and this entry. Half of 10-24 and 10-25: no year to encode,
and the ruling route is written down.

**Record under the ten-year rule.** This run added to the record: eight Dienst outcomes with their incomes, each traced to its ruling and
reproduced from the year's text — nihil for 2016 and 2017 at € 35.088 and € 35.358 met partner; nihil for January 2017 at € 35.410 with the
dated finding that the Afdeling reads Awir art. 7 and 8 as leaving no room for a monthly draagkracht; a 2019 voorschot of € 2.314 at € 5.063
and the first decision on the vermogenstoets, nihil at a grondslag sparen en beleggen of € 106.904 against the € 84.416 of art. 2a (text
2019); € 722 at € 25.328 for 2020; € 1.336 at € 3.628 and nihil at € 47.000 for 2022, with the dated finding that a nabetaling counts in the
year paid; the dated fact that the Dienst applied the België factor 0,7029 to voorschotten 2016 and 2017; three more amounts without
incomes; and the Awir 2024 art. 7 lid 3 amounts read in the consolidated text. The plain-Dutch summaries, the render change and the site
build are regenerable and are not counted.

## 2026-10-25 — sixteenth run: 2013 encoded from primary texts — the first year of the vermogenstoets and of the encoded drempelinkomen formula; four Dienst outcomes for 2013 from case law; the heffingvrij vermogen frozen in 2013 too; history paused at 2013

Sixteenth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as configured for the session: `claude-fable-5-1`, the same as the
previous entry; no handover note needed. The checkout arrived detached at a current `origin/main` (`76f71b6`, the previous run's commit;
`git fetch` confirmed it). The routine fired the day after the previous run: no new gap. `git log -3 --stat` shows no owner commit since 10-24.

**Step 1 — asks marked done.** None since 10-24. Asks 4, 6, 8, 9 and 10 stay open as recorded; 8 and 9 extended today (step 8).

**Step 2 — the inbox.** `INBOX.md` is empty and nothing arrived outside it. No case, dispute, review or owner note to handle.

**Step 3.** No open motion.

**Step 4 — done (item 2 of `memory.md`: 2013, the next year of history; about thirty fetches in four parallel batches, two web searches, three
rulings read).**
- *Zorgtoeslag 2013 encoded from the primary texts*, `parameters/2013.yaml` and `awir/parameters/2013.yaml`, status `draft`, each number with its
  article, instrument and quoted text: standaardpremie € 1.478 (Stcrt. 2012, 25514, kenmerk Z-3141539: € 1.281 premie + € 197 eigen risico of a
  verzekerde without compensatie, 'de kortingen op collectiviteitscontracten niet meegenomen' — the method the 2014 regeling changed as a
  beleidswijziging, so the 2013→2014 fall is now explained from both sides); WML januari 2013 € 1.469,40 (Stcrt. 2012, 21293) → drempelinkomen
  € 19.043,424; percentages 2,195% / 4,695% / 8,713% (Wzt art. 2 lid 3, text of 01-01-2013; Stb. 2012, 627 art. I, its first row, decomposed in
  the parameter file from tabel 1 — 2012 was 2,930% / 5,530% / 5,435%, text of 01-01-2012 read); vermogensgrens € 80.000 in the act itself;
  heffingvrij vermogen € 21.139 → effective € 101.139 / € 122.278; 39 woonlandfactoren (Stcrt. 2012, 25177, identical to the consolidated bijlage 4
  of 01-01-2013 and 01-12-2013 on all 39 lines; two factors above 1, Noorwegen 1,2666 and Ierland 1,0176); Awir art. 7 lid 6 € 4.627 (Stcrt.
  2012, 26314 art. VII, addressed to 'het vijfde lid' of the 2012 numbering) and art. 14 lid 4–5 unchanged across the Awir's two 2013 versions
  (01-01 and 01-12-2013, diffed). The Wzt had one version in 2013. No code change: the 2020 switches cover 2013.
- *Three firsts, dated.* The diff of 01-01-2012 against 01-01-2013 (art. 1–5) shows that 2013 is (a) the first year of the vermogenstoets — art. 2a
  is 'Nieuw' per Stb. 2012, 204 (wet van 5 april 2012, kamerstukken 33024, in force by Stb. 2012, 383), with the slotvolzin on Wet IB art. 5.13
  added before the entry into force by Stb. 2012, 669 art. XXIX, and art. 1 lid 2 gained 'op basis van het inkomen en het vermogen'; (b) **the first
  year of the drempelinkomen as the encoding computes it**: the Wet uniformering loonbegrip (Stb. 2011, 288, art. XXIV onder A, in force by Stb.
  2012, 45) struck from art. 1 onder f the clause 'verminderd met het werknemersaandeel in de premie ... Wfsv en vermeerderd met de vergoeding
  ingevolge artikel 46 ... Zvw over dat loon' — so for 2012 and earlier rule `zt-2026-art1-1f` does not compute the drempelinkomen, and Stb. 2012,
  627's '+0,25 Wul' row is the compensation; (c) the first row of the percentages besluit the series rests on through 2014. Each is a
  `CHANGES.md` row with its instrument.
- *The heffingvrij vermogen was frozen in 2013 as well.* Wet IB art. 5.5 reads € 21 139 at 01-01-2012, 01-01-2013 and 01-01-2014; the
  Bijstellingsregeling 2013 (Stcrt. 2012, 26314) says why for 2013: art. XVIII of the Wet uitwerking fiscale maatregelen Begrotingsakkoord 2013
  (Stb. 2012, 321) set art. 10.1 Wet IB aside, 'in tegenstelling tot eerdere jaren'. Two freezes in a row, two different acts; both now in
  `CHANGES.md` as rows with no change. The sixteen intermediate 2013 versions of the Wet IB were not read (written as such).
- *Four Dienst outcomes for 2013 with their incomes, from two rulings* (a web search for 2013 zorgtoeslag rulings; the texts read through
  WebFetch because the shell was refused for several turns, see below): ECLI:NL:RVS:2017:662 — vaststelling € 2.062 at a gezamenlijk
  toetsingsinkomen of € 18.035 met partner (the text's maximum met partner, € 2.061,91) and its herziening to € 493 at € 35.469 + € 1.576 →
  **`zt-2013-rul-001`, `-002`**; ECLI:NL:RVS:2016:3324 — 'huur- en zorgtoeslag ... € 3.175,00 en ... € 1.060,00' at € 2.144 zonder partner (€ 1.060
  is the zorgtoeslag by word order and by arithmetic: the text's maximum zonder partner, € 1.059,997) and its herziening to nihil at € 33.683 →
  **`zt-2013-rul-003`, `-004`**. All four reproduced through `build.run_case`. The € 1.612 reclaimed in the first ruling is not € 2.062 − € 493;
  recorded as what the ruling says, not explained, not stored as input. ECLI:NL:RVS:2018:3859 (nihil, then € 445, no income) in `SOURCES.md` §4.
  2013 now has as many Dienst outcomes as 2014 — both years had none two days ago.
- *Four synthetic cases*, `zt-2013-syn-040..043`: the ceilings from the text, € 30.939 zonder and € 42.438 met partner — the highest of the series
  2013–2026 — each with the euro above. A drempelinkomen rounded to € 19.043 or € 19.044 moves neither (the shift 1,7–2,8 cents against a
  distance of at least 1 cent from € 23,50 on both sides); 2013 is the second such year after 2014. Noted in `DISCREPANCIES.md` #1 (unchanged).
- *Check:* 235 cases, 215 pass, 20 fail (the twenty of 10-20, every one logged), 0 blocking; both encodings agree on 235. Site rebuilt: 288 pages,
  2013 in the form, `/wet/2013/`, eight new case pages.
- *The record's files:* `CHANGES.md` — eight rows for 2013 (art. 2a new, art. 1 onder f, percentages, standaardpremie, WML, bijlage 4, Awir
  art. 7, art. 5.5 unchanged) and two 2014 old columns completed (standaardpremie 2013 and woonlandfactoren 2013 now from their Stcrt. texts).
  `SOURCES.md` — twelve §1 rows, the leaflet 2013 as not found (`z30`, `z33`, `z34` 404; `z31` on 10-11; `z32` is 2023), three §4 rows, open item 4
  rewritten for 2012. `rules.md`, `cases/README.md`, `README.md`, `DISCREPANCIES.md` #1, `ASKS.md` 8 and 9.

**History paused at 2013 — the operator's sequencing decision (method, `BOARD.md`).** 2013 is the earliest year the present rules can
compute: before it the drempelinkomen depends on the Wfsv werknemersaandeel and the Zvw art. 46 vergoeding over the WML, which needs a new
version of `zt-2026-art1-1f` with its own two parameters per year, and the vermogenstoets did not exist. `PLAN.md` already places 'history back to
the Awir's start where sources allow' in Phase 4, so no scope motion is needed and the plan is not rewritten. The next runs therefore return to
the items the daily history displaced: Dienst outcomes from case law for the years that have none (2017, 2021, 2022, 2024, 2025, 2026), the B1
Dutch explanations on `/betwisten/` and `/insturen/`, and the `SOURCES.md` open items. Pre-2013 history waits for Phase 4 or a board wish.

**What was wrong and why.**
- *The shell was refused for five turns.* Mid-run the Bash tool returned no safety verdict (a transient failure of the harness, not a judgment);
  the rulings were read through WebFetch instead (it quotes at most 125 characters per sentence — enough for amounts and incomes, which is why the
  case files quote fragments), the files were written with the file tools, and the check ran once the shell came back. Nothing was lost; the
  lesson is in `memory.md`.
- *A placeholder nearly stayed.* The 2013 parameter file was written with 'art. [over de Wzt]' for the Wul's article number before that number
  was read (art. XXIV onder A); replaced the same run. The rule stands: an article number is read or marked 'not read' — a bracket is neither.
- *The afbouw's 2013 intermediate row.* The stripped text of Stb. 2012, 627's tabel 1 dropped rows; the 'na maatregel 2011' value for the 2013
  afbouw could not be read cleanly and is written as not read (the three components, +0,25 / +0,923 / +1,70, are). The normpercentage rows were
  read and add up (3,145 + 0,25 − 0,60 − 0,60 = 2,195; 6,045 + 0,25 − 1,20 − 0,40 = 4,695).
- Nothing dropped from scope. Items 3 and 4 of memory not started as such beyond today's two rulings.

**Step 8 — asks.** None new. Ask 8 extended (the 2013 leaflet not found). Ask 9 extended to the four 2013 ruling cases, per ruling, two rulings.

**Dropped from memory.** Open item 2 (2013) replaced by the pause and the 2012 note; the 2014 key-figures sentence trimmed; one duplicated
lesson removed; about 7,200 words (wc) after today's additions — under the cap; the key-figures paragraph is still the part to compress next.

**Effort.** Roughly 300,000 of the 300,000-token ceiling — at the limit, as on 10-24: about 100,000 reading the files, the previous entry, the
parameter and rules files; about 60,000 on some thirty fetches (two 28–47 MB Regeling zorgverzekering pages and two 4 MB Wet IB texts cut by
script), two searches and three rulings; about 140,000 writing and checking the two parameter files, the eight cases, the rows in `CHANGES.md`
and `SOURCES.md`, the notes, the memory and this entry — the shell refusals cost several retries.

**Record under the ten-year rule.** This run added to the record: the law of 2013 as it stood, dated and sourced — every parameter with its
instrument and quoted text; the dated finding that 2013 is the first year of the vermogenstoets (Stb. 2012, 204, in force by Stb. 2012, 383, the
slotvolzin by Stb. 2012, 669) and the first year in which the drempelinkomen is 108% × 12 × the WML alone (Stb. 2011, 288), with the 2012 text of
both articles quoted; the dated finding that the standaardpremie 2013 excluded the collectiviteitskortingen that 2014 included; the dated finding
that the heffingvrij vermogen was frozen in 2013 by Stb. 2012, 321 as it was in 2014 by the Belastingplan 2014; the Awir art. 7 renumbering of
01-01-2013 and its three instruments; the 2013 woonlandfactor table with its CVZ advice date and the finding that it did not change within the
year; the first four Dienst outcomes for 2013 with their incomes (€ 2.062 at € 18.035, € 493 at € 37.045, € 1.060 at € 2.144, nihil at € 33.683) and
one more amount, each traced to its ruling; and the 2013 income ceilings from the text with the finding that the rounding of the drempelinkomen
moves neither. The encoding of 2013 (no code changed), the cases' arithmetic and the site build are regenerable and are not counted.

## 2026-10-24 — fifteenth run: 2014 encoded from primary texts, the first four Dienst outcomes for 2014 from case law, the heffingvrij vermogen frozen in 2014, the first year where the drempelinkomen rounding decides nothing

Fifteenth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as configured for the session: `claude-fable-5-1`, the same as the
previous entry; no handover note needed. The checkout arrived on `main` at a current `origin/main` (`00b7745`, the previous run's
commit; `git fetch` confirmed it). The routine fired the day after the previous run: no new gap. `git log -3 --stat` shows no owner
commit since 10-23.

**Step 1 — asks marked done.** None since 10-23. Asks 4, 6, 8, 9 and 10 stay open as recorded; 8 and 9 extended today (step 8).

**Step 2 — the inbox.** `INBOX.md` is empty and nothing arrived outside it. No case, dispute, review or owner note to handle.

**Step 3.** No open motion.

**Step 4 — done (item 2 of `memory.md`: 2014, the next year of history; about thirty-five fetches in five parallel batches, nine web searches,
seven rulings read).**
- *Zorgtoeslag 2014 encoded from the primary texts*, `parameters/2014.yaml` and `awir/parameters/2014.yaml`, status `draft`, each number with
  its article, instrument and quoted text: standaardpremie € 1.329 (Stcrt. 2013, 35060, found through the Wzt art. 4 informatie page as
  BWBR0034337: € 1.101 premie + € 228 eigen risico — and the toelichting states a *beleidswijziging*: for the first time the collectieve
  kortingen were counted in the gemiddelde premie, against the Wzt's wetsgeschiedenis, so the fall from € 1.478 (2013) is partly a method
  change); WML januari 2014 € 1.485,60 (Stcrt. 2013, 31007 had set € 1.485,65 and Stcrt. 2013, 32425 corrected it before 1 January because the
  rounding to a multiple of € 0,60 of WML art. 14 lid 9 had been forgotten) → drempelinkomen € 19.253,376; percentages 2,410% / 5,210% /
  9,118% (Wzt art. 2 lid 3, text of 01-01-2014; Stb. 2012, 627, read in full: from 2013 the besluit stacked the Wul (+0,25 point on all
  three), the compensation of the € 115 higher verplicht eigen risico (−0,60 / −1,20 norm, +0,923 afbouw) and the koopkrachtreparatiepakket
  of the Begrotingsakkoord 2013 (−0,60 / −0,40 norm, +1,70 afbouw), and its toelichting counted 300.000 fewer households with zorgtoeslag);
  vermogensgrens € 81.360 on the grondslag sparen en beleggen (Stcrt. 2013, 35607, from € 80.000, 1,7%); heffingvrij vermogen € 21.139 (Wet IB
  2001 art. 5.5 in its three 2014 versions, 01-01, 06-01 and 19-07, and in 2013 — see the next point) → effective € 102.499 / € 123.638; 39
  woonlandfactoren (Stcrt. 2013, 33704, identical on all 39 lines to the consolidated bijlage 4 of 01-01-2014 and 01-12-2014, no correction
  article); Awir art. 7 lid 6 € 4.706 (Stcrt. 2013, 35144 art. VI) and art. 14 lid 4–5 unchanged across the Awir's two 2014 versions (01-01
  and 06-01-2014, diffed). The Wzt had three versions in 2014: 01-04-2014 renamed the College zorgverzekeringen to Zorginstituut Nederland in
  art. 5 lid 2 (Stb. 2013, 578), and 16-07-2014 struck the Zvw art. 118a clause from art. 4 with terugwerkende kracht to 1 January (Stb.
  2014, 259 art. XV and XVII, read) — neither a rule; art. 1–5 of the three versions diffed verbatim. The diff of 01-01-2013 against
  01-01-2014 shows only the percentages (2,195% / 4,695% / 8,713%) and the art. 2a amount (€ 80 000) — the 2013 values now stand in the 'old'
  columns as read. No code change: the 2020 switches cover 2014. The 2015 rows' 'old' columns that were open on 10-23 (the standaardpremie
  2014, the WML of July 2014, the 2014 woonlandfactor table, the 2014 text of Wet IB art. 5.5) are filled from today's texts.
- *The heffingvrij vermogen did not move in 2014.* Wet IB art. 5.5 reads '€ 21 139' in 2013 and in all of 2014. The Bijstellingsregeling
  directe belastingen 2014 leaves art. 5.5 alone and says why: under art. XXXIV of the Belastingplan 2014 the indexation articles 10.1 and
  10.3 lid 2 Wet IB 'vinden voor het jaar 2014 geen toepassing', so those amounts 'worden dus voor het jaar 2014 niet geïndexeerd' (the
  Belastingplan itself not read, written as such). The Wzt art. 2a amount, indexed by the same tabelcorrectiefactor through its own lid 2,
  *was* raised (1,7%). Recorded as a `CHANGES.md` row with no change, so the series does not look as if a year were missing.
- *The first Dienst outcomes for 2014, from case law — four with an income.* A web search for 2014 zorgtoeslag rulings on raadvanstate.nl and
  uitspraken.rechtspraak.nl returned, besides Afdeling rulings, two *belastingkamer* rulings on the inkomensgegeven behind a toeslag
  beschikking, which quote the beschikking with its income — a second cheap route, with the ECLI in the title. Seven rulings read in full.
  Hof Den Haag ECLI:NL:GHDHA:2017:1067: voorschot 2014 € 865 at a geschat toetsingsinkomen of € 17.333 and definitieve berekening € 814 at
  € 19.810 → **`zt-2014-rul-001`, `-002`** (the amounts prove one standaardpremie: met partner they would be € 1.655 and € 1.604). ABRvS
  ECLI:NL:RVS:2017:659: € 567 at the verzamelinkomen € 22.518 → **`zt-2014-rul-003`** (the Afdeling's correction of the toetsingsinkomen for a
  nabetaling is Bht art. 2b, huurtoeslag only; the rechtsgevolgen stand; the voorschot € 865 follows only from € 567 + € 298 and is not
  stored). Hof Amsterdam ECLI:NL:GHAMS:2019:2243: nihil at € 21.113 + € 19.000 met partner → **`zt-2014-rul-004`** (the Hof later set the
  ex-partner's inkomensgegeven at € 9.860; the herziening is not in the ruling, the text would then give € 586 — noted, not a case). All
  four reproduced from the 2014 text through `build.run_case`, not by hand (€ 864,99 / € 814,24 / € 567,33 / −€ 247). Three more 2014
  amounts without an income (€ 1.379 met partner, ECLI:NL:RVS:2018:2908; € 536 then nihil at € 31.166 without the household,
  ECLI:NL:RVS:2018:334; nihil in Zweden with the woonlandfactor, ECLI:NL:RVS:2018:3727) in `SOURCES.md` §4. 2014 is now the year with the
  most Dienst outcomes in the record after 2020 and 2023, from a year that had none this morning.
- *Four synthetic cases*, `zt-2014-syn-036..039`: the income ceilings from the text, € 28.482 zonder and € 37.145 met partner, each with the
  euro above — the highest ceilings of the series 2014–2026, since the afbouw was 9,118% before the 2015 jump. New: a drempelinkomen rounded
  down (€ 19.253) or up (€ 19.254) moves *neither* ceiling (€ 23,50 / € 23,57 at the ceiling, € 23,41 / € 23,48 the euro above), the first
  year in the series where `DISCREPANCIES.md` #1 can have no effect on an outcome; computed analytically, checked with Decimal and verified
  on the boundary euros through the encoding. Recorded as a dated note in #1 (status unchanged, `government`).
- *Check:* 227 cases, 207 pass, 20 fail (the twenty of 10-20, every one logged), 0 blocking; both encodings agree on 227. The site rebuilt: 279
  pages, 2014 in the form, `/wet/2014/`, eight new case pages, the #1 note on `/verschillen/1/`.
- *The record's files:* `CHANGES.md` — nine rows for 2014 (two for the 16-07 and 01-04 text changes, seven for 01-01-2014, one of them the
  unchanged art. 5.5) and the four 2015 old columns filled. `SOURCES.md` — eleven rows for the 2014 instruments and texts, the leaflet 2014 as
  not found (`z40`, `z42`–`z44` 404; `z41` is 2024), six rulings, open item 4 rewritten for 2013 with what today already read of it.
  `rules.md` (years, drempelinkomen, percentages chain back to Stb. 2012, 627, vermogen amounts, standaardpremie and woonlandfactor lists),
  `cases/README.md`, `README.md`, `DISCREPANCIES.md` #1, `ASKS.md` 8 and 9.

**What was wrong and why.**
- *An explanation written from intuition.* The first draft of the #1 note said the 2014 rounding decides nothing because a euro of
  drempelinkomen 'shifts the amount by about nine cents rather than thirteen'. Computed, the shift is (afbouw − norm) × the fraction rounded
  away: 1,5 to 4 cents in 2014 against 3 to 7 in 2015 — the sentence was wrong by a factor of two and the mechanism half right. Caught on
  re-reading the diff; rewritten with the computed figures. A sentence that explains a number is a number (`memory.md`).
- *A recalled instrument name with a question mark.* Open item 4's first draft named the act that inserted Wzt art. 2a as 'the Wet van
  20 december 2012?'. Not read; the question mark does not make it less recalled. Replaced by 'to be identified from the informatie page'.
- *Three fetches to the wrong dates.* wetten.overheid.nl answers a date that is not a version start with an 8,7 KB 'Fout' page: Wet IB at
  2014-07-01 and 2014-06-30, Awir at 2014-12-31. The 10-23 lesson (check the size) caught them; the informatie page then gave the version
  dates (06-01 and 19-07-2014). Lesson in `memory.md`: fetch version start dates only.
- *A regeling the index does not surface.* The woonlandfactoren regeling for 2014 was found by none of three searches restricted to
  officielebekendmakingen.nl nor by its SRU interface; an open search for the subject and year returned a taxlive.nl summary naming
  Stcrt. 2013, 33704, which was then read in full. The summary is recorded as the route, the Staatscourant as the source.
- Nothing dropped from scope. Items 3 (the Dutch B1 protocol pages) and 4 (a dedicated ruling pass) not started as such; the belastingkamer
  route is recorded as proven. `PLAN.md` unchanged: the strategy holds (history continuing while Checkpoint 1 waits on the owner; huurtoeslag
  not before that); no checkpoint has a date to miss.

**Step 8 — asks.** None new. Ask 8 extended (the 2014 leaflet not found; `z41` is 2024). Ask 9 extended to the four 2014 ruling cases, per
ruling, three rulings.

**Dropped from memory.** Open item 2 (2014) replaced by 2013 with what is already read and the pointers; the stale pipeline sentence about the
old template and the layouts (gone since 10-20) and a duplicated leaflet-edition sentence removed; about 6,700 words (wc) after today's additions
(the 2014 key figures, four cases, four lessons) — under the cap, but the key-figures paragraph is the part to compress next.

**Effort.** Roughly 300,000 of the 300,000-token ceiling — at the limit: about 70,000 reading the files, the previous three entries, the
parameter and rules files and the pipeline; about 70,000 on some thirty-five fetches, nine searches and seven rulings (three 47 MB and one 28 MB
Regeling zorgverzekering pages and five 4 MB Wet IB texts among them, all cut by script; the three wasted fetches above); about 160,000
writing and checking the two parameter files, the eight cases, the rows in `CHANGES.md` and `SOURCES.md`, the notes in `rules.md`,
`DISCREPANCIES.md` and `ASKS.md`, the memory and this entry. More than 10-23 because 2014 had three Wzt versions, a corrected WML regeling,
a frozen Wet IB amount to explain and seven rulings to read.

**Record under the ten-year rule.** This run added to the record: the law of 2014 as it stood, dated and sourced — every parameter with its
instrument and quoted text, the three Wzt versions of 2014 with the diffs that show what Stb. 2013, 578 and Stb. 2014, 259 changed and the
2013 values read into the 'old' columns; the dated finding that the standaardpremie of 2014 was the first computed with the collectieve
kortingen, a stated change of method; the dated finding that the WML amount of January 2014 was corrected before it took effect for a
forgotten rounding rule; the dated finding that the heffingvrij vermogen was frozen for 2014 by the Belastingplan 2014 while the Wzt's own
amount was indexed; the tenth pre-effect revision of the percentages schema and the full decomposition of the 2013–2014 percentages by
measure from Stb. 2012, 627's own table; the first four Dienst outcomes for 2014 with their incomes (€ 865 at € 17.333, € 814 at € 19.810,
€ 567 at € 22.518, nihil at € 40.113) and three more amounts, each traced to its ruling; and the 2014 income ceilings from the text with the
finding that 2014 is the first year where the rounding of the drempelinkomen moves no ceiling. The encoding of 2014 (no code changed), the
cases' arithmetic and the site build are regenerable and are not counted.

## 2026-10-23 — fourteenth run: 2015 encoded from primary texts, the 2015 afbouw jump of Stb. 2014, 488 dated, the first Dienst outcome for 2015 from case law, a third bijdrage-only factor correction found

Fourteenth run of routine `trig_012xyD5r5rxFDCjfHbZ58Kib`. Model as configured for the session: `claude-fable-5-1`, the same as the
previous entry; no handover note needed. The checkout arrived as a detached HEAD at a current `origin/main` (`27be045`, the previous
run's commit; `git fetch` confirmed it). The routine fired the day after the previous run: no new gap. `git log -3 --stat` shows no owner
commit since 10-22.

**Step 1 — asks marked done.** None since 10-22. Asks 4, 6, 8, 9 and 10 stay open as recorded; 8 and 9 extended today (step 8).

**Step 2 — the inbox.** `INBOX.md` is empty and nothing arrived outside it. No case, dispute, review or owner note to handle.

**Step 3.** No open motion.

**Step 4 — done (item 2 of `memory.md`: 2015, the next year of history; twenty-six fetches in five parallel batches, five web searches, four
rulings read).**
- *Zorgtoeslag 2015 encoded from the primary texts*, `parameters/2015.yaml` and `awir/parameters/2015.yaml`, status `draft`, each number with
  its article, instrument and quoted text: standaardpremie € 1.408 (Stcrt. 2014, 35190: € 1.170 premie + € 238 eigen risico; found through
  the Wzt art. 4 informatie page, BWBR0035894); WML januari 2015 € 1.501,80 (Stcrt. 2014, 29850) → drempelinkomen € 19.463,328; percentages
  2,395% / 5,265% / 13,400% (Wzt art. 2 lid 3, text of 01-01-2015; Stb. 2014, 488); vermogensgrens € 82.093 on the grondslag sparen en
  beleggen (Stcrt. 2014, 32936, from € 81.360, 0,9%); heffingvrij vermogen € 21.330 (Wet IB 2001 art. 5.5, versions 01-01-2015 and
  01-07-2015; set by Stcrt. 2014, 36639 art. I, read) → effective € 103.423 / € 124.753 on the rendementsgrondslag; 39 woonlandfactoren
  (Stcrt. 2014, 34233, identical on all 39 lines to the consolidated bijlage 4 of 01-01-2015, 01-02-2015 *and* 01-12-2015, all read, so the
  table did not change in the year); Awir art. 7 lid 6 € 4.749 (Stcrt. 2014, 36639 art. VI onderdeel A) and art. 14 lid 4–5 unchanged across
  the Awir's two 2015 versions (01-01 and 01-11-2015, Stb. 2015, 378, diffed: art. 7 and 14 identical). The Wzt had one version in 2015;
  the diff of 16-07-2014 against 01-01-2015 (art. 1–5) shows only the percentages (2,410% / 5,210% / 9,118%) and the art. 2a amount
  (€ 81.360) — the 2014 values now stand in the 'old' columns as read; the diff of 01-01-2015 against 01-01-2016 shows only the percentages
  and € 82.504, confirming last run's reading from the other side. No code change: the 2020 switches cover 2015. The 2016 rows' 'old'
  columns that were open on 10-22 (the standaardpremie 2015, the WML of July 2015, the 2015 woonlandfactor table, the 2015 text of
  Wet IB art. 5.5) are filled from today's texts.
- *The 2015 jump in the afbouwpercentage, dated.* Stb. 2014, 488 (besluit van 1 december 2014) is the largest single change in the series the
  record holds: the afbouwpercentage rose from 9,118% (2014) to 13,400% (2015), +3,877 procentpunt by this besluit on top of the +0,405
  already scheduled, structurally t/m 2040, because — the nota van toelichting says in so many words — the huishoudentoeslag could not be
  implemented (brief van 14 april 2014) and part of its yield was realised through the zorgtoeslag; the normpercentages were lowered for
  2015 only (−0,23 / −0,46 point) 'ter compensatie voor het niet introduceren van het inkomensafhankelijk eigen risico'. Its tabel 1 gives
  the whole history of the three percentages 2014–2030 by maatregel (2010, 2011, 2012, this one), which the record did not have. Its 2016
  row (2,640% / 5,740% / 13,430%) was replaced before taking effect by Stb. 2015, 472 — the ninth pre-effect revision found, read today from
  the earlier side.
- *A third retroactive factor correction, bijdrage-only.* Art. II of Stcrt. 2014, 34233 set the factor for Frankrijk for 2012 anew at 0,7659
  (published 0,7685; a cost component wrongly taken over), with restitution by the Zorginstituut, and the toelichting says 'Deze wijziging
  heeft geen effect op de hoogte van de zorgtoeslag. Deze wordt niet ten nadele van de verdragsgerechtigden gecorrigeerd.' — the same pattern
  as Zweden 2017 (Stcrt. 2017, 66088, settled 10-21) and Duitsland 2017–2019 (Stcrt. 2019, 58198). Read in full before writing, per the
  10-21 lesson; recorded in the parameter file, `CHANGES.md` and `SOURCES.md`.
- *The first Dienst outcome for 2015, from case law.* A web search for the 2015 leaflet title found no leaflet; a second search for 2015
  rulings restricted to raadvanstate.nl and uitspraken.rechtspraak.nl returned zaaknummers with amounts in the snippets, and one search per
  zaaknummer gave the ECLI. Four rulings read in full. ECLI:NL:RVS:2019:418 (13-02-2019): a definitieve berekening 2015 of € 663 on a
  gezamenlijk toetsingsinkomen of € 27.886 from the BRI, the aanvrager's adult son on the same address being her toeslagpartner — **case
  `zt-2015-rul-001`** (`ruling`, passes: 2 × € 1.408 − 5,265% × € 19.463,328 − 13,400% × € 8.422,672 = € 662,62 → € 663, run through
  `build.run_case`, not computed by hand; under Ask 9). ECLI:NL:RVS:2018:2406 (18-07-2018): a België resident's voorschot 2015 of € 942 —
  the 2015 maximum zonder partner from the text (€ 941,85 → € 942), reproduced — granted *without* the woonlandfactor, and a definitieve
  berekening of € 479 with it, no income: no case, but a dated fact about the Dienst's practice. ECLI:NL:RVS:2018:944: € 332 for 2015, no
  income. ECLI:NL:RVS:2023:1730: 2015 and 2016 nihil on the vermogen (no grondslag figure), quoting the 2016 art. 2a amount € 82.504. All
  four in `SOURCES.md` §4. The record now has a Dienst outcome with income for 2015, which had none, and four 2015 amounts.
- *Four synthetic cases*, `zt-2015-syn-032..035`: the income ceilings from the text, € 26.316 zonder and € 32.655 met partner, each with the
  euro above. New this year: a drempelinkomen rounded *down* (€ 19.463) moves neither ceiling, rounded *up* (€ 19.464, as the Dienst did in
  2023, 2025 and 2026) moves the zonder-partner ceiling one euro up (€ 23,54 → € 24) and the met-partner one not — the reverse of 2016–2018,
  where rounding down moved them. Computed analytically, checked with Decimal for the three drempelinkomens, and verified on the boundary
  euros through the encoding. Recorded as a dated note in `DISCREPANCIES.md` #1 (status unchanged, `government`): a published 2015 ceiling
  of the Dienst would settle #1 for 2015.
- *Check:* 219 cases, 199 pass, 20 fail (the twenty of 10-20, every one logged), 0 blocking; both encodings agree on 219 (the browser port
  computes 2015 identically; the Playwright form run was not done — it needs Edge, which this environment lacks). The site rebuilt: 270
  pages, 2015 in the form, `/wet/2015/`, five new case pages, the #1 note on `/verschillen/1/`.
- *The record's files:* `CHANGES.md` — seven rows for 2015-01-01 and the four 2016 old columns filled. `SOURCES.md` — ten rows for the 2015
  instruments and texts, the leaflet 2015 as not found, four rulings, open item 4 rewritten for 2014. `rules.md` (years, drempelinkomen,
  percentages chain, vermogen amounts, standaardpremie and woonlandfactor lists), `cases/README.md`, `README.md`, `DISCREPANCIES.md` #1,
  `ASKS.md` 8 and 9.

**What was wrong and why.**
- *A 47 MB page that came back as 8 KB.* The first fetch of the Regeling zorgverzekering at 01-01-2015 returned a wetten.nl '500' error page;
  the script would have cut nothing from it. Caught because the file size was printed beside the others; refetched, with 01-02-2015 beside it
  as a second witness. Lesson in `memory.md`: check the size and `Geldend van` before cutting.
- *A number from a search-engine description nearly cited as read.* The snippet for zaak 201709274/1/A2 said 'voorschot € 942 nihil'; the
  first draft of the standaardpremie note in `parameters/2015.yaml` cited it as a Dienst amount with 'tekst niet gelezen'. The search for
  that zaaknummer did not find it but found ECLI:NL:RVS:2018:2406, which states the same € 942 in its own text; the note now cites the read
  ruling and `SOURCES.md` says what the snippet was. Same rule as for numbers: read or not written.
- *The art. number of an amendment half-cited.* The Awir art. 7 lid 6 row first said 'art. VI' of Stcrt. 2014, 36639; the text has
  'ARTIKEL VI, A'. Corrected to 'art. VI onderdeel A' on reading the passage again.
- Nothing dropped from scope. Items 3 (the Dutch B1 protocol pages) and 4 (a dedicated ruling pass) not started as such; today's ruling
  route is recorded in `memory.md` as proven. `PLAN.md` unchanged: the strategy holds (history continuing while Checkpoint 1 waits on the
  owner; huurtoeslag not before that); no checkpoint has a date to miss.

**Step 8 — asks.** None new. Ask 8 extended (the 2015 leaflet not found; `z51` is 2025). Ask 9 extended to the tenth ruling case,
`zt-2015-rul-001`, same ten minutes per ruling.

**Dropped from memory.** Open item 2 (2015) replaced by 2014 with the method as it worked today and the pointers for 2014; the ruling route
written into item 4. Nothing else dropped; 5,926 words.

**Effort.** Roughly 200,000 of the 300,000-token ceiling: about 70,000 reading the files, the previous three entries, the parameter and
rules files and the pipeline; about 45,000 on twenty-six fetches, five searches and four rulings (three 47 MB Regeling zorgverzekering
pages and two 4 MB Wet IB texts among them, all cut by script); about 85,000 writing and checking the two parameter files, the five cases,
the rows in `CHANGES.md` and `SOURCES.md`, the notes in `rules.md`, `DISCREPANCIES.md` and `ASKS.md`, the memory and this entry. Less than
10-22's 2016 run: the method was written down and the fetches ran in larger batches.

**Record under the ten-year rule.** This run added to the record: the law of 2015 as it stood, dated and sourced — every parameter with its
instrument and quoted text, the one Wzt version of 2015 with the diff against 16-07-2014 that shows what Stb. 2014, 488 and Stcrt. 2014,
32936 changed, the two Awir versions compared, bijlage 4 read at three points of the year, and the 2014 values read into the 'old' columns;
the dating and the stated reason of the 2015 jump in the afbouwpercentage (9,118% → 13,400%, the abandoned huishoudentoeslag), with the
besluit's own table of the three percentages 2014–2030 by maatregel; the ninth pre-effect revision of the schema; the third retroactive
woonlandfactor correction found to be bijdrage-only, with the toelichting's sentence; the first Dienst outcome for 2015 with its income
(€ 663 at € 27.886) and four more 2015 amounts, each traced to its ruling, with the dated fact that in 2015 a voorschot could be granted
without the woonlandfactor; and the 2015 income ceilings from the text with the finding that this year rounding the drempelinkomen *up*
would move a ceiling where rounding down would not. The encoding of 2015 (no code changed), the cases' arithmetic and the site build are
regenerable and are not counted.

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
