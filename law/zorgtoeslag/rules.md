# Zorgtoeslag — de regels

Elke regel: een vaste id, het artikel en de versie, de regel in gewoon Nederlands, de
status (`LAW.md`), en wat de regel doet waar de wet ruimte laat. De code staat in
`rules.py`; de bedragen per jaar in `parameters/<jaar>.yaml`. Alles hier is **draft**:
door niemand nagelezen tegen het artikel. Geraadpleegd 2026-10-07 t/m 2026-10-14.

**Jaren en artikelnummers.** Gecodeerd: 2026, 2025, 2024, 2023 (sinds 2026-10-11), 2022 (sinds 2026-10-12), 2021 (sinds 2026-10-13), 2020 (sinds 2026-10-14), 2019 (sinds 2026-10-18) en 2018 (sinds 2026-10-19). De regel-id's dragen de nummering van 2026.
In de tekst van 2024 (geldend t/m 05-11-2024) heette de vermogenstoets **art. 2a** en de woonlandfactor
**art. 3**; per 06-11-2024 (Stb. 2024, 291, art. XIX) zijn zij art. 3 en art. 4a geworden en is art. 4a
lid 3 ingevoegd. De stappen citeren per jaar het artikelnummer van dat jaar (`parameters/<jaar>.yaml`,
`artikel_vermogenstoets`, `artikel_woonlandfactor`; 2018 t/m 2024 gelijk). In 2018, 2019 en 2020 had art. 2 nog acht leden: lid 5 (oud)
ontzegde de zorgtoeslag aan een verzekerde met een partner die zijn verzekeringsplicht niet nakwam (gecodeerd als
`zt-2020-art2-5oud`; vervallen per 01-01-2021, Stb. 2020, 543), de maandbepaling stond in lid 6 (`artikel_maandbepaling`);
en de vermogenstoets rustte op de grondslag sparen en beleggen met één bedrag, € 85.767 in 2020, € 84.416 in 2019 en € 83.415 in 2018 (`vermogenstoets_basis`,
`heffingvrij_vermogen`); sinds 2021 op de rendementsgrondslag met twee (Stb. 2020, 546). Zie `../CHANGES.md`.

Wat de encoding nu kan: een verzekerde of verdragsgerechtigde, met of zonder partner, met het
hele jaar dezelfde situatie, tot en met de afronding en het minimumbedrag van de Awir
(`../awir/rules.md`). Wat zij nog niet kan staat onderaan onder *Niet gecodeerd*.

---

## zt-2026-art1-1f — drempelinkomen

**Artikel:** Wet op de zorgtoeslag art. 1 lid 1 onder f (BWBR0018451, geldend van 01-01-2026);
Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder b. Dezelfde tekst in de versies
van 01-01-2025 en 01-01-2024.
**Status:** draft.
**Gewoon Nederlands:** Het drempelinkomen is 108% van twaalf keer het minimumloon per maand
dat in januari van het jaar geldt. Verdient u minder dan dit bedrag, dan krijgt u de
hoogste zorgtoeslag.
**Code:** `drempelinkomen(jaar)` = 108/100 × 12 × `wml_maandbedrag_januari`. 2026:
108% × 12 × € 2.294,40 = € 29.735,424. 2025: € 28.405,728. 2024: 108% × 12 × € 2.069,40 = € 26.819,424.
2023: 108% × 12 × € 1.934,40 = € 25.069,824 (Stb. 2022, 381). 2022: 108% × 12 × € 1.725,00 = € 22.356,00 (Stcrt. 2021, 44177).
2021: 108% × 12 × € 1.684,80 = € 21.835,008 (Stcrt. 2020, 53099). 2020: 108% × 12 × € 1.653,60 = € 21.430,656 (Stcrt. 2019,
56680). 2019: 108% × 12 × € 1.615,80 = € 20.940,768 (Stcrt. 2018, 59237). 2018: 108% × 12 × € 1.578,00 = € 20.450,88 (Stcrt. 2017, 58642). In 2018 t/m 2023 verwees onder f naar WML art. 8 lid 1
onderdeel **a**; per 01-01-2024 is dat onderdeel b (Wet invoering minimumuurloon, Stb. 2023, 168, art. XXXI),
omdat onderdeel a sindsdien het minimumuurloon is. `parameters/2018.yaml` t/m `2023.yaml` zeggen dat met `artikel_wml_onderdeel`.
**Discretie:** De wet zegt niets over afronden. De encoding rondt niet af. De Dienst
Toeslagen rekent met een op hele euro's afgerond drempelinkomen ("vastgesteld op" € 26.819 in 2024 —
naar beneden —, € 28.406 in 2025 en € 29.736 in 2026 — naar boven, in 2026 ook waar rekenkundig
€ 29.735 zou volgen). Geen afrondingsbepaling gevonden in de Wzt, de Awir
(alleen art. 14 lid 4, dat het eindbedrag afrondt) of de Uitvoeringsregeling Awir, alle
volledig doorzocht op 2026-10-08. Daarom `DISCREPANCIES.md` #1, status `government`. Effect:
centen in de normpremie, en in 2026 één euro inkomen aan de bovengrens (€ 40.856 volgens de
tekst, € 40.857 volgens de Dienst; case `zt-2026-pub-010`).

## zt-2026-art2-2 — normpremie

**Artikel:** Wzt art. 2 lid 2 en lid 3 (BWBR0018451, geldend van 01-01-2026; percentages per
jaar in `parameters/`).
**Status:** draft.
**Gewoon Nederlands:** De normpremie is wat de wet vindt dat u zelf aan premie kunt betalen.
Zonder partner: 1,912% van het drempelinkomen. Met partner: 4,289% van het drempelinkomen.
Daarbovenop, voor beiden: 13,730% van het deel van uw (gezamenlijke) toetsingsinkomen dat
boven het drempelinkomen uitkomt. (Percentages 2026; 2025: 1,896% / 4,273% / 13,700%; 2024: 1,879% /
4,256% / 13,670%, in 2024 nog in de wettekst van lid 3 zelf; 2023: 0,123% / 2,378% / 13,640%, de eenmalige
verlaging van Stb. 2022, 472 voor dat ene jaar, eveneens in de wettekst; 2022: 1,848% / 4,225% / 13,610% (Stb. 2021, 574);
2021: 1,915% / 4,225% / 13,580% — eerst 1,885% / 4,195% bij Stb. 2020, 452, vóór de inwerkingtreding +0,030 procentpunt bij
amendement Snels/Lodders, Stb. 2020, 543, art. III; 2020: 1,830% / 4,140% / 13,550% (Stb. 2019, 386: de normpercentages
structureel 0,19 procentpunt lager dan het schema, koopkrachtbesluitvorming 2020; 2019: 2,005% / 4,315% / 13,520% (tekst van
01-01-2019 gelezen 2026-10-18; Stb. 2018, 431, dat het normpercentage met partner met ingang van 2019 structureel 0,45
procentpunt verlaagde, 4,765% → 4,315%, en de andere twee op hun schema liet; 2018: 1,990% / 4,750% / 13,490% (tekst van
01-01-2018 gelezen 2026-10-19; Stb. 2017, 436, dat de normpercentages met ingang van 2018 structureel 0,33 en 0,32 procentpunt
verlaagde als koopkrachtmaatregel en het afbouwpercentage op zijn schema liet; 2017 was 2,305% / 5,055% / 13,460% volgens tabel 1
van dat besluit — de tekst van 2017 is nog niet gelezen). Bron: Besluit percentages drempel- en
toetsingsinkomen zorgtoeslag, Stb. 2017, 436 → Stb. 2018, 431 → Stb. 2019, 386 → Stb. 2020, 452 → Stb. 2021, 574 → Stb. 2022, 472 → Stb. 2024, 351 → Stb. 2025, 412.)
**Code:** `normpremie(toetsingsinkomen, partner, jaar)`. Het deel boven het drempelinkomen is
nul als het toetsingsinkomen onder het drempelinkomen ligt ("voor zover ... te boven gaat").
**Discretie:** geen.

## zt-2026-art2-1 — aanspraak

**Artikel:** Wzt art. 2 lid 1 (BWBR0018451, geldend van 01-01-2026).
**Status:** draft.
**Gewoon Nederlands:** Is uw normpremie lager dan de standaardpremie, dan is uw zorgtoeslag
het verschil. Hebt u een partner, dan telt de standaardpremie twee keer en hebben u en uw
partner samen één aanspraak.
**Code:** `aanspraak_jaar` = (standaardpremie van u, plus die van uw partner als u er een
hebt; zie `zt-2026-art4` en `-art4a`) − normpremie, en nul als dat negatief is. Dit is het
berekende bedrag; het toegekende bedrag volgt uit `awir-2026-art14-4` en `-art14-5`.
**Discretie:** geen.

## zt-2026-art2-4 — partner die geen verzekerde is

**Artikel:** Wzt art. 2 lid 4 (BWBR0018451, geldend van 01-01-2026).
**Status:** draft.
**Gewoon Nederlands:** Hebt u een partner die zelf geen verzekerde is voor deze wet
(bijvoorbeeld een militair, of iemand die in het buitenland verzekerd is), dan krijgt u de
helft van het berekende bedrag.
**Code:** als `partner` en niet `partner_verzekerd`: aanspraak × 50%.
**Discretie:** Of iemand "verzekerde" is (Wzt art. 1 lid 1 onder c, via de Zvw) codeert de
encoding niet; het is invoer.

## zt-2026-art2-5 — per kalendermaand

**Artikel:** Wzt art. 2 lid 5 (BWBR0018451, geldend van 01-01-2026; in 2018 t/m 2020 lid 6, vernummerd per 01-01-2021 bij
Stb. 2020, 543, art. III; het jaarbestand zegt het met `artikel_maandbepaling`).
**Status:** draft.
**Tekst:** "De aanspraak op een zorgtoeslag wordt voor iedere kalendermaand afzonderlijk bepaald." (verbatim gelezen in de
versies van 01-01-2023 en 01-01-2026, 2026-10-20; lid 6 laat nadere regels bij ministeriële regeling toe — de wetstechnische
informatie van art. 2 noemt er geen, geraadpleegd 2026-10-09 en 2026-10-20).
**Gewoon Nederlands:** De zorgtoeslag wordt voor elke maand apart bepaald. Had u maar een deel van het jaar recht,
dan krijgt u zoveel twaalfden van het jaarbedrag als u maanden met recht had.
**Code:** `aanspraak_maand` = `aanspraak_jaar` / 12, onafgerond. Sinds 2026-10-20 ook een deel van het jaar: invoer
`maanden_aanspraak` (1–12, standaard 12); bij minder dan 12: `aanspraak_periode` = `aanspraak_jaar` × maanden / 12,
onafgerond, en daarop pas Awir art. 14 lid 4 (afronding) en lid 5 (minimum) → `tegemoetkoming`. Het hele-jaarbedrag
blijft apart beschikbaar (`tegemoetkoming_jaar`). Welke maand meetelt (de maand waarin iemand verzekerde wordt of ophoudt
dat te zijn), bepaalt de tekst niet: het aantal is invoer en de checker zegt dat.
**Volgorde van afronden (niet door de tekst bepaald; de encoding volgt de tekst gewoon gelezen):** de tekst rondt het
bedrag van de tegemoetkoming af (Awir art. 14 lid 4) en zegt nergens dat het jaarbedrag eerst wordt afgerond voordat het in
twaalfden gaat. De Dienst Toeslagen doet dat wel: zij neemt het afgeronde jaarbedrag, vermenigvuldigt met maanden/12 en rondt
opnieuw af — tot op de euro gereproduceerd uit Rechtbank Midden-Nederland 02-06-2026, ECLI:NL:RBMNE:2026:4437 (2023,
11 maanden: € 1.082 × 11/12 = € 991,83 → € 992, waar de tekst € 1.081,61 × 11/12 = € 991,48 → € 991 geeft; het herziene
voorschot € 1.703 is onder beide lezingen gelijk). De encoding geeft het bedrag van de tekst als `tegemoetkoming` en dat van
de Dienst als `tegemoetkoming_praktijk_deeljaar`, en zegt in de uitkomst wanneer zij verschillen (hoogstens € 1).
`DISCREPANCIES.md` #9 (de regel ontbrak; `encoding`) en #10 (de volgorde; `government`), cases `zt-2023-rul-002/-003`.
**Discretie (maandbedrag):** De wet rondt het jaarbedrag van de tegemoetkoming af (Awir art. 14 lid 4,
`../awir/rules.md`), niet het maandbedrag. De Dienst Toeslagen publiceert hele euro's per maand.
Haar tabellen (alle rijen 2025 en 2026, `cases/zt-*-tab-*`) laten zien hoe: het afgeronde
jaarbedrag gedeeld door twaalf, naar beneden afgerond (2025 met partner, € 34.000: € 2.243,83 →
€ 2.244 → € 187; niet € 186,99 → € 186). Haar rekenvoorbeelden drukken het onafgeronde maandbedrag
af en ronden naar beneden (2024: 123,59 → 123; 109,50 → 109; 2025: 131,12 → 131; 2026: 129,20 → 129),
wat met beide lezingen strookt. Geen grondslag gevonden in Wzt, Awir of Uitvoeringsregeling Awir
(2026-10-08, 2026-10-09); het maandbedrag is een voorschot (Awir art. 16) en hoe dat in termijnen
wordt gesplitst, staat niet in de gelezen teksten. De encoding toont het onafgeronde maandbedrag
(`aanspraak_maand`) en de praktijk (`aanspraak_maand_afgerond_praktijk`, berekend uit het afgeronde hele-jaarbedrag) apart; `DISCREPANCIES.md` #5. Voor 2022 rondde de Dienst het maandbedrag in haar rekenvoorbeeld rekenkundig af (€ 44,89 → € 45), wat geen enkel naar-beneden-model geeft; het parameterbestand 2022 draagt daarom `maand_afronding_praktijk: rekenkundig` (één voorbeeld, als praktijk gemerkt; `DISCREPANCIES.md` #8). De praktijkregel is per jaar een parameter, geen wet. Een jaar waarin de invoer zelf verandert (partner erbij of weg, een ander inkomen per maand; Awir art. 5) codeert de encoding nog niet: zij rekent één situatie over het aantal maanden dat u opgeeft.

## zt-2020-art2-5oud — partner die zijn verzekeringsplicht niet nakwam (t/m 2020)

**Artikel:** Wzt art. 2 lid 5 zoals dat luidde t/m 31-12-2020 (BWBR0018451, geldend van 01-01-2020, verbatim gelezen
2026-10-14): "In afwijking van het eerste lid heeft een verzekerde met een partner die niet heeft voldaan aan de voor hem
op grond van artikel 2 van de Zorgverzekeringswet geldende verplichting zich krachtens een zorgverzekering te verzekeren,
geen aanspraak op een zorgtoeslag." Vervallen per 01-01-2021 (Wet verbetering uitvoerbaarheid toeslagen, Stb. 2020, 543,
art. III onder 2; lid 6–8 vernummerd tot 5–7). Geldig in de encoding alleen voor jaren waarvan het parameterbestand
`art2_lid5_oud_aanwezig: true` draagt (2018, 2019, 2020).
**Status:** draft.
**Gewoon Nederlands:** Had uw partner zich in Nederland moeten verzekeren en deed hij of zij dat niet, dan kreeg u in 2018, 2019 en 2020
helemaal geen zorgtoeslag — ook niet de helft van `zt-2026-art2-4`. Sinds 2021 bestaat deze regel niet meer.
**Code:** als `partner` en `partner_verzekeringsplicht_niet_nagekomen`: aanspraak = 0, na `zt-2026-art2-4`. Niet
opgegeven: gerekend alsof nagekomen, met een noot onder *Wat de wet hier niet bepaalt*.
**Discretie:** Of de partner verzekeringsplichtig was (Zvw art. 2) en of hij die plicht niet nakwam, codeert de encoding
niet; het is invoer. Dat een partner die "geen verzekerde" is (lid 4) tegelijk zijn plicht niet nakwam (lid 5), is mogelijk;
de encoding past dan lid 5 toe, omdat lid 5 de aanspraak geheel ontzegt.

## zt-2026-art3-1 — vermogenstoets

**Artikel:** Wzt art. 3 lid 1 (BWBR0018451, geldend van 01-01-2026; in 2024 art. 2a lid 1, vernummerd
per 06-11-2024), in afwijking van Awir art. 7 lid 3; rendementsgrondslag: Wet IB 2001 art. 5.3; de vrijstelling van art. 5.13 Wet IB
2001 (groene beleggingen) telt niet mee.
**Status:** draft.
**Gewoon Nederlands:** Is uw vermogen op 1 januari hoger dan € 146.011 (2026), of samen met
uw partner — als dat het hele jaar dezelfde partner is — hoger dan € 184.633, dan krijgt u
het hele jaar geen zorgtoeslag. Groene beleggingen tellen hier gewoon mee. (2025: € 141.896 /
€ 179.429; 2024: € 140.213 / € 177.301; 2023, art. 2a: € 127.582 / € 161.329, Stcrt. 2022, 28997; 2022: € 120.020 / € 151.767,
Stcrt. 2021, 47692; 2021: € 118.479 / € 149.819, Stb. 2020, 546 jo. Stcrt. 2020, 67965 — het eerste jaar van de
rendementsgrondslag-toets.) **2020 en eerder:** art. 2a lid 1 (tekst 2020) vergeleek niet de rendementsgrondslag maar de
*grondslag sparen en beleggen* (Wet IB 2001 art. 5.2 lid 1: de rendementsgrondslag op de peildatum voor zover boven het
heffingvrije vermogen; lid 2: voor partners het hele jaar de gezamenlijke rendementsgrondslag boven het heffingvrije vermogen
van beiden) met één bedrag, € 85.767 in 2020 (Stcrt. 2019, 61842), € 84.416 in 2019 (Stcrt. 2018, 61205) en € 83.415 in 2018 (Stcrt.
2017, 65628, van € 82.752). De encoding vraagt ook voor 2018 t/m 2020 de rendementsgrondslag en trekt zelf het heffingvrije vermogen
af (€ 30.846, Wet IB 2001 art. 5.5, tekst 2020; € 30.360, tekst 2019; € 30.000, tekst 2018; tweemaal bij het hele jaar dezelfde
partner), zoals `parameters/2020.yaml`, `2019.yaml` en `2018.yaml` zeggen met `vermogenstoets_basis` en `heffingvrij_vermogen`. Zo
komt 2020 op € 116.613 / € 147.459 uit — precies de bedragen die Stb. 2020, 546 per 2021 als rendementsgrondslag-grens invoerde —
2019 op € 114.776 / € 145.136 en 2018 op € 113.415 / € 143.415 (de toelichting bij Stcrt. 2017, 65628 zegt het zelf zo: 'boven het
heffingvrije vermogen plus € 83.415').
**Code:** `vermogenstoets(rendementsgrondslag, partner, hele_jaar_dezelfde_partner, jaar)`
geeft `geen_aanspraak`, `aanspraak` of `niet_getoetst` (geen vermogen opgegeven); voor 2018 t/m 2020 eerst
grondslag = max(0, rendementsgrondslag − n × heffingvrij vermogen), n = 1 of 2.
**Discretie:** Welke grens geldt bij een partner die niet het hele jaar partner was, zegt lid
1 niet uitdrukkelijk; de encoding geeft dan `undetermined` met het artikel.

## zt-2026-art4 — standaardpremie

**Artikel:** Wzt art. 4; jaarlijkse Regeling vaststelling standaardpremie en bestuursrechtelijke
premies (2026: Stcrt. 2025, 40022, art. 1; 2025: Stcrt. 2024, 38887; 2024: Stcrt. 2023, 32413; 2023: Stcrt. 2022, 32017; 2022: Stcrt. 2021, 47872; 2021: Stcrt. 2020, 62033; 2020: Stcrt. 2019, 64399; 2019: Stcrt. 2018, 66728; 2018: Stcrt. 2017, 68107).
**Status:** draft.
**Gewoon Nederlands:** De standaardpremie is wat een zorgverzekering volgens de minister
gemiddeld kost in dat jaar, premie plus verplicht eigen risico. 2026: € 2.119. 2025: € 2.112. 2024: € 1.987. 2023: € 1.889. 2022: € 1.749. 2021: € 1.705. 2020: € 1.642.
**Code:** parameter.

## zt-2026-art4a — standaardpremie voor verdragsgerechtigden: de woonlandfactor

**Artikel:** Wzt art. 4a lid 1–4 (BWBR0018451, geldend van 01-01-2026; dezelfde tekst in de versie
van 01-01-2025). In 2020 t/m 2024 was dit **art. 3, lid 1–3**, zonder het huidige lid 3: dat lid (verzekerde
aanvrager met een verdragsgerechtigde partner) is per 06-11-2024 ingevoegd (Stb. 2024, 291, art. XIX
onder C); voor 2020 t/m 2024 geeft de encoding in dat geval `undetermined`. Het verhoudingsgetal per land:
Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4 (BWBR0018715, versies 01-01-2024, 01-01-2025 en
01-01-2026; vastgesteld bij Stcrt. 2023, 29907, Stcrt. 2024, 35698 en Stcrt. 2025, 38064; 2023: Stcrt. 2022,
29339, voor vier landen gerectificeerd bij Stcrt. 2022, 32002 vóór de inwerkingtreding; 2022: Stcrt. 2021, 46565, Liechtenstein
gecorrigeerd bij Stcrt. 2021, 47687; 2021: Stcrt. 2020, 53972; 2020: Stcrt. 2019, 58198, waarvan art. II tegelijk de factor voor
Duitsland voor 2017–2019 met terugwerkende kracht verlaagde, zonder effect op de zorgtoeslag; 2019: Stcrt. 2018, 60576; 2018: Stcrt. 2017,
66088, de laatste tabel naar de oude methode, waarvan art. II tegelijk de factor voor Zweden voor 2017 met terugwerkende kracht opnieuw vaststelde), in
`parameters/<jaar>.yaml` onder `woonlandfactoren`. Op 2026-10-07 gemist: de vorige run las art. 1–5 en zocht een art. 2a;
art. 4a staat tussen art. 4 en 5.
**Status:** draft.
**Gewoon Nederlands:** Woont u buiten Nederland en bent u via het CAK verzekerd voor zorg ten
laste van Nederland (een "verdragsgerechtigde", Zvw art. 69), dan telt voor u niet de gewone
standaardpremie, maar de standaardpremie maal de woonlandfactor van uw land: de verhouding
tussen wat zorg daar gemiddeld kost en wat zij in Nederland kost. Voor uw partner geldt
hetzelfde, behalve als uw partner gewoon in Nederland verzekerd is (lid 4). Bent u zelf in
Nederland verzekerd en is uw partner verdragsgerechtigd, dan geldt de woonlandfactor alleen
voor de standaardpremie van uw partner (lid 3).
**Code:** `standaardpremies(...)`: standaardpremie van de aanvrager × woonlandfactor als de
aanvrager verdragsgerechtigd is (lid 1); van de partner × woonlandfactor als de aanvrager
verdragsgerechtigd is en de partner geen Zvw-verzekerde (lid 4), of als de partner zelf
verdragsgerechtigd is (lid 3). De som gaat `zt-2026-art2-1` in. Invoer:
`aanvrager_verdragsgerechtigd`, `partner_verdragsgerechtigd`, `partner_verzekerd`, `woonland`.
**Discretie:** Wie verdragsgerechtigd is (Zvw art. 69) codeert de encoding niet; invoer. De
rekenregel van de Dienst Toeslagen (Berekening zorgtoeslag 2026, stap 5) past bij een
*verzekerde* aanvrager met een partner die noch verzekerde noch verdragsgerechtigde is, de
woonlandfactor toe op de standaardpremie van die partner; lid 4 doet dat alleen bij een partner
van een verdragsgerechtigde. De rekenregel van 2024 (stap 5 onder c) deed het nog anders: op beide
standaardpremies; die van 2023 (stap 5 onder c) was gelijk aan die van 2024. De encoding volgt de tekst en
geeft 2 × standaardpremie; zie `DISCREPANCIES.md` #3 en case `zt-2026-syn-001`.

---

## Niet gecodeerd (de encoding zegt dit expliciet)

- **Wie verzekerde is** (Wzt art. 1 lid 1 onder c, Zvw): invoer. Of een partner in 2020 zijn verzekeringsplicht
  (Zvw art. 2) niet nakwam (`zt-2020-art2-5oud`): invoer.
- **Wie partner is** (Awir art. 3, AWR art. 5a): invoer; zie `../awir/rules.md`.
- **Wat het toetsingsinkomen is** (Awir art. 8): invoer, het inkomensgegeven of het
  wereldinkomen; zie `../awir/rules.md`.
- **Wie verdragsgerechtigd is** (Zvw art. 69): invoer. De woonlandfactor zelf is sinds
  2026-10-08 gecodeerd (`zt-2026-art4a`).
- **Wijzigingen in het jaar** (Awir art. 5): niet gecodeerd. Wel, sinds 2026-10-20: één gelijkblijvende situatie over een
  deel van het jaar (`zt-2026-art2-5`, invoer `maanden_aanspraak`); welke maand meetelt, is invoer.
- **Verblijfsstatus** (Awir art. 9): niet gecodeerd.
- **Afronding van het maandbedrag / de voorschotten** (Awir art. 16): geen tekst gevonden;
  zie `zt-2026-art2-5`. Het minimumbedrag en de afronding van het jaarbedrag zijn sinds
  2026-10-08 wel gecodeerd (`../awir/rules.md`, art. 14 lid 4–5; `DISCREPANCIES.md` #2).
