# cases/

The case corpus: one file per case, each with a stable id, the toeslag and year, the
inputs the law needs and nothing else, the expected outcome and its source type
(`official`, `ruling`, `published`, `synthetic`). Verified cases become the tests the
encoding must pass. Format, verification and the absolute privacy rule (no name, BSN,
address, kenmerk or partner's name, ever) are defined in [`CASES.md`](../CASES.md).
Licence: CC BY-SA 4.0 ([`LICENSE-DATA`](../LICENSE-DATA)). 173 `published` cases (the Dienst Toeslagen leaflets 2022, 2023, 2024, 2025 and 2026; every row of the Belastingdienst's 2025 and 2026 monthly tables, ids `zt-<jaar>-tab-<zp|mp>-<inkomen>`; the published income ceilings of 2022–2026 on the boundary euro) and sixteen `synthetic` (2026: four; 2021 and 2020: the income ceilings computed from the text, for want of a leaflet; 2020 also the vermogenstoets on the grondslag sparen en beleggen and the lapsed art. 2 lid 5); none verified. A `published` case is a check of the publisher's method, never a verification (`CASES.md`).
