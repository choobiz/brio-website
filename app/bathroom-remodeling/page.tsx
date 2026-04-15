import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import BeforeAfterSlider from "@/components/service/BeforeAfterSlider";
import Newsletter from "@/components/home/Newsletter";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

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

const TESTIMONIALS = [
  {
    name: "Sam S.",
    location: "Vancouver",
    project: "Spec Home",
    text: "BRIO Construction exceeded our expectations on every level. Their attention to detail and commitment to quality craftsmanship transformed our spec home into something truly special. Communication was excellent throughout the entire process.",
  },
  {
    name: "Ron M.",
    location: "North Vancouver",
    project: "Full Renovation",
    text: "From start to finish, the BRIO team was professional, transparent, and delivered outstanding results. Our full home renovation was completed on time and on budget. We couldn\u2019t be happier with the final outcome.",
  },
  {
    name: "K.M.",
    location: "Vancouver",
    project: "Bathroom Remodeling",
    text: "We hired BRIO for our bathroom remodel and were blown away by the quality of work. The team was respectful of our home, cleaned up daily, and the finished product looks absolutely stunning. Highly recommend!",
  },
];

export default function BathroomPage() {
  return (
    <>
      <Navbar />

      {/* ── 1. Hero — Two-column: text left, bathroom image right ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left — text */}
            <div className="py-16 md:py-24 md:pr-12">
              <h1 className="text-[32px] md:text-[44px] font-semibold italic text-brio-navy font-heading mb-6 leading-tight">
                Transform Your Bathroom In Record Time With Brio!
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-1">
                <span className="font-bold">Complete Remodel in Just 2 weeks!</span> &ndash; No long waits, no hassle!
              </p>
              <p className="text-text-body text-[15px] leading-relaxed mb-1">
                <span className="font-bold">Starting at Very Low Prices</span> &ndash; High-quality renovation at an unbeatable price.
              </p>
              <p className="text-text-body text-[15px] leading-relaxed mb-1">
                <span className="font-bold">Complimentary 3D Rendering</span> &ndash; See your new bathroom <span className="font-bold">before</span> construction begins! <span className="font-bold">Limited-Time Offer &ndash; Act Now!</span>
              </p>
              <p className="text-text-body text-[15px] mt-4 mb-7">
                Don&apos;t miss out! Upgrade your bathroom with confidence.
              </p>
              <div>
                <Link
                  href="#get-in-touch"
                  className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Book Your Free Consultation Now
                </Link>
              </div>
            </div>
            {/* Right — image */}
            <div className="relative h-[300px] md:h-auto md:min-h-[480px]">
              <Image
                src="/images/city/img-08.webp"
                alt="Modern bathroom renovation by BRIO Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Partners ── */}
      <PartnersCarousel />

      {/* ── 3. BRIO Bathroom Packages ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12 uppercase tracking-wide">
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
                      <Check className="w-4 h-4 text-brio-navy mt-0.5 shrink-0" />
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
                  <Link
                    href="#get-in-touch"
                    className="text-brio-navy text-[12px] underline hover:no-underline mt-1 inline-block"
                  >
                    Learn More
                  </Link>
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

      {/* ── 4. Comparison Table ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-2 uppercase tracking-wide">
            BATHROOM RENOVATION PACKAGES
          </h2>
          <p className="text-text-muted text-[15px] text-center mb-12">
            Transform your bathroom with our comprehensive renovation packages
          </p>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-brio-navy text-white text-[14px] font-semibold uppercase tracking-wide w-[16%]">
                    Feature
                  </th>
                  <th className="text-left p-4 bg-brio-navy text-white text-[14px] font-semibold uppercase tracking-wide w-[28%]">
                    Package 1: The Refresh ($15K-$23K)
                  </th>
                  <th className="text-left p-4 bg-brio-navy text-white text-[14px] font-semibold uppercase tracking-wide w-[28%]">
                    Package 2: The Retreat ($25K-$45K)
                  </th>
                  <th className="text-left p-4 bg-brio-navy text-white text-[14px] font-semibold uppercase tracking-wide w-[28%]">
                    Package 3: The Spa ($50K+)
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

      {/* ── 5. Before/After Sliders ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12 uppercase tracking-wide">
            CHECK OUT THESE TRANSFORMATIONS!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BeforeAfterSlider
              before="/images/bathroom/before-1.webp"
              after="/images/bathroom/after-1.webp"
              altBefore="Bathroom before renovation 1"
              altAfter="Bathroom after renovation 1"
            />
            <BeforeAfterSlider
              before="/images/bathroom/before-2.webp"
              after="/images/bathroom/after-2.webp"
              altBefore="Bathroom before renovation 2"
              altAfter="Bathroom after renovation 2"
            />
            <BeforeAfterSlider
              before="/images/bathroom/before-3.webp"
              after="/images/bathroom/after-3.webp"
              altBefore="Bathroom before renovation 3"
              altAfter="Bathroom after renovation 3"
            />
          </div>
        </div>
      </section>

      {/* ── 6. Trust Signals — Two-column ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: bullet items */}
            <div className="space-y-6">
              {KEY_SELLING_POINTS.map((point) => (
                <div key={point.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-brio-navy shrink-0 mt-1" />
                  <div>
                    <h3 className="text-brio-navy text-[16px] font-semibold font-heading mb-1">
                      {point.title}
                    </h3>
                    <ul className="space-y-1">
                      {point.items.map((item) => (
                        <li
                          key={item}
                          className="text-text-body text-[14px] leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: CTA block */}
            <div>
              <h2 className="text-[24px] md:text-[30px] font-semibold text-brio-navy font-heading mb-4 uppercase tracking-wide">
                REMODEL WITH CONFIDENCE &ndash; CHOOSE BRIO
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-6">
                At BRIO Construction, we combine expert craftsmanship, premium
                materials, and a streamlined process to deliver stunning bathroom
                transformations in just 2 weeks. From complimentary 3D renderings
                to a 12-month workmanship warranty, every detail is designed to
                give you peace of mind and a bathroom you&apos;ll love.
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                BOOK YOUR FREE CONSULTATION NOW!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Gallery ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold italic text-brio-navy font-heading text-center mb-12 uppercase tracking-wide">
            ELEVATE YOUR BATHROOM COMPLETE REMODELS IN JUST 2 WEEKS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <div key={n} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/images/bathroom/gallery-${n}.webp`}
                  alt={`Bathroom renovation gallery ${n}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Testimonials ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12 uppercase tracking-wide">
            WHAT HOMEOWNERS ARE SAYING!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white p-8">
                <p className="text-text-body text-[14px] leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-brio-navy font-semibold text-[15px]">
                    {t.name}
                  </p>
                  <p className="text-text-muted text-[13px]">
                    {t.location} &mdash; {t.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Contact + FAQ side by side ── */}
      <section id="get-in-touch" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2 className="text-[24px] md:text-[30px] font-semibold text-brio-navy font-heading mb-6 uppercase tracking-wide">
                Get In Touch
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                    Service Address
                  </label>
                  <input
                    type="text"
                    placeholder="Project address"
                    className="w-full h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
                  />
                </div>
                <div>
                  <label className="block text-text-body text-[13px] font-semibold uppercase tracking-wide mb-1">
                    Description
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-border text-sm focus:outline-none focus:border-brio-navy resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brio-navy text-white py-4 text-[14px] font-semibold uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Book Now
                </button>
              </form>
            </div>

            {/* Right: FAQ */}
            <div>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Newsletter ── */}
      <Newsletter />

      {/* ── 11. Footer ── */}
      <Footer />
    </>
  );
}
