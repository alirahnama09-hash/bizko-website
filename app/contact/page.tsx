import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "تماس با ما | بیزکو",
  },
  description:
    "با گروه نرم‌افزاری بیزکو در تماس باشید؛ پاسخگویی به سوالات درباره بیزکو مارکت و بیزکوفود.",
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0B2447_0%,#0F3157_45%,#061530_100%)] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-bizko-teal/10 blur-3xl" />
          <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-bizko-teal-light/5 blur-3xl" />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-20 sm:pb-14">
          <span className="rounded-full bg-bizko-teal/15 px-3.5 py-1 text-sm font-medium text-bizko-teal-light sm:px-4 sm:py-1.5">
            پشتیبانی و ارتباط با ما
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:mt-6 sm:text-5xl lg:text-6xl">تماس با ما</h1>
          <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/80 sm:mt-5 sm:text-lg sm:leading-9">
            سوالی دارید؟ خوشحال می‌شویم نظرات و سوالات شما را بشنویم.
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

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="rounded-2xl border border-bizko-teal/25 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-bizko-navy sm:text-3xl">
              پیام بدهید
            </h2>
            <ContactForm />
          </div>

          <div className="rounded-2xl bg-bizko-navy p-6 text-white sm:p-8 lg:col-span-2">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">اطلاعات تماس</h2>
            <ul className="mt-6 flex flex-row flex-wrap items-center gap-6">
              <li>
                <a
                  href="tel:+989381979753"
                  dir="ltr"
                  className="flex items-center gap-2 text-white/80 transition-colors hover:text-bizko-teal"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">۰۹۳۸۱۹۷۹۷۵۳</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/989381979753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 transition-colors hover:text-green-300"
                >
                  <WhatsappIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">واتساپ</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+989381979753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sky-400 transition-colors hover:text-sky-300"
                >
                  <TelegramIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">تلگرام</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}