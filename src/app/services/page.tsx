import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fleetData from "@/data/fleet.json";

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

const fleet = fleetData as Vehicle[];

// ─── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Our Services | Luxury Chauffeur & Van Rental Dubai - Privilege Limo",
  description:
    "Explore all Privilege Limo services in Dubai & UAE. Luxury chauffeur service, Mercedes Sprinter van rental, Mercedes V-Class, Vito, bus hire and more. Fixed rates, 24/7 availability.",
  keywords: [
    "luxury chauffeur service dubai",
    "mercedes van rental dubai",
    "mercedes sprinter rental dubai",
    "airport transfer dubai",
    "bus rental dubai",
    "car with driver dubai",
    "privilege limo services",
    "luxury transport dubai",
    "corporate chauffeur dubai",
    "vip transfer dubai",
  ],
  alternates: { canonical: "https://privilegelimo.com/services" },
};

// ─── STATIC DATA ──────────────────────────────────────────────────────────────

const services = [
  {
    tag: "01",
    title: "Luxury Chauffeur Service",
    subtitle: "Premium chauffeur driven cars",
    desc: "Experience the pinnacle of luxury travel with our professional chauffeur service. From sleek sedans to spacious SUVs, our uniformed drivers ensure a seamless, stress-free journey across Dubai and the UAE.",
    href: "/services/luxury-chauffeur-service-in-dubai",
    image: "/images/chauffeur/chauffeur-luxury.jpg",
    highlights: ["Airport Transfers", "Corporate Travel", "City Tours", "Full Day Hire"],
  },
  {
    tag: "02",
    title: "Mercedes Van Rental",
    subtitle: "V-Class, Vito & premium vans",
    desc: "Travel in comfort and style with our premium Mercedes van fleet. Ideal for family trips, corporate groups, and VIP airport transfers — with up to 7 passengers in first-class comfort.",
    href: "/services/mercedes-van-rental-dubai",
    image: "/images/mercedes-van/v-class-hero.jpg",
    highlights: ["V-Class & Vito", "Up to 7 Passengers", "Airport Runs", "Corporate Groups"],
  },
  {
    tag: "03",
    title: "Mercedes Sprinter Van Rental",
    subtitle: "Hourly & full-day hire",
    desc: "Our Mercedes Sprinter fleet is perfect for large groups, events, and corporate travel. Choose from Avant Garde VIP, Ultra Luxury, Business Class and standard models — up to 19 passengers.",
    href: "/services/mercedes-sprinter-van-rental",
    image: "/images/mercedes-van/sprinter-group.jpg",
    highlights: ["Up to 19 Passengers", "VIP Configurations", "Events & Transfers", "Chauffeur Driven"],
  },
  {
    tag: "04",
    title: "Bus & Van Rental",
    subtitle: "Dubai, Sharjah & Abu Dhabi",
    desc: "Need to move a large group across the UAE? Our luxury bus and van rental service covers Dubai, Abu Dhabi, Sharjah and beyond — with professional drivers and spacious, well-maintained vehicles.",
    href: "/services/bus-and-van-rental-in-dubai",
    image: "/images/fleet/luxury-bus.jpg",
    highlights: ["50-Seater Coach", "Intercity Routes", "School & Corporate", "Event Transport"],
  },
];

const stats = [
  { value: `${fleet.length}`, label: "Vehicles available" },
  { value: "4", label: "Service categories" },
  { value: "24/7", label: "Always available" },
  { value: "5★", label: "Service standard" },
];

const whyUs = [
  {
    tag: "Safety",
    title: "Licensed & Background-Checked",
    desc: "Every chauffeur is professionally licensed, background-checked, and trained to the highest UAE standards.",
  },
  {
    tag: "Pricing",
    title: "Fixed Transparent Rates",
    desc: "No meters, no surge pricing. Every fare is confirmed before your journey — no surprises, ever.",
  },
  {
    tag: "Fleet",
    title: "Premium Maintained Vehicles",
    desc: "All vehicles undergo regular safety checks and deep cleans. You travel in comfort and confidence.",
  },
  {
    tag: "Coverage",
    title: "All UAE Emirates",
    desc: "We cover Dubai, Abu Dhabi, Sharjah, Ajman and all intercity routes including all major airports.",
  },
  {
    tag: "Availability",
    title: "24 / 7 Dispatch",
    desc: "Our team is available around the clock. Book last-minute or plan in advance — we're always ready.",
  },
  {
    tag: "Experience",
    title: "Trusted by Thousands",
    desc: "Years of luxury transportation experience in the UAE with consistently 5-star customer satisfaction.",
  },
];

const faqs = [
  {
    q: "Which areas do you cover?",
    a: "We cover all of Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, and all major UAE airports including DXB, DWC, AUH, and SHJ.",
  },
  {
    q: "Are your rates fixed or metered?",
    a: "All our rates are fixed and confirmed before the journey. No meters, no surge charges, no hidden fees — ever.",
  },
  {
    q: "Can I book for airport transfers?",
    a: "Absolutely. We offer full airport meet & greet with real-time flight tracking, name board, and luggage assistance.",
  },
  {
    q: "How do I make a booking?",
    a: "The fastest way is via WhatsApp. Share your date, time, vehicle preference and destination and we'll confirm instantly.",
  },
  {
    q: "Can I hire for a full day?",
    a: "Yes. We offer hourly disposal from 2 hours, full-day packages, and multi-day arrangements tailored to your itinerary.",
  },
  {
    q: "Is a chauffeur always included?",
    a: "Yes. All our rentals come with a professional, uniformed, English-speaking chauffeur as standard.",
  },
];

// ─── SEO KEYWORDS (hidden) ────────────────────────────────────────────────────

const seoKeywords = [
  "luxury chauffeur service dubai",
  "mercedes van rental dubai",
  "mercedes sprinter rental dubai",
  "airport transfer dubai",
  "bus rental dubai",
  "car with driver dubai",
  "privilege limo services",
  "luxury transport dubai",
  "corporate chauffeur dubai",
  "vip transfer dubai",
  "rent a car with driver",
  "mercedes v class rental dubai",
  "mercedes vito rental dubai",
  "sprinter van rental dubai",
  "group transport dubai",
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-40 pb-28 border-b border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors">
              Home
            </Link>
            <span className="text-[#d5d5d5]">/</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]">Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">
                  Luxury Transportation UAE
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-6">
                Our
                <br />
                <span className="text-[#c9a84c] italic font-extralight">Services</span>
              </h1>
              <p className="text-[#7a7a7a] text-base font-light leading-relaxed max-w-lg mb-4">
                From executive airport transfers to luxury group travel across the UAE, Privilege Limo offers a full suite of premium transportation services — all with professional chauffeurs, fixed pricing, and 24/7 availability.
              </p>
              <p className="text-[#9a9a9a] text-sm font-light leading-relaxed max-w-lg mb-10">
                Explore our fleet and services below, or reach out on WhatsApp for an instant quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get an Instant Quote
                </a>
                <a
                  href="tel:+971509200818"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                >
                  +971 50 920 0818
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="p-8 rounded-3xl border border-[#efefef] text-center hover:border-[#c9a84c] transition-colors duration-300">
                  <div className="text-4xl font-extralight text-[#0a0a0a] tracking-tight mb-2">{s.value}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Premium services
              <br />
              <span className="text-[#c9a84c] italic font-extralight">across the UAE</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {services.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden border border-[#efefef] hover:border-[#e8d9a0] shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.10)] transition-all duration-500 bg-white"
              >
                {/* Image */}
                <div
                  className={`relative min-h-[300px] lg:min-h-[420px] overflow-hidden ${
                    i % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {/* Number badge */}
                  <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                    <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">{s.tag}</span>
                  </div>
                  {/* Bottom label */}
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                      {s.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center px-10 md:px-14 py-14 ${
                    i % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 mb-5">
                    <div className="h-px w-5 bg-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                      Service {s.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-8">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {s.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] group-hover:text-[#c9a84c] transition-colors duration-300 font-light">
                    Explore Service
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL FLEET GRID ───────────────────────────────────────── */}
      <section className="py-28 bg-[#fafafa] border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              All Vehicles
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Our complete fleet —
              <br />
              <span className="text-[#c9a84c] italic font-extralight">choose your vehicle</span>
            </h2>
            <p className="text-sm text-[#b0b0b0] font-light mt-4">
              All prices are subject to change depending on season
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {fleet.map((car) => (
              <div
                key={car.id}
                className="group bg-white rounded-3xl border border-[#efefef] overflow-hidden hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
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
                  {/* Price overlay */}
                  <div className="absolute bottom-3 left-4">
                    <div className="text-[9px] tracking-[0.25em] uppercase text-white/60 font-light">from</div>
                    <div className="text-lg font-extralight text-white tracking-tight">{car.priceLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-sm font-light text-[#0a0a0a] tracking-tight mb-1 leading-snug">{car.name}</h3>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a] font-light mb-3">{car.priceNote}</p>
                  <p className="text-xs text-[#7a7a7a] font-light leading-relaxed mb-4 line-clamp-2">
                    {car.description}
                  </p>

                  {/* Specs */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <span className="text-[11px] text-[#5a5a5a] font-light">{car.passengers} Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                      <span className="text-[11px] text-[#5a5a5a] font-light">{car.luggage} Bags</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/971509200818?text=${encodeURIComponent(`Hi, I want to book the ${car.name}. Can you share pricing and availability?`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#c9a84c] group-hover:bg-[#c9a84c] transition-all duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="py-28 border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Professional &
              <br />
              <span className="text-[#c9a84c] italic font-extralight">reliable service</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((w) => (
              <div
                key={w.tag}
                className="rounded-[1.75rem] border border-[#efefef] bg-white p-7 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[#e8d9a0] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-[9px] tracking-[0.45em] uppercase text-[#c9a84c] mb-3 block font-light">{w.tag}</span>
                <h3 className="text-base md:text-lg font-light text-[#0a0a0a] mb-4 tracking-tight leading-snug">{w.title}</h3>
                <p className="text-[#7a7a7a] text-sm font-light leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-28 border-t border-[#efefef] bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mb-6">
                Common questions
                <br />
                <span className="text-[#c9a84c] italic font-extralight">answered</span>
              </h2>
              <p className="text-[#7a7a7a] text-sm font-light leading-relaxed mb-10">
                Can't find your answer? Message us on WhatsApp — we respond instantly, 24 hours a day.
              </p>
              <a
                href="https://wa.me/971509200818"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ask on WhatsApp
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-7 rounded-3xl bg-white border border-[#efefef] hover:border-[#e8d9a0] transition-colors duration-300">
                  <h3 className="text-sm font-semibold text-[#0a0a0a] mb-2 tracking-tight">{faq.q}</h3>
                  <p className="text-sm text-[#9a9a9a] font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE STRIP ────────────────────────────────────────── */}
      <section className="py-16 border-t border-[#efefef]">
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
      <section className="py-24 border-t border-[#efefef]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#efefef] text-center">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              CALL US 24/7
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              Ready to book your
              <br />
              <span className="text-[#c9a84c] italic font-extralight">luxury ride?</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-10 max-w-sm mx-auto leading-relaxed">
              Contact us on WhatsApp for the fastest response, or call us directly — available 24 hours a day, 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971509200818?text=Hello%20Privilege%20Limo%0A%0AI%27d%20like%20to%20book%20a%20service."
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
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              >
                +971 50 920 0818
              </a>
            </div>
            <div className="mt-10 pt-8 border-t border-[#f0f0f0] grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  className="group p-5 rounded-2xl border border-[#f0f0f0] hover:border-[#0a0a0a] transition-all duration-300"
                >
                  <span className="text-[9px] tracking-[0.4em] uppercase text-[#b0b0b0] block mb-1.5">{c.label}</span>
                  <span className="text-xs text-[#0a0a0a] font-light group-hover:text-[#c9a84c] transition-colors">{c.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO KEYWORDS — hidden from users, readable by crawlers ── */}
      <div aria-hidden="true" className="sr-only">
        {seoKeywords.map((kw) => (
          <span key={kw}>{kw}</span>
        ))}
      </div>

      <Footer />
    </main>
  );
}
