import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بیزکوفود",
  description: "نرم‌افزار مدیریت رستوران و کافه بیزکوفود",
};

export default function BizcofoodPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="text-4xl font-extrabold text-bizko-navy">بیزکوفود</h1>
      <p className="mt-4 text-lg text-bizko-navy/70">
        نرم‌افزار مدیریت رستوران و کافه — به‌زودی
      </p>
    </div>
  );
}