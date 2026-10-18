# memory.md

Carried state for the operator. Capped at 8,000 words. Rewritten each run.

## State as of 2026-10-18 (ninth scheduled run; no run left a trace on 10-15, 10-16, 10-17 — Ask 10)

**Identity.** Name `toeslagrecht`, domain `toeslagrecht.nl` (owner, 2026-10-06). Repository
`https://github.com/TheAndries/toeslagrecht`, branch `main`. Routine
`trig_012xyD5r5rxFDCjfHbZ58Kib`, `56 5 * * *` UTC, model `claude-fable-5-1`; full config in
`ROUTINE.md`. Spend 0.59 EUR of the 200 EUR Q4 2026 ceiling (`LEDGER.md`). The checkout
arrives as a detached HEAD at `origin/main`: `git fetch origin main && git checkout -B main origin/main` before committing — on 2026-10-11 the local `origin/main`
ref was stale (2026-10-06) while HEAD was at the 2026-10-10 commit; the fetch is not optional.

**Phase.** 0 complete. Phase 1 complete except **Checkpoint 1** (Ask 6): the owner wrote "calculator is tested" on
2026-10-11 without pairs; the ask was narrowed on 2026-10-12 (paste the situations tested, any number, plus the
worried-relative sentence in `BOARD.md`; or an owner decision letting the operator run the comparison against the public
proefberekening itself). Huurtoeslag does not start before that; history continues (2024 on 10-09, 2023 on 10-11, 2022 on 10-12, 2021 on 10-13, 2020 on 10-14, 2019 on 10-18).
**The site is live** at `https://toeslagrecht.nl/` (Ask 7 done 2026-10-11): `.github/workflows/pages.yml` uploads `site/` on every
push to `main` touching it and removes `site/layouts/` first (owner decision 2026-10-11: internal matters never on the website,
transcribed into `DESIGN.md` 2026-10-12); `site/CNAME` exists but GitHub ignores it for workflow deployments. After a push that
touches `site/`, the deploy takes a minute or two; check `https://toeslagrecht.nl/layouts/b.html` is 404 if in doubt.
- Pipeline: `python3 tools/build.py check|build|all` (stdlib + PyYAML; node for the parity step). `check`
  runs every case through `rules.py` *and* through `site/zorgtoeslag-regels.js` (via `tools/parity.js`),
  writes `law/zorgtoeslag/tests/report.md`, exit 1 if a *verified* case fails or the two encodings differ.
  `build` writes `site/zorgtoeslag-parameters.js` (all yaml + rule anchors), `site/zorgtoeslag.html` (from
  `tools/zorgtoeslag.template.html`), `site/index.html`, `site/layouts/{a,b,c}.html`.
- **The checker** `site/zorgtoeslag.html` (layout B, owner decision 2026-10-09, in `DESIGN.md` since
  2026-10-10): years 2019–2026, partner, incomes, partner verzekerd, vermogen (the rendementsgrondslag, full amount — the hint
  said "boven het heffingvrije vermogen" from 10-10 to 10-14, wrong, fixed), verdragsgerechtigd + woonland, and for years with
  `art2_lid5_oud_aanwezig` the question whether the partner failed the verzekeringsplicht.
  Nothing sent or stored. Rendered and checked in headless Chromium 2026-10-10. Possible later work inside `DESIGN.md` §8: self-hosted text serif, type
  scale, print stylesheet. Anything beyond §8 needs a board motion; the operator filed none (changelog
  2026-10-10 argues why).
- Encoded (all `draft`): zorgtoeslag **2026 back to 2019** — `zt-2026-art1-1f`, `-art2-1`, `-art2-2`,
  `-art2-4`, `-art2-5`, `-art3-1`, `-art4`, `-art4a`, and `zt-2020-art2-5oud` (Wzt art. 2 lid 5 t/m 2020: no zorgtoeslag if the
  partner did not insure; input `partner_verzekeringsplicht_niet_nagekomen`; active where the year file has
  `art2_lid5_oud_aanwezig: true` — 2019 and 2020); Awir `awir-2026-art14-4`, `-art14-5`;
  `awir-2026-art7-1`, `-art8-1`, `-art3`, `-art5` as inputs/documentation. Outputs: `aanspraak_jaar`
  (unrounded), `tegemoetkoming` (Awir art. 14), `aanspraak_maand` (unrounded /12),
  `aanspraak_maand_afgerond_praktijk` (= floor(tegemoetkoming / 12), the Dienst's table practice, not law; **2022: round half up**,
  per `maand_afronding_praktijk: rekenkundig` in `parameters/2022.yaml`, one leaflet example, #8).
- Year-dependent parameters the encodings read: `artikel_vermogenstoets`, `artikel_woonlandfactor`, `artikel_maandbepaling` (2019–2020:
  lid 6), `artikel_wml_onderdeel` (a t/m 2023), `art4a_lid3_aanwezig`, `art2_lid5_oud_aanwezig` + `art2_lid5_oud`, `vermogenstoets_basis`
  (2019–2020: `grondslag_sparen_en_beleggen` — the encoding deducts `heffingvrij_vermogen` (2020 € 30.846, 2019 € 30.360; Wet IB 2001
  art. 5.5) once, or twice with a whole-year partner, art. 5.2 lid 2, then compares with € 85.767 / € 84.416), `maand_afronding_praktijk`
  (2022 rekenkundig). 2019 needed no code change: the 2020 switches covered it.
- Article numbering: 2019 through 2024 texts (t/m 05-11-2024) have vermogenstoets in art. 2a and woonlandfactor in
  art. 3; Stb. 2024, 291 (in force 06-11-2024, Stb. 2024, 322) renumbered them to art. 3 / art. 4a and
  inserted art. 4a lid 3 (verzekerde with verdragsgerechtigde partner). For 2022–2024 that case returns
  `undetermined`. The Wzt never had an art. 3a (the one Stcrt. 2025, 38110 names). Wzt art. 1 lid 1 onder f
  referred to WML art. 8 lid 1 onderdeel **a** through 2023 and to onderdeel b since 01-01-2024 (Wet invoering
  minimumuurloon, Stb. 2023, 168, art. XXXI); `parameters/2021.yaml`, `2022.yaml` and `2023.yaml` carry `artikel_wml_onderdeel: a`, which
  both encodings read (default b). **2020 → 2021:** Wzt art. 2 lid 5 (oud: geen aanspraak bij een partner zonder
  zorgverzekering) vervallen and lid 6–8 → 5–7 (Stb. 2020, 543, art. III, which also raised the 2021 drempel percentages by
  0,030 point, amendement Snels/Lodders); art. 2a moved from the grondslag sparen en beleggen (one amount, € 85.767) to the
  rendementsgrondslag (€ 116.613 / € 147.459 = old grens + heffingvrij vermogen 2020 € 30.846 per person; Stb. 2020, 546
  art. IV), indexed to € 118.479 / € 149.819 by Stcrt. 2020, 67965. Confirmed from the 2020 side on 10-14: the 2020 toets
  (grondslag > € 85.767) is the same threshold as rendementsgrondslag > € 116.613 / € 147.459.
- Not encoded, stated explicitly: who is verzekerde / verdragsgerechtigde / partner, the
  inkomensgegeven, changes within the year (Awir art. 5), verblijfsstatus, the legal basis of the
  monthly rounding (none found).

**Key figures (each cited in the parameter files).** 2026: standaardpremie € 2.119 (Stcrt. 2025, 40022);
WML januari € 2.294,40 (Stcrt. 2025, 34131) → drempelinkomen € 29.735,424 (Dienst: € 29.736);
1,912% / 4,289% / 13,730% (Stb. 2025, 412); vermogen € 146.011 / € 184.633 (Stcrt. 2025, 38110);
woonlandfactoren Stcrt. 2025, 38064. 2025: € 2.112 (Stcrt. 2024, 38887); € 2.191,80 (Stcrt. 2024, 33625)
→ € 28.405,728 (Dienst: € 28.406); 1,896% / 4,273% / 13,700% (Stb. 2024, 351); € 141.896 / € 179.429
(Stcrt. 2024, 37672); woonlandfactoren Stcrt. 2024, 35698. **2024:** € 1.987 (Stcrt. 2023, 32413);
€ 2.069,40 (Stcrt. 2023, 28170) → € 26.819,424 (Dienst: € 26.819, rounded *down*); 1,879% / 4,256% /
13,670% (in the Wzt text itself; Stb. 2022, 472, schema 2023–2040 with a one-off 2023 row 0,123% /
2,378% / 13,640%); € 140.213 / € 177.301 (Stcrt. 2023, 29706, art. 2a); woonlandfactoren Stcrt. 2023,
29907 (BE 0,7663, DE 0,9485). **2023:** € 1.889 (Stcrt. 2022, 32017); WML € 1.934,40 (Stb. 2022, 381, one-off +8,05% plus indexatie) → € 25.069,824
(Dienst: € 25.070, up); 0,123% / 2,378% / 13,640% (one-off 2023 row of Stb. 2022, 472; 2022 was 1,848% / 4,225% /
13,610%); € 127.582 / € 161.329 (Stcrt. 2022, 28997, art. 2a); woonlandfactoren Stcrt. 2022, 29339 **as rectified by
Stcrt. 2022, 32002** (Malta, Marokko, Montenegro, Noord-Macedonië were shifted one row in 29339; the leaflet has the
rectified figures; BE 0,7484, DE 0,8814). Awir 2023 € 33.748 / € 67.496, lid 6 € 5.432 (Stcrt. 2022, 32674). **2022:** € 1.749 (Stcrt. 2021, 47872); WML
€ 1.725,00 (Stcrt. 2021, 44177) → drempelinkomen € 22.356,00 exactly (Dienst: € 22.356; no rounding question); 1,848% / 4,225% /
13,610% (Stb. 2021, 574, schema 2022–2040 whose 2023 and 2024 rows were superseded by Stb. 2022, 472; 2021 was 1,915% / 4,225% /
13,610% per its table 1); € 120.020 / € 151.767 (Stcrt. 2021, 47692, from € 118.479 / € 149.819); woonlandfactoren Stcrt. 2021,
46565 **as corrected by Stcrt. 2021, 47687 art. I onder E** (Liechtenstein 0,9229 → 0,9172; BE 0,7369, DE 0,8138, NO 1,3213,
IS 1,3388 — old indexation method). Awir 2022 € 31.747 / € 63.494, lid 6 € 5.110 (Stcrt. 2021, 48308, from € 31.340 / € 62.680 /
€ 5.044). **2021:** € 1.705 (Stcrt. 2020, 62033; 2020 € 1.642, BWBR0042806); WML € 1.684,80 (Stcrt. 2020, 53099) → drempelinkomen
€ 21.835,008; **1,915% / 4,225% / 13,580%** (Stb. 2020, 452 set 1,885% / 4,195% / 13,580%, then Stb. 2020, 543 +0,030 on the
drempel percentages; the afbouw is 13,580%, *not* 13,610% as the 10-12 run and `CHANGES.md` had it — corrected 10-13; 2020 was
1,830% / 4,140% / 13,550%); vermogen € 118.479 / € 149.819 (above); woonlandfactoren Stcrt. 2020, 53972 (= consolidated bijlage 4
01-01-2021, 39 lines, no correction found; BE 0,7347, DE 0,8134, NO 1,3064, IS 1,3453; the bijlage still says Macedonië). Awir 2021
€ 31.340 / € 62.680 (Stb. 2020, 546 art. III, the first rendementsgrondslag year), lid 6 € 5.044 (Stcrt. 2020, 64406). Ceilings
2021 from the text: € 31.138 / € 39.979, exactly what the search index quotes from the Dienst's 2021 leaflet. **2020:** € 1.642
(Stcrt. 2019, 64399; € 1.415 + € 227); WML € 1.653,60 (Stcrt. 2019, 56680) → drempelinkomen € 21.430,656; 1,830% / 4,140% / 13,550%
(Stb. 2019, 386: normpercentages −0,19 point structurally from 2020; tabel 1 gives 2019 as 2,005% / 4,315% / 13,520%, text of 2019
not read); vermogensgrens € 85.767 on the grondslag sparen en beleggen (Stcrt. 2019, 61842, from € 84.416); woonlandfactoren Stcrt.
2019, 58198 (= consolidated bijlage 4 01-01-2020; BE 0,7303, DE 0,8041, NO 1,3678, IS 1,1637; art. II of the same regeling reset
Duitsland 2017/2018/2019 retroactively to 0,7532 / 0,8595 / 0,7827 "zonder effect op de zorgtoeslag"). Awir 2020 art. 7 lid 3 had
no amount (any box 3 voordeel → none), lid 6 € 4.964 (Stcrt. 2019, 66707 per the informatie page, not read). Wzt versions 2020:
01-01 and 19-03 (Stb. 2020, 67 art. XVIII, spelling only). Ceilings 2020 from the text: € 30.480 / € 38.945 (at € 30.481 the text
gives € 23 → none; a drempelinkomen rounded to € 21.431 would give € 24 — pre-recorded in `zt-2020-syn-009` as a #1 candidate).
**2019:** € 1.609 (Stcrt. 2018, 66728; € 1.385 + € 224); WML € 1.615,80 (Stcrt. 2018, 59237) → drempelinkomen € 20.940,768;
2,005% / 4,315% / 13,520% (Stb. 2018, 431: the normpercentage met partner −0,45 point structurally from 2019, 4,765% → 4,315%; tabel 1
gives 2018 as 1,990% / 4,750% / 13,490%, text of 2018 not read; the besluit's 2020 row 2,020% / 4,330% / 13,550% and 2021 row were
replaced before taking effect — the fifth pre-effect revision found); vermogensgrens € 84.416 on the grondslag (Stcrt. 2018, 61205, from
€ 83.415, 1,2%), heffingvrij vermogen € 30.360 → effective € 114.776 / € 145.136; woonlandfactoren Stcrt. 2018, 60576 (= bijlage 4
01-01-2019 t/m 15-01-2019, 39 lines; BE 0,7392, DE 0,8701 as published — reset to 0,7827 retroactively for the bijdrage only by Stcrt.
2019, 58198 art. II; NO 1,3729 the only factor above 1; IS 0,9802; the toelichting prints base year, base factor and index per country).
Awir 2019 art. 7 lid 3 no amount, lid 6 € 4.885 (Stcrt. 2018, 69665 per the informatie page, not read); art. 14 lid 4–5 same text. Wzt 2019:
one version all year; instruments Stcrt. 2018, 61205, Stb. 2018, 431, Stb. 2018, 356 (Verzamelwet VWS 2018 art. XVI onder A sub 2 only, per
Stb. 2018, 454: art. 1 onder c 'artikel 24, eerste of tweede lid'; the art. 68 Zvw insert and art. 5 lid 3–4 not in force then). Ceilings
2019 from the text: € 29.562 / € 37.885 (a drempelinkomen rounded to € 20.941 shifts neither). Leaflet 2019: `z90`–`z94` all 404, no
search hit. Leaflet 2022 `tg0821z21fd` (`z22` is a 404); ceilings 2022 € 31.998 / € 40.944 (= the text's). Awir art. 7 lid 3: 2024 € 36.952 / € 73.904, 2025 € 37.395 / € 74.790
(Stcrt. 2024, 38492), 2026 € 38.479 / € 76.958 (Stcrt. 2025, 40487). Awir art. 14 lid 4–5 identical
2024–2026; wetstechnische informatie lists no amendment. Published ceilings: 2021 € 31.138 / € 39.979 (index quote only); 2022 € 31.998 / € 40.944; 2023 € 38.520 / € 48.224; 2024 € 37.496 / € 47.368;
2025 € 39.719 / € 50.206; 2026 € 40.857 / € 51.142. 2027 percentages already in Stb. 2025, 412.

**Cases.** 195 (173 `published`, 20 `synthetic`, 2 `ruling`), none verified. **2019: `zt-2019-rul-001/-002`** — ABRvS 10-05-2023,
ECLI:NL:RVS:2023:1809 (zaaknr. 202202303/1/A2): a couple's definitieve berekening € 1.367 at gezamenlijk toetsingsinkomen € 27.946
(r.o. 2) and voorschot € 2.314 at € 13.314 (r.o. 1); both reproduced to the euro from the text; the ruling says nothing of vermogen
or of the partner's insurance (the amount proves 2 × standaardpremie); they do not discriminate #1. Become `verified` when the owner
confirms the inputs (Ask 9) — the first possible verified cases. 2019: syn-016..019 (ceilings both sides). 2020: syn-008..015 (ceilings both sides; lid 5 oud; vermogenstoets
both sides single and couple). 2021: syn-004..007 (the two ceilings, both sides, computed from
the text; become `published` when the leaflet's figures arrive, Ask 8). 2022: pub-001..003 (leaflet 2022 examples), pub-004..007
(ceilings, both sides). 2023: pub-001..003 (leaflet 2023 examples), pub-004..007 (ceilings, both sides). 2024: pub-001..003,
pub-004..007. 2025: pub-001..005, tab-zp-28000..39500 (24 rows), tab-mp-28000..50000 (45), the two "en meer" rows. 2026:
pub-001..012, syn-001..004 (004 = Norway), tab-zp (20 rows), tab-mp (42), two "en meer" rows. Last report: 195 run, 176 pass,
19 fail, 0 blocking; browser/Python parity 195/195. Every failure is logged: ten are #1 (cents in seven leaflet examples incl.
2023-pub-002; outcome in 2026-pub-010 and tab-mp-44500), 2023-pub-001/-003 and 2022-pub-002/-003 are #7 (cents), 2026-pub-008 is
#4, syn-001 is #3, the two 2025 "en meer" rows are #6.

**Discrepancies.** #1 `government` (drempelinkomen rounding; up 2023/2025/2026, down 2024, no rounding needed 2022; the
owner's practice statement of 2026-10-09 recorded 10-10 as evidence that explains none of it; Ask 5 closed). #2 `encoding`
(fixed 10-08). #3 `open` (leaflet step 5 onder c vs art. 4a lid 4 for a *verzekerde* aanvrager; the Dienst's method was one
method 2022–2024, changed by 2026; lid 3 new since 06-11-2024). #4 `withdrawn` (2026 leaflet misprint). #5 `encoding` (fixed
10-09: monthly practice = floor(whole-euro year / 12), confirmed by 130 table rows 2025/2026). #6 `withdrawn` (2025 "en meer"
rows). #7 `government` (printed intermediate cents: 2022 mixed, 2023 truncated, 2024–2026 rounded; no whole-euro amount
affected; the 2022 leaflet also misprints a subtotal, € 1.602,13 for € 1.902,13). #8 `encoding` (2026-10-12: the 2022 leaflet rounds
the month arithmetically, € 44,89 → € 45; fixed by the year parameter `maand_afronding_praktijk`; rests on one example — a 2022
voorschot table or beschikking would settle it).

**Asks.** Done: 1, 2, 3, 5, 7 (2026-10-11, recorded 10-12). Open: **4** mailbox (blocks Phase 2 only); **6** Checkpoint 1,
narrowed 10-12 (see Phase); **9** (10-18) the owner compares rul-001/-002 with the ruling and writes a dated line in `INBOX.md`; then set
`verified: true` on both, credit him by name in the case files and on the site's contributors list, rerun `build.py check` (they become
blocking), and record it as the first verification; **10** (10-18) the owner reads the routine's run history for 10-15/16/17 and pastes
the status; **8** (10-13, not blocking; 10-14 extended to the 2020 leaflet, which is nowhere — `tg0821z01fd`/`z02fd`
404, no search hit, no archive link) the owner opens the Wayback copy of the 2021 leaflet
(`web.archive.org/web/20240718180758/…tg0821z11fd.pdf`) and pastes its three rekenvoorbeelden and stap-2 grenzen into `INBOX.md`;
when they arrive: `published` cases 2021, the 2021 monthly rounding (#5/#8) and drempelinkomen rounding (#1), the stap-5 formulas (#3),
and syn-004..007 superseded or re-sourced. Disputes 0, reviews 0, motions 0. `PLAN.md` unchanged (last rewritten 2026-10-05); no checkpoint
missed. `BOARD.md` has three owner decisions (layout B 10-09; independent record if a government rules-as-code appears;
internal matters never on the website 10-11, transcribed into `DESIGN.md` 10-12).

**Open items for the next runs, in order.**
1. Handle whatever arrives in `INBOX.md`: Ask 9 (verification of the two ruling cases, see Asks), Ask 10 (missing runs), Ask 6 (Checkpoint 1): each rekenhulp pair becomes a `published` case with
   source "rekenhulp toeslagen.nl, retrieved <date> by the owner"; every difference a discrepancy. If the owner decides the
   operator may run the comparison itself: the public proefberekening on toeslagen.nl in headless Chromium, twenty situations
   varying year, partner, income, vermogen, partner not verzekerd; log each pair as a case. A real beschikking of the owner's
   own would be `official` and, confirmed by him, the first verifiable case.
2. 2018 as the next year of history (`law/SOURCES.md` open item 4). Known: percentages 1,990% / 4,750% / 13,490% per tabel 1 of
   Stb. 2018, 431 (read the Wzt text of 01-01-2018 and the besluit for 2018 before writing them — likely Stb. 2017, 436 per the Wzt
   informatie page's chain); vermogensgrens € 83.415 (Stcrt. 2018, 61205 "old"); lid 5 oud and the grondslag-basis both apply (parameters
   as 2019; heffingvrij vermogen 2018 from Wet IB 2001 art. 5.5 of 01-01-2018); Germany 2018 published factor to be read in the 2018
   regeling (reset to 0,8595 retroactively, bijdrage only); standaardpremie 2018 BWBR0040244 (fetch with date 2018-01-01); WML January
   2018 regeling; Awir 2018 lid 6; the Wzt's version dates in 2018; leaflet try `tg0821z81fd`. ~20 fetches; no new rule version expected.
3. More `ruling` cases: the one hit of 10-18 came from a general web search; a deliberate pass — web searches for "zorgtoeslag"
   "definitief berekend en vastgesteld op" "toetsingsinkomen" per year, then the full text via `data.rechtspraak.nl/uitspraken/content?id=<ECLI>`
   — could give each encoded year a ruling case; rechtspraak.nl's own search needs JavaScript, raadvanstate.nl answers 403 to curl.
4. `law/SOURCES.md` open items 1–3, 5 and 6 (monthly rounding basis, now also the 2022→2023 change; verdragsgerechtigde definition;
   Awir 2024 second amount in the consolidated text; the 2021 and 2020 leaflets via the owner, Ask 8).
5. Nibud / Rijksoverheid worked examples as `published` cases.
6. Checker polish inside `DESIGN.md` §8 (serif for the law, type scale, print stylesheet); an accessibility pass by reading.
7. Quarterly reflection ask on the last run of Q4 2026 (late December).

**Lessons.** A `cd dir && cmd &` in one Bash line backgrounds the whole chain, so the `cd` does not hold for the next line: use absolute
paths everywhere (bit again 10-18). Case law is the cheapest route to a Dienst outcome for a year without a leaflet: a ruling quotes the
beschikking's amounts, is already anonymised, and `data.rechtspraak.nl/uitspraken/content?id=<ECLI>` returns the full text to curl.
A number in prose is computed or read, never recalled: on 10-14 a July-2019 WML amount and a case note's "€ 1.912,75"
(really € 1.913,13) were both caught only on re-reading the diff. The `versie` string of a parameter file is printed in every
margin note of the result page: keep it one short clause and put remarks in `versie_opmerking`. The informatie page of the
Regeling zorgverzekering (`/BWBR0018715/<date>/0/informatie`) is a 404 for every date tried; fetch the whole regeling (46 MB) and cut
from the last `Bijlage 4`. Wet IB 2001 article URLs (`/BWBR0011353/<date>/0/Hoofdstuk5/Afdeling5.1/Artikel5.5`) return the whole act
(4 MB); grep `^ Artikel 5\.5\. `. Articles in the stripped wetten.overheid.nl text are headed ` Artikel N ` (Wzt) or ` Artikel N. Title`
(Awir, Wet IB) with a leading space — grep with `^ *Artikel 7\b`, and the body starts seven lines after the heading. The checker's
form hints are law too: read each hint against the article it serves when a year changes the article's basis (10-14 fix).
A sentence in a nota van toelichting ("de afbouwpercentages veranderen niet") is about what *that* besluit
changes, never evidence of a year's value: read the year's consolidated text before writing an "old" column (the 2021 afbouw
was 13,580%, not 13,610%; wrong in `CHANGES.md` for a day). Never put an unread number in an "old" column — write "not yet
read". The Dienst's leaflets disappear from `download.belastingdienst.nl` (2021 is a 404 on all edition digits tried);
`archive.org/wayback/available` works and reports snapshots, but fetching `web.archive.org` content is blocked (403 via curl,
refused by WebFetch) — the owner can open it in a browser (Ask 8). A search engine's description of a vanished PDF is a hint to
check the encoding against, never a source to store a case from. The Wzt art. 4 informatie page lists every yearly
standaardpremie regeling with its BWBR id (`/BWBR0018451/<date>/0/Artikel4/informatie`): the cheap route to any year's
standaardpremie. The regeling-wide informatie page's `Datum inwerkingtreding: 01-01-<year>` entries list *all* instruments behind
a version (2021: four for the Wzt, three for the Awir); read each — one of them (Stb. 2020, 543) changed numbers another
(Stb. 2020, 452) had set weeks earlier. The box 3 reform of 2021 explains the Wzt's vermogen amounts to the euro (old grens +
heffingvrij vermogen per person); keep that derivation, it will recur when 2020 is encoded. `curl --http1.1` with a browser User-Agent works for wetten.overheid.nl and
officielebekendmakingen.nl; strip tags with a small script and grep. Article histories:
`https://wetten.overheid.nl/<BWBR>/<date>/0/Artikel<nr>/informatie` (works for `Artikel2a`, `Artikel14`;
not for bijlagen or dotted numbers like 6.3.1); the whole regeling: `/<BWBR>/<date>/0/informatie`
(Ontstaansbron / Inwerkingtredingsbron per version). A regeling's own BWBR informatie page gives its
Stcrt. number. The art. X info page lists the gedelegeerde regelingen by name with BWBR links in the
HTML. Diff two consolidated versions to find what an amendment changed. Leaflets follow
`berekening_zorgtoeslag_tg0821z<Y><E>fd.pdf`, Y = last digit of the year, E = edition digit (2024 `z41`, 2025 `z51`,
2026 `z61`, 2022 `z21`, **2023 `z32`** — found by web search on 2026-10-11 after `z31` was a 404; try the next edition
digit before declaring a leaflet missing); read with `pdftotext -layout`; check `file` says PDF before parsing (a 404
page comes back as HTML with status 200-looking size). Regeling zorgverzekering (BWBR0018715) is a 25 MB
page; bijlage 4 near the end. Uitvoeringsregeling Awir BWBR0019237; Uitvoeringsbesluit Awir BWBR0018707;
standaardpremie 2024 BWBR0049005. WebSearch restricted to `zoek.officielebekendmakingen.nl` finds
Stcrt. numbers that open-web searches miss. `importlib` loading of `rules.py` needs
`sys.modules[spec.name] = mod` before `exec_module`. **YAML 1.1 reads bare `NO`, `YES`, `ON`, `OFF`,
`Y`, `N` as booleans: quote country codes as keys and values (`"NO"`), in parameter files and in cases.**
Keep the whole `publicatie` string inside one pair of quotes. Build scripts with asserts: write them to
the scratchpad, not a heredoc, so a failed assert can be fixed and rerun. Generate table cases with a
script, never by hand. The Dienst's table rows are reproduced by floor(tegemoetkoming / 12) at the row's
upper income; the leaflets cannot discriminate rounding models, the tables can. JavaScript block comments
end at the first `*/`, so never write `law/*/x` inside one. Headless Chromium is at
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`; `--headless=new --no-sandbox
--allow-file-access-from-files --virtual-time-budget=3000 --dump-dom file://…` on a scratch copy of the
page with an appended auto-fill script renders the computed result for checking (copy the two `.js` files
next to it). The browser port uses BigInt with ten decimals; any change to `rules.py` must be mirrored
in `site/zorgtoeslag-regels.js`, and `build.py check` will refuse the commit if it is not.
The wetstechnische-informatie page of a whole regeling (`/<BWBR>/<date>/0/informatie`) lists every version with its
Ontstaansbron: grep `Datum inwerkingtreding: 01-01-<year>` with `-A3` to get the instrument that created that year's
text (used 2026-10-11 for Stcrt. 2022, 28997 and the Awir's Stcrt. 2022, 32674 / Stcrt. 2023, 32714). A Staatscourant
table as published can be wrong and rectified before it takes effect (Stcrt. 2022, 29339 → 32002): when a leaflet and a
regeling disagree, search `rectificatie` before logging a discrepancy. The Dienst's 2023 leaflet truncates cents; the
2024–2026 leaflets round — read a leaflet's arithmetic before assuming the rounding of the series. Wayback's CDX API is
blocked by the egress policy; `archive.org/wayback/available` works but had no snapshot. Parallel `curl` jobs in one
Bash call need the directory created first in a separate command (a `mkdir -p … && cd …` chain raced on 2026-10-11).
A woonlandfactor table has now been corrected before taking effect twice (2022 Liechtenstein, 2023 four countries): always
compare the Stcrt. table with the Dienst's leaflet *and* the consolidated bijlage 4, and search `rectificatie`/`corrigeren` for
the year before logging a discrepancy. The Dienst's leaflets differ in arithmetic per edition (2022 mixed, 2023 truncated,
2024+ rounded) and in monthly rounding (2022 up, 2023+ down): read every example's cents before assuming the series. The
Dienst's leaflet edition digit: 2022 `z21`, 2023 `z32`, 2024 `z41`, 2025 `z51`, 2026 `z61`. `pdftotext -layout` drops the right
column of a two-column table; `-raw` keeps the names but not the numbers — take the numbers from the Staatscourant text.
