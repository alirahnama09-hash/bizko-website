import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { socialImage } from "@/lib/seo";
import {
  SITE_LAST_UPDATED,
  SITE_LAST_UPDATED_LABEL,
} from "@/lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: {
    absolute: "بیزکو | نرم‌افزارهای مدیریت کسب‌وکار",
  },
  description:
    "گروه نرم‌افزاری بیزکو — نرم‌افزارهای آفلاین مدیریت کسب‌وکار برای فروشگاه‌ها، کافه‌ها و رستوران‌ها؛ شامل بیزکو مارکت و بیزکوفود.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "بیزکو | نرم‌افزارهای مدیریت کسب‌وکار",
    description:
      "گروه نرم‌افزاری بیزکو — نرم‌افزارهای آفلاین مدیریت کسب‌وکار برای فروشگاه‌ها، کافه‌ها و رستوران‌ها؛ شامل بیزکو مارکت و بیزکوفود.",
    url: "/",
    siteName: "بیزکو",
    locale: "fa_IR",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "بیزکو | نرم‌افزارهای مدیریت کسب‌وکار",
    description:
      "گروه نرم‌افزاری بیزکو — نرم‌افزارهای آفلاین مدیریت کسب‌وکار برای فروشگاه‌ها، کافه‌ها و رستوران‌ها؛ شامل بیزکو مارکت و بیزکوفود.",
    images: [socialImage],
  },
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
              <Link
                href="/bizcofood-mobile"
                className="w-full rounded-full bg-bizko-teal px-8 py-3 text-center font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light sm:w-auto"
              >
                بیزکوفود موبایل
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
                sizes="(min-width: 768px) 416px"
                className="h-auto w-full max-w-[26rem] rounded-[2rem] object-contain drop-shadow-[0_20px_60px_rgba(16,166,166,0.45)]"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rotate-[12deg] rounded-2xl border border-bizko-teal/30 bg-bizko-teal/5 backdrop-blur-sm" />
          </div>
        </div>
      </HeroSection>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="700"
            className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-bl from-bizko-navy via-[#14305a] to-bizko-teal/80 p-8 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-bizko-teal/30 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-bizko-navy/70"
            />
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/15">
              <Image
                src="/bizko-market-logo.png"
                alt="لوگوی بیزکو مارکت"
                width={1254}
                height={1254}
                sizes="56px"
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="font-heading relative mt-5 text-2xl font-black text-white">بیزکو مارکت</h2>
            <p className="relative mt-3 font-light leading-8 text-white/70">
              نرم‌افزار آفلاین مدیریت فروشگاه — موجودی، فروش، بدهی و
              گزارش‌گیری در یک بستر یکپارچه.
            </p>
            <Link
              href="/bizko-market"
              className="relative mt-6 inline-flex items-center self-start rounded-full bg-bizko-teal px-7 py-2.5 text-sm font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light"
            >
              بیشتر بدانید
            </Link>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-bl from-bizko-navy via-[#14305a] to-bizko-teal/80 p-8 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-bizko-teal/30 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-bizko-navy/70"
            />
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/15">
              <Image
                src="/bizcofood-logo.png"
                alt="لوگوی بیزکوفود"
                width={1254}
                height={1254}
                sizes="56px"
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="font-heading relative mt-5 text-2xl font-black text-white">بیزکوفود</h2>
            <p className="relative mt-3 font-light leading-8 text-white/70">
              نرم‌افزار جامع مدیریت کافه و رستوران — از سفارش‌گیری و میزها
              تا انبار و باشگاه مشتریان.
            </p>
            <Link
              href="/bizcofood"
              className="relative mt-6 inline-flex items-center self-start rounded-full bg-bizko-teal px-7 py-2.5 text-sm font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light"
            >
              بیشتر بدانید
            </Link>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-bl from-bizko-navy via-[#14305a] to-bizko-teal/80 p-8 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-bizko-teal/30 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-bizko-navy/70"
            />
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/15">
              <Image
                src="/bizcofood-logo.png"
                alt="لوگوی بیزکوفود نسخه موبایل"
                width={1254}
                height={1254}
                sizes="56px"
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="font-heading relative mt-5 text-2xl font-black text-white">بیزکوفود نسخه موبایل</h2>
            <p className="relative mt-3 font-light leading-8 text-white/70">
              نرم‌افزار اندرویدی مدیریت کافه و رستوران‌های کوچک — منو،
              سفارش، صندوق و گزارش، همه از روی گوشی.
            </p>
            <Link
              href="/bizcofood-mobile"
              className="relative mt-6 inline-flex items-center self-start rounded-full bg-bizko-teal px-7 py-2.5 text-sm font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light"
            >
              بیشتر بدانید
            </Link>
          </div>
        </div>
      </section>

      {/* TODO(review): متن جدید — جدول مقایسه محصولات */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="text-center" data-aos="fade-up" data-aos-duration="700">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-bizko-navy sm:text-4xl">
            مقایسه محصولات بیزکو
          </h2>
          <p className="mt-3 font-light text-bizko-navy/70">
            هر محصول برای یک نوع کسب‌وکار ساخته شده است؛ این جدول به شما کمک
            می‌کند گزینه مناسب‌تر را سریع‌تر پیدا کنید.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-bizko-navy/10 shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-right text-sm">
            <thead className="bg-bizko-navy text-white">
              <tr>
                <th scope="col" className="px-5 py-4 font-bold">
                  محصول
                </th>
                <th scope="col" className="px-5 py-4 font-bold">
                  مناسب برای
                </th>
                <th scope="col" className="px-5 py-4 font-bold">
                  سیستم عامل
                </th>
                <th scope="col" className="px-5 py-4 font-bold">
                  دریافت نسخه
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bizko-navy/10 bg-white">
              <tr className="transition-colors hover:bg-bizko-teal/5">
                <th scope="row" className="px-5 py-4 font-bold text-bizko-navy">
                  بیزکو مارکت
                </th>
                <td className="px-5 py-4 text-bizko-navy/70">
                  فروشگاه‌ها و خرده‌فروشی
                </td>
                <td className="px-5 py-4 text-bizko-navy/70">ویندوز</td>
                <td className="px-5 py-4">
                  <Link
                    href="/bizko-market"
                    className="font-bold text-bizko-teal transition-colors hover:text-bizko-teal-light"
                  >
                    صفحه محصول
                  </Link>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-bizko-teal/5">
                <th scope="row" className="px-5 py-4 font-bold text-bizko-navy">
                  بیزکوفود
                </th>
                <td className="px-5 py-4 text-bizko-navy/70">
                  کافه و رستوران
                </td>
                <td className="px-5 py-4 text-bizko-navy/70">ویندوز</td>
                <td className="px-5 py-4">
                  <Link
                    href="/bizcofood/demo"
                    className="font-bold text-bizko-teal transition-colors hover:text-bizko-teal-light"
                  >
                    دریافت دمو
                  </Link>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-bizko-teal/5">
                <th scope="row" className="px-5 py-4 font-bold text-bizko-navy">
                  بیزکوفود نسخه موبایل
                </th>
                <td className="px-5 py-4 text-bizko-navy/70">
                  کافه و رستوران کوچک
                </td>
                <td className="px-5 py-4 text-bizko-navy/70">اندروید</td>
                <td className="px-5 py-4">
                  <Link
                    href="/bizcofood-mobile/demo"
                    className="font-bold text-bizko-teal transition-colors hover:text-bizko-teal-light"
                  >
                    دریافت دمو
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="text-center" data-aos="fade-up" data-aos-duration="700">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-bizko-navy sm:text-4xl">
            پرسش‌های متداول
          </h2>
          <p className="mt-3 font-light text-bizko-navy/70">
            پاسخ کوتاه چند پرسش پرتکرار درباره محصولات بیزکو.
          </p>
        </div>
        <div className="mt-8 divide-y divide-bizko-navy/10 rounded-2xl border border-bizko-navy/10 bg-white shadow-sm">
          <div className="p-6">
            <h3 className="font-heading text-lg font-bold text-bizko-navy">
              بیزکو مارکت برای چه کسب‌وکارهایی مناسب است؟
            </h3>
            <p className="mt-2 text-sm leading-7 text-bizko-navy/70">
              بیزکو مارکت برای فروشگاه‌ها و خرده‌فروشی‌ها طراحی شده و مدیریت
              موجودی، فروش، بدهی و گزارش‌گیری را در یک نرم‌افزار ویندوزی جمع
              می‌کند.
            </p>
          </div>
          <div className="p-6">
            <h3 className="font-heading text-lg font-bold text-bizko-navy">
              بیزکوفود چه امکاناتی برای کافه و رستوران دارد؟
            </h3>
            <p className="mt-2 text-sm leading-7 text-bizko-navy/70">
              بیزکوفود مدیریت منو، سفارش‌گیری، میزها، انبار مواد اولیه، صندوق
              و گزارش‌های فروش را پوشش می‌دهد و برای کافه و رستوران با گردش
              کاری روزانه ساخته شده است.
            </p>
          </div>
          <div className="p-6">
            <h3 className="font-heading text-lg font-bold text-bizko-navy">
              تفاوت بیزکوفود نسخه موبایل با نسخه ویندوز چیست؟
            </h3>
            <p className="mt-2 text-sm leading-7 text-bizko-navy/70">
              نسخه موبایل روی گوشی اندروید اجرا می‌شود و برای کافه و
              رستوران‌های کوچک که مدیریت سبک و همراه می‌خواهند مناسب‌تر است؛
              نسخه ویندوز برای مدیریت کامل‌تر روی سیستم محل کسب‌وکار است.
            </p>
          </div>
          <div className="p-6">
            <h3 className="font-heading text-lg font-bold text-bizko-navy">
              آیا نرم‌افزارهای بیزکو به اینترنت نیاز دارند؟
            </h3>
            <p className="mt-2 text-sm leading-7 text-bizko-navy/70">
              خیر. هر سه نرم‌افزار بیزکو (بیزکو مارکت، بیزکوفود و بیزکوفود موبایل)
              بدون نیاز به اینترنت کار می‌کنند.
            </p>
          </div>
          <div className="p-6">
            <h3 className="font-heading text-lg font-bold text-bizko-navy">
              چطور می‌توانم نسخه دمو را دریافت کنم؟
            </h3>
            <p className="mt-2 text-sm leading-7 text-bizko-navy/70">
              از صفحه هر محصول، فرم «دریافت دمو» را پر کنید. برای بیزکوفود و
              بیزکوفود نسخه موبایل، پس از ثبت درخواست دمو برای شما ارسال
              می‌شود؛ برای بیزکو مارکت نیز می‌توانید از صفحه تماس با ما
              درخواست دهید.
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-bizko-navy/60">
          آخرین به‌روزرسانی:{" "}
          <time dateTime={SITE_LAST_UPDATED}>{SITE_LAST_UPDATED_LABEL}</time>
        </p>
      </section>
    </>
  );
}