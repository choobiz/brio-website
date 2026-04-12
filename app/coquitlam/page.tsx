import type { Metadata } from "next";
import CityPageLayout from "@/components/city/CityPageLayout";

export const metadata: Metadata = {
  title: "Achieve Your Dream Home in Coquitlam",
  description: "BRIO Construction serves Coquitlam with expert home renovations, custom home construction, and commercial renovations. Contact us for a free estimate.",
};

export default function CoquitlamPage() {
  return <CityPageLayout cityName="Coquitlam" />;
}
