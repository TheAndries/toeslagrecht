/* toeslagrecht — zorgtoeslag: de regels, uitvoerbaar in de browser.
 *
 * Dit is de vertaling van law/zorgtoeslag/rules.py naar JavaScript, regel voor regel, met dezelfde
 * regel-id's (law/zorgtoeslag/rules.md, law/awir/rules.md). De getallen komen uit
 * zorgtoeslag-parameters.js, dat tools/build.py uit law/<toeslag>/parameters/<jaar>.yaml maakt; elk getal
 * draagt daar zijn artikel. tools/build.py check draait elke case uit cases/ door beide versies en
 * eist dat zij hetzelfde geven.
 *
 * Rekenwijze: exacte breuken met BigInt, tien decimalen, zodat 23,50 hier net zo op € 24 afrondt als
 * in de Python-versie. Geen I/O: niets verlaat het apparaat (CHARTER.md P5).
 * Licentie: MIT (LICENSE); de regels zelf CC BY-SA 4.0 (LICENSE-DATA). Status van elke regel: draft.
 */
(function (root) {
  "use strict";

  const DEC = 10n;
  const SCALE = 10n ** DEC;

  function P(s) {
    // decimal string ("2294.40", "13.730", 32000) -> BigInt scaled by 10^10
    s = String(s).trim().replace(",", ".");
    let neg = false;
    if (s[0] === "-") { neg = true; s = s.slice(1); }
    const parts = s.split(".");
    const whole = parts[0] === "" ? "0" : parts[0];
    const frac = ((parts[1] || "") + "0".repeat(Number(DEC))).slice(0, Number(DEC));
    if (!/^\d+$/.test(whole) || !/^\d+$/.test(frac)) throw new Error("geen getal: " + s);
    const v = BigInt(whole) * SCALE + BigInt(frac);
    return neg ? -v : v;
  }
  const mul = (a, b) => (a * b) / SCALE;        // exact for the precisions the law uses
  const div = (a, b) => (a * SCALE) / b;        // truncates beyond ten decimals
  const pct = (p) => P(p) / 100n;               // "13.730" (procent) -> 0.1373 as a factor

  function roundHalfUp(v, unitDecimals) {
    // v >= 0; unitDecimals = 0 for whole euros, 2 for cents
    const unit = 10n ** (DEC - BigInt(unitDecimals));
    const q = v / unit, r = v % unit;
    return (r * 2n >= unit ? q + 1n : q) * unit;
  }
  function floorTo(v, unitDecimals) {
    const unit = 10n ** (DEC - BigInt(unitDecimals));
    return (v / unit) * unit;
  }

  function toString(v, decimals) {
    // exact decimal string with `decimals` places (truncating), or all ten when decimals is undefined
    const neg = v < 0n; if (neg) v = -v;
    let s = v.toString().padStart(Number(DEC) + 1, "0");
    let whole = s.slice(0, -Number(DEC)), frac = s.slice(-Number(DEC));
    if (decimals === undefined) frac = frac.replace(/0+$/, "");
    else frac = frac.slice(0, decimals);
    return (neg ? "-" : "") + whole + (frac ? "." + frac : "");
  }
  function t(v) {
    // like rules.py t(): at most three decimals, trailing zeros stripped, for the text of a step
    if (typeof v !== "bigint") return String(v);
    const r = roundHalfUp(v < 0n ? -v : v, 3) * (v < 0n ? -1n : 1n);
    return toString(r, 3).replace(/\.?0+$/, "") || "0";
  }
  function eur(v, cents) {
    // "€ 1.239,53" / "€ 1.240"
    if (v === null || v === undefined) return "—";
    if (typeof v !== "bigint") return String(v);
    const r = cents === false ? roundHalfUp(v, 0) : roundHalfUp(v, 2);
    const s = toString(r, cents === false ? 0 : 2);
    const [w, f] = s.split(".");
    const wd = w.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return "€ " + wd + (f !== undefined ? "," + f : "");
  }

  function stap(regel, artikel, omschrijving, berekening, uitkomst, status) {
    return { regel, artikel, omschrijving, berekening, uitkomst, status: status || "draft" };
  }

  // zt-2026-art1-1f — Wzt art. 1 lid 1 onder f: 108% van het twaalfvoud van het WML-maandbedrag
  // van januari (WML art. 8 lid 1 onder b). Geen afronding: de tekst heeft die niet (DISCREPANCIES.md #1).
  function drempelinkomen(par) {
    return mul(mul(pct(par.drempelinkomen_factor.waarde), 12n * SCALE), P(par.wml_maandbedrag_januari.waarde));
  }

  // zt-2026-art2-2 — Wzt art. 2 lid 2 en 3
  function normpremie(ti, partner, par) {
    const drempel = drempelinkomen(par);
    const key = partner ? "normpremie_percentage_drempel_met_partner" : "normpremie_percentage_drempel_zonder_partner";
    const deelDrempel = mul(pct(par[key].waarde), drempel);
    let boven = ti - drempel;
    if (boven < 0n) boven = 0n;   // "voor zover dat toetsingsinkomen het drempelinkomen te boven gaat"
    const deelBoven = mul(pct(par.normpremie_percentage_boven_drempel.waarde), boven);
    return [deelDrempel + deelBoven, deelDrempel, deelBoven];
  }

  // zt-2026-art3-1 — Wzt art. 3 lid 1 (2024: art. 2a lid 1)
  function vermogenstoets(rg, partner, heleJaarDezelfdePartner, par) {
    if (rg === null || rg === undefined) {
      return ["niet_getoetst", "Geen vermogen opgegeven; de vermogenstoets is niet uitgevoerd."];
    }
    if (!partner) {
      const grens = P(par.vermogensgrens_zonder_partner.waarde);
      if (rg > grens) return ["geen_aanspraak", "Rendementsgrondslag " + t(rg) + " > € " + par.vermogensgrens_zonder_partner.waarde + ": geen aanspraak."];
      return ["aanspraak", "Rendementsgrondslag " + t(rg) + " ≤ € " + par.vermogensgrens_zonder_partner.waarde + "."];
    }
    if (heleJaarDezelfdePartner === null || heleJaarDezelfdePartner === undefined || heleJaarDezelfdePartner) {
      const grens = P(par.vermogensgrens_met_partner.waarde);
      if (rg > grens) return ["geen_aanspraak", "Gezamenlijke rendementsgrondslag " + t(rg) + " > € " + par.vermogensgrens_met_partner.waarde + ": geen aanspraak."];
      return ["aanspraak", "Gezamenlijke rendementsgrondslag " + t(rg) + " ≤ € " + par.vermogensgrens_met_partner.waarde + "."];
    }
    return ["undetermined",
      "Wzt art. 3 lid 1 noemt de gezamenlijke grens alleen voor wie het gehele berekeningsjaar " +
      "dezelfde partner heeft; welke grens anders geldt, bepaalt de tekst niet uitdrukkelijk."];
  }

  // zt-2026-art4a — Wzt art. 4a lid 1-2 (2024: art. 3): het verhoudingsgetal per land
  function woonlandfactor(woonland, par) {
    if (!woonland) return null;
    const tabel = (par.woonlandfactoren && par.woonlandfactoren.landen) || {};
    const w = tabel[String(woonland).toUpperCase()];
    return w === undefined ? null : P(w);
  }

  // zt-2026-art4 / zt-2026-art4a — de standaardpremie per persoon
  function standaardpremies(par, partner, aanvragerVg, partnerVerzekerd, partnerVg, woonland) {
    const sp = P(par.standaardpremie.waarde);
    const noot = [];
    const wlf = (aanvragerVg || partnerVg) ? woonlandfactor(woonland, par) : null;
    if ((aanvragerVg || partnerVg) && wlf === null) {
      noot.push("zt-2026-art4a: verdragsgerechtigde zonder (bekend) woonland; woonlandfactor niet toegepast (Wzt art. 4a lid 1-2).");
    }
    const spA = (aanvragerVg && wlf !== null) ? mul(sp, wlf) : sp;
    if (!partner) {
      return [spA, null, wlf, noot, t(sp) + ((aanvragerVg && wlf !== null) ? " × " + t(wlf) : "")];
    }
    let spP;
    if (aanvragerVg && wlf !== null) {
      // art. 4a lid 4: partner van een art. 69 Zvw-persoon: × woonlandfactor, tenzij de partner Zvw-verzekerde is
      spP = partnerVerzekerd ? sp : mul(sp, wlf);
    } else if (partnerVg && wlf !== null) {
      // art. 4a lid 3: verzekerde met een verdragsgerechtigde partner (ingevoegd 06-11-2024, Stb. 2024, 291)
      if (par.art4a_lid3_aanwezig === false) {
        noot.push("zt-2026-art4a: " + (par.art4a_lid3_opmerking || "art. 4a lid 3 ontbreekt in deze versie."));
        return [spA, null, wlf, noot, t(spA) + " + undetermined"];
      }
      spP = mul(sp, wlf);
    } else {
      spP = sp;
    }
    return [spA, spP, wlf, noot, t(spA) + " + " + t(spP)];
  }

  // awir-2026-art14-4 en -5 — Awir art. 14 lid 4 (rekenkundig afgerond op hele euro's), lid 5 (minimum)
  function rondTegemoetkoming(bedrag, awir) {
    const afgerond = roundHalfUp(bedrag, 0);
    const minimum = P(awir.minimum_tegemoetkoming.waarde);
    const toegekend = afgerond < minimum ? 0n : afgerond;
    return [afgerond, toegekend];
  }

  /** De hele berekening voor één ongewijzigd kalenderjaar. Elke stap noemt haar artikel.
   *  invoer: { jaar, toetsingsinkomen_aanvrager, partner, toetsingsinkomen_partner, partner_verzekerd,
   *            rendementsgrondslag, hele_jaar_dezelfde_partner, aanvrager_verdragsgerechtigd,
   *            partner_verdragsgerechtigd, woonland }  (bedragen als string of getal; booleans; null = niet opgegeven)
   *  parameters: zorgtoeslag-parameters.js (PARAMETERS) */
  function bereken(invoer, parameters) {
    const jaar = Number(invoer.jaar);
    const par = parameters.zorgtoeslag[jaar];
    const awir = parameters.awir[jaar] || {};
    if (!par) throw new Error("geen parameters voor " + jaar);
    const partner = !!invoer.partner;
    const tiA = P(invoer.toetsingsinkomen_aanvrager);
    const tiP = (invoer.toetsingsinkomen_partner === null || invoer.toetsingsinkomen_partner === undefined || invoer.toetsingsinkomen_partner === "")
      ? null : P(invoer.toetsingsinkomen_partner);
    const rg = (invoer.rendementsgrondslag === null || invoer.rendementsgrondslag === undefined || invoer.rendementsgrondslag === "")
      ? null : P(invoer.rendementsgrondslag);
    const partnerVerzekerd = invoer.partner_verzekerd === undefined ? null : invoer.partner_verzekerd;
    const heleJaar = invoer.hele_jaar_dezelfde_partner === undefined ? null : invoer.hele_jaar_dezelfde_partner;
    const aanvragerVg = !!invoer.aanvrager_verdragsgerechtigd;
    const partnerVg = invoer.partner_verdragsgerechtigd === undefined ? null : invoer.partner_verdragsgerechtigd;
    const woonland = invoer.woonland || null;

    const artv = par.versie || ("BWBR0018451, geldend van 01-01-" + jaar);
    const artVerm = par.artikel_vermogenstoets || "Wzt art. 3 lid 1";
    const artWlf = par.artikel_woonlandfactor || "Wzt art. 4a";
    const lid3 = par.art4a_lid3_aanwezig === undefined ? true : par.art4a_lid3_aanwezig;

    const u = { jaar, stappen: [], aanspraak_jaar: null, tegemoetkoming: null, aanspraak_maand: null,
                aanspraak_maand_afgerond_praktijk: null, vermogen: "niet_getoetst", onbepaald: [] };

    // awir-2026-art7-1
    const ti = partner ? tiA + (tiP === null ? 0n : tiP) : tiA;
    u.stappen.push(stap("awir-2026-art7-1", "Awir art. 7 lid 1",
      partner ? "Uw toetsingsinkomen en dat van uw partner tellen samen." : "Uw toetsingsinkomen telt; u hebt geen partner.",
      partner ? t(tiA) + " + " + t(tiP === null ? 0n : tiP) : t(tiA), ti));

    // zt-2026-art3-1
    const [verm, toel] = vermogenstoets(rg, partner, heleJaar, par);
    u.vermogen = verm;
    u.stappen.push(stap("zt-2026-art3-1", artVerm + " (" + artv + ")",
      "Is het vermogen op 1 januari boven de grens, dan is er het hele jaar geen zorgtoeslag.", toel, verm));
    if (verm === "undetermined") u.onbepaald.push("zt-2026-art3-1: " + toel);
    if (verm === "geen_aanspraak") {
      u.aanspraak_jaar = 0n; u.tegemoetkoming = 0n; u.aanspraak_maand = 0n; u.aanspraak_maand_afgerond_praktijk = 0;
      return u;
    }

    // zt-2026-art1-1f
    const drempel = drempelinkomen(par);
    u.stappen.push(stap("zt-2026-art1-1f", "Wzt art. 1 lid 1 onder f; WML art. 8 lid 1 onder b",
      "Het drempelinkomen: 108% van twaalf keer het minimumloon per maand van januari.",
      "108% × 12 × " + par.wml_maandbedrag_januari.waarde, drempel));

    // zt-2026-art2-2
    const [norm, deelD, deelB] = normpremie(ti, partner, par);
    const key = partner ? "normpremie_percentage_drempel_met_partner" : "normpremie_percentage_drempel_zonder_partner";
    const pD = par[key].waarde, pB = par.normpremie_percentage_boven_drempel.waarde;
    u.stappen.push(stap("zt-2026-art2-2", "Wzt art. 2 lid 2 en 3 (" + artv + ")",
      "De normpremie: wat u volgens de wet zelf aan premie kunt dragen.",
      pD + "% × " + t(drempel) + " + " + pB + "% × max(0, " + t(ti) + " − " + t(drempel) + ") = " + t(deelD) + " + " + t(deelB), norm));

    // zt-2026-art4 / zt-2026-art4a
    const [spA, spP, wlf, noot, spTekst] = standaardpremies(par, partner, aanvragerVg, partnerVerzekerd, partnerVg, woonland);
    u.onbepaald.push(...noot);
    if (partner && spP === null && wlf !== null) {
      u.stappen.push(stap("zt-2026-art4a", artWlf + " (" + artv + "); " + par.woonlandfactoren.artikel,
        "Bent u zelf in Nederland verzekerd en is uw partner verdragsgerechtigd, dan bepaalt de wettekst van dit jaar niet welke standaardpremie voor uw partner telt.",
        "woonlandfactor " + String(woonland).toUpperCase() + " " + jaar + " = " + t(wlf) + "; standaardpremie partner: niet bepaald door de wet",
        "undetermined"));
      return u;
    }
    if (wlf !== null) {
      let leden;
      if (lid3) {
        leden = "lid 1, 2" + ((partnerVg && !aanvragerVg) ? ", 3" : "") + ((partner && aanvragerVg) ? ", 4" : "");
      } else {
        leden = "lid 1, 2" + ((partner && aanvragerVg) ? ", 3" : "");
      }
      u.stappen.push(stap("zt-2026-art4a", artWlf + " " + leden + " (" + artv + "); " + par.woonlandfactoren.artikel,
        "Woont u als verdragsgerechtigde buiten Nederland, dan telt de standaardpremie vermenigvuldigd met de woonlandfactor van uw woonland.",
        "woonlandfactor " + String(woonland).toUpperCase() + " " + jaar + " = " + t(wlf) + "; standaardpremie(s): " + spTekst,
        spA + (spP === null ? 0n : spP)));
    }

    // zt-2026-art2-1
    const basis = spA + (spP === null ? 0n : spP);
    let aanspraak = basis - norm;
    if (aanspraak < 0n) aanspraak = 0n;
    u.stappen.push(stap("zt-2026-art2-1", "Wzt art. 2 lid 1 (" + artv + "); " + par.standaardpremie.artikel,
      partner ? "Twee keer de standaardpremie min de normpremie; u en uw partner hebben samen één aanspraak."
              : "De standaardpremie min de normpremie.",
      (wlf === null ? spTekst : t(basis)) + " − " + t(norm), aanspraak));

    // zt-2026-art2-4
    if (partner && partnerVerzekerd === false) {
      aanspraak = mul(aanspraak, pct(par.aandeel_partner_niet_verzekerd.waarde));
      u.stappen.push(stap("zt-2026-art2-4", "Wzt art. 2 lid 4 (" + artv + ")",
        "Uw partner is geen verzekerde voor deze wet: u krijgt de helft.",
        par.aandeel_partner_niet_verzekerd.waarde + "% × vorige stap", aanspraak));
    } else if (partner && partnerVerzekerd === null) {
      u.onbepaald.push("zt-2026-art2-4: niet opgegeven of de partner verzekerde is (Wzt art. 1 lid 1 onder c); gerekend alsof wel.");
    }
    u.aanspraak_jaar = aanspraak;

    // awir-2026-art14-4 / awir-2026-art14-5
    if (awir.minimum_tegemoetkoming) {
      const [afgerond, toegekend] = rondTegemoetkoming(aanspraak, awir);
      u.stappen.push(stap("awir-2026-art14-4", awir.afronding_tegemoetkoming.artikel,
        "Het bedrag van de zorgtoeslag wordt afgerond op hele euro's.", t(aanspraak) + " → afgerond", afgerond));
      const minimum = awir.minimum_tegemoetkoming.waarde;
      u.stappen.push(stap("awir-2026-art14-5", awir.minimum_tegemoetkoming.artikel,
        "Is de zorgtoeslag minder dan € " + minimum + " per jaar, dan wordt zij niet toegekend.",
        (toegekend === 0n && afgerond > 0n) ? t(afgerond) + " < " + minimum + ": niet toegekend"
          : (afgerond > 0n ? t(afgerond) + " ≥ " + minimum : "0"), toegekend));
      u.tegemoetkoming = toegekend;
    } else {
      u.onbepaald.push("Awir art. 14 lid 4-5 (afronding, minimumbedrag): geen Awir-parameters geladen; niet toegepast.");
    }

    // zt-2026-art2-5
    const maand = div(aanspraak, 12n * SCALE);
    u.stappen.push(stap("zt-2026-art2-5", "Wzt art. 2 lid 5 (" + artv + ")",
      "Per kalendermaand, bij een heel jaar zonder wijzigingen: het jaarbedrag gedeeld door twaalf.",
      t(aanspraak) + " / 12", maand));
    u.aanspraak_maand = maand;
    // Geen wet: hoe Dienst Toeslagen aan het hele maandbedrag komt dat zij publiceert (DISCREPANCIES.md #5).
    const basisMaand = u.tegemoetkoming === null ? aanspraak : u.tegemoetkoming;
    u.aanspraak_maand_afgerond_praktijk = Number(floorTo(div(basisMaand, 12n * SCALE), 0) / SCALE);
    u.onbepaald.push("afronding maandbedrag: de wet rondt het jaarbedrag af (Awir art. 14 lid 4), niet het " +
      "maandbedrag; Dienst Toeslagen deelt in haar tabellen het afgeronde jaarbedrag door twaalf en " +
      "rondt naar beneden af op hele euro's (grondslag niet gevonden in Awir, Wzt of Uitvoeringsregeling Awir).");
    return u;
  }

  /** Dezelfde uitkomst met alle bedragen als exacte decimale strings (voor tests en voor wie geen BigInt wil). */
  function berekenAlsTekst(invoer, parameters) {
    const u = bereken(invoer, parameters);
    const s = (v) => (typeof v === "bigint" ? toString(v) : v);
    return {
      jaar: u.jaar, aanspraak_jaar: s(u.aanspraak_jaar), tegemoetkoming: s(u.tegemoetkoming),
      aanspraak_maand: s(u.aanspraak_maand), aanspraak_maand_afgerond_praktijk: u.aanspraak_maand_afgerond_praktijk,
      vermogen: u.vermogen, onbepaald: u.onbepaald.slice(),
      stappen: u.stappen.map((x) => ({ regel: x.regel, artikel: x.artikel, omschrijving: x.omschrijving,
                                        berekening: x.berekening, uitkomst: s(x.uitkomst), status: x.status })),
    };
  }

  const api = { bereken, berekenAlsTekst, eur, t, P, toString, roundHalfUp, SCALE };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.toeslagrecht = Object.assign(root.toeslagrecht || {}, { zorgtoeslag: api });
})(typeof globalThis !== "undefined" ? globalThis : this);
