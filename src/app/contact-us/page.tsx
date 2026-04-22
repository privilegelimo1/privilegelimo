import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Book Luxury Chauffeur Service Dubai — Privilege Limo",
  description:
    "Get in touch with Privilege Luxury Travel LLC. Book a luxury chauffeur, van, sprinter or bus in Dubai. Available 24/7 via WhatsApp, phone or email.",
  alternates: { canonical: "https://www.privilegelimo.com/contact-us" },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const vehicles = [
  "Mercedes – S 500",
  "Mercedes – S 450",
  "BMW 7 Series",
  "Mercedes VIP Trend 250",
  "Mercedes V 300 Tiffany",
  "Mercedes Vito Tourer",
  "Mercedes Sprinter Avant Garde VIP",
  "Mercedes Sprinter Ultra Luxury Van",
  "Mercedes Sprinter Business Class",
  "Mercedes-Benz Sprinter",
  "GMC Yukon Limousine",
  "50 Seater Luxury Bus",
  "Not Sure Yet",
];

const contactDetails = [
  {
    tag: "Address",
    value: "Suite# 45, Shraifi One Building, Za'abeel St, Dubai",
    href: "https://goo.gl/maps/EHr2xahUB4ajmKf89",
    external: true,
  },
  {
    tag: "Email",
    value: "booking@privilegelimo.com",
    href: "mailto:booking@privilegelimo.com",
    external: false,
  },
  {
    tag: "Phone",
    value: "+971 50 920 0818",
    href: "tel:+971509200818",
    external: false,
  },
  {
    tag: "WhatsApp",
    value: "+971 50 920 0818",
    href: "https://wa.me/971509200818",
    external: true,
  },
];

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/privilegelimo" },
  { name: "Instagram", href: "https://www.instagram.com/privilegeluxurylimo/" },
  { name: "X", href: "https://x.com/privilegeuae" },
  { name: "YouTube", href: "https://www.youtube.com/@privilegechauffeurandlimousine" },
];

// ─── MINI CARD ────────────────────────────────────────────────────────────────

function MiniCard({ tag, title, children }: { tag: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[1.75rem] border border-[#efefef] bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:border-[#e8d9a0] transition-all duration-300">
      <span className="text-[9px] tracking-[0.45em] uppercase text-[#AB5461] mb-2 block font-light">{tag}</span>
      <h3 className="text-base font-light text-[#0a0a0a] mb-4 tracking-tight">{title}</h3>
      {children}
    </div>
  );
}

// ─── WA ICON ─────────────────────────────────────────────────────────────────

function WAIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 border-b border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors">
              Home
            </Link>
            <span className="text-[#d5d5d5]">/</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]">Contact Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#AB5461]" />
                <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
                  Available 24/7
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-6">
                Get in touch
                <br />
                <span className="text-[#AB5461] italic font-extralight">with us</span>
              </h1>
              <p className="text-[#7a7a7a] text-base font-light leading-relaxed max-w-lg mb-10">
                Book a luxury chauffeur, van, sprinter or bus in Dubai. Our team is available 24/7 to assist with your travel needs across Dubai and the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300"
                >
                  <WAIcon className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+971509200818"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                >
                  +971 50 920 0818
                </a>
              </div>
            </div>

            {/* Contact rows */}
            <div className="flex flex-col gap-3">
              {contactDetails.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="group flex items-center justify-between px-6 py-4 rounded-2xl border border-[#efefef] bg-white hover:border-[#AB5461] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <div>
                    <div className="text-[9px] tracking-[0.35em] uppercase text-[#b0b0b0] font-light mb-0.5">{c.tag}</div>
                    <div className="text-sm font-light text-[#0a0a0a]">{c.value}</div>
                  </div>
                  <svg className="w-4 h-4 text-[#d0d0d0] group-hover:text-[#AB5461] group-hover:translate-x-0.5 transition-all duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + SIDE CARDS ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="rounded-[2rem] border border-[#efefef] bg-white p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <span className="text-[9px] tracking-[0.45em] uppercase text-[#AB5461] mb-3 block font-light">
                  Booking Form
                </span>
                <h2 className="text-2xl md:text-3xl font-light text-[#0a0a0a] mb-8 tracking-tight">
                  Reserve Your Vehicle
                </h2>

                <form
                  action="https://formspree.io/f/YOUR_FORM_ID"
                  method="POST"
                  className="flex flex-col gap-4"
                >
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-2xl border border-[#efefef] bg-[#fafafa] text-sm font-light text-[#0a0a0a] placeholder:text-[#c0c0c0] focus:outline-none focus:border-[#AB5461] focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+971 50 920 0818"
                        className="w-full px-4 py-3 rounded-2xl border border-[#efefef] bg-[#fafafa] text-sm font-light text-[#0a0a0a] placeholder:text-[#c0c0c0] focus:outline-none focus:border-[#AB5461] focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-2xl border border-[#efefef] bg-[#fafafa] text-sm font-light text-[#0a0a0a] placeholder:text-[#c0c0c0] focus:outline-none focus:border-[#AB5461] focus:bg-white transition-all duration-200"
                    />
                  </div>

                  {/* Vehicle + Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                        Vehicle Type *
                      </label>
                      <select
                        name="vehicle"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-2xl border border-[#efefef] bg-[#fafafa] text-sm font-light text-[#0a0a0a] focus:outline-none focus:border-[#AB5461] focus:bg-white transition-all duration-200 appearance-none"
                      >
                        <option value="" disabled>Select vehicle</option>
                        {vehicles.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                        Date & Time *
                      </label>
                      <input
                        type="datetime-local"
                        name="datetime"
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-[#efefef] bg-[#fafafa] text-sm font-light text-[#0a0a0a] focus:outline-none focus:border-[#AB5461] focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Pickup + Dropoff */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                        Pickup Location *
                      </label>
                      <input
                        type="text"
                        name="pickup"
                        required
                        placeholder="e.g. Dubai International Airport"
                        className="w-full px-4 py-3 rounded-2xl border border-[#efefef] bg-[#fafafa] text-sm font-light text-[#0a0a0a] placeholder:text-[#c0c0c0] focus:outline-none focus:border-[#AB5461] focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                        Drop-off Location *
                      </label>
                      <input
                        type="text"
                        name="dropoff"
                        required
                        placeholder="e.g. Burj Al Arab, Dubai"
                        className="w-full px-4 py-3 rounded-2xl border border-[#efefef] bg-[#fafafa] text-sm font-light text-[#0a0a0a] placeholder:text-[#c0c0c0] focus:outline-none focus:border-[#AB5461] focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Passengers */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                      Number of Passengers
                    </label>
                    <input
                      type="number"
                      name="passengers"
                      min={1}
                      max={55}
                      placeholder="e.g. 4"
                      className="w-full px-4 py-3 rounded-2xl border border-[#efefef] bg-[#fafafa] text-sm font-light text-[#0a0a0a] placeholder:text-[#c0c0c0] focus:outline-none focus:border-[#AB5461] focus:bg-white transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                      Additional Notes
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Any special requests, flight number, or additional details..."
                      className="w-full px-4 py-3 rounded-2xl border border-[#efefef] bg-[#fafafa] text-sm font-light text-[#0a0a0a] placeholder:text-[#c0c0c0] focus:outline-none focus:border-[#AB5461] focus:bg-white transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0a0a0a] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#AB5461] transition-all duration-300"
                    >
                      Send Booking Request
                    </button>
                    <a
                      href="https://wa.me/971509200818"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300"
                    >
                      <WAIcon className="w-4 h-4" />
                      Book via WhatsApp
                    </a>
                  </div>

                  <p className="text-[10px] text-[#b0b0b0] font-light">
                    * Required fields. We'll confirm your booking within 30 minutes.
                  </p>
                </form>
              </div>
            </div>

            {/* Side Info Cards */}
            <div className="flex flex-col gap-4">
              <MiniCard tag="Office" title="Visit Our Office">
                <a
                  href="https://goo.gl/maps/EHr2xahUB4ajmKf89"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#7a7a7a] font-light leading-relaxed hover:text-[#AB5461] transition-colors block"
                >
                  Suite# 45, Shraifi One Building,
                  <br />Za'abeel St, Dubai, UAE
                </a>
              </MiniCard>

              <MiniCard tag="Email" title="Send Us an Email">
                <a href="mailto:booking@privilegelimo.com" className="text-sm text-[#7a7a7a] font-light hover:text-[#AB5461] transition-colors block">
                  booking@privilegelimo.com
                </a>
                <p className="text-xs text-[#b0b0b0] font-light mt-2">We respond within 1–2 hours.</p>
              </MiniCard>

              <MiniCard tag="Phone" title="Call Us 24/7">
                <div className="flex flex-col gap-2">
                  <a href="tel:+971509200818" className="text-sm text-[#7a7a7a] font-light hover:text-[#AB5461] transition-colors">+971 50 920 0818</a>
                  <a href="tel:+971509200818" className="text-sm text-[#7a7a7a] font-light hover:text-[#AB5461] transition-colors">+971 50 920 0818</a>
                </div>
              </MiniCard>

              <MiniCard tag="Social" title="Follow Us">
                <div className="flex items-center gap-3 flex-wrap">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-full border border-[#efefef] text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] hover:text-[#AB5461] hover:border-[#AB5461] transition-all duration-200"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </MiniCard>

              <MiniCard tag="Quick Book" title="Prefer WhatsApp?">
                <p className="text-sm text-[#7a7a7a] font-light leading-relaxed mb-4">
                  Skip the form — message us directly for the fastest confirmation.
                </p>
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300"
                >
                  <WAIcon className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </MiniCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ────────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">Our Location</span>
          </div>
          <div className="rounded-[2rem] overflow-hidden border border-[#efefef] shadow-[0_4px_24px_rgba(0,0,0,0.06)] h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7725322075275!2d55.304793375539916!3d25.24458532977937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43f28654be41%3A0x42ce892abda4c3e9!2sPrivilege%20Luxury%20Travel%20LLC!5e0!3m2!1sen!2sae!4v1774699232244!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Privilege Luxury Travel LLC — Suite 45, Shraifi One Building, Za'abeel St, Dubai"
            />
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light mt-4 text-center">
            Suite# 45, Shraifi One Building, Za'abeel St, Dubai, UAE
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
