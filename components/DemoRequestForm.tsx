"use client";

import { FormEvent, useState, useId } from "react";
import Link from "next/link";
import { isDemoAvailable } from "@/lib/demos";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DemoRequestForm({ product }: { product: string }) {
  const available = isDemoAvailable(product);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  function resetStatusAfterEdit() {
    setStatus((s) => (s === "error" || s === "success" ? "idle" : s));
    setErrorMessage("");
  }

  const nameId = useId();
  const emailId = useId();
  const errorId = useId();

  const nameInvalid = status === "error" && !name.trim();
  const emailInvalid =
    status === "error" && (!email.trim() || !EMAIL_REGEX.test(email.trim()));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !EMAIL_REGEX.test(email.trim())) {
      setStatus("error");
      setErrorMessage("نام و ایمیل معتبر وارد کنید");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, name, email }),
      });
      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data?.error ?? "خطا، دوباره امتحان کنید");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("خطا، دوباره امتحان کنید");
    }
  }

  if (!available) {
    return (
      <div className="mt-6">
        <p className="rounded-xl bg-bizko-teal/10 px-4 py-3 text-sm font-semibold text-bizko-navy">
          برای دریافت دمو با ما تماس بگیرید.{" "}
          <Link
            href="/contact"
            className="text-bizko-teal underline underline-offset-4 transition-colors hover:text-bizko-teal-light"
          >
            صفحه تماس
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
      <div>
        <label
          htmlFor={nameId}
          className="mb-2 block text-sm font-semibold text-bizko-navy"
        >
          نام
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          maxLength={80}
          placeholder="نام شما"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            resetStatusAfterEdit();
          }}
          aria-invalid={nameInvalid}
          aria-describedby={nameInvalid ? errorId : undefined}
          className="w-full rounded-xl border border-bizko-navy/15 bg-white px-4 py-2.5 text-sm text-bizko-navy transition-colors placeholder:text-bizko-navy/70 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-bizko-navy-light focus-visible:ring-offset-2"
        />
      </div>
      <div>
        <label
          htmlFor={emailId}
          className="mb-2 block text-sm font-semibold text-bizko-navy"
        >
          ایمیل
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            resetStatusAfterEdit();
          }}
          aria-invalid={emailInvalid}
          aria-describedby={emailInvalid ? errorId : undefined}
          className="w-full rounded-xl border border-bizko-navy/15 bg-white px-4 py-2.5 text-sm text-bizko-navy transition-colors placeholder:text-bizko-navy/70 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-bizko-navy-light focus-visible:ring-offset-2"
        />
      </div>

      {status === "success" && (
        <p
          role="status"
          className="rounded-xl bg-bizko-teal/10 px-4 py-3 text-sm font-semibold text-bizko-navy"
        >
          درخواست شما ثبت شد؛ پس از تأیید، لینک دانلود به ایمیل شما ارسال
          می‌شود.
        </p>
      )}
      {status === "error" && (
        <p
          id={errorId}
          role="alert"
          className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
        >
          {errorMessage || "خطا، دوباره امتحان کنید"}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-bizko-teal px-8 py-3 font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "در حال ثبت..." : "درخواست دمو"}
      </button>
    </form>
  );
}