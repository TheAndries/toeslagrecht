/* Gegenereerd door tools/build.py op 2026-10-14 uit law/zorgtoeslag/parameters/*.yaml en law/awir/parameters/*.yaml. Niet bewerken: de yaml-bestanden zijn de bron en dragen bij elk getal zijn artikel. Licentie: CC BY-SA 4.0 (LICENSE-DATA). */
var PARAMETERS = {
 "gegenereerd": "2026-10-14",
 "zorgtoeslag": {
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
    "bron": "Stcrt. 2024, 38492, art. V onder A ('€ 73.904' vervangen door '€ 74.790' per 01-01-2025); het bedrag 2024 is uit die vervanging afgeleid en in de geconsolideerde tekst van 01-01-2024 (art. 7 lid 3, tweede zin) niet apart nagelezen",
    "url": "https://zoek.officielebekendmakingen.nl/stcrt-2024-38492.html"
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
