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
              Satu loker untuk satu project — isinya tangkapan layar, catatan
              singkat, dan hal-hal yang dikerjakan di dalamnya.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16" delay={0.05}>
          <div className="locker-room">
            {projects.map((project, index) => {
              const number = String(index + 1).padStart(2, "0");
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="locker group text-bone"
                >
                  <div className="relative z-[3] flex flex-1 flex-col p-4">
                    <div className="flex items-center justify-between text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-bone/45">
                      <span className="font-mono tabular-nums">{number}</span>
                      <span>{project.tag}</span>
                    </div>

                    {/* Rail the print hangs from */}
                    <div className="locker-rail mt-3" />
                    <div className="locker-hook mx-auto" />

                    <div className="locker-photo relative mt-4 aspect-[4/3] w-full overflow-hidden border border-white/10 bg-black/50">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          sizes="(max-width: 767px) 100vw, 20vw"
                          className="object-cover"
                        />
                      ) : (
                        <span className="grid h-full place-items-center px-3 text-center text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-bone/35">
                          {project.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 font-display text-[0.95rem] font-black uppercase leading-tight tracking-[0.01em]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-bone/45">
                      {project.status}
                    </p>

                    <p className="mt-3 text-[0.78rem] leading-5 text-bone/65">
                      {project.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.points.map((point) => (
                        <span
                          key={point}
                          className="border border-bone/20 px-2 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-bone/55"
                        >
                          {point}
                        </span>
                      ))}
                    </div>

                    <span className="mt-auto flex items-center gap-2 pt-6 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-bone/70 transition-colors duration-300 group-hover:text-rossoneri">
                      Lihat project
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="locker-floor text-ink/85" />
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
