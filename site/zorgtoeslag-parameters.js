/* Gegenereerd door tools/build.py op 2026-10-28 uit law/zorgtoeslag/parameters/*.yaml en law/awir/parameters/*.yaml. Niet bewerken: de yaml-bestanden zijn de bron en dragen bij elk getal zijn artikel. Licentie: CC BY-SA 4.0 (LICENSE-DATA). */
var PARAMETERS = {
 "gegenereerd": "2026-10-28",
 "zorgtoeslag": {
  "2013": {
   "jaar": 2013,
   "status": "draft",
   "geraadpleegd": "2026-10-25",
   "versie": "BWBR0018451, geldend van 01-01-2013 t/m 31-12-2013 (verbatim gelezen 2026-10-24 en 2026-10-25); de enige tekstversie van 2013",
   "versie_opmerking": "Ontstaansbronnen per 01-01-2013 (wetstechnische informatie, gelezen 2026-10-25): Stb. 2012, 204 (art. 1 lid 2 en art. 2a, inwerkingtreding Stb. 2012, 383); Stb. 2012, 669 (art. 2a lid 1, slotvolzin); Stb. 2012, 627 samen met Stb. 2011, 620 (art. 2 lid 3: de percentages 2013); Stb. 2011, 288 (art. 1 lid 1 onder f, inwerkingtreding Stb. 2012, 45). De tekst van 01-01-2012 verschilt van die van 01-01-2013 in art. 1 lid 1 onder f (de zinsnede over het werknemersaandeel Wfsv en de vergoeding Zvw art. 46), art. 1 lid 2, art. 2 lid 3 (2,930% / 5,530% / 5,435%) en het ontbreken van art. 2a — verbatim vergeleken 2026-10-25, art. 1 t/m 5. De tekst van 01-01-2014 verschilt van die van 2013 alleen in art. 2 lid 3 (2,410% / 5,210% / 9,118%) en art. 2a lid 1 (€ 81.360) — verbatim vergeleken 2026-10-24.",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2013)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2013)",
   "artikel_maandbepaling": "Wzt art. 2 lid 6 (tekst 2013; sinds 01-01-2021 lid 5)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2013 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "art2_lid5_oud_aanwezig": true,
   "art2_lid5_oud": {
    "artikel": "Wet op de zorgtoeslag art. 2 lid 5 (tekst 2013; vervallen per 01-01-2021)",
    "bron": "BWBR0018451, geldend van 01-01-2013 t/m 31-12-2013 (verbatim gelezen 2026-10-25; dezelfde tekst in 2012 en in 2014 t/m 2020). Vervallen bij Wet verbetering uitvoerbaarheid toeslagen, Stb. 2020, 543, art. III onder 2 (lid 6–8 vernummerd tot 5–7, onder 3)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2013-01-01",
    "geldig_van": "2013-01-01",
    "geldig_tot": "2013-12-31",
    "tekst": "In afwijking van het eerste lid heeft een verzekerde met een partner die niet heeft voldaan aan de voor hem op grond van artikel 2 van de Zorgverzekeringswet geldende verplichting zich krachtens een zorgverzekering te verzekeren, geen aanspraak op een zorgtoeslag.",
    "opmerking": "Invoer: partner_verzekeringsplicht_niet_nagekomen (ja/nee/onbekend). Of de partner verzekeringsplichtig was en die plicht niet nakwam (Zvw art. 2) codeert de encoding niet; het is invoer. Niet opgegeven: gerekend alsof nagekomen, met een noot."
   },
   "vermogenstoets_basis": "grondslag_sparen_en_beleggen",
   "maand_afronding_opmerking": "Geen parameter maand_afronding_praktijk: voor 2013 is geen rekenvoorbeeld van de Dienst gelezen (de leaflet Berekening zorgtoeslag 2013 is niet gevonden: tg0821z30fd, z33fd en z34fd zijn op 2026-10-25 een 404, z31fd was dat op 2026-10-11 en z32fd is de leaflet 2023; SOURCES.md). De encoding gebruikt de standaard 'naar_beneden' (DISCREPANCIES.md #5) en zegt dat in het resultaat; 2022 rondde rekenkundig (#8), dus 2013 is onbekend. Uitkomsten van de Dienst voor 2013 uit de rechtspraak: SOURCES.md §4 en de cases zt-2013-rul-*, voor zover gelezen.",
   "standaardpremie": {
    "waarde": "1478",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie 2013, art. 1",
    "bron": "Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 4 december 2012, kenmerk Z-3141539, houdende vaststelling van de standaardpremie 2013, Stcrt. 2012, 25514 (primaire tekst gelezen 2026-10-25; het Stcrt.-nummer uit de wetstechnische informatie van BWBR0032391); geconsolideerd BWBR0032391 (geldend van 01-01-2013; gevonden via de wetstechnische informatie van Wzt art. 4). Toelichting: berekende gemiddelde nominale premie 2013 € 1.281 (CPB, op basis van de werkelijke nominale premies 2013) plus het gemiddeld verplicht eigen risico € 197 van 'een verzekerde die geen recht heeft op compensatie van het verplicht eigen risico, dus een niet chronisch zieke' (de tekst van art. 4 van 2013 zonderde die verzekerden uit); 'Bij de vaststelling van de standaardpremie worden de kortingen op collectiviteitscontracten niet meegenomen' — in 2014 wél, als uitdrukkelijke beleidswijziging (Stcrt. 2013, 35060). 2012: niet gelezen (Regeling vaststelling standaardpremie 2012, BWBR0030719, genoemd op de informatiepagina van art. 4). 2014: € 1.329 (Stcrt. 2013, 35060). Maxima uit de tekst 2013: zonder partner € 1.060 (€ 1.478 − 2,195% × € 19.043,424 = € 1.059,997), met partner € 2.062 (€ 2.956 − 4,695% × € 19.043,424 = € 2.061,91)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2012-25514.html",
    "geldig_van": "2013-01-01",
    "tekst": "De standaardpremie wordt voor het jaar 2013 vastgesteld op € 1478,–."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1469.40",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2013 (in 2013 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Regeling van de Staatssecretaris van Sociale Zaken en Werkgelegenheid van 12 oktober 2012, ASEA/SAS/2012/14610, tot aanpassing van het wettelijk minimumloon per 1 januari 2013, Stcrt. 2012, 21293, art. 1 onder a (primaire tekst gelezen 2026-10-25; toelichting: aanpassingspercentage na afronding 0,91%, 'Na wettelijke afronding bedraagt het wettelijk minimumloon per 1 januari 2013 € 1469,40 per maand'). De geconsolideerde WML-tekst van 01-01-2013 (BWBR0002638, geldend t/m 30-06-2013) drukt in art. 8 nog '€ 1264,80' af met het geldende bedrag als redactionele noot ('per 1 januari 2013: € 1469,40'); de wetstechnische informatie noemt Stcrt. 2012, 21293 als ontstaansbron per 01-01-2013. Het bedrag per 1 juli 2012 is niet gelezen. Per 1 juli 2013: € 1.477,80 (Stcrt. 2013, 11355, gelezen 2026-10-24) — niet gebruikt, art. 1 onder f neemt januari",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2012-21293.html",
    "geldig_van": "2013-01-01",
    "tekst": "a. € 1469,40;"
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f (tekst 2013, de eerste met deze definitie: Wet uniformering loonbegrip, Stb. 2011, 288, art. XXIV onder A)",
    "bron": "BWBR0018451, geldend van 01-01-2013 t/m 31-12-2013 (verbatim). Tot en met 2012 luidde onderdeel f '... bedoelde bedrag per maand, verminderd met het werknemersaandeel in de premie, bedoeld in artikel 25, tweede lid, van de Wet financiering sociale verzekeringen en vermeerderd met de vergoeding ingevolge artikel 46, eerste lid, van de Zorgverzekeringswet over dat loon' (tekst van 01-01-2012, gelezen 2026-10-25); de Wul liet die zinsnede vervallen (Stb. 2011, 288, gelezen 2026-10-25) en Stb. 2012, 627 compenseerde dat met +0,25 punt op de drie percentages",
    "url": "https://wetten.overheid.nl/BWBR0018451/2013-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.469,40 = € 19.043,424. Hoe de Dienst Toeslagen dit in 2013 'vastgesteld' heeft is niet gelezen (leaflet 2013 niet gevonden). De inkomensgrenzen uit de tekst staan in de cases zt-2013-syn-040..043 (laatste euro met recht, Awir art. 14 lid 4-5): € 30.939 zonder en € 42.438 met partner; een afgerond drempelinkomen (€ 19.043 of € 19.044, DISCREPANCIES.md #1) verschuift ze in 2013 niet, net als in 2014."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "2.195",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2013: 'voor een verzekerde zonder partner op 2,195% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2013 t/m 31-12-2013 (verbatim). Vastgesteld bij Stb. 2012, 627 (besluit van 30 november 2012 tot wijziging van het Besluit percentages drempel- en toetsingsinkomen zorgtoeslag in verband met gewijzigde percentages met ingang van het berekeningsjaar 2013), art. I, rij 2013 — de eerste rij van dat besluit; nota van toelichting tabel 1 (rij 2013): oorspronkelijk 2,70%, na maatregel 2010 2,745%, na maatregel 2011 3,145%, Wul +0,25, compensatie verhoging verplicht eigen risico −0,60, koopkrachtreparatiepakket −0,60, 'na huidige maatregel' 2,195%; primaire tekst gelezen 2026-10-24 en 2026-10-25. De tekst van 01-01-2012 (gelezen 2026-10-25): 2,930%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2013-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "4.695",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2013: 'voor verzekerden met een partner vastgesteld op 4,695% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2013 t/m 31-12-2013 (verbatim). Stb. 2012, 627, art. I, rij 2013; tabel 1 (rij 2013): oorspronkelijk 5,00%, na maatregel 2010 5,045%, na maatregel 2011 6,045%, Wul +0,25, compensatie eigen risico −1,20, koopkrachtreparatiepakket −0,40, 'na huidige maatregel' 4,695%. De tekst van 01-01-2012 (gelezen 2026-10-25): 5,530%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2013-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "8.713",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2013: 'vermeerderd met 8,713% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner)",
    "bron": "BWBR0018451, geldend van 01-01-2013 t/m 31-12-2013 (verbatim); Stb. 2012, 627, art. I, rij 2013 (toelichting: Wul +0,25, compensatie eigen risico +0,923, koopkrachtreparatiepakket +1,70 — samen +2,873 punt op het afbouwpercentage; de tussenrij 'na maatregel 2011' voor 2013 is uit de tabel niet leesbaar overgenomen en staat hier niet; 'een daling in 2013 van het aantal huishoudens met een zorgtoeslag met 300.000'). De tekst van 01-01-2012 (gelezen 2026-10-25): 5,435% — de sprong van 2013 (+3,278 punt) is naast die van 2015 (+4,282 punt, Stb. 2014, 488) de grootste van de reeks",
    "url": "https://wetten.overheid.nl/BWBR0018451/2013-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2013 t/m 31-12-2013 (verbatim, zelfde tekst als 2012 en 2014–2026). Gevolgd door lid 5 (oud), zie art2_lid5_oud",
    "url": "https://wetten.overheid.nl/BWBR0018451/2013-01-01"
   },
   "heffingvrij_vermogen": {
    "waarde": "21139",
    "artikel": "Wet inkomstenbelasting 2001 art. 5.5 (tekst 2013); art. 5.2 lid 1 (grondslag sparen en beleggen = rendementsgrondslag op de peildatum voor zover boven het heffingvrije vermogen) en lid 2 (partners het gehele jaar: de gezamenlijke rendementsgrondslag voor zover boven het heffingvrije vermogen van de belastingplichtige en zijn partner)",
    "bron": "BWBR0011353, geldend van 01-01-2013 t/m 14-01-2013 (verbatim gelezen 2026-10-24 en 2026-10-25: 'Het heffingvrije vermogen bedraagt € 21 139.'); gelijk aan de tekst van 01-01-2012 t/m 30-06-2012 (gelezen 2026-10-25: € 21 139) en aan die van 01-01-2014 (gelezen 2026-10-24). De Wet IB had in 2013 zestien tekstversies; de tussenliggende zijn niet gelezen — art. 5.5 wordt alleen per 1 januari bijgesteld, en de Bijstellingsregeling directe belastingen 2013 (Stcrt. 2012, 26314, gelezen 2026-10-25) past art. 5.5 niet aan en zegt waarom: 'Op grond van artikel XVIII van de Wet uitwerking fiscale maatregelen Begrotingsakkoord 2013 vinden voor het jaar 2013 de artikelen 10.1 en 10.3, tweede lid, van de Wet IB 2001 ... geen toepassing. De ingevolge die bepalingen te indexeren bedragen worden dus voor het jaar 2013 – in tegenstelling tot eerdere jaren – niet geïndexeerd' (die wet: Stb. 2012, 321, wet van 12 juli 2012; art. XVIII zelf niet gelezen). Nodig omdat Wzt art. 2a lid 1 (tekst 2013) op de grondslag sparen en beleggen rust; de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen af (éénmaal zonder partner, tweemaal met het hele jaar dezelfde partner). Effectieve grenzen 2013 op de rendementsgrondslag: € 101.139 / € 122.278. 2014: € 21.139, opnieuw niet geïndexeerd (Belastingplan 2014 art. XXXIV)",
    "url": "https://wetten.overheid.nl/BWBR0011353/2013-01-01",
    "tekst": "Het heffingvrije vermogen bedraagt € 21 139."
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "80000",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2013) (grondslag sparen en beleggen, art. 5.2 lid 1 Wet IB 2001, in het berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2013 t/m 31-12-2013 (verbatim). Het bedrag staat in de wet zelf: Wet van 5 april 2012 tot wijziging van de Wet op de zorgtoeslag, in verband met de introductie van een vermogenstoets, Stb. 2012, 204, art. I ('Na artikel 2 wordt een artikel ingevoegd, luidende: Artikel 2a ... meer bedraagt dan € 80 000'), in werking met ingang van 1 januari 2013 (Stb. 2012, 383, besluit van 11 augustus 2012); de slotvolzin over art. 5.13 toegevoegd door Stb. 2012, 669, art. XXIX (beide primaire teksten gelezen 2026-10-25). 2013 is het eerste jaar van de vermogenstoets: de wetstechnische informatie van art. 2a noemt Stb. 2012, 204 als 'Nieuw' en Stcrt. 2013, 35607 (€ 81.360 voor 2014) als eerste wijziging — voor 2013 is er geen indexatieregeling. Effectieve grens op de rendementsgrondslag: € 80.000 + € 21.139 = € 101.139",
    "url": "https://zoek.officielebekendmakingen.nl/stb-2012-204.html",
    "tekst": "In afwijking van artikel 7, derde lid, van de Algemene wet inkomensafhankelijke regelingen bestaat geen aanspraak op een zorgtoeslag indien de grondslag sparen en beleggen, bedoeld in artikel 5.2, eerste lid, van de Wet inkomstenbelasting 2001, van de belanghebbende in het berekeningsjaar meer bedraagt dan € 80 000, dan wel, ingeval de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, de gezamenlijke grondslag sparen en beleggen, bedoeld in artikel 5.2, tweede lid, van de Wet inkomstenbelasting 2001, van de belanghebbende en zijn partner in het berekeningsjaar meer bedraagt dan € 80 000. Bij de bepaling van de grondslag, bedoeld in de vorige volzin, wordt geen rekening gehouden met de vrijstelling, bedoeld in artikel 5.13 van de Wet inkomstenbelasting 2001."
   },
   "vermogensgrens_met_partner": {
    "waarde": "80000",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2013) (gezamenlijke grondslag sparen en beleggen, art. 5.2 lid 2 Wet IB 2001; alleen bij het gehele berekeningsjaar dezelfde partner; hetzelfde bedrag als zonder partner — het verschil zit in het tweemaal heffingvrije vermogen van de grondslag)",
    "bron": "BWBR0018451, geldend van 01-01-2013 t/m 31-12-2013 (verbatim); Stb. 2012, 204, art. I. Effectieve grens op de gezamenlijke rendementsgrondslag: € 80.000 + 2 × € 21.139 = € 122.278",
    "url": "https://zoek.officielebekendmakingen.nl/stb-2012-204.html"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1-2 (tekst 2013) jo. Regeling zorgverzekering art. 6.3.1 en bijlage 4 (woonlandfactoren 2013)",
    "bron": "Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 29 november 2012, kenmerk Z-3139020, houdende wijziging van de Regeling zorgverzekering in verband met het vaststellen van de woonlandfactoren voor het jaar 2013 ten behoeve van de gedifferentieerde berekening van de bijdrage voor verdragsgerechtigden, Stcrt. 2012, 25177, art. I (primaire tekst gelezen 2026-10-25; in werking 01-01-2013, art. II; toelichting: berekend door het College voor zorgverzekeringen, advies van 16 oktober 2012); gelijk aan de geconsolideerde bijlage 4 van BWBR0018715, geldend van 01-01-2013 t/m 31-01-2013 én van 01-12-2013 t/m 05-12-2013 (beide verbatim gelezen 2026-10-25, 39 landen, alle 39 regels gelijk aan de Staatscourant-tabel en aan elkaar: de bijlage veranderde niet in de loop van 2013). Geen artikel met een correctie met terugwerkende kracht in deze regeling; geen correctie van een factor voor 2013 gevonden in de regelingen voor 2014 t/m 2020 (Stcrt. 2014, 34233 corrigeerde Frankrijk 2012; Stcrt. 2017, 66088 Zweden 2017; Stcrt. 2019, 58198 Duitsland 2017–2019)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2012-25177.html",
    "geldig_van": "2013-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de regeling noemt alleen de landnaam (Macedonië). Oude methode (verhouding van gemiddelde zorgkosten in één berekeningsjaar per land): twee factoren boven 1 (Noorwegen 1,2666 en Ierland 1,0176, het laatste op een berekeningsjaar 2004). De kolommen berekeningsjaar en zorgkosten uit de bijlage staan per land in het commentaar. Hongarije, Kaapverdië, Macedonië, Marokko, Slovenië, Tunesië en Turkije dragen in 2014 dezelfde factor (Stcrt. 2013, 33704).",
    "landen": {
     "BE": "0.6760",
     "BA": "0.0592",
     "BG": "0.0419",
     "CY": "0.1700",
     "DK": "0.7118",
     "DE": "0.7077",
     "EE": "0.1553",
     "FI": "0.5776",
     "FR": "0.7241",
     "GR": "0.4253",
     "HU": "0.1223",
     "IE": "1.0176",
     "IS": "0.7489",
     "IT": "0.5386",
     "CV": "0.0268",
     "HR": "0.1831",
     "LV": "0.1086",
     "LI": "0.7295",
     "LT": "0.1112",
     "LU": "0.7585",
     "MK": "0.0445",
     "MT": "0.2177",
     "MA": "0.0125",
     "ME": "0.0778",
     "NO": "1.2666",
     "AT": "0.6039",
     "PL": "0.1089",
     "PT": "0.3180",
     "RO": "0.0437",
     "RS": "0.0713",
     "SI": "0.2886",
     "SK": "0.1915",
     "ES": "0.4043",
     "CZ": "0.2392",
     "TN": "0.0216",
     "TR": "0.0852",
     "GB": "0.6013",
     "SE": "0.6845",
     "CH": "0.5677"
    }
   }
  },
  "2014": {
   "jaar": 2014,
   "status": "draft",
   "geraadpleegd": "2026-10-24",
   "versie": "BWBR0018451, geldend van 01-01-2014 t/m 31-03-2014 (verbatim gelezen 2026-10-24); art. 1–5 gelijk in de versies van 01-04-2014 en 16-07-2014 op art. 4 en art. 5 lid 2 na",
   "versie_opmerking": "Ontstaansbronnen per 01-01-2014 (wetstechnische informatie): Stcrt. 2013, 35607 (art. 2a lid 1: € 81.360); Stb. 2012, 627 samen met Stb. 2011, 620 (art. 2 lid 3: de percentages 2014). Versie 01-04-2014: Stb. 2013, 578 (inwerkingtreding Stb. 2014, 93), art. 5 lid 2. Versie 16-07-2014: Stb. 2014, 259 art. XV (art. 4, terugwerkend tot 01-01-2014). De tekst van 01-01-2013 verschilt van die van 01-01-2014 alleen in art. 2 lid 3 (2,195% / 4,695% / 8,713%) en art. 2a lid 1 (€ 80 000) — verbatim vergeleken 2026-10-24, art. 1 t/m 5. De tekst van 01-01-2015 verschilt van die van 16-07-2014 alleen in art. 2 lid 3 (2,395% / 5,265% / 13,400%) en art. 2a lid 1 (€ 82 093) — verbatim vergeleken 2026-10-23.",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2014)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2014)",
   "artikel_maandbepaling": "Wzt art. 2 lid 6 (tekst 2014; sinds 01-01-2021 lid 5)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2014 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "art2_lid5_oud_aanwezig": true,
   "art2_lid5_oud": {
    "artikel": "Wet op de zorgtoeslag art. 2 lid 5 (tekst 2014; vervallen per 01-01-2021)",
    "bron": "BWBR0018451, geldend van 01-01-2014 t/m 31-03-2014 (verbatim gelezen 2026-10-24; dezelfde tekst in de twee andere versies van 2014 en in 2015 t/m 2020). Vervallen bij Wet verbetering uitvoerbaarheid toeslagen, Stb. 2020, 543, art. III onder 2 (lid 6–8 vernummerd tot 5–7, onder 3)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2014-01-01",
    "geldig_van": "2014-01-01",
    "geldig_tot": "2014-12-31",
    "tekst": "In afwijking van het eerste lid heeft een verzekerde met een partner die niet heeft voldaan aan de voor hem op grond van artikel 2 van de Zorgverzekeringswet geldende verplichting zich krachtens een zorgverzekering te verzekeren, geen aanspraak op een zorgtoeslag.",
    "opmerking": "Invoer: partner_verzekeringsplicht_niet_nagekomen (ja/nee/onbekend). Of de partner verzekeringsplichtig was en die plicht niet nakwam (Zvw art. 2) codeert de encoding niet; het is invoer. Niet opgegeven: gerekend alsof nagekomen, met een noot."
   },
   "vermogenstoets_basis": "grondslag_sparen_en_beleggen",
   "maand_afronding_opmerking": "Geen parameter maand_afronding_praktijk: voor 2014 is geen rekenvoorbeeld van de Dienst gelezen (de leaflet Berekening zorgtoeslag 2014 is op 2026-10-24 niet gevonden: tg0821z40fd, z42fd, z43fd en z44fd zijn een 404 en z41fd is de leaflet 2024; SOURCES.md). De encoding gebruikt de standaard 'naar_beneden' (DISCREPANCIES.md #5) en zegt dat in het resultaat; 2022 rondde rekenkundig (#8), dus 2014 is onbekend. Uitkomsten van de Dienst voor 2014 uit de rechtspraak, alle door de encoding gereproduceerd: voorschot € 865 bij een geschat toetsingsinkomen van € 17.333 en definitieve berekening € 814 bij € 19.810, zonder partner (cases/zt-2014-rul-001 en -002, Hof Den Haag ECLI:NL:GHDHA:2017:1067); definitieve berekening € 567 bij € 22.518 zonder partner (zt-2014-rul-003, ECLI:NL:RVS:2017:659); nihil bij een gezamenlijk toetsingsinkomen van € 40.113 met partner (zt-2014-rul-004, Hof Amsterdam ECLI:NL:GHAMS:2019:2243); en zonder inkomen: € 1.379 met partner (ECLI:NL:RVS:2018:2908), € 536 en daarna nihil bij € 31.166 zonder opgave van de huishouding (ECLI:NL:RVS:2018:334), nihil in Zweden met woonlandfactor (ECLI:NL:RVS:2018:3727); SOURCES.md §4.",
   "standaardpremie": {
    "waarde": "1329",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie 2014, art. 1",
    "bron": "Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 6 december 2013, kenmerk 178078-114442-Z, Stcrt. 2013, 35060 (primaire tekst gelezen 2026-10-24); geconsolideerd BWBR0034337 (geldend van 01-01-2014; gevonden via de wetstechnische informatie van Wzt art. 4). Toelichting: berekende gemiddelde nominale premie 2014 € 1.101 (CPB, op basis van de werkelijke nominale premies 2014 'inclusief collectieve contracten' — 'Het meenemen van de kortingen van de collectieve contracten vormt een beleidswijziging', aangekondigd in de VWS-begroting 2014) plus geraamd gemiddeld bedrag verplicht eigen risico € 228 (alle verzekerden meegenomen 'in verband met de voorgenomen afschaffing van de uitkering ter compensatie van het verplicht eigen risico'). 2013: € 1.478 (Regeling vaststelling standaardpremie 2013, BWBR0032391, geconsolideerde tekst gelezen 2026-10-24; regeling van 4 december 2012). 2015: € 1.408 (Stcrt. 2014, 35190). Het maximum uit de tekst zonder partner, € 865 (€ 1.329 − 2,410% × € 19.253,376 = € 864,99), is het voorschot 2014 dat Hof Den Haag in ECLI:NL:GHDHA:2017:1067 noemt bij een geschat toetsingsinkomen van € 17.333 (cases/zt-2014-rul-001); in ECLI:NL:RVS:2017:659 volgt hetzelfde voorschot uit € 567 vastgesteld plus € 298 teruggevorderd (niet als case opgenomen: het bedrag staat niet zelf in de uitspraak)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2013-35060.html",
    "geldig_van": "2014-01-01",
    "tekst": "De standaardpremie wordt voor het jaar 2014 vastgesteld op € 1329,–."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1485.60",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2014 (in 2014 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Regeling van de Minister van Sociale Zaken en Werkgelegenheid van 30 oktober 2013, 2013-0000134185, tot aanpassing van het wettelijk minimumloon per 1 januari 2014, Stcrt. 2013, 31007, art. 1 onder a: '€ 1.485,65' — gewijzigd vóór de inwerkingtreding bij Regeling van 13 november 2013, Stcrt. 2013, 32425, art. I: '€ 1.485,65' vervangen door € 1.485,60 (toelichting: bij de vaststelling was 'ten onrechte geen rekening gehouden met het negende lid van artikel 14' WML, afronding op het dichtstbijzijnde veelvoud van € 0,60); beide primaire teksten gelezen 2026-10-24. De geconsolideerde WML-tekst van 01-01-2014 (BWBR0002638, geldend t/m 30-06-2014) draagt het bedrag als redactionele noot bij art. 8 ('per 1 januari 2014: € 1.485,60'); de wetstechnische informatie noemt Stcrt. 2013, 32425 samen met Stcrt. 2013, 31007 als ontstaansbron. Per 1 juli 2013: € 1.477,80 (Stcrt. 2013, 11355); per 1 juli 2014: € 1.495,20 (Stcrt. 2014, 13936, gelezen 2026-10-24) — niet gebruikt, art. 1 onder f neemt januari",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2013-31007.html",
    "geldig_van": "2014-01-01",
    "tekst": "a. € 1.485,65;",
    "tekst_opmerking": "Zoals vastgesteld bij Stcrt. 2013, 31007; bij Stcrt. 2013, 32425 vóór 1 januari 2014 gewijzigd in € 1.485,60, het bedrag dat gold en dat hier is gecodeerd."
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2014 t/m 31-03-2014 (verbatim)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2014-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.485,60 = € 19.253,376. Hoe de Dienst Toeslagen dit in 2014 'vastgesteld' heeft is niet gelezen (leaflet 2014 niet gevonden). De inkomensgrenzen uit de tekst staan in de cases zt-2014-syn-036..039 (laatste euro met recht, Awir art. 14 lid 4-5); een afgerond drempelinkomen (€ 19.253 of € 19.254, DISCREPANCIES.md #1) verschuift ze in 2014 niet."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "2.410",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2014: 'voor een verzekerde zonder partner op 2,410% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2014 t/m 31-03-2014 (verbatim; gelijk in de versies van 01-04-2014 en 16-07-2014). Vastgesteld bij Stb. 2012, 627 (besluit van 30 november 2012 tot wijziging van het Besluit percentages drempel- en toetsingsinkomen zorgtoeslag in verband met gewijzigde percentages met ingang van het berekeningsjaar 2013), art. I, rij 2014; nota van toelichting tabel 1 (rij 2014): oorspronkelijk 2,70%, na maatregel 2010 2,76%, na maatregel 2011 3,36%, Wul +0,25, compensatie verhoging verplicht eigen risico −0,60, koopkrachtreparatiepakket −0,60, 'na huidige maatregel' 2,41%; de rij 2015 van dit besluit (2,625%) is vóór haar ingang vervangen door Stb. 2014, 488 (2,395%); primaire tekst gelezen 2026-10-24. De tekst van 01-01-2013 (gelezen 2026-10-24): 2,195%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2014-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "5.210",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2014: 'voor verzekerden met een partner vastgesteld op 5,210% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2014 t/m 31-03-2014 (verbatim). Stb. 2012, 627, art. I, rij 2014; tabel 1 (rij 2014): oorspronkelijk 5,00%, na maatregel 2010 5,06%, na maatregel 2011 6,56%, Wul +0,25, compensatie eigen risico −1,20, koopkrachtreparatiepakket −0,40, 'na huidige maatregel' 5,21%; de rij 2015 (5,725%) vervangen door Stb. 2014, 488 (5,265%). De tekst van 01-01-2013 (gelezen 2026-10-24): 4,695%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2014-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "9.118",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2014: 'vermeerderd met 9,118% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner)",
    "bron": "BWBR0018451, geldend van 01-01-2014 t/m 31-03-2014 (verbatim); Stb. 2012, 627, art. I, rij 2014 (tabel 1, rij 2014: oorspronkelijk 5,00%, na maatregel 2010 5,12%, na maatregel 2011 6,245%, Wul +0,25, compensatie eigen risico +0,923, koopkrachtreparatiepakket +1,70, 'na huidige maatregel' 9,118%; toelichting: de Wul-opslag voorkomt dat het lagere toetsingsinkomen zonder werkgeversvergoeding IAB tot hogere zorgtoeslag leidt, de +0,923 voorkomt 'een forse toename van het aantal zorgtoeslaggerechtigden' door de € 115 hogere maximumzorgtoeslag, de +1,70 houdt het budgettaire beslag van het koopkrachtreparatiepakket gelijk; 'een daling in 2013 van het aantal huishoudens met een zorgtoeslag met 300.000'). De rij 2015 van dit besluit (9,523%) is vóór haar ingang vervangen door Stb. 2014, 488 (13,400%). De tekst van 01-01-2013 (gelezen 2026-10-24): 8,713%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2014-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2014 t/m 31-03-2014 (verbatim, zelfde tekst als 2015–2026). Gevolgd door lid 5 (oud), zie art2_lid5_oud",
    "url": "https://wetten.overheid.nl/BWBR0018451/2014-01-01"
   },
   "heffingvrij_vermogen": {
    "waarde": "21139",
    "artikel": "Wet inkomstenbelasting 2001 art. 5.5 (tekst 2014); art. 5.2 lid 1 (grondslag sparen en beleggen = rendementsgrondslag op de peildatum voor zover boven het heffingvrije vermogen) en lid 2 (partners het gehele jaar: de gezamenlijke rendementsgrondslag voor zover boven het heffingvrije vermogen van de belastingplichtige en zijn partner)",
    "bron": "BWBR0011353, geldend van 01-01-2014 t/m 05-01-2014, van 06-01-2014 t/m 18-07-2014 en van 19-07-2014 t/m 31-12-2014 (alle drie verbatim gelezen 2026-10-24: 'Het heffingvrije vermogen bedraagt € 21 139.'; art. 5.5 is het hele jaar gelijk). Gelijk aan 2013 (tekst van 01-01-2013 gelezen 2026-10-24: € 21 139): de Bijstellingsregeling directe belastingen 2014 (Stcrt. 2013, 35144) past art. 5.5 niet aan en zegt in haar toelichting dat op grond van artikel XXXIV van het Belastingplan 2014 'voor het jaar 2014 de artikelen 10.1 en 10.3, tweede lid, van de Wet IB 2001 geen toepassing' vinden, zodat de te indexeren bedragen 'voor het jaar 2014 niet geïndexeerd' zijn (het Belastingplan 2014, Stb., zelf niet gelezen). Nodig omdat Wzt art. 2a lid 1 (tekst 2014) op de grondslag sparen en beleggen rust; de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen af (éénmaal zonder partner, tweemaal met het hele jaar dezelfde partner). Effectieve grenzen 2014 op de rendementsgrondslag: € 102.499 / € 123.638. 2015: € 21.330 (Stcrt. 2014, 36639 art. I: 'In artikel 5.5 wordt € 21.139 vervangen door: € 21.330')",
    "url": "https://wetten.overheid.nl/BWBR0011353/2014-01-01",
    "tekst": "Het heffingvrije vermogen bedraagt € 21 139."
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "81360",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2014) (grondslag sparen en beleggen, art. 5.2 lid 1 Wet IB 2001, in het berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2014 t/m 31-03-2014 (verbatim). Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 10 december 2013, kenmerk 178414-114506-Z, houdende wijziging van het bedrag vermogenstoets zorgtoeslag voor het berekeningsjaar 2014, Stcrt. 2013, 35607, art. I: '€ 80.000' telkens vervangen door '€ 81.360' (tabelcorrectiefactor 1,7%, Wzt art. 2a lid 2, 'een indexatie van € 1.360'; toelichting: 'Verzekerden met een vermogen boven het heffingvrije vermogen plus € 81.360 hebben geen recht op de zorgtoeslag'; primaire tekst gelezen 2026-10-24). De tekst van 01-01-2013 (gelezen 2026-10-24): € 80 000. 2015: € 82.093 (Stcrt. 2014, 32936)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2013-35607.html",
    "tekst": "In afwijking van artikel 7, derde lid, van de Algemene wet inkomensafhankelijke regelingen bestaat geen aanspraak op een zorgtoeslag indien de grondslag sparen en beleggen, bedoeld in artikel 5.2, eerste lid, van de Wet inkomstenbelasting 2001, van de belanghebbende in het berekeningsjaar meer bedraagt dan € 81.360, dan wel, ingeval de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, de gezamenlijke grondslag sparen en beleggen, bedoeld in artikel 5.2, tweede lid, van de Wet inkomstenbelasting 2001, van de belanghebbende en zijn partner in het berekeningsjaar meer bedraagt dan € 81.360. Bij de bepaling van de grondslag, bedoeld in de vorige volzin, wordt geen rekening gehouden met de vrijstelling, bedoeld in artikel 5.13 van de Wet inkomstenbelasting 2001."
   },
   "vermogensgrens_met_partner": {
    "waarde": "81360",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2014) (gezamenlijke grondslag sparen en beleggen, art. 5.2 lid 2 Wet IB 2001; alleen bij het gehele berekeningsjaar dezelfde partner; hetzelfde bedrag als zonder partner — het verschil zit in het tweemaal heffingvrije vermogen van de grondslag)",
    "bron": "BWBR0018451, geldend van 01-01-2014 t/m 31-03-2014 (verbatim); Stcrt. 2013, 35607, art. I ('telkens')",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2013-35607.html"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1-2 (tekst 2014) jo. Regeling zorgverzekering art. 6.3.1 en bijlage 4 (woonlandfactoren 2014)",
    "bron": "Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 26 november 2013, kenmerk 169401-113162-Z, houdende wijziging van de Regeling zorgverzekering in verband met het vaststellen van de woonlandfactoren voor het jaar 2014 ten behoeve van de gedifferentieerde berekening van de bijdrage voor verdragsgerechtigden, Stcrt. 2013, 33704, art. I (primaire tekst gelezen 2026-10-24; in werking 01-01-2014, art. II; toelichting: berekend door het College voor zorgverzekeringen, advies van 29 oktober 2013; de factoren 'gelden voor de bijdrage die verdragsgerechtigden in het jaar 2014 verschuldigd zijn en voor de berekening van de zorgtoeslag'); gelijk aan de geconsolideerde bijlage 4 van BWBR0018715, geldend van 01-01-2014 t/m 05-01-2014 én van 01-12-2014 t/m 08-12-2014 (beide verbatim gelezen 2026-10-24, 39 landen, alle 39 regels gelijk aan de Staatscourant-tabel en aan elkaar: de bijlage veranderde niet in de loop van 2014). Geen artikel II met een correctie met terugwerkende kracht in deze regeling; geen correctie van een factor voor 2014 gevonden in de regelingen voor 2015 t/m 2020 (Stcrt. 2014, 34233 corrigeerde Frankrijk 2012; Stcrt. 2017, 66088 Zweden 2017; Stcrt. 2019, 58198 Duitsland 2017–2019)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2013-33704.html",
    "geldig_van": "2014-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de regeling noemt alleen de landnaam (Macedonië). Oude methode (verhouding van gemiddelde zorgkosten in één berekeningsjaar per land): één factor boven 1 (Noorwegen 1,3909; in 2013 ook Ierland 1,0176). De kolommen berekeningsjaar en zorgkosten uit de bijlage staan per land in het commentaar. België, Cyprus, Frankrijk, Griekenland, Luxemburg, Montenegro en Polen (berekeningsjaar 2011) en Marokko en Tunesië dragen in 2015 dezelfde factor (Stcrt. 2014, 34233).",
    "landen": {
     "BE": "0.6715",
     "BA": "0.0611",
     "BG": "0.0528",
     "CY": "0.1669",
     "DK": "0.9026",
     "DE": "0.7078",
     "EE": "0.1503",
     "FI": "0.6071",
     "FR": "0.7198",
     "GR": "0.3590",
     "HU": "0.1223",
     "IE": "0.9268",
     "IS": "0.6970",
     "IT": "0.5298",
     "CV": "0.0268",
     "HR": "0.1789",
     "LV": "0.0806",
     "LI": "0.7914",
     "LT": "0.1087",
     "LU": "0.7408",
     "MK": "0.0445",
     "MT": "0.2793",
     "MA": "0.0125",
     "ME": "0.0757",
     "NO": "1.3909",
     "AT": "0.6055",
     "PL": "0.1116",
     "PT": "0.3415",
     "RO": "0.0578",
     "RS": "0.0746",
     "SI": "0.2886",
     "SK": "0.1842",
     "ES": "0.4059",
     "CZ": "0.2435",
     "TN": "0.0216",
     "TR": "0.0852",
     "GB": "0.6305",
     "SE": "0.7354",
     "CH": "0.6265"
    }
   }
  },
  "2015": {
   "jaar": 2015,
   "status": "draft",
   "geraadpleegd": "2026-10-23",
   "versie": "BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015 (verbatim gelezen 2026-10-23)",
   "versie_opmerking": "Ontstaansbronnen per 01-01-2015 (wetstechnische informatie): Stcrt. 2014, 32936 (art. 2a lid 1: € 82.093); Stb. 2014, 488 (art. 2 lid 3: de percentages 2015, 'samen met' Stb. 2012, 627 en Stb. 2011, 620 — de keten van percentagebesluiten). Geen andere versie in 2015; geen rekenregel veranderde in de loop van 2015. De vorige versie (16-07-2014 t/m 31-12-2014, Stb. 2014, 259) verschilt alleen in art. 2 lid 3 (2,410% / 5,210% / 9,118%) en art. 2a lid 1 (€ 81.360) — verbatim vergeleken 2026-10-23, art. 1 t/m 5. De tekst van 01-01-2016 verschilt alleen in art. 2 lid 3 (percentages) en art. 2a lid 1 (€ 82.504) — verbatim vergeleken 2026-10-23.",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2015)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2015)",
   "artikel_maandbepaling": "Wzt art. 2 lid 6 (tekst 2015; sinds 01-01-2021 lid 5)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2015 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "art2_lid5_oud_aanwezig": true,
   "art2_lid5_oud": {
    "artikel": "Wet op de zorgtoeslag art. 2 lid 5 (tekst 2015; vervallen per 01-01-2021)",
    "bron": "BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015 (verbatim gelezen 2026-10-23; dezelfde tekst in 2016 t/m 2020). Vervallen bij Wet verbetering uitvoerbaarheid toeslagen, Stb. 2020, 543, art. III onder 2 (lid 6–8 vernummerd tot 5–7, onder 3)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2015-01-01",
    "geldig_van": "2015-01-01",
    "geldig_tot": "2015-12-31",
    "tekst": "In afwijking van het eerste lid heeft een verzekerde met een partner die niet heeft voldaan aan de voor hem op grond van artikel 2 van de Zorgverzekeringswet geldende verplichting zich krachtens een zorgverzekering te verzekeren, geen aanspraak op een zorgtoeslag.",
    "opmerking": "Invoer: partner_verzekeringsplicht_niet_nagekomen (ja/nee/onbekend). Of de partner verzekeringsplichtig was en die plicht niet nakwam (Zvw art. 2) codeert de encoding niet; het is invoer. Niet opgegeven: gerekend alsof nagekomen, met een noot."
   },
   "vermogenstoets_basis": "grondslag_sparen_en_beleggen",
   "maand_afronding_opmerking": "Geen parameter maand_afronding_praktijk: voor 2015 is geen rekenvoorbeeld van de Dienst gelezen (de leaflet Berekening zorgtoeslag 2015 is op 2026-10-23 niet gevonden: tg0821z50fd, z52fd, z53fd en z54fd zijn een 404 en z51fd is de leaflet 2025; SOURCES.md). De encoding gebruikt de standaard 'naar_beneden' (DISCREPANCIES.md #5) en zegt dat in het resultaat; 2022 rondde rekenkundig (#8), dus 2015 is onbekend. Uitkomsten van de Dienst voor 2015 uit de rechtspraak: € 663 bij een gezamenlijk toetsingsinkomen van € 27.886 met partner (cases/zt-2015-rul-001, ECLI:NL:RVS:2019:418) en nihil op grond van het vermogen zonder bedrag (ECLI:NL:RVS:2023:1730; SOURCES.md §4).",
   "standaardpremie": {
    "waarde": "1408",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie 2015, art. 1",
    "bron": "Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 28 november 2014, kenmerk 695128-130214-Z, Stcrt. 2014, 35190 (primaire tekst gelezen 2026-10-23); geconsolideerd BWBR0035894 (geldend van 01-01-2015). Toelichting: berekende gemiddelde nominale premie 2015 € 1.170 (op basis van de werkelijke nominale premies 2015) plus geraamd gemiddeld bedrag verplicht eigen risico € 238. 2016: € 1.468 (Stcrt. 2015, 43794). Het maximum uit de tekst zonder partner, € 942 (€ 1.408 − 2,395% × € 19.463,328 = € 941,85), is als voorschot 2015 van de Dienst genoemd in de uitspraak van de ABRvS van 20 juni 2018 in zaak 201709274/1/A2 (zoekresultaat van 2026-10-23, tekst niet gelezen; SOURCES.md §4)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2014-35190.html",
    "geldig_van": "2015-01-01",
    "tekst": "De standaardpremie wordt voor het jaar 2015 vastgesteld op € 1408,–."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1501.80",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2015 (in 2015 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Regeling van de Minister van Sociale Zaken en Werkgelegenheid van 14 oktober 2014, nr. 2014-0000146254, tot aanpassing van het wettelijk minimumloon per 1 januari 2015, Stcrt. 2014, 29850, art. 1 onder a (primaire tekst gelezen 2026-10-23). De geconsolideerde WML-tekst van 01-01-2015 (BWBR0002638, geldend t/m 30-06-2015) draagt het bedrag als redactionele noot bij art. 8 ('per 1 januari 2015: € 1.501,80'); de wetstechnische informatie noemt Stcrt. 2014, 29850 als ontstaansbron. Per 1 juli 2015: € 1.507,80 (Stcrt. 2015, 10678, gelezen 2026-10-23) — niet gebruikt, art. 1 onder f neemt januari",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2014-29850.html",
    "geldig_van": "2015-01-01",
    "tekst": "a. € 1.501,80;"
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015 (verbatim)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2015-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.501,80 = € 19.463,328. Hoe de Dienst Toeslagen dit in 2015 'vastgesteld' heeft is niet gelezen (leaflet 2015 niet gevonden). De inkomensgrenzen uit de tekst staan in de cases zt-2015-syn-032..035 (laatste euro met recht, Awir art. 14 lid 4-5); of een afgerond drempelinkomen (€ 19.463 of € 19.464, DISCREPANCIES.md #1) ze verschuift staat daar."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "2.395",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2015: 'voor een verzekerde zonder partner op 2,395% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015 (verbatim). Vastgesteld bij Stb. 2014, 488 (besluit van 1 december 2014 tot wijziging van het Besluit percentages drempel- en toetsingsinkomen zorgtoeslag in verband met gewijzigde percentages met ingang van het berekeningsjaar 2015), art. I, rij 2015; nota van toelichting tabel 1: 2014 2,41%, 2015 'na maatregel 2012' 2,625%, maatregel −0,23 procentpunt (alleen 2015; 'ter compensatie voor het niet introduceren van het inkomensafhankelijk eigen risico'), 'na huidige maatregel' 2,395%; de rij 2016 van dit besluit (2,640%) is vóór haar ingang vervangen door Stb. 2015, 472 (2,380%); primaire tekst gelezen 2026-10-23. De tekst van 16-07-2014 (gelezen 2026-10-23): 2,410%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2015-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "5.265",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2015: 'voor verzekerden met een partner vastgesteld op 5,265% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015 (verbatim). Stb. 2014, 488, art. I, rij 2015; tabel 1: 2014 5,21%, 2015 'na maatregel 2012' 5,725%, maatregel −0,46 procentpunt (alleen 2015), 'na huidige maatregel' 5,265%; de rij 2016 (5,740%) vervangen door Stb. 2015, 472 (5,220%). De tekst van 16-07-2014 (gelezen 2026-10-23): 5,210%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2015-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.400",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2015: 'vermeerderd met 13,400% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner)",
    "bron": "BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015 (verbatim); Stb. 2014, 488, art. I, rij 2015 (tabel 1: 2014 9,118%, 2015 'na maatregel 2012' 9,523%, maatregel +3,877 procentpunt voor 2015 en alle volgende jaren, 'na huidige maatregel' 13,40%; toelichting: 'stijgt het afbouwpercentage van 2014 op 2015 met circa 4,282%-punt (van 9,118% naar 13,400% voor zowel alleenstaanden als meerpersoonshuishoudens)'; vanaf 2015 +0,03 procentpunt per jaar: 2016 13,43%, 2017 13,46%, 2020 13,55%, 2030 13,85%). De tekst van 16-07-2014 (gelezen 2026-10-23): 9,118%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2015-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015 (verbatim, zelfde tekst als 2016–2026). Gevolgd door lid 5 (oud), zie art2_lid5_oud",
    "url": "https://wetten.overheid.nl/BWBR0018451/2015-01-01"
   },
   "heffingvrij_vermogen": {
    "waarde": "21330",
    "artikel": "Wet inkomstenbelasting 2001 art. 5.5 (tekst 2015); art. 5.2 lid 1 (grondslag sparen en beleggen = rendementsgrondslag op de peildatum voor zover boven het heffingvrije vermogen) en lid 2 (partners het gehele jaar: de gezamenlijke rendementsgrondslag voor zover boven het heffingvrije vermogen van de belastingplichtige en zijn partner)",
    "bron": "BWBR0011353, geldend van 01-01-2015 t/m 31-03-2015 en van 01-07-2015 t/m 31-08-2015 (beide verbatim gelezen 2026-10-23: 'Het heffingvrije vermogen bedraagt € 21.330.'; art. 5.5 is aan het begin en halverwege het jaar gelijk). Het bedrag: Bijstellingsregeling directe belastingen 2015, Stcrt. 2014, 36639 (regeling van de Staatssecretaris van Financiën, nr. DB2014/520M), art. I: 'In artikel 5.5 wordt € 21.139 vervangen door: € 21.330' (tabelcorrectiefactor; primaire tekst gelezen 2026-10-23). Nodig omdat Wzt art. 2a lid 1 (tekst 2015) op de grondslag sparen en beleggen rust; de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen af (éénmaal zonder partner, tweemaal met het hele jaar dezelfde partner). Effectieve grenzen 2015 op de rendementsgrondslag: € 103.423 / € 124.753. 2016: € 24.437",
    "url": "https://wetten.overheid.nl/BWBR0011353/2015-01-01",
    "tekst": "Het heffingvrije vermogen bedraagt € 21.330."
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "82093",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2015) (grondslag sparen en beleggen, art. 5.2 lid 1 Wet IB 2001, in het berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015 (verbatim). Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 4 november 2014, kenmerk 675257-127218-Z, Stcrt. 2014, 32936, art. I: '€ 81 360' telkens vervangen door '€ 82 093' (tabelcorrectiefactor 0,9%, Wzt art. 2a lid 2, 'een indexatie van € 733'; toelichting: 'Verzekerden met een vermogen boven het heffingvrije vermogen plus € 82 093 hebben geen recht op de zorgtoeslag'; primaire tekst gelezen 2026-10-23). De tekst van 16-07-2014 (gelezen 2026-10-23): € 81.360. 2016: € 82.504 (Stcrt. 2015, 40655)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2014-32936.html",
    "tekst": "In afwijking van artikel 7, derde lid, van de Algemene wet inkomensafhankelijke regelingen bestaat geen aanspraak op een zorgtoeslag indien de grondslag sparen en beleggen, bedoeld in artikel 5.2, eerste lid, van de Wet inkomstenbelasting 2001, van de belanghebbende in het berekeningsjaar meer bedraagt dan € 82 093, dan wel, ingeval de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, de gezamenlijke grondslag sparen en beleggen, bedoeld in artikel 5.2, tweede lid, van de Wet inkomstenbelasting 2001, van de belanghebbende en zijn partner in het berekeningsjaar meer bedraagt dan € 82 093. Bij de bepaling van de grondslag, bedoeld in de vorige volzin, wordt geen rekening gehouden met de vrijstelling, bedoeld in artikel 5.13 van de Wet inkomstenbelasting 2001."
   },
   "vermogensgrens_met_partner": {
    "waarde": "82093",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2015) (gezamenlijke grondslag sparen en beleggen, art. 5.2 lid 2 Wet IB 2001; alleen bij het gehele berekeningsjaar dezelfde partner; hetzelfde bedrag als zonder partner — het verschil zit in het tweemaal heffingvrije vermogen van de grondslag)",
    "bron": "BWBR0018451, geldend van 01-01-2015 t/m 31-12-2015 (verbatim); Stcrt. 2014, 32936, art. I ('telkens')",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2014-32936.html"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1-2 (tekst 2015) jo. Regeling zorgverzekering art. 6.3.1 en bijlage 4 (woonlandfactoren 2015)",
    "bron": "Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 27 november 2014, kenmerk 680920-128478-Z, Stcrt. 2014, 34233, art. I (primaire tekst gelezen 2026-10-23; in werking 01-01-2015, art. III lid 1; toelichting: berekend door het Zorginstituut Nederland, advies van 30 september 2014; de factoren 'gelden voor de bijdrage die verdragsgerechtigden in het jaar 2015 verschuldigd zijn'); gelijk aan de geconsolideerde bijlage 4 van BWBR0018715, geldend van 01-01-2015 t/m 22-01-2015, van 01-02-2015 t/m 11-02-2015 én van 01-12-2015 t/m 10-12-2015 (alle verbatim gelezen 2026-10-23, 39 landen, alle 39 regels gelijk aan de Staatscourant-tabel en aan elkaar: de bijlage veranderde niet in de loop van 2015). Art. II van dezelfde regeling stelde de factor voor Frankrijk voor het jaar 2012 met terugwerkende kracht opnieuw vast (0,7685 → 0,7659, een rekenfout), voor het verhoudingsgetal van art. 6.3.1 Rzv (de verdragsbijdrage); toelichting: 'Deze wijziging heeft geen effect op de hoogte van de zorgtoeslag. Deze wordt niet ten nadele van de verdragsgerechtigden gecorrigeerd.' Geen correctie met terugwerkende kracht voor 2015 gevonden",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2014-34233.html",
    "geldig_van": "2015-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de regeling noemt alleen de landnaam (Macedonië). Oude methode (verhouding van gemiddelde zorgkosten in één berekeningsjaar per land): één factor boven 1 (Noorwegen 1,5567). De kolommen berekeningsjaar en zorgkosten uit de bijlage staan per land in het commentaar.",
    "landen": {
     "BE": "0.6715",
     "BA": "0.0646",
     "BG": "0.0606",
     "CY": "0.1669",
     "DK": "0.9430",
     "DE": "0.7407",
     "EE": "0.1677",
     "FI": "0.6299",
     "FR": "0.7198",
     "GR": "0.3590",
     "HU": "0.1222",
     "IE": "0.8587",
     "IS": "0.7553",
     "IT": "0.5569",
     "CV": "0.0242",
     "HR": "0.1865",
     "LV": "0.0885",
     "LI": "0.8122",
     "LT": "0.1163",
     "LU": "0.7408",
     "MK": "0.0527",
     "MT": "0.2850",
     "MA": "0.0125",
     "ME": "0.0757",
     "NO": "1.5567",
     "AT": "0.6363",
     "PL": "0.1116",
     "PT": "0.3415",
     "RO": "0.0588",
     "RS": "0.0742",
     "SI": "0.2976",
     "SK": "0.1940",
     "ES": "0.3925",
     "CZ": "0.2474",
     "TN": "0.0216",
     "TR": "0.0744",
     "GB": "0.6001",
     "SE": "0.7573",
     "CH": "0.6509"
    }
   }
  },
  "2016": {
   "jaar": 2016,
   "status": "draft",
   "geraadpleegd": "2026-10-22",
   "versie": "BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016 (verbatim gelezen 2026-10-22)",
   "versie_opmerking": "Ontstaansbronnen per 01-01-2016 (wetstechnische informatie): Stcrt. 2015, 40655 (art. 2a lid 1: € 82.504); Stb. 2015, 472 (art. 2 lid 3: de percentages 2016, 'samen met' Stb. 2014, 488; Stb. 2012, 627; Stb. 2011, 620 — de keten van percentagebesluiten). Geen andere versie in 2016; geen rekenregel veranderde in de loop van 2016. De tekst van 01-01-2017 verschilt alleen in art. 2 lid 3 (percentages), art. 2a lid 1 (€ 82.752) en art. 5 lid 2 (CAK voor Zorginstituut, Stb. 2016, 173) — verbatim vergeleken 2026-10-21.",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2016)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2016)",
   "artikel_maandbepaling": "Wzt art. 2 lid 6 (tekst 2016; sinds 01-01-2021 lid 5)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2016 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "art2_lid5_oud_aanwezig": true,
   "art2_lid5_oud": {
    "artikel": "Wet op de zorgtoeslag art. 2 lid 5 (tekst 2016; vervallen per 01-01-2021)",
    "bron": "BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016 (verbatim gelezen 2026-10-22; dezelfde tekst in 2017 t/m 2020). Vervallen bij Wet verbetering uitvoerbaarheid toeslagen, Stb. 2020, 543, art. III onder 2 (lid 6–8 vernummerd tot 5–7, onder 3)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2016-01-01",
    "geldig_van": "2016-01-01",
    "geldig_tot": "2016-12-31",
    "tekst": "In afwijking van het eerste lid heeft een verzekerde met een partner die niet heeft voldaan aan de voor hem op grond van artikel 2 van de Zorgverzekeringswet geldende verplichting zich krachtens een zorgverzekering te verzekeren, geen aanspraak op een zorgtoeslag.",
    "opmerking": "Invoer: partner_verzekeringsplicht_niet_nagekomen (ja/nee/onbekend). Of de partner verzekeringsplichtig was en die plicht niet nakwam (Zvw art. 2) codeert de encoding niet; het is invoer. Niet opgegeven: gerekend alsof nagekomen, met een noot."
   },
   "vermogenstoets_basis": "grondslag_sparen_en_beleggen",
   "maand_afronding_opmerking": "Geen parameter maand_afronding_praktijk: voor 2016 is geen rekenvoorbeeld van de Dienst gelezen (de leaflet Berekening zorgtoeslag 2016 is op 2026-10-22 niet gevonden: tg0821z60fd, z63fd en z64fd zijn een 404 en z62fd is de tweede druk van de leaflet 2026; SOURCES.md). De encoding gebruikt de standaard 'naar_beneden' (DISCREPANCIES.md #5) en zegt dat in het resultaat; 2022 rondde rekenkundig (#8), dus 2016 is onbekend. Uitkomsten van de Dienst voor 2016 uit de rechtspraak: € 998 (zonder partner) en € 1.905 (met partner), de maxima uit de tekst, en nihil bij een gezamenlijk inkomen van € 45.149 (cases/zt-2016-rul-001; SOURCES.md §4).",
   "standaardpremie": {
    "waarde": "1468",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie 2016, art. 1",
    "bron": "Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 27 november 2015, kenmerk 873778-144254-Z, Stcrt. 2015, 43794 (primaire tekst gelezen 2026-10-22); geconsolideerd BWBR0037279 (geldend van 01-01-2016). Toelichting: gemiddelde nominale premie 2016 € 1.228 (berekend op basis van de werkelijke nominale premies 2016 inclusief collectieve contracten) plus geraamd gemiddeld bedrag verplicht eigen risico € 240. 2017: € 1.530 (Stcrt. 2016, 64077). De maxima uit de tekst, € 998 (zonder partner) en € 1.905 (met partner), zijn als uitkomst van de Dienst voor 2016 te lezen in ECLI:NL:RVS:2024:2798 en ECLI:NL:RVS:2022:2397 (SOURCES.md §4)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2015-43794.html",
    "geldig_van": "2016-01-01",
    "tekst": "De standaardpremie wordt voor het jaar 2016 vastgesteld op € 1468,–."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1524.60",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2016 (in 2016 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Regeling van de Minister van Sociale Zaken en Werkgelegenheid van 29 oktober 2015, nr. 2015-0000277569, tot aanpassing van het wettelijk minimumloon per 1 januari 2016, Stcrt. 2015, 38647, art. 1 onder a (primaire tekst gelezen 2026-10-22). De geconsolideerde WML-tekst van 01-01-2016 (BWBR0002638, geldend t/m 30-06-2016) draagt het bedrag als redactionele noot bij art. 8 ('per 1 januari 2016: € 1.524,60'); de wetstechnische informatie noemt Stcrt. 2015, 38647 als ontstaansbron van die versie (naast Stb. 2015, 464 en Stb. 2015, 233, die het bedrag niet raken)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2015-38647.html",
    "geldig_van": "2016-01-01",
    "tekst": "a. € 1.524,60;"
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016 (verbatim)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2016-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.524,60 = € 19.758,816. Hoe de Dienst Toeslagen dit in 2016 'vastgesteld' heeft is niet gelezen (leaflet 2016 niet gevonden). De inkomensgrenzen uit de tekst staan in de cases zt-2016-syn-028..031 (laatste euro met recht, Awir art. 14 lid 4-5); of een afgerond drempelinkomen (€ 19.758 of € 19.759, DISCREPANCIES.md #1) ze verschuift staat daar."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "2.380",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2016: 'voor een verzekerde zonder partner op 2,380% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016 (verbatim). Vastgesteld bij Stb. 2015, 472 (besluit van 1 december 2015 tot wijziging van het Besluit percentages drempel- en toetsingsinkomen zorgtoeslag), art. I, rij 2016; nota van toelichting tabel 1: 2015 2,395%, 2016 'na maatregel 2014' 2,640%, maatregel −0,26 procentpunt (alleen 2016: 'verlenging van de tijdelijke verhoging van de zorgtoeslag', koopkrachtpakket 2016), 'na huidige maatregel' 2,380%; de rij 2017 van dit besluit (2,655%) is vóór haar ingang vervangen door Stb. 2016, 469 (2,305%); primaire tekst gelezen 2026-10-22. De tekst van 01-01-2015 (gelezen 2026-10-22): 2,395%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2016-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "5.220",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2016: 'voor verzekerden met een partner vastgesteld op 5,220% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016 (verbatim). Stb. 2015, 472, art. I, rij 2016; tabel 1: 2015 5,265%, 2016 'na maatregel 2014' 5,740%, maatregel −0,52 procentpunt (alleen 2016), 'na huidige maatregel' 5,22%; de rij 2017 (5,755%) vervangen door Stb. 2016, 469 (5,055%)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2016-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.430",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2016: 'vermeerderd met 13,430% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner)",
    "bron": "BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016 (verbatim); Stb. 2015, 472, art. I, rij 2016 (tabel 1: 2015 13,40%, 2016 13,43%, het schema van +0,03 procentpunt per jaar sinds de maatregel 2014; maatregel '–'; toelichting: 'Het onderhavige besluit wijzigt niet de afbouwpercentages voor het berekeningsjaar 2016'). De tekst van 01-01-2015 (gelezen 2026-10-22): 13,400%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2016-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016 (verbatim, zelfde tekst als 2017–2026). Gevolgd door lid 5 (oud), zie art2_lid5_oud",
    "url": "https://wetten.overheid.nl/BWBR0018451/2016-01-01"
   },
   "heffingvrij_vermogen": {
    "waarde": "24437",
    "artikel": "Wet inkomstenbelasting 2001 art. 5.5 (tekst 2016); art. 5.2 lid 1 (grondslag sparen en beleggen = rendementsgrondslag op de peildatum voor zover boven het heffingvrije vermogen) en lid 2 (partners het gehele jaar: de gezamenlijke rendementsgrondslag voor zover boven het heffingvrije vermogen van de belastingplichtige en zijn partner)",
    "bron": "BWBR0011353, geldend van 01-01-2016 t/m 12-01-2016 en van 01-07-2016 t/m 19-09-2016 (beide verbatim gelezen 2026-10-22: 'Het heffingvrije vermogen bedraagt € 24.437.'; de Wet IB 2001 had in 2016 zeven versies, art. 5.5 is aan het begin en halverwege het jaar gelijk). Het bedrag: Stcrt. 2015, 47097 (Bijstellingsregeling directe belastingen 2016) art. I onderdeel Q verving € 21.330 door € 21.437 (inflatiecorrectie), en volgens de toelichting daarvan verhoogde het Belastingplan 2016, art. I onderdeel Ea, 'zoals dat na de verwerking van de bijbehorende novelle is komen te luiden', dat bedrag tot € 24.437 (Staatsbladnummer niet gelezen; de wetstechnische informatie noemt Stb. 2015, 538 en 539 onder de ontstaansbronnen per 01-01-2016). Nodig omdat Wzt art. 2a lid 1 (tekst 2016) op de grondslag sparen en beleggen rust; de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen af (éénmaal zonder partner, tweemaal met het hele jaar dezelfde partner). Effectieve grenzen 2016 op de rendementsgrondslag: € 106.941 / € 131.378. 2017: € 25.000",
    "url": "https://wetten.overheid.nl/BWBR0011353/2016-01-01",
    "tekst": "Het heffingvrije vermogen bedraagt € 24.437."
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "82504",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2016) (grondslag sparen en beleggen, art. 5.2 lid 1 Wet IB 2001, in het berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016 (verbatim). Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 10 november 2015, kenmerk 858077-143255-WJZ, Stcrt. 2015, 40655, art. I: '€ 82 093' telkens vervangen door '€ 82 504' (tabelcorrectiefactor 0,5%, Wzt art. 2a lid 2, 'een indexatie van € 411'; toelichting: 'Verzekerden met een vermogen boven het heffingvrije vermogen plus € 82 504 hebben geen recht op de zorgtoeslag'; primaire tekst gelezen 2026-10-22). De tekst van 01-01-2015 (gelezen 2026-10-22): € 82.093. 2017: € 82.752 (Stcrt. 2016, 60569)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2015-40655.html",
    "tekst": "In afwijking van artikel 7, derde lid, van de Algemene wet inkomensafhankelijke regelingen bestaat geen aanspraak op een zorgtoeslag indien de grondslag sparen en beleggen, bedoeld in artikel 5.2, eerste lid, van de Wet inkomstenbelasting 2001, van de belanghebbende in het berekeningsjaar meer bedraagt dan € 82 504, dan wel, ingeval de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, de gezamenlijke grondslag sparen en beleggen, bedoeld in artikel 5.2, tweede lid, van de Wet inkomstenbelasting 2001, van de belanghebbende en zijn partner in het berekeningsjaar meer bedraagt dan € 82 504. Bij de bepaling van de grondslag, bedoeld in de vorige volzin, wordt geen rekening gehouden met de vrijstelling, bedoeld in artikel 5.13 van de Wet inkomstenbelasting 2001."
   },
   "vermogensgrens_met_partner": {
    "waarde": "82504",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2016) (gezamenlijke grondslag sparen en beleggen, art. 5.2 lid 2 Wet IB 2001; alleen bij het gehele berekeningsjaar dezelfde partner; hetzelfde bedrag als zonder partner — het verschil zit in het tweemaal heffingvrije vermogen van de grondslag)",
    "bron": "BWBR0018451, geldend van 01-01-2016 t/m 31-12-2016 (verbatim); Stcrt. 2015, 40655, art. I ('telkens')",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2015-40655.html"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1-2 (tekst 2016) jo. Regeling zorgverzekering art. 6.3.1 en bijlage 4 (woonlandfactoren 2016)",
    "bron": "Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 11 november 2015, kenmerk 862829-143414-Z, Stcrt. 2015, 40860, art. I (primaire tekst gelezen 2026-10-22; in werking 01-01-2016, art. II; toelichting: berekend door het Zorginstituut Nederland, advies van 1 oktober 2015; de factoren 'gelden voor de bijdrage die verdragsgerechtigden in het jaar 2016 verschuldigd zijn'); gelijk aan de geconsolideerde bijlage 4 van BWBR0018715, geldend van 01-01-2016 t/m 18-01-2016 én van 01-12-2016 t/m 29-12-2016 (beide verbatim gelezen 2026-10-22, 39 landen, alle 39 regels gelijk aan de Staatscourant-tabel en aan elkaar: de bijlage veranderde niet in de loop van 2016). Geen correctie met terugwerkende kracht voor 2016 gevonden (Stcrt. 2017, 66088 art. II betrof 2017, Stcrt. 2019, 58198 art. II betrof 2017–2019)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2015-40860.html",
    "geldig_van": "2016-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de regeling noemt alleen de landnaam (Macedonië). Oude methode (verhouding van gemiddelde zorgkosten in één berekeningsjaar per land): één factor boven 1 (Noorwegen 1,5288). De kolommen berekeningsjaar en zorgkosten uit de bijlage staan per land in het commentaar.",
    "landen": {
     "BE": "0.7029",
     "BA": "0.0634",
     "BG": "0.0657",
     "CY": "0.1645",
     "DK": "0.9247",
     "DE": "0.7407",
     "EE": "0.1677",
     "FI": "0.6299",
     "FR": "0.7504",
     "GR": "0.3590",
     "HU": "0.1186",
     "IE": "0.8585",
     "IS": "0.7847",
     "IT": "0.5569",
     "CV": "0.0227",
     "HR": "0.2006",
     "LV": "0.0921",
     "LI": "0.9395",
     "LT": "0.2198",
     "LU": "0.7776",
     "MK": "0.0511",
     "MT": "0.3001",
     "MA": "0.0125",
     "ME": "0.0812",
     "NO": "1.5288",
     "AT": "0.6337",
     "PL": "0.1158",
     "PT": "0.2395",
     "RO": "0.0630",
     "RS": "0.0757",
     "SI": "0.3150",
     "SK": "0.2302",
     "ES": "0.3733",
     "CZ": "0.2432",
     "TN": "0.0216",
     "TR": "0.0913",
     "GB": "0.6626",
     "SE": "0.8219",
     "CH": "0.6506"
    }
   }
  },
  "2017": {
   "jaar": 2017,
   "status": "draft",
   "geraadpleegd": "2026-10-21",
   "versie": "BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017 en van 01-07-2017 t/m 31-12-2017 (verbatim gelezen 2026-10-21)",
   "versie_opmerking": "Ontstaansbronnen per 01-01-2017 (wetstechnische informatie): Stcrt. 2016, 60569 (art. 2a lid 1: € 82.752); Stb. 2016, 173 (in werking per Stb. 2016, 442: art. 5 lid 2, de uitbetaling van de bestuursrechtelijke premie aan het CAK in plaats van het Zorginstituut — geen rekenregel); Stb. 2016, 469 (art. 2 lid 3: de percentages 2017, 'samen met' Stb. 2015, 472; Stb. 2014, 488; Stb. 2012, 627; Stb. 2011, 620 — de keten van percentagebesluiten). Per 01-07-2017: Stb. 2017, 146 (art. 1 onder e en art. 4, geen rekenregel). Geen rekenregel veranderde in de loop van 2017.",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2017)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2017)",
   "artikel_maandbepaling": "Wzt art. 2 lid 6 (tekst 2017; sinds 01-01-2021 lid 5)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2017 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "art2_lid5_oud_aanwezig": true,
   "art2_lid5_oud": {
    "artikel": "Wet op de zorgtoeslag art. 2 lid 5 (tekst 2017; vervallen per 01-01-2021)",
    "bron": "BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017 (verbatim gelezen 2026-10-21; dezelfde tekst in de versie van 01-07-2017 en in 2018 t/m 2020). Vervallen bij Wet verbetering uitvoerbaarheid toeslagen, Stb. 2020, 543, art. III onder 2 (lid 6–8 vernummerd tot 5–7, onder 3)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2017-01-01",
    "geldig_van": "2017-01-01",
    "geldig_tot": "2017-12-31",
    "tekst": "In afwijking van het eerste lid heeft een verzekerde met een partner die niet heeft voldaan aan de voor hem op grond van artikel 2 van de Zorgverzekeringswet geldende verplichting zich krachtens een zorgverzekering te verzekeren, geen aanspraak op een zorgtoeslag.",
    "opmerking": "Invoer: partner_verzekeringsplicht_niet_nagekomen (ja/nee/onbekend). Of de partner verzekeringsplichtig was en die plicht niet nakwam (Zvw art. 2) codeert de encoding niet; het is invoer. Niet opgegeven: gerekend alsof nagekomen, met een noot."
   },
   "vermogenstoets_basis": "grondslag_sparen_en_beleggen",
   "maand_afronding_opmerking": "Geen parameter maand_afronding_praktijk: voor 2017 is geen rekenvoorbeeld van de Dienst gelezen (de leaflet Berekening zorgtoeslag 2017 is op 2026-10-21 een 404 onder tg0821z71fd en z72fd; SOURCES.md). De encoding gebruikt de standaard 'naar_beneden' (DISCREPANCIES.md #5) en zegt dat in het resultaat; 2022 rondde rekenkundig (#8), dus 2017 is onbekend. Geen uitkomst van de Dienst voor 2017 bekend.",
   "standaardpremie": {
    "waarde": "1530",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2017, art. 1",
    "bron": "Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 22 november 2016, kenmerk 1046186-158039-Z, Stcrt. 2016, 64077 (primaire tekst gelezen 2026-10-21); geconsolideerd BWBR0038756 (geldend van 01-01-2017). Toelichting: gemiddelde nominale premie 2017 € 1.290 (berekend op basis van de werkelijke nominale premies 2017) plus gemiddeld bedrag verplicht eigen risico € 240. 2018: € 1.546 (Stcrt. 2017, 68107)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2016-64077.html",
    "geldig_van": "2017-01-01",
    "tekst": "De standaardpremie wordt voor het jaar 2017 vastgesteld op € 1.530."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1551.60",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2017 (in 2017 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Regeling van de Minister van Sociale Zaken en Werkgelegenheid van 4 november 2016, nr. 2016-0000236680, tot aanpassing van het wettelijk minimumloon per 1 januari 2017, Stcrt. 2016, 60172, art. 1 onder a (primaire tekst gelezen 2026-10-21). De geconsolideerde WML-tekst van 01-01-2017 (BWBR0002638, geldend t/m 30-06-2017) draagt het bedrag als redactionele noot bij art. 8 ('per 1 januari 2017: € 1.551,60'); de wetstechnische informatie noemt Stcrt. 2016, 60172 als ontstaansbron van die versie (naast Stb. 2016, 471 en Stb. 2015, 233, die het bedrag niet raken)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2016-60172.html",
    "geldig_van": "2017-01-01",
    "tekst": "a. € 1.551,60;"
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017 (verbatim; gelijk in de versie van 01-07-2017)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2017-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.551,60 = € 20.108,736. Hoe de Dienst Toeslagen dit in 2017 'vastgesteld' heeft is niet gelezen (leaflet 2017 niet gevonden). De inkomensgrenzen uit de tekst staan in de cases zt-2017-syn-024..027 (laatste euro met recht, Awir art. 14 lid 4-5); of een afgerond drempelinkomen (€ 20.108 of € 20.109, DISCREPANCIES.md #1) ze verschuift staat daar."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "2.305",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2017: 'voor een verzekerde zonder partner op 2,305% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017 (verbatim; gelijk in de versie van 01-07-2017). Vastgesteld bij Stb. 2016, 469 (besluit van 26 november 2016 tot wijziging van het Besluit percentages drempel- en toetsingsinkomen zorgtoeslag), art. I, rij 2017; nota van toelichting tabel 1: 2016 2,380%, 2017 op het pad van de eerdere besluiten 2,655%, maatregel −0,35 procentpunt (structureel; 'structurele verlenging van de tijdelijke verhoging van de zorgtoeslag', koopkrachtpakket 2017), 'na huidige maatregel' 2,305%; primaire tekst gelezen 2026-10-21. De tekst van 01-01-2016 (gelezen): 2,380%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2017-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "5.055",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2017: 'voor verzekerden met een partner vastgesteld op 5,055% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017 (verbatim; gelijk in de versie van 01-07-2017). Stb. 2016, 469, art. I, rij 2017; tabel 1: 2016 5,220%, 2017 op het pad 5,755%, maatregel −0,70 procentpunt (structureel), 'na huidige maatregel' 5,055%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2017-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.460",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2017: 'vermeerderd met 13,460% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner)",
    "bron": "BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017 (verbatim; gelijk in de versie van 01-07-2017); Stb. 2016, 469, art. I, rij 2017 (tabel 1: 2016 13,43%, 2017 13,46%, het schema van +0,03 procentpunt per jaar sinds de maatregel 2014; maatregel '–'). De tekst van 01-01-2016 (gelezen): 13,430%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2017-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017 (verbatim, zelfde tekst als 2018–2026). Gevolgd door lid 5 (oud), zie art2_lid5_oud",
    "url": "https://wetten.overheid.nl/BWBR0018451/2017-01-01"
   },
   "heffingvrij_vermogen": {
    "waarde": "25000",
    "artikel": "Wet inkomstenbelasting 2001 art. 5.5 (tekst 2017); art. 5.2 lid 1 (grondslag sparen en beleggen = rendementsgrondslag op de peildatum voor zover boven het heffingvrije vermogen) en lid 2 (partners het gehele jaar: de gezamenlijke rendementsgrondslag voor zover boven het heffingvrije vermogen van de belastingplichtige en zijn partner)",
    "bron": "BWBR0011353, geldend van 01-01-2017 t/m 31-03-2017 en van 01-07-2017 t/m 31-12-2017 (beide verbatim gelezen 2026-10-21: 'Het heffingvrije vermogen bedraagt € 25.000.'). Nodig omdat Wzt art. 2a lid 1 (tekst 2017) op de grondslag sparen en beleggen rust; de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen af (éénmaal zonder partner, tweemaal met het hele jaar dezelfde partner). Effectieve grenzen 2017 op de rendementsgrondslag: € 107.752 / € 132.752. 2018: € 30.000",
    "url": "https://wetten.overheid.nl/BWBR0011353/2017-01-01",
    "tekst": "Het heffingvrije vermogen bedraagt € 25.000."
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "82752",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2017) (grondslag sparen en beleggen, art. 5.2 lid 1 Wet IB 2001, in het berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017 (verbatim). Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 7 november 2016, kenmerk 1033369-157294-WJZ, Stcrt. 2016, 60569, art. I: '€ 82.504' telkens vervangen door '€ 82.752' (tabelcorrectiefactor 0,3%, Wzt art. 2a lid 2, 'een indexatie van € 248'; toelichting: 'Verzekerden met een vermogen boven het heffingvrije vermogen plus € 82.752 hebben geen recht op de zorgtoeslag'; primaire tekst gelezen 2026-10-21). De tekst van 01-01-2016 (gelezen): € 82.504. 2018: € 83.415 (Stcrt. 2017, 65628)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2016-60569.html",
    "tekst": "In afwijking van artikel 7, derde lid, van de Algemene wet inkomensafhankelijke regelingen bestaat geen aanspraak op een zorgtoeslag indien de grondslag sparen en beleggen, bedoeld in artikel 5.2, eerste lid, van de Wet inkomstenbelasting 2001, van de belanghebbende in het berekeningsjaar meer bedraagt dan € 82.752, dan wel, ingeval de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, de gezamenlijke grondslag sparen en beleggen, bedoeld in artikel 5.2, tweede lid, van de Wet inkomstenbelasting 2001, van de belanghebbende en zijn partner in het berekeningsjaar meer bedraagt dan € 82.752. Bij de bepaling van de grondslag, bedoeld in de vorige volzin, wordt geen rekening gehouden met de vrijstelling, bedoeld in artikel 5.13 van de Wet inkomstenbelasting 2001."
   },
   "vermogensgrens_met_partner": {
    "waarde": "82752",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2017) (gezamenlijke grondslag sparen en beleggen, art. 5.2 lid 2 Wet IB 2001; alleen bij het gehele berekeningsjaar dezelfde partner; hetzelfde bedrag als zonder partner — het verschil zit in het tweemaal heffingvrije vermogen van de grondslag)",
    "bron": "BWBR0018451, geldend van 01-01-2017 t/m 30-06-2017 (verbatim); Stcrt. 2016, 60569, art. I ('telkens')",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2016-60569.html"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1-2 (tekst 2017) jo. Regeling zorgverzekering art. 6.3.1 en bijlage 4 (woonlandfactoren 2017)",
    "bron": "Regeling van de Minister van Volksgezondheid, Welzijn en Sport van 9 november 2016, kenmerk 1040302-157680-Z, Stcrt. 2016, 61016, art. I (primaire tekst gelezen 2026-10-21; in werking 01-01-2017; toelichting: berekend door het Zorginstituut Nederland, advies van 18 oktober 2016); gelijk aan de geconsolideerde bijlage 4 van BWBR0018715, geldend van 01-01-2017 t/m 20-01-2017 (verbatim gelezen 2026-10-21, 39 landen, elk met berekeningsjaar, gemiddelde zorgkosten woonland en Nederland). Zweden: Stcrt. 2017, 66088 art. II stelt 'het in artikel 6.3.1, eerste lid, van de Regeling zorgverzekering bedoelde verhoudingsgetal' voor Zweden voor 2017 op 0,8263 (terugwerkend tot 01-01-2017, art. III lid 2); de toelichting: de berekening voor Zweden 'is onjuist geweest', het CAK restitueert te veel geheven verdragsbijdrage, en 'Deze wijziging heeft geen effect op de hoogte van de zorgtoeslag. Deze wordt niet ten nadele van de verdragsgerechtigden gecorrigeerd.' — de encoding houdt daarom voor de zorgtoeslag de gepubliceerde 1,0948. Duitsland: 0,8372 gepubliceerd; voor de verdragsbijdrage met terugwerkende kracht 0,7532 (Stcrt. 2019, 58198 art. II, 'zonder effect op de zorgtoeslag')",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2016-61016.html",
    "geldig_van": "2017-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de regeling noemt alleen de landnaam (Macedonië). Oude methode (verhouding van gemiddelde zorgkosten in één berekeningsjaar per land): twee factoren boven 1 (Noorwegen 1,5288, Zweden 1,0948). De kolommen berekeningsjaar en zorgkosten uit de bijlage staan per land in het commentaar.",
    "landen": {
     "BE": "0.7029",
     "BA": "0.0645",
     "BG": "0.0743",
     "CY": "0.1384",
     "DK": "0.9715",
     "DE": "0.8372",
     "EE": "0.2109",
     "FI": "0.6463",
     "FR": "0.8245",
     "GR": "0.3590",
     "HU": "0.1310",
     "IE": "0.8226",
     "IS": "0.8594",
     "IT": "0.5569",
     "CV": "0.0175",
     "HR": "0.1674",
     "LV": "0.0915",
     "LI": "0.9473",
     "LT": "0.2235",
     "LU": "0.7497",
     "MK": "0.0529",
     "MT": "0.3269",
     "MA": "0.0125",
     "ME": "0.0763",
     "NO": "1.5288",
     "AT": "0.6476",
     "PL": "0.1606",
     "PT": "0.2510",
     "RO": "0.0630",
     "RS": "0.0750",
     "SI": "0.3243",
     "SK": "0.2352",
     "ES": "0.3767",
     "CZ": "0.2386",
     "TN": "0.0216",
     "TR": "0.0913",
     "GB": "0.6269",
     "SE": "1.0948",
     "CH": "0.6824"
    }
   }
  },
  "2018": {
   "jaar": 2018,
   "status": "draft",
   "geraadpleegd": "2026-10-19",
   "versie": "BWBR0018451, geldend van 01-01-2018 t/m 31-12-2018 (verbatim gelezen 2026-10-19)",
   "versie_opmerking": "Eén versie in 2018. Ontstaansbronnen per 01-01-2018 (wetstechnische informatie): Stcrt. 2017, 65628 (art. 2a lid 1: € 83.415); Stb. 2017, 436 (art. 2 lid 3: de percentages 2018, 'samen met' Stb. 2016, 469; Stb. 2015, 472; Stb. 2014, 488; Stb. 2012, 627; Stb. 2011, 620 — de keten van percentagebesluiten). Geen rekenregel veranderde in de loop van 2018.",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2018)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2018)",
   "artikel_maandbepaling": "Wzt art. 2 lid 6 (tekst 2018; sinds 01-01-2021 lid 5)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2018 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "art2_lid5_oud_aanwezig": true,
   "art2_lid5_oud": {
    "artikel": "Wet op de zorgtoeslag art. 2 lid 5 (tekst 2018; vervallen per 01-01-2021)",
    "bron": "BWBR0018451, geldend van 01-01-2018 t/m 31-12-2018 (verbatim gelezen 2026-10-19; dezelfde tekst als 2019 en 2020). Vervallen bij Wet verbetering uitvoerbaarheid toeslagen, Stb. 2020, 543, art. III onder 2 (lid 6–8 vernummerd tot 5–7, onder 3)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2018-01-01",
    "geldig_van": "2018-01-01",
    "geldig_tot": "2018-12-31",
    "tekst": "In afwijking van het eerste lid heeft een verzekerde met een partner die niet heeft voldaan aan de voor hem op grond van artikel 2 van de Zorgverzekeringswet geldende verplichting zich krachtens een zorgverzekering te verzekeren, geen aanspraak op een zorgtoeslag.",
    "opmerking": "Invoer: partner_verzekeringsplicht_niet_nagekomen (ja/nee/onbekend). Of de partner verzekeringsplichtig was en die plicht niet nakwam (Zvw art. 2) codeert de encoding niet; het is invoer. Niet opgegeven: gerekend alsof nagekomen, met een noot."
   },
   "vermogenstoets_basis": "grondslag_sparen_en_beleggen",
   "maand_afronding_opmerking": "Geen parameter maand_afronding_praktijk: voor 2018 is geen rekenvoorbeeld van de Dienst gelezen (de leaflet Berekening zorgtoeslag 2018 is op 2026-10-19 een 404 onder tg0821z80fd t/m z83fd; SOURCES.md). De encoding gebruikt de standaard 'naar_beneden' (DISCREPANCIES.md #5) en zegt dat in het resultaat; 2022 rondde rekenkundig (#8), dus 2018 is onbekend. Uit de rechtspraak is voor 2018 één voorschot van de Dienst bekend (ECLI:NL:RVS:2019:1346, woonlandfactor België), zonder het inkomen waarop het rustte; geen case (SOURCES.md 4).",
   "standaardpremie": {
    "waarde": "1546",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2018, art. 1",
    "bron": "Regeling van de Minister voor Medische Zorg van 21 november 2017, kenmerk 1258503-170318-Z, Stcrt. 2017, 68107 (primaire tekst gelezen 2026-10-19); geconsolideerd BWBR0040244 (geldend van 01-01-2018). Toelichting: geraamde gemiddelde nominale premie € 1.312 (berekend door de NZa op basis van de werkelijke premies 2018 inclusief collectieve contracten) plus geraamd gemiddeld verplicht eigen risico € 234. 2019: € 1.609 (Stcrt. 2018, 66728)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2017-68107.html",
    "geldig_van": "2018-01-01",
    "tekst": "De standaardpremie, bedoeld in artikel 1, onderdeel g, van de Wet op de zorgtoeslag, wordt voor het berekeningsjaar 2018 vastgesteld op € 1.546."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1578.00",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2018 (in 2018 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Regeling van de Minister van SZW van 9 oktober 2017, nr. 2017-0000159683, tot aanpassing wettelijk minimumloon per 1 januari 2018, Stcrt. 2017, 58642, art. 1 onder a (primaire tekst gelezen 2026-10-19). De geconsolideerde WML-tekst van 01-01-2018 (BWBR0002638) draagt het bedrag als redactionele noot bij art. 8 ('per 1 januari 2018: € 1.578,00'); de wetstechnische informatie noemt Stcrt. 2017, 58642 als ontstaansbron van die versie (naast Stb. 2017, 484/485, 290 en 24, die het bedrag niet raken)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2017-58642.html",
    "geldig_van": "2018-01-01",
    "tekst": "a. € 1.578,00;"
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2018 t/m 31-12-2018 (verbatim)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2018-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.578,00 = € 20.450,88. Hoe de Dienst Toeslagen dit in 2018 'vastgesteld' heeft is niet gelezen (leaflet 2018 niet gevonden). De inkomensgrenzen uit de tekst: € 28.720 zonder en € 35.996 met toeslagpartner (laatste euro met recht, Awir art. 14 lid 4-5). Anders dan in 2019 en 2020 beslist een afgerond drempelinkomen hier wél: met € 20.450 (naar beneden) worden de grenzen € 28.719 / € 35.995, met € 20.451 (naar boven) blijven zij € 28.720 / € 35.996 — als ooit een publicatie van de Dienst voor 2018 een grens noemt, beslist die DISCREPANCIES.md #1 voor 2018 (cases zt-2018-syn-020..023)."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "1.990",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2018: 'voor een verzekerde zonder partner op 1,990% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2018 t/m 31-12-2018 (verbatim). Vastgesteld bij Stb. 2017, 436 (besluit van 10 november 2017 tot wijziging van het Besluit percentages drempel- en toetsingsinkomen zorgtoeslag), art. I, rij 2018; nota van toelichting tabel 1: 2017 2,305%, 2018 'na maatregel 2016' 2,32%, maatregel −0,33 procentpunt (structureel, koopkrachtbesluitvorming 2018), 'na huidige maatregel' 1,990%; primaire tekst gelezen 2026-10-19",
    "url": "https://wetten.overheid.nl/BWBR0018451/2018-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "4.750",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2018: 'voor verzekerden met een partner vastgesteld op 4,750% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2018 t/m 31-12-2018 (verbatim). Stb. 2017, 436, art. I, rij 2018; tabel 1: 2017 5,055%, 2018 'na maatregel 2016' 5,07%, maatregel −0,32 procentpunt (structureel), 'na huidige maatregel' 4,75%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2018-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.490",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2018: 'vermeerderd met 13,490% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner)",
    "bron": "BWBR0018451, geldend van 01-01-2018 t/m 31-12-2018 (verbatim); Stb. 2017, 436, art. I, rij 2018 (tabel 1: 2017 13,46%, 2018 13,49%, het schema van +0,03 procentpunt per jaar sinds de maatregel 2014; maatregel '–': 'De afbouwpercentages ... veranderen niet')",
    "url": "https://wetten.overheid.nl/BWBR0018451/2018-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2018 t/m 31-12-2018 (verbatim, zelfde tekst als 2019–2026). Gevolgd door lid 5 (oud), zie art2_lid5_oud",
    "url": "https://wetten.overheid.nl/BWBR0018451/2018-01-01"
   },
   "heffingvrij_vermogen": {
    "waarde": "30000",
    "artikel": "Wet inkomstenbelasting 2001 art. 5.5 (tekst 2018); art. 5.2 lid 1 (grondslag sparen en beleggen = rendementsgrondslag op de peildatum voor zover boven het heffingvrije vermogen) en lid 2 (partners het gehele jaar: de gezamenlijke rendementsgrondslag voor zover boven het heffingvrije vermogen van de belastingplichtige en zijn partner)",
    "bron": "BWBR0011353, geldend van 01-01-2018 t/m 31-12-2018 (verbatim gelezen 2026-10-19: 'Het heffingvrije vermogen bedraagt € 30.000.'). Nodig omdat Wzt art. 2a lid 1 (tekst 2018) op de grondslag sparen en beleggen rust; de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen af (éénmaal zonder partner, tweemaal met het hele jaar dezelfde partner). Effectieve grenzen 2018 op de rendementsgrondslag: € 113.415 / € 143.415. 2019: € 30.360",
    "url": "https://wetten.overheid.nl/BWBR0011353/2018-01-01",
    "tekst": "Het heffingvrije vermogen bedraagt € 30.000."
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "83415",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2018) (grondslag sparen en beleggen, art. 5.2 lid 1 Wet IB 2001, in het berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2018 t/m 31-12-2018 (verbatim). Regeling van de Minister voor Medische Zorg van 9 november 2017, kenmerk 1251672-169822, Stcrt. 2017, 65628, art. I: '€ 82.752' telkens vervangen door '€ 83.415' (tabelcorrectiefactor 0,8%, Wzt art. 2a lid 2; toelichting: 'Verzekerden met een vermogen boven het heffingvrije vermogen plus € 83.415 hebben geen recht op zorgtoeslag'; primaire tekst gelezen 2026-10-19). 2019: € 84.416 (Stcrt. 2018, 61205)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2017-65628.html",
    "tekst": "In afwijking van artikel 7, derde lid, van de Algemene wet inkomensafhankelijke regelingen bestaat geen aanspraak op een zorgtoeslag indien de grondslag sparen en beleggen, bedoeld in artikel 5.2, eerste lid, van de Wet inkomstenbelasting 2001, van de belanghebbende in het berekeningsjaar meer bedraagt dan € 83.415, dan wel, ingeval de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, de gezamenlijke grondslag sparen en beleggen, bedoeld in artikel 5.2, tweede lid, van de Wet inkomstenbelasting 2001, van de belanghebbende en zijn partner in het berekeningsjaar meer bedraagt dan € 83.415. Bij de bepaling van de grondslag, bedoeld in de vorige volzin, wordt geen rekening gehouden met de vrijstelling, bedoeld in artikel 5.13 van de Wet inkomstenbelasting 2001."
   },
   "vermogensgrens_met_partner": {
    "waarde": "83415",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2018) (gezamenlijke grondslag sparen en beleggen, art. 5.2 lid 2 Wet IB 2001; alleen bij het gehele berekeningsjaar dezelfde partner; hetzelfde bedrag als zonder partner — het verschil zit in het tweemaal heffingvrije vermogen van de grondslag)",
    "bron": "BWBR0018451, geldend van 01-01-2018 t/m 31-12-2018 (verbatim); Stcrt. 2017, 65628, art. I ('telkens')",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2017-65628.html"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1 en 2 (tekst 2018) jo. Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4",
    "bron": "Regeling van de Minister van VWS van 10 november 2017, kenmerk 1241265-168333-Z, Stcrt. 2017, 66088, art. I onder B (bijlage 4 Rzv voor 2018; in werking 01-01-2018; primaire tekst gelezen 2026-10-19); gecontroleerd tegen de geconsolideerde bijlage 4 (BWBR0018715, geldend van 01-01-2018 t/m 15-01-2018): alle 39 getallen gelijk. Toelichting: gebaseerd op de gemiddelde zorgkosten van 2015 (per land de bron genoemd); onder A werd art. 6.3.1 lid 1 herschreven ('uit hoofde van de Zorgverzekeringswet en de Wet langdurige zorg') en lid 9 verwijst sindsdien naar bijlage 4. Art. II van dezelfde regeling stelde het verhoudingsgetal voor Zweden voor 2017 met terugwerkende kracht op 0,8263 (CHANGES.md). Dit is de laatste tabel naar de oude methode, met vier factoren boven 1 (Denemarken 1,0830, IJsland 1,0826, Liechtenstein 1,1866, Noorwegen 1,4015); in 2019 werd de tabel herijkt op basisjaar 2015 (Stcrt. 2018, 60576). LET OP: het getal voor Duitsland (0,9559) is op 26-10-2019 met terugwerkende kracht tot 01-01-2018 opnieuw vastgesteld op 0,8595 (Stcrt. 2019, 58198, art. II: te hoog vastgesteld; het CAK restitueert te veel geheven verdragsbijdrage; 'geen effect op de hoogte van de zorgtoeslag'). Dit bestand draagt daarom het voor de zorgtoeslag gehanteerde, oorspronkelijk gepubliceerde getal 0,9559; zie CHANGES.md 2019-10-26. Niet vergeleken met de leaflet 2018 van de Dienst (niet gevonden). Bevestigd door de rechtspraak voor België: ABRvS 24 april 2019, ECLI:NL:RVS:2019:1346 ('Deze woonlandfactor bedraagt in 2018 0,7193'), waar de Dienst en de rechtbank de factor op een voorschot 2018 toepasten",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2017-66088.html",
    "geldig_van": "2018-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de regeling noemt alleen de landnaam (Macedonië). Oude methode: vier factoren boven 1 (Denemarken 1,0830, IJsland 1,0826, Liechtenstein 1,1866, Noorwegen 1,4015). Duitsland: 0,9559 gepubliceerd en voor de zorgtoeslag gehanteerd; 0,8595 voor de verdragsbijdrage met terugwerkende kracht (Stcrt. 2019, 58198 art. II).",
    "landen": {
     "BE": "0.7193",
     "BA": "0.1006",
     "BG": "0.0909",
     "CY": "0.1384",
     "DK": "1.0830",
     "DE": "0.9559",
     "EE": "0.2491",
     "FI": "0.7120",
     "FR": "0.9262",
     "GR": "0.1573",
     "HU": "0.1501",
     "IE": "0.8326",
     "IS": "1.0826",
     "IT": "0.5569",
     "CV": "0.0175",
     "HR": "0.1834",
     "LV": "0.1096",
     "LI": "1.1866",
     "LT": "0.2650",
     "LU": "0.7497",
     "MK": "0.0595",
     "MT": "0.3269",
     "MA": "0.0125",
     "ME": "0.0829",
     "NO": "1.4015",
     "AT": "0.7330",
     "PL": "0.1606",
     "PT": "0.2521",
     "RO": "0.0903",
     "RS": "0.0734",
     "SI": "0.3696",
     "SK": "0.2587",
     "ES": "0.4365",
     "CZ": "0.2806",
     "TN": "0.0216",
     "TR": "0.0894",
     "GB": "0.6789",
     "SE": "0.8104",
     "CH": "0.8948"
    }
   }
  },
  "2019": {
   "jaar": 2019,
   "status": "draft",
   "geraadpleegd": "2026-10-18",
   "versie": "BWBR0018451, geldend van 01-01-2019 t/m 31-12-2019 (verbatim gelezen 2026-10-18)",
   "versie_opmerking": "Eén versie in 2019. Ontstaansbronnen per 01-01-2019 (wetstechnische informatie): Stcrt. 2018, 61205 (art. 2a lid 1: € 84.416); Stb. 2018, 431 (art. 2 lid 3: de percentages 2019); Stb. 2018, 356 (Verzamelwet VWS 2018, art. XVI; per Stb. 2018, 454 trad op 01-01-2019 alleen onderdeel A sub 2 in werking: art. 1 lid 1 onder c, 'artikel 24, eerste of tweede lid' van de Zvw; onderdeel A sub 1 (art. 68 Zvw) en B (art. 5 lid 3–4) niet — de tekst van 01-01-2019 noemt art. 68 Zvw dan ook niet). Geen rekenregel veranderde in de loop van 2019.",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2019)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2019)",
   "artikel_maandbepaling": "Wzt art. 2 lid 6 (tekst 2019; sinds 01-01-2021 lid 5)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2019 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "art2_lid5_oud_aanwezig": true,
   "art2_lid5_oud": {
    "artikel": "Wet op de zorgtoeslag art. 2 lid 5 (tekst 2019; vervallen per 01-01-2021)",
    "bron": "BWBR0018451, geldend van 01-01-2019 t/m 31-12-2019 (verbatim gelezen 2026-10-18; dezelfde tekst als 2020). Vervallen bij Wet verbetering uitvoerbaarheid toeslagen, Stb. 2020, 543, art. III onder 2 (lid 6–8 vernummerd tot 5–7, onder 3)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2019-01-01",
    "geldig_van": "2019-01-01",
    "geldig_tot": "2019-12-31",
    "tekst": "In afwijking van het eerste lid heeft een verzekerde met een partner die niet heeft voldaan aan de voor hem op grond van artikel 2 van de Zorgverzekeringswet geldende verplichting zich krachtens een zorgverzekering te verzekeren, geen aanspraak op een zorgtoeslag.",
    "opmerking": "Invoer: partner_verzekeringsplicht_niet_nagekomen (ja/nee/onbekend). Of de partner verzekeringsplichtig was en die plicht niet nakwam (Zvw art. 2) codeert de encoding niet; het is invoer. Niet opgegeven: gerekend alsof nagekomen, met een noot."
   },
   "vermogenstoets_basis": "grondslag_sparen_en_beleggen",
   "maand_afronding_opmerking": "Geen parameter maand_afronding_praktijk: voor 2019 is geen rekenvoorbeeld van de Dienst gelezen (de leaflet Berekening zorgtoeslag 2019 is op 2026-10-18 een 404 onder tg0821z90fd t/m z94fd; een zoekopdracht vond geen kopie; SOURCES.md). De encoding gebruikt de standaard 'naar_beneden' (DISCREPANCIES.md #5) en zegt dat in het resultaat; 2022 rondde rekenkundig (#8), dus 2019 is onbekend. De jaarbedragen van twee beschikkingen 2019 zijn wel bekend uit ECLI:NL:RVS:2023:1809 (cases zt-2019-rul-001/-002); een maandbedrag noemt de uitspraak niet.",
   "standaardpremie": {
    "waarde": "1609",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2019, art. 1",
    "bron": "Regeling van de Minister voor Medische Zorg van 20 november 2018, kenmerk 1445257-183953-Z, Stcrt. 2018, 66728 (primaire tekst gelezen 2026-10-18); geconsolideerd BWBR0041579 (geldend van 01-01-2019; materieel uitgewerkt per 01-01-2021). Toelichting: geraamde gemiddelde nominale premie € 1.385 (berekend door de NZa) plus geraamd gemiddeld verplicht eigen risico € 224. 2020: € 1.642 (Stcrt. 2019, 64399)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2018-66728.html",
    "geldig_van": "2019-01-01",
    "tekst": "De standaardpremie, bedoeld in artikel 1, onderdeel g, van de Wet op de zorgtoeslag, wordt voor het berekeningsjaar 2019 vastgesteld op € 1.609."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1615.80",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2019 (in 2019 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Regeling van de Minister van SZW van 15 oktober 2018, nr. 2018-0000161951, tot aanpassing wettelijk minimumloon per 1 januari 2019, Stcrt. 2018, 59237, art. 1 onder a (primaire tekst gelezen 2026-10-18). De geconsolideerde WML-tekst van 01-01-2019 (BWBR0002638) draagt het bedrag als redactionele noot bij art. 8 ('per 1 januari 2019: € 1.615,80'); de wetstechnische informatie noemt Stcrt. 2018, 59237 als ontstaansbron van die versie",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2018-59237.html",
    "geldig_van": "2019-01-01",
    "tekst": "a. € 1.615,80;"
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2019 t/m 31-12-2019 (verbatim)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2019-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.615,80 = € 20.940,768. Hoe de Dienst Toeslagen dit in 2019 'vastgesteld' heeft is niet gelezen (leaflet 2019 niet gevonden). De inkomensgrenzen uit de tekst: € 29.562 zonder en € 37.885 met toeslagpartner (laatste euro met recht, Awir art. 14 lid 4-5). De twee beschikkingen in ECLI:NL:RVS:2023:1809 (€ 1.367 bij € 27.946; € 2.314 bij € 13.314, met partner) komen met € 20.940,768, € 20.940 en € 20.941 op hetzelfde hele bedrag uit en beslissen DISCREPANCIES.md #1 voor 2019 dus niet."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "2.005",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2019: 'voor een verzekerde zonder partner op 2,005% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2019 t/m 31-12-2019 (verbatim). Vastgesteld bij Stb. 2018, 431 (besluit van 5 november 2018 tot wijziging van het Besluit percentages drempel- en toetsingsinkomen zorgtoeslag), art. I, rij 2019; nota van toelichting tabel 1: 2018 1,990%, 2019 'na vorige maatregel' 2,005%, maatregel '–', 'na huidige maatregel' 2,005% (het schema van +0,015 procentpunt per jaar, ongewijzigd); primaire tekst gelezen 2026-10-18",
    "url": "https://wetten.overheid.nl/BWBR0018451/2019-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "4.315",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2019: 'voor verzekerden met een partner vastgesteld op 4,315% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2019 t/m 31-12-2019 (verbatim). Stb. 2018, 431, art. I, rij 2019; tabel 1: 2018 4,75%, 2019 'na vorige maatregel' 4,765%, maatregel −0,45 procentpunt (structureel, 'verlaging van de normpercentages voor meerpersoonshuishoudens met 0,45 procentpunt'), 'na huidige maatregel' 4,315%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2019-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.520",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2019: 'vermeerderd met 13,520% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner)",
    "bron": "BWBR0018451, geldend van 01-01-2019 t/m 31-12-2019 (verbatim); Stb. 2018, 431, art. I, rij 2019 (tabel 1: 2018 13,49%, 2019 13,52%, het schema van +0,03 procentpunt per jaar; maatregel '–')",
    "url": "https://wetten.overheid.nl/BWBR0018451/2019-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2019 t/m 31-12-2019 (verbatim, zelfde tekst als 2020–2026). Gevolgd door lid 5 (oud), zie art2_lid5_oud",
    "url": "https://wetten.overheid.nl/BWBR0018451/2019-01-01"
   },
   "heffingvrij_vermogen": {
    "waarde": "30360",
    "artikel": "Wet inkomstenbelasting 2001 art. 5.5 (tekst 2019); art. 5.2 lid 1 (grondslag sparen en beleggen = rendementsgrondslag op de peildatum voor zover boven het heffingvrije vermogen) en lid 2 (partners het gehele jaar: de gezamenlijke rendementsgrondslag voor zover boven het heffingvrije vermogen van de belastingplichtige en zijn partner)",
    "bron": "BWBR0011353, geldend van 01-01-2019 t/m 31-12-2019 (verbatim gelezen 2026-10-18: 'Het heffingvrije vermogen bedraagt € 30.360.'). Nodig omdat Wzt art. 2a lid 1 (tekst 2019) op de grondslag sparen en beleggen rust; de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen af (éénmaal zonder partner, tweemaal met het hele jaar dezelfde partner). Effectieve grenzen 2019 op de rendementsgrondslag: € 114.776 / € 145.136. 2020: € 30.846",
    "url": "https://wetten.overheid.nl/BWBR0011353/2019-01-01",
    "tekst": "Het heffingvrije vermogen bedraagt € 30.360."
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "84416",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2019) (grondslag sparen en beleggen, art. 5.2 lid 1 Wet IB 2001, in het berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2019 t/m 31-12-2019 (verbatim). Regeling van de Minister voor Medische Zorg van 24 oktober 2018, kenmerk 1436592-183110-WJZ, Stcrt. 2018, 61205, art. I: '€ 83.415' telkens vervangen door '€ 84.416' (tabelcorrectiefactor 1,2%, Wzt art. 2a lid 2; primaire tekst gelezen 2026-10-18). 2020: € 85.767 (Stcrt. 2019, 61842)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2018-61205.html",
    "tekst": "In afwijking van artikel 7, derde lid, van de Algemene wet inkomensafhankelijke regelingen bestaat geen aanspraak op een zorgtoeslag indien de grondslag sparen en beleggen, bedoeld in artikel 5.2, eerste lid, van de Wet inkomstenbelasting 2001, van de belanghebbende in het berekeningsjaar meer bedraagt dan € 84.416, dan wel, ingeval de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, de gezamenlijke grondslag sparen en beleggen, bedoeld in artikel 5.2, tweede lid, van de Wet inkomstenbelasting 2001, van de belanghebbende en zijn partner in het berekeningsjaar meer bedraagt dan € 84.416. Bij de bepaling van de grondslag, bedoeld in de vorige volzin, wordt geen rekening gehouden met de vrijstelling, bedoeld in artikel 5.13 van de Wet inkomstenbelasting 2001."
   },
   "vermogensgrens_met_partner": {
    "waarde": "84416",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2019) (gezamenlijke grondslag sparen en beleggen, art. 5.2 lid 2 Wet IB 2001; alleen bij het gehele berekeningsjaar dezelfde partner; hetzelfde bedrag als zonder partner — het verschil zit in het tweemaal heffingvrije vermogen van de grondslag)",
    "bron": "BWBR0018451, geldend van 01-01-2019 t/m 31-12-2019 (verbatim); Stcrt. 2018, 61205, art. I ('telkens')",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2018-61205.html"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1 en 2 (tekst 2019) jo. Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4",
    "bron": "Regeling van de Minister voor Medische Zorg van 22 oktober 2018, kenmerk 1432459-182639, Stcrt. 2018, 60576, art. I (bijlage 4 Rzv voor 2019; in werking 01-01-2019; primaire tekst gelezen 2026-10-18); gecontroleerd tegen de geconsolideerde bijlage 4 (BWBR0018715, geldend van 01-01-2019 t/m 15-01-2019): alle 39 getallen gelijk. Toelichting: berekend door het CAK (advies 18 oktober 2018): de factoren van 2018 (basisjaar voor alle landen gelijkgetrokken naar 2015) geïndexeerd met de WHO-gegevens over de zorgkosten tot en met 2015; de toelichting drukt per land het basisjaar, de factor van het basisjaar en de indexfactor (Duitsland: 2014, 0,8372 × 1,04 = 0,8701). LET OP: het getal voor Duitsland (0,8701) is op 26-10-2019 met terugwerkende kracht tot 01-01-2019 opnieuw vastgesteld op 0,7827 (Stcrt. 2019, 58198, art. II: te hoog vastgesteld; het CAK restitueert te veel geheven verdragsbijdrage; 'geen effect op de hoogte van de zorgtoeslag', die niet ten nadele wordt herzien). Dit bestand draagt daarom het voor de zorgtoeslag gehanteerde, oorspronkelijk gepubliceerde getal 0,8701; zie CHANGES.md 2019-10-26. Niet vergeleken met de leaflet 2019 van de Dienst (niet gevonden)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2018-60576.html",
    "geldig_van": "2019-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de regeling noemt alleen de landnaam (Macedonië). Oude indexeringsmethode: alleen Noorwegen 1,3729 boven 1 (Denemarken 0,9951, IJsland 0,9802, Liechtenstein 0,9720 eronder). Duitsland: 0,8701 gepubliceerd en voor de zorgtoeslag gehanteerd; 0,7827 voor de verdragsbijdrage met terugwerkende kracht (Stcrt. 2019, 58198 art. II).",
    "landen": {
     "BE": "0.7392",
     "BA": "0.0672",
     "BG": "0.0735",
     "CY": "0.1363",
     "DK": "0.9951",
     "DE": "0.8701",
     "EE": "0.2262",
     "FI": "0.7161",
     "FR": "0.8316",
     "GR": "0.2490",
     "HU": "0.1381",
     "IE": "0.8667",
     "IS": "0.9802",
     "IT": "0.5470",
     "CV": "0.0177",
     "HR": "0.1674",
     "LV": "0.0672",
     "LI": "0.9720",
     "LT": "0.2399",
     "LU": "0.7358",
     "MK": "0.0565",
     "MT": "0.3574",
     "MA": "0.0193",
     "ME": "0.0821",
     "NO": "1.3729",
     "AT": "0.6632",
     "PL": "0.1691",
     "PT": "0.2616",
     "RO": "0.0814",
     "RS": "0.0714",
     "SI": "0.3377",
     "SK": "0.2405",
     "ES": "0.4001",
     "CZ": "0.2412",
     "TN": "0.0292",
     "TR": "0.0874",
     "GB": "0.7741",
     "SE": "0.8213",
     "CH": "0.8000"
    }
   }
  },
  "2020": {
   "jaar": 2020,
   "status": "draft",
   "geraadpleegd": "2026-10-14",
   "versie": "BWBR0018451, geldend van 01-01-2020 (verbatim gelezen 2026-10-14)",
   "versie_opmerking": "Twee versies in 2020: 01-01-2020 t/m 18-03-2020 en 19-03-2020 t/m 31-12-2020; de tweede verschilt alleen in de spelling van art. 5 lid 3 (Stb. 2020, 67, art. XVIII, inwerkingtreding Stb. 2020, 93). Geen rekenregel veranderde.",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2020)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2020)",
   "artikel_maandbepaling": "Wzt art. 2 lid 6 (tekst 2020; sinds 01-01-2021 lid 5)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2020 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "art2_lid5_oud_aanwezig": true,
   "art2_lid5_oud": {
    "artikel": "Wet op de zorgtoeslag art. 2 lid 5 (tekst 2020; vervallen per 01-01-2021)",
    "bron": "BWBR0018451, geldend van 01-01-2020 t/m 18-03-2020 (verbatim gelezen 2026-10-14). Vervallen bij Wet verbetering uitvoerbaarheid toeslagen, Stb. 2020, 543, art. III onder 2 (lid 6–8 vernummerd tot 5–7, onder 3)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2020-01-01",
    "geldig_van": "2020-01-01",
    "geldig_tot": "2020-12-31",
    "tekst": "In afwijking van het eerste lid heeft een verzekerde met een partner die niet heeft voldaan aan de voor hem op grond van artikel 2 van de Zorgverzekeringswet geldende verplichting zich krachtens een zorgverzekering te verzekeren, geen aanspraak op een zorgtoeslag.",
    "opmerking": "Invoer: partner_verzekeringsplicht_niet_nagekomen (ja/nee/onbekend). Of de partner verzekeringsplichtig was en die plicht niet nakwam (Zvw art. 2) codeert de encoding niet; het is invoer. Niet opgegeven: gerekend alsof nagekomen, met een noot."
   },
   "vermogenstoets_basis": "grondslag_sparen_en_beleggen",
   "maand_afronding_opmerking": "Geen parameter maand_afronding_praktijk: voor 2020 is geen rekenvoorbeeld van de Dienst gelezen (de leaflet Berekening zorgtoeslag 2020 is op 2026-10-14 een 404 onder tg0821z01fd en z02fd; SOURCES.md, open item 6). De encoding gebruikt de standaard 'naar_beneden' (DISCREPANCIES.md #5) en zegt dat in het resultaat; 2022 rondde rekenkundig (#8), dus 2020 is onbekend.",
   "standaardpremie": {
    "waarde": "1642",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2020, art. 1",
    "bron": "Regeling van de Minister voor Medische Zorg van 19 november 2019, kenmerk 1595061-197094-Z, Stcrt. 2019, 64399 (primaire tekst gelezen 2026-10-14); geconsolideerd BWBR0042806. Toelichting: geraamde gemiddelde nominale premie € 1.415 plus geraamd gemiddeld verplicht eigen risico € 227. 2021: € 1.705 (Stcrt. 2020, 62033)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2019-64399.html",
    "geldig_van": "2020-01-01",
    "tekst": "De standaardpremie, bedoeld in artikel 1, onderdeel g, van de Wet op de zorgtoeslag, bedraagt voor het berekeningsjaar 2020 € 1.642."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1653.60",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2020 (in 2020 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Regeling van de Minister van SZW van 10 oktober 2019, nr. 2019-0000146977, tot halfjaarlijkse aanpassing van het wettelijk minimumloon per 1 januari 2020, Stcrt. 2019, 56680, art. 1 onder a (primaire tekst gelezen 2026-10-14; aanpassingspercentage 1,097% onafgerond, 1,10% na afronding). De geconsolideerde WML-tekst van 01-01-2020 (BWBR0002638) draagt het bedrag als redactionele noot bij art. 8 ('per 1 januari 2020: € 1653,60'); de wetstechnische informatie noemt Stcrt. 2019, 56680 als ontstaansbron van die versie",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2019-56680.html",
    "geldig_van": "2020-01-01",
    "tekst": "a. € 1653,60;"
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2020 t/m 18-03-2020 (verbatim)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2020-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.653,60 = € 21.430,656. Hoe de Dienst Toeslagen dit in 2020 'vastgesteld' heeft is niet gelezen (leaflet 2020 niet gevonden). De inkomensgrenzen uit de tekst: € 30.480 zonder en € 38.945 met toeslagpartner (laatste euro met recht, Awir art. 14 lid 4-5); een afronding van het drempelinkomen op € 21.431 verschuift die grenzen niet (bij € 30.481 geeft ook € 21.431 € 23,54 → € 24 — zie cases zt-2020-syn-009/-011, waar de tekst en een afgerond drempelinkomen dus wél verschillen; niet als discrepantie gelogd zolang geen publicatie van de Dienst voor 2020 gelezen is)."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "1.830",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2020: 'voor een verzekerde zonder partner op 1,830% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2020 t/m 18-03-2020 (verbatim). Vastgesteld bij Stb. 2019, 386 (besluit van 24 oktober 2019 tot wijziging van het Besluit percentages drempel- en toetsingsinkomen zorgtoeslag), art. I, rij 2020; nota van toelichting tabel 1: 2019 2,005%, 2020 'na vorige maatregel' 2,02%, maatregel −0,19 procentpunt, 'na huidige maatregel' 1,83% (structurele verlaging, koopkrachtbesluitvorming 2020); primaire tekst gelezen 2026-10-14",
    "url": "https://wetten.overheid.nl/BWBR0018451/2020-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "4.140",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2020: 'voor verzekerden met een partner vastgesteld op 4,140% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2020 t/m 18-03-2020 (verbatim). Stb. 2019, 386, art. I, rij 2020; tabel 1: 2019 4,315%, 2020 4,33% − 0,19 = 4,14%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2020-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.550",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2020: 'vermeerderd met 13,550% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner)",
    "bron": "BWBR0018451, geldend van 01-01-2020 t/m 18-03-2020 (verbatim); Stb. 2019, 386, art. I, rij 2020 (tabel 1: 2019 13,52%, 2020 13,55%, het schema van +0,03 procentpunt per jaar; de maatregel raakte het afbouwpercentage niet: 'De afbouwpercentages ... veranderen niet')",
    "url": "https://wetten.overheid.nl/BWBR0018451/2020-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2020 t/m 18-03-2020 (verbatim, zelfde tekst als 2021–2026). Gevolgd door lid 5 (oud), zie art2_lid5_oud",
    "url": "https://wetten.overheid.nl/BWBR0018451/2020-01-01"
   },
   "heffingvrij_vermogen": {
    "waarde": "30846",
    "artikel": "Wet inkomstenbelasting 2001 art. 5.5 (tekst 2020); art. 5.2 lid 1 (grondslag sparen en beleggen = rendementsgrondslag op de peildatum voor zover boven het heffingvrije vermogen) en lid 2 (partners het gehele jaar: de gezamenlijke rendementsgrondslag voor zover boven het heffingvrije vermogen van de belastingplichtige en zijn partner)",
    "bron": "BWBR0011353, geldend van 01-01-2020 (verbatim gelezen 2026-10-14: 'Het heffingvrije vermogen bedraagt € 30.846.'). Nodig omdat Wzt art. 2a lid 1 (tekst 2020) op de grondslag sparen en beleggen rust; de encoding vraagt de rendementsgrondslag en trekt het heffingvrije vermogen af (éénmaal zonder partner, tweemaal met het hele jaar dezelfde partner)",
    "url": "https://wetten.overheid.nl/BWBR0011353/2020-01-01",
    "tekst": "Het heffingvrije vermogen bedraagt € 30.846."
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "85767",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2020) (grondslag sparen en beleggen, art. 5.2 lid 1 Wet IB 2001, in het berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2020 t/m 18-03-2020 (verbatim). Besluit van de Minister voor Medische Zorg van 4 november 2019, kenmerk 1602277-197586-WJZ, Stcrt. 2019, 61842, art. I: '€ 84.416' telkens vervangen door '€ 85.767' (tabelcorrectiefactor 1,6%, Wzt art. 2a lid 2; primaire tekst gelezen 2026-10-14). Toelichting: 'Verzekerden met een vermogen boven het heffingsvrije vermogen plus € 85.767 hebben geen recht op zorgtoeslag.' Per 01-01-2021 vervangen door de rendementsgrondslag-toets met € 116.613 / € 147.459 (Stb. 2020, 546), geïndexeerd € 118.479 / € 149.819",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2019-61842.html",
    "tekst": "In afwijking van artikel 7, derde lid, van de Algemene wet inkomensafhankelijke regelingen bestaat geen aanspraak op een zorgtoeslag indien de grondslag sparen en beleggen, bedoeld in artikel 5.2, eerste lid, van de Wet inkomstenbelasting 2001, van de belanghebbende in het berekeningsjaar meer bedraagt dan € 85.767, dan wel, ingeval de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, de gezamenlijke grondslag sparen en beleggen, bedoeld in artikel 5.2, tweede lid, van de Wet inkomstenbelasting 2001, van de belanghebbende en zijn partner in het berekeningsjaar meer bedraagt dan € 85.767."
   },
   "vermogensgrens_met_partner": {
    "waarde": "85767",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2020) (gezamenlijke grondslag sparen en beleggen, art. 5.2 lid 2 Wet IB 2001; alleen bij het gehele berekeningsjaar dezelfde partner; hetzelfde bedrag als zonder partner — het verschil zit in het tweemaal heffingvrije vermogen van de grondslag)",
    "bron": "BWBR0018451, geldend van 01-01-2020 t/m 18-03-2020 (verbatim); Stcrt. 2019, 61842, art. I ('telkens')",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2019-61842.html"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1 en 2 (tekst 2020) jo. Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4",
    "bron": "Regeling van de Minister voor Medische Zorg van 18 oktober 2019, kenmerk 1594729-197076-Z, Stcrt. 2019, 58198, art. I (bijlage 4 Rzv voor 2020; in werking 01-01-2020; primaire tekst gelezen 2026-10-14); gecontroleerd tegen de geconsolideerde bijlage 4 (BWBR0018715, geldend van 01-01-2020): alle 39 getallen gelijk. Toelichting: berekend door het CAK (advies 11 oktober 2019), zelfde methode als 2019: de factor van 2018 (of 2017) geïndexeerd met de WHO-kostenontwikkeling tot en met 2016; afgerond op vier decimalen. Art. II van dezelfde regeling stelt het verhoudingsgetal voor Duitsland voor 2017, 2018 en 2019 met terugwerkende kracht opnieuw vast (0,7532 / 0,8595 / 0,7827: te hoog vastgesteld; het CAK restitueert te veel geheven verdragsbijdrage; 'geen effect op de hoogte van de zorgtoeslag', die niet ten nadele wordt herzien). Niet vergeleken met de leaflet 2020 van de Dienst (niet gevonden)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2019-58198.html",
    "geldig_van": "2020-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de regeling noemt alleen de landnaam (Stcrt. 2019, 58198 schrijft Macedonië; de geconsolideerde bijlage 4 van 01-01-2020 op wetten.overheid.nl schrijft Noord-Macedonië). Oude indexeringsmethode: Noorwegen 1,3678, IJsland 1,1637, Liechtenstein 1,0584 en Denemarken 1,0095 boven 1.",
    "landen": {
     "BE": "0.7303",
     "BA": "0.0695",
     "BG": "0.0780",
     "CY": "0.1410",
     "DK": "1.0095",
     "DE": "0.8041",
     "EE": "0.2408",
     "FI": "0.7340",
     "FR": "0.9066",
     "GR": "0.2589",
     "HU": "0.1445",
     "IE": "0.8972",
     "IS": "1.1637",
     "IT": "0.5504",
     "CV": "0.0176",
     "HR": "0.1836",
     "LV": "0.1020",
     "LI": "1.0584",
     "LT": "0.2553",
     "LU": "0.7107",
     "MK": "0.0598",
     "MT": "0.3783",
     "MA": "0.0229",
     "ME": "0.0821",
     "NO": "1.3678",
     "AT": "0.6730",
     "PL": "0.1709",
     "PT": "0.2736",
     "RO": "0.0877",
     "RS": "0.0718",
     "SI": "0.3520",
     "SK": "0.2584",
     "ES": "0.4065",
     "CZ": "0.2464",
     "TN": "0.0289",
     "TR": "0.0902",
     "GB": "0.7004",
     "SE": "0.8339",
     "CH": "0.7933"
    }
   }
  },
  "2021": {
   "jaar": 2021,
   "status": "draft",
   "geraadpleegd": "2026-10-13",
   "versie": "BWBR0018451, geldend van 01-01-2021 t/m 31-12-2021 (verbatim gelezen 2026-10-13)",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2021)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2021)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2021 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "maand_afronding_opmerking": "Geen parameter maand_afronding_praktijk: voor 2021 is geen rekenvoorbeeld van de Dienst gelezen (de leaflet Berekening zorgtoeslag 2021, tg0821z11fd, is op 2026-10-13 een 404; een archiefkopie bestaat maar is vanuit de routine niet bereikbaar — SOURCES.md, open item 6). De encoding gebruikt de standaard 'naar_beneden' (DISCREPANCIES.md #5) en zegt dat in het resultaat; 2022 rondde rekenkundig (#8), dus 2021 is onbekend.",
   "standaardpremie": {
    "waarde": "1705",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2021, art. 1",
    "bron": "Regeling van de Minister voor Medische Zorg van 20 november 2020, kenmerk 1757159-211906-Z, Stcrt. 2020, 62033 (primaire tekst gelezen 2026-10-13); geconsolideerd BWBR0044400. Toelichting: geraamde gemiddelde nominale premie € 1.478 plus geraamd gemiddeld verplicht eigen risico € 227. 2020: € 1.642 (Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2020, BWBR0042806, gelezen 2026-10-13)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2020-62033.html",
    "geldig_van": "2021-01-01",
    "tekst": "De standaardpremie, bedoeld in artikel 1, onderdeel g, van de Wet op de zorgtoeslag, bedraagt voor het berekeningsjaar 2021 € 1.705."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1684.80",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2021 (in 2021 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Regeling van de Minister van SZW van 7 oktober 2020, nr. 2020-0000133577, tot aanpassing wettelijk minimumloon per 1 januari 2021, Stcrt. 2020, 53099, art. 1 onder a (primaire tekst gelezen 2026-10-13; aanpassingspercentage 0,29% na afronding). De geconsolideerde WML-tekst van 01-01-2021 (BWBR0002638) draagt het bedrag als redactionele noot bij art. 8 ('per 1 januari 2021: € 1.684,80'); de wetstechnische informatie noemt Stcrt. 2020, 53099 als ontstaansbron van die versie",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2020-53099.html",
    "geldig_van": "2021-01-01",
    "tekst": "a. € 1.684,80;"
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2021 t/m 31-12-2021 (verbatim)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2021-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.684,80 = € 21.835,008. Hoe de Dienst Toeslagen dit in 2021 'vastgesteld' heeft is niet gelezen (leaflet 2021 niet bereikbaar); de inkomensgrenzen die de zoekindex uit die leaflet citeert (€ 31.138 zonder, € 39.979 met toeslagpartner) zijn precies de grenzen die de encoding uit de tekst berekent (€ 31.138,10 / € 39.979,12), zodat een afronding op € 21.835 in 2021 geen hele euro verschuift."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "1.915",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2021: 'voor een verzekerde zonder partner op 1,915% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2021 t/m 31-12-2021 (verbatim). Tweemaal vastgesteld: Stb. 2020, 452 (besluit van 2 november 2020, Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1, rij 2021: 1,885%; nota van toelichting tabel 1: 2020 1,830% +0,040 procentpunt +0,015 schema-stap), daarna Stb. 2020, 543 (Wet verbetering uitvoerbaarheid toeslagen, art. III onder 1: '1,885%' vervangen door '1,915%', amendement Snels/Lodders, dekking vrijwaringsgrens kleine terugvorderingen), beide in werking 01-01-2021; beide primaire teksten gelezen 2026-10-13. Stb. 2021, 574, tabel 1, bevestigt: 2021 'na vorige besluit' 1,885%, 'na amendement Snels/Lodders' +0,030%, 'na huidige maatregelen' 1,915%",
    "url": "https://wetten.overheid.nl/BWBR0018451/2021-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "4.225",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2021: 'voor verzekerden met een partner vastgesteld op 4,225% van het drempelinkomen')",
    "bron": "BWBR0018451, geldend van 01-01-2021 t/m 31-12-2021 (verbatim). Stb. 2020, 452, rij 2021: 4,195% (2020: 4,140% +0,040 +0,015); Stb. 2020, 543, art. III onder 1: '4,195%' vervangen door '4,225%'. In 2022 bleef 4,225% (Stb. 2021, 574: 4,210% schema +0,015)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2021-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.580",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2021: 'vermeerderd met 13,580% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner)",
    "bron": "BWBR0018451, geldend van 01-01-2021 t/m 31-12-2021 (verbatim); Stb. 2020, 452, art. 1, rij 2021 (nota van toelichting tabel 1: 2020 13,55%, 2021 13,58%, 2022 13,61%, jaarlijks +0,03 procentpunt volgens het schema); Stb. 2020, 543 raakte dit percentage niet. Let op: het run-verslag van 2026-10-12 en CHANGES.md noemden voor 2021 ten onrechte 13,610%; gecorrigeerd 2026-10-13 na lezing van de tekst van 01-01-2021",
    "url": "https://wetten.overheid.nl/BWBR0018451/2021-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2021 t/m 31-12-2021 (verbatim, zelfde tekst als 2022–2026). Tot en met 2020 volgde hierop lid 5: geen aanspraak voor een verzekerde met een partner die zijn verzekeringsplicht (Zvw art. 2) niet nakwam; vervallen per 01-01-2021 (Stb. 2020, 543, art. III onder 2)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2021-01-01"
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "118479",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2021) (rendementsgrondslag, art. 5.3 Wet IB 2001, begin berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2021 t/m 31-12-2021 (verbatim). Lid 1 herschreven bij Wet aanpassing box 3, Stb. 2020, 546, art. IV onder 1 (van 'grondslag sparen en beleggen ... meer dan € 85.767' naar 'rendementsgrondslag ... meer dan € 116.613 / € 147.459': de oude grens plus het heffingvrije vermogen 2020 van € 30.846 per persoon), daarna geïndexeerd bij Besluit van de Minister voor Medische Zorg van 17 december 2020, kenmerk 1797818-215820-WJZ, Stcrt. 2020, 67965 (€ 116.613 → € 118.479, tabelcorrectiefactor 1,016%; toelichting: art. IV Wet aanpassing box 3 treedt eerst in werking, deze regeling daarna). Beide primaire teksten gelezen 2026-10-13",
    "url": "https://wetten.overheid.nl/BWBR0018451/2021-01-01"
   },
   "vermogensgrens_met_partner": {
    "waarde": "149819",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2021) (gezamenlijke rendementsgrondslag; alleen bij het gehele berekeningsjaar dezelfde partner)",
    "bron": "BWBR0018451, geldend van 01-01-2021 t/m 31-12-2021 (verbatim); Stb. 2020, 546, art. IV onder 1 (€ 147.459 = € 85.767 + 2 × € 30.846); Stcrt. 2020, 67965 (€ 147.459 → € 149.819)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2021-01-01"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1 en 2 (tekst 2021) jo. Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4",
    "bron": "Regeling van de Minister voor Medische Zorg van 12 oktober 2020, kenmerk 1748365-210596-Z, Stcrt. 2020, 53972, art. I (bijlage 4 Rzv voor 2021; in werking 01-01-2021; primaire tekst gelezen 2026-10-13); gecontroleerd tegen de geconsolideerde bijlage 4 (BWBR0018715, geldend van 01-01-2021 t/m 08-01-2021): alle 39 getallen gelijk. Toelichting: factoren van 2017/2018 bijgesteld met WHO-gegevens; 24 landen omlaag, 14 omhoog, Montenegro ongewijzigd. Niet vergeleken met de leaflet 2021 van de Dienst (niet bereikbaar)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2020-53972.html",
    "geldig_van": "2021-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de bijlage noemt alleen de landnaam (2021: Macedonië, Kaapverdië, Verenigd Koninkrijk). Oude indexeringsmethode: IJsland 1,3453 en Noorwegen 1,3064 boven 1.",
    "landen": {
     "BE": "0.7347",
     "BA": "0.0681",
     "BG": "0.0823",
     "CY": "0.1434",
     "DK": "0.9982",
     "DE": "0.8134",
     "EE": "0.2480",
     "FI": "0.7023",
     "FR": "0.8918",
     "GR": "0.2446",
     "HU": "0.1493",
     "IE": "0.8981",
     "IS": "1.3453",
     "IT": "0.5322",
     "CV": "0.0167",
     "HR": "0.1871",
     "LV": "0.1083",
     "LI": "0.9923",
     "LT": "0.2631",
     "LU": "0.7384",
     "MK": "0.0599",
     "MT": "0.3987",
     "MA": "0.0222",
     "ME": "0.0821",
     "NO": "1.3064",
     "AT": "0.6408",
     "PL": "0.1601",
     "PT": "0.2600",
     "RO": "0.0824",
     "RS": "0.0682",
     "SI": "0.3344",
     "SK": "0.2445",
     "ES": "0.3855",
     "CZ": "0.2341",
     "TN": "0.0280",
     "TR": "0.0851",
     "GB": "0.6593",
     "SE": "0.7906",
     "CH": "0.7536"
    }
   }
  },
  "2022": {
   "jaar": 2022,
   "status": "draft",
   "geraadpleegd": "2026-10-12",
   "versie": "BWBR0018451, geldend van 01-01-2022 t/m 31-12-2022 (verbatim gelezen 2026-10-12)",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2022)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2022)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "maand_afronding_praktijk": {
    "waarde": "rekenkundig",
    "artikel": "geen — praktijk van Dienst Toeslagen, geen wettekst. Wzt art. 2 lid 5 bepaalt de aanspraak per kalendermaand zonder afronding; Awir art. 14 lid 4 rondt alleen het jaarbedrag af",
    "bron": "Dienst Toeslagen, Berekening zorgtoeslag 2022 (TG 082 - 1Z21FD), rekenvoorbeeld 2: 'Bedrag per maand € 44,89 (na afronding € 45)' — rekenkundig, waar de leaflets 2023 en 2025 en de tabellen 2025/2026 naar beneden afronden (standaard 'naar_beneden', DISCREPANCIES.md #5). Eén voorbeeld; zie DISCREPANCIES.md #8",
    "url": "https://download.belastingdienst.nl/toeslagen/docs/berekening_zorgtoeslag_tg0821z21fd.pdf"
   },
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2022 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "standaardpremie": {
    "waarde": "1749",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2022, art. 1",
    "bron": "Regeling van de Minister van VWS van 23 november 2021, kenmerk 3262509-1016080-Z, Stcrt. 2021, 47872 (primaire tekst gelezen 2026-10-12); geconsolideerd BWBR0045944. Toelichting: geraamde gemiddelde nominale premie € 1.522 plus geraamd gemiddeld verplicht eigen risico € 227",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2021-47872.html",
    "geldig_van": "2022-01-01",
    "tekst": "De standaardpremie, bedoeld in artikel 1, onderdeel g, van de Wet op de zorgtoeslag, bedraagt voor het berekeningsjaar 2022 € 1.749."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1725.00",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2022 (in 2022 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Regeling van de Staatssecretaris van SZW van 12 oktober 2021, nr. 2021-0000161578, tot aanpassing van het wettelijk minimumloon per 1 januari 2022, Stcrt. 2021, 44177, art. 1 onder a (primaire tekst gelezen 2026-10-12; aanpassingspercentage 1,41%; per 1 juli 2021 was het € 1.701,00). De geconsolideerde WML-tekst van 01-01-2022 (BWBR0002638) draagt het bedrag als redactionele noot bij art. 8 ('per 1 januari 2022: € 1.725,00')",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2021-44177.html",
    "geldig_van": "2022-01-01",
    "tekst": "a. € 1.725,00;"
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2022 t/m 31-12-2022 (verbatim)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2022-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.725,00 = € 22.356,00, een rond bedrag. Dienst Toeslagen, Berekening zorgtoeslag 2022: 'vastgesteld op € 22.356' — gelijk aan de tekst; 2022 geeft dus geen bewijs over de afrondingspraktijk van DISCREPANCIES.md #1."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "1.848",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2022: 'voor een verzekerde zonder partner op 1,848% van het drempelinkomen'), zoals gewijzigd bij Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1, rij 2022",
    "bron": "BWBR0018451, geldend van 01-01-2022 t/m 31-12-2022 (verbatim); Stb. 2021, 574 (besluit van 23 november 2021, schema 2022–2040, rij 2022; nota van toelichting tabel 1: 2021 1,915%, 2022 1,848% = −0,067 procentpunt koopkrachtmaatregel +0,015 procentpunt dekking vrijwaringsgrens; primaire tekst gelezen 2026-10-12)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2022-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "4.225",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2022: 'voor verzekerden met een partner vastgesteld op 4,225% van het drempelinkomen') jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1, rij 2022",
    "bron": "BWBR0018451, geldend van 01-01-2022 t/m 31-12-2022 (verbatim); Stb. 2021, 574 (rij 2022; tabel 1: 2021 eveneens 4,225%: 4,210% na het vorige besluit +0,015 procentpunt)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2022-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.610",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2022: 'vermeerderd met 13,610% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner) jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1, rij 2022",
    "bron": "BWBR0018451, geldend van 01-01-2022 t/m 31-12-2022 (verbatim); Stb. 2021, 574 ('De afbouwpercentages ... veranderen niet')",
    "url": "https://wetten.overheid.nl/BWBR0018451/2022-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2022 t/m 31-12-2022 (verbatim, zelfde tekst als 2023–2026)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2022-01-01"
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "120020",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2022) (rendementsgrondslag, art. 5.3 Wet IB 2001, begin berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2022 t/m 31-12-2022 (verbatim); gewijzigd bij Regeling van de Minister van VWS van 15 november 2021, kenmerk 3280145-1019366-MEVA, Stcrt. 2021, 47692 (van € 118.479; tabelcorrectiefactor; primaire tekst gelezen 2026-10-12)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2022-01-01"
   },
   "vermogensgrens_met_partner": {
    "waarde": "151767",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2022) (gezamenlijke rendementsgrondslag; alleen bij het gehele berekeningsjaar dezelfde partner)",
    "bron": "BWBR0018451, geldend van 01-01-2022 t/m 31-12-2022 (verbatim); Stcrt. 2021, 47692 (van € 149.819)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2022-01-01"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1 en 2 (tekst 2022) jo. Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4",
    "bron": "Regeling van de Minister van VWS van 9 november 2021, Stcrt. 2021, 46565, art. I (bijlage 4 Rzv voor 2022; in werking 01-01-2022), zoals gecorrigeerd bij Regeling van 16 november 2021, kenmerk 3262512-1016081-Z, Stcrt. 2021, 47687, art. I onderdeel E (Liechtenstein 0,9229 → 0,9172; 'een inmiddels achterhaald verhoudingsgetal'), in werking 01-01-2022 ná Stcrt. 2021, 46565 (toelichting: aanwijzing 5.70). Beide primaire teksten gelezen 2026-10-12; gecontroleerd tegen de geconsolideerde bijlage 4 (BWBR0018715, geldend van 01-01-2022 t/m 31-01-2022). Dezelfde (gecorrigeerde) getallen in Dienst Toeslagen, Berekening zorgtoeslag 2022, tabel woonlandfactor 2022",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2021-46565.html",
    "url_rectificatie": "https://zoek.officielebekendmakingen.nl/stcrt-2021-47687.html",
    "geldig_van": "2022-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de bijlage noemt alleen de landnaam. De Dienst schrijft in 2022 Bondsrepubliek Duitsland, Grootbrittannië, Macedonië en Kaap-Verdië; de bijlage Duitsland, Verenigd Koninkrijk, Noord-Macedonië en Kaapverdië. In 2022 liggen drie factoren boven 1 (IJsland 1,3388, Noorwegen 1,3213) of eronder waar zij in 2023 1,0000 werden (Denemarken 0,9836, Liechtenstein 0,9172): de factoren van 2022 zijn nog berekend met de oude indexeringsmethode (toelichting Stcrt. 2023, 29907).",
    "landen": {
     "BE": "0.7369",
     "BA": "0.0715",
     "BG": "0.0893",
     "CY": "0.1504",
     "DK": "0.9836",
     "DE": "0.8138",
     "EE": "0.2684",
     "FI": "0.6716",
     "FR": "0.8816",
     "GR": "0.2271",
     "HU": "0.1521",
     "IS": "1.3388",
     "IE": "0.9185",
     "IT": "0.5233",
     "CV": "0.0177",
     "HR": "0.1945",
     "LV": "0.1231",
     "LI": "0.9172",
     "LT": "0.2830",
     "LU": "0.7491",
     "MT": "0.3956",
     "MA": "0.0253",
     "ME": "0.0821",
     "MK": "0.0567",
     "NO": "1.3213",
     "AT": "0.6732",
     "PL": "0.1829",
     "PT": "0.2727",
     "RO": "0.1113",
     "RS": "0.0810",
     "SI": "0.3645",
     "SK": "0.2471",
     "ES": "0.4019",
     "CZ": "0.2917",
     "TN": "0.0258",
     "TR": "0.0643",
     "GB": "0.6308",
     "SE": "0.7751",
     "CH": "0.7145"
    }
   }
  },
  "2023": {
   "jaar": 2023,
   "status": "draft",
   "geraadpleegd": "2026-10-11",
   "versie": "BWBR0018451, geldend van 01-01-2023 t/m 31-12-2023 (verbatim gelezen 2026-10-11)",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst 2023)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst 2023)",
   "artikel_wml_onderdeel": "a",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). In 2023 regelde de tekst (art. 3) dat geval niet; de encoding geeft dan 'undetermined'.",
   "standaardpremie": {
    "waarde": "1889",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2023, art. 1",
    "bron": "Regeling van de Minister van VWS van 21 november 2022, kenmerk 3442101-1036920-Z, Stcrt. 2022, 32017 (primaire tekst gelezen 2026-10-11); geconsolideerd BWBR0047542. Toelichting: geraamde gemiddelde nominale premie € 1.657 plus geraamd gemiddeld verplicht eigen risico € 232",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2022-32017.html",
    "geldig_van": "2023-01-01",
    "tekst": "De standaardpremie, bedoeld in artikel 1, onderdeel g, van de Wet op de zorgtoeslag, bedraagt voor het berekeningsjaar 2023 € 1.889."
   },
   "wml_maandbedrag_januari": {
    "waarde": "1934.40",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder a, bedrag per 1 januari 2023 (in 2023 was het maandbedrag onderdeel a; sinds 01-01-2024 onderdeel b)",
    "bron": "Besluit van 3 oktober 2022 tot vaststelling van het wettelijk minimumloon met ingang van 1 januari 2023 (bijzondere verhoging van 8,05% plus de halfjaarlijkse indexatie; in totaal 10,15%), Stb. 2022, 381, art. I onderdeel a (primaire tekst gelezen 2026-10-11). De geconsolideerde WML-tekst van 01-01-2023 (BWBR0002638) draagt het bedrag als redactionele noot bij art. 8 ('per 1 januari 2023: € 1.934,40')",
    "url": "https://zoek.officielebekendmakingen.nl/stb-2022-381.html",
    "geldig_van": "2023-01-01",
    "tekst": "1. Onderdeel a: € 1.934,40;"
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2023 t/m 31-12-2023 (verbatim)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2023-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel a, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 1.934,40 = € 25.069,824. Dienst Toeslagen, Berekening zorgtoeslag 2023: 'vastgesteld op € 25.070' (naar boven, zoals in 2025 en 2026; in 2024 naar beneden). Zie DISCREPANCIES.md #1."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "0.123",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2023: 'voor een verzekerde zonder partner op 0,123% van het drempelinkomen'), zoals gewijzigd bij Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1, rij 2023",
    "bron": "BWBR0018451, geldend van 01-01-2023 t/m 31-12-2023 (verbatim); Stb. 2022, 472 (besluit van 24 november 2022, schema 2023–2040, rij 2023: een eenmalige verlaging met 1,741 procentpunt voor 2023; primaire tekst gelezen 2026-10-09)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2023-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "2.378",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2023: 'voor verzekerden met een partner vastgesteld op 2,378% van het drempelinkomen') jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1, rij 2023",
    "bron": "BWBR0018451, geldend van 01-01-2023 t/m 31-12-2023 (verbatim); Stb. 2022, 472 (rij 2023: eenmalige verlaging met 1,863 procentpunt)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2023-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.640",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2023: 'vermeerderd met 13,640% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner) jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1, rij 2023",
    "bron": "BWBR0018451, geldend van 01-01-2023 t/m 31-12-2023 (verbatim); Stb. 2022, 472",
    "url": "https://wetten.overheid.nl/BWBR0018451/2023-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2023 t/m 31-12-2023 (verbatim, zelfde tekst als 2024–2026)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2023-01-01"
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "127582",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2023) (rendementsgrondslag, art. 5.3 Wet IB 2001, begin berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2023 t/m 31-12-2023 (verbatim); gewijzigd bij Regeling van de Minister van VWS van 25 oktober 2022, kenmerk 3454107-1038309-MEVA, Stcrt. 2022, 28997 (van € 120.020; tabelcorrectiefactor; primaire tekst gelezen 2026-10-11)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2023-01-01"
   },
   "vermogensgrens_met_partner": {
    "waarde": "161329",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2023) (gezamenlijke rendementsgrondslag; alleen bij het gehele berekeningsjaar dezelfde partner)",
    "bron": "BWBR0018451, geldend van 01-01-2023 t/m 31-12-2023 (verbatim); Stcrt. 2022, 28997 (van € 151.767)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2023-01-01"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1 en 2 (tekst 2023) jo. Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4",
    "bron": "Regeling van de Minister van VWS van 27 oktober 2022, Stcrt. 2022, 29339, art. I (bijlage 4 Rzv voor 2023; in werking 01-01-2023), zoals gerectificeerd bij Regeling van 21 november 2022, kenmerk 3446877-1037302-Z, Stcrt. 2022, 32002, art. I onderdeel D (Malta 0,0584 → 0,3957; Marokko 0,3957 → 0,0226; Montenegro 0,0226 → 0,0887; Noord-Macedonië 0,0887 → 0,0584; 'bij een viertal landen is per abuis de verkeerde woonlandfactor genoemd'), in werking 01-01-2023 ná Stcrt. 2022, 29339. Beide primaire teksten gelezen 2026-10-11. Dezelfde (gerectificeerde) getallen in Dienst Toeslagen, Berekening zorgtoeslag 2023, tabel woonlandfactor 2023",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2022-29339.html",
    "url_rectificatie": "https://zoek.officielebekendmakingen.nl/stcrt-2022-32002.html",
    "geldig_van": "2023-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de bijlage noemt alleen de landnaam. De Dienst schrijft in 2023 Bondsrepubliek Duitsland, Grootbrittannië, Macedonië en Kaap-Verdië; de bijlage Duitsland, Verenigd Koninkrijk, Noord-Macedonië en Kaapverdië. Zonder de rectificatie zou de tekst van Stcrt. 2022, 29339 voor Malta, Marokko, Montenegro en Noord-Macedonië andere getallen geven dan de Dienst toepast.",
    "landen": {
     "BE": "0.7484",
     "BA": "0.0741",
     "BG": "0.0937",
     "CY": "0.2155",
     "DK": "1.0000",
     "DE": "0.8814",
     "EE": "0.2647",
     "FI": "0.7069",
     "FR": "0.8614",
     "GR": "0.2269",
     "HU": "0.1564",
     "IS": "1.0000",
     "IE": "0.9267",
     "IT": "0.5086",
     "CV": "0.0210",
     "HR": "0.2840",
     "LV": "0.1334",
     "LI": "1.0000",
     "LT": "0.2539",
     "LU": "0.7671",
     "MT": "0.3957",
     "MA": "0.0226",
     "ME": "0.0887",
     "MK": "0.0584",
     "NO": "1.0000",
     "AT": "0.7243",
     "PL": "0.1643",
     "PT": "0.2790",
     "RO": "0.1085",
     "RS": "0.0795",
     "SI": "0.3510",
     "SK": "0.2393",
     "ES": "0.4051",
     "CZ": "0.3003",
     "TN": "0.0281",
     "TR": "0.0708",
     "GB": "0.7043",
     "SE": "0.8700",
     "CH": "0.9711"
    }
   }
  },
  "2024": {
   "jaar": 2024,
   "status": "draft",
   "geraadpleegd": "2026-10-09",
   "versie": "BWBR0018451, geldend van 01-01-2024 t/m 05-11-2024; vanaf 06-11-2024 t/m 31-12-2024 vernummerd (art. 2a → 3, art. 3 → 4a), bedragen gelijk",
   "artikel_vermogenstoets": "Wzt art. 2a lid 1 (tekst t/m 05-11-2024; daarna art. 3 lid 1)",
   "artikel_woonlandfactor": "Wzt art. 3 (tekst t/m 05-11-2024; daarna art. 4a)",
   "art4a_lid3_aanwezig": false,
   "art4a_lid3_opmerking": "Het huidige art. 4a lid 3 (verzekerde aanvrager met een verdragsgerechtigde partner) is ingevoegd per 06-11-2024 (Stb. 2024, 291, art. XIX onder C). Vóór die datum regelde de tekst dat geval niet; de encoding geeft dan 'undetermined'.",
   "standaardpremie": {
    "waarde": "1987",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2024, art. 1",
    "bron": "Regeling van de Minister van VWS van 20 november 2023, kenmerk 3704792-1055150-Z, Stcrt. 2023, 32413 (primaire tekst gelezen 2026-10-09); geconsolideerd BWBR0049005",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2023-32413.html",
    "geldig_van": "2024-01-01",
    "tekst": "De standaardpremie, bedoeld in artikel 1, onderdeel g, van de Wet op de zorgtoeslag, bedraagt voor het berekeningsjaar 2024 € 1.987."
   },
   "wml_maandbedrag_januari": {
    "waarde": "2069.40",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder b, bedrag per 1 januari 2024 (het referentiemaandloon; sinds 01-01-2024 geldt voor werknemers een minimumuurloon, onder a)",
    "bron": "Regeling van de Minister van SZW van 9 oktober 2023, nr. 2023-0000522401, tot indexatie van het wettelijk minimumloon en bekendmaking van het wettelijk minimumuurloon per 1 januari 2024, Stcrt. 2023, 28170, art. 1 onder b (primaire tekst gelezen 2026-10-09); redactionele noot bij WML art. 8 (BWBR0002638, geldend van 01-01-2024): 'per 1 januari 2024 € 2.069,40'",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2023-28170.html",
    "geldig_van": "2024-01-01",
    "tekst": "a. € 13,27; b. € 2.069,40."
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2024 t/m 05-11-2024 (zelfde tekst als 2025 en 2026)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2024-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel b, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand",
    "opmerking": "108% × 12 × € 2.069,40 = € 26.819,424. Dienst Toeslagen, Berekening zorgtoeslag 2024: 'vastgesteld op € 26.819' (hier naar beneden; in 2025 en 2026 rondde de Dienst naar boven). Zie DISCREPANCIES.md #1."
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "1.879",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2024: 'voor een verzekerde zonder partner op 1,879% van het drempelinkomen'), zoals gewijzigd bij Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1, rij 2024",
    "bron": "BWBR0018451, geldend van 01-01-2024 t/m 05-11-2024 (verbatim); Stb. 2022, 472 (besluit van 24 november 2022, schema 2023–2040, rij 2024; primaire tekst gelezen 2026-10-09)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2024-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "4.256",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2024: 'voor verzekerden met een partner vastgesteld op 4,256% van het drempelinkomen') jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1, rij 2024",
    "bron": "BWBR0018451, geldend van 01-01-2024 t/m 05-11-2024 (verbatim); Stb. 2022, 472",
    "url": "https://wetten.overheid.nl/BWBR0018451/2024-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.670",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (tekst 2024: 'vermeerderd met 13,670% van het toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat', gelijk met en zonder partner) jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1, rij 2024",
    "bron": "BWBR0018451, geldend van 01-01-2024 t/m 05-11-2024 (verbatim); Stb. 2022, 472",
    "url": "https://wetten.overheid.nl/BWBR0018451/2024-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2024 t/m 05-11-2024 (verbatim, zelfde tekst als 2026)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2024-01-01"
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "140213",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2024; vanaf 06-11-2024 art. 3 lid 1) (rendementsgrondslag, art. 5.3 Wet IB 2001, begin berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2024 t/m 05-11-2024 (verbatim); gewijzigd bij Regeling van de Minister van VWS van 17 oktober 2023, Stcrt. 2023, 29706 (van € 127.582; tabelcorrectiefactor; primaire tekst gelezen 2026-10-09)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2024-01-01"
   },
   "vermogensgrens_met_partner": {
    "waarde": "177301",
    "artikel": "Wet op de zorgtoeslag art. 2a lid 1 (tekst 2024; vanaf 06-11-2024 art. 3 lid 1) (gezamenlijke rendementsgrondslag; alleen bij het gehele berekeningsjaar dezelfde partner)",
    "bron": "BWBR0018451, geldend van 01-01-2024 t/m 05-11-2024 (verbatim); Stcrt. 2023, 29706 (van € 161.329)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2024-01-01"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1 en 2 (tekst 2024; vanaf 06-11-2024 art. 4a lid 1 en 2) jo. Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4",
    "bron": "Regeling zorgverzekering (BWBR0018715), bijlage 4, geldend van 01-01-2024 t/m 04-01-2024 (verbatim, 2026-10-09); vastgesteld bij Regeling van de Minister van VWS van 24 oktober 2023, Stcrt. 2023, 29907, art. I (in werking 01-01-2024); dezelfde getallen in Dienst Toeslagen, Berekening zorgtoeslag 2024, tabel woonlandfactor",
    "url": "https://wetten.overheid.nl/BWBR0018715/2024-01-01",
    "geldig_van": "2024-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de bijlage noemt alleen de landnaam. De Dienst schrijft in 2024 Bondsrepubliek Duitsland, Grootbrittannië, Macedonië en Kaap-Verdië; de bijlage Duitsland, Verenigd Koninkrijk, Noord-Macedonië en Kaapverdië.",
    "landen": {
     "BE": "0.7663",
     "BA": "0.0795",
     "BG": "0.1067",
     "CY": "0.3193",
     "DK": "1.0000",
     "DE": "0.9485",
     "EE": "0.2780",
     "FI": "0.7342",
     "FR": "0.8365",
     "GR": "0.2146",
     "HU": "0.1667",
     "IS": "1.0000",
     "IE": "0.9386",
     "IT": "0.4825",
     "CV": "0.0250",
     "HR": "0.3783",
     "LV": "0.1734",
     "LI": "1.0000",
     "LT": "0.2422",
     "LU": "0.7980",
     "MT": "0.4034",
     "MA": "0.0219",
     "ME": "0.0980",
     "MK": "0.0580",
     "NO": "1.0000",
     "AT": "0.8145",
     "PL": "0.1613",
     "PT": "0.2955",
     "RO": "0.1263",
     "RS": "0.0919",
     "SI": "0.3619",
     "SK": "0.2452",
     "ES": "0.4268",
     "CZ": "0.3649",
     "TN": "0.0289",
     "TR": "0.0633",
     "GB": "0.7692",
     "SE": "0.9596",
     "CH": "1.0000"
    }
   }
  },
  "2025": {
   "jaar": 2025,
   "status": "draft",
   "geraadpleegd": "2026-10-08",
   "standaardpremie": {
    "waarde": "2112",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2025, art. 1",
    "bron": "Regeling van de Minister van VWS van 19 november 2024, kenmerk 3973534-1072564-Z, Stcrt. 2024, 38887 (gepubliceerd 28-11-2024), art. 1 (primaire tekst gelezen 2026-10-08)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2024-38887.html",
    "geldig_van": "2025-01-01",
    "tekst": "De standaardpremie, bedoeld in de Wet op de zorgtoeslag, bedraagt voor het berekeningsjaar 2025 € 2.112,–."
   },
   "wml_maandbedrag_januari": {
    "waarde": "2191.80",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder b, bedrag per 1 januari 2025",
    "bron": "Regeling van de Minister van SZW van 10 oktober 2024, nr. 2024-0000675332, tot indexatie van het wettelijk minimumloon per 1 januari 2025, Stcrt. 2024, 33625 (gepubliceerd 17-10-2024), art. 1 onder b (primaire tekst gelezen 2026-10-08)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2024-33625.html",
    "geldig_van": "2025-01-01",
    "tekst": "a. € 14,06; b. € 2.191,80."
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2025 t/m 31-12-2025",
    "url": "https://wetten.overheid.nl/BWBR0018451/2025-01-01"
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "1.896",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1 (berekeningsjaar 2025)",
    "bron": "BWBR0018451, geldend van 01-01-2025 t/m 31-12-2025; Stb. 2024, 351 (besluit van 14 november 2024)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2025-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "4.273",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1 (berekeningsjaar 2025)",
    "bron": "BWBR0018451, geldend van 01-01-2025 t/m 31-12-2025; Stb. 2024, 351 (besluit van 14 november 2024)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2025-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.700",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1 (berekeningsjaar 2025)",
    "bron": "BWBR0018451, geldend van 01-01-2025 t/m 31-12-2025; Stb. 2024, 351 (besluit van 14 november 2024)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2025-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2025 t/m 31-12-2025 (tekst van lid 4 in de 2025-versie niet apart gelezen; de 2026-tekst is gebruikt en de 2025-leaflet past hem ook toe)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2025-01-01"
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "141896",
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1",
    "bron": "BWBR0018451, geldend van 01-01-2025 t/m 31-12-2025; gewijzigd bij herstelregeling van 12 november 2024, Stcrt. 2024, 37672 (tabelcorrectiefactor 1,012%; trok Stcrt. 2024, 33447 in)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2025-01-01"
   },
   "vermogensgrens_met_partner": {
    "waarde": "179429",
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1",
    "bron": "BWBR0018451, geldend van 01-01-2025 t/m 31-12-2025; Stcrt. 2024, 37672",
    "url": "https://wetten.overheid.nl/BWBR0018451/2025-01-01"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 4a lid 1 en 2 jo. Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4",
    "bron": "Regeling zorgverzekering (BWBR0018715), bijlage 4, geldend van 01-01-2025 t/m 10-01-2025; dezelfde getallen in Dienst Toeslagen, Berekening zorgtoeslag 2025, tabel woonlandfactor",
    "url": "https://wetten.overheid.nl/BWBR0018715/2025-01-01",
    "geldig_van": "2025-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de bijlage noemt alleen de landnaam. De bijlage schrijft Kaapverdië, Noord-Macedonië en Verenigd Koninkrijk; de Dienst schrijft Kaap-Verdië, Republiek Noord-Macedonië en Groot-Brittannië. Staatscourant-nummer van de wijzigingsregeling nog niet vastgelegd (law/SOURCES.md).",
    "landen": {
     "BE": "0.7981",
     "BA": "0.0844",
     "BG": "0.1224",
     "CY": "0.4272",
     "DK": "1.0000",
     "DE": "1.0000",
     "EE": "0.2900",
     "FI": "0.7791",
     "FR": "0.8251",
     "GR": "0.2144",
     "HU": "0.1783",
     "IS": "1.0000",
     "IE": "0.9682",
     "IT": "0.4685",
     "CV": "0.0308",
     "HR": "0.3925",
     "LV": "0.2054",
     "LI": "1.0000",
     "LT": "0.2308",
     "LU": "0.8338",
     "MT": "0.4182",
     "MA": "0.0205",
     "ME": "0.1069",
     "MK": "0.0577",
     "NO": "1.0000",
     "AT": "0.8998",
     "PL": "0.1649",
     "PT": "0.3147",
     "RO": "0.1374",
     "RS": "0.1000",
     "SI": "0.3792",
     "SK": "0.2530",
     "ES": "0.4398",
     "CZ": "0.4078",
     "TN": "0.0300",
     "TR": "0.0623",
     "GB": "0.8467",
     "SE": "1.0000",
     "CH": "1.0000"
    }
   },
   "versie": "BWBR0018451, geldend van 01-01-2025"
  },
  "2026": {
   "jaar": 2026,
   "status": "draft",
   "geraadpleegd": "2026-10-08",
   "standaardpremie": {
    "waarde": "2119",
    "artikel": "Wet op de zorgtoeslag art. 4 jo. Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2026, art. 1",
    "bron": "Stcrt. 2025, 40022 (ondertekend 17-11-2025, gepubliceerd 25-11-2025)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2025-40022.html",
    "geldig_van": "2026-01-01",
    "tekst": "De standaardpremie, bedoeld in de Wet op de zorgtoeslag, bedraagt voor het berekeningsjaar 2026 € 2.119,–."
   },
   "wml_maandbedrag_januari": {
    "waarde": "2294.40",
    "artikel": "Wet minimumloon en minimumvakantiebijslag art. 8 lid 1 onder b, bedrag per 1 januari 2026",
    "bron": "Regeling van de Minister van SZW van 1 oktober 2025, nr. 2025-0000213859, tot indexatie van het wettelijk minimumloon per 1 januari 2026, Stcrt. 2025, 34131, art. 1 onder b (primaire tekst gelezen 2026-10-08)",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2025-34131.html",
    "geldig_van": "2026-01-01",
    "tekst": "De bedragen, genoemd in artikel 8, eerste lid, onder a en b, van de Wet minimumloon en minimum vakantiebijslag worden met ingang van 1 januari 2026 onderscheidenlijk als volgt vastgesteld: a. € 14,71; b. € 2.294,40."
   },
   "drempelinkomen_factor": {
    "waarde": "108",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 1 lid 1 onder f",
    "bron": "BWBR0018451, geldend van 01-01-2026",
    "url": "https://wetten.overheid.nl/BWBR0018451/2026-01-01",
    "tekst": "drempelinkomen: 108% van het twaalfvoud van het voor de maand januari van het berekeningsjaar geldende in artikel 8, eerste lid, onderdeel b, van de Wet minimumloon en minimumvakantiebijslag bedoelde bedrag per maand"
   },
   "normpremie_percentage_drempel_zonder_partner": {
    "waarde": "1.912",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1 (berekeningsjaar 2026)",
    "bron": "BWBR0018451, geldend van 01-01-2026; Stb. 2025, 412 (besluit van 4 december 2025; verving het eerder voor 2026 vastgestelde 1,911% uit Stb. 2024, 351)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2026-01-01"
   },
   "normpremie_percentage_drempel_met_partner": {
    "waarde": "4.289",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1 (berekeningsjaar 2026)",
    "bron": "BWBR0018451, geldend van 01-01-2026; Stb. 2025, 412 (verving het eerder voor 2026 vastgestelde 4,288% uit Stb. 2024, 351)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2026-01-01"
   },
   "normpremie_percentage_boven_drempel": {
    "waarde": "13.730",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 3 (gelijk met en zonder partner) jo. Besluit percentages drempel- en toetsingsinkomen zorgtoeslag art. 1",
    "bron": "BWBR0018451, geldend van 01-01-2026; Stb. 2025, 412 (ongewijzigd ten opzichte van Stb. 2024, 351)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2026-01-01"
   },
   "aandeel_partner_niet_verzekerd": {
    "waarde": "50",
    "eenheid": "procent",
    "artikel": "Wet op de zorgtoeslag art. 2 lid 4",
    "bron": "BWBR0018451, geldend van 01-01-2026",
    "url": "https://wetten.overheid.nl/BWBR0018451/2026-01-01"
   },
   "vermogensgrens_zonder_partner": {
    "waarde": "146011",
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1 (rendementsgrondslag, art. 5.3 Wet IB 2001, begin berekeningsjaar; vrijstelling art. 5.13 Wet IB 2001 telt niet)",
    "bron": "BWBR0018451, geldend van 01-01-2026; gewijzigd bij Regeling van 4 november 2025, Stcrt. 2025, 38110 (tabelcorrectiefactor 2,9%; de regeling noemt 'artikel 3a', de wet kent alleen artikel 3)",
    "url": "https://wetten.overheid.nl/BWBR0018451/2026-01-01"
   },
   "vermogensgrens_met_partner": {
    "waarde": "184633",
    "artikel": "Wet op de zorgtoeslag art. 3 lid 1 (gezamenlijke rendementsgrondslag; alleen bij het gehele berekeningsjaar dezelfde partner)",
    "bron": "BWBR0018451, geldend van 01-01-2026; Stcrt. 2025, 38110",
    "url": "https://wetten.overheid.nl/BWBR0018451/2026-01-01"
   },
   "woonlandfactoren": {
    "artikel": "Wet op de zorgtoeslag art. 4a lid 1 en 2 jo. Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4",
    "bron": "Regeling zorgverzekering (BWBR0018715), bijlage 4, geldend van 01-01-2026 t/m 31-01-2026; dezelfde getallen in Dienst Toeslagen, Berekening zorgtoeslag 2026, tabel woonlandfactor",
    "url": "https://wetten.overheid.nl/BWBR0018715/2026-01-01",
    "geldig_van": "2026-01-01",
    "opmerking": "Landcodes ISO 3166-1 alpha-2, toegevoegd door het project; de bijlage noemt alleen de landnaam. De bijlage schrijft Kaapverdië, Noord-Macedonië en Verenigd Koninkrijk; de Dienst schrijft Kaap-Verdië, Republiek Noord-Macedonië en Groot-Brittannië. Staatscourant-nummer van de wijzigingsregeling nog niet vastgelegd (law/SOURCES.md).",
    "landen": {
     "BE": "0.8165",
     "BA": "0.0881",
     "BG": "0.1363",
     "CY": "0.4498",
     "DK": "1.0000",
     "DE": "1.0000",
     "EE": "0.3057",
     "FI": "0.8148",
     "FR": "0.8304",
     "GR": "0.2206",
     "HU": "0.1887",
     "IS": "1.0000",
     "IE": "0.9789",
     "IT": "0.4641",
     "CV": "0.0346",
     "HR": "0.3201",
     "LV": "0.2110",
     "LI": "1.0000",
     "LT": "0.2459",
     "LU": "0.8430",
     "MT": "0.4370",
     "MA": "0.0212",
     "ME": "0.1202",
     "MK": "0.0599",
     "NO": "1.0000",
     "AT": "0.9177",
     "PL": "0.1940",
     "PT": "0.3205",
     "RO": "0.1453",
     "RS": "0.1118",
     "SI": "0.4029",
     "SK": "0.2684",
     "ES": "0.4408",
     "CZ": "0.4257",
     "TN": "0.0306",
     "TR": "0.0682",
     "GB": "0.8498",
     "SE": "1.0000",
     "CH": "1.0000"
    }
   },
   "versie": "BWBR0018451, geldend van 01-01-2026"
  }
 },
 "awir": {
  "2013": {
   "jaar": 2013,
   "status": "draft",
   "geraadpleegd": "2026-10-25",
   "vermogenstoets_algemeen": {
    "artikel": "Awir art. 7 lid 3 (tekst 2013): geen bedrag; de toets is of over het berekeningsjaar voordeel uit sparen en beleggen in aanmerking wordt genomen (grondslag sparen en beleggen > 0, dus rendementsgrondslag boven het heffingvrije vermogen), de vrijstelling van art. 5.13 Wet IB 2001 weggedacht",
    "bron": "BWBR0018472, geldend van 01-01-2013 t/m 30-11-2013 (verbatim gelezen 2026-10-25; dezelfde tekst in de versie van 01-12-2013 en in 2014 t/m 2020); 'vrijstelling, bedoeld in artikel 5.13' sinds 01-01-2013 (Stb. 2012, 321, art. XIV, primaire tekst gelezen 2026-10-25; tot en met 2012: 'vrijstellingen bedoeld in afdeling 5.3 en 5.3A'); lid 5 (tekst 2013, nieuw per 01-01-2013, Stb. 2012, 669 art. XVII onder A, primaire tekst gelezen 2026-10-25): niet in Nederland belastbaar voordeel uit sparen en beleggen telt mee. Vervangen per 01-01-2021 door de rendementsgrondslag-toets met bedragen (Stb. 2020, 546)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2013-01-01",
    "tekst": "Indien in een inkomensafhankelijke regeling de aanspraak op een tegemoetkoming mede afhankelijk is gesteld van het vermogen, bestaat geen aanspraak op een tegemoetkoming, indien bij de belanghebbende of, indien de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, zijn partner over het berekeningsjaar voordeel uit sparen en beleggen als bedoeld in artikel 5.2 van de Wet inkomstenbelasting 2001 in aanmerking wordt genomen, dan wel in aanmerking zou worden genomen indien geen rekening wordt gehouden met de vrijstelling, bedoeld in artikel 5.13 van die wet.",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag (Wzt art. 2a, nieuw in 2013). Geen waarde: de encoding gebruikt dit niet."
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "4627",
    "artikel": "Awir art. 7 lid 6 (tekst 2013; tot en met 2012 lid 5)",
    "bron": "BWBR0018472, geldend van 01-01-2013 t/m 30-11-2013 (verbatim gelezen 2026-10-25: '€ 4627'); Bijstellingsregeling directe belastingen 2013, Stcrt. 2012, 26314, art. VII: 'In de Algemene wet inkomensafhankelijke regelingen wordt in artikel 7, vijfde lid, ‘€ 4527’ vervangen door: € 4627.' (primaire tekst gelezen 2026-10-25; de regeling noemt het vijfde lid, het lid van de tekst van 2012 — gelezen 2026-10-25, geldend van 01-01-2012 t/m 30-06-2012: '€ 4527' in lid 5; Stb. 2012, 669 vernummerde het per dezelfde datum tot lid 6). 2014: € 4.706 (Stcrt. 2013, 35144 art. VI)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2013-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2013 t/m 30-11-2013 (verbatim gelezen 2026-10-25); dezelfde tekst in de versie van 01-12-2013 en in 2014 t/m 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2013-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro’s."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2013 t/m 30-11-2013 (verbatim gelezen 2026-10-25)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2013-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2014": {
   "jaar": 2014,
   "status": "draft",
   "geraadpleegd": "2026-10-24",
   "vermogenstoets_algemeen": {
    "artikel": "Awir art. 7 lid 3 (tekst 2014): geen bedrag; de toets is of over het berekeningsjaar voordeel uit sparen en beleggen in aanmerking wordt genomen (grondslag sparen en beleggen > 0, dus rendementsgrondslag boven het heffingvrije vermogen), de vrijstelling van art. 5.13 Wet IB 2001 weggedacht",
    "bron": "BWBR0018472, geldend van 01-01-2014 t/m 05-01-2014 (verbatim gelezen 2026-10-24; dezelfde tekst in de versie van 06-01-2014 en in 2015 t/m 2020); lid 5 (tekst 2014): niet in Nederland belastbaar voordeel uit sparen en beleggen telt mee. Vervangen per 01-01-2021 door de rendementsgrondslag-toets met bedragen (Stb. 2020, 546, art. III)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2014-01-01",
    "tekst": "Indien in een inkomensafhankelijke regeling de aanspraak op een tegemoetkoming mede afhankelijk is gesteld van het vermogen, bestaat geen aanspraak op een tegemoetkoming, indien bij de belanghebbende of, indien de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, zijn partner over het berekeningsjaar voordeel uit sparen en beleggen als bedoeld in artikel 5.2 van de Wet inkomstenbelasting 2001 in aanmerking wordt genomen, dan wel in aanmerking zou worden genomen indien geen rekening wordt gehouden met de vrijstelling, bedoeld in artikel 5.13 van die wet.",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag (Wzt art. 2a). Geen waarde: de encoding gebruikt dit niet."
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "4706",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2014 t/m 05-01-2014 (verbatim gelezen 2026-10-24: '€ 4.706'); Bijstellingsregeling directe belastingen 2014, Stcrt. 2013, 35144 (regeling van de Staatssecretaris van Financiën van 30 december 2013, nr. DB2013/569M), art. VI: 'In de Algemene wet inkomensafhankelijke regelingen wordt in artikel 7, zesde lid, ‘€ 4.627’ vervangen door: € 4.706.' (tabelcorrectiefactor 1,7; primaire tekst gelezen 2026-10-24); vervangen per 01-01-2015 door € 4.749 (Stcrt. 2014, 36639 art. VI onderdeel A)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2014-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2014 t/m 05-01-2014 (verbatim gelezen 2026-10-24); dezelfde tekst in de versie van 06-01-2014 en in 2015 t/m 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2014-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro’s."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2014 t/m 05-01-2014 (verbatim gelezen 2026-10-24)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2014-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2015": {
   "jaar": 2015,
   "status": "draft",
   "geraadpleegd": "2026-10-23",
   "vermogenstoets_algemeen": {
    "artikel": "Awir art. 7 lid 3 (tekst 2015): geen bedrag; de toets is of over het berekeningsjaar voordeel uit sparen en beleggen in aanmerking wordt genomen (grondslag sparen en beleggen > 0, dus rendementsgrondslag boven het heffingvrije vermogen), de vrijstelling van art. 5.13 Wet IB 2001 weggedacht",
    "bron": "BWBR0018472, geldend van 01-01-2015 t/m 31-10-2015 (verbatim gelezen 2026-10-23; dezelfde tekst in de versie van 01-11-2015 en in 2016 t/m 2020); lid 5 (tekst 2015): niet in Nederland belastbaar voordeel uit sparen en beleggen telt mee. Vervangen per 01-01-2021 door de rendementsgrondslag-toets met bedragen (Stb. 2020, 546, art. III)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2015-01-01",
    "tekst": "Indien in een inkomensafhankelijke regeling de aanspraak op een tegemoetkoming mede afhankelijk is gesteld van het vermogen, bestaat geen aanspraak op een tegemoetkoming, indien bij de belanghebbende of, indien de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, zijn partner over het berekeningsjaar voordeel uit sparen en beleggen als bedoeld in artikel 5.2 van de Wet inkomstenbelasting 2001 in aanmerking wordt genomen, dan wel in aanmerking zou worden genomen indien geen rekening wordt gehouden met de vrijstelling, bedoeld in artikel 5.13 van die wet.",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag (Wzt art. 2a). Geen waarde: de encoding gebruikt dit niet."
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "4749",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2015 t/m 31-10-2015 (verbatim gelezen 2026-10-23: '€ 4.749'); Bijstellingsregeling directe belastingen 2015, Stcrt. 2014, 36639 (regeling van de Staatssecretaris van Financiën, nr. DB2014/520M), art. VI onderdeel A: 'In artikel 7, zesde lid, wordt € 4.706 vervangen door: € 4.749' (primaire tekst gelezen 2026-10-23); vervangen per 01-01-2016 door € 4.773 (Stcrt. 2015, 47097 art. VI)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2015-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2015 t/m 31-10-2015 (verbatim gelezen 2026-10-23); dezelfde tekst in de versie van 01-11-2015 en in 2016 t/m 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2015-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro’s."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2015 t/m 31-10-2015 (verbatim gelezen 2026-10-23)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2015-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2016": {
   "jaar": 2016,
   "status": "draft",
   "geraadpleegd": "2026-10-22",
   "vermogenstoets_algemeen": {
    "artikel": "Awir art. 7 lid 3 (tekst 2016): geen bedrag; de toets is of over het berekeningsjaar voordeel uit sparen en beleggen in aanmerking wordt genomen (grondslag sparen en beleggen > 0, dus rendementsgrondslag boven het heffingvrije vermogen), de vrijstelling van art. 5.13 Wet IB 2001 weggedacht",
    "bron": "BWBR0018472, geldend van 01-01-2016 t/m 31-03-2016 (verbatim gelezen 2026-10-22; dezelfde tekst in de versie van 01-04-2016 en in 2017 t/m 2020); lid 5 (tekst 2016): niet in Nederland belastbaar voordeel uit sparen en beleggen telt mee. Vervangen per 01-01-2021 door de rendementsgrondslag-toets met bedragen (Stb. 2020, 546, art. III)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2016-01-01",
    "tekst": "Indien in een inkomensafhankelijke regeling de aanspraak op een tegemoetkoming mede afhankelijk is gesteld van het vermogen, bestaat geen aanspraak op een tegemoetkoming, indien bij de belanghebbende of, indien de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, zijn partner over het berekeningsjaar voordeel uit sparen en beleggen als bedoeld in artikel 5.2 van de Wet inkomstenbelasting 2001 in aanmerking wordt genomen, dan wel in aanmerking zou worden genomen indien geen rekening wordt gehouden met de vrijstelling, bedoeld in artikel 5.13 van die wet.",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag (Wzt art. 2a). Geen waarde: de encoding gebruikt dit niet."
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "4773",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2016 t/m 31-03-2016 (verbatim gelezen 2026-10-22: '€ 4.773'); Bijstellingsregeling directe belastingen 2016, Stcrt. 2015, 47097 (regeling van de Staatssecretaris van Financiën, nr. DB2015/446M), art. VI: 'In de Algemene wet inkomensafhankelijke regelingen wordt in artikel 7, zesde lid, € 4.749 vervangen door: € 4.773' (primaire tekst gelezen 2026-10-22); vervangen per 01-01-2017 door € 4.788 (Stcrt. 2016, 70381 art. VII)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2016-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2016 t/m 31-03-2016 (verbatim gelezen 2026-10-22); dezelfde tekst in de versie van 01-04-2016 en in 2017 t/m 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2016-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2016 t/m 31-03-2016 (verbatim gelezen 2026-10-22)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2016-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2017": {
   "jaar": 2017,
   "status": "draft",
   "geraadpleegd": "2026-10-21",
   "vermogenstoets_algemeen": {
    "artikel": "Awir art. 7 lid 3 (tekst 2017): geen bedrag; de toets is of over het berekeningsjaar voordeel uit sparen en beleggen in aanmerking wordt genomen (grondslag sparen en beleggen > 0, dus rendementsgrondslag boven het heffingvrije vermogen), de vrijstelling van art. 5.13 Wet IB 2001 weggedacht",
    "bron": "BWBR0018472, geldend van 01-01-2017 t/m 30-09-2017 (verbatim gelezen 2026-10-21; dezelfde tekst als 2018 t/m 2020 en in de versie van 01-10-2017); lid 5 (tekst 2017): niet in Nederland belastbaar voordeel uit sparen en beleggen telt mee. Vervangen per 01-01-2021 door de rendementsgrondslag-toets met bedragen (Stb. 2020, 546, art. III)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2017-01-01",
    "tekst": "Indien in een inkomensafhankelijke regeling de aanspraak op een tegemoetkoming mede afhankelijk is gesteld van het vermogen, bestaat geen aanspraak op een tegemoetkoming, indien bij de belanghebbende of, indien de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, zijn partner over het berekeningsjaar voordeel uit sparen en beleggen als bedoeld in artikel 5.2 van de Wet inkomstenbelasting 2001 in aanmerking wordt genomen, dan wel in aanmerking zou worden genomen indien geen rekening wordt gehouden met de vrijstelling, bedoeld in artikel 5.13 van die wet.",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag (Wzt art. 2a). Geen waarde: de encoding gebruikt dit niet."
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "4788",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2017 t/m 30-09-2017 (verbatim gelezen 2026-10-21: '€ 4788'); Bijstellingsregeling directe belastingen 2017, Stcrt. 2016, 70381 (regeling van 29 december 2016, nr. 2016-0000223819), art. VII: 'In de Algemene wet inkomensafhankelijke regelingen wordt in artikel 7, zesde lid, € 4773 vervangen door: € 4788' (primaire tekst gelezen 2026-10-21); vervangen per 01-01-2018 door € 4.827 (Stcrt. 2017, 70975 art. VI)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2017-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2017 t/m 30-09-2017 (verbatim gelezen 2026-10-21); dezelfde tekst in de versie van 01-10-2017 en in 2018 t/m 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2017-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2017 t/m 30-09-2017 (verbatim gelezen 2026-10-21)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2017-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2018": {
   "jaar": 2018,
   "status": "draft",
   "geraadpleegd": "2026-10-19",
   "vermogenstoets_algemeen": {
    "artikel": "Awir art. 7 lid 3 (tekst 2018): geen bedrag; de toets is of over het berekeningsjaar voordeel uit sparen en beleggen in aanmerking wordt genomen (grondslag sparen en beleggen > 0, dus rendementsgrondslag boven het heffingvrije vermogen), de vrijstelling van art. 5.13 Wet IB 2001 weggedacht",
    "bron": "BWBR0018472, geldend van 01-01-2018 (verbatim gelezen 2026-10-19; dezelfde tekst als 2019 en 2020); lid 5 (tekst 2018): niet in Nederland belastbaar voordeel uit sparen en beleggen telt mee. Vervangen per 01-01-2021 door de rendementsgrondslag-toets met bedragen (Stb. 2020, 546, art. III)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2018-01-01",
    "tekst": "Indien in een inkomensafhankelijke regeling de aanspraak op een tegemoetkoming mede afhankelijk is gesteld van het vermogen, bestaat geen aanspraak op een tegemoetkoming, indien bij de belanghebbende of, indien de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, zijn partner over het berekeningsjaar voordeel uit sparen en beleggen als bedoeld in artikel 5.2 van de Wet inkomstenbelasting 2001 in aanmerking wordt genomen, dan wel in aanmerking zou worden genomen indien geen rekening wordt gehouden met de vrijstelling, bedoeld in artikel 5.13 van die wet.",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag (Wzt art. 2a). Geen waarde: de encoding gebruikt dit niet."
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "4827",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2018 (verbatim gelezen 2026-10-19); Bijstellingsregeling directe belastingen 2018, Stcrt. 2017, 70975, art. VI: 'In de Algemene wet inkomensafhankelijke regelingen wordt in artikel 7, zesde lid, € 4.788 vervangen door: € 4.827' (primaire tekst gelezen 2026-10-19); vervangen per 01-01-2019 door € 4.885 (Stcrt. 2018, 69665)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2018-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2018 (verbatim gelezen 2026-10-19); dezelfde tekst in 2019 t/m 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2018-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2018 (verbatim gelezen 2026-10-19)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2018-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2019": {
   "jaar": 2019,
   "status": "draft",
   "geraadpleegd": "2026-10-18",
   "vermogenstoets_algemeen": {
    "artikel": "Awir art. 7 lid 3 (tekst 2019): geen bedrag; de toets is of over het berekeningsjaar voordeel uit sparen en beleggen in aanmerking wordt genomen (grondslag sparen en beleggen > 0, dus rendementsgrondslag boven het heffingvrije vermogen), de vrijstelling van art. 5.13 Wet IB 2001 weggedacht",
    "bron": "BWBR0018472, geldend van 01-01-2019 (verbatim gelezen 2026-10-18; dezelfde tekst als 2020); lid 5 (tekst 2019): niet in Nederland belastbaar voordeel uit sparen en beleggen telt mee. Vervangen per 01-01-2021 door de rendementsgrondslag-toets met bedragen (Stb. 2020, 546, art. III)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2019-01-01",
    "tekst": "Indien in een inkomensafhankelijke regeling de aanspraak op een tegemoetkoming mede afhankelijk is gesteld van het vermogen, bestaat geen aanspraak op een tegemoetkoming, indien bij de belanghebbende of, indien de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, zijn partner over het berekeningsjaar voordeel uit sparen en beleggen als bedoeld in artikel 5.2 van de Wet inkomstenbelasting 2001 in aanmerking wordt genomen, dan wel in aanmerking zou worden genomen indien geen rekening wordt gehouden met de vrijstelling, bedoeld in artikel 5.13 van die wet.",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag (Wzt art. 2a). Geen waarde: de encoding gebruikt dit niet."
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "4885",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2019 (verbatim gelezen 2026-10-18); de wetstechnische informatie van de Awir noemt Stcrt. 2018, 69665 (Bijstellingsregeling directe belastingen 2019) als ontstaansbron van de versie 01-01-2019 (de regeling zelf niet gelezen); vervangen per 01-01-2020 door € 4.964 (Stcrt. 2019, 66707)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2019-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2019 (verbatim gelezen 2026-10-18); dezelfde tekst in 2020 t/m 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2019-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2019 (verbatim gelezen 2026-10-18)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2019-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2020": {
   "jaar": 2020,
   "status": "draft",
   "geraadpleegd": "2026-10-14",
   "vermogenstoets_algemeen": {
    "artikel": "Awir art. 7 lid 3 (tekst 2020): geen bedrag; de toets is of over het berekeningsjaar voordeel uit sparen en beleggen in aanmerking wordt genomen (grondslag sparen en beleggen > 0, dus rendementsgrondslag boven het heffingvrije vermogen), de vrijstelling van art. 5.13 Wet IB 2001 weggedacht",
    "bron": "BWBR0018472, geldend van 01-01-2020 (verbatim gelezen 2026-10-14); lid 5 (tekst 2020): niet in Nederland belastbaar voordeel uit sparen en beleggen telt mee. Vervangen per 01-01-2021 door de rendementsgrondslag-toets met bedragen (Stb. 2020, 546, art. III)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2020-01-01",
    "tekst": "Indien in een inkomensafhankelijke regeling de aanspraak op een tegemoetkoming mede afhankelijk is gesteld van het vermogen, bestaat geen aanspraak op een tegemoetkoming, indien bij de belanghebbende of, indien de belanghebbende het gehele berekeningsjaar dezelfde partner heeft, zijn partner over het berekeningsjaar voordeel uit sparen en beleggen als bedoeld in artikel 5.2 van de Wet inkomstenbelasting 2001 in aanmerking wordt genomen, dan wel in aanmerking zou worden genomen indien geen rekening wordt gehouden met de vrijstelling, bedoeld in artikel 5.13 van die wet.",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag (Wzt art. 2a). Geen waarde: de encoding gebruikt dit niet."
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "4964",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2020 (verbatim gelezen 2026-10-14); de wetstechnische informatie van de Awir noemt Stcrt. 2019, 66707 (Bijstellingsregeling directe belastingen 2020) als ontstaansbron van de versie 01-01-2020 (de regeling zelf niet gelezen); vervangen per 01-01-2021 door € 5.044 (Stcrt. 2020, 64406)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2020-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2020 (verbatim gelezen 2026-10-14); dezelfde tekst in 2021 t/m 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2020-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2020 (verbatim gelezen 2026-10-14)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2020-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2021": {
   "jaar": 2021,
   "status": "draft",
   "geraadpleegd": "2026-10-13",
   "vermogensgrens_algemeen": {
    "waarde": "31340",
    "artikel": "Awir art. 7 lid 3 (rendementsgrondslag belanghebbende, begin berekeningsjaar)",
    "bron": "BWBR0018472, geldend van 01-01-2021 t/m 31-12-2021 (verbatim gelezen 2026-10-13); lid 3–5 opnieuw vastgesteld bij Wet aanpassing box 3, Stb. 2020, 546, art. III (in werking 01-01-2021; primaire tekst gelezen 2026-10-13): het bedrag € 31.340 is het heffingvrije vermogen 2021 (Wet IB 2001 art. 5.5, Stcrt. 2020, 64406: € 30.846 → € 31.340); vervangen per 01-01-2022 door € 31.747 (Stcrt. 2021, 48308)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2021-01-01",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag."
   },
   "vermogensgrens_algemeen_met_partner": {
    "waarde": "62680",
    "artikel": "Awir art. 7 lid 3, tweede volzin (gezamenlijke rendementsgrondslag)",
    "bron": "BWBR0018472, geldend van 01-01-2021 t/m 31-12-2021 (verbatim gelezen 2026-10-13); Stb. 2020, 546, art. III",
    "url": "https://wetten.overheid.nl/BWBR0018472/2021-01-01"
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "5044",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2021 t/m 31-12-2021 (verbatim); Bijstellingsregeling directe belastingen 2021, Stcrt. 2020, 64406 (van € 4.964; primaire tekst gelezen 2026-10-13); vervangen per 01-01-2022 door € 5.110",
    "url": "https://wetten.overheid.nl/BWBR0018472/2021-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2021 t/m 31-12-2021 (verbatim gelezen 2026-10-13); dezelfde tekst in 2022 t/m 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2021-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2021 t/m 31-12-2021 (verbatim gelezen 2026-10-13)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2021-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2022": {
   "jaar": 2022,
   "status": "draft",
   "geraadpleegd": "2026-10-12",
   "vermogensgrens_algemeen": {
    "waarde": "31747",
    "artikel": "Awir art. 7 lid 3 (rendementsgrondslag belanghebbende, begin berekeningsjaar)",
    "bron": "BWBR0018472, geldend van 01-01-2022 t/m 31-12-2022 (verbatim gelezen 2026-10-12); bedrag 2022 vastgesteld bij Bijstellingsregeling directe belastingen 2022, Stcrt. 2021, 48308, art. V onder A (van € 31.340; primaire tekst gelezen 2026-10-12; ontstaansbron van de versie 01-01-2022 volgens de wetstechnische informatie); vervangen per 01-01-2023 door € 33.748 (Stcrt. 2022, 32674)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2022-01-01",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag. De Dienst noemt dit bedrag in zijn leaflet 2022 'de vermogensvrijstelling per persoon' en het verschil tot de Wzt-grens (€ 88.273) 'een vrijstellingsbedrag'."
   },
   "vermogensgrens_algemeen_met_partner": {
    "waarde": "63494",
    "artikel": "Awir art. 7 lid 3, tweede volzin (gezamenlijke rendementsgrondslag)",
    "bron": "BWBR0018472, geldend van 01-01-2022 t/m 31-12-2022 (verbatim gelezen 2026-10-12); Stcrt. 2021, 48308, art. V onder A (van € 62.680)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2022-01-01"
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "5110",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2022 t/m 31-12-2022 (verbatim); Stcrt. 2021, 48308, art. V onder A (van € 5.044); vervangen per 01-01-2023 door € 5.432",
    "url": "https://wetten.overheid.nl/BWBR0018472/2022-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2022 t/m 31-12-2022 (verbatim gelezen 2026-10-12); dezelfde tekst in 2023 t/m 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2022-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2022 t/m 31-12-2022 (verbatim gelezen 2026-10-12)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2022-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2023": {
   "jaar": 2023,
   "status": "draft",
   "geraadpleegd": "2026-10-11",
   "vermogensgrens_algemeen": {
    "waarde": "33748",
    "artikel": "Awir art. 7 lid 3 (rendementsgrondslag belanghebbende, begin berekeningsjaar)",
    "bron": "BWBR0018472, geldend van 01-01-2023 t/m 31-12-2023 (verbatim gelezen 2026-10-11); bedrag 2023 vastgesteld bij Bijstellingsregeling directe belastingen 2023, Stcrt. 2022, 32674 (ontstaansbron van de versie 01-01-2023 volgens de wetstechnische informatie); vervangen per 01-01-2024 door € 36.952 (Stcrt. 2023, 32714)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2023-01-01",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag."
   },
   "vermogensgrens_algemeen_met_partner": {
    "waarde": "67496",
    "artikel": "Awir art. 7 lid 3, tweede volzin (gezamenlijke rendementsgrondslag)",
    "bron": "BWBR0018472, geldend van 01-01-2023 t/m 31-12-2023 (verbatim gelezen 2026-10-11)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2023-01-01"
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "5432",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2023 t/m 31-12-2023 (verbatim); vervangen per 01-01-2024 door € 5.970",
    "url": "https://wetten.overheid.nl/BWBR0018472/2023-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2023 t/m 31-12-2023 (verbatim gelezen 2026-10-11); dezelfde tekst in 2024, 2025 en 2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2023-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2023 t/m 31-12-2023 (verbatim gelezen 2026-10-11)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2023-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2024": {
   "jaar": 2024,
   "status": "draft",
   "geraadpleegd": "2026-10-09",
   "vermogensgrens_algemeen": {
    "waarde": "36952",
    "artikel": "Awir art. 7 lid 3 (rendementsgrondslag belanghebbende, begin berekeningsjaar)",
    "bron": "BWBR0018472, geldend van 01-01-2024 t/m 05-11-2024 (verbatim); vervangen per 01-01-2025 door € 37.395 (Bijstellingsregeling directe belastingen 2025, Stcrt. 2024, 38492, art. V onder A)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2024-01-01",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag."
   },
   "vermogensgrens_algemeen_met_partner": {
    "waarde": "73904",
    "artikel": "Awir art. 7 lid 3",
    "bron": "BWBR0018472, geldend van 01-01-2024 t/m 05-11-2024, art. 7 lid 3, tweede zin (verbatim gelezen 2026-10-26: 'een gezamenlijke rendementsgrondslag als bedoeld in artikel 5.3 van de Wet inkomstenbelasting 2001 hebben van meer dan € 73.904'); vervangen per 01-01-2025 door € 74.790 (Stcrt. 2024, 38492, art. V onder A), waaruit het bedrag tot 2026-10-26 was afgeleid",
    "url": "https://wetten.overheid.nl/BWBR0018472/2024-01-01"
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "5970",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2024 t/m 05-11-2024 (verbatim); vervangen per 01-01-2025 door € 6.042 (Stcrt. 2024, 38492)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2024-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2024 t/m 05-11-2024 (verbatim gelezen 2026-10-09); dezelfde tekst in 2025 en 2026; de wetstechnische informatie van art. 14 (geraadpleegd 2026-10-09) vermeldt geen wijziging van het artikel",
    "url": "https://wetten.overheid.nl/BWBR0018472/2024-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2024 t/m 05-11-2024 (verbatim gelezen 2026-10-09)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2024-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2025": {
   "jaar": 2025,
   "status": "draft",
   "geraadpleegd": "2026-10-09",
   "vermogensgrens_algemeen": {
    "waarde": "37395",
    "artikel": "Awir art. 7 lid 3 (rendementsgrondslag belanghebbende, begin berekeningsjaar)",
    "bron": "BWBR0018472, geldend van 01-01-2025 t/m 30-06-2025 (verbatim); van € 36.952 bij Bijstellingsregeling directe belastingen 2025, Stcrt. 2024, 38492, art. V onder A (primaire tekst gelezen 2026-10-09)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2025-01-01",
    "opmerking": "Geldt alleen voor regelingen zonder eigen grens; niet voor de zorgtoeslag."
   },
   "vermogensgrens_algemeen_met_partner": {
    "waarde": "74790",
    "artikel": "Awir art. 7 lid 3",
    "bron": "Stcrt. 2024, 38492, art. V onder A ('€ 73.904' vervangen door '€ 74.790')",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2024-38492.html"
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "6042",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2025 t/m 30-06-2025 (verbatim); van € 5.970 bij Stcrt. 2024, 38492, art. V onder A",
    "url": "https://wetten.overheid.nl/BWBR0018472/2025-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2025 t/m 30-06-2025 (art. 14 lid 4 en 5 verbatim gelezen; latere 2025-versies niet apart gelezen)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2025-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2025 t/m 30-06-2025 (art. 14 lid 4 en 5 verbatim gelezen; latere 2025-versies niet apart gelezen)",
    "url": "https://wetten.overheid.nl/BWBR0018472/2025-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  },
  "2026": {
   "jaar": 2026,
   "status": "draft",
   "geraadpleegd": "2026-10-08",
   "vermogensgrens_algemeen": {
    "waarde": "38479",
    "artikel": "Awir art. 7 lid 3 (rendementsgrondslag belanghebbende, begin berekeningsjaar)",
    "bron": "BWBR0018472, geldend van 01-01-2026 t/m 30-09-2026; ongewijzigd in de versie van 01-10-2026; van € 37.395 bij Bijstellingsregeling directe belastingen 2026, Stcrt. 2025, 40487, art. V onder A",
    "url": "https://wetten.overheid.nl/BWBR0018472/2026-01-01",
    "opmerking": "Geldt alleen voor regelingen die de aanspraak van het vermogen afhankelijk stellen zonder eigen grens; niet voor de zorgtoeslag."
   },
   "vermogensgrens_algemeen_met_partner": {
    "waarde": "76958",
    "artikel": "Awir art. 7 lid 3",
    "bron": "BWBR0018472, geldend van 01-01-2026 t/m 30-09-2026; van € 74.790 bij Stcrt. 2025, 40487, art. V onder A",
    "url": "https://wetten.overheid.nl/BWBR0018472/2026-01-01"
   },
   "medebewoner_vrijstelling_onder_23": {
    "waarde": "6218",
    "artikel": "Awir art. 7 lid 6",
    "bron": "BWBR0018472, geldend van 01-01-2026 t/m 30-09-2026 (samengevat gelezen, niet letterlijk; voor huurtoeslag); van € 6.042 bij Stcrt. 2025, 40487, art. V onder A",
    "url": "https://wetten.overheid.nl/BWBR0018472/2026-01-01"
   },
   "afronding_tegemoetkoming": {
    "waarde": "1",
    "eenheid": "euro",
    "artikel": "Awir art. 14 lid 4",
    "bron": "BWBR0018472, geldend van 01-01-2026 t/m 30-09-2026; dezelfde tekst in de versie van 01-10-2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2026-01-01",
    "tekst": "Het bedrag van de tegemoetkoming wordt rekenkundig afgerond op hele euro's."
   },
   "minimum_tegemoetkoming": {
    "waarde": "24",
    "artikel": "Awir art. 14 lid 5",
    "bron": "BWBR0018472, geldend van 01-01-2026 t/m 30-09-2026; dezelfde tekst in de versie van 01-10-2026",
    "url": "https://wetten.overheid.nl/BWBR0018472/2026-01-01",
    "tekst": "Een tegemoetkoming wordt niet toegekend indien deze minder dan € 24 zou bedragen."
   }
  }
 },
 "regels": {
  "zt-2026-art1-1f": {
   "titel": "drempelinkomen",
   "bestand": "law/zorgtoeslag/rules.md",
   "anker": "zt-2026-art1-1f--drempelinkomen"
  },
  "zt-2026-art2-2": {
   "titel": "normpremie",
   "bestand": "law/zorgtoeslag/rules.md",
   "anker": "zt-2026-art2-2--normpremie"
  },
  "zt-2026-art2-1": {
   "titel": "aanspraak",
   "bestand": "law/zorgtoeslag/rules.md",
   "anker": "zt-2026-art2-1--aanspraak"
  },
  "zt-2026-art2-4": {
   "titel": "partner die geen verzekerde is",
   "bestand": "law/zorgtoeslag/rules.md",
   "anker": "zt-2026-art2-4--partner-die-geen-verzekerde-is"
  },
  "zt-2026-art2-5": {
   "titel": "per kalendermaand",
   "bestand": "law/zorgtoeslag/rules.md",
   "anker": "zt-2026-art2-5--per-kalendermaand"
  },
  "zt-2020-art2-5oud": {
   "titel": "partner die zijn verzekeringsplicht niet nakwam (t/m 2020)",
   "bestand": "law/zorgtoeslag/rules.md",
   "anker": "zt-2020-art2-5oud--partner-die-zijn-verzekeringsplicht-niet-nakwam-tm-2020"
  },
  "zt-2026-art3-1": {
   "titel": "vermogenstoets",
   "bestand": "law/zorgtoeslag/rules.md",
   "anker": "zt-2026-art3-1--vermogenstoets"
  },
  "zt-2026-art4": {
   "titel": "standaardpremie",
   "bestand": "law/zorgtoeslag/rules.md",
   "anker": "zt-2026-art4--standaardpremie"
  },
  "zt-2026-art4a": {
   "titel": "standaardpremie voor verdragsgerechtigden: de woonlandfactor",
   "bestand": "law/zorgtoeslag/rules.md",
   "anker": "zt-2026-art4a--standaardpremie-voor-verdragsgerechtigden-de-woonlandfactor"
  },
  "awir-2026-art7-1": {
   "titel": "draagkracht: het inkomen van beiden telt",
   "bestand": "law/awir/rules.md",
   "anker": "awir-2026-art7-1--draagkracht-het-inkomen-van-beiden-telt"
  },
  "awir-2026-art8-1": {
   "titel": "toetsingsinkomen",
   "bestand": "law/awir/rules.md",
   "anker": "awir-2026-art8-1--toetsingsinkomen"
  },
  "awir-2026-art3": {
   "titel": "partner",
   "bestand": "law/awir/rules.md",
   "anker": "awir-2026-art3--partner"
  },
  "awir-2026-art5": {
   "titel": "wijziging in de maand",
   "bestand": "law/awir/rules.md",
   "anker": "awir-2026-art5--wijziging-in-de-maand"
  },
  "awir-2026-art14-4": {
   "titel": "afronding van de tegemoetkoming",
   "bestand": "law/awir/rules.md",
   "anker": "awir-2026-art14-4--afronding-van-de-tegemoetkoming"
  },
  "awir-2026-art14-5": {
   "titel": "minimumbedrag",
   "bestand": "law/awir/rules.md",
   "anker": "awir-2026-art14-5--minimumbedrag"
  }
 }
};
