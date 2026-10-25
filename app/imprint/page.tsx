import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { socialImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "اطلاعات حقوقی | بیزکو",
  },
  description:
    "اطلاعات حقوقی و معرفی گروه نرم‌افزاری بیزکو؛ راه‌های ارتباطی و اطلاعات تماس رسمی.",
  alternates: {
    canonical: "/imprint",
  },
  // TODO: remove once the real legal/registration data is in place.
  robots: { index: false },
  openGraph: {
    title: "اطلاعات حقوقی | بیزکو",
    description:
      "اطلاعات حقوقی و معرفی گروه نرم‌افزاری بیزکو؛ راه‌های ارتباطی و اطلاعات تماس رسمی.",
    url: "/imprint",
    siteName: "بیزکو",
    locale: "fa_IR",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "اطلاعات حقوقی | بیزکو",
    description:
      "اطلاعات حقوقی و معرفی گروه نرم‌افزاری بیزکو؛ راه‌های ارتباطی و اطلاعات تماس رسمی.",
    images: [socialImage],
  },
};

export default function ImprintPage() {
  return (
    <>
      <HeroSection>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-20 sm:pb-14">
          <span className="rounded-full bg-bizko-teal/15 px-3.5 py-1 text-sm font-medium text-bizko-teal-light sm:px-4 sm:py-1.5">
            اطلاعات حقوقی
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:mt-6 sm:text-5xl lg:text-6xl">
            اطلاعات حقوقی
          </h1>
          <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/80 sm:mt-5 sm:text-lg sm:leading-9">
            اطلاعات معرفی و راه‌های ارتباط رسمی با گروه نرم‌افزاری بیزکو.
          </p>
        </div>
      </HeroSection>

      {/*
        TODO: اطلاعات حقوقی زیر نمونه است. نام حقوقی کامل، نشانی، شماره ثبت
        و شناسه ملی را پیش از انتشار نهایی جایگزین کنید.
      */}
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-8 text-base font-light leading-9 text-bizko-navy/70">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              معرفی
            </h2>
            <p className="mt-3">
              گروه نرم‌افزاری بیزکو سازنده نرم‌افزارهای مدیریت کسب‌وکار برای
              فروشگاه‌ها، کافه‌ها و رستوران‌هاست. محصولات بیزکو شامل بیزکو
              مارکت، بیزکوفود و بیزکوفود نسخه موبایل است.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              اطلاعات تماس
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                ایمیل:{" "}
                <a
                  href="mailto:info@bizko.ir"
                  dir="ltr"
                  className="font-semibold text-bizko-teal underline underline-offset-4 transition-colors hover:text-bizko-teal-light"
                >
                  info@bizko.ir
                </a>
              </li>
              <li>
                تلفن:{" "}
                <a
                  href="tel:+989381979753"
                  dir="ltr"
                  className="font-semibold text-bizko-teal underline underline-offset-4 transition-colors hover:text-bizko-teal-light"
                >
                  ۰۹۳۸۱۹۷۹۷۵۳
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              اطلاعات ثبت و نشانی
            </h2>
            <p className="mt-3">
              نام حقوقی کامل: [TODO: نام حقوقی رسمی]
            </p>
            <p className="mt-1">نشانی: [TODO: نشانی رسمی]</p>
            <p className="mt-1">شماره ثبت: [TODO: شماره ثبت]</p>
            <p className="mt-1">شناسه ملی: [TODO: شناسه ملی]</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              مسئولیت محتوا
            </h2>
            <p className="mt-3">
              مسئولیت محتوای این سایت بر عهده گروه نرم‌افزاری بیزکو است.
              اطلاعات محصولات ممکن است به‌مرور به‌روزرسانی شود؛ برای جزئیات
              نهایی با ما در تماس باشید.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              حریم خصوصی
            </h2>
            <p className="mt-3">
              نحوه جمع‌آوری و استفاده از اطلاعات در صفحه{" "}
              <Link
                href="/privacy"
                className="font-semibold text-bizko-teal underline underline-offset-4 transition-colors hover:text-bizko-teal-light"
              >
                حریم خصوصی
              </Link>{" "}
              توضیح داده شده است.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
