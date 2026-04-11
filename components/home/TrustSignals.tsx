import { MessageCircle, DollarSign, Calendar, FileCheck, Gem, Shield, Sparkles, Award, Wrench } from "lucide-react";

const SIGNALS = [
  { icon: MessageCircle, title: "Clear Communication", desc: "We maintain clear communication throughout the entire project." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No mystery about where or how your money is being spent." },
  { icon: Calendar, title: "Project Schedule", desc: "From start to finish, we keep you updated as your renovation progresses." },
  { icon: FileCheck, title: "Permits & Inspections", desc: "All permits and inspections are properly completed. No shortcuts." },
  { icon: Gem, title: "Quality Materials", desc: "We use the best materials based on your requirements for lasting results." },
  { icon: Shield, title: "Safety First", desc: "Safety comes first on our job sites, keeping the project on budget and schedule." },
  { icon: Sparkles, title: "Clean Up", desc: "Your home will be cleaned upon completion. No mess left behind." },
  { icon: Award, title: "Licensed & Insured", desc: "We are licensed and insured to protect your investment and our people." },
  { icon: Wrench, title: "12-Month Warranty", desc: "We stand behind our work with a twelve month warranty on all workmanship." },
];

export default function TrustSignals() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brio-blue text-sm font-semibold uppercase tracking-wider mb-2">Why Choose BRIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brio-navy font-heading">
            Build with Confidence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGNALS.map((signal, i) => {
            const Icon = signal.icon;
            return (
              <div key={i} className="flex gap-4 p-5 rounded-xl hover:bg-brio-light transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brio-gold/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brio-gold" />
                </div>
                <div>
                  <h3 className="text-brio-navy text-[15px] font-semibold mb-1">{signal.title}</h3>
                  <p className="text-text-secondary text-sm">{signal.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
