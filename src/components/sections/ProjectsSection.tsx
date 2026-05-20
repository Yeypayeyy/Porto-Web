import Link from "next/link";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[linear-gradient(160deg,#1b1e1d_0%,#1b1e1d_60%,#172824_100%)] px-5 py-14 md:px-8"
    >
      <div className="drift-soft absolute -right-10 top-10 h-28 w-28 rounded-full bg-[#66c3d4]/15 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,#73bf3f_35%,#66c3d4_65%,transparent)]" />
      <div className="mx-auto max-w-6xl border-t border-[#73bf3f]/30 pt-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-[#a8db4f]">Projects</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f4f6f0] md:text-4xl">
              Selected work
            </h2>
          </div>
          <Link
            className="fun-link text-sm font-semibold text-[#b7dcd7]"
            href="/projects"
          >
            See all
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="lift-card rounded-[8px] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(115,191,63,0.035))] p-4 ring-1 ring-white/5"
            >
              <p className="text-xs font-semibold uppercase text-[#aeb5ae]">
                {project.status}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[#f4f6f0]">
                {project.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#cbd4cd]">
                {project.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
