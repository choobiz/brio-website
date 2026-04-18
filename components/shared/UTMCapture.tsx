"use client";

import { useEffect } from "react";
import { captureUTMParams } from "@/lib/utm";

/**
 * Calls captureUTMParams() once on first client render, so UTM/gclid/fbclid
 * values from the landing URL are stored in sessionStorage and included in
 * any lead form submission that happens later in the session.
 */
export default function UTMCapture() {
  useEffect(() => {
    captureUTMParams();
  }, []);
  return null;
}
