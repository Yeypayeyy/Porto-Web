"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/components/motion/motion-config";

/** Scattered around the centre column, KMTETI-style. left/top = card centre. */
const photos = [
  { src: "/Experience/gallery-1.jpeg", left: "13%", top: "27%", rotate: -8 },
  { src: "/Experience/gallery-2.jpeg", left: "20%", top: "55%", rotate: 6 },
  { src: "/Experience/gallery-3.jpeg", left: "14%", top: "82%", rotate: -5 },
  { src: "/Experience/gallery-4.jpeg", left: "36%", top: "88%", rotate: 8 },
  { src: "/Experience/gallery-5.jpeg", left: "87%", top: "27%", rotate: 7 },
  { src: "/Experience/gallery-6.jpeg", left: "80%", top: "55%", rotate: -6 },
  { src: "/Experience/Hero.webp", left: "86%", top: "82%", rotate: 5 },
  { src: "/Experience/gallery-7.jpeg", left: "64%", top: "88%", rotate: -7 },
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
    // simply present, the scattered layout still reads as a collage.
    if (prefersReducedMotion() || !window.matchMedia("(min-width: 1024px)").matches) {
      gsap.set(words, { opacity: 1 });
      gsap.set(cards, { opacity: 1, scale: 1, rotate: spin });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Photos start stacked in the centre, small and invisible.
      const box = el.getBoundingClientRect();
      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        gsap.set(card, {
          x: box.left + box.width / 2 - (r.left + r.width / 2),
          y: box.top + box.height / 2 - (r.top + r.height / 2),
          scale: 0.6,
          rotate: 0,
          opacity: 0,
        });
      });

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

      // Stage 2 — photos fly out of the centre to their scattered spots.
      tl.to(
        cards,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
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
          className="pointer-events-none absolute z-0 hidden h-24 w-36 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.75rem] [corner-shape:squircle] bg-white/5 opacity-0 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] lg:block xl:h-32 xl:w-48"
          style={{ left: photo.left, top: photo.top }}
        >
          <Image
            src={photo.src}
            alt=""
            fill
            sizes="224px"
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

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-bone/45">
          {signals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>

        <Link
          href="/experience"
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-bone/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:bg-bone hover:text-ink"
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
