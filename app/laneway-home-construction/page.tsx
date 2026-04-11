import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Laneway Home Construction",
  description: "A laneway home is a smart investment that adds value, generates rental income, and creates flexible living space. BRIO Construction handles the entire",
};

export default function LanewayHomeConstructionPage() {
  return (
    <ServicePageLayout
      title="Enhance Your Property with a Laneway Home"
      description="A laneway home is a smart investment that adds value, generates rental income, and creates flexible living space. BRIO Construction handles the entire process from design to completion."
      features={["Full laneway home builds", "Permit and zoning management", "Rental income optimization", "Energy-efficient construction"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
