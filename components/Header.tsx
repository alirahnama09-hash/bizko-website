import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-bizko-navy/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-bizko-navy text-lg font-bold text-white">
            ب
          </span>
          <span className="text-xl font-extrabold text-bizko-navy">بیزکو</span>
        </Link>
      </div>
    </header>
  );
}