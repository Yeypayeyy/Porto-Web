import Link from "next/link";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Yeypayeyy" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farrel-ag" },
  { label: "Instagram", href: "https://www.instagram.com/frlagee" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-6 py-16 text-bone md:px-12 md:py-20">
      <div className="mx-auto max-w-[94rem]">
        <a
          href="mailto:farrel.ag20@gmail.com"
          className="group block border-b border-bone/15 pb-12"
        >
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-bone/45">
            Have a project in mind?
          </span>
          <span className="mt-4 flex flex-wrap items-center gap-4 font-display text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-none tracking-[-0.03em]">
            Let&apos;s talk
            <span className="text-rossoneri transition-transform duration-300 group-hover:translate-x-2">
              ↗
            </span>
          </span>
        </a>

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-black uppercase tracking-[-0.02em]">
              FrlAgee<span className="text-rossoneri">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-bone/50">
              Muhammad Farrel Al Ghazy — Information Engineering, Universitas
              Gadjah Mada.
            </p>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-3" aria-label="Footer">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-bone/40">
                Menu
              </span>
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hero-link-underline w-fit text-sm font-semibold text-bone/70 transition-colors hover:text-bone"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-bone/40">
                Social
              </span>
              {socials.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-link-underline w-fit text-sm font-semibold text-bone/70 transition-colors hover:text-bone"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-14 text-xs uppercase tracking-[0.14em] text-bone/35">
          © {new Date().getFullYear()} Muhammad Farrel Al Ghazy
        </p>
      </div>
    </footer>
  );
}
