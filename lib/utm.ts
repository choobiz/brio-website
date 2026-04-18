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
  if (sessionStorage.getItem(STORAGE_KEY)) return;

  const searchParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};

  for (const key of UTM_KEYS) {
    params[key] = searchParams.get(key) || "";
  }
  params.landing_url = window.location.href;

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
}

/**
 * Retrieve stored UTM params. Returns empty strings if none captured.
 */
export function getUTMParams(): UTMParams {
  if (typeof window === "undefined") return EMPTY_PARAMS;

  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (!stored) return EMPTY_PARAMS;

  return JSON.parse(stored) as UTMParams;
}
