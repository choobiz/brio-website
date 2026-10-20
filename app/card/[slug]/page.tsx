import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, Mail, Download, Globe, Star } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { getAllCards, getCard } from "@/lib/team";
import CardLeadForm from "@/components/card/CardLeadForm";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCards().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const card = getCard((await params).slug);
  if (!card) return {};
  return {
    title: `${card.name}, ${card.title}`,
    description: card.pitch,
    // A business card, not a landing page: keep it out of search results.
    robots: { index: false, follow: false },
    openGraph: { title: `${card.name} · ${COMPANY.name}`, description: card.pitch, images: [card.photo] },
  };
}

// Claims already made site-wide (components/shared/TrustBadgeStrip.tsx).
const CREDENTIALS = [
  "BC Housing Licensed Residential Builder",
  "2-5-10 New Home Warranty · Travelers",
  "HAVAN Member",
  "RenoMark Certified",
];

// lucide-react 1.x dropped brand icons, so the LinkedIn mark is inline.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const action =
  "flex flex-col items-center justify-center gap-1.5 h-[72px] rounded-lg border border-gray-200 bg-white text-brio-navy text-[12px] font-semibold uppercase tracking-wide shadow-sm active:bg-brio-light-gray";

export default async function CardPage({ params }: { params: Promise<{ slug: string }> }) {
  const card = getCard((await params).slug);
  if (!card) notFound();

  return (
    <main className="min-h-screen bg-brio-light-gray">
      <div className="mx-auto max-w-[440px] bg-white min-h-screen shadow-sm">
        <header className="bg-brio-navy px-6 pt-6 pb-20 text-center">
          <Image src="/images/logo-white.png" alt={COMPANY.name} width={160} height={48} className="mx-auto h-10 w-auto" priority />
        </header>

        <section className="px-6 -mt-16 text-center">
          <Image
            src={card.photo}
            alt={card.name}
            width={128}
            height={128}
            className="mx-auto h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
            priority
          />
          <h1 className="mt-4 text-[30px] leading-tight">{card.name}</h1>
          <p className="mt-1 text-[15px] font-semibold text-brio-navy">
            {card.title} · {COMPANY.name}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed">{card.pitch}</p>

          <a
            href={`/card/${card.slug}/contact`}
            className="mt-6 flex items-center justify-center gap-2 h-12 w-full rounded-md bg-brio-navy text-white font-semibold text-[14px] uppercase tracking-wide"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Save contact
          </a>

          <div className="mt-3 grid grid-cols-4 gap-2">
            <a href={`tel:${card.phoneClean}`} className={action} aria-label={`Call ${card.name}`}>
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call
            </a>
            {card.whatsapp ? (
              <a href={`https://wa.me/${card.whatsapp}`} className={action} aria-label={`WhatsApp ${card.name}`}>
                <MessageCircle className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
                WhatsApp
              </a>
            ) : null}
            <a href={`mailto:${card.email}`} className={action} aria-label={`Email ${card.name}`}>
              <Mail className="w-5 h-5" aria-hidden="true" />
              Email
            </a>
            {card.linkedin ? (
              <a href={card.linkedin} className={action} aria-label={`${card.name} on LinkedIn`}>
                <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
                LinkedIn
              </a>
            ) : null}
          </div>

          <dl className="mt-5 space-y-1 text-[14px]">
            <div>
              <dt className="sr-only">Mobile</dt>
              <dd>
                <a href={`tel:${card.phoneClean}`} className="text-brio-navy font-semibold">{card.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Email</dt>
              <dd>
                <a href={`mailto:${card.email}`} className="text-brio-navy">{card.email}</a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="mx-6 mt-7 border-t border-gray-200 pt-6">
          <div className="flex items-center justify-center gap-2 text-[14px]">
            <span className="flex text-[#F5A623]" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </span>
            <span className="font-semibold text-brio-navy">5.0 on Google</span>
            <span>· 100+ reviews</span>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {CREDENTIALS.map((c) => (
              <li key={c} className="rounded-md bg-brio-light-gray px-3 py-2.5 text-center text-[12px] font-semibold leading-snug text-brio-navy">
                {c}
              </li>
            ))}
          </ul>
          <Link
            href="/projects"
            className="mt-4 flex items-center justify-center gap-2 h-11 w-full rounded-md border-2 border-brio-navy text-brio-navy font-semibold text-[13px] uppercase tracking-wide"
          >
            <Globe className="w-4 h-4" aria-hidden="true" />
            See our work
          </Link>
        </section>

        <section className="mx-6 mt-7 border-t border-gray-200 pt-6 pb-8">
          <h2 className="text-[22px] text-center">Looking for a builder?</h2>
          <p className="mt-1 mb-4 text-center text-[14px]">
            Leave your details and {card.firstName} will follow up personally.
          </p>
          <CardLeadForm card={card.slug} firstName={card.firstName} phone={card.phone} />
        </section>

        <footer className="px-6 pb-10 text-center text-[12px] text-text-muted">
          <p>
            {COMPANY.legalName} · {COMPANY.address}
          </p>
          <p className="mt-1">
            <Link href="/" className="underline">builtbybrio.com</Link> · Office {COMPANY.phone}
          </p>
        </footer>
      </div>
    </main>
  );
}
