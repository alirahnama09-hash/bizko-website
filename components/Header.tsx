import Link from "next/link";

const NAV_LINKS = [
  { href: "/bizko-market", label: "بیزکو مارکت" },
  { href: "/bizcofood", label: "بیزکوفود" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-bizko-navy text-base font-bold text-white sm:h-10 sm:w-10 sm:text-lg">
            ب
          </span>
          <span className="whitespace-nowrap text-lg font-extrabold text-bizko-navy sm:text-xl">
            بیزکو
          </span>
        </Link>
        <nav className="flex shrink-0 items-center gap-4 sm:gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-bizko-navy/80 transition-colors hover:text-bizko-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}