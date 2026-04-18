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

      {/* 1. Hero — Two-column, white background */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left – text */}
            <div className="py-16 md:py-24 md:pr-12 flex flex-col justify-center">
              <h1 className="font-heading text-[36px] md:text-[46px] font-semibold text-brio-navy leading-[1.15] mb-5 italic">
                Turn-Key Spec Home Development And Construction
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-8 max-w-lg">
                Investing in real estate starts with building market-ready homes
                that attract buyers and deliver strong returns. With 15+ years of
                experience in new home construction, we understand market trends,
                zoning regulations, and buyer preferences &mdash; ensuring that your
                investment is built for success.
              </p>
              <div>
                <Link
                  href="#get-in-touch"
                  className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Book Your Free Consultation Now!
                </Link>
              </div>
            </div>
            {/* Right – image */}
            <div className="relative h-[350px] md:h-auto md:min-h-[520px]">
              <Image
                src="/images/city/img-03.jpg"
                alt="Spec home construction by BRIO Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Partners */}
      <PartnersCarousel />

      {/* 3. Why Choose BRIO For Your Spec Home Build? — Image left, bullets right */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left – image */}
            <div className="relative h-[350px] md:h-[480px]">
              <Image
                src="/images/city/img-06.webp"
                alt="Modern kitchen by BRIO Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Right – heading + bullets */}
            <div className="py-12 md:py-16 md:pl-12">
              <h2 className="font-heading text-[28px] md:text-[34px] font-semibold text-brio-navy leading-tight mb-8">
                Why Choose BRIO For Your Spec Home Build?
              </h2>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  <p className="text-text-body text-[14px]"><span className="font-bold">Proven Experience</span> &ndash; 15+ years building high-quality homes.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  <p className="text-text-body text-[14px]"><span className="font-bold">Market Expertise</span> &ndash; We understand <span className="font-bold">what sells</span> and how to optimize for profitability.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  <p className="text-text-body text-[14px]"><span className="font-bold">Fast &amp; Efficient Process</span> &ndash; We streamline timelines to maximize returns.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  <p className="text-text-body text-[14px]"><span className="font-bold">Energy-Efficient Solutions</span> &ndash; Sustainable homes are in demand&mdash;we help you build smart.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  <p className="text-text-body text-[14px]"><span className="font-bold">On-Time &amp; On-Budget Execution</span> &ndash; We pride ourselves on delivering homes efficiently without compromising on quality.</p>
                </li>
              </ul>
              <p className="text-text-body text-[14px] italic mt-6">
                Maximize your investment&mdash;work with a top spec home builder!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The BRIO Spec Home Services — Two-column: CTA left, steps right */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — heading + CTA */}
            <div className="lg:sticky lg:top-32">
              <h2 className="font-heading text-[28px] md:text-[34px] font-semibold text-brio-navy leading-tight mb-5">
                The BRIO Spec Home Services
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-2">
                At <span className="font-bold">BRIO Construction</span>, we offer <span className="font-bold">full-service spec home development</span>, from <span className="font-bold">land acquisition consulting to final build completion</span>.
              </p>
              <p className="text-text-body text-[15px] leading-relaxed font-semibold mb-8">
                Start your spec home project with experts who know how to build for profit!
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Book Your Free Consultation Now!
              </Link>
            </div>

            {/* Right — 5 process steps with dividers */}
            <div className="space-y-0">
              {PROCESS_STEPS.map((item, i) => (
                <div key={item.step} className={`py-6 ${i < PROCESS_STEPS.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <h3 className="font-heading text-[16px] md:text-[18px] font-semibold text-brio-navy italic uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-body text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. What Is Spec Home Construction? — Two-column: text left, image right */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left — text */}
            <div className="py-14 md:py-20 md:pr-12">
              <h2 className="font-heading text-[28px] md:text-[34px] font-semibold text-brio-navy leading-tight mb-5">
                What Is Spec Home Construction?
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-4">
                A <span className="font-bold">spec home</span> (short for speculative home) is a{" "}
                <span className="font-bold">newly built home designed and constructed without a pre-identified buyer</span>,
                with the goal of selling it for profit. These homes are typically designed to attract a wide range of
                buyers with high-demand features, quality finishes, and strategic locations.
              </p>
              <p className="text-brio-navy text-[15px] font-semibold mb-3">
                Why invest in a spec home?
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2 text-text-body text-[14px]">
                  <span className="text-brio-navy mt-0.5">&#10003;</span>
                  <p><span className="font-bold">Faster Sales</span> &ndash; Move-in ready homes appeal to buyers looking for new builds without the long wait.</p>
                </li>
                <li className="flex items-start gap-2 text-text-body text-[14px]">
                  <span className="text-brio-navy mt-0.5">&#10003;</span>
                  <p><span className="font-bold">Strong ROI</span> &ndash; Designed for maximum market appeal and resale value.</p>
                </li>
                <li className="flex items-start gap-2 text-text-body text-[14px]">
                  <span className="text-brio-navy mt-0.5">&#10003;</span>
                  <p><span className="font-bold">Efficient Build Process</span> &ndash; With our expertise, we streamline the development process, reducing costs and timelines.</p>
                </li>
              </ul>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Book Your Free Consultation Now!
              </Link>
            </div>
            {/* Right — image */}
            <div className="relative h-[350px] md:h-full md:min-h-[500px]">
              <Image
                src="/images/city/img-03.jpg"
                alt="Spec home construction by BRIO"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Form + FAQ side by side */}
      <section id="get-in-touch" className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left – form */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-2 uppercase tracking-wide">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed mb-6">
                Ready to explore the possibilities for your project? We&apos;d
                love to hear your ideas! Taking the first step is easy. Share a
                few details below, and our team will get in touch to schedule a
                friendly, no-obligation consultation to discuss your project.
              </p>
              <LeadForm source="spec-home-construction" service="spec-home" variant="stacked" />
            </div>

            {/* Right – FAQ */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-6 uppercase tracking-wide">
                Frequently Asked Questions
              </h3>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Newsletter */}
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

      {/* 8. Footer */}
      <Footer />
    </>
  );
}
