import type { Metadata } from "next";
import CityPageLayout from "@/components/city/CityPageLayout";

export const metadata: Metadata = {
  title: "Achieve Your Dream Home in Lions Bay",
  description: "BRIO Construction serves Lions Bay with expert home renovations, custom home construction, and commercial renovations. Contact us for a free estimate.",
};

export default function LionsBayPage() {
  return <CityPageLayout cityName="Lions Bay" />;
}
