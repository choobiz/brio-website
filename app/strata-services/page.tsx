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
  title: "Strata Services",
  description:
    "BRIO Construction offers expert strata services for maintenance and renovations, ensuring efficient property management solutions.",
};

const SERVICE_CATEGORIES = [
  {
    title: "Routine Maintenance & Repairs",
    items: [
      "Exterior and interior repairs",
      "Parking lot maintenance",
      "Pressure washing, painting, and sealing",
    ],
  },
  {
    title: "Building Envelope Repairs & Waterproofing",
    items: [
      "Roof inspections and leak detection",
      "Balcony, deck, and railing maintenance",
      "Foundation sealing and moisture control",
    ],
  },
  {
    title: "Common Area & Amenity Upgrades",
    items: [
      "Lobbies and hallways",
      "Fitness rooms and meeting spaces",
      "Lighting, security, and accessibility upgrades",
    ],
  },
  {
    title: "Exterior & Landscaping",
    items: [
      "Fencing, pathways, and lighting",
      "Siding repairs and paint",
      "Green space and hardscaping",
    ],
  },
  {
    title: "Large-Scale Renovations & Capital Projects",
    items: [
      "Full-building updates",
      "Unit and suite renovations",
      "Energy-efficient upgrades",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "What types of strata properties do you service?",
    a: "We service all types of strata properties, including condominiums, townhouse complexes, and multi-unit residential and commercial buildings across the Greater Vancouver area.",
  },
  {
    q: "How often should strata maintenance be performed?",
    a: "We recommend regular scheduled maintenance to prevent costly repairs down the road. The frequency depends on the building's age, condition, and specific needs. We work with your strata council to develop a tailored maintenance plan.",
  },
  {
    q: "Do you handle emergency repairs?",
    a: "Yes, we understand that emergencies can happen at any time. We offer fast response times for urgent repairs such as leaks, structural damage, and safety hazards to minimize disruption to residents.",
  },
  {
    q: "Can you help with budget planning for strata projects?",
    a: "Absolutely. We work closely with strata councils and property managers to provide detailed estimates and phased project plans that align with your annual budget and reserve fund planning.",
  },
  {
    q: "How do you ensure projects stay on budget and on schedule?",
    a: "We provide clear communication throughout every project, with dedicated project management, transparent pricing, and regular progress updates. Our goal is to deliver quality work on time and within budget.",
  },
];

export default function StrataServicesPage() {
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
                Reliable Strata Services With BRIO
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                Managing a strata property comes with unique challenges. From
                routine upkeep to large-scale renovations, BRIO Construction
                delivers professional, high-quality strata services designed to
                protect your investment and enhance your community. Whether
                you&apos;re managing condos, townhouse complexes, or multi-unit
                buildings, we&apos;re here to help.
              </p>
              <div>
                <Link
                  href="#get-in-touch"
                  className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Book A Free Consultation Today!
                </Link>
              </div>
            </div>
            {/* Right — image */}
            <div className="relative h-[300px] md:h-auto md:min-h-[480px]">
              <Image
                src="/images/city/img-01.jpg"
                alt="Strata building maintained by BRIO Construction"
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

      {/* ── 3. Tailored Solutions — Checkmarks ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — image */}
            <div className="relative h-[350px] lg:h-[500px]">
              <Image
                src="/images/city/img-13.jpg"
                alt="BRIO Construction strata maintenance project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right — heading + checkmarks */}
            <div>
              <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-4 uppercase tracking-wide">
                Tailored Solutions For Your Strata&apos;s Needs
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                Every strata property is different. We customize our approach to
                match your building&apos;s specific needs, budget, and long-term
                goals.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Flexible service plans",
                    desc: "customized to your building\u2019s specific needs and budget",
                  },
                  {
                    title: "Custom renovation solutions",
                    desc: "designed to enhance property value and resident satisfaction",
                  },
                  {
                    title: "Proactive maintenance",
                    desc: "preventing costly repairs before they happen",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-text-body text-[15px] leading-relaxed">
                      <span className="font-bold text-brio-navy">
                        {item.title}
                      </span>{" "}
                      &ndash; {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Fast & Reliable — Checkmarks ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-10 uppercase tracking-wide">
            Fast And Reliable Services
          </h2>
          <div className="space-y-6 mb-10">
            {[
              {
                title: "Fast response times",
                desc: "minimizing disruption to residents and tenants",
              },
              {
                title: "Clear communication",
                desc: "keeping strata councils and property managers informed every step of the way",
              },
              {
                title: "Scheduled maintenance plans",
                desc: "ensuring your building stays in top condition year-round",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <p className="text-text-body text-[15px] leading-relaxed">
                  <span className="font-bold text-brio-navy">
                    {item.title}
                  </span>{" "}
                  &ndash; {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Service Types — Sticky CTA left, categories right ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — sticky CTA */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-4 uppercase tracking-wide">
                Our Strata Services
              </h2>
              <p className="text-text-body text-[15px] leading-relaxed mb-8">
                From routine repairs to large-scale capital projects, BRIO
                Construction delivers comprehensive strata services tailored to
                your building&apos;s needs.
              </p>
              <Link
                href="#get-in-touch"
                className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Book A Free Consultation Today!
              </Link>
            </div>

            {/* Right — service categories */}
            <div className="space-y-0 divide-y divide-gray-300">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.title} className="py-8 first:pt-0 last:pb-0">
                  <h3 className="text-brio-navy text-[18px] font-semibold italic font-heading uppercase tracking-wide mb-4">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
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

      {/* ── 6. A Partner Who Cares — Checkmarks + CTA ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-brio-navy font-heading mb-10 uppercase tracking-wide">
            A Partner Who Cares About Your Community
          </h2>
          <div className="space-y-6 mb-10">
            {[
              "We treat your property like our own, with the care and attention it deserves",
              "Our friendly, professional team is committed to building lasting relationships with strata councils and property managers",
              "We are committed to sustainable practices that reduce costs and benefit the environment",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brio-navy shrink-0 mt-0.5 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <p className="text-text-body text-[15px] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div>
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Book A Free Consultation Today!
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. Contact + FAQ side by side ── */}
      <section id="get-in-touch" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2 className="text-[24px] md:text-[30px] font-semibold text-brio-navy font-heading mb-6 uppercase tracking-wide">
                Get In Touch
              </h2>
              <LeadForm source="strata-services" service="strata" variant="stacked" />
            </div>

            {/* Right: FAQ */}
            <div>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Newsletter ── */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-text-muted text-[11px] uppercase tracking-widest mb-1">Subscribe</p>
              <h2 className="font-heading text-[22px] md:text-[26px] font-bold text-brio-navy mb-2">The Inside Look</h2>
              <p className="text-text-body text-[13px] leading-relaxed mb-4 max-w-md">
                The email newsletter that delivers curated home decor and furniture picks, expert design advice, and more. Join 4,000+ subscribers.
              </p>
              <form className="flex gap-2 max-w-md">
                <input type="email" placeholder="Your email address..." className="flex-1 h-10 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy" />
                <button type="submit" className="h-10 px-5 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[12px] hover:bg-brio-navy/90 transition-colors shrink-0">Sign Me Up</button>
              </form>
            </div>
            <div className="hidden md:block relative w-[200px] h-[240px] rounded-t-full overflow-hidden">
              <Image src="/images/newsletter.png" alt="Builder overlooking a construction site" fill className="object-cover" sizes="200px" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Footer ── */}
      <Footer />
    </>
  );
}
