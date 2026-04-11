import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="bg-white py-10 md:py-14 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <div className="shrink-0 hidden md:block">
            <Image
              src="/images/hero-home.jpg"
              alt="BRIO Construction"
              width={200}
              height={200}
              className="object-cover w-[180px] h-[180px] rounded-lg"
            />
          </div>

          {/* Content + form */}
          <div className="flex-1">
            <p className="text-text-muted text-[10px] uppercase tracking-[3px] mb-1">Subscribe</p>
            <h3 className="text-brio-navy text-[22px] md:text-[26px] font-semibold font-heading mb-2">
              The Inside Look
            </h3>
            <p className="text-text-body text-[14px] mb-4">
              Curated home decor picks, expert design advice, and construction tips. Join 4,000+ subscribers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 h-11 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
              />
              <button
                type="submit"
                className="h-11 px-5 bg-brio-navy text-white text-xs font-semibold uppercase tracking-wide hover:bg-brio-navy/90 transition-colors whitespace-nowrap"
              >
                Sign Me Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
