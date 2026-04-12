import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Painting Services",
  description:
    "BRIO Construction delivers a flawless, long-lasting finish for your home's interior and exterior, managed with professional precision.",
};

const SERVICE_CATEGORIES = [
  {
    title: "Full Interior Painting",
    items: [
      "Basement",
      "Drywall Repair",
      "Door Painting",
      "Cabinet Painting",
      "Popcorn Ceiling Removal",
      "Wallpaper Removal",
    ],
  },
  {
    title: "Complete Exterior Painting",
    items: [
      "Brick Painting / Staining",
      "Crown Molding & Trim",
      "Garage",
      "Siding & Soffits",
      "Garage Doors",
    ],
  },
  {
    title: "Outdoor Spaces & Structures",
    items: ["Deck", "Fence", "Railing", "Driveway Painting"],
  },
  {
    title: "Strata & Commercial Properties",
    items: ["Commercial Space", "Common Area", "Strata Painting"],
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Get Your Free Estimate",
    description:
      "Schedule a visit and receive a detailed, fixed-price proposal within 24 hours.",
  },
  {
    step: 2,
    title: "We Handle the Prep",
    description:
      "We protect your belongings and complete all critical prep work before a single brush stroke.",
  },
  {
    step: 3,
    title: "We Paint Your Home",
    description:
      "Experienced, uniformed painters deliver precision results with premium materials.",
  },
  {
    step: 4,
    title: "You Love Your New Space",
    description:
      "Walk through your freshly painted home and enjoy a finish that lasts for years.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What kind of paint do you use?",
    a: "We use premium Sherwin-Williams and Benjamin Moore products exclusively. These industry-leading brands deliver superior coverage, durability, and colour retention for both interior and exterior applications.",
  },
  {
    q: "How much does painting cost?",
    a: "Every project is unique, so we provide a fixed-price quote after an in-person consultation. There are no hidden fees or surprise charges — the price we quote is the price you pay.",
  },
  {
    q: "How long will my painting project take?",
    a: "Most rooms can be completed in a single day. Full interior projects typically take 2-5 days depending on scope, and exterior projects generally run 2-4 days depending on the size and condition of the surfaces.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. BRIO Construction is fully licensed with a BC Builder's Licence, carries comprehensive liability insurance, and maintains WorkSafeBC coverage for every crew member on your property.",
  },
];

export default function PaintingServicesPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">
            Stunning, High-Quality Painting &mdash; Without the Stress.
          </h1>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-3xl mx-auto">
            BRIO Construction delivers a flawless, long-lasting finish for your
            home&apos;s interior and exterior, managed with professional
            precision.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Get My Free, Detailed Estimate
          </Link>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading mb-4">
            The Easy Way to a Perfect Finish
          </h2>
          <p className="text-brio-navy text-[16px] md:text-[18px] font-semibold mb-6">
            Whether you&apos;re refreshing a dated look or need a flawless
            full-home refresh
          </p>
          <p className="text-text-body text-[16px] leading-relaxed max-w-3xl mx-auto">
            Typical painting projects come with risks: uneven coverage, paint on
            your floors, sloppy trim work, and crews that cut corners to finish
            fast. BRIO is different. We combine premium materials, meticulous
            prep, and experienced tradespeople to deliver a result you can be
            proud of — on time, on budget, and without the headaches.
          </p>
        </div>
      </section>

      {/* ── Service Types ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Painting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.title} className="bg-white p-6">
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-body text-[14px] flex items-start gap-2"
                    >
                      <span className="text-brio-navy font-bold mt-0.5">
                        &#10003;
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

      {/* ── Process Steps ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
