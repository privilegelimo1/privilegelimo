import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Corporate Chauffeur Service Dubai | Executive Business Transport | Privilege Limo",
  description:
    "Premium corporate chauffeur service in Dubai for executives, client meetings, roadshows, airport transfers and business events. Professional drivers and a luxury fleet available 24/7.",
  keywords: [
    "corporate chauffeur service Dubai",
    "executive chauffeur Dubai",
    "business chauffeur Dubai",
    "corporate car service Dubai",
    "executive car hire Dubai",
    "business transport Dubai",
    "hourly chauffeur Dubai",
    "corporate limousine Dubai",
  ],
  alternates: {
    canonical: "https://www.privilegelimo.com/services/corporate-chauffeur-service",
  },
  openGraph: {
    title: "Corporate Chauffeur Service Dubai | Executive Business Transport",
    description:
      "Luxury corporate chauffeur service in Dubai for executive meetings, airport transfers, roadshows and VIP guest movement.",
    url: "https://www.privilegelimo.com/services/corporate-chauffeur-service",
    siteName: "Privilege Limo",
    type: "website",
  },
};

// ─── STATIC DATA ──────────────────────────────────────────────────────────────

const stats = [
  { value: "24/7", label: "Availability" },
  { value: "6+", label: "Vehicle Classes" },
  { value: "UAE", label: "Full Coverage" },
  { value: "VIP", label: "Business Class" },
];

const useCases = [
  {
    code: "MTG",
    name: "Executive Meetings",
    detail: "DIFC, Downtown, Business Bay and all major Dubai business districts.",
  },
  {
    code: "APT",
    name: "Airport Transfers",
    detail: "DXB, DWC, AUH and SHJ — executive pickup and drop-off included.",
  },
  {
    code: "RDS",
    name: "Roadshows",
    detail: "Multi-stop chauffeur service for investor and corporate schedules.",
  },
  {
    code: "EVT",
    name: "Corporate Events",
    detail: "Conference, exhibition and private business function transport.",
  },
];

const benefits = [
  {
    tag: "Reliability",
    title: "Punctual Executive Transport",
    desc: "Corporate travel runs on tight schedules. Your chauffeur arrives ahead of time, monitors your route and ensures every pickup and drop-off is seamless — no delays, no disruption.",
  },
  {
    tag: "Fleet",
    title: "First-Class Vehicle Selection",
    desc: "Choose from executive sedans, luxury SUVs, VIP vans and large coaches. Every vehicle is maintained to the highest standard and matched to your trip requirement.",
  },
  {
    tag: "Flexibility",
    title: "Hourly & Full-Day Bookings",
    desc: "Book by the hour for meetings or allocate a chauffeur for a full business day. Multi-stop itineraries, roadshows and event schedules are all handled with ease.",
  },
  {
    tag: "Image",
    title: "Corporate Presentation",
    desc: "Your transport reflects your brand. A premium vehicle and professional chauffeur sets the right tone for client pickups, board-level travel and investor visits.",
  },
  {
    tag: "Coverage",
    title: "Dubai & Across the UAE",
    desc: "Executive transfers across Dubai, Abu Dhabi, Sharjah and intercity routes — managed through one central booking contact for your business.",
  },
  {
    tag: "Discretion",
    title: "Privacy & Confidentiality",
    desc: "Our chauffeurs are trained to be discreet, professional and respectful of privacy — essential for C-level executives, VIP guests and sensitive business travel.",
  },
];

const steps = [
  {
    n: "01",
    title: "Share Your Schedule",
    desc: "Send pickup locations, meeting timings, passenger count, preferred vehicle class and any special requirements.",
  },
  {
    n: "02",
    title: "Choose Service Type",
    desc: "Select point-to-point transfer, airport service, hourly booking or a full-day corporate chauffeur assignment.",
  },
  {
    n: "03",
    title: "Vehicle Assigned",
    desc: "A premium vehicle and professional chauffeur are allocated to your booking with confirmation sent immediately.",
  },
  {
    n: "04",
    title: "Travel Seamlessly",
    desc: "Your chauffeur manages all timing and routing so your executives, clients and guests travel without distraction.",
  },
];

const fleet = [
  {
    name: "Mercedes S 500",
    type: "First Class",
    passengers: 3,
    desc: "The pinnacle of executive motoring — massage seats, Burmester 4D sound and 64-colour ambient lighting.",
    href: "/fleet/mercedes-s500",
    image: "/images/fleet/mercedes-s500-1.webp",
    price: "AED 900",
  },
  {
    name: "BMW 7 Series",
    type: "First Class",
    passengers: 3,
    desc: "Sky Lounge panoramic roof, Bowers & Wilkins Diamond sound and rear entertainment screens.",
    href: "/fleet/bmw-7-series",
    image: "/images/fleet/bmw-7-series-1.webp",
    price: "AED 750",
  },
  {
    name: "Mercedes V-Class",
    type: "Luxury MPV",
    passengers: 7,
    desc: "Benchmark luxury people carrier for teams and delegations — MBUX, panoramic roof and wireless charging.",
    href: "/fleet/mercedes-v-class",
    image: "/images/fleet/mercedes-v-class-1.webp",
    price: "AED 400",
  },
  {
    name: "Cadillac Escalade",
    type: "Luxury SUV",
    passengers: 7,
    desc: "38-inch curved OLED display, AKG Studio Reference audio and semi-aniline leather throughout.",
    href: "/fleet/cadillac-escalade",
    image: "/images/fleet/cadillac-escalade-1.webp",
    price: "AED 600",
  },
  {
    name: "Mercedes Sprinter Business Class VIP",
    type: "Business Class Van",
    passengers: 13,
    desc: "Individual fold-out tables, rear entertainment and Wi-Fi — built for corporate delegations.",
    href: "/fleet/mercedes-sprinter-business-vip",
    image: "/images/fleet/mercedes-business-class-sprinter-1.webp",
    price: "AED 1,200",
  },
  {
    name: "50 Seater Luxury Bus",
    type: "Luxury Coach",
    passengers: 50,
    desc: "Reclining seats, full AC, entertainment system and luggage compartments for large-scale transfers.",
    href: "/fleet/luxury-bus-50",
    image: "/images/fleet/50-seater-luxury-coach-1.webp",
    price: "AED 800",
  },
];

const faqs = [
  {
    q: "What is a corporate chauffeur service?",
    a: "A corporate chauffeur service provides premium business transport for executives, staff, clients and guests using professional drivers and a luxury vehicle fleet — available for point-to-point trips, hourly bookings or full-day assignments.",
  },
  {
    q: "Can I book a chauffeur by the hour for meetings?",
    a: "Yes. Hourly chauffeur bookings are ideal for executives attending multiple meetings, roadshows and business appointments throughout the day across Dubai.",
  },
  {
    q: "Do you handle airport transfers for corporate clients?",
    a: "Yes. We provide executive airport pickup and drop-off for business travellers, visiting delegations and VIP guests — with flight tracking and meet & greet available.",
  },
  {
    q: "Which vehicles are suitable for corporate travel?",
    a: "For individual executives, the Mercedes S 500 or BMW 7 Series are ideal. For teams and delegations, we recommend the V-Class, Cadillac Escalade or VIP Sprinter van.",
  },
  {
    q: "Can you manage transport for a corporate event?",
    a: "Absolutely. We arrange guest movement for conferences, exhibitions, private business functions and hotel-to-venue transfers with coordinated scheduling.",
  },
  {
    q: "Is this service available across the UAE?",
    a: "Yes. Corporate chauffeur bookings are available in Dubai, Abu Dhabi, Sharjah and on intercity routes between major UAE business centres.",
  },
];

// ─── MINI CARD ─────────────────────────────────────────────────────────────────

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
    <div className="rounded-[1.75rem] border border-[#efefef] bg-white p-7 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[#e8d9a0] transition-all duration-300 hover:-translate-y-0.5">
      <span className="text-[9px] tracking-[0.45em] uppercase text-[#AB5461] mb-3 block font-light">
        {tag}
      </span>
      <h3 className="text-base md:text-lg font-light text-[#0a0a0a] mb-4 tracking-tight leading-snug">
        {title}
      </h3>
      <div className="text-[#7a7a7a] text-sm font-light leading-relaxed">{children}</div>
    </div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function CorporateChauffeurServicePage() {
  return (
    <main className="bg-white">
      <Navbar />
{/* ── HERO ───────────────────────────────────────────────── */}
<section className="pt-28 sm:pt-32 pb-0 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-0 lg:items-end">

      {/* Left */}
      <div className="pb-12 lg:pb-16 pr-0 lg:pr-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/services"
            className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors"
          >
            Services
          </Link>
          <span className="text-[#ddd]">/</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#AB5461] font-light">
            Corporate Chauffeur Service
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-light text-[#0a0a0a] tracking-tight leading-[1.1]">
          Corporate Chauffeur
          <br />
          <span className="text-[#AB5461] italic font-extralight">
            Service Dubai
          </span>
        </h1>

        <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg">
          Premium business transport for executives, client meetings, airport
          transfers, roadshows and corporate events — across Dubai and the UAE.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://wa.me/971509200818"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white hover:bg-[#20bd5a] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Executive travel",
            "Hourly & full-day",
            "Professional chauffeurs",
            "24/7 available",
          ].map((tag) => (
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
          src="/images/services/corporate-chauffeur-service-hero.webp"
          alt="Corporate chauffeur service Dubai"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-5 py-4 min-w-[160px]">
          <p className="text-2xl font-light text-[#AB5461] tracking-tight">24/7</p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mt-0.5 font-light">
            Business support
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ── USE CASES ───────────────────────────────────────────── */}
      <section className="py-20 border-b border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
              Business Use Cases
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mb-12">
            Corporate Transport
            <br />
            <span className="text-[#AB5461] italic font-extralight">For Every Business Need</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((u) => (
              <div
                key={u.code}
                className="rounded-[1.75rem] border border-[#efefef] bg-white p-7 hover:border-[#AB5461] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                <div className="text-4xl font-extralight text-[#AB5461] tracking-tight mb-3">
                  {u.code}
                </div>
                <h3 className="text-sm font-light text-[#0a0a0a] mb-2 tracking-tight">
                  {u.name}
                </h3>
                <p className="text-xs text-[#9a9a9a] font-light leading-relaxed">{u.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-6">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#AB5461]" />
          <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
          Business Travel
          <br />
          <span className="text-[#AB5461] italic font-extralight">Done the Right Way</span>
        </h2>
      </div>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <MiniCard key={b.tag} tag={b.tag} title={b.title}>
                <p>{b.desc}</p>
              </MiniCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section className="py-20 border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mb-12">
            Simple to Book,
            <br />
            <span className="text-[#AB5461] italic font-extralight">Seamless to Experience</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-[1.75rem] border border-[#efefef] bg-white p-7 md:p-8 hover:border-[#e8d9a0] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                <div className="text-4xl font-extralight text-[#AB5461] tracking-tight mb-4">
                  {step.n}
                </div>
                <h3 className="text-base font-light text-[#0a0a0a] mb-3 tracking-tight leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#7a7a7a] font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET ───────────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
              Fleet
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mb-12">
            Choose The Right Vehicle
            <br />
            <span className="text-[#AB5461] italic font-extralight">
              For Your Corporate Journey
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fleet.map((car) => (
              <div
                key={car.name}
                className="group rounded-[2rem] border border-[#efefef] bg-white overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(171,84,97,0.10)] hover:border-[#AB5461]/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[220px] bg-[#f8f4f5] overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[#AB5461]">
                    {car.type}
                  </span>
                </div>

                {/* Body */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-light text-[#0a0a0a] tracking-tight">
                      {car.name}
                    </h3>
                    <span className="shrink-0 text-sm font-semibold text-[#AB5461]">
                      {car.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#b3b3b3] mb-3 font-light">
                    Up to {car.passengers} passenger{car.passengers > 1 ? "s" : ""}
                  </p>

                  <p className="text-[13px] leading-[1.85] text-[#777] font-light mb-6">
                    {car.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={car.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-[#efefef] text-xs font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
                    >
                      View details
                    </Link>

                    <a
                      href={`https://wa.me/971509200818?text=${encodeURIComponent(
                        `Hi, I'd like to book corporate chauffeur service with the ${car.name}. Can you share availability and pricing?`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#AB5461] text-xs font-medium text-white hover:bg-[#964754] transition-colors"
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
      {/* ── CTA BAND ───────────────────────────────────────── */}
            <section className="py-10 bg-white">
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
      

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mb-12">
            Common Questions
            <br />
            <span className="text-[#AB5461] italic font-extralight">
              About Corporate Chauffeur Service
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-[#efefef] rounded-2xl overflow-hidden open:border-[#AB5461]/25 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden">
                  <span className="text-[14px] font-medium text-[#0a0a0a] leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-[#efefef] group-open:border-[#AB5461]/30 flex items-center justify-center text-[#AB5461] transition-colors">
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-45"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="M7 1v12M1 7h12" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 border-t border-[#f5f5f5]">
                  <p className="pt-4 text-[13px] leading-[1.85] text-[#666]">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-[#efefef]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#efefef] text-center">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              AVAILABLE 24/7
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              Book Your Corporate Chauffeur
              <br />
              <span className="text-[#AB5461] italic font-extralight">in Dubai Today</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-8 max-w-sm mx-auto leading-relaxed">
              Executive transport for meetings, airport transfers and business events.
              <br />
              Professional driver · Premium fleet · On time.
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