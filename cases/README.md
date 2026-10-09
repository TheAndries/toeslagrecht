# cases/

The case corpus: one file per case, each with a stable id, the toeslag and year, the
inputs the law needs and nothing else, the expected outcome and its source type
(`official`, `ruling`, `published`, `synthetic`). Verified cases become the tests the
encoding must pass. Format, verification and the absolute privacy rule (no name, BSN,
address, kenmerk or partner's name, ever) are defined in [`CASES.md`](../CASES.md).
Licence: CC BY-SA 4.0 ([`LICENSE-DATA`](../LICENSE-DATA)). 159 `published` cases (the Dienst Toeslagen leaflets 2024, 2025 and 2026; every row of the Belastingdienst's 2025 and 2026 monthly tables, ids `zt-<jaar>-tab-<zp|mp>-<inkomen>`; the published income ceilings of 2024–2026 on the boundary euro) and three `synthetic`; none verified. A `published` case is a check of the publisher's method, never a verification (`CASES.md`).
