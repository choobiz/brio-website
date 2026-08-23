"use client";

import { COMPANY } from "@/lib/constants";
import { trackConversion } from "@/lib/tracking";

interface Props {
  /** Visible content of the link. */
  children: React.ReactNode;
  className?: string;
  /** Overrides the default pre-filled message (e.g. per service page). */
  message?: string;
  "aria-label"?: string;
}

/**
 * WhatsApp click-to-chat link.
 *
 * wa.me expects the number in E.164 WITHOUT the leading "+", and the prefilled
 * text URL-encoded — hence COMPANY.whatsappNumber rather than phoneClean, which
 * carries the "+" and would produce a broken deep link.
 *
 * Client component so it can be dropped into server components (Footer) and
 * still report the conversion.
 */
export default function WhatsAppLink({ children, className, message, ...rest }: Props) {
  const text = encodeURIComponent(message ?? COMPANY.whatsappMessage);
  const href = `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackConversion("whatsapp_click")}
      {...rest}
    >
      {children}
    </a>
  );
}
