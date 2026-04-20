"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const fleetCategories = [
  { label: "Business Class", href: "/fleet/business-class", desc: "Executive sedans & hybrid MPVs" },
  { label: "First Class", href: "/fleet/first-class", desc: "Mercedes S 500 & BMW 7 Series" },
  { label: "Business Van", href: "/fleet/business-van", desc: "Luxury MPVs up to 7 passengers" },
  { label: "Luxury SUV", href: "/fleet/luxury-suv", desc: "Escalade, Yukon Denali & Range Rover" },
  { label: "Rolls-Royce", href: "/fleet/rolls-royce", desc: "Ghost & Cullinan with chauffeur" },
  { label: "Sprinter Luxury Van", href: "/fleet/mercedes-sprinter-luxury-van", desc: "Ultra Luxury & 19 Seater" },
  { label: "Sprinter VIP", href: "/fleet/mercedes-sprinter-luxury-vip", desc: "Avant Garde & Business Class VIP" },
  { label: "Stretch Limousine", href: "/fleet/stretch-limousine", desc: "GMC, Chrysler & Diamond limos" },
  { label: "Standard Bus", href: "/fleet/standard-bus", desc: "Coaster 21 & Hiace 11 Seater" },
  { label: "Luxury Coach", href: "/fleet/luxury-coach-bus", desc: "35 & 50 Seater luxury coaches" },
];

const services = [
  { label: "Luxury Chauffeur Service", href: "/services/luxury-chauffeur-service-in-dubai", desc: "Premium chauffeur driven cars" },
  { label: "Bus & Van Rental", href: "/services/bus-and-van-rental-in-dubai", desc: "Dubai, Sharjah & Abu Dhabi" },
  { label: "Mercedes Sprinter Van Rental", href: "/services/mercedes-sprinter-van-rental", desc: "Hourly & full-day hire" },
  { label: "Mercedes Van Rental", href: "/services/mercedes-van-rental-dubai", desc: "Stretch limos & luxury rides" },
  { label: "Airport Transfer", href: "/services/airport-transfer", desc: "Airport transport services across UAE" },
  { label: "Corporate Chauffeur Services", href: "/services/corporate-chauffeur-services", desc: "Luxury corporate chauffeur services across UAE" },
  { label: "Full Day & Hourly Chauffeur Services", href: "/services/full-day-and-hourly-chauffeur-services", desc: "Hire a car with driver for full day or on hourly basis" },
  { label: "Luxury Van Rental Services", href: "/services/luxury-van-rental-in-dubai", desc: "Hire a luxury van with driver across UAE" },
  { label: "VIP Chauffeur Services", href: "/services/vip-chauffeur-service", desc: "Luxurious VIP chauffeur services across UAE" },
  { label: "Event Transport Dubai", href: "/services/event-transportation", desc: "Birthdays, Weddings, Corporate Events across UAE" },
  { label: "Wedding Limousines", href: "/services/wedding-limo-services", desc: "Luxury wedding limo services across UAE" },
  { label: "Private Driver For Sightseeing", href: "/services/private-driver-for-sightseeing-services", desc: "Hire a private driver for sightseeing" },
  { label: "Monthly Car Rental with Driver", href: "/services/monthly-car-rental-with-driver", desc: "Get a luxurious monthly car for rental with driver" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/why-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact-us" },
];

// ── BOOKING MODAL ──────────────────────────────────────────────────────────────
type BookingForm = {
  name: string;
  phone: string;
  service: string;
  date: string;
  pickup: string;
  dropoff: string;
  notes: string;
};

function BookingModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"options" | "whatsapp">("options");
  const [form, setForm] = useState<BookingForm>({
    name: "", phone: "", service: "", date: "", pickup: "", dropoff: "", notes: "",
  });

  // Close on backdrop click
  function handleBackdrop(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleWhatsAppSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      ` *New Booking Request — Privilege Limo*`,
      ``,
      ` *Name:* ${form.name}`,
      ` *Phone:* ${form.phone}`,
      ` *Service:* ${form.service || "Not specified"}`,
      ` *Date:* ${form.date || "Not specified"}`,
      ` *Pickup:* ${form.pickup}`,
      ` *Drop-off:* ${form.dropoff}`,
      form.notes ? ` *Notes:* ${form.notes}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/971509200818?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={handleBackdrop}
    >
      <div className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f5f5f5] hover:bg-[#efefef] flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-3.5 h-3.5 text-[#555]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ── STEP 1: Options ─────────────────────────────────── */}
        {step === "options" && (
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="h-px w-6 bg-[#AB5461]" />
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#AB5461]">Privilege Limo</span>
              </div>
              <h2 className="text-2xl font-light text-[#0a0a0a] tracking-tight">
                Book your ride
                <br />
                <span className="text-[#AB5461] italic font-extralight">how would you like to proceed?</span>
              </h2>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-3">

              {/* Call option */}
              <a
                href="tel:+971509200818"
                onClick={onClose}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#efefef] hover:border-[#0a0a0a] hover:bg-[#0a0a0a] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-[#f5f5f5] group-hover:bg-white/10 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-5 h-5 text-[#0a0a0a] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0a0a0a] group-hover:text-white transition-colors">Call & Book</p>
                  <p className="text-[11px] text-[#9a9a9a] group-hover:text-white/60 font-light transition-colors">+971 50 920 0818 · Instant confirmation</p>
                </div>
                <svg className="w-4 h-4 text-[#ccc] group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              {/* WhatsApp form option */}
              <button
                onClick={() => setStep("whatsapp")}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#efefef] hover:border-[#25D366] hover:bg-[#f0fdf4] transition-all duration-300 text-left"
              >
                <div className="w-11 h-11 rounded-full bg-[#f0fdf4] group-hover:bg-[#25D366] flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0a0a0a]">Send Booking on WhatsApp</p>
                  <p className="text-[11px] text-[#9a9a9a] font-light">Fill a quick form · We reply instantly</p>
                </div>
                <svg className="w-4 h-4 text-[#ccc] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            <p className="text-center text-[10px] text-[#c0c0c0] font-light mt-6">
              Available 24/7 · Dubai & UAE
            </p>
          </div>
        )}

        {/* ── STEP 2: WhatsApp Form ────────────────────────────── */}
        {step === "whatsapp" && (
          <div className="p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setStep("options")}
              className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors mb-6"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="h-px w-6 bg-[#25D366]" />
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#25D366]">WhatsApp Booking</span>
              </div>
              <h2 className="text-xl font-light text-[#0a0a0a] tracking-tight">
                Tell us about your ride
              </h2>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4">

              {/* Name + Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a]">Name *</label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-[#efefef] text-sm text-[#0a0a0a] placeholder:text-[#d0d0d0] focus:outline-none focus:border-[#AB5461] transition-colors font-light"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a]">Phone *</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange} required
                    placeholder="+971 ..."
                    className="w-full px-4 py-3 rounded-xl border border-[#efefef] text-sm text-[#0a0a0a] placeholder:text-[#d0d0d0] focus:outline-none focus:border-[#AB5461] transition-colors font-light"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a]">Service</label>
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#efefef] text-sm text-[#0a0a0a] focus:outline-none focus:border-[#AB5461] transition-colors font-light bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.href} value={s.label}>{s.label}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a]">Date & Time</label>
                <input
                  type="datetime-local" name="date" value={form.date} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#efefef] text-sm text-[#0a0a0a] focus:outline-none focus:border-[#AB5461] transition-colors font-light"
                />
              </div>

              {/* Pickup + Dropoff */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a]">Pickup Location *</label>
                  <input
                    name="pickup" value={form.pickup} onChange={handleChange} required
                    placeholder="Hotel, address or area"
                    className="w-full px-4 py-3 rounded-xl border border-[#efefef] text-sm text-[#0a0a0a] placeholder:text-[#d0d0d0] focus:outline-none focus:border-[#AB5461] transition-colors font-light"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a]">Drop-off Location *</label>
                  <input
                    name="dropoff" value={form.dropoff} onChange={handleChange} required
                    placeholder="Destination"
                    className="w-full px-4 py-3 rounded-xl border border-[#efefef] text-sm text-[#0a0a0a] placeholder:text-[#d0d0d0] focus:outline-none focus:border-[#AB5461] transition-colors font-light"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a]">Additional Notes</label>
                <textarea
                  name="notes" value={form.notes} onChange={handleChange} rows={2}
                  placeholder="Number of passengers, flight number, special requests..."
                  className="w-full px-4 py-3 rounded-xl border border-[#efefef] text-sm text-[#0a0a0a] placeholder:text-[#d0d0d0] focus:outline-none focus:border-[#AB5461] transition-colors font-light resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.01]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Booking on WhatsApp
              </button>

              <p className="text-center text-[10px] text-[#c0c0c0] font-light">
                Opens WhatsApp with your details pre-filled
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

// ── MAIN NAVBAR ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileFleetOpen, setMobileFleetOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLLIElement>(null);
  const fleetRef = useRef<HTMLLIElement>(null);

  const isServiceActive = services.some((s) => pathname === s.href) || pathname === "/services";
  const isFleetActive = fleetCategories.some((f) => pathname.startsWith(f.href)) || pathname === "/fleet";

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setFleetOpen(false);
    setMobileServicesOpen(false);
    setMobileFleetOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (fleetRef.current && !fleetRef.current.contains(e.target as Node)) setFleetOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const Chevron = ({ open }: { open: boolean }) => (
    <svg className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const ArrowRight = () => (
    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );

  const WAIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <>
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/5 py-4 transition-all duration-500">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link href="/" className="relative flex h-11 w-[160px] shrink-0 items-center sm:h-12 sm:w-[185px]">
            <Image src="/logo.webp" alt="Privilege Limo" fill priority sizes="(max-width: 640px) 160px, 185px" className="object-contain object-left" />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="/" className={`text-[11px] tracking-widest uppercase transition-colors duration-300 relative group ${pathname === "/" ? "text-[#AB5461]" : "text-[#1a1a1a] hover:text-[#AB5461]"}`}>
                Home
                <span className={`absolute -bottom-1 left-0 h-px bg-[#AB5461] transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            </li>

            {/* Services Dropdown */}
            <li ref={servicesRef} className="relative">
              <button onClick={() => { setServicesOpen(!servicesOpen); setFleetOpen(false); }}
                className={`flex items-center gap-1.5 text-[11px] tracking-widest uppercase transition-colors duration-300 relative group ${isServiceActive ? "text-[#AB5461]" : "text-[#1a1a1a] hover:text-[#AB5461]"}`}>
                Services <Chevron open={servicesOpen} />
                <span className={`absolute -bottom-1 left-0 h-px bg-[#AB5461] transition-all duration-300 ${isServiceActive ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] bg-white rounded-[1.5rem] border border-[#efefef] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-4 transition-all duration-300 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-[#efefef] rotate-45" />
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => {
                    const active = pathname === s.href;
                    return (
                      <Link key={s.href} href={s.href} onClick={() => setServicesOpen(false)}
                        className={`group flex flex-col gap-1 p-3 rounded-2xl transition-all duration-200 ${active ? "bg-[#fdf8ec] border border-[#e8d9a0]" : "hover:bg-[#fafafa] border border-transparent hover:border-[#efefef]"}`}>
                        <div className={`text-[11px] tracking-wide font-medium transition-colors ${active ? "text-[#AB5461]" : "text-[#0a0a0a] group-hover:text-[#AB5461]"}`}>{s.label}</div>
                        <div className="text-[10px] text-[#9a9a9a] font-light">{s.desc}</div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-3 pt-3 border-t border-[#f5f5f5] flex items-center justify-between px-1">
                  <Link href="/services" onClick={() => setServicesOpen(false)} className={`group inline-flex items-center gap-1.5 text-[10px] tracking-[0.3em] uppercase font-light transition-colors duration-300 ${pathname === "/services" ? "text-[#AB5461]" : "text-[#7a7a7a] hover:text-[#AB5461]"}`}>
                    View All Services <ArrowRight />
                  </Link>
                  <a href="https://wa.me/971509200818" target="_blank" rel="noreferrer" onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#20bd5a] transition-colors">
                    <WAIcon /> Book Now
                  </a>
                </div>
              </div>
            </li>

            {/* Fleet Dropdown */}
            <li ref={fleetRef} className="relative">
              <button onClick={() => { setFleetOpen(!fleetOpen); setServicesOpen(false); }}
                className={`flex items-center gap-1.5 text-[11px] tracking-widest uppercase transition-colors duration-300 relative group ${isFleetActive ? "text-[#AB5461]" : "text-[#1a1a1a] hover:text-[#AB5461]"}`}>
                Fleet <Chevron open={fleetOpen} />
                <span className={`absolute -bottom-1 left-0 h-px bg-[#AB5461] transition-all duration-300 ${isFleetActive ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[440px] bg-white rounded-[1.5rem] border border-[#efefef] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-4 transition-all duration-300 ${fleetOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-[#efefef] rotate-45" />
                <div className="grid grid-cols-2 gap-2">
                  {fleetCategories.map((f) => {
                    const active = pathname.startsWith(f.href);
                    return (
                      <Link key={f.href} href={f.href} onClick={() => setFleetOpen(false)}
                        className={`group flex flex-col gap-1 p-3 rounded-2xl transition-all duration-200 ${active ? "bg-[#fdf8ec] border border-[#e8d9a0]" : "hover:bg-[#fafafa] border border-transparent hover:border-[#efefef]"}`}>
                        <div className={`text-[11px] tracking-wide font-medium transition-colors ${active ? "text-[#AB5461]" : "text-[#0a0a0a] group-hover:text-[#AB5461]"}`}>{f.label}</div>
                        <div className="text-[10px] text-[#9a9a9a] font-light">{f.desc}</div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-3 pt-3 border-t border-[#f5f5f5] flex items-center justify-between px-1">
                  <Link href="/fleet" onClick={() => setFleetOpen(false)} className={`group inline-flex items-center gap-1.5 text-[10px] tracking-[0.3em] uppercase font-light transition-colors duration-300 ${pathname === "/fleet" ? "text-[#AB5461]" : "text-[#7a7a7a] hover:text-[#AB5461]"}`}>
                    View Full Fleet <ArrowRight />
                  </Link>
                  <a href="https://wa.me/971509200818" target="_blank" rel="noreferrer" onClick={() => setFleetOpen(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#AB5461] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#964754] transition-colors">
                    Book Now
                  </a>
                </div>
              </div>
            </li>

            {navLinks.slice(1).map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} className={`text-[11px] tracking-widest uppercase transition-colors duration-300 relative group ${active ? "text-[#AB5461]" : "text-[#1a1a1a] hover:text-[#AB5461]"}`}>
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-px bg-[#AB5461] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CTA BUTTONS ── */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/971509200818" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase px-5 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all duration-300">
              <WAIcon className="w-3.5 h-3.5" /> WhatsApp
            </a>
            {/* ← Book Now now opens the modal */}
            <button
              onClick={() => setBookingOpen(true)}
              className="text-[11px] tracking-[0.25em] uppercase px-6 py-2.5 rounded-full border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
            <span className={`block h-px w-6 bg-[#0a0a0a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px w-6 bg-[#0a0a0a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-[#0a0a0a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </nav>

        {/* ── MOBILE MENU ── */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white/95 backdrop-blur-xl mx-4 mt-2 rounded-2xl p-6 border border-black/5 shadow-2xl">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)} className={`text-[11px] tracking-widest uppercase transition-colors ${pathname === "/" ? "text-[#AB5461]" : "text-[#1a1a1a] hover:text-[#AB5461]"}`}>
                  Home
                </Link>
              </li>

              {/* Mobile Services */}
              <li>
                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-[11px] tracking-widest uppercase text-[#1a1a1a] hover:text-[#AB5461] transition-colors">
                  Services <Chevron open={mobileServicesOpen} />
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${mobileServicesOpen ? "max-h-[520px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                  <div className="flex flex-col gap-1 pl-2">
                    {services.map((s) => {
                      const active = pathname === s.href;
                      return (
                        <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)}
                          className={`flex flex-col gap-0.5 px-3 py-2.5 rounded-xl transition-colors ${active ? "bg-[#fdf8ec] text-[#AB5461]" : "hover:bg-[#fafafa] text-[#4a4a4a]"}`}>
                          <div className="text-[11px] tracking-wide font-medium">{s.label}</div>
                          <div className="text-[9px] text-[#9a9a9a] font-light">{s.desc}</div>
                        </Link>
                      );
                    })}
                    <Link href="/services" onClick={() => setMenuOpen(false)}
                      className={`group flex items-center justify-between px-3 py-2.5 mt-1 rounded-xl border transition-colors duration-200 ${pathname === "/services" ? "bg-[#fdf8ec] border-[#e8d9a0] text-[#AB5461]" : "border-[#efefef] hover:bg-[#fafafa] hover:border-[#e8d9a0] text-[#7a7a7a] hover:text-[#AB5461]"}`}>
                      <span className="text-[11px] tracking-wide font-medium">View All Services</span>
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </li>

              {/* Mobile Fleet */}
              <li>
                <button onClick={() => setMobileFleetOpen(!mobileFleetOpen)}
                  className="w-full flex items-center justify-between text-[11px] tracking-widest uppercase text-[#1a1a1a] hover:text-[#AB5461] transition-colors">
                  Fleet <Chevron open={mobileFleetOpen} />
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${mobileFleetOpen ? "max-h-[520px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                  <div className="flex flex-col gap-1 pl-2">
                    {fleetCategories.map((f) => {
                      const active = pathname.startsWith(f.href);
                      return (
                        <Link key={f.href} href={f.href} onClick={() => setMenuOpen(false)}
                          className={`flex flex-col gap-0.5 px-3 py-2.5 rounded-xl transition-colors ${active ? "bg-[#fdf8ec] text-[#AB5461]" : "hover:bg-[#fafafa] text-[#4a4a4a]"}`}>
                          <div className="text-[11px] tracking-wide font-medium">{f.label}</div>
                          <div className="text-[9px] text-[#9a9a9a] font-light">{f.desc}</div>
                        </Link>
                      );
                    })}
                    <Link href="/fleet" onClick={() => setMenuOpen(false)}
                      className={`group flex items-center justify-between px-3 py-2.5 mt-1 rounded-xl border transition-colors duration-200 ${pathname === "/fleet" ? "bg-[#fdf8ec] border-[#e8d9a0] text-[#AB5461]" : "border-[#efefef] hover:bg-[#fafafa] hover:border-[#e8d9a0] text-[#7a7a7a] hover:text-[#AB5461]"}`}>
                      <span className="text-[11px] tracking-wide font-medium">View Full Fleet</span>
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </li>

              {navLinks.slice(1).map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link href={link.href} onClick={() => setMenuOpen(false)} className={`text-[11px] tracking-widest uppercase transition-colors ${active ? "text-[#AB5461]" : "text-[#1a1a1a] hover:text-[#AB5461]"}`}>
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              {/* Mobile CTAs */}
              <li className="pt-3 border-t border-[#f0f0f0] flex flex-col gap-3">
                <a href="https://wa.me/971509200818" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 text-[11px] tracking-[0.25em] uppercase px-7 py-3 rounded-full bg-[#25D366] text-white">
                  <WAIcon className="w-4 h-4" /> WhatsApp
                </a>
                {/* Mobile Book Now also opens modal */}
                <button
                  onClick={() => { setMenuOpen(false); setBookingOpen(true); }}
                  className="text-center text-[11px] tracking-[0.25em] uppercase px-7 py-3 rounded-full border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}