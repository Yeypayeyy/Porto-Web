# Portfolio Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an embedded CV page, refresh the project list and tech stack, rewrite `/about`, fix mobile layout bugs, and remove em dashes from visitor-facing copy.

**Architecture:** Static Next.js 16 App Router site. Content lives in `src/data/portfolio.ts` (projects, experience, grouped skills) and `src/data/tech-icons.ts` (brand SVG paths for the hero marquee). The CV is a static PDF in `public/` shown via a native `<iframe>`. No new dependencies.

**Tech Stack:** Next.js 16.2.6 (webpack dev), React 19, TypeScript strict, Tailwind v4 (tokens in `src/app/globals.css`), GSAP, framer-motion, lucide-react, pnpm.

Spec: `docs/superpowers/specs/2026-09-15-portfolio-update-design.md`

## Global Constraints

- Package manager: `pnpm`. No new dependencies.
- Read `node_modules/next/dist/docs/` before using a Next API you are unsure about. `next/image` `priority` is deprecated in Next 16; use `preload`.
- Visitor-facing copy (rendered text, `metadata`, `alt`, `aria-label`) must not contain `—` (em dash). Code comments may.
- `src/data/portfolio.ts` has an uncommitted user edit (Teknik Fair `period: "2026"`). Use targeted `Edit`s; never rewrite or revert the `experiences` array.
- Do not stage the untracked files in `public/Experience/` or `public/Project/Screenshot 2026-09-03 135540.png` unless a task says so. Stage files by explicit path, never `git add -A`.
- Use `next/link` for internal links, `next/image` for public images, Tailwind utilities in JSX.
- Mobile acceptance width: 375px. Nothing may extend past the viewport except `.hero-marquee` and the `/experience` horizontal rail.
- No test framework exists. Each task's check is `pnpm lint` plus the browser check written in the task. Dev server: Browser pane `preview_start` with name `dev` (port 3000). Never start dev servers via Bash.
- PowerShell paths with `(site)` or `[slug]` need `-LiteralPath`.

---

### Task 1: CV PDF and `/cv` page

**Files:**
- Create: `public/cv-muhammad-farrel-al-ghazy.pdf` (generated)
- Create: `src/app/(site)/cv/page.tsx`
- Modify: `src/components/sections/HeroSection.tsx` (CTA row, around lines 88-125)
- Modify: `src/components/site/Footer.tsx` (Download CV link, around lines 133-146)

**Interfaces:**
- Produces: route `/cv`; constant path `/cv-muhammad-farrel-al-ghazy.pdf` used by Hero and Footer.

- [ ] **Step 1: Generate the PDF without the phone number**

Run in PowerShell (Word is installed). It works on a temp copy; the original docx is untouched.

```powershell
$src = 'C:\Users\farre\Downloads\CV_Muhammad_Farrel_Al_Ghazy.docx'
$tmp = Join-Path $env:TEMP 'cv-nophone.docx'
$out = 'D:\ngoding terus\portofolio-web\public\cv-muhammad-farrel-al-ghazy.pdf'
Copy-Item -LiteralPath $src -Destination $tmp -Force
$word = New-Object -ComObject Word.Application
$word.Visible = $false
try {
  $doc = $word.Documents.Open($tmp)
  $find = $doc.Content.Find
  # Execute(FindText, MatchCase, MatchWholeWord, MatchWildcards, MatchSoundsLike, MatchAllWordForms, Forward, Wrap, Format, ReplaceWith, Replace)
  $null = $find.Execute('+62895332044226 | ', $false, $false, $false, $false, $false, $true, 1, $false, '', 2)
  $doc.SaveAs2($out, 17)
  $doc.Close($false)
} finally { $word.Quit() }
Remove-Item -LiteralPath $tmp
```

- [ ] **Step 2: Verify the phone number is gone**

```powershell
Test-Path -LiteralPath 'D:\ngoding terus\portofolio-web\public\cv-muhammad-farrel-al-ghazy.pdf'
```

Expected: `True`. Then open the PDF in the Browser pane (`navigate` to `http://localhost:3000/cv-muhammad-farrel-al-ghazy.pdf` once the dev server runs) and confirm with `get_page_text` or a screenshot that the contact line reads `farrel.ag20@gmail.com | Yogyakarta, ...` with no `+62`. If the number is still present, the text is split differently: re-run Step 1 with FindText `'+62895332044226'` and then `' |  | '` → `' | '`.

- [ ] **Step 3: Create `src/app/(site)/cv/page.tsx`**

```tsx
import { Download, ExternalLink } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export const metadata = {
  title: "CV | Muhammad Farrel Al Ghazy",
  description:
    "Curriculum vitae of Muhammad Farrel Al Ghazy, Information Engineering student at Universitas Gadjah Mada and fullstack developer.",
};

const CV_PATH = "/cv-muhammad-farrel-al-ghazy.pdf";

export default function CvPage() {
  return (
    <main className="min-h-screen bg-bone text-ink">
      <Header />

      <section className="px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-[64rem]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ink/55">
                Curriculum vitae
              </p>
              <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-black uppercase leading-[0.95] tracking-[-0.035em]">
                Muhammad Farrel <span className="text-rossoneri">Al Ghazy.</span>
              </h1>
            </div>
            <a
              href={CV_PATH}
              download
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:bg-rossoneri"
            >
              Download PDF
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>

          {/* iOS Safari renders only page one of a PDF inside an iframe, so small
              screens get open/download buttons instead of a broken preview. */}
          <iframe
            src={`${CV_PATH}#view=FitH`}
            title="CV of Muhammad Farrel Al Ghazy"
            className="mt-10 hidden h-[85vh] w-full rounded-2xl border border-ink/10 bg-white md:block"
          />

          <div className="mt-10 rounded-2xl border border-ink/10 bg-bone-soft p-6 md:hidden">
            <p className="text-base leading-7 text-ink/75">
              PDF preview works best on a larger screen. Open it in a new tab or
              download it.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={CV_PATH}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em]"
              >
                Open PDF
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CV_PATH}
                download
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-bone"
              >
                Download
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

- [ ] **Step 4: Add "View CV" to the Hero CTA row**

In `src/components/sections/HeroSection.tsx`, replace the GitHub `<a>` block (the one with `href="https://github.com/Yeypayeyy"`) with:

```tsx
            <div className="flex items-center gap-7">
              <Link
                href="/cv"
                className="hero-link-underline text-[0.95rem] font-medium text-ink/70 transition-colors duration-200 hover:text-ink"
              >
                View CV ↗
              </Link>
              <a
                href="https://github.com/Yeypayeyy"
                target="_blank"
                rel="noreferrer"
                className="hero-link-underline text-[0.95rem] font-medium text-ink/70 transition-colors duration-200 hover:text-ink"
              >
                GitHub ↗
              </a>
            </div>
```

- [ ] **Step 5: Point the footer button at `/cv`**

In `src/components/site/Footer.tsx`, delete the line `{/* ponytail: href masih placeholder, isi path CV kalau filenya sudah ada di public/ */}` and change that `<Link href="#"` to `<Link href="/cv"`. Rename its label from `Download CV` to `View CV`, and replace its `<Download ... />` icon with:

```tsx
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
```

Then change the import to `import { ArrowUpRight, Mail } from "lucide-react";` (`Download` is no longer used; lint fails on unused imports).

- [ ] **Step 6: Verify**

Run: `pnpm lint` → no errors.
Browser pane, desktop: `/cv` shows the PDF in the iframe; `Download PDF` href is `/cv-muhammad-farrel-al-ghazy.pdf` with `download` attribute (`find` "Download PDF"). Hero shows "View CV ↗" linking to `/cv`. Footer button links to `/cv`.
Mobile (`resize_window` preset `mobile`, reload): iframe hidden, fallback card visible, no horizontal overflow (run the overflow script from Task 5 Step 1).

- [ ] **Step 7: Commit**

```bash
git add public/cv-muhammad-farrel-al-ghazy.pdf "src/app/(site)/cv/page.tsx" src/components/sections/HeroSection.tsx src/components/site/Footer.tsx
git commit -m "feat: add embedded CV page with PDF download"
```

---

### Task 2: Project assets and data

**Files:**
- Create: `public/Project/catet.png` (screenshot)
- Create: `public/Project/suncost-energi.png` (copy)
- Create: `public/Project/kmteti-website.png` (rename of the new screenshot)
- Modify: `.claude/launch.json` (add a temporary `catet` config)
- Modify: `src/data/portfolio.ts:25-77` (the `projects` array only)
- Modify: `src/components/sections/ProjectsSection.tsx:15`
- Modify: `src/app/(site)/projects/page.tsx` (image `sizes`, placeholder)

**Interfaces:**
- Consumes: `Project` type in `src/data/portfolio.ts` (unchanged: `slug, title, tag, status, summary, points, image?, liveUrl?, detail, featured`).
- Produces: 5 projects; `featured: true` on exactly the first three (homepage bento layout expects lead + 2).

- [ ] **Step 1: Copy the SunCost image and rename the KMTETI screenshot**

```powershell
Copy-Item -LiteralPath 'C:\Users\farre\Downloads\3 · Hasil — Energi.png' -Destination 'D:\ngoding terus\portofolio-web\public\Project\suncost-energi.png'
Move-Item -LiteralPath 'D:\ngoding terus\portofolio-web\public\Project\Screenshot 2026-09-03 135540.png' -Destination 'D:\ngoding terus\portofolio-web\public\Project\kmteti-website.png'
```

- [ ] **Step 2: Screenshot Catet!**

Add to `configurations` in `.claude/launch.json`:

```json
    {
      "name": "catet",
      "runtimeExecutable": "pnpm",
      "runtimeArgs": ["--dir", "D:/ngoding terus/Catet!", "exec", "next", "dev", "--port", "3001"],
      "port": 3001
    }
```

Start it with `preview_start` name `catet`. Inspect the landing page with `read_page`/screenshot. If the app redirects to a login page or errors because `.env` is missing, stop and ask the user which page to capture or for a screenshot. Otherwise capture a 1440x900 PNG with headless Edge:

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --hide-scrollbars --window-size=1440,900 --screenshot="D:\ngoding terus\portofolio-web\public\Project\catet.png" http://localhost:3001/
```

Confirm with `Read` on `public/Project/catet.png` that it shows real UI (not blank or an error). Then `preview_stop` the catet server and remove the `catet` entry from `.claude/launch.json`.

- [ ] **Step 3: Replace the `projects` array in `src/data/portfolio.ts`**

Replace everything from `export const projects: Project[] = [` through its closing `];` (before `// Newest first.`) with:

```ts
export const projects: Project[] = [
  {
    slug: "catet",
    title: "Catet!",
    tag: "Featured",
    status: "Fullstack / Fintech",
    summary:
      "Personal finance tracker that records itself. Pay with QRIS, the m-banking notification is captured automatically, and the only thing left is one tap to pick a category.",
    points: ["Next.js", "Supabase", "Drizzle ORM", "Kotlin"],
    image: "/Project/catet.png",
    detail: [
      "Built around two everyday problems: forgetting to log spending, and retyping amounts that the bank notification already shows.",
      "An Android companion captures myBCA notifications and sends them to an ingest API. The raw payload is stored first, then a parser reads the amount and direction and saves the transaction with an empty category.",
      "A notification comes back to the phone with three category buttons, so logging finishes in one tap without opening any app. When a notification cannot be parsed, no transaction is created and the raw payload is kept for review.",
    ],
    featured: true,
  },
  {
    slug: "kmteti-website",
    title: "KMTETI FT UGM Website",
    tag: "Featured",
    status: "Fullstack / Web Development",
    summary:
      "Official web portal of KMTETI FT UGM: organization news, cabinet profile, division and program directory, national events, and academic services in one place.",
    points: ["Next.js", "Payload CMS", "PostgreSQL", "GSAP"],
    image: "/Project/kmteti-website.png",
    detail: [
      "Serves as the information hub for students of Electrical Engineering and Information Technology at FT UGM, from activity news to service requests.",
      "Content is managed through Payload CMS on PostgreSQL, with media stored on Supabase storage, so the team can publish without touching code.",
      "Built with the Next.js App Router, Tailwind CSS v4, and GSAP ScrollTrigger for motion, with a responsive layout for both desktop and mobile visitors.",
    ],
    featured: true,
  },
  {
    slug: "suncost",
    title: "SunCost",
    tag: "Featured",
    status: "Desktop App / Software Architecture",
    summary:
      "Windows desktop app that estimates rooftop solar potential, electricity savings, and payback time from the solar radiation data of the user's location.",
    points: ["C#", "WPF", "SQLite", "Weather API"],
    image: "/Project/suncost-energi.png",
    detail: [
      "Indonesia receives some of the highest solar radiation in the world, yet rooftop solar adoption stays low because people cannot tell how much their roof would produce or when the investment pays back.",
      "Users enter their location, roof area, orientation, and tilt. SunCost combines weather API radiation data with panel specs and electricity tariffs to show energy output, savings, and payback period.",
      "Led the team as software architect, designing the class structure and the split between views, models, and services in a C# WPF app with a local SQLite database.",
    ],
    featured: true,
  },
  {
    slug: "campaign-web",
    title: "Campaign Web",
    tag: "Project",
    status: "Frontend / UI-UX",
    summary:
      "Campaign website that presents a candidate's profile, vision and mission, experience, work programs, gallery, testimonials, and contact in one focused page.",
    points: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/Project/Screenshot 2026-05-27 020810.png",
    detail: [
      "Built as a focused campaign page that introduces a candidate and gives visitors a complete path through profile, vision, programs, and contact.",
      "Content is composed into sections that are quick to scan while still giving enough depth for voters who want more context.",
      "Uses a responsive visual system so the gallery, testimonials, and program information stay polished on small screens.",
    ],
    featured: false,
  },
  {
    slug: "foundit",
    title: "FoundIT!",
    tag: "On Progress",
    status: "AI / Backend",
    summary:
      "Lost and found platform that matches reports of lost and found items using image and text similarity.",
    points: ["Python", "FastAPI", "scikit-learn", "Computer Vision + NLP"],
    detail: [
      "Still in development. FoundIT! helps people report lost or found items and surfaces likely matches instead of making them scroll through every post.",
      "The AI matching service runs separately from the main backend as a FastAPI app. It scores visual similarity between two photos, text similarity between two descriptions, and combines both into one confidence score.",
      "The backend uses that confidence score to decide whether two reports probably describe the same item.",
    ],
    featured: false,
  },
];
```

Note: `liveUrl` is intentionally omitted everywhere. The UI only renders "Live Demo" when `liveUrl` is truthy, so no dead `#` links appear. `public/Project/porto.webp` is no longer referenced; leave the file.

- [ ] **Step 4: Homepage shows featured projects only**

In `src/components/sections/ProjectsSection.tsx` change:

```tsx
  const [lead, ...rest] = projects;
```

to:

```tsx
  // Bento grid is sized for one lead + two cards; the rest live on /projects.
  const [lead, ...rest] = projects.filter((project) => project.featured);
```

- [ ] **Step 5: Fix `/projects` images on mobile and the missing-image placeholder**

Root cause found during the audit: the `<Image width={1200} height={900}>` in `src/app/(site)/projects/page.tsx` has no `sizes`, so on a 3x phone the browser requests the `w=3840` variant. The dev optimizer takes seconds per image and the card stays an empty grey box.

Replace the image ternary inside the card with:

```tsx
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      preload={index === 0}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="project-preview-grid flex aspect-[4/3] w-full items-center justify-center p-6 text-center text-3xl font-black text-white/20">
                      {project.title}
                    </div>
                  )}
```

and change `{projects.map((project) => (` to `{projects.map((project, index) => (`.

Also add a status pill for in-progress work. Right after the `<h2 ...>{project.title}</h2>`, inside the `Link`, add:

```tsx
                {project.tag === "On Progress" ? (
                  <span className="mt-3 inline-block rounded-full border border-gold/50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">
                    On Progress
                  </span>
                ) : null}
```

- [ ] **Step 6: Verify**

Run: `pnpm lint` → no errors.
Browser, mobile preset, `/projects`: after 3s run

```js
[...document.querySelectorAll('main article img')].map(i => ({ src: i.currentSrc.match(/w=\d+/)?.[0], ok: i.complete && i.naturalWidth > 0 }))
```

Expected: every entry `ok: true`, widths ≤ `w=1080`. FoundIT! card shows the title placeholder and "On Progress" pill.
Visit `/projects/catet`, `/projects/kmteti-website`, `/projects/suncost`, `/projects/campaign-web`, `/projects/foundit`: each renders, no "Live Demo" button, FoundIT! shows the grid placeholder. `/projects/portfolio-web-system` returns 404.
Homepage: Selected Work bento shows Catet! (lead), KMTETI FT UGM Website, SunCost, and the Explore card.

- [ ] **Step 7: Commit**

```bash
git add public/Project/catet.png public/Project/suncost-energi.png public/Project/kmteti-website.png src/data/portfolio.ts src/components/sections/ProjectsSection.tsx "src/app/(site)/projects/page.tsx"
git commit -m "feat: update projects with Catet!, SunCost, KMTETI, FoundIT!"
```

Note: this commit includes the user's pending Teknik Fair `period` edit in `portfolio.ts`. Mention it in the task report.

---

### Task 3: Grouped tech stack and hero marquee

**Files:**
- Modify: `src/data/portfolio.ts:192-199` (replace `skills`)
- Modify: `src/data/tech-icons.ts` (append 4 icons)
- Modify: `src/components/sections/HeroSection.tsx` (marquee source, intro copy)

**Interfaces:**
- Produces: `export const skillGroups: { label: string; items: string[] }[]` in `src/data/portfolio.ts` (consumed by Task 4).
- Removes: `export const skills`. The only importer is `src/app/(site)/about/page.tsx`, which Task 4 rewrites. Until Task 4 lands, `pnpm build` fails on that import, so run Tasks 3 and 4 back to back and commit them together at the end of Task 4.
- `techStack` in `src/data/tech-icons.ts` keeps its shape `{ label: string; path: string }[]`.

- [ ] **Step 1: Replace `skills` in `src/data/portfolio.ts`**

Replace the whole `export const skills = [ ... ];` block with:

```ts
/** Grouped for /about. Every item comes from a shipped or in-progress project. */
export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C#", "Kotlin", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "Tailwind CSS", "Payload CMS", "FastAPI", "WPF", "GSAP", "Framer Motion"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Supabase", "Drizzle ORM", "SQLite"],
  },
  {
    label: "Tools",
    items: ["Git/GitHub", "Vercel", "pnpm", "Figma"],
  },
];
```

- [ ] **Step 2: Append brand icons to `src/data/tech-icons.ts`**

Paths come from `simple-icons@16.27.1` (already in `node_modules/.pnpm`). simple-icons has no C# mark, so .NET stands in. Add these entries before the final `];`:

```ts
  {
    label: "Supabase",
    path:
      "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z",
  },
  {
    label: "Python",
    path:
      "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z",
  },
  {
    label: "FastAPI",
    path:
      "M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896",
  },
  {
    label: "C# / .NET",
    path:
      "M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z",
  },
```

- [ ] **Step 3: Hero marquee picks the real stack**

In `src/components/sections/HeroSection.tsx`, replace

```tsx
const marquee = techStack;
```

with

```tsx
const marqueeLabels = [
  "Next.js",
  "TypeScript",
  "Payload CMS",
  "PostgreSQL",
  "Supabase",
  "Python",
  "FastAPI",
  "C# / .NET",
];
const marquee = marqueeLabels.flatMap((label) =>
  techStack.filter((item) => item.label === label),
);
```

- [ ] **Step 4: Hero intro copy without em dash**

In the same file, replace the intro `Reveal` children (the `<strong>` plus the `— Information Technology ...` text) with:

```tsx
            <strong className="font-semibold text-ink">
              Hi! I&apos;m Muhammad Farrel Al Ghazy.
            </strong>{" "}
            Information Engineering student at Universitas Gadjah Mada and
            fullstack developer focused on building web systems, leading teams,
            and turning ideas into shipped products.
```

- [ ] **Step 5: Verify (lint only; build waits for Task 4)**

Run: `pnpm lint` → the only acceptable error is the missing `skills` export in `about/page.tsx`, if lint reports it. Browser, homepage desktop: marquee shows all 8 labels with icons, none blank.

Do not commit yet. Continue to Task 4.

---

### Task 4: Rewrite `/about`

**Files:**
- Modify (full rewrite): `src/app/(site)/about/page.tsx`

**Interfaces:**
- Consumes: `skillGroups` from `@/data/portfolio` (Task 3); `Header`, `Footer`, `Reveal` (`immediate?`, `delay?`, `stagger?`, `className`), `TextReveal` (`as`, `immediate?`, `className`; lines wrapped in `span[data-line]`).

- [ ] **Step 1: Replace the file contents**

```tsx
import Image from "next/image";
import { skillGroups } from "@/data/portfolio";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

export const metadata = {
  title: "About | Muhammad Farrel Al Ghazy",
  description:
    "Information Engineering student at Universitas Gadjah Mada, fullstack developer, and Chairman of KMTETI FT UGM.",
};

const focusAreas = [
  {
    title: "Fullstack Web",
    body: "Next.js apps with a CMS or database behind them, built to be maintained after launch.",
  },
  {
    title: "Backend & Data",
    body: "APIs, PostgreSQL schemas, and services that turn messy input into reliable records.",
  },
  {
    title: "Desktop & Mobile",
    body: "C# WPF desktop tools and Android companions when the web is not the right place.",
  },
  {
    title: "Leadership & Event Ops",
    body: "Leading a 250+ member organization and running logistics for campus-scale events.",
  },
];

const education = [
  {
    school: "Universitas Gadjah Mada",
    program: "Information Engineering",
    period: "2024 to 2028 (expected)",
  },
];

const sectionTitle =
  "text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ink/55";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bone text-ink">
      <Header />

      <section className="px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-[48rem]">
          <div className="flex items-end justify-between gap-6">
            <TextReveal
              as="h1"
              immediate
              className="font-display text-[clamp(2.4rem,6vw,4.2rem)] font-black uppercase leading-[0.92] tracking-[-0.035em]"
            >
              <span className="block overflow-hidden pb-[0.12em] pt-[0.04em]">
                <span data-line className="block">
                  About<span className="text-rossoneri">.</span>
                </span>
              </span>
            </TextReveal>
            <div className="relative aspect-[1/2] h-28 shrink-0 md:h-36">
              <Image
                src="/images/char-kmteti-side.png"
                alt="Pixel-art illustration of Farrel in a navy KMTETI jacket"
                fill
                preload
                sizes="5rem"
                className="object-contain [image-rendering:pixelated]"
              />
            </div>
          </div>

          <Reveal
            immediate
            delay={0.1}
            className="mt-8 space-y-5 border-t border-ink/10 pt-8 text-base leading-[1.85] text-ink/75 md:text-lg"
          >
            <p>
              I&apos;m Muhammad Farrel Al Ghazy (Farrel), an Information
              Engineering student at Universitas Gadjah Mada and a fullstack
              developer. I currently lead KMTETI FT UGM as Chairman, an
              organization of 250+ members, and manage partnerships at UGM
              Blockchain Club.
            </p>
            <p>
              What ties the two together is shipping things people actually
              use. On the code side that means web systems with Next.js,
              TypeScript, and PostgreSQL, plus desktop and mobile tools when a
              project needs them. On the organization side it means aligning
              teams, running events, and making sure the plan survives contact
              with real schedules.
            </p>
          </Reveal>

          <div className="mt-16">
            <h2 className={sectionTitle}>What I work on</h2>
            <Reveal stagger className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div key={area.title}>
                  <span className="block h-[3px] w-10 bg-rossoneri" />
                  <h3 className="mt-4 font-display text-xl font-black uppercase tracking-[-0.01em]">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-[1.7] text-ink/70">
                    {area.body}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="mt-16">
            <h2 className={sectionTitle}>Technical skills</h2>
            <Reveal stagger className="mt-6 flex flex-col">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-2 border-t border-ink/10 py-5 sm:grid-cols-[9rem_1fr] sm:gap-8"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
                    {group.label}
                  </p>
                  <p className="text-[0.95rem] leading-[1.7] text-ink/70">
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="mt-16">
            <h2 className={sectionTitle}>Education</h2>
            <div className="mt-6 flex flex-col">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-ink/10 py-5"
                >
                  <div>
                    <p className="font-display text-lg font-black uppercase tracking-[-0.01em]">
                      {item.school}
                    </p>
                    <p className="mt-1 text-[0.95rem] text-ink/70">{item.program}</p>
                  </div>
                  <p className="text-sm font-medium text-ink/55">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Verify**

Run: `pnpm lint` → no errors. Run: `pnpm build` → succeeds (stop the dev server first if the build complains about `.next` being locked, then restart it with `preview_start`).
Browser `/about` at desktop and mobile preset: title, figure, 2 paragraphs, 4 focus areas, 4 skill rows, education row. No horizontal overflow (Task 5 Step 1 script). Header "About" nav item is active.

- [ ] **Step 3: Commit Tasks 3 and 4 together**

```bash
git add src/data/portfolio.ts src/data/tech-icons.ts src/components/sections/HeroSection.tsx "src/app/(site)/about/page.tsx"
git commit -m "feat: simplify about page and update tech stack"
```

---

### Task 5: Mobile fixes

**Files:**
- Modify: `src/components/sections/AboutRedEdges.tsx` (returned wrapper `div`)
- Modify: `src/components/site/Footer.tsx` (grid and left column)

- [ ] **Step 1: Record the failing state**

Browser, mobile preset, homepage. Run this overflow finder (reuse it in every later check):

```js
[...document.querySelectorAll('body *')]
  .filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.right > innerWidth + 1 && !e.closest('.hero-marquee') && getComputedStyle(e).position !== 'fixed'; })
  .filter(e => ![...e.children].some(c => c.getBoundingClientRect().right > innerWidth + 1))
  .slice(0, 10)
  .map(e => `${e.tagName}.${String(e.className).slice(0, 60)} right=${Math.round(e.getBoundingClientRect().right)}`)
```

Expected before the fix: entries inside `#contact` (heading lines, Download CV button, email) and the red ellipses inside `#about` (these are clipped by `overflow-hidden` but still listed; ignore `absolute` ellipses when judging). Also screenshot `#about`: red caps visible top and bottom.

- [ ] **Step 2: Hide the red caps below `md`**

In `src/components/sections/AboutRedEdges.tsx`, change the wrapper:

```tsx
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0">
```

to:

```tsx
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
```

The GSAP timeline is already registered only under `(min-width: 768px)`, so no JS change.

- [ ] **Step 3: Stop the footer column from growing past the viewport**

In `src/components/site/Footer.tsx`:

- Change `<div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:pr-[8%]">` to `<div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16 lg:pr-[8%]">`.
- Change `<div className="max-w-xl">` to `<div className="min-w-0 max-w-xl">`.
- Change `<Reveal stagger className="flex flex-col">` (contact list) to `<Reveal stagger className="flex min-w-0 flex-col">`.

A grid track defaults to `minmax(auto, 1fr)`, so its minimum is the min-content width of the widest child. `minmax(0, 1fr)` lets it shrink, and the existing `truncate` on contact values starts working.

- [ ] **Step 4: Verify**

Reload homepage at mobile preset, run the Step 1 script: no entries from `#contact`. If entries remain, the listed leaf element is the culprit; give it `min-w-0` or `break-words` and re-run. Screenshot `#about`: no red caps. Resize to desktop preset: red caps and pin animation still work when scrolling into `#about`; footer layout unchanged (two columns).
Run the script on `/projects`, `/projects/catet`, `/experience` (ignore entries inside the horizontal rail container), `/about`, `/cv`. All clean.
Run: `pnpm lint` → no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/AboutRedEdges.tsx src/components/site/Footer.tsx
git commit -m "fix: mobile layout for about caps and contact footer"
```

---

### Task 6: Remove remaining em dashes and final verification

**Files:**
- Modify: `src/components/sections/AboutSection.tsx:88`
- Modify: `src/components/site/Header.tsx:71`
- Modify: `src/app/(site)/experience/page.tsx:65`

- [ ] **Step 1: Find visitor-facing em dashes**

Run (Grep tool): pattern `—`, path `src`, output mode content. Ignore lines that are comments (`//`, `/*`, ` *`, `{/*`). Expected remaining copy hits after Tasks 1-4: the three lines listed above. Fix any other non-comment hit the same way.

- [ ] **Step 2: Replace them**

`src/components/sections/AboutSection.tsx`:

```tsx
          I build systems that stay maintainable after launch — and lead the
          teams that ship them.
```
→
```tsx
          I build systems that stay maintainable after launch, and I lead the
          teams that ship them.
```

`src/components/site/Header.tsx`: `aria-label="FrlAgee — home"` → `aria-label="FrlAgee, home"`.

`src/app/(site)/experience/page.tsx`: ``alt={`${stop.organization} — ${stop.role}`}`` → ``alt={`${stop.organization}, ${stop.role}`}``.

- [ ] **Step 3: Verify rendered pages are clean**

Run `pnpm lint` and `pnpm build` → both pass.
Browser, for each of `/`, `/projects`, `/projects/catet`, `/projects/kmteti-website`, `/projects/suncost`, `/projects/campaign-web`, `/projects/foundit`, `/experience`, `/about`, `/cv`, run:

```js
({
  text: document.body.innerText.includes('—'),
  meta: document.title.includes('—') || (document.querySelector('meta[name=description]')?.content ?? '').includes('—'),
  attrs: [...document.querySelectorAll('[alt],[aria-label]')].some(e => (e.getAttribute('alt') ?? '').includes('—') || (e.getAttribute('aria-label') ?? '').includes('—')),
})
```

Expected: all `false` on every page. Also run the Task 5 overflow script at mobile preset on each page. Take one mobile screenshot of the homepage About section and one of `/cv` as proof. Reset the viewport with preset `desktop`.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/AboutSection.tsx src/components/site/Header.tsx "src/app/(site)/experience/page.tsx"
git commit -m "fix: remove em dashes from visitor-facing copy"
```
