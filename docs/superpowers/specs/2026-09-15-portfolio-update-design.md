# Portfolio Update: CV, Projects, About, Mobile, Copy

Date: 2026-09-15
Reference: https://ancungaulia.dev (`/cv`, `/about`)

## Goals

1. Embedded CV page with PDF download.
2. Mobile layouts work on every public page.
3. Project list reflects real work: Catet!, KMTETI FT UGM Website, SunCost, Campaign Web, FoundIT!.
4. `/about` becomes short and informative.
5. Tech stack reflects the projects actually built.
6. No em dash (—) in any visitor-facing copy.

## 1. CV page (`/cv`)

- Source: `C:\Users\farre\Downloads\CV_Muhammad_Farrel_Al_Ghazy.docx`.
- Work on a copy. Remove the phone number (`+62895332044226`) from the contact line, leaving email, location, and links. Do not modify the original docx.
- Convert the copy to PDF with Microsoft Word (COM automation). Output: `public/cv-muhammad-farrel-al-ghazy.pdf`.
- New route `src/app/(site)/cv/page.tsx` (server component):
  - `Header`, short title, a **Download PDF** link (`<a href="/cv-muhammad-farrel-al-ghazy.pdf" download>`).
  - `md` and up: native `<iframe>` of the PDF, about 85vh tall, full content width.
  - Below `md`: no iframe (iOS Safari renders only the first page). Show a card with "Open PDF" (new tab) and "Download" buttons.
  - `Footer`, page metadata.
- Link to `/cv` from a new **View CV** button in `HeroSection` and from the existing footer "Download CV" button (currently a placeholder href).

## 2. Project data (`src/data/portfolio.ts`)

Order and content:

| Slug | Title | Status | Image | Stack points |
|---|---|---|---|---|
| `catet` | Catet! | Fullstack / Fintech | `public/Project/catet.png` (screenshot taken by running `D:\ngoding terus\Catet!`) | Next.js, Supabase, Drizzle ORM, Kotlin |
| `kmteti-website` | KMTETI FT UGM Website | Fullstack / Web Development | `public/Project/Screenshot 2026-09-03 135540.png` | Next.js, Payload CMS, PostgreSQL, GSAP |
| `suncost` | SunCost | Desktop App / Software Architecture | `public/Project/suncost-energi.png` (copied from `C:\Users\farre\Downloads\3 · Hasil — Energi.png`) | C#, WPF, SQLite, Weather API |
| `campaign-web` | Campaign Web | Frontend / UI-UX | existing | Next.js, Tailwind CSS, TypeScript |
| `foundit` | FoundIT! | On Progress | none (UI placeholder) | Python, FastAPI, scikit-learn, CV + NLP |

- Delete `portfolio-web-system`.
- Keep slug `kmteti-website` so existing links still resolve.
- Copy sources: Catet! README (auto-capture of m-banking/QRIS notifications, one-tap categorisation, raw payload kept when parsing fails); SunCost README (rooftop solar potential, savings, payback; Farrel is team lead and software architect); KMTETI README (official portal, news, cabinet profile, divisions, services; Payload CMS, Supabase storage); FoundIt README (lost and found matching with image and text similarity, Farrel is a team member).
- Projects without a real URL keep `liveUrl: "#"` or omit it. The UI must not show a live link for `#` or missing URLs. FoundIT! gets no live link.
- Every component that reads `image` must handle a missing image with a placeholder (verify `ProjectsSection`, `/projects`, `/projects/[slug]`).

## 3. `/about` rewrite

Single-column layout, in order:

1. Title "About" plus the existing small pixel-art figure.
2. Two-paragraph bio:
   - Who: Information Engineering student at UGM, fullstack developer, currently Chairman of KMTETI FT UGM (250+ members) and Partnerships Manager at UGM Blockchain Club.
   - What ties it together: building web systems that are actually used, and leading the teams that run them.
3. **What I work on**: Fullstack Web, Backend & Data, Desktop & Mobile, Leadership & Event Ops.
4. **Technical skills** (grouped, from `techStack` in `portfolio.ts`).
5. **Education**: Universitas Gadjah Mada, Information Engineering, 2024 to 2028 (expected).

Removed: facts grid, Building/Leading/Connecting blocks, "Roles & responsibilities" (lives on `/experience`), Stack/Beyond code section.

Homepage `AboutSection` stays as a summary; only its copy changes (em dash removal).

## 4. Tech stack

Replace `skills` in `portfolio.ts` with a grouped export:

```ts
export const techStack = {
  Languages: ["TypeScript", "JavaScript", "Python", "C#", "Kotlin", "SQL"],
  Frameworks: ["Next.js", "React", "Tailwind CSS", "Payload CMS", "FastAPI", "WPF", "GSAP", "Framer Motion"],
  Databases: ["PostgreSQL", "Supabase", "Drizzle ORM", "SQLite"],
  Tools: ["Git/GitHub", "Vercel", "pnpm", "Figma"],
};
```

- `/about` renders it grouped.
- Hero marquee shows Next.js, TypeScript, Payload CMS, PostgreSQL, Supabase, Python, FastAPI, C#. Keep the existing marquee markup and icon approach; icons only where one already exists or lucide/simple markup covers it, otherwise text only.
- Remove every remaining import of `skills`.

## 5. Mobile fixes

- `AboutRedEdges`: hide below `md` (`hidden md:block` on the wrapper). Desktop pin animation unchanged.
- Footer/contact (`#contact`): heading block, "Download CV" button, and email text overflow past 375px. Fix with wrapping (`flex-wrap`, `min-w-0`, `break-words`/`break-all` on email), no fixed widths.
- `/projects`: project card images render as empty grey boxes on mobile. Find the root cause before fixing.
- New `/cv` and `/about` built mobile-first.
- Acceptance: at 375px no element extends past the viewport except the intentional hero marquee and the `/experience` horizontal route.

## 6. Em dash removal

- Replace every `—` in rendered text (copy, `metadata`, `aria-label`, `alt`) with a period, comma, or colon as the sentence needs.
- Files known to contain it: `src/data/portfolio.ts`, `HeroSection.tsx`, `AboutSection.tsx`, `ExperienceSection.tsx`, `StatementSection.tsx`, `Header.tsx`, `about/page.tsx`, `experience/page.tsx`.
- Code comments may keep it.
- Acceptance: `document.body.innerText` and `<title>`/meta description on every public page contain no `—`.

## Testing

- `pnpm lint` and `pnpm build` pass.
- Browser check at 375px and desktop: `/`, `/projects`, all 5 `/projects/[slug]`, `/experience`, `/about`, `/cv` (PDF displays on desktop, download works, mobile fallback shows).
- Overflow check script and em dash check per page.

## Out of scope

- Payload CMS migration.
- Experience data changes and new files in `public/Experience/`.
- Visual redesign beyond the sections listed.
