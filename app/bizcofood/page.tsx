import Image from "next/image";
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
    title: "مدیریت منو و سفارش‌گیری با پیگیری وضعیت سفارش",
    description: "ثبت و مدیریت آیتم‌های منوی کافه و رستوران به‌صورت ساده و سریع.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "مدیریت میزها و اتصال مستقیم میز به سفارش",
    description: "ثبت سفارش و مدیریت میزها و سفارش‌ها در لحظه، بدون خطا.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    title: "انبار و موجودی مواد اولیه",
    description: "نگهداری سلامت سیستم و پشتیبان‌گیری ایمن از داده‌ها.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "صندوق، فاکتور و مدیریت بدهی دوطرفه",
    description: "گزارش‌های کامل فروش برای تصمیم‌گیری بهتر در کسب‌وکار شما.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "پرسنل، شیفت‌بندی و باشگاه مشتریان وفادار",
    description: "کنترل موجودی مواد اولیه و هشدار به‌موقع برای خریدهای جدید.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "محاسبه دقیق سود و زیان و گزارش‌های کامل فروش",
    description: "راهنمای کامل و آموزش استفاده از همه امکانات، داخل خود برنامه.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true" className="h-9 w-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6.75 6.75 0 008.11 10.36L9.75 12l-.75.75m.75 2.25l3 3m-3-3l3-3m-3 3l-3 3m9.114-5.81l.319 1.913A6.75 6.75 0 0021.89 10.36L23.25 12l-.75.75m.75 2.25l1.5 1.5M21 20.25c-1.5 0-2.25-.75-3-1.5m3 1.5c1.5 0 2.25-.75 3-1.5m-3-4.5c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-2.25c-.621 0-1.125-.504-1.125-1.125v-2.25c0-.621.504-1.125 1.125-1.125h2.25z" />
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

export default function BizcofoodPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bizko-navy text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-20 sm:pb-14">
          <Image
            src="/bizcofood-logo.png"
            alt="لوگوی بیزکوفود"
            width={1254}
            height={1254}
            priority
            className="h-20 w-20 rounded-2xl sm:h-24 sm:w-24"
          />
          <span className="mt-4 rounded-full bg-bizko-teal/15 px-3.5 py-1 text-sm font-medium text-bizko-teal-light sm:px-4 sm:py-1.5">
            محصولی از گروه نرم‌افزاری بیزکو
          </span>
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:mt-6 sm:text-5xl">بیزکوفود</h1>
          <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/80 sm:mt-5 sm:text-lg sm:leading-9">
بیزکوفود نرم‌افزاری جامع و تخصصی برای اداره کافه و رستوران است
            — از سفارش‌گیری و مدیریت میزها تا صندوق، انبار مواد اولیه،
            باشگاه مشتریان وفادار و محاسبه دقیق سود و زیان. مدیریت پرسنل و
            شیفت‌بندی، پیامک تبلیغاتی هدفمند برای مشتریان، و گزارش‌های دقیق
            مالی نیز در همین یک نرم‌افزار گرد آمده‌اند.
          </p>
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

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-bizko-navy sm:text-4xl">
            چرا بیزکوفود؟
          </h2>
          <p className="mt-3 font-light text-bizko-navy/60">
            همه چیزهایی که یک کافه یا رستوران برای مدیریت حرفه‌ای به آن نیاز دارد.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {FEATURES.map((feature, i) => {
            const isFeatured = i === FEATURES.length - 1;
            const theme = CARD_THEMES[i % CARD_THEMES.length];
            return isFeatured ? (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bizko-navy via-[#14305a] to-bizko-teal/80 p-8 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-bizko-teal/30 blur-2xl"
                />
                <span className="inline-flex rounded-full bg-bizko-teal/25 px-3 py-1 text-xs font-bold text-bizko-teal-light">
                  ویژگی ویژه
                </span>
                <span className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                  {feature.icon}
                </span>
                <h3 className="mt-5 text-xl font-black text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{feature.description}</p>
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

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
        <hr className="mx-auto mb-10 max-w-md border-0 border-t-2 border-bizko-teal/10 sm:mb-12" />
        <div className="rounded-3xl bg-bizko-navy px-6 py-12 text-center text-white sm:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            آماده‌اید کسب‌وکار خود را حرفه‌ای مدیریت کنید؟
          </h2>
          <p className="mt-4 text-white/70">
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