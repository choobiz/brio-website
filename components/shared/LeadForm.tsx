"use client";

import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/ghl";

export interface LeadFormProps {
  /** Identifies where the lead came from. Example: "bathroom-remodeling", "about-page", "financing-page". */
  source: string;
  /** High-level service bucket for GHL routing. Example: "bathroom", "kitchen", "financing". */
  service?: string;
  /** City slug for geo-targeted nurture. Example: "north-vancouver". */
  city?: string;
  /** Text on the submit button. */
  submitLabel?: string;
  /** Message shown after successful submission. */
  successMessage?: string;
  /** Visual variant: "stacked" renders labels above inputs (spacious); "compact" is label-less (cramped forms). */
  variant?: "stacked" | "compact";
}

export default function LeadForm({
  source,
  service,
  city,
  submitLabel = "Book Now!",
  successMessage = "Thanks — we'll be in touch within 24 hours.",
  variant = "stacked",
}: LeadFormProps) {
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
        source,
        service,
        city,
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
      <div className="text-center py-10 bg-brio-light-gray">
        <h4 className="text-brio-navy text-[20px] font-semibold font-heading mb-2">Thank you!</h4>
        <p className="text-text-body text-[14px]">{successMessage}</p>
      </div>
    );
  }

  const inputCls =
    "w-full h-12 px-4 border border-border bg-white text-sm focus:outline-none focus:border-brio-navy";
  const textareaCls =
    "w-full px-4 py-3 border border-border bg-white text-sm focus:outline-none focus:border-brio-navy resize-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {variant === "stacked" ? (
        <>
          <div>
            <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
              Name <span className="text-red-600">*</span>
            </label>
            <input name="name" type="text" required placeholder="Your full name" className={inputCls} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                Phone <span className="text-red-600">*</span>
              </label>
              <input name="phone" type="tel" required placeholder="Your phone number" className={inputCls} />
            </div>
            <div>
              <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input name="email" type="email" required placeholder="Your email address" className={inputCls} />
            </div>
          </div>
          <div>
            <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
              Service Address
            </label>
            <input name="address" type="text" placeholder="Project address" className={inputCls} />
          </div>
          <div>
            <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
              Description of Work
            </label>
            <textarea name="description" rows={4} placeholder="Tell us about your project..." className={textareaCls} />
          </div>
        </>
      ) : (
        <>
          <input name="name" type="text" required placeholder="Name" className={inputCls} />
          <div className="grid grid-cols-2 gap-4">
            <input name="phone" type="tel" required placeholder="Phone" className={inputCls} />
            <input name="email" type="email" required placeholder="Email" className={inputCls} />
          </div>
          <input name="address" type="text" placeholder="Service Address" className={inputCls} />
          <textarea name="description" rows={4} placeholder="Description of Work" className={textareaCls} />
        </>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full h-12 bg-brio-navy text-white font-semibold uppercase tracking-wide text-sm hover:bg-brio-navy/90 transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : submitLabel}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-[13px] text-center">
          Something went wrong. Please try again or call{" "}
          <a href="tel:+16042606691" className="underline">
            1 (604) 260-6691
          </a>
          .
        </p>
      )}
    </form>
  );
}
