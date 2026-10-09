# Zorgtoeslag — de regels

Elke regel: een vaste id, het artikel en de versie, de regel in gewoon Nederlands, de
status (`LAW.md`), en wat de regel doet waar de wet ruimte laat. De code staat in
`rules.py`; de bedragen per jaar in `parameters/<jaar>.yaml`. Alles hier is **draft**:
door niemand nagelezen tegen het artikel. Geraadpleegd 2026-10-07, 2026-10-08 en 2026-10-09.

**Jaren en artikelnummers.** Gecodeerd: 2026, 2025 en 2024. De regel-id's dragen de nummering van 2026.
In de tekst van 2024 (geldend t/m 05-11-2024) heette de vermogenstoets **art. 2a** en de woonlandfactor
**art. 3**; per 06-11-2024 (Stb. 2024, 291, art. XIX) zijn zij art. 3 en art. 4a geworden en is art. 4a
lid 3 ingevoegd. De stappen citeren per jaar het artikelnummer van dat jaar (`parameters/2024.yaml`,
`artikel_vermogenstoets`, `artikel_woonlandfactor`). Zie `../CHANGES.md`.

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
4,256% / 13,670%, in 2024 nog in de wettekst van lid 3 zelf. Bron: Besluit percentages drempel- en
toetsingsinkomen zorgtoeslag, Stb. 2022, 472 → Stb. 2024, 351 → Stb. 2025, 412.)
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

**Artikel:** Wzt art. 2 lid 5 (BWBR0018451, geldend van 01-01-2026).
**Status:** draft.
**Gewoon Nederlands:** De zorgtoeslag wordt voor elke maand apart bepaald.
**Code:** Voor een situatie die het hele jaar gelijk blijft: `aanspraak_maand` =
`aanspraak_jaar` / 12, onafgerond.
**Discretie:** De wet rondt het jaarbedrag van de tegemoetkoming af (Awir art. 14 lid 4,
`../awir/rules.md`), niet het maandbedrag. De Dienst Toeslagen publiceert hele euro's per maand.
Haar tabellen (alle rijen 2025 en 2026, `cases/zt-*-tab-*`) laten zien hoe: het afgeronde
jaarbedrag gedeeld door twaalf, naar beneden afgerond (2025 met partner, € 34.000: € 2.243,83 →
€ 2.244 → € 187; niet € 186,99 → € 186). Haar rekenvoorbeelden drukken het onafgeronde maandbedrag
af en ronden naar beneden (2024: 123,59 → 123; 109,50 → 109; 2025: 131,12 → 131; 2026: 129,20 → 129),
wat met beide lezingen strookt. Geen grondslag gevonden in Wzt, Awir of Uitvoeringsregeling Awir
(2026-10-08, 2026-10-09); het maandbedrag is een voorschot (Awir art. 16) en hoe dat in termijnen
wordt gesplitst, staat niet in de gelezen teksten. De encoding toont het onafgeronde maandbedrag
(`aanspraak_maand`) en de praktijk (`aanspraak_maand_afgerond_praktijk`) apart; `DISCREPANCIES.md` #5. Een jaar met wijzigingen (partner erbij, 18
worden, overlijden; Awir art. 5) codeert de encoding nog niet.

## zt-2026-art3-1 — vermogenstoets

**Artikel:** Wzt art. 3 lid 1 (BWBR0018451, geldend van 01-01-2026; in 2024 art. 2a lid 1, vernummerd
per 06-11-2024), in afwijking van Awir art. 7 lid 3; rendementsgrondslag: Wet IB 2001 art. 5.3; de vrijstelling van art. 5.13 Wet IB
2001 (groene beleggingen) telt niet mee.
**Status:** draft.
**Gewoon Nederlands:** Is uw vermogen op 1 januari hoger dan € 146.011 (2026), of samen met
uw partner — als dat het hele jaar dezelfde partner is — hoger dan € 184.633, dan krijgt u
het hele jaar geen zorgtoeslag. Groene beleggingen tellen hier gewoon mee. (2025: € 141.896 /
€ 179.429; 2024: € 140.213 / € 177.301.)
**Code:** `vermogenstoets(rendementsgrondslag, partner, hele_jaar_dezelfde_partner, jaar)`
geeft `geen_aanspraak`, `aanspraak` of `niet_getoetst` (geen vermogen opgegeven).
**Discretie:** Welke grens geldt bij een partner die niet het hele jaar partner was, zegt lid
1 niet uitdrukkelijk; de encoding geeft dan `undetermined` met het artikel.

## zt-2026-art4 — standaardpremie

**Artikel:** Wzt art. 4; jaarlijkse Regeling vaststelling standaardpremie en bestuursrechtelijke
premies (2026: Stcrt. 2025, 40022, art. 1; 2025: Stcrt. 2024, 38887; 2024: Stcrt. 2023, 32413).
**Status:** draft.
**Gewoon Nederlands:** De standaardpremie is wat een zorgverzekering volgens de minister
gemiddeld kost in dat jaar, premie plus verplicht eigen risico. 2026: € 2.119. 2025: € 2.112. 2024: € 1.987.
**Code:** parameter.

## zt-2026-art4a — standaardpremie voor verdragsgerechtigden: de woonlandfactor

**Artikel:** Wzt art. 4a lid 1–4 (BWBR0018451, geldend van 01-01-2026; dezelfde tekst in de versie
van 01-01-2025). In 2024 was dit **art. 3, lid 1–3**, zonder het huidige lid 3: dat lid (verzekerde
aanvrager met een verdragsgerechtigde partner) is per 06-11-2024 ingevoegd (Stb. 2024, 291, art. XIX
onder C); voor 2024 geeft de encoding in dat geval `undetermined`. Het verhoudingsgetal per land:
Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4 (BWBR0018715, versies 01-01-2024, 01-01-2025 en
01-01-2026; vastgesteld bij Stcrt. 2023, 29907, Stcrt. 2024, 35698 en Stcrt. 2025, 38064), in
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
standaardpremies. De encoding volgt de tekst en geeft 2 × standaardpremie; zie `DISCREPANCIES.md` #3
en case `zt-2026-syn-001`.

---

## Niet gecodeerd (de encoding zegt dit expliciet)

- **Wie verzekerde is** (Wzt art. 1 lid 1 onder c, Zvw): invoer.
- **Wie partner is** (Awir art. 3, AWR art. 5a): invoer; zie `../awir/rules.md`.
- **Wat het toetsingsinkomen is** (Awir art. 8): invoer, het inkomensgegeven of het
  wereldinkomen; zie `../awir/rules.md`.
- **Wie verdragsgerechtigd is** (Zvw art. 69): invoer. De woonlandfactor zelf is sinds
  2026-10-08 gecodeerd (`zt-2026-art4a`).
- **Wijzigingen in het jaar** (Awir art. 5): niet gecodeerd.
- **Verblijfsstatus** (Awir art. 9): niet gecodeerd.
- **Afronding van het maandbedrag / de voorschotten** (Awir art. 16): geen tekst gevonden;
  zie `zt-2026-art2-5`. Het minimumbedrag en de afronding van het jaarbedrag zijn sinds
  2026-10-08 wel gecodeerd (`../awir/rules.md`, art. 14 lid 4–5; `DISCREPANCIES.md` #2).
