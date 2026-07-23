---
target: homepage yang sudah ada
total_score: 25
p0_count: 0
p1_count: 3
timestamp: 2026-07-06T16-36-19Z
slug: src-app-site-page-tsx
---
# Homepage Design Critique

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Carousel position is shown, but active pagination state is visual-only and navigation state is inconsistent on homepage anchors. |
| 2 | Match System / Real World | 3/4 | Main labels are understandable, but Web3 and mixed English/Indonesian copy reduce clarity for a general audience. |
| 3 | User Control and Freedom | 3/4 | Main routes and carousel controls are explicit; mobile navigation lacks Escape/outside-click handling. |
| 4 | Consistency and Standards | 2/4 | The restrained technical header and hero conflict with stitch patches, scrapbook collage, batik decoration, and contact-card styling. |
| 5 | Error Prevention | 3/4 | The portfolio has few risky actions and uses real links/buttons correctly. |
| 6 | Recognition Rather Than Recall | 3/4 | Primary destinations are visible and icon-only social links have accessible labels. |
| 7 | Flexibility and Efficiency | 2/4 | Keyboard basics exist, but carousel state and mobile-menu behavior are not fully robust. |
| 8 | Aesthetic and Minimalist Design | 2/4 | Core hierarchy is clear, but several decorative systems compete for attention. |
| 9 | Error Recognition and Recovery | 3/4 | There are no meaningful form/error flows; navigation offers safe exits. |
| 10 | Help and Documentation | 2/4 | Project detail content lacks concrete links, outcomes, roles, and technical evidence needed to evaluate the work. |

**Total: 25/40 — Acceptable.** The foundation is usable, but the brand system and proof of work need significant tightening.

## Anti-pattern Verdict

The homepage does not look like an untouched template, but it still contains recognizable AI-design reflexes: decorative grid overlays, repeated entrance animation across many element types, numbered navigation scaffolding, repeated stitch-patch labels, wide soft shadows paired with borders, and repetitive card treatment. The deterministic detector returned zero findings, but manual source review found these patterns directly in the JSX and CSS; the empty detector result should not be treated as a clean design bill.

## Overall Impression

The first fold communicates Farrel's role quickly and the green-on-near-black palette has enough confidence to carry a personal brand. The main weakness is art direction: the interface alternates between clean technical portfolio, stitched craft board, batik scrapbook, and translucent card UI. The largest opportunity is to choose one visual thesis and make project evidence—not decoration—the memorable part.

## What's Working

- The hero has a clear hierarchy: role, specialization, supporting sentence, primary CTA, then social channels.
- Semantic structure is generally sound: real links/buttons, useful image alt text, labeled icon links, navigation labeling, and visible focus rules in key controls.
- The project carousel provides multiple control methods, disabled boundary states, a current-position counter, and large touch targets.

## Priority Issues

### [P1] The art direction contradicts the requested modern-clean identity

**Why it matters:** The restrained header/hero and sharp green palette suggest a capable technical profile, while dashed stitch patches, scrapbook rotations, batik ornaments, repeating stitch lines, large collages, grid overlays, and multiple shadow styles make later sections feel like another site. A general visitor remembers the decoration instead of Farrel's work.

**Fix:** Establish one visual thesis. Keep the near-black/green technical foundation and real photography, then remove most stitch patches, decorative grids, repeating stripes, and ornamental shadow stacks. Use asymmetry, typography, project screenshots, and outcome data as the distinctive layer.

**Suggested command:** `$impeccable quieter homepage visual system`

### [P1] The motion system is fragmented and reduced-motion coverage is incomplete

**Why it matters:** Motion is currently split between CSS keyframes, CSS view timelines, smooth scrolling, and Framer Motion. The global reduced-motion media query neutralizes CSS animations, but it does not explicitly govern Framer Motion's header/mobile-menu transforms. GSAP is requested but not installed. Adding GSAP now without consolidation would create a third animation runtime.

**Fix:** Define a motion architecture before adding GSAP. Use GSAP only for one or two narrative sequences, keep CSS for simple hover/focus transitions, wrap React motion with a reduced-motion policy, and make carousel scrolling instant when reduced motion is requested.

**Suggested command:** `$impeccable animate homepage with GSAP and reduced-motion parity`

### [P1] Claims are stronger than the project evidence

**Why it matters:** The hero positions Farrel as a Fullstack/Web3 developer, but project data mostly provides summaries and technology tags. There are no repository/live links, explicit personal role, dates, constraints, measurable outcomes, architecture decisions, or concrete Web3 case study. For a general audience, this reduces credibility and makes several entries read like invented portfolio filler.

**Fix:** Reframe every project around context, Farrel's role, problem, decisions, result, and evidence. Add live/repository links where possible. Separate software projects from operating frameworks so both categories feel intentional rather than mixed in one undifferentiated carousel.

**Suggested command:** `$impeccable clarify project storytelling and evidence`

### [P2] Interaction and language states need a consistency pass

**Why it matters:** English and Indonesian switch within the same section (`See My Projects`, `Lihat Project`, `Contact`, Indonesian body copy). Carousel dots do not expose the selected item with `aria-current` or `aria-pressed`; the counter update is not announced; and mobile navigation cannot be closed with Escape. These are manageable individually but collectively weaken polish and accessibility.

**Fix:** Choose one primary language and use it consistently. Add explicit selected state to pagination, use a polite live region for the project counter if testing shows it helps, and support Escape/focus return for the mobile menu.

**Suggested command:** `$impeccable audit homepage accessibility and interaction states`

## Persona Red Flags

- **First-time general visitor:** Understands “developer” but may not know what Web3 means or why leadership/event operations belong beside software projects.
- **Recruiter or collaborator scanning quickly:** Sees strong claims but cannot verify contribution depth, impact, repositories, or shipped URLs.
- **Motion-sensitive keyboard user:** Benefits from the CSS reduced-motion rule and visible focus on several controls, but Framer Motion and smooth carousel behavior are not explicitly reduced and carousel selection state is not fully conveyed.

## Cognitive Load

The page has a manageable number of primary decisions, but decorative load rises after the hero. Projects combines a patch label, long intro, CTA, carousel counter, two arrow controls, five pagination controls, batik elements, stitched dividers, and large animated cards. Experience then adds many absolute photos behind long centered copy. The content remains readable, but the interface spends too much attention explaining its visual personality.

## Emotional Journey

The hero creates a credible opening peak. Projects should deepen trust, but generic descriptions and mixed visual motifs flatten that momentum. Experience supplies warmth through real photography, then Contact provides a clear ending. The final emotional takeaway is “active and versatile,” but not yet “specific engineer whose work I can verify.”

## Minor Observations

- `Inter` is the only loaded font while CSS names `Plus Jakarta Sans` without loading it, so the intended heading distinction does not exist.
- Decorative experience images sit inside an `aria-hidden` container while retaining descriptive alt text; the alt text is therefore ignored.
- Several CSS classes appear to be legacy or unused, including gradient-text/aurora utilities, increasing design-system ambiguity.
- Lint has zero errors; warnings come from the vendored Impeccable skill scripts rather than portfolio source.

## Questions to Consider

- Should visitors remember the engineering work, the organizational journey, or a deliberately unified “builder and leader” story?
- Which one project proves the Web3 positioning strongly enough to earn that phrase in the hero?
- If every stitch, grid, glow, and floating decoration disappeared, what unique artifact would still make the site recognizably Farrel's?
