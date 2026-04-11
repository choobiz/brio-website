import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";

const SERVICE_IMAGES: Record<string, string> = {
  "custom-home-construction": "/images/projects/trinity-thumb.jpg",
  "spec-home-construction": "/images/projects/lolo-thumb.jpg",
  "laneway-home-construction": "/images/projects/jefferson-thumb.jpg",
  "home-additions-extensions": "/images/projects/east-broadway-thumb.jpg",
  "home-renovations": "/images/projects/brokerage-thumb.jpg",
  "commercial-renovations": "/images/projects/dental-office-thumb.jpg",
  "kitchen-remodeling": "/images/projects/east-broadway-thumb.jpg",
  "bathroom-remodeling": "/images/projects/jefferson-thumb.jpg",
  "basement-remodeling": "/images/projects/lolo-thumb.jpg",
  "high-performance-homes": "/images/projects/trinity-thumb.jpg",
  "strata-services": "/images/projects/brokerage-thumb.jpg",
  "land-development-pre-construction": "/images/projects/coffeeshop-thumb.jpg",
};

export default function ServicesGrid() {
  return (
    <section className="bg-brio-light-gray py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-text-body text-sm uppercase tracking-widest mb-3">our services</p>
          <h2 className="text-[32px] md:text-[42px] font-semibold text-brio-navy font-heading lowercase first-letter:uppercase">
            whatever your project, BRIO team will bring your vision to life.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.filter(s => s.slug !== "kitchen-refinishing" && s.slug !== "painting-services").map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group relative block overflow-hidden aspect-[4/3]"
            >
              <Image
                src={SERVICE_IMAGES[service.slug] || "/images/projects/east-broadway-thumb.jpg"}
                alt={service.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h5 className="text-white text-[13px] md:text-[14px] font-semibold uppercase tracking-wide">
                  {service.name}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
