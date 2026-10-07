"""Zorgtoeslag — executable rules. Pure functions, no I/O. Decimal arithmetic.

Every function names the rule id from rules.md it implements. Parameters come from
parameters/<jaar>.yaml (loaded by the caller); each carries its own article there.
Status of every rule: draft (LAW.md). Licence: CC BY-SA 4.0 (LICENSE-DATA).
"""
from __future__ import annotations

from dataclasses import dataclass, field
from decimal import Decimal, ROUND_FLOOR

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
    aanspraak_jaar: Decimal | None = None
    aanspraak_maand: Decimal | None = None
    aanspraak_maand_afgerond_praktijk: int | None = None  # how Dienst Toeslagen rounds, not law
    vermogen: str = "niet_getoetst"
    onbepaald: list[str] = field(default_factory=list)   # 'undetermined' items with article

    def als_dict(self) -> dict:
        return {
            "jaar": self.jaar,
            "aanspraak_jaar": None if self.aanspraak_jaar is None else str(self.aanspraak_jaar),
            "aanspraak_maand": None if self.aanspraak_maand is None else str(self.aanspraak_maand),
            "aanspraak_maand_afgerond_praktijk": self.aanspraak_maand_afgerond_praktijk,
            "vermogen": self.vermogen,
            "onbepaald": list(self.onbepaald),
            "stappen": [
                {"regel": s.regel, "artikel": s.artikel, "omschrijving": s.omschrijving,
                 "berekening": s.berekening,
                 "uitkomst": None if s.uitkomst is None else str(s.uitkomst), "status": s.status}
                for s in self.stappen
            ],
        }


def drempelinkomen(par: dict) -> Decimal:
    """zt-2026-art1-1f — Wzt art. 1 lid 1 onder f: 108% van het twaalfvoud van het
    WML-maandbedrag (WML art. 8 lid 1 onder b) voor januari van het berekeningsjaar.
    No rounding: the text has none."""
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


def bereken(jaar: int, par: dict, toetsingsinkomen_aanvrager: Decimal, partner: bool,
            toetsingsinkomen_partner: Decimal | None = None, partner_verzekerd: bool | None = None,
            rendementsgrondslag: Decimal | None = None,
            hele_jaar_dezelfde_partner: bool | None = None) -> Uitkomst:
    """The whole computation for one unchanged calendar year. Every step cites its article."""
    u = Uitkomst(jaar=jaar)
    artv = par.get("_versie", f"BWBR0018451, geldend van 01-01-{jaar}")

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
    u.stappen.append(Stap("zt-2026-art3-1", f"Wzt art. 3 lid 1 ({artv})",
                          "Is het vermogen op 1 januari boven de grens, dan is er het hele jaar geen zorgtoeslag.",
                          toel, verm))
    if verm == "undetermined":
        u.onbepaald.append("zt-2026-art3-1: " + toel)
    if verm == "geen_aanspraak":
        u.aanspraak_jaar = D(0)
        u.aanspraak_maand = D(0)
        u.aanspraak_maand_afgerond_praktijk = 0
        return u

    # zt-2026-art1-1f
    drempel = drempelinkomen(par)
    u.stappen.append(Stap("zt-2026-art1-1f", f"Wzt art. 1 lid 1 onder f; WML art. 8 lid 1 onder b",
                          "Het drempelinkomen: 108% van twaalf keer het minimumloon per maand van januari.",
                          f"108% × 12 × {par['wml_maandbedrag_januari']['waarde']}", drempel))

    # zt-2026-art2-2
    norm, deel_d, deel_b = normpremie(ti, partner, par)
    key = "normpremie_percentage_drempel_met_partner" if partner else "normpremie_percentage_drempel_zonder_partner"
    p_d = par[key]["waarde"]; p_b = par["normpremie_percentage_boven_drempel"]["waarde"]
    u.stappen.append(Stap("zt-2026-art2-2", f"Wzt art. 2 lid 2 en 3 ({artv})",
                          "De normpremie: wat u volgens de wet zelf aan premie kunt dragen.",
                          f"{p_d}% × {t(drempel)} + {p_b}% × max(0, {t(ti)} − {t(drempel)}) = {t(deel_d)} + {t(deel_b)}", norm))

    # zt-2026-art2-1
    sp = D(par["standaardpremie"]["waarde"])
    basis = sp * (2 if partner else 1)
    aanspraak = basis - norm
    if aanspraak < 0:
        aanspraak = D(0)
    u.stappen.append(Stap("zt-2026-art2-1", f"Wzt art. 2 lid 1 ({artv}); {par['standaardpremie']['artikel']}",
                          ("Twee keer de standaardpremie min de normpremie; u en uw partner hebben samen één aanspraak."
                           if partner else "De standaardpremie min de normpremie."),
                          f"{'2 × ' if partner else ''}{t(sp)} − {t(norm)}", aanspraak))

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

    # zt-2026-art2-5
    maand = aanspraak / D(12)
    u.stappen.append(Stap("zt-2026-art2-5", f"Wzt art. 2 lid 5 ({artv})",
                          "Per kalendermaand, bij een heel jaar zonder wijzigingen: het jaarbedrag gedeeld door twaalf.",
                          f"{t(aanspraak)} / 12", maand))
    u.aanspraak_jaar = aanspraak
    u.aanspraak_maand = maand
    # Not law: how Dienst Toeslagen rounds in its published examples (down to whole euros).
    u.aanspraak_maand_afgerond_praktijk = int(maand.quantize(D(1), rounding=ROUND_FLOOR))
    u.onbepaald.append("afronding maandbedrag: de wet zegt niets; Dienst Toeslagen rondt in haar rekenvoorbeelden "
                       "naar beneden af op hele euro's (grondslag nog niet gevonden).")
    return u
