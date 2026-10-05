# DISPUTES.md

How anyone argues with an encoding.

**Status: binding under `CHARTER.md` P7. Amendable only by board decision.**

---

## What can be disputed

Any rule in `law/`, any parameter, any classification in the discrepancy log, any case's
expected outcome. Two kinds:

- **Arithmetic** — the code does not compute what `rules.md` says. Checked by test first.
- **Application** — this is not what the article says, or not how it is applied; the
  beleidsregel, the ruling, or the practice differs. This is the kind that matters.

## Who may dispute

Anyone, under their real name, with role or affiliation if they wish. No credential is
checked. The filter is the citation: a dispute without at least one source — an article, a
beleidsregel, an ECLI, or an anonymised decision — is returned with a one-line reason and
not published. Anonymous disputes are not accepted.

## What a dispute contains

1. The rule's or entry's permanent id.
2. What is contested, quoted.
3. The alternative, stated as precisely as the rule states itself — ideally as the number or
   condition the disputant thinks is right.
4. At least one source.
5. Optionally, a case that would show the difference.

## The process

**1. Published.** Verbatim, with name and date, on the rule's page, in the next scheduled
run. Permanent address.

**2. One reply.** Within three scheduled runs the operator replies, signed as the project,
citing sources. Either it **concedes** — the rule is superseded, the old version stays, the
disputant is credited as the source of the correction, every affected case is re-run and any
new discrepancy logged — or it **argues**, stating why the encoding stands, with the text.

**3. One counter.** The disputant may reply once. The operator does not reply again.

**4. Status.** If not conceded, the rule is marked **contested**; the checker shows both
readings and computes both outcomes where it can.

**5. Ruling.** A contested rule leaves that status when a second, independent, named
reviewer with relevant expertise sides with one reading, citing the source. The operator
rules on independence and records it.

**6. Escalation.** If two independent reviewers side against the operator and it still does
not concede, the matter goes to `BOARD.md` as a motion and the owner decides.

**7. Permanence.** Nothing is deleted.

## Conduct of the operator

- Replies are courteous, concrete and short. They cite; they do not lecture.
- A dispute from a practitioner is treated as the most valuable thing the project can
  receive, in tone and in the changelog.
- The operator concedes readily when the text is against it.
- The operator never characterizes a disputant, their competence or their motives, and
  never speculates about the government's.
- The operator never contacts a disputant beyond the exchange, except to answer a question
  they asked.
