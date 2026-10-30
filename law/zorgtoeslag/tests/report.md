# Zorgtoeslag — test report, generated 2026-10-30 by tools/build.py

Generated file; do not edit. Verified cases are tests (blocking); published and synthetic
cases are checks (reported). Every failing check is a discrepancy in `DISCREPANCIES.md`.

## zt-2013-rul-001 — PASS — check (ruling)

Source: ABRvS 15 maart 2017, ECLI:NL:RVS:2017:662 (zaaknr. 201603050/1/A2), r.o. 1: '[appellant] heeft over 2013 een voorschot zorgtoeslag ontvangen van € 2.062,00.' Bij besluit van 3 oktober 2014 heeft de Belastingdienst/Toeslagen 'de zorgtoeslag van [appellant] over 2013 vastgesteld op € 2.062,00', op 'een gezamenlijk toetsingsinkomen van [appellant] en zijn toeslagpartner van € 18.035,00'. Volledige tekst via data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RVS:2017:662

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 2062.00 | 2062.00 (exact 2062) | yes |

Note: De eerste vaststelling 2013 van de Dienst (03-10-2014) op het gezamenlijke toetsingsinkomen zoals het toen vaststond: € 18.035 met toeslagpartner, onder het drempelinkomen 2013 (€ 19.043,424), dus het maximum met partner uit de tekst: 2 × € 1.478 − 4,695% × € 19.043,424 = € 2.956 − € 894,09 = € 2.061,91 → € 2.062 (Awir art. 14 lid 4). Het voorschot was hetzelfde bedrag. De verdeling over aanvrager en partner is niet gegeven en doet er niet toe (Wzt art. 2 lid 2); het hele bedrag staat bij de aanvrager. Dat de partner verzekerde was blijkt uit het bedrag (2 × standaardpremie). Beslist DISCREPANCIES.md #1 niet (onder het drempelinkomen). Zie rul-002 voor de herziening in dezelfde uitspraak. Wordt verified zodra een met naam genoemde mens de invoer met de uitspraak vergelijkt (CASES.md; ASKS.md 9).

## zt-2013-rul-002 — PASS — check (ruling)

Source: ABRvS 15 maart 2017, ECLI:NL:RVS:2017:662 (zaaknr. 201603050/1/A2), r.o. 1: bij besluit van 13 maart 2015 heeft de Belastingdienst/Toeslagen 'de vastgestelde zorgtoeslag van [appellant] over 2013 herzien en vastgesteld op € 493,00', 'op basis van deze door de belastinginspecteur vastgestelde verzamelinkomens' van de aanvrager en zijn toeslagpartner, in de aanslagen inkomstenbelasting 2013 'vastgesteld op onderscheidenlijk € 35.469,00 en € 1.576,00' ('Het verzamelinkomen van [appellant] omvat mede de door hem in 2013 ontvangen afkoopsommen van pensioenaanspraken.'); 'Tevens is € 1.612,00 aan te veel betaalde zorgtoeslag teruggevorderd.' De Afdeling laat de herziening in stand: de Awir kent geen hardheidsclausule en de Wzt geen grondslag om afkoopsommen buiten het toetsingsinkomen te laten. Volledige tekst via data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RVS:2017:662

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 493.00 | 493.00 (exact 493) | yes |

Note: De herziening 2013 van de Dienst (13-03-2015) op de verzamelinkomens uit de aanslagen: gezamenlijk € 35.469 + € 1.576 = € 37.045 met toeslagpartner. Uit de tekst: normpremie = 4,695% × € 19.043,424 + 8,713% × (€ 37.045 − € 19.043,424) = € 894,09 + € 1.568,48 = € 2.462,57; 2 × € 1.478 − € 2.462,57 = € 493,43 → € 493 (Awir art. 14 lid 4) — wat de Dienst besliste. Het teruggevorderde bedrag in de uitspraak (€ 1.612) is niet het verschil tussen het voorschot van € 2.062 (rul-001) en € 493 (€ 1.569); de uitspraak verklaart het verschil niet en het project speculeert niet; het is geen invoer van deze case. Met een afgerond drempelinkomen (€ 19.043: € 493,41; € 19.044: € 493,45) ook € 493 — beslist #1 niet. Wordt verified zodra een met naam genoemde mens de invoer met de uitspraak vergelijkt (CASES.md; ASKS.md 9).

## zt-2013-rul-003 — PASS — check (ruling)

Source: ABRvS 14 december 2016, ECLI:NL:RVS:2016:3324 (zaaknr. 201601124/1/A2), r.o. 1: de Belastingdienst/Toeslagen heeft 'de huur- en zorgtoeslag van [appellante] definitief vastgesteld op een bedrag van € 3.175,00 en een bedrag van € 1.060,00' en is daarbij 'uitgegaan van een toetsingsinkomen van [appellante] van € 2.144,00'. De uitspraak noemt geen partner (wel twee kinderen, kindgebonden budget). Volledige tekst via data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RVS:2016:3324

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1060.00 | 1060.00 (exact 1060) | yes |

Note: De definitieve vaststelling 2013 van de Dienst op het toetsingsinkomen zoals het toen vaststond: € 2.144 zonder toeslagpartner (geen partner genoemd), onder het drempelinkomen, dus het maximum zonder partner uit de tekst: € 1.478 − 2,195% × € 19.043,424 = € 1.478 − € 418,00 = € 1.059,997 → € 1.060 (Awir art. 14 lid 4). De uitspraak noemt de twee bedragen in de volgorde 'huur- en zorgtoeslag' zonder ze afzonderlijk te benoemen; dat € 1.060 de zorgtoeslag is volgt uit die volgorde én uit de rekensom (€ 3.175 kan geen zorgtoeslag 2013 zijn: het maximum met partner is € 2.062). Beslist DISCREPANCIES.md #1 niet (onder het drempelinkomen). Zie rul-004 voor de herziening in dezelfde uitspraak. Wordt verified zodra een met naam genoemde mens de invoer met de uitspraak vergelijkt (CASES.md; ASKS.md 9).

## zt-2013-rul-004 — PASS — check (ruling)

Source: ABRvS 14 december 2016, ECLI:NL:RVS:2016:3324 (zaaknr. 201601124/1/A2), r.o. 1–2: in de aanslag inkomstenbelasting 2013 van 11 april 2015 'is het verzamelinkomen vastgesteld op een bedrag van € 33.683,00' (een WWB-uitkering en een in 2013 in een schenking omgezette leenbijstand); 'Op basis van het verzamelinkomen van € 33.683,00 heeft de Belastingdienst/Toeslagen de definitieve vaststelling herzien' — bij besluit van 15 mei 2015 de zorg- en huurtoeslag 2013 'herzien en vastgesteld op nihil'. De Afdeling: de regelgeving voor de zorgtoeslag biedt geen grondslag om een inkomensbestanddeel buiten beschouwing te laten (r.o. 3.2). Volledige tekst via data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RVS:2016:3324

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: De herziening 2013 van de Dienst (15-05-2015) op het verzamelinkomen uit de aanslag: € 33.683 zonder toeslagpartner (geen partner genoemd), boven de inkomensgrens zonder partner uit de tekst van 2013, € 30.939 (syn-040): normpremie = 2,195% × € 19.043,424 + 8,713% × (€ 33.683 − € 19.043,424) = € 418,00 + € 1.275,54 = € 1.693,54 > € 1.478 → geen aanspraak, wat de Dienst besliste. Nihil onderscheidt niet tussen de afrondingsmodellen van #1. Wordt verified zodra een met naam genoemde mens de invoer met de uitspraak vergelijkt (CASES.md; ASKS.md 9).

## zt-2013-rul-005 — PASS — check (ruling)

Source: Rechtbank Noord-Holland 7 april 2020, ECLI:NL:RBNHO:2020:2696, feiten: 'Met dagtekening 3 mei 2014 is aan eiseres een aanslag inkomstenbelasting en premie volksverzekeringen (hierna: ib/pvv) voor het jaar 2013 opgelegd naar een verzamelinkomen van € 12.922.' 'Met dagtekening 25 juli 2014 is, naar aanleiding van de aanslag ib/pvv 2013, de definitieve berekening zorgtoeslag vastgesteld op € 1.060. Hierbij is uitgegaan van een toetsingsinkomen van € 12.922.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1060.00 | 1060.00 (exact 1060) | yes |

Note: Definitieve berekening 2013 van 25 juli 2014, € 1.060, op een toetsingsinkomen van € 12.922, onder het drempelinkomen: het maximum zonder partner van de tekst van 2013, € 1.478 − 2,195% × € 19.043,424 = € 1.059,997 → € 1.060 (Awir art. 14 lid 4; via build.run_case). De uitspraak noemt geen partner; het bedrag bewijst er geen. Gevonden via de open-data-sweep van 2026-10-28 (uitspraken 2015–2020). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2013-rul-006 — PASS — check (ruling)

Source: Rechtbank Noord-Holland 7 april 2020, ECLI:NL:RBNHO:2020:2696, feiten: 'Het verzamelinkomen is daarbij verhoogd met de betalingen van het UWV (€ 1.786,21) en [A] (€ 5.000) naar € 19.708.' 'Met dagtekening 11 september 2015 is, naar aanleiding van de vermindering ib/pvv 2013, de definitieve berekening zorgtoeslag voor het jaar 2013 herzien naar € 1.002. Hierbij is uitgegaan van een toetsingsinkomen van € 19.708.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1002.00 | 1002.00 (exact 1002) | yes |

Note: Herziene definitieve berekening 2013 van 11 september 2015, € 1.002, op een toetsingsinkomen van € 19.708 (een nabetaling en een UWV-uitkering telden mee). De tekst van 2013: € 1.478 − (2,195% × € 19.043,424 + 8,713% × (€ 19.708 − € 19.043,424)) = € 1.002,10 → € 1.002 (via build.run_case). Zonder partner, zie zt-2013-rul-005. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2013-rul-007 — PASS — check (ruling)

Source: ABRvS 5 oktober 2016, ECLI:NL:RVS:2016:2600 (zaaknr. 201509080/1/A2 niet gecontroleerd; zie de deeplink), r.o. 1 en 2: 'Hierbij is de dienst ervan uitgegaan dat [appellante] geen toeslagpartner heeft.' 'De Belastingdienst/Toeslagen heeft de echtgenoot op 4 september 2014 als toeslagpartner van [appellante] aangemerkt.' 'Bij besluit van 20 november 2014 heeft de Belastingdienst/Toeslagen het voorschot zorgtoeslag herzien naar nihil, omdat uit de Basisregistratie Inkomen is gebleken dat de echtgenoot van [appellante] in 2013 een inkomen van € 41.275,00 genoot, waarmee hun gezamenlijke inkomen in dat jaar € 62.145,00 bedroeg, hetgeen te hoog was'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Voorschot 2013 herzien naar nihil (20 november 2014) op een gezamenlijk inkomen van € 62.145, met echtgenoot als toeslagpartner (Awir art. 3 jo. AWR art. 5a). Het eigen inkomen van de aanvrager is afgeleid: € 62.145 − € 41.275 = € 20.870; de uitkomst hangt er niet van af. De tekst van 2013 geeft nihil: de inkomensgrens met partner is € 42.438 (via build.run_case). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2013-rul-008 — PASS — check (ruling)

Source: ABRvS 7 maart 2018, ECLI:NL:RVS:2018:768 (zaaknr. 201700196/1/A2), procesverloop en r.o. 1: 'Bij besluit van 20 november 2014 heeft de Belastingdienst/Toeslagen de aan [appellant] toegekende zorgtoeslag over 2013 definitief berekend en vastgesteld op nihil en een bedrag van € 246,00 van hem teruggevorderd.' 'Aan de berekening van de zorgtoeslag over 2013 op nihil heeft de Belastingdienst/Toeslagen ten grondslag gelegd dat het vastgestelde inkomen van [appellant] in 2013 van € 31.028,00 te hoog is om in aanmerking te komen voor zorgtoeslag en dat [appellant] geen verzekerde is in de zin van de Wet zorgtoeslag.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve berekening 2013 van 20 november 2014: nihil op een inkomen van € 31.028, zonder partner (de uitspraak noemt er geen). De Dienst noemde twee gronden: het inkomen en dat de aanvrager geen verzekerde was; de case toetst alleen het inkomen, want of iemand verzekerde is neemt de encoding als invoer. De tekst van 2013 geeft op het inkomen alleen al nihil, maar langs een andere weg dan de grens: € 1.478 − (2,195% × € 19.043,424 + 8,713% × (€ 31.028 − € 19.043,424)) = € 15,78, minder dan € 24, dus niet toegekend (Awir art. 14 lid 5; via build.run_case) — de eerste beslissing in het corpus waarin het minimumbedrag de uitkomst bepaalt. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2013-rul-009 — PASS — check (ruling)

Source: ABRvS 28 oktober 2015, ECLI:NL:RVS:2015:3282 (zaaknr. 201505333/1/A2; bevestigt Rechtbank Rotterdam 2 juni 2015, zaaknr. 14/7833), procesverloop en r.o. 2–3.1: 'Bij besluit van 12 september 2014 heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant] over 2013 definitief vastgesteld op nihil en € 1.068,00 teruggevorderd.' '[appellant] heeft over 2013 een voorschot zorgtoeslag van € 1.060,00 ontvangen.' 'Volgens de dienst bedroeg het vermogen van [appellant] op 1 januari 2013 € 97.904,00, zijnde spaartegoeden ter waarde van € 101.043,00 en groene beleggingen ter waarde van € 18.000,00, verminderd met een bedrag van € 21.139,00 heffingsvrij vermogen. Wegens dit vermogen en het bepaalde in artikel 2a, eerste lid, van de Wzt, heeft [appellant] geen aanspraak op zorgtoeslag over 2013, aldus de dienst.' 'De rechtbank en de Belastingdienst/Toeslagen hebben artikel 2a, eerste lid, van de Wzt dan ook juist uitgelegd door ervan uit te gaan dat bij de beoordeling of aanspraak op zorgtoeslag bestaat groene beleggingen bij bepaling van het vermogen dienen te worden meegeteld.' Hoger beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2013 (12 september 2014): nihil omdat de grondslag sparen en beleggen boven de € 80.000 van Wzt art. 2a lid 1 (tekst 2013) lag — de vijfde uitkomst van de Dienst op de vermogenstoets in het corpus en de eerste voor 2013, het eerste jaar van die toets (Stb. 2012, 204). Anders dan in de andere vermogenscases is de invoer hier niet gereconstrueerd: de uitspraak noemt de bestanddelen van de rendementsgrondslag zelf (spaartegoeden € 101.043 + groene beleggingen € 18.000 = € 119.043) en het heffingvrije vermogen dat de Dienst aftrok (€ 21.139, Wet IB 2001 art. 5.5, tekst 2013 — hetzelfde bedrag als in parameters/2013.yaml). De encoding trekt dat bedrag eenmaal af (zonder partner) en komt op dezelfde € 97.904 > € 80.000 → geen aanspraak. Dat er geen partner was, zegt de uitspraak niet met zoveel woorden; de Dienst trok het heffingvrije vermogen éénmaal af en het voorschot van € 1.060 is het maximum zonder partner van de tekst 2013 (€ 1.059,997), wat beide die lezing dragen. Het toetsingsinkomen staat niet in de uitspraak; het is hier € 0 ingevuld omdat de vermogenstoets vóór de inkomenstoets gaat en bij elk inkomen nihil geeft (art. 2a lid 1: 'geen aanspraak'), zoals in zt-2015-rul-006 en zt-2016-rul-004. De verifieerder toetst beide lezingen. Het voorschot zelf is geen case: zijn inkomen staat niet in de uitspraak. Het teruggevorderde bedrag (€ 1.068) is het voorschot plus € 8 heffingsrente, zo zegt de uitspraak. De Afdeling (r.o. 3.1): de vrijstelling voor groene beleggingen (Wet IB 2001 art. 5.13) telt niet mee bij de grondslag voor de zorgtoeslag — dat staat in art. 2a lid 1 zelf — en dat is geen willekeur. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2013-syn-040 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2013), Awir art. 14 lid 4-5 (geldend van 01-01-2013); de inkomensgrens zonder partner op de laatste euro met recht. Geen publicatie van de Dienst voor 2013 gevonden (leaflet 2013: niet gevonden)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2013 zonder toeslagpartner uit de tekst: normpremie = 2,195% × € 19.043,424 + 8,713% × (€ 30.939 − € 19.043,424) = € 418,00 + € 1.036,46 = € 1.454,46; € 1.478 − € 1.454,46 = € 23,54 (precies € 23,5353) → € 24 (Awir art. 14 lid 4), net toegekend (lid 5). Zie syn-041 voor de euro erboven. Met een afgerond drempelinkomen (€ 19.043: € 23,51; € 19.044: € 23,57; DISCREPANCIES.md #1) blijft het € 24 en blijft € 30.940 € 23 — zoals 2014 een jaar waarin de afronding van het drempelinkomen geen grens verschuift. De hoogste grens van de reeks 2013–2026: het afbouwpercentage was 8,713% (2014: 9,118%; 2015: 13,400%). Wordt een published case zodra een publicatie van de Dienst voor 2013 de grens noemt.

## zt-2013-syn-041 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2013), Awir art. 14 lid 4-5 (geldend van 01-01-2013); de eerste euro zonder recht, zonder partner. Geen publicatie van de Dienst voor 2013 gevonden

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: De euro boven de grens van syn-040: € 1.478 − (2,195% × € 19.043,424 + 8,713% × (€ 30.940 − € 19.043,424)) = € 23,45 → € 23 (Awir art. 14 lid 4) → niet toegekend (lid 5). Met een afgerond drempelinkomen (€ 19.043: € 23,42; € 19.044: € 23,49) eveneens € 23.

## zt-2013-syn-042 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2013), Awir art. 14 lid 4-5 (geldend van 01-01-2013); de inkomensgrens met partner op de laatste euro met recht. Geen publicatie van de Dienst voor 2013 gevonden

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2013 met toeslagpartner uit de tekst (gezamenlijk toetsingsinkomen): normpremie = 4,695% × € 19.043,424 + 8,713% × (€ 42.438 − € 19.043,424) = € 894,09 + € 2.038,37 = € 2.932,46; 2 × € 1.478 − € 2.932,46 = € 23,54 (precies € 23,5418) → € 24, net toegekend. Zie syn-043 voor de euro erboven. Met een afgerond drempelinkomen (€ 19.043: € 23,52; € 19.044: € 23,56) blijft het € 24 en blijft € 42.439 € 23 (#1 verschuift in 2013 geen grens). Het maximum 2013 met partner uit de tekst is € 2.062 (€ 2.061,91).

## zt-2013-syn-043 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2013), Awir art. 14 lid 4-5 (geldend van 01-01-2013); de eerste euro zonder recht, met partner. Geen publicatie van de Dienst voor 2013 gevonden

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: De euro boven de grens van syn-042: 2 × € 1.478 − (4,695% × € 19.043,424 + 8,713% × (€ 42.439 − € 19.043,424)) = € 23,45 → € 23 → niet toegekend (Awir art. 14 lid 4-5). Met een afgerond drempelinkomen (€ 19.043: € 23,44; € 19.044: € 23,48) eveneens € 23.

## zt-2014-rul-001 — PASS — check (ruling)

Source: Hof Den Haag 28 maart 2017, ECLI:NL:GHDHA:2017:1067 (zaaknr. BK-16/00409), r.o. 3.1 en 3.3: 'Bij voorschotbeschikkingen van 27 december 2013 heeft de Belastingdienst/Toeslagen de aan belanghebbende toekomende zorgtoeslag en huurtoeslag voor het jaar 2014 voorlopig vastgesteld op € 865 respectievelijk € 2.456 (hierna: de voorschotten). De voorschotten zijn gebaseerd op een schatting aan de hand van inkomensgegevens uit het jaar 2013. Het geschatte toetsingsinkomen waarvan bij de berekening van de voorschotten is uitgegaan bedraagt € 17.333.' Een belastingzaak over het inkomensgegeven (toetsingsinkomen 2014 € 19.810, zie rul-002); het Hof bevestigt het inkomensgegeven. Volledige tekst via data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:GHDHA:2017:1067

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 865.00 | 865.00 (exact 865) | yes |

Note: De eerste uitkomst van de Dienst Toeslagen voor 2014 in het dossier: een voorschot, bij een geschat toetsingsinkomen onder het drempelinkomen (€ 19.253,376), dus het maximum zonder partner uit de tekst: € 1.329 − 2,410% × € 19.253,376 = € 1.329 − € 464,01 = € 864,99 → € 865 (Awir art. 14 lid 4). De uitspraak noemt geen partner; het bedrag bewijst dat met éénmaal de standaardpremie is gerekend (met partner zou het voorschot € 1.655 zijn). Zelfde euro onder elke afronding van het drempelinkomen (DISCREPANCIES.md #1). Wordt verified zodra een met naam genoemde mens de invoer met de uitspraak vergelijkt (CASES.md; ASKS.md 9).

## zt-2014-rul-002 — PASS — check (ruling)

Source: Hof Den Haag 28 maart 2017, ECLI:NL:GHDHA:2017:1067 (zaaknr. BK-16/00409), r.o. 3.1 en 3.3: 'Bij beschikkingen van 14 augustus 2015 heeft de Belastingdienst/Toeslagen de aan belanghebbende toekomende zorgtoeslag en huurtoeslag voor het jaar 2014 definitief vastgesteld op € 814 respectievelijk € 1.513. Deze beschikkingen zijn gebaseerd op het toetsingsinkomen van het jaar 2014 van € 19.810.' Het toetsingsinkomen is het laatst bepaalde belastbare loon (geen aanslag IB over 2014; loongegevens r.o. 3.2 tellen op tot € 19.810); het Hof bevestigt het. Volledige tekst via data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:GHDHA:2017:1067

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 814.00 | 814.00 (exact 814) | yes |

Note: Definitieve berekening 2014 zonder partner, € 557 boven het drempelinkomen. Uit de tekst: normpremie = 2,410% × € 19.253,376 + 9,118% × (€ 19.810 − € 19.253,376) = € 464,01 + € 50,75 = € 514,76; € 1.329 − € 514,76 = € 814,24 → € 814 (Awir art. 14 lid 4). De uitspraak noemt geen partner en geen vermogen; het bedrag bewijst éénmaal de standaardpremie (met partner: € 1.604). Met een afgerond drempelinkomen (€ 19.253 of € 19.254, DISCREPANCIES.md #1) komt hetzelfde hele bedrag uit (€ 814,21 / € 814,27). Wordt verified zodra een met naam genoemde mens de invoer met de uitspraak vergelijkt (CASES.md; ASKS.md 9).

## zt-2014-rul-003 — PASS — check (ruling)

Source: ABRvS 15 maart 2017, ECLI:NL:RVS:2017:659 (zaaknr. 201604395/1/A2), procesverloop en r.o. 1: 'Bij besluit van 3 juli 2015 heeft de Belastingdienst/Toeslagen de zorg- en huurtoeslag van [appellante] over 2014 definitief vastgesteld op onderscheidenlijk € 567,00 en nihil. Tevens is € 298,00 en € 3.272,00 aan te veel betaalde voorschotten zorg- en huurtoeslag teruggevorderd.'; 'de inspecteur [heeft] het verzamelinkomen van [appellante] in de aanslag inkomstenbelasting 2014 vastgesteld op € 22.518,00'. De Afdeling: een nabetaling van € 837,31 blijft voor de huurtoeslag op verzoek buiten beschouwing (Bht art. 2b), zodat het toetsingsinkomen voor de huurtoeslag € 21.680 is — zonder gevolg (de huurtoeslaggrens blijft overschreden); de rechtsgevolgen van het besluit blijven geheel in stand (dictum V). Volledige tekst via data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RVS:2017:659

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 567.00 | 567.00 (exact 567) | yes |

Note: Definitieve berekening 2014 zonder partner op het verzamelinkomen van de aanslag IB. Uit de tekst: normpremie = 2,410% × € 19.253,376 + 9,118% × (€ 22.518 − € 19.253,376) = € 464,01 + € 297,67 = € 761,67; € 1.329 − € 761,67 = € 567,33 → € 567 (Awir art. 14 lid 4). De uitspraak noemt geen partner; het bedrag bewijst éénmaal de standaardpremie (met partner: € 1.357). De uitzondering voor nabetalingen (Bht art. 2b) geldt alleen de huurtoeslag; de zorgtoeslag blijft op € 22.518 berekend en de Afdeling laat haar in stand. Het voorschot (geschat inkomen € 13.500) volgt uit € 567 + € 298 = € 865, het maximum uit de tekst — niet als case opgenomen, het bedrag staat niet zelf in de uitspraak. Zelfde hele bedrag met een afgerond drempelinkomen (DISCREPANCIES.md #1). Wordt verified zodra een met naam genoemde mens de invoer met de uitspraak vergelijkt (CASES.md; ASKS.md 9).

## zt-2014-rul-004 — PASS — check (ruling)

Source: Hof Amsterdam 25 juni 2019, ECLI:NL:GHAMS:2019:2243 (zaaknrs. 17/00278, 17/00279, 18/00129), feiten rechtbank 2014 (r.o. 2, aangehaald): 'In het jaar 2014 stond eiseres op hetzelfde adres ingeschreven als de ex-partner en hun beide kinderen.'; 'Op 6 januari 2017 is de definitieve berekening toeslagen over het jaar 2014 vastgesteld. De toeslagen zijn berekend op basis van de volgende toetsingsinkomens: eiseres: € 21.113 en [Y]: € 19.000. Op basis van deze toetsingsinkomens is de zorgtoeslag op nihil vastgesteld en is het kindgebonden budget op € 492 vastgesteld.' Het Hof stelt het inkomensgegeven 2014 van de ex-partner nader vast op € 9.860 (dictum), waarna de Dienst de toeslagen herziet (Awir art. 20); die herziening staat niet in de uitspraak. Volledige tekst via data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:GHAMS:2019:2243

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: De beslissing van de Dienst op de inkomens zoals zij toen vaststonden: gezamenlijk toetsingsinkomen € 21.113 + € 19.000 = € 40.113 met toeslagpartner (hetzelfde adres, samen kinderen; de Dienst rekende met beide inkomens), boven de inkomensgrens met partner uit de tekst van 2014, € 37.145 (syn-038): normpremie = 5,210% × € 19.253,376 + 9,118% × (€ 40.113 − € 19.253,376) = € 1.003,10 + € 1.901,98 = € 2.905,08 > 2 × € 1.329 → geen aanspraak, wat de Dienst besliste. De verdeling over aanvrager en partner doet er niet toe (Wzt art. 2 lid 2); het hele bedrag staat bij de aanvrager. Of de partner verzekerde was maakt bij dit inkomen niets uit. Met het door het Hof nader vastgestelde inkomensgegeven van de ex-partner (€ 9.860; gezamenlijk € 30.973) geeft de tekst € 586 (2 × € 1.329 − € 1.003,10 − € 1.068,60 = € 586,30) — geen beslissing van de Dienst, dus geen case; staat hier als wat de tekst zegt. Beslist DISCREPANCIES.md #1 niet. Wordt verified zodra een met naam genoemde mens de invoer met de uitspraak vergelijkt (CASES.md; ASKS.md 9).

## zt-2014-rul-005 — PASS — check (ruling)

Source: ABRvS 24 oktober 2018, ECLI:NL:RVS:2018:3454 (zaaknr. 201800577/1/A2 niet gecontroleerd; zie de deeplink), r.o. 1: 'Bij besluit van 27 december 2013 heeft de Belastingdienst/Toeslagen aan [appellant] een voorschot zorgtoeslag toegekend van € 865,00, op grond van een geschat geïndexeerd toetsingsinkomen van € 14.591,00.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 865.00 | 865.00 (exact 865) | yes |

Note: Voorschot 2014 van 27 december 2013, € 865, op een geschat geïndexeerd toetsingsinkomen van € 14.591, onder het drempelinkomen: het maximum zonder partner van de tekst van 2014, € 1.329 − 2,410% × € 19.253,376 = € 864,99 → € 865 (via build.run_case). De uitspraak noemt geen partner; het bedrag bewijst er geen. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2014-rul-006 — PASS — check (ruling)

Source: ABRvS 24 oktober 2018, ECLI:NL:RVS:2018:3454, procesverloop en r.o. 1: 'Bij het besluit van 26 mei 2017, gehandhaafd bij het besluit van 19 juni 2017, heeft de dienst de zorgtoeslag over 2014 definitief vastgesteld op € 699,00. Aan dat besluit heeft de Belastingdienst/Toeslagen ten grondslag gelegd dat volgens de basisregistratie inkomen (hierna: BRI) het inkomen van [appellant] in 2014 € 21.073,00 bedroeg.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 699.00 | 699.00 (exact 699) | yes |

Note: Definitieve vaststelling 2014 van 26 mei 2017, € 699, op het BRI-inkomen van € 21.073. De tekst van 2014: € 1.329 − (2,410% × € 19.253,376 + 9,118% × (€ 21.073 − € 19.253,376)) = € 699,08 → € 699 (via build.run_case). Zonder partner, zie zt-2014-rul-005. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2014-rul-007 — PASS — check (ruling)

Source: ABRvS 9 januari 2019, ECLI:NL:RVS:2019:51, procesverloop en r.o. 3: 'Bij besluit van 4 november 2016 heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant] over het jaar 2014 definitief vastgesteld op nihil en de huurtoeslag van [appellant] over het jaar 2014 definitief vastgesteld op een bedrag van € 1.573,00.' 'Nu niet in geschil is dat de Belastingdienst/Toeslagen het recht van [appellant] op huur- en zorgtoeslag voor het jaar 2014 heeft vastgesteld op basis van het door de inspecteur vastgestelde belastbare inkomen van € 40.775,00'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2014 van 4 november 2016: zorgtoeslag nihil op het door de inspecteur vastgestelde inkomen van € 40.775 (de aanvrager stelde dat het € 17.324 was; de Afdeling: de Dienst volgt de inspecteur). De uitspraak noemt geen partner; de tekst van 2014 geeft nihil met en zonder partner (grenzen € 28.482 / € 37.145; via build.run_case). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2014-rul-008 — PASS — check (ruling)

Source: ABRvS 31 januari 2018, ECLI:NL:RVS:2018:317 (zaaknr. 201703168/1/A2), r.o. 1: '[appellant sub 2] heeft in 2014 voorschotten zorg- en huurtoeslag ontvangen. ... De hoogte van de voorschotten in dat besluit is gebaseerd op een geschat toetsingsinkomen van [appellant sub 2] over 2014 van € 16.052,00. Bij het besluit van 20 augustus 2015 heeft de Belastingdienst/Toeslagen de zorg- en huurtoeslag van [appellant sub 2] definitief vastgesteld op respectievelijk € 82,00 en nihil. Dit besluit is gebaseerd op een vastgesteld toetsingsinkomen van € 27.840,00.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 82.00 | 82.00 (exact 82) | yes |

Note: Definitieve berekening 2014 (20 augustus 2015): € 82 bij een vastgesteld toetsingsinkomen van € 27.840, zonder partner (met partner zou de tekst € 872 geven; de uitspraak noemt geen partner). De tekst van 2014 geeft € 82,07 → € 82 (normpremie 2,41% × € 19.253,376 + 9,118% × € 8.586,62 = € 1.246,93; € 1.329 − € 1.246,93; via build.run_case). Het voorschot op het geschatte € 16.052 staat niet als bedrag in de uitspraak, dus geen case; een nabetaling van de vroegere werkgever telde mee in het toetsingsinkomen (in hoger beroep alleen de huurtoeslag in geschil). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2014-syn-036 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2014), Awir art. 14 lid 4-5 (geldend van 01-01-2014); de inkomensgrens zonder partner op de laatste euro met recht. Geen publicatie van de Dienst voor 2014 gevonden (leaflet 2014: niet gevonden)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2014 zonder toeslagpartner uit de tekst: normpremie = 2,410% × € 19.253,376 + 9,118% × (€ 28.482 − € 19.253,376) = € 464,01 + € 841,47 = € 1.305,47; € 1.329 − € 1.305,47 = € 23,53 (precies € 23,5277) → € 24 (Awir art. 14 lid 4), net toegekend (lid 5). Zie syn-037 voor de euro erboven. Met een afgerond drempelinkomen (€ 19.253: € 23,50; € 19.254: € 23,57; DISCREPANCIES.md #1) blijft het € 24 en blijft € 28.483 € 23 — 2014 is het eerste jaar in de reeks waarin de afronding van het drempelinkomen geen grens verschuift. De hoogste grens van de reeks 2014–2026 tot nu toe: het afbouwpercentage was 9,118% (2015: 13,400%). Het maximum 2014 zonder partner uit de tekst is € 865 (€ 864,99), het voorschot dat Hof Den Haag in ECLI:NL:GHDHA:2017:1067 noemt (zt-2014-rul-001). Wordt een published case zodra een publicatie van de Dienst voor 2014 de grens noemt.

## zt-2014-syn-037 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2014), Awir art. 14 lid 4-5 (geldend van 01-01-2014); de inkomensgrens zonder partner, de eerste euro zonder recht. Geen publicatie van de Dienst voor 2014 gevonden

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: De euro boven syn-036: € 1.329 − (€ 464,01 + € 841,56) = € 23,44 → € 23 < € 24 → geen aanspraak (Awir art. 14 lid 5). Met een afgerond drempelinkomen (€ 19.253: € 23,41; € 19.254: € 23,48) blijft het € 23: geen verschuiving (DISCREPANCIES.md #1).

## zt-2014-syn-038 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2014), Awir art. 14 lid 4-5 (geldend van 01-01-2014); de inkomensgrens met partner op de laatste euro met recht. Geen publicatie van de Dienst voor 2014 gevonden

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 24.00 | 24.00 (exact 24) | yes |

Note: Inkomensgrens 2014 met toeslagpartner uit de tekst: normpremie = 5,210% × € 19.253,376 + 9,118% × (€ 37.145 − € 19.253,376) = € 1.003,10 + € 1.631,36 = € 2.634,46; 2 × € 1.329 − € 2.634,46 = € 23,54 → € 24, net toegekend. Zie syn-039 voor de euro erboven. Met een afgerond drempelinkomen (€ 19.253: € 23,53; € 19.254: € 23,57) blijft het € 24 en blijft € 37.146 € 23: geen verschuiving (DISCREPANCIES.md #1). Het maximum 2014 met partner uit de tekst is € 1.655 (€ 1.654,90). De nihil-beslissing bij € 40.113 met partner (zt-2014-rul-004) ligt boven deze grens.

## zt-2014-syn-039 — PASS — check (synthetic)

Source: Berekend uit de tekst: Wzt art. 1 lid 1 onder f, art. 2 lid 1-3 (BWBR0018451, geldend van 01-01-2014), Awir art. 14 lid 4-5 (geldend van 01-01-2014); de inkomensgrens met partner, de eerste euro zonder recht. Geen publicatie van de Dienst voor 2014 gevonden

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: De euro boven syn-038: 2 × € 1.329 − (€ 1.003,10 + € 1.631,45) = € 23,45 → € 23 < € 24 → geen aanspraak (Awir art. 14 lid 5). Met een afgerond drempelinkomen (€ 19.253: € 23,43; € 19.254: € 23,47) blijft het € 23 (DISCREPANCIES.md #1).

## zt-2015-rul-001 — PASS — check (ruling)

Source: ABRvS 13 februari 2019, ECLI:NL:RVS:2019:418 (zaaknr. 201805037/1/A2), procesverloop en r.o. 3: 'Bij besluit van 2 september 2016 heeft de Belastingdienst/Toeslagen de zorgtoeslag, het kindgebonden budget en de huurtoeslag van [appellante] over 2015 definitief berekend en de zorgtoeslag vastgesteld op € 663,00'; 'Volgens de BRI bedroeg het gezamenlijke toetsingsinkomen van [appellante] en [kind 1], haar oudste zoon, voor de bepaling van de zorgtoeslag en het kindgebonden budget in 2015 € 27.886,00.' De meerderjarige zoon, het hele jaar op hetzelfde adres ingeschreven, is de toeslagpartner (Awir art. 3 lid 2 onder e en g; r.o. 4–5.2); de Afdeling bevestigt de definitieve berekening. Het geschatte inkomen voor het voorschot was € 16.395; het voorschotbedrag noemt de uitspraak niet. Volledige tekst via data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RVS:2019:418

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 663.00 | 663.00 (exact 663) | yes |

Note: De eerste uitkomst van de Dienst Toeslagen voor 2015 in het dossier, met inkomen. Het gezamenlijke toetsingsinkomen staat in één bedrag; de verdeling over aanvrager en partner doet er voor de berekening niet toe (Wzt art. 2 lid 2). Uit de tekst: normpremie = 5,265% × € 19.463,328 + 13,400% × (€ 27.886 − € 19.463,328) = € 1.024,74 + € 1.128,64 = € 2.153,38; 2 × € 1.408 − € 2.153,38 = € 662,62 → € 663 (Awir art. 14 lid 4). De uitspraak zegt niets over vermogen of over de verzekering van de partner; het bedrag bewijst dat met tweemaal de standaardpremie is gerekend (art. 2 lid 1). Met een afgerond drempelinkomen (€ 19.463 of € 19.464, DISCREPANCIES.md #1) komt hetzelfde hele bedrag uit. Wordt verified zodra een met naam genoemde mens de invoer met de uitspraak vergelijkt (CASES.md; ASKS.md 9).

## zt-2015-rul-002 — PASS — check (ruling)

Source: ABRvS 9 mei 2018, ECLI:NL:RVS:2018:1514, procesverloop en r.o. 2: 'Bij besluit van 11 november 2016 heeft de Belastingdienst/Toeslagen de huurtoeslag van [appellant] voor het jaar 2015 definitief vastgesteld op nihil en de zorgtoeslag van [appellant] over het jaar 2015 definitief vastgesteld op een bedrag van € 495,00.' 'De Belastingdienst/Toeslagen is bij de definitieve berekening van de zorgtoeslag voor het jaar 2015 terecht uitgegaan van het door de inspecteur van de Belastingdienst vastgestelde verzamelinkomen van [appellant] van € 22.797,00, aldus de rechtbank.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 495.00 | 495.00 (exact 495) | yes |

Note: Definitieve vaststelling 2015 van 11 november 2016, € 495, op het verzamelinkomen van € 22.797. De tekst van 2015: € 1.408 − (2,395% × € 19.463,328 + 13,400% × (€ 22.797 − € 19.463,328)) = € 495,14 → € 495 (via build.run_case). De uitspraak noemt geen partner; het bedrag bewijst er geen (met een verzekerde partner zou het € 1.345 zijn). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2015-rul-003 — PASS — check (ruling)

Source: Rechtbank Den Haag 16 maart 2018, ECLI:NL:RBDHA:2018:3299, feiten en overwegingen: 'Bij beschikking van 9 september 2016 is de zorgtoeslag voor het jaar 2015 definitief berekend op € 580.' 'Met dagtekening 28 juli 2017 is aan eiser een definitieve aanslag inkomstenbelasting en premies volksverzekeringen (IB/PVV) voor het jaar 2015 opgelegd naar een verzamelinkomen van € 27.104.' 'Vast staat dat bij een verzamelinkomen van € 27.104 voor het jaar 2015 geen recht bestaat op zorgtoeslag'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Herziene vaststelling 2015: nihil op een verzamelinkomen van € 27.104. De uitspraak noemt geen partner; zonder partner geeft de tekst van 2015 nihil (de grens is € 26.316; via build.run_case), met een verzekerde partner zou zij een bedrag geven, dus de uitkomst past alleen bij de lezing zonder partner. De eerdere € 580 rustte op een inkomen dat de uitspraak niet noemt; niet opgenomen. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2015-rul-004 — PASS — check (ruling)

Source: ABRvS 28 februari 2018, ECLI:NL:RVS:2018:664 (zaaknr. 201705229/1/A2), procesverloop en r.o. 1: 'Bij besluit van 30 september 2016 heeft de Belastingdienst/Toeslagen de zorgtoeslag en het kindgebonden budget van [appellante] voor het jaar 2015 vastgesteld op nihil' '[persoon] als toeslagpartner van [appellante] moet worden aangemerkt, omdat zij beiden op hetzelfde adres staan ingeschreven in de BRP. Het gezamenlijke toetsingsinkomen komt daarmee op € 58.340,00, hetgeen ertoe leidt dat de zorgtoeslag en het kindgebonden budget over 2015 op nihil moeten worden vastgesteld.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2015 van 30 september 2016: nihil op een gezamenlijk toetsingsinkomen van € 58.340, met toeslagpartner (Awir art. 3 lid 2 onder a: hetzelfde adres, vijf kinderen uit de relatie). De verdeling van het inkomen is niet gegeven; de case voert het geheel in bij de aanvrager, wat voor de uitkomst niet uitmaakt. De tekst van 2015 geeft nihil: de grens met partner is € 32.655 (via build.run_case). Het voorschot van 21 april 2015, € 1.791, rustte op een inkomen dat de uitspraak niet noemt. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2015-rul-005 — PASS — check (ruling)

Source: ABRvS 17 januari 2018, ECLI:NL:RVS:2018:133 (zaaknr. 201704714/1/A2), procesverloop en r.o. 1–2: 'Bij besluit van 30 september 2016 heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant sub 1] over 2015 definitief vastgesteld op nihil' '[appellant sub 2] is de toeslagpartner van [appellant sub 1].' 'In de aanslag inkomstenbelasting van [appellant sub 1] en [appellant sub 2] over 2015 is dit bedrag meegerekend en is het verzamelinkomen vastgesteld op een bedrag van € 35.695,00. Op basis van dat verzamelinkomen heeft de Belastingdienst/Toeslagen bij besluit van 30 september 2016 voor 2015 de zorgtoeslag ... definitief berekend en vastgesteld'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2015 van 30 september 2016: nihil op een gezamenlijk verzamelinkomen van € 35.695, met toeslagpartner (een Bbz-lening die in 2015 een schenking werd telde mee; de Afdeling: terecht). De verdeling is niet gegeven; alles bij de aanvrager ingevoerd, zonder gevolg voor de uitkomst. De tekst van 2015 geeft nihil: de grens met partner is € 32.655 (via build.run_case). Het voorschot rustte op € 25.905; het bedrag ervan noemt de uitspraak niet. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2015-rul-006 — PASS — check (ruling)

Source: Rechtbank Den Haag 5 februari 2021, ECLI:NL:RBDHA:2021:2781 (zaaknrs. SGR 19/7423 en SGR 20/3372; bevestigd ABRvS ECLI:NL:RVS:2021:2830), r.o. 1–3, 12, 13, 15: 'Bij beschikking van 27 december 2014 is aan eiseres voor het jaar 2015 een voorschot zorgtoeslag toegekend van € 942.' 'Op 31 juli 2019 ontvangt verweerder een melding vanuit de Basisregistratie Inkomen (BRI) waaruit blijkt dat de inspecteur heeft vastgesteld dat in 2015 voor eiseres sprake is van een bedrag grondslag sparen en beleggen van € 391.765.' 'Bij beschikking van 6 september 2019 is de zorgtoeslag 2015 definitief berekend op nihil, en is bepaald dat eiseres € 1.061 moet terugbetalen.' 'In artikel 2a, eerste lid, van de Wzt is ... bepaald dat geen aanspraak bestaat op zorgtoeslag indien de grondslag sparen en beleggen van de aanvrager, zoals dat blijkt uit de BRI, in het berekeningsjaar 2015 meer bedraagt dan € 82.093 en in het berekeningsjaar 2016 meer bedraagt dan € 82.504.' 'Niet in geschil is dat bij een grondslag sparen en beleggen van € 391.765 voor het jaar 2015 respectievelijk € 479.973 voor het jaar 2016 geen recht bestaat op zorgtoeslag'. 'Verweerder heeft de definitieve berekeningen zorgtoeslag 2015 en 2016 terecht vastgesteld op nihil.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve berekening 2015 (6 september 2019): nihil omdat de grondslag sparen en beleggen (€ 391.765, BRI) boven de € 82.093 van Wzt art. 2a lid 1 (tekst 2015) lag — de derde uitkomst van de Dienst op de vermogenstoets in het corpus, en de eerste voor 2015. De uitspraak noemt de grondslag ná aftrek van het heffingvrije vermogen (Wet IB 2001 art. 5.2); de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen 2015 (€ 21.330, art. 5.5) zelf af. De invoer € 413.095 is daarom GERECONSTRUEERD: € 391.765 + € 21.330, zonder partner. Dat er geen partner was, noemt de uitspraak niet ('eiseres'); het voorschot van € 942 (27 december 2014) is het maximum zonder partner van de tekst 2015 (€ 941,85) en bewijst het; met partner zou de encoding tweemaal € 21.330 aftrekken en de uitkomst blijft nihil. Het toetsingsinkomen staat niet in de uitspraak; het is hier € 0 ingevuld omdat de vermogenstoets vóór de inkomenstoets gaat en nihil geeft bij elk inkomen (art. 2a lid 1: 'geen aanspraak'). De verifieerder toetst beide lezingen. Het voorschot zelf is geen case: zijn inkomen staat niet in de uitspraak. Het teruggevorderde bedrag (€ 1.061) is meer dan het voorschot van € 942; de uitspraak verklaart dat niet en het is geen invoer. De rechtbank: de Dienst mag niet afwijken van het inkomensgegeven in de BRI (Awir art. 2 lid 1 onder o, art. 8 lid 1) en hoeft een bezwaar tegen de aanslag IB niet af te wachten; wordt dat bezwaar gegrond, dan herziet hij ambtshalve (Awir art. 20 lid 1). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2015-rul-007 — PASS — check (ruling)

Source: ABRvS 9 augustus 2017, ECLI:NL:RVS:2017:2138 (zaaknr. 201605226/1/A2), r.o. 4: 'Bij besluit van 21 maart 2015 zijn voor het berekeningsjaar 2015 voorschotten zorgtoeslag en kindgebonden budget toegekend tot een bedrag van € 942,00, respectievelijk € 4.082,00. Aan deze berekening ligt een geschat toetsingsinkomen van [appellante] van € 443,00 ten grondslag.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 942.00 | 942.00 (exact 942) | yes |

Note: Voorschot 2015 (21 maart 2015) van € 942 op een geschat toetsingsinkomen van € 443, zonder partner: het maximum van de tekst van 2015 (€ 1.408 − 5,265% × € 19.463,328 = € 941,85 → € 942, via build.run_case). Daarna heeft de Dienst het voorschot op nihil gezet omdat een medebewoner van 1 januari tot 4 oktober 2015 als toeslagpartner gold (Awir art. 3 lid 2 onder e); diens inkomen staat niet in de uitspraak en een deel van het jaar is niet als één situatie te berekenen (Awir art. 5, niet gecodeerd), dus die nihil is geen case. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2015-rul-008 — PASS — check (ruling)

Source: ABRvS 15 november 2017, ECLI:NL:RVS:2017:3139 (zaaknr. 201605802/1/A2), r.o. 2: 'De Belastingdienst/Toeslagen had [appellante] bij besluit van 27 december 2014 een voorschot zorgtoeslag van € 942,00 toegekend en bij besluit van 21 september 2015 een voorschot kindgebonden budget van € 3.062,00. De hoogte van deze voorschotten was gebaseerd op een toetsingsinkomen van [appellante] van € 2.655,00.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 942.00 | 942.00 (exact 942) | yes |

Note: Voorschot 2015 (27 december 2014) van € 942 op een toetsingsinkomen van € 2.655, zonder partner: het maximum van de tekst van 2015 (€ 941,85 → € 942, via build.run_case). De latere herziening (21 oktober 2015) naar nihil bij een gezamenlijk toetsingsinkomen van € 17.736 met een medebewoner als toeslagpartner vanaf de geboorte van een kind op 21 maart 2015 is geen case: de tekst geeft bij € 17.736 met partner € 1.791 voor een heel jaar, maar de uitspraak zegt niet of de partner verzekerd was (Wzt art. 2 lid 5, tekst 2015) of rechtmatig verbleef (Awir art. 9) en de situatie veranderde binnen het jaar (Awir art. 5, niet gecodeerd); een uitkomst die van niet-genoemde invoer afhangt wordt niet opgeslagen en niet als verschil gelogd (law/SOURCES.md §4). Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

## zt-2016-rul-002 — PASS — check (ruling)

Source: ABRvS 10 mei 2023, ECLI:NL:RVS:2023:1843 (zaaknr. 202202207/1/A2), procesverloop en r.o. 3.1: 'Bij onderscheiden besluiten van 17 juli 2020 heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant] voor de jaren 2016 en 2017 vastgesteld op nihil en onderscheidenlijk € 1.080,00 en € 1.1147,00 aan teveel ontvangen voorschotten teruggevorderd' (het tweede bedrag staat zo, met vier cijfers, in de tekst) ... 'omdat het gezamenlijk toetsingsinkomen over die jaren te hoog is om voor zorgtoeslag in aanmerking te komen'; 'Tussen partijen is niet in geschil dat het door de inspecteur vastgestelde verzamelinkomen over 2016 € 35.088,00 en over 2017 € 35.358,00 bedraagt.' Hoger beroep ongegrond; de vaststelling op nihil staat

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2016 op nihil wegens een te hoog gezamenlijk toetsingsinkomen. De uitspraak noemt het verzamelinkomen van de aanvrager (€ 35.088) en zegt dat het gezamenlijke inkomen te hoog was; het inkomen van de partner noemt zij niet en is op 0 gezet. Dat maakt voor de uitkomst niet uit: de tekst van 2016 geeft met partner al nihil bij € 35.088 (de inkomensgrens met partner ligt lager, zie zt-2016-syn-030/-031), en elk hoger gezamenlijk inkomen geeft ook nihil. Of de partner verzekerde was, doet bij nihil evenmin ter zake. Het teruggevorderde bedrag (€ 1.080) is het ontvangen voorschot, geen invoer. Dezelfde uitspraak geeft 2017: zt-2017-rul-001. Eerste aanleg (gelezen 2026-10-30): Rechtbank Rotterdam 7 april 2022, ECLI:NL:RBROT:2022:2503 noemt wél het inkomen van de toeslagpartner — € 10.044 (2016) en € 10.191 (2017), gezamenlijk € 45.132 en € 45.549 — en citeert de Dienst: 'Het maximale inkomen voor aanspraak op zorgtoeslag is voor een aanvrager met een toeslagpartner vastgesteld op € 33.764,-' (2016; zie DISCREPANCIES.md #1) en voor 2017 '€ 32.358'. De invoer hier (partner € 0) blijft staan: de uitkomst is nihil onder beide lezingen; € 1.080 (2016) en € 1.147 (2017) teruggevorderd. Wordt 'verified' zodra een met naam genoemd mens (CASES.md) de invoer tegen de uitspraak heeft gelegd — ASKS.md 9.

## zt-2016-rul-003 — PASS — check (ruling)

Source: ABRvS 14 oktober 2020, ECLI:NL:RVS:2020:2416, r.o. 1 en 4: 'De dienst heeft bij besluit van 4 augustus 2017 de huurtoeslag en zorgtoeslag over 2016 definitief berekend en op nihil gesteld, omdat het toetsingsinkomen van [appellant] van € 29.027,00 hoger is dan de inkomensgrenzen voor huurtoeslag en zorgtoeslag in 2016.' 'Verder is niet in geschil dat [appellant] een transitievergoeding van € 6.000,00 heeft ontvangen en dat het toetsingsinkomen € 29.027,00 is.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve berekening 2016 van 4 augustus 2017: zorgtoeslag nihil op een toetsingsinkomen van € 29.027 (een transitievergoeding van € 6.000 telde mee; de Afdeling: geen bijzonder inkomen). De uitspraak noemt geen partner; zonder partner geeft de tekst van 2016 nihil (de grens is € 27.013; via build.run_case). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2016-rul-004 — PASS — check (ruling)

Source: Rechtbank Den Haag 5 februari 2021, ECLI:NL:RBDHA:2021:2781 (zaaknrs. SGR 19/7423 en SGR 20/3372; bevestigd ABRvS ECLI:NL:RVS:2021:2830), r.o. 4–6, 12, 13, 15: 'Bij beschikking van 28 december 2015 is aan eiseres voor het jaar 2016 een voorschot zorgtoeslag toegekend van € 998.' 'Op 11 oktober 2019 ontvangt verweerder een melding vanuit de BRI waaruit blijkt dat de inspecteur heeft vastgesteld dat in 2016 voor eiseres sprake is van een bedrag grondslag sparen en beleggen van € 479.973.' 'Bij beschikking van 15 november 2019 is de zorgtoeslag 2016 definitief berekend op nihil, en is bepaald dat eiseres € 1.902 moet terugbetalen.' '... in het berekeningsjaar 2016 meer bedraagt dan € 82.504.' 'Niet in geschil is dat bij een grondslag sparen en beleggen van € 391.765 voor het jaar 2015 respectievelijk € 479.973 voor het jaar 2016 geen recht bestaat op zorgtoeslag'. 'Verweerder heeft de definitieve berekeningen zorgtoeslag 2015 en 2016 terecht vastgesteld op nihil.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve berekening 2016 (15 november 2019): nihil omdat de grondslag sparen en beleggen (€ 479.973, BRI) boven de € 82.504 van Wzt art. 2a lid 1 (tekst 2016) lag — de eerste uitkomst van de Dienst op de vermogenstoets voor 2016. De uitspraak noemt de grondslag ná aftrek van het heffingvrije vermogen (Wet IB 2001 art. 5.2); de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen 2016 (€ 24.437, art. 5.5) zelf af. De invoer € 504.410 is daarom GERECONSTRUEERD: € 479.973 + € 24.437, zonder partner. Dat er geen partner was, noemt de uitspraak niet ('eiseres'); het voorschot van € 998 (28 december 2015) is het maximum zonder partner van de tekst 2016 (€ 997,74) en bewijst het; met partner blijft de uitkomst nihil. Het toetsingsinkomen staat niet in de uitspraak; het is hier € 0 ingevuld omdat de vermogenstoets vóór de inkomenstoets gaat en nihil geeft bij elk inkomen. De verifieerder toetst beide lezingen. Het voorschot zelf is geen case: zijn inkomen staat niet in de uitspraak. Het teruggevorderde bedrag (€ 1.902) is veel meer dan het voorschot van € 998; de uitspraak verklaart dat niet en het is geen invoer. Zie zt-2015-rul-006 voor dezelfde aanvrager over 2015. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2016-rul-005 — PASS — check (ruling)

Source: Rechtbank Zeeland-West-Brabant 10 april 2018, ECLI:NL:RBZWB:2018:2319 (zaaknr. BRE 17/6534 HUUR), procesverloop en r.o. 4: 'Bij besluit van 7 juli 2017 (primair besluit) heeft Belastingdienst/Toeslagen de zorgtoeslag over 2016 definitief vastgesteld op € 439,- en aangegeven dat eiser € 406,- moet terugbetalen.' 'In het geval van eiser is het toetsingsinkomen volgens de definitieve aanslag inkomstenbelasting 2016 vastgesteld op een bedrag van € 15.070,-,-. Ten aanzien van zijn toeslagpartner is het toetsingsinkomen vastgesteld op een bedrag van € 16.604,-. Het gezamenlijke toetsingsinkomen bedraagt derhalve € 30.674,-.' 'Nu het toetsingsinkomen voor eiser en zijn toeslagpartner is vastgesteld op € 30.670,- heeft Belastingdienst/Toeslagen terecht aangegeven dat eiser geen recht heeft op huurtoeslag ... Verder heeft Belastingdienst/Toeslagen het recht op zorgtoeslag op basis van het toetsingsinkomen terecht vastgesteld op € 439,-.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 439.00 | 439.00 (exact 439) | yes |

Note: Definitieve berekening 2016 (7 juli 2017), met partner: € 439. De uitspraak noemt drie inkomensbedragen die niet kloppen met elkaar: € 15.070 + € 16.604 = € 31.674 (niet de genoemde € 30.674), en in de conclusie € 30.670. De tekst van 2016 geeft bij een gezamenlijk toetsingsinkomen van € 30.670 precies € 439 (normpremie 5,22% × € 19.758,816 + 13,43% × € 10.911,18 = € 2.496,78; 2 × € 1.468 − € 2.496,78 = € 439,22 → € 439, via build.run_case) en bij € 31.674 € 304. De case voert daarom € 30.670 in als gezamenlijk toetsingsinkomen (partner € 0), de lezing dat de Dienst met € 30.670 rekende en een van de twee deelbedragen in de uitspraak verschreven is; dat is de lezing van de operator, en de verifieerder toetst haar. De huurtoeslag 2016 nihil boven de inkomensgrens van € 30.050 is geen onderdeel van deze case. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2016-rul-006 — PASS — check (ruling)

Source: ABRvS 5 december 2018, ECLI:NL:RVS:2018:3958 (zaaknr. 201805301/1/A2), r.o. 1: '[appellant] heeft in 2016 voorschotten huurtoeslag ten bedrage van € 499,00 en voorschotten zorgtoeslag ten bedrage van € 945,00 ontvangen. De Belastingdienst/Toeslagen heeft de hoogte van de voorschotten gebaseerd op een geschat inkomen van € 26.901,00. Bij het besluit van 4 augustus 2017, zoals gehandhaafd bij het besluit van 10 november 2017, heeft de dienst de huur- en zorgtoeslag definitief vastgesteld op een bedrag van onderscheidenlijk € 111,00 en € 761,00 ... De bedragen van de vastgestelde toeslagen heeft de dienst bepaald aan de hand van het door de inspecteur van de Belastingen vastgestelde inkomen van € 28.272,00, zoals opgenomen in de Basisregistratie Inkomen.' Hoger beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 945.00 | 945.00 (exact 945) | yes |

Note: Voorschot 2016 van € 945 op een geschat inkomen van € 26.901. De uitspraak noemt geen partner, maar het bedrag bewijst er een: de tekst van 2016 geeft zonder partner € 39 en met partner € 945,39 → € 945 (normpremie 5,22% × € 19.758,816 + 13,43% × € 7.142,18 = € 1.990,61; 2 × € 1.468 − € 1.990,61; via build.run_case). Het inkomen is ingevoerd als gezamenlijk toetsingsinkomen (partner € 0). Zie zt-2016-rul-007 voor de definitieve berekening. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2016-rul-007 — PASS — check (ruling)

Source: ABRvS 5 december 2018, ECLI:NL:RVS:2018:3958 (zaaknr. 201805301/1/A2), r.o. 1 (zie zt-2016-rul-006): definitief 4 augustus 2017 'huur- en zorgtoeslag definitief vastgesteld op een bedrag van onderscheidenlijk € 111,00 en € 761,00' aan de hand van 'het door de inspecteur van de Belastingen vastgestelde inkomen van € 28.272,00, zoals opgenomen in de Basisregistratie Inkomen'. Hoger beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 761.00 | 761.00 (exact 761) | yes |

Note: Definitieve berekening 2016 (4 augustus 2017) van € 761 bij het BRI-inkomen van € 28.272. Met partner (bewezen door het voorschot, zt-2016-rul-006; zonder partner zou de tekst nihil geven) geeft de tekst van 2016 € 761,27 → € 761 (normpremie € 1.031,41 + 13,43% × € 8.513,18 = € 2.174,73; 2 × € 1.468 − € 2.174,73; via build.run_case). € 945 − € 761 = € 184 teruggevorderd voor de zorgtoeslag; de uitspraak noemt alleen het totaal met de huurtoeslag (€ 572). De Afdeling: een voorschot wekt geen vertrouwen op een gelijke definitieve vaststelling; de wet kent geen bepaling om van terugvordering af te zien. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2016-rul-008 — PASS — check (ruling)

Source: ABRvS 2 augustus 2023, ECLI:NL:RVS:2023:2951 (zaaknr. 202207176/1/A2), citaten uit de uitspraak: 'Bij besluit van 21 september 2016 heeft de Belastingdienst/Toeslagen het voorschot zorgtoeslag van [appellant] over het toeslagjaar 2016 vastgesteld op € 998,00.' 'Op 9 april 2020 is aan de Belastingdienst/Toeslagen door de Basisregistratie inkomensgegevens gemeld dat het inkomen van [appellant] over 2016 € 27.946,00 bedraagt.' 'Daarnaast heeft [appellant] een grondslag van sparen en beleggen van € 249.562,00 en een voordeel uit sparen en beleggen van € 9.982,00.' 'Op basis hiervan heeft de Belastingdienst/Toeslagen bij besluit van 1 mei 2020 het recht van [appellant] op zorgtoeslag over 2016 definitief vastgesteld op nihil.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2016 (1 mei 2020): nihil. De Afdeling noemt het BRI-inkomen (€ 27.946), de grondslag sparen en beleggen (€ 249.562) en het voordeel uit sparen en beleggen (€ 9.982) en zegt dat de Dienst 'op basis hiervan' nihil vaststelde. De grondslag ligt boven de € 82.504 van Wzt art. 2a lid 1 (tekst 2016) — de zesde uitkomst van de Dienst op de vermogenstoets in het corpus — en het inkomen ligt boven de inkomensgrens zonder partner van de tekst 2016 (€ 27.013): de tekst geeft op elk van beide gronden nihil, zodat deze case niet onderscheidt welke grond de Dienst woog. De invoer is GERECONSTRUEERD zoals in zt-2015-rul-006: grondslag € 249.562 + heffingvrij vermogen 2016 € 24.437 (Wet IB 2001 art. 5.5) = € 273.999, zonder partner; dat er geen partner was, zegt de uitspraak niet, maar het voorschot van € 998 (21 september 2016) is het maximum zonder partner van de tekst 2016 (€ 997,74). Het voorschot zelf is geen case: zijn inkomen staat niet in de uitspraak. € 926 teruggevorderd, minder dan het voorschot van € 998; de uitspraak verklaart dat niet. De FSV-registratie en de inkomensvaststelling waren het geschil, niet de berekening. Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

## zt-2017-rul-001 — PASS — check (ruling)

Source: ABRvS 10 mei 2023, ECLI:NL:RVS:2023:1843 (zaaknr. 202202207/1/A2), procesverloop en r.o. 3.1: 'Bij onderscheiden besluiten van 17 juli 2020 heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant] voor de jaren 2016 en 2017 vastgesteld op nihil' ... 'omdat het gezamenlijk toetsingsinkomen over die jaren te hoog is om voor zorgtoeslag in aanmerking te komen'; 'Tussen partijen is niet in geschil dat het door de inspecteur vastgestelde verzamelinkomen over 2016 € 35.088,00 en over 2017 € 35.358,00 bedraagt.' Hoger beroep ongegrond; de vaststelling op nihil staat

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eerste uitkomst van de Dienst voor 2017 in het corpus: definitieve vaststelling op nihil wegens een te hoog gezamenlijk toetsingsinkomen. De uitspraak noemt het verzamelinkomen van de aanvrager (€ 35.358); het inkomen van de partner noemt zij niet en is op 0 gezet. Voor de uitkomst maakt dat niet uit: de tekst van 2017 geeft met partner al nihil bij € 35.358 (zie de grens in zt-2017-syn-026/-027), en elk hoger gezamenlijk inkomen ook. Dezelfde uitspraak geeft 2016: zt-2016-rul-002. Eerste aanleg (gelezen 2026-10-30): Rechtbank Rotterdam 7 april 2022, ECLI:NL:RBROT:2022:2503 noemt wél het inkomen van de toeslagpartner — € 10.044 (2016) en € 10.191 (2017), gezamenlijk € 45.132 en € 45.549 — en citeert de Dienst: 'Het maximale inkomen voor aanspraak op zorgtoeslag is voor een aanvrager met een toeslagpartner vastgesteld op € 33.764,-' (2016; zie DISCREPANCIES.md #1) en voor 2017 '€ 32.358'. De invoer hier (partner € 0) blijft staan: de uitkomst is nihil onder beide lezingen; € 1.080 (2016) en € 1.147 (2017) teruggevorderd. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2017-rul-002 — PASS — check (ruling)

Source: ABRvS 4 december 2019, ECLI:NL:RVS:2019:4069 (zaaknr. 201901677/1/A2), r.o. 1 en 2: de Dienst heeft de zorgtoeslag 2017 'definitief vastgesteld op een lager bedrag dan de ontvangen voorschotten' omdat '[persoon] over de maand januari 2017 als de toeslagpartner van [appellante] moet worden aangemerkt' (tot 11 januari 2017 op hetzelfde adres, in 2016 ook toeslagpartner); 'Het gezamenlijke toetsingsinkomen van [appellante] en [persoon] over 2017 bedraagt € 35.410,00, waardoor [appellante] over de maand januari 2017 geen aanspraak heeft op huurtoeslag en zorgtoeslag'. R.o. 5.2–5.3: Awir art. 5 (wijziging na de eerste van de maand telt vanaf de volgende maand) en art. 7 lid 1 jo. art. 8 lid 1: het jaarinkomen van de partner telt voor die maand mee, 'geen ruimte de draagkracht van [persoon] per maand te bepalen'. Hoger beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eén maand van 2017 (januari) met een toeslagpartner: de Dienst telde voor die maand het hele jaarinkomen van de partner mee (gezamenlijk € 35.410) en kwam voor januari op geen aanspraak; de Afdeling bevestigt dat Awir art. 7 lid 1 en art. 8 lid 1 geen maandelijkse draagkracht kennen. De encoding rekent met maanden_aanspraak: 1 en het gezamenlijke jaarinkomen en geeft nihil (de grens met partner ligt onder € 35.410, zie zt-2017-syn-026/-027). De verdeling van het inkomen over beide partners noemt de uitspraak niet; alles staat bij de aanvrager, wat voor Wzt art. 2 lid 2 niet uitmaakt. De elf maanden zonder partner (februari–december) zijn geen case: de uitspraak noemt het eigen inkomen van de aanvrager niet, alleen het jaartotaal van de zorgtoeslag 2017 (€ 978, procesverloop). Twee situaties in één jaar (Awir art. 5) zijn als zodanig niet gecodeerd; deze case is de maand met partner apart. Wordt 'verified' op dezelfde voet als de andere ruling-cases (ASKS.md 9).

## zt-2017-rul-003 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 29 september 2020, ECLI:NL:RBMNE:2020:4351 (zaaknrs. UTR 19/5139 en 19/5285), procesverloop en r.o. 6, 9: '[eiser], te [woonplaats], Duitsland'; 'Bij besluit van 19 juli 2019 (het primaire besluit II) heeft verweerder het recht op zorgtoeslag van eiser voor het jaar 2017 definitief vastgesteld op nihil (€ 0,-) en het te veel uitbetaalde voorschot, inclusief rente, van € 681,- teruggevorderd.' 'Verweerder heeft terecht aan de hand van het door eiser geschatte toetsingsinkomen van € 23.170,- het voorschot zorgtoeslag voor 2017 berekend. ... De rechtbank stelt vast dat de inspecteur van de belastingdienst het verzamelinkomen 2017 van eiser heeft vastgesteld op € 26.121,-. Voor de definitieve berekening over 2017 is verweerder terecht uitgegaan van dit toetsingsinkomen.' 'De rechtbank is van oordeel dat verweerder terecht pas bij de definitieve berekening van zorgtoeslag over 2017 rekening heeft gehouden met de woonlandfactor. Vaststaat dat verweerder op 6 april 2018 de melding van het CAK heeft ontvangen dat eiser met ingang van 3 april 2011 zorgverzekerd is op grond van artikel 69 van de Zorgverzekeringswet.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve berekening 2017 (19 juli 2019): nihil voor een verdragsgerechtigde (Zvw art. 69) in Duitsland bij een toetsingsinkomen van € 26.121, met toepassing van de woonlandfactor. De tekst van 2017 geeft hetzelfde, maar langs een smalle weg: standaardpremie € 1.530 × woonlandfactor Duitsland 0,8372 (Wzt art. 3 lid 1–2, tekst 2017; Regeling zorgverzekering bijlage 4, Stcrt. 2016, 61016) = € 1.280,92; normpremie 2,305% × € 20.108,736 + 13,46% × € 6.012,26 = € 1.272,76 (art. 2 lid 3); aanspraak € 8,16 → afgerond € 8 (Awir art. 14 lid 4) → minder dan € 24, dus niet toegekend (Awir art. 14 lid 5) — via build.run_case. Na zt-2013-rul-008 de tweede beslissing in het corpus die het minimum van € 24 beslist, en de eerste in combinatie met een woonlandfactor. Met de voor de verdragsbijdrage teruggezette factor 0,7532 (Stcrt. 2019, 58198 art. II, 'zonder effect op de zorgtoeslag') zou de aanspraak negatief zijn: nihil onder beide factoren. Zonder woonlandfactor zou de tekst € 257 geven: de factor verklaart de nihil, niet het inkomen. De uitspraak noemt geen partner; met een verdragsgerechtigde partner zou de tekst € 985 geven, dus de case leest 'zonder partner' en de verifieerder toetst die lezing. Het voorschot op het geschatte € 23.170 is zonder factor berekend (r.o. 9); zijn bedrag staat niet in de uitspraak (€ 681 teruggevorderd 'inclusief rente'), dus geen case. Eerste uitkomst van de Dienst in het corpus met de Duitse factor op een genoemd inkomen. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2017-rul-004 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 22 februari 2022, ECLI:NL:RBMNE:2022:946 (zaaknr. AWB - 21/3021), citaten uit de uitspraak: 'Hangende het beroep heeft verweerder bij brief van eveneens 18 oktober 2021 meegedeeld dat de inspecteur van de Belastingdienst het toetsingsinkomen over 2017 van eiser en zijn echtgenote heeft aangepast.' 'Het toetsingsinkomen is vastgesteld op € 32.534,-.' 'Bij de definitieve berekening van de zorgtoeslag van eiser over het jaar 2017 heeft verweerder vastgesteld dat het toetsingsinkomen – het gezamenlijke inkomen van eiser en zijn partner – te hoog is om voor zorgtoeslag in aanmerking te komen.' 'De Toeslagenkaart vermeldt als inkomensgrens voor het recht op zorgtoeslag 2017 voor een aanvrager met partner € 35.116,-.' 'Gezamenlijke standaardpremie van € 2.561,84' 'De normpremie bedraagt een percentage (5.055%) van het drempelinkomen ( € 20.109,-) vermeerderd met een percentage (13,56%) van het toetsingsinkomen (€ 32.534,-) van de verzekerde in dat jaar voorzover dat toetsingsinkomen het drempelinkomen te boven gaat:' '€ 20.109- x 5,055% + (€ 32.534 -/- € 20.109) x 13,46% is € 2.688,91.' 'Omdat de normpremie van € 2.688,91 hoger is dan de standaardpremie van € 2.561,84, heeft verweerder terecht geconstateerd dat eiser geen recht heeft op zorgtoeslag.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve berekening 2017 na correctie van het toetsingsinkomen door de inspecteur (hangende beroep, brief van 18 oktober 2021): nihil bij een gezamenlijk toetsingsinkomen van € 32.534 voor een in Duitsland wonend echtpaar (de uitspraak noemt Duitsland en heet 'berekening niet in Nederland wonende toeslagaanvrager'). De rechtbank citeert de rekenregel van de Dienst volledig: gezamenlijke standaardpremie € 2.561,84 = 2 × € 1.530 × 0,8372 (de woonlandfactor Duitsland 2017 van parameters/2017.yaml, door de Dienst op beide standaardpremies toegepast — de case leest daaruit dat ook de partner verdragsgerechtigd en geen Zvw-verzekerde was, en vult partner_verzekerd: false in); normpremie € 20.109 × 5,055% + (€ 32.534 − € 20.109) × 13,46% = € 2.688,91 (de uitspraak schrijft in de formule eenmaal '13,56%' en rekent met 13,46%); normpremie > standaardpremie → geen zorgtoeslag. De Dienst noemt het drempelinkomen 2017 '€ 20.109' — de tekst geeft € 20.108,736, dus naar boven afgerond (DISCREPANCIES.md #1) — en de Toeslagenkaart 2017 een inkomensgrens met partner van € 35.116, gelijk aan die van de tekst. De encoding: drempelinkomen € 20.108,736, normpremie € 2.688,94, standaardpremies 2 × € 1.530 × 0,8372 = € 2.561,83 → nihil (Wzt art. 3, tekst 2017, voor de factor; art. 2 lid 1–3 voor de normpremie). Het gezamenlijke inkomen is als inkomen van de aanvrager ingevoerd (partner € 0); de uitsplitsing staat niet in de uitspraak en doet er voor de uitkomst niet toe. Het voorschot 2017 van € 1.220 heeft geen genoemd inkomen en is geen case. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2017-rul-005 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 22 februari 2022, ECLI:NL:RBMNE:2022:946 (zaaknr. AWB - 21/3021), citaten uit de uitspraak: 'Bij besluit van 31 december 2019 (primair besluit) heeft verweerder het recht op zorgtoeslag voor eiser voor 2017 definitief berekend en vastgesteld op € 0,-.' 'De berekening van de definitieve vaststelling heeft verweerder gebaseerd op het toetsingsinkomen vanuit de Basisregistratie Inkomen (BRI) van € 45.105,-.' 'Bij de definitieve berekening van de zorgtoeslag van eiser over het jaar 2017 heeft verweerder vastgesteld dat het toetsingsinkomen – het gezamenlijke inkomen van eiser en zijn partner – te hoog is om voor zorgtoeslag in aanmerking te komen.' 'Om die reden heeft verweerder het recht op zorgtoeslag van eiser over het jaar 2017 vastgesteld op nihil en het voorschotbedrag teruggevorderd.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eerste definitieve berekening 2017 (31 december 2019): nihil bij het toen in de BRI geregistreerde gezamenlijke toetsingsinkomen van € 45.105 (later door de inspecteur verlaagd tot € 32.534 wegens dubbeltellingen — zt-2017-rul-004). Zelfde huishouden en zelfde invoer als zt-2017-rul-004 (echtpaar in Duitsland, beiden verdragsgerechtigd gelezen uit de rekenregel van de Dienst, woonlandfactor 0,8372). De tekst van 2017 geeft bij € 45.105 nihil met en zonder woonlandfactor (inkomensgrens met partner € 35.116). Opgenomen met de invoer die de Dienst op dat moment gebruikte, zoals zt-2024-rul-002. Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

## zt-2018-rul-001 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 5 februari 2021, ECLI:NL:RBMNE:2021:668 (zaaknr. UTR 20/725), overwegingen (feiten): 'Het voorschot voor de zorgtoeslag bedroeg € 1.061 en voor het kindgebonden budget was dat € 1.599. Daarbij ging verweerder uit van een (geschat) gezamenlijk inkomen in 2018 van eiseres en haar echtgenoot van € 28.304. Daarna is bij verweerder bekend geworden dat het gezamenlijke inkomen van eiseres en haar echtgenoot in 2018 een stuk hoger lag, namelijk € 37.125. Omdat het gezamenlijke inkomen boven de maximale inkomensgrens van € 35.996 komt, hebben eiseres en haar echtgenoot geen recht meer op zorgtoeslag. Als gevolg hiervan moeten eiseres en haar echtgenoot € 1.661 terugbetalen' (zorgtoeslag en kindgebonden budget samen). Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1061.00 | 1061.00 (exact 1061) | yes |

Note: EERSTE uitkomst van de Dienst voor 2018 met inkomen in het corpus: een voorschot zorgtoeslag 2018 van € 1.061 voor een paar toeslagpartners op een geschat gezamenlijk inkomen van € 28.304. De uitspraak splitst het inkomen niet over de partners; de encoding telt op, dus staat het geheel bij de aanvrager. De tekst van 2018 geeft met een verzekerde partner 2 × € 1.546 − (4,750% × € 20.450,88 + 13,490% × (€ 28.304 − € 20.450,88)) = € 1.061,20 → € 1.061 (Awir art. 14 lid 4; via build.run_case). De definitieve vaststelling op nihil op € 37.125 staat in zt-2018-rul-002. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2018-rul-002 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 5 februari 2021, ECLI:NL:RBMNE:2021:668 (zaaknr. UTR 20/725), overwegingen (feiten): 'Het voorschot voor de zorgtoeslag bedroeg € 1.061 en voor het kindgebonden budget was dat € 1.599. Daarbij ging verweerder uit van een (geschat) gezamenlijk inkomen in 2018 van eiseres en haar echtgenoot van € 28.304. Daarna is bij verweerder bekend geworden dat het gezamenlijke inkomen van eiseres en haar echtgenoot in 2018 een stuk hoger lag, namelijk € 37.125. Omdat het gezamenlijke inkomen boven de maximale inkomensgrens van € 35.996 komt, hebben eiseres en haar echtgenoot geen recht meer op zorgtoeslag. Als gevolg hiervan moeten eiseres en haar echtgenoot € 1.661 terugbetalen' (zorgtoeslag en kindgebonden budget samen). Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Zorgtoeslag 2018 definitief nihil voor een paar toeslagpartners op een gezamenlijk inkomen van € 37.125, boven de inkomensgrens met partner. De uitspraak noemt die grens: 'de maximale inkomensgrens van € 35.996'. Dat is precies de grens die de tekst van 2018 geeft met het onafgeronde drempelinkomen (€ 20.450,88; zie zt-2018-syn-022/-023): bij € 35.996 nog € 23,55 → € 24, bij € 35.997 € 23,41 → nihil (Awir art. 14 lid 4–5). Een naar beneden afgerond drempelinkomen (€ 20.450) zou de grens op € 35.995 leggen; de Dienst heeft het drempelinkomen voor 2018 dus niet naar beneden afgerond (DISCREPANCIES.md #1). € 37.125 ligt boven elke lezing van de grens, zodat deze uitkomst zelf #1 niet beslist; de grens die de uitspraak noemt doet dat wel. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2018-rul-003 — PASS — check (ruling)

Source: ABRvS 13 oktober 2021, ECLI:NL:RVS:2021:2281 (zaaknr. 202006813/1/A2), citaten uit de uitspraak: 'Aan het besluit van 9 augustus 2019, gehandhaafd bij het besluit van 4 november 2019, heeft de Belastingdienst/Toeslagen ten grondslag gelegd dat het toetsingsinkomen van [appellant] € 25.598,00 bedraagt, waardoor het recht op zorgtoeslag € 445,00 is.' 'Ook voert [appellant] aan dat hij in eerste instantie geen zorgtoeslag over 2015, 2016 en 2017 heeft ontvangen en dat het in 2018 ontvangen bedrag van € 536,00 achterstallige zorgtoeslag over die jaren is.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 445.00 | 445.00 (exact 445) | yes |

Note: Definitieve vaststelling 2018 (9 augustus 2019): € 445 bij een toetsingsinkomen van € 25.598, zonder partner (de uitspraak noemt geen partner; met partner zou de tekst € 1.426 geven). De tekst van 2018: € 1.546 − (1,990% × € 20.450,88 + 13,490% × € 5.147,12) = € 444,68 → € 445 (Awir art. 14 lid 4). De eerste uitkomst van de Dienst voor 2018 op de afbouwlijn zonder partner in het corpus. € 91 teruggevorderd; het voorschot (€ 536, dat appellant achterstallige toeslag over 2015–2017 noemt) heeft geen genoemd inkomen en is geen case. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2018-rul-004 — PASS — check (ruling)

Source: ABRvS 7 december 2022, ECLI:NL:RVS:2022:3588 (zaaknr. 202106167/1/A2), citaten uit de uitspraak: 'Bij besluit van 22 januari 2018 heeft de Belastingdienst/Toeslagen de voorschotten zorgtoeslag, kindgebonden budget en huurtoeslag voor [appellante] over 2018 vastgesteld op respectievelijk € 1.139,00, € 5.543,00 en € 4.045,00.' 'Bij het besluit van 9 augustus 2019 heeft de Belastingdienst/Toeslagen de zorgtoeslag, het kindgebonden budget en de huurtoeslag voor [appellante] over 2018 opnieuw berekend en definitief vastgesteld op onderscheidenlijk € 0,00, € 2.945,00 en € 0,00.' 'De dienst heeft de bedragen van de zorgtoeslag en het kindgebonden budget gebaseerd op een toetsingsinkomen van [appellante] van € 58.936,00 en heeft het bedrag van de huurtoeslag gebaseerd op een gezamenlijk toetsingsinkomen van [appellante] en haar thuiswonende kind van in totaal € 76.729,00.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2018 (9 augustus 2019): nihil bij een toetsingsinkomen van € 58.936, zonder partner (de uitspraak rekent voor de zorgtoeslag met het eigen inkomen van appellante; het thuiswonende kind telt alleen voor de huurtoeslag mee als medebewoner). De tekst van 2018 geeft nihil boven € 28.720 zonder partner en boven € 35.996 met partner. Het voorschot van € 1.139 (22 januari 2018) is het maximum zonder partner van de tekst 2018 (€ 1.139,03), maar zijn geschatte inkomen staat niet in de uitspraak: geen case. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2018-rul-005 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 14 juni 2021, ECLI:NL:RBMNE:2021:2494 (zaaknr. UTR 20/3703), citaten uit de uitspraak: 'Eiser heeft voor 2018 een voorschot zorgtoeslag ontvangen van € 1.656,-.' '1 mei 2018 heeft verweerder het recht op zorgtoeslag definitief berekend en vastgesteld op nihil.' 'Dat heeft verweerder zo gedaan, omdat het gezamenlijke toetsingsinkomen van eiser en zijn echtgenote € 39.574,- bedraagt en dan bestaat er geen recht op zorgtoeslag.' 'Dit betekent dat eiser en zijn echtgenote voor het jaar 2018 vanaf 1 november 2018 niet meer als toeslagpartners worden aangemerkt.' 'De zorgtoeslag voor 2018 is door verweerder daarom opnieuw berekend en bij besluit van 6 maart 2021 vastgesteld op € 170,-.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2018 (1 mei 2020, gehandhaafd 4 september 2020): nihil bij een gezamenlijk toetsingsinkomen van € 39.574 met de echtgenote als toeslagpartner voor het hele jaar (tekst 2018: inkomensgrens met partner € 35.996). Opgenomen met de invoer van dát besluit: de Dienst nam hangende beroep (6 maart 2021) een ander standpunt in — het partnerschap eindigde per 1 november 2018 — en berekende € 170; dat is een wijziging in het jaar (Awir art. 5), niet gecodeerd, geen case. Het gezamenlijke inkomen is als inkomen van de aanvrager ingevoerd (partner € 0, verzekering niet in geschil); de uitsplitsing staat niet in de uitspraak. Het voorschot van € 1.656 heeft geen genoemd inkomen en is geen case; € 1.711 teruggevorderd. Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

## zt-2019-rul-003 — PASS — check (ruling)

Source: ABRvS 17 augustus 2022, ECLI:NL:RVS:2022:2396 (zaaknr. 202106083/1/A2), r.o. 1: 'Bij besluit van 27 december 2018 heeft de Belastingdienst/Toeslagen het voorschot op de zorgtoeslag van [appellant] voor 2019 berekend op € 0,00. Op 25 oktober 2019 geeft [appellant] door dat zijn geschatte inkomen over 2019 € 5.063,00 bedraagt. Bij besluit van 21 november 2019 heeft de Belastingdienst/Toeslagen het voorschot op de zorgtoeslag voor 2019 berekend op € 2.314,00.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 2314.00 | 2314.00 (exact 2314) | yes |

Note: Voorschot 2019 op een geschat inkomen van € 5.063, onder het drempelinkomen (€ 20.940,768), dus het maximum. De uitspraak noemt geen partner; het bedrag bewijst er een: € 2.314 is het maximum MET partner uit de tekst van 2019 (normpremie 4,315% × € 20.940,768 = € 903,59; 2 × € 1.609 − € 903,59 = € 2.314,41 → € 2.314, Awir art. 14 lid 4; via build.run_case), terwijl het maximum zonder partner € 1.189 is (€ 1.609 − 2,005% × € 20.940,768 = € 1.189,14; vgl. het voorschot in ECLI:NL:RVS:2023:3385). Hetzelfde maximum met partner staat als voorschot in zt-2019-rul-001 (€ 2.314 op € 13.314). Het later definitief op nihil berekenen wegens het vermogen staat in zt-2019-rul-004. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-004 — PASS — check (ruling)

Source: ABRvS 17 augustus 2022, ECLI:NL:RVS:2022:2396 (zaaknr. 202106083/1/A2), r.o. 1 en 4.2: 'Op 16 september 2020 ontvangt de Belastingdienst/Toeslagen een melding van de Basisregistratie inkomen dat het inkomen van [appellant] voor 2019 is vastgesteld op € 3.665,00, de grondslag sparen en beleggen op € 106.904,00 en het voordeel uit sparen en beleggen op € 2.948,00. Vanwege de te hoge grondslag sparen en beleggen heeft de Belastingdienst/Toeslagen bij het besluit van 6 november 2020 ... de zorgtoeslag voor 2019 definitief op nihil berekend en een bedrag van € 2.323,00 teruggevorderd.' 'Uit de Basisregistratie inkomen blijkt dat het vermogen van [appellant] over 2019 na aftrek van het heffingvrij vermogen is berekend op € 106.904,00. De rechtbank heeft daarbij terecht overwogen dat op grond van artikel 2a, eerste lid, van de Wet op de zorgtoeslag - zoals dit artikel op 1 januari 2019 luidde - geen aanspraak op zorgtoeslag bestaat als de grondslag sparen en beleggen in het berekeningsjaar meer bedraagt dan € 84.416,00.' Hoger beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Eerste uitkomst van de Dienst op de VERMOGENSTOETS in het corpus: zorgtoeslag 2019 definitief nihil omdat de grondslag sparen en beleggen (€ 106.904) boven de € 84.416 van Wzt art. 2a lid 1 (tekst 2019) lag, bij een inkomen van € 3.665. De uitspraak noemt de grondslag ná aftrek van het heffingvrij vermogen (Wet IB 2001 art. 5.2); de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen van 2019 (€ 30.360, art. 5.5) zelf af — tweemaal bij het hele jaar dezelfde partner (art. 5.2 lid 2), wat zij bij een partner zonder tegenbericht aanneemt. De invoer € 167.624 is daarom GERECONSTRUEERD: € 106.904 + 2 × € 30.360, zodat de encoding op precies de grondslag van de uitspraak uitkomt; zonder partner zou het € 137.264 zijn (+ 1 × € 30.360). De uitkomst hangt daar niet van af: € 106.904 ligt boven € 84.416 onder elke lezing. Dat er een partner was, noemt de uitspraak niet; het voorschot van hetzelfde jaar (zt-2019-rul-003, € 2.314 = het maximum met partner) bewijst het. Het teruggevorderde bedrag (€ 2.323) is € 9 meer dan het voorschot van € 2.314; de uitspraak verklaart dat niet en het is geen invoer. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-005 — PASS — check (ruling)

Source: Rechtbank Gelderland 10 maart 2022, ECLI:NL:RBGEL:2022:1259 (zaaknr. AWB 20/5717), r.o. 2: 'Eiser heeft over 2019 voorschotten zorgtoeslag ontvangen van € 1.093 en voorschotten huurtoeslag van € 1.632. Bij de bepaling van de hoogte van de voorschotten is verweerder uitgegaan van een geschat jaarinkomen van € 21.655. Op 11 juni 2020 heeft verweerder informatie uit de Basisregistratie Inkomen (BRI) ontvangen, waaruit blijkt dat het inkomen van eiser in het jaar 2019 € 22.779 bedroeg. Op basis van dat inkomen heeft verweerder in het besluit van 7 augustus 2020 de zorgtoeslag over 2019 definitief vastgesteld op € 941 en de huurtoeslag op € 0.' R.o. 3: 'Eiser erkent dat zijn inkomen over 2019 € 22.779 bedroeg.' Beroep gegrond op de evenredigheid van de terugvordering (beperkt tot € 79, de overschrijding van de huurtoeslaggrens); de herziening zelf 'niet in geschil'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1093.00 | 1093.00 (exact 1093) | yes |

Note: Voorschot zorgtoeslag 2019 van € 1.093 op een geschat jaarinkomen van € 21.655. De uitspraak noemt geen partner; de bedragen bewijzen er geen: de tekst van 2019 geeft zonder partner € 1.092,57 → € 1.093 (Awir art. 14 lid 4; via build.run_case) en met een verzekerde partner € 2.218. De uitspraak noemt het inkomen 'jaarinkomen', niet toetsingsinkomen; de herziening op het BRI-inkomen (zt-2019-rul-006) laat zien dat het als toetsingsinkomen is gebruikt. Vijfde uitkomst van de Dienst voor 2019 met inkomen, de eerste uit een rechtbankuitspraak. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-006 — PASS — check (ruling)

Source: Rechtbank Gelderland 10 maart 2022, ECLI:NL:RBGEL:2022:1259 (zaaknr. AWB 20/5717), r.o. 2: 'Eiser heeft over 2019 voorschotten zorgtoeslag ontvangen van € 1.093 en voorschotten huurtoeslag van € 1.632. Bij de bepaling van de hoogte van de voorschotten is verweerder uitgegaan van een geschat jaarinkomen van € 21.655. Op 11 juni 2020 heeft verweerder informatie uit de Basisregistratie Inkomen (BRI) ontvangen, waaruit blijkt dat het inkomen van eiser in het jaar 2019 € 22.779 bedroeg. Op basis van dat inkomen heeft verweerder in het besluit van 7 augustus 2020 de zorgtoeslag over 2019 definitief vastgesteld op € 941 en de huurtoeslag op € 0.' R.o. 3: 'Eiser erkent dat zijn inkomen over 2019 € 22.779 bedroeg.' Beroep gegrond op de evenredigheid van de terugvordering (beperkt tot € 79, de overschrijding van de huurtoeslaggrens); de herziening zelf 'niet in geschil'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 941.00 | 941.00 (exact 941) | yes |

Note: Definitieve vaststelling 2019 van € 941 op het BRI-inkomen van € 22.779, door eiser erkend. Zonder partner geeft de tekst van 2019 € 940,61 → € 941 (Awir art. 14 lid 4); met een verzekerde partner zou het € 2.066 zijn. Het verschil met het voorschot (zt-2019-rul-005), € 152, is precies wat de uitspraak als teruggevorderde zorgtoeslag noemt. De rechtbank beperkte de terugvordering tot € 79 vanwege de evenredigheid (de huurtoeslaggrens was met € 79 overschreden); de hoogte van de zorgtoeslag zelf was niet in geschil. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-007 — PASS — check (ruling)

Source: Rechtbank Noord-Holland 7 maart 2024, ECLI:NL:RBNHO:2024:2245 (zaaknr. AWB 23/3141), r.o. 1: 'Bij de primaire besluiten is de definitief berekende zorgtoeslag van eiser over de jaren 2019 en 2020 verlaagd van respectievelijk € 1.189 en € 1.250 naar nihil. Hierbij is door verweerder voor het jaar 2019 uitgegaan van een geschat jaarinkomen van eiser van € 36.428 en voor het jaar 2020 van € 41.466.' R.o. 4: 'Op 14 november 2022 is de inspecteur bij uitspraken op bezwaar tegemoet gekomen aan de bezwaren van eiser en is het geregistreerde inkomen voor 2019 en 2020 vastgesteld op respectievelijk € 18.214 en € 20.733. Hiermee is de definitieve berekening van eisers zorgtoeslag voor 2019 en 2020 aangepast en vastgesteld op respectievelijk € 1.189 en € 1.250.' Beroep (over de vergoeding van bezwaarkosten) ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1189.00 | 1189.00 (exact 1189) | yes |

Note: Definitieve berekening 2019 van € 1.189 op het door de inspecteur na bezwaar vastgestelde inkomen van € 18.214, onder het drempelinkomen (€ 20.940,768): het maximum zonder partner uit de tekst van 2019, € 1.609 − 2,005% × € 20.940,768 = € 1.189,14 → € 1.189 (Awir art. 14 lid 4; via build.run_case). De uitspraak noemt geen partner; het bedrag bewijst er geen (met een verzekerde partner zou het € 2.314 zijn). Dezelfde aanvrager, hetzelfde jaar, op het eerder geregistreerde inkomen: zt-2019-rul-008 (nihil); 2020: zt-2020-rul-005 en -006. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-008 — PASS — check (ruling)

Source: Rechtbank Noord-Holland 7 maart 2024, ECLI:NL:RBNHO:2024:2245 (zaaknr. AWB 23/3141), r.o. 1: 'Bij de primaire besluiten is de definitief berekende zorgtoeslag van eiser over de jaren 2019 en 2020 verlaagd van respectievelijk € 1.189 en € 1.250 naar nihil. Hierbij is door verweerder voor het jaar 2019 uitgegaan van een geschat jaarinkomen van eiser van € 36.428 en voor het jaar 2020 van € 41.466.' R.o. 4: 'Op 14 november 2022 is de inspecteur bij uitspraken op bezwaar tegemoet gekomen aan de bezwaren van eiser en is het geregistreerde inkomen voor 2019 en 2020 vastgesteld op respectievelijk € 18.214 en € 20.733. Hiermee is de definitieve berekening van eisers zorgtoeslag voor 2019 en 2020 aangepast en vastgesteld op respectievelijk € 1.189 en € 1.250.' Beroep (over de vergoeding van bezwaarkosten) ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Zorgtoeslag 2019 definitief op nihil gesteld op een geregistreerd inkomen van € 36.428 (door de uitspraak 'geschat jaarinkomen' genoemd; later door de inspecteur verlaagd tot € 18.214, zie zt-2019-rul-007). Zonder partner ligt € 36.428 boven de inkomensgrens van de tekst van 2019 (€ 29.562) → nihil. Dat er geen partner was, volgt uit het bedrag van € 1.189 op het gecorrigeerde inkomen (het maximum zonder partner); met een verzekerde partner zou de tekst bij € 36.428 nog € 221 geven. De uitspraak gaat over de vergoeding van bezwaarkosten, niet over de hoogte van de toeslag; de bedragen zijn de feiten die de rechtbank vaststelt. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-009 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 6 november 2020, ECLI:NL:RBMNE:2020:5266 (zaaknr. UTR 20/1764), r.o. 2 en 4: 'Op 27 oktober 2019 heeft verweerder een melding van eiseres ontvangen waarmee zij haar geschatte toetsingsinkomen over 2019 heeft gewijzigd naar € 25.000,-. De wijziging van het geschatte toetsingsinkomen heeft geleid tot het primaire besluit, waarbij verweerder het voorschot huur- en zorgtoeslag voor 2019 heeft aangepast.' 'De rechtbank is van oordeel dat verweerder terecht voor 2019 zorgtoeslag op € 640,- en de huurtoeslag op nihil heeft vastgesteld. Verweerder heeft terecht aan de hand van het door eiseres geschatte toetsingsinkomen van € 25.000,- het voorschot huur- en zorgtoeslag berekend.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 640.00 | 640.00 (exact 640) | yes |

Note: Herzien voorschot 2019 op het gewijzigde geschatte toetsingsinkomen van € 25.000: € 640 voor het hele jaar. De tekst van 2019 geeft hetzelfde: normpremie 2,005% × € 20.940,768 + 13,52% × € 4.059,23 = € 968,67; € 1.609 − € 968,67 = € 640,33 → € 640 (via build.run_case). De uitspraak noemt geen partner; met partner zou de tekst € 1.745 geven, dus 'zonder partner' volgt uit het bedrag. De rechtbank: het voorschot volgt het geschatte jaarinkomen (Awir art. 16), ook als het inkomen pas vanaf oktober steeg; de maanden januari–september worden niet apart berekend. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-010 — PASS — check (ruling)

Source: Rechtbank Den Haag 24 januari 2022, ECLI:NL:RBDHA:2022:782 (zaaknr. 21/41 en 22/331), citaten uit de uitspraak: 'Bij BIP I zijn de huurtoeslag en de zorgtoeslag van eiseres over het berekeningsjaar 2019 definitief berekend op € 0 respectievelijk € 762.' 'Bij de berekening van de hoogte van de toeslagen is uitgegaan van een toetsingsinkomen van eiseres van € 24.100.' 'Bij beschikkingen van 31 december 2020 heeft verweerder, met inachtneming van de beslissingen op bezwaar, de definitief berekende huurtoeslag voor het berekeningsjaar 2019 herzien naar € 1.534 en de definitieve berekening zorgtoeslag gehandhaafd op € 762.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 762.00 | 762.00 (exact 762) | yes |

Note: Definitieve berekening 2019 (gehandhaafd bij beschikking van 31 december 2020): € 762 bij een toetsingsinkomen van € 24.100, zonder partner ('eiseres', geen partner genoemd). De tekst van 2019: € 1.609 − (2,005% × € 20.940,768 + 13,520% × € 3.159,232) = € 762,01 → € 762 (Awir art. 14 lid 4). Later herzien op het lagere BRI-inkomen: zt-2019-rul-011. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-011 — PASS — check (ruling)

Source: Rechtbank Den Haag 24 januari 2022, ECLI:NL:RBDHA:2022:782 (zaaknr. 21/41 en 22/331), citaten uit de uitspraak: 'Op 16 juni 2021 heeft verweerder van de BRI een melding ontvangen waarin het inkomen van eiseres voor het jaar 2019 is bepaald op € 19.712.' 'Bij beschikkingen van 26 oktober 2021 (de herziene beslissingen) heeft verweerder de definitief berekende huurtoeslag en zorgtoeslag voor het berekeningsjaar 2019 herzien naar € 2.966 respectievelijk € 1.189.' 'Bij de herziening van de zorgtoeslag is uitgegaan van een toetsingsinkomen van € 19.712.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1189.00 | 1189.00 (exact 1189) | yes |

Note: Herziene definitieve berekening 2019 (26 oktober 2021): € 1.189 bij een toetsingsinkomen van € 19.712, zonder partner — het maximum zonder partner van de tekst 2019 (€ 1.189,14), want het inkomen ligt onder het drempelinkomen van € 20.940,768. De rechtbank: de Dienst mag niet afwijken van het in de BRI geregistreerde inkomen (Awir art. 7 lid 1, art. 8 lid 1; herziening Awir art. 20). Eerdere berekening op € 24.100: zt-2019-rul-010. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-012 — PASS — check (ruling)

Source: Rechtbank Limburg 24 februari 2022, ECLI:NL:RBLIM:2022:1586 (zaaknr. ROE 21/243), citaten uit de uitspraak: 'Bij besluit van 6 november 2020 (het primaire besluit) heeft verweerder de zorgtoeslag van eiser over het jaar 2019 definitief berekend op een bedrag van € 1.770,- en de teveel betaalde zorgtoeslag ten bedrage van € 544,- (exclusief € 2,- rente) van eiser teruggevorderd.' 'Verweerder heeft de zorgtoeslag berekend op basis van een toetsingsinkomen in 2019 van € 24.971,-.' 'Verweerder stelt zich in het verweerschrift van 9 juni 2021 op het standpunt dat het recht op zorgtoeslag terecht is gebaseerd op de in de Basisregistratie Inkomen (Bri) vastgelegde inkomensgegevens van eiser en zijn toeslagpartner in 2019 van in totaal € 24.971.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1770.00 | 1770.00 (exact 1770) | yes |

Note: Definitieve berekening 2019 (6 november 2020): € 1.770 bij een gezamenlijk toetsingsinkomen van eiser en zijn toeslagpartner van in totaal € 24.971 (BRI), waarin een nabetaling bijstand over 2018 meetelt. De tekst van 2019: 2 × € 1.609 − (4,315% × € 20.940,768 + 13,520% × € 4.030,232) = € 1.769,52 → € 1.770 (Awir art. 14 lid 4). Het gezamenlijke inkomen is als inkomen van de aanvrager ingevoerd (partner € 0); de uitsplitsing staat niet in de uitspraak. De rechtbank liet de berekening staan en zag alleen van de terugvordering van € 544 af (bijzondere omstandigheden); dat raakt de tegemoetkoming niet. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-013 — PASS — check (ruling)

Source: Rechtbank Limburg 27 oktober 2022, ECLI:NL:RBLIM:2022:8373 (zaaknr. ROE 21/861), citaten uit de uitspraak: 'Verweerder heeft de zorgtoeslag over 2019 berekend op basis van een gezamenlijk toetsingsinkomen van eiser en zijn echtgenote in 2019 van € 34.891,-.' 'Uitgaande van dit toetsingsinkomen heeft eiser over het jaar 2019 recht op € 428,- zorgtoeslag.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 428.00 | 428.00 (exact 428) | yes |

Note: Definitieve berekening 2019: € 428 bij een gezamenlijk toetsingsinkomen van eiser en zijn echtgenote van € 34.891, waarin een nabetaling Wajong van het UWV meetelt. De tekst van 2019: 2 × € 1.609 − (4,315% × € 20.940,768 + 13,520% × € 13.950,232) = € 428,33 → € 428 (Awir art. 14 lid 4). Het gezamenlijke inkomen is als inkomen van de aanvrager ingevoerd (partner € 0). € 1.904 teruggevorderd; het voorschot zelf (€ 2.332 zou volgen, een afgeleid bedrag) staat niet in de uitspraak en is geen case. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-014 — PASS — check (ruling)

Source: Rechtbank Limburg 31 oktober 2022, ECLI:NL:RBLIM:2022:8438 (zaaknr. ROE 20/3521), citaten uit de uitspraak: 'Bij besluit van 11 september 2020 (het primaire besluit) heeft verweerder zowel de zorgtoeslag als de huurtoeslag van eiser over 2019 definitief vastgesteld op € 0,- en de daardoor ten onrechte ontvangen zorgtoeslag van € 793,- en huurtoeslag van € 2.219,- van eiser teruggevorderd.' 'Verweerder heeft de zorgtoeslag 2019 en de huurtoeslag 2019 op € 0,- vastgesteld, omdat eiser in 2019 een inkomen had van € 67.044,- en dus een inkomen dat ligt boven de inkomensgrenzen voor de zorgtoeslag en de huurtoeslag.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2019 (11 september 2020): nihil bij een inkomen van € 67.044. De uitspraak noemt geen partner; de case voert zonder partner in. De tekst van 2019 geeft nihil boven € 29.562 zonder partner en boven € 37.885 met partner, dus de lezing doet er voor de uitkomst niet toe. € 793 zorgtoeslag teruggevorderd (het voorschot; zijn geschatte inkomen staat niet in de uitspraak). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-015 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 3 juni 2021, ECLI:NL:RBMNE:2021:2358 (zaaknr. UTR 20/3952), citaten uit de uitspraak: 'Verweerder heeft aan eiser bij beschikking van 27 december 2018 een voorschot voor zorgtoeslag toegekend voor 2019 van € 1.189,- op basis van een geschat toetsingsinkomen van € 2.267,-.' 'Het bedrag van het voorschot voor de zorgtoeslag voor 2019 bedraagt € 2.033,-, op basis van een geschat jaarinkomen van eiser van € 2.267,- voor de periode van 1 januari 2019 tot en met 31 maart 2019 en een gezamenlijk geschat jaarinkomen van eiser en zijn toeslagpartner van € 6.265,- voor de periode van 1 april 2019 tot en met 31 december 2019.' 'Het recht op zorgtoeslag over 2019 is door het hogere inkomen van eiser en zijn toeslagpartner omlaag gegaan en bedraagt € 1.069,- zodat eiser € 964,- moet terugbetalen.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1189.00 | 1189.00 (exact 1189) | yes |

Note: Voorschot 2019 (27 december 2018): € 1.189 bij een geschat toetsingsinkomen van € 2.267, zonder partner — het maximum zonder partner van de tekst 2019 (€ 1.189,14). De twee latere bedragen van dezelfde uitspraak zijn geen case: het voorschot van € 2.033 en de definitieve berekening van € 1.069 rekenen met een toeslagpartner vanaf 1 april 2019 (Awir art. 5, wijziging in het jaar, niet gecodeerd). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-016 — PASS — check (ruling)

Source: Rechtbank Noord-Holland 1 december 2022, ECLI:NL:RBNHO:2022:12023 (zaaknr. AWB - 21/4936), citaten uit de uitspraak: 'Met dagtekening 27 december 2018 is aan eiseres een voorschot zorgtoeslag 2019 toegekend van € 1.189, gebaseerd op een geschat inkomen van € 15.807.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1189.00 | 1189.00 (exact 1189) | yes |

Note: Voorschot 2019 (27 december 2018): € 1.189 bij een geschat inkomen van € 15.807, zonder partner — het maximum zonder partner van de tekst 2019 (€ 1.189,14). De latere bedragen (€ 99, € 678, definitief € 678) zijn geen case: de nicht van eiseres was toeslagpartner van 1 februari 2019 tot en met 31 december 2019 en tot 1 oktober 2019 niet verzekerd, zodat de Dienst per maand rekende met Wzt art. 2 lid 4 (50%) en Awir art. 5 — wijzigingen in het jaar, niet gecodeerd; de inkomens van die berekening staan niet in de uitspraak. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-017 — PASS — check (ruling)

Source: ABRvS 30 november 2022, ECLI:NL:RVS:2022:3484 (zaaknr. 202104598/1/A2), citaten uit de uitspraak: 'de dienst) [wederpartij] onder meer een voorschot zorgtoeslag, kindgebonden budget en huurtoeslag voor 2019 toegekend van onderscheidenlijk € 2.314,-, € 2.155,- en € 2.291,-.' 'Bij dit besluit is de dienst uitgegaan van een geschat inkomen van € 18.561,- van de toeslagpartner van [wederpartij], [partner] en een geschat inkomen van € 0,- van [wederpartij] zelf.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 2314.00 | 2314.00 (exact 2314) | yes |

Note: Voorschot 2019 (toegekend eind 2018): € 2.314 bij een geschat inkomen van € 0 voor wederpartij en € 18.561 voor haar toeslagpartner — het maximum met partner van de tekst 2019 (€ 2.314,41), want het gezamenlijke inkomen ligt onder het drempelinkomen van € 20.940,768. De latere bedragen zijn geen case: het herziene voorschot van € 1.564 (21 mei 2019) heeft geen genoemd inkomen; de definitieve vaststelling van € 1.247 (30 juni 2020) rekent met de partner tot en met 30 april 2019 (partner € 21.504 geregistreerd, wederpartij € 6.477 voor het hele jaar) — Awir art. 5, niet gecodeerd; per maand gerekend geeft de tekst 4/12 × € 1.362,57 + 8/12 × € 1.189,14 = € 1.246,95 → € 1.247 (berekening van de operator, in law/SOURCES.md §4). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-018 — PASS — check (ruling)

Source: ABRvS 24 mei 2023, ECLI:NL:RVS:2023:2013 (zaaknr. 202101123/1/A2), citaten uit de uitspraak: 'Bij besluit van 21 augustus 2019 heeft de Belastingdienst/Toeslagen de aan [appellant] over het berekeningsjaar 2019 toegekende voorschotten zorgtoeslag en huurtoeslag herzien en op nihil gesteld.' 'Daarbij is de dienst, voor wat betreft het recht van [appellant] op zorgtoeslag, uitgegaan van een geschat jaarinkomen van € 42.000,00 van zijn toeslagpartner, [toeslagpartner], en een geschat jaarinkomen van € 15.822,- van hemzelf.' 'Dit gezamenlijke toetsingsinkomen van € 57.822,00 is hoger dan de voor zorgtoeslag in 2019 geldende inkomensgrenzen.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Herzien voorschot 2019 (21 augustus 2019, gehandhaafd 30 december 2019): nihil bij een geschat jaarinkomen van € 15.822 voor appellant en € 42.000 voor zijn toeslagpartner, gezamenlijk € 57.822 (tekst 2019: inkomensgrens met partner € 37.885). De verzekering van de partner is niet in geschil. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-019 — PASS — check (ruling)

Source: ABRvS 29 november 2023, ECLI:NL:RVS:2023:4399 (zaaknr. 202203560/1/A2), citaten uit de uitspraak: 'Bij de berekening van het recht op zorgtoeslag over het jaar 2019 is de dienst daarmee uitgegaan van een gezamenlijk toetsingsinkomen van [wederpartij] en zijn [toeslagpartner] van € 30.818,00.' 'Bij het besluit van 7 augustus 2020 heeft de Belastingdienst/Toeslagen het recht van [wederpartij] op zorgtoeslag over het jaar 2019 definitief vastgesteld op € 979,00 en het te veel betaalde voorschot van € 588,00 van hem teruggevorderd.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 979.00 | 979.00 (exact 979) | yes |

Note: Definitieve vaststelling 2019 (7 augustus 2020): € 979 bij een gezamenlijk toetsingsinkomen van wederpartij en zijn toeslagpartner van € 30.818, waarin een met de inspecteur afgesproken 'fictieve uitkering' van € 7.329 meetelt. De tekst van 2019: 2 × € 1.609 − (4,315% × € 20.940,768 + 13,520% × € 9.877,232) = € 979,00 → € 979 (Awir art. 14 lid 4). Het gezamenlijke inkomen is als inkomen van de aanvrager ingevoerd (partner € 0). € 588 teruggevorderd; het voorschot (€ 1.567 zou volgen, afgeleid) staat niet in de uitspraak. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2019-rul-020 — PASS — check (ruling)

Source: Rechtbank Zeeland-West-Brabant 9 januari 2026, ECLI:NL:RBZWB:2026:60 (zaaknr. BRE 21/2894 HUUR en BRE 22/3072 ZORG), citaten uit de uitspraak: 'Aan eiser zijn, na diverse herzieningen, voorschotten huurtoeslag van € 2.992,- en zorgtoeslag van € 2.314,- toegekend voor het jaar 2019.' 'Het voorschot zorgtoeslag is gebaseerd op een geschat inkomen van eiser van € 9.565,- en van zijn toeslagpartner van € 0,-.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 2314.00 | 2314.00 (exact 2314) | yes |

Note: Voorschot 2019 (na herzieningen): € 2.314 bij een geschat inkomen van € 9.565 voor eiser en € 0 voor zijn toeslagpartner — het maximum met partner van de tekst 2019 (€ 2.314,41). De definitieve berekening van dezelfde uitspraak (9 maart 2022, € 1.169 bij BRI-inkomens van € 11.169 en € 0) geeft de tekst voor een heel jaar niet (€ 2.314); de uitspraak noemt een zoon als medebewoner en meldingen over drie personen, maar geen maanden of andere invoer — niet opgenomen, wel in law/SOURCES.md §4. Hoger beroep: ABRvS 2 oktober 2026, ECLI:NL:RVS:2026:5933. Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

## zt-2020-rul-004 — PASS — check (ruling)

Source: ABRvS 18 december 2024, ECLI:NL:RVS:2024:5262 (zaaknr. 202303472/1/A2), procesverloop en r.o. 1: 'Bij besluit van 31 juli 2021 heeft de Belastingdienst/Toeslagen de zorg- en huurtoeslag van [appellante] over het jaar 2020 definitief vastgesteld op € 722,- onderscheidenlijk nihil. Daarnaast zijn de te veel betaalde voorschotten van € 529,- aan zorgtoeslag en € 2.653,- aan huurtoeslag teruggevorderd.' 'De voorschotten zijn gebaseerd op een geschat toetsingsinkomen van € 16.815,-. De Belastingdienst/Toeslagen heeft op 10 juni 2021 een melding uit de Basisregistratie Inkomen ontvangen dat het verzamelinkomen van [appellante] over 2020 € 25.328,- bedroeg' (met daarin een beëindigingsvergoeding van € 5.884,11 en € 1.781,59 PBL en vakantie-uren). R.o. 3.2: geen grondslag om inkomensbestanddelen buiten beschouwing te laten (ECLI:NL:RVS:2017:659). Hoger beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 722.00 | 722.00 (exact 722) | yes |

Note: Definitieve vaststelling 2020 van € 722 op een toetsingsinkomen van € 25.328. De uitspraak noemt geen partner; het bedrag bewijst er geen: de tekst van 2020 geeft zonder partner € 721,73 → € 722 (Awir art. 14 lid 4) en met een verzekerde partner € 1.869. De voorschotten op een geschat inkomen van € 16.815 (onder het drempelinkomen) zouden volgens de tekst € 1.250 zijn geweest (het maximum zonder partner, vgl. zt-2020-rul-002); € 722 + de teruggevorderde € 529 is € 1.251 — een euro meer, wat de uitspraak niet verklaart; het voorschotbedrag staat niet in de tekst en is geen case. Vierde uitkomst van de Dienst voor 2020 met inkomen. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-005 — PASS — check (ruling)

Source: Rechtbank Noord-Holland 7 maart 2024, ECLI:NL:RBNHO:2024:2245 (zaaknr. AWB 23/3141), r.o. 1: 'Bij de primaire besluiten is de definitief berekende zorgtoeslag van eiser over de jaren 2019 en 2020 verlaagd van respectievelijk € 1.189 en € 1.250 naar nihil. Hierbij is door verweerder voor het jaar 2019 uitgegaan van een geschat jaarinkomen van eiser van € 36.428 en voor het jaar 2020 van € 41.466.' R.o. 4: 'Op 14 november 2022 is de inspecteur bij uitspraken op bezwaar tegemoet gekomen aan de bezwaren van eiser en is het geregistreerde inkomen voor 2019 en 2020 vastgesteld op respectievelijk € 18.214 en € 20.733. Hiermee is de definitieve berekening van eisers zorgtoeslag voor 2019 en 2020 aangepast en vastgesteld op respectievelijk € 1.189 en € 1.250.' Beroep (over de vergoeding van bezwaarkosten) ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1250.00 | 1250.00 (exact 1250) | yes |

Note: Definitieve berekening 2020 van € 1.250 op het door de inspecteur na bezwaar vastgestelde inkomen van € 20.733, onder het drempelinkomen (€ 21.430,656): het maximum zonder partner uit de tekst van 2020, € 1.642 − 1,830% × € 21.430,656 = € 1.249,82 → € 1.250 (Awir art. 14 lid 4; via build.run_case). De uitspraak noemt geen partner; het bedrag bewijst er geen (met een verzekerde partner zou het € 2.397 zijn). Dezelfde aanvrager als zt-2019-rul-007/-008; het eerder geregistreerde inkomen van 2020 in zt-2020-rul-006. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-006 — PASS — check (ruling)

Source: Rechtbank Noord-Holland 7 maart 2024, ECLI:NL:RBNHO:2024:2245 (zaaknr. AWB 23/3141), r.o. 1: 'Bij de primaire besluiten is de definitief berekende zorgtoeslag van eiser over de jaren 2019 en 2020 verlaagd van respectievelijk € 1.189 en € 1.250 naar nihil. Hierbij is door verweerder voor het jaar 2019 uitgegaan van een geschat jaarinkomen van eiser van € 36.428 en voor het jaar 2020 van € 41.466.' R.o. 4: 'Op 14 november 2022 is de inspecteur bij uitspraken op bezwaar tegemoet gekomen aan de bezwaren van eiser en is het geregistreerde inkomen voor 2019 en 2020 vastgesteld op respectievelijk € 18.214 en € 20.733. Hiermee is de definitieve berekening van eisers zorgtoeslag voor 2019 en 2020 aangepast en vastgesteld op respectievelijk € 1.189 en € 1.250.' Beroep (over de vergoeding van bezwaarkosten) ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Zorgtoeslag 2020 definitief op nihil gesteld op een geregistreerd inkomen van € 41.466 (door de uitspraak 'geschat jaarinkomen' genoemd; later door de inspecteur verlaagd tot € 20.733, zie zt-2020-rul-005). € 41.466 ligt boven de inkomensgrens van de tekst van 2020 zonder partner (€ 30.480) én met partner (€ 38.945), dus nihil onder elke lezing; dat er geen partner was, volgt uit het bedrag van € 1.250 op het gecorrigeerde inkomen. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-007 — PASS — check (ruling)

Source: ABRvS 30 augustus 2023, ECLI:NL:RVS:2023:3323 (zaaknr. 202206014/1/A2), r.o. 1: 'Bij besluit van 27 december 2019 heeft de Belastingdienst/Toeslagen aan [appellant] een voorschot zorgtoeslag over 2020 toegekend van € 1.250,00. Bij de berekening van het voorschot is uitgegaan van een geschat toetsingsinkomen van € 0,00. In het besluit van 31 juli 2021 heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant] over 2020 vastgesteld op € 0,00 en een bedrag van € 1.254,00 van hem teruggevorderd. Reden hiervan is dat de Belastingdienst/Toeslagen van de Basisregistratie Inkomen (BRI) een melding heeft ontvangen dat de grondslag sparen en beleggen van [appellant] over 2020 € 99.000,00 is.' R.o. 3 (de rechtbank, bevestigd): 'Omdat er geen aanspraak op zorgtoeslag in 2020 bestond als de grondslag sparen en beleggen meer was dan € 85.767,00 en de Belastingdienst/Toeslagen uit mocht gaan van de in de BRI opgenomen grondslag sparen en beleggen van € 99.000,00 heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant] over 2020 terecht op nihil vastgesteld'. Hoger beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1250.00 | 1250.00 (exact 1250) | yes |

Note: Voorschot zorgtoeslag 2020 van € 1.250 op een geschat toetsingsinkomen van € 0: het maximum zonder partner uit de tekst van 2020, € 1.642 − 1,830% × € 21.430,656 = € 1.249,82 → € 1.250 (Awir art. 14 lid 4; via build.run_case). De uitspraak noemt geen toeslagpartner (r.o. 2: de huisgenote is 'geen partner in de zorgtoeslag'); het bedrag bevestigt dat (met een verzekerde partner zou het € 2.397 zijn). De definitieve vaststelling op nihil wegens het vermogen staat in zt-2020-rul-008. Het teruggevorderde bedrag (€ 1.254) is € 4 meer dan het voorschot; de uitspraak verklaart dat niet en het is geen invoer. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-008 — PASS — check (ruling)

Source: ABRvS 30 augustus 2023, ECLI:NL:RVS:2023:3323 (zaaknr. 202206014/1/A2), r.o. 1: 'Bij besluit van 27 december 2019 heeft de Belastingdienst/Toeslagen aan [appellant] een voorschot zorgtoeslag over 2020 toegekend van € 1.250,00. Bij de berekening van het voorschot is uitgegaan van een geschat toetsingsinkomen van € 0,00. In het besluit van 31 juli 2021 heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant] over 2020 vastgesteld op € 0,00 en een bedrag van € 1.254,00 van hem teruggevorderd. Reden hiervan is dat de Belastingdienst/Toeslagen van de Basisregistratie Inkomen (BRI) een melding heeft ontvangen dat de grondslag sparen en beleggen van [appellant] over 2020 € 99.000,00 is.' R.o. 3 (de rechtbank, bevestigd): 'Omdat er geen aanspraak op zorgtoeslag in 2020 bestond als de grondslag sparen en beleggen meer was dan € 85.767,00 en de Belastingdienst/Toeslagen uit mocht gaan van de in de BRI opgenomen grondslag sparen en beleggen van € 99.000,00 heeft de Belastingdienst/Toeslagen de zorgtoeslag van [appellant] over 2020 terecht op nihil vastgesteld'. Hoger beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Tweede uitkomst van de Dienst op de VERMOGENSTOETS in het corpus (na zt-2019-rul-004), de eerste voor 2020: zorgtoeslag 2020 definitief nihil omdat de grondslag sparen en beleggen (€ 99.000) boven de € 85.767 van Wzt art. 2a lid 1 (tekst 2020) lag. De uitspraak noemt de grondslag sparen en beleggen, dat is de rendementsgrondslag ná aftrek van het heffingvrije vermogen (Wet IB 2001 art. 5.2 lid 1); de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen van 2020 (€ 30.846, art. 5.5) zelf af, éénmaal zonder partner. De invoer € 129.846 is daarom GERECONSTRUEERD: € 99.000 + € 30.846, zodat de encoding op precies de grondslag van de uitspraak uitkomt. Het toetsingsinkomen van 2020 staat niet in de uitspraak; de invoer houdt het geschatte inkomen van het voorschot (€ 0) aan, en de uitkomst hangt er niet van af: boven de vermogensgrens is de aanspraak nihil bij elk inkomen. Appellant stelde dat zijn eigen vermogen € 77.480 was en dat de Dienst ten onrechte van de gezamenlijke opgave met zijn huisgenote uitging; de rechtbank en de Afdeling: de Dienst mag van de BRI-grondslag uitgaan, bezwaar daartegen hoort bij de inspecteur. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-009 — PASS — check (ruling)

Source: Rechtbank Rotterdam 20 oktober 2021, ECLI:NL:RBROT:2021:10386 (zaaknr. ROT 21/1133), r.o. 2.2: 'Bij besluit van eveneens 29 december 2020 is aan de partner van eiseres een voorschot zorgtoeslag over 2020 van € 1.238,- toegekend. Bij besluit van 10 mei 2021 is het voorschot zorgtoeslag over 2020 voor de partner van eiseres vastgesteld op € 1.834,-.' R.o. 3.1: de Dienst merkt de echtgenoot over 1 januari tot en met 31 december 2020 als toeslagpartner aan; 'Bij de berekening wordt rekening gehouden met haar inkomen van € 8.000,- en het inkomen van haar toeslagpartner van € 21.980,-, waardoor het geschatte toetsingsinkomen wordt vastgesteld op € 29.980,-.' Beroep gegrond (nieuwe berekening van de voorschotten van eiseres en haar partner opgedragen)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1238.00 | 1238.00 (exact 1238) | yes |

Note: Voorschot zorgtoeslag 2020 van € 1.238 voor een paar toeslagpartners op een geschat gezamenlijk toetsingsinkomen van € 29.980 (€ 21.980 + € 8.000; de aanvrager is de echtgenoot, aan wie het voorschot is toegekend, de encoding telt de twee inkomens op). De tekst van 2020 geeft met een verzekerde partner 2 × € 1.642 − (4,140% × € 21.430,656 + 13,550% × (€ 29.980 − € 21.430,656)) = € 1.238,33 → € 1.238 (Awir art. 14 lid 4; via build.run_case). Het voorschot van eiseres zelf (€ 1.250, het maximum zonder partner, toegekend vóór het partnerschap met terugwerkende kracht werd aangenomen) noemt de uitspraak zonder het inkomen waarop het rustte; de latere vaststelling van het voorschot van de partner op € 1.834 (10 mei 2021) noemt geen inkomen. Beide zijn daarom geen case. De rechtbank droeg een nieuwe berekening op; het bedrag hier is wat de Dienst op 29 december 2020 op deze inkomens berekende. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-010 — PASS — check (ruling)

Source: Rechtbank Oost-Brabant 20 maart 2025, ECLI:NL:RBOBR:2025:1536 (zaaknr. 24/71), r.o. 2: 'Voor wat betreft toeslagjaar 2020 heeft verweerder eiseres in eerste instantie bij besluit van 27 december 2019 een voorschot zorgtoeslag verleend van € 1.250,-. Dit is gebaseerd op een geschat toetsingsinkomen van eiseres van € 3.439,-.' Beroep gegrond (de terugvordering)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1250.00 | 1250.00 (exact 1250) | yes |

Note: Voorschot zorgtoeslag 2020 van 27 december 2019, € 1.250, op een geschat toetsingsinkomen van € 3.439, zonder partner (het toeslagpartnerschap over 2020 werd pas in 2021, met terugwerkende kracht, aangenomen; zie zt-2020-rul-011). De tekst van 2020 geeft zonder partner het maximum € 1.642 − 1,830% × € 21.430,656 = € 1.249,82 → € 1.250 (Awir art. 14 lid 4; via build.run_case). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-011 — PASS — check (ruling)

Source: Rechtbank Oost-Brabant 20 maart 2025, ECLI:NL:RBOBR:2025:1536 (zaaknr. 24/71), r.o. 3, 5 en 7: 'Eiseres is op 21 oktober 2020 een notarieel samenlevingscontract aangegaan met haar partner ... Vervolgens heeft verweerder in de brief van 4 februari 2021 eiseres laten weten dat hij eiseres en [naam] als toeslagpartners aanmerkt, en dat – als gevolg hiervan – de zorgtoeslag zal worden herberekend. Dit is vervolgens gebeurd bij besluit van 13 maart 2021. Hierbij is het voorschot zorgtoeslag 2021 van eiseres en [naam] vastgesteld op € 1.786,-. Dit voorschot is gebaseerd op een geschat gezamenlijk toetsingsinkomen van € 25.939,-.' 'de voorschotten zorgtoeslag over 2021 als gevolg hiervan teruggevorderd tot een bedrag van € 1.805,- (inclusief € 19,- rente)' 'Volgens de destijds geldende wet wordt [naam] gedurende het gehele jaar aangemerkt als toeslagpartner, omdat eiseres en [naam] bij aanvang van 2020 al op hetzelfde adres stonden ingeschreven in de BRP.' Beroep gegrond (de terugvordering)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1786.00 | 1786.00 (exact 1786) | yes |

Note: Herzien voorschot van 13 maart 2021, € 1.786, voor het paar op een geschat gezamenlijk toetsingsinkomen van € 25.939, nadat het toeslagpartnerschap over heel 2020 was aangenomen (Awir art. 3 zoals het tot 1 januari 2021 luidde). De uitspraak schrijft op deze plaats 'voorschot zorgtoeslag 2021'; de case neemt 2020, om vier redenen: de zaak gaat alleen over de zorgtoeslag 2020 (r.o. 1, 5, 7); r.o. 5 noemt dezelfde terugvordering 'over 2021' waar het procesverloop 'over 2020' schrijft; het teruggevorderde bedrag, € 1.805 inclusief € 19 rente, is € 1.786 + € 19, dus het hele voorschot 2020; en het bedrag is met de tekst van 2020 op de euro na te rekenen, 2 × € 1.642 − (4,140% × € 21.430,656 + 13,550% × (€ 25.939 − € 21.430,656)) = € 1.785,89 → € 1.786 (Awir art. 14 lid 4; via build.run_case), terwijl de tekst van 2021 bij dit inkomen € 1.930 geeft. Dat is een lezing van de uitspraak door de operator; wie de case verifieert (ASKS.md 9), toetst ook die lezing. Partner verzekerd aangenomen: het bedrag bewijst twee standaardpremies. De verdeling van het gezamenlijke inkomen is niet gegeven en doet er voor de uitkomst niet toe.

## zt-2020-rul-012 — PASS — check (ruling)

Source: Rechtbank Oost-Brabant 20 maart 2025, ECLI:NL:RBOBR:2025:1536 (zaaknr. 24/71), r.o. 4–5: 'op 26 mei 2021 bericht ontvangen vanuit de Basisregistratie Inkomen (BRI) dat het verzamelinkomen van eiseres is vastgesteld op € 20.286,- en dat van [naam] op € 25.185,-.' 'Hierbij is de zorgtoeslag van eiseres over 2020 definitief vastgesteld op € 0,- ... Deze definitieve vaststelling is gebaseerd op een gezamenlijk toetsingsinkomen van € 45.471,-.' Beroep gegrond (de terugvordering)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2020 van 9 oktober 2021: nihil op een gezamenlijk toetsingsinkomen van € 20.286 + € 25.185 = € 45.471, met partner over heel 2020 (Awir art. 3 oud; de rechtbank: sinds 1 januari 2021, Stb. 2020, 518, ontstaat toeslagpartnerschap niet meer met terugwerkende kracht over het hele jaar, en zij matigde daarom de terugvordering op evenredigheid; de hoogte zelf stond niet ter discussie). De tekst van 2020 geeft nihil: de inkomensgrens met partner uit de tekst is € 38.945 (via build.run_case). Het teruggevorderde bedrag, € 1.805 inclusief € 19 rente, is het voorschot van zt-2020-rul-011 plus rente. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-013 — PASS — check (ruling)

Source: Rechtbank Amsterdam 20 september 2021, ECLI:NL:RBAMS:2021:7868 (zaaknr. AMS 20/6939), citaten uit de uitspraak: 'De hoogte van de huur- en zorgtoeslag voor het jaar 2020 is met een voorschotbeschikking van 27 december 2019 vastgesteld op € 4.084,- aan huurtoeslag en € 1.250,- aan zorgtoeslag op basis van een verzamelinkomen van € 17.443,-.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1250.00 | 1250.00 (exact 1250) | yes |

Note: Voorschot 2020 (27 december 2019): € 1.250 bij een verzamelinkomen van € 17.443, zonder partner ('[eiser]', alleen zijn eigen inkomen) — het maximum zonder partner van de tekst 2020 (€ 1.249,82). De 2019-bedragen van dezelfde uitspraak (€ 1.090 bij € 17.000 en € 835 bij € 22.995) geeft de tekst voor een heel jaar niet; beide zijn precies 11/12 van de jaarbedragen van de tekst (€ 1.189 en € 911), maar de uitspraak noemt geen maanden: niet opgenomen, wel in law/SOURCES.md §4. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-014 — PASS — check (ruling)

Source: Rechtbank Amsterdam 20 september 2021, ECLI:NL:RBAMS:2021:7868 (zaaknr. AMS 20/6939), citaten uit de uitspraak: 'Op 31 augustus 2020 heef [eiser] een gewijzigd verzamelinkomen doorgegeven van € 29.077,-.' 'Daarom heeft de B/T met het primaire besluit II de huur- en zorgtoeslag voor het jaar 2020 herzien op € 436,- aan huurtoeslag en € 214,- aan zorgtoeslag en het teveel betaalde voorschot van € 4.684,- van [eiser] teruggevorderd.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 214.00 | 214.00 (exact 214) | yes |

Note: Herzien voorschot 2020 (23 september 2020): € 214 bij een door eiser zelf doorgegeven verzamelinkomen van € 29.077, zonder partner. De tekst van 2020: € 1.642 − (1,830% × € 21.430,656 + 13,550% × € 7.646,344) = € 213,74 → € 214 (Awir art. 14 lid 4). De rechtbank: zolang de toeslag niet definitief is, mag de Dienst het voorschot op de eigen opgave baseren (Awir art. 16). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-015 — PASS — check (ruling)

Source: Rechtbank Den Haag 10 februari 2023, ECLI:NL:RBDHA:2023:3233 (zaaknr. SGR 22/1043), citaten uit de uitspraak: 'Bij de beschikking definitieve berekening toeslagen van 10 september 2021 (het primaire besluit) is de zorgtoeslag van eiser voor het jaar 2020 definitief vastgesteld op € 0,- op basis van een geregistreerd inkomen van € 44.232,-.' 'Dit heeft ertoe geleid dat bij de berekening van de zorgtoeslag rekening is gehouden met een gezamenlijk inkomen van eiser en zijn partner van € 44.232,-.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve berekening 2020 (10 september 2021): nihil bij een geregistreerd gezamenlijk inkomen van eiser en zijn partner van € 44.232 (tekst 2020: inkomensgrens met partner € 38.945). Het gezamenlijke inkomen is als inkomen van de aanvrager ingevoerd (partner € 0); de uitsplitsing staat niet in de uitspraak. Het geschil ging over de hoogte van het geregistreerde inkomen (BRI), niet over de berekening. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-016 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 15 december 2021, ECLI:NL:RBMNE:2021:6118 (zaaknr. UTR - 21/2520 en UTR - 21/2521), citaten uit de uitspraak: 'Voor het jaar 2020 heeft verweerder aan eisers ieder afzonderlijk een voorschot zorgtoeslag verleend van € 1.250,-.' 'Het voorschot zorgtoeslag van eisers voor het jaar 2020 is opnieuw berekend en vastgesteld op € 0,- op grond van het geschatte verzamelinkomen van eisers van € 39.694,-.' 'Verweerder heeft zich terecht op het standpunt gesteld dat op grond van het dwingend recht het toeslagpartnerschap van eisers volgens artikel 3, derde lid, van de Awir dan ingaat per 1 januari 2020.' 'Dit betekent dat uit de van toepassing zijnde wettelijke bepaling volgt dat verweerder eisers terecht als toeslagpartners voor het gehele jaar 2020 heeft aangemerkt.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Herzien voorschot 2020 (13 maart 2021): nihil bij een geschat gezamenlijk verzamelinkomen van € 39.694, nadat eisers door een samenlevingscontract van 30 oktober 2020 met terugwerkende kracht tot 1 januari 2020 toeslagpartners werden (Awir art. 3 lid 3, tekst 2020 — dezelfde regel als in zt-2020-rul-011/-012; gewijzigd per 1 januari 2021). Tekst 2020: inkomensgrens met partner € 38.945 → nihil. De rechtbank liet de berekening staan en vernietigde alleen de terugvordering over 1 januari–30 oktober 2020 (belangenafweging); dat raakt de tegemoetkoming niet. Het gezamenlijke inkomen is als inkomen van de aanvrager ingevoerd (partner € 0); eiseres' deel (€ 19.100) is zt-2020-rul-017, het deel van eiser is in de tekst afgebroken. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-017 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 15 december 2021, ECLI:NL:RBMNE:2021:6118 (zaaknr. UTR - 21/2520 en UTR - 21/2521), citaten uit de uitspraak: 'Voor het jaar 2020 heeft verweerder aan eisers ieder afzonderlijk een voorschot zorgtoeslag verleend van € 1.250,-.' 'Daarbij is verweerder uitgegaan van een geschat toetsingsinkomen van eiseres van € 19.100,- en van eiser van'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1250.00 | 1250.00 (exact 1250) | yes |

Note: Voorschot 2020 van eiseres, toegekend voordat het partnerschap bekend was: € 1.250 bij een geschat toetsingsinkomen van € 19.100, zonder partner — het maximum zonder partner van de tekst 2020 (€ 1.249,82). Eiser kreeg afzonderlijk eveneens € 1.250; zijn geschatte inkomen is in de gepubliceerde tekst afgebroken en niet opgenomen. Het herziene voorschot met partner: zt-2020-rul-016. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-018 — PASS — check (ruling)

Source: Rechtbank Noord-Nederland 19 mei 2023, ECLI:NL:RBNNE:2023:2133 (zaaknr. 21/4068), citaten uit de uitspraak: 'De Belastingdienst/Toeslagen heeft met het besluit van 30 juni 2021 de huur- en zorgtoeslag 2020 van [eiser] definitief berekend ter hoogte van respectievelijk € 1.163 en € 1.050, dit op grond van het toetsingsinkomen van [eiser] zoals is gebleken uit een melding van de basisregistratie inkomen (BRI).' 'Gelet hierop is de rechtbank van oordeel dat de Belastingdienst/Toeslagen bij de definitieve vaststelling van de huur- en zorgtoeslag 2020 terecht is uitgegaan van het in de BRI opgenomen verzamelinkomen van [eiser] ter hoogte van € 22.903.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1050.00 | 1050.00 (exact 1050) | yes |

Note: Definitieve berekening 2020 (30 juni 2021): € 1.050 bij een toetsingsinkomen (BRI) van € 22.903, zonder partner ('[eiser]', eigen inkomen). De tekst van 2020: € 1.642 − (1,830% × € 21.430,656 + 13,550% × € 1.472,344) = € 1.050,32 → € 1.050 (Awir art. 14 lid 4). De huurtoeslag (€ 1.163) is geen onderdeel van deze case. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-019 — PASS — check (ruling)

Source: Rechtbank Amsterdam 23 maart 2023, ECLI:NL:RBAMS:2023:1604 (zaaknr. AMS 22/3980), citaten uit de uitspraak: 'Met een besluit van 27 december 2019 heeft eiseres voor het jaar 2020 voorschotten huur- en zorgtoeslag ontvangen.' 'Verweerder heeft aan eiseres een bedrag van € 1.250,- aan zorgtoeslag en een bedrag van € 3.798,- aan huurtoeslag toegekend.' 'Het voorschot huur- en zorgtoeslag is door verweerder berekend met een geschat jaarinkomen van € 16.712,-.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1250.00 | 1250.00 (exact 1250) | yes |

Note: Voorschot 2020 (27 december 2019): € 1.250 bij een geschat jaarinkomen van € 16.712, zonder partner ('eiseres', geen partner genoemd) — het maximum zonder partner van de tekst 2020 (€ 1.249,82). De definitieve berekening van dezelfde uitspraak: zt-2020-rul-020 (DISCREPANCIES.md #12). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-020 — FAIL — check (ruling)

Source: Rechtbank Amsterdam 23 maart 2023, ECLI:NL:RBAMS:2023:1604 (zaaknr. AMS 22/3980), citaten uit de uitspraak: 'Met het besluit van 1 oktober 2021 (het primaire besluit) heeft verweerder de huur- en zorgtoeslag van eiseres over het jaar 2020 definitief berekend en vastgesteld op € 1.189,- respectievelijk € 814,-.' 'De inspecteur van de inkomstenbelasting (de inspecteur) heeft het jaarinkomen van eiseres over 2020 definitief vastgesteld op € 26.645,-.' 'Eiseres moet € 440,- aan zorgtoeslag en € 2.635,- aan huurtoeslag terugbetalen.' 'De rechtbank stelt vast dat niet in geschil is dat verweerder bij het berekenen van de huur- en zorgtoeslag rekening had moeten houden met de ontslagvergoeding.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 814.00 | 543.00 (exact 543) | NO |

Note: Definitieve berekening 2020 (1 oktober 2021): € 814 bij het door de inspecteur vastgestelde jaarinkomen van € 26.645 (een ontslagvergoeding telt mee), zonder partner als gelezen. De tekst van 2020 geeft bij die invoer € 543 (€ 1.642 − (1,830% × € 21.430,656 + 13,550% × € 5.214,344) = € 543,28) en met partner € 1.690; geen van beide is € 814, en ook een deel van het jaar verklaart het niet (€ 814 is hoger dan het jaarbedrag van de tekst zonder partner). De uitspraak noemt geen partner, geen maanden, geen woonland en geen ander inkomen voor de zorgtoeslag; het teruggevorderde bedrag (€ 440) is niet € 1.250 − € 814. Opgenomen als DISCREPANCIES.md #12 (open); deze case faalt daarom bij de check en is als zodanig gelogd. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-021 — PASS — check (ruling)

Source: Rechtbank Noord-Holland 17 juni 2025, ECLI:NL:RBNHO:2025:6621 (zaaknr. ALK 23/730 en ALK 23/731), citaten uit de uitspraak: 'Bij wijze van voorschot is aan eiseres voor het jaar 2020 zorgtoeslag toegekend van € 2.356 en huurtoeslag toegekend van € 4.116.' 'Verweerder heeft de huur- en zorgtoeslag van eiseres over 2020 vastgesteld op nihil, uitgaande van een gezamenlijk (toetsings-)inkomen dat bestaat uit de som van het inkomen van eiseres (€ 21.153) en het inkomen van de echtgenoot van eiseres (€ 38.244, samen is dat € 59.391).' 'In deze beslissingen is tevens bepaald dat eiseres de bij wijze van voorschot toegekende bedragen aan zorgtoeslag (€ 2.360) en huurtoeslag (€ 4.166) moet terugbetalen.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve vaststelling 2020: nihil bij een gezamenlijk toetsingsinkomen van € 21.153 (eiseres) + € 38.244 (echtgenoot, met een UWV-nabetaling van € 37.439 over 2016–2020 in het jaar van betaling), samen € 59.391 (tekst 2020: inkomensgrens met partner € 38.945). Het voorschot (€ 2.356, teruggevorderd als € 2.360) heeft geen genoemd inkomen en is geen case. Zusterzaak van de echtgenoot: ECLI:NL:RBNHO:2025:6620 (kindgebonden budget). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2020-rul-022 — PASS — check (ruling)

Source: ABRvS 8 augustus 2025, ECLI:NL:RVS:2025:3957 (zaaknr. 202405796/1/A2), citaten uit de uitspraak: 'Bij de berekening van de definitieve zorgtoeslag over 2020 heeft de Dienst Toeslagen betrokken dat uit gegevens van de Basisregistratie inkomen is gebleken dat [appellant] in 2020 een geregistreerd inkomen had van € 18.316,00, een geregistreerd vermogen van € 132.516,00 en een voordeel uit sparen en beleggen van € 3.800,00.' 'Omdat het vermogen hoger is dan de vermogensgrens van € 116.613,00, heeft de Dienst Toeslagen de zorgtoeslag op nihil vastgesteld.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Herziene definitieve vaststelling 2020 (4 maart 2023): nihil bij een geregistreerd inkomen van € 18.316 en een geregistreerd vermogen van € 132.516 — de zevende uitkomst van de Dienst op de vermogenstoets in het corpus en de eerste waarvan de rendementsgrondslag zelf in de uitspraak staat, niet gereconstrueerd. De Dienst noemt de vermogensgrens 2020 '€ 116.613': dat is de grens van Wzt art. 2a lid 1 (tekst 2020) op de grondslag sparen en beleggen, € 85.767, plus het heffingvrije vermogen 2020 van € 30.846 (Wet IB 2001 art. 5.5) — precies de omrekening die de encoding maakt en die law/CHANGES.md voor 2020→2021 beschrijft. Zonder partner gelezen ('[appellant]', één keer heffingvrij vermogen in de grens van de Dienst); zonder het vermogen zou de tekst € 1.250 geven. € 1.333 teruggevorderd. Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

## zt-2021-rul-001 — PASS — check (ruling)

Source: Rechtbank Den Haag 1 december 2023, ECLI:NL:RBDHA:2023:19139 (zaaknr. 23/3134), r.o. 3: 'Voor 2021 heeft eiser een voorschot op zijn zorgtoeslag ontvangen van € 1.287,-. Dit voorschot is gebaseerd op een draagkrachtberekening die uitging van een toetsingsinkomen van € 9.439,-.' Bevestigd in hoger beroep: ABRvS 20 november 2024, ECLI:NL:RVS:2024:4751 (zaaknr. 202307817/1/A2)

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1287.00 | 1287.00 (exact 1287) | yes |

Note: EERSTE uitkomst van de Dienst voor 2021 met inkomen in het corpus (2021 had tot nu alleen de vier synthetische grensgevallen, zt-2021-syn-004..007): een voorschot zorgtoeslag 2021 van € 1.287 op een toetsingsinkomen van € 9.439, onder het drempelinkomen — het maximum zonder partner uit de tekst van 2021: € 1.705 − 1,915% × € 21.835,008 = € 1.286,86 → € 1.287 (Awir art. 14 lid 4; via build.run_case). De uitspraak noemt geen partner; het bedrag bewijst er geen (met een verzekerde partner zou het € 2.487 zijn). De definitieve vaststelling van hetzelfde jaar staat in zt-2021-rul-002 (uit de uitspraak van de Afdeling). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2021-rul-002 — PASS — check (ruling)

Source: ABRvS 20 november 2024, ECLI:NL:RVS:2024:4751 (zaaknr. 202307817/1/A2), procesverloop en r.o. 1: 'Bij besluit van 5 augustus 2022 heeft de Dienst Toeslagen de zorgtoeslag van [appellant] over 2021 definitief vastgesteld op € 54,00, en € 1.237,00 aan teveel uitbetaalde voorschotten teruggevorderd.' 'Op 25 mei 2022 heeft de Dienst Toeslagen een melding ontvangen vanuit de Basisregistratie Inkomen (hierna: BRI) waaruit blijkt dat het toetsingsinkomen van [appellant] over 2021 € 30.913,00 bedraagt' (een AOW-nabetaling van € 15.640,95 netto over december 2019 t/m januari 2021, in februari 2021 betaald, meegeteld). Hoger beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 54.00 | 54.00 (exact 54) | yes |

Note: Definitieve vaststelling 2021 van € 54 op een toetsingsinkomen van € 30.913 — de eerste uitkomst van de Dienst voor 2021 op de afbouwlijn (geen maximum, geen nihil). De tekst van 2021 geeft zonder partner € 1.705 − (1,915% × € 21.835,008 + 13,580% × (€ 30.913 − € 21.835,008)) = € 54,07 → € 54 (Awir art. 14 lid 4; via build.run_case); met een verzekerde partner zou het € 1.254 zijn, dus het bedrag bewijst dat er geen partner was. Het voorschot van hetzelfde jaar (€ 1.287 op € 9.439) staat in zt-2021-rul-001. Het teruggevorderde bedrag (€ 1.237) is € 4 meer dan € 1.287 − € 54; de uitspraak van de Afdeling verklaart dat niet (de rechtbank schrijft € 1.233 'exclusief rente'). De Afdeling: een nabetaling telt in het jaar van betaling (Awir art. 7 lid 1, art. 8 lid 1), zoals in ECLI:NL:RVS:2024:4094 voor 2022. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2021-rul-003 — PASS — check (ruling)

Source: Rechtbank Zeeland-West-Brabant 29 oktober 2024, ECLI:NL:RBZWB:2024:7431 (zaaknr. 23/3233 ZORG), feiten: 'Op 27 september 2020 is bij de Dienst Toeslagen het jaarinkomen van eiser gemeld (€ 12.242,- in het jaar 2021). Met het besluit van 28 december 2020 heeft de Dienst Toeslagen aan eiser voor het jaar 2021 een voorschot zorgtoeslag toegekend van € 1.287,-. Op 25 mei 2022 heeft de Dienst Toeslagen een melding ontvangen vanuit de Basisregistratie Inkomen (BRI) waaruit blijkt dat eiser een belastbaar inkomen heeft van € 44.615,- in het jaar 2021. De zorgtoeslag is vastgesteld op € 0,-. Omdat eiser wel een voorschot van € 1.287,- heeft ontvangen, moet hij een bedrag van € 1.299,- (inclusief rente) terugbetalen.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1287.00 | 1287.00 (exact 1287) | yes |

Note: Voorschot zorgtoeslag 2021 van € 1.287 op een gemeld jaarinkomen van € 12.242, onder het drempelinkomen — het maximum zonder partner uit de tekst van 2021: € 1.705 − 1,915% × € 21.835,008 = € 1.286,86 → € 1.287 (Awir art. 14 lid 4; via build.run_case). De uitspraak noemt geen partner; het bedrag bewijst er geen (met een verzekerde partner € 2.487). De definitieve berekening op nihil staat in zt-2021-rul-004. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2021-rul-004 — PASS — check (ruling)

Source: Rechtbank Zeeland-West-Brabant 29 oktober 2024, ECLI:NL:RBZWB:2024:7431 (zaaknr. 23/3233 ZORG), feiten: 'Op 27 september 2020 is bij de Dienst Toeslagen het jaarinkomen van eiser gemeld (€ 12.242,- in het jaar 2021). Met het besluit van 28 december 2020 heeft de Dienst Toeslagen aan eiser voor het jaar 2021 een voorschot zorgtoeslag toegekend van € 1.287,-. Op 25 mei 2022 heeft de Dienst Toeslagen een melding ontvangen vanuit de Basisregistratie Inkomen (BRI) waaruit blijkt dat eiser een belastbaar inkomen heeft van € 44.615,- in het jaar 2021. De zorgtoeslag is vastgesteld op € 0,-. Omdat eiser wel een voorschot van € 1.287,- heeft ontvangen, moet hij een bedrag van € 1.299,- (inclusief rente) terugbetalen.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Definitieve berekening 2021 op nihil bij een BRI-inkomen van € 44.615, boven de inkomensgrens van de tekst van 2021 zonder partner (€ 31.138) én met partner (€ 39.979): nihil onder elke lezing. Dat er geen partner was, volgt uit het voorschotbedrag (zt-2021-rul-003). Het teruggevorderde bedrag (€ 1.299) is volgens de uitspraak het voorschot inclusief rente. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2021-rul-005 — PASS — check (ruling)

Source: Rechtbank Noord-Nederland 27 februari 2024, ECLI:NL:RBNNE:2024:632 (zaaknr. LEE 23/961), r.o. 1.1 en 5: 'Verweerder heeft bij besluit van 9 juni 2022 de hoogte van de zorgtoeslag 2021 herzien op een bedrag van € 487,00.' 'Eiser heeft over het jaar 2021 een voorschot van € 1.289,00 aan zorgtoeslag ontvangen op basis van een geschat inkomen van € 14.766,00. Op 25 mei 2022 heeft verweerder vanuit de Basisregistratie Inkomensgegevens (BRI) een melding gekregen dat het inkomen van eiser voor het jaar 2021 € 27.725,00 bedraagt. Verweerder heeft op basis daarvan de eerder toegekende zorgtoeslag herzien op € 487,00.' (Een afgekocht klein pensioen telde mee.) Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 487.00 | 487.00 (exact 487) | yes |

Note: Herziene voorschotbeschikking 2021 van € 487 op een BRI-inkomen van € 27.725. De tekst van 2021 geeft zonder partner € 1.705 − (1,915% × € 21.835,008 + 13,580% × (€ 27.725 − € 21.835,008)) = € 486,9987 → € 487 (Awir art. 14 lid 4; via build.run_case) — op twee tienden van een cent van de afrondingsgrens, en de Dienst komt op hetzelfde hele bedrag. De uitspraak noemt geen partner; het bedrag bewijst er geen (met een verzekerde partner zou het € 1.687 zijn). Het eerdere voorschot van hetzelfde jaar, € 1.289 op € 14.766, staat in zt-2021-rul-006 en wordt door de tekst NIET gereproduceerd (DISCREPANCIES.md #11). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2021-rul-006 — FAIL — check (ruling)

Source: Rechtbank Noord-Nederland 27 februari 2024, ECLI:NL:RBNNE:2024:632 (zaaknr. LEE 23/961), r.o. 1.1 en 5: 'Verweerder heeft bij besluit van 9 juni 2022 de hoogte van de zorgtoeslag 2021 herzien op een bedrag van € 487,00.' 'Eiser heeft over het jaar 2021 een voorschot van € 1.289,00 aan zorgtoeslag ontvangen op basis van een geschat inkomen van € 14.766,00. Op 25 mei 2022 heeft verweerder vanuit de Basisregistratie Inkomensgegevens (BRI) een melding gekregen dat het inkomen van eiser voor het jaar 2021 € 27.725,00 bedraagt. Verweerder heeft op basis daarvan de eerder toegekende zorgtoeslag herzien op € 487,00.' (Een afgekocht klein pensioen telde mee.) Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1289.00 | 1287.00 (exact 1287) | NO |

Note: Voorschot zorgtoeslag 2021 van € 1.289 op een geschat inkomen van € 14.766, onder het drempelinkomen. De tekst van 2021 geeft zonder partner het maximum € 1.705 − 1,915% × € 21.835,008 = € 1.286,86 → € 1.287 (Awir art. 14 lid 4; via build.run_case), twee euro minder dan de Dienst. Met een verzekerde partner zou het € 2.487 zijn, dus een partner verklaart het verschil niet. De uitspraak noemt het bedrag één keer, als voorschot 'over het jaar 2021 ontvangen', en zegt niet wanneer het is toegekend of op welke parameters het rustte. Vier andere voorschotten 2021 in het corpus op een inkomen onder het drempelinkomen zijn wél € 1.287 (zt-2021-rul-001, -003, en de voorschotten van 28 december 2020 in ECLI:NL:RBDHA:2024:23678 en ECLI:NL:RBNHO:2024:3591, nog niet als case opgenomen). Gelogd als DISCREPANCIES.md #11, status open; de case houdt het bedrag van de uitspraak, de encoding het bedrag van de tekst. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2021-rul-007 — PASS — check (ruling)

Source: Rechtbank Den Haag 10 december 2024, ECLI:NL:RBDHA:2024:23678 (zaaknr. 23/7085), r.o. 2: 'Met dagtekening van 28 december 2020 is op basis van een geschat inkomen van € 17.848 aan [naam] voor het jaar 2021 € 1.287 aan zorgtoeslag en € 4.289 aan huurtoeslag verleend.' 'Met dagtekening van 23 juni 2021 heeft verweerder aan [naam] medegedeeld dat haar toeslagen voor het jaar 2021 opnieuw zijn berekend, omdat haar inkomen opnieuw is geschat op € 19.162. De zorgtoeslag blijft € 1.287.' 'Met de definitieve berekening van 2 september 2022 is de zorgtoeslag vastgesteld op € 1.287 ... Hierbij is uitgegaan van een jaarinkomen van € 19.233.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1287.00 | 1287.00 (exact 1287) | yes |

Note: Voorschot zorgtoeslag 2021 van 28 december 2020, € 1.287, op een geschat inkomen van € 17.848, onder het drempelinkomen; de herziening van 23 juni 2021 (inkomen € 19.162) en de definitieve berekening van 2 september 2022 (€ 19.233) geven hetzelfde bedrag en zijn niet apart opgenomen. De tekst van 2021 geeft zonder partner het maximum € 1.705 − 1,915% × € 21.835,008 = € 1.286,86 → € 1.287 (Awir art. 14 lid 4; via build.run_case). De uitspraak noemt geen partner (de aanvrager is overleden; de erfgenamen procederen); het bedrag bewijst er geen (met een verzekerde partner € 2.487). Een voorschot van dezelfde dagtekening als de andere voorschotten 2021 in het corpus, op het bedrag van de tekst; relevant voor DISCREPANCIES.md #11 (€ 1.289 in ECLI:NL:RBNNE:2024:632). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2021-rul-008 — PASS — check (ruling)

Source: Rechtbank Den Haag 10 december 2024, ECLI:NL:RBDHA:2024:23678 (zaaknr. 23/7085), procesverloop en r.o. 2: 'Met het primaire besluit van 14 juli 2023 heeft verweerder de zorg- en huurtoeslag over het jaar 2021 herzien en definitief berekend. De zorgtoeslag is vastgesteld op € 1.091 en de huurtoeslag op € 2.456. Daarbij is bepaald dat € 204 aan zorgtoeslag en € 1.599 aan huurtoeslag wordt teruggevorderd.' 'Wijlen [naam] haar jaarinkomen voor 2021 is vastgesteld op € 23.280. De definitief berekende zorgtoeslag wordt aangepast naar € 1.091.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1091.00 | 1091.00 (exact 1091) | yes |

Note: Herziene definitieve berekening 2021 van 14 juli 2023, € 1.091, op het door de inspecteur vastgestelde inkomen van € 23.280 (de rechtbank: de Dienst moet dat inkomensgegeven volgen). De tekst van 2021: € 1.705 − (1,915% × € 21.835,008 + 13,580% × (€ 23.280 − € 21.835,008)) = € 1.090,63 → € 1.091 (Awir art. 14 lid 4; via build.run_case). € 1.287 − € 1.091 = € 196; de uitspraak noemt € 204 teruggevorderd en verklaart dat verschil niet. Zonder partner, zie zt-2021-rul-007. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2021-rul-009 — PASS — check (ruling)

Source: Rechtbank Noord-Holland 4 april 2024, ECLI:NL:RBNHO:2024:3591 (zaaknr. HAA 23/4258), procesverloop en r.o. 1–2: 'Bij beschikkingen met dagtekening 28 december 2020 is aan eiseres een voorschot huurtoeslag en een voorschot zorgtoeslag 2021 verleend van respectievelijk € 1.644 en € 1.221. Bij beschikking met dagtekening 21 oktober 2021 is het voorschot huurtoeslag en het voorschot zorgtoeslag 2021 herzien naar respectievelijk € 2.922 en € 1.287.' 'Eiseres heeft in het jaar 2021 geen toeslagpartner.' 'Eiseres heeft op 14 september 2021 voor het jaar 2021 een (geschat) toetsingsinkomen aan verweerder doorgegeven van € 18.500.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1287.00 | 1287.00 (exact 1287) | yes |

Note: Herzien voorschot 2021 van 21 oktober 2021, € 1.287, op het door de aanvrager op 14 september 2021 doorgegeven geschatte inkomen van € 18.500, onder het drempelinkomen. De tekst van 2021 geeft zonder partner het maximum € 1.286,86 → € 1.287 (via build.run_case). De uitspraak zegt uitdrukkelijk dat er in 2021 geen toeslagpartner was. Het eerdere voorschot van 28 december 2020, € 1.221, rustte op een inkomen dat de uitspraak niet noemt; niet opgenomen. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2021-rul-010 — PASS — check (ruling)

Source: Rechtbank Noord-Holland 4 april 2024, ECLI:NL:RBNHO:2024:3591 (zaaknr. HAA 23/4258), procesverloop en r.o. 3–4: 'Bij beschikkingen met dagtekening 12 augustus 2022 is de huurtoeslag en zorgtoeslag 2021 definitief vastgesteld op respectievelijk € 208 en € 600. Hierbij is vastgesteld dat eiseres € 2.726 aan huurtoeslag 2021 en € 690 aan zorgtoeslag 2021 moet terugbetalen.' 'In 2021 heeft eiseres een uitbetaling van het levenslooptegoed, zoals opgebouwd volgens de levensloopregeling, ontvangen van € 6.899.' 'Verweerder heeft op 23 juni 2022 een melding uit de Basisregistratie Inkomen ontvangen dat het inkomensgegeven van eiseres voor het jaar 2021 is vastgesteld op € 26.894.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 600.00 | 600.00 (exact 600) | yes |

Note: Definitieve berekening 2021 van 12 augustus 2022, € 600, op het BRI-inkomen van € 26.894 (een uitbetaald levenslooptegoed van € 6.899 telde mee; de rechtbank: terecht, het is geen nabetaling en geen afkoop van ouderdomspensioen). De tekst van 2021: € 1.705 − (€ 418,14 + 13,580% × € 5.058,992) = € 599,85 → € 600 (Awir art. 14 lid 4; via build.run_case). € 1.287 − € 600 = € 687; de uitspraak noemt € 690 teruggevorderd en verklaart dat verschil niet. Zonder partner (r.o. 1). Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

## zt-2022-rul-001 — PASS — check (ruling)

Source: ABRvS 9 oktober 2024, ECLI:NL:RVS:2024:4094 (zaaknr. 202400646/1/A2), r.o. 1: 'De Belastingdienst/Toeslagen heeft bij besluit van 28 december 2021 aan [appellant] een voorschot zorgtoeslag over 2022 verleend van € 1.336,-. De hoogte van het voorschot is gebaseerd op een geschat toetsingsinkomen over 2022 van € 3.628,-.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1336.00 | 1336.00 (exact 1336) | yes |

Note: Eerste uitkomst van de Dienst voor 2022 in het corpus, en de eerste 2022-case die niet uit de folder van de Dienst komt: een voorschot op een geschat inkomen van € 3.628, onder het drempelinkomen (€ 22.356), dus het maximum zonder partner uit de tekst van 2022: normpremie 1,848% × € 22.356 = € 413,14; € 1.749 − € 413,14 = € 1.335,86 → € 1.336 (Awir art. 14 lid 4; via build.run_case). De uitspraak noemt geen partner; het bedrag bewijst er geen (met een verzekerde partner zou het € 2.553 zijn). Het herziene voorschot op nihil staat in zt-2022-rul-002. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2022-rul-002 — PASS — check (ruling)

Source: ABRvS 9 oktober 2024, ECLI:NL:RVS:2024:4094 (zaaknr. 202400646/1/A2), r.o. 1: 'Op 15 september 2022 heeft [appellant] aan de Belastingdienst/Toeslagen doorgegeven dat zijn geschatte toetsingsinkomen over 2022 € 47.000,- bedraagt. [appellant] heeft daarbij naar eigen zeggen rekening gehouden met een nabetaling van het UWV van bruto € 31.102,13. De dienst heeft op basis van dit geschatte toetsingsinkomen bij het besluit van 21 oktober 2022 het voorschot zorgtoeslag over 2022 herzien en vastgesteld op nihil'. Het beroep tegen de terugvordering van € 1.112 (Rechtbank Noord-Nederland 21 december 2023, ECLI:NL:RBNNE:2023:5325) en het hoger beroep zijn ongegrond: de nabetaling telt als inkomen van 2022

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Herzien voorschot 2022 op nihil bij een geschat inkomen van € 47.000, ver boven de inkomensgrens zonder partner van 2022 (zie zt-2022-pub-006/-007). Een nabetaling van het UWV over 2017–2022 telt volgens Afdeling en rechtbank geheel mee in het jaar van uitbetaling: de Wzt en de Awir kennen, anders dan de huurtoeslag (Bht art. 2b), geen bepaling om een nabetaling buiten beschouwing te laten. Het teruggevorderde voorschot (€ 1.112, uitbetaald tot oktober) is geen invoer. Zelfde aanvrager als zt-2022-rul-001. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2022-rul-003 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 26 september 2024, ECLI:NL:RBMNE:2024:5552 (zaaknrs. UTR 23/4153 en UTR 24/4548), r.o. 11, 14–16: 'Eiser en zijn partner wonen in Polen en ontvangen pensioen uit Nederland. Zij zijn daardoor verdragsgerechtigde in de zin van artikel 69 van de Zorgverzekeringswet.' 'De standaardpremie is een vast bedrag en in 2022 voor twee personen vastgesteld op € 3.498. Daarop moet de woonlandfactor (0,1829) worden toegepast en dan resteert een bedrag van € 640.' 'In 2022 was zijn toetsingsinkomen € 22.433 en het drempelinkomen is in dat jaar vastgesteld op € 22.356. Over het drempelinkomen is bepaald dat 4,225 procent kan worden besteed aan zorgkosten en over het overschot (van € 77) is dat 13,61 procent. Dat betekent dat de normpremie van eiser in 2022 € 955 was.' 'De normpremie (€ 955) is dus hoger dan de standaardpremie (€ 640), waardoor eiser over 2022 geen recht heeft op (een voorschot op) zorgtoeslag.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Herziening van het voorschot 2022 naar nihil (17 mei 2023, gehandhaafd 10 juli 2023): geen zorgtoeslag voor een verdragsgerechtigd echtpaar in Polen. De tekst van 2022 geeft hetzelfde: standaardpremie 2 × € 1.749 × 0,1829 = € 639,78 (Wzt art. 3 lid 1–2, tekst 2022; Regeling zorgverzekering bijlage 4, Polen 0,1829), normpremie 4,225% × € 22.356 + 13,61% × € 77 = € 955,02 (art. 2 lid 3), aanspraak negatief, dus nihil (via build.run_case). De Dienst noemt € 640 en € 955: dezelfde bedragen, afgerond. De uitspraak noemt het inkomen 'zijn toetsingsinkomen', maar rekent met de percentages en de standaardpremie voor twee personen; de case voert € 22.433 in als gezamenlijk toetsingsinkomen (partner € 0). Zonder partner zou de uitkomst ook nihil zijn (€ 319,89 tegen € 423,62). Het drempelinkomen 2022 'vastgesteld op € 22.356' is precies 108% × 12 × € 1.725,00, dus hier geen afrondingsvraag (DISCREPANCIES.md #1). Eerste beslissing in het corpus waarin de Dienst een woonlandfactor op een genoemd inkomen toepast; de factor voor Polen 2022 in parameters/2022.yaml (Stcrt. 2021, 46565) is de factor die de Dienst toepaste. Voetnoot van de rechtbank, geciteerd zonder uitleg: 'Overigens heeft Dienst Toeslagen in de beslissing op bezwaar de normpremie op een onjuiste wijze berekend, door 4,256 % van het gehele toetsingsinkomen te nemen (in plaats van het drempelinkomen) en uit te komen op een normpremie van € 955.' Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2022-rul-004 — PASS — check (ruling)

Source: Rechtbank Den Haag 20 juni 2024, ECLI:NL:RBDHA:2024:10408 (zaaknr. SGR 23/6791), citaten uit de uitspraak: 'Op 28 december 2021 is aan eiser voor 2022 een voorschot aan zorgtoeslag toegekend van € 2.387,-.' 'Dit is gebaseerd op een toetsingsinkomen van eiser van € 11.398,- en een toetsingsinkomen van zijn partner van € 12.181,-.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 2387.00 | 2387.00 (exact 2387) | yes |

Note: Voorschot 2022 (28 december 2021): € 2.387 bij een geschat toetsingsinkomen van € 11.398 voor eiser en € 12.181 voor zijn partner, gezamenlijk € 23.579. De tekst van 2022: 2 × € 1.749 − (4,225% × € 22.356 + 13,610% × € 1.223) = € 2.387,01 → € 2.387 (Awir art. 14 lid 4). De eerste uitkomsten van de Dienst voor 2022 met partner buiten een folder, met beide inkomens genoemd (ook zt-2022-rul-005). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2022-rul-005 — PASS — check (ruling)

Source: Rechtbank Den Haag 20 juni 2024, ECLI:NL:RBDHA:2024:10408 (zaaknr. SGR 23/6791), citaten uit de uitspraak: 'Het inkomen van eiser is bepaald op € 16.513,- en dat van zijn van partner op € 12.264,-.' 'Op grond van deze gewijzigde inkomensgegevens, heeft verweerder de zorgtoeslag van eiser bij het primaire besluit van 11 augustus 2023 vastgesteld op € 1.680,-.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1680.00 | 1680.00 (exact 1680) | yes |

Note: Definitieve vaststelling 2022 (11 augustus 2023): € 1.680 bij de door de inspecteur vastgestelde inkomens van € 16.513 (eiser) en € 12.264 (partner), gezamenlijk € 28.777. De tekst van 2022: 2 × € 1.749 − (4,225% × € 22.356 + 13,610% × € 6.421) = € 1.679,56 → € 1.680 (Awir art. 14 lid 4). € 710 teruggevorderd; de rechtbank: de Dienst volgt het inkomen van de inspecteur (Awir art. 7 lid 1) en hoeft de juistheid daarvan niet te onderzoeken. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2022-rul-006 — PASS — check (ruling)

Source: Rechtbank Zeeland-West-Brabant 3 september 2024, ECLI:NL:RBZWB:2024:6154 (zaaknr. 23/3864), citaten uit de uitspraak: 'Aan eiser is een voorschot zorgtoeslag van € 2.553,- toegekend voor het jaar 2022.' 'Dit voorschot is gebaseerd op een geschat inkomen van € 20.876,-.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 2553.00 | 2553.00 (exact 2553) | yes |

Note: Voorschot 2022: € 2.553 bij een geschat inkomen van € 20.876 voor eiser en zijn echtgenote — het maximum met partner van de tekst 2022 (€ 2.553,46), want het inkomen ligt onder het drempelinkomen van € 22.356. Het gezamenlijke inkomen is als inkomen van de aanvrager ingevoerd (partner € 0). Het herziene voorschot van dezelfde uitspraak: zt-2022-rul-007 (DISCREPANCIES.md #13). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2022-rul-007 — FAIL — check (ruling)

Source: Rechtbank Zeeland-West-Brabant 3 september 2024, ECLI:NL:RBZWB:2024:6154 (zaaknr. 23/3864), citaten uit de uitspraak: 'Bij besluit van 4 februari 2023 (primair besluit) heeft de Dienst Toeslagen eisers voorschot zorgtoeslag over het jaar 2022 herzien en voorlopig vastgesteld op € 905,-.' 'Het inkomen wordt dan geschat op € 34.540,-.' 'Daaropvolgend heeft de Dienst Toeslagen op 4 februari 2023 een nieuwe voorschotberekening gemaakt, waarin het voorschot zorgtoeslag voor het jaar 2022 voorlopig wordt vastgesteld op € 901,-.' 'De Dienst Toeslagen is daarom ten tijde van het bestreden besluit terecht uitgegaan van een toetsingsinkomen van € 34.540,-.' 'Dit voorschot is herzien en opnieuw berekend op € 901,-, zodat de terugvordering op grond van het bestreden besluit € 1.652,- bedraagt.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 901.00 | 895.00 (exact 895) | NO |

Note: Herzien voorschot 2022 (4 februari 2023): € 901 bij een geschat gezamenlijk toetsingsinkomen van € 34.540 (een nabetaling pensioen van de echtgenote meegeteld); de uitspraak schrijft het bedrag tweemaal als € 901 en eenmaal als € 905, en € 1.652 teruggevorderd = € 2.553 − € 901. De tekst van 2022 geeft € 895 (2 × € 1.749 − (4,225% × € 22.356 + 13,610% × € 12.184) = € 895,22); € 901 zou bij € 34.497 volgen, € 905 bij € 34.468 — de uitspraak noemt geen ander inkomen, geen woonland en geen maanden. Opgenomen als DISCREPANCIES.md #13 (open); deze case faalt daarom bij de check en is als zodanig gelogd. Het gezamenlijke inkomen is als inkomen van de aanvrager ingevoerd (partner € 0). Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2022-rul-008 — PASS — check (ruling)

Source: Rechtbank Noord-Nederland 10 juni 2025, ECLI:NL:RBNNE:2025:3192 (zaaknr. LEE 24/2861), citaten uit de uitspraak: 'Op 28 december 2021 heeft verweerder aan eiseres een voorschot zorgtoeslag verleend van € 1.910,00 op basis van een geschat gezamenlijk inkomen van € 27.082,00.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1910.00 | 1910.00 (exact 1910) | yes |

Note: Voorschot 2022 (28 december 2021): € 1.910 bij een geschat gezamenlijk inkomen van € 27.082, met partner. De tekst van 2022: 2 × € 1.749 − (4,225% × € 22.356 + 13,610% × € 4.726) = € 1.910,25 → € 1.910 (Awir art. 14 lid 4). Het gezamenlijke inkomen is als inkomen van de aanvrager ingevoerd (partner € 0). De definitieve berekening (14 juni 2024, € 335) heeft geen genoemd inkomen en is geen case. Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

## zt-2023-rul-004 — PASS — check (ruling)

Source: Rechtbank Gelderland 24 februari 2025, ECLI:NL:RBGEL:2025:1418 (zaaknr. AWB - 24/2616), citaten uit de uitspraak: 'Bij besluit van 24 mei 2023 is aan eiseres een voorschot zorgtoeslag toegekend van € 1.595, aan kindgebonden budget van € 5.360 (herzien) en aan huurtoeslag van € 1.572 (op basis van een toetsingsinkomen van € 27.000).'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 1595.00 | 1595.00 (exact 1595) | yes |

Note: Voorschot 2023 (24 mei 2023): € 1.595 bij een geschat toetsingsinkomen van € 27.000, zonder partner ('eiseres', geen partner genoemd; het kindgebonden budget zegt niets over een partner). De tekst van 2023: € 1.889 − (0,123% × € 25.069,824 + 13,640% × € 1.930,176) = € 1.594,89 → € 1.595 (Awir art. 14 lid 4). Het hoger beroep, ABRvS 25 maart 2026, ECLI:NL:RVS:2026:1753, noemt hetzelfde geschatte inkomen. Het latere voorschot van € 777 (5 januari 2024) heeft geen genoemd inkomen en is geen case. Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

## zt-2024-rul-001 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 26 september 2024, ECLI:NL:RBMNE:2024:5552 (zaaknrs. UTR 23/4153 en UTR 24/4548), r.o. 17–19: 'Voor het recht op zorgtoeslag over 2024 is de rekensom hetzelfde maar zijn de getallen anders. De standaardpremie voor dat jaar voor twee personen is op € 3.974 gesteld, de woonlandfactor voor Polen is 0,1613 en het drempelinkomen € 26.819.' 'Dienst Toeslagen heeft over 2024 gerekend met een toetsingsinkomen van € 31.565.' 'De rekensom over 2024 komt op een standaardpremie van € 641 en een normpremie van € 1.790, wat betekent dat ook dat jaar de normpremie hoger is dan de standaardpremie. Ook over 2024 heeft eiser dus geen recht op zorgtoeslag.' Voetnoten: '€ 3.974 maal 0,1613'; '4,256 % van € 26.819 plus 13,67 % van € 4.746'. Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Voorschotbeschikking 2024 (28 december 2023, gehandhaafd 10 mei 2024): geen zorgtoeslag voor hetzelfde verdragsgerechtigde echtpaar in Polen. De tekst van 2024: standaardpremie 2 × € 1.987 × 0,1613 = € 641,01 (Wzt art. 3, tekst 2024 tot 06-11-2024; Regeling zorgverzekering bijlage 4, Polen 0,1613), normpremie 4,256% × € 26.819,424 + 13,67% × € 4.745,576 = € 1.790,16 (art. 2 lid 3), nihil (via build.run_case). De Dienst rekent met het drempelinkomen 'vastgesteld op' € 26.819, naar beneden afgerond zoals in zijn brochure 2024 (DISCREPANCIES.md #1), en komt op € 641 en € 1.790; voor de uitkomst maakt dat niets uit. Eerste uitkomst van de Dienst voor 2024 in het corpus buiten de brochure. Het inkomen is het bedrag waarmee de Dienst rekende ('gerekend met een toetsingsinkomen van € 31.565'; eiser bestreed het, de rechtbank volgde de Dienst); de case voert het in bij de aanvrager, partner € 0; nihil onder elke verdeling. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2024-rul-002 — PASS — check (ruling)

Source: Rechtbank Midden-Nederland 17 september 2025, ECLI:NL:RBMNE:2025:4925 (zaaknr. UTR 25/2434), r.o. 4: 'Eiser en zijn toeslagpartner wonen sinds 2021 in [land]. ... Dienst Toeslagen heeft op 3 oktober 2023 het berekeningsinkomen over het jaar 2024 voor eiser en zijn toeslagpartner geschat op € 21.441,- respectievelijk € 821,-. Aan eiser is daarna een voorschot van € 0,- verleend. Op 23 april 2024 heeft Dienst Toeslagen het voorschot over het jaar 2024 herzien naar € 2.833,-. Dienst Toeslagen heeft daarbij - naar eigen zeggen - abusievelijk geen gebruik gemaakt van de van toepassing zijnde woonlandfactor. Op 12 juni 2024 heeft Dienst Toeslagen daarom het voorschot over het jaar 2024 herzien naar € 0,- en een bedrag van € 1.416,- van eiser teruggevorderd.' Beroep ongegrond

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 2833.00 | 2833.00 (exact 2833) | yes |

Note: Herzien voorschot 2024 van 23 april 2024, € 2.833, op een geschat gezamenlijk inkomen van € 21.441 + € 821 = € 22.262, door de Dienst berekend zonder woonlandfactor, naar eigen zeggen abusievelijk: het paar woont buiten Nederland en de factor hoorde te worden toegepast. De case legt vast wat de Dienst bij die beschikking berekende, met de invoer die hij toen gebruikte (beiden als verzekerde). De tekst van 2024 geeft bij die invoer hetzelfde: 2 × € 1.987 − 4,256% × € 26.819,424 = € 2.832,57 → € 2.833 (Awir art. 14 lid 4; via build.run_case), het maximum met partner van 2024, want het inkomen ligt onder het drempelinkomen. De latere uitkomst, € 0 na toepassing van de woonlandfactor (12 juni 2024, definitief gehandhaafd 28 februari 2025), is niet na te rekenen: de uitspraak anonimiseert het woonland. Uit de tekst volgt alleen dat de factor lager dan 0,2932 was (daarboven zou 2 × € 1.987 × factor − € 1.141,43 ten minste € 23,50 zijn en afgerond € 24, Awir art. 14 lid 4–5). Het teruggevorderde bedrag, € 1.416, is niet het hele voorschot; de uitspraak verklaart dat niet. Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

## zt-2025-rul-001 — PASS — check (ruling)

Source: Rechtbank Den Haag 24 april 2026, ECLI:NL:RBDHA:2026:9882 (zaaknr. 25/2227), citaten uit de uitspraak: 'Verweerder heeft met het besluit van 22 januari 2025 het voorschot zorgtoeslag voor 2025 vastgesteld op € 0,-.' 'Als gevolg van een inkomenswijziging van € 39.100,- naar € 70.000,- is het eerder aan eiser toegekende voorschot zorgtoeslag voor 2025 herzien van € 108,- naar € 0,-.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 108.00 | 108.00 (exact 108) | yes |

Note: Voorschot 2025: € 108 bij een geschat inkomen van € 39.100, zonder partner ('eiser', geen partner genoemd) — de eerste uitkomst van de Dienst voor 2025 in het corpus, op € 619 onder de inkomensgrens zonder partner van de tekst (€ 39.719). De tekst van 2025: € 2.112 − (1,896% × € 28.405,728 + 13,700% × € 10.694,272) = € 108,31 → € 108 (Awir art. 14 lid 4); met het drempelinkomen van de Dienst (€ 28.406, DISCREPANCIES.md #1) komt dezelfde euro uit. Het herziene voorschot: zt-2025-rul-002. Wordt 'verified' op dezelfde voet (ASKS.md 9).

## zt-2025-rul-002 — PASS — check (ruling)

Source: Rechtbank Den Haag 24 april 2026, ECLI:NL:RBDHA:2026:9882 (zaaknr. 25/2227), citaten uit de uitspraak: 'Als gevolg van een inkomenswijziging van € 39.100,- naar € 70.000,- is het eerder aan eiser toegekende voorschot zorgtoeslag voor 2025 herzien van € 108,- naar € 0,-.' 'Omdat eiser geen recht meer heeft op een voorschot zorgtoeslag voor 2025 heeft verweerder dit voorschot teruggevorderd.' 'Tussen partijen is niet in geschil dat eiser geen recht meer heeft op een voorschot zorgtoeslag voor 2025.'

| field | expected | encoding | match |
|---|---|---|---|
| tegemoetkoming | 0.00 | 0.00 (exact 0) | yes |

Note: Herzien voorschot 2025 (22 januari 2025): nihil na een inkomenswijziging naar € 70.000, zonder partner (tekst 2025: inkomensgrens zonder partner € 39.719). Niet in geschil; het geschil ging over de terugvordering van het eerste maandbedrag (Awir art. 26a niet naar analogie toepasbaar). Wordt 'verified' op dezelfde voet (ASKS.md 9).

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

Browser encoding (`site/zorgtoeslag-regels.js`, node v22.22.0): 328 cases compared with the Python encoding, 328 identical, 0 different.

---

Cases run: 328, passed: 305, failed: 23, skipped: 0. Verified cases: 0. Blocking failures: 0. Browser/Python differences: 0 (blocking: the two encodings must agree).
