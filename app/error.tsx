"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-bold text-bizko-teal">خطا</p>
      <h1 className="mt-4 text-3xl font-black text-bizko-navy sm:text-4xl">
        مشکلی پیش آمد
      </h1>
      <p className="mt-4 max-w-md leading-8 text-bizko-navy/70">
        در نمایش این صفحه خطایی رخ داد؛ لطفاً دوباره تلاش کنید یا به صفحه
        اصلی بازگردید.
      </p>
      <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <button
          type="button"
          onClick={() => retry()}
          className="w-full rounded-full bg-bizko-navy px-8 py-3 font-bold text-white transition-colors hover:bg-bizko-navy-light focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-bizko-navy-light focus-visible:ring-offset-2 sm:w-auto"
        >
          تلاش دوباره
        </button>
        <Link
          href="/"
          className="w-full rounded-full bg-bizko-teal px-8 py-3 font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light sm:w-auto"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}