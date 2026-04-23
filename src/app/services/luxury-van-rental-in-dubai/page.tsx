import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import FleetPreview from "@/components/FleetPreview";


// ─── METADATA ─────────────────────────────────────────────────────────────────


export const metadata: Metadata = {
  title: "Luxury Van Rental Dubai | Mercedes V-Class & Sprinter with Driver",
  description:
    "Rent a luxury van with driver in Dubai. Premium Mercedes V-Class, Sprinter Business Class VIP and luxury coach hire for groups, families, corporate delegations and events.",
  keywords: [
    "luxury van rental dubai",
    "mercedes v class rental dubai",
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
    "mercedes vito rental dubai",
    "mercedes benz van rent",
    "mercedes sprinter rent in dubai",
    "luxury coach dubai",
    "bus rental dubai",
    "family van hire dubai",
    "event transport dubai",
  ],
  alternates: { canonical: "/services/luxury-van-rental-in-dubai" },
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
  href: string;
  badge: string | null;
};


// ─── STATIC DATA ──────────────────────────────────────────────────────────────


const seoKeywords = [
  "luxury van rental dubai",
  "mercedes v class rental dubai",
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
  "mercedes vito rental dubai",
  "mercedes benz van rent",
  "luxury coach dubai",
  "bus rental dubai",
  "family van hire dubai",
  "event transport dubai",
  "airport van transfer dubai",
];


const stats = [
  { value: "7+", label: "Van & coach options" },
  { value: "50", label: "Max passengers" },
  { value: "24/7", label: "Always available" },
  { value: "Fixed", label: "Transparent pricing" },
];


const vans: VanVehicle[] = [
  {
    id: "mercedes-v-class",
    name: "Mercedes V-Class",
    category: "Luxury MPV",
    passengers: 7,
    luggage: 7,
    price: "AED 400",
    priceNote: "Starting per transfer",
    description:
      "The benchmark luxury people carrier. MBUX infotainment, panoramic roof, wireless charging and premium leather throughout.",
    featureLabel: "Panoramic roof · MBUX · Wireless charging",
    image: "/images/fleet/mercedes-v-class-1.webp",
    href: "/fleet/mercedes-v-class",
    badge: "Popular",
  },
  {
    id: "cadillac-escalade",
    name: "Cadillac Escalade",
    category: "Luxury SUV",
    passengers: 7,
    luggage: 6,
    price: "AED 600",
    priceNote: "Starting per transfer",
    description:
      "38-inch curved OLED display, AKG Studio Reference audio and semi-aniline leather. Commanding presence for group and executive travel.",
    featureLabel: "Curved OLED · AKG audio · Semi-aniline leather",
    image: "/images/fleet/cadillac-escalade-1.webp",
    href: "/fleet/cadillac-escalade",
    badge: null,
  },
  {
    id: "mercedes-sprinter-business-vip",
    name: "Mercedes Sprinter Business Class VIP",
    category: "Business Class Van",
    passengers: 13,
    luggage: 13,
    price: "AED 1,200",
    priceNote: "Starting per transfer",
    description:
      "Individual fold-out tables, rear entertainment screens and Wi-Fi. Built for corporate delegations, roadshows and VIP group movement.",
    featureLabel: "Fold-out tables · Wi-Fi · Rear entertainment",
    image: "/images/fleet/mercedes-business-class-sprinter-1.webp",
    href: "/fleet/mercedes-sprinter-business-vip",
    badge: "Business",
  },
  {
    id: "luxury-bus-50",
    name: "50 Seater Luxury Coach",
    category: "Luxury Coach",
    passengers: 50,
    luggage: 30,
    price: "AED 800",
    priceNote: "Starting per transfer",
    description:
      "Reclining seats, full AC, PA system, entertainment screens and large luggage compartments. Perfect for events, tours and large group movement.",
    featureLabel: "Reclining seats · PA system · Luggage compartments",
    image: "/images/fleet/50-seater-luxury-coach-1.webp",
    href: "/fleet/luxury-bus-50",
    badge: "Large Group",
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
            Luxury Van Rental Dubai
          </span>
        </div>

        {/* Label */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#AB5461]" />
          <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
            Premium Group & Family Transport
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
          Hire a premium Mercedes V-Class, Sprinter Business Class VIP or luxury
          coach with a professional chauffeur in Dubai. Ideal for families,
          corporate delegations, airport group transfers, tours and events —
          with fixed rates and 24/7 availability.
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
          {[
            "Fixed rates",
            "Professional chauffeurs",
            "Group transport",
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

      {/* Right — hero image, flush to bottom */}
      <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] rounded-t-[32px] overflow-hidden">
        <Image
          src="/images/services/luxury-van-rental.webp"
          alt="Luxury van rental Dubai"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        {/* Floating stat — replaces the stats grid */}
        <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-5 py-4 min-w-[160px]">
          <p className="text-2xl font-extralight text-[#AB5461] tracking-tight">
            24/7
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mt-0.5 font-light">
            Available daily
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ── VAN FLEET PRICING ─────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#AB5461]/3 to-[#ab5461]/5">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Luxury Vans & Coaches in UAE
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Hire a van with driver
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                premium group vehicles
              </span>
            </h2>
          </div>
<FleetPreview/>
      </section>


      {/* ── SECTION LABEL ─────────────────────────────────────────── */}
            <section className="pb-20 bg-gradient-to-b from-[#AB5461]/5 to-[#ab5461]/7">
<div className="max-w-7xl mx-auto px-6 pt-20 pb-6">
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-[#AB5461]" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#AB5461] font-light">
            Premium Van & Coach Hire in Dubai
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


      {/* ── MINI CARDS GRID ───────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">


          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Overview" title="Luxury Van Rental with Driver in Dubai">
              <p>
                Whether you are travelling as a family, a corporate delegation or
                a group of friends, renting a luxury van with a professional
                chauffeur in Dubai guarantees comfort, space and style. Privilege
                Limo provides premium group transport with the finest vans and
                coaches in the UAE.
              </p>
            </MiniCard>


            <MiniCard tag="Benefit 01" title="Space and Comfort for Every Group">
              <p>
                Unlike standard taxis or standard transfers, a luxury van provides
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
                Every van rental includes a trained, professional chauffeur
                who is punctual, well-presented and knowledgeable about Dubai's
                routes and districts.
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
                DWC or Abu Dhabi Airport? A single luxury van or coach booking
                is far more efficient and comfortable than booking multiple
                separate taxis or rideshares.
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
                For larger events, our 50-seater luxury coach offers reclining
                seats, full AC, PA system and luggage compartments.
              </p>
            </MiniCard>


            <MiniCard tag="Book Now" title="Reserve Your Luxury Van Today">
              <p>
                Ready to book a premium van or coach with driver in Dubai? Contact
                Privilege Limo on WhatsApp or by phone to confirm your vehicle,
                schedule and route.
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
                Our van fleet centres on the Mercedes-Benz V-Class and Sprinter —
                two of the most refined group transport vehicles available. Each is
                maintained to the highest standard with modern interiors, climate
                control and advanced safety features.
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
                Our luxury van and coach service operates around the clock, seven
                days a week. Early morning airport runs, late-night event pickups
                or last-minute corporate bookings — we are always available to
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


            <MiniCard tag="Mercedes Sprinter VIP" title="Business Class Van for Corporate Delegations">
              <p>
                The Mercedes Sprinter Business Class VIP redefines corporate group
                transport. Individual seats with fold-out tables, on-board Wi-Fi
                and entertainment screens create an office-on-wheels experience
                ideal for roadshows and delegation movement.
              </p>
            </MiniCard>


            <MiniCard tag="Luxury Coach" title="50 Seater Coach for Events and Large Groups">
              <p>
                For conferences, exhibitions, hotel guest movement and large
                corporate events, our 50-seater luxury coach provides reclining
                seats, full air conditioning, PA system and large luggage
                compartments — ensuring every passenger travels in comfort.
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

      {/* ── BLOG LINKS ────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#AB5461]/6 to-[#ab5461]/5">
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
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
              Book Your Luxury Van
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                and Travel Together
              </span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-8 max-w-sm mx-auto leading-relaxed">
              Families, teams and delegations — we have the right vehicle
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
              Premium van and coach hire across Dubai, Abu Dhabi, Sharjah and
              the wider UAE — with professional chauffeurs and fixed pricing.
            </p>
          </div>
        </div>
            <RelatedServices currentHref="/services/luxury-van-rental-in-dubai" />
</section>



      {/* ── SEO KEYWORDS CLOUD ───────────────────────────────────── */}
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
      </section><Footer />
    </main>
  );
}