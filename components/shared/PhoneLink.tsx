"use client";

import { COMPANY } from "@/lib/constants";
import { trackConversion } from "@/lib/tracking";

interface Props {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

/**
 * Click-to-call link that reports a phone_call conversion.
 *
 * A tel: click is a real conversion — for a renovation business it is often the
 * PREFERRED one — but a plain <a href="tel:"> reports nothing, so Google Ads had
 * no idea these were happening. Same reasoning as WhatsAppLink.
 *
 * Always uses COMPANY.phoneClean rather than a literal, so the number lives in
 * exactly one place. Two of the call sites this replaced had it hard-coded.
 *
 * Client component so it can be used inside server components (Footer,
 * about-us, not-found) and still fire the conversion.
 */
export default function PhoneLink({ children, className, ...rest }: Props) {
  return (
    <a
      href={`tel:${COMPANY.phoneClean}`}
      className={className}
      onClick={() => trackConversion("phone_call")}
      {...rest}
    >
      {children}
    </a>
  );
}
