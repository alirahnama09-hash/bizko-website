import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "بیزکو | نرم‌افزارهای مدیریت کسب‌وکار",
  },
  description:
    "گروه نرم‌افزاری بیزکو — نرم‌افزارهای آفلاین مدیریت کسب‌وکار برای فروشگاه‌ها، کافه‌ها و رستوران‌ها؛ شامل بیزکو مارکت و بیزکوفود.",
};

export default function Home() {
  return (
    <>
      <section className="bg-bizko-navy text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-28">
          <h1 className="text-4xl font-black sm:text-6xl">بیزکو</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:mt-6 sm:text-lg sm:leading-10">
            مجموعه نرم‌افزارهای مدیریت کسب‌وکار برای فروشگاه‌ها و کافه‌ها و
            رستوران‌ها
          </p>
          <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
            <Link
              href="/bizko-market"
              className="w-full rounded-full bg-bizko-teal px-8 py-3 text-center font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light sm:w-auto"
            >
              بیزکو مارکت
            </Link>
            <Link
              href="/bizcofood"
              className="w-full rounded-full border border-white/40 px-8 py-3 text-center font-bold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
            >
              بیزکوفود
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          <div className="rounded-2xl border-2 border-bizko-teal/30 bg-white p-6 shadow-sm transition-colors hover:border-bizko-teal sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bizko-navy text-xl font-bold text-white">
              م
            </span>
            <h2 className="mt-6 text-2xl font-extrabold text-bizko-navy">
              بیزکو مارکت
            </h2>
            <p className="mt-3 leading-8 text-bizko-navy/70">
              نرم‌افزار آفلاین مدیریت فروشگاه
            </p>
            <Link
              href="/bizko-market"
              className="mt-6 inline-flex items-center rounded-full bg-bizko-navy px-7 py-2.5 text-sm font-bold text-white transition-colors hover:bg-bizko-navy-light"
            >
              بیشتر بدانید
            </Link>
          </div>

          <div className="rounded-2xl border-2 border-bizko-teal/30 bg-white p-6 shadow-sm transition-colors hover:border-bizko-teal sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bizko-teal text-xl font-bold text-bizko-navy">
              ف
            </span>
            <h2 className="mt-6 text-2xl font-extrabold text-bizko-navy">
              بیزکوفود
            </h2>
            <p className="mt-3 leading-8 text-bizko-navy/70">
              نرم‌افزار مدیریت کافه و رستوران
            </p>
            <Link
              href="/bizcofood"
              className="mt-6 inline-flex items-center rounded-full bg-bizko-navy px-7 py-2.5 text-sm font-bold text-white transition-colors hover:bg-bizko-navy-light"
            >
              بیشتر بدانید
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}