import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bus and Van Rental Dubai | Luxury Coach Hire UAE - Privilege Limo",
  description:
    "Privilege Luxury Travel LLC provides affordable luxury bus and van rental in Dubai, UAE. Mercedes Sprinter Van, Scania Luxury Buses, King Long Luxury Bus hire. Book 24/7.",
  keywords: [
    "van rental in dubai",
    "luxury van rental in dubai",
    "sprinter van rental in dubai",
    "mercedes sprinter rental dubai",
    "14 seat van rental in dubai",
    "mercedes vito rental dubai",
    "mercedes v class rental dubai",
    "luxury coach bus rental in dubai",
    "luxury bus rental dubai",
    "scania bus rental in dubai",
    "scania luxury bus rent in dubai",
    "king long luxury bus for rent in dubai",
    "bus rental dubai",
    "group transport dubai",
  ],
  alternates: { canonical: "https://privilegelimo.com/services/mercedes-sprinter-van-rental" },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const fleet = [
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
  "van rental in dubai",
  "luxury van rental in dubai",
  "sprinter van rental in dubai",
  "mercedes sprinter rental dubai",
  "14 seat van rental in dubai",
  "mercedes vito rental dubai",
  "mercedes v class rental dubai",
  "luxury coach bus rental in dubai",
  "luxury bus rental dubai",
  "scania bus rental in dubai",
  "scania luxury bus rent in dubai",
  "king long luxury bus for rent in dubai",
];

const stats = [
  { value: "50", label: "Max passengers" },
  { value: "9", label: "Fleet variants" },
  { value: "24/7", label: "Always available" },
  { value: "Fixed", label: "Transparent pricing" },
];

const faqs = [
  {
    q: "What group sizes do your buses and vans accommodate?",
    a: "Our fleet covers groups of all sizes - from 7-seater Mercedes vans up to the 50-seater luxury coach. We have the right vehicle for every group size and occasion.",
  },
  {
    q: "Do you offer city tours by luxury coach in Dubai?",
    a: "Yes. Our luxury coaches and vans are available for city tours across Dubai and the UAE. Our drivers are knowledgeable about local attractions and can guide your group throughout the journey.",
  },
  {
    q: "Can I hire a bus for a corporate event or conference?",
    a: "Absolutely. We specialize in corporate group transport for conferences, events, and roadshows. Multi-vehicle fleet coordination is available - contact us for a tailored quote.",
  },
  {
    q: "Are Scania and King Long luxury buses available?",
    a: "Yes. Our bus fleet includes Mercedes Sprinters, Scania Luxury Buses, and King Long Luxury Buses - suitable for city tours, airport transfers, and large group travel across the UAE.",
  },
  {
    q: "Are prices fixed for bus and van rentals?",
    a: "All prices are confirmed before your journey with no hidden fees. Please note prices are subject to change depending on season - contact us on WhatsApp for an up-to-date quote.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BusVanRentalPage() {
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]">Bus & Van Rental</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">
                  Luxury Bus and Van Rental in Dubai
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-8">
                Bus & Van Rental
                <br />
                <span className="text-[#c9a84c] italic font-extralight">in Dubai</span>
              </h1>
              <p className="text-[#7a7a7a] text-base font-light leading-relaxed max-w-md mb-10">
                Privilege Luxury Travel LLC provides affordable Luxury bus and van rental in Dubai, UAE. Mercedes Sprinter Van, Scania Luxury Buses, King Long Luxury Bus hire - city tours by luxury coaches across the UAE.
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
      <section className="py-28 bg-[#fafafa] border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              City Tours by Luxury Coaches in UAE
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Luxury Bus and Van Rental -
              <br />
              <span className="text-[#c9a84c] italic font-extralight">choose your vehicle</span>
            </h2>
            <p className="text-sm text-[#b0b0b0] font-light mt-4">
              All these prices are subject to change depending on season
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fleet.map((car) => (
              <div
                key={car.name}
                className="group bg-white rounded-3xl border border-[#efefef] overflow-hidden hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden bg-[#f5f5f5]">
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

      {/* ── ALTERNATING CONTENT ───────────────────────────────────── */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center pt-20 pb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Experience the Best of Dubai
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Bus and Van Rentals -{" "}
              <span className="text-[#c9a84c] italic font-extralight">Dubai, UAE</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">

            {/* Row 1 - image left, text right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="relative min-h-[340px] lg:min-h-[520px] overflow-hidden lg:order-1">
                <Image
                  src="/images/bus-van/bus-intro.jpg"
                  alt="Luxury bus and van rental Dubai UAE Privilege Luxury Travel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">01</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Mercedes · Scania · King Long
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-2">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    Privilege Luxury Travel LLC
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Experience the best of Dubai
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">with our Bus and Van Rentals</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  Luxury Bus and Van Rental in Dubai, UAE at an affordable price so that you can enjoy the ride without any worries. You can have a good and happy ride with our Bus and Van rental services in Dubai to share a wonderful experience with them. They will help you with the timely pickup and drop so that you will not feel any inconvenience during this trip. Our services are characterized by professionalism hence our drivers will be punctual, friendly, and courteous and know all the major routes across Dubai. Hence they will help you reach any location easily.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-8">
                  Privilege Luxury Travel stands at the forefront of the luxury transportation sector in the United Arab Emirates, specifically in Dubai, a city renowned for its grandeur and opulence. Established with the mission of providing unparalleled travel experiences, Privilege Luxury Travel is committed to delivering high-quality service that caters to the diverse needs of its clientele. With an emphasis on comfort and elegance, the company aims to make every journey a memorable adventure.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Punctual", "Friendly", "Courteous", "All Dubai Routes", "Affordable"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
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

            {/* Row 2 - text left, image right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-1">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    Trusted Excellence
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  A trusted name in
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">luxury transport</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  The reputation of Privilege Luxury Travel has been cultivated through years of dedicated service, positioning it as a trusted name among local and international travelers alike. Their commitment to excellence is reflected in their meticulous attention to detail, ensuring that every vehicle is not only pristine but also equipped with top-of-the-line amenities. This level of care is crucial in a market where luxury is not merely expected but is a fundamental aspect of the travel experience.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-8">
                  Privilege Luxury Travel offers an extensive range of transportation options tailored to varying group sizes and travel requirements. From luxury sedans for intimate gatherings and corporate meetings to spacious buses and vans designed for larger groups, their fleet accommodates all styles of travel. Each vehicle is complemented by professionally trained chauffeurs who embody the essence of hospitality and professionalism, ensuring that clients receive not just a ride, but a luxurious journey through the captivating landscapes of Dubai.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Years of Service", "Top-of-the-line Amenities", "Pristine Vehicles", "Expert Chauffeurs"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-3 self-start text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="relative min-h-[340px] lg:min-h-[520px] overflow-hidden lg:order-2">
                <Image
                  src="/images/bus-van/bus-trusted.jpg"
                  alt="Trusted luxury transport Dubai Privilege Luxury Travel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">02</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Hospitality · Professionalism · Excellence
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3 - image left, text right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="relative min-h-[340px] lg:min-h-[520px] overflow-hidden lg:order-1">
                <Image
                  src="/images/bus-van/bus-benefits.jpg"
                  alt="Benefits of luxury bus and van rental Dubai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">03</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Comfort · Convenience · Personalized
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-2">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    The Benefits
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Benefits of choosing
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">luxury bus and van rentals</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  When planning group travel in Dubai, selecting luxury bus and van rentals offers a multitude of benefits that elevate the entire experience. One of the primary advantages is the unparalleled comfort that these vehicles provide. With spacious seating, high-quality materials, and climate control, passengers can relax and enjoy their journey without the constraints often found in standard transportation options.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-4">
                  In addition to comfort, luxury rentals ensure convenience for travelers. Large groups need transportation that accommodates everyone while simplifying logistics. Luxury buses and vans are designed to host various group sizes, making it easier to coordinate pick-ups and drop-offs. This level of convenience is particularly beneficial for corporate events, weddings, and city tours, where time efficiency is crucial.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-4">
                  Personalized service is another significant benefit of choosing VIP rentals. Professional drivers enhance the experience by being knowledgeable about the local area, guiding groups to popular destinations, and providing insights into Dubai's culture and attractions. This allows passengers to sit back and enjoy the scenery without the stress of navigation.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-8">
                  The luxury amenities featured in these vehicles further distinguish them from standard rentals. Modern buses and vans often come equipped with advanced entertainment systems, Wi-Fi, and refreshments, ensuring a pleasant atmosphere for passengers. These features contribute positively to the travel experience, allowing groups to socialize and relax throughout their journey. Furthermore, luxury bus and van rentals cater to various special occasions, offering tailored services for corporate gatherings, weddings, and city tours. These vehicles can be customized to fit the theme of an event, providing an elegant touch that complements the overall atmosphere. By choosing luxury options, groups can enhance their travel experience and create lasting memories in the vibrant city of Dubai.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Spacious Seating", "Climate Control", "Wi-Fi", "Entertainment", "Weddings", "Corporate Events"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-3 self-start text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  Book Your Vehicle
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Row 4 - text left, image right */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.10)] transition-all duration-700 bg-white">
              <div className="flex flex-col justify-center px-10 md:px-14 py-14 bg-white lg:order-1">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-5 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase font-light">
                    Why Dubai
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.25rem] font-light text-[#0a0a0a] mb-4 tracking-tight leading-tight">
                  Why Dubai is the perfect
                  <br />
                  <span className="text-[#c9a84c] italic font-extralight">destination for luxury travel</span>
                </h2>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed mb-4">
                  Dubai stands out as a premier luxury travel destination, captivating visitors with its dazzling array of attractions and experiences. As one of the globe's most affluent cities, it offers an extensive range of opulent hotels, each promising state-of-the-art amenities and unmatched service. The Burj Al Arab, a symbol of luxury in itself, alongside the iconic Atlantis, The Palm, showcases Dubai's dedication to extravagance, providing guests with unparalleled comfort and stunning views.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-4">
                  In addition to these luxurious accommodations, Dubai is home to some of the world's most revered landmarks. The awe-inspiring Burj Khalifa, towering over the city skyline, offers a breathtaking observation deck that allows visitors to take in panoramic views of the city. The Dubai Mall, an expansive shopping extravaganza, features high-end retailers along with gourmet dining options, making it a shopping haven for those seeking luxury brands. Furthermore, attractions such as the Dubai Fountain, which choreographs water displays to music, enhance the city's allure, adding to the overall enchanting experience.
                </p>
                <p className="text-[#9a9a9a] text-sm font-light leading-relaxed mb-8">
                  High-end shopping experiences abound in Dubai, particularly in the many luxurious retail environments. From unique boutiques to international luxury brands, shopping enthusiasts are sure to find what they desire. The Gold Souk, with its dazzling displays of gold and jewelry, stands out as a must-visit destination. Such experiences are complemented perfectly by the ease of transportation provided by luxury bus and van rentals. These services allow discerning travelers to navigate the city without the stress of finding parking or dealing with traffic, further enhancing the luxury experience. In conclusion, Dubai's blend of luxury accommodations, remarkable landmarks, and high-end shopping truly set it apart as a top destination for luxury travel. The convenience of premium bus and van rentals allows visitors to explore this magnificent city effortlessly, ensuring a memorable journey filled with extravagance and unique experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Burj Khalifa", "Burj Al Arab", "Dubai Mall", "Gold Souk", "Dubai Fountain", "Palm Jumeirah"].map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full border border-[#efefef] bg-white text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-3 self-start text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  Explore Dubai With Us
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="relative min-h-[340px] lg:min-h-[520px] overflow-hidden lg:order-2">
                <Image
                  src="/images/bus-van/dubai-luxury.jpg"
                  alt="Why Dubai is perfect for luxury travel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] text-[#0a0a0a] font-light">04</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light">
                    Burj Khalifa · Atlantis · Gold Souk
                  </span>
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
                Can't find your answer? Message us on WhatsApp - we respond instantly, 24 hours a day.
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
              CALL US 24/7
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              Book now and travel
              <br />
              <span className="text-[#c9a84c] italic font-extralight">in comfort</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-10 max-w-sm mx-auto leading-relaxed">
              On your next trip - do you want to talk with us? So don't be late.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971509200818?text=Hello%20Privilege%20Limo%0A%0AI%27d%20like%20to%20book%20a%20Bus%20or%20Van."
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
