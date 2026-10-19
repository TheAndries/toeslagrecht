# site/

The site: static files, built from `law/`, `cases/` and the governing files by
`tools/build.py build` (`tools/render.py`), that run entirely in the citizen's browser.
Plain Dutch at B1, phone first, WCAG 2.2 AA, nothing to sell, nothing leaves the device.
The binding rules are in [`DESIGN.md`](../DESIGN.md); the result follows layout B, *het verhaal*
(owner, 2026-10-09); the colour, type and page system is direction A, *het formulier*
(owner, 2026-10-19), tabled as an amendment in [`DESIGN-amendment.md`](DESIGN-amendment.md).
Licence: MIT ([`LICENSE`](../LICENSE)).

Generated (do not edit; the sources are the record):

- `index.html` and `zorgtoeslag.html` — the form, the same page at the old and the new address.
- `dossier/` — one page per rule (`zorgtoeslag/<id>/`, `awir/<id>/`) and per case (`voorbeelden/<id>/`).
- `wet/` — one page per year from the parameter files, the amendments (`wijzigingen/`), the sources (`bronnen/`).
- `verschillen/` — the discrepancy log, one page per entry.
- `betwisten/`, `insturen/`, `over/` — the protocols verbatim, and about the site.
- `zorgtoeslag-parameters.js` — every parameter file as one object, with each number's article.
- `specimens/narekenen-a.html` and its screenshots — the checkpoint exhibit of 2026-10-19.

Source, not generated:

- `zorgtoeslag-regels.js` — the rules in the browser: a line-by-line port of `law/zorgtoeslag/rules.py`
  with the same rule ids, exact BigInt arithmetic. `tools/build.py check` runs every case through both.
- `static/tokens.css` (every colour, size and spacing), `static/site.css` (the components), `fonts/`
  (Source Sans 3, Source Serif 4, subset, OFL), `specimens/components.html`.
- `layouts/` — the three layouts shown for Ask 3, kept as the record of the choice; not linked.

Published by `.github/workflows/pages.yml` on every push to `main`.
