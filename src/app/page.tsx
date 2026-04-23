"use client";

import { useState } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { fleet } from "@/data/index";
import NextImage from "next/image";
import { buildWhatsAppURL, buildBookingMessage, buildQuickEnquiry } from "@/lib/whatsapp";
import BookingModal from "@/components/BookingModal";

// ─── STATIC DATA ──────────────────────────────────────────────────────────────

const reasons = [
  {
    number: "01",
    title: "25 Years of Excellence",
    desc: "Over two decades of delivering premium chauffeur services across the UAE. Our experience is your assurance.",
  },
  {
    number: "02",
    title: "Professional Chauffeurs",
    desc: "Licensed, vetted, English-speaking, and uniformed drivers. Always impeccably presented and trained to the very highest standard.",
  },
  {
    number: "03",
    title: "Absolute Punctuality",
    desc: "Real-time flight and traffic monitoring ensures we are always exactly where you need us, exactly when you need us.",
  },
  {
    number: "04",
    title: "Immaculate Vehicles",
    desc: "Every vehicle is sanitized, inspected, and prepared to concierge-level standards before every single journey.",
  },
  {
    number: "05",
    title: "Fixed Transparent Pricing",
    desc: "No surge pricing. No hidden fees. Your fare is confirmed upfront - always, without exception.",
  },
  {
    number: "06",
    title: "24 / 7 Availability",
    desc: "Day or night, weekday or public holiday - our team is always ready to serve across Dubai and the UAE.",
  },
];

const servicesList = [
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport Transfer Dubai",
    subtitle: "DXB · DWC · AUH · SHJ",
    shortDesc: "Seamless luxury airport transfers across all UAE airports with real-time flight tracking and meet-and-greet service.",
  },
  {
    id: "corporate-travel",
    slug: "corporate-travel",
    title: "Corporate Chauffeur Service",
    subtitle: "Executive · Business · VIP",
    shortDesc: "Premium corporate transportation for executives, delegations, and business travellers across Dubai and the UAE.",
  },
  {
    id: "weddings-events",
    slug: "weddings-events",
    title: "Wedding Car Hire Dubai",
    subtitle: "Weddings · Galas · Special Events",
    shortDesc: "Luxurious wedding car hire and event transportation. Arrive at your most important moments in breathtaking style.",
  },
  {
    id: "rent-a-car-with-driver",
    slug: "rent-a-car-with-driver",
    title: "Rent a Car with Driver",
    subtitle: "Hourly · Daily · City Tours",
    shortDesc: "Explore Dubai at your own pace with a professional chauffeur and luxury vehicle entirely at your disposal.",
  },
  {
    id: "mercedes-sprinter-rental",
    slug: "mercedes-sprinter-rental",
    title: "Mercedes Sprinter Rental",
    subtitle: "Groups · Events · Delegations",
    shortDesc: "Premium Mercedes Sprinter van rental in Dubai for groups, corporate events, and luxury group transfers.",
  },
  {
    id: "luxury-bus-rental",
    slug: "luxury-bus-rental",
    title: "Luxury Bus Rental Dubai",
    subtitle: "50 Seats · Groups · Corporate",
    shortDesc: "50-seater luxury bus rental for large corporate groups, events, delegations, and group transfers across the UAE.",
  },
];

const testimonials = [
  {
    name: "Dina El Jisr",
    date: "June 2025",
    text: "Amazing service, driver super nice, well spoken, drove perfectly and van was clean and very nice.",
  },
  {
    name: "Nadia Karoui",
    date: "February 2025",
    text: "Excellent service, fast replies and reliable - they accommodated all our requests. I 100% recommend them for your Dubai visit.",
  },
  {
    name: "Dayle Carden",
    date: "October 2024",
    text: "We hired Privilege for a one-day city experience. The service was exceptional, they accommodated multiple schedule changes. The driver was excellent - pleasant, friendly, and very skilled. Will definitely hire them again.",
  },
  {
    name: "Jonny McCarthy",
    date: "June 2024",
    text: "Recently worked with Privilege for a 5-day conference with over 20 cars. 5-star customer service. Last minute changes were all actioned with zero fuss and the utmost flexibility. Fantastic.",
  },
];

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "210+", label: "Luxury Cars" },
  { value: "190+", label: "Premium SUVs" },
  { value: "35", label: "Stretch Limos" },
];

const faqs = [
  {
    q: "What airports do you serve for transfers in the UAE?",
    a: "We serve Dubai International Airport (DXB), Al Maktoum International Airport (DWC), Abu Dhabi International Airport, and Sharjah Airport. Your chauffeur will meet you in arrivals with a name board.",
  },
  {
    q: "Are your prices fixed or metered?",
    a: "All our prices are fixed and confirmed upfront. There are no meters, no surge pricing, and absolutely no hidden fees. Prices are subject to seasonal changes.",
  },
  {
    q: "Do you offer meet-and-greet at the airport?",
    a: "Yes. Your chauffeur will be waiting in the arrivals hall with a name board, assist with your luggage, and escort you directly to your vehicle.",
  },
  {
    q: "Can I book a luxury van or bus for a group?",
    a: "Absolutely. We offer Mercedes Sprinter vans (11–19 seats), GMC Yukon Limousine (18 seats), and a 50-seater Luxury Bus - perfect for groups, corporate delegations, and events.",
  },
  {
    q: "Is the service available outside Dubai?",
    a: "Yes. We operate across the UAE including Abu Dhabi, Sharjah, and Ras Al Khaimah, as well as international transfers upon request.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 24 hours in advance. However, we accommodate last-minute bookings subject to availability - simply call or WhatsApp us on +971 50 920 0818.",
  },
];

// ─── WHATSAPP ICON ─────────────────────────────────────────────────────────────
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── FAQ ITEM ──────────────────────────────────────────────────────────────────
function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimateIn delay={index * 0.07}>
      <div
        className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
          open ? "border-[#AB5461]" : "border-[#AB5461]/80 hover:border-[#AB5461]"
        }`}
      >
        <button
          className="w-full flex items-center justify-between px-8 py-6 text-left"
          onClick={() => setOpen(!open)}
        >
          <span className="text-sm font-medium text-[#0a0a0a] tracking-tight pr-6">
            {faq.q}
          </span>
          <span
            className={`text-[#9a9a9a] text-xl flex-shrink-0 transition-transform duration-300 leading-none ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden"
        >
          <p className="px-8 pb-7 text-sm text-[#7a7a7a] leading-relaxed font-light">
            {faq.a}
          </p>
        </motion.div>
      </div>
    </AnimateIn>
  );
}

{/* Hero Section */}
function HeroSection() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-white"
      aria-label="Luxury chauffeur service Dubai"
    >
      {/* Full bleed image */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src="/images/hero.png"
          alt="Luxury chauffeur Dubai"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center"
      >

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-4 mb-10"
        >
          <div className="h-px w-10 bg-[#AB5461]" />
          <span className="text-white font-semibold text-[10px] tracking-[0.5em] uppercase">
            Privilege Limo · Est. 1999 · Dubai UAE
          </span>
          <div className="h-px w-10 bg-[#AB5461]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-white text-6xl md:text-8xl lg:text-[110px] font-extralight leading-[1.0] tracking-[-0.03em] mb-10 drop-shadow-lg"
        >
          Travel the
          <br />
          <span className="italic text-[#AB5461]">Privileged</span> Way
        </motion.h1>

        {/* CTAs */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="flex flex-col sm:flex-row items-center gap-4"
>
  <button
    onClick={() => setBookingOpen(true)}
    className="px-10 py-4 rounded-full bg-[#AB5461] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#b8943e] hover:scale-[1.02] transition-all duration-300"
  >
    Reserve Your Ride
  </button>

  <a
    href="https://wa.me/971509200818"
    target="_blank"
    rel="noreferrer"
className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white border border-[#AB5461] text-black text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-[1.02]"  >
    <svg
      className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
    WhatsApp Us
  </a>
</motion.div>

{/* Booking Modal */}
<BookingModal
  isOpen={bookingOpen}
  onClose={() => setBookingOpen(false)}
  carName="Our Fleet"
  carCategory="Luxury Chauffeur Service"
  transferPrice="AED 350"
  price5hr="AED 500"
  price10hr="AED 900"
  maxPassengers={19}
/>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#AB5461] text-[9px] tracking-[0.4em] uppercase font-light">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-6 h-6 text-[#AB5461]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    dropoff: "",
    date: "",
    service: "",
    vehicle: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildBookingMessage(formData);
    const url = buildWhatsAppURL(message);
    window.open(url, "_blank");
  };

  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* ── MARQUEE ─────────────────────────────────────────────────── */}
      <div className="bg-white border-y border-[#AB5461] py-5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap w-max"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-12 px-6 text-[10px] tracking-[0.4em] uppercase text-[#AB5461] font-bold">
              <span>Airport Transfers</span><span className="text-[#AB5461]">·</span>
              <span>Corporate Travel</span><span className="text-[#AB5461]">·</span>
              <span>Weddings &amp; Events</span><span className="text-[#AB5461]">·</span>
              <span>Mercedes Sprinter Rental</span><span className="text-[#AB5461]">·</span>
              <span>Luxury Bus Rental</span><span className="text-[#AB5461]">·</span>
              <span>Rent a Car with Driver</span><span className="text-[#AB5461]">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── FLEET ───────────────────────────────────────────────────── */}
      <section id="fleet" className="py-36 md:py-44 bg-gradient-to-b from-[#AB5461]/5 to-[#AB5461]/10 border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <AnimateIn direction="left">
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Our Fleet
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[#0a0a0a] leading-[1.1] tracking-tight">
                Vehicles as refined
                <br />
                <span className="text-[#AB5461] font-extralight italic">
                  as your standards
                </span>
              </h2>
            </AnimateIn>
            <AnimateIn direction="right">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#AB5461] md:text-right">
                All prices for transfer within Dubai
                <br />
                <span className="text-[#b0b0b0]">Subject to seasonal change</span>
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-16">
  {fleet.map((car, i) => (
    <AnimateIn key={car.slug} delay={i * 0.01} direction="up">
      <article className="group bg-white rounded-[28px] border border-[#AB5461]/40 hover:border-[#AB5461] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">

        {/* Image */}
        <Link href={`/fleet/${car.classSlug}/${car.slug}`} className="block">
          <div className="relative h-52 bg-[#fafafa] overflow-hidden">
            {car.images?.[0] ? (
  <NextImage
    src={car.images?.[0]}
    alt={car.name}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-700"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
) : (
  <div className="w-full h-full flex items-center justify-center">
    <span className="text-[10px] tracking-[0.3em] uppercase text-[#d5d5d5]">
      Vehicle Image
    </span>
  </div>
)}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#AB5461]/40 to-transparent" />
          </div>
        </Link>

        {/* Content */}
        <div className="p-7 flex flex-col flex-1">
          <span className="inline-block self-start text-[9px] tracking-[0.35em] uppercase text-[#FFFFF] border border-[#AB5461] px-3 py-1 rounded-full mb-5">
            {car.category}
          </span>
          <h3 className="text-base font-semibold text-[#0a0a0a] mb-2 tracking-tight">
            {car.name}
          </h3>
          <p className="text-sm text-[#9a9a9a] leading-relaxed font-light mb-5 flex-1">
            {car.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
{car.features?.slice(0, 3).map((f) => (
                <span key={f} className="text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] bg-[#f7f7f7] px-3 py-1.5 rounded-full">
                {f}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-4 pt-5 border-t border-[#f4f4f4]">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#b0b0b0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span className="text-xs text-[#9a9a9a] font-light">{car.passengers}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#b0b0b0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              <span className="text-xs text-[#9a9a9a] font-light">{car.luggage}</span>
            </div>
            <Link
              href={`/fleet/${car.classSlug}/${car.slug}`}
              className="ml-auto text-[10px] tracking-[0.25em] uppercase text-[#0a0a0a] group-hover:text-[#AB5461] transition-colors duration-300 flex items-center gap-1.5"
            >
              Details
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </AnimateIn>
  ))}
</div>
          {/* Fleet CTA */}
          <AnimateIn delay={0.2}>
            <div className="mt-16 text-center">
              <p className="text-sm text-[#9a9a9a] font-light mb-6">
                Need help choosing the right vehicle for your journey?
              </p>
              <a
                href="https://wa.me/971509200818?text=Hello%20Privilege%20Limo%20%F0%9F%91%8B%20I%20need%20help%20choosing%20a%20vehicle."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
              >
                <WhatsAppIcon />
                Chat with Us
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── INTRO ───────────────────────────────────────────────────── */}
      <section className="py-36 md:py-44 bg-gradient-to-b from-[#AB5461]/2 to-[#AB5461]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateIn direction="left">
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Welcome to Privilege
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[#0a0a0a] leading-[1.1] tracking-tight mb-8">
                Luxury is not an option -
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  it is a standard.
                </span>
              </h2>
              <p className="text-[#7a7a7a] text-sm leading-relaxed font-light mb-6">
                Welcome to Privilege Luxury Travel LLC, your trusted partner for
                world-class chauffeur service in Dubai. We redefine luxury travel
                by combining elegance, comfort, and professionalism in every journey.
              </p>
              <p className="text-[#7a7a7a] text-sm leading-relaxed font-light mb-10">
                Whether you need an airport pickup, corporate transfer, or a private
                chauffeur for city travel, our premium fleet and expert drivers ensure
                a seamless, first-class experience across the UAE.
              </p>
              <a
                href="/services"
                className="inline-block text-[11px] tracking-[0.3em] uppercase px-8 py-3.5 rounded-full border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "210+", label: "Luxury Cars" },
                  { value: "190+", label: "Premium SUVs" },
                  { value: "35", label: "Stretch Limos" },
                  { value: "25+", label: "Years Experience" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-8 rounded-3xl border border-[#efefef] text-center hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-500"
                  >
                    <div className="text-3xl font-extralight text-[#0a0a0a] mb-2 tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[10px] tracking-[0.35em] uppercase text-[#b0b0b0]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
{/* ── SERVICES ────────────────────────────────────────────────── */}
<section id="services" className="py-36 md:py-44 bg-gradient-to-b from-[#AB5461]/5 to-[#AB5461]/10 border-t border-[#efefef]">
  <div className="max-w-7xl mx-auto px-6">
    <AnimateIn>
      <div className="mb-16">
        <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
          What We Offer
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[#0a0a0a] leading-[1.1] tracking-tight">
          Luxury chauffeur services
          <br />
          <span className="text-[#AB5461] font-extralight italic">
            tailored for you
          </span>
        </h2>
      </div>
    </AnimateIn>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {servicesList.map((s, i) => (
        <AnimateIn key={s.id} delay={i * 0.08} direction="up">
          <div className="group p-9 rounded-3xl border border-[#AB5461]/40 hover:border-[#AB5461] hover:shadow-[0_12px_48px_rgba(0,0,0,0.06)] transition-all duration-500 h-full bg-white flex flex-col">
            <div className="h-px w-8 bg-[#AB5461] mb-2 group-hover:w-16 transition-all duration-500" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#AB5461] font-light block mb-6">
              {s.subtitle}
            </span>
            <h3 className="text-base font-semibold text-[#0a0a0a] mb-3 tracking-tight">
              {s.title}
            </h3>
            <p className="text-sm text-[#9a9a9a] leading-relaxed font-light flex-1">
              {s.shortDesc}
            </p>
          </div>
        </AnimateIn>
      ))}
    </div>

    {/* View All Button */}
    <AnimateIn delay={0.3}>
      <div className="flex justify-center mt-12">
        <Link
          href="/services"
          className="group inline-flex items-center gap-3 px-10 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
        >
          View All Services
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </AnimateIn>

  </div>
</section>


      {/* ── STATEMENT ───────────────────────────────────────────────── */}
      <section className="py-28 bg-white border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn direction="none">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-[#0a0a0a] leading-[1.05] tracking-tight max-w-2xl">
                Every detail.
                <br />
                <span className="text-[#AB5461] italic">Every time.</span>
                <br />
                No exceptions.
              </h2>
              <div className="max-w-xs">
                <p className="text-[#9a9a9a] text-sm leading-relaxed font-light mb-8">
                  From the moment you book to the moment you arrive - every aspect
                  of your experience is curated with absolute care and professionalism.
                </p>
                <a
                  href="https://wa.me/971509200818?text=Hello%20Privilege%20Limo%20%F0%9F%91%8B%20I%20would%20like%20to%20make%20a%20booking."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300"
                >
                  <WhatsAppIcon />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────────────── */}
      <section id="why-us" className="py-36 md:py-44 bg-gradient-to-b from-[#AB5461]/2 to-[#AB5461]/5 border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="max-w-xl mb-20">
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Why Privilege Limo
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[#0a0a0a] leading-[1.1] tracking-tight">
                The standard others
                <br />
                <span className="text-[#AB5461] font-extralight italic">
                  aspire to match
                </span>
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((r, i) => (
              <AnimateIn key={r.number} delay={i * 0.08} direction="up">
                <div className="p-9 rounded-3xl border border-[#AB5461]/30 hover:border-[#AB5461]/80 hover:shadow-[0_12px_48px_rgba(0,0,0,0.05)] transition-all duration-500 bg-white h-full">
                  <span className="text-[#AB5461] text-[10px] tracking-[0.4em] font-light mb-6 block">
                    {r.number}
                  </span>
                  <h3 className="text-base font-semibold text-[#0a0a0a] mb-3 tracking-tight">
                    {r.title}
                  </h3>
                  <p className="text-sm text-[#9a9a9a] leading-relaxed font-light">
                    {r.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section id="testimonials" className="py-36 md:py-44 bg-white border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="max-w-xl mb-20">
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Client Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[#0a0a0a] leading-[1.1] tracking-tight">
                Hear what our
                <br />
                <span className="text-[#AB5461] font-extralight italic">clients say</span>
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 0.08} direction="up">
                <blockquote className="p-8 rounded-3xl border-2 border-[#AB5461] hover:border-[#AB5461]/30 hover:shadow-[0_12px_48px_rgba(0,0,0,0.10)] transition-all duration-500 h-full flex flex-col bg-white">
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3 h-3 fill-[#AB5461]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#3a3a3a] leading-relaxed font-light mb-6 italic flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <footer>
                    <span className="text-sm font-medium text-[#0a0a0a] block">{t.name}</span>
                    <span className="text-xs text-[#b0b0b0] tracking-wide font-light">{t.date}</span>
                  </footer>
                </blockquote>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section id="faq" className="py-36 md:py-44 bg-white border-t border-[#efefef]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateIn>
            <div className="mb-20 text-center">
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-light text-[#0a0a0a] leading-[1.1] tracking-tight">
                Everything you need
                <br />
                <span className="text-[#AB5461] font-extralight italic">to know</span>
              </h2>
            </div>
          </AnimateIn>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ─────────────────────────────────────────────────── */}
      <section id="booking" className="py-36 md:py-44 bg-gradient-to-b from-[#AB5461]/5 to-[#AB5461]/10 border-t border-[#efefef]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#b0b0b0] mb-5 block">
                Ready to Ride
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[#0a0a0a] leading-[1.08] tracking-tight mb-4">
                Book your luxury
                <br />
                chauffeur today
              </h2>
              <p className="text-[#9a9a9a] text-sm font-light max-w-sm mx-auto leading-relaxed">
                Fill in your details and we will send your booking request directly
                via WhatsApp for instant confirmation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange}
                  className="border border-[#AB5461]/50 rounded-2xl px-6 py-4 text-[#0a0a0a] text-sm placeholder:text-[#c0c0c0] outline-none focus:border-[#AB5461] transition-colors duration-300 w-full bg-white" />
                <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange}
                  className="border border-[#AB5461]/50 rounded-2xl px-6 py-4 text-[#0a0a0a] text-sm placeholder:text-[#c0c0c0] outline-none focus:border-[#AB5461] transition-colors duration-300 w-full bg-white" />
                <input type="email" name="email" placeholder="Email Address (optional)" value={formData.email} onChange={handleChange}
                  className="border border-[#AB5461]/50 rounded-2xl px-6 py-4 text-[#0a0a0a] text-sm placeholder:text-[#c0c0c0] outline-none focus:border-[#AB5461] transition-colors duration-300 w-full bg-white" />
                <input type="datetime-local" name="date" required value={formData.date} onChange={handleChange}
                  className="border border-[#AB5461]/50 rounded-2xl px-6 py-4 text-[#9a9a9a] text-sm outline-none focus:border-[#AB5461] transition-colors duration-300 w-full bg-white" />
                <input type="text" name="pickup" placeholder="Pickup Location" required value={formData.pickup} onChange={handleChange}
                  className="border border-[#AB5461]/50 rounded-2xl px-6 py-4 text-[#0a0a0a] text-sm placeholder:text-[#c0c0c0] outline-none focus:border-[#AB5461] transition-colors duration-300 w-full bg-white" />
                <input type="text" name="dropoff" placeholder="Drop-off Location" value={formData.dropoff} onChange={handleChange}
                  className="border border-[#AB5461]/50 rounded-2xl px-6 py-4 text-[#0a0a0a] text-sm placeholder:text-[#c0c0c0] outline-none focus:border-[#AB5461] transition-colors duration-300 w-full bg-white" />
              </div>

              <select name="service" required value={formData.service} onChange={handleChange}
                className="border border-[#AB5461]/50 rounded-2xl px-6 py-4 text-[#9a9a9a] text-sm outline-none focus:border-[#AB5461] transition-colors duration-300 w-full bg-white">
                <option value="">Select Service</option>
                <option value="Airport Transfer">Airport Transfer</option>
                <option value="Corporate Travel">Corporate Travel</option>
                <option value="Wedding & Events">Weddings &amp; Events</option>
                <option value="Chauffeur Service">Chauffeur Service</option>
                <option value="Rent a Car with Driver">Rent a Car with Driver</option>
                <option value="Luxury Van / Bus Rental">Luxury Van / Bus Rental</option>
                <option value="City Tour">City Tour</option>
              </select>

              <select name="vehicle" value={formData.vehicle} onChange={handleChange}
                className="border border-[#AB5461]/50 rounded-2xl px-6 py-4 text-[#9a9a9a] text-sm outline-none focus:border-[#AB5461] transition-colors duration-300 w-full bg-white">
                <option value="">Preferred Vehicle (optional)</option>
                {fleet.map((v) => (
                  <option key={v.slug} value={v.name}>
  {v.name} - {v.priceLabel}
</option>
                ))}
              </select>

              <textarea name="notes" placeholder="Special requests or notes (optional)" rows={4} value={formData.notes} onChange={handleChange}
                className="border border-[#AB5461]/50 rounded-2xl px-6 py-4 text-[#0a0a0a] text-sm placeholder:text-[#c0c0c0] outline-none focus:border-[#AB5461] transition-colors duration-300 w-full resize-none bg-white" />

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-14 py-4 rounded-full bg-[#25D366] border-2 border-[#AB5461]/50 text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <WhatsAppIcon />
                  Send via WhatsApp
                </button>
              </div>
            </form>

            {/* Direct contact strip */}
            <div className="mt-12 pt-10 border-t border-[#efefef] grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {[
                { label: "Call Us", value: "+971 50 920 0818", href: "tel:+971509200818" },
                { label: "WhatsApp", value: "+971 50 920 0818", href: "https://wa.me/971509200818" },
                { label: "Email", value: "booking@privilegelimo.com", href: "mailto:booking@privilegelimo.com" },
              ].map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith("https") ? "_blank" : undefined} rel="noreferrer"
                  className="group p-6 rounded-2xl border border-[#AB5461] hover:border-[#AB5461]/50 transition-all duration-300">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-[#b0b0b0] block mb-2">{c.label}</span>
                  <span className="text-sm text-[#0a0a0a] font-light group-hover:text-[#AB5461] transition-colors duration-300">{c.value}</span>
                </a>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
