import type { Metadata } from "next";
import Link from "next/link";
import {
  LineChart,
  Camera,
  MessageSquare,
  ClipboardCheck,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CTA from "@/components/shared/CTA";

export const metadata: Metadata = {
  title: "BRIO Keystone — Your Project, Live",
  description:
    "BRIO Keystone is our own project-management app — included with every project. See live progress, site photos, and message your team in real time. Always know exactly where your build stands.",
  alternates: { canonical: "/keystone" },
};

const FEATURES = [
  {
    icon: LineChart,
    title: "Live Progress",
    desc: "Track your build against the schedule and watch your completion date update in real time — no more wondering how far along things are.",
  },
  {
    icon: Camera,
    title: "Photo Updates",
    desc: "See the latest site photos as the work happens. No need to ask, drive by, or wait for a status call.",
  },
  {
    icon: MessageSquare,
    title: "Message Your Team",
    desc: "Chat directly with your project manager in the app — with read receipts — so nothing gets lost in email or voicemail.",
  },
  {
    icon: ClipboardCheck,
    title: "Selections & Approvals",
    desc: "Choose your finishes and approve items right in the app. Every decision is documented in one place.",
  },
  {
    icon: FileText,
    title: "Transparent Change Orders",
    desc: "Any change is documented, priced, and approved in the app before we proceed — no surprise bills at the end.",
  },
  {
    icon: ShieldCheck,
    title: "Payments, Docs & Warranty",
    desc: "Your payment schedule, contract, documents, and 1-year workmanship warranty — all in one secure portal.",
  },
];

/* Styled mockup of the BRIO Keystone app — faithful to the real Owner Portal
   (progress schedule, latest photos, PM messaging). Built in markup so it stays
   crisp at any size. */
function PhoneMock() {
  const milestones = [
    { label: "Framing", state: "done" },
    { label: "Electrical rough-in", state: "done" },
    { label: "Drywall", state: "active" },
    { label: "Finishes", state: "todo" },
  ];
  return (
    <div className="relative mx-auto w-[270px]">
      <div className="absolute -inset-6 bg-white/10 blur-3xl rounded-full" aria-hidden="true" />
      <div className="relative rounded-[2.4rem] bg-black p-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/15">
        <div className="relative rounded-[2rem] overflow-hidden bg-[#eef2f5]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[22px] bg-black rounded-b-2xl z-10" aria-hidden="true" />
          {/* app header */}
          <div className="bg-brio-navy px-4 pt-6 pb-3 text-white">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold tracking-tight">BRIO Keystone</span>
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-[10px] font-bold">A</span>
            </div>
            <p className="text-[11px] text-white/55 mt-0.5">Trinity St · Multi-Family Build</p>
          </div>
          {/* screen body */}
          <div className="px-3.5 py-3.5 space-y-3">
            <div className="bg-white p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-brio-navy">Overall Progress</span>
                <span className="text-[11px] font-bold text-[#0a7d3c]">68%</span>
              </div>
              <div className="h-2 bg-[#e6ebef] overflow-hidden">
                <div className="h-full bg-[#0a7d3c]" style={{ width: "68%" }} />
              </div>
              <p className="text-[10px] text-[#5b6b78] mt-2">On track · Est. completion Sep 12</p>
            </div>
            <div className="bg-white p-3 shadow-sm space-y-1.5">
              {milestones.map((m) => (
                <div key={m.label} className="flex items-center gap-2">
                  <span
                    className={`w-3.5 h-3.5 flex items-center justify-center text-[8px] font-bold ${
                      m.state === "done"
                        ? "bg-[#0a7d3c] text-white"
                        : m.state === "active"
                        ? "bg-brio-navy text-white"
                        : "bg-[#dbe2e8] text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <span className={`text-[11px] ${m.state === "todo" ? "text-[#9aa7b2]" : "text-[#26333d]"}`}>{m.label}</span>
                  {m.state === "active" && <span className="ml-auto text-[9px] font-semibold text-brio-navy">In progress</span>}
                </div>
              ))}
            </div>
            <div className="bg-white p-3 shadow-sm">
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 shrink-0 bg-brio-navy text-white text-[9px] font-bold flex items-center justify-center">PM</span>
                <div>
                  <p className="text-[10px] text-[#26333d] leading-snug bg-[#f1f5f8] px-2 py-1.5">
                    Drywall starts Monday — I&rsquo;ll post photos as we go 👍
                  </p>
                  <p className="text-[8px] text-[#9aa7b2] mt-1">Read · 2:14 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KeystonePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-brio-navy text-white pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
                Our Own Technology · Included with Every Project
              </p>
              <h1 className="text-[36px] md:text-[52px] font-semibold font-heading leading-[1.1]">
                Your project, live — with BRIO&nbsp;Keystone.
              </h1>
              <p className="text-white/70 text-base md:text-[18px] mt-6 leading-relaxed max-w-xl">
                Most contractors leave you guessing. Every BRIO project runs on Keystone, our own
                project-management app — a private portal where you see live progress, site photos,
                and message your team in real time, from first day to handover.
              </p>
              <Link
                href="/about-us#get-in-touch"
                className="inline-block mt-8 bg-white text-brio-navy text-[13px] font-semibold px-8 py-4 uppercase tracking-wide hover:bg-white/90 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
            <div className="lg:pl-8">
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading">
              Everything About Your Build, in One Place
            </h2>
            <p className="text-text-body text-base mt-4">
              Keystone puts the whole project at your fingertips — so you always know exactly where
              things stand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-brio-light-gray p-8">
                <f.icon className="w-8 h-8 text-brio-navy mb-4" strokeWidth={1.5} />
                <h3 className="text-brio-navy text-[18px] font-semibold font-heading mb-2">
                  {f.title}
                </h3>
                <p className="text-text-body text-[15px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included band */}
      <section className="py-14 md:py-20 bg-brio-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[26px] md:text-[34px] font-semibold text-brio-navy font-heading">
            Included with every BRIO project — at no extra cost
          </h2>
          <p className="text-text-body text-base md:text-[17px] mt-4 leading-relaxed">
            Real-time visibility and communication are the difference between hoping your project is
            on track and knowing it is. That&rsquo;s why Keystone comes standard on every build we take on.
          </p>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
