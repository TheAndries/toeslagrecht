# toeslagrecht

*(Dutch for "right to a toeslag" — chosen by the owner on 2026-10-05 under Ask 1; the working name was* aanspraak*. Domain: `toeslagrecht.nl`.)*

Dutch benefit law (the toeslagen) as open, executable, dated code — with a checker on the
front so a citizen can compute one toeslag and see every article the answer rests on, and a
record behind it: real cases, the law year by year, every place the tool and the government
disagreed, and every argument anyone has made with the encoding.

Founded 2026-10-05 by Andries, Breda, Netherlands. Governed by a two-seat board (`BOARD.md`):
the owner and the AI operator. Operated day to day by the operator on a scheduled routine
(`ROUTINE.md`), under `CHARTER.md`.

**Goal:** the open, independent record of how Dutch benefit law has actually been applied —
case by case, year by year — that is still opened in 2036, by citizens, bewindvoerders,
journalists, Kamerleden and models checking their own answers. The checker is the front of
that record. If the government one day publishes its own canonical rules-as-code, this
project becomes the thing that audits it.

**The ten-year rule** (`CHARTER.md` P3): anything a future model can regenerate in seconds is
not the project. Every run must add to the record — a case, a dated amendment, a discrepancy,
a dispute — or it has not done the project.

**Phase:** founding. Nothing is built. First target: zorgtoeslag. See `PLAN.md`.

**Licences** (`CHARTER.md` P9): code under the MIT licence (`LICENSE`); the encoding, the parameters,
the case corpus and the discrepancy log — `law/`, `cases/` and `DISCREPANCIES.md` — under
CC BY-SA 4.0 (`LICENSE-DATA`).

## The files

| File | What it is |
|------|-----------|
| [CHARTER.md](CHARTER.md) | Purpose and binding principles. Amendable only by board decision. |
| [BOARD.md](BOARD.md) | How the two seats decide, and the decision log. |
| [LAW.md](LAW.md) | How the law is encoded: rules, parameters, effective dates, sources. |
| [CASES.md](CASES.md) | The case corpus and the discrepancy log: formats, verification, privacy. |
| [DISPUTES.md](DISPUTES.md) | The protocol by which anyone may argue with an encoding. |
| [DESIGN.md](DESIGN.md) | Binding rules for how the checker looks, reads and behaves. |
| [GRANT.md](GRANT.md) | The funding plan: who, when, what the budget looks like. |
| [PLAN.md](PLAN.md) | Current strategy. Rewritten, with the date, whenever it changes. |
| [ASKS.md](ASKS.md) | The operator's channel to the owner. Numbered, dated, blocking. |
| [INBOX.md](INBOX.md) | Mail, owner notes, cases and disputes, until connectors exist. |
| [CHANGELOG.md](CHANGELOG.md) | Newest first. What was done, decided, and got wrong. |
| [memory.md](memory.md) | Carried state, capped at 8,000 words. |
| [LEDGER.md](LEDGER.md) | Every euro in and out. |
| [ROUTINE.md](ROUTINE.md) | The scheduled run's exact configuration. |
| [SETUP.md](SETUP.md) | The founding-session brief. |
| [DISCREPANCIES.md](DISCREPANCIES.md) | The discrepancy log, newest first (`CASES.md`). |
| [LICENSE](LICENSE), [LICENSE-DATA](LICENSE-DATA) | MIT for code; CC BY-SA 4.0 for the record. |
