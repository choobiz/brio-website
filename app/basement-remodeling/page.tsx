import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Expert Basement Remodeling",
  description: "Turn your unused basement into a beautiful, functional space. Whether you want a home office, entertainment room, or rental suite, BRIO Construction d",
};

export default function BasementRemodelingPage() {
  return (
    <ServicePageLayout
      title="Transform Your Basement Into Functional Living Space"
      description="Turn your unused basement into a beautiful, functional space. Whether you want a home office, entertainment room, or rental suite, BRIO Construction delivers expert basement renovations with quality craftsmanship."
      features={["Full basement finishing and renovation", "Legal suite conversions", "Home theatre and entertainment rooms", "Home office and gym spaces"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
