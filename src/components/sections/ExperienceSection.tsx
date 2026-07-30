"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/components/motion/motion-config";

// Anchored from the left/right edge (not a % of full width) so cards sit in
// the gutter beside the fixed-width text column and never overlap it.
const photos = [
  { src: "/Experience/gallery-1.jpeg", side: "left", offset: "1.5rem", top: "22%", rotate: -8 },
  { src: "/Experience/gallery-2.jpeg", side: "left", offset: "3.5rem", top: "50%", rotate: 6 },
  { src: "/Experience/gallery-3.jpeg", side: "left", offset: "1.5rem", top: "80%", rotate: -5 },
  { src: "/Experience/gallery-5.jpeg", side: "right", offset: "1.5rem", top: "22%", rotate: 7 },
  { src: "/Experience/gallery-6.jpeg", side: "right", offset: "3.5rem", top: "50%", rotate: -6 },
  { src: "/Experience/Hero.webp", side: "right", offset: "1.5rem", top: "80%", rotate: 5 },
];

const statement =
  "Di sela kuliah, aku bertumbuh lewat kepanitiaan, organisasi, dan orang-orang yang berjalan bersama.";

const signals = ["Kepanitiaan", "Organisasi", "Leadership", "Event Ops"];

export function ExperienceSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    const spin = (i: number, target: HTMLElement) => Number(target.dataset.rotate);

    // No pinning on touch/small screens or under reduced motion: everything is
    // simply present, the scattered layout still reads as a collage. 1280px
    // is also the width where the gutter beside the text column comfortably
    // fits a card (see the `photos` comment above).
    if (prefersReducedMotion() || !window.matchMedia("(min-width: 1280px)").matches) {
      gsap.set(words, { opacity: 1 });
      gsap.set(cards, { opacity: 1, scale: 1, rotate: spin });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Cards pop in at their own scattered spot (scale + fade only) rather
      // than flying in from the centre — a centre-to-edge path would cross
      // straight over the text column mid-flight.
      gsap.set(cards, { scale: 0.6, rotate: 0, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=320%",
          pin: true,
          scrub: 0.6,
        },
      });

      // Stage 1 — the sentence fills in, word by word.
      tl.to(words, { opacity: 1, ease: "none", stagger: 0.4 });

      // Stage 2 — photos pop into their scattered spots, one at a time.
      tl.to(
        cards,
        {
          opacity: 1,
          scale: 1,
          rotate: spin,
          ease: "power2.out",
          stagger: 1.6, // > duration: one card lands before the next leaves
          duration: 1.4,
        },
        ">0.3",
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden bg-ink py-24 pt-28 text-bone lg:h-screen lg:py-0 lg:pt-28"
    >
      {photos.map((photo) => (
        <span
          key={photo.src}
          data-card
          data-rotate={photo.rotate}
          className="pointer-events-none absolute z-0 hidden h-28 w-44 -translate-y-1/2 overflow-hidden rounded-[1.75rem] [corner-shape:squircle] bg-white/5 opacity-0 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] xl:block"
          style={{
            [photo.side]: photo.offset,
            top: photo.top,
          }}
        >
          <Image
            src={photo.src}
            alt=""
            fill
            sizes="176px"
            className="object-cover"
          />
        </span>
      ))}

      <div className="relative z-[1] mx-auto max-w-3xl px-6 text-center md:px-12">
        <p className="font-display text-[clamp(2.4rem,6vw,5rem)] font-black uppercase leading-none tracking-[-0.02em] text-rossoneri">
          Experience
        </p>

        <p className="mt-10 text-[clamp(1.4rem,2.8vw,2.4rem)] font-semibold leading-[1.28] tracking-[-0.01em]">
          {statement.split(" ").map((word, i) => (
            <span key={i} data-word className="opacity-[0.18]">
              {word}{" "}
            </span>
          ))}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#c9a24b]">
          {signals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>

        <Link
          href="/experience"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-rossoneri px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:bg-rossoneri/85"
        >
          Lihat cerita lengkap
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
