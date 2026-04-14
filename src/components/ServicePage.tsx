import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fleet } from "@/data/index";
import type { Vehicle } from "@/data/types";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export type ServicePageProps = {
  title: string;
  subtitle: string;
  slug: string;
  heroHeading: string;
  heroSub: string;
  description: string;
  longDescription: string;
  keyPoints: string[];
  whyUs: { title: string; desc: string }[];
  airports?: string[];
  idealFor: string[];
  fleetSlugs: string[];
  faq: { q: string; a: string }[];
};

export default function ServicePage({
  title,
  subtitle,
  slug,
  heroHeading,
  heroSub,
  description,
  longDescription,
  keyPoints,
  whyUs,
  airports,
  idealFor,
  fleetSlugs,
  faq,
}: ServicePageProps) {
  const recommendedVehicles = fleetSlugs
    .map((s) => fleet.find((v) => v.slug === s))
    .filter((v): v is Vehicle => Boolean(v));

  const waUrl = `https://wa.me/971509852818?text=${encodeURIComponent(
    `Hello Privilege Limo 👋\n\nI'm interested in: *${title}*\n\nPlease send me more details and pricing.`
  )}`;

  const headingLines = heroHeading.split("\n");

  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-40 pb-28 bg-white border-b border-[#efefef]">
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]">{title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#AB5461]" />
                <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
                  {subtitle}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[62px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-8">
                {headingLines.map((line, i) => (
                  <span key={i} className={`block ${i === 1 ? "text-[#AB5461] italic" : ""}`}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="text-[#7a7a7a] text-base font-light leading-relaxed mb-10 max-w-md">
                {heroSub}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
                >
                  <WhatsAppIcon />
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+971509852818"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                >
                  +971 50 985 2818
                </a>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-3xl border border-[#f0f0f0] p-10">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#b0b0b0] mb-6 block">
                Service Highlights
              </span>
              <ul className="flex flex-col gap-4">
                {keyPoints.slice(0, 6).map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full border border-[#AB5461] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-[#AB5461]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#3a3a3a] font-light leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT + IDEAL FOR ─────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                About This Service
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] mb-6 tracking-tight leading-tight">
                What makes our {title.split(" ")[0]} service different
              </h2>
              <p className="text-[#7a7a7a] text-sm leading-relaxed font-light mb-5">{description}</p>
              <p className="text-[#7a7a7a] text-sm leading-relaxed font-light">{longDescription}</p>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Ideal For
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] mb-8 tracking-tight leading-tight">
                Who uses this service
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {idealFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-[#efefef] hover:border-[#0a0a0a] transition-colors duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#AB5461] flex-shrink-0" />
                    <span className="text-sm text-[#3a3a3a] font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="py-28 bg-white border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Why Privilege Limo
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Why clients choose us
              <br />
              <span className="text-[#AB5461] italic font-extralight">for {title}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl border border-[#efefef] hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <span className="text-[#AB5461] text-[10px] tracking-[0.4em] font-light mb-5 block">
                  0{i + 1}
                </span>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-[#9a9a9a] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AIRPORTS (airport-transfers only) ─────────────────────── */}
      {airports && airports.length > 0 && (
        <section className="py-20 bg-white border-t border-[#efefef]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-xl mb-12">
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Coverage
              </span>
              <h2 className="text-3xl font-light text-[#0a0a0a] tracking-tight">Airports we serve</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {airports.map((airport) => (
                <div
                  key={airport}
                  className="p-6 rounded-2xl border border-[#efefef] hover:border-[#0a0a0a] transition-all duration-300 text-center"
                >
                  <div className="w-8 h-8 rounded-full border border-[#efefef] flex items-center justify-center mx-auto mb-3">
                    <svg className="w-4 h-4 text-[#AB5461]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#0a0a0a] font-light leading-snug block">{airport}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RECOMMENDED FLEET ─────────────────────────────────────── */}
      {recommendedVehicles.length > 0 && (
        <section className="py-28 bg-white border-t border-[#efefef]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-14">
              <div>
                <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">Our Fleet</span>
                <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight">
                  Recommended vehicles
                  <br />
                  <span className="text-[#c0c0c0] italic font-extralight">for this service</span>
                </h2>
              </div>
              <Link
                href="/#fleet"
                className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors hidden md:flex items-center gap-2"
              >
                View Full Fleet
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recommendedVehicles.map((v) => (
                <Link
                  key={v.id}
                  href={`/fleet/${v.slug}`}
                  className="group p-7 rounded-3xl border border-[#efefef] hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-500 flex flex-col"
                >
                  <div className="h-32 rounded-2xl bg-[#fafafa] mb-5 flex items-center justify-center border border-[#f0f0f0] relative overflow-hidden">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#d5d5d5]">Image</span>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#AB5461]/30 to-transparent" />
                  </div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#9a9a9a] block mb-2">{v.category}</span>
                  <h3 className="text-sm font-semibold text-[#0a0a0a] leading-tight mb-2">{v.name}</h3>
                  <p className="text-xs text-[#9a9a9a] font-light leading-relaxed mb-4 flex-1">
                    {v.description.substring(0, 70)}...
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#f4f4f4]">
                    <span className="text-sm text-[#AB5461] font-light">{v.priceLabel}</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] group-hover:text-[#AB5461] transition-colors flex items-center gap-1">
                      Details
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-white border-t border-[#efefef]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight">
              Common questions about
              <br />
              <span className="text-[#c0c0c0] italic font-extralight">{title}</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-[#ebebeb] overflow-hidden open:border-[#0a0a0a] transition-all duration-300 bg-white"
              >
                <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
                  <span className="text-sm font-medium text-[#0a0a0a] tracking-tight pr-6">{item.q}</span>
                  <span className="text-[#9a9a9a] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-300 leading-none">+</span>
                </summary>
                <p className="px-8 pb-7 text-sm text-[#7a7a7a] leading-relaxed font-light">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-[#efefef]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#efefef] text-center">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">Ready to Book</span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              Book your {title} today
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-10 max-w-sm mx-auto leading-relaxed">
              Available 24/7 across Dubai and the UAE. Fixed pricing, instant WhatsApp confirmation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
              >
                <WhatsAppIcon />
                Book on WhatsApp
              </a>
              <a
                href="tel:+971509852818"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              >
                +971 50 985 2818
              </a>
            </div>
            <div className="mt-10 pt-8 border-t border-[#f0f0f0] grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Call Us", value: "+971 50 985 2818", href: "tel:+971509852818" },
                { label: "WhatsApp", value: "+971 50 985 2818", href: waUrl },
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
                  <span className="text-xs text-[#0a0a0a] font-light group-hover:text-[#AB5461] transition-colors">{c.value}</span>
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
