import Link from "next/link";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  const highlightedExperience = experiences.slice(0, 3);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[linear-gradient(145deg,#24282b_0%,#202927_55%,#24323a_100%)] px-5 py-14 md:px-8"
    >
      <div className="pulse-ring absolute -left-12 bottom-8 h-32 w-32 rounded-full border-[12px] border-[#a8db4f]/20" />
      <div className="drift-soft absolute right-10 top-12 h-20 w-20 rounded-full bg-[#73bf3f]/10 blur-xl" />
      <div className="mx-auto max-w-6xl border-t border-[#73bf3f]/30 pt-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-[#a8db4f]">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f4f6f0] md:text-4xl">
              Recent roles
            </h2>
          </div>
          <Link
            className="fun-link text-sm font-semibold text-[#b7dcd7]"
            href="/experience"
          >
            See all
          </Link>
        </div>

        <div className="mt-8 grid gap-5">
          {highlightedExperience.map((item) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="lift-card grid gap-2 rounded-[8px] bg-[linear-gradient(90deg,rgba(255,255,255,0.035),rgba(102,195,212,0.035))] p-3 ring-1 ring-white/5 md:grid-cols-[1fr_1fr_auto]"
            >
              <h3 className="font-semibold text-[#f4f6f0]">
                {item.organization}
              </h3>
              <p className="text-[#dce3dd]">{item.role}</p>
              <p className="text-sm text-[#aeb5ae]">{item.period}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
