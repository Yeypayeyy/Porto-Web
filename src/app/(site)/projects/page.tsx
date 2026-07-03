import Link from "next/link";
import { projects } from "@/data/portfolio";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#121513] text-[#f4f6f0]">
      <Header />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link className="text-sm font-semibold text-[#b7dcd7] underline" href="/">
            Back to home
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold text-[#a8db4f]">Projects</p>
            <h1 className="mt-3 text-5xl font-semibold leading-tight md:text-7xl">
              Project details
            </h1>
            <p className="mt-5 text-base leading-8 text-[#dce3dd]">
              A fuller look at technical, organizational, and operational work
              that shapes my portfolio.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={`/projects/${project.slug}`}
                className="group rounded-[8px] bg-[#24282b] p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-[#2b3033] hover:ring-[#73bf3f]/45"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-[#73bf3f]/40 px-3 py-1 text-[11px] font-semibold text-[#a8db4f]">
                    {project.tag}
                  </span>
                  <span className="text-xs font-semibold text-[#aeb5ae]">
                    {project.status}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold">
                  {project.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#cbd4cd]">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-[#dce3dd]"
                    >
                      {point}
                    </span>
                  ))}
                </div>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#a8db4f]">
                  Lihat detail
                  <svg
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
