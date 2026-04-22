import { fleet as allFleet } from "@/data/index";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";


// ─── TYPE ─────────────────────────────────────────────────────────────────────

type Vehicle = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  priceLabel: string;
  priceNote: string;
  passengers: number;
  luggage: number;
  description: string;
  features: string[];
  featureLabel: string;
  image: string;
  available: boolean;
  badge: string | null;
};

// Filter all Mercedes van variants (V-Class, Vito, Sprinter)
const mercedesVanFleet = allFleet.filter((v) =>
  [
    "mercedes-vip-trend-250",
    "mercedes-v300-tiffany",
    "mercedes-vito-tourer",
    "mercedes-sprinter-avant-garde",
    "mercedes-sprinter-ultra-luxury",
    "mercedes-sprinter-business",
  ].includes(v.slug)
);

// ─── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Mercedes Van Rental Dubai | Luxury Mercedes Benz Van Hire UAE - Privilege Limo",
  description:
    "Explore our full range of luxury Mercedes van rentals in Dubai, UAE. Mercedes V-Class, Vito, Sprinter - with professional chauffeur service for airport transfers, corporate travel, and city tours.",
  keywords: [
    "mercedes van rental dubai",
    "mercedes viano rental dubai",
    "mercedes sprinter rental dubai",
    "sprinter van rental in dubai",
    "14 seat van rental in dubai",
    "mercedes vito rental dubai",
    "mercedes v class rental dubai",
    "mercedes benz v class rental",
    "mercedes vito van hire",
    "mercedes luxury van rental",
  ],
  alternates: { canonical: "https://www.privilegelimo.com/services/mercedes-van-rental-dubai" },
};

// ─── STATIC DATA ──────────────────────────────────────────────────────────────

const seoKeywords = [
  "mercedes van rental dubai",
  "mercedes viano rental dubai",
  "mercedes sprinter rental dubai",
  "sprinter van rental in dubai",
  "14 seat van rental in dubai",
  "mercedes vito rental dubai",
  "mercedes v class rental dubai",
  "mercedes benz v class rental",
  "mercedes vito van hire",
  "mercedes luxury van rental",
];

const stats = [
  { value: `${mercedesVanFleet.length}`, label: "Van variants" },
  { value: "19", label: "Max passengers" },
  { value: "24/7", label: "Always available" },
  { value: "Fixed", label: "Transparent pricing" },
];

const faqs = [
  {
    q: "What types of Mercedes vans are available for rental in Dubai?",
    a: "Privilege Limo offers a variety of Mercedes vans, including spacious Mercedes Sprinter vans and premium models suited for group travel, corporate events, airport transfers and city tours in Dubai.",
  },
  {
    q: "How many passengers can a Mercedes Sprinter van accommodate?",
    a: "Mercedes Sprinter vans typically seat up to 10–19 passengers, making them ideal for group transportation, family trips, airport pick-ups, and corporate travel across Dubai.",
  },
  {
    q: "Is a chauffeur included with the Mercedes van rental?",
    a: "Yes. Privilege Limo's Mercedes van rentals usually come with a professional chauffeur service so you can relax while traveling. This is perfect for airport transfers, business trips, and special events.",
  },
  {
    q: "Can I use the Mercedes van for airport transfers in Dubai?",
    a: "Absolutely. Our Mercedes vans are frequently booked for airport transfers to and from Dubai International Airport (DXB) and other locations. This ensures you arrive on time and travel comfortably with luggage assistance as needed.",
  },
  {
    q: "Do you offer flexible rental durations for Mercedes vans?",
    a: "Yes. You can rent a Mercedes van by the hour, day, or for longer periods depending on your needs - whether it's a short city tour or extended corporate travel across Dubai and the UAE.",
  },
  {
    q: "How do I book a Mercedes van rental in Dubai?",
    a: "Booking is easy - you can contact Privilege Limo online, via phone, or WhatsApp. Provide your travel details (date, time, destination, passenger count) and our team will arrange the best Mercedes van for your needs.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function MercedesVanRentalPage() {
  return (
    <main className="bg-white">
      <Navbar />
{/* ── HERO ──────────────────────────────────────────────────── */}
<section className="pt-28 sm:pt-32 pb-0 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-0 lg:items-end">

      {/* Left */}
      <div className="pb-12 lg:pb-16 pr-0 lg:pr-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/"
            className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors"
          >
            Home
          </Link>
          <span className="text-[#ddd]">/</span>
          <Link
            href="/services"
            className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors"
          >
            Services
          </Link>
          <span className="text-[#ddd]">/</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#AB5461] font-light">
            Mercedes Van Rental
          </span>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#AB5461]" />
          <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
            Mercedes Benz Van Hire
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-light text-[#0a0a0a] tracking-tight leading-[1.1]">
          Mercedes Van
          <br />
          <span className="text-[#AB5461] italic font-extralight">
            Rental Dubai, UAE
          </span>
        </h1>

        {/* Body copy */}
        <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg">
          Explore our full range of luxury Mercedes van rentals in Dubai for
          premium group travel, corporate transfers and private hire.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://wa.me/971509200818"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white hover:bg-[#20bd5a] transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book on WhatsApp
          </a>
          <a
            href="tel:+971509200818"
            className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
          >
            +971 50 920 0818
          </a>
        </div>

        {/* Tag pills — pulled from your stats labels */}
        <div className="mt-8 flex flex-wrap gap-2">
          {stats.map((s) => (
            <span
              key={s.label}
              className="rounded-full bg-[#f9f4f5] border border-[#f0e8ea] px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-light text-[#AB5461]"
            >
              {s.value} {s.label}
            </span>
          ))}
        </div>
      </div>

      {/* Right — hero image flush to bottom */}
      <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] rounded-t-[32px] overflow-hidden">
        <Image
          src="/images/fleet/mercedes-v-class-1.webp"
          alt="Mercedes van rental Dubai"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        {/* Floating stat card — uses first stat */}
        <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-5 py-4 min-w-[160px]">
          <p className="text-2xl font-light =text-[#AB5461] tracking-tight">
            {stats[0]?.value}
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mt-0.5 font-light">
            {stats[0]?.label}
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ── FLEET PRICING ─────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#AB5461]/3 to-[#ab5461]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Mercedes Luxury Van Rental
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Mercedes Van Rental Dubai —
              <br />
              <span className="text-[#AB5461] italic font-extralight">choose your vehicle</span>
            </h2>
            <p className="text-sm text-[#b0b0b0] font-light mt-4">
              All these prices are subject to change depending on season
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mercedesVanFleet.map((car) => (
              <div
                key={car.name}
                className="group bg-white rounded-3xl border border-[#efefef] overflow-hidden hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={car.images?.[0] ?? ""}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[9px] tracking-[0.25em] uppercase text-[#0a0a0a] font-light shadow-sm">
                      {car.category}
                    </span>
                    {car.badge && (
                      <span className="px-3 py-1.5 rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm text-[9px] tracking-[0.25em] uppercase text-white font-light shadow-sm">
                        {car.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-light text-[#0a0a0a] tracking-tight mb-1 leading-snug">{car.name}</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] font-light mb-3">{car.priceNote}</p>
                  <p className="text-xs text-[#7a7a7a] font-light leading-relaxed mb-4 line-clamp-2">
                    {car.description}
                  </p>

                  {/* Specs */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#AB5461]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <span className="text-[11px] text-[#5a5a5a] font-light">{car.passengers} Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#AB5461]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                      <span className="text-[11px] text-[#5a5a5a] font-light">{car.luggage} Bags</span>
                    </div>
                  </div>

                  {/* Feature label */}
                  <p className="text-[9px] tracking-[0.15em] uppercase text-[#b0b0b0] font-light mb-5 truncate">
                    {car.featureLabel}
                  </p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-light text-[#0a0a0a] tracking-tight">{car.priceLabel}</div>
                      <div className="text-[9px] tracking-[0.2em] uppercase text-[#b0b0b0] font-light mt-0.5">per transfer</div>
                    </div>
                    <a
                      href={`https://wa.me/971509200818?text=${encodeURIComponent(`Hi, I want to book the ${car.name}. Can you share pricing and availability?`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#AB5461] transition-all duration-300"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTERNATING CONTENT ───────────────────────────────────── */}
      <section className="py-10 bg-gradient-to-b from-[#AB5461]/5 to-[#ab5461]/7">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center pt-20 pb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Experience Luxury On Wheels
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Mercedes-Benz Van Rentals —{" "}
              <span className="text-[#AB5461] italic font-extralight">in the UAE</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">

            {/* Row 1 - image left, text right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="relative min-h-[340px] lg:min-h-[520px] overflow-hidden lg:order-1">
                <Image
                  src="/images/fleet/mercedes-v300-tiffany-1.webp"
                  alt="Mercedes-Benz V-Class luxury van rental Dubai UAE"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">01</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Plush Seating · Ample Luggage Space
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-2">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#AB5461]" />
                  <span className="text-[#AB5461] text-[9px] tracking-[0.45em] uppercase font-light">
                    Unparalleled Comfort
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Unparalleled comfort with
                  <br />
                  <span className="text-[#AB5461] italic font-extralight">Mercedes-Benz V-Class</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-8">
                  When it comes to luxury travel in the UAE, nothing beats the elegant and spacious Mercedes-Benz V-Class. This high-end van offers a perfect blend of comfort and style, making it an ideal choice for business travel, family vacations, or special events. The V-Class is designed to provide a smooth ride, with plush seating and ample space for luggage, ensuring you and your companions travel in utmost comfort.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Business Travel", "Family Vacations", "Special Events", "Plush Seating", "Smooth Ride"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-3 self-start text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] hover:text-[#AB5461] transition-colors duration-300"
                >
                  Book Now
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Row 2 - text left, image right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-1">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#AB5461]" />
                  <span className="text-[#AB5461] text-[9px] tracking-[0.45em] uppercase font-light">
                    Comprehensive Solutions
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Comprehensive solutions with
                  <br />
                  <span className="text-[#AB5461] italic font-extralight">Sprinter Van Rentals</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  For larger groups or events, explore the Sprinter van rental in Dubai options available with Privilege Luxury Travel. These versatile Mercedes-Benz Sprinter vans offer flexible passenger capacities and are equipped with modern, high-end amenities to ensure a comfortable and enjoyable ride, no matter the distance. Choosing a Sprinter Van Rental in Dubai with a professional driver allows you to fully relax and experience the breathtaking sights of Dubai without the hassle of navigating busy city streets.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-8">
                  Whether you're planning corporate transportation, family trips, or special events, Sprinter Van Rental In Dubai is the perfect solution for safe, stylish, and stress-free group travel.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Corporate Transport", "Family Trips", "Special Events", "Safe", "Stylish", "Stress-Free"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-3 self-start text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] hover:text-[#AB5461] transition-colors duration-300"
                >
                  Explore Sprinter Options
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="relative min-h-[340px] lg:min-h-[520px] overflow-hidden lg:order-2">
                <Image
                  src="/images/fleet/mercedes-sprinter-avant-garde-1.webp"
                  alt="Mercedes Sprinter van rental Dubai group travel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">02</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Flexible Capacities · High-End Amenities
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3 - image left, text right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="relative min-h-[340px] lg:min-h-[520px] overflow-hidden lg:order-1">
                <Image
                  src="/images/fleet/mercedes-vip-trend-1.webp"
                  alt="Explore Dubai in style Mercedes van rental"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">03</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Elegance · Sophistication · Style
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-2">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#AB5461]" />
                  <span className="text-[#AB5461] text-[9px] tracking-[0.45em] uppercase font-light">
                    Explore Dubai in Style
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Explore Dubai
                  <br />
                  <span className="text-[#AB5461] italic font-extralight">in style</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-8">
                  Renting a luxury Mercedes van in Dubai is more than just transportation; it's a statement of elegance and sophistication. Whether you're heading to a business meeting, a wedding, or exploring the vibrant city, having a professional driver at your service adds a touch of luxury to your trip. With Privilege Luxury Travel, you can expect a seamless rental experience that prioritizes your needs and preferences, allowing you to focus on enjoying your journey.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Business Meetings", "Weddings", "City Tours", "Professional Driver", "Seamless Experience"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-3 self-start text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] hover:text-[#AB5461] transition-colors duration-300"
                >
                  Book Your Mercedes Van
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      

      {/* ── CTA BAND ───────────────────────────────────────── */}
      <section className="py-10 bg-gradient-to-b from-[#AB5461]/7 to-[#ab5461]/6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[28px] bg-[#AB5461] px-8 py-10 sm:px-14 sm:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-[10px] tracking-[0.45em] uppercase text-white font-light block mb-4">
                  Flexible Chauffeur Hire
                </span>
                <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
                  Need a driver for a few hours
                  <br />
                  <span className="text-white italic font-extralight">or the entire day?</span>
                </h2>
                <p className="mt-4 text-sm leading-[1.9] text-white font-light max-w-xl">
                  Tell us your start time, how many hours you need and your
                  preferred vehicle. We'll handle the rest.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[180px]">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium text-[#AB5461]"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:+971509200818"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-white/20 px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium text-[#AB5461]"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#AB5461]/6 to-[#ab5461]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              FAQs - Mercedes Van
              <br />
              <span className="text-[#AB5461] italic font-extralight">Rental Dubai</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-7 rounded-3xl bg-white border border-[#efefef]">
                <h3 className="text-sm font-semibold text-[#0a0a0a] mb-2 tracking-tight">{faq.q}</h3>
                <p className="text-sm text-[#9a9a9a] font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <a
              href="https://wa.me/971509200818"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── COVERAGE STRIP ────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#AB5461]/5 to-[#ab5461]/4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-3 block">Coverage</span>
              <h3 className="text-xl font-light text-[#0a0a0a] tracking-tight">
                Dubai · Abu Dhabi · Sharjah · All UAE Emirates
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["DXB Airport", "DWC Airport", "Abu Dhabi Airport", "Sharjah Airport"].map((a) => (
                <span key={a} className="px-5 py-2.5 rounded-full border border-[#e5e5e5] bg-white text-[10px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-[#AB5461]/4 to-[#ab5461]/3">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#AB5461]/50 text-center">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              CALL US 24/7
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              Book now and travel
              <br />
              <span className="text-[#AB5461] italic font-extralight">in comfort</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-10 max-w-sm mx-auto leading-relaxed">
              On your next trip - do you want to talk with us? So don't be late.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971509200818?text=Hello%20Privilege%20Limo%0A%0AI%27d%20like%20to%20book%20a%20Mercedes%20Van."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
              <a
                href="tel:+971509200818"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#AB5461] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              >
                +971 50 920 0818
              </a>
            </div>
            <div className="mt-10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Call Us", value: "+971 50 920 0818", href: "tel:+971509200818" },
                { label: "WhatsApp", value: "+971 50 920 0818", href: "https://wa.me/971509200818" },
                { label: "Email", value: "booking@privilegelimo.com", href: "mailto:booking@privilegelimo.com" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("https") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group p-5 rounded-2xl border border-[#AB5461]/40 hover:border-[#AB5461]/80 transition-all duration-300"
                >
                  <span className="text-[9px] tracking-[0.4em] uppercase text-[#b0b0b0] block mb-1.5">{c.label}</span>
                  <span className="text-xs text-[#0a0a0a] font-light group-hover:text-[#AB5461] transition-colors">{c.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
            <RelatedServices currentHref="/services/mercedes-van-rental-dubai" />
            
            {/* ── SEO KEYWORDS ──────────────────────────────────────────── */}
</section>

      <section className="py-16 bg-gradient-to-b from-[#AB5461]/4 to-[#ab5461]/3">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-6 block">
            Our Services
          </span>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((kw) => (
              <span
                key={kw}
                className="px-4 py-2 rounded-full border border-[#efefef] bg-white text-[10px] tracking-[0.15em] text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.03)] capitalize"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
