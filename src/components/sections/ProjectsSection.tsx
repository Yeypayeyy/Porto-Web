import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/motion/Reveal";

const arrow = (
  <span
    aria-hidden="true"
    className="shrink-0 text-xl transition-transform duration-300 group-hover:translate-x-1"
  >
    →
  </span>
);

export function ProjectsSection() {
  const [lead, ...rest] = projects;

  return (
    <section
      id="projects"
      className="relative bg-ink px-6 py-20 text-bone md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[72rem]">
        <Reveal className="flex flex-wrap items-center justify-between gap-4 pb-8">
          <h2 className="font-display text-[clamp(1.6rem,4vw,3rem)] font-black uppercase leading-none tracking-[-0.03em] text-bone/85">
            Selected Work
            <span className="ml-2 align-top font-sans text-xs font-medium normal-case tracking-normal text-bone/45">
              (Projects)
            </span>
          </h2>
          <Link
            href="/projects"
            className="rounded-full border border-bone/15 px-5 py-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-rossoneri transition-colors hover:border-rossoneri hover:bg-rossoneri hover:text-bone"
          >
            See all ↗
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid gap-3 md:grid-cols-3 md:grid-rows-2">
            {lead && <ProjectCard project={lead} className="md:row-span-2" />}
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}

            <Link
              href="/projects"
              className="group flex min-h-[11rem] flex-col justify-end gap-6 rounded-[1.75rem] [corner-shape:squircle] bg-rossoneri p-6 text-bone md:col-span-2"
            >
              <span className="flex items-end justify-between gap-6">
                <span className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-black leading-[0.95] tracking-[-0.02em]">
                  Explore
                  <br />
                  All Projects
                </span>
                {arrow}
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  className = "",
}: {
  project: (typeof projects)[number];
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative flex min-h-[11rem] flex-col justify-between overflow-hidden rounded-[1.75rem] [corner-shape:squircle] bg-ink/60 p-5 ${className}`}
    >
      {project.image && (
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/40" />

      <span className="relative text-[0.6rem] font-bold uppercase tracking-[0.18em] text-bone/80">
        {project.status}
      </span>
      <span className="relative flex items-end justify-between gap-4">
        <span className="font-display text-[clamp(1.1rem,1.7vw,1.5rem)] font-black leading-tight tracking-[-0.02em]">
          {project.title}
        </span>
        {arrow}
      </span>
    </Link>
  );
}
