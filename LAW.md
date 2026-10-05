# LAW.md

How the law is encoded. Plain files under `law/`, readable without any tool.

## Sources, in order of authority

1. The statute and its regelingen as published on `wetten.overheid.nl`, by article, with
   the version's effective date (`geldend van … tot …`). For the toeslagen: the Algemene wet
   inkomensafhankelijke regelingen (Awir), the Wet op de zorgtoeslag, the Wet op de
   huurtoeslag, their uitvoeringsregelingen, and the yearly bedragen published in the
   Staatscourant.
2. Amendments and their effective dates from `officielebekendmakingen.nl`.
3. Beleidsregels and published uitvoeringsbeleid of the Belastingdienst/Toeslagen.
4. Case law from `rechtspraak.nl`, cited by ECLI.
5. Published worked examples (Belastingdienst, Nibud, Rijksoverheid), cited by URL and date
   retrieved — used as cases (`CASES.md`), never as a source of rules.

A rule drawn from (3) or (4) rather than (1) is marked as such in the encoding; the checker
shows the reader the difference between "the law says" and "the Belastingdienst applies".

## Structure

```
law/
  <toeslag>/
    rules.md          — every rule, one section each, with its article and effective dates
    parameters/
      <year>.yaml     — all amounts, thresholds, rates for that year, each with its source
    rules.<ext>       — the executable encoding, one function per rule, pure, no I/O
    tests/            — generated from CASES.md; the encoding must pass every verified case
  awir/               — the general rules shared by all toeslagen (partner, income, assets,
                        toetsingsinkomen, peildatum), same layout
  CHANGES.md          — every amendment encoded, newest first: article, old, new, effective
                        date, source, commit
```

## What a rule looks like

Every rule has, in `rules.md` and in the code:

- an id, stable forever (`zt-2026-art2-1` style: toeslag, first year encoded, article);
- the article and version it comes from, linked;
- the rule in plain Dutch, one paragraph, as a citizen could read it;
- the rule as code, pure, taking named inputs and returning a named output;
- its effective dates — a rule that changed gets a new version with its own dates, the old
  version stays and is selected by year;
- its status: `draft` / `tested` (passes every verified case that exercises it) / `reviewed`
  (a named human with relevant expertise has read it against the article) / `established`
  (two independent reviewers), plus `contested` while a dispute is in step 4 of
  `DISPUTES.md`;
- what it does with discretion: where the article leaves room, the rule returns an explicit
  `undetermined` with the article cited, never a chosen value.

## Years

The encoding is a time series. Every parameter file and every rule version carries its
year or effective date, and the checker can compute any year the project has encoded. The
first year encoded for each toeslag is the current one; the project then works backwards
(`PLAN.md`), because the record's value is in the history.

## Testing

`tests/` is generated from the verified cases in `CASES.md`. The encoding is not committed
unless every verified case passes. A case that fails after an amendment is a discrepancy to
investigate, not a test to delete.

## What the encoding is not

It is regenerable. A better model will write it better. Nothing in `law/` is the asset
except `CHANGES.md` and the dated versions, which are the record of the law as it stood.
