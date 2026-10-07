# memory.md

Carried state for the operator. Capped at 8,000 words. Rewritten each run.

## State as of 2026-10-07 (first scheduled run)

**Identity.** Name `toeslagrecht`, domain `toeslagrecht.nl` (owner, 2026-10-06). Repository
`https://github.com/TheAndries/toeslagrecht`, branch `main`. Routine
`trig_012xyD5r5rxFDCjfHbZ58Kib`, `56 5 * * *` UTC, model `claude-fable-5-1`; full config in
`ROUTINE.md`. Spend 0.59 EUR of the 200 EUR Q4 2026 ceiling (`LEDGER.md`).

**Phase.** 0 complete except the owner's layout choice; Phase 1 started.
- Pipeline: `python3 tools/build.py check|build|all` (stdlib + PyYAML; pytest not installed,
  not needed). `check` writes `law/zorgtoeslag/tests/report.md`; exit 1 only if a *verified*
  case fails. `build` writes `site/index.html` and `site/layouts/{a,b,c}.html`.
- Encoded (all `draft`): zorgtoeslag 2026 and 2025 — `law/zorgtoeslag/rules.md` (ids
  `zt-2026-art1-1f`, `-art2-1`, `-art2-2`, `-art2-4`, `-art2-5`, `-art3-1`, `-art4`),
  `rules.py` (Decimal, pure), `parameters/2026.yaml`, `parameters/2025.yaml`; Awir shared layer
  as inputs only (`law/awir/rules.md`, `parameters/2026.yaml`). Sources with versions and
  retrieval dates in `law/SOURCES.md`; amendments 2025→2026 in `law/CHANGES.md`.
- Not encoded, stated explicitly: who is verzekerde, who is partner, what the inkomensgegeven
  is, woonlandfactor (basis untraced), changes within the year (Awir art. 5), verblijfsstatus,
  any minimum amount, any rounding.

**Key 2026 figures (each cited in `parameters/2026.yaml`).** Standaardpremie € 2.119 (Stcrt.
2025, 40022); WML maandbedrag januari € 2.294,40 → drempelinkomen € 29.735,424 (Wzt art. 1 lid
1 onder f); percentages 1,912% / 4,289% / 13,730% (Wzt art. 2 lid 3); vermogensgrenzen
€ 146.011 / € 184.633 (Wzt art. 3 lid 1). 2025: € 2.112; € 2.191,80 → € 28.405,728; 1,896% /
4,273% / 13,700%; € 141.896 / € 179.429.

**Cases.** 9, all `published`, none verified: `zt-2025-pub-001..003` (Dienst Toeslagen
leaflet *Berekening zorgtoeslag 2025*, three rekenvoorbeelden; 003 skipped: woonlandfactor),
`zt-2026-pub-001..006` (Belastingdienst tables and income ceiling). Last report: 8 run,
5 pass, 3 fail, 1 skipped, 0 blocking.

**Discrepancies (both `open`).** #1: Dienst rounds drempelinkomen to whole euros (€ 28.406
vs € 28.405,728); one-cent differences in every leaflet example. #2: published income
ceilings (2026 € 40.857 / € 51.142; 2025 € 39.719 / € 50.206) lie where the formula still
gives ≈ € 23,3–23,5 per year; no minimum-amount or rounding provision found yet in Wzt art.
1–5, Awir art. 2–9 or 26a. Next search: Uitvoeringsregeling Awir; Awir articles 10–42 in
full; the "Regeling zorgtoeslag" if one exists under Wzt art. 2 lid 6.

**Open asks.** 3 — layouts ready, owner to choose (A tabel / B verhaal / C brief) via
`INBOX.md`; 4 — mailbox (blocks Phase 2 only); 5 — practice pointers on rounding and
the minimum amount (not blocking). Disputes 0, reviews 0, motions 0.

**Open items for the next runs, in order.**
1. Discrepancies #1 and #2: find the texts (above), classify, argue in the changelog.
2. Awir version 01-10-2026 (Stb. 2025, 431): identify the changed articles; record in
   `CHANGES.md`. Also Stb. 2025, 441 (01-01-2026) and Stb. 2023, 183 / 2022, 308 (01-01-2026).
3. Open the primary Staatscourant texts marked secondary in `law/SOURCES.md` (standaardpremie
   2025, WML 2025 and 2026); record the Stcrt. numbers.
4. Woonlandfactor: trace the basis (Zvw art. 69 / Wzt or regeling); encode; run `zt-2025-pub-003`.
5. More `published` cases: the full Belastingdienst 2025 and 2026 tables (every € 500 row) as a
   sweep; Nibud / Rijksoverheid examples. Synthetic edge cases: income exactly at the
   drempel, at the ceiling, partner not verzekerd at zero income, vermogen one euro over.
6. When Ask 3 is answered: transcribe the choice to `DESIGN.md` (board decision via
   `BOARD.md` first), then build the real checker: input form, JS computation in the browser,
   status words, record links. Until then no input form.
7. Checkpoint 1 needs the owner's twenty rekenhulp comparisons; not before the checker exists.

**Lessons.** `importlib` loading of `rules.py` needs `sys.modules[spec.name] = mod` before
`exec_module` or dataclasses fail. WebFetch of wetten.overheid.nl returns summaries unless
asked to quote verbatim; always ask for verbatim leden and the "Geldend van" dates. The
Belastingdienst PDF leaflets are extractable with `pdftotext` after WebFetch saves them.
The URL `.../content/hoeveel-zorgtoeslag-kan-ik-krijgen` is a 404; the live page is
`.../content/hoeveel-zorgtoeslag`.
