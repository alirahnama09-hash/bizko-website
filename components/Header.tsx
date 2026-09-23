"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/about", label: "درباره ما" },
  { href: "/bizko-market", label: "بیزکو مارکت" },
  { href: "/bizcofood", label: "بیزکوفود" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-bizko-navy text-base font-bold text-white sm:h-10 sm:w-10 sm:text-lg">
            ب
          </span>
          <span className="whitespace-nowrap text-base font-extrabold text-bizko-navy sm:text-xl">
            بیزکو
          </span>
        </Link>
        <nav className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-6">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`whitespace-nowrap text-[13px] font-semibold transition-colors sm:text-sm ${
                  isActive
                    ? "text-bizko-teal"
                    : "text-bizko-navy/80 hover:text-bizko-teal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}