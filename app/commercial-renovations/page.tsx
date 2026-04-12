import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

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

      {/* ── Hero ── */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">
            Commercial Renovation &mdash; Transform Your Space, Enhance Your
            Success
          </h1>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-4">
            Whether you need a modern refresh, improved functionality, or a
            complete transformation, BRIO Construction delivers commercial
            renovations that elevate your business. From offices and retail
            spaces to restaurants and medical facilities, we create environments
            that work as hard as you do.
          </p>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-8">
            With over 15 years of experience, our team handles every aspect of
            your project &mdash; from design and permits to construction and
            final inspections &mdash; so you can focus on what matters most:
            running your business.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Book Your Free Consultation Now!
          </Link>
        </div>
      </section>

      {/* ── Why Choose BRIO ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Why Choose BRIO for Your Commercial Renovation?
          </h2>
          <div className="space-y-6">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-brio-navy font-bold text-[18px] mt-0.5">
                  &#10003;
                </span>
                <div>
                  <h3 className="text-brio-navy text-[18px] font-semibold font-heading">
                    {item.title}
                  </h3>
                  <p className="text-text-body text-[15px] leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Types ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Commercial Renovation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_TYPES.map((service) => (
              <div key={service.title} className="bg-white p-8">
                <h3 className="text-brio-navy text-[20px] font-semibold font-heading mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-body text-[14px] leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-brio-navy font-bold mt-0.5">
                        &#x2022;
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

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-brio-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-[18px] md:text-[20px] leading-relaxed mb-8">
            We work with businesses of all sizes to transform commercial spaces
            into environments that inspire productivity, attract customers, and
            support long-term growth. Let&apos;s build something great together.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-white text-brio-navy text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-white/90 transition-colors"
          >
            Get Your Free Estimate
          </Link>
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
