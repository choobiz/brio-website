"use client";

// Renders a CTA button that opens the lead form in a modal, instead of the form
// being embedded on the page. Accepts the SAME props as LeadForm (source /
// service / variant / etc.) so per-page lead attribution is preserved, and
// spreads them into the form inside the modal.

import { useEffect, useState } from "react";
import LeadForm, { type LeadFormProps } from "@/components/shared/LeadForm";

type Props = LeadFormProps & {
  /** Text on the trigger button. */
  buttonLabel?: string;
  /** Override the trigger button's styling. */
  buttonClassName?: string;
  /** Heading shown at the top of the modal. */
  modalTitle?: string;
  /** Extra handler run when the button is clicked (e.g. close a mobile menu). */
  onClick?: () => void;
};

const DEFAULT_BUTTON =
  "inline-flex items-center justify-center bg-brio-navy text-white text-[15px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors";

export default function LeadFormButton({
  buttonLabel = "Get a Free Estimate",
  buttonClassName,
  modalTitle = "Get Your Free Estimate",
  onClick,
  ...formProps
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => { onClick?.(); setOpen(true); }} className={buttonClassName ?? DEFAULT_BUTTON}>
        {buttonLabel}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={modalTitle}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 sm:items-center"
          onClick={() => setOpen(false)}
        >
          <div className="relative my-auto w-full max-w-lg bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center text-2xl leading-none text-gray-400 hover:text-brio-navy"
            >
              &times;
            </button>
            <div className="p-6 md:p-8">
              <h3 className="mb-1 font-heading text-[22px] font-semibold text-brio-navy">{modalTitle}</h3>
              <p className="mb-5 text-[14px] text-text-body">
                Tell us about your project and a member of our team will get back to you within 24 hours.
              </p>
              <LeadForm {...formProps} variant={formProps.variant ?? "stacked"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
