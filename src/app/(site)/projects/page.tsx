import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

function ArrowUpRight() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bone">
      <Header dark />
      {/* The black page body is its own panel so its rounded bottom can sit
         over the footer. main carries bone underneath, otherwise the corners
         would reveal black on black and the seam would not read. */}
      <div className="relative z-10 rounded-b-[2rem] bg-ink text-bone shadow-[0_32px_60px_-30px_rgba(0,0,0,0.45)] md:rounded-b-[3rem]">
      <section className="px-6 pb-24 sm:px-10">
        <h1 className="pt-24 text-5xl font-extrabold uppercase leading-[0.9] tracking-tighter text-bone/80 sm:pt-32 sm:text-7xl lg:text-8xl">
          Projects
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.slug}>
              <Link className="group block" href={`/projects/${project.slug}`}>
                <div className="overflow-hidden rounded-xl bg-ink-soft">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      preload={index === 0}
                      className="aspect-[16/10] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="project-preview-grid flex aspect-[16/10] w-full items-center justify-center p-6 text-center text-3xl font-black text-white/20"
                    >
                      {project.title}
                    </div>
                  )}
                </div>
                <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-bone sm:text-5xl">
                  {project.title}
                </h2>
                {project.tag === "On Progress" ? (
                  <span className="mt-3 inline-block rounded-full border border-gold/50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">
                    On Progress
                  </span>
                ) : null}
              </Link>
              <p className="mt-2 text-lg leading-snug text-bone/60 sm:text-xl">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-rossoneri"
                  >
                    <span className="hero-link-underline">Live Demo</span>
                    <ArrowUpRight />
                  </a>
                ) : null}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-lg text-bone"
                >
                  <span className="hero-link-underline">View project</span>
                  <ArrowUpRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>
      <Footer overlap />
    </main>
  );
}
