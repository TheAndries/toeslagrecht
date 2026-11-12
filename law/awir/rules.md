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
**Tekst:** "Ter bepaling van de draagkracht voor de toepassing van een inkomensafhankelijke regeling wordt het toetsingsinkomen, bedoeld in artikel 8, van de belanghebbende en dat van zijn partner in aanmerking genomen." (tekst van 01-01-2026; woordelijk gelijk in alle eenendertig versies van 01-01-2013 t/m 01-01-2029 (elke versiedatum uit de wetstechnische informatie, verbatim gelezen en per paar vergeleken 2026-11-12; `../SOURCES.md` sectie 1). Lid 3 van dit artikel, de vermogenstoets die de Wzt met art. 3 opzijzet, is op 01-01-2021 herschreven, Stb. 2020, 546, en verandert sindsdien elk jaar alleen zijn twee bedragen; lid 6 verandert elk jaar zijn bedrag en sinds 01-01-2026 ook zijn kring, Stb. 2025, 431 — alle bedragen in `parameters/<jaar>.yaml`.)
**Status:** draft.
**Gewoon Nederlands:** Hebt u een partner, dan tellen uw inkomens bij elkaar op.
**Code:** `gezamenlijk_toetsingsinkomen(ti_aanvrager, ti_partner)` = som; zonder partner het
inkomen van de aanvrager alleen.

## awir-2026-art8-1 — toetsingsinkomen

**Artikel:** Awir art. 8 lid 1: "Toetsingsinkomen is: het op het berekeningsjaar betrekking
hebbende inkomensgegeven." Lid 2: niet in Nederland belastbaar inkomen, bij beschikking
vastgesteld, telt erbij.
**Tekst:** lid 1: "Toetsingsinkomen is: het op het berekeningsjaar betrekking hebbende inkomensgegeven." Lid 2: "Niet in Nederland belastbaar inkomen, zoals dat bij beschikking is vastgesteld, wordt in aanvulling op het eerste lid mede als toetsingsinkomen in aanmerking genomen." (tekst van 01-01-2026; beide woordelijk gelijk in alle eenendertig versies van 01-01-2013 t/m 01-01-2029 (elke versiedatum uit de wetstechnische informatie, verbatim gelezen en per paar vergeleken 2026-11-12; `../SOURCES.md` sectie 1).) **Sinds 01-01-2018 lid 3** (Stb. 2017, 517): "Indien zulks leidt tot een ten minste 10 percent lager toetsingsinkomen, wordt bij beëindiging van het partnerschap in het berekeningsjaar, in afwijking in zoverre van het eerste en tweede lid, op verzoek van de belanghebbende bij de berekening van het toetsingsinkomen van de partner: a. geen rekening gehouden met: 1°. belastbaar loon dat is genoten na de beëindiging van het partnerschap; 2°. winst uit een onderneming die na de beëindiging van het partnerschap is gestart; en 3°. belastbaar resultaat uit overige werkzaamheden die na beëindiging van het partnerschap zijn gestart; b. het belastbare loon dat in de periode van partnerschap is genoten tijdsevenredig herleid naar een jaarloon." (tekst van 01-01-2026; van 01-01-2018 t/m 31-12-2024 stond er 'toetsinkomen', verbeterd door Stb. 2024, 440; lid 4 past dit toe op een medebewoner; lid 5–6, tot 2018 lid 3–4, gaan over overlijden; lid 7, sinds 01-01-2025, over kwijtscheldingswinst.) Het verzoek van lid 3 is niet gecodeerd: de encoding neemt het toetsingsinkomen van elke situatie als invoer (`awir-2026-art5`); wie het verzoek doet, voert het verlaagde inkomen van de partner in.
**Status:** draft.
**Gewoon Nederlands:** Uw toetsingsinkomen is uw inkomen zoals de Belastingdienst het voor dat
jaar vaststelt (meestal het verzamelinkomen uit de aangifte, anders het loon). Inkomen van
buiten Nederland telt mee.
**Code:** invoer. De encoding berekent het inkomensgegeven niet.

## awir-2026-art3 — partner

**Artikel:** Awir art. 3 lid 1 (verwijst naar AWR art. 5a) en lid 2 (medebewoners die als
partner gelden: samen een kind, erkend kind, pensioenpartner, samen een woning, beiden
meerderjarig met een minderjarig kind op het adres, e.a.), lid 3–9.
**Tekst:** lid 1 (01-01-2026): "Partner van de belanghebbende is degene die ingevolge artikel 5a, eerste lid en derde tot en met zevende lid, van de Algemene wet inzake rijksbelastingen als partner wordt aangemerkt. Artikel 2, zesde lid, van de Algemene wet inzake rijksbelastingen is van overeenkomstige toepassing." Lid 1 (01-01-2027, Stb. 2026, 326): "De echtgenoot of geregistreerd partner van de belanghebbende wordt als partner van de belanghebbende aangemerkt." Lid 2 (2027), aanhef: "Indien de belanghebbende geen echtgenoot of geregistreerd partner heeft, wordt als partner van de belanghebbende aangemerkt degene die als ingezetene op hetzelfde woonadres als de belanghebbende is ingeschreven in de basisregistratie personen of een daarmee naar aard en strekking overeenkomende registratie buiten Nederland, indien zowel diegene als de belanghebbende de leeftijd van 18 jaar heeft bereikt, en: a. met wie de belanghebbende een notarieel samenlevingscontract is aangegaan; b. uit wiens relatie met de belanghebbende een kind is geboren; c. die een kind van de belanghebbende heeft erkend dan wel van wie een kind door de belanghebbende is erkend; d. die voor de toepassing van een pensioenregeling als partner van de belanghebbende is aangemeld; of e. die samen met de belanghebbende een woning heeft, …" (verbatim gelezen 2026-11-12 in alle eenendertig versies van 01-01-2013 t/m 01-01-2029. Het artikel veranderde op 01-01-2014, 06-01-2014, 01-01-2016, 01-01-2018, 01-01-2021, 01-01-2023, 01-01-2024, 01-01-2025 en 01-01-2027 — welk lid, door welk Staatsblad, in `../SOURCES.md` sectie 1 en `../CHANGES.md`. Van 2013 t/m 2026 bleef de kern staan: lid 1 verwijst naar AWR art. 5a, lid 2 noemt de medebewoners die ook partner zijn, lid 4 (2027: lid 3) kent één partner tegelijk toe.)
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
01-01-2022, 01-01-2026 en 01-01-2027: woordelijk gelijk; op 2026-11-12 in alle eenendertig versies van 01-01-2013 t/m 01-01-2029: het artikel is in vijftien jaar niet veranderd.)
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
de Dienst op de euro). In het dossier sinds 2026-11-05 en in het formulier van de checker sinds 2026-11-08 ('Meer situaties'). Eindigt het partnerschap in het jaar, dan kan de belanghebbende op verzoek het inkomen van de ex-partner ná het einde buiten beschouwing laten (Awir art. 8 lid 3, sinds 01-01-2018, zie `awir-2026-art8-1`); dat verlaagde inkomen is dan de invoer.

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
**Tekst:** "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro’s." (tekst van 01-01-2026; woordelijk gelijk in alle eenendertig versies van 01-01-2013 t/m 01-01-2029 (elke versiedatum uit de wetstechnische informatie, verbatim gelezen en per paar vergeleken 2026-11-12; `../SOURCES.md` sectie 1). Het artikel zelf veranderde wel: lid 7 kwam erbij op 01-01-2017, Stb. 2016, 545 — na vijf jaar is de tegemoetkoming ten minste het voorschot — en lid 1 en 3 noemen sinds 01-01-2024 de Dienst Toeslagen.)
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
**Tekst:** "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen." (tekst van 01-01-2026; woordelijk gelijk in alle eenendertig versies van 01-01-2013 t/m 01-01-2029 (elke versiedatum uit de wetstechnische informatie, verbatim gelezen en per paar vergeleken 2026-11-12; `../SOURCES.md` sectie 1) — het bedrag is nooit geïndexeerd.)
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
