import type { Metadata } from "next";
import CityPageLayout from "@/components/city/CityPageLayout";

export const metadata: Metadata = {
  title: "Achieve Your Dream Home in Port Moody",
  description: "BRIO Construction serves Port Moody with expert home renovations, custom home construction, and commercial renovations. Contact us for a free estimate.",
};

export default function PortMoodyPage() {
  return <CityPageLayout cityName="Port Moody" />;
}
