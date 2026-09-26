import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { WifiOff } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ScreenshotFrame from "@/components/ScreenshotFrame";

export const metadata: Metadata = {
  title: {
    absolute: "بیزکو مارکت | نرم‌افزار مدیریت فروشگاه",
  },
  description:
    "نرم‌افزار آفلاین مدیریت فروشگاه بیزکو مارکت؛ مدیریت موجودی و هشدار کمبود کالا، داشبورد فروش، گزارش‌گیری و مدیریت بدهی و مشتریان.",
};

const FEATURES = [
  {
    title: "مدیریت موجودی با هشدار هوشمند کمبود کالا",
    description: "کنترل لحظه‌ای موجودی کالاها و هشدار به‌موقع کمبود کالا.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "داشبورد زنده با نمودار فروش و دسته‌بندی",
    description: "داشبورد بصری با نمودار روند فروش و نمودار دسته‌بندی کالا.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "گزارش‌گیری روزانه، هفتگی، ماهانه و سالانه",
    description: "گزارش‌های متنوع با بازه‌های روزانه، هفتگی، ماهانه و سالانه.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V6a1.5 1.5 0 001.5 1.5h1.5m-10.5-3H6.75A1.875 1.875 0 004.875 6.375v11.25c0 1.035.84 1.875 1.875 1.875h10.5c1.035 0 1.875-.84 1.875-1.875V9.375c0-.621-.247-1.217-.686-1.656l-4.033-4.033A2.34 2.34 0 0012.621 3H12a1.875 1.875 0 00-1.875 1.875v.375M12 11.25v6m-3-3h6" />
      </svg>
    ),
  },
  {
    title: "مدیریت بدهی و اطلاعات مشتریان",
    description: "ثبت و پیگیری بدهی‌ها و مدیریت آسان اطلاعات مشتریان.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "پشتیبان‌گیری و بازیابی خودکار اطلاعات",
    description: "پشتیبان‌گیری و بازیابی ایمن اطلاعات در هر زمان که نیاز دارید.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "کاملاً آفلاین، بدون وابستگی به اینترنت",
    description: "بدون نیاز به اینترنت، تمام امکانات در اختیار فروشگاه شماست.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.538c-1.022-.883-1.088-2.328.144-3.012A5.25 5.25 0 0018.75 4.5H5.25A5.25 5.25 0 003 9.5c1.22.684 1.154 2.119-.137 3.012A4.5 4.5 0 004.5 19.5h15a4.5 4.5 0 000-8.25c-.75-3.188-3.54-5.25-6.75-5.25H7.5c-1.32 0-2.592.536-3.487 1.492M16.5 5.25h.004m-8.254.004h.004" />
      </svg>
    ),
  },
];

const CARD_THEMES = [
  {
    card: "border border-bizko-navy/10 bg-white",
    icon: "bg-bizko-teal/10 text-bizko-teal",
  },
  {
    card: "border border-bizko-teal/30 bg-gradient-to-br from-bizko-teal/10 to-bizko-navy/5",
    icon: "bg-bizko-navy/10 text-bizko-navy",
  },
  {
    card: "border border-bizko-navy/10 bg-white",
    icon: "bg-bizko-teal/10 text-bizko-teal",
  },
  {
    card: "border-2 border-bizko-teal/50 bg-white",
    icon: "bg-bizko-teal/15 text-bizko-teal",
  },
  {
    card: "border border-bizko-teal/30 bg-gradient-to-br from-bizko-teal/10 to-bizko-navy/5",
    icon: "bg-bizko-navy/10 text-bizko-navy",
  },
];

export default function BizkoMarketPage() {
  return (
    <>
      <HeroSection>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-16 pb-16 text-center sm:px-6 sm:pt-20 sm:pb-20">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-bizko-teal/20 blur-xl"
            />
            <Image
              src="/bizko-market-logo.png"
              alt="لوگوی بیزکو مارکت"
              width={1254}
              height={1254}
              priority
              className="h-20 w-20 rounded-2xl shadow-[0_14px_40px_-8px_rgba(4,15,31,0.85)] sm:h-24 sm:w-24"
            />
          </div>
          <span className="mt-4 rounded-full bg-bizko-teal/15 px-3.5 py-1 text-sm font-medium text-bizko-teal-light sm:px-4 sm:py-1.5">
            محصولی از گروه نرم‌افزاری بیزکو
          </span>
          <h1 className="font-heading mt-5 text-4xl font-black tracking-tight sm:mt-6 sm:text-5xl lg:text-6xl">بیزکو مارکت</h1>
          <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/80 sm:mt-5 sm:text-lg sm:leading-9">
بیزکو مارکت نرم‌افزاری دسکتاپ و کاملاً آفلاین است که مدیریت
            روزمره فروشگاه را از موجودی و فروش تا بدهی و گزارش‌گیری در یک
            محیط یکپارچه گرد می‌آورد. داشبورد زنده با نمودار روند فروش و سهم
            دسته‌بندی‌ها، هشدار خودکار کمبود کالا، پیگیری بدهی مشتریان، و
            پشتیبان‌گیری خودکار از اطلاعات — بدون نیاز به اتصال اینترنت و
            به‌صورت کامل روی سیستم فروشگاه.
          </p>
          <div className="mt-10 w-full max-w-3xl">
            <ScreenshotFrame
              src="/screenshots/bizko-market-home.png"
              alt="اسکرین‌شات صفحه اصلی بیزکو مارکت"
              title="بیزکو مارکت — نرم‌افزار مدیریت فروشگاه"
            />
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

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-bizko-navy sm:text-4xl">
            چرا بیزکو مارکت؟
          </h2>
          <p className="mt-3 font-light text-bizko-navy/60">
            همه چیزهایی که یک فروشگاه برای مدیریت حرفه‌ای به آن نیاز دارد.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {FEATURES.map((feature, i) => {
            const isFeatured = i === FEATURES.length - 1;
            const theme = CARD_THEMES[i % CARD_THEMES.length];
return isFeatured ? (
              <div
                key={feature.title}
                className="relative flex flex-col rounded-2xl border-2 border-bizko-teal/50 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-flex rounded-full bg-bizko-teal/15 px-3 py-1 text-xs font-bold text-bizko-teal">
                  ویژگی ویژه
                </span>
                <span className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-bizko-teal text-white">
                  <WifiOff className="h-9 w-9" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="font-heading mt-5 text-xl font-black text-bizko-navy">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-bizko-navy/60">{feature.description}</p>
              </div>
            ) : (
              <div
                key={feature.title}
                className={`flex flex-col rounded-2xl ${theme.card} p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.icon}`}
                >
                  {feature.icon}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-bizko-navy">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-bizko-navy/60">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-bizko-navy sm:text-4xl">
            تصاویری از محیط نرم‌افزار
          </h2>
          <p className="mt-3 font-light text-bizko-navy/60">
            نمایی واقعی از بیزکو مارکت در کار روزمره فروشگاه
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ScreenshotFrame
            variant="light"
            src="/screenshots/bizko-market-dashboard.png"
            alt="اسکرین‌شات داشبورد بیزکو مارکت"
            title="داشبورد فروشگاه"
          />
          <ScreenshotFrame
            variant="light"
            src="/screenshots/bizko-market-home.png"
            alt="اسکرین‌شات صفحه اصلی بیزکو مارکت"
            title="صفحه اصلی سیستم"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
        <hr className="mx-auto mb-10 max-w-md border-0 border-t-2 border-bizko-teal/10 sm:mb-12" />
        <div className="rounded-3xl bg-bizko-navy px-6 py-12 text-center text-white sm:py-16">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            آماده‌اید فروشگاه خود را حرفه‌ای مدیریت کنید؟
          </h2>
          <p className="mt-4 text-white/70">
            با ما در تماس باشید و اولین قدم را برای مدیریت آسان‌تر بردارید.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block w-full rounded-full bg-bizko-teal px-8 py-3 text-center font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light sm:mt-8 sm:w-auto"
          >
            دریافت مشاوره
          </Link>
        </div>
      </section>
    </>
  );
}