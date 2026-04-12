import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spec Home Construction",
  description:
    "Turn-key spec home development and construction. With 15+ years of experience, BRIO builds market-ready homes designed for strong ROI and fast sales.",
};

const WHY_CHOOSE = [
  {
    title: "Proven Experience",
    desc: "With 15+ years of experience in new home construction, we bring deep industry knowledge to every spec home project, ensuring quality and efficiency from start to finish.",
  },
  {
    title: "Market Expertise",
    desc: "We understand what sells. Our team analyzes buyer preferences, neighbourhood trends, and market data to design homes that maximize profitability and minimize time on market.",
  },
  {
    title: "Fast & Efficient Process",
    desc: "Our streamlined construction process gets your spec home built and sale-ready faster, without cutting corners on quality or craftsmanship.",
  },
  {
    title: "Energy-Efficient Solutions",
    desc: "We incorporate modern insulation, energy-efficient systems, and smart home features that today's buyers expect, adding value and reducing long-term operating costs.",
  },
  {
    title: "On-Time & On-Budget",
    desc: "We respect your investment timeline. Our experienced project managers keep construction on schedule and within budget so your returns are predictable.",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Market Research & Feasibility Study",
    desc: "We start by analyzing the local market, neighbourhood demographics, zoning regulations, and comparable sales to determine the optimal home type, size, and price point for maximum return.",
  },
  {
    step: 2,
    title: "Architectural Design & Planning",
    desc: "Our design team creates floor plans and elevations tailored to buyer demand. We handle permits, engineering, and all pre-construction planning to keep the project moving forward.",
  },
  {
    step: 3,
    title: "Project Management & Construction",
    desc: "From foundation to framing to finishes, our dedicated project managers oversee every phase of construction. We coordinate trades, manage timelines, and maintain strict quality control.",
  },
  {
    step: 4,
    title: "Energy-Efficient & High-Value Features",
    desc: "We build with today's buyer in mind: open-concept layouts, superior insulation, smart home technology, and luxury finishes that command premium pricing and attract serious buyers.",
  },
  {
    step: 5,
    title: "Sale-Ready Completion",
    desc: "Final inspections, professional staging recommendations, and a polished, move-in ready home. We deliver a product that's ready to list and designed to sell quickly at top dollar.",
  },
];

const INVEST_REASONS = [
  {
    title: "Faster Sales",
    desc: "Move-in ready homes sell faster than pre-sale or custom builds because buyers can see exactly what they're getting. A well-built spec home in the right market attracts offers quickly.",
  },
  {
    title: "Strong ROI",
    desc: "By controlling construction costs and building to market demand, spec homes offer strong returns on investment. Our market expertise helps you maximize profit on every project.",
  },
  {
    title: "Efficient Build Process",
    desc: "Without the back-and-forth of custom client decisions, spec homes follow a streamlined construction timeline. This efficiency translates to lower carrying costs and faster returns.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How long does it take to build a spec home?",
    a: "Most spec homes take 8 to 12 months from design to completion, depending on the size and complexity of the build. We provide a detailed timeline during the planning phase and keep you updated throughout construction.",
  },
  {
    q: "How much does spec home construction cost?",
    a: "Costs vary based on lot size, home design, materials, and finishes. During our initial consultation, we provide transparent cost estimates and work with you to optimize the budget for maximum return on investment.",
  },
  {
    q: "Can you help me find a lot for my spec home?",
    a: "Yes! We have extensive experience evaluating land opportunities across the Lower Mainland. We can help you assess lots for buildability, zoning potential, and market viability before you commit to a purchase.",
  },
  {
    q: "What financing options are available for spec home construction?",
    a: "We work with investors and developers who use a variety of financing structures, including construction loans and private lending. While we don't provide financing directly, we can connect you with trusted lending partners.",
  },
  {
    q: "What makes a spec home successful?",
    a: "The most successful spec homes are built in the right location, designed for the target buyer, priced competitively, and finished with quality materials. Our market research and construction expertise ensure your project checks all the boxes.",
  },
];

export default function SpecHomeConstructionPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-4">
            Turn-key Spec Home Development And Construction
          </h1>
          <p className="text-text-body text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
            Investing in real estate starts with building market-ready homes
            that attract buyers and deliver strong returns. With 15+ years of
            experience in new home construction, we understand market trends,
            zoning regulations, and buyer preferences &mdash; ensuring that your
            investment is built for success.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide"
          >
            Book Your Free Consultation Now!
          </Link>
        </div>
      </section>

      {/* Why Choose BRIO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Why Choose BRIO for Spec Home Construction?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title}>
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-text-body text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Spec Home Construction Process
          </h2>
          <div className="space-y-10">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-brio-navy text-white flex items-center justify-center text-[18px] font-semibold font-heading">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-body text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Spec Home Construction? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-6">
            What is Spec Home Construction?
          </h2>
          <p className="text-text-body text-[16px] leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            A spec home (short for &ldquo;speculative home&rdquo;) is a
            residential property built without a pre-identified buyer. The
            builder designs and constructs the home based on market research and
            buyer demand, then sells it upon or near completion. It&rsquo;s one
            of the most effective ways to invest in real estate development.
          </p>
          <h3 className="text-brio-navy text-[20px] font-semibold font-heading text-center mb-8">
            Why Invest in Spec Home Construction?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INVEST_REASONS.map((item) => (
              <div key={item.title} className="bg-brio-light-gray p-8">
                <h4 className="text-brio-navy text-[18px] font-semibold font-heading mb-3">
                  {item.title}
                </h4>
                <p className="text-text-body text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <FAQ items={FAQ_ITEMS} />
      <Footer />
    </>
  );
}
