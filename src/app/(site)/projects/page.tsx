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
    <main className="min-h-screen bg-ink text-bone">
      <Header dark />
      <section className="px-6 pb-24 sm:px-10">
        <h1 className="pt-24 text-5xl font-extrabold uppercase leading-[0.9] tracking-tighter text-bone/80 sm:pt-32 sm:text-7xl lg:text-8xl">
          Projects
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug}>
              <Link className="group block" href={`/projects/${project.slug}`}>
                <div className="overflow-hidden rounded-xl bg-ink-soft">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="aspect-[4/3] w-full" />
                  )}
                </div>
                <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-bone sm:text-5xl">
                  {project.title}
                </h2>
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
      <Footer />
    </main>
  );
}
