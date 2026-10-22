"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { COMPANY } from "@/lib/constants";
import { SECTIONS, type Sec } from "./data";

// Answers live on the device that fills the form (localStorage), and leave it
// through "Download record" / "Copy record" at the end of the visit.
const KEY = "brio-site-visit-815wh";

type Mark = "" | "ok" | "issue" | "na";
type ItemState = { s: Mark; note: string };
type State = { items: Record<string, ItemState>; meta: Record<string, string> };

const META_FIELDS: { k: string; label: string; placeholder?: string; initial?: string }[] = [
  { k: "date", label: "Date", initial: "October 22, 2026" },
  { k: "time", label: "Time", initial: "3:30 pm" },
  { k: "client", label: "Client attendees", placeholder: "Name, role" },
  { k: "brio", label: "BRIO attendees", initial: "Amir Omidvar" },
  { k: "bm", label: "Building manager", placeholder: "Name, phone" },
  { k: "access", label: "Access and conditions", placeholder: "Occupied, after-hours access, etc." },
];

const LABELS: Record<Sec["kind"], [Mark, string][]> = {
  check: [["ok", "Confirmed"], ["issue", "Issue"], ["na", "N/A"]],
  ask: [["ok", "Answered"], ["issue", "Follow up"], ["na", "N/A"]],
};

const MARK_STYLE: Record<string, string> = {
  ok: "bg-[#e4f2ea] text-[#1f6b45]",
  issue: "bg-[#fbefd9] text-[#9a5b00]",
  na: "bg-[#eceff2] text-[#5d6a78]",
};

function initialState(): State {
  const meta: Record<string, string> = { summary: "" };
  for (const f of META_FIELDS) meta[f.k] = f.initial ?? "";
  return { items: {}, meta };
}

function toText(st: State): string {
  const out: string[] = ["BRIO Construction · Site Visit Record", "815 West Hastings Street, 4th Floor", ""];
  for (const f of META_FIELDS) out.push(`${f.label}: ${st.meta[f.k] || "-"}`);
  for (const sec of SECTIONS) {
    out.push("", `== ${sec.title} ==`);
    const names = Object.fromEntries(LABELS[sec.kind]);
    for (const g of sec.groups) {
      if (g.g) out.push(`-- ${g.g}`);
      for (const it of g.items) {
        const v = st.items[it.id];
        const mark = v?.s ? names[v.s] : "Not recorded";
        out.push(`[${it.id}] ${it.t}: ${mark}${v?.note ? ` | ${v.note.replace(/\n/g, " ")}` : ""}`);
      }
    }
  }
  out.push("", "== Summary and next steps ==", st.meta.summary || "-");
  return out.join("\n");
}

function Item({ sec, it, v, onChange }: { sec: Sec; it: { id: string; t: string }; v?: ItemState; onChange: (v: ItemState) => void }) {
  const cur: ItemState = v ?? { s: "", note: "" };
  const [open, setOpen] = useState(sec.kind === "ask" || !!cur.note || cur.s === "issue");
  const showNote = open || cur.s === "issue";
  const stripe = cur.s === "issue" ? "shadow-[inset_3px_0_0_#9a5b00]" : cur.s === "ok" ? "shadow-[inset_3px_0_0_#1f6b45]" : "";
  return (
    <div className={`grid gap-2 border-t border-[#dde2e8] px-4 pt-2.5 pb-3 ${stripe}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-[1_1_260px] text-[15px] leading-snug text-[#1b2430]">{it.t}</div>
        <div role="group" aria-label="Status" className="inline-flex w-full overflow-hidden rounded-[5px] border border-[#dde2e8] sm:w-auto">
          {LABELS[sec.kind].map(([val, label], i) => (
            <button
              key={val}
              type="button"
              aria-pressed={cur.s === val}
              onClick={() => onChange({ ...cur, s: cur.s === val ? "" : val })}
              className={`min-w-[64px] flex-1 px-2.5 py-1.5 text-[12.5px] font-semibold focus-visible:outline-2 focus-visible:outline-[#1D3146] sm:flex-none ${i ? "border-l border-[#dde2e8]" : ""} ${cur.s === val ? MARK_STYLE[val] : "bg-white text-[#5d6a78]"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {showNote ? (
        <textarea
          id={`n-${it.id}`}
          rows={2}
          value={cur.note}
          placeholder={sec.kind === "ask" ? "Answer" : "Note, measurement, location, photo number"}
          onChange={(e) => onChange({ ...cur, note: e.target.value })}
          className="w-full resize-y rounded border border-[#dde2e8] bg-[#f7f8fa] px-2.5 py-2 text-[14.5px] text-[#1b2430] focus-visible:outline-2 focus-visible:outline-[#1D3146]"
        />
      ) : (
        <button type="button" onClick={() => setOpen(true)} className="justify-self-start text-[12.5px] font-semibold text-[#1D3146] underline underline-offset-2">
          Add note
        </button>
      )}
    </div>
  );
}

export default function SiteVisitForm() {
  const [st, setSt] = useState<State>(initialState);
  const [loaded, setLoaded] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw) as State;
        // Restoring after mount on purpose: reading storage during render would
        // make the server HTML and the first client render disagree.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSt((s) => ({ items: saved.items ?? {}, meta: { ...s.meta, ...(saved.meta ?? {}) } }));
      }
    } catch {
      /* start fresh */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(st));
    } catch {
      /* storage blocked: the form still works for this session */
    }
  }, [st, loaded]);

  const { done, total, per } = useMemo(() => {
    let done = 0, total = 0;
    const per: Record<string, number> = {};
    for (const sec of SECTIONS) {
      let d = 0, t = 0;
      for (const g of sec.groups) for (const it of g.items) { t++; if (st.items[it.id]?.s) d++; }
      per[sec.id] = t ? (d / t) * 100 : 0;
      done += d; total += t;
    }
    return { done, total, per };
  }, [st]);

  const setItem = (id: string, v: ItemState) => setSt((s) => ({ ...s, items: { ...s.items, [id]: v } }));
  const setMeta = (k: string, v: string) => setSt((s) => ({ ...s, meta: { ...s.meta, [k]: v } }));

  function download() {
    const blob = new Blob([toText(st)], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "815-West-Hastings-site-visit.txt";
    a.click();
    URL.revokeObjectURL(a.href);
    setMsg("Record downloaded.");
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(toText(st));
      setMsg("Record copied. Paste it into an email or message.");
    } catch {
      setMsg("Copy did not work on this device. Use Download record instead.");
    }
  }

  return (
    <main className="min-h-screen bg-[#f3f4f6] max-md:-mb-[68px]">
      <div className="mx-auto max-w-[760px] px-4 pb-12">
        <header className="-mx-4 bg-[#1D3146] px-5 pt-5 pb-5 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Image src="/images/logo-white.png" alt={COMPANY.name} width={160} height={48} className="h-8 w-auto" priority />
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#c9d3de]">Site Visit Record</span>
          </div>
          <h1 className="mt-5 mb-1 text-[22px] leading-tight sm:text-[26px]" style={{ color: "#fff", fontFamily: "var(--font-heading)", textWrap: "balance" }}>
            815 West Hastings Street, 4th Floor
          </h1>
          <p className="text-[14px] text-[#c9d3de]">Suite 425 fit-out and elevator lobby and corridor refresh · West Pender Property Group</p>
          <div className="mt-5 grid grid-cols-1 gap-x-3.5 gap-y-2.5 sm:grid-cols-2">
            {META_FIELDS.map((f) => (
              <label key={f.k} htmlFor={`m-${f.k}`} className="flex min-w-0 flex-col gap-1 text-[11px] uppercase tracking-[0.08em] text-[#c9d3de]">
                {f.label}
                <input
                  id={`m-${f.k}`}
                  value={st.meta[f.k] ?? ""}
                  placeholder={f.placeholder}
                  onChange={(e) => setMeta(f.k, e.target.value)}
                  className="w-full rounded border border-[#3d5a78] bg-[#2a4561] px-2.5 py-2 text-[15px] normal-case tracking-normal text-white placeholder:text-[#9fb0c2] focus-visible:outline-2 focus-visible:outline-white"
                />
              </label>
            ))}
          </div>
        </header>

        <div role="status" className="sticky top-0 z-10 -mx-4 flex justify-between gap-3 border-b border-[#dde2e8] bg-white px-4 py-2 text-[13px] text-[#5d6a78]">
          <span>
            <b className="tabular-nums text-[#1b2430]">{done}</b> of <b className="tabular-nums text-[#1b2430]">{total}</b> items recorded
          </span>
          <span>Saved on this device</span>
        </div>

        {SECTIONS.map((sec) => (
          <section key={sec.id} className="mt-[18px] overflow-hidden rounded-md border border-[#dde2e8] bg-white">
            <div className="border-b border-[#dde2e8] px-4 pt-4 pb-3">
              <h2 className="m-0 text-[20px] leading-tight" style={{ color: "#1b2430", fontFamily: "var(--font-heading)" }}>{sec.title}</h2>
              {sec.intro && <p className="mt-1 text-[13.5px] text-[#5d6a78]">{sec.intro}</p>}
              <div className="mt-2.5 h-1 overflow-hidden rounded bg-[#dde2e8]">
                <i className="block h-full bg-[#1D3146] transition-[width] duration-300" style={{ width: `${per[sec.id]}%` }} />
              </div>
            </div>
            {sec.groups.map((g) => (
              <div key={g.g || sec.id}>
                {g.g && <div className="px-4 pt-2.5 pb-0.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#5d6a78]">{g.g}</div>}
                {g.items.map((it) => (
                  <Item key={it.id} sec={sec} it={it} v={st.items[it.id]} onChange={(v) => setItem(it.id, v)} />
                ))}
              </div>
            ))}
          </section>
        ))}

        <section className="mt-[18px] grid gap-2.5 rounded-md border border-[#dde2e8] bg-white p-4">
          <h2 className="m-0 text-[18px]" style={{ color: "#1b2430", fontFamily: "var(--font-heading)" }}>Summary and next steps</h2>
          <textarea
            id="m-summary"
            rows={4}
            value={st.meta.summary ?? ""}
            placeholder="Agreed next steps, dates, documents promised"
            onChange={(e) => setMeta("summary", e.target.value)}
            className="w-full resize-y rounded border border-[#dde2e8] bg-[#f7f8fa] px-2.5 py-2 text-[14.5px] text-[#1b2430] focus-visible:outline-2 focus-visible:outline-[#1D3146]"
          />
          <div className="flex flex-wrap gap-2.5">
            <button type="button" onClick={download} className="rounded bg-[#1D3146] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-white">
              Download record
            </button>
            <button type="button" onClick={copy} className="rounded border-2 border-[#1D3146] px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#1D3146]">
              Copy record
            </button>
          </div>
          {msg && <p className="text-[13px] text-[#5d6a78]">{msg}</p>}
        </section>

        <footer className="mt-6 text-center text-[12.5px] leading-relaxed text-[#5d6a78]">
          {COMPANY.legalName} · BC Housing Licensed Residential Builder
          <br />
          {COMPANY.address} · {COMPANY.phone} · builtbybrio.com
        </footer>
      </div>
    </main>
  );
}
