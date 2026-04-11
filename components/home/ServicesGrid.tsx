import Link from "next/link";
import { Home, Building2, Paintbrush, UtensilsCrossed, Bath, Layers, Zap, Store, Map, PlusSquare, Hammer, Building } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  utensils: UtensilsCrossed,
  paintbrush: Paintbrush,
  bath: Bath,
  layers: Layers,
  home: Home,
  building: Building,
  building2: Building2,
  house: Hammer,
  "plus-square": PlusSquare,
  store: Store,
  zap: Zap,
  map: Map,
};

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brio-blue text-sm font-semibold uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brio-navy font-heading mb-3">
            Whatever Your Project, BRIO Will Bring Your Vision to Life
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] || Home;
            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group flex flex-col items-center text-center p-6 rounded-xl border border-border hover:border-brio-blue/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-xl bg-brio-blue/10 flex items-center justify-center mb-4 group-hover:bg-brio-blue/20 transition-colors">
                  <Icon className="w-7 h-7 text-brio-blue" />
                </div>
                <h3 className="text-brio-navy text-sm font-semibold leading-tight">{service.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
