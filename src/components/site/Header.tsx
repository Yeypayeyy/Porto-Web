"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "/about", match: "/about" },
  { label: "Projects", href: "/projects", match: "/projects" },
  { label: "Experience", href: "/experience", match: "/experience" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (match: string) =>
    pathname === match || pathname.startsWith(`${match}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-ink/10 bg-bone/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-[4.6rem] max-w-[94rem] items-center justify-between px-6 md:px-12"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="text-lg font-black uppercase tracking-[-0.02em] text-ink transition-opacity hover:opacity-70"
            aria-label="FrlAgee — home"
            onClick={() => setIsMenuOpen(false)}
          >
            FrlAgee
            <span className="text-rossoneri">.</span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActive(item.match) || undefined}
                className="hero-link-underline text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink/60 transition-colors hover:text-ink data-[active]:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-ink hover:text-bone"
            >
              Let&apos;s talk
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center md:hidden"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-[2px] w-6 bg-ink transition-all duration-300 ${
                  isMenuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[2px] w-6 bg-ink transition-all duration-300 ${
                  isMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>

        <AnimatePresence initial={false}>
          {isMenuOpen ? (
            <motion.div
              id="mobile-navigation"
              className="overflow-hidden border-t border-ink/10 bg-bone md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="mx-auto flex max-w-[94rem] flex-col px-6 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="border-b border-ink/10 py-4 text-2xl font-black uppercase tracking-[-0.01em] text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-ink"
                >
                  Let&apos;s talk ↗
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
