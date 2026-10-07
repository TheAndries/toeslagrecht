# Awir — de gedeelde regels

Algemene wet inkomensafhankelijke regelingen (BWBR0018472), versie geldend van 01-01-2026
t/m 30-09-2026, geraadpleegd 2026-10-07. Een nieuwe versie geldt vanaf 01-10-2026
(Stb. 2025, 431); wat daarin veranderde is nog niet vastgesteld (`../SOURCES.md`). Alles
**draft**.

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
