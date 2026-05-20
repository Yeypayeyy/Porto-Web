import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#121513] px-5 py-12 text-[#aeb5ae] md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-[#73bf3f]/30 pt-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-[#f4f6f0]">Muhammad Farrel Al Ghazy</p>
        <div className="flex flex-wrap gap-5">
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/about">About</Link>
          <a
            href="https://www.linkedin.com/in/farrel-ag"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
