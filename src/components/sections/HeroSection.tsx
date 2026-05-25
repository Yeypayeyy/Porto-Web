import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:farrel.ag20@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.92.33 1.82.63 2.68a2 2 0 0 1-.45 2.11L8 9.8a16 16 0 0 0 6.2 6.2l1.29-1.29a2 2 0 0 1 2.11-.45c.86.3 1.76.51 2.68.63A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Yeypayeyy",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1.1-3.5c3.6-.4 7.4-1.8 7.4-8A6.2 6.2 0 0 0 19.6 2S18.1 1.6 15 3.7a15.7 15.7 0 0 0-8 0C3.9 1.6 2.4 2 2.4 2A6.2 6.2 0 0 0 .7 6.5c0 6.2 3.8 7.6 7.4 8A4.8 4.8 0 0 0 7 18v4" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/farrel-ag",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a4.8 4.8 0 0 1 2-3Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    ),
  },
  {
    label: "Web3 focus",
    href: "/#stack",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18V9" />
        <path d="M10.5 18V5" />
        <path d="M17 18v-7" />
        <path d="M22 18V3" />
      </svg>
    ),
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative -mt-2 overflow-hidden bg-[#050706] px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-20"
    >
      <Image
        src="/images/image 2.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-42"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(115,191,63,0.16),transparent_28rem),radial-gradient(circle_at_10%_82%,rgba(168,219,79,0.1),transparent_22rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050706_0%,rgba(5,7,6,0.88)_42%,rgba(5,7,6,0.66)_100%)]" />
      <div className="absolute inset-0 bg-[#73bf3f]/10 mix-blend-color" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(244,246,240,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(244,246,240,0.16)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,#73bf3f_36%,#a8db4f_62%,transparent)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-170px)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
        <div className="max-w-5xl">
          <p className="text-base font-medium text-[#f4f6f0] md:text-2xl">
            Get to know more about AGEK!
          </p>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[1.12] text-[#f4f6f0] md:text-7xl lg:text-[86px]">
            Fullstack Developer
            <span className="block">focused on</span>
            <span className="block text-[#a8db4f]">Web3 Experiences</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-[#dce3dd] md:text-2xl md:leading-10">
            Information Engineering student at Universitas Gadjah Mada building
            modern web apps, backend systems, and decentralized products that
            are useful, reliable, and ready to grow.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              className="inline-flex items-center gap-3 rounded-full bg-[#73bf3f] px-6 py-4 text-base font-black text-[#121513] shadow-[0_16px_34px_rgba(115,191,63,0.25)] ring-1 ring-[#a8db4f]/40 transition hover:bg-[#a8db4f] hover:shadow-[0_18px_40px_rgba(168,219,79,0.3)] md:px-8"
              href="/projects"
            >
              See My Projects
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
                aria-hidden="true"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </Link>

            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  className="hero-social-link"
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.icon}
                </a>
            ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 text-xs font-bold uppercase text-[#b7dcd7]">
            {["Fullstack", "Backend", "Web3", "Smart Systems"].map((item) => (
              <span
                key={item}
                className="border border-[#73bf3f]/25 bg-[#73bf3f]/8 px-4 py-2 text-[#dce3dd]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px] lg:mr-0">
          <div className="absolute -left-5 top-10 h-28 w-28 rounded-full bg-[#73bf3f]/25 blur-2xl" />
          <div className="absolute -right-7 bottom-8 h-32 w-32 rounded-full bg-[#a8db4f]/20 blur-2xl" />
          <div className="relative rotate-[-2deg] rounded-[18px] border border-[#73bf3f]/28 bg-[#f4f6f0]/5 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.34)]">
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border-[10px] border-[#73bf3f]/35" />
            <div className="absolute -bottom-5 left-8 h-3 w-28 rotate-[-8deg] rounded-full bg-[#a8db4f]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#121513]">
              <Image
                src="/images/farrel-4.jpg"
                alt="Muhammad Farrel Al Ghazy"
                fill
                priority
                sizes="(min-width: 1024px) 430px, calc(100vw - 40px)"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,6,0.02)_0%,rgba(5,7,6,0.22)_100%)]" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-full bg-[#050706]/70 px-4 py-3 text-xs font-bold text-[#f4f6f0] ring-1 ring-white/15 backdrop-blur">
                <span>portfolio 2026</span>
                <span className="rounded-full bg-[#73bf3f] px-3 py-1 text-[#121513]">
                  FG
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
