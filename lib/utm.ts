export interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  landing_url: string;
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

const STORAGE_KEY = "brio_utm_params";

// Attribution is ALSO mirrored into a first-party cookie scoped to the
// registrable domain, because sessionStorage loses attribution in three common
// journeys:
//   1. tab closed and reopened before the visitor converts;
//   2. ad lands on go.builtbybrio.com but the form is submitted on
//      builtbybrio.com — sessionStorage AND localStorage are origin-scoped, so
//      neither crosses the subdomain boundary; only a domain cookie does;
//   3. any return visit in a new tab.
// 90 days matches Google's default gclid lifetime.
const COOKIE_KEY = "brio_attr";
const COOKIE_MAX_AGE = 90 * 24 * 60 * 60;

/** `.builtbybrio.com` in production; undefined on localhost/preview hosts. */
function cookieDomain(): string | undefined {
  const h = window.location.hostname;
  const m = h.match(/([^.]+\.[^.]+)$/);
  if (!m || h === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(h)) return undefined;
  return "." + m[1];
}

function readCookie(): Record<string, string> | null {
  const hit = document.cookie
    .split("; ")
    .find((row) => row.startsWith(COOKIE_KEY + "="));
  if (!hit) return null;
  try {
    return JSON.parse(decodeURIComponent(hit.slice(COOKIE_KEY.length + 1)));
  } catch {
    return null;
  }
}

function writeCookie(params: Record<string, string>): void {
  const d = cookieDomain();
  document.cookie =
    `${COOKIE_KEY}=${encodeURIComponent(JSON.stringify(params))}` +
    `; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax` +
    (d ? `; domain=${d}` : "") +
    (window.location.protocol === "https:" ? "; Secure" : "");
}

const EMPTY_PARAMS: UTMParams = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  gclid: "",
  fbclid: "",
  landing_url: "",
};

/**
 * Capture UTM params from the current URL and store in sessionStorage.
 * First-touch attribution: only captures on first visit per session.
 */
export function captureUTMParams(): void {
  if (typeof window === "undefined") return;

  const searchParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};
  let hasAttribution = false;

  for (const key of UTM_KEYS) {
    const v = searchParams.get(key) || "";
    params[key] = v;
    if (v) hasAttribution = true;
  }
  params.landing_url = window.location.href;

  // First-touch attribution — but only among touches that CARRY attribution.
  //
  // The previous guard was `if (stored) return`, which meant the first pageview
  // of a session always won even when it had no params at all. A visitor who
  // arrived organically (or on a bare URL), then clicked an ad later in the same
  // session, kept the empty record forever and submitted with no gclid. Now a
  // blank record never blocks a real one; once real attribution is stored, it is
  // never overwritten, so genuine first-touch is preserved.
  const prev = readStored();
  if (prev) {
    const prevHasAttribution = UTM_KEYS.some((k) => prev[k]);
    if (prevHasAttribution || !hasAttribution) {
      // Keep the earlier (real) touch, but make sure it is mirrored into the
      // cookie — visitors captured before the cookie existed, or who arrived on
      // a different subdomain, only have it in sessionStorage.
      if (prevHasAttribution) writeCookie(prev);
      return;
    }
  }

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  if (hasAttribution) writeCookie(params);
}

/** Prefer sessionStorage (this tab's own touch), fall back to the domain cookie. */
function readStored(): Record<string, string> | null {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      return JSON.parse(raw) as Record<string, string>;
    } catch {
      /* corrupt — fall through to cookie */
    }
  }
  return readCookie();
}

/**
 * Retrieve stored UTM params. Returns empty strings if none captured.
 */
export function getUTMParams(): UTMParams {
  if (typeof window === "undefined") return EMPTY_PARAMS;

  // A throw here used to propagate out of submitLead and lose the whole lead,
  // not just its attribution — readStored swallows parse errors instead.
  const stored = readStored();
  if (!stored) return EMPTY_PARAMS;

  return { ...EMPTY_PARAMS, ...stored } as UTMParams;
}
