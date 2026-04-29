import Link from "next/link";
import { Check } from "lucide-react";

/**
 * 3-tier price strip for service pages, rendered immediately under the
 * hero. Cross-market ad recon found 9 of 11 Vancouver competitors hide
 * pricing — publishing tiers here is uncontested white space.
 * See: brio-marketing-hub/seo/reference-market-ad-intel.md (Pilot 4).
 */

export interface PriceTier {
  name: string;
  priceLabel: string;
  timeline: string;
  bullets: string[];
  featured?: boolean;
}

interface PriceTiersProps {
  tag: string;
  headline: string;
  subtext?: string;
  tiers: PriceTier[];
  ctaText: string;
  ctaHref: string;
  footnote?: string;
}

export default function PriceTiers({
  tag,
  headline,
  subtext,
  tiers,
  ctaText,
  ctaHref,
  footnote,
}: PriceTiersProps) {
  return (
    <section
      id="pricing"
      className="bg-white py-16 md:py-20"
      aria-labelledby="price-tiers-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-text-body text-[12px] uppercase tracking-[1.5px] font-semibold text-center mb-3">
          {tag}
        </p>
        <h2
          id="price-tiers-heading"
          className="font-heading text-[28px] md:text-[36px] font-semibold text-brio-navy text-center mb-3"
        >
          {headline}
        </h2>
        {subtext && (
          <p className="text-text-body text-[15px] leading-relaxed text-center max-w-[680px] mx-auto mb-10">
            {subtext}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 pt-3">
          {tiers.map((tier, i) => {
            const isFeatured = tier.featured;
            return (
              <div
                key={i}
                className={`relative flex flex-col bg-white p-6 transition-shadow ${
                  isFeatured
                    ? "border-2 border-brio-navy shadow-lg"
                    : "border border-gray-200 hover:shadow-md"
                }`}
              >
                {isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brio-navy text-white text-[11px] font-bold uppercase tracking-[1.2px] px-3 py-1 whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-5">
                  <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-brio-navy text-[28px] font-bold leading-none mb-1">
                    {tier.priceLabel}
                  </p>
                  <p className="text-text-body text-[13px]">{tier.timeline}</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-text-body text-[14px] leading-snug"
                    >
                      <Check
                        className="w-4 h-4 text-brio-navy shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={ctaHref}
                  className={`flex items-center justify-center h-11 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                    isFeatured
                      ? "bg-brio-navy text-white hover:bg-brio-navy/90"
                      : "border-2 border-brio-navy text-brio-navy hover:bg-brio-navy hover:text-white"
                  }`}
                >
                  {ctaText}
                </Link>
              </div>
            );
          })}
        </div>

        {footnote && (
          <p className="text-text-muted text-[12px] leading-snug text-center max-w-[760px] mx-auto">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
