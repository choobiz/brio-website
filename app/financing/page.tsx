import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardCheck,
  CheckCircle2,
  Hammer,
  Clock,
  DollarSign,
  CalendarDays,
  ShieldCheck,
  Check,
  BadgePercent,
  CalendarClock,
  TrendingDown,
} from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/FAQ";
import ApplicationForm from "@/components/financing/ApplicationForm";

export const metadata: Metadata = {
  title: "Home Financing Options",
  description:
    "Renovate now, pay later with BRIO Construction's flexible financing. Finance up to $100,000 with 0% interest promos. Pre-approval in minutes, no impact on credit score.",
};

const STEPS = [
  {
    icon: ClipboardCheck,
    tone: "bg-blue-100 text-blue-700",
    title: "Get a Free Quote",
    body: "Tell us about your project, and we'll provide a detailed, no-obligation quote. We'll show you how breaking it down into low monthly payments makes it affordable.",
  },
  {
    icon: CheckCircle2,
    tone: "bg-green-100 text-green-700",
    title: "Instant Pre-Approval",
    body: "Our quick, on-the-spot application takes only a few minutes to complete. Get a decision instantly and see your personalized financing options.",
  },
  {
    icon: Hammer,
    tone: "bg-orange-100 text-orange-700",
    title: "Start Your Renovation",
    body: "Once approved, we schedule your project and get to work. You don't pay until the job is done to your satisfaction. It's that simple!",
  },
];

const SPEED = [
  {
    icon: Clock,
    title: "Approval Speed",
    body: "Get a credit decision on-the-spot with our mobile application. No lengthy paperwork or waiting for days.",
  },
  {
    icon: DollarSign,
    title: "Funding Speed",
    body: "Your project is funded as soon as you sign off on the work. This means we can start—and finish—your renovation sooner.",
  },
  {
    icon: CalendarDays,
    title: "Loan Validity",
    body: "Your financing approval is valid for six months, giving you the flexibility to plan your project without feeling rushed.",
  },
];

const PROMOS = [
  {
    icon: BadgePercent,
    tag: "0%",
    tagTone: "bg-green-100 text-green-700",
    title: "No-Interest Plans",
    body: "0% interest for 12, 24, 36, 48, or 60 months — pay over time without paying a dollar more than the project price.",
  },
  {
    icon: CalendarClock,
    tag: "0 / 0",
    tagTone: "bg-blue-100 text-blue-700",
    title: "Deferred Payments",
    body: "No payments and no interest for 3, 6, or 12 months — start enjoying your renovation now and begin payments later.",
  },
  {
    icon: TrendingDown,
    tag: "2.99%",
    tagTone: "bg-orange-100 text-orange-700",
    title: "Rate Buydowns",
    body: "Lower your interest rate to as little as 2.99% on qualifying loans, making monthly payments fit your budget.",
  },
];

const TRANSPARENCY = [
  {
    title: "Interest Rates",
    body: "Customized rates from 0% to 13.99% APR, plus promotional programs that can bring your effective cost lower.",
  },
  {
    title: "Loan Terms",
    body: "Terms up to 5 years with amortization up to 20 years for lower monthly payments.",
  },
  {
    title: "Fees",
    body: "No hidden application fees, no prepayment penalties. Pay off your loan early and save on interest without any extra charges.",
  },
];

const BENEFITS = [
  {
    title: "Bigger Dreams, Better Budget",
    body: "Finance up to $100,000 to cover everything from a kitchen refresh to a full home extension. Don't compromise on your vision.",
  },
  {
    title: "Flexible Payments",
    body: "Choose a payment plan that fits your life. With options for low monthly, bi-weekly, or weekly payments, you're in control.",
  },
  {
    title: "Quick & Easy Process",
    body: "Our simple, digital application means no bank appointments and no hassle. Get approved from the comfort of your home.",
  },
  {
    title: "Protect Your Savings",
    body: "Keep your savings for emergencies or other investments. Our financing lets you improve your home without draining your bank account.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Will checking my eligibility affect my credit score?",
    a: "No, you can find out if you're eligible without any impact on your credit score.",
  },
  {
    q: "Can I pay off my loan early?",
    a: "Absolutely! You can pay off your loan at any time without any prepayment penalties or fees.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. We believe in 100% transparency. Our financing plans have no hidden fees.",
  },
  {
    q: "What if my credit isn't perfect?",
    a: "We encourage you to apply. Financeit reviews every application and works to approve as many customers as possible.",
  },
  {
    q: "What types of renovations can I finance?",
    a: "You can finance nearly any home improvement project — kitchens and bathrooms, basement renovations, roofing and exteriors, windows and doors, eaves and gutters, insulation, plumbing, electrical, flooring, painting, decks and fences, landscaping, hearth and fireplaces, garages, and solar. If you don't see your project here, reach out — chances are it's covered.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[520px] md:min-h-[640px] flex items-center">
        <Image
          src="/images/projects/east-broadway/hero.jpg"
          alt="Renovated home interior"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brio-navy/90 via-brio-navy/75 to-brio-navy/95" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20 [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
          <h1 className="font-heading text-[30px] md:text-[48px] font-semibold leading-tight uppercase tracking-wide mb-5 drop-shadow-lg">
            Your Dream Home Renovation Is Finally Within Reach.
          </h1>
          <p className="text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-6">
            Get the home you&apos;ve always wanted now and pay later with our simple,
            flexible financing options. No hidden fees, no waiting, just beautiful results.
          </p>
          <p className="font-heading italic text-[18px] md:text-[20px] mb-2">
            Renovate Now, Pay Later!
          </p>
          <p className="text-[14px] mb-8">
            Finance your entire project with affordable monthly payments.
          </p>
          <Link
            href="#apply"
            className="inline-block bg-brio-navy text-white text-[13px] md:text-[14px] font-semibold px-8 py-4 uppercase tracking-wide border border-white/30 hover:bg-brio-navy/80 transition-colors [text-shadow:none]"
          >
            Get Pre-Approved in Minutes
          </Link>
          <p className="text-[12px] mt-4">
            Checking your eligibility won&apos;t affect your credit score.
          </p>
        </div>
      </section>

      {/* ── 3 Simple Steps ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[26px] md:text-[36px] font-semibold text-brio-navy text-center uppercase tracking-wide mb-14">
            Your Dream Renovation in 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="text-center px-4">
                  <div className="relative inline-flex items-center justify-center mb-5">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${s.tone}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-brio-navy text-white text-[12px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-brio-navy text-[18px] md:text-[20px] font-semibold mb-3">
                    {s.title}
                  </h3>
                  <p className="text-text-body text-[14px] leading-relaxed max-w-xs mx-auto">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Don't Wait — Speed/Validity ── */}
      <section className="py-16 md:py-20 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[26px] md:text-[36px] font-semibold text-brio-navy text-center uppercase tracking-wide mb-12">
            Don&apos;t Wait to Create Your Perfect Space
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {SPEED.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="text-center px-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brio-navy text-white mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-brio-navy text-[16px] md:text-[18px] font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-text-body text-[14px] leading-relaxed max-w-xs mx-auto">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Trusted Partner ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-[26px] md:text-[36px] font-semibold text-brio-navy uppercase tracking-wide mb-3">
            Your Home Is in Trusted Hands
          </h2>
          <p className="text-text-muted text-[12px] uppercase tracking-widest mb-8">
            Our Trusted Financing Partner
          </p>
          <a
            href="https://www.financeit.io/home-renovation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-10"
          >
            <Image
              src="/images/financing/financeit-logo.jpg"
              alt="Financeit — BRIO Construction's financing partner"
              width={260}
              height={130}
              className="mx-auto"
            />
          </a>
          <div className="flex items-start justify-center gap-3 max-w-xl mx-auto">
            <ShieldCheck className="w-6 h-6 text-brio-navy shrink-0 mt-0.5" />
            <p className="text-text-body text-[14px] leading-relaxed text-left">
              Your personal information is protected with bank-level security. Apply with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── Promotional Programs ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-text-muted text-[12px] uppercase tracking-widest mb-3">
              Financeit Promotional Programs
            </p>
            <h2 className="font-heading text-[26px] md:text-[36px] font-semibold text-brio-navy uppercase tracking-wide mb-4">
              Pay Less. Pay Later. Pay Your Way.
            </h2>
            <p className="text-text-body text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed">
              Choose the program that fits your project and your cash flow. Ask us which offers are available for your renovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PROMOS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-brio-light-gray p-6 md:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
                    <Icon className="w-6 h-6 text-brio-navy" />
                  </div>
                  <span className={`inline-block text-[12px] font-bold uppercase tracking-wide px-3 py-1 mb-3 ${p.tagTone}`}>
                    {p.tag}
                  </span>
                  <h3 className="font-heading text-brio-navy text-[18px] md:text-[20px] font-semibold mb-3">
                    {p.title}
                  </h3>
                  <p className="text-text-body text-[14px] leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
          <p className="text-text-muted text-[12px] text-center mt-8 max-w-2xl mx-auto leading-relaxed">
            Promotional offer terms set by Financeit. Fees apply for promotional programs. Ask BRIO or Financeit for details on availability and qualification.
          </p>
        </div>
      </section>

      {/* ── No Surprises — Transparency ── */}
      <section className="py-16 md:py-20 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-[26px] md:text-[36px] font-semibold text-brio-navy uppercase tracking-wide mb-4">
              No Surprises. Just Honest Financing.
            </h2>
            <p className="text-text-body text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed">
              At BRIO Construction, we believe in transparency. Our financing is designed to be clear and easy to understand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TRANSPARENCY.map((t) => (
              <div key={t.title} className="bg-white p-6 md:p-8">
                <h3 className="font-heading text-brio-navy text-[16px] md:text-[18px] font-semibold mb-3">
                  {t.title}
                </h3>
                <p className="text-text-body text-[14px] leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Smart Way to Invest — Benefits ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-brio-navy text-center mb-12">
            The Smart Way to Invest in Your Home
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-heading text-brio-navy text-[15px] md:text-[16px] font-semibold mb-1">
                    {b.title}
                  </h3>
                  <p className="text-text-body text-[13px] md:text-[14px] leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply Form + FAQ split ── */}
      <section id="apply" className="py-16 md:py-20 bg-brio-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — form */}
            <div className="bg-white p-6 md:p-8">
              <h3 className="font-heading text-brio-navy text-[20px] md:text-[24px] font-semibold uppercase tracking-wide mb-2">
                Are You Ready to Apply?
              </h3>
              <p className="text-text-body text-[14px] leading-relaxed mb-6">
                Getting pre-approved is simple. Here&apos;s what our financing partner, Financeit, typically requires to get started:
              </p>
              <ApplicationForm />
            </div>

            {/* Right — FAQ */}
            <div>
              <h3 className="font-heading text-brio-navy text-[20px] md:text-[24px] font-semibold uppercase tracking-wide mb-6">
                Frequently Asked Questions
              </h3>
              <FAQ items={FAQ_ITEMS} compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-text-muted text-[11px] uppercase tracking-widest mb-1">Subscribe</p>
              <h2 className="font-heading text-[22px] md:text-[26px] font-bold text-brio-navy mb-2">
                The Inside Look
              </h2>
              <p className="text-text-body text-[13px] leading-relaxed mb-4 max-w-md">
                The email newsletter that delivers curated home decor and furniture picks, expert design advice, and more. Join 4,000+ subscribers.
              </p>
              <form className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="flex-1 h-10 px-4 border border-gray-300 text-sm bg-white focus:outline-none focus:border-brio-navy"
                />
                <button
                  type="submit"
                  className="h-10 px-5 bg-brio-navy text-white font-semibold uppercase tracking-wide text-[12px] hover:bg-brio-navy/90 transition-colors shrink-0"
                >
                  Sign Me Up
                </button>
              </form>
            </div>
            <div className="hidden md:block relative w-[200px] h-[240px] rounded-t-full overflow-hidden">
              <Image
                src="/images/newsletter.png"
                alt="Builder overlooking a construction site"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
