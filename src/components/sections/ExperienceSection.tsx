import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollFillText } from "@/components/motion/ScrollFillText";

const stripPhotos = [
  "/Experience/gallery-1.jpeg",
  "/Experience/gallery-2.jpeg",
  "/Experience/gallery-3.jpeg",
  "/Experience/gallery-4.jpeg",
  "/Experience/gallery-5.jpeg",
  "/Experience/gallery-6.jpeg",
  "/Experience/Hero.webp",
  "/Experience/gallery-7.jpeg",
];

const signals = ["Kepanitiaan", "Organisasi", "Leadership", "Event Ops"];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0a0a0a] py-24 text-bone md:py-32"
    >
      <div className="mx-auto max-w-[94rem] px-6 md:px-12">
        <Reveal className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-bone/45">
          <span className="h-px w-10 bg-rossoneri" />
          Experience
        </Reveal>

        <ScrollFillText
          as="p"
          className="mt-10 max-w-5xl text-[clamp(1.5rem,3.4vw,2.9rem)] font-semibold leading-[1.28] tracking-[-0.01em] text-bone"
          text="Di sela bangku kuliah, aku menemukan banyak ruang untuk bertumbuh — lewat kepanitiaan, organisasi, rapat panjang, hari-H yang ramai, dan orang-orang yang berjalan bersama."
        />

        <Reveal
          className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between"
          delay={0.1}
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-bone/45">
            {signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
          <Link
            href="/experience"
            className="group inline-flex items-center gap-3 rounded-full border border-bone/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:bg-bone hover:text-ink"
          >
            Lihat cerita lengkap
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </Reveal>
      </div>

      {/* Photo strip */}
      <div className="mt-16 overflow-hidden md:mt-20">
        <div className="hero-marquee flex w-max gap-4">
          {[...stripPhotos, ...stripPhotos].map((src, i) => (
            <span
              key={i}
              className="relative h-44 w-64 shrink-0 overflow-hidden bg-white/5 md:h-56 md:w-80"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="320px"
                className="object-cover grayscale transition duration-500 hover:grayscale-0"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
