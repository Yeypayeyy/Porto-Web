import Link from "next/link";

const navItems = [
  { label: "Project", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="site-header landing-header sticky top-0 z-50">
      <div className="site-header-panel bg-[#121513]/92 shadow-[0_18px_50px_rgba(0,0,0,0.26)] ring-1 ring-[#73bf3f]/20 backdrop-blur">
        <nav className="site-header-nav mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 text-sm font-semibold text-white md:px-16">
          <Link
            href="/"
            className="brand-mark landing-header-item group relative isolate flex min-w-0 items-center py-2"
            aria-label="Home"
          >
            <span className="brand-mark-shape" aria-hidden="true" />
            <span className="relative text-[1.65rem] font-extrabold leading-none text-[#f4f6f0] sm:text-[1.9rem]">
              FrlAgee
            </span>
          </Link>

          <div className="landing-header-nav hidden items-center gap-8 text-base md:flex lg:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="header-nav-link landing-header-item relative py-2 text-[#f4f6f0] transition hover:text-[#a8db4f]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            className="landing-header-item rounded-full bg-[#73bf3f] px-5 py-3 text-sm font-bold text-[#121513] shadow-[0_12px_30px_rgba(115,191,63,0.28)] ring-1 ring-[#a8db4f]/40 transition hover:bg-[#a8db4f] hover:shadow-[0_14px_34px_rgba(168,219,79,0.34)] sm:px-7 sm:text-base"
            href="mailto:farrel.ag20@gmail.com"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
