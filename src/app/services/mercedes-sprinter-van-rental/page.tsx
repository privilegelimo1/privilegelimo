// src/app/mercedes-sprinter-van-rental/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mercedes Sprinter Van Rental Dubai | Luxury Sprinter Hire UAE - Privilege Limo",
  description:
    "Book a Mercedes Sprinter van rental in Dubai & UAE. Choose from Avant Garde VIP, Ultra Luxury, Business Class & standard Sprinter. Up to 19 seats. Professional chauffeurs. Fixed rates.",
  keywords: [
    "mercedes sprinter rental dubai",
    "mercedes sprinter rent in dubai",
    "sprinter van rental dubai",
    "mercedes sprinter hire dubai",
    "luxury van rental dubai",
    "mercedes sprinter van rental UAE",
    "mercedes sprinter chauffeur service",
    "sprinter van hire dubai",
    "group transfer dubai",
    "mercedes benz van rent",
  ],
  alternates: { canonical: "https://privilegelimo.com/mercedes-sprinter-van-rental" },
};

// ─── FLEET DATA ───────────────────────────────────────────────────────────────

const fleet = [
  {
    name: "Mercedes Sprinter Avant Garde VIP",
    price: "AED. 1100",
    tag: "VIP Sprinter",
    seats: 11,
    baggage: 6,
    transfer: "Transfer within Dubai",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20Sprinter%20Avant%20Gard,%20Can%20you%20share%20details?",
    image: "/images/fleet/sprinter-avant-garde.jpg",
  },
  {
    name: "Mercedes Sprinter Ultra Luxury Van",
    price: "AED. 1000",
    tag: "Ultra Luxury",
    seats: 16,
    baggage: 9,
    transfer: "Transfer within Dubai",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20Sprinter%20Ultra%20Van,%20Can%20you%20share%20details?",
    image: "/images/fleet/sprinter-ultra.jpg",
  },
  {
    name: "Mercedes-Benz Sprinter",
    price: "AED. 1000",
    tag: "Group Sprinter",
    seats: 19,
    baggage: 9,
    transfer: "Transfer within Dubai",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes-Benz%20Sprinter,%20Can%20you%20share%20details?",
    image: "/images/fleet/sprinter-standard.jpg",
  },
  {
    name: "Mercedes Sprinter Business Class",
    price: "AED. 1000",
    tag: "Business Class",
    seats: 16,
    baggage: 9,
    transfer: "Transfer within Dubai",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20Sprinter%20Business%20Class,%20Can%20you%20share%20details?",
    image: "/images/fleet/sprinter-business.jpg",
  },
];

const stats = [
  { value: "19", label: "Max Passengers" },
  { value: "4", label: "Sprinter Models" },
  { value: "24/7", label: "Available" },
  { value: "5★", label: "Service Standard" },
];

const whyCards = [
  {
    tag: "Professional",
    title: "Licensed & Experienced Drivers",
    desc: "Our drivers are experienced and licensed, ensuring that you reach your destination safely and on time. We prioritize the safety and comfort of our customers above all else.",
  },
  {
    tag: "Maintained",
    title: "Regular Safety Checks",
    desc: "All our vehicles undergo regular maintenance and safety checks. You can rest assured knowing that you are traveling in a well-maintained and reliable van.",
  },
  {
    tag: "Pricing",
    title: "Transparent & Affordable Rates",
    desc: "Our Mercedes Sprinter van rental offers competitive rates with no hidden fees. We believe everyone deserves to experience the comfort of traveling in a Mercedes Sprinter.",
  },
  {
    tag: "Comfort",
    title: "Premium Interiors & Amenities",
    desc: "From plush leather seats to air conditioning, our Sprinters are equipped with the latest amenities to ensure a smooth and enjoyable ride for every passenger.",
  },
  {
    tag: "Capacity",
    title: "Up to 19 Passengers",
    desc: "Our spacious Sprinters accommodate up to 19 passengers, making them perfect for group travel, corporate events, family trips, and airport transfers.",
  },
  {
    tag: "Explore UAE",
    title: "Dubai, Abu Dhabi & Beyond",
    desc: "Our drivers are knowledgeable about local attractions across the UAE. From Burj Khalifa to Palm Jumeirah, we'll make your trip memorable.",
  },
];

const relatedLinks = [
  {
    title: "Rent a Car with Driver in Dubai",
    desc: "The Allure of Luxury Travel in Dubai - Rent a Car with Driver in Dubai. Dubai stands as a testament to...",
    href: "https://privilegelimo.com/rent-a-car-with-driver-in-dubai/",
  },
  {
    title: "Mercedes Sprinter Chauffeur Service",
    desc: "Luxury Sprinter Van in Dubai - Mercedes-Benz Sprinter Van Rent. Experience the Height of Comfort and Style...",
    href: "https://privilegelimo.com/mercedes-sprinter-chauffeur-service/",
  },
];

// ─── MINI CARD ────────────────────────────────────────────────────────────────

function MiniCard({ tag, title, children }: { tag: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[1.75rem] border border-[#efefef] bg-white p-7 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[#e8d9a0] transition-all duration-300 hover:-translate-y-0.5">
      <span className="text-[9px] tracking-[0.45em] uppercase text-[#c9a84c] mb-3 block font-light">{tag}</span>
      <h3 className="text-base md:text-lg font-light text-[#0a0a0a] mb-4 tracking-tight leading-snug">{title}</h3>
      <div className="text-[#7a7a7a] text-sm font-light leading-relaxed">{children}</div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function MercedesSprinterRentalPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-40 pb-28 border-b border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors">Home</Link>
            <span className="text-[#d5d5d5]">/</span>
            <Link href="/luxury-chauffeur-service-in-dubai" className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors">Our Fleet</Link>
            <span className="text-[#d5d5d5]">/</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]">Mercedes Sprinter Van Rental</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">
                  Mercedes Sprinter Rent in UAE
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-6">
                Mercedes
                <br />
                <span className="text-[#c9a84c] italic font-extralight">Sprinter Van</span>
                <br />
                Rental Dubai
              </h1>
              <p className="text-[#7a7a7a] text-base font-light leading-relaxed max-w-lg mb-4">
                Looking for a reliable and stylish van rental in UAE? Our Mercedes Sprinter rental service offers unmatched luxury and comfort. Choose from our Sprinter Avant Garde VIP and Mercedes Sprinter Ultra Luxury vans for your transportation needs in Dubai.
              </p>
              <p className="text-[#9a9a9a] text-sm font-light leading-relaxed max-w-lg mb-10">
                Book now and experience the luxury of a Mercedes Sprinter Van rental in UAE - Premium Luxury Sprinter in Dubai.
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
                  Book on WhatsApp
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

      {/* ── FLEET CARDS ───────────────────────────────────────────── */}
<div className="max-w-7xl mx-auto px-6 pt-20 pb-6">
  <div className="inline-flex items-center gap-3">
    <div className="h-px w-8 bg-[#c9a84c]" />
    <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">Our Fleet</span>
  </div>
  <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
    Premium Luxury
    <br />
    <span className="text-[#c9a84c] italic font-extralight">Sprinter in Dubai</span>
  </h2>
</div>

<section className="pb-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {fleet.map((car) => (
        <div
          key={car.name}
          className="group rounded-[2rem] border border-[#efefef] bg-white overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] hover:border-[#e8d9a0] transition-all duration-500"
        >
          {/* Image */}
          <div className="relative h-60 bg-[#f5f5f5] overflow-hidden">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Tag - top left */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] font-medium">
                {car.tag}
              </span>
            </div>

            {/* Price - bottom left over gradient */}
            <div className="absolute bottom-4 left-5">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-light mb-0.5">
                Starting from
              </div>
              <div className="text-2xl font-extralight text-white tracking-tight">
                {car.price}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-7">
            <h3 className="text-lg font-light text-[#0a0a0a] mb-6 tracking-tight">{car.name}</h3>

            {/* Specs - clean divider style */}
            <div className="flex items-center divide-x divide-[#efefef] mb-7">
              <div className="flex-1 pr-4">
                <div className="text-[9px] tracking-[0.35em] uppercase text-[#b0b0b0] font-light mb-1">
                  Transfer
                </div>
                <div className="text-sm font-light text-[#0a0a0a]">Within Dubai</div>
              </div>
              <div className="flex-1 px-4">
                <div className="text-[9px] tracking-[0.35em] uppercase text-[#b0b0b0] font-light mb-1">
                  Seats
                </div>
                <div className="text-sm font-light text-[#0a0a0a]">{car.seats} Passengers</div>
              </div>
              <div className="flex-1 pl-4">
                <div className="text-[9px] tracking-[0.35em] uppercase text-[#b0b0b0] font-light mb-1">
                  Baggage
                </div>
                <div className="text-sm font-light text-[#0a0a0a]">{car.baggage} Pieces</div>
              </div>
            </div>

            {/* Book button */}
            <a
              href={`https://wa.me/971509200818?text=${car.waText}`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white group-hover:bg-[#0a0a0a] group-hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book Now via WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── EXPERIENCE SECTION ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">About Our Service</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Experience Our
          <br />
          <span className="text-[#c9a84c] italic font-extralight">Mercedes Sprinter Van Rental</span>
        </h2>
      </div>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Welcome" title="Premier Luxury Travel in Dubai">
              <p>Welcome to Privilege Luxury Travel, your premier provider of luxury travel experiences in Dubai. We specialize in providing top-notch transportation services, including luxury Mercedes Sprinter rentals, to ensure that your travel experience is nothing short of extraordinary.</p>
              <p className="mt-2">Whether you are visiting Dubai for business or pleasure, our fleet of luxury vehicles is designed to meet your every need and exceed your expectations.</p>
            </MiniCard>

            <MiniCard tag="Comfort" title="Travel in Comfort & Style">
              <p>With our Mercedes Sprinter rentals, you can travel in comfort and style while enjoying the breathtaking views of Dubai's skyline. Our spacious Sprinters can accommodate up to 19 passengers, making them perfect for group travel or corporate events.</p>
              <p className="mt-2">Sit back, relax, and let our professional chauffeurs take care of the driving, so you can focus on enjoying your time in Dubai.</p>
            </MiniCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Group Travel" title="The Perfect Vehicle for Your Needs">
              <p>Whether you are traveling with a large group of friends or family, or need extra space for your luggage, our Mercedes Sprinter vans are the perfect choice for your travel needs.</p>
              <p className="mt-2">Our fleet of Mercedes Sprinter vans is well-maintained and equipped with the latest amenities to ensure a smooth and enjoyable ride. From plush leather seats to air conditioning, you can expect nothing but the best.</p>
            </MiniCard>

            <MiniCard tag="Explore UAE" title="Explore the UAE in Style">
              <p>With our Mercedes Sprinter van rental service, you can explore the UAE in style. Whether you are visiting Dubai, Abu Dhabi, or any other city in the country, our experienced drivers will take you to your destination safely and efficiently.</p>
              <p className="mt-2">From iconic landmarks such as the Burj Khalifa and the Palm Jumeirah to the stunning beaches and desert landscapes - our drivers are knowledgeable about local attractions and can provide valuable insights.</p>
            </MiniCard>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">Why Choose Us</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Professional &
          <br />
          <span className="text-[#c9a84c] italic font-extralight">Reliable Service</span>
        </h2>
      </div>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyCards.map((c) => (
              <MiniCard key={c.tag} tag={c.tag} title={c.title}>
                <p>{c.desc}</p>
              </MiniCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ─────────────────────────────────────────── */}
      <section className="py-16 border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">Related Articles</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedLinks.map((r) => (
              <a
                key={r.href}
                href={r.href}
                className="group rounded-[1.75rem] border border-[#efefef] bg-white p-7 hover:border-[#c9a84c] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] font-light mb-2 block">Read More</span>
                <h3 className="text-base font-light text-[#0a0a0a] mb-3 group-hover:text-[#c9a84c] transition-colors tracking-tight">
                  {r.title}
                </h3>
                <p className="text-sm text-[#7a7a7a] font-light leading-relaxed mb-4">{r.desc}</p>
                <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] group-hover:text-[#c9a84c] transition-colors">
                  Read More
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            ))}
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
              Book Now and Travel
              <br />
              <span className="text-[#c9a84c] italic font-extralight">in Comfort</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-8 max-w-sm mx-auto leading-relaxed">
              On Your Next Trip - Do You Want To Talk With Us?
              <br />So Don't Be Late.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971509200818"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300"
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
