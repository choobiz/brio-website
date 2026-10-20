"use client";

import { useState } from "react";

const field =
  "w-full h-11 rounded-md border border-gray-300 bg-white px-3 text-[15px] text-brio-navy focus:outline-none focus:ring-2 focus:ring-brio-navy/30 focus:border-brio-navy";

export interface CardFormTheme {
  field?: string;
  button?: string;
  sent?: string;
  error?: string;
}

export default function CardLeadForm({ card, phone, theme = {} }: { card: string; phone: string; theme?: CardFormTheme }) {
  const fieldCls = theme.field ?? field;
  const [ts] = useState(() => Date.now());
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = Object.fromEntries(f.entries());
    if (!String(body.phone || "").trim() && !String(body.email || "").trim()) {
      setState("error");
      setError("Please add a phone number or an email.");
      return;
    }
    setState("sending");
    const source = new URLSearchParams(window.location.search).get("src") || "card";
    try {
      const r = await fetch("/api/card-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, card, source, ts }),
      });
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (r.ok && j.ok) {
        setState("sent");
        return;
      }
      setState("error");
      setError(r.status === 422 && j.error ? j.error : `That didn't go through. Please text me at ${phone} instead.`);
    } catch {
      setState("error");
      setError(`That didn't go through. Please text me at ${phone} instead.`);
    }
  }

  if (state === "sent") {
    return (
      <div className={theme.sent ?? "rounded-lg bg-brio-light-gray p-5 text-center text-brio-navy"}>
        <p className="font-semibold text-[16px]">Thanks, great to meet you.</p>
        <p className="mt-1 text-[14px]">I&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3" noValidate>
      <input name="name" required autoComplete="name" placeholder="Your name" className={fieldCls} />
      <input name="company" autoComplete="organization" placeholder="Company (optional)" className={fieldCls} />
      <input name="phone" type="tel" autoComplete="tel" placeholder="Phone" className={fieldCls} />
      <input name="email" type="email" autoComplete="email" placeholder="Email" className={fieldCls} />
      <textarea
        name="note"
        rows={3}
        placeholder="Anything you'd like to add (optional)"
        className={`${fieldCls} h-auto py-2.5 resize-none`}
      />
      {/* Honeypot: hidden from people, filled by bots. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {state === "error" && <p className={theme.error ?? "text-[14px] text-red-700"}>{error}</p>}
      <button
        type="submit"
        disabled={state === "sending"}
        className={theme.button ?? "w-full h-12 rounded-md bg-brio-navy text-white font-semibold text-[14px] uppercase tracking-wide disabled:opacity-60"}
      >
        {state === "sending" ? "Sending…" : "Connect"}
      </button>
    </form>
  );
}
