<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Codex Project Memory

Project ini adalah portfolio pribadi Muhammad Farrel Al Ghazy (`FrlAgee`) yang menampilkan karya dan pengalaman seputar fullstack/backend/Web3, organisasi, kepanitiaan, partnership, dan leadership.

## Instruksi Wajib

- Baca file ini dulu sebelum mengubah project.
- Sebelum mengubah code Next.js, baca guide lokal yang relevan di `node_modules/next/dist/docs/`. Jangan mengandalkan asumsi Next.js lama.
- `DESIGN_REFERENCE.md` sudah dihapus dengan sengaja karena website akan dirombak. Jangan menganggap file itu wajib, jangan mencoba membacanya, dan jangan membuatnya kembali kecuali diminta user.
- Jangan reset atau menghapus perubahan user tanpa izin.
- Pakai `pnpm` sebagai package manager karena repo punya `pnpm-lock.yaml`.

## Stack

- Next.js `16.2.6`
- React `19.2.4`
- TypeScript strict
- Tailwind CSS v4 melalui `src/app/globals.css`
- shadcn config: `components.json`, style `base-vega`, icon library `lucide`
- Payload CMS `3.85.0` dengan Postgres adapter
- `next.config.ts` memakai `withPayload(nextConfig)`
- Path alias: `@/*` ke `./src/*`

Scripts:

```bash
pnpm dev
pnpm build
pnpm lint
pnpm start
```

Catatan: script dev menjalankan `next dev --webpack`.

## Env

`.env.local` ada di repo lokal. Payload membutuhkan:

- `DATABASE_URI`
- `PAYLOAD_SECRET`

Jangan commit secrets.

## Struktur Penting

- `src/app/(site)/layout.tsx`: layout utama website publik, import `../globals.css`, Inter dari `next/font/google`, metadata portfolio.
- `src/app/(site)/page.tsx`: homepage, urutan section: `Header`, `HeroSection`, `ProjectsSection`, `ExperienceSection`, `AboutSection`, `Footer`.
- `src/app/(site)/projects/page.tsx`: halaman daftar semua project dari data statis.
- `src/app/(site)/projects/[slug]/page.tsx`: detail project statis. Di Next 16 params dipakai sebagai `Promise<{ slug: string }>` dan di-`await`.
- `src/app/(site)/experience/page.tsx`: halaman experience lengkap, memisahkan organisasi dan kepanitiaan.
- `src/app/(site)/about/page.tsx`: halaman about sederhana.
- `src/app/(payload)/*`: route Payload admin, API, GraphQL, custom SCSS, import map.
- `src/data/portfolio.ts`: sumber konten statis utama untuk project, experience, dan skills.
- `src/components/sections/*`: section homepage.
- `src/components/site/Header.tsx` dan `Footer.tsx`: navigasi dan footer reusable.
- `src/app/globals.css`: design tokens, Tailwind theme, custom classes, animation, scroll/view timeline, responsive/motion behavior.
- `src/collections/*`: schema Payload untuk `Users`, `Media`, `Projects`, `Experience`.

## Data Model Saat Ini

Konten publik masih memakai data statis dari `src/data/portfolio.ts`, bukan fetch dari Payload.

`Project`:

- `slug`
- `title`
- `tag`
- `status`
- `summary`
- `points`
- `image?`
- `detail`
- `featured`

`Experience`:

- `organization`
- `role`
- `period`
- `location`
- `description`
- `accent`

`skills` adalah array string.

Jika menambah project/experience yang muncul di homepage atau page detail, edit `src/data/portfolio.ts` dan pastikan asset image ada di `public/`.

## Payload CMS

Payload sudah dikonfigurasi tetapi belum menjadi sumber data website publik.

Collections:

- `users`: auth user untuk admin.
- `media`: upload media dengan field `alt`.
- `projects`: title, slug, summary, richText description, technologies, image, githubUrl, liveUrl, featured, order.
- `experience`: role, company, location, startDate, endDate, currentlyWorking, description, highlights, order.

Kalau ingin migrasi dari data statis ke CMS, lakukan bertahap:

- Tambahkan fetch Payload di route/server component yang relevan.
- Pertahankan fallback atau mapping dari bentuk CMS ke bentuk UI yang sudah ada.
- Jangan langsung hapus `src/data/portfolio.ts` sebelum semua page aman.

## Kondisi UI Saat Ini

Bagian ini hanya mendeskripsikan implementasi yang sedang ada untuk membantu navigasi code. Ini bukan design direction yang wajib dipertahankan. Saat user meminta redesign atau perombakan, arah visual baru dari brief user boleh menggantikan pola lama, sementara batasan teknis dan konten yang masih relevan tetap dijaga.

- Header sticky gelap dengan brand `FrlAgee`, nav anchor ke homepage section, CTA email.
- Hero memakai image background `/images/image 2.png`, overlay gelap, grid foto Farrel, CTA ke `/projects`, social links.
- Projects section adalah client component karena carousel horizontal memakai state, refs, `scrollIntoView`, dan `requestAnimationFrame`.
- Experience section memakai banyak foto absolut sebagai memory collage. Hati-hati perubahan responsive karena banyak posisi absolute.
- Contact/About section adalah band mint/aqua dengan contact cards lucide icons.
- Global CSS banyak custom animation. Jika class custom terlihat tidak ditemukan di TSX, cek `globals.css` sebelum menghapus.

## Asset Public

Folder asset penting:

- `public/images/*`: foto Farrel dan background hero.
- `public/Project/*`: screenshot project.
- `public/Experience/*`: foto experience lama dengan kapital `Experience`.
- `public/experience/*`: path yang dipakai beberapa komponen mengarah lowercase `/experience/...`. Perhatikan case sensitivity di deployment Linux.
- `public/UI/batik-element.webp`: ornamen batik untuk Projects section.

Catatan penting: Windows tidak case-sensitive, tetapi deploy Linux biasanya case-sensitive. Kalau image tidak muncul di produksi, cek mismatch `Experience` vs `experience`.

## Routing Publik

- `/`: homepage
- `/projects`: daftar project
- `/projects/[slug]`: detail project dari `src/data/portfolio.ts`
- `/experience`: detail experience
- `/about`: about
- `/admin`: Payload admin
- `/api/[...slug]`: Payload API
- `/graphql` dan `/graphql-playground`: Payload GraphQL

## Coding Preferences

- Ikuti style existing: Tailwind utility langsung di JSX, custom animation/class di `globals.css`.
- Gunakan `next/image` untuk gambar public.
- Gunakan `next/link` untuk navigasi internal.
- Gunakan lucide-react untuk icon baru jika cocok.
- Jaga perubahan tetap scoped. Jangan refactor besar kecuali diminta.
- Untuk route group path di PowerShell, pakai `-LiteralPath`, contoh:

```powershell
Get-Content -Raw -LiteralPath 'src\app\(site)\projects\[slug]\page.tsx'
```

## Known Things To Be Careful About

- `src/app/(site)/projects/[slug]/page.tsx` memakai pola params async. Jangan ubah ke pola Next lama tanpa cek docs lokal.
- `ProjectsSection.tsx` harus tetap `"use client"` karena memakai hooks dan DOM scrolling.
- `globals.css` memuat banyak custom animation dan class yang dipakai across sections.
- `FocusSection.tsx` ada tetapi belum dipakai di homepage.
- README masih default create-next-app, jadi `AGENTS.md` lebih berguna untuk konteks project.
- Ada folder `.next`, `node_modules`, `.pnpm-store`; jangan edit manual.

## Current Portfolio Content

Persona:

- Muhammad Farrel Al Ghazy
- Brand/name display: `FrlAgee`
- Information Engineering student at Universitas Gadjah Mada
- Positioning: Fullstack Developer focused on Web3 Experiences, with backend, modern web apps, decentralized products, leadership, event operations, and partnerships.

Contacts:

- Email: `farrel.ag20@gmail.com`
- GitHub: `https://github.com/Yeypayeyy`
- LinkedIn: `https://www.linkedin.com/in/farrel-ag`
- Instagram: `https://www.instagram.com/frlagee`

Featured/static projects include:

- Portfolio Web System
- KMTETI Website
- Campaign Web
- Event Logistics Operating Flow
- Partnership Pipeline Framework

Experience includes:

- KMTETI FT UGM, Chairman
- UGM Blockchain Club, Partnerships Manager
- Technocorner, Sub-Coordinator of Logistic, Consumption, and Equipment
- JAWARAGAMA, Vice Chairman
- Teknik Fair, Liaison Officer
- Find IT! UGM, Equipment Staff

## Suggested First Steps For Codex

1. Run `pnpm lint` before/after risky edits.
2. For UI work, inspect the nearby section/component and existing global styles first.
3. For Next.js routing/data/loading changes, read relevant docs in `node_modules/next/dist/docs/`.
4. For content changes, start from `src/data/portfolio.ts`.
5. For CMS changes, inspect `payload.config.ts` and `src/collections/*`.
6. After UI edits, run `pnpm build` when feasible and manually check mobile layout.
