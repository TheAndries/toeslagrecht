# Zorgtoeslag — test report, generated 2026-10-10 by tools/build.py

Generated file; do not edit. Verified cases are tests (blocking); published and synthetic
cases are checks (reported). Every failing check is a discrepancy in `DISCREPANCIES.md`.

## zt-2024-pub-001 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2024 (TG 082 - 1Z41FD, januari 2024), rekenvoorbeeld 1: alleenstaande, jaarinkomen € 19.000; normpremie € 503,93; zorgtoeslag per jaar € 1.483,07; per maand € 123,59 (na afronding € 123)

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 503.93 | 503.94 (exact 503.936976960) | NO |
| aanspraak_jaar | 1483.07 | 1483.06 (exact 1483.063023040) | NO |
| aanspraak_maand | 123.59 | 123.59 (exact 123.5885852533333333333333333) | yes |
| aanspraak_maand_afgerond_praktijk | 123 | 123 | yes |

Note: Dienst rekent met drempelinkomen 'vastgesteld op € 26.819'; de tekst geeft € 26.819,424 (DISCREPANCIES.md #1). Verwacht één cent verschil in normpremie en jaarbedrag.

## zt-2024-pub-002 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2024 (TG 082 - 1Z41FD, januari 2024), rekenvoorbeeld 2: gehuwd, aanvrager € 7.000, partner € 26.200, partner geen verzekerde (militair); normpremie € 2.013,70; subtotaal € 1.960,30; 50%: € 980,15 per jaar; per maand € 81,68 (na afronding € 81)

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 2013.70 | 2013.66 (exact 2013.659424640) | NO |
| aanspraak_jaar | 980.15 | 980.17 (exact 980.1702876800) | NO |
| aanspraak_maand | 81.68 | 81.68 (exact 81.68085730666666666666666667) | yes |
| aanspraak_maand_afgerond_praktijk | 81 | 81 | yes |

Note: Zelfde constructie als het voorbeeld van 2025 en 2026 (Wzt art. 2 lid 4). Dienst rekent met drempelinkomen € 26.819; DISCREPANCIES.md #1.

## zt-2024-pub-003 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2024 (TG 082 - 1Z41FD, januari 2024), rekenvoorbeeld 3: gehuwd, wonend in Duitsland; aanvrager verdragsgerechtigd (CAK) met AOW € 9.000, partner in Duitsland verzekerd met € 11.000; standaardpremie € 3.974 × 0,9485 = € 3.769,34; normpremie € 1.141,42; subtotaal € 2.627,92; 50%: € 1.313,96 per jaar; per maand € 109,50 (na afronding € 109)

| field | expected | encoding | match |
|---|---|---|---|
| standaardpremie_totaal | 3769.34 | 3769.34 (exact 3769.3390) | yes |
| normpremie | 1141.42 | 1141.43 (exact 1141.434685440) | NO |
| aanspraak_jaar | 1313.96 | 1313.95 (exact 1313.9521572800) | NO |
| aanspraak_maand | 109.50 | 109.50 (exact 109.4960131066666666666666667) | yes |
| aanspraak_maand_afgerond_praktijk | 109 | 109 | yes |

Note: Woonlandfactor Duitsland 2024 0,9485 (Rzv bijlage 4, Stcrt. 2023, 29907). In 2024 heet het artikel art. 3 (per 06-11-2024 art. 4a). Dienst rekent met drempelinkomen € 26.819; DISCREPANCIES.md #1.

## zt-2024-pub-004 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2024, stap 2: 'Uw klant heeft geen recht op zorgtoeslag als het toetsingsinkomen hoger is dan € 37.496 (aanvrager zonder toeslagpartner), € 47.368 (aanvrager met toeslagpartner)'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Op de grens zelf: recht. Aanspraak ≈ € 23,5 → € 24 (Awir art. 14 lid 4-5), met beide drempelinkomens.

## zt-2024-pub-005 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2024, stap 2: 'Uw klant heeft geen recht op zorgtoeslag als het toetsingsinkomen hoger is dan € 37.496 (aanvrager zonder toeslagpartner), € 47.368 (aanvrager met toeslagpartner)'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens: geen recht (≈ € 23,4 → € 23 < € 24).

## zt-2024-pub-006 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2024, stap 2: 'Uw klant heeft geen recht op zorgtoeslag als het toetsingsinkomen hoger is dan € 37.496 (aanvrager zonder toeslagpartner), € 47.368 (aanvrager met toeslagpartner)'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Op de grens met partner: recht (≈ € 23,5 → € 24).

## zt-2024-pub-007 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2024, stap 2: 'Uw klant heeft geen recht op zorgtoeslag als het toetsingsinkomen hoger is dan € 37.496 (aanvrager zonder toeslagpartner), € 47.368 (aanvrager met toeslagpartner)'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens met partner: geen recht.

## zt-2025-pub-001 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2025 (TG 082 - 1Z51FD), februari 2025, rekenvoorbeeld 1

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 538.58 | 538.57 (exact 538.572602880) | NO |
| aanspraak_jaar | 1573.42 | 1573.43 (exact 1573.427397120) | NO |
| aanspraak_maand | 131.12 | 131.12 (exact 131.118949760) | yes |
| aanspraak_maand_afgerond_praktijk | 131 | 131 | yes |

Note: De Dienst rekent met drempelinkomen € 28.406 (afgerond); de wet geeft € 28.405,728. Zie DISCREPANCIES.md #1.

## zt-2025-pub-002 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2025 (TG 082 - 1Z51FD), februari 2025, rekenvoorbeeld 2 (aanvrager met partner die als militair geen verzekerde is)

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 1870.57 | 1870.59 (exact 1870.592021440) | NO |
| aanspraak_jaar | 1176.72 | 1176.70 (exact 1176.7039892800) | NO |
| aanspraak_maand | 98.06 | 98.06 (exact 98.05866577333333333333333333) | yes |
| aanspraak_maand_afgerond_praktijk | 98 | 98 | yes |

Note: Zie DISCREPANCIES.md #1 (afronding drempelinkomen).

## zt-2025-pub-003 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2025 (TG 082 - 1Z51FD), februari 2025, rekenvoorbeeld 3 (verdragsgerechtigde in België met partner die geen verzekerde is; woonlandfactor 0,7981)

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 1213.79 | 1213.78 (exact 1213.776757440) | NO |
| aanspraak_jaar | 1078.69 | 1078.70 (exact 1078.6988212800) | NO |
| aanspraak_maand | 89.89 | 89.89 (exact 89.8915684400) | yes |
| aanspraak_maand_afgerond_praktijk | 89 | 89 | yes |

Note: Rekenvoorbeeld 3: aanvrager verdragsgerechtigd (Zvw art. 69) in België, partner noch verzekerde noch verdragsgerechtigde. Wzt art. 4a lid 1 en 4, art. 2 lid 4. Overgeslagen tot 2026-10-08 (grondslag toen nog niet getraceerd); de woonlandfactor 0,7981 staat in parameters/2025.yaml. Normpremie en jaarbedrag verschillen door DISCREPANCIES.md #1.

## zt-2025-pub-004 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2025 (TG 082 - 1Z51FD), februari 2025, stap 2: geen recht als het toetsingsinkomen hoger is dan € 39.719 (zonder toeslagpartner); Belastingdienst tabel 2025 idem.

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Op de gepubliceerde grens 2025: aanspraak € 23,51 (wet) / € 23,54 (Dienst, drempel € 28.406) → beide € 24 → toegekend. In 2025 verandert de afronding van het drempelinkomen de grens dus niet.

## zt-2025-pub-005 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2025, stap 2: geen recht boven € 39.719; Belastingdienst, 'Hoeveel inkomen mag ik hebben voor zorgtoeslag?' (2025: € 39.719 / € 50.206).

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Een euro boven de grens 2025: € 23,37 → € 23 → niet toegekend (Awir art. 14 lid 5).

## zt-2025-tab-mp-28000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 28.000' → '€ 250'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 250 | 250 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-28500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 28.500' → '€ 249'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 249 | 249 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-29000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 29.000' → '€ 244'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 244 | 244 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-29500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 29.500' → '€ 238'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 238 | 238 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-30000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 30.000' → '€ 232'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 232 | 232 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-30500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 30.500' → '€ 226'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 226 | 226 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-31000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 31.000' → '€ 221'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 221 | 221 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-31500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 31.500' → '€ 215'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 215 | 215 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-32000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 32.000' → '€ 209'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 209 | 209 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-32500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 32.500' → '€ 204'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 204 | 204 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-33000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 33.000' → '€ 198'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 198 | 198 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-33500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 33.500' → '€ 192'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 192 | 192 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-34000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 34.000' → '€ 187'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 187 | 187 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-34500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 34.500' → '€ 181'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 181 | 181 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-35000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 35.000' → '€ 175'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 175 | 175 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-35500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 35.500' → '€ 169'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 169 | 169 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-36000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 36.000' → '€ 164'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 164 | 164 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-36500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 36.500' → '€ 158'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 158 | 158 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-37000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 37.000' → '€ 152'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 152 | 152 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-37500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 37.500' → '€ 147'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 147 | 147 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-38000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 38.000' → '€ 141'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 141 | 141 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-38500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 38.500' → '€ 135'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 135 | 135 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-39000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 39.000' → '€ 129'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 129 | 129 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-39500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 39.500' → '€ 124'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 124 | 124 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-40000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 40.000' → '€ 118'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 118 | 118 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-40500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 40.500' → '€ 112'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 112 | 112 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-41000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 41.000' → '€ 107'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 107 | 107 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-41500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 41.500' → '€ 101'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 101 | 101 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-42000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 42.000' → '€ 95'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 95 | 95 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-42500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 42.500' → '€ 89'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 89 | 89 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-43000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 43.000' → '€ 84'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 84 | 84 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-43500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 43.500' → '€ 78'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 78 | 78 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-44000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 44.000' → '€ 72'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 72 | 72 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-44500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 44.500' → '€ 67'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 67 | 67 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-45000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 45.000' → '€ 61'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 61 | 61 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-45500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 45.500' → '€ 55'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 55 | 55 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-46000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 46.000' → '€ 50'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 50 | 50 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-46500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 46.500' → '€ 44'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 44 | 44 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-47000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 47.000' → '€ 38'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 38 | 38 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-47500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 47.500' → '€ 32'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 32 | 32 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-48000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 48.000' → '€ 27'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 27 | 27 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-48500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 48.500' → '€ 21'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 21 | 21 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-49000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 49.000' → '€ 15'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 15 | 15 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-49500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 49.500' → '€ 10'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 10 | 10 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-50000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, rij 'tot € 50.000' → '€ 4'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 4 | 4 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2025-tab-mp-50206-en-meer — FAIL — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 met toeslagpartner, laatste rij '€ 50.206 en meer' → 'U krijgt geen zorgtoeslag'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 24.00 (exact 24) | NO |

Note: Laatste rij van de tabel, op het genoemde inkomen zelf ('en meer' sluit het in). Let op: dezelfde Belastingdienst publiceert op 'Hoeveel inkomen mag ik hebben voor zorgtoeslag?' € 50.206 als grens waarop nog wél recht bestaat ('niet boven de grens van' / 'niet meer dan'), en het rekenvoorbeeld van de Dienst geeft op dit inkomen € 24 per jaar. De tabelrij spreekt de grenspagina tegen op precies deze euro.

## zt-2025-tab-zp-28000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 28.000' → '€ 131'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 131 | 131 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-28500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 28.500' → '€ 130'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 130 | 130 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-29000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 29.000' → '€ 124'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 124 | 124 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-29500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 29.500' → '€ 118'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 118 | 118 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-30000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 30.000' → '€ 112'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 112 | 112 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-30500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 30.500' → '€ 107'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 107 | 107 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-31000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 31.000' → '€ 101'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 101 | 101 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-31500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 31.500' → '€ 95'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 95 | 95 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-32000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 32.000' → '€ 90'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 90 | 90 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-32500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 32.500' → '€ 84'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 84 | 84 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-33000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 33.000' → '€ 78'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 78 | 78 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-33500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 33.500' → '€ 73'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 73 | 73 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-34000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 34.000' → '€ 67'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 67 | 67 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-34500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 34.500' → '€ 61'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 61 | 61 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-35000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 35.000' → '€ 55'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 55 | 55 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-35500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 35.500' → '€ 50'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 50 | 50 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-36000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 36.000' → '€ 44'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 44 | 44 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-36500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 36.500' → '€ 38'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 38 | 38 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-37000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 37.000' → '€ 33'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 33 | 33 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-37500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 37.500' → '€ 27'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 27 | 27 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-38000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 38.000' → '€ 21'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 21 | 21 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-38500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 38.500' → '€ 15'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 15 | 15 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-39000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 39.000' → '€ 10'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 10 | 10 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-39500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, rij 'tot € 39.500' → '€ 4'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 4 | 4 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2025-tab-zp-39719-en-meer — FAIL — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2025 zonder toeslagpartner, laatste rij '€ 39.719 en meer' → 'U krijgt geen zorgtoeslag'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 24.00 (exact 24) | NO |

Note: Laatste rij van de tabel, op het genoemde inkomen zelf ('en meer' sluit het in). Let op: dezelfde Belastingdienst publiceert op 'Hoeveel inkomen mag ik hebben voor zorgtoeslag?' € 39.719 als grens waarop nog wél recht bestaat ('niet boven de grens van' / 'niet meer dan'), en het rekenvoorbeeld van de Dienst geeft op dit inkomen € 24 per jaar. De tabelrij spreekt de grenspagina tegen op precies deze euro.

## zt-2026-pub-001 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel 2026 zonder toeslagpartner, rij 'tot € 29.500'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 129 | 129 | yes |

Note: Tabelrij; alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' € 29.500; de bovengrens van de rij is als invoer genomen.

## zt-2026-pub-002 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel 2026 met toeslagpartner, rij 'tot € 29.500'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 246 | 246 | yes |

Note: Tabelrij op het gezamenlijke inkomen; de verdeling over de partners doet er voor de formule niet toe.

## zt-2026-pub-003 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel 2026 zonder toeslagpartner, rij 'tot € 30.000'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 126 | 126 | yes |

## zt-2026-pub-004 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel 2026 zonder toeslagpartner, rij 'tot € 40.500' (laatste rij met een bedrag)

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 6 | 6 | yes |

## zt-2026-pub-005 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel 2026 met toeslagpartner, rij 'tot € 51.000' (laatste rij met een bedrag)

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 3 | 3 | yes |

## zt-2026-pub-006 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel inkomen mag ik hebben voor zorgtoeslag?': 'U kunt in 2026 zorgtoeslag krijgen als uw jaarinkomen niet boven de grens van € 40.857 uitkomt.' Een euro daarboven, volgens de Dienst: geen zorgtoeslag.

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Toetst de gepubliceerde inkomensgrens. Verwacht veld gewijzigd 2026-10-08 van aanspraak_jaar (de formule van Wzt art. 2, die hier € 23,33 geeft) naar tegemoetkoming (na Awir art. 14 lid 4-5). Zie DISCREPANCIES.md #2.

## zt-2026-pub-007 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2026 (TG 082 - 1Z61FD), januari 2026, rekenvoorbeeld 1

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 568.55 | 568.54 (exact 568.541306880) | NO |
| aanspraak_jaar | 1550.45 | 1550.46 (exact 1550.458693120) | NO |
| aanspraak_maand | 129.20 | 129.20 (exact 129.2048910933333333333333333) | yes |
| aanspraak_maand_afgerond_praktijk | 129 | 129 | yes |

Note: De Dienst rekent met drempelinkomen € 29.736 ('vastgesteld op'); de wet geeft € 29.735,424. Zie DISCREPANCIES.md #1. De leaflet noemt dit ook de maximale zorgtoeslag 2026 zonder partner (€ 1.550).

## zt-2026-pub-008 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2026 (TG 082 - 1Z61FD), januari 2026, rekenvoorbeeld 2 (aanvrager met partner die als militair geen verzekerde is)

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 1750.98 | 1751.04 (exact 1751.038620160) | NO |
| aanspraak_jaar | 1243.51 | 1243.48 (exact 1243.4806899200) | NO |
| aanspraak_maand | 103.02 | 103.62 (exact 103.6233908266666666666666667) | NO |
| aanspraak_maand_afgerond_praktijk | 103 | 103 | yes |

Note: Zie DISCREPANCIES.md #1 (afronding drempelinkomen).

## zt-2026-pub-009 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2026 (TG 082 - 1Z61FD), januari 2026, rekenvoorbeeld 3 (verdragsgerechtigde in België met partner die noch verzekerde noch verdragsgerechtigde is; woonlandfactor 0,8165)

| field | expected | encoding | match |
|---|---|---|---|
| standaardpremie_totaal | 3460.33 | 3460.33 (exact 3460.3270) | yes |
| normpremie | 1275.37 | 1275.35 (exact 1275.352335360) | NO |
| aanspraak_jaar | 1092.48 | 1092.49 (exact 1092.4873323200) | NO |
| aanspraak_maand | 91.04 | 91.04 (exact 91.04061102666666666666666667) | yes |
| aanspraak_maand_afgerond_praktijk | 91 | 91 | yes |

Note: Wzt art. 4a lid 1 en 4 (standaardpremie van beiden × woonlandfactor), art. 2 lid 4 (50%). Zie DISCREPANCIES.md #1 voor de normpremie.

## zt-2026-pub-010 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2026, stap 2: 'Uw klant heeft geen recht op zorgtoeslag als het toetsingsinkomen hoger is dan € 40.857 (aanvrager zonder toeslagpartner)'; op € 40.857 is er dus recht. Belastingdienst, 'Hoeveel inkomen mag ik hebben voor zorgtoeslag?': 'niet boven de grens van € 40.857'.

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 0.00 (exact 0) | NO |

Note: Op de gepubliceerde grens zelf. Met het drempelinkomen van de Dienst (€ 29.736) is de aanspraak € 23,54 → afgerond € 24 → toegekend (Awir art. 14 lid 4-5). Met het drempelinkomen van de wet (€ 29.735,424) is zij € 23,47 → € 23 → niet toegekend. Dit is het ene geval waarin DISCREPANCIES.md #1 de uitkomst verandert.

## zt-2026-pub-011 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2026, stap 2: geen recht als het gezamenlijke toetsingsinkomen hoger is dan € 51.142 (met toeslagpartner); Belastingdienst, 'Hoeveel inkomen mag ik hebben voor zorgtoeslag?': 'niet meer dan € 51.142'.

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Op de gepubliceerde grens met partner: aanspraak ≈ € 23,5 → € 24 → toegekend. Eén euro hoger (€ 51.143) geeft € 23 → niet toegekend, met beide drempelinkomens.

## zt-2026-pub-012 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel inkomen mag ik hebben voor zorgtoeslag?': met toeslagpartner 'niet meer dan € 51.142'; een euro daarboven geen zorgtoeslag.

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Tegenhanger van zt-2026-pub-011. Zie DISCREPANCIES.md #2.

## zt-2026-syn-001 — FAIL — check (synthetic)

Source: Geconstrueerd door de operator naar de formule in Dienst Toeslagen, Berekening zorgtoeslag 2026, stap 5: 'Uw klant is een verzekerde en de toeslagpartner is geen verdragsgerechtigde en geen verzekerde: (standaardpremie + standaardpremie x woonlandfactor - normpremie) x 50%'. Verwachte uitkomst = die formule met woonlandfactor België 0,8165; geen door de Dienst gepubliceerd getal.

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_jaar | 1296.11 | 1481.32 (exact 1481.3238323200) | NO |

Note: Formule van de Dienst: (2.119 + 2.119 × 0,8165 − 1.275,37) × 50% = € 1.296,11 (met drempelinkomen € 29.736; met € 29.735,424 wordt het € 1.296,12). Wzt art. 4a lid 4 past de woonlandfactor alleen toe op de partner van een verdragsgerechtigde; de aanvrager is hier een gewone verzekerde, zodat de tekst 2 × € 2.119 geeft: (4.238 − 1.275,35) × 50% = € 1.481,32. Een synthetische case telt nooit als verificatie (CASES.md). Zie DISCREPANCIES.md #3.

## zt-2026-syn-002 — PASS — check (synthetic)

Source: Geconstrueerd door de operator: rendementsgrondslag één euro boven / precies op de grens van Wzt art. 3 lid 1 (2026: € 146.011). Geen gepubliceerd getal.

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: 'meer bedraagt dan € 146.011': € 146.012 is erboven, het hele jaar geen aanspraak. Synthetisch; telt nooit als verificatie (CASES.md).

## zt-2026-syn-003 — PASS — check (synthetic)

Source: Geconstrueerd door de operator: rendementsgrondslag één euro boven / precies op de grens van Wzt art. 3 lid 1 (2026: € 146.011). Geen gepubliceerd getal.

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1550.00 | 1550.00 (exact 1550) | yes |

Note: Precies op de grens is niet 'meer dan': aanspraak. € 2.119 − 1,912% × € 29.735,424 = € 1.550,46 → € 1.550 (Awir art. 14 lid 4). Synthetisch; telt nooit als verificatie.

## zt-2026-syn-004 — PASS — check (synthetic)

Source: Geconstrueerd door de operator op 2026-10-10 om de woonlandfactor van Noorwegen te oefenen: de landcode NO werd door de YAML-lezer als 'onwaar' gelezen, zodat de factor van Noorwegen in de encoding onbereikbaar was (gevonden bij het bouwen van de rekenpagina; hersteld door de sleutel te quoten). Verwachte uitkomst: woonlandfactor Noorwegen 2026 = 1,0000 (Regeling zorgverzekering bijlage 4, Stcrt. 2025, 38064), dus dezelfde aanspraak als een verzekerde in Nederland: € 2.119 − normpremie bij € 25.000 (1,912% × 29.735,424 = 568,54) = € 1.550,46.

| field | expected | encoding | match |
|---|---|---|---|
| standaardpremie_totaal | 2119.00 | 2119.00 (exact 2119.0000) | yes |
| aanspraak_jaar | 1550.46 | 1550.46 (exact 1550.458693120) | yes |
| tegemoetkoming | 1550.00 | 1550.00 (exact 1550) | yes |

Note: Synthetisch; telt nooit als verificatie (CASES.md). Zonder de fix gaf de encoding geen woonlandfactor-stap en een onbepaald-noot 'verdragsgerechtigde zonder (bekend) woonland'.

## zt-2026-tab-mp-30000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 30.000' → '€ 243'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 243 | 243 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-30500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 30.500' → '€ 238'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 238 | 238 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-31000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 31.000' → '€ 232'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 232 | 232 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-31500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 31.500' → '€ 226'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 226 | 226 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-32000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 32.000' → '€ 221'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 221 | 221 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-32500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 32.500' → '€ 215'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 215 | 215 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-33000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 33.000' → '€ 209'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 209 | 209 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-33500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 33.500' → '€ 203'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 203 | 203 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-34000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 34.000' → '€ 198'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 198 | 198 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-34500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 34.500' → '€ 192'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 192 | 192 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-35000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 35.000' → '€ 186'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 186 | 186 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-35500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 35.500' → '€ 180'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 180 | 180 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-36000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 36.000' → '€ 175'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 175 | 175 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-36500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 36.500' → '€ 169'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 169 | 169 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-37000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 37.000' → '€ 163'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 163 | 163 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-37500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 37.500' → '€ 158'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 158 | 158 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-38000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 38.000' → '€ 152'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 152 | 152 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-38500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 38.500' → '€ 146'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 146 | 146 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-39000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 39.000' → '€ 140'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 140 | 140 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-39500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 39.500' → '€ 135'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 135 | 135 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-40000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 40.000' → '€ 129'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 129 | 129 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-40500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 40.500' → '€ 123'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 123 | 123 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-41000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 41.000' → '€ 118'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 118 | 118 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-41500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 41.500' → '€ 112'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 112 | 112 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-42000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 42.000' → '€ 106'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 106 | 106 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-42500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 42.500' → '€ 100'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 100 | 100 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-43000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 43.000' → '€ 95'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 95 | 95 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-43500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 43.500' → '€ 89'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 89 | 89 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-44000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 44.000' → '€ 83'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 83 | 83 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-44500 — FAIL — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 44.500' → '€ 78'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 78 | 77 | NO |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-45000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 45.000' → '€ 72'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 72 | 72 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-45500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 45.500' → '€ 66'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 66 | 66 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-46000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 46.000' → '€ 60'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 60 | 60 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-46500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 46.500' → '€ 55'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 55 | 55 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-47000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 47.000' → '€ 49'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 49 | 49 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-47500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 47.500' → '€ 43'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 43 | 43 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-48000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 48.000' → '€ 37'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 37 | 37 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-48500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 48.500' → '€ 32'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 32 | 32 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-49000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 49.000' → '€ 26'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 26 | 26 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-49500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 49.500' → '€ 20'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 20 | 20 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-50000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 50.000' → '€ 15'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 15 | 15 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-50500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, rij 'tot € 50.500' → '€ 9'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 9 | 9 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005. Het gezamenlijke toetsingsinkomen is wat telt (Awir art. 7 lid 1); het is hier geheel aan de aanvrager toegerekend.

## zt-2026-tab-mp-51500-en-meer — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 met toeslagpartner, laatste rij '€ 51.500 en meer' → 'U krijgt geen zorgtoeslag'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Laatste rij van de tabel, op het genoemde inkomen zelf ('en meer' sluit het in).

## zt-2026-tab-zp-30500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 30.500' → '€ 120'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 120 | 120 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-31000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 31.000' → '€ 114'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 114 | 114 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-31500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 31.500' → '€ 109'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 109 | 109 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-32000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 32.000' → '€ 103'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 103 | 103 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-32500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 32.500' → '€ 97'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 97 | 97 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-33000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 33.000' → '€ 91'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 91 | 91 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-33500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 33.500' → '€ 86'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 86 | 86 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-34000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 34.000' → '€ 80'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 80 | 80 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-34500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 34.500' → '€ 74'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 74 | 74 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-35000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 35.000' → '€ 69'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 69 | 69 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-35500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 35.500' → '€ 63'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 63 | 63 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-36000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 36.000' → '€ 57'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 57 | 57 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-36500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 36.500' → '€ 51'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 51 | 51 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-37000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 37.000' → '€ 46'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 46 | 46 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-37500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 37.500' → '€ 40'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 40 | 40 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-38000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 38.000' → '€ 34'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 34 | 34 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-38500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 38.500' → '€ 28'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 28 | 28 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-39000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 39.000' → '€ 23'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 23 | 23 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-39500 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 39.500' → '€ 17'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 17 | 17 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-40000 — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, rij 'tot € 40.000' → '€ 11'; 'De bedragen per maand zijn afgerond'

| field | expected | encoding | match |
|---|---|---|---|
| aanspraak_maand_afgerond_praktijk | 11 | 11 | yes |

Note: Tabelrij uit de volledige tabel (sweep 2026-10-09); alleen het afgeronde maandbedrag is gepubliceerd. De rij geldt 'tot' het genoemde inkomen; de bovengrens van de rij is als invoer genomen, zoals bij zt-2026-pub-001..005.

## zt-2026-tab-zp-41000-en-meer — PASS — check (published)

Source: Belastingdienst, 'Hoeveel zorgtoeslag krijg ik?', tabel zorgtoeslag per maand 2026 zonder toeslagpartner, laatste rij '€ 41.000 en meer' → 'U krijgt geen zorgtoeslag'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Laatste rij van de tabel, op het genoemde inkomen zelf ('en meer' sluit het in).

---

Browser encoding (`site/zorgtoeslag-regels.js`, node v22.22.0): 163 cases compared with the Python encoding, 163 identical, 0 different.

---

Cases run: 163, passed: 149, failed: 14, skipped: 0. Verified cases: 0. Blocking failures: 0. Browser/Python differences: 0 (blocking: the two encodings must agree).
