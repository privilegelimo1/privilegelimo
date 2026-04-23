import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getVehicleBySlug, fleet } from "@/data/index";
import { buildWhatsAppURL, buildQuickEnquiry } from "@/lib/whatsapp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FleetBookingForm from "@/components/FleetBookingForm";

// ─── generateStaticParams ──────────────────────────────────────
export async function generateStaticParams() {
  return fleet.map((v) => ({
    slug: v.classSlug,  // e.g. "business-class"
    car: v.slug,        // e.g. "mercedes-s500"
  }));
}

// ─── generateMetadata ──────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; car: string }>;
}): Promise<Metadata> {
  const { car } = await params;
  const vehicle = getVehicleBySlug(car);
  if (!vehicle) return {};
  const imageUrl = vehicle.images?.[0] || "";
  const description =
    vehicle.description ||
    `Hire a ${vehicle.name} with professional chauffeur in Dubai. Luxury travel with Privilege Limo.`;
  return {
    title: `${vehicle.name} Chauffeur Service Dubai`,
    description: `${description} From ${vehicle.priceLabel}. Book now - +971 50 920 0818.`,
    keywords: [
      `${vehicle.name} hire Dubai`,
      `${vehicle.name} chauffeur Dubai`,
      `${vehicle.category} Dubai`,
      "luxury car hire Dubai",
      "chauffeur service Dubai",
      "luxury chauffeur Dubai",
    ],
    alternates: {
      canonical: `https://www.privilegelimo.com/fleet/${vehicle.classSlug}/${vehicle.slug}`,
    },
    openGraph: {
      title: `${vehicle.name} Dubai`,
      description,
      url: `https://www.privilegelimo.com/fleet/${vehicle.classSlug}/${vehicle.slug}`,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: vehicle.name }]
        : [],
    },
  };
}

// ─── WhatsAppIcon ──────────────────────────────────────────────
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Static data ───────────────────────────────────────────────
const standards = [
  {
    title: "Concierge Preparation",
    desc: "Every vehicle is deep cleaned, sanitized, and inspected against a 25-point checklist before each journey.",
  },
  {
    title: "Professional Chauffeur",
    desc: "Your uniformed chauffeur holds a full UAE licence, speaks English, and is trained in executive etiquette.",
  },
  {
    title: "Fixed Pricing",
    desc: "Your fare is confirmed before you travel. No surge pricing, no meters, no surprises on arrival.",
  },
  {
    title: "On-Time Guarantee",
    desc: "We monitor live traffic and adjust routing in real time so you always arrive exactly when you need to.",
  },
];

const faqs = [
  {
    q: "Is the price fixed or metered?",
    a: "All our pricing is fixed and confirmed upfront before your journey begins. There are no meters, no surge charges, and no hidden fees.",
  },
  {
    q: "Can I request this vehicle for an airport transfer?",
    a: "Yes. This vehicle is available for all airport transfers across DXB, DWC, Abu Dhabi, and Sharjah airports with full meet-and-greet service.",
  },
  {
    q: "What is included in the booking?",
    a: "Every booking includes a professional chauffeur, complimentary waiting time, luggage assistance, water on board, and 24/7 support.",
  },
  {
    q: "Can I book by the hour?",
    a: "Yes. Hourly disposal bookings start from 2 hours. Your chauffeur and vehicle are entirely at your disposal for the duration.",
  },
  {
    q: "Is this vehicle available 24/7?",
    a: "Yes. Our entire fleet is available 24 hours a day, 7 days a week — including public holidays and late-night transfers.",
  },
  {
    q: "How do I confirm my booking?",
    a: "Simply message us on WhatsApp or call. We confirm your booking, price, and chauffeur details instantly.",
  },
];

// ─── Page ──────────────────────────────────────────────────────
export default async function FleetDetailPage({
  params,
}: {
  params: Promise<{ slug: string; car: string }>;
}) {
  const { slug, car } = await params;
  const vehicle = getVehicleBySlug(car);
  if (!vehicle) notFound();

  const related = fleet
    .filter((v) => v.category === vehicle.category && v.slug !== vehicle.slug)
    .slice(0, 3);

  const waUrl = buildWhatsAppURL(
    buildQuickEnquiry(`${vehicle.name} - ${vehicle.priceLabel}`)
  );

  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-32 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 lg:items-end">

            {/* Right — hero image: first on mobile, second on desktop */}
            <div className="relative h-[280px] sm:h-[380px] lg:h-[560px] rounded-[32px] lg:rounded-t-[32px] lg:rounded-b-none overflow-hidden order-1 lg:order-2">
              {vehicle.images?.[0] ? (
                <Image
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#f5f5f5] to-[#ebebeb] flex flex-col items-center justify-center gap-3">
                  <svg className="w-12 h-12 text-[#ddd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8c8c8]">
                    {vehicle.name}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              {vehicle.badge && (
                <span className="absolute top-5 left-5 text-[9px] tracking-[0.3em] uppercase bg-[#0a0a0a] text-white px-3 py-1.5 rounded-full">
                  {vehicle.badge}
                </span>
              )}
              {vehicle.priceLabel && (
                <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-5 py-4 min-w-[148px]">
                  <p className="text-xl font-light text-[#AB5461] tracking-tight">{vehicle.priceLabel}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mt-0.5 font-light">
                    {vehicle.priceNote ?? "starting from"}
                  </p>
                </div>
              )}
            </div>

            {/* Left — info: second on mobile, first on desktop */}
            <div className="pb-12 lg:pb-16 pr-0 lg:pr-14 order-2 lg:order-1">

              {/* Breadcrumb — now includes class slug */}
              <div className="flex items-center gap-2 mb-8">
                <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors">
                  Home
                </Link>
                <span className="text-[#ddd]">/</span>
                <Link href="/fleet" className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors">
                  Fleet
                </Link>
                <span className="text-[#ddd]">/</span>
                <Link href={`/fleet/${slug}`} className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors">
                  {slug.replace(/-/g, " ")}
                </Link>
                <span className="text-[#ddd]">/</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#AB5461] font-light">
                  {vehicle.name}
                </span>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 mb-6">
                {vehicle.category && (
                  <span className="text-[9px] tracking-[0.35em] uppercase text-[#9a9a9a] border border-[#ebebeb] px-4 py-1.5 rounded-full">
                    {vehicle.category}
                  </span>
                )}
                {vehicle.badge && (
                  <span className="text-[9px] tracking-[0.35em] uppercase text-[#AB5461] border border-[#AB5461]/30 bg-[#AB5461]/5 px-4 py-1.5 rounded-full">
                    {vehicle.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-light text-[#0a0a0a] tracking-tight leading-[1.08] mb-5">
                {vehicle.name}
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  Chauffeur Dubai
                </span>
              </h1>

              {/* Description */}
              {vehicle.description && (
                <p className="text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg mb-5">
                  {vehicle.description}
                </p>
              )}

              {/* Feature pills */}
              {vehicle.features?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-5 mb-7">
                  {vehicle.features.slice(0, 5).map((f) => (
                    <span
                      key={f}
                      className="text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] bg-[#f7f7f7] px-3 py-1.5 rounded-full border border-[#f0f0f0]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}

              {/* Price + pax */}
              <div className="flex items-stretch gap-3 mb-7">
                {vehicle.priceLabel ? (
                  <div className="flex-1 flex items-baseline gap-2 px-5 py-4 rounded-2xl border border-[#efefef] bg-[#fafafa]">
                    <span className="text-2xl font-light text-[#0a0a0a] tracking-tight">
                      {vehicle.priceLabel}
                    </span>
                    <span className="text-[10px] text-[#b0b0b0] tracking-wide font-light">
                      {vehicle.priceNote ?? "starting from"}
                    </span>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center px-5 py-4 rounded-2xl border border-[#efefef] bg-[#fafafa]">
                    <span className="text-sm text-[#9a9a9a] font-light tracking-wide">
                      Contact us for pricing
                    </span>
                  </div>
                )}
                {vehicle.passengers && (
                  <div className="px-5 py-4 rounded-2xl border border-[#efefef] bg-[#fafafa] text-center min-w-[72px]">
                    <span className="text-xl font-light text-[#0a0a0a] block">{vehicle.passengers}</span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#b0b0b0]">Pax</span>
                  </div>
                )}
                {vehicle.luggage && (
                  <div className="px-5 py-4 rounded-2xl border border-[#efefef] bg-[#fafafa] text-center min-w-[72px]">
                    <span className="text-xl font-light text-[#0a0a0a] block">{vehicle.luggage}</span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#b0b0b0]">Bags</span>
                  </div>
                )}
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap gap-4 mb-7">
                {["Fixed Pricing", "24/7 Available", "Professional Chauffeur"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-[10px] text-[#7a7a7a] font-light">
                    <svg className="w-3 h-3 text-[#AB5461]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white hover:bg-[#20bd5a] transition-colors shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+971509200818"
                  className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
                >
                  +971 50 920 0818
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ─────────────────────────────────────────── */}
      <section className="py-20 border-t border-[#efefef] bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Quick Booking
              </span>
              <h2 className="text-3xl font-light text-[#0a0a0a] tracking-tight leading-tight mb-5">
                Reserve your
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  {vehicle.name}
                </span>
              </h2>
              <p className="text-sm text-[#7a7a7a] font-light leading-relaxed max-w-sm mb-8">
                Fill in your trip details below and we&apos;ll open WhatsApp with everything pre-filled — confirm your booking instantly.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "✓", label: "Fixed price confirmed before travel" },
                  { icon: "✓", label: "Professional uniformed chauffeur" },
                  { icon: "✓", label: "Instant WhatsApp confirmation" },
                  { icon: "✓", label: "Available 24/7 across all UAE" },
                ].map((p) => (
                  <div key={p.label} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-[#AB5461] flex items-center justify-center text-[#AB5461] text-[10px] flex-shrink-0">
                      {p.icon}
                    </span>
                    <span className="text-sm text-[#5a5a5a] font-light">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <FleetBookingForm
              vehicleName={vehicle.name}
              priceLabel={vehicle.priceLabel}
              maxPassengers={vehicle.passengers}
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT + INCLUSIONS ────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                About This Vehicle
              </span>
              <h2 className="text-3xl font-light text-[#0a0a0a] mb-6 tracking-tight leading-tight">
                The {vehicle.name}
                <br />
                <span className="text-[#AB5461] italic font-extralight">experience</span>
              </h2>
              <p className="text-[#7a7a7a] text-sm leading-relaxed font-light mb-5">
                {vehicle.description}
              </p>
              <p className="text-[#7a7a7a] text-sm leading-relaxed font-light mb-5">
                Every journey in the {vehicle.name} is prepared to concierge-level
                standards — sanitized, inspected, and ready to deliver an exceptional
                experience from the moment you step in.
              </p>
              <p className="text-[#9a9a9a] text-sm leading-relaxed font-light">
                Available 24 hours a day across Dubai, Abu Dhabi, Sharjah and all UAE
                emirates — with fixed pricing confirmed before every journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {vehicle.features.map((f) => (
                  <span
                    key={f}
                    className="text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] bg-[#f7f7f7] px-3 py-1.5 rounded-full border border-[#f0f0f0]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Every Booking Includes
              </span>
              <h2 className="text-3xl font-light text-[#0a0a0a] mb-8 tracking-tight leading-tight">
                Standard
                <br />
                <span className="text-[#AB5461] italic font-extralight">inclusions</span>
              </h2>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Professional uniformed chauffeur",
                  "Complimentary waiting time",
                  "Real-time traffic & flight monitoring",
                  "Luggage assistance door to door",
                  "Fixed price — no hidden fees",
                  "24/7 customer support",
                  "Sanitized & inspected vehicle",
                  "Complimentary water on board",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-[#f5f5f5] hover:border-[#AB5461]/30 transition-colors duration-300"
                  >
                    <div className="w-5 h-5 rounded-full border border-[#AB5461] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#AB5461]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#3a3a3a] font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STANDARDS ─────────────────────────────────────────────── */}
      <section className="py-24 border-t border-[#efefef] bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Our Standards
            </span>
            <h2 className="text-3xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              What sets every journey
              <br />
              <span className="text-[#AB5461] italic font-extralight">apart</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {standards.map((s, i) => (
              <div
                key={s.title}
                className="p-8 rounded-3xl bg-white border border-[#efefef] hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <span className="text-[#AB5461] text-[10px] tracking-[0.4em] font-light mb-5 block">
                  0{i + 1}
                </span>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-[#9a9a9a] leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFECT FOR ───────────────────────────────────────────── */}
      <section className="py-24 border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Perfect For
            </span>
            <h2 className="text-3xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Where the {vehicle.name}
              <br />
              <span className="text-[#AB5461] italic font-extralight">excels</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Airport Transfers", sub: "DXB · DWC · AUH · SHJ", href: "/services/airport-transfer" },
              { label: "Corporate Travel", sub: "Executive · Business · VIP", href: "/services/corporate-chauffeur-services" },
              { label: "Weddings & Events", sub: "Ceremonies · Galas · Occasions", href: "/services/wedding-limo-services" },
              { label: "City Tours", sub: "Hourly · Daily · Sightseeing", href: "/services/private-driver-for-sightseeing-services" },
            ].map((u, i) => (
              <Link
                key={u.label}
                href={u.href}
                className="group p-8 rounded-3xl border border-[#efefef] hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col gap-3"
              >
                <span className="text-[#AB5461] text-[10px] tracking-[0.4em] font-light">
                  0{i + 1}
                </span>
                <h3 className="text-sm font-semibold text-[#0a0a0a] tracking-tight group-hover:text-[#AB5461] transition-colors duration-300">
                  {u.label}
                </h3>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#b0b0b0] font-light">{u.sub}</p>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#9a9a9a] group-hover:text-[#AB5461] transition-colors mt-auto flex items-center gap-1 pt-2">
                  Learn more
                  <svg className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST + TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-24 border-t border-[#efefef] bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Why Privilege Limo
              </span>
              <h2 className="text-3xl font-light text-[#0a0a0a] tracking-tight leading-tight mb-6">
                Dubai&apos;s most trusted
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  luxury chauffeur service
                </span>
              </h2>
              <p className="text-[#7a7a7a] text-sm font-light leading-relaxed mb-5">
                We built Privilege Luxury Travel on a single belief — that luxury
                ground transportation in Dubai should be genuinely exceptional, not
                just acceptably convenient.
              </p>
              <p className="text-[#7a7a7a] text-sm font-light leading-relaxed mb-10">
                From the moment you book to the moment you arrive, every detail is
                handled with the care and precision of a five-star concierge service.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "10+", label: "Years" },
                  { value: "50+", label: "Vehicles" },
                  { value: "24/7", label: "Available" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-5 rounded-2xl bg-white border border-[#efefef]">
                    <div className="text-2xl font-light text-[#AB5461] mb-1">{s.value}</div>
                    <div className="text-[9px] tracking-[0.3em] uppercase text-[#9a9a9a]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  quote: "Absolutely flawless from start to finish. The car was immaculate, the chauffeur was professional, and we arrived exactly on time.",
                  name: "James R.",
                  role: "CEO, London",
                },
                {
                  quote: "The best chauffeur experience I have had in Dubai. Incredibly smooth, the vehicle was stunning, and the service was five-star throughout.",
                  name: "Fatima A.",
                  role: "Dubai Resident",
                },
                {
                  quote: "We used Privilege Limo for our entire conference fleet. Every single vehicle arrived on time and every delegate was impressed.",
                  name: "Marcus T.",
                  role: "Events Director, Dubai",
                },
              ].map((t) => (
                <div key={t.name} className="p-7 rounded-2xl bg-white border border-[#efefef] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-[#AB5461]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#5a5a5a] font-light leading-relaxed italic mb-4">
                    &quot;{t.quote}&quot;
                  </p>
                  <div>
                    <p className="text-xs font-medium text-[#0a0a0a]">{t.name}</p>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a] mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-28 border-t border-[#efefef]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">FAQ</span>
            <h2 className="text-3xl font-light text-[#0a0a0a] tracking-tight">
              Common questions about
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                the {vehicle.name}
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-[#ebebeb] overflow-hidden open:border-[#0a0a0a] transition-all duration-300 bg-white"
              >
                <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
                  <span className="text-sm font-medium text-[#0a0a0a] tracking-tight pr-6">{faq.q}</span>
                  <span className="text-[#9a9a9a] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-300 leading-none">+</span>
                </summary>
                <p className="px-8 pb-7 text-sm text-[#7a7a7a] leading-relaxed font-light">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED VEHICLES ──────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-28 bg-[#fafafa] border-t border-[#efefef]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                  Explore More
                </span>
                <h2 className="text-3xl font-light text-[#0a0a0a] tracking-tight">
                  Similar vehicles
                  <br />
                  <span className="text-[#AB5461] italic font-extralight">you might prefer</span>
                </h2>
              </div>
              <Link
                href="/fleet"
                className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors hidden md:flex items-center gap-2"
              >
                View Full Fleet
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((v) => (
                <Link
                  key={v.slug}
                  href={`/fleet/${v.classSlug}/${v.slug}`}  
                  className="group bg-white rounded-3xl border border-[#efefef] hover:border-[#0a0a0a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-500 overflow-hidden"
                >
                  <div className="h-44 relative overflow-hidden bg-[#f5f5f5]">
                    {v.images?.[0] ? (
                      <Image
                        src={v.images[0]}
                        alt={v.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] tracking-[0.3em] uppercase text-[#d5d5d5]">
                        Image
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#9a9a9a] block mb-2">
                      {v.category}
                    </span>
                    <div className="flex items-center justify-between mb-2 gap-4">
                      <h3 className="text-sm font-semibold text-[#0a0a0a]">{v.name}</h3>
                      <span className="text-sm text-[#AB5461] font-light whitespace-nowrap">
                        {v.priceLabel || "Contact"}
                      </span>
                    </div>
                    <p className="text-xs text-[#9a9a9a] font-light leading-relaxed mb-5">
                      {(v.description || "").substring(0, 75)}...
                    </p>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#0a0a0a] group-hover:text-[#AB5461] transition-colors flex items-center gap-2">
                      View Details
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-[#efefef]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#efefef] text-center shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Ready to Book
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              Reserve your {vehicle.name}
              <br />
              <span className="text-[#AB5461] italic font-extralight">today</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-10 max-w-sm mx-auto leading-relaxed">
              Available 24/7 across Dubai and the UAE. Fixed pricing, instant
              WhatsApp confirmation, and a chauffeur who exceeds every expectation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
              >
                <WhatsAppIcon />
                Book on WhatsApp
              </a>
              <a
                href="tel:+971509200818"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#AB5461] text-[#AB5461] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#AB5461] hover:text-white transition-all duration-300"
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
                  className="group p-5 rounded-2xl border border-[#f0f0f0] hover:border-[#AB5461] transition-all duration-300"
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