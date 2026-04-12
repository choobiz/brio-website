import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laneway Home Construction",
  description:
    "Explore laneway home construction to boost property value, generate rental income, and expand your living space effectively.",
};

const WHY_CHOOSE = [
  {
    title: "15+ Years of Experience",
    description:
      "BRIO has over 15 years of experience in small-scale residential construction. We understand the unique challenges and opportunities that come with building laneway homes and secondary suites.",
  },
  {
    title: "Custom Design & Functional Spaces",
    description:
      "Every laneway home we build is tailored to your property and lifestyle. We maximize every square foot to create a functional, beautiful living space.",
  },
  {
    title: "Code Compliance & Bylaw Experts",
    description:
      "Navigating zoning bylaws, building codes, and permit requirements can be complex. Our team ensures your laneway home meets all municipal regulations from the start.",
  },
  {
    title: "Investment-Focused Approach",
    description:
      "We design and build with your return on investment in mind — whether you plan to rent out the unit, house family members, or increase your property value.",
  },
  {
    title: "On-Time & On-Budget",
    description:
      "We pride ourselves on delivering projects on schedule and within budget. Our transparent process means no surprises along the way.",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Feasibility Assessment & Zoning Review",
    description:
      "We evaluate your property to determine if a laneway home is possible, reviewing zoning bylaws, lot size requirements, and site conditions.",
  },
  {
    step: 2,
    title: "Custom Design & Planning",
    description:
      "Our design team works with you to create a custom laneway home plan that maximizes your space, suits your needs, and complements your existing property.",
  },
  {
    step: 3,
    title: "Permit Applications & Approvals",
    description:
      "We handle all permit applications and approvals, navigating the municipal process so you don\u2019t have to.",
  },
  {
    step: 4,
    title: "High-Quality Construction & Project Management",
    description:
      "Our experienced team manages every aspect of construction, from foundation to finishing, ensuring quality craftsmanship at every stage.",
  },
  {
    step: 5,
    title: "Rental & Resale Consultation",
    description:
      "Once your laneway home is complete, we can advise on rental strategies and how to maximize your property\u2019s resale value.",
  },
];

const LANEWAY_BENEFITS = [
  {
    title: "Generate Rental Income",
    description:
      "A laneway home can provide a steady stream of rental income, helping you offset your mortgage or fund other investments.",
  },
  {
    title: "Support Multigenerational Living",
    description:
      "Keep your family close while maintaining privacy. A laneway home is perfect for aging parents, adult children, or extended family members.",
  },
  {
    title: "Increase Property Value",
    description:
      "Adding a laneway home significantly increases the overall value of your property, making it a smart long-term investment.",
  },
  {
    title: "Make Use of Unused Space",
    description:
      "Transform your underutilized backyard into a functional, income-generating asset without sacrificing your main home\u2019s footprint.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Can my property accommodate a laneway home?",
    a: "Most properties with lane access in Vancouver, North Vancouver, and surrounding municipalities can accommodate a laneway home. However, it depends on lot size, zoning, and setback requirements. We conduct a thorough feasibility assessment to determine if your property qualifies.",
  },
  {
    q: "How much does it cost to build a laneway home?",
    a: "The cost of building a laneway home varies depending on size, design, finishes, and site conditions. Generally, laneway homes range from $250,000 to $500,000 or more. We provide detailed estimates during the planning phase so you know exactly what to expect.",
  },
  {
    q: "What permits are needed for a laneway home?",
    a: "Building a laneway home requires development permits, building permits, and sometimes additional approvals depending on your municipality. BRIO handles the entire permit process on your behalf, ensuring full compliance with local regulations.",
  },
  {
    q: "How long does it take to build a laneway home?",
    a: "From design to completion, a typical laneway home project takes 6 to 12 months. This includes the design phase, permit approvals, and construction. We provide a clear timeline at the start of every project.",
  },
  {
    q: "Is a laneway home a good investment?",
    a: "Absolutely. Laneway homes generate rental income, increase property value, and provide flexible living space. They are one of the best investments you can make in today\u2019s real estate market, especially in Metro Vancouver where housing demand remains high.",
  },
];

export default function LanewayHomeConstructionPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-6">
            Laneway Homes &mdash; Maximize Your Property&apos;s Potential
          </h1>
          <p className="text-text-body text-[16px] leading-relaxed mb-4">
            A laneway home is one of the smartest ways to add value, generate rental income,
            and create additional living space on your property. Whether you&apos;re looking to
            build a coach house, laneway home, or secondary suite, BRIO Construction specializes
            in turning your vision into reality.
          </p>
          <p className="text-text-body text-[16px] leading-relaxed mb-8">
            We handle everything &mdash; from permits and design to full construction &mdash; so
            you can enjoy a seamless, stress-free building experience.
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
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-2">
            Why Choose BRIO for Your Laneway Home?
          </h2>
          <p className="text-text-muted text-center text-[15px] mb-12">
            What Sets Us Apart?
          </p>
          <div className="space-y-8">
            {WHY_CHOOSE.map((item) => (
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

      {/* ── Process Steps ── */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Laneway Home Construction Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* ── What is a Laneway House? ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-6">
            What is a Laneway House?
          </h2>
          <p className="text-text-body text-[16px] leading-relaxed text-center max-w-3xl mx-auto mb-10">
            A laneway house &mdash; also known as a coach house, backyard suite, or garden suite
            &mdash; is a small, self-contained home built on an existing residential lot, typically
            at the rear of the property near the lane. Laneway homes offer a versatile and
            cost-effective way to add living space to your property.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {LANEWAY_BENEFITS.map((benefit) => (
              <div key={benefit.title}>
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed">
                  {benefit.description}
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
