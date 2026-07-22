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

export function AboutSection() {
  return (
    <section
      id="contact"
      className="relative bg-bone px-6 py-24 text-ink md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-[94rem] gap-14 border-t border-ink/15 pt-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div className="max-w-xl">
          <Reveal className="mb-6 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-ink/45">
            <span className="h-px w-10 bg-rossoneri" />
            Get in touch
          </Reveal>
          <TextReveal
            as="h2"
            className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-black uppercase leading-[0.98] tracking-[-0.03em]"
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
          <Reveal className="mt-8 max-w-md text-base leading-8 text-ink/60 md:text-lg" delay={0.1}>
            <p>
              Punya ide project, kolaborasi, atau sekadar mau ngobrol soal web,
              backend, dan Web3? Ayo mulai percakapan.
            </p>
          </Reveal>
          <Reveal className="mt-10" delay={0.15}>
            <MagneticButton>
              <Link
                href="mailto:farrel.ag20@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-5 text-sm font-bold uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:bg-rossoneri"
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
              className="group flex items-center justify-between gap-6 border-b border-ink/12 py-6 transition-colors duration-300 hover:bg-ink/[0.03]"
            >
              <span className="min-w-0">
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/45">
                  {item.label}
                </span>
                <span className="mt-1.5 block truncate font-display text-xl font-black uppercase tracking-[-0.01em] transition-colors duration-300 group-hover:text-rossoneri md:text-2xl">
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
    </section>
  );
}
