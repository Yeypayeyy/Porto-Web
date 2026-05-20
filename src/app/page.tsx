"use client";

import { useMemo, useState } from "react";

type Project = {
  title: string;
  tag: string;
  status: string;
  summary: string;
  points: string[];
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio Web System",
    tag: "Featured",
    status: "Next.js, Tailwind CSS, pnpm",
    summary:
      "Personal portfolio built as a clean consulting-style profile for projects, experience, and professional identity.",
    points: ["Dark editorial hero", "Project filtering", "Responsive section bands"],
    featured: true,
  },
  {
    title: "Organization Development Case Study",
    tag: "Featured",
    status: "KMTETI FT UGM",
    summary:
      "A leadership and team-development case study based on organization planning, member empowerment, and internal coordination.",
    points: ["Team management", "Program planning", "Division alignment"],
    featured: true,
  },
  {
    title: "Event Logistics Operating Flow",
    tag: "Operations",
    status: "TETI LabSkill, Technocorner, Teknik Fair",
    summary:
      "A structured coordination flow for logistics, equipment, consumption, guest handling, and inter-division communication.",
    points: ["Logistics mapping", "Stakeholder handling", "Execution control"],
    featured: false,
  },
  {
    title: "Partnership Pipeline Framework",
    tag: "Partnership",
    status: "UGM Blockchain Club",
    summary:
      "A partnership-oriented framework for managing outreach, relationship building, and external collaboration opportunities.",
    points: ["Partner research", "Communication flow", "Value proposal"],
    featured: false,
  },
];

const experiences = [
  {
    organization: "KMTETI FT UGM",
    role: "Chairman",
    period: "Dec 2025 - Present",
    location: "Yogyakarta, Indonesia",
    description:
      "Leading the organization while aligning divisions, empowering members, and shaping internal development priorities.",
    accent: "Leadership",
  },
  {
    organization: "UGM Blockchain Club",
    role: "Partnerships Manager",
    period: "Dec 2025 - Present",
    location: "Yogyakarta, Indonesia",
    description:
      "Managing partnership direction and supporting external collaboration for a student-led blockchain community.",
    accent: "Partnership",
  },
  {
    organization: "Technocorner",
    role: "Sub-Coordinator of Logistic, Consumption, and Equipment",
    period: "Oct 2025 - Present",
    location: "Yogyakarta, Indonesia",
    description:
      "Coordinating logistics, equipment readiness, and consumption needs for a technology event environment.",
    accent: "Event Ops",
  },
  {
    organization: "JAWARAGAMA",
    role: "Vice Chairman",
    period: "Aug 2025 - Mar 2026",
    location: "Yogyakarta, Indonesia",
    description:
      "Supporting strategic direction, member collaboration, and organizational impact across internal and external programs.",
    accent: "Strategy",
  },
  {
    organization: "Teknik Fair",
    role: "Liaison Officer",
    period: "Sep 2025 - Oct 2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Served as the main bridge between committee teams and guest stars, handling schedules, needs, logistics, and hospitality.",
    accent: "Liaison",
  },
  {
    organization: "Find IT! UGM",
    role: "Equipment Staff",
    period: "Oct 2024 - Jun 2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Supported equipment preparation and operational needs for a university technology event.",
    accent: "Support",
  },
];

const skills = [
  "Team Management",
  "Marketing Strategy",
  "Marketing",
  "Python Essentials 1",
  "Logistics Coordination",
  "Partnership Management",
];

export default function Home() {
  const [projectFilter, setProjectFilter] = useState<"all" | "featured">(
    "featured",
  );

  const visibleProjects = useMemo(
    () =>
      projectFilter === "featured"
        ? projects.filter((project) => project.featured)
        : projects,
    [projectFilter],
  );

  return (
    <main className="min-h-screen bg-[#121513] text-[#f4f6f0]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#121513]/95 backdrop-blur">
        <nav className="mx-auto flex h-12 max-w-7xl items-center justify-between px-5 text-xs font-semibold md:px-8">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#73bf3f] text-[10px] font-black text-[#121513]">
              FG
            </span>
            <span className="hidden text-[#f4f6f0] sm:inline">
              Farrel Al Ghazy
            </span>
          </a>
          <div className="hidden items-center gap-6 text-[#aeb5ae] md:flex">
            <a className="transition hover:text-[#f4f6f0]" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-[#f4f6f0]" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-[#f4f6f0]" href="#about">
              About
            </a>
          </div>
          <a
            className="rounded-full bg-[#73bf3f] px-4 py-2 text-[#121513] transition hover:bg-[#a8db4f]"
            href="mailto:farrel.ag20@gmail.com"
          >
            Contact Me
          </a>
        </nav>
        <div className="bg-[#73bf3f] py-1 text-center text-[11px] font-black uppercase text-[#121513]">
          Information Engineering Undergraduate Student at Universitas Gadjah
          Mada
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_74%_24%,rgba(115,191,63,0.28),transparent_24%),linear-gradient(130deg,#121513_0%,#1b1e1d_46%,#253034_100%)]"
      >
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full border-[18px] border-[#a8db4f]/70" />
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[1fr_0.88fr] md:px-8">
          <div className="relative z-10">
            <p className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-[#b7dcd7] ring-1 ring-white/15">
              Portfolio // Leadership // Digital Systems
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] text-white md:text-7xl">
              Muhammad Farrel
              <span className="block text-[#73bf3f]">Al Ghazy</span>
              builds organized digital momentum.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#dce3dd] md:text-lg">
              Information Engineering student at UGM with a strong mix of
              organization leadership, event operations, partnership work, and
              growing technical execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[#73bf3f] px-5 py-3 text-sm font-black text-[#121513] transition hover:bg-[#a8db4f]"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="rounded-full bg-white/12 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/18"
                href="#experience"
              >
                See Experience
              </a>
            </div>
          </div>

          <div className="relative z-10 rounded-[24px] bg-[#24282b]/90 p-5 shadow-2xl ring-1 ring-white/10">
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full bg-[#73bf3f] px-3 py-1 text-[11px] font-black text-[#121513]">
                Featured Profile
              </span>
              <span className="text-xs font-semibold text-[#aeb5ae]">
                Cilegon to Yogyakarta
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
              <div>
                <h2 className="text-3xl font-black leading-tight text-white">
                  Leadership-driven technologist in progress.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#cbd4cd]">
                  Currently active across KMTETI FT UGM, UGM Blockchain Club,
                  Technocorner, and student event operations.
                </p>
              </div>
              <div className="rounded-2xl bg-[#73bf3f] p-4 text-[#121513]">
                <p className="text-xs font-black uppercase">Top strengths</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#121513]/90 px-3 py-1 text-[11px] font-bold text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f0] px-5 py-20 text-[#121513] md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-black uppercase text-[#73bf3f]">
                Focus Area
              </p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Built around projects, organizations, and people.
              </h2>
            </div>
            <div className="grid gap-3 text-sm font-bold text-[#24282b] sm:grid-cols-3">
              <span className="rounded-full border border-[#121513]/15 px-4 py-2">
                Product thinking
              </span>
              <span className="rounded-full border border-[#121513]/15 px-4 py-2">
                Event execution
              </span>
              <span className="rounded-full border border-[#121513]/15 px-4 py-2">
                Team leadership
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative overflow-hidden bg-[#1b1e1d] px-5 py-24 md:px-8"
      >
        <div className="absolute inset-x-0 bottom-0 h-32 opacity-25 [background-image:radial-gradient(#f4f6f0_1px,transparent_1.2px)] [background-size:10px_10px]" />
        <div className="absolute left-5 top-8 rotate-[-8deg] bg-[#66c3d4] px-4 py-2 text-xl font-black text-[#121513] shadow-lg">
          #PROJECTS
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase text-[#a8db4f]">
                Main Section 01
              </p>
              <h2 className="mt-3 text-4xl font-black text-white md:text-6xl">
                Projects
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#cbd4cd]">
                A curated set of technical, organizational, and operational
                work. Use the filter to switch between featured work and the
                broader project list.
              </p>
            </div>
            <div className="flex w-fit rounded-full bg-white/10 p-1 ring-1 ring-white/15">
              {(["featured", "all"] as const).map((filter) => (
                <button
                  key={filter}
                  className={`rounded-full px-5 py-2 text-sm font-black capitalize transition ${
                    projectFilter === filter
                      ? "bg-[#73bf3f] text-[#121513]"
                      : "text-[#dce3dd] hover:bg-white/10"
                  }`}
                  type="button"
                  onClick={() => setProjectFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-[18px] bg-[#24282b] p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-[#73bf3f]/50"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#73bf3f] px-3 py-1 text-[11px] font-black text-[#121513]">
                    {project.tag}
                  </span>
                  <span className="text-xs font-semibold text-[#aeb5ae]">
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-black text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#cbd4cd]">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full bg-white/8 px-3 py-1 text-xs font-bold text-[#dce3dd]"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="bg-[#24282b] px-5 py-24 text-white md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-black uppercase text-[#a8db4f]">
              Main Section 02
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              Experience
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#cbd4cd]">
              Organization and committee experience across leadership,
              partnerships, human-resource development, event operations, and
              logistics.
            </p>
          </div>

          <div className="grid gap-4">
            {experiences.map((item) => (
              <article
                key={`${item.organization}-${item.role}`}
                className="grid gap-4 border-t border-white/10 py-6 md:grid-cols-[0.7fr_1fr_1.4fr]"
              >
                <div>
                  <span className="rounded-full bg-[#a8db4f] px-3 py-1 text-[11px] font-black text-[#121513]">
                    {item.accent}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black">{item.organization}</h3>
                  <p className="mt-2 text-sm font-bold text-[#73bf3f]">
                    {item.role}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#aeb5ae]">
                    {item.period} / {item.location}
                  </p>
                </div>
                <p className="text-sm leading-7 text-[#dce3dd]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden bg-[linear-gradient(150deg,#b7dcd7_0%,#66c3d4_58%,#73bf3f_58%,#73bf3f_100%)] px-5 py-24 text-[#121513] md:px-8"
      >
        <div className="absolute -left-16 top-24 h-40 w-40 rounded-full border-[14px] border-[#121513]" />
        <div className="absolute right-12 top-16 h-24 w-24 rounded-full border-[10px] border-[#a8db4f]" />
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs font-black uppercase">Main Section 03</p>
            <h2 className="mt-3 text-5xl font-black md:text-7xl">About</h2>
          </div>
          <div className="rounded-[24px] bg-[#f4f6f0]/90 p-7 shadow-2xl">
            <h3 className="text-3xl font-black">
              I connect teams, operations, and technology.
            </h3>
            <p className="mt-5 text-sm leading-8 text-[#24282b]">
              I am Muhammad Farrel Al Ghazy, an Information Engineering
              undergraduate student at Universitas Gadjah Mada. My profile sits
              between technical learning and people-facing execution: managing
              teams, coordinating events, building partnerships, and shaping
              practical systems that help groups move better.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#121513] p-5 text-white">
                <p className="text-xs font-black uppercase text-[#a8db4f]">
                  Contact
                </p>
                <a
                  className="mt-3 block text-sm font-bold"
                  href="mailto:farrel.ag20@gmail.com"
                >
                  farrel.ag20@gmail.com
                </a>
              </div>
              <div className="rounded-2xl bg-[#121513] p-5 text-white">
                <p className="text-xs font-black uppercase text-[#a8db4f]">
                  Education
                </p>
                <p className="mt-3 text-sm font-bold">
                  UGM, Information Technology
                </p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#121513]/10 px-3 py-1 text-xs font-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#121513] px-5 py-14 text-[#dce3dd] md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#73bf3f]/30 pt-10 md:grid-cols-[1fr_0.7fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-black text-white">
              We Look Forward to
              <span className="block text-[#73bf3f]">Speaking with You</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#aeb5ae]">
              Open for collaboration, organization work, project building, and
              learning opportunities.
            </p>
          </div>
          <div>
            <p className="text-xs font-black uppercase text-[#a8db4f]">
              Navigation
            </p>
            <div className="mt-4 grid gap-2 text-sm font-semibold">
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#about">About</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase text-[#a8db4f]">
              Let us stay connected
            </p>
            <a
              className="mt-4 inline-flex rounded-full bg-[#73bf3f] px-5 py-3 text-sm font-black text-[#121513]"
              href="https://www.linkedin.com/in/farrel-ag"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
