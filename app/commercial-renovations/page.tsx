import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Renovations",
  description:
    "Transform your commercial space with BRIO Construction's expert commercial renovations, enhancing functionality and modern design for your business.",
};

const WHY_CHOOSE = [
  {
    title: "Experienced & Reliable",
    description:
      "With over 15 years of experience in commercial renovations, we deliver projects that meet the highest standards of quality and professionalism.",
  },
  {
    title: "Customized to Your Needs",
    description:
      "Every business is unique. We tailor our approach to match your brand, workflow, and customer experience goals.",
  },
  {
    title: "Transparent Communication",
    description:
      "From the first consultation to the final walkthrough, you will always know the status of your project. No surprises, no hidden costs.",
  },
  {
    title: "On-Time & On-Budget",
    description:
      "We understand that downtime costs money. Our team works efficiently to complete your renovation on schedule and within budget.",
  },
  {
    title: "Hassle-Free Process",
    description:
      "We handle everything from permits and approvals to construction and final inspections, so you can focus on running your business.",
  },
];

const SERVICE_TYPES = [
  {
    title: "Office Renovations & Tenant Improvements",
    items: [
      "Open-concept layouts designed for collaboration and productivity",
      "Modern conference rooms and breakout spaces",
      "Upgraded lighting, flooring, and acoustics for a professional environment",
    ],
  },
  {
    title: "Medical & Professional Office Renovations",
    items: [
      "Clinics, dental offices, and wellness centres tailored to your practice",
      "Patient-friendly waiting areas and treatment rooms",
      "Compliance with medical building regulations and accessibility standards",
    ],
  },
  {
    title: "Retail & Storefront Remodeling",
    items: [
      "Customer-centric designs that drive foot traffic and sales",
      "Custom display areas, lighting, and signage integration",
      "High-quality materials that withstand heavy daily use",
    ],
  },
  {
    title: "Restaurant & Hospitality Renovations",
    items: [
      "Custom build-outs, kitchen upgrades, and front-of-house transformations",
      "Full compliance with health and safety codes",
      "Bar, dining area, and patio design and construction",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "Do you handle permits for commercial renovations?",
    a: "Yes, we manage the entire permit process from start to finish, including municipal approvals, building code compliance, and final inspections. This ensures your renovation meets all local regulations without any hassle on your end.",
  },
  {
    q: "Do you offer design services for commercial spaces?",
    a: "Absolutely. Our team works with you to create a design that reflects your brand, improves workflow, and enhances the customer or employee experience. We handle space planning, material selection, and can coordinate with your interior designer if you have one.",
  },
  {
    q: "Can you renovate while my business stays open?",
    a: "Yes, we regularly complete commercial renovations in occupied spaces. We develop a phased construction plan to minimize disruption to your operations, including after-hours and weekend work when needed.",
  },
  {
    q: "How much does a commercial renovation cost?",
    a: "Commercial renovation costs vary widely depending on the scope, size, and complexity of the project. Most projects range from $50,000 to $500,000 or more. We provide a detailed estimate after an initial consultation so you know exactly what to expect.",
  },
  {
    q: "What kind of warranty do you offer on commercial projects?",
    a: "We stand behind our work with a 12-month workmanship warranty on all commercial renovation projects. We also ensure that all materials and installations meet or exceed industry standards for durability and performance.",
  },
];

export default function CommercialRenovationsPage() {
  return (
    <>
      <Navbar />

      {/* ── 1. Hero — Two-column, white background ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left — text */}
            <div className="py-16 md:py-24 md:pr-12">
              <h1 className="text-[32px] md:text-[44px] font-semibold italic text-brio-navy font-heading mb-6 leading-tight">
                Transform Your Commercial Space, Enhance Your Success
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-4">
                Whether you need a modern refresh, improved functionality, or a
                complete transformation, BRIO Construction delivers commercial
                renovations that elevate your business. From offices and retail
                spaces to restaurants and medical facilities, we create
                environments that work as hard as you do.
              </p>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                With over 15 years of experience, our team handles every aspect
                of your project &mdash; from design and permits to construction
                and final inspections &mdash; so you can focus on what matters
                most: running your business.
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
                src="/images/city/img-13.jpg"
                alt="Commercial renovation by BRIO Construction"
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

      {/* ── 3. Why Choose BRIO — Checkmark bullets ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-4 uppercase tracking-wide">
            Why Choose BRIO for Your Commercial Renovation?
          </h2>
          <p className="text-text-body text-[15px] leading-relaxed mb-10">
            When it comes to your business, you need a construction partner you
            can trust. BRIO brings the experience, transparency, and
            craftsmanship to make your commercial vision a reality.
          </p>
          <div className="space-y-4">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <p className="text-text-body text-[15px] leading-relaxed">
                  <span className="font-bold text-brio-navy">
                    {item.title}
                  </span>{" "}
                  &ndash; {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Service Types — Sticky CTA left, categories right ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — sticky CTA */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-4 uppercase tracking-wide">
                Our Commercial Renovation Services
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                We work with businesses of all sizes to transform commercial
                spaces into environments that inspire productivity, attract
                customers, and support long-term growth.
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Get Your Free Estimate
              </Link>
            </div>

            {/* Right — service categories */}
            <div className="space-y-0 divide-y divide-gray-300">
              {SERVICE_TYPES.map((service) => (
                <div key={service.title} className="py-8 first:pt-0 last:pb-0">
                  <h3 className="text-brio-navy text-[18px] font-semibold italic font-heading uppercase tracking-wide mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-text-body text-[14px] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-text-muted mt-0.5">&ndash;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Contact + FAQ side by side ── */}
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

      {/* ── 6. Newsletter ── */}
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

      {/* ── 7. Footer ── */}
      <Footer />
    </>
  );
}
