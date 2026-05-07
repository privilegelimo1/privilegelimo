import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import FleetPreview from "@/components/FleetPreview";

// ─── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Luxury Van Rental Dubai | V-Class, Vito & Sprinter with Driver — Privilege Limo",
  description:
    "Book a luxury van rental in Dubai with a professional chauffeur. Mercedes V-Class, Vito Tourer, V 300 Tiffany, Sprinter Avant Garde VIP, Business Class VIP & more. Groups of 7 to 19. Available 24/7.",
  keywords: [
    "luxury van rental dubai",
    "mercedes v class rental dubai",
    "mercedes vito rental dubai",
    "mercedes sprinter rental dubai",
    "van with driver dubai",
    "luxury van hire dubai",
    "mercedes v class with driver",
    "sprinter van rental dubai",
    "group transfer dubai",
    "vip van dubai",
    "corporate van hire dubai",
    "mercedes sprinter rent dubai",
    "luxury minivan dubai",
    "van chauffeur service dubai",
    "mercedes benz van rent",
    "mercedes sprinter rent in dubai",
    "7 seater van dubai",
    "11 seater van dubai",
    "19 seater van dubai",
    "family van hire dubai",
    "event transport dubai",
    "airport van transfer dubai",
    "mercedes v300 tiffany dubai",
    "sprinter avant garde dubai",
  ],
  alternates: {
    canonical: "https://www.privilegelimo.com/services/luxury-van-rental-in-dubai",
  },
  openGraph: {
    title: "Luxury Van Rental Dubai | V-Class, Vito & Sprinter with Driver — Privilege Limo",
    description:
      "Book a luxury van rental in Dubai with a professional chauffeur. Mercedes V-Class, Vito, Sprinter Avant Garde VIP & more — airport transfers, corporate groups, weddings and events. From AED 350.",
    url: "https://www.privilegelimo.com/services/luxury-van-rental-in-dubai",
    siteName: "Privilege Luxury Travel LLC",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://www.privilegelimo.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Van Rental in Dubai | Privilege Limo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Van Rental Dubai | V-Class, Vito & Sprinter with Driver — Privilege Limo",
    description:
      "Book a luxury van rental in Dubai with a professional chauffeur. Mercedes V-Class, Vito, Sprinter Avant Garde VIP & more. From AED 350. Available 24/7.",
    site: "@privilegeuae",
    images: ["https://www.privilegelimo.com/og-image.jpg"],
  },
  other: {
    "og:logo": "https://www.privilegelimo.com/logo.webp",
  },
};

// ─── TYPES ────────────────────────────────────────────────────────────────────

type VanVehicle = {
  id: string;
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  price: string;
  priceNote: string;
  description: string;
  featureLabel: string;
  image: string;
  slug: string;
  classSlug: string;
  badge: string | null;
};

// ─── STATIC DATA ──────────────────────────────────────────────────────────────

const seoKeywords = [
  "luxury van rental dubai",
  "mercedes v class rental dubai",
  "mercedes vito rental dubai",
  "mercedes sprinter rental dubai",
  "van with driver dubai",
  "luxury van hire dubai",
  "mercedes v class with driver",
  "sprinter van rental dubai",
  "group transfer dubai",
  "vip van dubai",
  "corporate van hire dubai",
  "mercedes sprinter rent dubai",
  "luxury minivan dubai",
  "van chauffeur service dubai",
  "mercedes benz van rent",
  "7 seater van dubai",
  "11 seater van dubai",
  "19 seater van dubai",
  "family van hire dubai",
  "event transport dubai",
  "airport van transfer dubai",
  "mercedes v300 tiffany dubai",
  "sprinter avant garde dubai",
];

const vans: VanVehicle[] = [
  {
    id: "mercedes-v-class",
    name: "Mercedes V-Class",
    category: "Luxury MPV",
    passengers: 7,
    luggage: 6,
    price: "AED 400",
    priceNote: "Starting per transfer",
    description:
      "The benchmark luxury people carrier. MBUX infotainment, panoramic roof, wireless charging and premium leather throughout.",
    featureLabel: "Panoramic Roof · MBUX · Wireless Charging",
    image: "/images/fleet/mercedes-v-class-1.webp",
    classSlug: "business-van",
    slug: "mercedes-v-class",
    badge: "Popular",
  },
  {
    id: "mercedes-vito-tourer",
    name: "Mercedes Vito Tourer",
    category: "Executive MPV",
    passengers: 7,
    luggage: 7,
    price: "AED 350",
    priceNote: "Starting per transfer",
    description:
      "Spacious, comfortable and effortlessly professional. Captain-style seats, dual-zone climate and generous luggage capacity.",
    featureLabel: "Captain Seats · Dual-Zone A/C · USB Charging",
    image: "/images/fleet/mercedes-vito-tourer-1.webp",
    classSlug: "business-van",
    slug: "mercedes-vito-tourer",
    badge: "Best Value",
  },
  {
    id: "mercedes-v300-tiffany",
    name: "Mercedes V 300 Tiffany",
    category: "Bespoke Luxury MPV",
    passengers: 7,
    luggage: 5,
    price: "AED 750",
    priceNote: "Starting per transfer",
    description:
      "Custom Tiffany interior, starlight ceiling and refrigerator. Group travel elevated to an art form.",
    featureLabel: "Starlight Ceiling · Refrigerator · Privacy Blinds",
    image: "/images/fleet/mercedes-v300-tiffany-1.webp",
    classSlug: "business-van",
    slug: "mercedes-v300-tiffany",
    badge: null,
  },
  {
    id: "mercedes-vip-trend-250",
    name: "Mercedes VIP Trend 250",
    category: "Executive VIP MPV",
    passengers: 7,
    luggage: 7,
    price: "AED 750",
    priceNote: "Starting per transfer",
    description:
      "Nappa leather seating, 42-inch rear display and a built-in mini-bar. A boardroom-on-wheels for C-suite executives.",
    featureLabel: '42" Rear Display · Nappa Leather · Mini-Bar',
    image: "/images/fleet/mercedes-vip-trend-1.webp",
    classSlug: "business-van",
    slug: "mercedes-vip-trend-250",
    badge: null,
  },
  {
    id: "toyota-granvia",
    name: "Toyota Granvia 7 Pax",
    category: "Premium MPV",
    passengers: 7,
    luggage: 6,
    price: "AED 400",
    priceNote: "Starting per transfer",
    description:
      "Individual captain chairs and generous legroom. The perfect solution for family airport transfers and corporate group bookings.",
    featureLabel: "Captain Chairs · Power Sliding Doors · Rear Climate",
    image: "/images/fleet/toyota-granvia-1.webp",
    classSlug: "business-class",
    slug: "toyota-granvia",
    badge: null,
  },
  {
    id: "citroen-space-tourer",
    name: "Citroën Space Tourer",
    category: "Executive MPV",
    passengers: 7,
    luggage: 5,
    price: "AED 350",
    priceNote: "Starting per transfer",
    description:
      "Modular cabin and generous luggage space. The go-to choice for family airport transfers and corporate group bookings.",
    featureLabel: "Modular Layout · Panoramic Roof · USB Charging",
    image: "/images/fleet/citroen-space-tourer-1.webp",
    classSlug: "business-class",
    slug: "citroen-space-tourer",
    badge: null,
  },
  {
    id: "mercedes-sprinter-avant-garde",
    name: "Sprinter Avant Garde VIP",
    category: "Executive VIP Van",
    passengers: 11,
    luggage: 6,
    price: "AED 1,100",
    priceNote: "Starting per transfer",
    description:
      "Handcrafted interior, starlight ceiling, electric recline seats and champagne fridge. The gold standard in luxury group transport.",
    featureLabel: "Starlight Ceiling · Champagne Fridge · Wi-Fi",
    image: "/images/fleet/mercedes-sprinter-avant-garde-1.webp",
    classSlug: "mercedes-sprinter-luxury-vip",
    slug: "mercedes-sprinter-avant-garde",
    badge: "Ultra Luxury",
  },
  {
    id: "mercedes-sprinter-business-vip",
    name: "Sprinter Business Class VIP",
    category: "Business Class Van",
    passengers: 13,
    luggage: 7,
    price: "AED 1,200",
    priceNote: "Starting per transfer",
    description:
      "Individual fold-out tables, rear entertainment and Wi-Fi. Turns travel time into productive time for corporate delegations.",
    featureLabel: "Fold-Out Tables · Rear Entertainment · Wi-Fi",
    image: "/images/fleet/mercedes-business-class-sprinter-1.webp",
    classSlug: "mercedes-sprinter-luxury-vip",
    slug: "mercedes-sprinter-business-vip",
    badge: "Business",
  },
  {
    id: "mercedes-sprinter-ultra-luxury",
    name: "Sprinter Ultra Luxury",
    category: "Executive Luxury Van",
    passengers: 16,
    luggage: 9,
    price: "AED 1,000",
    priceNote: "Starting per transfer",
    description:
      "16 captain seats, individual screens and onboard Wi-Fi. The definitive large-group transport solution for Dubai.",
    featureLabel: "16 Captain Seats · Individual Screens · Wi-Fi",
    image: "/images/fleet/mercedes-sprinter-ultra-luxury-1.webp",
    classSlug: "mercedes-sprinter-luxury-van",
    slug: "mercedes-sprinter-ultra-luxury",
    badge: null,
  },
  {
    id: "mercedes-sprinter-19",
    name: "Mercedes Sprinter 19 Seater",
    category: "Luxury Van",
    passengers: 19,
    luggage: 9,
    price: "AED 1,000",
    priceNote: "Starting per transfer",
    description:
      "USB charging at every seat, overhead racks and a PA system. Ideal for large corporate event shuttles and group airport transfers.",
    featureLabel: "19 Seats · USB at Every Seat · PA System",
    image: "/images/fleet/mercedes-sprinter-19-1.webp",
    classSlug: "mercedes-sprinter-luxury-van",
    slug: "mercedes-sprinter-19",
    badge: null,
  },
];

const blogLinks = [
  {
    title: "Luxury Van Rental with Driver in Dubai",
    href: "https://www.privilegelimo.com/services/luxury-chauffeur-service-in-dubai",
  },
  {
    title: "Mercedes Sprinter Hire for Corporate Events",
    href: "https://www.privilegelimo.com/services/mercedes-sprinter-van-rental",
  },
  {
    title: "Group Airport Transfers in Dubai",
    href: "https://www.privilegelimo.com/services/airport-transfer",
  },
];

// ─── REUSABLE COMPONENTS ──────────────────────────────────────────────────────

function MiniCard({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[1.75rem] border border-[#efefef] bg-white p-7 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.07)] hover:border-[#e0e0e0] transition-all duration-400">
      <span className="text-[9px] tracking-[0.45em] uppercase text-[#AB5461] mb-2 block font-light">
        {tag}
      </span>
      <h3 className="text-base md:text-lg font-light text-[#0a0a0a] mb-3 tracking-tight leading-snug">
        {title}
      </h3>
      <div className="text-[#7a7a7a] text-sm font-light leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

function WAIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function VanCard({ van }: { van: VanVehicle }) {
  return (
    <article className="group rounded-[1.75rem] border border-[#efefef] bg-white overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.07)] hover:border-[#e0e0e0] transition-all duration-400 flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[#f9f4f5]">
        <Image
          src={van.image}
          alt={`${van.name} luxury van hire Dubai`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {van.badge && (
          <span className="absolute top-3 left-3 text-[9px] tracking-[0.3em] uppercase font-medium px-3 py-1 rounded-full bg-[#AB5461] text-white">
            {van.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 md:p-7 flex flex-col gap-3 flex-1">
        {/* Category */}
        <span className="text-[9px] tracking-[0.45em] uppercase text-[#AB5461] font-light">
          {van.category}
        </span>

        <h3 className="text-base md:text-lg font-light text-[#0a0a0a] tracking-tight leading-snug">
          {van.name}
        </h3>

        {/* Pax / Luggage */}
        <div className="flex gap-4 flex-wrap">
          <span className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light">
            <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            Up to {van.passengers} pax
          </span>
          <span className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light">
            <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            </svg>
            {van.luggage} bags
          </span>
        </div>

        <p className="text-sm text-[#7a7a7a] font-light leading-relaxed flex-1">
          {van.description}
        </p>

        {/* Feature label */}
        <p className="text-[10px] tracking-[0.15em] text-[#b0b0b0] font-light">
          {van.featureLabel}
        </p>

        {/* Footer */}
        <div className="pt-4 border-t border-[#f0f0f0] flex items-end justify-between gap-3 mt-auto">
          <div className="flex flex-col">
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light mb-0.5">
              {van.priceNote}
            </span>
            <span className="text-xl font-extralight text-[#AB5461] tracking-tight">
              {van.price}
            </span>
          </div>
          <div className="flex gap-2">
            <Link
  href={`/fleet/${van.classSlug}/${van.slug}`}
  className="inline-flex items-center rounded-full border border-[#e5e5e5] px-4 py-2 text-[9px] tracking-[0.25em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
>
  Details
</Link>
            <a
              href={`https://wa.me/971509200818?text=${encodeURIComponent(`Hi, I'd like to book the ${van.name} in Dubai.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-[9px] tracking-[0.25em] uppercase font-medium text-white hover:bg-[#20bd5a] transition-colors"
              aria-label={`Book ${van.name} on WhatsApp`}
            >
              <WAIcon />
              Book
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LuxuryVanRentalPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-32 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 lg:items-end">

            {/* Left — copy */}
            <div className="pb-12 lg:pb-16 pr-0 lg:pr-12">

              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-8">
                <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors">
                  Home
                </Link>
                <span className="text-[#ddd]">/</span>
                <Link href="/services" className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors">
                  Services
                </Link>
                <span className="text-[#ddd]">/</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#AB5461] font-light">
                  Luxury Van Rental Dubai
                </span>
              </div>

              {/* Label */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#AB5461]" />
                <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
                  Premium Group &amp; Family Transport
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extralight text-[#0a0a0a] tracking-tight leading-[1.04]">
                Luxury van rental
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  in Dubai, UAE
                </span>
              </h1>

              <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg">
                Hire a premium Mercedes V-Class, Vito Tourer, V 300 Tiffany,
                Sprinter Avant Garde VIP or Business Class VIP with a professional
                chauffeur in Dubai. Ideal for families, corporate delegations,
                airport group transfers, tours and events — with fixed rates and
                24/7 availability.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white hover:bg-[#20bd5a] transition-colors"
                >
                  <WAIcon />
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+971509200818"
                  className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
                >
                  +971 50 920 0818
                </a>
              </div>

              {/* Trust tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["Fixed rates", "7 to 19 passengers", "Professional chauffeurs", "24/7 available"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f9f4f5] border border-[#f0e8ea] px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-light text-[#AB5461]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — hero image */}
            <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] rounded-t-[32px] overflow-hidden">
              <Image
                src="/images/services/luxury-van-rental.webp"
                alt="Luxury van rental Dubai — Mercedes V-Class with chauffeur"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-5 py-4 min-w-[160px]">
                <p className="text-2xl font-extralight text-[#AB5461] tracking-tight">
                  7–19
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mt-0.5 font-light">
                  Passengers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VAN FLEET GRID ────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#AB5461]/3 to-[#AB5461]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Our Van &amp; Coach Fleet in Dubai
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Choose your luxury van
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                with professional driver
              </span>
            </h2>
            <p className="mt-4 text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg">
              Every booking includes a uniformed professional chauffeur,
              complimentary bottled water and meet &amp; greet service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vans.map((van) => (
              <VanCard key={van.id} van={van} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION LABEL ─────────────────────────────────────────── */}
      <section className="pb-20 bg-gradient-to-b from-[#AB5461]/5 to-[#AB5461]/7">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#AB5461] font-light">
              Premium Van &amp; Coach Hire in Dubai
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
            Everything about our
            <br />
            <span className="text-[#AB5461] italic font-extralight">
              luxury van rental service
            </span>
          </h2>
        </div>

        {/* ── MINI CARDS GRID ─────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Overview" title="Luxury Van Rental with Driver in Dubai">
              <p>
                Whether you are travelling as a family, a corporate delegation or
                a group, renting a luxury van with a professional chauffeur in
                Dubai guarantees comfort, space and style. Privilege Limo provides
                premium group transport with the finest vans in the UAE — from
                7-seater Mercedes V-Class to 19-seater Sprinter.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 01" title="Space and Comfort for Every Group">
              <p>
                Unlike standard taxis or shared transfers, a luxury van provides
                generous cabin space, premium seating and ample luggage storage.
                Passengers travel together without compromise — ideal for families,
                teams and visiting delegations.
              </p>
              <p>
                Sit back, relax and enjoy the journey while your professional
                chauffeur manages everything from route timing to luggage handling.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 02" title="Professional Chauffeur Included">
              <p>
                Every van rental includes a trained, uniformed chauffeur who is
                punctual, well-presented and knowledgeable about Dubai&apos;s routes
                and districts.
              </p>
              <p>
                Your chauffeur manages the schedule so your group arrives on time
                to every destination — airport, hotel, office or event venue.
              </p>
            </MiniCard>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Benefit 03" title="Ideal for Airport Group Transfers">
              <p>
                Travelling with a group to or from Dubai International Airport,
                DWC or Abu Dhabi Airport? A single luxury van booking is far more
                efficient and comfortable than booking multiple separate taxis or
                rideshares.
              </p>
              <p>
                Our drivers monitor flight arrivals and adjust timing automatically
                for a seamless pickup experience.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 04" title="Corporate and Event Ready">
              <p>
                Our Mercedes Sprinter Business Class VIP is purpose-built for
                corporate movement — featuring individual fold-out tables, rear
                entertainment and Wi-Fi for productive travel on the go.
              </p>
              <p>
                For ultra-luxury group occasions, the Sprinter Avant Garde VIP
                offers a handcrafted interior with starlight ceiling and champagne
                fridge.
              </p>
            </MiniCard>

            <MiniCard tag="Book Now" title="Reserve Your Luxury Van Today">
              <p>
                Ready to book a premium van with driver in Dubai? Contact Privilege
                Limo on WhatsApp or by phone to confirm your vehicle, schedule and
                route.
              </p>
              <p>
                We handle airport transfers, corporate bookings, event transport
                and multi-day assignments.
              </p>
              <a
                href="https://wa.me/971509200818"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#AB5461] transition-all duration-300"
              >
                Book on WhatsApp
              </a>
            </MiniCard>
          </div>

          {/* Row 3 — Why Choose */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Why Us - 01" title="Premium Mercedes Fleet">
              <p>
                Our van fleet centres on the Mercedes-Benz V-Class, Vito Tourer,
                V 300 Tiffany, VIP Trend 250 and Sprinter range — among the most
                refined group transport vehicles available. Each is maintained to
                the highest standard with modern interiors, climate control and
                advanced safety features.
              </p>
            </MiniCard>

            <MiniCard tag="Why Us - 02" title="Fixed Transparent Pricing">
              <p>
                All van rental bookings are confirmed with a fixed fare — no meter
                running, no surge charges and no surprises at the end of the
                journey. What you are quoted is what you pay, giving corporate and
                family clients full budget clarity.
              </p>
            </MiniCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Why Us - 03" title="Flexible Booking Options">
              <p>
                Book a single airport transfer, a full-day city itinerary or a
                multi-day corporate schedule. Our van hire service adapts to your
                exact requirements — point-to-point, hourly, or extended
                assignments across Dubai and the wider UAE.
              </p>
            </MiniCard>

            <MiniCard tag="Why Us - 04" title="Available 24/7 Across the UAE">
              <p>
                Our luxury van service operates around the clock, seven days a
                week. Early morning airport runs, late-night event pickups or
                last-minute corporate bookings — we are always available to
                accommodate your schedule.
              </p>
            </MiniCard>
          </div>

          {/* Row 4 — Vehicle deep dives */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Mercedes V-Class" title="The Premium Choice for Families and Small Groups">
              <p>
                The Mercedes V-Class seats up to 7 passengers in exceptional
                comfort. With a panoramic roof, MBUX infotainment, wireless
                charging and generous luggage space, it is the ideal vehicle for
                family airport transfers, hotel pickups and guided city tours.
              </p>
            </MiniCard>

            <MiniCard tag="Mercedes Vito Tourer" title="Best Value Group Van in Dubai">
              <p>
                The Mercedes Vito Tourer offers captain-style seating, dual-zone
                climate control and generous luggage capacity — all at exceptional
                value. The go-to choice for corporate group transfers, airport
                runs and multi-stop itineraries.
              </p>
            </MiniCard>

            <MiniCard tag="V 300 Tiffany &amp; VIP Trend" title="Bespoke Interiors for VIP Clients">
              <p>
                The Mercedes V 300 Tiffany and VIP Trend 250 are in a class of
                their own — starlight ceilings, refrigerators, Nappa leather and
                42-inch rear displays transform every group journey into a first-
                class experience.
              </p>
            </MiniCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Sprinter Avant Garde VIP" title="Gold Standard in Luxury Group Transport">
              <p>
                Handcrafted interior, starlight ceiling, electric recline seats and
                a champagne fridge — the Sprinter Avant Garde VIP is unlike
                anything else on the road. The ultimate statement for VIP events
                and delegations across Dubai and Abu Dhabi.
              </p>
            </MiniCard>

            <MiniCard tag="Sprinter Business Class" title="Office on Wheels for Corporate Teams">
              <p>
                The Sprinter Business Class VIP redefines corporate group
                transport. Individual seats with fold-out tables, on-board Wi-Fi
                and rear entertainment create a mobile office experience ideal for
                roadshows and delegation movement.
              </p>
            </MiniCard>

            <MiniCard tag="Sprinter 19 Seater" title="Large Group Airport Transfers Made Easy">
              <p>
                When you need to move a large group in comfort and on schedule,
                the Mercedes Sprinter 19 Seater delivers. USB charging at every
                seat, overhead racks and a PA system make it the go-to choice for
                corporate shuttles and event transport.
              </p>
            </MiniCard>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Use Cases" title="Who Uses Our Luxury Van Rental?">
              <p>
                Our van rental service is trusted by families travelling between
                Dubai hotels and airports, corporate teams attending multi-site
                meetings, conference organisers moving speakers and VIP guests,
                hotel concierge teams arranging group pickups, and tour operators
                running bespoke city excursions.
              </p>
            </MiniCard>

            <MiniCard tag="Destinations" title="Dubai, Abu Dhabi, Sharjah and Beyond">
              <p>
                While most of our van hire bookings originate in Dubai, we provide
                group transport across the UAE including Abu Dhabi, Sharjah, Al
                Ain, Ras Al Khaimah and Fujairah. Long-distance and inter-emirate
                routes are available on request with fixed pricing.
              </p>
            </MiniCard>
          </div>

        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────────── */}
      <section className="py-10 bg-gradient-to-b from-[#AB5461]/7 to-[#AB5461]/6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[28px] bg-[#AB5461] px-8 py-10 sm:px-14 sm:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-[10px] tracking-[0.45em] uppercase text-white font-light block mb-4">
                  Flexible Chauffeur Hire
                </span>
                <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
                  Need a van for a few hours
                  <br />
                  <span className="text-white italic font-extralight">
                    or the entire day?
                  </span>
                </h2>
                <p className="mt-4 text-sm leading-[1.9] text-white font-light max-w-xl">
                  Tell us your start time, group size and preferred vehicle. We&apos;ll
                  confirm your booking instantly and have the right van ready.
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
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG LINKS ────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#AB5461]/6 to-[#AB5461]/5">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-3 block">
            More About Van Rentals
          </span>
          <h2 className="text-xl md:text-2xl font-light text-[#0a0a0a] tracking-tight mb-8">
            Explore more articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogLinks.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-3xl border border-[#efefef] hover:border-[#0a0a0a] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 bg-white"
              >
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#b0b0b0] block mb-2">
                  Article
                </span>
                <h3 className="text-sm text-[#0a0a0a] font-light group-hover:text-[#AB5461] leading-relaxed">
                  {b.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a]">
                  Read More
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-[#AB5461]/5 to-[#AB5461]/4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#AB5461]/50 text-center">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              CALL US 24/7
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              Book your luxury van
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                and travel together
              </span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-8 max-w-sm mx-auto leading-relaxed">
              Families, corporate teams and delegations — we have the right van
              and the professional chauffeur ready for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/971509200818"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
              >
                <WAIcon />
                Book on WhatsApp
              </a>
              <a
                href="tel:+971509200818"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              >
                +971 50 920 0818
              </a>
            </div>
            <p className="text-[#9a9a9a] text-xs font-light">
              Premium van hire across Dubai, Abu Dhabi, Sharjah and the wider UAE
              — with professional chauffeurs and fixed pricing.
            </p>
          </div>
        </div>
        <RelatedServices currentHref="/services/luxury-van-rental-in-dubai" />
      </section>

      {/* ── SEO KEYWORDS CLOUD ──────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#AB5461]/4 to-[#AB5461]/3">
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