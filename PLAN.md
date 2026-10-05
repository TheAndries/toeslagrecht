# PLAN.md

Current strategy. Rewritten, with the date, whenever it changes. Last rewritten 2026-10-05
(founding).

## §1. In one sentence

Encode zorgtoeslag correctly for the current year, prove it against the official rekenhulp
and published cases, then huurtoeslag, then history, then apply for a grant with the record
as the exhibit.

## §2. Why zorgtoeslag first

The simplest toeslag: one premium figure, income and asset tests, partner rules, few
exceptions. It exercises the whole shared Awir layer (toetsingsinkomen, partner, peildatum,
vermogen) without huurtoeslag's cliff edges. A pipeline that works for zorgtoeslag in weeks
is the pipeline for everything. Huurtoeslag is the real test and the better demo; it comes
second so that the shared layer is already tested when it arrives.

## §3. Phases

**Phase 0 — founding (now).** Name and domain (Ask 1). Public repository and routine (Ask 2).
Three result-page layouts for the owner to choose from (Ask 3). Build pipeline: `law/` +
`cases/` → tests → static site. No rules encoded.

**Phase 1 — zorgtoeslag, current year.** Encode the Awir shared layer and the Wet op de
zorgtoeslag for the current year, every rule with its article and effective date, status
`draft`. Build the case corpus from `published` sources (Belastingdienst, Rijksoverheid,
Nibud examples) and synthetic edge cases. The checker computes and shows every step.

**Checkpoint 1:** the owner enters twenty situations of his own choosing into both the
checker and the official rekenhulp on `toeslagen.nl`. Every difference is logged as a
discrepancy and classified. If any difference is unexplained after investigation, Phase 2
does not start. He writes down in `BOARD.md` whether the result page is something he would
hand to a worried relative.

**Phase 2 — huurtoeslag, history, humans.** Encode the Wet op de huurtoeslag for the
current year, including the cliff edges and the servicekosten rules, tested the same way.
Encode the previous two years of both toeslagen (`LAW.md`, Years) and start `CHANGES.md`.
Open the case-submission and dispute forms. The owner, in his own name, asks two or three
people — a bewindvoerder, a fiscalist, a toeslagen case worker if he knows one — to review
one rule each and to submit one anonymised real case each. The operator does no outreach.

**Checkpoint 2:** at least 50 verified cases, at least one `reviewed` rule not reviewed by
the owner, at least one dispute through all steps, and a discrepancy log with entries. If
the log is empty after a quarter of real cases, something is wrong with how cases are
gathered, and that is a board matter.

**Phase 3 — the grant.** `GRANT.md` prerequisites met. The operator verifies funders and
drafts one application with the live checker, the corpus and the discrepancy log as the
exhibit. The owner signs. If funded: the fiscalist's review and the accessibility audit
happen first.

**Phase 4 — breadth and depth.** Kindgebonden budget, then kinderopvangtoeslag. History
back to the Awir's start where sources allow. The discrepancy log becomes the thing people
cite.

## §4. Capacity

One scheduled run per day at 300,000 tokens. The owner's time: one short session a week
reading what was built and filing notes; a few hours at each checkpoint; nothing blocks on
more.

## §5. Risks tracked

- **A wrong answer a citizen acts on.** Mitigated by P4 (a check, not advice), the
  step-by-step computation, status shown, Checkpoint 1, and the fiscalist's review before
  anything is called `reviewed`.
- **Privacy of a submitted case.** Mitigated by `CASES.md`; the owner's veto; identity
  never in the repository.
- **The government ships canonical rules-as-code.** Accepted at founding: the project
  continues as the record and audits it.
- **Silence** — nobody submits, reviews or disputes. The owner's invitations in Phase 2; if
  nothing after a quarter, a board matter.
- **The ten-year rule honoured in letter only** — runs that add trivial cases to tick the
  box. The quarterly reflection reports the record's growth in kind, not in count.
