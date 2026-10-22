import type { Metadata } from "next";
import SiteVisitForm from "./SiteVisitForm";

export const metadata: Metadata = {
  title: "Site Visit Record, 815 West Hastings",
  // A working document for one walkthrough, not a landing page.
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SiteVisitForm />;
}
