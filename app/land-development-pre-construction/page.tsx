import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Land Development & Pre-Construction",
  description: "We help homeowners, developers, and investors transform vacant land into valuable, build-ready sites with full pre-construction services.",
};

export default function LandDevelopmentPreConstructionPage() {
  return (
    <ServicePageLayout
      title="Turn Vacant Land Into Valuable Property"
      description="We help homeowners, developers, and investors transform vacant land into valuable, build-ready sites with full pre-construction services."
      features={["Feasibility studies and site analysis", "Rezoning and subdivision applications", "Permit management", "Pre-construction planning and budgeting"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
