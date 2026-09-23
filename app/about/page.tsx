import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "درباره ما | بیزکو",
  },
  description:
    "بیزکو مجموعه‌ای از نرم‌افزارهای مدیریت کسب‌وکار برای فروشگاه‌ها، کافه‌ها و رستوران‌ها؛ با هدف ساده‌سازی مدیریت روزمره.",
};

const VALUES = [
  {
    title: "سادگی",
    description: "نرم‌افزار باید بدون آموزش پیچیده، قابل‌استفاده باشد.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "قابل اعتماد",
    description: "عملکرد پایدار و آفلاین، بدون وابستگی به اینترنت.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "پشتیبانی واقعی",
    description: "در دسترس بودن برای کاربران، در مسیر استفاده روزمره.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-bizko-navy text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
          <span className="rounded-full bg-bizko-teal/15 px-3.5 py-1 text-sm font-medium text-bizko-teal-light sm:px-4 sm:py-1.5">
            گروه نرم‌افزاری بیزکو
          </span>
          <h1 className="mt-5 text-3xl font-black sm:mt-6 sm:text-5xl">
            درباره بیزکو
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:mt-5 sm:text-lg sm:leading-9">
            تیمی که نرم‌افزارهای مدیریت کسب‌وکار می‌سازد
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-14 text-justify sm:px-6 sm:py-20">
        <div className="space-y-5 text-base leading-9 text-bizko-navy/80 sm:text-lg sm:leading-10">
          <p>
            بیزکو با هدف ساخت نرم‌افزارهایی شکل گرفت که صاحبان
            کسب‌وکار بتوانند واقعاً در فعالیت روزمره خود از آن‌ها استفاده
            کنند.
          </p>
          <p>
            هر یک از محصولات بیزکو — از بیزکو مارکت تا بیزکوفود — به‌صورت
            کاملاً آفلاین و مستقل عمل می‌کند، بدون وابستگی به اینترنت یا
            سرورهای بیرونی، و طراحی آن بر پایه نیازهای واقعی فروشگاه‌داران و
            صاحبان رستوران شکل گرفته است.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-bizko-navy sm:text-3xl">
            ارزش‌ها و اصول ما
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-bizko-teal/25 bg-white p-6 transition-colors hover:border-bizko-teal"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bizko-teal/10 text-bizko-teal">
                {value.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold text-bizko-navy">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-bizko-navy/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="rounded-3xl bg-bizko-navy px-6 py-12 text-center text-white sm:py-16">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            با محصولات بیزکو آشنا شوید
          </h2>
          <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:mx-auto sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
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
    </>
  );
}