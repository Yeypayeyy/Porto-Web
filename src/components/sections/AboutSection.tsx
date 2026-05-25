import Link from "next/link";
import { skills } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(244,246,240,0.62)_0%,rgba(183,220,215,0.42)_22%,transparent_38%),radial-gradient(circle_at_82%_78%,rgba(115,191,63,0.58)_0%,rgba(115,191,63,0.32)_30%,transparent_54%),linear-gradient(135deg,#b7dcd7_0%,#66c3d4_52%,#a5dca1_100%)] px-5 py-14 md:px-8"
    >
      <div className="drift-soft absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-[#73bf3f]/20 blur-2xl" />
      <div className="absolute right-8 top-8 rounded-full bg-[#73bf3f] px-4 py-2 text-xs font-semibold text-[#121513]">
        still learning
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 border-t border-[#73bf3f]/50 pt-10 md:grid-cols-[0.55fr_1fr]">
        <div>
          <p className="text-sm font-semibold text-[#73bf3f]">About</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#121513] md:text-4xl">
            Short profile
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-base leading-8 text-[#24282b]">
            I am focused on learning by doing: leading student teams,
            coordinating events, building partnerships, and improving practical
            workflows.
          </p>
          <div id="stack" className="mt-6 flex scroll-mt-28 flex-wrap gap-2">
            {skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="transition-colors rounded-full border border-[#121513]/15 px-3 py-1 text-xs font-semibold text-[#24282b] hover:border-[#73bf3f] hover:bg-[#73bf3f]/15"
              >
                {skill}
              </span>
            ))}
          </div>
          <Link
            className="fun-link mt-7 inline-flex text-sm font-semibold text-[#121513]"
            href="/about"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
