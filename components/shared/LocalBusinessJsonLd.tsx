import { COMPANY } from "@/lib/constants";

/**
 * GeneralContractor schema (a Schema.org subtype of LocalBusiness) for the
 * BRIO homepage. Drives Google rich-results eligibility for local SEO:
 * the Knowledge Panel, "Service area" callouts, and the "About this business"
 * info card on Maps and Search results.
 *
 * Address is parsed from the constants string. Areas served come from the
 * /areas-we-serve list. Social profiles are listed under `sameAs` so Google
 * can stitch entity identity across platforms.
 */
export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${COMPANY.website}/#business`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    description: COMPANY.description,
    url: COMPANY.website,
    telephone: COMPANY.phoneClean,
    email: COMPANY.email,
    image: `${COMPANY.website}/og-default.jpg`,
    logo: `${COMPANY.website}/favicon.png`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "267 Esplanade W",
      addressLocality: "North Vancouver",
      addressRegion: "BC",
      postalCode: "V7M 1A5",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.3120,
      longitude: -123.0739,
    },
    areaServed: [
      "Vancouver",
      "North Vancouver",
      "West Vancouver",
      "Burnaby",
      "Coquitlam",
      "Richmond",
      "New Westminster",
      "Port Moody",
      "Squamish",
      "Lions Bay",
    ].map((name) => ({ "@type": "City", name, addressRegion: "BC", addressCountry: "CA" })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.houzz,
      COMPANY.social.google,
    ],
    knowsAbout: [
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Basement Remodeling",
      "Home Renovations",
      "Custom Home Construction",
      "Spec Home Construction",
      "Laneway Home Construction",
      "Home Additions",
      "Commercial Renovations",
      "Strata Services",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
