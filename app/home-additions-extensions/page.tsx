import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

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
    description:
      "Need an extra bedroom, bathroom, home office, or entertainment space? We build custom room additions that integrate seamlessly with your existing home.",
  },
  {
    title: "Kitchen & Dining Room Expansions",
    description:
      "Create the larger, open-concept kitchen you\u2019ve always wanted. We expand kitchens and dining areas to give you more room to cook, entertain, and gather with family.",
  },
  {
    title: "Second-Storey Additions",
    description:
      "Maximize your living space without sacrificing your yard. A second-storey addition is the ideal solution for homeowners who need more room but love their lot.",
  },
  {
    title: "Garage Conversions & Extensions",
    description:
      "Transform your garage into valuable living space \u2014 a rental suite, a home gym, a workshop, or additional bedrooms. We also build garage extensions for more storage or parking.",
  },
  {
    title: "In-Law Suites & Secondary Dwellings",
    description:
      "Keep your extended family close with a self-contained in-law suite. We build legal secondary dwellings that offer privacy, comfort, and even rental income potential.",
  },
];

const WHY_BRIO = [
  {
    title: "15+ Years of Experience",
    description:
      "With over 15 years in residential construction, BRIO has the expertise to handle additions of any size and complexity.",
  },
  {
    title: "Custom Design & Seamless Integration",
    description:
      "We design additions that match your existing home\u2019s style, materials, and architecture \u2014 so the new space feels like it was always there.",
  },
  {
    title: "Full-Service Project Management",
    description:
      "From initial design and permits to construction and final walkthrough, we manage every detail so you don\u2019t have to.",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "We work within your budget to deliver maximum value. Our transparent pricing and detailed estimates mean no surprises.",
  },
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

      {/* ── Hero ── */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">
            Home Additions &amp; Extensions &mdash; Expand Your Living Space with BRIO
          </h1>
          <p className="text-text-body text-[16px] leading-relaxed mb-4">
            Is your home feeling too small? Whether you need an extra bedroom, a larger kitchen,
            or a full second-storey addition, BRIO Construction can help you expand your living
            space without the hassle of moving.
          </p>
          <p className="text-text-body text-[16px] leading-relaxed mb-8">
            From design to construction, we deliver smooth, stress-free renovations that
            transform your home into the space your family deserves.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Book Your Free Consultation Now!
          </Link>
        </div>
      </section>

      {/* ── Why Do a Home Addition ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Why Do a Home Addition?
          </h2>
          <div className="space-y-8">
            {WHY_ADD.map((item) => (
              <div key={item.title}>
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Types ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Home Addition Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_TYPES.map((service) => (
              <div key={service.title} className="bg-white p-8">
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-3">
                  {service.title}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose BRIO ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Why Choose BRIO for Your Home Addition?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {WHY_BRIO.map((item) => (
              <div key={item.title}>
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Book Your Free Consultation Now!
            </Link>
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
