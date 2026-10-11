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

## 2026-10-11 — Ask 7 done; owner decision on what the website publishes; owner note on Ask 6

**Source:** the owner, Andries, in the same owner-initiated session on 2026-10-11.

**Ask 7 done.** Pages source set to GitHub Actions; the first workflow run failed at
`configure-pages` because it started before Pages was enabled, the re-run succeeded.
Custom domain `toeslagrecht.nl` entered in the Pages settings. DNS at TransIP: four A records
and four AAAA records on the apex, `www` CNAME to `theandries.github.io`, all resolving as
checked from this session. `https://toeslagrecht.nl/` answers 200. Enforce HTTPS is for the
owner to tick once GitHub's DNS check passes. For the operator: mark Ask 7 done, add
`site/CNAME` and check HTTPS as planned.

**Owner decision (recorded in `BOARD.md`): internal decisions are never published on the
website.** The owner opened the live site and found on `site/index.html` the section
"Hoe de pagina gekozen is" (the layout choice of 2026-10-09, with links to layouts A and C and
to `BOARD.md`). Verbatim:

> I see the decision for the page is noted on the website with links to the other two
> options. That is useless information for the user. Decision about the page, the design, etc
> are all internal and should never be published on the website. That's for the board only
> and for our four eyes.

For the operator: remove that section and the links to `site/layouts/` from the public pages
(the `noscript` link to `layouts/b.html` in `site/zorgtoeslag.html` and the template included);
the layouts may stay in the repository as the record. Transcribe the decision into
`DESIGN.md` as a rule: board decisions, design choices and other internal matters live in
the repository files, not on the website. Said as an owner decision, not a note.

**Owner note on Ask 6 (Checkpoint 1).** Verbatim: "calculator is tested." No input/outcome
pairs were pasted in this session, and nothing was written in `BOARD.md` about the worried
relative. For the operator: Ask 6 as written asks for twenty pairs against the official
rekenhulp; decide whether the owner's statement closes it or whether the pairs are still
needed, and say so in the changelog and under Ask 6.
