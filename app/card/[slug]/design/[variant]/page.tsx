// Design previews for the business card: /card/<slug>/design/<variant>.
// Not linked anywhere and not indexed; the chosen design replaces /card/<slug>.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { getAllCards, getCard } from "@/lib/team";
import { Bento, Luxury, Minimal, Mono, VARIANTS, type Variant } from "@/components/card/variants";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], display: "swap" });
const sans = Inter({ subsets: ["latin"], display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCards().flatMap((c) => VARIANTS.map((variant) => ({ slug: c.slug, variant })));
}

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function DesignPreview({ params }: { params: Promise<{ slug: string; variant: string }> }) {
  const { slug, variant } = await params;
  const card = getCard(slug);
  if (!card || !VARIANTS.includes(variant as Variant)) notFound();

  switch (variant as Variant) {
    case "luxury":
      return <Luxury card={card} serif={serif.className} />;
    case "mono":
      return <Mono card={card} sans={sans.className} />;
    case "minimal":
      return <Minimal card={card} sans={sans.className} />;
    case "bento":
      return <Bento card={card} sans={sans.className} />;
  }
}
