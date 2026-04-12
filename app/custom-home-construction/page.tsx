import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ContactForm from "@/components/service/ContactForm";
import Testimonials from "@/components/service/Testimonials";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Home Construction",
  description:
    "Discover how custom home construction creates a unique living space that reflects your personality, lifestyle, and aspirations beyond a spec home.",
};

const WHY_CHOOSE = [
  {
    title: "Uncompromising Quality",
    desc: "We use only premium materials and proven construction methods to ensure your home is built to last. Every detail is executed with precision and care.",
  },
  {
    title: "Experience & Expertise",
    desc: "With 15+ years of experience in custom home building, our team brings deep knowledge of design, engineering, and construction to every project.",
  },
  {
    title: "Transparent Communication",
    desc: "You'll always know exactly where your project stands. We provide regular updates, clear timelines, and honest conversations throughout the build.",
  },
  {
    title: "Client-Centric Approach",
    desc: "Your vision drives every decision. We listen carefully, collaborate closely, and ensure the final result is a home that truly reflects who you are.",
  },
  {
    title: "On-Time & On-Budget Execution",
    desc: "We respect your time and your investment. Our experienced project managers keep everything on track so there are no surprises at the finish line.",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Consultation & Vision Planning",
    desc: "It all starts with a detailed discussion about your dream home. We explore your lifestyle needs, design preferences, timelines, and budget to create a comprehensive plan that guides the entire project.",
  },
  {
    step: 2,
    title: "Design Collaboration & Pre-Construction",
    desc: "We collaborate with your architect and design team to refine blueprints, secure permits, and finalize every detail. Full budget transparency ensures you know exactly what to expect before construction begins.",
  },
  {
    step: 3,
    title: "Construction Commences",
    desc: "Our skilled craftsmen and dedicated project managers bring your home to life using superior materials and time-tested building practices. You'll receive regular progress updates and site walkthroughs.",
  },
  {
    step: 4,
    title: "Final Touches & Move-In Ready Home",
    desc: "Rigorous quality checks and final walkthroughs ensure every detail meets our high standards. Your custom home is delivered on schedule, move-in ready, and exactly as you envisioned.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How long does it take to build a custom home?",
    a: "Most custom homes take 12 to 18 months from design to completion, depending on the size, complexity, and scope of the project. During our initial consultation, we'll provide a detailed timeline tailored to your specific build.",
  },
  {
    q: "How much does custom home construction cost?",
    a: "Costs vary based on size, design complexity, materials, and finishes. We provide transparent, detailed estimates during the planning phase so you know exactly what to expect. Our team works with you to align the design with your budget.",
  },
  {
    q: "How involved can I be in the building process?",
    a: "As involved as you'd like! We encourage client participation at every stage. From design decisions and material selections to regular site visits and progress updates, you'll be an integral part of bringing your vision to life.",
  },
  {
    q: "Do I need to have my own architect?",
    a: "Not necessarily. While we're happy to work with your preferred architect, we also have trusted design partners we can recommend. Either way, we collaborate closely with the design team to ensure your vision is realized.",
  },
  {
    q: "What kind of warranty does BRIO offer?",
    a: "We stand behind every home we build with comprehensive warranties covering structural integrity and craftsmanship. Our commitment to quality means you can enjoy peace of mind long after you move in.",
  },
];

export default function CustomHomeConstructionPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brio-light-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading mb-4">
            Inspired by You, Crafted by BRIO
          </h1>
          <p className="text-text-body text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
            A custom home is more than a building &mdash; it&rsquo;s a
            reflection of your unique lifestyle, personality, and aspirations.
            Unlike spec homes, a custom build requires specialized expertise to
            bring your vision to life with precision and care. At BRIO
            Construction, we partner with you from concept to completion to
            create a home that&rsquo;s truly yours.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide"
          >
            Contact Us for a Free Quotation
          </Link>
        </div>
      </section>

      {/* Why Choose BRIO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-2">
            Why Choose BRIO for Your Custom Home?
          </h2>
          <p className="text-text-muted text-[16px] text-center mb-12">
            What Sets BRIO Apart?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title}>
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-text-body text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials heading="What Our Clients Are Saying" />

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-brio-navy font-heading text-center mb-12">
            Our Custom Home Building Process
          </h2>
          <div className="space-y-10">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-brio-navy text-white flex items-center justify-center text-[18px] font-semibold font-heading">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-body text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brio-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-body text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
            Building a custom home is an exciting journey &mdash; and choosing
            the right builder makes all the difference. At BRIO Construction, we
            bring your dream home to life with expert craftsmanship, transparent
            communication, and a commitment to excellence at every stage.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-brio-navy text-white text-[14px] font-semibold px-8 py-4 uppercase tracking-wide"
          >
            Book Your Free Consultation Today!
          </Link>
        </div>
      </section>

      <ContactForm />
      <FAQ items={FAQ_ITEMS} />
      <Footer />
    </>
  );
}
