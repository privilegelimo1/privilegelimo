import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chauffeur Service Dubai | Luxury Car with Driver — Privilege Limo",
  description:
    "Book a professional chauffeur service in Dubai with Privilege Limo. Airport transfers, corporate travel, weddings, and city tours. Fixed pricing, uniformed drivers, available 24/7.",
  keywords: [
    "rent a car with driver",
    "airport transfer dubai",
    "limousine rental dubai",
    "mercedes s class rent",
    "mercedes v class rent with driver",
    "chauffeur hire in dubai",
    "mercedes sprinter rent in dubai",
    "mercedes van chauffeur service",
    "mercedes benz van rent",
    "chauffeur service abu dhabi",
    "luxury bus booking in dubai",
    "mercedes vito rental dubai",
    "mercedes v class rental dubai",
    "mercedes sprinter rental dubai",
    "chauffeur service dubai",
    "car hire in dubai with driver",
    "sprinter van rental dubai",
    "mercedes sprinter rent dubai",
    "mercedes van rental dubai",
    "car hire with driver in dubai",
  ],
  alternates: { canonical: "https://privilegelimo.com/services/luxury-chauffeur-service-in-dubai" },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const fleet = [
  {
    name: "Mercedes – S 500",
    price: "AED. 900",
    seats: 3,
    baggage: 3,
    tag: "Flagship Sedan",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20S%20500%20%20Can%20you%20share%20details?",
    image: "/images/fleet/mercedes-s500.jpg",
  },
  {
    name: "Mercedes – S 450",
    price: "AED. 550",
    seats: 3,
    baggage: 3,
    tag: "Executive Sedan",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20S%20450%20%20Can%20you%20share%20details?",
    image: "/images/fleet/mercedes-s450.jpg",
  },
  {
    name: "BMW 7 Series",
    price: "AED. 500",
    seats: 3,
    baggage: 3,
    tag: "Luxury Sedan",
    waText: "Hi,%20I%20want%20to%20book%20a%20BMW%207%20Series%20%20Can%20you%20share%20details?",
    image: "/images/fleet/bmw-7series.jpg",
  },
  {
    name: "Mercedes VIP Trend 250",
    price: "AED. 750",
    seats: 7,
    baggage: 7,
    tag: "VIP Van",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20VIP%20Trend%20250,%20Can%20you%20share%20details?",
    image: "/images/fleet/mercedes-vip-trend.jpg",
  },
  {
    name: "Mercedes V 300 Tiffany",
    price: "AED. 550",
    seats: 7,
    baggage: 5,
    tag: "Luxury Van",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20V%20300%20Tiffany,%20Can%20you%20share%20details?",
    image: "/images/fleet/mercedes-v300-tiffany.jpg",
  },
  {
    name: "Mercedes Vito Tourer",
    price: "AED. 350",
    seats: 7,
    baggage: 7,
    tag: "Premium Van",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20Vito%20Tourer,%20Can%20you%20share%20details?",
    image: "/images/fleet/mercedes-vito.jpg",
  },
  {
    name: "Mercedes Sprinter Avant Garde VIP",
    price: "AED. 1100",
    seats: 11,
    baggage: 6,
    tag: "VIP Sprinter",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20Sprinter%20Avant%20Gard,%20Can%20you%20share%20details?",
    image: "/images/fleet/sprinter-avant-garde.jpg",
  },
  {
    name: "Mercedes Sprinter Ultra Luxury Van",
    price: "AED. 1000",
    seats: 16,
    baggage: 9,
    tag: "Ultra Luxury",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20Sprinter%20Ultra%20Van,%20Can%20you%20share%20details?",
    image: "/images/fleet/sprinter-ultra.jpg",
  },
  {
    name: "Mercedes Sprinter Business Class",
    price: "AED. 1000",
    seats: 16,
    baggage: 9,
    tag: "Business Class",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes%20Sprinter%20Business%20Class,%20Can%20you%20share%20details?",
    image: "/images/fleet/sprinter-business.jpg",
  },
  {
    name: "Mercedes-Benz Sprinter",
    price: "AED. 1000",
    seats: 19,
    baggage: 9,
    tag: "Group Sprinter",
    waText: "Hi,%20I%20want%20to%20book%20a%20Mercedes-Benz%20Sprinter,%20Can%20you%20share%20details?",
    image: "/images/fleet/sprinter-standard.jpg",
  },
  {
    name: "GMC Yukon Limousine",
    price: "AED. 850",
    seats: 18,
    baggage: 5,
    tag: "SUV Limousine",
    waText: "Hi,%20I%20want%20to%20book%20a%20GMC%20Yukon%20Limousine,%20Can%20you%20share%20details?",
    image: "/images/fleet/gmc-yukon.jpg",
  },
  {
    name: "50 Seater Luxury Bus",
    price: "AED. 800",
    seats: 50,
    baggage: 50,
    tag: "Luxury Coach",
    waText: "Hi,%20I%20want%20to%20book%20a%20Luxury%20Bus,%20Can%20you%20share%20details?",
    image: "/images/fleet/luxury-bus.jpg",
  },
];

const seoKeywords = [
  "rent a car with driver",
  "airport transfer dubai",
  "limousine rental dubai",
  "mercedes s class rent",
  "mercedes v class rent with driver",
  "chauffeur hire in dubai",
  "mercedes sprinter rent in dubai",
  "mercedes van chauffeur service",
  "mercedes benz van rent",
  "chauffeur service abu dhabi",
  "luxury bus booking in dubai",
  "mercedes vito rental dubai",
  "mercedes v class rental dubai",
  "mercedes sprinter rental dubai",
  "chauffeur service dubai",
  "car hire in dubai with driver",
  "sprinter van rental dubai",
  "mercedes sprinter rent dubai",
  "mercedes van rental dubai",
  "car hire with driver in dubai",
];

const stats = [
  { value: "12+", label: "Vehicles in fleet" },
  { value: "24/7", label: "Always available" },
  { value: "Fixed", label: "Transparent pricing" },
  { value: "5★", label: "Service standard" },
];

const faqs = [
  {
    q: "What areas do you cover with your chauffeur service?",
    a: "We cover all of Dubai and the wider UAE — including Abu Dhabi, Sharjah, Ajman, and intercity routes. Airport transfers are available from DXB, DWC, AUH, and SHJ.",
  },
  {
    q: "Are prices fixed or metered?",
    a: "All our prices are fixed and confirmed before your journey. There are no meters, no surge charges, and no surprises — ever.",
  },
  {
    q: "Can I book a chauffeur for a full day?",
    a: "Yes. We offer hourly disposal bookings from 2 hours, as well as full-day and multi-day packages. Just let us know your itinerary and we will tailor accordingly.",
  },
  {
    q: "Do you offer airport meet and greet?",
    a: "Yes. Our airport transfer service includes real-time flight tracking, a professional meet & greet with a name board, and full luggage assistance.",
  },
  {
    q: "Can I request a specific vehicle?",
    a: "Absolutely. Browse our fleet above and mention your preferred vehicle when booking via WhatsApp or phone — subject to availability.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ChauffeurServicePage() {
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
            <Link href="/services" className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors">
              Services
            </Link>
            <span className="text-[#d5d5d5]">/</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]">Chauffeur Service</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">
                  Discover the Pinnacle of Comfort
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-8">
                Luxury chauffeur
                <br />
                <span className="text-[#c9a84c] italic font-extralight">services in Dubai</span>
              </h1>
              <p className="text-[#7a7a7a] text-base font-light leading-relaxed max-w-md mb-10">
                Our Chauffeur services provide a distinct advantage by offering personalized service tailored to individual needs. Unlike standard rental services, chauffeurs are not just drivers; they are professionals trained to ensure a seamless travel experience. This caters to a clientele that values comfort, efficiency, and an elevated level of service.
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
                <div key={s.label} className="p-8 rounded-3xl border border-[#efefef] text-center">
                  <div className="text-4xl font-extralight text-[#0a0a0a] tracking-tight mb-2">{s.value}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET PRICING ─────────────────────────────────────────── */}
      <section className="py-28 border-t border-[#efefef] bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Chauffeur Driven Vehicles in UAE
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Rent a Car with Driver —
              <br />
              <span className="text-[#c9a84c] italic font-extralight">choose your vehicle</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {fleet.map((car) => (
              <div
                key={car.name}
                className="group bg-white rounded-3xl border border-[#efefef] overflow-hidden hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden bg-[#f5f5f5]">
                  {car.image ? (
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#d0d0d0]">Vehicle Image</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[9px] tracking-[0.25em] uppercase text-[#0a0a0a] font-light shadow-sm">
                      {car.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-light text-[#0a0a0a] tracking-tight mb-1 leading-snug">{car.name}</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] font-light mb-4">Transfer within Dubai</p>

                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <span className="text-[11px] text-[#5a5a5a] font-light">{car.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                      <span className="text-[11px] text-[#5a5a5a] font-light">{car.baggage} Baggage</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-light text-[#0a0a0a] tracking-tight">{car.price}</div>
                      <div className="text-[9px] tracking-[0.2em] uppercase text-[#b0b0b0] font-light mt-0.5">per transfer</div>
                    </div>
                    <a
                      href={`http://wa.me/971509200818?text=${car.waText}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#c9a84c] transition-all duration-300"
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

      {/* ── EXPERIENCE LUXURY — ALTERNATING ───────────────────────── */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center pt-20 pb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Experience Luxury Travel
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Chauffeur driven cars —{" "}
              <span className="text-[#c9a84c] italic font-extralight">Dubai, UAE</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">

            {/* Row 1 — image left, text right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="relative min-h-[340px] lg:min-h-[500px] overflow-hidden lg:order-1">
                <Image
                  src="/images/chauffeur/chauffeur-luxury.jpg"
                  alt="Luxury chauffeur driven cars Dubai UAE"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">01</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Affordable Chauffeur Services In Dubai
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-2">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    Comfort · Efficiency · Elevated Service
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Experience Luxury Travel with
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">Chauffeur Driven Cars</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  When it comes to traveling in style and comfort, nothing beats the convenience of chauffeur driven cars. Whether you are a tourist exploring the vibrant city of Dubai or a business executive attending important meetings, Privilege Luxury Travel is here to take you to your destination in the most luxurious and hassle-free way possible.
                </p>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-4 tracking-tight">The Benefits of Chauffeur Driven Cars</h3>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-3">
                  Choosing a chauffeur driven car service offers numerous advantages that can enhance your overall travel experience. Here are some of the key benefits:
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {[
                    { num: "1.", title: "Convenience and Comfort", desc: "With a chauffeur driven car, you can say goodbye to the stress of navigating unfamiliar roads or dealing with public transportation. Our professional and experienced chauffeurs are well-versed in the city's routes and will ensure that you reach your destination on time, every time. Sit back, relax, and enjoy the comfort of our luxurious vehicles while we take care of the driving." },
                    { num: "2.", title: "Safety and Security", desc: "At our service, your safety is not just a priority, it's an exclusive privilege. Whether you choose to travel with our fleet, you can be confident that your mode of transportation meets the highest safety standards, ensuring your peace of mind throughout your journey." },
                    { num: "3.", title: "Time Efficiency", desc: "Remember, time is precious, especially when you have a busy schedule. Opting for a chauffeur-driven car can maximize your productivity and make the most of your time. Catch up on emails, make important phone calls, or relax and prepare for your upcoming meetings while our chauffeur takes care of the driving." },
                    { num: "4.", title: "Luxury and Style", desc: "Arrive at your destination in style with our fleet of luxurious vehicles. Whether you prefer a sleek sedan, a spacious SUV, or an elegant limousine, we have the perfect car to suit your preferences. Our fleets feature hybrid and electric vehicles, which are becoming increasingly popular among luxury travellers in Dubai." },
                  ].map((b) => (
                    <div key={b.num} className="flex gap-3">
                      <span className="text-[#c9a84c] text-[11px] font-light mt-0.5 flex-shrink-0">{b.num}</span>
                      <div>
                        <span className="text-sm font-semibold text-[#0a0a0a] tracking-tight">{b.title} — </span>
                        <span className="text-sm text-[#9a9a9a] font-light leading-relaxed">{b.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-3 self-start text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  Book Now
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Row 2 — text left, image right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-1">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Why Choose
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">Privilege Luxury Travel?</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  At Privilege Luxury Travel, we pride ourselves on providing the ultimate luxury travel experience to our clients. Here's why you should choose us for your chauffeur driven car needs:
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {[
                    { num: "1.", title: "Extensive Fleet", desc: "We offer a wide range of vehicles to cater to your specific requirements. From sedans and SUVs to limousines and luxury vans, our fleet has something for everyone. All our vehicles are equipped with modern amenities to ensure a comfortable and enjoyable journey." },
                    { num: "2.", title: "Professional Chauffeurs", desc: "Our chauffeurs are not just skilled drivers but also trained professionals who prioritize your safety and comfort. They are well-versed in the city's roads and can provide you with valuable insights and recommendations to enhance your stay in Dubai." },
                    { num: "3.", title: "Personalized Service", desc: "At Privilege Luxury Travel, we understand that every client is unique. That's why we offer personalized services tailored to your specific needs. Whether you require airport transfers, city tours, or corporate transportation, we can customize our services to meet your requirements." },
                    { num: "4.", title: "Competitive Pricing", desc: "We believe that luxury travel should be accessible to everyone. That's why we offer competitive pricing without compromising on the quality of our services. With Privilege Luxury Travel, you can enjoy the luxury and comfort of chauffeur driven cars at affordable rates." },
                  ].map((b) => (
                    <div key={b.num} className="flex gap-3">
                      <span className="text-[#c9a84c] text-[11px] font-light mt-0.5 flex-shrink-0">{b.num}</span>
                      <div>
                        <span className="text-sm font-semibold text-[#0a0a0a] tracking-tight">{b.title} — </span>
                        <span className="text-sm text-[#9a9a9a] font-light leading-relaxed">{b.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-3 self-start text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  Book Your Chauffeur Driven Car Today
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="relative min-h-[340px] lg:min-h-[500px] overflow-hidden lg:order-2">
                <Image
                  src="/images/chauffeur/why-choose-us.jpg"
                  alt="Why choose Privilege Luxury Travel chauffeur service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">02</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Extensive Fleet · Professional Chauffeurs
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3 — image left, text right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="relative min-h-[340px] lg:min-h-[500px] overflow-hidden lg:order-2">
                <Image
                  src="/images/chauffeur/reliable-chauffeur.jpg"
                  alt="Reliable professional chauffeur services Dubai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">03</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Reliable · Efficient · Transfers
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-1">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    Professional Chauffeur Services in Dubai
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Efficient and reliable
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">transfers</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  Striking through the flabbergasting modern city of Dubai or going to business meetings, our chauffeur services provide the top level of comfort. We guarantee Dubai airport transfers with the highest level of convenience.
                </p>
                <h3 className="text-sm font-semibold text-[#0a0a0a] mb-2 tracking-tight">Choose from Exceptional Options</h3>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-4">
                  Sitting behind the steering wheel of a luxurious sedan, Dubai stretch limo services or other premium vehicles like the rolls royce and Bentley will exceed your expectations and become the perfect addition to corporate events and non-business gatherings.
                </p>
                <h3 className="text-sm font-semibold text-[#0a0a0a] mb-2 tracking-tight">Efficient and Reliable Transfers</h3>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-8">
                  In addition to the stunning looks, our drivers increase style with their professionalism. Reliable and punctual chauffeurs with deep knowledge of Dubai guarantee comfort for cater, leisure, limo and Dubai airport transfer services rentals. Rent a car with a driver and have the journey of your life. Opt for Privilege Luxury Travel for all your transportation needs. No matter if it's a quick trip or a full-day itinerary, our services offer professional chauffeurs who augment your travel plans in the city.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Rolls-Royce", "Bentley", "Mercedes-Benz", "BMW", "Tesla"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 4 — text left, image right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-1">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    Our Promise
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Why choose our chauffeur
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">services in Dubai?</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-6">
                  Privilege Luxury Travel offers the best luxury chauffeur services in Dubai that will redefine your experience of premium travel. With us, you never have to worry about comfort or style, as our carefully curated fleet includes luxurious sedans, spacious SUVs, and versatile vans. We specialize in luxury chauffeur services in Dubai, ensuring every ride meets the highest standards of elegance and safety. All our chauffeurs are professionally background-checked, providing you with both security and peace of mind. Thanks to their extensive local knowledge, our drivers deliver seamless, hassle-free travel across Dubai, always maintaining punctuality. With Luxury Chauffeur Services in Dubai from Privilege Luxury Travel, you can enjoy stress-free, personalized journeys, where every detail is tailored to your unique requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Background Checked", "UAE Licensed", "Punctual", "Stress-Free", "Personalized"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[340px] lg:min-h-[500px] overflow-hidden lg:order-2">
                <Image
                  src="/images/chauffeur/chauffeur-promise.jpg"
                  alt="Why choose Privilege Limo chauffeur services Dubai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">04</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Elegance · Safety · Punctuality
                  </span>
                </div>
              </div>
            </div>

            {/* Row 5 — image left, text right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="relative min-h-[340px] lg:min-h-[500px] overflow-hidden lg:order-1">
                <Image
                  src="/images/chauffeur/luxury-fleet.jpg"
                  alt="Luxury fleet heart of our chauffeur service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">05</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Rolls-Royce · Mercedes-Benz · BMW · Tesla
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-2">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    Our Fleet
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Luxury fleet: the heart
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">of our service</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  In Dubai, customers renting a chauffeur service will quickly notice that we pay special attention to our luxury fleet, as it serves the dual purpose of captivating and comforting even the most discerning travelers. What is unique about our collection is that it primarily focuses on a wide range of elegant and sophisticated SUVs and sedans. Each vehicle is handpicked to conform to strict standards of quality so that they can provide unrivaled travel experiences to our customers.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-8">
                  Some of our luxury fleet also boasts industry leaders such as Rolls-Royce, Mercedes-Benz, Tesla, and BMW. Apart from having elegant and modern looks, these vehicles are equipped with cutting edge technology tailored to improve the travel experience. Our fleet, for example, has advanced climate control systems, quality sound systems, and supple leather seats that provide maximum comfort during journeys. Enhanced comfort and space are offered by our Premium Sprinter Vans. These are perfect for groups, business travel, or families wanting an unparalleled experience while on the move.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Climate Control", "Premium Sound", "Leather Seats", "Sprinter Vans", "SUVs & Sedans"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 6 — text left, image right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-1">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    Our Chauffeurs
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Experienced and
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">trained chauffeurs</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  The importance of professional and trained chauffeurs is paramount when it comes to chauffeur services. Our chauffeurs embody a distinctive blend of seasoned professionalism, robust training, and acute knowledge of the local environment which makes every trip to Dubai highly rewarding. All chauffeurs undergo advanced training and are practically assessed, which implies that they are proficient in driving and customer care amply enough to improve travel to unprecedented levels.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-8">
                  Chauffeurs outstanding knowledge of Dubai is one of the most striking areas of expertise. Their understanding of many ways means that they can navigate the city without getting caught up in heavy traffic. Whether it is a business appointment at one of the city's skyscrapers or just a calm sightseeing session with your family, they are guaranteed to meet you on time. Furthermore, their knowledge of sights helps the clients to provide suggestions turning more than a simple drive into an enlightening journey.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Advanced Training", "Practically Assessed", "Dubai Experts", "On Time Guaranteed"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[340px] lg:min-h-[500px] overflow-hidden lg:order-2">
                <Image
                  src="/images/chauffeur/trained-chauffeur.jpg"
                  alt="Experienced trained chauffeurs Dubai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">06</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Professional · Discreet · Punctual
                  </span>
                </div>
              </div>
            </div>

            {/* Row 7 — image left, text right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="relative min-h-[340px] lg:min-h-[500px] overflow-hidden lg:order-2">
                <Image
                  src="/images/chauffeur/custom-itinerary.jpg"
                  alt="Customization flexibility chauffeur Dubai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">07</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Burj Khalifa · Palm Jumeirah · DIFC
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-1">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    Customization & Flexibility
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Customization and flexibility
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">for all your needs</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  Extreme customization and flexibility are among the most exclusive traits of chauffeur services in Dubai. Dubai chauffeur services go above and beyond to meet their client's demands. Customers have comfort and satisfaction guaranteed during their journeys, right from the moment they place a booking.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-8">
                  Clients with specific preferences are provided with bespoke itineraries that showcase the best of Dubai. Clients can decide to make their own agenda, be it a quick visit to the popular Burj Khalifa or a slow drive through the beautiful Palm Jumeirah. Highly experienced and knowledgeable chauffeurs that are experts in the city's landmarks can further assist with his or her insights and guidance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Bespoke Itineraries", "Hourly Disposal", "City Tours", "Corporate Routes", "Airport Runs"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SEO KEYWORDS ──────────────────────────────────────────── */}
      <section className="py-16 border-t border-[#efefef] bg-[#fafafa]">
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

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-28 border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
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
                <div key={faq.q} className="p-7 rounded-3xl bg-white border border-[#efefef]">
                  <h3 className="text-sm font-semibold text-[#0a0a0a] mb-2 tracking-tight">{faq.q}</h3>
                  <p className="text-sm text-[#9a9a9a] font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE STRIP ────────────────────────────────────────── */}
      <section className="py-16 border-t border-[#efefef] bg-[#fafafa]">
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
              Ready to Book
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              Book your chauffeur
              <br />
              <span className="text-[#c9a84c] italic font-extralight">driven car today</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-10 max-w-sm mx-auto leading-relaxed">
              Ready to experience luxury travel in Dubai, UAE? Book your chauffeur driven car with Privilege Luxury Travel today and enjoy a seamless and memorable journey. Whether you are visiting Dubai for leisure or business, our professional chauffeurs and luxurious vehicles will ensure that you travel in style and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971509200818?text=Hello%20Privilege%20Limo%0A%0AI%27d%20like%20to%20book%20a%20chauffeur%20service."
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

      <Footer />
    </main>
  );
}
