import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#121513] text-[#f4f6f0]">
      <Header />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#b7dcd7] underline"
            href="/projects"
          >
            Back to projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#73bf3f]/40 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#a8db4f]">
                  {project.tag}
                </span>
                <span className="text-sm font-semibold text-[#aeb5ae]">
                  {project.status}
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-medium leading-9 text-[#dce3dd] md:text-2xl md:leading-10">
                {project.summary}
              </p>
            </div>

            <aside className="h-fit rounded-[8px] bg-[#24282b] p-6 ring-1 ring-white/10">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#a8db4f]">
                Highlights
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full bg-white/8 px-3 py-2 text-xs font-semibold text-[#dce3dd]"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-12 overflow-hidden rounded-[12px] bg-[#050706] ring-1 ring-white/10">
            {project.image ? (
              <div className="relative min-h-[320px] md:min-h-[560px]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  priority
                  sizes="(min-width: 768px) 1100px, calc(100vw - 2.5rem)"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="project-preview-grid relative min-h-[320px]">
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 text-center text-4xl font-black leading-tight text-white/20 md:text-6xl">
                  {project.title}
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a8db4f]">
              Detail project
            </p>
            <div className="space-y-6 text-lg font-medium leading-9 text-[#dce3dd]">
              {project.detail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
