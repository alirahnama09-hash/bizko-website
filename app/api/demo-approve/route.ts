import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { DEMOS, BASE_URL, isDemoAvailable } from "@/lib/demos";
import { EMAIL_FROM } from "@/lib/resend-config";
import {
  verifyDemoApproveToken,
  isDemoApproveTokenUsed,
  markDemoApproveTokenUsed,
} from "@/lib/demo-approve-token";
import { EMAIL_REGEX } from "@/lib/validation";

export const runtime = "nodejs";

const NOINDEX = "noindex";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sendHtml(status: number, title: string, contentHtml: string): NextResponse {
  const html = `<!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="${NOINDEX}, nofollow">
<title>${escapeHtml(title)} — بیزکو</title>
<style>
  body { margin: 0; font-family: Vazirmatn, Tahoma, "Segoe UI", sans-serif; background: #ffffff; color: #0b2447; }
  .wrap { max-width: 520px; margin: 0 auto; padding: 48px 20px; text-align: center; }
  .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 32px 24px; box-shadow: 0 10px 30px rgba(11, 36, 71, 0.08); }
  h1 { font-size: 24px; font-weight: 700; color: #0b2447; margin: 0 0 12px; }
  p { font-size: 15px; line-height: 1.9; color: #1c3f6e; margin: 0 0 8px; }
  .muted { color: #44658f; font-size: 13px; }
  .btn { display: inline-block; margin-top: 18px; border: 0; border-radius: 10px; background: #16a6a6; color: #0b2447; font-family: inherit; font-size: 16px; font-weight: 700; padding: 12px 28px; cursor: pointer; text-decoration: none; }
  .btn:hover { background: #2fc9c9; }
  .row { font-weight: 700; }
</style>
</head>
<body>
<div class="wrap">
  <div class="card">
    <h1>${escapeHtml(title)}</h1>
    ${contentHtml}
  </div>
</div>
</body>
</html>`;
  return new NextResponse(html, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": NOINDEX,
    },
  });
}

const INVALID_HTML = `<p>لینکی که باز کرده‌اید درست نیست.</p>`;
const EXPIRED_HTML = `<p>این لینک اعتبار خود را از دست داده است. برای دریافت نسخه آزمایشی، دوباره از فرم درخواست دمو اقدام کنید.</p>`;
const USED_HTML = `<p>این لینک قبلاً استفاده شده است و دیگر معتبر نیست.</p>`;
const CONFIG_HTML = `<p>سرویس تأیید به‌درستی تنظیم نشده است. لطفاً بعداً دوباره تلاش کنید.</p>`;

function demoUnavailableHtml(demoName: string): string {
  return `<p>دموی <span class="row">${escapeHtml(
    demoName
  )}</span> فعلاً در دسترس نیست.</p>
  <p class="muted">ایمیلی ارسال نشد. برای اطلاع از زمان انتشار نسخه آزمایشی با ما تماس بگیرید.</p>`;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token") ?? "";

  if (!token) {
    return sendHtml(400, "درخواست نامعتبر است", INVALID_HTML);
  }

  let verified;
  try {
    verified = verifyDemoApproveToken(token);
  } catch {
    return sendHtml(503, "خطا", CONFIG_HTML);
  }

  if (!verified.ok) {
    return sendHtml(
      400,
      verified.reason === "expired" ? "لینک منقضی شده" : "درخواست نامعتبر است",
      verified.reason === "expired" ? EXPIRED_HTML : INVALID_HTML
    );
  }

  const demo = DEMOS[verified.data.product];
  if (!demo) {
    return sendHtml(400, "درخواست نامعتبر است", INVALID_HTML);
  }

  if (!isDemoAvailable(verified.data.product)) {
    return sendHtml(200, "دمو در دسترس نیست", demoUnavailableHtml(demo.name));
  }

  const { name, email } = verified.data;
  return sendHtml(
    200,
    "تأیید درخواست دمو",
    `<p>درخواست دموی <span class="row">${escapeHtml(
      demo.name
    )}</span> به نام <span class="row">${escapeHtml(
      name
    )}</span> با ایمیل <span class="row">${escapeHtml(
      email
    )}</span> ثبت شده است.</p>
    <p class="muted">با تأیید، لینک دانلود به ایمیل مشتری ارسال می‌شود.</p>
    <form method="post" action="/api/demo-approve">
      <input type="hidden" name="token" value="${escapeHtml(token)}">
      <button type="submit" class="btn">تأیید و ارسال لینک دانلود</button>
    </form>`
  );
}

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return sendHtml(400, "درخواست نامعتبر است", INVALID_HTML);
  }

  const token = String(formData.get("token") ?? "").trim();
  if (!token) {
    return sendHtml(400, "درخواست نامعتبر است", INVALID_HTML);
  }

  let verified;
  try {
    verified = verifyDemoApproveToken(token);
  } catch {
    return sendHtml(503, "خطا", CONFIG_HTML);
  }

  if (!verified.ok) {
    return sendHtml(
      400,
      verified.reason === "expired" ? "لینک منقضی شده" : "درخواست نامعتبر است",
      verified.reason === "expired" ? EXPIRED_HTML : INVALID_HTML
    );
  }

  if (isDemoApproveTokenUsed(token)) {
    return sendHtml(409, "لینک قبلاً استفاده شده است", USED_HTML);
  }

  const demo = DEMOS[verified.data.product];
  if (!demo) {
    return sendHtml(400, "درخواست نامعتبر است", INVALID_HTML);
  }

  if (!isDemoAvailable(verified.data.product)) {
    return sendHtml(200, "دمو در دسترس نیست", demoUnavailableHtml(demo.name));
  }

  const { name, email } = verified.data;
  if (!EMAIL_REGEX.test(email) || name.length > 80) {
    return sendHtml(400, "درخواست نامعتبر است", INVALID_HTML);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return sendHtml(500, "خطا در ارسال لینک", `<p>سرویس پیام در دسترس نیست. لطفاً بعداً دوباره تلاش کنید.</p>`);
  }

  const downloadUrl = `${BASE_URL}${demo.file}`;

  const resend = new Resend(apiKey);
  try {
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
      return sendHtml(500, "خطا در ارسال لینک", `<p>ارسال ایمیل ممکن نشد. لطفاً بعداً دوباره تلاش کنید.</p>`);
    }
  } catch {
    return sendHtml(500, "خطا در ارسال لینک", `<p>ارسال ایمیل ممکن نشد. لطفاً بعداً دوباره تلاش کنید.</p>`);
  }

  markDemoApproveTokenUsed(token, verified.data.exp);

  return sendHtml(
    200,
    "تأیید شد",
    `<p>لینک دانلود دموی ${escapeHtml(demo.name)} به ایمیل ${escapeHtml(
      email
    )} ارسال شد.</p>`
  );
}

