import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { DEMOS, OWNER_EMAIL, BASE_URL, EMAIL_FROM } from "@/lib/demos";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 80;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
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

export async function POST(request: NextRequest) {
  const clientKey = `demo:${getClientAddress(request)}`;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "درخواست نامعتبر است" }, { status: 400 });
  }

  const { product, name, email } = (body ?? {}) as Record<string, unknown>;
  const productValue = typeof product === "string" ? product : "";
  const nameValue = typeof name === "string" ? name.trim() : "";
  const emailValue = typeof email === "string" ? email.trim() : "";

  const demo = DEMOS[productValue];
  if (!demo) {
    return NextResponse.json({ error: "محصول نامعتبر است" }, { status: 400 });
  }

  if (!nameValue || nameValue.length > MAX_NAME_LENGTH) {
    return NextResponse.json(
      { error: "نام را به‌درستی وارد کنید" },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(emailValue)) {
    return NextResponse.json(
      { error: "فرمت ایمیل نامعتبر است" },
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
      { error: "سرویس پیام در دسترس نیست" },
      { status: 500 }
    );
  }

  const approveUrl = `${BASE_URL}/api/demo-approve?product=${encodeURIComponent(
    productValue
  )}&name=${encodeURIComponent(nameValue)}&email=${encodeURIComponent(
    emailValue
  )}`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: OWNER_EMAIL,
    replyTo: emailValue,
    subject: `درخواست دمو — ${demo.name}`,
    text:
      `درخواست دمو برای ${demo.name} ثبت شد.\n\n` +
      `نام: ${nameValue}\nایمیل: ${emailValue}\n\n` +
      `برای تأیید و ارسال لینک دانلود به مشتری، روی این نشانی بزنید:\n${approveUrl}`,
  });

  if (error) {
    return NextResponse.json(
      { error: "ثبت درخواست ممکن نشد، دوباره تلاش کنید" },
      { status: 500 }
    );
  }

  recordHit(clientKey);

  return NextResponse.json({ ok: true });
}