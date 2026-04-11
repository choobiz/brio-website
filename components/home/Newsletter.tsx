import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Form side */}
          <div>
            <p className="text-text-muted text-xs uppercase tracking-widest mb-2">Subscribe</p>
            <h3 className="text-brio-navy text-[28px] md:text-[32px] font-semibold font-heading mb-4">
              The Inside Look
            </h3>
            <p className="text-text-body text-[15px] mb-6">
              The email newsletter that delivers curated home decor and furniture picks, expert design advice, and more. Join 4,000+ subscribers.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 h-12 px-4 border border-border text-sm focus:outline-none focus:border-brio-navy"
              />
              <button
                type="submit"
                className="h-12 px-6 bg-brio-navy text-white text-sm font-semibold uppercase tracking-wide hover:bg-brio-navy/90 transition-colors"
              >
                Sign Me Up
              </button>
            </form>
          </div>

          {/* Image side */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/hero-home.jpg"
              alt="BRIO Construction team member"
              width={500}
              height={500}
              className="rounded-none object-cover w-[400px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
