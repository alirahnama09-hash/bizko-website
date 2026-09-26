import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import DemoRequestForm from "@/components/DemoRequestForm";

export const metadata: Metadata = {
  title: { absolute: "دریافت دمو | بیزکوفود" },
  description:
    "نسخه دموی آزمایشی بیزکوفود را درخواست دهید؛ پس از تأیید، لینک دانلود به ایمیل شما ارسال می‌شود.",
};

export default function BizcofoodDemoPage() {
  return (
    <>
      <HeroSection>
        <div className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <span className="inline-block rounded-full border border-bizko-teal/40 bg-bizko-teal/10 px-4 py-1.5 text-sm font-medium text-bizko-teal-light">
            نسخه دمو
          </span>
          <h1 className="font-heading mx-auto mt-5 max-w-2xl text-4xl font-black leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
            دریافت دمو بیزکوفود
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base font-light leading-8 text-white/70 sm:text-lg sm:leading-9">
            نسخه آزمایشی بیزکوفود را با تمام امکانات نرم‌افزار امتحان کنید. پس
            از ثبت درخواست و تأیید، لینک دانلود به ایمیل شما ارسال می‌شود.
          </p>
        </div>
      </HeroSection>

      <section className="mx-auto w-full max-w-xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="rounded-3xl border border-bizko-teal/25 bg-white p-6 shadow-lg sm:p-8">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-bizko-navy">
            درخواست دمو
          </h2>
          <p className="mt-2 text-sm leading-7 text-bizko-navy/70">
            نام و ایمیل خود را وارد کنید تا پس از تأیید، لینک دانلود نسخه دمو
            برایتان ایمیل شود.
          </p>
          <DemoRequestForm product="bizcofood" />
        </div>
      </section>
    </>
  );
}