import Link from "next/link";

const currentPersianYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  year: "numeric",
}).format(new Date());

export default function Footer() {
  return (
    <footer className="bg-bizko-navy text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm">© {currentPersianYear} بیزکو</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link
            href="/contact"
            className="text-white/80 transition-colors hover:text-bizko-teal"
          >
            تماس با ما
          </Link>
          <Link
            href="/privacy"
            className="text-white/80 transition-colors hover:text-bizko-teal"
          >
            حریم خصوصی
          </Link>
          <Link
            href="/imprint"
            className="text-white/80 transition-colors hover:text-bizko-teal"
          >
            اطلاعات حقوقی
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