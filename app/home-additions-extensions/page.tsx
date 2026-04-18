import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LeadForm from "@/components/shared/LeadForm";
import FAQ from "@/components/shared/FAQ";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Additions & Extensions",
  description:
    "Transform your space with home additions and extensions from BRIO Construction, expertly tailored to enhance your home's functionality and beauty.",
};

const WHY_ADD = [
  {
    title: "More Room for Your Family",
    description:
      "Growing families need growing spaces. A home addition gives you the extra bedrooms, bathrooms, or living areas you need without the hassle of moving.",
  },
  {
    title: "Increased Home Value",
    description:
      "Well-planned additions significantly boost your property\u2019s market value. It\u2019s one of the best investments you can make in your home.",
  },
  {
    title: "Customized Functionality",
    description:
      "Design your new space exactly how you want it \u2014 a home office, a larger kitchen, a playroom, or a private suite. Your addition, your rules.",
  },
  {
    title: "Seamless Integration",
    description:
      "Our team ensures your addition blends perfectly with your existing home, both inside and out, so it looks and feels like it was always part of the original design.",
  },
  {
    title: "On-Time & On-Budget",
    description:
      "We pride ourselves on delivering projects on schedule and within budget. Our transparent process means no surprises along the way.",
  },
];

const SERVICE_TYPES = [
  {
    title: "Room Additions",
    items: [
      "Extra bedrooms, bathrooms, or home offices",
      "Entertainment and media rooms",
      "Sunrooms and four-season rooms",
      "Seamless integration with existing layout",
    ],
  },
  {
    title: "Kitchen & Dining Room Expansions",
    items: [
      "Open-concept kitchen and dining areas",
      "Extended countertop and cabinet space",
      "Modern layouts for cooking and entertaining",
      "Upgraded plumbing, electrical, and lighting",
    ],
  },
  {
    title: "Second-Storey Additions",
    items: [
      "Double your living space without losing yard",
      "Master suites with ensuite bathrooms",
      "Structural engineering and permit handling",
      "Matching roofline and exterior finishes",
    ],
  },
  {
    title: "Garage Conversions & Extensions",
    items: [
      "Convert to a rental suite or home gym",
      "Workshop or creative studio space",
      "Additional bedrooms or living areas",
      "Garage extensions for extra storage or parking",
    ],
  },
  {
    title: "In-Law Suites & Secondary Dwellings",
    items: [
      "Self-contained suites with full kitchens",
      "Private entrances and separate utilities",
      "Legal secondary dwelling compliance",
      "Rental income potential",
    ],
  },
];

const WHY_BRIO = [
  "15+ years of residential construction experience across Greater Vancouver.",
  "Custom designs that match your existing home\u2019s style, materials, and architecture.",
  "Full-service project management from permits to final walkthrough.",
  "Transparent, fixed-price quotes with no hidden fees or surprises.",
];

const FAQ_ITEMS = [
  {
    q: "How much does a home addition cost?",
    a: "The cost of a home addition depends on size, complexity, materials, and finishes. Small room additions can start around $50,000, while larger second-storey additions or major expansions can range from $150,000 to $400,000 or more. We provide detailed estimates during the planning phase.",
  },
  {
    q: "Do I need permits for a home addition?",
    a: "Yes, most home additions require building permits and sometimes development permits depending on the scope of work and your municipality. BRIO handles all permit applications and approvals on your behalf.",
  },
  {
    q: "How long does a home addition take?",
    a: "Most home additions take 3 to 6 months from design to completion, depending on the size and complexity of the project. We provide a clear timeline at the start of every project so you know what to expect.",
  },
  {
    q: "Will my addition match the existing home?",
    a: "Absolutely. We carefully match materials, finishes, rooflines, and architectural details so your addition blends seamlessly with the original structure. Our goal is to make it look like it was always part of the home.",
  },
  {
    q: "Can I live in my home during the renovation?",
    a: "In most cases, yes. We take every precaution to minimize disruption to your daily life, including dust barriers, scheduled work hours, and daily cleanup. For larger additions, we\u2019ll discuss the best plan to keep you comfortable throughout the process.",
  },
];

export default function HomeAdditionsExtensionsPage() {
  return (
    <>
      <Navbar />

      {/* ── 1. Hero — Two-column: text left, image right ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left — text */}
            <div className="py-16 md:py-24 md:pr-12 flex flex-col justify-center">
              <h1 className="font-heading text-[36px] md:text-[46px] font-semibold italic text-brio-navy leading-[1.15] mb-5">
                Expand Your Living Space with BRIO
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-5 max-w-lg">
                Is your home feeling too small? Whether you need an extra bedroom,
                a larger kitchen, or a full second-storey addition, BRIO
                Construction can help you expand your living space without the
                hassle of moving.
              </p>
              <p className="text-text-body text-[15px] leading-relaxed mb-8 max-w-lg">
                From design to construction, we deliver smooth, stress-free
                renovations that transform your home into the space your family
                deserves.
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
            <div className="relative h-[350px] md:h-auto md:min-h-[520px]">
              <Image
                src="/images/city/img-04.jpg"
                alt="Home addition project by BRIO Construction"
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

      {/* ── 3. Why Do a Home Addition — checkmarks ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — image */}
            <div className="relative h-[350px] md:h-[480px] overflow-hidden">
              <Image
                src="/images/city/img-04.jpg"
                alt="BRIO home addition in progress"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Right — checkmarks */}
            <div>
              <h2 className="font-heading text-[24px] md:text-[32px] font-semibold text-brio-navy uppercase tracking-wide mb-8">
                Why Do a Home Addition?
              </h2>
              <ul className="space-y-5">
                {WHY_ADD.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="text-brio-navy text-[15px] font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-text-body text-[13px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Service Types — sticky CTA left, categories right ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — sticky CTA */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-heading text-[24px] md:text-[30px] font-semibold text-brio-navy uppercase tracking-wide leading-snug mb-5">
                Our Home Addition Services
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                From room additions and kitchen expansions to full second-storey
                builds, BRIO delivers custom home additions that blend seamlessly
                with your existing home. Every project includes expert design,
                permit management, and a dedicated project manager.
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-7 py-3.5 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Get My Free, Detailed Estimate
              </Link>
            </div>

            {/* Right — service categories */}
            <div className="space-y-8">
              {SERVICE_TYPES.map((service, idx) => (
                <div key={service.title}>
                  <h3 className="font-heading text-[16px] font-semibold text-brio-navy uppercase tracking-wide italic mb-3">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-text-body text-[14px] leading-relaxed"
                      >
                        <Check className="w-4 h-4 text-brio-navy shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {idx < SERVICE_TYPES.length - 1 && (
                    <div className="border-b border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose BRIO — 4 checkmark bullets ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — bullet list */}
            <div>
              <h2 className="font-heading text-[24px] md:text-[30px] font-semibold text-brio-navy uppercase tracking-wide leading-snug mb-6">
                Why Choose BRIO for Your Home Addition?
              </h2>
              <ul className="space-y-4">
                {WHY_BRIO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    <p className="text-text-body text-[14px] leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right — CTA block */}
            <div>
              <p className="text-text-body text-[15px] leading-relaxed mb-6">
                At BRIO Construction, we combine expert craftsmanship, premium
                materials, and a streamlined process to deliver home additions
                that feel like they were always part of your home. From initial
                design and permits to construction and final walkthrough, we
                manage every detail so you don&apos;t have to.
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-7 py-3.5 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Book Your Free Consultation Today!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Contact + FAQ side by side ── */}
      <section id="get-in-touch" className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — form */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-2 uppercase tracking-wide">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed mb-6">
                Ready to explore the possibilities for your home addition?
                Share a few details below, and our team will get in touch to
                schedule a friendly, no-obligation consultation.
              </p>
              <LeadForm source="home-additions-extensions" service="home-additions" variant="stacked" />
            </div>

            {/* Right — FAQ */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-6 uppercase tracking-wide">
                Frequently Asked Questions
              </h3>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Newsletter ── */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-text-muted text-[11px] uppercase tracking-widest mb-1">
                Subscribe
              </p>
              <h2 className="font-heading text-[22px] md:text-[26px] font-bold text-brio-navy mb-2">
                The Inside Look
              </h2>
              <p className="text-text-body text-[13px] leading-relaxed mb-4 max-w-md">
                The email newsletter that delivers curated home decor and
                furniture picks, expert design advice, and more. Join 4,000+
                subscribers.
              </p>
              <form className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="flex-1 h-10 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <button
                  type="submit"
                  className="h-10 px-5 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[12px] hover:bg-brio-navy/90 transition-colors shrink-0"
                >
                  Sign Me Up
                </button>
              </form>
            </div>
            <div className="hidden md:block relative w-[200px] h-[240px] rounded-t-full overflow-hidden">
              <Image
                src="/images/newsletter.png"
                alt="Builder overlooking a construction site"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Footer ── */}
      <Footer />
    </>
  );
}
