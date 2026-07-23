# Design

## Aesthetic Lane

Clean, modern, motion-rich personal portfolio. Direction blends the polished, restrained scroll choreography of Amanta Jati (smooth scroll, parallax, section handoffs) with a bold **Rossoneri** identity inspired by the AC Milan away jersey: a light, paper-white canvas broken by dramatic black and red blocks, with rare Champions-League gold as the "wah" accent.

## Color Direction — Rossoneri (light-dominant)

Bone-white is the default canvas (the jersey). Black and red are used as confident, high-contrast structural blocks — not everywhere. Gold is reserved for rare moments of triumph.

- Bone white: `#F7F5F2` — primary canvas, most sections, readable content blocks.
- Pekat black: `#0A0A0A` — inverted "drama" sections, ink text, footer close.
- Rossoneri red: `#E2001A` — primary brand accent, CTAs, active states, motion trails, stitch lines.
- Deep red: `#9E0712` — gradients, hovers, shadows against red.
- Champions gold: `#C9A24B` — rare badges, "champion" moments, earned highlights only.
- Off-white: `#EDEDED` — body text and quiet surfaces on black sections.

## Palette Rules

- Light-first: default to bone-white canvas; invert to pekat black for occasional cinematic sections and section handoffs.
- Red is the identity color — use it for one clear action per view, dividers, and stitch/underline motifs; avoid flooding whole sections in red.
- Gold is earned: badges, "champion" callouts, rare emphasis only.
- Body text must stay WCAG AA: near-black ink on bone-white, off-white on black. Never place red text on white for body copy (contrast fails) — red is for large display type, accents, and fills only.
- Gradients may mix black → deep red → red, or white → bone; never rainbow.

## UI Mood

- Navbar: clean, glassy, compact. White or translucent on light; adapts to black over dark sections.
- Hero: bright bone-white, confident black display type, one red action. Jersey-stripe / stitch motif as a subtle structural detail.
- Projects: proof-first, artifact-led, card frames on bone-white with red accents and thin stitch dividers.
- Experience: more energetic, photo collage, allowed bigger motion and rare gold highlights for milestones.
- Footer/contact: deep black close with red accents and clear contact paths.

## Motion Direction

GSAP + Lenis drive the feel: smooth inertial scroll, hero copy reveal (line/word), image parallax, section pinning/handoffs, magnetic buttons, and occasional accent sweeps along red stitch lines. Framer Motion handles micro-interactions. Avoid animating every card the same way. Respect `prefers-reduced-motion` — all content and function must remain without animation.
