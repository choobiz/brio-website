import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import TrustSignals from "@/components/home/TrustSignals";
import FAQ from "@/components/shared/FAQ";
import CTA from "@/components/shared/CTA";

const HOME_FAQ = [
  { q: "How long will my renovation or construction project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. The duration depends on the scope, permit approvals, and material availability, but we keep you informed at every step to ensure there are no surprises." },
  { q: "Do I need permits for my project, and do you handle them?", a: "Yes, many renovations and all new construction projects require permits. We take care of the entire permit process, ensuring your project meets local building codes and regulations." },
  { q: "How do you ensure my project stays within budget?", a: "We provide a detailed, transparent estimate upfront and maintain clear communication throughout the project. If unexpected issues arise, we discuss solutions with you first — no hidden costs or surprises." },
  { q: "Can I make changes to my project after construction has started?", a: "Yes, but changes may impact the timeline and cost. We'll always discuss any adjustments with you beforehand to ensure you're comfortable with the next steps." },
  { q: "What kind of warranty do you offer on your work?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work. We'll provide details specific to your project, ensuring peace of mind long after completion." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* About Snippet */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brio-navy font-heading mb-6">
            Building Confidence in Every Project
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            At BRIO, we believe that every building project should be a smooth and stress-free experience.
            Whether you&apos;re building from the ground up or reimagining an existing space, our team is dedicated
            to delivering excellence at every stage. From concept to completion, we work side by side with
            homeowners, architects, and businesses to craft spaces that are not only functional but also inspiring.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <ProcessSteps />
      <TrustSignals />
      <FAQ items={HOME_FAQ} />

      <CTA
        heading="Let's Build Something Exceptional Together"
        body="Whether you're planning a renovation, building a custom home, or developing a spec project — we're here to make it happen. Start with a free consultation."
      />

      <Footer />
    </>
  );
}
