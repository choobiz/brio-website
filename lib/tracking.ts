/**
 * Conversion tracking for builtbybrio.com.
 *
 * The Google Ads tag is loaded in app/layout.tsx via gtag('config', AW-...),
 * but loading the tag only enables remarketing — it does NOT report conversions.
 * A conversion is only recorded when an explicit gtag('event','conversion', ...)
 * fires with a send_to naming a conversion action. Until 2026-08-23 nothing on
 * this site fired one, so Google Ads never learned that a main-site lead had
 * converted and had nothing to optimise against.
 *
 * The conversion action labels are the SAME ones the campaign landing pages use
 * (brio-marketing-hub/src/lib/campaigns/shared.ts) because both properties report
 * into the same Ads account, AW-6531627900.
 */
import { TRACKING } from "./constants";

type ConversionType = "form_submit" | "phone_call" | "whatsapp_click";

const LABELS: Record<ConversionType, keyof typeof TRACKING.conversionLabels> = {
  form_submit: "formSubmit",
  phone_call: "phoneCall",
  whatsapp_click: "whatsappClick",
};

const GA4_EVENTS: Record<ConversionType, string> = {
  form_submit: "generate_lead",
  phone_call: "phone_call_click",
  whatsapp_click: "whatsapp_click",
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Report a conversion to Google Ads and GA4.
 *
 * Safe to call before gtag has loaded (afterInteractive) — it no-ops rather than
 * throwing, so a tracking failure can never break a form submission.
 */
export function trackConversion(type: ConversionType): void {
  if (typeof window === "undefined" || !window.gtag) return;

  const label = TRACKING.conversionLabels[LABELS[type]];
  if (label) {
    window.gtag("event", "conversion", {
      send_to: `${TRACKING.gadsId}/${label}`,
    });
  }

  window.gtag("event", GA4_EVENTS[type], { event_category: "conversion" });
}
