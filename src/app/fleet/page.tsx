import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FleetGrid from "@/components/FleetGrid";
import { fleet, fleetCategories } from "@/data";

export const metadata: Metadata = {
  title: "Our Fleet | Luxury Chauffeur Vehicles Dubai",
  description:
    "Browse Privilege Limo's full fleet of luxury chauffeur vehicles in Dubai - Mercedes S-Class, BMW 7 Series, V-Class, Sprinter, and more. All with professional chauffeur. Book 24/7.",
  keywords: [
    "luxury car hire Dubai",
    "chauffeur fleet Dubai",
    "Mercedes S-Class hire Dubai",
    "BMW 7 Series chauffeur Dubai",
    "Mercedes V-Class Dubai",
    "luxury van hire Dubai",
    "VIP car Dubai",
  ],
  alternates: { canonical: "https://www.privilegelimo.com/fleet" },
};

const WA_SVG = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const stats = [
  { value: `${fleet.length}+`, label: "Vehicles" },
  { value: `${fleetCategories.length}`, label: "Classes" },
  { value: "24/7", label: "Available" },
  { value: "5★", label: "Standard" },
];

export default function FleetPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-32 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 lg:items-end">

            {/* Left */}
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
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#AB5461] font-light">
                  Fleet
                </span>
              </div>

              {/* Label */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#AB5461]" />
                <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
                  Privilege Luxury Travel
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extralight text-[#0a0a0a] tracking-tight leading-[1.08]">
                Our luxury
                <br />
                <span className="text-[#AB5461] italic font-extralight">fleet in Dubai</span>
              </h1>

              <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg">
                Every vehicle in our fleet is maintained to the highest concierge
                standard — sanitized, inspected, and prepared before every single
                journey. From executive sedans to luxury coaches, choose the perfect
                vehicle for your occasion.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white hover:bg-[#20bd5a] transition-colors"
                >
                  {WA_SVG}
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+971509200818"
                  className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
                >
                  +971 50 920 0818
                </a>
              </div>

              {/* Trust pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["Professional chauffeur", "Fixed pricing", "24/7 available", "All UAE"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f9f4f5] border border-[#f0e8ea] px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-light text-[#AB5461]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — hero image flush to bottom */}
            <div className="relative h-[340px] sm:h-[420px] lg:h-[520px] rounded-t-[32px] overflow-hidden">
              <Image
                src="/images/fleet/rolls-royce-cullinan-1.webp"
                alt="Luxury chauffeur fleet Dubai — Privilege Limo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* Stats overlay row */}
              <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 text-center"
                  >
                    <p className="text-xl font-extralight text-[#AB5461] tracking-tight leading-none">
                      {s.value}
                    </p>
                    <p className="text-[9px] tracking-[0.25em] uppercase text-[#999] mt-1 font-light leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FLEET GRID ────────────────────────────────────────────── */}
      <FleetGrid fleet={fleet} categories={fleetCategories} />

      {/* ── STANDARDS STRIP ───────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-[#AB5461]/10 to-[#ab5461]/6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "01", title: "25-Point Inspection", desc: "Every vehicle checked before every journey." },
              { num: "02", title: "Deep Cleaned", desc: "Sanitized to concierge standards, every time." },
              { num: "03", title: "Uniformed Chauffeur", desc: "Professional, licensed, English-speaking." },
              { num: "04", title: "Fixed Pricing", desc: "Confirmed upfront — no hidden charges ever." },
            ].map((s) => (
              <div key={s.num} className="p-7 rounded-3xl bg-white border border-[#efefef]">
                <span className="text-[#AB5461] text-[10px] tracking-[0.4em] font-light mb-4 block">{s.num}</span>
                <h3 className="text-sm font-semibold text-[#0a0a0a] mb-2 tracking-tight">{s.title}</h3>
                <p className="text-xs text-[#9a9a9a] font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-[#AB5461]/6 to-[#ab5461]/3">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#AB5461]/40 text-center shadow-[0_4px_30px_rgba(0,0,0,0.10)]">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Not Sure Which Vehicle?
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              We'll recommend the
              <br />
              <span className="text-[#AB5461] italic font-extralight">perfect vehicle for you</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-10 max-w-sm mx-auto leading-relaxed">
              Tell us your occasion, group size, and budget — and we'll match you
              with the ideal vehicle from our fleet instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971509200818?text=Hello%20Privilege%20Limo%0A%0AI%27d%20like%20help%20choosing%20the%20right%20vehicle%20for%20my%20journey."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
              >
                {WA_SVG}
                Chat on WhatsApp
              </a>
              <a
                href="tel:+971509200818"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#AB5461] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
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