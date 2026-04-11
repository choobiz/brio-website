import { MessageSquare, Pencil, FileText, HardHat, Rocket, CheckCircle } from "lucide-react";

const STEPS = [
  { icon: MessageSquare, title: "Consultation & Planning", desc: "We start by understanding your vision, needs, and budget. Friendly, no-pressure consultation with expert advice on feasibility, zoning, and permits." },
  { icon: Pencil, title: "Design Phase", desc: "We refine your ideas into a detailed plan, ensuring everything aligns with your goals. Collaboration with architects and engineers as needed." },
  { icon: FileText, title: "Estimate & Contract", desc: "A detailed, transparent estimate so you know exactly what to expect. No hidden fees or surprises. Clear breakdown of costs and timelines." },
  { icon: HardHat, title: "Pre-Construction", desc: "Before work begins, we handle permits, finalize materials, and schedule the build. Timeline confirmation and pre-build checklist." },
  { icon: Rocket, title: "Project Launch", desc: "Construction begins! We keep you updated with regular progress reports. Skilled craftsmanship and quality materials throughout." },
  { icon: CheckCircle, title: "Final Walkthrough", desc: "We ensure everything meets our high standards before delivering the final keys. Thorough inspections, finishing touches, and warranty for peace of mind." },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-brio-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brio-blue text-sm font-semibold uppercase tracking-wider mb-2">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brio-navy font-heading">
            Seamless, Transparent, and Stress-Free
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brio-blue/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-brio-blue" />
                  </div>
                  <div>
                    <span className="text-brio-gold text-xs font-bold">STEP {i + 1}</span>
                    <h3 className="text-brio-navy text-lg font-semibold">{step.title}</h3>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
