// Pieces shared by every card design (main card + /design/<variant> previews).

import { Phone, MessageCircle, Mail } from "lucide-react";
import type { TeamCard } from "@/lib/team";

// lucide-react 1.x dropped brand icons, so the LinkedIn mark is inline.
export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export interface CardAction {
  key: "call" | "whatsapp" | "email" | "linkedin";
  href: string;
  label: string;
  aria: string;
  Icon: (p: { className?: string }) => React.ReactNode;
}

export function cardActions(card: TeamCard): CardAction[] {
  const a: CardAction[] = [
    { key: "call", href: `tel:${card.phoneClean}`, label: "Call", aria: `Call ${card.name}`, Icon: Phone },
  ];
  if (card.whatsapp) {
    a.push({ key: "whatsapp", href: `https://wa.me/${card.whatsapp}`, label: "WhatsApp", aria: `WhatsApp ${card.name}`, Icon: MessageCircle });
  }
  a.push({ key: "email", href: `mailto:${card.email}`, label: "Email", aria: `Email ${card.name}`, Icon: Mail });
  if (card.linkedin) {
    a.push({ key: "linkedin", href: card.linkedin, label: "LinkedIn", aria: `${card.name} on LinkedIn`, Icon: LinkedinIcon });
  }
  return a;
}

// Claims already made site-wide (components/shared/TrustBadgeStrip.tsx).
export const CREDENTIALS = [
  "BC Housing Licensed Residential Builder",
  "2-5-10 New Home Warranty · Travelers",
  "HAVAN Member",
  "RenoMark Certified",
];
