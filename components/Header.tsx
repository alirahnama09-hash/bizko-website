"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "خانه" },
  { href: "/about", label: "درباره ما" },
  { href: "/bizko-market", label: "بیزکو مارکت" },
  { href: "/bizcofood", label: "بیزکوفود" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src="/bizko-logo.png"
            alt="لوگوی بیزکو"
            width={40}
            height={40}
            priority
            className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
          />
          <span className="whitespace-nowrap text-base font-extrabold text-bizko-navy sm:text-xl">
            بیزکو
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-between gap-6">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(`${link.href}/`));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`whitespace-nowrap font-semibold transition-colors ${
                        isActive
                          ? "text-bizko-teal"
                          : "text-bizko-navy/80 hover:text-bizko-teal"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-bizko-teal px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-bizko-teal-light sm:px-5"
            >
              دریافت مشاوره
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label="باز کردن منو"
              className="rounded-md bg-bizko-teal/10 p-2.5 text-bizko-teal transition-colors hover:bg-bizko-teal/20 md:hidden"
            >
              {menuOpen ? (
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-bizko-navy/10 bg-white shadow-lg md:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-md px-3 py-2.5 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-bizko-teal/10 text-bizko-teal"
                        : "text-bizko-navy/80 hover:bg-bizko-navy/5 hover:text-bizko-teal"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}