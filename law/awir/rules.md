# Awir — de gedeelde regels

Algemene wet inkomensafhankelijke regelingen (BWBR0018472), versie geldend van 01-01-2026
t/m 30-09-2026, geraadpleegd 2026-10-07 en (volledige tekst) 2026-10-08. De versie van
01-10-2026 (Stb. 2025, 431, inwerkingtreding Stb. 2026, 293) wijzigt alleen art. 13 en 13a
(berichtenverkeer met de Dienst Toeslagen: de belanghebbende kiest tussen papier en
elektronisch); geen rekenregel verandert (`../CHANGES.md`). Alles **draft**.

## awir-2026-art7-1 — draagkracht: het inkomen van beiden telt

**Artikel:** Awir art. 7 lid 1: "Ter bepaling van de draagkracht voor de toepassing van een
inkomensafhankelijke regeling wordt het toetsingsinkomen, bedoeld in artikel 8, van de
belanghebbende en dat van zijn partner in aanmerking genomen."
**Status:** draft.
**Gewoon Nederlands:** Hebt u een partner, dan tellen uw inkomens bij elkaar op.
**Code:** `gezamenlijk_toetsingsinkomen(ti_aanvrager, ti_partner)` = som; zonder partner het
inkomen van de aanvrager alleen.

## awir-2026-art8-1 — toetsingsinkomen

**Artikel:** Awir art. 8 lid 1: "Toetsingsinkomen is: het op het berekeningsjaar betrekking
hebbende inkomensgegeven." Lid 2: niet in Nederland belastbaar inkomen, bij beschikking
vastgesteld, telt erbij.
**Status:** draft.
**Gewoon Nederlands:** Uw toetsingsinkomen is uw inkomen zoals de Belastingdienst het voor dat
jaar vaststelt (meestal het verzamelinkomen uit de aangifte, anders het loon). Inkomen van
buiten Nederland telt mee.
**Code:** invoer. De encoding berekent het inkomensgegeven niet.

## awir-2026-art3 — partner

**Artikel:** Awir art. 3 lid 1 (verwijst naar AWR art. 5a) en lid 2 (medebewoners die als
partner gelden: samen een kind, erkend kind, pensioenpartner, samen een woning, beiden
meerderjarig met een minderjarig kind op het adres, e.a.), lid 3–9.
**Status:** draft.
**Gewoon Nederlands:** Of iemand uw toeslagpartner is, hangt af van trouwen, geregistreerd
partnerschap, samen een kind, samen een huis, of samenwonen met een kind. De encoding
beslist dit niet; u geeft het op.
**Code:** invoer (`partner: true/false`). Een partnerbepaling komt pas met huurtoeslag.

## awir-2026-art5 — wijziging in de maand

**Artikel:** Awir art. 5: een wijziging in de omstandigheden of de leeftijd die zich na de
eerste dag van een maand voordoet, telt vanaf de eerste dag van de volgende maand.
**Status:** draft.
**Gewoon Nederlands:** Verandert er iets halverwege een maand, dan geldt dat pas vanaf de
maand erna.
**Code:** nog niet gecodeerd; de encoding rekent alleen een onveranderd jaar.

## awir-2026-art14-4 — afronding van de tegemoetkoming

**Artikel:** Awir art. 14 lid 4: "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond
op hele euro's." (BWBR0018472, geldend van 01-01-2026; dezelfde tekst in de versies van
01-01-2025 en 01-01-2024, verbatim gelezen 2026-10-08 en 2026-10-09. De wetstechnische informatie
van art. 14 vermeldt geen enkele wijziging van het artikel, geraadpleegd 2026-10-09.) De bedragen
van art. 7 lid 3, 4 en 6 en art. 26a per jaar staan in `parameters/<jaar>.yaml` (2024, 2025:
Stcrt. 2024, 38492; 2026: Stcrt. 2025, 40487); de zorgtoeslag gebruikt ze niet (Wzt art. 3 lid 1).
**Status:** draft.
**Gewoon Nederlands:** Het jaarbedrag van uw toeslag wordt afgerond op hele euro's, op de
gewone manier: vijftig cent of meer gaat omhoog.
**Code:** `rond_tegemoetkoming(bedrag, awir)`: `quantize(1, ROUND_HALF_UP)` op het jaarbedrag
dat de toeslagwet geeft (voor de zorgtoeslag: `zt-2026-art2-1`, na `-art2-4`).
**Discretie:** "Rekenkundig" leest de encoding als half-omhoog. Het artikel rondt het bedrag
van de tegemoetkoming (per berekeningsjaar) af, niet een maandbedrag of een tussenstap; de
Dienst Toeslagen rondt ook het drempelinkomen (zie `../zorgtoeslag/rules.md`,
`zt-2026-art1-1f`) en het maandbedrag (`zt-2026-art2-5`), waarvoor hier geen grondslag staat.

## awir-2026-art14-5 — minimumbedrag

**Artikel:** Awir art. 14 lid 5: "Een tegemoetkoming wordt niet toegekend indien deze minder
dan € 24 zou bedragen." (BWBR0018472, geldend van 01-01-2026; dezelfde tekst in de versie van
01-01-2025.) Bedrag in `parameters/<jaar>.yaml`, `minimum_tegemoetkoming`.
**Status:** draft.
**Gewoon Nederlands:** Komt uw toeslag uit onder € 24 per jaar (€ 2 per maand), dan krijgt u
niets. Hierdoor ligt de inkomensgrens die de Belastingdienst publiceert (2026: € 40.857 zonder,
€ 51.142 met partner) lager dan het punt waar de formule op nul uitkomt.
**Code:** na `awir-2026-art14-4`: is het afgeronde bedrag kleiner dan € 24, dan `tegemoetkoming`
= 0. Volgorde: eerst afronden, dan toetsen — de volgorde van lid 4 en 5, en de volgorde die de
gepubliceerde grenzen reproduceert (€ 23,5x wordt € 24 en wordt toegekend; `zt-2026-pub-011`,
`zt-2025-pub-004`).
**Discretie:** Of "zou bedragen" het afgeronde of het onafgeronde bedrag bedoelt, zegt de tekst
niet uitdrukkelijk; de encoding kiest het afgeronde bedrag op de twee gronden hierboven en
noemt dat hier. Bij een andere lezing verschuift de grens 2026 met partner van € 51.142 naar
€ 51.138 en zonder partner van € 40.856 naar € 40.852.
