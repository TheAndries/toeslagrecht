# Zorgtoeslag — de regels

Elke regel: een vaste id, het artikel en de versie, de regel in gewoon Nederlands, de
status (`LAW.md`), en wat de regel doet waar de wet ruimte laat. De code staat in
`rules.py`; de bedragen per jaar in `parameters/<jaar>.yaml`. Alles hier is **draft**:
door niemand nagelezen tegen het artikel. Geraadpleegd 2026-10-07.

Wat de encoding nu kan: een verzekerde, met of zonder partner, met het hele jaar dezelfde
situatie. Wat zij nog niet kan staat onderaan onder *Niet gecodeerd*.

---

## zt-2026-art1-1f — drempelinkomen

**Artikel:** Wet op de zorgtoeslag art. 1 lid 1 onder f (BWBR0018451, geldend van 01-01-2026);
Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder b. Dezelfde tekst in de versie
van 01-01-2025.
**Status:** draft.
**Gewoon Nederlands:** Het drempelinkomen is 108% van twaalf keer het minimumloon per maand
dat in januari van het jaar geldt. Verdient u minder dan dit bedrag, dan krijgt u de
hoogste zorgtoeslag.
**Code:** `drempelinkomen(jaar)` = 108/100 × 12 × `wml_maandbedrag_januari`. 2026:
108% × 12 × € 2.294,40 = € 29.735,424. 2025: € 28.405,728.
**Discretie:** De wet zegt niets over afronden. De encoding rondt niet af. De Dienst
Toeslagen rekent met een op hele euro's afgerond drempelinkomen (€ 28.406 in 2025, zie
`DISCREPANCIES.md` #1). Tot een tekst voor dat afronden gevonden is, laat de encoding de
onafgeronde waarde staan en toont het verschil.

## zt-2026-art2-2 — normpremie

**Artikel:** Wzt art. 2 lid 2 en lid 3 (BWBR0018451, geldend van 01-01-2026; percentages per
jaar in `parameters/`).
**Status:** draft.
**Gewoon Nederlands:** De normpremie is wat de wet vindt dat u zelf aan premie kunt betalen.
Zonder partner: 1,912% van het drempelinkomen. Met partner: 4,289% van het drempelinkomen.
Daarbovenop, voor beiden: 13,730% van het deel van uw (gezamenlijke) toetsingsinkomen dat
boven het drempelinkomen uitkomt. (Percentages 2026; 2025: 1,896% / 4,273% / 13,700%.)
**Code:** `normpremie(toetsingsinkomen, partner, jaar)`. Het deel boven het drempelinkomen is
nul als het toetsingsinkomen onder het drempelinkomen ligt ("voor zover ... te boven gaat").
**Discretie:** geen.

## zt-2026-art2-1 — aanspraak

**Artikel:** Wzt art. 2 lid 1 (BWBR0018451, geldend van 01-01-2026).
**Status:** draft.
**Gewoon Nederlands:** Is uw normpremie lager dan de standaardpremie, dan is uw zorgtoeslag
het verschil. Hebt u een partner, dan telt de standaardpremie twee keer en hebben u en uw
partner samen één aanspraak.
**Code:** `aanspraak_jaar` = (2 × standaardpremie als partner, anders 1 ×) − normpremie, en
nul als dat negatief is.
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
**Discretie:** De wet zegt niet hoe het maandbedrag wordt afgerond. De Dienst Toeslagen
rondt in haar rekenvoorbeelden naar beneden af op hele euro's (131,12 → 131; 98,06 → 98;
89,89 → 89). De encoding toont het onafgeronde bedrag en zegt erbij dat de Dienst zo afrondt
en dat de wettelijke grondslag daarvoor nog niet gevonden is. Een jaar met wijzigingen
(partner erbij, 18 worden, overlijden; Awir art. 5) codeert de encoding nog niet.

## zt-2026-art3-1 — vermogenstoets

**Artikel:** Wzt art. 3 lid 1 (BWBR0018451, geldend van 01-01-2026), in afwijking van Awir
art. 7 lid 3; rendementsgrondslag: Wet IB 2001 art. 5.3; de vrijstelling van art. 5.13 Wet IB
2001 (groene beleggingen) telt niet mee.
**Status:** draft.
**Gewoon Nederlands:** Is uw vermogen op 1 januari hoger dan € 146.011 (2026), of samen met
uw partner — als dat het hele jaar dezelfde partner is — hoger dan € 184.633, dan krijgt u
het hele jaar geen zorgtoeslag. Groene beleggingen tellen hier gewoon mee.
**Code:** `vermogenstoets(rendementsgrondslag, partner, hele_jaar_dezelfde_partner, jaar)`
geeft `geen_aanspraak`, `aanspraak` of `niet_getoetst` (geen vermogen opgegeven).
**Discretie:** Welke grens geldt bij een partner die niet het hele jaar partner was, zegt lid
1 niet uitdrukkelijk; de encoding geeft dan `undetermined` met het artikel.

## zt-2026-art4 — standaardpremie

**Artikel:** Wzt art. 4; jaarlijkse Regeling vaststelling standaardpremie en bestuursrechtelijke
premies (2026: Stcrt. 2025, 40022, art. 1; 2025: Stcrt. 2024, 38887).
**Status:** draft.
**Gewoon Nederlands:** De standaardpremie is wat een zorgverzekering volgens de minister
gemiddeld kost in dat jaar, premie plus verplicht eigen risico. 2026: € 2.119. 2025: € 2.112.
**Code:** parameter.

---

## Niet gecodeerd (de encoding zegt dit expliciet)

- **Wie verzekerde is** (Wzt art. 1 lid 1 onder c, Zvw): invoer.
- **Wie partner is** (Awir art. 3, AWR art. 5a): invoer; zie `../awir/rules.md`.
- **Wat het toetsingsinkomen is** (Awir art. 8): invoer, het inkomensgegeven of het
  wereldinkomen; zie `../awir/rules.md`.
- **Woonlandfactor** voor verdragsgerechtigden buiten Nederland (Dienst Toeslagen,
  Berekening zorgtoeslag 2025, stap 5): de wettelijke grondslag is nog niet getraceerd; niet
  gecodeerd, zie `../SOURCES.md` open item 3. Case `zt-2025-pub-003` wacht hierop.
- **Wijzigingen in het jaar** (Awir art. 5): niet gecodeerd.
- **Verblijfsstatus** (Awir art. 9): niet gecodeerd.
- **Een minimumbedrag** waaronder geen toeslag wordt toegekend of uitbetaald: in de gelezen
  tekst niet gevonden; de Dienst Toeslagen publiceert een inkomensgrens die lager ligt dan
  waar de formule op nul uitkomt (`DISCREPANCIES.md` #2).
