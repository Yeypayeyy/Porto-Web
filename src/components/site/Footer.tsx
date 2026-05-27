import Link from "next/link";

export function Footer() {
  return (
    <footer className="landing-footer relative bg-[#121513] px-5 pb-12 pt-20 text-[#aeb5ae] md:px-8">
      <div className="absolute left-0 top-0 h-6 w-full bg-[#2f6b43]">
        <div className="project-stitch-line absolute inset-x-0 top-1/2 h-1 -translate-y-1/2" />
      </div>
      <div className="footer-reveal mx-auto flex max-w-6xl flex-col gap-6 border-t border-[#73bf3f]/30 pt-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="footer-item text-[#f4f6f0]">Muhammad Farrel Al Ghazy</p>
        <div className="flex flex-wrap gap-5">
          <Link className="footer-item" href="/projects">Projects</Link>
          <Link className="footer-item" href="/experience">Experience</Link>
          <Link className="footer-item" href="/#contact">Contact</Link>
          <a
            className="footer-item"
            href="https://www.linkedin.com/in/farrel-ag"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footer-item"
            href="https://www.instagram.com/frlagee"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
