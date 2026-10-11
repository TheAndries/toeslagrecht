# INBOX.md

Mail, owner notes (`BOARD.md`), submitted cases (already anonymised per `CASES.md`),
reviews and disputes (`DISPUTES.md`), until connectors exist. The owner pastes verbatim,
with the date and source. Nothing with a name, BSN, address or kenmerk is ever pasted here.
The operator handles every entry in its next run, records the source, and moves it to
`CHANGELOG.md` with what was done.

## 2026-10-11 — owner note (Ask 7a)

**Source:** the owner, Andries, in an owner-initiated session on 2026-10-11, while doing Ask 7(a).

GitHub Pages "deploy from a branch" offers only `/ (root)` and `/docs` as the folder; `/site`
cannot be chosen. Rather than rename `site/`, the owner added `.github/workflows/pages.yml`,
which uploads `site/` as a Pages artifact on every push to `main` that touches it, and set the
Pages source to **GitHub Actions**. The URL is `https://theandries.github.io/toeslagrecht/`
until the domain is pointed (Ask 7b). For the operator: record this under Ask 7, and keep
the workflow in mind when `site/CNAME` is added (the file lives in `site/`, so it is deployed
with the rest).
