import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Land Development & Pre-Construction",
  description:
    "Expert land development and pre-construction planning services by BRIO Construction.",
};

const SERVICE_CATEGORIES = [
  {
    title: "Site Assessment & Feasibility Studies",
    items: [
      "Land suitability analysis",
      "Environmental impact assessments",
      "Soil testing and geotechnical surveys",
    ],
  },
  {
    title: "Zoning, Permits & Regulatory Approvals",
    items: [
      "Rezoning and variance requests",
      "Permit coordination with local authorities",
      "Building code compliance",
    ],
  },
  {
    title: "Infrastructure & Land Preparation",
    items: [
      "Roads, utilities, and drainage systems",
      "Excavation, grading, and clearing",
      "Stormwater management and erosion control",
    ],
  },
  {
    title: "Pre-Construction Planning & Project Management",
    items: [
      "Cost analysis and budgeting",
      "Blueprint and architectural coordination",
      "Construction scheduling and logistics",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "What does land development involve?",
    a: "Land development includes everything from initial site assessment and feasibility studies to zoning approvals, infrastructure installation, and preparing the land for construction. We manage the entire process from raw land to a build-ready site.",
  },
  {
    q: "How long does the pre-construction process take?",
    a: "Timelines vary depending on the project scope, site conditions, and permitting requirements. A typical pre-construction phase can take anywhere from a few weeks to several months. We provide a detailed timeline during the initial consultation.",
  },
  {
    q: "Can you help with rezoning applications?",
    a: "Yes, our team has extensive experience navigating municipal zoning regulations. We handle rezoning applications, variance requests, and all regulatory approvals to ensure your project moves forward smoothly.",
  },
  {
    q: "What types of projects do you work on?",
    a: "We work on a wide range of projects including single-family homes, multi-family developments, townhouse complexes, mixed-use buildings, and commercial properties. Whether you are a homeowner, developer, or investor, we tailor our services to your goals.",
  },
  {
    q: "How do I get started with a land development project?",
    a: "Getting started is easy. Book a free consultation with our team and we will assess your property, discuss your vision, and outline a clear plan with timelines and budget estimates to bring your project to life.",
  },
];

export default function LandDevelopmentPreConstructionPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-4">
            Expert Land Development &amp; Pre-Construction Services by BRIO
          </h1>
          <p className="text-brio-navy text-[18px] md:text-[22px] font-medium font-heading mb-6">
            Turning Raw Land into Thriving Communities with Smart Planning &amp;
            Precision Execution
          </p>
          <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you&apos;re a homeowner, developer, or investor, BRIO
            Construction helps you transform vacant land into valuable,
            build-ready sites. From site assessments and feasibility studies to
            infrastructure planning and permit coordination, we handle every
            detail so your project starts on the right foundation.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
          >
            Book a Free Consultation Today!
          </Link>
        </div>
      </section>

      {/* Why Choose BRIO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-10">
            Why Choose BRIO for Land Development
          </h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">Proven Expertise</strong> —
                over 15 years of experience in land development and construction
                across the Greater Vancouver area
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">Tailored Strategies</strong>{" "}
                — every project is unique, and we develop custom plans to match
                your goals and budget
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">Regulatory Experts</strong>{" "}
                — we navigate complex zoning, permitting, and compliance
                requirements so you don&apos;t have to
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Cost-Effective Planning
                </strong>{" "}
                — we optimize every phase for maximum ROI and minimize
                unexpected costs
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Sustainable Development
                </strong>{" "}
                — incorporating eco-friendly practices and energy-efficient
                solutions into every project
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Land Development &amp; Pre-Construction Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <div key={category.title} className="bg-white p-8">
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

      {/* Why Invest */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading mb-10">
            Why Invest in Professional Land Development
          </h2>
          <ul className="space-y-4 max-w-2xl mx-auto text-left mb-10">
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Maximize Land Value
                </strong>{" "}
                — unlock the full potential of your property with expert site
                planning
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Smooth Approvals &amp; Permitting
                </strong>{" "}
                — avoid delays with experienced regulatory navigation
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Efficient Project Execution
                </strong>{" "}
                — streamlined processes from planning to ground-breaking
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Cost Savings &amp; Risk Reduction
                </strong>{" "}
                — proactive planning that prevents costly surprises down the
                road
              </span>
            </li>
            <li className="flex items-start gap-3 text-text-body text-[16px] leading-relaxed">
              <span className="text-brio-navy font-bold mt-0.5">&#10003;</span>
              <span>
                <strong className="text-brio-navy">
                  Sustainable &amp; Future-Proof Development
                </strong>{" "}
                — build with long-term value and environmental responsibility in
                mind
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
