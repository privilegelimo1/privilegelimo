import { fleet as allFleet } from "@/data/index";
const pageFleet = allFleet;
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "VIP Chauffeur Service Dubai | Luxury Private Chauffeur",
  description:
    "Premium VIP chauffeur service in Dubai for high-profile individuals, private clients, celebrity travel, yacht arrivals and exclusive events. Discreet, professional, world-class.",
  alternates: {
    canonical: "https://www.privilegelimo.com/services/vip-chauffeur-service",
  },
  openGraph: {
    title: "VIP Chauffeur Service Dubai | Luxury Private Chauffeur",
    description:
      "Exclusive VIP chauffeur service in Dubai with discreet professional drivers, luxury vehicles and personalised itinerary management.",
    url: "https://www.privilegelimo.com/services/vip-chauffeur-service",
    siteName: "Privilege Limo",
    type: "website",
  },
};

const pillars = [
  {
    title: "Total Discretion",
    text: "Absolute confidentiality for private clients, executives and high-profile individuals.",
  },
  {
    title: "Route Management",
    text: "Pre-planned, flexible itineraries adjusted in real time to your schedule.",
  },
  {
    title: "24/7 Availability",
    text: "Round-the-clock service for late arrivals, early departures and unplanned movements.",
  },
  {
    title: "Bespoke Experience",
    text: "Vehicle preferences, in-cabin amenities and special requests arranged in advance.",
  },
];

const useCases = [
  { label: "Private Client Travel", sub: "High-profile individuals" },
  { label: "Celebrity Transport", sub: "Discreet & managed" },
  { label: "Yacht Arrivals", sub: "Marina to hotel or venue" },
  { label: "VIP Airport Pickup", sub: "Private terminal service" },
  { label: "Exclusive Events", sub: "ADIPEC, GITEX, Art Dubai" },
  { label: "Hotel Concierge", sub: "Five-star coordination" },
];

const steps = [
  {
    n: "1",
    title: "Share your itinerary",
    desc: "Provide travel dates, locations, vehicle preferences and any special requirements.",
  },
  {
    n: "2",
    title: "We plan the detail",
    desc: "Routes, timing, vehicle selection and in-cabin arrangements are confirmed in advance.",
  },
  {
    n: "3",
    title: "Your chauffeur is assigned",
    desc: "A vetted, experienced chauffeur is dedicated to your schedule for the full duration.",
  },
  {
    n: "4",
    title: "Seamless execution",
    desc: "All movement is handled with precision, privacy and zero compromise on quality.",
  },
];

const fleet = [
  {
    name: "Mercedes S 500",
    type: "First Class",
    passengers: 3,
    desc: "The definitive VIP sedan — massage seats, Burmester 4D audio and 64-colour ambient lighting.",
    href: "/fleet/mercedes-s500",
    image: "/images/fleet/mercedes-s500-1.webp",
    price: "AED 900",
  },
  {
    name: "BMW 7 Series",
    type: "First Class",
    passengers: 3,
    desc: "Sky Lounge panoramic roof and Bowers & Wilkins Diamond audio for the most discerning clients.",
    href: "/fleet/bmw-7-series",
    image: "/images/fleet/bmw-7-series-1.webp",
    price: "AED 750",
  },
  {
    name: "Cadillac Escalade",
    type: "Luxury SUV",
    passengers: 7,
    desc: "Commanding presence, 38-inch curved OLED display and AKG Studio Reference audio.",
    href: "/fleet/cadillac-escalade",
    image: "/images/fleet/cadillac-escalade-1.webp",
    price: "AED 600",
  },
  {
    name: "Mercedes V-Class",
    type: "Luxury MPV",
    passengers: 7,
    desc: "Premium group movement for private parties, entourages and multi-guest VIP arrivals.",
    href: "/fleet/mercedes-v-class",
    image: "/images/fleet/mercedes-v-class-1.webp",
    price: "AED 400",
  },
  {
    name: "Mercedes Sprinter Business Class VIP",
    type: "Business Class Van",
    passengers: 13,
    desc: "Private cabin with fold-out tables, entertainment and Wi-Fi for VIP delegations.",
    href: "/fleet/mercedes-sprinter-business-vip",
    image: "/images/fleet/mercedes-business-class-sprinter-1.webp",
    price: "AED 1,200",
  },
  {
    name: "50 Seater Luxury Bus",
    type: "Luxury Coach",
    passengers: 50,
    desc: "Full-group VIP event transport with reclining seats and luggage compartments.",
    href: "/fleet/luxury-bus-50",
    image: "/images/fleet/50-seater-luxury-coach-1.webp",
    price: "AED 800",
  },
];

const faqs = [
  {
    q: "What makes a VIP chauffeur service different from a standard transfer?",
    a: "VIP chauffeur service includes a dedicated driver for your full itinerary, pre-planned routing, in-cabin personalisation, discretion protocols and 24/7 support — not just a point-to-point ride.",
  },
  {
    q: "Can you arrange VIP service for high-profile or celebrity clients?",
    a: "Yes. We handle celebrity and high-profile individual transport with full confidentiality, dedicated chauffeurs and secure, managed route planning.",
  },
  {
    q: "Do you offer airport VIP transfers from private terminals?",
    a: "Yes. We coordinate pickups from private aviation terminals including Al Maktoum and Dubai International for VIP and private jet arrivals.",
  },
  {
    q: "Can the chauffeur stay on standby throughout the day?",
    a: "Yes. Hourly and full-day VIP chauffeur assignments are available where the driver remains on call for all movements during your schedule.",
  },
  {
    q: "Are special in-cabin requests accommodated?",
    a: "Yes. Requests such as specific refreshments, temperature preferences, music, privacy screens and fragrance can be arranged ahead of time.",
  },
  {
    q: "Is the service available outside Dubai?",
    a: "Yes. VIP chauffeur service can be arranged across the UAE including Abu Dhabi, Sharjah and intercity routes based on your itinerary.",
  },
];

export default function VipChauffeurServicePage() {
  return (
    <main className="bg-white text-[#0a0a0a]">
<Navbar/>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-32 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 lg:items-end">

            {/* Left */}
            <div className="pb-12 lg:pb-16 pr-0 lg:pr-12">
              <div className="flex items-center gap-2 mb-8">
                <Link
                  href="/services"
                  className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] hover:text-[#AB5461] font-light transition-colors"
                >
                  Services
                </Link>
                <span className="text-[#e0e0e0]">/</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#AB5461] font-light">
                  VIP Chauffeur Service
                </span>
              </div>

              <h1 className="text-[2.5rem] leading-[1.1] font-light tracking-tight text-[#0a0a0a] sm:text-5xl lg:text-[3.2rem]">
                VIP Chauffeur
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  Service Dubai
                </span>
              </h1>

              <p className="mt-5 text-sm leading-[1.9] text-[#888] font-light max-w-lg">
                Private, discreet and fully managed chauffeur service for
                high-profile individuals, celebrity travel, yacht arrivals,
                exclusive events and executive VIP movement across Dubai and
                the UAE.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-[#AB5461] px-8 py-3.5 text-[10px] tracking-[0.3em] uppercase font-medium text-white hover:bg-[#964754] transition-colors"
                >
                  Request VIP Service
                </Link>
                <Link
                  href="/fleet"
                  className="inline-flex items-center justify-center rounded-full border border-[#e5e5e5] px-8 py-3.5 text-[10px] tracking-[0.3em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
                >
                  View Fleet
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Fully discreet", "Dedicated chauffeur", "24/7 availability", "Bespoke itinerary"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#fdf6f7] border border-[#f0e8ea] px-4 py-1.5 text-[9px] tracking-[0.2em] uppercase font-light text-[#AB5461]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — hero image */}
            <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] rounded-t-[32px] overflow-hidden">
              <Image
                src="/images/services/vip-chauffeur-service-hero.webp"
                alt="VIP chauffeur service Dubai"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-5 py-4 min-w-[160px]">
                <p className="text-xl font-light text-[#AB5461] tracking-tight">100%</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mt-0.5 font-light">
                  Confidential service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES STRIP ────────────────────────────────── */}
      <section className="bg-[#fafafa] border-t border-[#efefef] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {useCases.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-5 border border-[#efefef]"
              >
                <p className="text-sm font-light text-[#0a0a0a] tracking-tight">{item.label}</p>
                <p className="mt-1.5 text-[10px] tracking-[0.15em] uppercase text-[#b0b0b0] font-light">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#AB5461]" />
                <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
                  Exclusive Transport
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
                A service designed for
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  those who expect more
                </span>
              </h2>
              <p className="mt-6 text-sm leading-[1.9] text-[#888] font-light">
                VIP travel is not simply about the vehicle. It is about how your
                time is managed, how your privacy is protected, and how every
                detail from route selection to in-cabin comfort is handled
                without being asked.
              </p>
              <p className="mt-3 text-sm leading-[1.9] text-[#888] font-light">
                Our VIP chauffeur service operates on a fully managed basis —
                dedicated drivers, pre-planned routes and the discretion demanded
                by high-profile clientele across Dubai and the UAE.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Private Individuals", sub: "UHNW & high-profile clients" },
                { label: "Celebrity Travel", sub: "Managed & confidential" },
                { label: "VIP Airport Pickup", sub: "Private & commercial terminals" },
                { label: "Yacht Arrivals", sub: "Marina coordination" },
                { label: "Exclusive Events", sub: "Entrance & departure planning" },
                { label: "Residence to Venue", sub: "Full-day itinerary service" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[#fafafa] border border-[#efefef] px-5 py-4"
                >
                  <p className="text-sm font-light text-[#0a0a0a]">{item.label}</p>
                  <p className="mt-1 text-[10px] tracking-[0.15em] uppercase text-[#b0b0b0] font-light">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ────────────────────────────────────────── */}
      <section className="py-20 bg-[#fafafa] border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#AB5461]" />
              <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
                Service Standards
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              What sets VIP chauffeur
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                service apart
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-7 border border-[#efefef] hover:border-[#AB5461]/20 hover:shadow-[0_8px_32px_rgba(171,84,97,0.07)] transition-all duration-500"
              >
                <p className="text-[9px] tracking-[0.4em] uppercase text-[#AB5461] font-light mb-4">
                  0{i + 1}
                </p>
                <h3 className="text-base font-light text-[#0a0a0a] tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9a9a9a] font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
              The Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mb-14">
            How your VIP service
            <br />
            <span className="text-[#AB5461] italic font-extralight">
              is arranged
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-[#efefef] z-0" />
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative z-10 flex flex-col items-start px-0 lg:px-5 pb-10 lg:pb-0"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#AB5461] text-[#AB5461] text-lg font-light mb-6 shrink-0 bg-white">
                  {step.n}
                </div>
                <h3 className="text-sm font-light text-[#0a0a0a] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#9a9a9a] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#fafafa] border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#AB5461]" />
                <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
                  The Fleet
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
                Vehicles chosen for
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  VIP expectation
                </span>
              </h2>
            </div>
            <Link
              href="/fleet"
              className="shrink-0 inline-flex items-center gap-3 rounded-full border border-[#0a0a0a] px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-medium text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
            >
              All vehicles
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pageFleet.map((car) => (
              <div
                key={car.name}
                className="group bg-white rounded-3xl border border-[#efefef] overflow-hidden hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="relative h-[200px] bg-[#f5f5f5] overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[9px] tracking-[0.25em] uppercase font-light text-[#0a0a0a]">
                    {car.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-base font-light text-[#0a0a0a] tracking-tight leading-snug">
                      {car.name}
                    </h3>
                    <span className="shrink-0 text-sm font-light text-[#AB5461]">
                      {car.price}
                    </span>
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#c0c0c0] font-light mb-3">
                    Up to {car.passengers} passenger{car.passengers > 1 ? "s" : ""}
                  </p>
                  <p className="text-xs text-[#9a9a9a] font-light leading-relaxed mb-6">
                    {car.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/fleet/${car.slug}`}
                      className="flex-1 inline-flex items-center justify-center rounded-full border border-[#efefef] px-4 py-2.5 text-[9px] tracking-[0.25em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
                    >
                      View details
                    </Link>
                    <a
                      href={`https://wa.me/971509200818?text=${encodeURIComponent(
                        `Hi, I'd like to arrange VIP chauffeur service with the ${car.name}. Can you share availability?`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center rounded-full bg-[#0a0a0a] px-4 py-2.5 text-[9px] tracking-[0.25em] uppercase font-medium text-white hover:bg-[#AB5461] transition-colors duration-300"
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
          <div className="rounded-[28px] bg-[#AB5461] px-8 py-10 sm:px-14 sm:py-14 flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1 min-w-0">
              <span className="text-[10px] tracking-[0.45em] uppercase text-white font-light block mb-4">
                Private & Discreet
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
                Arrange VIP chauffeur service
                <br />
                <span className="italic font-extralight text-[#fffff]">
                  for yourself or your guests
                </span>
              </h2>
              <p className="mt-4 text-sm leading-[1.9] text-white/50 font-light max-w-xl">
                Share your dates, itinerary and vehicle preferences and we will
                arrange a fully managed, discreet VIP chauffeur experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-[200px] shrink-0">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-[#ffffff] px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium text-[#0a0a0a] hover:bg-[#ffffff] transition-colors whitespace-nowrap"
              >
                Request VIP Service
              </Link>
              <a
                href="tel:+971509200818"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
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
              About VIP Chauffeur Service
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
                  <p className="pt-4 text-[13px] leading-[1.85] text-[#666]">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-[#efefef]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#AB5461] font-light block mb-5">
            Book VIP Transport
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
            Private chauffeur service for
            <br />
            <span className="text-[#AB5461] italic font-extralight">
              every exceptional occasion
            </span>
          </h2>
          <p className="mt-5 text-sm leading-[1.9] text-[#888] font-light">
            Arrange exclusive VIP transport, private airport pickups and
            fully managed chauffeur itineraries across Dubai and the UAE.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-[#AB5461] px-8 py-4 text-[10px] tracking-[0.3em] uppercase font-medium text-white hover:bg-[#964754] transition-colors"
            >
              Request VIP Service
            </Link>
            <Link
              href="/fleet"
              className="inline-flex items-center justify-center rounded-full border border-[#e5e5e5] px-8 py-4 text-[10px] tracking-[0.3em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
            >
              Browse Vehicles
            </Link>
          </div>
        </div>
      </section>
<Footer/>
    </main>
  );
}