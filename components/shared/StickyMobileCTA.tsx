"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import PhoneLink from "@/components/shared/PhoneLink";

/**
 * Bottom-pinned mobile-only call/estimate bar. Universal pattern across
 * Seattle / Toronto / Bay Area reference markets — every franchise and
 * mid-market design-build site has this. Lifts mobile conversion because
 * users decide to call without scrolling back up to the header.
 */
export default function StickyMobileCTA() {
  // Business cards (/card/*) carry their own call/WhatsApp buttons for the
  // person, not the company line.
  if (usePathname()?.startsWith("/card/")) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.08)] px-3 py-2.5">
      <div className="flex gap-2">
        {/* Tap to call — primary on mobile (most-used CTA per recon) */}
        <PhoneLink
          
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-md bg-brio-navy text-white font-semibold text-[14px] uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          aria-label={`Call BRIO Construction at ${COMPANY.phone}`}
        >
          <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
          Call BRIO
        </PhoneLink>
        {/* WhatsApp — same line as the phone number, now on WhatsApp Business */}
        <WhatsAppLink
          className="flex items-center justify-center h-12 w-12 shrink-0 rounded-md border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 transition-colors"
          aria-label="Message BRIO Construction on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        </WhatsAppLink>
        {/* Get Estimate — routes to homepage form anchor (works from any page) */}
        <Link
          href="/#get-in-touch"
          className="flex-1 flex items-center justify-center gap-1 h-12 rounded-md border-2 border-brio-navy text-brio-navy font-semibold text-[14px] uppercase tracking-wide hover:bg-brio-navy/5 transition-colors"
        >
          Get Estimate
        </Link>
      </div>
    </div>
  );
}
