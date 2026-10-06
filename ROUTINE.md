# ROUTINE.md — the scheduled run

**Status: CREATED AND ENABLED** (2026-10-06, Ask 2). See *As created* below.

## Configuration to create

| Field | Value |
|-------|-------|
| Name | `toeslagrecht — daily run` |
| Schedule | `56 5 * * *` (cron, UTC) — 07:56 Europe/Amsterdam; keel runs at :12 and premise at :34, so the three never contend |
| Environment | Default, Anthropic cloud |
| Repository | the public repository from Ask 2 |
| Model | the most capable generally available model at creation (`claude-fable-5-1` as of 2026-10-05); when a more capable one appears the operator writes an ask naming it |
| Tools | `Bash`, `Read`, `Write`, `Edit`, `Glob`, `Grep`, `WebSearch`, `WebFetch` |
| Connectors | **none** — clear all defaults, then read back |
| Outcomes | **none** — read back; a `claude/*` branch means the config was altered |
| Token ceiling per run | 300,000 |

**Lessons carried over from keel, binding here:** never edit this routine through the web
UI; every change through the API in an owner-initiated session, with the whole stored config
read back afterwards. Check connectors and outcomes after any change, not just the field
that was edited.

## As created

| Field | Value |
|-------|-------|
| Routine ID | `trig_012xyD5r5rxFDCjfHbZ58Kib` |
| URL | https://claude.ai/code/routines/trig_012xyD5r5rxFDCjfHbZ58Kib |
| Created | 2026-10-06 12:12:21 UTC, through the API (`created_via: http_api`), in the owner-initiated founding session |
| Connectors cleared | 2026-10-06 12:12:59 UTC. Creation attached three account defaults (Google_Calendar, Claude_Docs, Claude_Code_Remote) unasked; cleared with `clear_mcp_connections: true`; read back as `mcp_connections: []` on the update response and on an independent `get` |
| First scheduled run | 2026-10-07 05:56 UTC = **07:56 Europe/Amsterdam** (CEST). The cron is fixed in UTC, so from 2026-10-25 (end of summer time) the run is at 06:56 local. |
| Model as actually set | `claude-fable-5-1` (both `session_context.model` and `derived_state.model`) |
| Repository as stored | `https://github.com/TheAndries/toeslagrecht` |
| Tools as stored | `Bash`, `Read`, `Write`, `Edit`, `Glob`, `Grep`, `WebSearch`, `WebFetch` |
| Outcomes as stored | `outcomes: []` (none) |
| Environment | `env_01Qz9JZFH3Aho6k888eZzxdK` (Default, Anthropic cloud) |
| Prompt check | stored prompt diffed character by character against the fenced block below: identical, 1,949 characters |

The planned first run (2026-10-06 07:56) was missed: the repository and GitHub App access
arrived on 2026-10-06 at 12:09 UTC, after that slot. Nothing was altered to catch up.

## The prompt

```
You run toeslagrecht, Dutch benefit law as open executable code and the record behind it, governed by a two-seat board. Read CHARTER.md, BOARD.md, LAW.md, CASES.md, DISPUTES.md, DESIGN.md, PLAN.md, ASKS.md, INBOX.md, memory.md and the latest three changelog entries first. Then, in order: (1) note any asks marked done and unblock what depended on them; (2) handle INBOX.md — store any submitted case after confirming it carries no personal data, publish any filed dispute, reply to any dispute due a reply, record any review, and for any owner note decide what to do with it, record the source, and argue acceptance or rejection in the changelog; (3) respond to any open motion in BOARD.md; (4) do as much of PLAN.md as fits inside this run's 300,000-token ceiling, most important first; every rule you encode or change cites its article and effective date, every verified case must pass before you commit, and every failure is a discrepancy to log and classify, never a test to remove; (5) if strategy changed, rewrite PLAN.md with the date; (6) update memory.md, staying under 8,000 words; (7) write today's changelog entry: what you did, what was wrong and why, what you dropped from memory, an honest estimate of effort used, and what this run added to the record under the ten-year rule or that it added nothing and why — never skip it, even if earlier steps consumed the run; (8) if you need the owner, add a numbered ask to ASKS.md. If a checkpoint in PLAN.md was missed, argue what to change. If you are on a different model than the last entry records, say so and write a handover note. Commit and push to main with a dated message, then stop. Never change CHARTER.md, CASES.md, DISPUTES.md or DESIGN.md except when transcribing a board decision recorded in BOARD.md. Never encode a number without its article. Never store a name, BSN, address or kenmerk. Never contact anyone who has not written to the project. Never impersonate a human.
```
