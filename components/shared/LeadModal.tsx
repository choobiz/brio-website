"use client";

// Global "Get a Quote / Free Estimate" modal.
//
// Instead of editing every CTA across the site, this intercepts clicks on any
// link that targets the contact form (href ending in `get-in-touch`) and opens
// a modal with the lead form — modals convert better than scroll-to-form. If JS
// is disabled the links still work as plain anchors (graceful fallback). Mounted
// once in the root layout.

import { useEffect, useState } from "react";
import LeadForm from "@/components/shared/LeadForm";

export default function LeadModal() {
  const [open, setOpen] = useState(false);

  // Intercept CTA clicks (anywhere on the page) that point at the contact form.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.button !== 0) return;
      const a = (e.target as HTMLElement | null)?.closest?.('a[href$="get-in-touch"]');
      if (a) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // ESC to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get a free estimate"
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 sm:items-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative my-auto w-full max-w-lg bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center text-2xl leading-none text-gray-400 hover:text-brio-navy"
        >
          &times;
        </button>
        <div className="p-6 md:p-8">
          <h3 className="mb-1 font-heading text-[22px] font-semibold text-brio-navy">Get Your Free Estimate</h3>
          <p className="mb-5 text-[14px] text-text-body">
            Tell us about your project and a member of our team will get back to you within 24 hours.
          </p>
          <LeadForm source="quote-modal" submitLabel="Get My Free Estimate" />
        </div>
      </div>
    </div>
  );
}
