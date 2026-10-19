# site/fonts/

Self-hosted, subset web fonts (`DESIGN.md` P8; `site/DESIGN-amendment.md`). Source Sans 3
(Regular, Semibold) and Source Serif 4 (Regular, Italic, Semibold) by Adobe, from the
`release` branches of `adobe-fonts/source-sans` and `adobe-fonts/source-serif`, under the
SIL Open Font License 1.1 (`LICENSE-source-sans.md`, `LICENSE-source-serif.md`).

Subset with fontTools (`pyftsubset`) to U+0020–007E, U+00A0–00FF, U+0100–017F (Latin
Extended-A), U+2010–2027, U+2030–203A, U+20AC (€), U+2212 (−), U+2264–2265, U+2192, U+00D7,
U+00F7, U+2122; layout features kept: kern, liga, tnum, pnum, lnum, onum, smcp, c2sc, mark,
mkmk. No hinting. Total 115 780 bytes.
