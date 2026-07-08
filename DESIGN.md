# Ozove — Design Blueprint & Brand System

This document is the guiding-principles extraction that drives every page of ozove.com,
starting with the homepage. It distills the design DNA of two references:

- **antigravity.google** — the *feel*: editorial calm, typography-led, restrained color,
  quiet confidence, technical credibility through precision.
- **growmodo.com** — the *skeleton*: productized-service conversion architecture,
  product-UI-as-proof, scannable card systems, repeated CTA rhythm.

> Note: these principles were extracted from deep familiarity with both sites' design
> language (structure, typography approach, motifs), not a pixel-level live scrape —
> Ozove's system below is an original synthesis, not a copy of either.

---

## 1. Extraction — what we take from each reference

### From Antigravity (the feel)

1. **Typography is the hero.** Oversized display headlines carry each section; everything
   else stays small and quiet. Big size contrast (clamp 44–88px display vs 17px body)
   creates hierarchy without decoration.
2. **Serif italic accent words.** Key emotional words inside a sans headline are set in an
   italic serif — the signature "human moment inside a technical sentence."
3. **Warm paper, near-monochrome.** A warm off-white ground with near-black ink. Color is
   surgical: one accent, used only where you want the eye to land (CTAs, live indicators,
   one word per headline).
4. **One idea per viewport.** Enormous vertical whitespace. Sections breathe; nothing
   competes.
5. **Precision details = technical credibility.** Hairline rules, monospace micro-labels,
   perfect alignment, subtle grain. The restraint itself signals engineering quality.
6. **Quiet motion.** Slow fade/rise reveals on scroll, gentle hover lifts, a single
   "alive" element (pulsing dot, ticking status). Never bouncy, never loud.

### From Growmodo (the skeleton)

1. **Conversion architecture.** Problem → paradigm shift → how it works → services →
   benefits → metrics → proof → qualification → final CTA. The CTA repeats at natural
   decision points (hero, mid-page, end).
2. **Product UI as proof.** The hero shows the actual delivery pipeline as a live
   dashboard mockup — the product *is* the visual.
3. **Scannable grids.** Services and benefits are dense card grids a founder can scan in
   ten seconds; each card is one noun + one qualifier line.
4. **Specificity sells.** Concrete numbers (24h, 3–4×, 4.9/5), checkmark lists, named
   roles in the pipeline. No vague claims.
5. **Honest qualification.** A "great fit / not yet" section filters leads and builds
   trust simultaneously.
6. **Light/dark rhythm.** Alternating light editorial sections with dark "system" panels
   paces a long page and marks proof moments.

---

## 2. Brand — Ozove

**Positioning:** The AI-native production layer for digital marketing agencies.
**Personality:** Calm operator. Senior, precise, slightly warm. Never hype-y — the
confidence of a team that ships every day. "Fast without the slop."

**Wordmark:** lowercase `ozove` — the `o` doubles as an orbit/aperture mark (a ring with
an orbiting dot), echoing "zero-gravity production": work moves without friction.

### Color

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F6F4EE` | Page ground (warm off-white) |
| `--paper-2` | `#EFECE3` | Raised/alternate light surfaces |
| `--ink` | `#131210` | Text, dark sections, primary buttons |
| `--ink-soft` | `#57534B` | Secondary text on light |
| `--line` | `#DDD8CC` | Hairline rules on light |
| `--accent` | `#FF4B1F` | Signal orange — CTAs, accent words, live markers |
| `--accent-deep` | `#E23A0F` | Accent hover |
| `--live` | `#2FBF71` | "Live/Shipped" status green (pipeline only) |
| Dark surface | `#181613` / `#201E1A` | Pipeline panel, dark sections, footer |

Rule: orange appears at most **once per viewport** as a large element. Green exists only
inside system UI (statuses). Everything else is paper and ink.

### Typography

| Role | Face | Notes |
|---|---|---|
| Display / headlines | **Inter Tight** 500–600 | -0.03em tracking, 1.04 leading |
| Accent words | **Instrument Serif** italic | inside headlines only |
| Body / UI | **Inter** 400/500 | 17px/1.65 body, 15px UI |
| Micro-labels / eyebrows / system UI | **JetBrains Mono** 400/500 | 11–12px, uppercase, +0.14em tracking |

Scale (fluid): display `clamp(2.6rem, 6.2vw, 4.9rem)` · section `clamp(2rem, 4.4vw, 3.4rem)`
· card title 1.15rem · body 1.06rem · micro 0.72rem.

### Layout & spacing

- Container **1200px**, gutter 24px (mobile) / 40px (desktop).
- Section padding **~7–9rem** vertical; hero taller.
- 12-column mental grid; asymmetry allowed (7/5 splits for text + visual).
- Radius: **20px** cards, **14px** inner UI, **999px** buttons/pills.
- Hairline (`1px --line`) separators between major sections instead of heavy backgrounds.

### Components

- **Primary button:** ink pill, paper text; on hover fills accent orange. Arrow `→` nudges
  2px right on hover.
- **Secondary button:** transparent pill, 1px ink border at 25% alpha; hover: full ink border.
- **Eyebrow:** mono, uppercase, ink-soft, preceded by a 20px accent-orange rule or `◦` mark.
- **Cards:** paper-2 surface, 1px line border, 20px radius, hover: translateY(-3px) +
  border-ink. No drop shadows on light (shadows live only on the dark pipeline panel).
- **Pipeline panel (signature visual):** dark `#181613` rounded 24px panel, mono type,
  task rows with role avatars, status chips (Building / In QA / Shipped), pulsing LIVE dot,
  soft orange glow behind it. This is the one "product proof" element, reused across pages.

### Motion

- Scroll reveals: opacity 0→1 + translateY(18px→0), 0.7s cubic-bezier(.16,1,.3,1),
  60ms stagger within a group. Trigger once.
- Pipeline: LIVE dot pulses; status chips tick through states on a slow interval;
  progress hairline animates.
- Hover: cards lift 3px; buttons: color swap + arrow nudge. Nothing else moves.
- Respect `prefers-reduced-motion`.

---

## 3. Homepage section map (v1)

1. **Nav** — wordmark left, 5 links center, `Talent login` ghost + `Book a capacity audit` primary.
2. **Hero** — eyebrow, display headline with serif-italic accent, subhead, dual CTA,
   3-item mono checklist · right: live pipeline panel.
3. **Trust strip** — hairline-bounded band: rating + placeholder logo row.
4. **The bottleneck** — dark section. 3 "trap" cards + answer bar.
5. **The shift** — old model vs Ozove model, two contrasting cards (ghost vs highlighted).
6. **How it works** — 4 numbered steps, hairline-connected.
7. **Services** — 12-item grid, name + mono sub-label.
8. **Benefits** — 1 feature block + 6 card grid.
9. **Metrics** — 4 oversized stats on paper-2 band.
10. **Proof** — one big editorial quote + two supporting cards.
11. **Fit** — "Great fit / Not yet" two-column checklist.
12. **Final CTA** — dark, centered display headline, dual CTA, rating line.
13. **Footer** — wordmark, tagline, links, meta line.

All numbers/testimonials are placeholders per the copy doc — replace before launch.
