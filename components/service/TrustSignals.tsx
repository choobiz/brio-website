import Link from "next/link";

const TRUST_ITEMS = [
  {
    title: "Licensed & Insured",
    description:
      "We hold a BC Builder\u2019s License and provide comprehensive 2-5-10 year home warranty insurance, ensuring your project is protected at every stage.",
  },
  {
    title: "Industry Recognized",
    description:
      "As proud members of the Homebuilders Association Vancouver (HAVAN) and RenoMark certified, we adhere to the highest standards in the renovation industry.",
  },
  {
    title: "Proven Expertise",
    description:
      "With over 15 years of experience and numerous 5-star reviews, our track record speaks to our commitment to quality and client satisfaction.",
  },
  {
    title: "Transparent Processes",
    description:
      "We prioritize clear communication and transparent pricing, ensuring you\u2019re informed and comfortable throughout your project\u2019s journey.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Our dedication to superior workmanship is backed by a comprehensive warranty, reflecting our confidence in delivering lasting results.",
  },
];

export default function TrustSignals() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="space-y-4 mb-10">
          {TRUST_ITEMS.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="text-brio-navy font-bold mt-0.5">&#x2022;</span>
              <div>
                <span className="font-semibold text-brio-navy text-[15px]">
                  {item.title}:
                </span>{" "}
                <span className="text-text-body text-[15px]">{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <h3 className="text-[24px] md:text-[28px] font-semibold text-brio-navy font-heading mb-4">
            Remodel with Confidence &mdash; Choose BRIO
          </h3>
          <p className="text-text-body text-[15px] mb-6">
            At BRIO Construction, we believe in delivering excellence without compromise.
            Partnering with us is a decision you can trust!
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Book Your Free Consultation Today!
          </Link>
        </div>
      </div>
    </section>
  );
}
