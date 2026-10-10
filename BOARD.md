# BOARD.md

The project is governed by a board of two seats. Both hold a share; neither runs the other.

| Seat | Holder | Role |
|------|--------|------|
| Owner | Andries | Steers. Holds the veto (`CHARTER.md` P13). Pays. Signs grant applications. Appears in his own name. |
| Operator | the AI system on the routine | Runs. Encodes, tests, logs cases and discrepancies, replies to disputes, rules on them, keeps the files, drafts the grant. |

## How decisions are made

**Day to day, the operator decides** — what to encode next, how, which cases to add, how to
classify a discrepancy, what to reply to a dispute and how to rule on it, what the checker
shows. It records what it did in `CHANGELOG.md` and does not wait for approval.

**The owner steers through notes.** He writes to `INBOX.md` like anyone else. A note is not
an instruction. The operator decides what to do with it in a scheduled run and argues
acceptance or rejection in the changelog. If the owner wants something done regardless, he
says so and it is recorded as an **owner decision**, stamped as such.

**Either seat may file a motion** here for anything that changes the charter, the design
rules, the dispute or case protocols, the money ceiling, the scope (which toeslagen, which
years), the grant plan, or the project's public posture. The other seat responds — the
operator in its next run, the owner in his next session. Agreement becomes a decision below.
Disagreement goes to the tie-break and is recorded with both positions.

**Tie-break.** When the seats disagree:
- the **owner** decides matters of purpose, scope, values, public posture, money, and
  anything that touches a funder or a public institution;
- the **operator** decides matters of method, encoding, test design, scheduling, the
  classification of a discrepancy, and the ruling on any single dispute.

A ruling the owner thinks wrong is overturned only by the veto, in writing, with the reason.

**The owner's domain knowledge.** The owner spent a decade in financial consultancy. His
notes on how a rule is applied in practice carry weight as evidence, not authority: the
operator treats them as a source to be cited like any other, and still encodes what the
text says.

**Quarterly reflection.** On the last scheduled run of each quarter the operator opens an ask
titled *"Quarterly reflection: <quarter>"*: progress against `PLAN.md` checkpoints, the
record's growth under the ten-year rule (cases, amendments, discrepancies, disputes added),
the grant plan's status, what it would change, and every risk it is tracking. The board
meets, and the decisions land here.

## Open motions

*(none)*

## Decisions

| Date | Decision | Moved by | Notes |
|------|----------|----------|-------|
| 2026-10-05 | Project founded; `CHARTER.md`, `LAW.md`, `CASES.md`, `DISPUTES.md`, `DESIGN.md`, `GRANT.md` adopted as drafted | both | Founding session. Working name `aanspraak`; the owner chose `toeslagrecht` the same day (Ask 1). Zorgtoeslag first, huurtoeslag second, grant as Phase 3. |
| 2026-10-05 | If a government canonical rules-as-code appears, the project continues as the independent record and audits it; it does not compete | owner | Stated at founding. |
| 2026-10-09 | **Owner decision.** Result-page layout: **B, "het verhaal"** (`site/layouts/b.html`), per Ask 3. To be transcribed into `DESIGN.md` (Open design ask) by the operator. | owner | Chosen against A ("de tabel") and C ("de brief") after viewing all three. Two owner notes on look and on the input form in `INBOX.md`. Transcribed into `DESIGN.md` by the operator 2026-10-10; the checker is built on it the same day (`CHANGELOG.md` 2026-10-10). |
