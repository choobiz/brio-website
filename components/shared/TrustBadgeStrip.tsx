import Image from "next/image";

/**
 * 6-badge trust strip combining review aggregator badges (Google, Houzz)
 * with credentialing badges (HAVAN, RenoMark, Travelers, BC Builder's
 * Licence). Renders right below the hero on service pages, per the
 * cross-market ad recon pattern (Seattle / Toronto / Bay Area).
 */

const Star = () => (
  <span aria-hidden="true" style={{ color: "#F5A623" }} className="text-[14px] tracking-tight leading-none">
    ★★★★★
  </span>
);

const GoogleWordmark = (
  <span
    className="font-bold text-[20px] leading-none tracking-[-0.5px]"
    aria-label="Google"
  >
    <span style={{ color: "#4285F4" }}>G</span>
    <span style={{ color: "#EA4335" }}>o</span>
    <span style={{ color: "#FBBC04" }}>o</span>
    <span style={{ color: "#4285F4" }}>g</span>
    <span style={{ color: "#34A853" }}>l</span>
    <span style={{ color: "#EA4335" }}>e</span>
  </span>
);

const HouzzWordmark = (
  <span
    className="font-bold text-[20px] leading-none tracking-[-0.5px] lowercase"
    style={{ color: "#7AC143" }}
    aria-label="Houzz"
  >
    houzz
  </span>
);

interface BadgeBase {
  sub?: React.ReactNode;
}
interface ImageBadge extends BadgeBase {
  kind: "image";
  src: string;
  alt: string;
  height: string;
}
interface TextBadge extends BadgeBase {
  kind: "text";
  render: React.ReactNode;
}
type Badge = ImageBadge | TextBadge;

const BADGES: Badge[] = [
  {
    kind: "text",
    render: GoogleWordmark,
    sub: (
      <span className="flex items-center gap-1.5 text-[12px] text-text-body whitespace-nowrap">
        <Star />
        <span className="font-semibold text-brio-navy">5.0</span>
        <span>· 100+ reviews</span>
      </span>
    ),
  },
  {
    kind: "text",
    render: HouzzWordmark,
    sub: (
      <span className="flex items-center gap-1.5 text-[12px] text-text-body whitespace-nowrap">
        <Star />
        <span className="font-semibold text-brio-navy">5.0</span>
        <span>· Best of Houzz</span>
      </span>
    ),
  },
  {
    kind: "image",
    src: "/images/partners/havan.png",
    alt: "HAVAN — Homebuilders Association Vancouver",
    height: "h-9",
    sub: <span className="text-[12px] text-text-body whitespace-nowrap">Member</span>,
  },
  {
    kind: "image",
    src: "/images/partners/renomark.png",
    alt: "RenoMark — Renovators Mark of Excellence",
    height: "h-12",
    sub: <span className="text-[12px] text-text-body whitespace-nowrap">Certified</span>,
  },
  {
    kind: "image",
    src: "/images/partners/travelers.png",
    alt: "Travelers Insurance",
    height: "h-9",
    sub: <span className="text-[12px] text-text-body whitespace-nowrap">Insured</span>,
  },
  {
    kind: "image",
    src: "/images/partners/bc-housing.png",
    alt: "BC Housing Licensed Builder",
    height: "h-9",
    sub: (
      <span className="text-[12px] text-text-body whitespace-nowrap">
        Licensed Builder
      </span>
    ),
  },
];

export default function TrustBadgeStrip() {
  return (
    <section
      className="bg-brio-light-gray py-8 md:py-10 border-y border-gray-200"
      aria-label="Trust and certifications"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-text-body mb-5 text-center">
          Trusted &amp; Certified By
        </p>
        <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap max-md:gap-x-6 max-md:gap-y-5">
          {BADGES.map((badge, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 min-w-[90px] max-md:min-w-[78px]"
            >
              <div className="h-10 flex items-center justify-center">
                {badge.kind === "image" ? (
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={140}
                    height={40}
                    className={`${badge.height} w-auto object-contain opacity-80`}
                  />
                ) : (
                  badge.render
                )}
              </div>
              {badge.sub && <div>{badge.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
