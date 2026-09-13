import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بیزکو مارکت",
  description: "نرم‌افزار مدیریت فروشگاه بیزکو مارکت",
};

export default function BizkoMarketPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="text-4xl font-extrabold text-bizko-navy">
        بیزکو مارکت
      </h1>
      <p className="mt-4 text-lg text-bizko-navy/70">
        نرم‌افزار مدیریت فروشگاه — به‌زودی
      </p>
    </div>
  );
}