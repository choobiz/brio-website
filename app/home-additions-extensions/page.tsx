import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";

export const metadata: Metadata = {
  title: "Home Additions & Extensions",
  description: "Need more room? Home additions and extensions let you grow your living space without moving. BRIO Construction designs and builds seamless additions t",
};

export default function HomeAdditionsExtensionsPage() {
  return (
    <ServicePageLayout
      title="Expand Your Living Space"
      description="Need more room? Home additions and extensions let you grow your living space without moving. BRIO Construction designs and builds seamless additions that blend with your existing home."
      features={["Second storey additions", "Room extensions and bump-outs", "Garage conversions", "Sunroom and patio enclosures"]}
      faq={[{ q: "How long will my project take?", a: "Every project is different, but we provide a clear timeline during the planning phase. We keep you informed at every step to ensure there are no surprises." }, { q: "Do you handle permits?", a: "Yes, we take care of the entire permit process, ensuring your project meets local building codes and regulations." }, { q: "What kind of warranty do you offer?", a: "We stand by our craftsmanship and offer a 12-month warranty on all construction work, ensuring peace of mind long after completion." }, { q: "Can I make changes after construction starts?", a: "Yes, but changes may impact the timeline and cost. We always discuss adjustments with you first." }]}
    />
  );
}
