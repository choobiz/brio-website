import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Refinishing",
  description:
    "Upgrade Your Kitchen Without Permits, Layout Changes, or Long Downtime",
};

const PAIN_POINTS = [
  "Full renovations take too long",
  "Permits add uncertainty",
  "Costs escalate mid-project",
  "You want change without chaos",
];

const APPROACH_BULLETS = [
  "Proper planning before work starts",
  "No wasted days — scope changes avoided through upfront clarity",
  "Materials secured in advance",
  "Predictable execution — timeline and budget stay on track",
];

export default function KitchenRefinishingPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-4">
            Kitchen Refinishing &amp; Cabinet Refresh
          </h1>
          <p className="text-brio-navy text-[18px] md:text-[22px] font-semibold mb-6">
            Upgrade Your Kitchen Without Permits, Layout Changes, or Long
            Downtime
          </p>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-3xl mx-auto">
            For homeowners who want a high-impact kitchen upgrade with clarity,
            speed, and predictable outcomes.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Book a Free Kitchen Planning Call
          </Link>
          <p className="text-text-body text-[14px] mt-4">
            No pressure. No obligation. Just clarity.
          </p>
        </div>
      </section>

      {/* ── Problem Section ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-10">
            Want a Better Kitchen &mdash; Not a Full Renovation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PAIN_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 bg-brio-light-gray p-5"
              >
                <span className="text-brio-navy font-bold text-[18px] mt-0.5">
                  &times;
                </span>
                <p className="text-text-body text-[15px] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-4">
            Our Kitchen Refinishing Approach
          </h2>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed text-center mb-10 max-w-3xl mx-auto">
            Permit-free kitchen refinishing that transforms your space through
            meticulous preparation and disciplined execution.
          </p>
          <div className="space-y-4 max-w-2xl mx-auto">
            {APPROACH_BULLETS.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <span className="text-brio-navy font-bold mt-0.5">
                  &#10003;
                </span>
                <p className="text-text-body text-[15px] leading-relaxed">
                  {bullet}
                </p>
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

      {/* ── Contact Form ── */}
      <ContactForm />

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
