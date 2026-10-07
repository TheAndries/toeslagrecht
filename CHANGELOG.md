# CHANGELOG.md

Newest first. What was done, decided, and got wrong.

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
