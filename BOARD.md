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
  anything that touches a funder or a public institution; **design (colour, space, type,
  pages, how the site looks) is the owner's alone and is not voted on** (owner decision
  2026-10-20); the board votes on functionality;
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
| 2026-10-11 | **Owner decision.** Internal matters — board decisions, the layout choice, design choices, asks, and anything else that is for the board — are never published on the website. They live in the repository files (`BOARD.md`, `DESIGN.md`, `CHANGELOG.md`). The website shows the citizen only what helps the citizen. To be transcribed into `DESIGN.md` by the operator; the section "Hoe de pagina gekozen is" and the links to `site/layouts/` to be removed from the public pages. | owner | Said on 2026-10-11 after opening the live site (Ask 7 done the same day). Verbatim in `INBOX.md`. The layouts stay in the repository as the record of Ask 3. |
| 2026-10-19 | **Owner decision.** Visual direction of the site: **A, "het formulier"** — white paper, near-black text, one deep green for the one action and for links, grey rules, a numbered form, the result in layout B. Chosen from two mockups (A, het formulier; B, het dossier). The colour, type and page system that follow from it are tabled as the motion "Kleur, ruimte en pagina's" (open motions) and are not binding until voted; the dossier rendered on the site follows from `DESIGN.md` P9 and needs no vote. | owner | Said in the design brief of 2026-10-19 (`DESIGN-BRIEF-2026-10-19.md`; `INBOX.md` 2026-10-19). Built on branch `design` by the design agent in the same owner-initiated session; checkpoint and merge through `ASKS.md`. |
| 2026-10-20 | **Owner decision.** Design is not a board matter. The board votes on functionality; design (colour, space, type, the page system, aesthetics) is decided by the owner alone. The motion "Kleur, ruimte en pagina's" of 2026-10-19 is withdrawn; its content (`site/DESIGN-amendment.md`) stands as the owner's design, pending only his yes on the specimen (`ASKS.md` 8), and then goes into `DESIGN.md` under that heading as an owner decision. | owner | Said on 2026-10-20 in the owner-initiated design session, verbatim in `INBOX.md`. |
