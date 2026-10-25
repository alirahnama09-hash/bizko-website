import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { socialImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "حریم خصوصی | بیزکو",
  },
  description:
    "سیاست حریم خصوصی بیزکو؛ چه اطلاعاتی از طریق فرم‌های تماس و دریافت دمو جمع‌آوری می‌شود و چگونه از آن‌ها نگهداری می‌کنیم.",
  alternates: {
    canonical: "/privacy",
  },
  // TODO: remove once the real privacy policy content is in place.
  robots: { index: false },
  openGraph: {
    title: "حریم خصوصی | بیزکو",
    description:
      "سیاست حریم خصوصی بیزکو؛ چه اطلاعاتی از طریق فرم‌های تماس و دریافت دمو جمع‌آوری می‌شود و چگونه از آن‌ها نگهداری می‌کنیم.",
    url: "/privacy",
    siteName: "بیزکو",
    locale: "fa_IR",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "حریم خصوصی | بیزکو",
    description:
      "سیاست حریم خصوصی بیزکو؛ چه اطلاعاتی از طریق فرم‌های تماس و دریافت دمو جمع‌آوری می‌شود و چگونه از آن‌ها نگهداری می‌کنیم.",
    images: [socialImage],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <HeroSection>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-20 sm:pb-14">
          <span className="rounded-full bg-bizko-teal/15 px-3.5 py-1 text-sm font-medium text-bizko-teal-light sm:px-4 sm:py-1.5">
            اطلاعات حقوقی
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:mt-6 sm:text-5xl lg:text-6xl">
            حریم خصوصی
          </h1>
          <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/80 sm:mt-5 sm:text-lg sm:leading-9">
            ما فقط اطلاعاتی را جمع‌آوری می‌کنیم که برای پاسخ‌دادن به شما و
            ارائه خدمات لازم است.
          </p>
        </div>
      </HeroSection>

      {/*
        TODO: این متن نمونه است. پیش از انتشار نهایی، آن را با سیاست
        حریم خصوصی واقعی و مطابق قوانین جاری بازبینی/تأیید کنید.
      */}
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-8 text-base font-light leading-9 text-bizko-navy/70">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              چه اطلاعاتی جمع‌آوری می‌شود؟
            </h2>
            <p className="mt-3">
              در فرم تماس، نام، ایمیل و متن پیام شما دریافت می‌شود. در فرم
              دریافت دمو نیز نام و ایمیل شما ثبت می‌شود تا بتوانیم نسخه دمو
              را برایتان ارسال کنیم. ما اطلاعاتی بیش از این از بازدیدکنندگان
              سایت درخواست نمی‌کنیم.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              اطلاعات چگونه استفاده می‌شود؟
            </h2>
            <p className="mt-3">
              اطلاعات ارسال‌شده فقط برای پاسخ به پیام، هماهنگی دریافت دمو و
              پشتیبانی محصولات استفاده می‌شود. پیام‌های فرم تماس و درخواست
              دمو از طریق سرویس ایمیل به دست ما می‌رسند.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              اشتراک‌گذاری اطلاعات
            </h2>
            <p className="mt-3">
              اطلاعات شما فروخته یا در اختیار اشخاص ثالث برای تبلیغات قرار
              نمی‌گیرد. برای ارسال ایمیل و میزبانی سایت از سرویس‌های فنی
              (مانند سرویس ایمیل و سرویس میزبانی) استفاده می‌شود و اطلاعات
              تنها در حد لازم در اختیار آن‌ها قرار می‌گیرد.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              کوکی‌ها
            </h2>
            <p className="mt-3">
              این سایت از کوکی‌های تحلیلی یا تبلیغاتی استفاده نمی‌کند. اگر در
              آینده چنین ابزارهایی اضافه شود، این صفحه به‌روزرسانی خواهد شد.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              نگهداری و امنیت
            </h2>
            <p className="mt-3">
              اطلاعات تنها تا زمانی نگهداری می‌شود که برای پاسخ‌گویی یا پیگیری
              درخواست لازم است. دسترسی به آن‌ها محدود به افراد پاسخ‌دهنده است
              و از ارتباط امن (HTTPS) برای انتقال اطلاعات استفاده می‌شود.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              حقوق شما
            </h2>
            <p className="mt-3">
              می‌توانید درخواست کنید اطلاعاتی که از شما ثبت شده حذف شود یا
              اصلاح گردد. برای این کار از طریق صفحه{" "}
              <Link
                href="/contact"
                className="font-semibold text-bizko-teal underline underline-offset-4 transition-colors hover:text-bizko-teal-light"
              >
                تماس با ما
              </Link>{" "}
              با ما در ارتباط باشید.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-bizko-navy">
              تماس
            </h2>
            <p className="mt-3">
              برای هر پرسشی درباره حریم خصوصی می‌توانید به{" "}
              <a
                href="mailto:info@bizko.ir"
                dir="ltr"
                className="font-semibold text-bizko-teal underline underline-offset-4 transition-colors hover:text-bizko-teal-light"
              >
                info@bizko.ir
              </a>{" "}
              ایمیل بزنید.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
