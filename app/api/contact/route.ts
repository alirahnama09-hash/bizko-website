import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 2000;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

// محدودیت نرخ درون-حافظه: برای ترافیک فعلی سایت کافی است.
// برای مقیاس بزرگ‌تر (چند نمونه/سرور) باید با Redis یا سرویس مشابه جایگزین شود،
// زیرا این Map بین نمونه‌ها مشترک نیست و با ری‌استارت پاک می‌شود.
const rateLimits = new Map<string, number[]>();

function getClientAddress(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const hits = (rateLimits.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  rateLimits.set(key, hits);
  return hits.length >= RATE_LIMIT_MAX;
}

function recordHit(key: string): void {
  const now = Date.now();
  const hits = (rateLimits.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  hits.push(now);
  rateLimits.set(key, hits);
}

export async function POST(request: Request) {
  const clientKey = getClientAddress(request);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "درخواست نامعتبر است" }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;
  const nameValue = typeof name === "string" ? name.trim() : "";
  const emailValue = typeof email === "string" ? email.trim() : "";
  const messageValue = typeof message === "string" ? message.trim() : "";

  if (!nameValue || !emailValue || !messageValue) {
    return NextResponse.json(
      { error: "نام، ایمیل و پیام الزامی هستند" },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(emailValue)) {
    return NextResponse.json(
      { error: "فرمت ایمیل نامعتبر است" },
      { status: 400 }
    );
  }

  if (messageValue.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: "پیام شما بیش از حد مجاز طولانی است" },
      { status: 400 }
    );
  }

  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { error: "تعداد درخواست‌های شما زیاد بوده، لطفاً کمی صبر کنید" },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "کلید Resend پیکربندی نشده است" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["bizkogroups@gmail.com"],
    replyTo: emailValue,
    subject: "پیام جدید از فرم تماس بیزکو",
    text: `نام: ${nameValue}\nایمیل: ${emailValue}\n\nپیام:\n${messageValue}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  recordHit(clientKey);

  return NextResponse.json({ ok: true });
}