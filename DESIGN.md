# DESIGN.md

**Status: binding under `CHARTER.md` P10. Amendable only by board decision.**

The checker is for a citizen who is worried about money and does not trust websites.
Everything follows from that.

## Principles

1. **Dutch, at B1.** The site is in Dutch, written at the level the Rijksoverheid aims for
   and often misses. Short sentences. The legal term shown once, explained once, then the
   plain word. English only in the repository.
2. **The computation is the page.** The result is not a number; it is the steps that reach
   the number, each step with its article beside it and a one-line plain-Dutch reading of
   that article. A citizen or their helper can follow it with the official letter in hand.
3. **One honest sentence, not a disclaimer wall.** Once, near the result: this computes what
   the law says for what you entered; it is not advice; apply at toeslagen.nl. Then
   nothing more about it.
4. **Status in words.** Each rule the result used shows its status — draft, tested,
   reviewed, established, contested — as a word, in one consistent place, never as a colour
   alone.
5. **Nothing leaves the device, and the page says so.** One line, plainly, where the inputs
   are entered. No account, no cookie, no banner.
6. **Accessible without exception.** WCAG 2.2 AA at minimum: keyboard, screen reader, zoom
   to 200%, contrast, no reliance on colour. The people who need this most are the ones
   most often locked out.
7. **Phone first.** Most citizens will arrive on a phone, often an old one. Static files,
   loads in under a second, works with JavaScript off for everything but the computation
   itself, which degrades to a plain form.
8. **Looks like it has nothing to sell.** Plain typography — a system or self-hosted sans
   for the interface, a text serif for the law — generous spacing, no logos, no hero, no
   illustration, no stock photographs. The reference points are a well-made government form
   and a court's own website, not a fintech.
9. **The record is one click away.** From any rule: the law text, the dated versions, the
   cases that test it, the discrepancies it appears in, the disputes on it. The record is
   not hidden behind the checker; the checker is the door to the record.

## Not permitted

Ads. Sponsorship. Pop-ups. Chat widgets. Newsletter interrupts. "Share" buttons. Urgency
of any kind. Collecting an email address to show a result. Any copy that suggests the tool
can get the citizen more money.

## Open design ask

Before the first page is built the operator shows the owner three layouts of the result
page — the same zorgtoeslag computation, three ways — and he chooses. That choice is
recorded here and becomes binding.
