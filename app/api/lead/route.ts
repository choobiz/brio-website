// Server-side lead intake gate.
//
// The lead form used to POST straight from the browser to the GHL webhook, so a
// bot with a harvested gclid could submit junk with zero friction (the "Lynn
// Woodd" spam). This route sits in front of GHL and applies three defenses
// before forwarding:
//   1. Honeypot     — a hidden field only bots fill → silent drop.
//   2. Time-to-fill — humans take >2s; instant submits → silent drop.
//   3. Turnstile    — Cloudflare bot check, verified server-side (only real
//                     users get a valid token).
// Plus a soft GEO FLAG: non-Canadian phone area codes get a `geo-out-of-area`
// tag (not blocked — a legit out-of-town owner exists — but flagged so junk
// can be filtered / kept out of Google Ads conversion uploads).

import { GHL_WEBHOOK_URL } from "@/lib/ghl";

export const runtime = "nodejs";

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || "1x0000000000000000000000000000000AA"; // CF "always passes" test secret
const MIN_FILL_MS = 2000;

// NANP Canadian area codes (as of 2024). A phone outside this set is treated as
// out-of-area for a Greater-Vancouver service and soft-flagged.
const CA_AREA_CODES = new Set([
  "204","226","236","249","250","263","289","306","343","354","365","367","368","382","403","416","418","428","431","437","438","450","468","474",
  "506","514","519","548","579","581","584","587","604","613","639","647","672","683","705","709","742","753","778","780","782","807","819","825","867","873","879","902","905",
]);

function areaCode(phone: string): string | null {
  const d = String(phone || "").replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("1")) return d.slice(1, 4);
  if (d.length === 10) return d.slice(0, 3);
  return null;
}

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  try {
    const form = new URLSearchParams({ secret: TURNSTILE_SECRET, response: token });
    if (ip) form.set("remoteip", ip);
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form });
    const j = (await r.json()) as { success?: boolean };
    return !!j.success;
  } catch {
    return false; // fail closed on verifier outage
  }
}

export async function POST(req: Request) {
  let data: { ghl?: Record<string, unknown>; hp?: string; t?: string; ts?: number };
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: "bad request" }, { status: 400 });
  }
  const ghl = data.ghl;
  if (!ghl || typeof ghl !== "object") return Response.json({ ok: false, error: "no payload" }, { status: 400 });

  // 1) Honeypot — a filled hidden field means a bot. Pretend success, drop it.
  if (data.hp && String(data.hp).trim() !== "") return Response.json({ ok: true, dropped: "hp" });

  // 2) Time-to-fill — instant submit means a bot. Silent drop.
  if (data.ts && Date.now() - Number(data.ts) < MIN_FILL_MS) return Response.json({ ok: true, dropped: "speed" });

  // 3) Turnstile — verify when a token is present. (Once real keys are set and
  //    every form sends a token, flip this to reject missing tokens too.)
  if (data.t) {
    const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
    const ok = await verifyTurnstile(String(data.t), ip);
    if (!ok) return Response.json({ ok: false, error: "verification failed" }, { status: 400 });
  }

  // Soft geo flag — tag out-of-area phones for review; do not block.
  const ac = areaCode(String(ghl.phone ?? ""));
  if (ac && !CA_AREA_CODES.has(ac)) {
    const tags = Array.isArray(ghl.tags) ? (ghl.tags as string[]) : [];
    if (!tags.includes("geo-out-of-area")) tags.push("geo-out-of-area");
    ghl.tags = tags;
  }

  // Forward the validated payload to GHL.
  const webhook = process.env.GHL_WEBHOOK_URL || process.env.NEXT_PUBLIC_GHL_WEBHOOK || GHL_WEBHOOK_URL;
  try {
    const r = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(ghl) });
    if (!r.ok) return Response.json({ ok: false, error: `ghl ${r.status}` }, { status: 502 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "forward failed" }, { status: 502 });
  }
}
