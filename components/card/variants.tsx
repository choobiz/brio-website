// Alternative card designs, previewed at /card/<slug>/design/<variant>.
// Same data, same contact file, same form; only the presentation differs.

import Image from "next/image";
import { Download, Star, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { TeamCard } from "@/lib/team";
import CardLeadForm from "@/components/card/CardLeadForm";
import { cardActions, CREDENTIALS } from "@/components/card/parts";

export const VARIANTS = ["luxury", "mono", "minimal", "bento"] as const;
export type Variant = (typeof VARIANTS)[number];

type P = { card: TeamCard; serif?: string; sans?: string };

/* 1 · Luxury: near-black, champagne gold, high-contrast serif. */
export function Luxury({ card, serif }: P) {
  const gold = "text-[#C9A96E]";
  return (
    <main className="min-h-screen max-md:-mb-[68px] bg-[#0B0B0C] text-[#E9E4DA]">
      <div className="mx-auto max-w-[440px] px-7 pt-10 pb-14 text-center">
        <Image src="/images/logo-white.png" alt={COMPANY.name} width={140} height={42} className="mx-auto h-8 w-auto opacity-90" priority />
        <div className="mx-auto mt-10 w-36 p-[3px] border border-[#C9A96E]/60">
          <Image src={card.photo} alt={card.name} width={144} height={144} className="h-36 w-full object-cover" priority />
        </div>
        <h1 className={`${serif} mt-8 text-[44px] leading-none font-light tracking-wide`} style={{ color: "#F4EFE6" }}>{card.name}</h1>
        <p className={`mt-4 text-[11px] uppercase tracking-[0.35em] ${gold}`}>{card.title}</p>
        <div className="mx-auto my-7 h-px w-16 bg-[#C9A96E]/60" />
        <p className={`${serif} text-[19px] leading-relaxed italic text-[#D8D1C4]`}>{card.pitch}</p>

        <a href={`/card/${card.slug}/contact`} className="mt-9 flex items-center justify-center gap-2 h-13 py-4 w-full bg-[#C9A96E] text-[#0B0B0C] text-[12px] font-semibold uppercase tracking-[0.25em]">
          <Download className="w-4 h-4" aria-hidden="true" /> Save contact
        </a>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {cardActions(card).map(({ key, href, label, aria, Icon }) => (
            <a key={key} href={href} aria-label={aria} className="flex items-center justify-center gap-2.5 h-14 border border-[#C9A96E]/40 text-[12px] uppercase tracking-[0.2em] text-[#E9E4DA]">
              <Icon className={`w-4 h-4 ${gold}`} /> {label}
            </a>
          ))}
        </div>

        <div className="mt-8 space-y-1 text-[14px] tracking-wide">
          <a href={`tel:${card.phoneClean}`} className="block">{card.phone}</a>
          <a href={`mailto:${card.email}`} className="block text-[#D8D1C4]">{card.email}</a>
        </div>

        <div className="mx-auto my-9 h-px w-full bg-[#C9A96E]/25" />
        <ul className="space-y-2 text-[11px] uppercase tracking-[0.22em] text-[#B9B2A5]">
          <li className={gold}>★★★★★ &nbsp;5.0 on Google</li>
          {CREDENTIALS.map((c) => <li key={c}>{c}</li>)}
        </ul>

        <div className="mx-auto my-9 h-px w-full bg-[#C9A96E]/25" />
        <h2 className={`${serif} text-[30px] font-light`} style={{ color: "#F4EFE6" }}>Let&apos;s connect</h2>
        <p className="mt-1 mb-6 text-[13px] text-[#B9B2A5]">Leave your details and I&apos;ll be in touch.</p>
        <CardLeadForm
          card={card.slug}
          phone={card.phone}
          theme={{
            field: "w-full h-12 bg-transparent border-0 border-b border-[#C9A96E]/40 px-1 text-[15px] text-[#F4EFE6] placeholder:text-[#8A8478] focus:outline-none focus:border-[#C9A96E]",
            button: "mt-4 w-full h-12 border border-[#C9A96E] text-[#C9A96E] text-[12px] uppercase tracking-[0.3em] disabled:opacity-60",
            sent: "border border-[#C9A96E]/40 p-5 text-center text-[#F4EFE6]",
            error: "text-[13px] text-[#E8A0A0]",
          }}
        />
        <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-[#6F6A61]">{COMPANY.legalName} · North Vancouver</p>
      </div>
    </main>
  );
}

/* 2 · Black & white: editorial, heavy grotesk, grayscale photo, hard rules. */
export function Mono({ card, sans }: P) {
  return (
    <main className={`${sans} min-h-screen max-md:-mb-[68px] bg-white text-black`}>
      <div className="mx-auto max-w-[440px]">
        <div className="relative">
          <Image src={card.photo} alt={card.name} width={440} height={440} className="h-[340px] w-full object-cover object-top grayscale contrast-125" priority />
          <Image src="/images/logo-white.png" alt={COMPANY.name} width={120} height={36} className="absolute left-6 top-6 h-7 w-auto mix-blend-difference" priority />
        </div>
        <div className="px-6 pt-7 pb-12">
          <h1 className="text-[46px] font-black uppercase leading-[0.9] tracking-tight" style={{ fontFamily: "inherit", color: "#000" }}>
            {card.firstName}
            <br />
            {card.lastName}
          </h1>
          <p className="mt-4 border-t-4 border-black pt-3 text-[13px] font-bold uppercase tracking-[0.15em]">
            {card.title} — {COMPANY.name}
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-neutral-700">{card.pitch}</p>

          <a href={`/card/${card.slug}/contact`} className="mt-7 flex items-center justify-between h-14 w-full bg-black px-5 text-white text-[14px] font-bold uppercase tracking-[0.15em]">
            Save contact <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {cardActions(card).map(({ key, href, label, aria, Icon }) => (
              <a key={key} href={href} aria-label={aria} className="flex items-center gap-3 h-14 border-2 border-black px-4 text-[13px] font-bold uppercase tracking-wider">
                <Icon className="w-5 h-5" /> {label}
              </a>
            ))}
          </div>

          <dl className="mt-8 divide-y-2 divide-black border-y-2 border-black text-[14px]">
            <div className="flex justify-between py-3"><dt className="font-bold uppercase tracking-wider">Mobile</dt><dd><a href={`tel:${card.phoneClean}`}>{card.phone}</a></dd></div>
            <div className="flex justify-between py-3"><dt className="font-bold uppercase tracking-wider">Email</dt><dd><a href={`mailto:${card.email}`}>{card.email}</a></dd></div>
            <div className="flex justify-between py-3"><dt className="font-bold uppercase tracking-wider">Google</dt><dd>★★★★★ 5.0</dd></div>
          </dl>
          <ul className="mt-6 space-y-1.5 text-[12px] font-semibold uppercase tracking-wider text-neutral-600">
            {CREDENTIALS.map((c) => <li key={c}>— {c}</li>)}
          </ul>

          <h2 className="mt-12 text-[28px] font-black uppercase tracking-tight" style={{ fontFamily: "inherit", color: "#000" }}>Let&apos;s connect</h2>
          <p className="mt-1 mb-5 text-[14px] text-neutral-600">Leave your details and I&apos;ll be in touch.</p>
          <CardLeadForm
            card={card.slug}
            phone={card.phone}
            theme={{
              field: "w-full h-12 border-2 border-black bg-white px-3 text-[15px] text-black placeholder:text-neutral-500 focus:outline-none",
              button: "w-full h-14 bg-black text-white text-[14px] font-bold uppercase tracking-[0.15em] disabled:opacity-60",
              sent: "border-2 border-black p-5 text-center text-black",
            }}
          />
        </div>
      </div>
    </main>
  );
}

/* 3 · Minimal: white space, left-aligned, hairlines, form folded away. */
export function Minimal({ card, sans }: P) {
  return (
    <main className={`${sans} min-h-screen max-md:-mb-[68px] bg-[#FAFAF8] text-neutral-900`}>
      <div className="mx-auto max-w-[440px] px-8 pt-16 pb-16">
        <div className="flex items-center gap-4">
          <Image src={card.photo} alt={card.name} width={64} height={64} className="h-16 w-16 rounded-full object-cover" priority />
          <Image src="/images/logo.png" alt={COMPANY.name} width={90} height={27} className="h-5 w-auto opacity-80" priority />
        </div>
        <h1 className="mt-10 text-[34px] font-medium leading-tight tracking-tight" style={{ fontFamily: "inherit", color: "#171717" }}>{card.name}</h1>
        <p className="mt-1 text-[15px] text-neutral-500">{card.title}, {COMPANY.name}</p>
        <p className="mt-8 text-[15px] leading-relaxed text-neutral-600">{card.pitch}</p>

        <ul className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
          {cardActions(card).map(({ key, href, label, aria }) => (
            <li key={key}>
              <a href={href} aria-label={aria} className="flex items-center justify-between py-4 text-[15px]">
                <span className="text-neutral-500">{label}</span>
                <span className="flex items-center gap-2 text-neutral-900">
                  {key === "call" ? card.phone : key === "email" ? card.email : key === "whatsapp" ? "Message" : "Profile"}
                  <ArrowRight className="w-4 h-4 text-neutral-400" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a href={`/card/${card.slug}/contact`} className="mt-8 flex items-center justify-center gap-2 h-12 w-full rounded-full bg-neutral-900 text-white text-[14px] font-medium">
          <Download className="w-4 h-4" aria-hidden="true" /> Save contact
        </a>

        <p className="mt-10 text-[13px] leading-relaxed text-neutral-500">
          <Star className="mr-1 inline w-3.5 h-3.5 fill-neutral-900 text-neutral-900 align-[-2px]" aria-hidden="true" />
          5.0 on Google · Licensed residential builder · 2-5-10 home warranty
        </p>

        <details className="group mt-10 border-t border-neutral-200 pt-6">
          <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] text-neutral-900">
            Let&apos;s connect
            <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" aria-hidden="true" />
          </summary>
          <div className="mt-5">
            <CardLeadForm
              card={card.slug}
              phone={card.phone}
              theme={{
                field: "w-full h-11 bg-transparent border-0 border-b border-neutral-300 px-0 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900",
                button: "mt-3 w-full h-12 rounded-full border border-neutral-900 text-neutral-900 text-[14px] font-medium disabled:opacity-60",
                sent: "py-4 text-neutral-900",
              }}
            />
          </div>
        </details>
      </div>
    </main>
  );
}

/* 4 · Bento (2026 trend): dark, full-bleed photo hero, rounded tiles, glass. */
export function Bento({ card, sans }: P) {
  const tile = "rounded-3xl bg-white/[0.06] ring-1 ring-white/10 backdrop-blur";
  return (
    <main className={`${sans} min-h-screen max-md:-mb-[68px] bg-[#0A0F16] text-white`}>
      <div className="mx-auto max-w-[440px] p-3 pb-28">
        <div className="relative overflow-hidden rounded-[28px]">
          <Image src={card.photo} alt={card.name} width={440} height={440} className="h-[380px] w-full object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/30 to-transparent" />
          <Image src="/images/logo-white.png" alt={COMPANY.name} width={110} height={33} className="absolute left-5 top-5 h-6 w-auto" priority />
          <div className="absolute bottom-5 left-5 right-5">
            <h1 className="text-[36px] font-bold leading-tight" style={{ fontFamily: "inherit", color: "#fff" }}>{card.name}</h1>
            <p className="text-[14px] text-white/70">{card.title} · {COMPANY.name}</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <p className={`${tile} col-span-2 p-5 text-[15px] leading-relaxed text-white/80`}>{card.pitch}</p>
          {cardActions(card).map(({ key, href, label, aria, Icon }) => (
            <a key={key} href={href} aria-label={aria} className={`${tile} flex h-24 flex-col justify-between p-4 text-[14px] font-semibold`}>
              <Icon className="w-6 h-6 text-[#7FB2FF]" />
              {label}
            </a>
          ))}
          <div className={`${tile} p-4`}>
            <p className="text-[32px] font-bold leading-none">5.0</p>
            <p className="mt-2 flex text-[#FFC94D]" aria-hidden="true">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}</p>
            <p className="mt-1 text-[12px] text-white/60">on Google</p>
          </div>
          <div className={`${tile} p-4`}>
            <p className="text-[13px] font-semibold leading-snug">Licensed Builder</p>
            <p className="mt-1 text-[12px] leading-snug text-white/60">BC Housing · 2-5-10 warranty (Travelers)</p>
          </div>
          <div className={`${tile} col-span-2 p-5`}>
            <h2 className="text-[20px] font-bold" style={{ fontFamily: "inherit", color: "#fff" }}>Let&apos;s connect</h2>
            <p className="mt-1 mb-4 text-[13px] text-white/60">Leave your details and I&apos;ll be in touch.</p>
            <CardLeadForm
              card={card.slug}
              phone={card.phone}
              theme={{
                field: "w-full h-12 rounded-2xl bg-white/[0.08] px-4 text-[15px] text-white placeholder:text-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-[#7FB2FF]",
                button: "w-full h-12 rounded-2xl bg-white text-[#0A0F16] text-[15px] font-semibold disabled:opacity-60",
                sent: "rounded-2xl bg-white/[0.08] p-5 text-center text-white",
                error: "text-[13px] text-[#FF9C9C]",
              }}
            />
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 p-3">
        <a href={`/card/${card.slug}/contact`} className="mx-auto flex h-14 max-w-[416px] items-center justify-center gap-2 rounded-2xl bg-[#3B82F6] text-[15px] font-semibold text-white shadow-[0_8px_30px_rgba(59,130,246,0.45)]">
          <Download className="w-5 h-5" aria-hidden="true" /> Save contact
        </a>
      </div>
    </main>
  );
}
