import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-bone px-6 py-24 text-ink md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[94rem]">
        <div className="flex flex-col justify-between gap-8 border-b border-ink/15 pb-10 md:flex-row md:items-end">
          <div>
            <Reveal
              className="mb-6 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-ink/45"
            >
              <span className="h-px w-10 bg-rossoneri" />
              Selected Work
            </Reveal>
            <TextReveal
              as="h2"
              className="font-display text-[clamp(2.2rem,5vw,4rem)] font-black uppercase leading-[0.98] tracking-[-0.03em]"
            >
              <span className="block overflow-hidden pb-[0.1em]">
                <span data-line className="block">Projects &amp;</span>
              </span>
              <span className="block overflow-hidden pb-[0.1em]">
                <span data-line className="block text-ink/25">experiments.</span>
              </span>
            </TextReveal>
          </div>
          <Reveal className="max-w-sm" delay={0.1}>
            <p className="text-base leading-7 text-ink/60">
              A collection of systems and experiments — each shaped by curiosity
              and the goal of building things that feel useful and reliable.
            </p>
          </Reveal>
        </div>

        <Reveal stagger className="mt-4">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-ink/12 py-7 transition-colors duration-300 hover:bg-ink/[0.03] md:gap-8 md:py-9"
            >
              <span className="font-mono text-sm text-ink/40 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-[clamp(1.4rem,3vw,2.4rem)] font-black uppercase leading-tight tracking-[-0.02em] transition-colors duration-300 group-hover:text-rossoneri">
                  {project.title}
                </h3>
                <p className="mt-1 truncate text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                  {project.tag} · {project.status}
                </p>
              </div>

              <div className="flex items-center gap-5">
                {project.image ? (
                  <span className="relative hidden h-16 w-28 shrink-0 overflow-hidden bg-bone-soft md:block lg:h-20 lg:w-36">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="144px"
                      className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </span>
                ) : null}
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/20 text-ink transition-colors duration-300 group-hover:border-rossoneri group-hover:bg-rossoneri group-hover:text-bone">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </Reveal>

        <Reveal className="mt-12" delay={0.1}>
          <Link
            href="/projects"
            className="hero-link-underline inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-ink"
          >
            View all projects
            <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
