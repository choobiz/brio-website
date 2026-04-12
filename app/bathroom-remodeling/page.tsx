import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import TrustSignals from "@/components/service/TrustSignals";
import Testimonials from "@/components/service/Testimonials";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bathroom Remodeling",
  description:
    "Transform your bathroom with expert bathroom remodeling services from BRIO Construction. Upgrade your space with style and confidence today!",
};

const PACKAGES = [
  {
    name: "The Refresh Package",
    tagline: "A Clean Slate. A Modern Space.",
    price: "$15,000",
    features: [
      "New acrylic tub/surround",
      "Durable porcelain tile",
      "Professional installation",
      "Quality fixtures upgrade",
      "12-month warranty",
    ],
    financing: "$160/month",
  },
  {
    name: "The Retreat Package",
    tagline: "Your Daily Escape, Designed for You.",
    price: "$25,000",
    features: [
      "Tiled soaker tub surround",
      "Quartz countertops",
      "Upgraded fixtures",
      "Designer tile selection",
      "Enhanced lighting",
      "Personal style consultation",
    ],
    financing: "$270/month",
    popular: true,
  },
  {
    name: "The Spa Package",
    tagline: "Experience Ultimate In-Home Luxury.",
    price: "$50,000+",
    features: [
      "Custom walk-in shower",
      "Heated flooring system",
      "Custom vanity design",
      "Frameless glass enclosure",
      "Premium natural materials",
      "Luxury spa features",
    ],
    financing: "$550/month",
  },
];

const COMPARISON_ROWS = [
  {
    category: "Best For",
    refresh:
      "Modernizing a dated bathroom, rental units, or anyone seeking a durable, and cost-effective transformation.",
    retreat:
      "Homeowners wanting a significant upgrade in comfort and style with premium materials and personalized touches. Our most popular choice.",
    spa: "Creating a luxurious, wellness-focused oasis with high-end fixtures, custom features, and the ultimate in comfort and design.",
  },
  {
    category: "Tub/Shower",
    refresh:
      "New Acrylic Tub & Surround: A one-piece or multi-piece acrylic unit. Easy to clean, 100% waterproof, and installed with a quality tub/shower faucet.",
    retreat:
      "Tiled Tub Surround: New deep soaker tub with a full-height tiled surround. Includes a recessed storage niche for shampoos.",
    spa: "Custom Walk-in Shower: A curbless or low-curb shower with a custom tile base, full-height tile, a linear drain, and a 10mm frameless glass enclosure.",
  },
  {
    category: "Vanity & Countertop",
    refresh:
      'Stock Vanity (24"-36"): A quality stock vanity with a durable cultured marble or porcelain sink top. Soft-close doors/drawers.',
    retreat:
      "Semi-Custom Vanity (up to 60\"): Wider selection of styles and colours. Topped with a stylish and durable quartz countertop and an undermount sink.",
    spa: "Custom-Built Floating Vanity: Bespoke design and finish. Topped with premium quartz or natural stone, often with dual sinks and designer hardware.",
  },
  {
    category: "Flooring",
    refresh:
      "Porcelain Tile: Durable, water-resistant, and professionally installed porcelain tile from a curated selection of modern styles.",
    retreat:
      "Upgraded Porcelain or LVP: Larger format porcelain tiles or high-end Luxury Vinyl Plank for a warmer feel.",
    spa: "Heated Flooring System: In-floor heating system (e.g., Nuheat) installed under large-format porcelain, marble, or natural stone tile.",
  },
  {
    category: "Toilet",
    refresh:
      "Standard-Height Toilet: A reliable, efficient, and modern-looking floor-mounted toilet.",
    retreat:
      "Comfort-Height Toilet: An upgraded one-piece, chair-height toilet for improved comfort and easier cleaning.",
    spa: "Wall-Mounted or Skirted Toilet: A high-end, wall-hung toilet for a minimalist look and ultimate ease of cleaning, or a fully skirted one-piece model.",
  },
  {
    category: "Fixtures",
    refresh:
      "Builder-Quality Fixtures: Reputable brands like Delta or Moen for a chrome finish. Includes faucet, showerhead, and tub spout.",
    retreat:
      "Designer Fixtures: Upgraded fixture collection (e.g., Delta Trinsic, Moen Genta) in finishes like matte black, brushed nickel, or brass.",
    spa: "Luxury Fixture Suite: Premium brands like Brizo, Hansgrohe, or Kohler Purist. Includes a thermostatic valve system with a rain head and hand shower.",
  },
  {
    category: "Lighting & Ventilation",
    refresh:
      "Builder-Grade Light & Fan: A standard vanity light fixture and a basic, code-compliant bathroom exhaust fan.",
    retreat:
      "Upgraded Lighting & Fan: A stylish new vanity light, a moisture-sensing, ultra-quiet Panasonic exhaust fan, and a single pot light in the shower.",
    spa: "Layered Lighting Plan: Dimmable LED pot lights, elegant vanity sconces, shower pot light, and often features like a backlit mirror or toe-kick lighting.",
  },
  {
    category: "Labor & Project Mgmt.",
    refresh:
      "Full BRIO Construction Service: Includes complete demolition, expert installation, trade coordination, site protection, daily cleanup, and dedicated project management.",
    retreat:
      "Full BRIO Construction Service: Same comprehensive management with more detailed installation for tile, custom niches, and upgraded fixtures.",
    spa: "White-Glove BRIO Service: Meticulous project oversight for complex installations like curbless showers, heated floors, and custom millwork.",
  },
];

const KEY_SELLING_POINTS = [
  {
    title: "Seamless, Stress-Free Experience",
    items: [
      "2-Week Remodel: From demolition to a stunning reveal, we work efficiently to minimize disruption.",
      "Zero Delays: Our streamlined process and dedicated team ensure your project stays on track.",
    ],
  },
  {
    title: "Affordable Luxury at Its Best",
    items: [
      "Competitive pricing with packages starting from $15,000.",
      "Complimentary 3D Rendering: See your dream bathroom before we start building.",
    ],
  },
  {
    title: "Proven Expertise",
    items: [
      "Licensed & Insured: Full BC Builder\u2019s License and comprehensive warranty insurance.",
      "Trusted Industry Leaders: HAVAN members and RenoMark certified.",
      "15+ Years of Experience: Hundreds of successful bathroom transformations.",
    ],
  },
  {
    title: "Commitment to Quality",
    items: [
      "12-month workmanship warranty on every project.",
      "Premium materials and skilled tradespeople on every job.",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Book Your Free Consultation",
    description:
      "Meet with our design team to discuss your vision, needs, and budget. We\u2019ll walk through your space and explore possibilities together.",
  },
  {
    step: 2,
    title: "Visualize Your Dream Space",
    description:
      "Receive a complimentary 3D rendering so you can see exactly what your new bathroom will look like before any work begins.",
  },
  {
    step: 3,
    title: "Transform Your Bathroom in 2 Weeks",
    description:
      "Our expert team gets to work, delivering a complete bathroom transformation with minimal disruption to your daily life.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How does the design process work?",
    a: "It starts with an initial consultation to discuss your vision, needs, and budget. Our design team helps you select materials, fixtures, and finishes. You\u2019ll receive a complimentary 3D rendering so you can visualize the final result before construction begins.",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "After our design and selection phase, we need just 2 weeks from demolition to handover. Our streamlined process and dedicated team ensure zero delays and minimal disruption to your daily routine.",
  },
  {
    q: "What ensures quality craftsmanship?",
    a: "We adhere to strict industry standards, employ skilled tradespeople, and use only high-quality materials. Every project comes with a 12-month workmanship warranty, and we are Licensed, Insured, HAVAN members, and RenoMark certified.",
  },
  {
    q: "Do I need design ideas before starting?",
    a: "Not at all! While having a vision is beneficial, it\u2019s not mandatory. Our experienced design team can collaborate with you to develop a design that aligns with your preferences and budget. We\u2019ll guide you through material and fixture selections.",
  },
  {
    q: "How can I prepare for a bathroom remodel?",
    a: "Clear out personal items from the bathroom, protect adjacent areas from dust, and set up alternative bathroom facilities if needed. Our team will walk you through a detailed preparation checklist and handle all site protection and daily cleanup.",
  },
];

export default function BathroomPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">
            Transform Your Bathroom in Record Time with Brio!
          </h1>
          <ul className="space-y-2 mb-6">
            <li className="text-brio-navy font-semibold text-[18px]">
              Complete Remodel in Just 2 weeks!
            </li>
            <li className="text-brio-navy font-semibold text-[18px]">
              Starting at Very Low Prices
            </li>
            <li className="text-brio-navy font-semibold text-[18px]">
              Complimentary 3D Rendering
            </li>
          </ul>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Book Your Free Consultation Now
          </Link>
        </div>
      </section>

      {/* ── 3 Packages ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            BRIO Bathroom Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-brio-light-gray p-8 flex flex-col ${pkg.popular ? "ring-2 ring-brio-navy relative" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brio-navy text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </div>
                )}
                <h3 className="text-brio-navy text-[20px] font-semibold font-heading mb-1">
                  {pkg.name}
                </h3>
                <p className="text-text-muted text-[13px] italic mb-4">
                  {pkg.tagline}
                </p>
                <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                  Starting from
                </p>
                <p className="text-brio-navy text-[32px] font-bold mb-4">
                  {pkg.price}
                  <span className="text-[14px] font-normal">*</span>
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="text-text-body text-[14px] flex items-start gap-2"
                    >
                      <span className="text-brio-navy mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="bg-white p-3 text-center mb-4">
                  <p className="text-text-muted text-xs">Financing Available</p>
                  <p className="text-brio-navy font-bold">{pkg.financing}</p>
                  <p className="text-text-muted text-[11px]">
                    12-month interest-free financing
                  </p>
                </div>
                <Link
                  href="#get-in-touch"
                  className="block w-full text-center bg-brio-navy text-white py-3 text-[13px] font-semibold uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Compare Our Bathroom Packages
          </h2>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-brio-navy text-white text-[14px] font-semibold uppercase tracking-wide w-[18%]">
                    Category
                  </th>
                  <th className="text-left p-4 bg-brio-navy text-white text-[14px] font-semibold uppercase tracking-wide w-[27%]">
                    Refresh &mdash; $15,000
                  </th>
                  <th className="text-left p-4 bg-brio-navy text-white text-[14px] font-semibold uppercase tracking-wide w-[27%]">
                    Retreat &mdash; $25,000
                  </th>
                  <th className="text-left p-4 bg-brio-navy text-white text-[14px] font-semibold uppercase tracking-wide w-[27%]">
                    Spa &mdash; $50,000+
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.category}
                    className={i % 2 === 0 ? "bg-white" : "bg-brio-light-gray"}
                  >
                    <td className="p-4 text-brio-navy font-semibold text-[14px] align-top">
                      {row.category}
                    </td>
                    <td className="p-4 text-text-body text-[13px] leading-relaxed align-top">
                      {row.refresh}
                    </td>
                    <td className="p-4 text-text-body text-[13px] leading-relaxed align-top">
                      {row.retreat}
                    </td>
                    <td className="p-4 text-text-body text-[13px] leading-relaxed align-top">
                      {row.spa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="lg:hidden space-y-6">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.category} className="bg-white p-5">
                <h3 className="text-brio-navy font-semibold text-[16px] font-heading mb-4 border-b border-border pb-2">
                  {row.category}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-brio-navy text-[13px] font-semibold uppercase tracking-wide mb-1">
                      Refresh
                    </p>
                    <p className="text-text-body text-[13px] leading-relaxed">
                      {row.refresh}
                    </p>
                  </div>
                  <div>
                    <p className="text-brio-navy text-[13px] font-semibold uppercase tracking-wide mb-1">
                      Retreat
                    </p>
                    <p className="text-text-body text-[13px] leading-relaxed">
                      {row.retreat}
                    </p>
                  </div>
                  <div>
                    <p className="text-brio-navy text-[13px] font-semibold uppercase tracking-wide mb-1">
                      Spa
                    </p>
                    <p className="text-text-body text-[13px] leading-relaxed">
                      {row.spa}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Selling Points ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Why Choose BRIO for Your Bathroom Remodel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {KEY_SELLING_POINTS.map((point) => (
              <div key={point.title}>
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-3">
                  {point.title}
                </h3>
                <ul className="space-y-2">
                  {point.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-body text-[14px] leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-brio-navy font-bold mt-0.5">
                        &#x2022;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Signals ── */}
      <TrustSignals />

      {/* ── Testimonials ── */}
      <Testimonials heading="Elevate Your Bathroom — Complete Remodels in Just 2 Weeks" />

      {/* ── Process Steps ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-brio-navy text-white flex items-center justify-center text-[22px] font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                  {s.title}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Book Your Free Consultation Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <ContactForm />

      {/* ── FAQ ── */}
      <FAQ items={FAQ_ITEMS} />

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
