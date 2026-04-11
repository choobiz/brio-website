import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Expert Commercial Renovations",
  description: "We specialize in high-quality commercial renovations designed to improve efficiency, aesthetics, and overall experience for employees, customers, and ",
};

export default function CommercialRenovationsPage() {
  return (
    <ServicePageLayout
      title="Transform Your Commercial Space"
      description="We specialize in high-quality commercial renovations designed to improve efficiency, aesthetics, and overall experience for employees, customers, and clients."
      features={["Office tenant improvements", "Retail space buildouts", "Restaurant and hospitality renovations", "Medical and dental office design"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
