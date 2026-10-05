# CASES.md

The case corpus and the discrepancy log. This file is the asset. `CHARTER.md` P3.

**Status: binding under `CHARTER.md` P5, P6 and P8. Amendable only by board decision.**

---

## The corpus

A case is one real or published situation with a known outcome, stored under `cases/`, one
file each, and compiled into the encoding's tests.

Each case records:

- a stable id;
- the toeslag and the year;
- the inputs the law needs (household composition, incomes, assets, rent or premium,
  dates) — and nothing else;
- the expected outcome and where it comes from;
- its **source type**, which sets its weight:

| Source type | What it is | Verification |
|-------------|-----------|--------------|
| `official` | An actual beschikking or berekening from the Belastingdienst/Toeslagen, submitted by the person it concerns or their helper, anonymised | strongest; the operator checks the document is what it claims |
| `ruling` | A court decision, by ECLI, with the facts and the outcome | strong; cited |
| `published` | A worked example published by the Belastingdienst, Rijksoverheid or Nibud, with URL and retrieval date | medium; the publisher may be wrong |
| `synthetic` | Constructed by the operator to exercise a rule | weakest; never counts as verification of anything |

A case is `verified` when its source is `official` or `ruling` and a named human (the
submitter, the owner, or a reviewer) has confirmed the inputs match the document. Only
verified cases are tests the encoding must pass; the rest are checks.

## Submitting a case

Through the form on the checker (which writes to `INBOX.md` until a connector exists) or by
email. The submitter gives their name and contact privately, consents to the anonymised case
being published under CC BY-SA, and attaches or transcribes the decision.

**Privacy, absolute.** Before a case is stored in the repository: no name, no BSN, no
address, no toeslagpartner's name, no kenmerk, no date of birth beyond the year where the
law needs an age. Amounts are kept exact because the law turns on them. The submitter's
identity lives only in the owner's mailbox, never in the repository, never in a run's
context beyond the session that anonymises it. A case that cannot be anonymised safely is
not stored. The owner's veto (`CHARTER.md` P13) covers any doubt.

## The discrepancy log

`DISCREPANCIES.md`, newest first. An entry is opened whenever the encoding and a government
outcome differ for the same inputs — a verified case fails, or a citizen reports that the
checker and their beschikking disagree.

Each entry records: the case, the two outcomes, the rule(s) involved, and a status:

| Status | Meaning |
|--------|---------|
| `open` | Noticed, not yet investigated |
| `encoding` | The encoding was wrong; what was fixed, in which commit |
| `government` | The encoding follows the text; the decision does not; the article and the decision are both cited; the reader judges |
| `law` | The text does not determine the outcome; both readings recorded; the rule now returns `undetermined` |
| `withdrawn` | The reported discrepancy was a data error; kept, with the reason |

The operator classifies, and argues the classification in the changelog. A `government`
classification is not an accusation; it is a documented difference between a text and a
decision, stated with both sources, in the plainest language available. The project never
speculates about why.

Every entry is permanent. The log is published on the site in full.

## Reviewers

A named human with relevant expertise — a fiscalist, a bewindvoerder, a toeslagen case
worker, a lawyer, the owner — may review a rule against its article and sign off
(`LAW.md` status `reviewed`). Reviewers are credited on the rule and on the site's list of
contributors. A review of a contested rule counts as siding with a reading
(`DISPUTES.md` step 5).
