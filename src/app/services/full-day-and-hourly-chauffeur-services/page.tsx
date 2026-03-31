import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hourly & Full Day Chauffeur Service Dubai | As Directed Hire",
  description:
    "Book an hourly or full day chauffeur service in Dubai. Flexible as-directed hire with luxury sedans, SUVs and vans for business, shopping, sightseeing and personal travel.",
  alternates: {
    canonical: "https://www.privilegelimo.com/services/hourly-chauffeur-service",
  },
  openGraph: {
    title: "Hourly & Full Day Chauffeur Service Dubai | As Directed Hire",
    description:
      "Flexible hourly and full day chauffeur hire in Dubai with premium vehicles and professional drivers. Ideal for business, events, shopping and city travel.",
    url: "https://www.privilegelimo.com/services/hourly-chauffeur-service",
    siteName: "Privilege Limo",
    type: "website",
  },
};

const packages = [
  {
    label: "2 Hours",
    ideal: "Short meetings, hotel pickup, quick errands",
    note: "Minimum booking",
  },
  {
    label: "4 Hours",
    ideal: "Half-day business, shopping, city visits",
    note: "Most popular",
  },
  {
    label: "8 Hours",
    ideal: "Full work day, executive schedule, events",
    note: "Full day hire",
  },
  {
    label: "Custom",
    ideal: "Multi-day, roadshows, delegations, extended stays",
    note: "Tailored rate",
  },
];

const benefits = [
  {
    title: "No Fixed Route",
    text: "Go wherever you need — your chauffeur stays with you and adapts to your schedule as it changes.",
  },
  {
    title: "Wait & Return",
    text: "Your driver waits at each stop. No rebooking, no meter running, no delays between appointments.",
  },
  {
    title: "Time Efficiency",
    text: "Ideal for packed days with multiple meetings, shopping trips, or hotel-to-event-to-dinner movement.",
  },
  {
    title: "Flat Hourly Rate",
    text: "One agreed rate for the booking period. No surge pricing, no hidden charges, no surprises at the end.",
  },
];

const useCases = [
  {
    title: "Business Meetings",
    text: "Multi-stop corporate schedules across DIFC, Downtown, JLT and other business districts.",
  },
  {
    title: "Shopping Trips",
    text: "Mall of the Emirates, Dubai Mall, City Walk and boutique shopping with luggage handling.",
  },
  {
    title: "City Sightseeing",
    text: "Burj Khalifa, Atlantis, Palm Jumeirah, Gold Souk and Dubai's top landmarks at your pace.",
  },
  {
    title: "Event Transport",
    text: "Pre and post-event transfer, venue movement and guest coordination across the city.",
  },
  {
    title: "VIP Personal Travel",
    text: "Personal errands, appointments, hospital visits or a dedicated car for the full day.",
  },
  {
    title: "Corporate Roadshow",
    text: "Back-to-back investor or partner meetings with one vehicle and one driver all day.",
  },
];

const steps = [
  {
    n: "1",
    title: "Choose your hours",
    desc: "Pick your start time, duration (minimum 2 hours) and preferred pickup location.",
  },
  {
    n: "2",
    title: "Select a vehicle",
    desc: "Choose from executive sedans, SUVs, luxury MPVs or VIP vans based on your needs.",
  },
  {
    n: "3",
    title: "Driver is assigned",
    desc: "A professional chauffeur is allocated to your booking and confirmed in advance.",
  },
  {
    n: "4",
    title: "Travel at your pace",
    desc: "Your driver follows your schedule — waiting, adapting and moving when you're ready.",
  },
];

const fleet = [
  {
    name: "Mercedes S 500",
    type: "First Class",
    passengers: 3,
    desc: "The benchmark choice for executive full-day hire. Massage seats, premium audio and a commanding road presence.",
    href: "/fleet/mercedes-s500",
    image: "/images/fleet/mercedes-s500-1.webp",
    price: "AED 900",
  },
  {
    name: "BMW 7 Series",
    type: "First Class",
    passengers: 3,
    desc: "Sky Lounge panoramic roof and B&W Diamond audio make long working days genuinely comfortable.",
    href: "/fleet/bmw-7-series",
    image: "/images/fleet/bmw-7-series-1.webp",
    price: "AED 750",
  },
  {
    name: "Mercedes V-Class",
    type: "Luxury MPV",
    passengers: 7,
    desc: "Ideal for families, small groups or anyone needing cabin space and luggage room for a full day.",
    href: "/fleet/mercedes-v-class",
    image: "/images/fleet/mercedes-v-class-1.webp",
    price: "AED 400",
  },
  {
    name: "Cadillac Escalade",
    type: "Luxury SUV",
    passengers: 7,
    desc: "Bold presence and spacious interior — suited for VIP personal travel and executive group hire.",
    href: "/fleet/cadillac-escalade",
    image: "/images/fleet/cadillac-escalade-1.webp",
    price: "AED 600",
  },
  {
    name: "Mercedes Sprinter Business Class VIP",
    type: "Business Class Van",
    passengers: 13,
    desc: "For larger groups needing a full-day dedicated vehicle — roadshows, delegations and event teams.",
    href: "/fleet/mercedes-sprinter-business-vip",
    image: "/images/fleet/mercedes-business-class-sprinter-1.webp",
    price: "AED 1,200",
  },
  {
    name: "50 Seater Luxury Bus",
    type: "Luxury Coach",
    passengers: 50,
    desc: "Full day or multi-stop hire for corporate groups, hotel guests, tour groups and event attendees.",
    href: "/fleet/luxury-bus-50",
    image: "/images/fleet/50-seater-luxury-coach-1.webp",
    price: "AED 800",
  },
];

const faqs = [
  {
    q: "What is hourly chauffeur service?",
    a: "Hourly chauffeur hire means a professional driver stays with you for an agreed number of hours, taking you wherever you need without a fixed route or destination.",
  },
  {
    q: "What is the minimum booking duration?",
    a: "The minimum booking is 2 hours. Most clients prefer 4-hour or full 8-hour bookings for meetings, shopping or sightseeing days.",
  },
  {
    q: "Can I make multiple stops during the booking?",
    a: "Yes. Your chauffeur will wait at each stop for the duration of your booking. You decide the route, order and timings.",
  },
  {
    q: "Is full day chauffeur service available on weekends?",
    a: "Yes. Hourly and full day chauffeur service is available seven days a week including weekends and public holidays.",
  },
  {
    q: "Which vehicle is best for a full day booking?",
    a: "For individuals or executives, the S-Class or BMW 7 Series is the premium choice. For families or groups, the V-Class or Escalade offers more space.",
  },
  {
    q: "Can I extend my booking on the day?",
    a: "Extensions are subject to vehicle and driver availability. Contact us as early as possible if you need additional hours.",
  },
];

export default function HourlyChauffeurServicePage() {
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
                  className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors"
                >
                  Services
                </Link>
                <span className="text-[#ddd]">/</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#AB5461] font-light">
                  Hourly & Full Day Chauffeur
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-light text-[#0a0a0a] tracking-tight leading-[1.1]">
                Hourly & Full Day
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  Chauffeur Service Dubai
                </span>
              </h1>

              <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg">
                Flexible as-directed chauffeur hire with a professional driver
                and a luxury vehicle — available by the hour or the full day,
                wherever you need to go in Dubai and the UAE.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-[#AB5461] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white hover:bg-[#964754] transition-colors"
                >
                  Book Chauffeur
                </Link>
                <Link
                  href="/fleet"
                  className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
                >
                  View Fleet
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Minimum 2 hours", "Wait & return", "No fixed route", "Flat rate pricing"].map((tag) => (
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
                src="/images/fleet/audi-a6-1.webp"
                alt="Hourly chauffeur service Dubai"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-5 py-4 min-w-[160px]">
                <p className="text-2xl font-light text-[#AB5461] tracking-tight">2 hrs</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mt-0.5 font-light">Minimum booking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES STRIP ─────────────────────────────────── */}
      <section className="bg-[#fafafa] border-t border-[#efefef] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-6 block font-light">
            Booking Options
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.label}
                className="bg-white rounded-2xl p-6 border border-[#efefef]"
              >
                <p className="text-2xl font-light text-[#AB5461] tracking-tight">{pkg.label}</p>
                <p className="mt-2 text-xs font-light text-[#0a0a0a] tracking-wide">{pkg.note}</p>
                <p className="mt-1 text-[11px] text-[#aaa] leading-relaxed font-light">{pkg.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#AB5461]" />
                <span className="text-[10px] tracking-[0.45em] uppercase text-[#AB5461] font-light">
                  As-Directed Hire
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
                Your driver, your schedule,
                <br />
                <span className="text-[#AB5461] italic font-extralight">your route</span>
              </h2>
              <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a] font-light">
                Unlike point-to-point transfers, hourly chauffeur hire puts a
                professional driver entirely at your disposal. Your vehicle
                waits at every stop, follows your timeline and adapts when
                plans change.
              </p>
              <p className="mt-3 text-sm leading-[1.9] text-[#7a7a7a] font-light">
                Whether you have back-to-back business meetings across the
                city, a full day of shopping and dining, or a VIP guest who
                needs door-to-door attention all day — hourly hire is the
                right fit.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-[#fafafa] border border-[#efefef] px-4 py-4"
                >
                  <p className="text-xs font-light text-[#0a0a0a] tracking-wide">{item.title}</p>
                  <p className="mt-1 text-[11px] text-[#aaa] leading-relaxed font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ───────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#fafafa] border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#AB5461]" />
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#AB5461] font-light">
                Why Hourly Hire
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              More than
              <br />
              <span className="text-[#AB5461] italic font-extralight">just a ride</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-6 border border-[#efefef]"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light mb-4">
                  0{i + 1}
                </p>
                <h3 className="text-sm font-light text-[#0a0a0a] tracking-tight mb-3">{item.title}</h3>
                <p className="text-[12px] leading-[1.85] text-[#9a9a9a] font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#AB5461] font-light">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mb-14">
            Book in four
            <br />
            <span className="text-[#AB5461] italic font-extralight">simple steps</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-[#efefef] z-0" />
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative z-10 flex flex-col items-start px-0 lg:px-5 pb-10 lg:pb-0"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#AB5461] text-[#AB5461] text-base font-light mb-6 shrink-0 bg-white">
                  {step.n}
                </div>
                <h3 className="text-sm font-light text-[#0a0a0a] tracking-tight mb-2">{step.title}</h3>
                <p className="text-[12px] leading-[1.85] text-[#9a9a9a] font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#fafafa] border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#AB5461]" />
                <span className="text-[10px] tracking-[0.45em] uppercase text-[#AB5461] font-light">
                  Available Fleet
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
                Choose your vehicle
                <br />
                <span className="text-[#AB5461] italic font-extralight">for the day</span>
              </h2>
            </div>
            <Link
              href="/fleet"
              className="shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-[#0a0a0a] text-[10px] tracking-[0.25em] uppercase font-medium text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
            >
              View All Fleet
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fleet.map((car) => (
              <div
                key={car.name}
                className="group bg-white rounded-3xl border border-[#efefef] overflow-hidden hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[9px] tracking-[0.25em] uppercase text-[#0a0a0a] font-light shadow-sm">
                      {car.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-base font-light text-[#0a0a0a] tracking-tight leading-snug">
                      {car.name}
                    </h3>
                    <span className="shrink-0 text-sm font-light text-[#AB5461]">{car.price}</span>
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#b0b0b0] font-light mb-3">
                    Up to {car.passengers} passenger{car.passengers > 1 ? "s" : ""}
                  </p>
                  <p className="text-xs text-[#7a7a7a] font-light leading-relaxed mb-6">
                    {car.desc}
                  </p>

                  <div className="flex items-center gap-3">
                    <Link
                      href={car.href}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-[#efefef] text-[9px] tracking-[0.25em] uppercase font-medium text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors"
                    >
                      View details
                    </Link>
                    <a
                      href={`https://wa.me/971509200818?text=${encodeURIComponent(
                        `Hi, I'd like to book an hourly chauffeur service with the ${car.name}. Can you share availability and pricing?`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[#0a0a0a] text-[9px] tracking-[0.25em] uppercase font-medium text-white hover:bg-[#AB5461] transition-all duration-300"
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
              About Hourly Chauffeur Hire
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
      <section className="py-16 sm:py-24 bg-[#fafafa] border-t border-[#efefef]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] font-light block mb-5">
            Book Your Chauffeur
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#0a0a0a] tracking-tight leading-tight">
            A premium driver on standby,
            <br />
            <span className="text-[#AB5461] italic font-extralight">for as long as you need</span>
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg mx-auto">
            Book an hourly or full day chauffeur in Dubai today — flexible,
            professional and always on time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-[#AB5461] px-8 py-4 text-[10px] tracking-[0.25em] uppercase font-medium text-white hover:bg-[#964754] transition-colors"
            >
              Book Chauffeur
            </Link>
            <Link
              href="/fleet"
              className="inline-flex items-center justify-center rounded-full border border-[#0a0a0a] px-8 py-4 text-[10px] tracking-[0.25em] uppercase font-medium text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
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