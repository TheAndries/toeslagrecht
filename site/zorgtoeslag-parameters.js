/* Gegenereerd door tools/build.py op 2026-10-12 uit law/zorgtoeslag/parameters/*.yaml en law/awir/parameters/*.yaml. Niet bewerken: de yaml-bestanden zijn de bron en dragen bij elk getal zijn artikel. Licentie: CC BY-SA 4.0 (LICENSE-DATA). */
var PARAMETERS = {
 "gegenereerd": "2026-10-12",
 "zorgtoeslag": {
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
