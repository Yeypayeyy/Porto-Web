import Image from "next/image";
import { skillGroups } from "@/data/portfolio";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

export const metadata = {
  title: "About | Muhammad Farrel Al Ghazy",
  description:
    "Information Engineering student at Universitas Gadjah Mada, fullstack developer, and Chairman of KMTETI FT UGM.",
};

const focusAreas = [
  {
    title: "Fullstack Web",
    body: "Next.js apps with a CMS or database behind them, built to be maintained after launch.",
  },
  {
    title: "Backend & Data",
    body: "APIs, PostgreSQL schemas, and services that turn messy input into reliable records.",
  },
  {
    title: "Desktop & Mobile",
    body: "C# WPF desktop tools and Android companions when the web is not the right place.",
  },
  {
    title: "Leadership & Event Ops",
    body: "Leading a 250+ member organization and running logistics for campus-scale events.",
  },
];

const education = [
  {
    school: "Universitas Gadjah Mada",
    program: "Information Engineering",
    period: "2024 to 2028 (expected)",
  },
];

const sectionTitle =
  "text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ink/55";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bone-soft">
      <Header />

      {/* Bone panel over bone-soft: this seam is white on white, so the
         shadow and the slightly darker ground behind the corners are the
         only things that make the overlap read at all. */}
      <div className="relative z-10 rounded-b-[2rem] bg-bone text-ink shadow-[0_32px_60px_-30px_rgba(0,0,0,0.35)] md:rounded-b-[3rem]">
      <section className="px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-[48rem]">
          <div className="flex items-end justify-between gap-6">
            <TextReveal
              as="h1"
              immediate
              className="font-display text-[clamp(2.4rem,6vw,4.2rem)] font-black uppercase leading-[0.92] tracking-[-0.035em]"
            >
              <span className="block overflow-hidden pb-[0.12em] pt-[0.04em]">
                <span data-line className="block">
                  About<span className="text-rossoneri">.</span>
                </span>
              </span>
            </TextReveal>
            <div className="relative aspect-[1/2] h-28 shrink-0 md:h-36">
              <Image
                src="/images/char-kmteti-side.png"
                alt="Pixel-art illustration of Farrel in a navy KMTETI jacket"
                fill
                preload
                sizes="5rem"
                className="object-contain [image-rendering:pixelated]"
              />
            </div>
          </div>

          <Reveal
            immediate
            delay={0.1}
            className="mt-8 space-y-5 border-t border-ink/10 pt-8 text-base leading-[1.85] text-ink/75 md:text-lg"
          >
            <p>
              I&apos;m Muhammad Farrel Al Ghazy (Farrel), an Information
              Engineering student at Universitas Gadjah Mada and a fullstack
              developer. I currently lead KMTETI FT UGM as Chairman, an
              organization of 250+ members, and manage partnerships at UGM
              Blockchain Club.
            </p>
            <p>
              What ties the two together is shipping things people actually
              use. On the code side that means web systems with Next.js,
              TypeScript, and PostgreSQL, plus desktop and mobile tools when a
              project needs them. On the organization side it means aligning
              teams, running events, and making sure the plan survives contact
              with real schedules.
            </p>
          </Reveal>

          <div className="mt-16">
            <h2 className={sectionTitle}>What I work on</h2>
            <Reveal stagger className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div key={area.title}>
                  <h3 className="font-display text-xl font-black uppercase tracking-[-0.01em]">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-[1.7] text-ink/70">
                    {area.body}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="mt-16">
            <h2 className={sectionTitle}>Technical skills</h2>
            <Reveal stagger className="mt-6 flex flex-col">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-2 border-t border-ink/10 py-5 sm:grid-cols-[9rem_1fr] sm:gap-8"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
                    {group.label}
                  </p>
                  <p className="text-[0.95rem] leading-[1.7] text-ink/70">
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="mt-16">
            <h2 className={sectionTitle}>Education</h2>
            <div className="mt-6 flex flex-col">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-ink/10 py-5"
                >
                  <div>
                    <p className="font-display text-lg font-black uppercase tracking-[-0.01em]">
                      {item.school}
                    </p>
                    <p className="mt-1 text-[0.95rem] text-ink/70">{item.program}</p>
                  </div>
                  <p className="text-sm font-medium text-ink/55">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      </div>
      <Footer overlap />
    </main>
  );
}
