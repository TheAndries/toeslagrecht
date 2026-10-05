# SETUP.md — founding session, 2026-10-05

**To the agent:** you are in an owner-initiated session with Andries. The files beside this
one are the founding files of the project described in `README.md` and governed by
`CHARTER.md` and `BOARD.md`. Read `README.md`, `CHARTER.md`, `BOARD.md`, `LAW.md`,
`CASES.md`, `PLAN.md`, `ASKS.md` and `ROUTINE.md` before doing anything. Then carry out the
steps below, in order, in this session, so that the first scheduled run fires tomorrow at
**07:56 Europe/Amsterdam**.

The owner does not push to git. You commit and push. He pays, grants access, and chooses.
Where a step needs him, stop, say exactly what you need, and wait.

Everything you do is recorded in `CHANGELOG.md` as a founding-session entry before you
finish, and every euro he spends is logged in `LEDGER.md` the moment he reports it.

---

## Step 1 — Name

`aanspraak` is the working name. Propose **three** names, one of which is `aanspraak`, in
Dutch, one word, lowercase, that a worried citizen would find plain and a civil servant
would not find flippant. Check availability by RDAP/whois on `.nl` first (strongly
preferred for a Dutch public tool), then `.org` and `.eu`. Look up TransIP's current
first-year and renewal price for each free option and present a short table. Do not buy
anything. He chooses; cost matters.

**Wait for his choice.** Then replace the working name everywhere (`grep -ri aanspraak`),
including the routine name and prompt in `ROUTINE.md`. Mark Ask 1 *in progress*; it becomes
*done* when he reports the domain registered and you have logged the spend.

## Step 2 — Repository

Create a **public** repository `TheAndries/<name>` (public: keel's routine was refused four
times on a private repository; `fallible` and `premise` on public ones worked). Then:

1. Add `LICENSE` (MIT) for code and `LICENSE-DATA` (CC BY-SA 4.0) for `law/`, `cases/`
   and `DISCREPANCIES.md`, as `CHARTER.md` P9 requires. Name both in `README.md`.
2. Add a `.gitignore` for a Python/Node static-site build.
3. Create `law/`, `cases/` and `site/`, each with a one-paragraph `README.md` pointing at
   `LAW.md`, `CASES.md` and `DESIGN.md` respectively, and an empty `DISCREPANCIES.md` with
   the table header from `CASES.md`. Build nothing else; the first scheduled run does
   Phase 0 work.
4. Commit everything as the first commit, message `2026-10-05 founding`, push `main`.
5. Confirm to the owner that `main` on GitHub shows all files.

## Step 3 — GitHub App access

Ask the owner to grant the Claude GitHub App access to the new repository and to tell you
when it is done. Verify if you can; otherwise proceed to Step 4 and treat a
`403 permission_error` as the signal that access is not yet granted — stop and tell him,
do not retry blindly.

## Step 4 — The routine

Create the scheduled routine **through the API, never the web UI**. Configuration is in
`ROUTINE.md` and is binding: name with the chosen name; schedule `56 5 * * *` UTC; the most
capable generally available model, recorded as actually set; tools exactly as listed;
connectors cleared; no outcomes entry; the prompt **verbatim** from the fenced block with the
chosen name substituted — read it back and diff it character by character against the file.

After creation, read the whole stored configuration back and check: prompt matches;
`mcp_connections` empty; no `outcomes` or `[]`; repository is the new one. Fill in an
*As created* section of `ROUTINE.md` — routine ID, URL, created time (UTC), first scheduled
run in UTC and Europe/Amsterdam — and set its status to **CREATED AND ENABLED**. Commit and
push.

If creation is refused, record the exact error in `ROUTINE.md` and `CHANGELOG.md`, tell the
owner what access is missing, and wait. Never change the repository, model or prompt to get
past an error.

## Step 5 — Mailbox (optional today)

If the domain is registered and TransIP forwarding is available, ask whether he wants
`hello@<domain>` forwarded to his own address now. If yes, he sets it up and you record the
address in `ASKS.md` and mark Ask 4 done, with the anonymisation rule from that ask restated
beside it. If not today, Ask 4 stays open; it blocks Phase 2, not Phase 0.

## Step 6 — Close the session

1. Update `ASKS.md`: Asks 1 and 2 done, or exactly what remains open. Asks 3 and 4 open.
2. Update `memory.md`: name, repository, routine ID, first run, open asks.
3. Write the founding-session entry at the top of `CHANGELOG.md`: what was named, created
   and configured; every verification performed and its result; anything that failed and
   why; what tomorrow's run should produce.
4. Update `LEDGER.md` with the domain spend as reported (amount, ex VAT and BTW separately,
   payee, card, Ask 1).
5. Commit `2026-10-05 founding session — setup`, push `main`, confirm the push landed on
   `main` and nowhere else.

## What the owner should see tomorrow morning

A new entry at the top of `CHANGELOG.md` on `main`, dated 2026-10-06, written by the first
scheduled run. It should report: the build pipeline skeleton started (`law/` + `cases/` →
tests → `site/`), three result-page layouts produced for Ask 3, the source index for the
current year's Awir and Wet op de zorgtoeslag collected from `wetten.overheid.nl` with
article references and effective dates — and **no rule marked anything but `draft`**, no
synthetic case presented as verified, and a line under the ten-year rule saying what the run
added to the record (on day one, probably only the dated source index, and it should say
so). If the entry is missing, lands on a `claude/*` branch, or claims a verified case, the
routine or the prompt is wrong and this session's read-back is where to look first.
