import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Luxury Chauffeur Service in Dubai | Chauffeur Driven Cars UAE — Privilege Limo",
  description:
    "Discover the pinnacle of comfort with luxury chauffeur services in Dubai. Chauffeur driven Mercedes, BMW, SUVs, vans and buses for airport transfers, business and city tours.",
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
  alternates: {
    canonical: "https://privilegelimo.com/luxury-chauffeur-service-in-dubai",
  },
};

// ─── FLEET DATA ───────────────────────────────────────────────────────────────

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

const blogLinks = [
  {
    title: "Reliable Chauffeur Services in Dubai",
    href: "https://privilegelimo.com/reliable-chauffeur-services-in-dubai/",
  },
  {
    title: "Chauffeur Services in Dubai",
    href: "https://privilegelimo.com/chauffeur-services-in-dubai/",
  },
  {
    title: "Transfers from Dubai to Abu Dhabi",
    href: "https://privilegelimo.com/transfers-from-dubai-to-abu-dhabi/",
  },
];

// ─── REUSABLE MINI CARD ───────────────────────────────────────────────────────

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
      <span className="text-[9px] tracking-[0.45em] uppercase text-[#c9a84c] mb-2 block font-light">
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

// ─── WA ICON ─────────────────────────────────────────────────────────────────

function WAIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LuxuryChauffeurServicePage() {
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]">
              Luxury Chauffeur Service in Dubai
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">
                  Discover the Pinnacle of Comfort
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-6">
                Luxury chauffeur
                <br />
                <span className="text-[#c9a84c] italic font-extralight">
                  services in Dubai
                </span>
              </h1>
              <p className="text-[#7a7a7a] text-sm md:text-base font-light leading-relaxed max-w-xl mb-8">
                Our Chauffeur services provide a distinct advantage by offering personalized service tailored to individual needs. Unlike standard rental services, chauffeurs are not just drivers; they are professionals trained to ensure a seamless travel experience. This caters to a clientele that values comfort, efficiency, and an elevated level of service.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
                >
                  <WAIcon />
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
              Chauffeur Driven Vehicles in UAE
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Rent a Car with Driver
              <br />
              <span className="text-[#c9a84c] italic font-extralight">
                chauffeur driven vehicles
              </span>
            </h2>
            <p className="text-sm text-[#b0b0b0] font-light mt-4">
              All these prices are subject to change depending on season
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {fleet.map((car) => (
              <div
                key={car.name}
                className="group bg-white rounded-3xl border border-[#efefef] overflow-hidden hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
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

      {/* ── SECTION LABEL ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-6">
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] font-light">
            Experience Luxury Travel with Chauffeur Driven Cars in Dubai, UAE
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Everything about our
          <br />
          <span className="text-[#c9a84c] italic font-extralight">chauffeur service</span>
        </h2>
      </div>

      {/* ── MINI CARDS GRID ───────────────────────────────────────── */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">

          {/* Row 1: Intro + Convenience */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Overview" title="Chauffeur Driven Cars in Dubai, UAE">
              <p>
                When it comes to traveling in style and comfort, nothing beats the convenience of chauffeur driven cars. Whether you are a tourist exploring the vibrant city of Dubai or a business executive attending important meetings, Privilege Luxury Travel is here to take you to your destination in the most luxurious and hassle-free way possible.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 01" title="Convenience and Comfort">
              <p>
                With a chauffeur driven car, you can say goodbye to the stress of navigating unfamiliar roads or dealing with public transportation. Our professional and experienced chauffeurs are well-versed in the city's routes and will ensure that you reach your destination on time, every time.
              </p>
              <p>
                Sit back, relax, and enjoy the comfort of our luxurious vehicles while we take care of the driving.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 02" title="Safety and Security">
              <p>
                At our service, your safety is not just a priority, it's an exclusive privilege. Whether you choose to travel with our fleet, you can be confident that your mode of transportation meets the highest safety standards.
              </p>
              <p>
                This ensures your peace of mind throughout your journey.
              </p>
            </MiniCard>
          </div>

          {/* Row 2: Time + Luxury + Booking */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Benefit 03" title="Time Efficiency">
              <p>
                Remember, time is precious, especially when you have a busy schedule. Opting for a chauffeur-driven car can maximize your productivity and make the most of your time.
              </p>
              <p>
                Catch up on emails, make important phone calls, or relax and prepare for your upcoming meetings while our chauffeur takes care of the driving.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 04" title="Luxury and Style">
              <p>
                Arrive at your destination in style with our fleet of luxurious vehicles. Whether you prefer a sleek sedan, a spacious SUV, or an elegant limousine, we have the perfect car to suit your preferences.
              </p>
              <p>
                Our fleets feature hybrid and electric vehicles, which are becoming increasingly popular among luxury travellers in Dubai.
              </p>
            </MiniCard>

            <MiniCard tag="Book Now" title="Book Your Chauffeur Driven Car Today">
              <p>
                Ready to experience luxury travel in Dubai, UAE? Book your chauffeur driven car with Privilege Luxury Travel today and enjoy a seamless and memorable journey.
              </p>
              <p>
                Whether you are visiting Dubai for leisure or business, our professional chauffeurs and luxurious vehicles will ensure that you travel in style and comfort.
              </p>
              <a
                href="https://wa.me/971509200818"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#c9a84c] transition-all duration-300"
              >
                Book on WhatsApp
              </a>
            </MiniCard>
          </div>

          {/* Row 3: Why Choose — 4 reasons across 2 rows of 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Why Us — 01" title="Extensive Fleet">
              <p>
                We offer a wide range of vehicles to cater to your specific requirements. From sedans and SUVs to limousines and luxury vans, our fleet has something for everyone. All our vehicles are equipped with modern amenities to ensure a comfortable and enjoyable journey.
              </p>
            </MiniCard>

            <MiniCard tag="Why Us — 02" title="Professional Chauffeurs">
              <p>
                Our chauffeurs are not just skilled drivers but also trained professionals who prioritize your safety and comfort. They are well-versed in the city's roads and can provide you with valuable insights and recommendations to enhance your stay in Dubai.
              </p>
            </MiniCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Why Us — 03" title="Personalized Service">
              <p>
                At Privilege Luxury Travel, we understand that every client is unique. That's why we offer personalized services tailored to your specific needs.
              </p>
              <p>
                Whether you require airport transfers, city tours, or corporate transportation, we can customize our services to meet your requirements.
              </p>
            </MiniCard>

            <MiniCard tag="Why Us — 04" title="Competitive Pricing">
              <p>
                We believe that luxury travel should be accessible to everyone. That's why we offer competitive pricing without compromising on the quality of our services.
              </p>
              <p>
                With Privilege Luxury Travel, you can enjoy the luxury and comfort of chauffeur driven cars at affordable rates.
              </p>
            </MiniCard>
          </div>

          {/* Row 4: Professional Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Professional Service" title="Professional Chauffeur Services in Dubai">
              <p>
                Striking through the flabbergasting modern city of Dubai or going to business meetings, our chauffeur services provide the top level of comfort. We guarantee Dubai airport transfers with the highest level of convenience.
              </p>
            </MiniCard>

            <MiniCard tag="Exceptional Options" title="Choose from Exceptional Options">
              <p>
                Sitting behind the steering wheel of a luxurious sedan, Dubai stretch limo services or other premium vehicles like the Rolls Royce and Bentley will exceed your expectations.
              </p>
              <p>
                These become the perfect addition to corporate events and non-business gatherings alike.
              </p>
            </MiniCard>

            <MiniCard tag="Reliable Transfers" title="Efficient and Reliable Transfers">
              <p>
                Reliable and punctual chauffeurs with deep knowledge of Dubai guarantee comfort for cater, leisure, limo and Dubai airport transfer services rentals. Rent a car with a driver and have the journey of your life.
              </p>
              <p>
                No matter if it's a quick trip or a full-day itinerary, our services offer professional chauffeurs who augment your travel plans in the city.
              </p>
            </MiniCard>
          </div>

          {/* Row 5: Why Choose Chauffeur Services + Fleet Heart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Our Services" title="Why Choose Our Chauffeur Services in Dubai?">
              <p>
                Privilege Luxury Travel offers the best luxury chauffeur services in Dubai that will redefine your experience of premium travel. With us, you never have to worry about comfort or style, as our carefully curated fleet includes luxurious sedans, spacious SUVs, and versatile vans.
              </p>
              <p>
                All our chauffeurs are professionally background-checked, providing you with both security and peace of mind. Thanks to their extensive local knowledge, our drivers deliver seamless, hassle-free travel across Dubai, always maintaining punctuality.
              </p>
            </MiniCard>

            <MiniCard tag="Our Fleet" title="Luxury Fleet: The Heart of Our Service">
              <p>
                In Dubai, customers renting a chauffeur service will quickly notice that we pay special attention to our luxury fleet, as it serves the dual purpose of captivating and comforting even the most discerning travelers.
              </p>
              <p>
                Our collection primarily focuses on a wide range of elegant and sophisticated SUVs and sedans. Each vehicle is handpicked to conform to strict standards of quality so that they can provide unrivaled travel experiences.
              </p>
            </MiniCard>
          </div>

          {/* Row 6: Fleet Detail + Chauffeurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Fleet Detail" title="Rolls-Royce, Mercedes-Benz, Tesla & BMW">
              <p>
                Some of our luxury fleet boasts industry leaders such as Rolls-Royce, Mercedes-Benz, Tesla, and BMW. Apart from having elegant and modern looks, these vehicles are equipped with cutting edge technology tailored to improve the travel experience.
              </p>
              <p>
                Our fleet has advanced climate control systems, quality sound systems, and supple leather seats that provide maximum comfort. Enhanced comfort and space are offered by our Premium Sprinter Vans — perfect for groups, business travel, or families.
              </p>
            </MiniCard>

            <MiniCard tag="Our Chauffeurs" title="Experienced and Trained Chauffeurs">
              <p>
                The importance of professional and trained chauffeurs is paramount when it comes to chauffeur services. Our chauffeurs embody a distinctive blend of seasoned professionalism, robust training, and acute knowledge of the local environment.
              </p>
              <p>
                All chauffeurs undergo advanced training and are practically assessed, which implies that they are proficient in driving and customer care amply enough to improve travel to unprecedented levels.
              </p>
            </MiniCard>
          </div>

          {/* Row 7: Chauffeur Expertise + Customization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Local Expertise" title="Deep Knowledge of Dubai">
              <p>
                Chauffeurs' outstanding knowledge of Dubai is one of the most striking areas of expertise. Their understanding of many ways means that they can navigate the city without getting caught up in heavy traffic.
              </p>
              <p>
                Whether it is a business appointment at one of the city's skyscrapers or just a calm sightseeing session with your family, they are guaranteed to meet you on time. Their knowledge of sights also helps turn more than a simple drive into an enlightening journey.
              </p>
            </MiniCard>

            <MiniCard tag="Customization" title="Customization and Flexibility for All Your Needs">
              <p>
                Extreme customization and flexibility are among the most exclusive traits of chauffeur services in Dubai. Dubai chauffeur services go above and beyond to meet their client's demands. Customers have comfort and satisfaction guaranteed during their journeys, right from the moment they place a booking.
              </p>
              <p>
                Clients with specific preferences are provided with bespoke itineraries that showcase the best of Dubai — be it a quick visit to the popular Burj Khalifa or a slow drive through the beautiful Palm Jumeirah.
              </p>
            </MiniCard>
          </div>

        </div>
      </section>

      {/* ── SEO KEYWORDS CLOUD ───────────────────────────────────── */}
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

      {/* ── BLOG LINKS STRIP ──────────────────────────────────────── */}
      <section className="py-16 border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-3 block">
            More About Chauffeur Services
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
                <h3 className="text-sm text-[#0a0a0a] font-light group-hover:text-[#c9a84c] leading-relaxed">
                  {b.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a]">
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
              On Your Next Trip — Do You Want To Talk With Us?
              <br />
              So Don't Be Late.
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
              We provide luxury transportation in UAE, ensuring you enjoy a sophisticated with comfort, and style in one of the world's most glamorous destinations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}