# CHANGELOG.md

Newest first. What was done, decided, and got wrong.

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
