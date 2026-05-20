# Design Reference

Reference source: 180 Degrees Consulting UGM homepage screenshot, desktop width.

This document translates the reference into a practical visual direction for this portfolio project. Use it as guidance for layout, mood, color, components, and section rhythm, not as a pixel-perfect clone.

## Overall Direction

The target feel is professional, energetic, youth-consulting, and slightly editorial. The interface should combine a polished consulting website structure with playful student-organization graphics: dark hero, bright lime accents, oversized section blocks, sticker-like ornaments, and confident typography.

The design should feel:

- Strategic and credible.
- Bold but not noisy.
- Modern student organization / consulting portfolio.
- High-contrast with bright green action points.
- Spacious in large sections, compact in navigation and CTAs.

Avoid making it look like a generic SaaS landing page. The reference has a stronger visual identity: green ribbons, dark panels, decorative halos, sticker graphics, and poster-like section transitions.

## Color Palette

Use a dark-first palette with lime green as the main identity color.

Primary colors:

- Near black: `#121513`
- Charcoal: `#24282B`
- Deep graphite: `#1B1E1D`
- Lime green: `#73BF3F`
- Bright lime: `#A8DB4F`
- Soft mint: `#B7DCD7`
- Aqua blue: `#66C3D4`
- Off white: `#F4F6F0`
- Muted gray: `#AEB5AE`

Usage:

- Use near black / charcoal for hero, footer, and strong content bands.
- Use lime green for nav ribbons, primary buttons, active states, and decorative marks.
- Use mint/aqua gradients sparingly for visual breaks or featured media sections.
- Use off white for blank editorial sections and breathing room.
- Avoid a one-note green page. Balance green with black, white, mint, and cyan.

## Typography

The reference uses a heavy rounded sans-serif personality for headings, with small, clean navigation labels.

Recommended font direction:

- Headings: bold rounded geometric sans, e.g. `Poppins`, `Plus Jakarta Sans`, or `Nunito Sans`.
- Body: clean readable sans, e.g. `Inter` or `Plus Jakarta Sans`.
- Buttons/nav: compact, medium-bold, small size.

Type rules:

- Hero headline should be large, bold, and stacked into short lines.
- Highlight key words in lime/mint while the rest stays white.
- Section headings can be compact but heavy.
- Avoid thin display typography.
- Avoid negative letter spacing.

Example headline treatment:

```text
Building
Sharp Digital
Experiences
For Real Problems.
```

Highlight only 1-2 important words.

## Layout Rhythm

The page should move through large contrasting bands:

1. Thin black navigation bar.
2. Bright lime announcement strip.
3. Dark hero section with image overlay.
4. White spacious transition section.
5. Dark poster-like feature section.
6. Charcoal content band.
7. Mint/aqua visual section.
8. Full lime identity band.
9. Dark final CTA and footer.

This rhythm is more memorable than a stack of normal cards. Each section should feel like a distinct poster panel.

## Navigation

Reference traits:

- Very slim black top nav.
- Small logo at far left.
- Right-aligned menu items.
- Primary nav CTA as outlined or filled pill.
- Secondary CTA in bright green.
- Announcement strip below nav in lime green.

Portfolio adaptation:

- Left: small personal mark / initials.
- Links: `About`, `Projects`, `Experience`, `Contact`.
- CTAs: `Download CV` and `Contact Me`.
- Announcement strip can highlight availability, current role, or featured project.

Keep the nav visually compact. Do not make a tall marketing navbar.

## Hero Section

Reference traits:

- Dark scenic background with strong overlay.
- Large left-aligned headline.
- Lime-highlighted words.
- Short subcopy below.
- Two CTA buttons.
- Featured news/card module floating to the right.
- Client/logo strip below the hero content.

Portfolio adaptation:

- Background can use a dark blurred campus, workspace, code, or abstract project image.
- Left headline introduces the person and value.
- Right floating card can feature current work, selected project, or latest achievement.
- Logo strip can become tech stack, organizations, tools, or collaborators.

Hero composition:

- Max content width around 1200px.
- Left headline block around 40-45% width.
- Right feature card around 38-42% width.
- Use rounded corners on the feature card, around 18-24px.
- Keep CTA pills small and polished.

## Buttons

Use small rounded pill buttons.

Primary button:

- Background lime green.
- Dark text.
- Optional small arrow icon.

Secondary button:

- Dark gray or translucent gray.
- Light text.
- Optional phone/mail/icon.

Hover states:

- Primary gets slightly brighter.
- Secondary gets lighter border or background.

Avoid oversized buttons. The reference buttons are compact and confident.

## Cards

Cards should be used selectively, mostly for featured modules.

Reference card style:

- Dark rounded rectangle.
- Subtle internal green label/pill.
- White heading.
- Small descriptive text.
- Image/content preview on the right.

Portfolio adaptation:

- Featured project card in hero.
- Project cards can use dark panels with green labels.
- Keep cards less rounded than playful mobile apps, but more rounded than strict enterprise dashboards.

Suggested radius:

- Small buttons: `999px`
- Normal cards: `18px`
- Page sections: no floating cards unless the content is an actual card.

## Section Patterns

### White Breathing Section

The reference includes a large mostly blank white section with sparse ornaments. Use this as a pacing device.

Portfolio use:

- Short "About me" intro.
- A few floating identity marks.
- Plenty of whitespace.

Do not fill every section with dense content.

### Dark Poster Section

The reference has a dark graphic section with stars, halftone texture, sticker label, and a partial circular logo.

Portfolio use:

- "Selected Projects" or "Experience" section.
- Add subtle halftone/noise texture.
- Place project previews or timeline content over the dark band.
- Use decorative stickers sparingly.

### Mint/Aqua Visual Break

The screenshot has a large mint-to-cyan section with soft blurred color areas, lime lower band, and sticker elements.

Portfolio use:

- Skills/tooling visual section.
- Creative process section.
- Featured case study transition.

Avoid pure gradient-orb decoration. If using blur, keep it background-like and integrated with the section.

### Final CTA

Reference traits:

- Dark background.
- Centered headline.
- Green/mint highlighted words.
- Small supporting copy.
- Two centered CTAs.
- Footer below with columns.

Portfolio adaptation:

- Headline: invite collaboration or hiring.
- CTAs: `Contact Me`, `View Projects`.
- Footer columns: name/logo, navigation, social links, email.

## Decorative Motifs

Use motifs similar in spirit, not copied exactly:

- Lime halo/ring doodles.
- Sticker labels.
- Halftone terrain or dot texture.
- Small star/spark marks.
- Partial circular badge at section edges.
- Thin lime divider lines.

Rules:

- Decorative assets should support section identity, not distract from text.
- Keep ornaments near corners/edges.
- Do not cover readable content.
- Use no more than 2-3 decorative motifs per section.

## Portfolio Content Mapping

Recommended page structure:

1. Nav + availability strip.
2. Hero: name, role, short value statement, CTAs, featured project card.
3. Tech / organizations strip.
4. About: spacious white section.
5. Selected projects: dark poster section.
6. Experience / leadership: charcoal section.
7. Skills / tools: mint-aqua visual section.
8. Personal identity / values: lime band.
9. Final CTA + footer.

## Implementation Notes

- Use Tailwind utility classes with design tokens in `globals.css` if needed.
- Build sections as full-width bands, not nested floating cards.
- Keep max content width consistent, around `1120px` to `1200px`.
- Use responsive stacking on mobile: hero text first, feature card second.
- Keep desktop hero height around the first viewport, but leave a hint of the next section visible.
- Use real visual assets or carefully created bitmap/SVG ornaments for personality.
- Make sure text remains readable on dark image backgrounds with overlay.

## Do Not Copy

Do not directly copy:

- 180DC UGM logo.
- Client logos.
- Exact event card artwork.
- Exact copywriting.
- Exact sticker artwork.

Use the screenshot as a visual grammar reference, then adapt it to the portfolio identity.
