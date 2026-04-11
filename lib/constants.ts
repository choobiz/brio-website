export const COMPANY = {
  name: "BRIO Construction",
  legalName: "BRIO Construction Ltd.",
  phone: "1 (604) 260-6691",
  phoneClean: "+16042606691",
  email: "info@builtbybrio.com",
  website: "https://builtbybrio.com",
  address: "267 Esplanade W, North Vancouver BC V7M 1A5",
  tagline: "Built with Confidence, Built by BRIO.",
  description: "At BRIO Construction, we create inspiring spaces that endure, whether renovating, building custom homes, or developing spec projects.",
  social: {
    facebook: "https://www.facebook.com/people/BRIO-Construction/61574283754676/",
    instagram: "https://www.instagram.com/builtbybrio/",
    houzz: "https://www.houzz.com/pro/builtbybrio",
    google: "https://g.co/kgs/8ZDNkkF",
  },
} as const;

export const TRACKING = {
  ga4Id: "G-NS3VTFRCTZ",
  gadsId: "AW-6531627900",
  clarityId: "s8pf0tyk1g",
} as const;

export const SERVICES = [
  { name: "Kitchen Remodeling", slug: "kitchen-remodeling", icon: "utensils" },
  { name: "Kitchen Refinishing", slug: "kitchen-refinishing", icon: "paintbrush" },
  { name: "Bathroom Remodeling", slug: "bathroom-remodeling", icon: "bath" },
  { name: "Basement Remodeling", slug: "basement-remodeling", icon: "layers" },
  { name: "Home Renovations", slug: "home-renovations", icon: "home" },
  { name: "Custom Home Construction", slug: "custom-home-construction", icon: "building" },
  { name: "Spec Home Construction", slug: "spec-home-construction", icon: "building2" },
  { name: "Laneway Home Construction", slug: "laneway-home-construction", icon: "house" },
  { name: "Home Additions & Extensions", slug: "home-additions-extensions", icon: "plus-square" },
  { name: "Commercial Renovations", slug: "commercial-renovations", icon: "store" },
  { name: "Painting Services", slug: "painting-services", icon: "paintbrush" },
  { name: "High Performance Homes", slug: "high-performance-homes", icon: "zap" },
  { name: "Strata Services", slug: "strata-services", icon: "building" },
  { name: "Land Development & Pre-Construction", slug: "land-development-pre-construction", icon: "map" },
] as const;

export const AREAS = [
  { name: "Vancouver", slug: "vancouver" },
  { name: "North Vancouver", slug: "north-vancouver" },
  { name: "West Vancouver", slug: "west-vancouver" },
  { name: "Burnaby", slug: "burnaby" },
  { name: "Coquitlam", slug: "coquitlam" },
  { name: "Richmond", slug: "richmond" },
  { name: "New Westminster", slug: "new-westminster" },
  { name: "Squamish", slug: "squamish" },
  { name: "Lions Bay", slug: "lions-bay" },
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/about-us#get-in-touch" },
] as const;
