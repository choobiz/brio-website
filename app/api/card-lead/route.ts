// "Send me your details" from a digital business card (/card/<slug>).
//
// Forwards to Keystone (brio-pm), where the lead lands in CRM → Card leads.
// The intake key travels in the BODY: the brio-pm proxy drops unknown headers.
// Spam defences match /api/lead: a honeypot and a time-to-fill floor (both
// silent drops). No Turnstile here: a person is filling this in face to face.

import { getCard } from "@/lib/team";

export const runtime = "nodejs";

const API = process.env.BRIO_PM_API_URL;
const KEY = process.env.CARD_INTAKE_KEY;
const MIN_FILL_MS = 2000;
const ROLES = new Set(["developer", "owner", "builder", "trade", "other"]);

function clip(v: unknown, max: number): string {
  return String(v ?? "").trim().slice(0, max);
}

export async function POST(req: Request) {
  let d: Record<string, unknown>;
  try {
    d = await req.json();
  } catch {
    return Response.json({ ok: false, error: "bad request" }, { status: 400 });
  }

  if (clip(d.website, 200)) return Response.json({ ok: true });
  if (typeof d.ts === "number" && Date.now() - d.ts < MIN_FILL_MS) return Response.json({ ok: true });

  const card = getCard(clip(d.card, 40));
  if (!card) return Response.json({ ok: false, error: "unknown card" }, { status: 400 });

  const lead = {
    name: clip(d.name, 120),
    company: clip(d.company, 160),
    role: ROLES.has(clip(d.role, 20)) ? clip(d.role, 20) : null,
    phone: clip(d.phone, 40),
    email: clip(d.email, 200),
    note: clip(d.note, 1000),
    card_slug: card.slug,
    source: clip(d.source, 40) || "card",
  };
  if (!lead.name) return Response.json({ ok: false, error: "Please add your name." }, { status: 422 });
  if (!lead.phone && !lead.email) {
    return Response.json({ ok: false, error: "Please add a phone number or an email." }, { status: 422 });
  }

  if (!API || !KEY) {
    console.error("[card-lead] BRIO_PM_API_URL or CARD_INTAKE_KEY not set; lead not stored", lead);
    return Response.json({ ok: false, error: "not configured" }, { status: 503 });
  }

  try {
    const r = await fetch(`${API.replace(/\/$/, "")}/public/card-leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, user_agent: clip(req.headers.get("user-agent"), 300), intake_key: KEY }),
      signal: AbortSignal.timeout(10000),
    });
    if (!r.ok) {
      // Logged so a failed delivery can be recovered from the Vercel logs.
      console.error("[card-lead] brio-pm rejected", r.status, await r.text().catch(() => ""), lead);
      return Response.json({ ok: false, error: "delivery failed" }, { status: 502 });
    }
  } catch (e) {
    console.error("[card-lead] brio-pm unreachable", String(e), lead);
    return Response.json({ ok: false, error: "delivery failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
