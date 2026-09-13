import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "بیزکوفود | نرم‌افزار مدیریت کافه و رستوران",
  },
  description:
    "نرم‌افزار مدیریت کافه و رستوران بیزکوفود؛ مدیریت منو، سفارش‌گیری و میزها، موجودی مواد اولیه و گزارش‌گیری فروش.",
};

const FEATURES = [
  {
    title: "مدیریت منو",
    description: "ثبت و مدیریت آیتم‌های منوی کافه و رستوران به‌صورت ساده و سریع.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "سفارش‌گیری و مدیریت میزها",
    description: "ثبت سفارش و مدیریت میزها و سفارش‌ها در لحظه، بدون خطا.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    title: "سلامت سیستم و پشتیبان‌گیری",
    description: "نگهداری سلامت سیستم و پشتیبان‌گیری ایمن از داده‌ها.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "گزارش‌گیری فروش",
    description: "گزارش‌های کامل فروش برای تصمیم‌گیری بهتر در کسب‌وکار شما.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "مدیریت موجودی مواد اولیه",
    description: "کنترل موجودی مواد اولیه و هشدار به‌موقع برای خریدهای جدید.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "راهنمای کامل داخل برنامه",
    description: "راهنمای کامل و آموزش استفاده از همه امکانات، داخل خود برنامه.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6.75 6.75 0 008.11 10.36L9.75 12l-.75.75m.75 2.25l3 3m-3-3l3-3m-3 3l-3 3m9.114-5.81l.319 1.913A6.75 6.75 0 0021.89 10.36L23.25 12l-.75.75m.75 2.25l1.5 1.5M21 20.25c-1.5 0-2.25-.75-3-1.5m3 1.5c1.5 0 2.25-.75 3-1.5m-3-4.5c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-2.25c-.621 0-1.125-.504-1.125-1.125v-2.25c0-.621.504-1.125 1.125-1.125h2.25z" />
      </svg>
    ),
  },
];

export default function BizcofoodPage() {
  return (
    <>
      <section className="bg-bizko-navy text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
          <span className="rounded-full bg-bizko-teal/15 px-3.5 py-1 text-sm font-medium text-bizko-teal-light sm:px-4 sm:py-1.5">
            محصولی از گروه نرم‌افزاری بیزکو
          </span>
          <h1 className="mt-5 text-3xl font-black sm:mt-6 sm:text-5xl">بیزکوفود</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:mt-5 sm:text-lg sm:leading-9">
            نرم‌افزار مدیریت کافه و رستوران
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-bizko-navy sm:text-3xl">
            چرا بیزکوفود؟
          </h2>
          <p className="mt-3 text-bizko-navy/70">
            همه چیزهایی که یک کافه یا رستوران برای مدیریت حرفه‌ای به آن نیاز دارد.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-bizko-teal/25 bg-white p-6 transition-colors hover:border-bizko-teal"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bizko-teal/10 text-bizko-teal">
                {feature.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold text-bizko-navy">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-bizko-navy/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="rounded-3xl bg-bizko-navy px-6 py-12 text-center text-white sm:py-16">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            آماده‌اید کسب‌وکار خود را حرفه‌ای مدیریت کنید؟
          </h2>
          <p className="mt-4 text-white/80">
            با ما در تماس باشید و اولین قدم را برای مدیریت آسان‌تر بردارید.
          </p>
          <a
            href="mailto:info@bizko.ir"
            className="mt-6 inline-block w-full rounded-full bg-bizko-teal px-8 py-3 text-center font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light sm:mt-8 sm:w-auto"
          >
            دریافت مشاوره
          </a>
        </div>
      </section>
    </>
  );
}