import Link from "next/link";
import Image from "next/image";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

/** Ordered left→right. The coffee pose is the tallest, so it anchors the group. */
const characterPoses = [
  {
    src: "/images/char-almet-peace.png",
    alt: "",
    size: "hidden sm:block sm:h-[min(34vh,17rem)] lg:h-[min(48vh,25rem,31vw)]",
    overlap: "-mr-7 lg:-mr-16",
    priority: false,
  },
  {
    src: "/images/char-almet-coffee.png",
    alt: "Pixel-art illustration of Farrel in a UGM almamater jacket, holding a coffee cup",
    size: "h-[min(38vh,19rem)] sm:h-[min(46vh,24rem)] lg:h-[min(62vh,33rem,40vw)]",
    overlap: "z-10 -mr-7 lg:-mr-16",
    priority: true,
  },
  {
    src: "/images/char-almet-think.png",
    alt: "",
    size: "h-[min(30vh,15rem)] sm:h-[min(38vh,19rem)] lg:h-[min(54vh,28rem,34vw)]",
    overlap: "",
    priority: false,
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-bone"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[94rem] flex-1 items-center gap-10 px-6 pb-6 pt-24 md:px-12 md:pt-28 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-10">
        {/* Sits just above the optical centre so the composition reads
            editorial rather than rigidly centred. */}
        <div className="lg:pb-8">
          <TextReveal
            as="h1"
            immediate
            className="font-display text-[clamp(3.5rem,9vw,8.5rem)] font-black uppercase leading-[0.86] tracking-[-0.045em]"
          >
            <span className="block w-max overflow-hidden pb-[0.12em] pt-[0.04em]">
              <span data-line className="block">
                Frlagee<span className="text-rossoneri">.</span>
              </span>
            </span>
          </TextReveal>

          <Reveal
            immediate
            className="mt-9 max-w-[35rem] text-base leading-[1.75] text-bone/75"
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
            className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-9"
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

        {/* Three almamater poses, bottom-aligned and staggered in height so the
            group reads as one lineup rather than three equal figures. Each box
            is bound by height, so they never outgrow the viewport or crowd the
            ticker. One diffuse glow sits behind the whole group. */}
        <Reveal
          immediate
          delay={0.26}
          className="relative order-first flex items-end justify-center self-end lg:order-none lg:justify-end"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-[28%] -bottom-[16%] -top-[14%] -z-10"
            style={{
              background:
                "radial-gradient(closest-side at 50% 58%, color-mix(in oklab, var(--rossoneri) 16%, transparent), transparent 76%)",
            }}
          />

          {characterPoses.map((pose) => (
            <div
              key={pose.src}
              className={`relative aspect-[1/2] ${pose.size} ${pose.overlap}`}
            >
              <Image
                src={pose.src}
                alt={pose.alt}
                fill
                priority={pose.priority}
                sizes="(min-width: 1024px) 15rem, 9rem"
                className="object-contain [image-rendering:pixelated] [mask-image:linear-gradient(to_bottom,#000_86%,transparent_99%)]"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
