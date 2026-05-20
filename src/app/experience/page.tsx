import Link from "next/link";
import { experiences } from "@/data/portfolio";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#121513] text-[#f4f6f0]">
      <Header />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link className="text-sm font-semibold text-[#b7dcd7] underline" href="/">
            Back to home
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold text-[#a8db4f]">
              Experience
            </p>
            <h1 className="mt-3 text-5xl font-semibold leading-tight md:text-7xl">
              Roles and responsibilities
            </h1>
            <p className="mt-5 text-base leading-8 text-[#dce3dd]">
              A detailed view of my organization, partnership, logistics, and
              event operations experience.
            </p>
          </div>

          <div className="mt-12 grid gap-4">
            {experiences.map((item) => (
              <article
                key={`${item.organization}-${item.role}`}
                className="grid gap-4 rounded-[8px] bg-[#24282b] p-6 ring-1 ring-white/10 md:grid-cols-[0.6fr_1fr_1.4fr]"
              >
                <div>
                  <span className="rounded-full border border-[#73bf3f]/40 px-3 py-1 text-[11px] font-semibold text-[#a8db4f]">
                    {item.accent}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{item.organization}</h2>
                  <p className="mt-2 text-sm font-semibold text-[#dce3dd]">
                    {item.role}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#aeb5ae]">
                    {item.period} / {item.location}
                  </p>
                </div>
                <p className="text-sm leading-7 text-[#cbd4cd]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
