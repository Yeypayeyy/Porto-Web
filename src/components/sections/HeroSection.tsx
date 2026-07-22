import Link from "next/link";
import Image from "next/image";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { MagneticButton } from "@/components/motion/MagneticButton";

const socialLinks = [
  { label: "Email", href: "mailto:farrel.ag20@gmail.com" },
  { label: "GitHub", href: "https://github.com/Yeypayeyy" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farrel-ag" },
  { label: "Instagram", href: "https://www.instagram.com/frlagee" },
];

const marquee = [
  "Fullstack",
  "Backend",
  "Web3",
  "Leadership",
  "Event Ops",
  "Partnerships",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-bone text-ink"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[94rem] flex-1 flex-col justify-center px-6 pb-8 pt-28 md:px-12 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.78fr] lg:gap-16">
          {/* Text */}
          <div className="order-2 max-w-2xl lg:order-1">
            <Reveal
              immediate
              className="mb-8 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-ink/45"
              delay={0.1}
            >
              <span className="h-px w-10 bg-rossoneri" />
              Information Engineering — UGM
            </Reveal>

            <TextReveal
              as="h1"
              immediate
              className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-black uppercase leading-[1.0] tracking-[-0.03em]"
            >
              <span className="block overflow-hidden pb-[0.12em] pt-[0.04em]">
                <span data-line className="block">Building web systems,</span>
              </span>
              <span className="block overflow-hidden pb-[0.12em] pt-[0.04em]">
                <span data-line className="block text-rossoneri">Web3 products</span>
              </span>
              <span className="block overflow-hidden pb-[0.12em] pt-[0.04em]">
                <span data-line className="block text-ink/25">&amp; campus teams.</span>
              </span>
            </TextReveal>

            <Reveal
              immediate
              className="mt-7 max-w-md text-base leading-7 text-ink/60 md:text-lg md:leading-8"
              delay={0.15}
            >
              <p>
                I connect engineering, Web3, partnerships, and event operations
                into products people use and teams people trust.
              </p>
            </Reveal>

            <Reveal
              immediate
              className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-9"
              delay={0.2}
            >
              <MagneticButton className="w-full sm:w-auto">
                <Link
                  href="/projects"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-ink px-9 py-5 text-sm font-bold uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-ink hover:text-bone sm:w-auto"
                >
                  See my work
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </Link>
              </MagneticButton>

              <div className="flex items-center gap-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink/50">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="hero-link-underline transition-colors duration-200 hover:text-ink"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal immediate className="relative order-1 lg:order-2" delay={0.1}>
            <div className="relative">
              <span
                className="absolute -left-14 top-6 hidden rotate-180 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-ink/40 [writing-mode:vertical-rl] lg:block"
                aria-hidden="true"
              >
                Portfolio — 2026
              </span>
              <div className="pointer-events-none absolute -right-3 -top-3 z-0 h-full w-full border border-rossoneri" />
              <Parallax
                as="div"
                amount={-40}
                className="relative z-10 h-[min(56vh,32rem)] w-full overflow-hidden bg-bone-soft"
              >
                <Image
                  src="/images/farrel-4.jpg"
                  alt="Muhammad Farrel Al Ghazy"
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover object-[center_18%] grayscale transition-[filter] duration-700 hover:grayscale-0"
                />
                <span className="absolute bottom-4 left-4 z-10 bg-ink px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-bone">
                  Farrel · FrlAgee
                </span>
              </Parallax>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-10 mt-12 overflow-hidden border-y border-ink/12 py-4">
        <div className="hero-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {[...marquee, ...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-2xl font-black uppercase tracking-[-0.01em] text-ink/85 md:text-3xl"
            >
              {item}
              <span className="text-rossoneri">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
