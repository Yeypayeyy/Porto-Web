import Link from "next/link";
import Image from "next/image";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

/* Capital "Experience" matches the folder on disk. Linux deploys are
   case-sensitive, so this path must not be lowercased. */
const GROUND = "/Experience/KMTETI.webp";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-0 flex min-h-[100svh] flex-col overflow-hidden bg-ink text-bone"
    >
      {/* The photograph is the floor of the hero: the claim and the evidence
          for it land at the same moment. Desaturated so the only real colour
          left on screen is the brand red. */}
      <Image
        src={GROUND}
        alt="KMTETI FT UGM committee on stage during a department event"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center [filter:grayscale(0.55)_contrast(1.05)]"
      />

      {/* Two scrims: one across, one up. The across pass keeps the copy side
          near solid ink for contrast, the up pass seats the section edge. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background: [
            "linear-gradient(100deg, rgba(10,10,10,0.94) 26%, rgba(10,10,10,0.58) 58%, rgba(10,10,10,0.8) 100%)",
            "linear-gradient(to top, rgba(10,10,10,0.95), transparent 46%)",
          ].join(","),
        }}
      />

      {/* About now rides 3rem (4rem from md) up over this edge, so the bottom
          padding at each width is the overlap plus room to spare. Without it the
          bone panel lands on the CTA row. */}
      <div className="relative z-10 mx-auto flex w-full max-w-[94rem] flex-1 flex-col px-6 pb-20 pt-24 md:px-12 md:pb-[6.5rem] md:pt-28 lg:pb-0">
        <div className="flex flex-1 flex-col justify-end lg:pb-[max(6.5rem,10vh)]">
          <TextReveal
            as="h1"
            immediate
            /* The clamp floor is itself a min(): below ~366px "FRLAGEE." at a
               fixed 3.2rem is wider than the padded viewport, which is what put
               a horizontal scroll in the section. 14vw takes over there and the
               word keeps fitting; at 360px and up nothing changes.
               -ml optically aligns the F's sidebearing to the text column. */
            className="font-display text-[clamp(min(3.2rem,14vw),7.4vw,7.5rem)] font-black uppercase leading-[0.84] tracking-[-0.05em] md:-ml-[0.055em]"
          >
            {/* w-max keeps the reveal mask from clipping the final glyph;
                max-w-full stops that same w-max from ever outgrowing the
                column, so the section has nothing to scroll. */}
            <span className="block w-max max-w-full overflow-hidden pb-[0.12em] pt-[0.04em]">
              <span data-line className="block">
                Frlagee<span className="text-rossoneri">.</span>
              </span>
            </span>
          </TextReveal>

          <Reveal
            immediate
            className="mt-6 max-w-[27rem] text-pretty text-base leading-[1.7] text-bone/75"
            delay={0.14}
          >
            <strong className="font-semibold text-bone">
              Hi! I&apos;m Muhammad Farrel Al Ghazy.
            </strong>{" "}
            Information Engineering student at Universitas Gadjah Mada. I build
            web systems and lead the teams that ship them.
          </Reveal>

          <Reveal
            immediate
            className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-9"
            delay={0.2}
          >
            <MagneticButton className="w-full sm:w-auto">
              <Link
                href="/projects"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-rossoneri px-9 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-rossoneri-deep sm:w-auto"
              >
                View my work
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

            <div className="flex items-center gap-7">
              <Link
                href="/cv"
                className="hero-link-underline text-[0.95rem] font-medium text-bone/70 transition-colors duration-200 hover:text-bone"
              >
                View CV ↗
              </Link>
              <a
                href="https://github.com/Yeypayeyy"
                target="_blank"
                rel="noreferrer"
                className="hero-link-underline text-[0.95rem] font-medium text-bone/70 transition-colors duration-200 hover:text-bone"
              >
                GitHub ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
