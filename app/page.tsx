import Image from "next/image";
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
<section className="relative overflow-hidden bg-[linear-gradient(135deg,#0B2447_0%,#0F3157_45%,#061530_100%)] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-bizko-teal/10 blur-3xl" />
          <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-bizko-teal-light/5 blur-3xl" />
          <svg
            className="absolute -bottom-28 -left-20 h-72 w-72 opacity-60"
            viewBox="0 0 300 300"
            fill="none"
          >
            <circle
              cx="150"
              cy="150"
              r="115"
              stroke="#16A6A6"
              strokeOpacity="0.18"
              strokeWidth="2"
            />
            <circle
              cx="150"
              cy="150"
              r="85"
              stroke="#16A6A6"
              strokeOpacity="0.12"
              strokeWidth="1.5"
            />
          </svg>
          <svg
            className="absolute right-[38%] top-10 hidden h-40 w-40 opacity-50 xl:block"
            viewBox="0 0 160 160"
            fill="none"
          >
            <path
              d="M30 130 C70 60 110 60 135 35"
              stroke="#16A6A6"
              strokeOpacity="0.15"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-14 text-center sm:px-6 sm:py-20 md:grid-cols-2 md:text-right lg:py-24">
          <div>
            <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
              بیزکو
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base font-light leading-8 text-white/70 sm:text-lg sm:leading-9 md:mx-0 lg:text-xl lg:leading-10">
              بیزکو مجموعه‌ای از نرم‌افزارهای تخصصی برای مدیریت کسب‌وکارهای کوچک
              و متوسط است — از فروشگاه‌ها تا کافه و رستوران‌ها. هر محصول بیزکو
              متناسب با نیاز واقعی همان صنف طراحی و توسعه یافته است.
            </p>
            <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 md:justify-start">
              <Link
                href="/bizko-market"
                className="w-full rounded-full bg-bizko-teal px-8 py-3 text-center font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light sm:w-auto"
              >
                بیزکو مارکت
              </Link>
              <Link
                href="/bizcofood"
                className="w-full rounded-full border border-white/40 px-8 py-3 text-center font-bold text-white transition-all hover:border-white/80 hover:bg-white/10 sm:w-auto"
              >
                بیزکوفود
              </Link>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-md md:block">
            <div className="absolute -inset-6 -z-10 rounded-full bg-bizko-teal/10 blur-2xl" />
            <div className="relative rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_20px_60px_-15px_rgba(4,15,31,0.9)] backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-bizko-teal-light to-bizko-teal" />
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">بیزکو مارکت</p>
                    <p className="text-xs text-white/50">داشبورد فروشگاه</p>
                  </div>
                </div>
                <span className="rounded-full bg-bizko-teal/20 px-3 py-1 text-xs font-bold text-bizko-teal-light">
                  فروش امروز: ۱۲٬۴۸۰٬۰۰۰
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-white/80">
                    <span className="h-2.5 w-2.5 rounded-full bg-bizko-teal" />
                    قند و چای — موجودی
                  </span>
                  <span className="font-bold text-white/90">۸۴</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-white/80">
                    <span className="h-2.5 w-2.5 rounded-full bg-bizko-teal-light" />
                    لبنیات — فروش امروز
                  </span>
                  <span className="font-bold text-white/90">۲٬۳۱۰٬۰۰۰</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-white/80">
                    <span className="h-2.5 w-2.5 rounded-full bg-bizko-navy-light" />
                    بدهی مشتریان
                  </span>
                  <span className="font-bold text-white/90">۴۸۵٬۰۰۰</span>
                </li>
              </ul>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <p className="text-lg font-black text-bizko-teal-light">۴۳</p>
                  <p className="text-[11px] text-white/50">فاکتور امروز</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <p className="text-lg font-black text-bizko-teal-light">۱۲</p>
                  <p className="text-[11px] text-white/50">مشتری جدید</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <p className="text-lg font-black text-bizko-teal-light">۹۸٪</p>
                  <p className="text-[11px] text-white/50">رضایت</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rotate-[12deg] rounded-2xl border border-bizko-teal/30 bg-bizko-teal/5 backdrop-blur-sm" />
          </div>
        </div>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-10 w-full text-white"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,24 C180,44 360,10 540,18 C720,26 900,40 1080,28 C1260,16 1350,10 1440,20 L1440,48 L0,48 Z" />
        </svg>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          <div className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-bizko-navy via-[#14305a] to-bizko-teal/80 p-8 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-bizko-teal/30 blur-2xl"
            />
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/15">
              <Image
                src="/bizko-market-logo.png"
                alt="لوگوی بیزکو مارکت"
                width={1254}
                height={1254}
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="mt-5 text-2xl font-black text-white">بیزکو مارکت</h2>
            <p className="mt-3 font-light leading-8 text-white/70">
              نرم‌افزار آفلاین مدیریت فروشگاه — موجودی، فروش، بدهی و
              گزارش‌گیری در یک بستر یکپارچه.
            </p>
            <Link
              href="/bizko-market"
              className="mt-6 inline-flex items-center self-start rounded-full bg-bizko-teal px-7 py-2.5 text-sm font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light"
            >
              بیشتر بدانید
            </Link>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-bizko-navy via-[#14305a] to-bizko-teal/80 p-8 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-bizko-teal/30 blur-2xl"
            />
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/15">
              <Image
                src="/bizcofood-logo.png"
                alt="لوگوی بیزکوفود"
                width={1254}
                height={1254}
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="mt-5 text-2xl font-black text-white">بیزکوفود</h2>
            <p className="mt-3 font-light leading-8 text-white/70">
              نرم‌افزار جامع مدیریت کافه و رستوران — از سفارش‌گیری و میزها
              تا انبار و باشگاه مشتریان.
            </p>
            <Link
              href="/bizcofood"
              className="mt-6 inline-flex items-center self-start rounded-full bg-bizko-teal px-7 py-2.5 text-sm font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light"
            >
              بیشتر بدانید
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}