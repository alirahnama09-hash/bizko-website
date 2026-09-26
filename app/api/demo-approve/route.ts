import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { DEMOS, BASE_URL, EMAIL_FROM } from "@/lib/demos";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const product = searchParams.get("product") ?? "";
  const name = searchParams.get("name") ?? "";
  const email = searchParams.get("email") ?? "";

  const demo = DEMOS[product];
  if (!demo || !EMAIL_REGEX.test(email) || name.length > 80) {
    return new NextResponse(
      "<!doctype html><meta charset=\"utf-8\"><html dir=\"rtl\"><body style=\"font-family:Tahoma,sans-serif;text-align:center;padding:40px\"><h2>درخواست نامعتبر است</h2><p>لینکی که باز کرده‌اید درست نیست.</p></body></html>",
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return new NextResponse(
      "<!doctype html><meta charset=\"utf-8\"><html dir=\"rtl\"><body style=\"font-family:Tahoma,sans-serif;text-align:center;padding:40px\"><h2>خطا</h2><p>سرویس پیام در دسترس نیست.</p></body></html>",
      { status: 500, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const downloadUrl = `${BASE_URL}${demo.file}`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: email,
    subject: `لینک دانلود دمو — ${demo.name}`,
    text:
      `${name} عزیز،\n\n` +
      `درخواست شما برای دریافت نسخه دمو ${demo.name} تأیید شد.\n` +
      `برای دانلود روی این نشانی بزنید:\n${downloadUrl}\n\n` +
      `با احترام، تیم بیزکو`,
  });

  if (error) {
    return new NextResponse(
      "<!doctype html><meta charset=\"utf-8\"><html dir=\"rtl\"><body style=\"font-family:Tahoma,sans-serif;text-align:center;padding:40px\"><h2>خطا در ارسال لینک</h2><p>دوباره تلاش کنید.</p></body></html>",
      { status: 500, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  return new NextResponse(
    "<!doctype html><meta charset=\"utf-8\"><html dir=\"rtl\"><body style=\"font-family:Tahoma,sans-serif;text-align:center;padding:40px\"><h2>تأیید شد</h2><p>لینک دانلود دمو به ایمیل مشتری ارسال شد.</p></body></html>",
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}