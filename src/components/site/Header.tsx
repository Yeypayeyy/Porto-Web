import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-2 pt-2">
      <div className="overflow-hidden rounded-[22px] bg-[#565854]/95 shadow-[0_18px_50px_rgba(0,0,0,0.28)] ring-1 ring-white/10 backdrop-blur">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 text-sm font-semibold text-white md:px-16">
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <span className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-[#73bf3f]">
              <span className="absolute h-24 w-7 rotate-[70deg] rounded-full bg-[#565854]/60" />
              <span className="absolute h-20 w-7 translate-y-3 rotate-[70deg] rounded-full bg-[#565854]/55" />
              <span className="absolute h-20 w-7 -translate-y-4 rotate-[70deg] rounded-full bg-[#565854]/50" />
            </span>
            <span className="hidden text-base sm:inline">Farrel</span>
          </Link>

          <div className="hidden items-center gap-10 text-lg md:flex">
            <Link className="transition hover:text-[#a8db4f]" href="/about">
              About
            </Link>
            <Link className="transition hover:text-[#a8db4f]" href="/projects">
              Projects
            </Link>
            <Link
              className="transition hover:text-[#a8db4f]"
              href="/experience"
            >
              Experience
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-[14px] border border-[#73bf3f] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#73bf3f]/15 sm:inline-flex"
              href="mailto:farrel.ag20@gmail.com"
            >
              Contact
              <span className="ml-2" aria-hidden="true">
                -&gt;
              </span>
            </a>
            <Link
              className="rounded-[14px] bg-[#73bf3f] px-5 py-3 text-base font-semibold text-white shadow-[0_10px_24px_rgba(115,191,63,0.25)] transition hover:bg-[#a8db4f] hover:text-[#121513]"
              href="/projects"
            >
              View Work
              <span className="ml-2" aria-hidden="true">
                -&gt;
              </span>
            </Link>
          </div>
        </nav>

        <div className="relative flex h-14 items-center justify-center bg-[#73bf3f] px-12 text-center text-xl font-semibold text-[#121513] md:text-3xl">
          Available for projects and collaboration
          <span
            className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl font-light"
            aria-hidden="true"
          >
            x
          </span>
        </div>
      </div>
    </header>
  );
}
