import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Strata Maintenance & Renovation Services",
  description: "BRIO Construction provides comprehensive strata maintenance, renovation, and improvement services for multi-unit residential and commercial buildings.",
};

export default function StrataServicesPage() {
  return (
    <ServicePageLayout
      title="Expert Strata Building Services"
      description="BRIO Construction provides comprehensive strata maintenance, renovation, and improvement services for multi-unit residential and commercial buildings."
      features={["Common area renovations", "Building envelope repairs", "Hallway and lobby upgrades", "Unit renovations for strata owners"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
