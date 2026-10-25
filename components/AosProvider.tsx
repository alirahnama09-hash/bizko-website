"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "aos/dist/aos.css";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    // Load AOS after hydration so it does not render-block the page.
    async function init() {
      const AOS = (await import("aos")).default;
      if (cancelled) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!prefersReducedMotion) {
        document.documentElement.dataset.aosInit = "1";
      }

      AOS.init({
        duration: 700,
        easing: "ease-out",
        once: true,
        offset: 40,
        disable: prefersReducedMotion,
      });
    }

    void init();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void import("aos").then(({ default: AOS }) => AOS.refreshHard());
    }, 150);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
