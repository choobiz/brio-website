"use client";

import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/ghl";

export default function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    try {
      const res = await submitLead({
        name: String(data.get("name") ?? ""),
        phone: String(data.get("phone") ?? ""),
        email: String(data.get("email") ?? ""),
        project_address: String(data.get("address") ?? ""),
        description: String(data.get("description") ?? ""),
        source: "financing-page",
        service: "financing",
      });
      if (!res.ok) throw new Error(`Webhook ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 bg-white border border-border">
        <h4 className="text-brio-navy text-[22px] font-semibold font-heading mb-2">Thank you!</h4>
        <p className="text-text-body text-[14px]">We&apos;ll be in touch within 24 hours to start your pre-approval.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-text-muted text-[11px] uppercase tracking-wide mb-1">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          name="name"
          type="text"
          required
          placeholder="Riley Doe"
          className="w-full h-11 px-4 border border-border bg-white text-sm focus:outline-none focus:border-brio-navy"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-text-muted text-[11px] uppercase tracking-wide mb-1">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="(123) 456 - 7890"
            className="w-full h-11 px-4 border border-border bg-white text-sm focus:outline-none focus:border-brio-navy"
          />
        </div>
        <div>
          <label className="block text-text-muted text-[11px] uppercase tracking-wide mb-1">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="RDoe@example.com"
            className="w-full h-11 px-4 border border-border bg-white text-sm focus:outline-none focus:border-brio-navy"
          />
        </div>
      </div>

      <div>
        <label className="block text-text-muted text-[11px] uppercase tracking-wide mb-1">
          Service Address
        </label>
        <input
          name="address"
          type="text"
          placeholder="123 Main St"
          className="w-full h-11 px-4 border border-border bg-white text-sm focus:outline-none focus:border-brio-navy"
        />
      </div>

      <div>
        <label className="block text-text-muted text-[11px] uppercase tracking-wide mb-1">
          Description of Work
        </label>
        <textarea
          name="description"
          rows={4}
          placeholder="Summary of the scope of work"
          className="w-full px-4 py-3 border border-border bg-white text-sm focus:outline-none focus:border-brio-navy resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full h-12 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[13px] hover:bg-brio-navy/90 transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Book Now!"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-[13px] text-center">
          Something went wrong. Please try again, or call us at{" "}
          <a href="tel:16042606691" className="underline">
            1 (604) 260-6691
          </a>
          .
        </p>
      )}

      <p className="text-text-muted text-[11px] text-center">
        Checking your eligibility won&apos;t affect your credit score.
      </p>
    </form>
  );
}
