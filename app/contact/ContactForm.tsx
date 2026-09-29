"use client";

import { FormEvent, useState, useId } from "react";
import { EMAIL_REGEX } from "@/lib/validation";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
  const messageId = useId();
  const errorId = useId();
  const counterId = useId();

  const nameInvalid = status === "error" && !name.trim();
  const emailInvalid =
    status === "error" && (!email.trim() || !EMAIL_REGEX.test(email.trim()));
  const messageInvalid = status === "error" && !message.trim();

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
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("خطا، دوباره امتحان کنید");
    }
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
      <div>
        <label
          htmlFor={messageId}
          className="mb-2 block text-sm font-semibold text-bizko-navy"
        >
          پیام
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="پیام شما"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            resetStatusAfterEdit();
          }}
          aria-invalid={messageInvalid}
          aria-describedby={[messageInvalid ? errorId : null, counterId]
            .filter(Boolean)
            .join(" ")}
          className="w-full resize-none rounded-xl border border-bizko-navy/15 bg-white px-4 py-2.5 text-sm text-bizko-navy transition-colors placeholder:text-bizko-navy/70 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-bizko-navy-light focus-visible:ring-offset-2"
        />
        <p id={counterId} className="mt-1 text-left text-xs text-bizko-navy/70">
          {message.length.toLocaleString("fa-IR")}/۲۰۰۰
        </p>
      </div>

      {status === "success" && (
        <p
          role="status"
          className="rounded-xl bg-bizko-teal/10 px-4 py-3 text-sm font-semibold text-bizko-navy"
        >
          پیام شما ارسال شد
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
        {status === "loading" ? "در حال ارسال..." : "ارسال پیام"}
      </button>
    </form>
  );
}