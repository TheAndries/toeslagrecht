# memory.md

Carried state for the operator. Capped at 8,000 words. Rewritten each run.

## State as of 2026-10-27 (eighteenth scheduled run; no run left a trace on 10-15, 10-16, 10-17 — Ask 10; 10-18 through 10-26 ran normally; an owner-initiated design session on 10-19/10-20 merged branch `design`)

**Identity.** Name `toeslagrecht`, domain `toeslagrecht.nl` (owner, 2026-10-06). Repository
`https://github.com/TheAndries/toeslagrecht`, branch `main`. Routine
`trig_012xyD5r5rxFDCjfHbZ58Kib`, `56 5 * * *` UTC, model `claude-fable-5-1`; full config in
`ROUTINE.md`. Spend 0.59 EUR of the 200 EUR Q4 2026 ceiling (`LEDGER.md`). The checkout
arrives as a detached HEAD at `origin/main` (on 10-20 it arrived on `main` itself; 10-22 detached again): `git fetch origin main && git checkout -B main origin/main` before committing — on 2026-10-11 the local `origin/main`
ref was stale (2026-10-06) while HEAD was at the 2026-10-10 commit; the fetch is not optional. **Read `git log -3 --stat` at the start of every
run**: the owner can commit files directly (10-19: `toeslagrecht-mockup-a.html`, "Add files via upload"), and such a commit is an owner note
that never reaches `INBOX.md`.

**Phase.** 0 complete. Phase 1 complete except **Checkpoint 1** (Ask 6): the owner wrote "calculator is tested" on
2026-10-11 without pairs; the ask was narrowed on 2026-10-12 (paste the situations tested, any number, plus the
worried-relative sentence in `BOARD.md`; or an owner decision letting the operator run the comparison against the public
proefberekening itself). Huurtoeslag does not start before that; history continues (2024 on 10-09, 2023 on 10-11, 2022 on 10-12, 2021 on 10-13, 2020 on 10-14, 2019 on 10-18, 2018 on 10-19, 2017 on 10-21, 2016 on 10-22, 2015 on 10-23, 2014 on 10-24, 2013 on 10-25). **History is paused at 2013** (operator's sequencing decision, `CHANGELOG.md` 10-25): 2013 is the first year of the vermogenstoets (Stb. 2012, 204) and the first year in which Wzt art. 1 onder f defines the drempelinkomen as 108% × 12 × the WML alone (Wul, Stb. 2011, 288, art. XXIV onder A); 2012 and earlier need a new rule version with the Wfsv werknemersaandeel and the Zvw art. 46 vergoeding — Phase 4 (`PLAN.md`), details in `law/SOURCES.md` open item 4.
**The design is done (owner session 10-19/10-20, Asks 11, 12, 13 done):** direction A, *het formulier* (owner decisions in `BOARD.md`; design is the owner's alone, the board votes only on functionality; transcribed into `DESIGN.md` 'Kleur, ruimte en pagina's'). The site is rendered by `tools/render.py` (called by `build.py build`): the front page is the form, the result in layout B, one page per rule (`/dossier/<toeslag>/<id>/`), per case (`/dossier/voorbeelden/<id>/`), per year (`/wet/<jaar>/`), per discrepancy (`/verschillen/<n>/`), plus `/wet/wijzigingen/`, `/wet/bronnen/`, `/betwisten/`, `/insturen/`, `/over/`; the year list derives from the parameter files (a new `parameters/<jaar>.yaml` adds the year everywhere); tokens in `site/static/tokens.css`; fonts self-hosted; the old `tools/zorgtoeslag.template.html` is gone; see `site/README.md`. Verification tools: `tools/verify.py`, `formtest.py`, `shoot.py`, `contrast.py`. A build touches every rendered page (dated footer), so a commit carries ~260 site files.
**The site is live** at `https://toeslagrecht.nl/` (Ask 7 done 2026-10-11): `.github/workflows/pages.yml` uploads `site/` on every
push to `main` touching it and removes `site/layouts/` first (owner decision 2026-10-11: internal matters never on the website,
transcribed into `DESIGN.md` 2026-10-12); `site/CNAME` exists but GitHub ignores it for workflow deployments. After a push that
touches `site/`, the deploy takes a minute or two; check `https://toeslagrecht.nl/layouts/b.html` is 404 if in doubt.
- Pipeline: `python3 tools/build.py check|build|all` (stdlib + PyYAML; node for the parity step). `check`
  runs every case through `rules.py` *and* through `site/zorgtoeslag-regels.js` (via `tools/parity.js`),
  writes `law/zorgtoeslag/tests/report.md`, exit 1 if a *verified* case fails or the two encodings differ.
  `build` writes `site/zorgtoeslag-parameters.js` (all yaml + rule anchors) and renders the site (`tools/render.py`).
- **The checker** (the front page; `zorgtoeslag.html` serves the same): years 2014–2026, partner, incomes, partner verzekerd, vermogen
  (the rendementsgrondslag, full amount), verdragsgerechtigd + woonland, months, and for years with `art2_lid5_oud_aanwezig` the
  partner's verzekeringsplicht. Nothing sent or stored.
- Encoded (all `draft`): zorgtoeslag **2026 back to 2013** — `zt-2026-art1-1f`, `-art2-1`, `-art2-2`,
  `-art2-4`, `-art2-5`, `-art3-1`, `-art4`, `-art4a`, and `zt-2020-art2-5oud` (Wzt art. 2 lid 5 t/m 2020: no zorgtoeslag if the
  partner did not insure; input `partner_verzekeringsplicht_niet_nagekomen`; active where the year file has
  `art2_lid5_oud_aanwezig: true` — 2013 through 2020); Awir `awir-2026-art14-4`, `-art14-5`;
  `awir-2026-art7-1`, `-art8-1`, `-art3`, `-art5` as inputs/documentation. Outputs: `aanspraak_jaar`
  (unrounded), `tegemoetkoming` (Awir art. 14), `aanspraak_maand` (unrounded /12),
  `aanspraak_maand_afgerond_praktijk` (= floor(tegemoetkoming / 12), the Dienst's table practice, not law; **2022: round half up**,
  per `maand_afronding_praktijk: rekenkundig` in `parameters/2022.yaml`, one leaflet example, #8).
- Year-dependent parameters the encodings read: `artikel_vermogenstoets`, `artikel_woonlandfactor`, `artikel_maandbepaling` (2018–2020:
  lid 6), `artikel_wml_onderdeel` (a t/m 2023), `art4a_lid3_aanwezig`, `art2_lid5_oud_aanwezig` + `art2_lid5_oud`, `vermogenstoets_basis`
  (2017–2020: `grondslag_sparen_en_beleggen` — the encoding deducts `heffingvrij_vermogen` (2020 € 30.846, 2019 € 30.360, 2018 € 30.000,
  2017 € 25.000, 2016 € 24.437, 2015 € 21.330, 2014 € 21.139 — frozen at the 2013 value by Belastingplan 2014 art. XXXIV; 2013 € 21.139, frozen at the 2012 value by Stb. 2012, 321 art. XVIII; Wet IB 2001 art. 5.5) once, or twice with a whole-year partner, art. 5.2 lid 2, then compares with € 85.767 / € 84.416 / € 83.415 / € 82.752 / € 82.504 / € 82.093 / € 81.360 / € 80.000), 2013–2020,
  `maand_afronding_praktijk` (2022 rekenkundig). 2019 through 2014 needed no code change: the 2020 switches cover them.
- **A part of the year, encoded 10-20** (`zt-2026-art2-5`, Wzt art. 2 lid 5 "voor iedere kalendermaand afzonderlijk bepaald", verbatim
  2023 and 2026 identical; no regeling under lid 6): input `maanden_aanspraak` (1–12, default 12) in `rules.py`, the JS and the form;
  `aanspraak_periode` = unrounded year amount × m/12, then Awir art. 14 lid 4–5 → `tegemoetkoming`; `tegemoetkoming_jaar` (rounded whole
  year) feeds the monthly practice figure, so whole-year cases are untouched; `tegemoetkoming_praktijk_deeljaar` = the Dienst's method
  (round the year first, × m/12, round again; ECLI:NL:RBMNE:2026:4437) shown beside the text's amount when they differ (#10). Which month
  counts is input. Awir art. 5 changes within the year (two situations in one year) still not encoded.
- **Explained failures.** A case may carry `discrepantie: <n>`; `build.py check` reads entry n's status from `DISCREPANCIES.md` and reports a
  failure explained by a `government` or `law` entry as "FAIL — explained", not blocking, even when verified (tested 10-20 by toggling
  rul-002). `zt-2023-rul-002` carries `discrepantie: 10`.
- Article numbering: 2018 through 2024 texts (t/m 05-11-2024) have vermogenstoets in art. 2a and woonlandfactor in
  art. 3; Stb. 2024, 291 (in force 06-11-2024, Stb. 2024, 322) renumbered them to art. 3 / art. 4a and
  inserted art. 4a lid 3 (verzekerde with verdragsgerechtigde partner). For 2022–2024 that case returns
  `undetermined`. The Wzt never had an art. 3a (the one Stcrt. 2025, 38110 names). Wzt art. 1 lid 1 onder f
  referred to WML art. 8 lid 1 onderdeel **a** through 2023 (2018 too) and to onderdeel b since 01-01-2024 (Wet invoering
  minimumuurloon, Stb. 2023, 168, art. XXXI); `parameters/2018.yaml` through `2023.yaml` carry `artikel_wml_onderdeel: a`, which
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
search hit. **2018:** € 1.546 (Stcrt. 2017, 68107; € 1.312 + € 234); WML € 1.578,00 (Stcrt. 2017, 58642) → drempelinkomen € 20.450,88;
1,990% / 4,750% / 13,490% (Stb. 2017, 436: normpercentages −0,33 / −0,32 point structurally from 2018, afbouw on its schema; tabel 1
gives 2017 as 2,305% / 5,055% / 13,460%, text of 2017 not read; its 2019 row 2,005% / 4,765% / 13,520% was replaced by Stb. 2018, 431 —
the sixth pre-effect revision); vermogensgrens € 83.415 on the grondslag (Stcrt. 2017, 65628, from € 82.752, 0,8%; toelichting: 'boven
het heffingvrije vermogen plus € 83.415'), heffingvrij vermogen € 30.000 → effective € 113.415 / € 143.415; woonlandfactoren Stcrt.
2017, 66088 (= bijlage 4 01-01-2018 t/m 15-01-2018, 39 lines, old method: DK 1,0830, IS 1,0826, LI 1,1866, NO 1,4015 above 1; BE 0,7193 —
confirmed in practice by ECLI:NL:RVS:2019:1346; DE 0,9559 as published, reset to 0,8595 retroactively for the bijdrage by Stcrt. 2019,
58198 art. II; art. II of 66088 itself reset Zweden 2017 to 0,8263 retroactively, for the bijdrage only — read 10-21). Awir 2018 art. 7
lid 3 no amount, lid 6 € 4.827 (Stcrt. 2017, 70975 art. VI, read); art. 14 lid 4–5 same text. Wzt 2018: one version; art. 1 onder c still
'artikel 24, eerste lid'. Ceilings 2018 from the text: € 28.720 / € 35.996 — **the first year where the rounding of the drempelinkomen
decides them** (€ 20.450 → € 28.719 / € 35.995; € 20.451 → unchanged): a Dienst figure for 2018 would settle #1 for 2018 (syn-020..023).
Leaflet 2018: `z80`–`z83` all 404. **2017:** € 1.530 (Stcrt. 2016, 64077; € 1.290 + € 240); WML € 1.551,60 (Stcrt. 2016, 60172) → drempelinkomen € 20.108,736;
2,305% / 5,055% / 13,460% (Stb. 2016, 469: normpercentages −0,35 / −0,70 point structurally from 2017, the 2015–2016 temporary raise made permanent; its 2018 row
2,320% / 5,070% / 13,490% replaced by Stb. 2017, 436 — the seventh pre-effect revision; 2016 text read: 2,380% / 5,220% / 13,430%); vermogensgrens € 82.752 on the grondslag
(Stcrt. 2016, 60569, from € 82.504, 0,3%), heffingvrij vermogen € 25.000 → effective € 107.752 / € 132.752; woonlandfactoren Stcrt. 2016, 61016 (= bijlage 4 01-01-2017,
39 lines, old method, each line with berekeningsjaar and zorgkosten; NO 1,5288 and SE 1,0948 above 1; BE 0,7029, DE 0,8372 as published — DE reset to 0,7532 for the bijdrage
by Stcrt. 2019, 58198 art. II; **SE reset to 0,8263 by Stcrt. 2017, 66088 art. II for the art. 6.3.1 Rzv verhoudingsgetal only, toelichting: 'geen effect op de hoogte van de
zorgtoeslag'** — so the zorgtoeslag keeps the published figure, settled 10-21). Awir 2017 lid 6 € 4.788 (Stcrt. 2016, 70381 art. VII, read); art. 7 and 14 identical in the
versions 01-01 and 01-10-2017. Wzt 2017: two versions (01-07-2017, Stb. 2017, 146: art. 1 onder e eigen risico, art. 4 22 days — no rule); Stb. 2016, 173 changed art. 5 lid 2
(CAK for Zorginstituut). Ceilings 2017 from the text: € 27.857 / € 35.116; a drempelinkomen rounded down (€ 20.108) moves both one euro down, € 20.109 moves neither
(syn-024..027). Max 2017 € 1.066 / € 2.044 (€ 2.043,50 rounds up). Leaflet 2017: `z71`, `z72` 404. **2016–2013 (encoded 10-22 through 10-25; every figure with its instrument in `parameters/<jaar>.yaml`, `awir/parameters/<jaar>.yaml` and `CHANGES.md`; the leaflets of all four years not found, edition digits tried in `SOURCES.md` §3).** 2016: € 1.468 (Stcrt. 2015, 43794); WML € 1.524,60 → drempelinkomen € 19.758,816; 2,380% / 5,220% / 13,430% (Stb. 2015, 472, −0,26 / −0,52 for 2016 only); grens € 82.504 + hv € 24.437 → € 106.941 / € 131.378; factoren Stcrt. 2015, 40860 (BE 0,7029, DE 0,7407, SE 0,8219, NO 1,5288); ceilings € 27.013 / € 33.765 (rounding down moves both, syn-028..031); max € 998 / € 1.905, both quoted in rulings; `z62` is the 2026 second edition (corrects #4). 2015: € 1.408 (Stcrt. 2014, 35190); WML € 1.501,80 → € 19.463,328; 2,395% / 5,265% / 13,400% (Stb. 2014, 488: the afbouw jump +3,877 point structurally, the abandoned huishoudentoeslag; tabel 1 gives 2014–2030 by maatregel); grens € 82.093 + hv € 21.330 → € 103.423 / € 124.753; factoren Stcrt. 2014, 34233 (BE 0,6715, DE 0,7407, SE 0,7573, FR 0,7198, NO 1,5567; art. II reset Frankrijk 2012 to 0,7659 bijdrage-only, 'geen effect op de hoogte van de zorgtoeslag'); ceilings € 26.316 / € 32.655 (rounding up moves the zonder-partner one, syn-032..035); max € 942 / € 1.791 (€ 942 in ECLI:NL:RVS:2018:2406, granted without the factor). 2014: € 1.329 (Stcrt. 2013, 35060, first 'inclusief collectieve contracten', a stated beleidswijziging); WML € 1.485,60 (Stcrt. 2013, 31007 corrected by 32425 for the € 0,60 rounding) → € 19.253,376; 2,410% / 5,210% / 9,118% (Stb. 2012, 627, decomposed: Wul +0,25, eigen risico −0,60 / −1,20 / +0,923, koopkracht −0,60 / −0,40 / +1,70); grens € 81.360 + hv € 21.139 (frozen, Belastingplan 2014 art. XXXIV per Stcrt. 2013, 35144) → € 102.499 / € 123.638; factoren Stcrt. 2013, 33704 (BE 0,6715, DE 0,7078, SE 0,7354, NO 1,3909); three Wzt versions (01-04 Zorginstituut, 16-07 Stb. 2014, 259 art. XV retroactive), no rule changed; ceilings € 28.482 / € 37.145 (rounding moves neither, syn-036..039); max € 865 / € 1.655. 2013: € 1.478 (Stcrt. 2012, 25514, collectiviteitskortingen not counted); WML € 1.469,40 (Stcrt. 2012, 21293) → € 19.043,424; 2,195% / 4,695% / 8,713% (Stb. 2012, 627 first row; 2012: 2,930% / 5,530% / 5,435%); art. 2a € 80.000 new (Stb. 2012, 204, in force Stb. 2012, 383, slotvolzin Stb. 2012, 669) + hv € 21.139 (frozen, Stb. 2012, 321 art. XVIII) → € 101.139 / € 122.278; factoren Stcrt. 2012, 25177 (BE 0,6760, DE 0,7077, SE 0,6845, NO 1,2666, IE 1,0176); Awir art. 7 renumbered (Stb. 2012, 669 art. XVII), lid 6 € 4.627; ceilings € 30.939 / € 42.438, the highest of the series (syn-040..043); max € 1.060 / € 2.062, both in rulings. Leaflet 2022 `tg0821z21fd` (`z22` is a 404); ceilings 2022 € 31.998 / € 40.944 (= the text's). Awir art. 7 lid 3: 2024 € 36.952 / € 73.904, 2025 € 37.395 / € 74.790
(Stcrt. 2024, 38492), 2026 € 38.479 / € 76.958 (Stcrt. 2025, 40487). Awir art. 14 lid 4–5 identical
2024–2026; wetstechnische informatie lists no amendment. Published ceilings: 2021 € 31.138 / € 39.979 (index quote only); 2022 € 31.998 / € 40.944; 2023 € 38.520 / € 48.224; 2024 € 37.496 / € 47.368;
2025 € 39.719 / € 50.206; 2026 € 40.857 / € 51.142. 2027 percentages already in Stb. 2025, 412.

**Cases.** 260 (173 `published`, 44 `synthetic`, 43 `ruling`), none verified. Last report 10-27: 239 pass, 21 fail (the twenty of 10-20 plus `zt-2021-rul-006`, #11), 0 blocking; parity 260/260. **10-27, seventeen cases from nine rulings, found by the open-data sweep (item 4):** 2018's first two Dienst outcomes, `zt-2018-rul-001/-002` (ECLI:NL:RBMNE:2021:668: a couple's voorschot € 1.061 at € 28.304; nihil at € 37.125, with the Dienst's grens € 35.996 quoted — #1); `zt-2019-rul-005/-006` (ECLI:NL:RBGEL:2022:1259: € 1.093 at € 21.655, € 941 at € 22.779); `zt-2019-rul-007/-008`, `zt-2020-rul-005/-006` (ECLI:NL:RBNHO:2024:2245: nihil at € 36.428 / € 41.466, the maxima € 1.189 / € 1.250 at the corrected € 18.214 / € 20.733); `zt-2020-rul-007/-008` (ECLI:NL:RVS:2023:3323: € 1.250 at € 0; nihil on a grondslag of € 99.000, the second vermogenstoets outcome, input reconstructed € 99.000 + € 30.846); `zt-2020-rul-009` (ECLI:NL:RBROT:2021:10386: a couple's € 1.238 at € 21.980 + € 8.000); **2021's first six**, `zt-2021-rul-001/-002` (ECLI:NL:RBDHA:2023:19139 / ECLI:NL:RVS:2024:4751: € 1.287 at € 9.439; € 54 at € 30.913 — the first 2021 point on the afbouw line), `-003/-004` (ECLI:NL:RBZWB:2024:7431: € 1.287 at € 12.242; nihil at € 44.615), `-005/-006` (ECLI:NL:RBNNE:2024:632: € 487 at € 27.725, on 0,2 cent from the rounding edge and matching; **€ 1.289 at € 14.766, not reproduced — #11 `open`**, the text gives € 1.287 as four other 2021 voorschotten do). Years without a Dienst outcome now: 2024, 2025, 2026 (2024 candidates unread in `SOURCES.md` item 7). **10-26, eight cases from five rulings, all pass:** `zt-2016-rul-002`/`zt-2017-rul-001` (ECLI:NL:RVS:2023:1843: nihil at the aanvrager's verzamelinkomen € 35.088 / € 35.358 met partner, partner's income not stated, nihil either way), `zt-2017-rul-002` (ECLI:NL:RVS:2019:4069: January 2017 alone, `maanden_aanspraak: 1`, nihil at gezamenlijk € 35.410 — the ex-partner's whole-year income counts for the month, Awir art. 3 lid 2, 5, 7 lid 1, 8 lid 1), `zt-2019-rul-003`/`-004` (ECLI:NL:RVS:2022:2396: voorschot € 2.314 at € 5.063 — a partner proven by the amount — then definitief nihil at € 3.665 on a grondslag sparen en beleggen of € 106.904 > € 84.416, **the first vermogenstoets outcome in the record**; input `rendementsgrondslag: 167624` reconstructed as € 106.904 + 2 × € 30.360 because the encoding deducts the heffingvrij vermogen itself, said so in the case), `zt-2020-rul-004` (ECLI:NL:RVS:2024:5262: € 722 at € 25.328 zonder partner; € 722 + € 529 reclaimed ≠ the text's € 1.250 voorschot by € 1, unexplained), `zt-2022-rul-001`/`-002` (ECLI:NL:RVS:2024:4094: voorschot € 1.336 at geschat € 3.628, herzien nihil at € 47.000 — a UWV nabetaling counts in the year paid). §4 amounts without income: BE factor 0,7029 applied in 2016 and 2017 (ECLI:NL:RVS:2018:3524), 2014 € 865 after bezwaar (ECLI:NL:RVS:2023:2062). 2013: syn-040..043 (ceilings both sides), **`zt-2013-rul-001/-002`** (ECLI:NL:RVS:2017:662: vaststelling € 2.062 at gezamenlijk € 18.035 met partner — the text's maximum — and herziening € 493 at € 35.469 + € 1.576; the € 1.612 reclaimed is not € 2.062 − € 493, recorded unexplained), **`-003`/`-004`** (ECLI:NL:RVS:2016:3324: 'huur- en zorgtoeslag ... € 3.175 en € 1.060' at € 2.144 zonder partner — € 1.060 is the zorgtoeslag by order and arithmetic — and herziening nihil at € 33.683); all pass. ECLI:NL:RVS:2018:3859 (nihil then € 445, no income) in `SOURCES.md` §4. 2014: syn-036..039 (ceilings both sides), **`zt-2014-rul-001/-002`** (Hof Den Haag ECLI:NL:GHDHA:2017:1067, a belastingkamer case on the inkomensgegeven: voorschot € 865 at geschat € 17.333 and definitieve berekening € 814 at € 19.810, zonder partner — proven by the amounts; both pass), **`-003`** (ECLI:NL:RVS:2017:659: € 567 at € 22.518 zonder partner, rechtsgevolgen in stand; the voorschot € 865 only derivable from € 567 + € 298, not stored; passes), **`-004`** (Hof Amsterdam ECLI:NL:GHAMS:2019:2243: nihil at € 21.113 + € 19.000 met partner; the Hof later set the ex-partner's inkomensgegeven at € 9.860, herziening not in the ruling; passes). 2014 amounts without income in `SOURCES.md` §4: € 1.379 met partner (ECLI:NL:RVS:2018:2908), € 536 then nihil at € 31.166 without household (ECLI:NL:RVS:2018:334), nihil in Zweden (ECLI:NL:RVS:2018:3727). 2015: syn-032..035 (ceilings both sides), **`zt-2015-rul-001`** (ECLI:NL:RVS:2019:418: a definitieve berekening 2015 of € 663 at gezamenlijk € 27.886, the aanvrager's adult son on the same address as toeslagpartner; passes). 2016: syn-028..031 (ceilings both sides), **`zt-2016-rul-001`** (ECLI:NL:RVS:2022:2397: a couple's 2016 zorgtoeslag herzien to nihil at gezamenlijk € 45.149, after a definitieve berekening of € 1.905 at an unstated income; passes). 2017: syn-024..027 (ceilings both sides). **Ruling cases** (all under Ask 9, per ruling): 2020
`rul-001/-002` (ECLI:NL:RVS:2025:6164, zonder partner: € 1.163 at € 22.070; voorschot € 1.250 at € 12.313), `rul-003` (ECLI:NL:RVS:2024:4888,
met partner: € 1.665 at gezamenlijk € 26.834) — 2020's only Dienst outcomes, all reproduced; 2023 `rul-001` (ECLI:NL:RBMNE:2026:4437,
voorschot € 1.858 at € 11.204, passes), `rul-002/-003` (11 months: € 992 at € 30.763 — the encoding gives € 991, #10 `government`; € 1.703 at
€ 11.204 — passes since 10-20). 2018:
syn-020..023 (ceilings both sides). **2019: `zt-2019-rul-001/-002`** — ABRvS 10-05-2023,
ECLI:NL:RVS:2023:1809 (zaaknr. 202202303/1/A2): a couple's definitieve berekening € 1.367 at gezamenlijk toetsingsinkomen € 27.946
(r.o. 2) and voorschot € 2.314 at € 13.314 (r.o. 1); both reproduced to the euro from the text; the ruling says nothing of vermogen
or of the partner's insurance (the amount proves 2 × standaardpremie); they do not discriminate #1. Become `verified` when the owner
confirms the inputs (Ask 9) — the first possible verified cases. 2019: syn-016..019 (ceilings both sides). 2020: syn-008..015 (ceilings both sides; lid 5 oud; vermogenstoets
both sides single and couple). 2021: syn-004..007 (the two ceilings, both sides, computed from
the text; become `published` when the leaflet's figures arrive, Ask 8). 2022: pub-001..003 (leaflet 2022 examples), pub-004..007
(ceilings, both sides). 2023: pub-001..003 (leaflet 2023 examples), pub-004..007 (ceilings, both sides). 2024: pub-001..003,
pub-004..007. 2025: pub-001..005, tab-zp-28000..39500 (24 rows), tab-mp-28000..50000 (45), the two "en meer" rows. 2026:
pub-001..012, syn-001..004 (004 = Norway), tab-zp (20 rows), tab-mp (42), two "en meer" rows. Every failure is logged: 2023-rul-002 is #10, ten are #1 (cents in seven leaflet examples incl.
2023-pub-002; outcome in 2026-pub-010 and tab-mp-44500), 2023-pub-001/-003 and 2022-pub-002/-003 are #7 (cents), 2026-pub-008 is
#4, syn-001 is #3, the two 2025 "en meer" rows are #6.

**Discrepancies.** #1 `government` (drempelinkomen rounding; up 2023/2025/2026, down 2024, no rounding needed 2022; 10-23: for 2015 rounding up would move the zonder-partner ceiling, down would not — syn-033; the
owner's practice statement of 2026-10-09 recorded 10-10 as evidence that explains none of it; Ask 5 closed; 10-24: for 2014 the rounding moves neither ceiling — the first such year — because the shift, (afbouw − norm) × fraction, is 1,5–4 cents at 9,118% afbouw; 10-25: 2013 likewise, 1,7–2,8 cents at 8,713%). #2 `encoding`
(fixed 10-08). #3 `open` (leaflet step 5 onder c vs art. 4a lid 4 for a *verzekerde* aanvrager; the Dienst's method was one
method 2022–2024, changed by 2026; lid 3 new since 06-11-2024). #4 `withdrawn` (2026 leaflet misprint). #5 `encoding` (fixed
10-09: monthly practice = floor(whole-euro year / 12), confirmed by 130 table rows 2025/2026). #6 `withdrawn` (2025 "en meer"
rows). #7 `government` (printed intermediate cents: 2022 mixed, 2023 truncated, 2024–2026 rounded; no whole-euro amount
affected; the 2022 leaflet also misprints a subtotal, € 1.602,13 for € 1.902,13). #8 `encoding` (2026-10-12: the 2022 leaflet rounds
the month arithmetically, € 44,89 → € 45; fixed by the year parameter `maand_afronding_praktijk`; rests on one example — a 2022
voorschot table or beschikking would settle it). #9 `encoding` (opened 10-19 on the
part-year amounts of ECLI:NL:RBMNE:2026:4437; fixed 10-20, rul-003 passes). **#10 `government`** (10-20: rul-002, € 991 from the text vs
the Dienst's € 992 — the Dienst rounds the year amount before pro-rating, the text rounds only the tegemoetkoming; same shape as #1; one
ruling, one euro; a second part-year beschikking or the method found in writing re-argues it). **#11 `open`** (10-27: `zt-2021-rul-006`, a 2021 voorschot of € 1.289 at € 14.766 vs the text's maximum € 1.287; no date or parameters in the ruling; four other 2021 voorschotten are € 1.287 — investigate before classifying). #1 addendum 10-27: the Dienst's 2018 grens met partner, € 35.996 (ECLI:NL:RBMNE:2021:668), is the unrounded or rounded-up text figure, not the rounded-down € 35.995 — 2018 was not rounded down.

**Asks.** Done: 1, 2, 3, 5, 7, 11, 12, 13 (the last three in the owner session of 10-20). Open: **4** mailbox (blocks Phase 2 only); **6** Checkpoint 1,
narrowed 10-12 (see Phase); **9** (10-18, extended 10-19 to all eight ruling cases, per ruling; 10-20: nothing waits on anything; 10-22: extended to the ninth, `zt-2016-rul-001`; 10-23: to the tenth, `zt-2015-rul-001`; 10-24: to the fourteenth, `zt-2014-rul-001..004`, three rulings; 10-25: to the eighteenth, `zt-2013-rul-001..004`, two rulings; 10-26: to the twenty-sixth, the eight above, five rulings; 10-27: to the forty-third, seventeen cases, nine rulings — #11's ruling matters most) the owner compares the case files with the ruling and writes a dated line
in `INBOX.md`; then set `verified: true` on the confirmed ones, credit him by name in the case files and on the site's contributors list,
rerun `build.py check` (they become blocking; rul-2023-002 is explained by #10 and does not block), and record it as the first verification;
**10** (10-18) the owner reads the routine's run history for 10-15/16/17 and pastes
the status; **8** (10-13, not blocking; 10-14 extended to the 2020 leaflet, which is nowhere — `tg0821z01fd`/`z02fd`
404, no search hit, no archive link; 10-21 through 10-25: the 2017, 2016, 2015, 2014 and 2013 leaflets likewise) the owner opens the Wayback copy of the 2021 leaflet
(`web.archive.org/web/20240718180758/…tg0821z11fd.pdf`) and pastes its three rekenvoorbeelden and stap-2 grenzen into `INBOX.md`;
when they arrive: `published` cases 2021, the 2021 monthly rounding (#5/#8) and drempelinkomen rounding (#1), the stap-5 formulas (#3),
and syn-004..007 superseded or re-sourced. Disputes 0, reviews 0, motions 0. `PLAN.md` unchanged (last rewritten 2026-10-05); no checkpoint
missed. `BOARD.md` owner decisions: layout B 10-09; independent record if a government rules-as-code appears; internal matters never
on the website 10-11; direction A 10-19; design is the owner's alone 10-20; the specimen and the merge 10-20. `INBOX.md` is empty
(the 10-19/10-20 entries handled 10-21; nothing arrived 10-22 through 10-27).

**Open items for the next runs, in order.**
1. Handle whatever arrives in `INBOX.md`: Ask 9 (verification of the ruling cases, see Asks), Ask 10 (missing runs), Ask 6 (Checkpoint 1): each rekenhulp pair becomes a `published` case with
   source "rekenhulp toeslagen.nl, retrieved <date> by the owner"; every difference a discrepancy. If the owner decides the
   operator may run the comparison itself: the public proefberekening on toeslagen.nl in headless Chromium, twenty situations
   varying year, partner, income, vermogen, partner not verzekerd; log each pair as a case. A real beschikking of the owner's
   own would be `official` and, confirmed by him, the first verifiable case.
2. History is paused at 2013 (see Phase). Do **not** start 2012 without a board wish: it needs a new version of `zt-2026-art1-1f` (Wfsv art. 25 lid 2
   werknemersaandeel and Zvw art. 46 vergoeding over the January WML, per year) — `law/SOURCES.md` open item 4 has what was read of 2012. Instead
   the next runs do items 4 and 5 below, in that order (3 done 10-26). For any later year's encoding, the proven method, ~30–35 fetches in four or five parallel batches: the year's Wzt + its `/informatie`, `/Artikel4/informatie` (standaardpremie regeling BWBR — grep the html for
   `BWBR00…">Regeling vaststelling standaardpremie <jaar>`) and `/Artikel2a/informatie`, the previous year's Wzt (old columns), Awir +
   `/informatie` (versions!), WML + `/informatie` (grep `Stcrt. <jaar-1>` near `Datum inwerkingtreding: 01-01-<jaar>`), Wet IB (4 MB; grep
   `^ Artikel 5\.5\. `) at 01-01 and 01-07, the Stb. of the percentages, the Bijstellingsregeling (art. 5.5 and Awir art. 7 lid 6 in one
   text), the Rzv (47 MB) at 01-01 *and* 01-12 (cut from the last `Bijlage 4`, rows of 5 after the last `Woonlandfactor` until
   `Bronvermelding`, compare with the Stcrt. table); a WebSearch restricted to `zoek.officielebekendmakingen.nl` for the woonlandfactoren
   regeling. Compute the ceilings analytically and verify the boundary euros with `build.run_case(c, build.load_rules('zorgtoeslag'))`
   with `'verwacht': {}` in c, reading `r['uitkomst'].tegemoetkoming` (scratch script `check2015.py` pattern: a `run(inc, partner, extra)`
   helper). **Fetch only version start dates** (from the informatie page): wetten.nl answers any other date with an 8.702-byte 'Fout' page (10-24: three wasted fetches). Leaflet 2013: `z32` is 2023; try `z30`, `z33`, `z34` (`z31` was 404 on 10-11). Rulings for the year: see item 4.
3. *Done 10-26:* 'In het kort', a six-point B1 list above the English protocol on `/betwisten/` and `/insturen/`, with the line that the
   English text is the one that applies (`tools/render.py`, `protocol(..., kort)`; argued 10-21 as the operator's day-to-day remit under
   `DESIGN.md` P1, no motion). Once: read both pages in headless Chromium and run `tools/verify.py` on them; then drop this item.
4. More `ruling` cases. **The route that works (proven 10-27, 17 cases in one run): the rechtspraak.nl open-data feed.** `https://data.rechtspraak.nl/uitspraken/zoeken?date=<from>&date=<to>&subject=http://psi.rechtspraak.nl/rechtsgebied%23bestuursrecht&return=DOC&max=1000` returns Atom entries with title (ECLI, instantie, date, zaaknummer) and the inhoudsindicatie as `summary`; sweep week by week (about 300 requests, ten minutes, in the background with `nohup`), keep entries whose title or summary says 'zorgtoeslag' (259 for 2021-01 → 2026-10), then fetch each full text from `data.rechtspraak.nl/uitspraken/content?id=<ECLI>` and grep sentences with '€' and the toeslagjaar. Scripts of 10-27: `sweep.py`, `digest.py`, `rc.py` (a `run(jaar, inc, partner, pinc, rg)` helper around `build.run_case`) — rewrite from this description, they lived in the scratchpad. Pitfalls: a summary can contain a newline (skip lines not starting with `ECLI:`); protect `€ 1.250` from the sentence splitter; `uitspraken.rechtspraak.nl/api/zoek` is 403; raadvanstate.nl is 403; zaaknummer web searches returned nothing on 10-27 (three tries) — the feed makes them unnecessary. The unread hits with target-year amounts are listed in `law/SOURCES.md` open item 7 (2021: about ten rulings; 2024: ECLI:NL:RBMNE:2025:4925, ECLI:NL:RBMNE:2024:5552 — a Polish verdragsgerechtigde with the Dienst's 2024 drempelinkomen € 26.819 and factor 0,1613, a woonlandfactor case if incomes are stated — ECLI:NL:RBDHA:2025:10771). Read those first, then re-sweep 2026 quarterly. Older routes (web search by year or leaflet title, belastingkamer rulings, rechtbank zaaknummer → ECLI) still work but cost more tokens per case.
5. `law/SOURCES.md` open items 1, 2, 5 and 6 (monthly rounding basis, now also the 2022→2023 change; verdragsgerechtigde definition;
   the 2021 and 2020 leaflets via the owner, Ask 8). Item 3 (Awir 2024 art. 7 lid 3 second amount) resolved 10-26 from the consolidated text.
6. Nibud / Rijksoverheid worked examples as `published` cases.
7. `site/layouts/` stays under `site/` as the record of Ask 3; the Pages workflow removes it from the deployment (live 404 checked 10-20). Nothing to do unless the owner says otherwise.
8. Quarterly reflection ask on the last run of Q4 2026 (late December).

**Lessons.** A ruling's amount that the text does not give is logged `open`, not explained away: #11 (10-27) was tempting to attribute to provisional parameters — written as 'to investigate' instead. A rechtbank's 'geschat jaarinkomen' can be the inspecteur's registered figure later corrected (ECLI:NL:RBNHO:2024:2245): quote the word, say what it was. A sweep script that appends to a file must be idempotent (`done` set) because the Bash call may be cut off. `tools/render.py` was CRLF until 10-26 and is LF now; before rewriting any source file with a script, run `file` on it and preserve its endings, or the diff hides the change (10-26). A ruling states the grondslag sparen en beleggen *after* the heffingvrij vermogen; for 2017–2020 the encoding wants the rendementsgrondslag and deducts once or twice itself, so the input is reconstructed — the case must say so, under which partner reading, and that the outcome does not depend on it (10-26). A guess about the Dienst's reasons is a guess even as a bracketed question ('rente?'): caught in a case note 10-26 before commit; write 'not explained in the text'. The Bash tool can be refused for several turns by a harness check that gives no verdict (10-25, five turns): WebFetch reads a ruling from `data.rechtspraak.nl/uitspraken/content?id=<ECLI>` (it quotes at most 125 characters per sentence — enough for amounts, incomes and dates; ask it for the full sentence around a figure), Read/Grep/Write/Edit keep working, and the check and the commit wait for the shell; retry the identical command once, then continue with file work. A placeholder in brackets for an unread article number is as bad as a recalled one: write 'not read' or read it first. When a ruling lists two toeslagen and two amounts without labels ('huur- en zorgtoeslag ... € A en € B'), assign by word order *and* check by arithmetic against the year's maxima, and say so in the case. A sentence that explains a number ('nine cents rather than thirteen') is itself a number: compute it before writing it (10-24: the #1 note's first explanation was wrong by a factor of two, caught on re-reading; the shift is (afbouw − norm) × fraction). A question mark after a recalled instrument name ('Wet van 20 december 2012?') is still a recalled name: write 'to be identified'. When the officielebekendmakingen index and its SRU interface do not surface a regeling, a web search for its subject and year finds a secondary source (taxlive.nl) that names the Stcrt. number — then read the primary text (10-24: Stcrt. 2013, 33704). A derived amount (€ 567 + € 298 = € 865) is not a stated one: note it, no case. wetten.overheid.nl can answer a 47 MB regeling with an 8 KB `Wetten.nl | 500` error page once and succeed on retry: check the size (and `Geldend van`) before cutting. A search engine's description of a ruling ('voorschot € 942', zaak 201709274) is a hint, not a read text: the amount entered the record only when ECLI:NL:RVS:2018:2406 was read (10-23). The leaflet edition digit collides across decades (`z62` = 2026 second edition, `z51` = 2025): read the first page before believing the year. A second edition of a leaflet can silently correct a misprint (2026, #4): when a later edition digit answers, diff it against the stored one. `build.run_case` needs the rules module and a `verwacht` key. An instrument is named only when read: a plausible name ('Belastingplan 2018 chain') for the art. 5.5 change nearly entered `CHANGES.md` on 10-21 — write 'not identified'. A toelichting can settle what the article leaves open (Stcrt. 2017, 66088: 'geen effect op de hoogte van de zorgtoeslag'): read the toelichting before writing 'not stated'. `pkill -f <name>` kills the Bash call that contains the name too. A sentence in the log about what the pipeline does is a number: read it off the pipeline or do not write it (10-20: #10's
first draft described a check that did not exist yet). An article reference is read or not written, like a number (10-19: 'art. XIII' recalled, 'art. VI' in the text). Read every
string of a new parameter file back before the check: thinking aloud ('Duitsland? nee') nearly entered the record. A letter quoted in a
ruling is not a decision (ECLI:NL:RVS:2024:4888's 'ongeveer € 862,00 per maand'). A `cd dir && cmd &` in one Bash line backgrounds the whole chain, so the `cd` does not hold for the next line: use absolute
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
2024+ rounded) and in monthly rounding (2022 up, 2023+ down): read every example's cents before assuming the series. `pdftotext -layout` drops the right
column of a two-column table; `-raw` keeps the names but not the numbers — take the numbers from the Staatscourant text.
