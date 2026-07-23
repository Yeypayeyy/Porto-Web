---
target: src/app/(site)/page.tsx homepage
total_score: 26
p0_count: 0
p1_count: 3
timestamp: 2026-07-21T20-36-21Z
slug: src-app-site-page-tsx
---
⚠️ DEGRADED: single-context (harness policy restricts spawning sub-agents unless the user asks; live-browser inspection skipped — dev server not running)

# Critique — Homepage (`src/app/(site)/page.tsx`)

Surface assessed: the composed homepage — `Header`, `HeroSection`, `ProjectsSection`, `ExperienceSection`, `AboutSection`, `Footer` — plus the `globals.css` classes they use.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Carousel shows position (1/5, dots, disabled end-arrows); static page otherwise fine |
| 2 | Match System / Real World | 2 | Unpredictable English↔Indonesian mixing; mojibake characters in header |
| 3 | User Control and Freedom | 3 | Clear nav, carousel dots, mobile menu close, external links new-tab; no traps |
| 4 | Consistency and Standards | 1 | Two clashing design systems on one page (navy/teal/gold hero vs green/orange/batik rest) |
| 5 | Error Prevention | 3 | Almost no input surface; mailto links, little to get wrong |
| 6 | Recognition Rather Than Recall | 3 | Labeled nav, icon+label pairs, visible carousel |
| 7 | Flexibility and Efficiency | 3 | Carousel arrows/dots focusable; no shortcuts, acceptable for a portfolio |
| 8 | Aesthetic and Minimalist Design | 2 | Experience = 22 overlapping rotated photos (several duplicated) buried under gradients |
| 9 | Error Recovery | 3 | No meaningful error states on a static marketing page |
| 10 | Help and Documentation | 3 | Self-explanatory portfolio, clear contact paths |
| **Total** | | **26/40** | **Acceptable — significant improvements needed** |

## Anti-Patterns Verdict

**LLM assessment:** The hero alone does *not* read as AI slop — the navy→teal→gold Nesco palette, the layered radial glows, the photo-grid with orbit ring, and the confident gold CTA have a real point of view. The problem is that the POV stops at the hero. Below the fold the page reverts to a different, older identity (batik ornaments, dashed "stitch patch" labels, kelly-green + orange). One page, two brands. That inconsistency reads as unfinished, which is its own kind of tell.

**Deterministic scan** (`detect.mjs`, 3 warnings in `globals.css`):
- `gradient-text` (L814) — **false positive for this surface.** The class exists but is not referenced by any homepage component (confirmed via grep). Dead CSS, not a shipped tell.
- `bounce-easing` (L461) — real. `cubic-bezier(0.2, 0.8, 0.24, 1.2)` overshoots on the hero tag/social `landing-pop` entrance. Minor.
- `layout-transition` (L362) — real. `.mobile-navigation-link` transitions `padding-left` on hover/active. Minor jank risk; use `transform: translateX()`.

**Visual overlays:** Not available — live-browser injection was skipped because the dev server isn't running. Findings are from source + CLI detector.

## Overall Impression

The refreshed hero is genuinely good and sets a clear, modern, technically-credible tone that matches PRODUCT.md's brief. Then the page breaks its own promise: `ProjectsSection`, `ExperienceSection`, `AboutSection`, and `Footer` are still wearing the previous green/orange/batik-craft skin that DESIGN.md explicitly moved away from. The single biggest opportunity is to carry the hero's navy/teal/gold system through the rest of the page so the site reads as one intentional brand rather than a redesign caught mid-swap.

## What's Working

1. **The hero composition.** Layered navy→teal gradient, teal/gold radial glows, the subtle grid, the orbit-ring photo cluster, and a single gold CTA ("Explore proof") — this is committed, on-brief, and not generic. The `#f9c157` gold used *sparingly* as the one action is exactly the DESIGN.md palette rule working as intended.
2. **Carousel interaction feedback.** `ProjectsSection` gives real status: live "n / count", active-card emphasis (ring + scale + expanded copy), width-animated active dot, and arrows that disable at the ends. Good recognition-over-recall.
3. **Accessibility fundamentals are mostly present.** Meaningful `alt` on hero/project photos, decorative layers correctly `aria-hidden`, `aria-current` on active nav, real `aria-label`s on icon buttons, focus-visible ring on the brand mark.

## Priority Issues

**[P1] Two design systems collide on one page**
- **Why it matters:** The hero commits to DESIGN.md's navy `#011d3e` / teal `#56b3bf` / gold `#f9c157`. But `ProjectsSection` uses green `#2f6b43` + orange `#ffa72b` + batik ornaments; `ExperienceSection` uses lime `#a8db4f` + green stitch; `AboutSection` is a mint/aqua+green gradient; `Footer` uses the green stitch bar. A visitor scrolling from hero to projects sees what looks like two different websites. This is the score's biggest drag (Consistency = 1) and directly contradicts the committed design direction.
- **Fix:** Re-skin Projects/Experience/About/Footer onto the navy/teal/gold system. Map green→teal/petroleum surfaces, orange→gold accents used sparingly, and decide the fate of the batik/stitch-patch motif (drop it, or re-color and keep it as a deliberate signature — but not alongside the glassy hero unreconciled).
- **Suggested command:** `/impeccable colorize`

**[P1] Encoding corruption (mojibake) in the header**
- **Why it matters:** `Header.tsx` ships literal garbled bytes: `FrlAgee â€" home` (aria-label), `Engineer Â· Organizer`, and `â†—` where `↗` arrows belong (lines 41, 53, 84, 131, 144). Screen readers will announce the corrupted aria-label; sighted users see mojibake in the tagline and nav arrows.
- **Fix:** Replace with correct glyphs — `—` (em dash), `·` (middle dot), `↗` (arrow) — and confirm the file is saved as UTF-8.
- **Suggested command:** `/impeccable clarify`

**[P1] Unpredictable bilingual copy**
- **Why it matters:** English and Indonesian alternate with no system: hero "Explore proof" / "Build · Lead · Ship", but Projects CTA "Lihat Project", Experience heading + body fully Indonesian ("Lihat cerita lengkapnya"), About heading English ("Let's build something useful together") over Indonesian body ("Punya ide project..."). For the "broad public audience" in PRODUCT.md this feels unfinished and hurts the "specific, credible impression" goal.
- **Fix:** Pick one primary language for the homepage (or a deliberate, consistent bilingual pattern) and apply it to every CTA, heading, and body block.
- **Suggested command:** `/impeccable clarify`

**[P2] Projects section has no semantic heading (hierarchy skip)**
- **Why it matters:** The "Projects" label is a styled `<div>` (`stitch-patch`), not a heading. The page jumps from the hero `<h1>` straight to project-card `<h3>`s with no `<h2>` — a heading-level skip that hurts screen-reader navigation and SEO. Experience and About both use real `<h2>`; Projects is the odd one out.
- **Fix:** Promote the "Projects" label (or the intro line) to `<h2>` and keep cards at `<h3>`.
- **Suggested command:** `/impeccable audit`

**[P2] Experience collage: 22 absolutely-positioned photos, many duplicated, mostly hidden**
- **Why it matters:** `experiencePhotos` has 22 entries — `gallery-8` appears 3×, `gallery-9`/`gallery-5`/`gallery-2` twice each — layered behind two dark gradient scrims at ~85% opacity, so most are barely visible yet still requested. On mobile that's a heavy image payload for near-invisible decoration (Aesthetic = 2, and a perf hit for Casey). A methodical viewer also notices the same faces repeating.
- **Fix:** Cut to ~8–12 distinct photos, remove duplicates, `loading="lazy"` the offscreen ones, and let the survivors read more clearly.
- **Suggested command:** `/impeccable optimize`

## Persona Red Flags

**Jordan (First-Timer):** Scrolls past a polished navy hero into a green/orange batik world and wonders if they clicked a link to a different site. Hits "Lihat Project" without knowing Indonesian and has to infer it means "View projects." Sees `Engineer Â· Organizer` in the header and reads it as a broken page.

**Casey (Distracted Mobile):** Loads a homepage that pulls ~22 collage images for the Experience band alone, most invisible under gradients — slow on 3G for zero informational gain. Hero CTA and nav are reachable, but the payload works against a one-handed, on-the-go scan.

**Riley (Stress Tester):** Immediately clocks the repeated Experience photos and the two-palette split as "unfinished." Notes the header nav numbers `01 About / 02 Projects / 03 Experience` where Projects/Experience are `/#anchor` links but `match` compares against `/projects` and `/experience` routes — active-state logic that won't light up when scrolled to the anchor on `/`.

**Priya (Hiring Lead / Collaborator — project-specific, from PRODUCT.md audience):** Here for 30 seconds to judge credibility and range. The hero delivers ("web systems, Web3, campus-scale teams"). But the visual inconsistency below undercuts the "intentional, technically capable" personal brand the page is trying to prove — craft signals competence, and mid-swap styling signals the opposite.

## Minor Observations

- `bounce-easing` overshoot on hero entrance pops (`globals.css:461`) — swap to an ease-out-quart/quint per DESIGN.md's "polished restraint."
- `.mobile-navigation-link` animates `padding-left` (`globals.css:362`) — use `transform` to avoid layout work.
- `.gradient-text` is defined but unused — dead CSS; safe to delete.
- Hero decorative label "Build · Lead · Ship" at `text-[#e6edf4]/75`, small + tracked — verify it clears 4.5:1 on navy.
- Header `match` values for anchor nav (`/projects`, `/experience`) never match the actual `/#projects` hrefs on the homepage, so those items won't show an active state while on `/`.

## Questions to Consider

- What if the batik/stitch motif became the *signature* that ties the whole site together — re-colored into the navy/teal/gold system — instead of a leftover from the old palette?
- Does the Experience section need 22 photos, or would 8 well-chosen ones with more visibility tell a stronger story?
- Is the site English, Indonesian, or deliberately bilingual — and which choice best serves someone deciding whether to hire or collaborate with Farrel?
