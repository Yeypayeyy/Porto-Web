import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { AboutRedEdges } from "@/components/sections/AboutRedEdges";

const focusAreas = [
  "Software Development",
  "Team Leadership",
  "Event Operations",
];

/** One figure, not the hero's lineup — About is the quieter restatement, and a
 *  single pose keeps the eye on the copy. In the KMTETI jacket, not the
 *  almamater. */
const pose = {
  // `-solo`: the original export carries a slice of the neighbouring pose on
  // its left edge, which the lineup used to cover. Cropped at the transparent
  // gutter (columns 41–45 of 512).
  src: "/images/char-kmteti-arms-solo.png",
  alt: "Pixel-art illustration of Farrel in a navy KMTETI jacket, arms crossed",
  size: "h-[min(24vh,13rem)] sm:h-[min(26vh,15rem)] lg:h-[min(28vh,20rem)]",
};

/**
 * Overview only — enough to place the person, then hand off to /about for the
 * full record (education, roles, proof, toolkit).
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center overflow-hidden bg-bone px-6 py-20 text-ink md:min-h-[calc(100vh-4.6rem)] md:px-12 md:py-12"
    >
      <AboutRedEdges />

      <div className="relative mx-auto flex max-w-[64rem] flex-col items-center text-center">
        <Reveal className="relative mb-5 flex items-end justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-[22%] -bottom-[12%] -top-[10%] -z-10"
            style={{
              background:
                "radial-gradient(closest-side at 50% 58%, color-mix(in oklab, var(--rossoneri) 15%, transparent), transparent 76%)",
            }}
          />
          <div className={`relative aspect-[1/2] ${pose.size}`}>
            <Image
              src={pose.src}
              alt={pose.alt}
              fill
              sizes="(min-width: 1024px) 11rem, 8rem"
              className="object-contain [image-rendering:pixelated] [mask-image:linear-gradient(to_bottom,#000_86%,transparent_99%)]"
            />
          </div>
        </Reveal>

        <div className="flex w-full items-center gap-6">
          <span aria-hidden="true" className="h-px flex-1 bg-ink/15" />
          <TextReveal
            as="h2"
            className="font-display text-[clamp(1.9rem,4vw,3.1rem)] font-black uppercase leading-none tracking-[-0.035em]"
          >
            <span className="block overflow-hidden pb-[0.12em] pt-[0.04em]">
              <span data-line className="block">
                About <span className="text-rossoneri">me.</span>
              </span>
            </span>
          </TextReveal>
          <span aria-hidden="true" className="h-px flex-1 bg-ink/15" />
        </div>

        <Reveal
          className="mt-5 max-w-[46rem] text-base leading-[1.8] text-ink/75 md:text-lg"
          delay={0.1}
        >
          I&apos;m an{" "}
          <strong className="font-semibold text-ink">
            IT student and fullstack developer
          </strong>{" "}
          working across{" "}
          <span className="font-medium text-rossoneri">web development</span>,{" "}
          <span className="font-medium text-rossoneri">team leadership</span>,
          and{" "}
          <span className="font-medium text-rossoneri">event operations</span>.
          I build systems that stay maintainable after launch — and lead the
          teams that ship them.
        </Reveal>

        <Reveal
          stagger
          className="mt-6 flex flex-wrap justify-center gap-3"
          delay={0.16}
        >
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-ink/15 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink/80"
            >
              {area}
            </span>
          ))}
        </Reveal>

        <Reveal className="mt-6" delay={0.22}>
          <Link
            href="/about"
            className="hero-link-underline text-[0.95rem] font-medium text-ink/70 transition-colors duration-200 hover:text-ink"
          >
            More about me ↗
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
