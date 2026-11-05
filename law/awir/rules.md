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

**Artikel:** Awir art. 5 (BWBR0018472): "Voor de toepassing van deze wet en de daarop berustende bepalingen alsmede
voor de toepassing van inkomensafhankelijke regelingen, wordt een wijziging in de omstandigheden en van de leeftijd
van de belanghebbende, de partner of een medebewoner die zich voordoet na de eerste dag van de maand, in aanmerking
genomen vanaf de eerste dag van de daaropvolgende maand." (verbatim gelezen 2026-11-05 in de versies geldend van
01-01-2022, 01-01-2026 en 01-01-2027: woordelijk gelijk.)
**Status:** draft.
**Gewoon Nederlands:** Verandert er iets halverwege een maand, dan geldt dat pas vanaf de
maand erna. Had u een deel van het jaar een partner, dan telt elke maand met de situatie van de eerste dag van die
maand.
**Code (sinds 2026-11-05):** `bereken_perioden(jaar, par, perioden, awir)` in `../zorgtoeslag/rules.py` en
`berekenPerioden` in `site/zorgtoeslag-regels.js`. Invoer `perioden`: de situaties van het jaar in volgorde, elk met
`maanden` (1–12, samen hoogstens 12) en de gewone invoer van één situatie. Welke maand de eerste van een nieuwe
situatie is, bepaalt dit artikel (de maand ná de verandering); het aantal maanden per situatie is invoer, de
encoding telt geen datums. Elke situatie wordt eerst als heel jaar berekend — het toetsingsinkomen is een jaarbedrag
(art. 7 lid 1, art. 8), dus het hele jaarinkomen van een partner telt in de maanden van het partnerschap, zoals
Rechtbank Den Haag 11-12-2024, ECLI:NL:RBDHA:2024:21766, r.o. 5 ('geen ruimte om de draagkracht per maand te
berekenen') het zegt — en telt dan voor zoveel twaalfden mee als zij maanden had (Wzt art. 2 lid 5,
`../zorgtoeslag/rules.md` `zt-2026-art2-5`). Art. 14 lid 4 en 5 gelden één keer, op de som. Eerste voorbeeld:
`zt-2022-rul-017` (zes maanden met, zes zonder partner: € 677,89 + € 667,93 = € 1.345,82 → € 1.346, het voorschot van
de Dienst op de euro). Nog niet in het formulier van de checker; wel in het dossier.

## awir-2026-art14-4 — afronding van de tegemoetkoming

**Artikel:** Awir art. 14 lid 4: "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond
op hele euro's." (BWBR0018472, geldend van 01-01-2026; dezelfde tekst in de versies van
01-01-2025 en 01-01-2024, verbatim gelezen 2026-10-08 en 2026-10-09. De wetstechnische informatie
van art. 14 vermeldt geen enkele wijziging van het artikel, geraadpleegd 2026-10-09.) De bedragen
van art. 7 lid 3, 4 en 6 en art. 26a per jaar staan in `parameters/<jaar>.yaml` (2024, 2025:
Stcrt. 2024, 38492; 2026: Stcrt. 2025, 40487; 2023: tekst van 01-01-2023, verbatim gelezen 2026-10-11, ontstaan
uit Stcrt. 2022, 32674; 2022: Stcrt. 2021, 48308; 2021: tekst van 01-01-2021, verbatim gelezen 2026-10-13 — het eerste jaar
van de rendementsgrondslag-toets van art. 7 lid 3, Wet aanpassing box 3, Stb. 2020, 546, art. III, en lid 6 uit
Stcrt. 2020, 64406; 2020: tekst van 01-01-2020, verbatim gelezen 2026-10-14 — art. 7 lid 3 noemde toen geen bedrag maar
ontzegde de tegemoetkoming zodra voordeel uit sparen en beleggen in aanmerking werd genomen, lid 6 € 4.964); de zorgtoeslag
gebruikt ze niet (Wzt art. 3 lid 1; in 2020 t/m 2024 art. 2a lid 1).
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
