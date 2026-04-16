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
                Commercial Renovation &ndash; Transform Your Space, Enhance Your Success
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
                src="/images/commercial/hero.jpg"
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

      {/* ── 3. Recent TI Projects Gallery ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy text-center mb-8 uppercase tracking-wider">
            Checkout Our Recent TI Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/city/img-13.jpg" alt="Commercial project 1" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="33vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/city/img-06.webp" alt="Commercial project 2" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="33vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/commercial/hero.jpg" alt="Commercial project 3" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Why Choose BRIO — Centered heading, image left + checkmarks right ── */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy text-center mb-12 uppercase tracking-wider">
            Why Choose BRIO For Your Commercial Renovation Project?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[300px] lg:h-[380px]">
              <Image src="/images/city/img-02.jpg" alt="Commercial renovation interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="space-y-4">
              {WHY_CHOOSE.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-text-body text-[14px]">
                    <span className="font-bold">{item.title}</span>
                    {" "}&ndash; {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Service Types — Sticky CTA left, categories right ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — sticky CTA */}
            <div className="lg:sticky lg:top-32">
              <h2 className="font-heading text-[26px] md:text-[32px] font-semibold text-brio-navy mb-4">
                The BRIO Commercial Renovation Services
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
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-2 uppercase tracking-wide underline">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed mb-6">
                Ready to explore the possibilities for your project? We&apos;d love to hear your ideas! Taking the first step is easy. Share a few details below, and our team will get in touch to schedule a friendly, no-obligation consultation to discuss your project.
              </p>
              <form className="space-y-3">
                <input type="text" required placeholder="Name" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="tel" required placeholder="Phone" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                  <input type="email" required placeholder="Email" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                </div>
                <input type="text" placeholder="Service Address" className="w-full h-11 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                <textarea placeholder="Description of Work" rows={4} className="w-full px-4 py-3 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy resize-none" />
                <button type="submit" className="w-full h-11 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[13px] hover:bg-brio-navy/90 transition-colors">
                  Book Now!
                </button>
              </form>
            </div>

            {/* Right: FAQ */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-6 uppercase tracking-wide underline">
                Frequently Asked Questions
              </h3>
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
