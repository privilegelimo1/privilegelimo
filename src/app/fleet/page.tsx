import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fleet } from "@/data/index";

export const metadata: Metadata = {
  title: "Our Fleet | Luxury Chauffeur Vehicles Dubai — Privilege Limo",
  description:
    "Browse Privilege Limo's full fleet of luxury chauffeur vehicles in Dubai — Mercedes S-Class, BMW 7 Series, V-Class, Sprinter, and more. All with professional chauffeur. Book 24/7.",
  keywords: [
    "luxury car hire Dubai",
    "chauffeur fleet Dubai",
    "Mercedes S-Class hire Dubai",
    "BMW 7 Series chauffeur Dubai",
    "Mercedes V-Class Dubai",
    "luxury van hire Dubai",
    "VIP car Dubai",
  ],
  alternates: { canonical: "https://privilegelimo.com/fleet" },
};

function getCategories(vehicles: typeof fleet) {
  const cats = Array.from(new Set(vehicles.map((v) => v.category)));
  return ["All", ...cats];
}

export default function FleetPage() {
  const categories = getCategories(fleet);

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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]">Fleet</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">
                  Privilege Luxury Travel
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-8">
                Our luxury
                <br />
                <span className="text-[#c9a84c] italic font-extralight">fleet in Dubai</span>
              </h1>
              <p className="text-[#7a7a7a] text-base font-light leading-relaxed max-w-md mb-10">
                Every vehicle in our fleet is maintained to the highest concierge
                standard — sanitized, inspected, and prepared before every single
                journey. From executive sedans to luxury coaches, choose the perfect
                vehicle for your occasion.
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
              {[
                { value: `${fleet.length}+`, label: "Vehicles available" },
                { value: `${getCategories(fleet).length - 1}`, label: "Vehicle categories" },
                { value: "24/7", label: "Always available" },
                { value: "5★", label: "Service standard" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-8 rounded-3xl border border-[#efefef] text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                >
                  <div className="text-4xl font-extralight text-[#0a0a0a] tracking-tight mb-2">{s.value}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET GRID ────────────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Full Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
                Every vehicle,
                <span className="text-[#c9a84c] italic font-extralight"> every occasion</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-5 py-2 rounded-full border border-[#efefef] text-[10px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Group by category */}
          {categories.slice(1).map((cat) => {
            const vehicles = fleet.filter((v) => v.category === cat);
            return (
              <div key={cat} className="mb-20">
                {/* Category heading */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-6 bg-[#c9a84c]" />
                  <h3 className="text-[10px] tracking-[0.45em] uppercase text-[#c9a84c] font-light">
                    {cat}
                  </h3>
                  <div className="h-px flex-1 bg-[#f0f0f0]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c0c0c0] font-light">
                    {vehicles.length} vehicle{vehicles.length > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {vehicles.map((v) => (
                    <div
                      key={v.id}
                      className="group rounded-3xl border border-[#efefef] hover:border-[#0a0a0a] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden bg-white"
                    >
                      {/* Image */}
                      <Link href={`/fleet/${v.slug}`} className="block">
                        <div className="relative h-52 bg-[#fafafa] overflow-hidden">
                          {v.image ? (
                            <Image
                              src={v.image}
                              alt={v.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-[10px] tracking-[0.3em] uppercase text-[#d5d5d5]">
                                Vehicle Image
                              </span>
                            </div>
                          )}
                          {v.badge && (
                            <span className="absolute top-4 left-4 text-[9px] tracking-[0.3em] uppercase bg-[#0a0a0a] text-white px-3 py-1.5 rounded-full">
                              {v.badge}
                            </span>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="p-7">
                        <Link href={`/fleet/${v.slug}`} className="block">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <span className="text-[9px] tracking-[0.3em] uppercase text-[#9a9a9a] block mb-1.5">
                                {v.category}
                              </span>
                              <h3 className="text-base font-semibold text-[#0a0a0a] tracking-tight group-hover:text-[#c9a84c] transition-colors duration-300">
                                {v.name}
                              </h3>
                            </div>
                            <span className="text-sm text-[#c9a84c] font-light whitespace-nowrap ml-4 mt-1">
                              {v.priceLabel}
                            </span>
                          </div>

                          <p className="text-xs text-[#9a9a9a] font-light leading-relaxed mb-5">
                            {v.description.substring(0, 85)}...
                          </p>

                          {/* Specs row */}
                          <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#f5f5f5]">
                            <div className="flex items-center gap-1.5">
                              <svg className="w-3.5 h-3.5 text-[#b0b0b0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                              <span className="text-[10px] text-[#7a7a7a] font-light">{v.passengers} pax</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <svg className="w-3.5 h-3.5 text-[#b0b0b0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                              </svg>
                              <span className="text-[10px] text-[#7a7a7a] font-light">{v.luggage} bags</span>
                            </div>
                            {v.features.slice(0, 1).map((f) => (
                              <span key={f} className="text-[9px] tracking-[0.15em] uppercase text-[#b0b0b0] font-light truncate">
                                · {f}
                              </span>
                            ))}
                          </div>
                        </Link>

                        {/* CTA row */}
                        <div className="flex items-center justify-between">
                          <Link
                            href={`/fleet/${v.slug}`}
                            className="text-[10px] tracking-[0.25em] uppercase text-[#0a0a0a] hover:text-[#c9a84c] transition-colors flex items-center gap-2"
                          >
                            View Details
                            <svg
                              className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </Link>
                          <a
                            href={`https://wa.me/971509200818?text=${encodeURIComponent(
                              `Hello Privilege Limo\n\nI'd like to book the *${v.name}*\n\nPlease send pricing and availability.`
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[9px] tracking-[0.2em] uppercase text-[#25D366] border border-[#25D366]/30 px-4 py-2 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300"
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── STANDARDS STRIP ───────────────────────────────────────── */}
      <section className="py-20 border-t border-[#efefef] bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "01", title: "25-Point Inspection", desc: "Every vehicle checked before every journey." },
              { num: "02", title: "Deep Cleaned", desc: "Sanitized to concierge standards, every time." },
              { num: "03", title: "Uniformed Chauffeur", desc: "Professional, licensed, English-speaking." },
              { num: "04", title: "Fixed Pricing", desc: "Confirmed upfront — no hidden charges ever." },
            ].map((s) => (
              <div key={s.num} className="p-7 rounded-3xl bg-white border border-[#efefef]">
                <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] font-light mb-4 block">{s.num}</span>
                <h3 className="text-sm font-semibold text-[#0a0a0a] mb-2 tracking-tight">{s.title}</h3>
                <p className="text-xs text-[#9a9a9a] font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-24 border-t border-[#efefef]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#efefef] text-center shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Not Sure Which Vehicle?
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              We'll recommend the
              <br />
              <span className="text-[#c9a84c] italic font-extralight">perfect vehicle for you</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-10 max-w-sm mx-auto leading-relaxed">
              Tell us your occasion, group size, and budget — and we'll match you with the ideal vehicle from our fleet instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971509200818?text=Hello%20Privilege%20Limo%0A%0AI%27d%20like%20help%20choosing%20the%20right%20vehicle%20for%20my%20journey."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
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
