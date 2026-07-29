import Image from "next/image";
import Link from "next/link";
import { experiences, skills } from "@/data/portfolio";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { JerseySeam } from "@/components/site/jersey";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

export const metadata = {
  title: "About | Muhammad Farrel Al Ghazy",
  description:
    "Information Technology student at Universitas Gadjah Mada, fullstack developer, and organization lead — the full record.",
};

const facts = [
  {
    label: "Education",
    value: "Information Technology, Universitas Gadjah Mada",
  },
  { label: "Based in", value: "Yogyakarta, Indonesia" },
  { label: "Currently", value: "Chairman at KMTETI FT UGM" },
  { label: "Also", value: "Partnerships Manager at UGM Blockchain Club" },
];

const practice = [
  {
    title: "Building",
    body: "Fullstack web work with a backend bias — Next.js and TypeScript on the front, Payload and Postgres behind it. I care about systems that stay maintainable after launch, not demos that look good once.",
    proof: "Portfolio system · KMTETI website · Campaign web",
  },
  {
    title: "Leading",
    body: "Chairman of KMTETI FT UGM and former Vice Chairman of JAWARAGAMA. The work is aligning divisions, giving members room to grow, and setting priorities the organization can actually carry.",
    proof: "KMTETI FT UGM · JAWARAGAMA",
  },
  {
    title: "Connecting",
    body: "Partnerships for UGM Blockchain Club, liaison for Teknik Fair, logistics and equipment for campus-scale events. Operations nobody notices when they go right.",
    proof: "UGM Blockchain Club · Technocorner · Teknik Fair · Find IT! UGM",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Payload CMS",
  "PostgreSQL",
  "GSAP",
  "Vercel",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bone text-ink">
      <Header />

      <section className="px-6 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[80rem]">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
            <div>
              <TextReveal
                as="h1"
                immediate
                className="font-display text-[clamp(2.2rem,5vw,4rem)] font-black uppercase leading-[0.92] tracking-[-0.035em]"
              >
                <span className="block overflow-hidden pb-[0.1em] pt-[0.04em]">
                  <span data-line className="block">
                    Muhammad Farrel
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.12em] pt-[0.04em]">
                  <span data-line className="block text-rossoneri">
                    Al Ghazy.
                  </span>
                </span>
              </TextReveal>

              <Reveal
                immediate
                className="mt-7 max-w-[40rem] text-base leading-[1.85] text-ink/75 md:text-lg"
                delay={0.1}
              >
                I started out curious about how things are put together and
                ended up doing two things at once: writing the systems, and
                running the teams that ship them. Most weeks that means a pull
                request in the morning and a division meeting at night — and I
                have stopped treating those as separate skills.
              </Reveal>
            </div>

            <Reveal
              immediate
              delay={0.18}
              className="relative flex justify-center lg:justify-end"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-[30%] -bottom-[12%] -top-[10%] -z-10"
                style={{
                  background:
                    "radial-gradient(closest-side at 50% 58%, color-mix(in oklab, var(--rossoneri) 14%, transparent), transparent 76%)",
                }}
              />
              <div className="relative aspect-[1/2] h-[min(32vh,16rem)] sm:h-[min(38vh,19rem)] lg:h-[min(44vh,23rem)]">
                <Image
                  src="/images/char-kmteti-side.png"
                  alt="Pixel-art illustration of Farrel in a navy KMTETI jacket"
                  fill
                  priority
                  sizes="(min-width: 1024px) 12rem, 9rem"
                  className="object-contain [image-rendering:pixelated] [mask-image:linear-gradient(to_bottom,#000_86%,transparent_99%)]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal
            stagger
            className="mt-14 grid gap-x-10 gap-y-7 border-t border-dashed border-rossoneri/45 pt-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ink/55">
                  {fact.label}
                </p>
                <p className="mt-2 text-[0.95rem] font-medium leading-snug text-ink">
                  {fact.value}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal stagger className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-14">
            {practice.map((item) => (
              <div key={item.title}>
                <span className="block h-[3px] w-12 bg-rossoneri" />
                <h2 className="mt-5 font-display text-2xl font-black uppercase tracking-[-0.01em] md:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-[0.95rem] leading-[1.75] text-ink/75">
                  {item.body}
                </p>
                <p className="mt-5 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink/55">
                  {item.proof}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <JerseySeam top="var(--bone)" bottom="var(--ink)" flip />

      {/* Full record, inverted so it reads as a distinct chapter. */}
      <section className="bg-ink px-6 py-20 text-off-white md:px-12 md:py-28">
        <div className="mx-auto max-w-[80rem]">
          <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-black uppercase leading-none tracking-[-0.03em]">
            Roles &amp; <span className="text-rossoneri">responsibilities.</span>
          </h2>

          <Reveal stagger className="mt-12 flex flex-col">
            {experiences.map((item) => (
              <div
                key={`${item.organization}-${item.role}`}
                className="grid gap-3 border-t border-white/12 py-7 md:grid-cols-[14rem_1fr] md:gap-10"
              >
                <div>
                  <p className="font-display text-lg font-black uppercase tracking-[-0.01em]">
                    {item.organization}
                  </p>
                  <p className="mt-1 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-off-white/55">
                    {item.period}
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold">{item.role}</p>
                  <p className="mt-2 max-w-[46rem] text-[0.95rem] leading-[1.75] text-off-white/70">
                    {item.description}
                  </p>
                  <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    {item.accent}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <JerseySeam top="var(--ink)" bottom="var(--bone)" />

      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[80rem] gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-black uppercase tracking-[-0.01em] md:text-3xl">
              Stack
            </h2>
            <p className="mt-5 text-[0.95rem] leading-[1.9] text-ink/75">
              {stack.join(" · ")}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-black uppercase tracking-[-0.01em] md:text-3xl">
              Beyond code
            </h2>
            <p className="mt-5 text-[0.95rem] leading-[1.9] text-ink/75">
              {skills.join(" · ")}
            </p>
            <Link
              href="/#about"
              className="hero-link-underline mt-8 inline-block text-[0.95rem] font-medium text-ink/70 transition-colors duration-200 hover:text-ink"
            >
              Back to home ↗
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
