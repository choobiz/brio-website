const STEPS = [
  { num: "1", title: "Consultation & Planning", desc: "We start by understanding your vision, needs, and budget.", bullets: ["Friendly, no-pressure consultation", "Expert advice on feasibility, zoning, and permits"] },
  { num: "2", title: "Design Phase", desc: "We refine your ideas into a detailed plan, ensuring everything aligns with your goals.", bullets: ["Design development & material selection", "Collaboration with architects and engineers (if needed)"] },
  { num: "3", title: "Estimate & Contract", desc: "We provide a detailed, transparent estimate so you know exactly what to expect.", bullets: ["No hidden fees or surprises", "Clear breakdown of costs and timelines"] },
  { num: "4", title: "Pre-Construction", desc: "Before work begins, we handle permits, finalize materials, and schedule the build.", bullets: ["Permitting & site preparation", "Timeline confirmation & pre-build checklist"] },
  { num: "5", title: "Project Launch", desc: "Construction begins! We keep you updated with regular progress reports.", bullets: ["Skilled craftsmanship & quality materials", "Ongoing communication to ensure everything stays on track"] },
  { num: "6", title: "Final Walkthrough & Handover", desc: "We ensure everything meets our high standards before delivering the final keys.", bullets: ["Thorough inspections & finishing touches", "Our work is backed by a warranty for peace of mind"] },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading">
            The Brio Process: Seamless Transparent and Stress-Free
          </h2>
          <p className="text-text-body text-base mt-4 max-w-2xl mx-auto">
            At Brio, we believe in a structured, client-focused approach that keeps your project on track while ensuring clarity and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step) => (
            <div key={step.num} className="bg-brio-light-gray p-8 rounded-none">
              <h4 className="text-brio-navy text-[18px] font-semibold font-heading mb-3">
                {step.num}. {step.title}
              </h4>
              <p className="text-text-body text-[15px] mb-3">{step.desc}</p>
              <ul className="space-y-1">
                {step.bullets.map((b, i) => (
                  <li key={i} className="text-text-body text-[14px] flex items-start gap-2">
                    <span className="text-brio-navy mt-1">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
