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

## 2026-10-19 — owner note: design brief for the design agent (direction A, het formulier)

**Source:** the owner, Andries, in an owner-initiated session on 2026-10-19; the brief pasted
verbatim and saved as `DESIGN-BRIEF-2026-10-19.md` at the repository root, the reference
mockup beside it as `toeslagrecht-mockup-a.html`.

The owner chose direction A, *het formulier*, from two mockups (recorded as an owner decision in
`BOARD.md`). The brief instructs a design agent, on branch `design`, to add what `DESIGN.md`
never decided (colour, spacing, type sizes, a menu, a page system) as an amendment tabled as a
motion "Kleur, ruimte en pagina's", and to make one structural change under P9: the dossier
rendered on the site instead of linked to GitHub. The agent stops at a specimen checkpoint and
again before the merge; both through `ASKS.md`. Nothing is filed for a scheduled run.

For the board, notes the design agent filed while reading (nothing in `law/` or the governing
files was changed):

- **Over page and the layouts.** The brief asks the Over page to explain layouts A, B and C and
  why B was chosen. The owner decided on 2026-10-11 that design choices are never published on
  the website. The agent follows the 2026-10-11 decision and leaves the layouts off the Over
  page; the owner can say otherwise at the checkpoint.
- **`site/layouts/` are still published.** They sit under `site/`, which the Pages workflow
  uploads whole. The 2026-10-11 decision said they may stay in the repository as the record;
  moving them out of `site/` (for instance to `tools/layouts/`) would take them off the website
  without losing the record. Operator's item; the agent leaves them at their addresses, unlinked.
- **The protocols and the discrepancy log are in English.** `DISPUTES.md`, `CASES.md` and
  `DISCREPANCIES.md` are rendered on the site verbatim under a Dutch title with one Dutch
  sentence. A Dutch B1 version of the dispute and submission protocols is a board matter
  (`CHARTER.md` P7, P10).
- **`law/` holds no article-by-article text of the acts.** The Wet year pages render what
  `law/` has: every parameter with its article, source and quoted text, and the amendments
  of that year. A full text per year would be the operator's encoding work under `LAW.md`.
- **Status words in Dutch.** The old checker translated `draft` to "concept: door niemand
  nagelezen" in the result. The brief says to use the repository's words in its language; the
  site now shows `draft` and explains each word once on the Over page. If the board wants a
  Dutch vocabulary, that is a `LAW.md` matter.

## 2026-10-20 — owner decision: design is the owner's, not the board's

**Source:** the owner, Andries, in the owner-initiated design session, 2026-10-20. Verbatim:

> And the board does not vote on design, kleur ruimte or paginas. Design is fully decided by me.
> The board only votes on functionality. Design is just aesthetics.

Recorded as an owner decision in `BOARD.md` (tie-break rule and decision log). The motion of
2026-10-19 is withdrawn; `site/DESIGN-amendment.md` is the owner's design, waiting for his yes on
the specimen (`ASKS.md` 8), after which it goes into `DESIGN.md` as an owner decision.

## 2026-10-20 — owner: the specimen is a yes (Ask 8)

**Source:** the owner, Andries, in the owner-initiated design session, 2026-10-20. After one
change (the space above the page title: first wider, then "use the space between the separator and
field 1 as a reference; that same space at the top of every page"), verbatim: "This is a yes."
Recorded in `BOARD.md` and `DESIGN.md` ("Kleur, ruimte en pagina's"); Ask 8 done.
