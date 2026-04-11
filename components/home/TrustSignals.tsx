import { MessageCircle, DollarSign, Calendar, FileCheck, Gem, Shield, Sparkles, Award, Wrench } from "lucide-react";

const SIGNALS = [
  { icon: MessageCircle, title: "Clear Communication", desc: "We aim to maintain clear communication with you throughout the entire project, to help ensure your renovation is a success." },
  { icon: DollarSign, title: "Transparent pricing", desc: "There shouldn't be any mystery as to where or how your money is being spent. That's why we provide transparent pricing." },
  { icon: Calendar, title: "Project Schedule", desc: "From start to finish, we'll keep you up to date as your home renovation progresses. So you're not guessing what's going on." },
  { icon: FileCheck, title: "Permits & Inspections", desc: "We don't take short cuts or leave things to chance. We ensure all permits and inspections are properly completed." },
  { icon: Gem, title: "Quality Materials", desc: "We want to ensure your home renovation lasts a lifetime. That's why we use the best materials based on your requirements." },
  { icon: Shield, title: "Safety First", desc: "Safety comes first on our job sites. This not only helps prevent accidents, but it help keep the project on budget and schedule." },
  { icon: Sparkles, title: "Clean up", desc: "Things can get messy during a renovation, but you have no need to worry, Your home will be cleaned upon completion." },
  { icon: Award, title: "License & Insurance", desc: "We are licensed and insured to protect your investment and our people. you can expect professional service from us." },
  { icon: Wrench, title: "Warranty", desc: "We stand behind our work with a twelve month warranty on all workmanship. If you have a problem, we'll take care of it." },
];

export default function TrustSignals() {
  return (
    <section className="py-16 md:py-24 bg-brio-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading">
            Build with Confidence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGNALS.map((signal, i) => {
            const Icon = signal.icon;
            return (
              <div key={i} className="text-center px-4 py-6">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-brio-navy" strokeWidth={1.5} />
                </div>
                <h5 className="text-brio-navy text-[16px] font-semibold mb-2">{signal.title}</h5>
                <p className="text-text-body text-[14px] leading-relaxed">{signal.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
