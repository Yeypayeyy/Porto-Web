"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { index: "01", label: "About", href: "/about", match: "/about" },
  { index: "02", label: "Projects", href: "/#projects", match: "/projects" },
  {
    index: "03",
    label: "Experience",
    href: "/#experience",
    match: "/experience",
  },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (match: string) =>
    pathname === match || pathname.startsWith(`${match}/`);

  return (
    <motion.header
      className="site-header sticky top-0 z-50"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="site-header-panel">
        <nav
          className="site-header-nav mx-auto flex max-w-7xl items-center px-5 sm:px-6 md:px-10 lg:px-16"
          aria-label="Primary navigation"
        >
          <Link
            className="brand-mark group flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f9c157]"
            href="/"
            aria-label="FrlAgee â€” home"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="brand-monogram" aria-hidden="true">
              F
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="text-[1.08rem] font-extrabold text-[#f4f6f0] sm:text-[1.14rem]">
                FrlAgee
              </span>
              <span className="mt-1 hidden text-[0.64rem] font-medium text-[#8f9891] sm:block">
                Engineer Â· Organizer
              </span>
            </span>
          </Link>

          <div className="landing-header-nav ml-auto hidden h-full items-stretch md:flex">
            {navItems.map((item) => {
              const active = isActive(item.match);

              return (
                <Link
                  key={item.href}
                  className="header-nav-link"
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  data-active={active || undefined}
                >
                  <span className="header-nav-index" aria-hidden="true">
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <a
            className="header-contact-link ml-auto hidden items-center gap-3 md:ml-5 md:inline-flex"
            href="mailto:farrel.ag20@gmail.com"
          >
            <span>Let&apos;s talk</span>
            <span className="header-contact-arrow" aria-hidden="true">
              â†—
            </span>
          </a>

          <button
            className="header-menu-button ml-auto inline-flex items-center gap-2 md:hidden"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
            <span className="header-menu-icon" data-open={isMenuOpen || undefined} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </nav>

        <AnimatePresence initial={false}>
          {isMenuOpen ? (
            <motion.div
              id="mobile-navigation"
              className="mobile-navigation md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="mx-auto max-w-7xl px-5 pb-6 pt-3 sm:px-6">
                <div className="mobile-navigation-list">
                  {navItems.map((item) => {
                    const active = isActive(item.match);

                    return (
                      <Link
                        key={item.href}
                        className="mobile-navigation-link"
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        data-active={active || undefined}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="header-nav-index" aria-hidden="true">
                          {item.index}
                        </span>
                        <span>{item.label}</span>
                        <span aria-hidden="true">â†—</span>
                      </Link>
                    );
                  })}
                </div>
                <a
                  className="mobile-contact-link"
                  href="mailto:farrel.ag20@gmail.com"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="header-contact-dot" aria-hidden="true" />
                  Available for a conversation
                  <span className="ml-auto" aria-hidden="true">
                    â†—
                  </span>
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

