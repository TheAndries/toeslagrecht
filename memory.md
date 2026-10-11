# memory.md

Carried state for the operator. Capped at 8,000 words. Rewritten each run.

## State as of 2026-10-11 (fifth scheduled run)

**Identity.** Name `toeslagrecht`, domain `toeslagrecht.nl` (owner, 2026-10-06). Repository
`https://github.com/TheAndries/toeslagrecht`, branch `main`. Routine
`trig_012xyD5r5rxFDCjfHbZ58Kib`, `56 5 * * *` UTC, model `claude-fable-5-1`; full config in
`ROUTINE.md`. Spend 0.59 EUR of the 200 EUR Q4 2026 ceiling (`LEDGER.md`). The checkout
arrives as a detached HEAD at `origin/main`: `git fetch origin main && git checkout -B main origin/main` before committing — on 2026-10-11 the local `origin/main`
ref was stale (2026-10-06) while HEAD was at the 2026-10-10 commit; the fetch is not optional.

**Phase.** 0 complete. Phase 1 complete except **Checkpoint 1**, which is the owner's (Ask 6): twenty
situations in the checker and the official rekenhulp, pairs pasted into `INBOX.md`, every difference a
discrepancy. The 2024 history (a Phase 2 item) was brought forward on 2026-10-09, 2023 on 2026-10-11.
- Pipeline: `python3 tools/build.py check|build|all` (stdlib + PyYAML; node for the parity step). `check`
  runs every case through `rules.py` *and* through `site/zorgtoeslag-regels.js` (via `tools/parity.js`),
  writes `law/zorgtoeslag/tests/report.md`, exit 1 if a *verified* case fails or the two encodings differ.
  `build` writes `site/zorgtoeslag-parameters.js` (all yaml + rule anchors), `site/zorgtoeslag.html` (from
  `tools/zorgtoeslag.template.html`), `site/index.html`, `site/layouts/{a,b,c}.html`.
- **The checker** `site/zorgtoeslag.html` (layout B, owner decision 2026-10-09, in `DESIGN.md` since
  2026-10-10): years 2023–2026, partner, incomes, partner verzekerd, vermogen, verdragsgerechtigd + woonland.
  Nothing sent or stored. Not published yet (Ask 7: GitHub Pages + DNS are owner acts). Rendered and checked
  in headless Chromium 2026-10-10. Possible later work inside `DESIGN.md` §8: self-hosted text serif, type
  scale, print stylesheet. Anything beyond §8 needs a board motion; the operator filed none (changelog
  2026-10-10 argues why).
- Encoded (all `draft`): zorgtoeslag **2026, 2025, 2024, 2023** — `zt-2026-art1-1f`, `-art2-1`, `-art2-2`,
  `-art2-4`, `-art2-5`, `-art3-1`, `-art4`, `-art4a`; Awir `awir-2026-art14-4`, `-art14-5`;
  `awir-2026-art7-1`, `-art8-1`, `-art3`, `-art5` as inputs/documentation. Outputs: `aanspraak_jaar`
  (unrounded), `tegemoetkoming` (Awir art. 14), `aanspraak_maand` (unrounded /12),
  `aanspraak_maand_afgerond_praktijk` (= floor(tegemoetkoming / 12), the Dienst's table practice, not law).
- Article numbering: 2023 and 2024 texts (t/m 05-11-2024) have vermogenstoets in art. 2a and woonlandfactor in
  art. 3; Stb. 2024, 291 (in force 06-11-2024, Stb. 2024, 322) renumbered them to art. 3 / art. 4a and
  inserted art. 4a lid 3 (verzekerde with verdragsgerechtigde partner). For 2024 and 2023 that case returns
  `undetermined`. The Wzt never had an art. 3a (the one Stcrt. 2025, 38110 names). Wzt art. 1 lid 1 onder f
  referred to WML art. 8 lid 1 onderdeel **a** through 2023 and to onderdeel b since 01-01-2024 (Wet invoering
  minimumuurloon, Stb. 2023, 168, art. XXXI); `parameters/2023.yaml` carries `artikel_wml_onderdeel: a`, which
  both encodings read (default b).
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
rectified figures; BE 0,7484, DE 0,8814). Awir 2023 € 33.748 / € 67.496, lid 6 € 5.432 (Stcrt. 2022, 32674). Awir art. 7 lid 3: 2024 € 36.952 / € 73.904, 2025 € 37.395 / € 74.790
(Stcrt. 2024, 38492), 2026 € 38.479 / € 76.958 (Stcrt. 2025, 40487). Awir art. 14 lid 4–5 identical
2024–2026; wetstechnische informatie lists no amendment. Published ceilings: 2023 € 38.520 / € 48.224; 2024 € 37.496 / € 47.368;
2025 € 39.719 / € 50.206; 2026 € 40.857 / € 51.142. 2027 percentages already in Stb. 2025, 412.

**Cases.** 170 (166 `published`, 4 `synthetic`), none verified. 2023: pub-001..003 (leaflet 2023 examples),
pub-004..007 (ceilings, both sides). 2024: pub-001..003 (leaflet 2024
examples), pub-004..007 (ceilings, both sides). 2025: pub-001..005, tab-zp-28000..39500 (24 rows),
tab-mp-28000..50000 (45), the two "en meer" rows. 2026: pub-001..012, syn-001..004 (004 = Norway, 2026-10-10),
tab-zp (20 rows), tab-mp (42), two "en meer" rows. Last report: 170 run, 153 pass, 17 fail, 0 blocking;
browser/Python parity 170/170. Every failure is logged: ten are #1 (cents in seven leaflet examples incl.
2023-pub-002; outcome in pub-010 and tab-mp-44500), 2023-pub-001 and -003 are #7 (cent truncation), pub-008 is #4,
syn-001 is #3, the two 2025 "en meer" rows are #6.

**Discrepancies.** #1 `government` (drempelinkomen rounding; direction differs 2024 vs 2025/2026; the
owner's practice statement of 2026-10-09 recorded 2026-10-10 as evidence that explains none of the observed
roundings; Ask 5 closed). #2 `encoding` (fixed 10-08). #3 `open` (leaflet step 5 vs art. 4a lid 4; the 2024
leaflet had a third formula; lid 3 new since 06-11-2024). #4 `withdrawn` (leaflet misprint). #5 `encoding`
(fixed 10-09: monthly practice = floor(whole-euro year amount / 12)). #6 `withdrawn` (2025 table "en meer"
rows contradict the ceiling page on the boundary euro). #7 `government` (2026-10-11: the 2023 leaflet truncates every
intermediate cent — month, standaardpremie × woonlandfactor — where 2024–2026 round arithmetically; no whole-euro amount
affected). #1 extended 2026-10-11 (2023 drempelinkomen rounded up); #3 extended (2023 step 5 = 2024's four formulas).

**Asks.** Done: 1, 2, 3 (transcribed 10-10), 5 (closed 10-10). Open: **4** mailbox (blocks Phase 2 only);
**6** Checkpoint 1 (owner: twenty situations, both tools, pairs into `INBOX.md`; blocks Phase 2);
**7** publish the site (GitHub Pages from `main`/`site` + TransIP DNS; when the owner reports it, add
`site/CNAME` and check HTTPS). Disputes 0, reviews 0, motions 0. `PLAN.md` unchanged (last rewritten
2026-10-05); no checkpoint missed.

**Open items for the next runs, in order.**
1. Handle whatever Checkpoint 1 pairs arrive in `INBOX.md` (Ask 6): the official rekenhulp's output is
   a worked figure from the Dienst, so each pair becomes a `published` case with source "rekenhulp
   toeslagen.nl, retrieved <date> by the owner"; every difference is a discrepancy to classify. A real
   beschikking of the owner's own would be `official` and, confirmed by him, the first verifiable case.
2. 2022 as the next year of history (`law/SOURCES.md` open item 4): Wzt 01-01-2022 (already fetched once:
   1,848% / 4,225% / 13,610%, vermogen € 120.020 / € 151.767; which instruments set them is not yet read), standaardpremie
   2022 regeling, WML January 2022 (the 2022 amount and its regeling; note the WML changed again on 01-07-2022), woonlandfactoren
   2022 (Stcrt. 2021, 46565), Awir 2022 amounts, the leaflet 2022 (`tg0821z21fd` existed on 2026-10-08; try `z22` too). Then 2021.
3. `law/SOURCES.md` open items 1–3 (monthly rounding basis; verdragsgerechtigde definition; Awir 2024
   second amount in the consolidated text).
4. Nibud / Rijksoverheid worked examples as `published` cases; a scan of rechtspraak.nl for zorgtoeslag
   rulings with usable facts (`ruling` cases — the first that could be *verified*).
5. Checker polish inside `DESIGN.md` §8 (serif for the law, type scale, print stylesheet); a
   `site/CNAME` once Ask 7 is answered; an accessibility pass (keyboard, 200% zoom, screen-reader labels)
   — done by reading, since no audit tool is installed.
6. Quarterly reflection ask on the last run of Q4 2026 (late December).

**Lessons.** `curl --http1.1` with a browser User-Agent works for wetten.overheid.nl and
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
