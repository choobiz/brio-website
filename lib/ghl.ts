import { getUTMParams } from "./utm";

export const GHL_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_GHL_WEBHOOK ??
  "https://services.leadconnectorhq.com/hooks/7Z5Zm3czsuWjz4zwmsFr/webhook-trigger/d8c59051-0df7-49bc-a6e7-8aee4735ec38";

export interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  project_address?: string;
  description?: string;
  source: string;
  service?: string;
  city?: string;
  campaign?: string;
  page_url?: string;
}

/**
 * Normalize a phone string to E.164 for North America.
 * - strips all non-digits
 * - prepends +1 if the result is 10 digits
 * - returns the cleaned string otherwise so GHL can still reject visibly
 */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length >= 11) return `+${digits}`;
  return raw.trim();
}

/** Split "First Last" into firstName / lastName. Empty last name allowed. */
export function splitName(full: string): { firstName: string; lastName: string } {
  const trimmed = full.trim().replace(/\s+/g, " ");
  if (!trimmed) return { firstName: "", lastName: "" };
  const parts = trimmed.split(" ");
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

/**
 * Submit a lead to the GHL inbound webhook.
 *
 * Payload shape MUST match the field names the GHL "Create Contact" workflow
 * node is mapped to. The existing workflow (Workflow #1: Speed to Lead) was
 * built around the brio-marketing-hub bathroom campaign's shape. Keep the
 * keys in sync across both repos or contacts will fail to create with
 * "no value was found for any of the mapped fields".
 */
export async function submitLead(payload: LeadPayload): Promise<Response> {
  const { firstName, lastName } = splitName(payload.name);
  const phone = normalizePhone(payload.phone);
  const utm = getUTMParams();
  const isBrowser = typeof window !== "undefined";
  const pageUrl = payload.page_url ?? (isBrowser ? window.location.href : "");
  const pagePath = isBrowser ? window.location.pathname : "";
  const pageTitle = isBrowser ? document.title : "";
  const referrer = isBrowser ? document.referrer : "";

  const body = {
    // GHL standard contact fields
    firstName,
    lastName,
    full_name: payload.name.trim(),
    phone,
    email: payload.email.trim(),

    // Custom fields — match brio-marketing-hub payload key-for-key
    project_type: payload.service ?? "",
    project_address: payload.project_address?.trim() ?? "",
    estimated_budget: "",
    preferred_start_date: "",
    financing_interest: "",
    sms_opt_in: "",
    description: payload.description?.trim() ?? "",

    // Website-specific segmentation
    service: payload.service ?? "",
    city: payload.city ?? "",

    // UTM attribution
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_content: utm.utm_content,
    utm_term: utm.utm_term,
    gclid: utm.gclid,
    fbclid: utm.fbclid,

    // Page / attribution context — enough to identify the exact page a lead came from
    source: payload.source,
    campaign_name: payload.campaign ?? payload.source,
    page_url: pageUrl,
    page_path: pagePath,
    page_title: pageTitle,
    referrer: referrer,
    landing_url: utm.landing_url || pageUrl,
    timestamp: new Date().toISOString(),

    // Tags for segmentation in GHL
    tags: [
      `src-${payload.source}`,
      payload.service ? `svc-${payload.service}` : "",
      payload.city ? `city-${payload.city.toLowerCase().replace(/\s+/g, "-")}` : "",
      `ch-website`,
    ].filter(Boolean),
  };

  return fetch(GHL_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}
