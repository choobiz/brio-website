import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s", default: "BRIO Blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
