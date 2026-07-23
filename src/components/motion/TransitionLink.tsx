"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "./TransitionContext";
import type { ComponentProps, MouseEvent } from "react";

type LinkProps = ComponentProps<typeof Link>;

/**
 * Drop-in replacement for `next/link` that triggers the page-transition
 * curtain before navigating. Falls back to normal Link behaviour for:
 *   - External URLs
 *   - Anchor-only links (#)
 *   - Same-page links
 *   - Middle-click / cmd-click (open in new tab)
 */
export function TransitionLink({ href, onClick, children, ...rest }: LinkProps) {
  const { navigateWithTransition, phase } = useTransition();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call any existing onClick handler
    onClick?.(e);
    if (e.defaultPrevented) return;

    const resolved = typeof href === "string" ? href : href.pathname ?? "";

    // Let browser handle new-tab gestures
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    // Skip for external links
    if (resolved.startsWith("http") || resolved.startsWith("mailto:")) return;

    // Skip for anchor-only links (same page scroll)
    if (resolved.startsWith("#")) return;

    // Skip if it's just an anchor on the current page
    const [path, hash] = resolved.split("#");
    if ((path === "" || path === pathname) && hash) return;

    // Skip if already on this path (avoid no-op transition)
    if (path === pathname && !hash) return;

    // Already in a transition? Let it finish
    if (phase !== "idle") return;

    e.preventDefault();
    navigateWithTransition(resolved);
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
