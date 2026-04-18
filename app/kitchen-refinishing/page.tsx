import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import Newsletter from "@/components/home/Newsletter";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Kitchen Refinishing",
  description:
    "Upgrade your kitchen without permits, layout changes, or long downtime. BRIO delivers cabinet refinishing and kitchen refresh across Greater Vancouver.",
};

const PAIN_POINTS = [
  {
    icon: "\u00D7",
    text: "Full renovations take too long and disrupt your daily life for weeks",
  },
  {
    icon: "\u00D7",
    text: "Permits add uncertainty, delays, and unexpected costs",
  },
  {
    icon: "\u00D7",
    text: "Budgets escalate mid-project with hidden fees and scope creep",
  },
  {
    icon: "\u00D7",
    text: "You want a real transformation \u2014 without the chaos of a gut reno",
  },
];

const APPROACH_BULLETS = [
  {
    title: "Thorough Planning First",
    description:
      "Every detail is scoped before work begins \u2014 no surprises, no wasted days.",
  },
  {
    title: "Materials Secured in Advance",
    description:
      "We source and confirm all materials before your start date so there are zero mid-project delays.",
  },
  {
    title: "Predictable Timeline & Budget",
    description:
      "Fixed-price quotes and realistic schedules you can count on from day one to final walkthrough.",
  },
  {
    title: "Permit-Free Transformations",
    description:
      "Cabinet refinishing, new hardware, countertops, and backsplash \u2014 no permits required.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What does kitchen refinishing include?",
    a: "Our kitchen refinishing service covers cabinet door and frame refinishing or repainting, new hardware installation, countertop replacement, backsplash updates, and minor fixture upgrades. It\u2019s a complete visual transformation without moving plumbing or electrical.",
  },
  {
    q: "How long does a kitchen refinishing project take?",
    a: "Most kitchen refinishing projects are completed in 2\u20133 weeks depending on the scope. Because no permits or structural work are involved, we can move efficiently from prep to final reveal.",
  },
  {
    q: "Do I need permits for kitchen refinishing?",
    a: "No. Kitchen refinishing is a cosmetic upgrade that doesn\u2019t require permits. We\u2019re not moving walls, plumbing, or electrical \u2014 so you skip the permit process entirely.",
  },
  {
    q: "How much does kitchen refinishing cost?",
    a: "Projects typically start at $10,000 depending on kitchen size, cabinet condition, and selected finishes. We provide a fixed-price quote after an in-person consultation \u2014 no hidden fees or surprise charges.",
  },
  {
    q: "Can I use my kitchen during the project?",
    a: "For most of the project, yes. We\u2019ll walk you through a plan to minimize disruption and let you know which days may require temporary alternative arrangements.",
  },
];

export default function KitchenRefinishingPage() {
  return (
    <>
      <Navbar />

      {/* ── 1. Hero — Two-column: text left, kitchen image right ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left — text */}
            <div className="py-16 md:py-24 md:pr-12">
              <h1 className="text-[32px] md:text-[44px] font-semibold italic text-brio-navy font-heading mb-6 leading-tight">
                Kitchen Refinishing &amp; Cabinet Refresh
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-7">
                Upgrade your kitchen without permits, layout changes, or long
                downtime. For homeowners who want a high-impact kitchen
                transformation with clarity, speed, and predictable outcomes.
              </p>
              <div>
                <Link
                  href="#get-in-touch"
                  className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Book a Free Kitchen Planning Call
                </Link>
              </div>
            </div>
            {/* Right — image */}
            <div className="relative h-[300px] md:h-auto md:min-h-[480px]">
              <Image
                src="/images/city/img-09.webp"
                alt="Kitchen refinishing by BRIO Construction"
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

      {/* ── 3. Problem Section ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-4">
            Want a Better Kitchen &mdash; Not a Full Renovation?
          </h2>
          <p className="text-text-body text-[16px] leading-relaxed text-center mb-12 max-w-3xl mx-auto">
            Most homeowners don&apos;t need a complete gut job. They need a
            smarter approach that delivers a stunning result without the usual
            headaches.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {PAIN_POINTS.map((point) => (
              <div
                key={point.text}
                className="flex items-start gap-3 bg-brio-light-gray p-5"
              >
                <span className="text-red-500 font-bold text-[18px] mt-0.5 shrink-0">
                  &times;
                </span>
                <p className="text-text-body text-[15px] leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Approach ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-4">
            Our Kitchen Refinishing Approach
          </h2>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed text-center mb-12 max-w-3xl mx-auto">
            Permit-free kitchen refinishing that transforms your space through
            meticulous preparation and disciplined execution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {APPROACH_BULLETS.map((bullet) => (
              <div key={bullet.title} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brio-navy shrink-0 mt-1" />
                <div>
                  <h3 className="text-brio-navy text-[16px] font-semibold font-heading mb-1">
                    {bullet.title}
                  </h3>
                  <p className="text-text-body text-[14px] leading-relaxed">
                    {bullet.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Book a Free Kitchen Planning Call
            </Link>
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
      <Newsletter />

      {/* ── 7. Footer ── */}
      <Footer />
    </>
  );
}
