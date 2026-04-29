import Link from "next/link";
import { Home, Building2, Landmark, PlusSquare, Paintbrush, Store, UtensilsCrossed, Bath, Layers, Zap, Settings, Map } from "lucide-react";

const SERVICES = [
  { name: "Custom Home Construction", slug: "custom-home-construction", icon: Home },
  { name: "Spec Home Construction", slug: "spec-home-construction", icon: Building2 },
  { name: "Laneway Home Construction", slug: "laneway-home-construction", icon: Landmark },
  { name: "Home Additions & Extensions", slug: "home-additions-extensions", icon: PlusSquare },
  { name: "Home Renovations", slug: "home-renovations", icon: Paintbrush },
  { name: "Commercial Renovations", slug: "commercial-renovations", icon: Store },
  { name: "Kitchen Remodeling", slug: "kitchen-remodeling", icon: UtensilsCrossed },
  { name: "Bathroom Remodeling", slug: "bathroom-remodeling", icon: Bath },
  { name: "Basement Remodeling", slug: "basement-remodeling", icon: Layers },
  { name: "High Performance Homes", slug: "high-performance-homes", icon: Zap },
  { name: "Strata Services", slug: "strata-services", icon: Settings },
  { name: "Land Development & Pre-Construction", slug: "land-development-pre-construction", icon: Map },
];

export default function ServicesGrid() {
  return (
    <section className="bg-brio-light-gray py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-text-body text-sm uppercase tracking-widest mb-3">our services</p>
          <h2 className="text-[28px] md:text-[42px] font-semibold text-brio-navy font-heading">
            whatever your project, BRIO team will bring your vision to life.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group flex flex-col items-center text-center bg-white p-6 md:p-8 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Icon className="w-12 h-12 sm:w-10 sm:h-10 text-brio-navy group-hover:text-brio-navy/70 transition-colors" strokeWidth={1.2} />
                </div>
                <h5 className="text-brio-navy text-[13px] md:text-[14px] font-semibold uppercase tracking-wide leading-tight">
                  {service.name}
                </h5>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
