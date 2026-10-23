# Zorgtoeslag — test report, generated 2026-10-23 by tools/build.py

Generated file; do not edit. Verified cases are tests (blocking); published and synthetic
cases are checks (reported). Every failing check is a discrepancy in `DISCREPANCIES.md`.

## zt-2015-rul-001 — PASS — check (ruling)

Source: ABRvS 13 februari 2019, ECLI:NL:RVS:2019:418 (zaaknr. 201805037/1/A2), procesverloop en r.o. 3: 'Bij besluit van 2 september 2016 heeft de Belastingdienst/Toeslagen de zorgtoeslag, het kindgebonden budget en de huurtoeslag van [appellante] over 2015 definitief berekend en de zorgtoeslag vastgesteld op € 663,00'; 'Volgens de BRI bedroeg het gezamenlijke toetsingsinkomen van [appellante] en [kind 1], haar oudste zoon, voor de bepaling van de zorgtoeslag en het kindgebonden budget in 2015 € 27.886,00.' De meerderjarige zoon, het hele jaar op hetzelfde adres ingeschreven, is de toeslagpartner (Awir art. 3 lid 2 onder e en g; r.o. 4–5.2); de Afdeling bevestigt de definitieve berekening. Het geschatte inkomen voor het voorschot was € 16.395; het voorschotbedrag noemt de uitspraak niet. Volledige tekst via data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RVS:2019:418

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 663.00 | 663.00 (exact 663) | yes |

Note: De eerste uitkomst van de Dienst Toeslagen voor 2015 in het dossier, met inkomen. Het gezamenlijke toetsingsinkomen staat in één bedrag; de verdeling over aanvrager en partner doet er voor de berekening niet toe (Wzt art. 2 lid 2). Uit de tekst: normpremie = 5,265% × € 19.463,328 + 13,400% × (€ 27.886 − € 19.463,328) = € 1.024,74 + € 1.128,64 = € 2.153,38; 2 × € 1.408 − € 2.153,38 = € 662,62 → € 663 (Awir art. 14 lid 4). De uitspraak zegt niets over vermogen of over de verzekering van de partner; het bedrag bewijst dat met tweemaal de standaardpremie is gerekend (art. 2 lid 1). Met een afgerond drempelinkomen (€ 19.463 of € 19.464, DISCREPANCIES.md #1) komt hetzelfde hele bedrag uit. Wordt verified zodra een met naam genoemde mens de invoer met de uitspraak vergelijkt (CASES.md; ASKS.md 9).

## zt-2015-syn-032 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015), Awir art. 14 lid 4-5 (geldend van 01-01-2015); de inkomensgrens zonder partner op de laatste euro met recht. Geen publicatie van de Dienst voor 2015 gevonden (leaflet 2015: niet gevonden)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2015 zonder toeslagpartner uit de tekst: normpremie = 2,395% × € 19.463,328 + 13,400% × (€ 26.316 − € 19.463,328) = € 466,15 + € 918,26 = € 1.384,40; € 1.408 − € 1.384,40 = € 23,60 (precies € 23,5952) → € 24 (Awir art. 14 lid 4), net toegekend (lid 5). Zie syn-033 voor de euro erboven. Met een naar beneden afgerond drempelinkomen (€ 19.463, DISCREPANCIES.md #1) blijft het € 24 (€ 23,56); met € 19.464 ook (€ 23,67) — maar dan krijgt ook € 26.317 nog € 24 (€ 23,54), zie syn-033. Het maximum 2015 zonder partner uit de tekst is € 942 (€ 941,85), het bedrag dat de ABRvS op 20 juni 2018 (zaak 201709274/1/A2) als voorschot 2015 noemt. Wordt een published case zodra een publicatie van de Dienst voor 2015 de grens noemt.

## zt-2015-syn-033 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015), Awir art. 14 lid 4-5 (geldend van 01-01-2015); de inkomensgrens zonder partner op de eerste euro zonder recht. Geen publicatie van de Dienst voor 2015 gevonden (leaflet 2015: niet gevonden)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: De euro boven de inkomensgrens 2015 zonder toeslagpartner (syn-032): € 1.408 − € 1.384,54 = € 23,46 → € 23 → niet toegekend (Awir art. 14 lid 5). Met een naar beneden afgerond drempelinkomen (€ 19.463) ook niets (€ 23,43); met een naar boven afgerond drempelinkomen (€ 19.464, zoals de Dienst in 2023, 2025 en 2026 deed, DISCREPANCIES.md #1) zou hier € 23,54 → € 24 uitkomen en de grens één euro hoger liggen. Een gepubliceerde grens 2015 van de Dienst (€ 26.316 of € 26.317) zou #1 voor 2015 beslissen.

## zt-2015-syn-034 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015), Awir art. 14 lid 4-5 (geldend van 01-01-2015); de inkomensgrens met partner op de laatste euro met recht. Geen publicatie van de Dienst voor 2015 gevonden (leaflet 2015: niet gevonden)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2015 met toeslagpartner uit de tekst: normpremie = 5,265% × € 19.463,328 + 13,400% × (€ 32.655 − € 19.463,328) = € 1.024,74 + € 1.767,68 = € 2.792,43; 2 × € 1.408 − € 2.792,43 = € 23,57 → € 24, net toegekend. Zie syn-035 voor de euro erboven. Met een afgerond drempelinkomen (€ 19.463 of € 19.464) blijft het € 24 (€ 23,54 resp. € 23,61). Het maximum 2015 met partner uit de tekst is € 1.791 (€ 1.791,26).

## zt-2015-syn-035 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015), Awir art. 14 lid 4-5 (geldend van 01-01-2015); de inkomensgrens met partner op de eerste euro zonder recht. Geen publicatie van de Dienst voor 2015 gevonden (leaflet 2015: niet gevonden)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: De euro boven de inkomensgrens 2015 met toeslagpartner (syn-034): 2 × € 1.408 − € 2.792,56 = € 23,44 → € 23 → niet toegekend (Awir art. 14 lid 5). Ook met een afgerond drempelinkomen (€ 19.463: € 23,41; € 19.464: € 23,47) komt hier niets uit: met partner beslist de afronding van het drempelinkomen de grens 2015 niet. Het gezamenlijke toetsingsinkomen van € 27.886 waarbij de Dienst € 663 toekende (cases/zt-2015-rul-001) ligt onder deze grens.

## zt-2016-rul-001 — PASS — check (ruling)

Source: ABRvS 17 augustus 2022, ECLI:NL:RVS:2022:2397 (zaaknr. 202104114/1/A2), r.o. 1: 'Bij besluit van 11 augustus 2017 heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant] over 2016 definitief berekend en vastgesteld op € 1.905,00. Bij het besluit van 3 mei 2019, gehandhaafd bij het besluit van 17 maart 2020, heeft de Belastingdienst/Toeslagen deze eerdere definitieve berekening van de zorgtoeslag over 2016 aangepast en vastgesteld op nihil en het teveel ontvangen bedrag aan zorgtoeslag van € 1.905,00 en de daarover verschuldigde rente van € 140,00 teruggevorderd. Aan dit besluit heeft de dienst ten grondslag gelegd dat uit de Basisregistratie inkomen bleek dat het inkomen van [appellant] en zijn toeslagpartner was vastgesteld op € 45.149,00'. Het hoger beroep (een 'definitieve' berekening zou niet herzien mogen worden) is ongegrond verklaard (Awir art. 20 lid 1); de herziening naar nihil staat

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eerste zaak uit de rechtspraak voor 2016. De uitspraak noemt alleen het inkomen van aanvrager en toeslagpartner samen (€ 45.149); de verdeling doet voor Wzt art. 2 lid 2 niet ter zake, dus is het hele bedrag bij de aanvrager gezet. Uit de tekst: de inkomensgrens met partner 2016 is € 33.765 (syn-030), dus bij € 45.149 is de normpremie (€ 4.441,30) hoger dan tweemaal de standaardpremie (€ 2.936): geen aanspraak, wat de Dienst ook besliste. Of de partner verzekerde was maakt bij dit inkomen niets uit (bij de helft van niets blijft het niets); 'true' is de aanname die niets verandert. De eerdere definitieve berekening van € 1.905 is het maximum met partner uit de tekst van 2016 (2 × € 1.468 − 5,220% × € 19.758,816 = € 1.904,59 → € 1.905, Awir art. 14 lid 4) en veronderstelt een gezamenlijk inkomen tot het drempelinkomen; dat inkomen noemt de uitspraak niet, dus is die berekening geen case (SOURCES.md §4). Beide bedragen beslissen DISCREPANCIES.md #1 niet. Wordt 'verified' zodra een met naam genoemd mens (CASES.md) de invoer tegen de uitspraak heeft gelegd — ASKS.md 9.

## zt-2016-syn-028 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016), Awir art. 14 lid 4-5 (geldend van 01-01-2016); de inkomensgrens zonder partner op de laatste euro met recht. Geen publicatie van de Dienst voor 2016 gevonden (leaflet 2016: niet gevonden)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2016 zonder toeslagpartner uit de tekst: normpremie = 2,380% × € 19.758,816 + 13,430% × (€ 27.013 − € 19.758,816) = € 470,26 + € 974,24 = € 1.444,50; € 1.468 − € 1.444,50 = € 23,50 (precies € 23,5033) → € 24 (Awir art. 14 lid 4), net toegekend (lid 5). Zie syn-029 voor de euro erboven. Met een naar beneden afgerond drempelinkomen (€ 19.758, DISCREPANCIES.md #1) zou hier € 23,41 → € 23 → niets uitkomen; met € 19.759 blijft het € 24: als in 2017 en 2018 beslist de afronding van het drempelinkomen de grens. Wordt een published case zodra een 2016-grens van de Dienst gevonden is.

## zt-2016-syn-029 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016), Awir art. 14 lid 4-5 (geldend van 01-01-2016); de inkomensgrens zonder partner op de eerste euro zonder recht. Geen publicatie van de Dienst voor 2016 gevonden (leaflet 2016: niet gevonden)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: De euro boven de inkomensgrens 2016 zonder toeslagpartner (syn-028): € 1.468 − € 1.444,63 = € 23,37 → € 23 → niet toegekend (Awir art. 14 lid 5). Ook met een afgerond drempelinkomen (€ 19.758 of € 19.759) komt hier niets uit.

## zt-2016-syn-030 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016), Awir art. 14 lid 4-5 (geldend van 01-01-2016); de inkomensgrens met partner op de laatste euro met recht. Geen publicatie van de Dienst voor 2016 gevonden (leaflet 2016: niet gevonden)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2016 met toeslagpartner uit de tekst (gezamenlijk toetsingsinkomen, hier geheel bij de aanvrager gezet): normpremie = 5,220% × € 19.758,816 + 13,430% × (€ 33.765 − € 19.758,816) = € 1.031,41 + € 1.881,03 = € 2.912,44; 2 × € 1.468 − € 2.912,44 = € 23,56 → € 24, net toegekend. Zie syn-031 voor de euro erboven. Met een naar beneden afgerond drempelinkomen (€ 19.758) zou hier € 23,49 → € 23 → niets uitkomen; met € 19.759 blijft het € 24 (DISCREPANCIES.md #1). Wordt een published case zodra een 2016-grens van de Dienst gevonden is.

## zt-2016-syn-031 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016), Awir art. 14 lid 4-5 (geldend van 01-01-2016); de inkomensgrens met partner op de eerste euro zonder recht. Geen publicatie van de Dienst voor 2016 gevonden (leaflet 2016: niet gevonden)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: De euro boven de inkomensgrens 2016 met toeslagpartner (syn-030): 2 × € 1.468 − € 2.912,58 = € 23,42 → € 23 → niet toegekend (Awir art. 14 lid 5). Ook met een afgerond drempelinkomen komt hier niets uit. Het gezamenlijke toetsingsinkomen van € 45.149 waarbij de Dienst de zorgtoeslag 2016 van een echtpaar op nihil stelde (ECLI:NL:RVS:2022:2397, cases/zt-2016-rul-001) ligt ver boven deze grens.

## zt-2017-syn-024 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017; gelijk in de versie van 01-07-2017), Awir art. 14 lid 4-5 (geldend van 01-01-2017); de inkomensgrens zonder partner op de laatste euro met recht. Geen publicatie van de Dienst voor 2017 gevonden (leaflet 2017: 404)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2017 zonder toeslagpartner uit de tekst: normpremie = 2,305% × € 20.108,736 + 13,460% × (€ 27.857 − € 20.108,736) = € 463,51 + € 1.042,92 = € 1.506,42; € 1.530 − € 1.506,42 = € 23,58 → € 24 (Awir art. 14 lid 4), net toegekend (lid 5). Zie syn-025 voor de euro erboven. Met een naar beneden afgerond drempelinkomen (€ 20.108, DISCREPANCIES.md #1) zou hier € 23,50 (precies € 23,4952) → € 23 → niets uitkomen; met € 20.109 blijft het € 24: als in 2018 beslist de afronding van het drempelinkomen de grens. Wordt een published case zodra een 2017-grens van de Dienst gevonden is.

## zt-2017-syn-025 — PASS — check (synthetic)

Source: Berekend uit de tekst (zie zt-2017-syn-024): één euro boven de inkomensgrens zonder partner

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: € 1.530 − (2,305% × € 20.108,736 + 13,460% × (€ 27.858 − € 20.108,736)) = € 23,44 → € 23 < € 24 → geen tegemoetkoming (Awir art. 14 lid 5). Ook met een afgerond drempelinkomen (€ 20.108 of € 20.109) niets.

## zt-2017-syn-026 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017; gelijk in de versie van 01-07-2017), Awir art. 14 lid 4-5 (geldend van 01-01-2017); de inkomensgrens met toeslagpartner op de laatste euro met recht. Geen publicatie van de Dienst voor 2017 gevonden (leaflet 2017: 404)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2017 met toeslagpartner uit de tekst: normpremie = 5,055% × € 20.108,736 + 13,460% × (€ 35.116 − € 20.108,736) = € 1.016,50 + € 2.019,98 = € 3.036,47; 2 × € 1.530 − € 3.036,47 = € 23,53 → € 24, net toegekend. Met een naar beneden afgerond drempelinkomen (€ 20.108) zou het € 23,46 → € 23 → niets zijn (#1); met € 20.109 blijft het € 24.

## zt-2017-syn-027 — PASS — check (synthetic)

Source: Berekend uit de tekst (zie zt-2017-syn-026): één euro boven de inkomensgrens met toeslagpartner

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: 2 × € 1.530 − (5,055% × € 20.108,736 + 13,460% × (€ 35.117 − € 20.108,736)) = € 23,39 → € 23 < € 24 → geen tegemoetkoming (Awir art. 14 lid 5).

## zt-2018-syn-020 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2018 t/m 31-12-2018), Awir art. 14 lid 4-5 (geldend van 01-01-2018); de inkomensgrens zonder partner op de laatste euro met recht. Geen publicatie van de Dienst voor 2018 gevonden (leaflet 2018: 404)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2018 zonder toeslagpartner uit de tekst: normpremie = 1,990% × € 20.450,88 + 13,490% × (€ 28.720 − € 20.450,88) = € 406,97 + € 1.115,51 = € 1.522,48; € 1.546 − € 1.522,48 = € 23,52 → € 24 (Awir art. 14 lid 4), net toegekend (lid 5). Zie syn-021 voor de euro erboven. Met een naar beneden afgerond drempelinkomen (€ 20.450, DISCREPANCIES.md #1) zou hier € 23,40 → € 23 → niets uitkomen: 2018 is het eerste jaar waarin de grens de afronding van het drempelinkomen beslist. Wordt een published case zodra de Dienst's 2018-grens gevonden is.

## zt-2018-syn-021 — PASS — check (synthetic)

Source: Berekend uit de tekst (zie zt-2018-syn-020): één euro boven de inkomensgrens zonder partner

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: € 1.546 − (1,990% × € 20.450,88 + 13,490% × (€ 28.721 − € 20.450,88)) = € 23,39 → € 23 < € 24 → geen tegemoetkoming (Awir art. 14 lid 5).

## zt-2018-syn-022 — PASS — check (synthetic)

Source: Berekend uit de tekst (zie zt-2018-syn-020): de inkomensgrens met toeslagpartner op de laatste euro met recht

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2018 met toeslagpartner uit de tekst: normpremie = 4,750% × € 20.450,88 + 13,490% × (€ 35.996 − € 20.450,88) = € 971,42 + € 2.097,04 = € 3.068,45; 2 × € 1.546 − € 3.068,45 = € 23,55 → € 24, net toegekend. Met een naar beneden afgerond drempelinkomen (€ 20.450) zou het € 23,46 → € 23 → niets zijn (#1); met € 20.451 blijft het € 24.

## zt-2018-syn-023 — PASS — check (synthetic)

Source: Berekend uit de tekst (zie zt-2018-syn-022): één euro boven de inkomensgrens met toeslagpartner

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: 2 × € 1.546 − (4,750% × € 20.450,88 + 13,490% × (€ 35.997 − € 20.450,88)) = € 23,41 → € 23 < € 24 → geen tegemoetkoming (Awir art. 14 lid 5).

## zt-2019-rul-001 — PASS — check (ruling)

Source: ABRvS 10 mei 2023, ECLI:NL:RVS:2023:1809 (zaaknr. 202202303/1/A2), r.o. 2: 'Bij het besluit van 6 november 2020, als gehandhaafd bij het besluit van 23 november 2020, heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant] over 2019 definitief berekend en vastgesteld op € 1.367,00. Hierbij is uitgegaan van een gezamenlijk toetsingsinkomen van € 27.946,00.' R.o. 1: aanvrager en partner zijn toeslagpartners (Awir art. 3). Het hoger beroep (de eenmalige pensioenuitkering zou over meer jaren verdeeld moeten worden) is ongegrond verklaard; de definitieve berekening staat

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1367.00 | 1367.00 (exact 1367) | yes |

Note: Eerste zaak uit de rechtspraak in het corpus. De uitspraak noemt alleen het gezamenlijke toetsingsinkomen (€ 27.946); de verdeling over beide partners doet voor Wzt art. 2 lid 2 niet ter zake, dus is het hele bedrag bij de aanvrager gezet. Dat de partner verzekerde was volgt niet met zoveel woorden uit de uitspraak, maar wel uit het bedrag: € 1.367 is 2 × € 1.609 − normpremie (€ 1.850,70) = € 1.367,30 → € 1.367 (Awir art. 14 lid 4); bij een niet-verzekerde partner zou het de helft zijn geweest. Vermogen noemt de uitspraak niet; de toeslag is toegekend, dus de vermogenstoets (art. 2a) is doorstaan. Met een op € 20.940 of € 20.941 afgerond drempelinkomen komt dezelfde € 1.367 uit: deze zaak beslist DISCREPANCIES.md #1 niet. Wordt 'verified' zodra een met naam genoemd mens (CASES.md) de invoer tegen de uitspraak heeft gelegd — ASKS.md 9.

## zt-2019-rul-002 — PASS — check (ruling)

Source: ABRvS 10 mei 2023, ECLI:NL:RVS:2023:1809 (zaaknr. 202202303/1/A2), r.o. 1: 'Bij besluit van 27 december 2018 heeft de Belastingdienst/Toeslagen aan [appellant] voorschotten zorgtoeslag voor 2019 toegekend ter hoogte van € 2.314,00. Het voorschot is berekend op basis van een geschat gezamenlijk toetsingsinkomen van € 13.314,00.' Een voorschot (Awir art. 16), geen definitieve berekening; dezelfde partners als zt-2019-rul-001

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 2314.00 | 2314.00 (exact 2314) | yes |

Note: Gezamenlijk toetsingsinkomen onder het drempelinkomen (€ 20.940,768): normpremie = 4,315% × drempelinkomen = € 903,59; 2 × € 1.609 − € 903,59 = € 2.314,41 → € 2.314 (Awir art. 14 lid 4) — het maximum met partner in 2019. Een voorschot op een geschat inkomen, door de Dienst zelf op 27-12-2018 berekend; het laat zien dat de voorschotberekening van de Dienst voor 2019 dezelfde formule volgde. Het verschil met zt-2019-rul-001 (€ 950 terugvordering, r.o. 2) is 2.314 − 1.367 = 947, niet 950: de uitspraak verklaart de € 3 niet (mogelijk een later herzien voorschot); hier niet als discrepantie gelogd omdat beide beschikkingsbedragen afzonderlijk kloppen met de tekst. Wordt 'verified' op dezelfde voet als rul-001 (ASKS.md 9).

## zt-2019-syn-016 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-18 uit de tekst van 2019 (Wzt 01-01-2019; Stcrt. 2018, 66728; Stcrt. 2018, 59237; Stb. 2018, 431). Geen publicatie van de Dienst Toeslagen voor 2019 gelezen: de leaflet Berekening zorgtoeslag 2019 is op 2026-10-18 niet gevonden (tg0821z90fd t/m z94fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Laatste euro met recht zonder partner volgens de tekst: standaardpremie € 1.609 − (2,005% × € 20.940,768 + 13,52% × (€ 29.562 − € 20.940,768)) = € 23,547 → € 24 (Awir art. 14 lid 4-5). Wordt 'published' zodra een publicatie van de Dienst voor 2019 de grens noemt.

## zt-2019-syn-017 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-18 uit de tekst van 2019 (Wzt 01-01-2019; Stcrt. 2018, 66728; Stcrt. 2018, 59237; Stb. 2018, 431). Geen publicatie van de Dienst Toeslagen voor 2019 gelezen: de leaflet Berekening zorgtoeslag 2019 is op 2026-10-18 niet gevonden (tg0821z90fd t/m z94fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens: € 23,41 → € 23, niet toegekend (Awir art. 14 lid 5). Met een op € 20.941 afgerond drempelinkomen (DISCREPANCIES.md #1) zou het € 23,43 → € 23 blijven; de grens verschuift in 2019 niet door de afronding.

## zt-2019-syn-018 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-18 uit de tekst van 2019 (Wzt 01-01-2019; Stcrt. 2018, 66728; Stcrt. 2018, 59237; Stb. 2018, 431). Geen publicatie van de Dienst Toeslagen voor 2019 gelezen: de leaflet Berekening zorgtoeslag 2019 is op 2026-10-18 niet gevonden (tg0821z90fd t/m z94fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Laatste euro met recht met toeslagpartner volgens de tekst: 2 × € 1.609 − (4,315% × € 20.940,768 + 13,52% × (€ 37.885 − € 20.940,768)) = € 23,546 → € 24 (Awir art. 14 lid 4-5).

## zt-2019-syn-019 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-18 uit de tekst van 2019 (Wzt 01-01-2019; Stcrt. 2018, 66728; Stcrt. 2018, 59237; Stb. 2018, 431). Geen publicatie van de Dienst Toeslagen voor 2019 gelezen: de leaflet Berekening zorgtoeslag 2019 is op 2026-10-18 niet gevonden (tg0821z90fd t/m z94fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens met toeslagpartner: € 23,41 → € 23, niet toegekend (Awir art. 14 lid 5). Met € 20.941 als drempelinkomen: € 23,43 → € 23; geen verschuiving.

## zt-2020-rul-001 — PASS — check (ruling)

Source: ABRvS 17 december 2025, ECLI:NL:RVS:2025:6164 (zaaknr. 202401854/1/A2), procesverloop en r.o. 1: 'Bij besluit van 9 oktober 2021 heeft de Dienst Toeslagen de zorgtoeslag van [appellante] over 2020 vastgesteld op € 1.163,00 en € 87,00 teruggevorderd.' 'Op 26 mei 2021 heeft de Dienst Toeslagen een melding gekregen van de Basisregistratie Inkomensgegevens dat het inkomen van [appellante] in 2020 € 22.070,00 bedraagt. De Dienst Toeslagen heeft op basis hiervan de zorgtoeslag over 2020 definitief berekend.' De uitspraak noemt geen partner; het bedrag past alleen bij een verzekerde zonder partner. Het hoger beroep slaagde alleen op de terugvordering (vertrouwensbeginsel, r.o. 4.3); de vaststelling op € 1.163 staat (r.o. 4.2)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1163.00 | 1163.00 (exact 1163) | yes |

Note: Definitieve berekening 2020, zonder partner: normpremie = 1,830% × € 21.430,656 + 13,550% × (€ 22.070 − € 21.430,656) = € 392,18 + € 86,63 = € 478,81; € 1.642 − € 478,81 = € 1.163,19 → € 1.163 (Awir art. 14 lid 4). Dat de aanvrager geen toeslagpartner had volgt niet met zoveel woorden uit de uitspraak (zij ontving een Anw-nabetaling en de uitspraak spreekt alleen over haar inkomen), maar wel uit het bedrag: met partner zou het € 1.913 (verzekerde partner) of € 957 zijn geweest. Vermogen noemt de uitspraak niet; de toeslag is toegekend. Met een drempelinkomen van € 21.430 of € 21.431 (DISCREPANCIES.md #1) komt dezelfde € 1.163 uit. Wordt 'verified' zodra een met naam genoemd mens de invoer tegen de uitspraak heeft gelegd (CASES.md; ASKS.md 9).

## zt-2020-rul-002 — PASS — check (ruling)

Source: ABRvS 17 december 2025, ECLI:NL:RVS:2025:6164 (zaaknr. 202401854/1/A2), r.o. 1: 'Bij besluit van 27 december 2019 heeft de Dienst Toeslagen aan [appellante] een voorschot zorgtoeslag over 2020 verleend van € 1.250,00, uitgaande van een geschat inkomen van € 12.313,00.' Een voorschot (Awir art. 16), dezelfde aanvrager als zt-2020-rul-001

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1250.00 | 1250.00 (exact 1250) | yes |

Note: Voorschot 2020 op een geschat inkomen onder het drempelinkomen (€ 21.430,656): normpremie = 1,830% × € 21.430,656 = € 392,18; € 1.642 − € 392,18 = € 1.249,82 → € 1.250 — het maximum zonder partner in 2020, door de Dienst zelf op 27-12-2019 berekend. Het verschil met rul-001 is € 87, precies de terugvordering die de uitspraak noemt. Wordt 'verified' op dezelfde voet als rul-001 (ASKS.md 9).

## zt-2020-rul-003 — PASS — check (ruling)

Source: ABRvS 27 november 2024, ECLI:NL:RVS:2024:4888 (zaaknr. 202305332/1/A2), procesverloop en r.o. 1: 'Bij besluit van 7 augustus 2021 heeft de Dienst Toeslagen de zorgtoeslag van [appellant] over het jaar 2020 definitief vastgesteld op € 1.665,00, en € 689,00 aan teveel uitbetaalde voorschotten teruggevorderd.' 'Op 16 juni 2021 heeft de Dienst Toeslagen een melding vanuit de Basisregistratie Inkomen ontvangen, waaruit blijkt dat het toetsingsinkomen van [appellant] en zijn toeslagpartner over 2020 voor hen samen is vastgesteld op € 26.834,00. Hierbij is de afkoopsom betrokken.' Het hoger beroep (de Dienst had moeten waarschuwen dat een afkoopsom klein pensioen meetelt) is ongegrond; de vaststelling staat

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1665.00 | 1665.00 (exact 1665) | yes |

Note: Definitieve berekening 2020, met toeslagpartner: normpremie = 4,140% × € 21.430,656 + 13,550% × (€ 26.834 − € 21.430,656) = € 887,23 + € 732,15 = € 1.619,38; 2 × € 1.642 − € 1.619,38 = € 1.664,62 → € 1.665 (Awir art. 14 lid 4). De uitspraak noemt alleen het gezamenlijke toetsingsinkomen; de verdeling doet voor Wzt art. 2 lid 2 niet ter zake, dus staat het hele bedrag bij de aanvrager. Dat de partner verzekerde was volgt uit het bedrag (de helft bij een niet-verzekerde partner). Vermogen noemt de uitspraak niet. Met € 21.430 of € 21.431 als drempelinkomen (#1) komt dezelfde € 1.665 uit. Wordt 'verified' op dezelfde voet als zt-2019-rul-001 (ASKS.md 9).

## zt-2020-syn-008 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-14 uit de tekst van 2020 (Wzt 01-01-2020; Stcrt. 2019, 64399; Stcrt. 2019, 56680; Stb. 2019, 386; Stcrt. 2019, 61842; Wet IB 2001 art. 5.2 en 5.5 tekst 2020). Geen publicatie van de Dienst Toeslagen voor 2020 gelezen: de leaflet Berekening zorgtoeslag 2020 is op 2026-10-14 niet gevonden (tg0821z01fd en z02fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |
| aanspraak_jaar | 23.63 | 23.63 (exact 23.63288320) | yes |

Note: De inkomensgrens 2020 zonder toeslagpartner uit de tekst, op de grens zelf: recht. Aanspraak 1.642 − 1,830% × 21.430,656 − 13,55% × (30.480 − 21.430,656) = € 23,63 → € 24 (Awir art. 14 lid 4-5).

## zt-2020-syn-009 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-14 uit de tekst van 2020 (Wzt 01-01-2020; Stcrt. 2019, 64399; Stcrt. 2019, 56680; Stb. 2019, 386; Stcrt. 2019, 61842; Wet IB 2001 art. 5.2 en 5.5 tekst 2020). Geen publicatie van de Dienst Toeslagen voor 2020 gelezen: de leaflet Berekening zorgtoeslag 2020 is op 2026-10-14 niet gevonden (tg0821z01fd en z02fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens: € 23,50 → € 23, niet toegekend (Awir art. 14 lid 5). Let op: met een op hele euro's afgerond drempelinkomen (€ 21.431, zoals de Dienst in andere jaren doet, DISCREPANCIES.md #1) zou dit € 23,54 → € 24 zijn; de tekst rondt niet. Wordt een discrepantie zodra een publicatie van de Dienst voor 2020 de grens op € 30.481 legt.

## zt-2020-syn-010 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-14 uit de tekst van 2020 (Wzt 01-01-2020; Stcrt. 2019, 64399; Stcrt. 2019, 56680; Stb. 2019, 386; Stcrt. 2019, 61842; Wet IB 2001 art. 5.2 en 5.5 tekst 2020). Geen publicatie van de Dienst Toeslagen voor 2020 gelezen: de leaflet Berekening zorgtoeslag 2020 is op 2026-10-14 niet gevonden (tg0821z01fd en z02fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |
| aanspraak_jaar | 23.58 | 23.58 (exact 23.57722960) | yes |

Note: De inkomensgrens 2020 met toeslagpartner uit de tekst, op de grens zelf (gezamenlijk € 38.945): 2 × 1.642 − 4,140% × 21.430,656 − 13,55% × (38.945 − 21.430,656) = € 23,58 → € 24.

## zt-2020-syn-011 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-14 uit de tekst van 2020 (Wzt 01-01-2020; Stcrt. 2019, 64399; Stcrt. 2019, 56680; Stb. 2019, 386; Stcrt. 2019, 61842; Wet IB 2001 art. 5.2 en 5.5 tekst 2020). Geen publicatie van de Dienst Toeslagen voor 2020 gelezen: de leaflet Berekening zorgtoeslag 2020 is op 2026-10-14 niet gevonden (tg0821z01fd en z02fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de gezamenlijke grens: € 23,44 → € 23, niet toegekend.

## zt-2020-syn-012 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-14 uit de tekst van 2020 (Wzt 01-01-2020; Stcrt. 2019, 64399; Stcrt. 2019, 56680; Stb. 2019, 386; Stcrt. 2019, 61842; Wet IB 2001 art. 5.2 en 5.5 tekst 2020). Geen publicatie van de Dienst Toeslagen voor 2020 gelezen: de leaflet Berekening zorgtoeslag 2020 is op 2026-10-14 niet gevonden (tg0821z01fd en z02fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |
| aanspraak_jaar | 0.00 | 0.00 (exact 0) | yes |

Note: Wzt art. 2 lid 5 (tekst 2020, vervallen per 2021): de partner is verzekeringsplichtig en heeft zich niet verzekerd — geen aanspraak, hoewel de berekening van lid 1 € 1.913,13 zou geven (2 × 1.642 − 4,140% × 21.430,656 − 13,55% × (25.000 − 21.430,656)). Zonder lid 5 (2021 en later) bestaat deze uitkomst niet meer.

## zt-2020-syn-013 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-14 uit de tekst van 2020 (Wzt 01-01-2020; Stcrt. 2019, 64399; Stcrt. 2019, 56680; Stb. 2019, 386; Stcrt. 2019, 61842; Wet IB 2001 art. 5.2 en 5.5 tekst 2020). Geen publicatie van de Dienst Toeslagen voor 2020 gelezen: de leaflet Berekening zorgtoeslag 2020 is op 2026-10-14 niet gevonden (tg0821z01fd en z02fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1250.00 | 1250.00 (exact 1250) | yes |
| aanspraak_jaar | 1249.82 | 1249.82 (exact 1249.81899520) | yes |

Note: Vermogenstoets 2020 op de grondslag sparen en beleggen: rendementsgrondslag € 116.613 − heffingvrij vermogen € 30.846 (Wet IB 2001 art. 5.5, 2020) = € 85.767, niet meer dan € 85.767 (Wzt art. 2a lid 1, tekst 2020): recht. Dezelfde € 116.613 is precies het bedrag dat Stb. 2020, 546 per 2021 als rendementsgrondslag-grens invoerde.

## zt-2020-syn-014 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-14 uit de tekst van 2020 (Wzt 01-01-2020; Stcrt. 2019, 64399; Stcrt. 2019, 56680; Stb. 2019, 386; Stcrt. 2019, 61842; Wet IB 2001 art. 5.2 en 5.5 tekst 2020). Geen publicatie van de Dienst Toeslagen voor 2020 gelezen: de leaflet Berekening zorgtoeslag 2020 is op 2026-10-14 niet gevonden (tg0821z01fd en z02fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro meer: grondslag sparen en beleggen € 85.768 > € 85.767: het hele jaar geen zorgtoeslag.

## zt-2020-syn-015 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-14 uit de tekst van 2020 (Wzt 01-01-2020; Stcrt. 2019, 64399; Stcrt. 2019, 56680; Stb. 2019, 386; Stcrt. 2019, 61842; Wet IB 2001 art. 5.2 en 5.5 tekst 2020). Geen publicatie van de Dienst Toeslagen voor 2020 gelezen: de leaflet Berekening zorgtoeslag 2020 is op 2026-10-14 niet gevonden (tg0821z01fd en z02fd: 404). Synthetic: een controle van de encoding tegen de tekst, geen verificatie (CASES.md)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Met het hele jaar dezelfde partner: gezamenlijke rendementsgrondslag € 147.460 − 2 × € 30.846 = € 85.768 > € 85.767: geen aanspraak (bij € 147.459 wel). € 147.459 is precies de gezamenlijke grens die Stb. 2020, 546 per 2021 invoerde.

## zt-2021-syn-004 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-13: de inkomensgrens 2021 (zonder toeslagpartner € 31.138, met toeslagpartner € 39.979) aan weerszijden van de grens-euro, berekend uit de tekst. Dezelfde twee grenzen citeert de zoekindex op 2026-10-13 uit de leaflet van Dienst Toeslagen, Berekening zorgtoeslag 2021 (tg0821z11fd), die zelf niet bereikbaar is (live 404; archiefkopie van 2024-07-18 geblokkeerd vanuit de routine) — daarom synthetic, niet published; wordt published zodra de leaflet gelezen is (ASKS.md 8)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Op de grens zelf: recht. Aanspraak 1.705 − 1,915% × 21.835,008 − 13,58% × (31.138 − 21.835,008) = € 23,51 → € 24 (Awir art. 14 lid 4-5).

## zt-2021-syn-005 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-13: de inkomensgrens 2021 (zonder toeslagpartner € 31.138, met toeslagpartner € 39.979) aan weerszijden van de grens-euro, berekend uit de tekst. Dezelfde twee grenzen citeert de zoekindex op 2026-10-13 uit de leaflet van Dienst Toeslagen, Berekening zorgtoeslag 2021 (tg0821z11fd), die zelf niet bereikbaar is (live 404; archiefkopie van 2024-07-18 geblokkeerd vanuit de routine) — daarom synthetic, niet published; wordt published zodra de leaflet gelezen is (ASKS.md 8)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens: € 23,38 → afgerond € 23 < € 24, geen toekenning (Awir art. 14 lid 5).

## zt-2021-syn-006 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-13: de inkomensgrens 2021 (zonder toeslagpartner € 31.138, met toeslagpartner € 39.979) aan weerszijden van de grens-euro, berekend uit de tekst. Dezelfde twee grenzen citeert de zoekindex op 2026-10-13 uit de leaflet van Dienst Toeslagen, Berekening zorgtoeslag 2021 (tg0821z11fd), die zelf niet bereikbaar is (live 404; archiefkopie van 2024-07-18 geblokkeerd vanuit de routine) — daarom synthetic, niet published; wordt published zodra de leaflet gelezen is (ASKS.md 8)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Op de grens zelf (gezamenlijk € 39.979): 3.410 − 4,225% × 21.835,008 − 13,58% × 18.143,992 = € 23,52 → € 24.

## zt-2021-syn-007 — PASS — check (synthetic)

Source: Door de operator geconstrueerd op 2026-10-13: de inkomensgrens 2021 (zonder toeslagpartner € 31.138, met toeslagpartner € 39.979) aan weerszijden van de grens-euro, berekend uit de tekst. Dezelfde twee grenzen citeert de zoekindex op 2026-10-13 uit de leaflet van Dienst Toeslagen, Berekening zorgtoeslag 2021 (tg0821z11fd), die zelf niet bereikbaar is (live 404; archiefkopie van 2024-07-18 geblokkeerd vanuit de routine) — daarom synthetic, niet published; wordt published zodra de leaflet gelezen is (ASKS.md 8)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens (gezamenlijk € 39.980): € 23,38 → € 23 < € 24, geen toekenning.

## zt-2022-pub-001 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2022 (TG 082 - 1Z21FD, januari 2022), rekenvoorbeeld 1: alleenstaande, jaarinkomen € 19.000; normpremie € 413,14; zorgtoeslag per jaar € 1.335,86; per maand € 111,32 (na afronding € 111)

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 413.14 | 413.14 (exact 413.138880000) | yes |
| aanspraak_jaar | 1335.86 | 1335.86 (exact 1335.861120000) | yes |
| aanspraak_maand | 111.32 | 111.32 (exact 111.321760000) | yes |
| aanspraak_maand_afgerond_praktijk | 111 | 111 | yes |

Note: Drempelinkomen 2022 is exact € 22.356 (108% × 12 × € 1.725,00), dus geen verschil uit DISCREPANCIES.md #1. 1,848% × 22.356 = 413,13888 → de Dienst drukt € 413,14 (afgerond). Het maximum van 2022 zonder partner (leaflet: € 1.336).

## zt-2022-pub-002 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2022 (TG 082 - 1Z21FD, januari 2022), rekenvoorbeeld 2: aanvrager met toeslagpartner die geen verzekerde is (militair), toetsingsinkomens € 7.000 + € 26.200; normpremie € 2.420,41; subtotaal € 1.077,59; zorgtoeslag per jaar € 538,80; per maand € 44,89 (na afronding € 45)

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 2420.41 | 2420.41 (exact 2420.409400000) | yes |
| aanspraak_jaar | 538.80 | 538.80 (exact 538.7953000000) | yes |
| aanspraak_maand | 44.89 | 44.90 (exact 44.89960833333333333333333333) | NO |
| aanspraak_maand_afgerond_praktijk | 45 | 45 | yes |

Note: Normpremie 2.420,4094 → de Dienst drukt € 2.420,41 (afgerond); 50% van 1.077,59 = 538,795 → € 538,80 (afgerond); maand 538,795 / 12 = 44,8996 → de Dienst drukt € 44,89 (afgekapt; afgerond zou € 44,90 zijn). Zie DISCREPANCIES.md #7 (2022 uitgebreid). Het hele maandbedrag 'na afronding € 45' is rekenkundig afgerond (floor(539 / 12) zou € 44 geven, zoals 2023–2026): DISCREPANCIES.md #8; het parameterbestand 2022 draagt daarom maand_afronding_praktijk: rekenkundig.

## zt-2022-pub-003 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2022 (TG 082 - 1Z21FD, januari 2022), rekenvoorbeeld 3: aanvrager verdragsgerechtigd (CAK) in Duitsland, partner in Duitsland verzekerd (geen verzekerde Wzt, geen verdragsgerechtigde), toetsingsinkomens € 9.000 + € 11.000, woonlandfactor 0,8138; standaardpremie € 3.498 × 0,8138 = € 2.846,67; normpremie € 944,54; subtotaal gedrukt '€ 1.602,13' (rekenkundig € 1.902,13); zorgtoeslag per jaar € 951,06; per maand € 79,25 (na afronding € 79)

| field | expected | encoding | match |
|---|---|---|---|
| standaardpremie_totaal | 2846.67 | 2846.67 (exact 2846.6724) | yes |
| normpremie | 944.54 | 944.54 (exact 944.541000000) | yes |
| aanspraak_jaar | 951.06 | 951.07 (exact 951.0657000000) | NO |
| aanspraak_maand | 79.25 | 79.26 (exact 79.2554750000) | NO |
| aanspraak_maand_afgerond_praktijk | 79 | 79 | yes |

Note: Stap 5 onder c van het leaflet 2022 (de factor op beide standaardpremies) is de methode van 2023 en 2024, niet die van 2026 en niet wat art. 3 lid 3 (tekst 2022) zegt: DISCREPANCIES.md #3 (2022 uitgebreid). Het gedrukte subtotaal € 1.602,13 is een zetfout voor € 1.902,13 (2.846,67 − 944,54); 50% daarvan is 951,065 → de Dienst drukt € 951,06 (afgekapt, waar rekenvoorbeeld 2 afrondt); 951,065 / 12 = 79,255 → € 79,25 (afgekapt). Zie #7.

## zt-2022-pub-004 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2022 (TG 082 - 1Z21FD, januari 2022), stap 2: 'Uw klant heeft geen recht op zorgtoeslag als het toetsingsinkomen hoger is dan € 31.998 (aanvrager zonder toeslagpartner), € 40.944 (aanvrager met toeslagpartner)'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Op de grens zelf: recht. Aanspraak 1.749 − 413,13888 − 13,61% × 9.642 = € 23,58 → € 24 (Awir art. 14 lid 4-5).

## zt-2022-pub-005 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2022 (TG 082 - 1Z21FD, januari 2022), stap 2: geen recht boven € 31.998 (zonder toeslagpartner)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens: aanspraak € 23,44 → € 23 → niet toegekend (Awir art. 14 lid 5). De tekst en het leaflet geven dezelfde grens, omdat het drempelinkomen 2022 een rond bedrag is.

## zt-2022-pub-006 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2022 (TG 082 - 1Z21FD, januari 2022), stap 2: geen recht boven € 40.944 (met toeslagpartner)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Op de grens zelf: recht. Aanspraak 3.498 − 944,541 − 13,61% × 18.588 = € 23,63 → € 24.

## zt-2022-pub-007 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2022 (TG 082 - 1Z21FD, januari 2022), stap 2: geen recht boven € 40.944 (met toeslagpartner)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens: aanspraak € 23,50 (exact 23,4961) → € 23 → niet toegekend.

## zt-2023-pub-001 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2023 (TG 082 - 1Z32FD, januari 2023), rekenvoorbeeld 1: alleenstaande, jaarinkomen € 19.000; normpremie € 30,84; zorgtoeslag per jaar € 1.858,16; per maand € 154,84 (na afronding € 154)

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 30.84 | 30.84 (exact 30.835883520) | yes |
| aanspraak_jaar | 1858.16 | 1858.16 (exact 1858.164116480) | yes |
| aanspraak_maand | 154.84 | 154.85 (exact 154.8470097066666666666666667) | NO |
| aanspraak_maand_afgerond_praktijk | 154 | 154 | yes |

Note: Dienst rekent met drempelinkomen 'vastgesteld op € 25.070'; de tekst geeft € 25.069,824 (DISCREPANCIES.md #1). Hier valt 0,123% van beide op dezelfde cent (€ 30,84), dus geen verschil verwacht. Het maximum van 2023 zonder partner (leaflet: € 1.858).

## zt-2023-pub-002 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2023 (TG 082 - 1Z32FD, januari 2023), rekenvoorbeeld 2: gehuwd, aanvrager € 7.000, partner € 26.200, partner geen verzekerde (militair); normpremie € 1.705,09; subtotaal € 2.072,91; 50%: € 1.036,45 per jaar; per maand € 86,37 (na afronding € 86)

| field | expected | encoding | match |
|---|---|---|---|
| normpremie | 1705.09 | 1705.12 (exact 1705.116421120) | NO |
| aanspraak_jaar | 1036.45 | 1036.44 (exact 1036.4417894400) | NO |
| aanspraak_maand | 86.37 | 86.37 (exact 86.3701491200) | yes |
| aanspraak_maand_afgerond_praktijk | 86 | 86 | yes |

Note: Zelfde constructie als het voorbeeld van 2024–2026 (Wzt art. 2 lid 4). Dienst rekent met drempelinkomen € 25.070; met € 25.069,824 geeft de tekst normpremie € 1.705,12 (drie cent; DISCREPANCIES.md #1).

## zt-2023-pub-003 — FAIL — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2023 (TG 082 - 1Z32FD, januari 2023), rekenvoorbeeld 3: gehuwd, wonend in Duitsland; aanvrager verdragsgerechtigd (CAK) met AOW € 9.000, partner in Duitsland verzekerd met € 11.000; standaardpremie € 3.778 × 0,8814 = € 3.329,92; normpremie € 596,16; subtotaal € 2.733,76; 50%: € 1.366,88 per jaar; per maand € 113,90 (na afronding € 113)

| field | expected | encoding | match |
|---|---|---|---|
| standaardpremie_totaal | 3329.92 | 3329.93 (exact 3329.9292) | NO |
| normpremie | 596.16 | 596.16 (exact 596.160414720) | yes |
| aanspraak_jaar | 1366.88 | 1366.88 (exact 1366.8843926400) | yes |
| aanspraak_maand | 113.90 | 113.91 (exact 113.9070327200) | NO |
| aanspraak_maand_afgerond_praktijk | 113 | 113 | yes |

Note: Woonlandfactor Duitsland 2023 0,8814 (Rzv bijlage 4, Stcrt. 2022, 29339). In 2023 heet het artikel art. 3 (per 06-11-2024 art. 4a). Inkomen onder het drempelinkomen: 2,378% × € 25.069,824 = € 596,16, gelijk aan de Dienst. De Dienst past de woonlandfactor op beide standaardpremies toe (stap 5 onder c), zoals in 2024; zie DISCREPANCIES.md #3.

## zt-2023-pub-004 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2023, stap 2: 'Uw klant heeft geen recht op zorgtoeslag als het toetsingsinkomen hoger is dan € 38.520 (aanvrager zonder toeslagpartner), € 48.224 (aanvrager met toeslagpartner)'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Op de grens zelf: recht. Aanspraak ≈ € 23,5 → € 24 (Awir art. 14 lid 4-5), met beide drempelinkomens.

## zt-2023-pub-005 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2023, stap 2: geen recht boven € 38.520 (zonder toeslagpartner)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens: geen recht (aanspraak < € 23,50 → € 23 → niet toegekend, Awir art. 14 lid 5).

## zt-2023-pub-006 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2023, stap 2: 'Uw klant heeft geen recht op zorgtoeslag als het toetsingsinkomen hoger is dan € 38.520 (aanvrager zonder toeslagpartner), € 48.224 (aanvrager met toeslagpartner)'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Op de grens met partner: recht (≈ € 23,6 → € 24).

## zt-2023-pub-007 — PASS — check (published)

Source: Dienst Toeslagen, Berekening zorgtoeslag 2023, stap 2: geen recht boven € 48.224 (met toeslagpartner)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén euro boven de grens met partner: geen recht (Awir art. 14 lid 5).

## zt-2023-rul-001 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 2 juni 2026, ECLI:NL:RBMNE:2026:4437 (zaaknr. UTR 25/6130), r.o. 10: 'Op 28 december 2022 heeft Dienst Toeslagen het voorschot voor zorgtoeslag vastgesteld op € 1.858,-. [...] Dienst Toeslagen is bij het berekenen van deze voorschotten uitgegaan van eisers jaarinkomen van € 11.204,-.' Een voorschot (Awir art. 16) voor het hele jaar, verleend vóór het jaar begon; de uitspraak noemt geen partner

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1858.00 | 1858.00 (exact 1858) | yes |

Note: Voorschot 2023 op een geschat inkomen onder het drempelinkomen (€ 25.069,824): normpremie = 0,123% × € 25.069,824 = € 30,84; € 1.889 − € 30,84 = € 1.858,16 → € 1.858 — het maximum zonder partner in 2023, door de Dienst zelf op 28-12-2022 berekend. Zonder partner: de uitspraak spreekt alleen over eisers inkomen en het bedrag past bij één standaardpremie. Zie zt-2023-rul-002/-003 voor de twee latere bedragen van dezelfde aanvrager, die een deel van het jaar betreffen. Wordt 'verified' zodra een met naam genoemd mens de invoer tegen de uitspraak heeft gelegd (CASES.md; ASKS.md 9).

## zt-2023-rul-002 — FAIL — explained by DISCREPANCIES.md #10 (government) — check (ruling)

Source: Rechtbank Midden-Nederland 2 juni 2026, ECLI:NL:RBMNE:2026:4437 (zaaknr. UTR 25/6130), r.o. 5 en 11: 'Met het besluit van 5 september 2025 heeft Dienst Toeslagen eisers zorgtoeslag voor het jaar 2023 definitief berekend op € 992,- en het teveel verstrekte voorschot van € 744,- teruggevorderd.' 'Dienst Toeslagen is bij de definitieve berekening uitgegaan van een definitief jaarinkomen van € 30.763,-.' R.o. 12: eiser is 'sinds 10 augustus 2023 niet meer ingeschreven in Nederland, omdat hij naar Duitsland is verhuisd'. De rechtbank: het jaarinkomen telt, ook als iemand 'alleen een deel van het jaar recht heeft op zorgtoeslag' (r.o. 14). Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 992.00 | 991.00 (exact 991) | NO |

Note: Definitieve berekening 2023 over een DEEL van het jaar: de aanvrager verhuisde op 10-08-2023 naar Duitsland. De uitspraak noemt het aantal maanden niet; 11 volgt uit beide bedragen van de Dienst (dit en zt-2023-rul-003, dat onder elke lezing 11/12 van het volle voorschot is) en strookt met een verzekering die na augustus eindigt. Jaarbedrag uit de tekst van 2023: normpremie = 0,123% × € 25.069,824 + 13,640% × (€ 30.763 − € 25.069,824) = € 30,84 + € 776,55 = € 807,39; € 1.889 − € 807,39 = € 1.081,61. Sinds 2026-10-20 codeert de encoding Wzt art. 2 lid 5 (per kalendermaand, invoer maanden_aanspraak): € 1.081,61 × 11/12 = € 991,48 → € 991 (Awir art. 14 lid 4). De Dienst kwam op € 992 = 11/12 van het éérst afgeronde jaarbedrag € 1.082 (€ 991,83 → € 992). De tekst rondt het jaarbedrag niet af vóór de maandsplitsing; dat de Dienst dat doet, is DISCREPANCIES.md #10 (government). De case faalt daarom met € 1 verschil, en blijft staan als het bewijs van de werkwijze van de Dienst. Wordt 'verified' op dezelfde voet als rul-001 (ASKS.md 9); dan is het een blokkerende test die onder #10 bewust faalt — zie DISCREPANCIES.md #10 voor hoe de test dan geldt.

## zt-2023-rul-003 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 2 juni 2026, ECLI:NL:RBMNE:2026:4437 (zaaknr. UTR 25/6130), r.o. 10: 'Op 2 februari 2024 heeft Dienst Toeslagen het voorschot voor zorgtoeslag vastgesteld op € 1.703,-. Dienst Toeslagen is bij het berekenen van deze voorschotten uitgegaan van eisers jaarinkomen van € 11.204,-.' Een herzien voorschot (Awir art. 16), na de verhuizing van 10-08-2023, voor dezelfde aanvrager als zt-2023-rul-001

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1703.00 | 1703.00 (exact 1703) | yes |

Note: Herzien voorschot 2023 over een DEEL van het jaar, op hetzelfde geschatte inkomen als zt-2023-rul-001 (€ 11.204, vol jaar € 1.858,16 → € 1.858). De uitspraak noemt het aantal maanden niet; € 1.703 is 11/12 van het jaarbedrag onder elke lezing (11/12 × € 1.858,16 = € 1.703,31 → € 1.703, de tekst; 11/12 × € 1.858 = € 1.703,17 → € 1.703, de Dienst), zodat 11 maanden hier vaststaat, los van de afrondingsvolgorde. Sinds 2026-10-20 codeert de encoding Wzt art. 2 lid 5 (invoer maanden_aanspraak: 11) en reproduceert dit bedrag; DISCREPANCIES.md #9 is daarmee 'encoding'. Samen met rul-002 (€ 992 = 11/12 × het éérst afgeronde € 1.082, waar de tekst € 991 geeft) laat dit zien hoe de Dienst bij een deel van het jaar rekent (#10). Wordt 'verified' op dezelfde voet als rul-001 (ASKS.md 9).

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

Note: Zie DISCREPANCIES.md #1 (afronding drempelinkomen). Het maandbedrag € 103,02 is een drukfout van de eerste druk (DISCREPANCIES.md #4, withdrawn); de tweede druk van de leaflet (TG 082 - 1Z62FD, gevonden 2026-10-22) drukt € 103,62 (€ 1.243,51 / 12 = € 103,6258, afgekapt). De case houdt het cijfer van de eerste druk, de bron waaruit hij is opgenomen.

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

Browser encoding (`site/zorgtoeslag-regels.js`, node v22.22.0): 219 cases compared with the Python encoding, 219 identical, 0 different.

---

Cases run: 219, passed: 199, failed: 20, skipped: 0. Verified cases: 0. Blocking failures: 0. Browser/Python differences: 0 (blocking: the two encodings must agree).
