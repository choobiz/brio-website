import type { Metadata } from "next";
import CityPageLayout from "@/components/city/CityPageLayout";

export const metadata: Metadata = {
  title: "Achieve Your Dream Home in West Vancouver",
  description: "BRIO Construction serves West Vancouver with expert home renovations, custom home construction, and commercial renovations. Contact us for a free estimate.",
};

export default function WestVancouverPage() {
  return <CityPageLayout cityName="West Vancouver" />;
}
