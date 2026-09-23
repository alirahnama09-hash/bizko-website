import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bizko-navy text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm">© ۱۴۰۴ بیزکو</p>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/contact"
            className="text-white/80 transition-colors hover:text-bizko-teal"
          >
            تماس با ما
          </Link>
          <a
            href="mailto:info@bizko.ir"
            dir="ltr"
            className="text-white/80 transition-colors hover:text-bizko-teal"
          >
            info@bizko.ir
          </a>
          <a
            href="tel:+989381979753"
            dir="ltr"
            className="text-white/80 transition-colors hover:text-bizko-teal"
          >
            ۰۹۳۸۱۹۷۹۷۵۳
          </a>
        </div>
      </div>
    </footer>
  );
}