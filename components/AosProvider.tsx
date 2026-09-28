"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => AOS.refreshHard(), 150);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}