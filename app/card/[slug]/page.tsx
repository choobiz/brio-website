import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, Globe, Star } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { getAllCards, getCard } from "@/lib/team";
import CardLeadForm from "@/components/card/CardLeadForm";
import { cardActions, CREDENTIALS } from "@/components/card/parts";

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

const action =
  "flex items-center justify-center gap-2.5 h-14 min-w-0 px-4 rounded-lg border border-gray-200 bg-white text-brio-navy text-[14px] font-semibold shadow-sm active:bg-brio-light-gray";

const ICON_COLOR: Record<string, string> = { whatsapp: "text-[#25D366]", linkedin: "text-[#0A66C2]" };

export default async function CardPage({ params }: { params: Promise<{ slug: string }> }) {
  const card = getCard((await params).slug);
  if (!card) notFound();

  return (
    <main className="min-h-screen max-md:-mb-[68px] bg-brio-light-gray">
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

          <div className="mt-4 grid grid-cols-2 gap-3">
            {cardActions(card).map(({ key, href, label, aria, Icon }) => (
              <a key={key} href={href} className={action} aria-label={aria}>
                <Icon className={`w-5 h-5 shrink-0 ${ICON_COLOR[key] ?? ""}`} />
                {label}
              </a>
            ))}
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
          <h2 className="text-[20px] text-center">Let&apos;s connect</h2>
          <p className="mt-1 mb-4 text-center text-[14px]">
            Leave your details and I&apos;ll be in touch.
          </p>
          <CardLeadForm card={card.slug} phone={card.phone} />
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
