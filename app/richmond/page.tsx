import type { Metadata } from "next";
import CityPageLayout from "@/components/city/CityPageLayout";

export const metadata: Metadata = {
  title: "Achieve Your Dream Home in Richmond",
  description: "BRIO Construction serves Richmond with expert home renovations, custom home construction, and commercial renovations. Contact us for a free estimate.",
};

export default function RichmondPage() {
  return <CityPageLayout cityName="Richmond" />;
}
