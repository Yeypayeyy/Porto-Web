import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const contactLinks = [
  {
    label: "Email",
    value: "farrel.ag20@gmail.com",
    href: "mailto:farrel.ag20@gmail.com",
  },
  { label: "GitHub", value: "Yeypayeyy", href: "https://github.com/Yeypayeyy" },
  {
    label: "LinkedIn",
    value: "farrel-ag",
    href: "https://www.linkedin.com/in/farrel-ag",
  },
  {
    label: "Instagram",
    value: "@frlagee",
    href: "https://www.instagram.com/frlagee",
  },
];

export function Footer() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bone px-6 py-16 text-ink md:px-12 md:py-20"
    >
      {/* Red jersey-wing geometry with gold champion trim (desktop margins only) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M1440 0 L1230 0 C 1430 300 1430 600 1210 900 L1440 900 Z"
          fill="var(--rossoneri)"
          opacity="0.9"
        />
        <path
          d="M1200 0 C 1400 300 1400 600 1180 900"
          stroke="var(--gold)"
          strokeWidth="2.5"
          opacity="0.8"
        />
        <path
          d="M0 900 L0 690 C 120 750 150 860 60 900 Z"
          fill="var(--rossoneri)"
          opacity="0.9"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[80rem]">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="max-w-xl">
            <Reveal className="mb-5 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Get in touch
            </Reveal>
            <TextReveal
              as="h2"
              className="font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-black uppercase leading-[0.95] tracking-[-0.03em]"
            >
              <span className="block overflow-hidden pb-[0.1em]">
                <span data-line className="block">Let&apos;s build</span>
              </span>
              <span className="block overflow-hidden pb-[0.1em]">
                <span data-line className="block">something</span>
              </span>
              <span className="block overflow-hidden pb-[0.1em]">
                <span data-line className="block text-rossoneri">useful.</span>
              </span>
            </TextReveal>
            <Reveal
              className="mt-6 max-w-md text-sm leading-7 text-ink/60 md:text-base"
              delay={0.1}
            >
              <p>
                Punya ide project, kolaborasi, atau sekadar mau ngobrol soal web,
                backend, dan Web3? Ayo mulai percakapan.
              </p>
            </Reveal>
            <Reveal className="mt-7" delay={0.15}>
              <MagneticButton>
                <Link
                  href="mailto:farrel.ag20@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:bg-rossoneri"
                >
                  Send email
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              </MagneticButton>
            </Reveal>
          </div>

          <Reveal stagger className="flex flex-col">
            {contactLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between gap-6 border-b border-ink/12 py-4 transition-colors duration-300 hover:bg-ink/[0.03]"
              >
                <span className="min-w-0">
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/45">
                    {item.label}
                  </span>
                  <span className="mt-1 block truncate font-display text-lg font-black uppercase tracking-[-0.01em] transition-colors duration-300 group-hover:text-rossoneri md:text-xl">
                    {item.value}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-ink/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-rossoneri"
                  aria-hidden="true"
                />
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
