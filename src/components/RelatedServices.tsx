import Link from "next/link";

const ALL_SERVICES = [
  {
    tag: "01",
    title: "Luxury Chauffeur Service",
    sub: "Premium chauffeur driven cars",
    href: "/services/luxury-chauffeur-service-in-dubai",
  },
  {
    tag: "02",
    title: "Airport Transfer",
    sub: "Meet & greet, all UAE airports",
    href: "/services/airport-transfer",
  },
  {
    tag: "03",
    title: "Corporate Chauffeur",
    sub: "Executive travel for business",
    href: "/services/corporate-chauffeur-services",
  },
  {
    tag: "04",
    title: "VIP Chauffeur Service",
    sub: "Ultra-premium VIP transport",
    href: "/services/vip-chauffeur-service",
  },
  {
    tag: "05",
    title: "Wedding Limo Services",
    sub: "Luxury wedding transportation",
    href: "/services/wedding-limo-services",
  },
  {
    tag: "06",
    title: "Event Transportation",
    sub: "Group & event fleet management",
    href: "/services/event-transportation",
  },
  {
    tag: "07",
    title: "Full Day & Hourly Chauffeur",
    sub: "Flexible disposal hire",
    href: "/services/full-day-and-hourly-chauffeur-services",
  },
  {
    tag: "08",
    title: "Sightseeing with Driver",
    sub: "Dubai & UAE tours with driver",
    href: "/services/private-driver-for-sightseeing-services",
  },
  {
    tag: "09",
    title: "Monthly Car Rental",
    sub: "Long-term chauffeur packages",
    href: "/services/monthly-car-rental-with-driver",
  },
  {
    tag: "10",
    title: "Mercedes Van Rental",
    sub: "V-Class, Vito & premium vans",
    href: "/services/mercedes-van-rental-dubai",
  },
  {
    tag: "11",
    title: "Mercedes Sprinter Rental",
    sub: "Hourly & full-day hire",
    href: "/services/mercedes-sprinter-van-rental",
  },
  {
    tag: "12",
    title: "Luxury Van Rental",
    sub: "Premium vans across the UAE",
    href: "/services/luxury-van-rental-in-dubai",
  },
  {
    tag: "13",
    title: "Bus & Van Rental",
    sub: "Dubai, Sharjah & Abu Dhabi",
    href: "/services/bus-and-van-rental-in-dubai",
  },
];

export default function RelatedServices({
  currentHref,
}: {
  currentHref: string;
}) {
  const related = ALL_SERVICES.filter((s) => s.href !== currentHref).slice(
    0,
    4
  );

  return (
    <section className="py-24 border-t border-[#efefef] bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-4 block">
              Explore More
            </span>
            <h2 className="text-3xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Other services
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                you might need
              </span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#AB5461] transition-colors whitespace-nowrap"
          >
            View All Services
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {related.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group p-7 rounded-3xl border border-[#efefef] bg-white hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-500 flex flex-col gap-3"
            >
              <span className="text-[#AB5461] text-[10px] tracking-[0.4em] font-light">
                {s.tag}
              </span>
              <h3 className="text-sm font-semibold text-[#0a0a0a] tracking-tight group-hover:text-[#AB5461] transition-colors duration-300 leading-snug">
                {s.title}
              </h3>
              <p className="text-[10px] tracking-[0.15em] uppercase text-[#b0b0b0] font-light">
                {s.sub}
              </p>
              <span className="mt-auto pt-4 text-[9px] tracking-[0.25em] uppercase text-[#9a9a9a] group-hover:text-[#AB5461] transition-colors flex items-center gap-1.5">
                Learn more
                <svg
                  className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}