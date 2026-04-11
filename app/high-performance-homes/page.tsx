import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "High Performance Homes",
  description: "High performance homes combine superior insulation, advanced HVAC systems, and solar-ready design for enhanced efficiency and long-term value.",
};

export default function HighPerformanceHomesPage() {
  return (
    <ServicePageLayout
      title="Build for Energy Efficiency and Comfort"
      description="High performance homes combine superior insulation, advanced HVAC systems, and solar-ready design for enhanced efficiency and long-term value."
      features={["Energy Step Code compliance", "Superior insulation systems", "Solar-ready and net-zero designs", "Smart home integration"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
