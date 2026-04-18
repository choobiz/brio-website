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

export async function submitLead(payload: LeadPayload): Promise<Response> {
  const enriched: LeadPayload = {
    ...payload,
    page_url:
      payload.page_url ??
      (typeof window !== "undefined" ? window.location.href : undefined),
  };
  return fetch(GHL_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enriched),
  });
}
