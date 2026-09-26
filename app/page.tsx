import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

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
<HeroSection>
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-14 text-center sm:px-6 sm:py-20 md:grid-cols-2 md:text-right lg:py-24">
          <div>
            <h1 className="font-heading text-4xl font-black leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
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
                className="w-full rounded-full bg-bizko-teal px-8 py-3 text-center font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light sm:w-auto"
              >
                بیزکوفود
              </Link>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-lg md:block">
            <div className="absolute -inset-10 -z-10 rounded-full bg-bizko-teal/15 blur-3xl" />
            <div className="flex items-center justify-center p-4">
              <Image
                src="/bizko-logo.png"
                alt="لوگوی بیزکو"
                width={1024}
                height={1024}
                priority
                className="h-auto w-full max-w-[26rem] rounded-[2rem] object-contain drop-shadow-[0_20px_60px_rgba(16,166,166,0.45)]"
              />
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
      </HeroSection>

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
            <h2 className="font-heading mt-5 text-2xl font-black text-white">بیزکو مارکت</h2>
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
            <h2 className="font-heading mt-5 text-2xl font-black text-white">بیزکوفود</h2>
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