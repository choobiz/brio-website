import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LeadForm from "@/components/shared/LeadForm";
import FAQ from "@/components/shared/FAQ";
import Link from "next/link";
import Image from "next/image";
import PartnersCarousel from "@/components/shared/PartnersCarousel";

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

const TESTIMONIALS = [
  {
    name: "Sam S.",
    location: "Vancouver",
    project: "Spec Home",
    text: "BRIO Construction exceeded our expectations on every level. Their attention to detail and commitment to quality craftsmanship transformed our spec home into something truly special. Communication was excellent throughout the entire process.",
  },
  {
    name: "Ron M.",
    location: "North Vancouver",
    project: "Full Renovation",
    text: "From start to finish, the BRIO team was professional, transparent, and delivered outstanding results. Our full home renovation was completed on time and on budget. We couldn't be happier with the final outcome.",
  },
  {
    name: "K.M.",
    location: "Vancouver",
    project: "Bathroom Remodeling",
    text: "We hired BRIO for our bathroom remodel and were blown away by the quality of work. The team was respectful of our home, cleaned up daily, and the finished product looks absolutely stunning. Highly recommend!",
  },
];

export default function CustomHomeConstructionPage() {
  return (
    <>
      <Navbar />

      {/* 1. Hero — Two-column, white background */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left – text */}
            <div className="py-16 md:py-24 md:pr-12">
              <h1 className="font-heading text-[36px] md:text-[46px] font-semibold text-brio-navy leading-[1.15] mb-6 italic">
                Inspired by You,<br />Crafted by BRIO
              </h1>
              <p className="text-text-body text-[15px] leading-relaxed mb-8 max-w-lg">
                Custom home construction is a reflection of{" "}
                <span className="underline">your unique lifestyle and vision</span>.
                Unlike spec homes, it demands specialized expertise. As one of the
                leading custom home construction companies, BRIO creates lasting,
                quality homes that transform your living experience.
              </p>
              <div>
                <Link
                  href="#get-in-touch"
                  className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
                >
                  Contact Us for a Free Quotation
                </Link>
              </div>
            </div>
            {/* Right – image */}
            <div className="relative h-[350px] md:h-auto md:min-h-[520px]">
              <Image
                src="/images/city/img-06.webp"
                alt="Modern kitchen interior by BRIO Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Partners */}
      <PartnersCarousel />

      {/* 3. Photo Gallery */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[24px] md:text-[34px] font-semibold text-brio-navy uppercase tracking-wide text-center mb-10">
            Why Choose BRIO for Your Custom Home?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "/images/city/img-01.jpg",
              "/images/city/img-03.jpg",
              "/images/city/img-04.jpg",
              "/images/city/img-05.webp",
              "/images/city/img-13.jpg",
              "/images/city/img-02.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt={`Custom home construction project ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What Sets BRIO Apart? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[28px] md:text-[36px] font-semibold text-brio-navy mb-4">
            What Sets BRIO Apart?
          </h2>
          <p className="text-text-body text-[15px] leading-relaxed mb-8 max-w-3xl">
            When searching for a partner to build your dream home, trust and
            reliability matter most. BRIO Construction delivers excellence through
            our unwavering commitment to quality workmanship, open communication,
            and precise project execution.
          </p>
          <ul className="space-y-6 mb-8">
            {WHY_CHOOSE.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="w-6 h-6 bg-brio-navy flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-brio-navy text-[15px] font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-body text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-text-body text-[15px] leading-relaxed max-w-3xl">
            At BRIO, we transform your vision into thoughtfully designed, expertly
            crafted living spaces.
          </p>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy uppercase tracking-wide text-center mb-12">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-brio-light-gray p-8">
                <p className="text-text-body text-[14px] leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-brio-navy text-[15px] font-semibold">{t.name}</p>
                  <p className="text-text-muted text-[13px]">{t.location} &mdash; {t.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process — THE BRIO CUSTOM HOME SERVICES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro heading + CTA */}
          <div className="max-w-3xl mb-14">
            <h2 className="font-heading text-[28px] md:text-[36px] font-semibold text-brio-navy uppercase tracking-wide mb-5">
              The BRIO Custom Home Services
            </h2>
            <p className="text-text-body text-[15px] leading-relaxed mb-8">
              Building a custom home is an exciting journey &mdash; and choosing
              the right builder makes all the difference. At BRIO Construction, we
              bring your dream home to life with expert craftsmanship, transparent
              communication, and a commitment to excellence at every stage.
            </p>
            <Link
              href="#get-in-touch"
              className="inline-block bg-brio-navy text-white text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
            >
              Book Your Free Consultation Today!
            </Link>
          </div>

          {/* Two-column: image left, steps right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left – image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/city/img-01.jpg"
                alt="BRIO custom home construction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right – numbered steps with bullet points */}
            <div className="space-y-10">
              {PROCESS_STEPS.map((item) => (
                <div key={item.step}>
                  <h3 className="text-brio-navy text-[16px] font-semibold uppercase tracking-wide mb-3">
                    Step {item.step}. {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.desc.split(". ").filter(Boolean).map((sentence, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-brio-navy mt-1.5 shrink-0">&#8226;</span>
                        <p className="text-text-body text-[14px] leading-relaxed">
                          {sentence.endsWith(".") ? sentence : `${sentence}.`}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Form + FAQ side by side */}
      <section id="get-in-touch" className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left – form */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-2 uppercase tracking-wide">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-text-body text-[13px] leading-relaxed mb-6">
                Ready to explore the possibilities for your project? We&apos;d love to hear your ideas!
                Taking the first step is easy. Share a few details below, and our team will get in touch to schedule a friendly, no-obligation consultation to discuss your project.
              </p>
              <LeadForm source="custom-home-construction" service="custom-home" variant="compact" />
            </div>

            {/* Right – FAQ */}
            <div>
              <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-brio-navy mb-6 uppercase tracking-wide">
                Frequently Asked Questions
              </h3>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
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

      {/* 9. Footer */}
      <Footer />
    </>
  );
}
