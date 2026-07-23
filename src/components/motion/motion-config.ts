/** Shared motion tokens so every animation feels like one system. */
export const EASE_OUT = "power3.out";
export const EASE_INOUT = "power2.inOut";

/** Signature reveal distance + duration used across sections. */
export const REVEAL = {
  y: 40,
  duration: 0.9,
  stagger: 0.09,
} as const;

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
