# Zorgtoeslag — test report, generated 2026-10-08 by tools/build.py

Generated file; do not edit. Verified cases are tests (blocking); published and synthetic
cases are checks (reported). Every failing check is a discrepancy in `DISCREPANCIES.md`.

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

---

Cases run: 18, passed: 10, failed: 8, skipped: 0. Verified cases: 0. Blocking failures: 0.
