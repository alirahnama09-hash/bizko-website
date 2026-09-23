"use client";

import { FormEvent, useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-semibold text-bizko-navy"
        >
          نام
        </label>
        <input
          id="name"
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
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-bizko-navy"
        >
          ایمیل
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-bizko-navy/15 bg-white px-4 py-2.5 text-sm text-bizko-navy outline-none transition-colors placeholder:text-bizko-navy/60 focus:border-bizko-teal"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-bizko-navy"
        >
          پیام
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="پیام شما"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-xl border border-bizko-navy/15 bg-white px-4 py-2.5 text-sm text-bizko-navy outline-none transition-colors placeholder:text-bizko-navy/60 focus:border-bizko-teal"
        />
        <p className="mt-1 text-left text-xs text-bizko-navy/60">
          {message.length.toLocaleString("fa-IR")}/۲۰۰۰
        </p>
      </div>

      {status === "success" && (
        <p className="rounded-xl bg-bizko-teal/10 px-4 py-3 text-sm font-semibold text-bizko-teal">
          پیام شما ارسال شد
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          خطا، دوباره امتحان کنید
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-bizko-teal px-8 py-3 font-bold text-bizko-navy transition-colors hover:bg-bizko-teal-light disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "در حال ارسال..." : "ارسال پیام"}
      </button>
    </form>
  );
}