"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { prefersReducedMotion } from "@/components/motion/motion-config";

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
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const wordmark = wordmarkRef.current;
    if (!section || !content || !wordmark || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Pin the hero for one viewport of scroll: the section below stays
      // hidden until this scrubbed animation fully plays out, then it unpins.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=55%",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      // Signature: the giant brand wordmark shrinks + rises toward the nav
      // logo (top-left) as the hero scrolls away — the title "docks" into nav.
      tl.to(
        wordmark,
        {
          scale: 0.12,
          y: -window.innerHeight * 0.42,
          opacity: 0,
          ease: "none",
        },
        0,
      );

      // Content lifts + fades so the hero clears out before the next section.
      tl.to(content, { y: -80, opacity: 0, ease: "none" }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-bone text-ink"
    >
      {/* Giant brand wordmark that docks into the nav on scroll */}
      <div
        ref={wordmarkRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[16%] z-0 origin-top-left select-none px-6 md:px-12"
      >
        <span className="block font-display text-[22vw] font-black uppercase leading-none tracking-[-0.04em] text-rossoneri/[0.09]">
          FrlAgee
        </span>
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-[94rem] flex-1 flex-col justify-center px-6 pb-8 pt-28 md:px-12 md:pt-32"
      >
        <div>
          {/* Text */}
          <div className="max-w-5xl">
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
              className="font-display text-[clamp(2.2rem,5.4vw,4.6rem)] font-black uppercase leading-[0.95] tracking-[-0.03em]"
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
              className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-9"
              delay={0.15}
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
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
