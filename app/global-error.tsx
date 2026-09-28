"use client";

import Link from "next/link";

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <title>مشکلی پیش آمد | بیزکو</title>
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 16px",
          textAlign: "center",
          direction: "rtl",
          backgroundColor: "#ffffff",
          color: "#0b2447",
          fontFamily: "Segoe UI, Tahoma, sans-serif",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: 700,
              color: "#16a6a6",
            }}
          >
            خطا
          </p>
          <h1
            style={{
              margin: "16px 0 0",
              fontSize: "30px",
              fontWeight: 900,
              lineHeight: 1.3,
            }}
          >
            مشکلی پیش آمد
          </h1>
          <p
            style={{
              margin: "16px auto 0",
              maxWidth: "440px",
              lineHeight: 1.9,
              color: "#54667e",
            }}
          >
            در نمایش این صفحه خطایی رخ داد؛ لطفاً دوباره تلاش کنید یا به
            صفحه اصلی بازگردید.
          </p>
          <div style={{ marginTop: "32px" }}>
            <button
              type="button"
              onClick={() => retry()}
              style={{
                cursor: "pointer",
                borderRadius: "9999px",
                border: "none",
                backgroundColor: "#0b2447",
                color: "#ffffff",
                padding: "12px 32px",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              تلاش دوباره
            </button>
            <div style={{ marginTop: "20px" }}>
              <Link
                href="/"
                style={{
                  color: "#16a6a6",
                  fontWeight: 700,
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}