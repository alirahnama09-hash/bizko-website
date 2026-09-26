"use client";

import { FormEvent, useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DemoRequestForm({ product }: { product: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

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

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
      <div>
        <label
          htmlFor="demo-name"
          className="mb-2 block text-sm font-semibold text-bizko-navy"
        >
          نام
        </label>
        <input
          id="demo-name"
          name="name"
          type="text"
          placeholder="نام شما"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-bizko-navy/15 bg-white px-4 py-2.5 text-sm text-bizko-navy outline-none transition-colors placeholder:text-bizko-navy/60 focus:border-bizko-teal"
        />
      </div>
      <div>
        <label
          htmlFor="demo-email"
          className="mb-2 block text-sm font-semibold text-bizko-navy"
        >
          ایمیل
        </label>
        <input
          id="demo-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-bizko-navy/15 bg-white px-4 py-2.5 text-sm text-bizko-navy outline-none transition-colors placeholder:text-bizko-navy/60 focus:border-bizko-teal"
        />
      </div>

      {status === "success" && (
        <p className="rounded-xl bg-bizko-teal/10 px-4 py-3 text-sm font-semibold text-bizko-teal">
          درخواست شما ثبت شد؛ پس از تأیید، لینک دانلود به ایمیل شما ارسال
          می‌شود.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
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