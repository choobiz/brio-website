import type { ReactNode } from "react";
import { Lightbulb, AlertTriangle, Info, CheckCircle2 } from "lucide-react";

type Tone = "tip" | "warning" | "info" | "key";

const TONE_STYLES: Record<Tone, { wrap: string; iconColor: string; label: string; Icon: typeof Lightbulb }> = {
  tip: {
    wrap: "bg-brio-light-gray border-l-4 border-brio-navy",
    iconColor: "text-brio-navy",
    label: "BRIO Tip",
    Icon: Lightbulb,
  },
  warning: {
    wrap: "bg-amber-50 border-l-4 border-amber-500",
    iconColor: "text-amber-600",
    label: "Heads up",
    Icon: AlertTriangle,
  },
  info: {
    wrap: "bg-blue-50 border-l-4 border-blue-500",
    iconColor: "text-blue-600",
    label: "Good to know",
    Icon: Info,
  },
  key: {
    wrap: "bg-brio-navy text-white",
    iconColor: "text-white",
    label: "Key takeaway",
    Icon: CheckCircle2,
  },
};

interface CalloutCardProps {
  tone?: Tone;
  title?: string;
  children: ReactNode;
}

export default function CalloutCard({ tone = "tip", title, children }: CalloutCardProps) {
  const style = TONE_STYLES[tone];
  const { Icon } = style;
  const isReverse = tone === "key";
  return (
    <aside className={`${style.wrap} my-8 p-5 md:p-6 not-prose`}>
      <div className="flex items-start gap-3">
        <Icon className={`${style.iconColor} w-5 h-5 mt-0.5 shrink-0`} />
        <div className="flex-1">
          <p className={`${isReverse ? "text-white/90" : "text-brio-navy"} text-[12px] font-semibold uppercase tracking-wider mb-1.5`}>
            {title ?? style.label}
          </p>
          <div className={`${isReverse ? "text-white" : "text-text-body"} text-[16px] leading-[1.65] [&>p]:mb-2 [&>p:last-child]:mb-0`}>
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
