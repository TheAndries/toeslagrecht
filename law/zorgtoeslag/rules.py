"""Zorgtoeslag — executable rules. Pure functions, no I/O. Decimal arithmetic.

Every function names the rule id from rules.md (or ../awir/rules.md) it implements.
Parameters come from parameters/<jaar>.yaml and ../awir/parameters/<jaar>.yaml (loaded by
the caller); each carries its own article there.
Status of every rule: draft (LAW.md). Licence: CC BY-SA 4.0 (LICENSE-DATA).
"""
from __future__ import annotations

from dataclasses import dataclass, field
from decimal import Decimal, ROUND_FLOOR, ROUND_HALF_UP

D = Decimal


def t(x) -> str:
    """Decimal for display in a step's text: at most three decimals, trailing zeros stripped.
    The step's `uitkomst` keeps the exact value; only the text is shortened."""
    if not isinstance(x, Decimal):
        return str(x)
    s = f"{x.quantize(D('0.001')):f}"
    return s.rstrip("0").rstrip(".") if "." in s else s


def pct(p: Decimal) -> Decimal:
    """Percentage as stored in the yaml ('13.730' means 13,730%) to a factor."""
    return p / D(100)


@dataclass
class Stap:
    regel: str          # rule id from rules.md
    artikel: str        # article as cited
    omschrijving: str   # plain Dutch, one line
    berekening: str     # the arithmetic as text
    uitkomst: Decimal | str | None
    status: str = "draft"


@dataclass
class Uitkomst:
    jaar: int
    stappen: list[Stap] = field(default_factory=list)
    aanspraak_jaar: Decimal | None = None        # Wzt art. 2 (and 4a): the computed amount, unrounded
    tegemoetkoming: Decimal | None = None        # Awir art. 14 lid 4-5: whole euros, 0 if under € 24
    aanspraak_maand: Decimal | None = None       # aanspraak_jaar / 12, unrounded
    aanspraak_maand_afgerond_praktijk: int | None = None  # how Dienst Toeslagen rounds, not law
    vermogen: str = "niet_getoetst"
    onbepaald: list[str] = field(default_factory=list)   # 'undetermined' items with article

    def als_dict(self) -> dict:
        def s(v):
            return None if v is None else str(v)
        return {
            "jaar": self.jaar,
            "aanspraak_jaar": s(self.aanspraak_jaar),
            "tegemoetkoming": s(self.tegemoetkoming),
            "aanspraak_maand": s(self.aanspraak_maand),
            "aanspraak_maand_afgerond_praktijk": self.aanspraak_maand_afgerond_praktijk,
            "vermogen": self.vermogen,
            "onbepaald": list(self.onbepaald),
            "stappen": [
                {"regel": x.regel, "artikel": x.artikel, "omschrijving": x.omschrijving,
                 "berekening": x.berekening, "uitkomst": s(x.uitkomst), "status": x.status}
                for x in self.stappen
            ],
        }


def drempelinkomen(par: dict) -> Decimal:
    """zt-2026-art1-1f — Wzt art. 1 lid 1 onder f: 108% van het twaalfvoud van het
    WML-maandbedrag (WML art. 8 lid 1 onder b) voor januari van het berekeningsjaar.
    No rounding: the text has none (DISCREPANCIES.md #1)."""
    factor = pct(D(par["drempelinkomen_factor"]["waarde"]))
    maand = D(par["wml_maandbedrag_januari"]["waarde"])
    return factor * D(12) * maand


def normpremie(toetsingsinkomen: Decimal, partner: bool, par: dict) -> tuple[Decimal, Decimal, Decimal]:
    """zt-2026-art2-2 — Wzt art. 2 lid 2 en 3. Returns (normpremie, deel_drempel, deel_boven)."""
    drempel = drempelinkomen(par)
    key = "normpremie_percentage_drempel_met_partner" if partner else "normpremie_percentage_drempel_zonder_partner"
    deel_drempel = pct(D(par[key]["waarde"])) * drempel
    boven = toetsingsinkomen - drempel
    if boven < 0:
        boven = D(0)  # "voor zover dat toetsingsinkomen het drempelinkomen te boven gaat"
    deel_boven = pct(D(par["normpremie_percentage_boven_drempel"]["waarde"])) * boven
    return deel_drempel + deel_boven, deel_drempel, deel_boven


def vermogenstoets(rendementsgrondslag: Decimal | None, partner: bool,
                   hele_jaar_dezelfde_partner: bool | None, par: dict) -> tuple[str, str]:
    """zt-2026-art3-1 — Wzt art. 3 lid 1. Returns (uitkomst, toelichting)."""
    if rendementsgrondslag is None:
        return "niet_getoetst", "Geen vermogen opgegeven; de vermogenstoets is niet uitgevoerd."
    if not partner:
        grens = D(par["vermogensgrens_zonder_partner"]["waarde"])
        if rendementsgrondslag > grens:
            return "geen_aanspraak", f"Rendementsgrondslag {t(rendementsgrondslag)} > € {grens}: geen aanspraak."
        return "aanspraak", f"Rendementsgrondslag {t(rendementsgrondslag)} ≤ € {grens}."
    if hele_jaar_dezelfde_partner is None or hele_jaar_dezelfde_partner:
        grens = D(par["vermogensgrens_met_partner"]["waarde"])
        if rendementsgrondslag > grens:
            return "geen_aanspraak", f"Gezamenlijke rendementsgrondslag {t(rendementsgrondslag)} > € {grens}: geen aanspraak."
        return "aanspraak", f"Gezamenlijke rendementsgrondslag {t(rendementsgrondslag)} ≤ € {grens}."
    return ("undetermined",
            "Wzt art. 3 lid 1 noemt de gezamenlijke grens alleen voor wie het gehele berekeningsjaar "
            "dezelfde partner heeft; welke grens anders geldt, bepaalt de tekst niet uitdrukkelijk.")


def woonlandfactor(woonland: str | None, par: dict) -> Decimal | None:
    """zt-2026-art4a — Wzt art. 4a lid 1-2: het verhoudingsgetal per land, vastgesteld bij
    ministeriële regeling (Regeling zorgverzekering art. 6.3.1 lid 9 en bijlage 4)."""
    if not woonland:
        return None
    tabel = par.get("woonlandfactoren", {}).get("landen", {})
    w = tabel.get(woonland.upper())
    return None if w is None else D(str(w))


def standaardpremies(par: dict, partner: bool, aanvrager_verdragsgerechtigd: bool,
                     partner_verzekerd: bool | None, partner_verdragsgerechtigd: bool | None,
                     woonland: str | None) -> tuple[Decimal, Decimal | None, Decimal | None, list[str], str]:
    """zt-2026-art4 / zt-2026-art4a — the standaardpremie per person.
    Returns (sp_aanvrager, sp_partner | None, woonlandfactor | None, undetermined notes, tekst)."""
    sp = D(par["standaardpremie"]["waarde"])
    noot: list[str] = []
    wlf = woonlandfactor(woonland, par) if (aanvrager_verdragsgerechtigd or partner_verdragsgerechtigd) else None
    if (aanvrager_verdragsgerechtigd or partner_verdragsgerechtigd) and wlf is None:
        noot.append("zt-2026-art4a: verdragsgerechtigde zonder (bekend) woonland; woonlandfactor niet toegepast "
                    "(Wzt art. 4a lid 1-2).")
    sp_a = sp * wlf if (aanvrager_verdragsgerechtigd and wlf is not None) else sp
    if not partner:
        return sp_a, None, wlf, noot, f"{t(sp)}" + (f" × {t(wlf)}" if aanvrager_verdragsgerechtigd and wlf is not None else "")
    # partner's standaardpremie
    if aanvrager_verdragsgerechtigd and wlf is not None:
        # art. 4a lid 4: partner of an art. 69 Zvw person: × woonlandfactor, unless the partner is
        # a Zvw art. 1 onder f verzekerde
        sp_p = sp if partner_verzekerd else sp * wlf
    elif partner_verdragsgerechtigd and wlf is not None:
        # art. 4a lid 3: verzekerde with a partner who is an art. 69 Zvw person (lid 3 inserted
        # 06-11-2024, Stb. 2024, 291; before that date the text did not cover this case)
        if par.get("art4a_lid3_aanwezig", True) is False:
            noot.append("zt-2026-art4a: " + par.get("art4a_lid3_opmerking", "art. 4a lid 3 ontbreekt in deze versie."))
            return sp_a, None, wlf, noot, f"{t(sp_a)} + undetermined"
        sp_p = sp * wlf
    else:
        sp_p = sp
    tekst = f"{t(sp_a)} + {t(sp_p)}"
    return sp_a, sp_p, wlf, noot, tekst


def rond_tegemoetkoming(bedrag: Decimal, awir: dict) -> tuple[Decimal, Decimal]:
    """awir-2026-art14-4 en -5 — Awir art. 14 lid 4: rekenkundig afgerond op hele euro's;
    lid 5: niet toegekend indien minder dan het minimumbedrag. Returns (afgerond, toegekend)."""
    afgerond = bedrag.quantize(D(1), rounding=ROUND_HALF_UP)
    minimum = D(awir["minimum_tegemoetkoming"]["waarde"])
    toegekend = D(0) if afgerond < minimum else afgerond
    return afgerond, toegekend


def bereken(jaar: int, par: dict, toetsingsinkomen_aanvrager: Decimal, partner: bool,
            toetsingsinkomen_partner: Decimal | None = None, partner_verzekerd: bool | None = None,
            rendementsgrondslag: Decimal | None = None,
            hele_jaar_dezelfde_partner: bool | None = None,
            awir: dict | None = None,
            aanvrager_verdragsgerechtigd: bool = False,
            partner_verdragsgerechtigd: bool | None = None,
            woonland: str | None = None) -> Uitkomst:
    """The whole computation for one unchanged calendar year. Every step cites its article."""
    u = Uitkomst(jaar=jaar)
    artv = par.get("versie") or par.get("_versie") or f"BWBR0018451, geldend van 01-01-{jaar}"
    art_verm = par.get("artikel_vermogenstoets", "Wzt art. 3 lid 1")   # 2024: art. 2a lid 1
    art_wlf = par.get("artikel_woonlandfactor", "Wzt art. 4a")        # 2024: art. 3
    lid3 = par.get("art4a_lid3_aanwezig", True)                       # art. 4a lid 3 exists since 06-11-2024
    awir = awir or {}

    # awir-2026-art7-1
    ti = toetsingsinkomen_aanvrager + (toetsingsinkomen_partner or D(0)) if partner else toetsingsinkomen_aanvrager
    u.stappen.append(Stap("awir-2026-art7-1", "Awir art. 7 lid 1",
                          "Uw toetsingsinkomen en dat van uw partner tellen samen." if partner
                          else "Uw toetsingsinkomen telt; u hebt geen partner.",
                          (f"{t(toetsingsinkomen_aanvrager)} + {t(toetsingsinkomen_partner or D(0))}" if partner
                           else t(toetsingsinkomen_aanvrager)), ti))

    # zt-2026-art3-1
    verm, toel = vermogenstoets(rendementsgrondslag, partner, hele_jaar_dezelfde_partner, par)
    u.vermogen = verm
    u.stappen.append(Stap("zt-2026-art3-1", f"{art_verm} ({artv})",
                          "Is het vermogen op 1 januari boven de grens, dan is er het hele jaar geen zorgtoeslag.",
                          toel, verm))
    if verm == "undetermined":
        u.onbepaald.append("zt-2026-art3-1: " + toel)
    if verm == "geen_aanspraak":
        u.aanspraak_jaar = D(0)
        u.tegemoetkoming = D(0)
        u.aanspraak_maand = D(0)
        u.aanspraak_maand_afgerond_praktijk = 0
        return u

    # zt-2026-art1-1f
    drempel = drempelinkomen(par)
    u.stappen.append(Stap("zt-2026-art1-1f", "Wzt art. 1 lid 1 onder f; WML art. 8 lid 1 onder b",
                          "Het drempelinkomen: 108% van twaalf keer het minimumloon per maand van januari.",
                          f"108% × 12 × {par['wml_maandbedrag_januari']['waarde']}", drempel))

    # zt-2026-art2-2
    norm, deel_d, deel_b = normpremie(ti, partner, par)
    key = "normpremie_percentage_drempel_met_partner" if partner else "normpremie_percentage_drempel_zonder_partner"
    p_d = par[key]["waarde"]; p_b = par["normpremie_percentage_boven_drempel"]["waarde"]
    u.stappen.append(Stap("zt-2026-art2-2", f"Wzt art. 2 lid 2 en 3 ({artv})",
                          "De normpremie: wat u volgens de wet zelf aan premie kunt dragen.",
                          f"{p_d}% × {t(drempel)} + {p_b}% × max(0, {t(ti)} − {t(drempel)}) = {t(deel_d)} + {t(deel_b)}", norm))

    # zt-2026-art4 / zt-2026-art4a — standaardpremie per person
    sp_a, sp_p, wlf, noot, sp_tekst = standaardpremies(par, partner, aanvrager_verdragsgerechtigd,
                                                       partner_verzekerd, partner_verdragsgerechtigd, woonland)
    u.onbepaald.extend(noot)
    if partner and sp_p is None and wlf is not None:
        u.stappen.append(Stap("zt-2026-art4a", f"{art_wlf} ({artv}); {par['woonlandfactoren']['artikel']}",
                              "Bent u zelf in Nederland verzekerd en is uw partner verdragsgerechtigd, dan bepaalt "
                              "de wettekst van dit jaar niet welke standaardpremie voor uw partner telt.",
                              f"woonlandfactor {woonland.upper()} {jaar} = {t(wlf)}; standaardpremie partner: niet bepaald door de wet",
                              "undetermined"))
        return u
    if wlf is not None:
        if lid3:
            leden = "lid 1, 2" + (", 3" if partner_verdragsgerechtigd and not aanvrager_verdragsgerechtigd else "") \
                    + (", 4" if partner and aanvrager_verdragsgerechtigd else "")
        else:
            leden = "lid 1, 2" + (", 3" if partner and aanvrager_verdragsgerechtigd else "")
        u.stappen.append(Stap("zt-2026-art4a", f"{art_wlf} {leden} ({artv}); {par['woonlandfactoren']['artikel']}",
                              "Woont u als verdragsgerechtigde buiten Nederland, dan telt de standaardpremie "
                              "vermenigvuldigd met de woonlandfactor van uw woonland.",
                              f"woonlandfactor {woonland.upper()} {jaar} = {t(wlf)}; standaardpremie(s): {sp_tekst}",
                              sp_a + (sp_p or D(0))))

    # zt-2026-art2-1
    basis = sp_a + (sp_p or D(0))
    aanspraak = basis - norm
    if aanspraak < 0:
        aanspraak = D(0)
    u.stappen.append(Stap("zt-2026-art2-1", f"Wzt art. 2 lid 1 ({artv}); {par['standaardpremie']['artikel']}",
                          ("Twee keer de standaardpremie min de normpremie; u en uw partner hebben samen één aanspraak."
                           if partner else "De standaardpremie min de normpremie."),
                          f"{sp_tekst if wlf is None else t(basis)} − {t(norm)}", aanspraak))

    # zt-2026-art2-4
    if partner and partner_verzekerd is False:
        aandeel = pct(D(par["aandeel_partner_niet_verzekerd"]["waarde"]))
        aanspraak = aanspraak * aandeel
        u.stappen.append(Stap("zt-2026-art2-4", f"Wzt art. 2 lid 4 ({artv})",
                              "Uw partner is geen verzekerde voor deze wet: u krijgt de helft.",
                              f"{par['aandeel_partner_niet_verzekerd']['waarde']}% × vorige stap", aanspraak))
    elif partner and partner_verzekerd is None:
        u.onbepaald.append("zt-2026-art2-4: niet opgegeven of de partner verzekerde is (Wzt art. 1 lid 1 onder c); "
                           "gerekend alsof wel.")
    u.aanspraak_jaar = aanspraak

    # awir-2026-art14-4 / awir-2026-art14-5
    if awir.get("minimum_tegemoetkoming"):
        afgerond, toegekend = rond_tegemoetkoming(aanspraak, awir)
        u.stappen.append(Stap("awir-2026-art14-4", awir["afronding_tegemoetkoming"]["artikel"],
                              "Het bedrag van de zorgtoeslag wordt afgerond op hele euro's.",
                              f"{t(aanspraak)} → afgerond", afgerond))
        minimum = awir["minimum_tegemoetkoming"]["waarde"]
        u.stappen.append(Stap("awir-2026-art14-5", awir["minimum_tegemoetkoming"]["artikel"],
                              f"Is de zorgtoeslag minder dan € {minimum} per jaar, dan wordt zij niet toegekend.",
                              (f"{t(afgerond)} < {minimum}: niet toegekend" if toegekend == 0 and afgerond > 0
                               else f"{t(afgerond)} ≥ {minimum}" if afgerond > 0 else "0"), toegekend))
        u.tegemoetkoming = toegekend
    else:
        u.onbepaald.append("Awir art. 14 lid 4-5 (afronding, minimumbedrag): geen Awir-parameters geladen; niet toegepast.")

    # zt-2026-art2-5
    maand = aanspraak / D(12)
    u.stappen.append(Stap("zt-2026-art2-5", f"Wzt art. 2 lid 5 ({artv})",
                          "Per kalendermaand, bij een heel jaar zonder wijzigingen: het jaarbedrag gedeeld door twaalf.",
                          f"{t(aanspraak)} / 12", maand))
    u.aanspraak_maand = maand
    # Not law: how Dienst Toeslagen arrives at the whole-euro monthly amount it publishes. Its tables divide the
    # granted year amount (whole euros, Awir art. 14 lid 4) by twelve and round down; its leaflets print the
    # unrounded month but round down to the same euro (DISCREPANCIES.md #5, 2026-10-09).
    basis_maand = u.tegemoetkoming if u.tegemoetkoming is not None else aanspraak
    u.aanspraak_maand_afgerond_praktijk = int((basis_maand / D(12)).quantize(D(1), rounding=ROUND_FLOOR))
    u.onbepaald.append("afronding maandbedrag: de wet rondt het jaarbedrag af (Awir art. 14 lid 4), niet het "
                       "maandbedrag; Dienst Toeslagen deelt in haar tabellen het afgeronde jaarbedrag door twaalf en "
                       "rondt naar beneden af op hele euro's (grondslag niet gevonden in Awir, Wzt of "
                       "Uitvoeringsregeling Awir).")
    return u
