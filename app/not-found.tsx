import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "۴۰۴ | بیزکو",
  },
  description: "صفحه مورد نظر پیدا نشد.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-bold text-bizko-teal">۴۰۴</p>
      <h1 className="mt-4 text-3xl font-black text-bizko-navy sm:text-4xl">
        صفحه مورد نظر پیدا نشد
      </h1>
      <p className="mt-4 max-w-md leading-8 text-bizko-navy/70">
        به نظر می‌رسد صفحه‌ای که دنبال آن هستید وجود ندارد یا جابه‌جا شده است.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-bizko-navy px-8 py-3 font-bold text-white transition-colors hover:bg-bizko-navy-light"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}