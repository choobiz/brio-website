import type { Metadata } from "next";
import CityPageLayout from "@/components/city/CityPageLayout";

export const metadata: Metadata = {
  title: "Achieve Your Dream Home in New Westminster",
  description: "BRIO Construction serves New Westminster with expert home renovations, custom home construction, and commercial renovations. Contact us for a free estimate.",
};

export default function NewWestminsterPage() {
  return <CityPageLayout cityName="New Westminster" />;
}
