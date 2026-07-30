import Link from "next/link";
import { LineChart, Camera, MessageSquare, ClipboardCheck } from "lucide-react";

const HIGHLIGHTS = [
  { icon: LineChart, label: "Live progress", desc: "Track your build against the schedule in real time." },
  { icon: Camera, label: "Photo updates", desc: "See the latest site photos as the work happens." },
  { icon: MessageSquare, label: "Message your team", desc: "Chat with your project manager, right in the app." },
  { icon: ClipboardCheck, label: "Selections & approvals", desc: "Approve finishes and change orders in one place." },
];

export default function Keystone() {
  return (
    <section className="py-16 md:py-24 bg-brio-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
            Our Own Technology · Included with Every Project
          </p>
          <h2 className="text-[32px] md:text-[42px] font-semibold font-heading leading-tight">
            Always Know Exactly Where Your Project Stands
          </h2>
          <p className="text-white/70 text-base md:text-[17px] mt-5 leading-relaxed">
            Most contractors leave you guessing. Every BRIO project runs on{" "}
            <strong className="text-white font-semibold">BRIO&nbsp;Keystone</strong>, our own
            project-management app — your private window into the build, from first day to handover.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="bg-white/[0.06] border border-white/10 p-6">
              <h.icon className="w-7 h-7 text-white mb-4" strokeWidth={1.5} />
              <h3 className="text-[16px] font-semibold font-heading mb-1.5">{h.label}</h3>
              <p className="text-white/65 text-[14px] leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/keystone"
            className="inline-block bg-white text-brio-navy text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-white/90 transition-colors"
          >
            Explore BRIO Keystone
          </Link>
        </div>
      </div>
    </section>
  );
}
