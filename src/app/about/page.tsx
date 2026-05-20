import Link from "next/link";
import { skills } from "@/data/portfolio";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#121513] text-[#f4f6f0]">
      <Header />
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link className="text-sm font-semibold text-[#b7dcd7] underline" href="/">
            Back to home
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm font-semibold text-[#a8db4f]">About</p>
              <h1 className="mt-3 text-5xl font-semibold leading-tight md:text-7xl">
                Muhammad Farrel Al Ghazy
              </h1>
            </div>
            <div className="rounded-[8px] bg-[#f4f6f0] p-7 text-[#121513] ring-1 ring-white/10">
              <h2 className="text-3xl font-semibold">
                I connect teams, operations, and technology.
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#24282b]">
                I am an Information Engineering undergraduate student at
                Universitas Gadjah Mada. My profile sits between technical
                learning and people-facing execution: managing teams,
                coordinating events, building partnerships, and shaping
                practical systems that help groups move better.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[8px] bg-[#121513] p-5 text-white">
                  <p className="text-xs font-semibold uppercase text-[#a8db4f]">
                    Contact
                  </p>
                  <a
                    className="mt-3 block text-sm font-bold"
                    href="mailto:farrel.ag20@gmail.com"
                  >
                    farrel.ag20@gmail.com
                  </a>
                </div>
                <div className="rounded-[8px] bg-[#121513] p-5 text-white">
                  <p className="text-xs font-semibold uppercase text-[#a8db4f]">
                    Education
                  </p>
                  <p className="mt-3 text-sm font-bold">
                    UGM, Information Technology
                  </p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#121513]/15 px-3 py-1 text-xs font-semibold text-[#24282b]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
