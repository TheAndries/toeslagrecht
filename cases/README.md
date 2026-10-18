# cases/

The case corpus: one file per case, each with a stable id, the toeslag and year, the
inputs the law needs and nothing else, the expected outcome and its source type
(`official`, `ruling`, `published`, `synthetic`). Verified cases become the tests the
encoding must pass. Format, verification and the absolute privacy rule (no name, BSN,
address, kenmerk or partner's name, ever) are defined in [`CASES.md`](../CASES.md).
Licence: CC BY-SA 4.0 ([`LICENSE-DATA`](../LICENSE-DATA)). 173 `published` cases (the Dienst Toeslagen leaflets 2022, 2023, 2024, 2025 and 2026; every row of the Belastingdienst's 2025 and 2026 monthly tables, ids `zt-<jaar>-tab-<zp|mp>-<inkomen>`; the published income ceilings of 2022–2026 on the boundary euro) twenty `synthetic` (2026: four; 2021, 2020 and 2019: the income ceilings computed from the text, for want of a leaflet; 2020 also the vermogenstoets on the grondslag sparen en beleggen and the lapsed art. 2 lid 5) and two `ruling` (`zt-2019-rul-001/-002`: the voorschot and the definitieve berekening 2019 of one couple as cited in ABRvS 10 mei 2023, ECLI:NL:RVS:2023:1809); none verified yet — a `ruling` case becomes verified when a named human has confirmed its inputs against the ruling (`CASES.md`; `ASKS.md` 9). A `published` case is a check of the publisher's method, never a verification (`CASES.md`).
