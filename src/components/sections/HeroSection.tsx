import Link from "next/link";
import Image from "next/image";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const socialLinks = [
  { label: "Email", href: "mailto:farrel.ag20@gmail.com" },
  { label: "GitHub", href: "https://github.com/Yeypayeyy" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farrel-ag" },
  { label: "Instagram", href: "https://www.instagram.com/frlagee" },
];

const currentRoles = [
  { role: "Chairman", org: "KMTETI FT UGM" },
  { role: "Partnerships Manager", org: "UGM Blockchain Club" },
  { role: "Fullstack Developer", org: "Campus & Freelance Projects" },
];

const marquee = [
  "Fullstack",
  "Backend",
  "Next.js",
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
      <div className="relative z-10 mx-auto grid w-full max-w-[94rem] flex-1 items-center gap-8 px-6 pb-6 pt-24 md:px-12 md:pt-28 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
        <div>
        <TextReveal
          as="h1"
          immediate
          className="max-w-5xl font-display text-[clamp(2.1rem,4.6vw,3.9rem)] font-black uppercase leading-[0.95] tracking-[-0.03em]"
        >
          <span className="block overflow-hidden pb-[0.12em] pt-[0.04em]">
            <span data-line className="block">Building web systems,</span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] pt-[0.04em]">
            <span data-line className="block text-rossoneri">leading teams,</span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] pt-[0.04em]">
            {/* ink/50 is the floor that still clears 3:1 for large text. */}
            <span data-line className="block text-ink/50">shipping the rest.</span>
          </span>
        </TextReveal>

        <Reveal
          immediate
          className="mt-7 max-w-[38rem] text-base leading-relaxed text-ink/75"
          delay={0.14}
        >
          <strong className="font-semibold text-ink">
            Muhammad Farrel Al Ghazy
          </strong>
          , Information Engineering at UGM. Fullstack developer with a backend
          bias — Next.js, TypeScript, Payload, Postgres — with a healthy
          curiosity for Web3. Away from the editor I run organizations and
          events: leading KMTETI, opening partnerships, and handling the
          logistics behind campus-scale programs.
        </Reveal>

        {/* Jersey seam: a stitched red rule instead of a neutral divider. */}
        <Reveal
          immediate
          className="mt-8 flex max-w-[42rem] flex-wrap items-baseline gap-x-7 gap-y-2 border-t border-dashed border-rossoneri/45 pt-5 text-[0.95rem]"
          delay={0.18}
        >
          {currentRoles.map((item) => (
            <span key={item.org} className="flex items-baseline gap-2">
              <span className="font-semibold text-ink">{item.role}</span>
              <span className="text-ink/70">{item.org}</span>
            </span>
          ))}
        </Reveal>

        <Reveal
          immediate
          className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
          delay={0.22}
        >
          <MagneticButton className="w-full sm:w-auto">
            <Link
              href="/projects"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-rossoneri px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-rossoneri-deep sm:w-auto"
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

          <div className="flex flex-wrap items-center gap-5 text-[0.95rem] font-medium text-ink/70">
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

        {/* Pixel-art poses, each its own 512x1024 file (cropped from the sheet
            with sharp) so they render at native resolution. Boxes are bound by
            height so a pose never outgrows the viewport; the 1:2 aspect derives
            the width from that height. */}
        <Reveal
          immediate
          delay={0.26}
          className="order-first flex items-end justify-center self-end lg:order-none lg:justify-end"
        >
          <div className="relative z-0 -mr-14 mb-0 hidden aspect-[1/2] h-[min(28vh,15rem)] sm:block lg:h-[min(38vh,21rem)]">
            <Image
              src="/images/char-almet-coffee.png"
              alt=""
              fill
              sizes="15rem"
              className="object-contain [image-rendering:pixelated] [mask-image:linear-gradient(to_bottom,#000_84%,transparent_99%)]"
            />
          </div>

          <div className="relative z-10 aspect-[1/2] h-[min(34vh,17rem)] sm:h-[min(42vh,23rem)] lg:h-[min(50vh,29rem)]">
            {/* Disc behind the character so the cut-out reads as a portrait. */}
            <div className="absolute inset-x-[-22%] bottom-0 -z-10 aspect-square rounded-full bg-rossoneri/[0.07]" />
            <Image
              src="/images/char-almet-peace.png"
              alt="Pixel-art illustration of Farrel in a UGM blazer"
              fill
              priority
              sizes="(min-width: 1024px) 17rem, 12rem"
              className="object-contain [image-rendering:pixelated] [mask-image:linear-gradient(to_bottom,#000_84%,transparent_99%)]"
            />
          </div>
        </Reveal>
      </div>

      {/* Bottom marquee — the black structural block that closes the fold. */}
      <div className="relative z-10 mt-6 overflow-hidden bg-ink py-4">
        <div className="hero-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {[...marquee, ...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-2xl font-black uppercase tracking-[-0.01em] text-off-white md:text-3xl"
            >
              {item}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
