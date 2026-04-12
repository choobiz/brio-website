import type { Metadata } from "next";
import CityPageLayout from "@/components/city/CityPageLayout";

export const metadata: Metadata = {
  title: "Achieve Your Dream Home in North Vancouver",
  description: "BRIO Construction serves North Vancouver with expert home renovations, custom home construction, and commercial renovations. Contact us for a free estimate.",
};

export default function NorthVancouverPage() {
  return <CityPageLayout cityName="North Vancouver" />;
}
