import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

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

      {/* Hero */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-4">
            Reliable Strata Services with BRIO
          </h1>
          <p className="text-brio-navy text-[18px] md:text-[22px] font-medium font-heading mb-6">
            Expert Maintenance, Renovations &amp; Repairs for Multi-Unit
            Buildings
          </p>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-3xl mx-auto">
            Managing a strata property comes with unique challenges. From
            routine upkeep to large-scale renovations, BRIO Construction
            delivers professional, high-quality strata services designed to
            protect your investment and enhance your community. Whether
            you&apos;re managing condos, townhouse complexes, or multi-unit
            buildings, we&apos;re here to help.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Book a Free Consultation Today!
          </Link>
        </div>
      </section>

      {/* Tailored Solutions */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-10">
            Tailored Solutions for Your Strata&apos;s Needs
          </h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Flexible service plans
                </strong>{" "}
                — customized to your building&apos;s specific needs and budget
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Custom renovation solutions
                </strong>{" "}
                — designed to enhance property value and resident satisfaction
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Proactive maintenance
                </strong>{" "}
                — preventing costly repairs before they happen
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Fast & Reliable */}
      <section className="py-16 md:py-20 bg-brio-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-10">
            Fast and Reliable Services
          </h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Fast response times
                </strong>{" "}
                — minimizing disruption to residents and tenants
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Clear communication
                </strong>{" "}
                — keeping strata councils and property managers informed every
                step of the way
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Scheduled maintenance plans
                </strong>{" "}
                — ensuring your building stays in top condition year-round
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Strata Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="bg-brio-light-gray p-8"
              >
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-body text-[14px] flex items-start gap-2"
                    >
                      <span className="text-brio-navy mt-0.5">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading mb-10">
            A Partner Who Cares About Your Community
          </h2>
          <ul className="space-y-4 max-w-2xl mx-auto text-left mb-10">
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                We treat your property like our own, with the care and attention
                it deserves
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                Our friendly, professional team is committed to building lasting
                relationships with strata councils and property managers
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                We are committed to sustainable practices that reduce costs and
                benefit the environment
              </span>
            </li>
          </ul>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Book a Free Consultation Today!
          </Link>
        </div>
      </section>

      <ContactForm />
      <FAQ items={FAQ_ITEMS} />
      <Footer />
    </>
  );
}
