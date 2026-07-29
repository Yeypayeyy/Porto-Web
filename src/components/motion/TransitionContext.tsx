"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";

export type TransitionPhase = "idle" | "exit" | "enter";

interface TransitionContextValue {
  /** Current phase of the page transition. */
  phase: TransitionPhase;
  /** Trigger a page transition: plays exit curtain → navigates → plays enter curtain. */
  navigateWithTransition: (href: string) => void;
  /** Called by IntroAnimation when the exit curtain has fully covered the viewport. */
  onExitComplete: () => void;
  /** Called by IntroAnimation when the enter curtain has fully revealed the new page. */
  onEnterComplete: () => void;
  /** Whether the very first intro animation (session start) is still running. */
  isIntro: boolean;
  /** Mark the intro as complete. */
  completeIntro: () => void;
}

const Ctx = createContext<TransitionContextValue | null>(null);

export function useTransition() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTransition must be used within TransitionProvider");
  return ctx;
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const pendingHref = useRef<string | null>(null);

  // Play the intro on every full page load (not gated per session).
  // ponytail: revert to `!sessionStorage.getItem("intro-played")` to make it once-per-session again.
  const [isIntro, setIsIntro] = useState(true);

  const completeIntro = useCallback(() => {
    setIsIntro(false);
  }, []);

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (phase !== "idle") return; // prevent double-fire
      pendingHref.current = href;
      setPhase("exit");
    },
    [phase],
  );

  const onExitComplete = useCallback(() => {
    // Navigation happens *after* the curtain covers the screen
    if (pendingHref.current) {
      router.push(pendingHref.current, { scroll: false });
      pendingHref.current = null;
    }
    // Small delay to let React commit the new page before revealing
    setTimeout(() => {
      setPhase("enter");
      // Scroll to top for the new page — unless the link targeted an anchor,
      // which the browser/router positions itself.
      if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }
    }, 100);
  }, [router]);

  const onEnterComplete = useCallback(() => {
    setPhase("idle");
  }, []);

  // One delegated listener covers every internal <a> on the site — no need to
  // swap next/link for a custom component in each section.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return; // external
      if (url.pathname.startsWith("/admin")) return; // Payload owns its own routing
      if (url.hash) return; // in-page anchor: let it scroll
      // Same path with no hash (e.g. the brand link on the landing page) still
      // plays the curtain and returns to the top.

      // Capture phase: next/link preventDefaults on the anchor itself, so we
      // have to claim the click before its handler ever sees it.
      e.preventDefault();
      e.stopPropagation();
      navigateWithTransition(url.pathname + url.search + url.hash);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigateWithTransition]);

  return (
    <Ctx.Provider
      value={{
        phase,
        navigateWithTransition,
        onExitComplete,
        onEnterComplete,
        isIntro,
        completeIntro,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
