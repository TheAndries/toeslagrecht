# memory.md

Carried state for the operator. Capped at 8,000 words. Rewritten each run.

## State as of 2026-10-08 (second scheduled run)

**Identity.** Name `toeslagrecht`, domain `toeslagrecht.nl` (owner, 2026-10-06). Repository
`https://github.com/TheAndries/toeslagrecht`, branch `main`. Routine
`trig_012xyD5r5rxFDCjfHbZ58Kib`, `56 5 * * *` UTC, model `claude-fable-5-1`; full config in
`ROUTINE.md`. Spend 0.59 EUR of the 200 EUR Q4 2026 ceiling (`LEDGER.md`). The checkout
arrives as a detached HEAD at `origin/main`: `git checkout -B main origin/main` before committing.

**Phase.** 0 complete except the owner's layout choice (Ask 3, still *ready for you*); Phase 1 under way.
- Pipeline: `python3 tools/build.py check|build|all` (stdlib + PyYAML). `check` writes
  `law/zorgtoeslag/tests/report.md`; exit 1 only if a *verified* case fails. `build` writes
  `site/index.html` and `site/layouts/{a,b,c}.html`. `load_awir(jaar)` passes the Awir
  parameters into `rules.bereken(..., awir=...)`.
- Encoded (all `draft`): zorgtoeslag 2026 and 2025 — `zt-2026-art1-1f`, `-art2-1`, `-art2-2`,
  `-art2-4`, `-art2-5`, `-art3-1`, `-art4`, **`-art4a` (woonlandfactor, new 2026-10-08)**; Awir
  **`awir-2026-art14-4` (rekenkundig afgerond op hele euro's) and `-art14-5` (niet toegekend onder
  € 24), new 2026-10-08**; `awir-2026-art7-1`, `-art8-1`, `-art3`, `-art5` as inputs/documentation.
  Outputs: `aanspraak_jaar` (Wzt art. 2 formula, unrounded), `tegemoetkoming` (after Awir art. 14),
  `aanspraak_maand` (unrounded /12), `aanspraak_maand_afgerond_praktijk` (floor, Dienst practice, not law).
- Not encoded, stated explicitly: who is verzekerde / verdragsgerechtigde / partner, the
  inkomensgegeven, changes within the year (Awir art. 5), verblijfsstatus, the monthly rounding of
  voorschotten (no text found).

**Key figures (each cited in the parameter files).** 2026: standaardpremie € 2.119 (Stcrt. 2025,
40022); WML januari € 2.294,40 (Stcrt. 2025, 34131) → drempelinkomen € 29.735,424 (Dienst:
"vastgesteld op € 29.736"); 1,912% / 4,289% / 13,730% (Stb. 2025, 412, which revised the 1,911% /
4,288% set for 2026 by Stb. 2024, 351); vermogen € 146.011 / € 184.633 (Stcrt. 2025, 38110, which
names a non-existent "art. 3a"); Awir art. 7 lid 3 € 38.479 / € 76.958 (Stcrt. 2025, 40487);
Awir art. 14 lid 5 minimum € 24. 2025: € 2.112 (Stcrt. 2024, 38887); € 2.191,80 (Stcrt. 2024,
33625) → € 28.405,728 (Dienst: € 28.406); 1,896% / 4,273% / 13,700% (Stb. 2024, 351); € 141.896 /
€ 179.429 (Stcrt. 2024, 37672, herstelregeling). Woonlandfactoren 2025 and 2026 for 39 countries
from Regeling zorgverzekering bijlage 4 (BE 0,7981 → 0,8165). 2027 percentages already published:
1,930% / 4,307% / 13,760% (Stb. 2025, 412, schema to 2040).

**Cases.** 18 (17 `published`, 1 `synthetic`), none verified. 2025: pub-001..003 (leaflet 2025
examples), pub-004/005 (ceiling € 39.719 / € 39.720). 2026: pub-001..005 (table rows), pub-006
(€ 40.858 → 0), pub-007..009 (leaflet 2026 examples), pub-010 (€ 40.857, the case #1 flips),
pub-011/012 (partner ceiling € 51.142 / € 51.143), syn-001 (art. 4a reading). Last report: 18 run,
10 pass, 8 fail, 0 skipped, 0 blocking. Every failure is logged: six are #1 (cents), pub-010 is #1
(outcome), pub-008 is #4 (leaflet arithmetic), syn-001 is #3.

**Discrepancies.** #1 `government` (drempelinkomen rounded up by the Dienst; no text; Ask 5(a)
open). #2 `encoding` (fixed: Awir art. 14 lid 4–5). #3 `open` (leaflet step-5 formula for a
verzekerde with a partner who is neither, vs Wzt art. 4a lid 4; synthetic case only). #4
`withdrawn` (leaflet 2026 example 2: € 1.243,51 / 12 printed as € 103,02).

**Open asks.** 3 — layouts ready, owner to choose (A tabel / B verhaal / C brief) via `INBOX.md`;
4 — mailbox (blocks Phase 2 only); 5 — only (a) remains, not blocking. Disputes 0, reviews 0, motions 0.

**Open items for the next runs, in order.**
1. More `published` cases: the full Belastingdienst 2025 and 2026 tables (every € 500 row) as a
   sweep — cheap and they test the whole chain including Awir art. 14; Nibud / Rijksoverheid
   examples. Synthetic edge cases: income exactly at the drempel, vermogen one euro over, partner
   not verzekerd at zero income, afronding at exactly ,50.
2. `law/SOURCES.md` open items 1–5 (Wzt art. 2 lid 6 regeling; Stcrt. numbers of the
   woonlandfactor regelingen; history of Awir art. 14 lid 4–5; Awir 2025 amounts; Zvw art. 69).
3. Encode 2024 (history, `PLAN.md` Phase 2 brought forward only if cheap): Wzt 2024 text,
   Stb. 2023 percentages, Stcrt. 2023 standaardpremie/WML, leaflet 2024 (tg0821z41fd exists).
4. When Ask 3 is answered: board decision in `BOARD.md`, transcribe to `DESIGN.md`, then build
   the real checker (input form, browser JS computation incl. art. 4a and Awir art. 14, status
   words, record links). Until then no input form.
5. Checkpoint 1 needs the checker first.
6. Quarterly reflection ask on the last run of Q4 2026 (late December).

**Lessons.** `curl` to wetten.overheid.nl and officielebekendmakingen.nl works with `--http1.1`
(HTTP/2 gives PROTOCOL_ERROR) and a browser User-Agent; strip tags with a small script and grep
the full text — far cheaper and more reliable than WebFetch summaries, and it is how art. 4a and
art. 14 were found after WebFetch had missed them. Diff two consolidated versions to find what an
amendment changed. Leaflets follow the pattern `berekening_zorgtoeslag_tg0821z<Y>1fd.pdf` with
Y = last digit of the year (2022, 2024, 2025, 2026 confirmed); read with `pdftotext -layout`.
Uitvoeringsregeling Awir is BWBR0019237; Uitvoeringsbesluit Awir BWBR0018707; Regeling
zorgverzekering BWBR0018715 (25 MB page; bijlage 4 near the end). `importlib` loading of
`rules.py` needs `sys.modules[spec.name] = mod` before `exec_module`. YAML case files: keep the
whole `publicatie` string inside one pair of quotes. Build scripts with asserts: write them to the
scratchpad, not a heredoc, so a failed assert can be fixed and rerun; check the exact text before
asserting on it.
