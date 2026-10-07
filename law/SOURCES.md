# law/SOURCES.md — dated source index

Every text the encoding rests on, as consulted, with the version and the date retrieved.
Order of authority per `LAW.md`. Newest consultation first within each section. A source
listed here is not yet a rule encoded; see `zorgtoeslag/rules.md` and `awir/rules.md`.

## 1. Statutes and regelingen (wetten.overheid.nl, officielebekendmakingen.nl)

| Text | Identifier | Version consulted | Articles read | Retrieved |
|------|-----------|-------------------|---------------|-----------|
| Wet op de zorgtoeslag (Wzt) | BWBR0018451 | geldend van 01-01-2026 t/m heden — https://wetten.overheid.nl/BWBR0018451/2026-01-01 | 1, 2, 3, 4, 5 (verbatim); no artikel 2a in this version | 2026-10-07 |
| Wet op de zorgtoeslag (Wzt) | BWBR0018451 | geldend van 01-01-2025 t/m 31-12-2025 — https://wetten.overheid.nl/BWBR0018451/2025-01-01 | 2 lid 3, 3 lid 1 (verbatim) | 2026-10-07 |
| Algemene wet inkomensafhankelijke regelingen (Awir) | BWBR0018472 | geldend van 01-01-2026 t/m 30-09-2026 — https://wetten.overheid.nl/BWBR0018472/2026-01-01 | 2, 3, 5, 7, 8, 9 (3 lid 1, 5, 7 lid 1, 8 lid 1–2, 9 lid 2 verbatim; the rest summarised); 26a lid 1 | 2026-10-07 |
| Algemene wet inkomensafhankelijke regelingen (Awir) | BWBR0018472 | geldend van 01-10-2026 t/m heden — https://wetten.overheid.nl/BWBR0018472/2026-10-01 | 3 lid 2, 7 lid 3–4 (verbatim). Amended by Stb. 2025, 431 (with Stb. 2023, 498 and Stb. 2019, 512), published 04-12-2025, in force 01-10-2026. **Which articles changed is not yet identified** — open item for a next run. | 2026-10-07 |
| Wet minimumloon en minimumvakantiebijslag (WML) | BWBR0002638 | geldend van 01-01-2026 t/m 03-02-2026 — https://wetten.overheid.nl/BWBR0002638/2026-01-01 | 8 lid 1 onder a–c, 8 lid 2 (verbatim, with the redactionele noot giving the 1 January 2026 amounts) | 2026-10-07 |
| Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2026 | Stcrt. 2025, 40022 — https://zoek.officielebekendmakingen.nl/stcrt-2025-40022.html | signed 17-11-2025, published 25-11-2025, in force 01-01-2026 | 1 (standaardpremie € 2.119), 2, 3, 4 (verbatim) | 2026-10-07 |
| Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2025 | Stcrt. 2024, 38887 | published 28-11-2024 | 1 (standaardpremie € 2.112) — **read via secondary source (taxlive.nl, V-N Vandaag), primary not yet opened** | 2026-10-07 |
| Regeling indexatie wettelijk minimumloon en bekendmaking per 1 januari 2026 (SZW, nr. 2025-0000213859, 01-10-2025) | Stcrt. 2025, 34131, published 09-10-2025 | in force 01-01-2026 | WML art. 8 lid 1 onder a: € 14,71 per uur; onder b: € 2.294,40 per maand — **read via secondary source (salarisvanmorgen.nl) and the redactionele noot on wetten.overheid.nl; primary not yet opened** | 2026-10-07 |
| Regeling indexatie wettelijk minimumloon en bekendmaking per 1 januari 2025 (SZW) | Stcrt. 2024 (number not yet recorded), published 17-10-2024 | in force 01-01-2025 | WML art. 8 lid 1 onder a: € 14,06 per uur; onder b: € 2.191,80 per maand — **secondary sources only (taxence.nl, salarisvanmorgen.nl); primary not yet opened** | 2026-10-07 |

Secondary-sourced figures above are used in the encoding only where they are corroborated:
€ 2.294,40 appears both in the secondary report and in the redactionele noot on
wetten.overheid.nl; € 2.112 and € 2.191,80 are corroborated by the Dienst Toeslagen leaflet
below (€ 28.406 = 108% × 12 × € 2.191,80 rounded). Opening the primary Staatscourant texts
is an open item.

## 3. Published uitvoeringsbeleid of the Dienst Toeslagen

| Text | Identifier | What it gives | Retrieved |
|------|-----------|---------------|-----------|
| Dienst Toeslagen, *Berekening zorgtoeslag 2025* (TG 082 - 1Z51FD), februari 2025 | https://download.belastingdienst.nl/toeslagen/docs/berekening_zorgtoeslag_tg0821z51fd.pdf | The five-step method the Dienst applies; 2025 parameters as the Dienst states them (standaardpremie € 2.112, drempelinkomen **€ 28.406**, 1,896% / 4,273% / 13,70%, vermogen € 141.896 / € 179.429, inkomensgrens € 39.719 / € 50.206); monthly amounts rounded **down** to whole euros in all three examples; the woonlandfactor method for verdragsgerechtigden; three rekenvoorbeelden (stored as cases `zt-2025-pub-001..003`) | 2026-10-07 |

## 5. Published worked figures (cases only, never rules)

| Page | What it gives | Retrieved |
|------|---------------|-----------|
| Belastingdienst, *Hoeveel zorgtoeslag krijg ik?* — https://www.belastingdienst.nl/wps/wcm/connect/nl/zorgtoeslag/content/hoeveel-zorgtoeslag | 2025 and 2026 tables of toetsingsinkomen (per € 500) → zorgtoeslag per maand, zonder en met toeslagpartner; "De bedragen per maand zijn afgerond". Selected rows stored as cases `zt-2026-pub-001..005`. | 2026-10-07 |
| Belastingdienst, *Hoeveel inkomen mag ik hebben voor zorgtoeslag?* — https://www.belastingdienst.nl/wps/wcm/connect/nl/zorgtoeslag/content/maximaal-inkomen-voor-zorgtoeslag | 2026: "niet boven de grens van € 40.857"; met toeslagpartner "niet meer dan € 51.142". 2025: € 39.719 / € 50.206. See `DISCREPANCIES.md` #2. | 2026-10-07 |
| Belastingdienst, *Hoeveel vermogen mag ik hebben om zorgtoeslag te krijgen?* — https://www.belastingdienst.nl/wps/wcm/connect/nl/zorgtoeslag/content/maximaal-vermogen-zorgtoeslag | 2026: € 146.011 / € 184.633 (matches Wzt art. 3 lid 1). Read via search excerpt only. | 2026-10-07 |

## Not yet consulted (open items, in priority order)

1. Awir version 01-10-2026: what Stb. 2025, 431 changed (a dated amendment for `CHANGES.md`).
2. Any provision setting a minimum amount below which no tegemoetkoming is granted or paid, and any rounding provision (Awir, Uitvoeringsregeling Awir). Needed for `DISCREPANCIES.md` #1 and #2.
3. The legal basis of the woonlandfactor applied to the standaardpremie for verdragsgerechtigden (Dienst Toeslagen leaflet step 5). Until traced, not encoded.
4. The primary Staatscourant texts marked "secondary" above.
5. The amending instruments behind the 2025→2026 changes to Wzt art. 2 lid 3 (percentages) and art. 3 lid 1 (vermogensgrenzen; art. 3 lid 2 says: bij ministeriële regeling overeenkomstig de tabelcorrectiefactor).
6. Wzt art. 2 lid 5–6: the ministerial regeling on monthly determination, if one exists.
