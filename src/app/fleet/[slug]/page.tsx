import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVehiclesByClassSlug } from "@/data/index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Class Info ────────────────────────────────────────────────
const classInfo: Record<string, { label: string; description: string; heroImage: string }> = {
  "business-class": {
    label: "Business Class",
    description:
      "Executive sedans and MPVs offering premium comfort and style. Perfect for corporate transfers, business meetings, and airport pickups across Dubai, Abu Dhabi, and Sharjah.",
    heroImage: "/images/fleet/audi-a6-1.webp",
  },
  "first-class": {
    label: "First Class",
    description:
      "The absolute pinnacle of chauffeur-driven luxury in the UAE. Mercedes S 500 and BMW 7 Series — reserved for clients who accept nothing but the finest.",
    heroImage: "/images/fleet/mercedes-s500-1.webp",
  },
  "business-van": {
    label: "Business Van",
    description:
      "Spacious luxury MPVs for groups, families, and travellers with extra luggage. Comfort and class for up to 7 passengers across Dubai, Abu Dhabi, and Sharjah.",
    heroImage: "/images/fleet/mercedes-v300-tiffany-1.webp",
  },
  "mercedes-sprinter-luxury-van": {
    label: "Mercedes Sprinter Luxury Van",
    description:
      "Premium Mercedes Sprinter vans for large groups. The benchmark for group airport transfers and corporate events across Dubai, Abu Dhabi, and Sharjah.",
    heroImage: "/images/fleet/mercedes-sprinter-19-1.webp",
  },
  "mercedes-sprinter-luxury-vip": {
    label: "Mercedes Sprinter Luxury VIP",
    description:
      "Bespoke VIP Sprinter interiors handcrafted for the most discerning clients — starlight ceilings, champagne fridges, and first-class cabin finishes.",
    heroImage: "/images/fleet/mercedes-sprinter-avant-garde-1.webp",
  },
  "luxury-suv": {
    label: "Luxury SUV",
    description:
      "Bold, spacious, and commanding. GMC Yukon Denali, Cadillac Escalade, and Range Rover for families and executive groups who need presence and practicality.",
    heroImage: "/images/fleet/cadillac-escalade-1.webp",
  },
  "rolls-royce": {
    label: "Rolls-Royce",
    description:
      "The ultimate expression of automotive prestige across the UAE. Rolls-Royce Ghost and Cullinan with a professional chauffeur for occasions that demand perfection.",
    heroImage: "/images/fleet/rolls-royce-cullinan-1.webp",
  },
  "stretch-limousine": {
    label: "Stretch Limousine",
    description:
      "Make the grandest of entrances. Our stretch limousines are the ultimate statement for weddings, VIP events, and celebrations across the UAE.",
    heroImage: "/images/fleet/gmc-yukon-limousine-1.webp",
  },
  "standard-bus": {
    label: "Standard Bus",
    description:
      "Reliable group transport for every occasion — Toyota Coaster 21 Seater and Hiace 11 Seater for corporate events, airport transfers, and tours.",
    heroImage: "/images/fleet/toyota-hiace-11-1.webp",
  },
  "luxury-coach-bus": {
    label: "Luxury Coach Bus",
    description:
      "Premium luxury coaches for large group travel. 35 Seater and 50 Seater with underfloor luggage, onboard Wi-Fi, and reclining seats.",
    heroImage: "/images/fleet/50-seater-luxury-coach-1.webp",
  },
};

// ─── Static Params ─────────────────────────────────────────────
export async function generateStaticParams() {
  return Object.keys(classInfo).map((slug) => ({ slug }));
}

// ─── Metadata ──────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const info = classInfo[slug];
  if (!info) return {};
  return {
    title: `${info.label} Chauffeur Dubai | Privilege Limo`,
    description: info.description,
    alternates: {
      canonical: `https://www.privilegelimo.com/fleet/${slug}`,
    },
    openGraph: {
      title: `${info.label} Chauffeur Dubai | Privilege Limo`,
      description: info.description,
      url: `https://www.privilegelimo.com/fleet/${slug}`,
      images: [{ url: info.heroImage, width: 1200, height: 630, alt: info.label }],
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────
export default async function FleetClassPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const info = classInfo[slug];
  if (!info) notFound();

  const vehicles = getVehiclesByClassSlug(slug);

  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-[340px] sm:h-[480px] flex items-end overflow-hidden pt-20">
        <Image
          src={info.heroImage}
          alt={`${info.label} chauffeur Dubai`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5">
            <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/fleet" className="text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors">
              Fleet
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/80">
              {info.label}
            </span>
          </div>

          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[#e8a4a0] text-[10px] tracking-[0.5em] uppercase font-light">
              {vehicles.length} vehicle{vehicles.length !== 1 ? "s" : ""}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight max-w-2xl">
            {info.label}
            <br />
            <span className="text-[#e8a4a0] italic font-extralight">
              Chauffeur Dubai
            </span>
          </h1>
          <p className="text-white/60 mt-3 max-w-xl text-sm font-light leading-relaxed">
            {info.description}
          </p>
        </div>
      </section>

      {/* ── VEHICLES GRID ─────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-[#AB5461]/4 to-[#ab5461]/7">
        <div className="max-w-7xl mx-auto px-6">

          {vehicles.length === 0 ? (
            <div className="flex flex-col items-center text-center py-24">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#b0b0b0] mb-3">No vehicles</p>
              <p className="text-sm text-[#9a9a9a] font-light mb-6">
                No vehicles are currently listed in this class.
              </p>
              <Link
                href="/fleet"
                className="text-[11px] tracking-[0.3em] uppercase text-[#AB5461] border border-[#AB5461]/30 px-6 py-3 rounded-full hover:bg-[#AB5461] hover:text-white transition-all"
              >
                View All Fleet
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((car) => (
                <div
                  key={car.slug}
                  className="group rounded-[2rem] border border-[#efefef] bg-white overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(171,84,97,0.10)] hover:border-[#AB5461]/20 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-[220px] bg-[#f8f4f5] overflow-hidden">
                    <Image
                      src={car.images?.[0] ?? ""}
                      alt={`${car.name} chauffeur Dubai`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-[#AB5461]">
                      {car.category}
                    </span>
                    {car.badge && (
                      <span className="absolute top-4 right-4 rounded-full bg-[#AB5461] px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white">
                        {car.badge}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h2 className="text-lg font-light text-[#0a0a0a] tracking-tight">
                        {car.name}
                      </h2>
                      <span className="shrink-0 text-sm font-semibold text-[#AB5461]">
                        {car.transferPrice}
                      </span>
                    </div>

                    <p className="text-xs text-[#b3b3b3] mb-3 font-light">
                      Up to {car.passengers} passenger{car.passengers > 1 ? "s" : ""} · {car.luggage} bags
                    </p>

                    {/* Pricing rows */}
                    <div className="rounded-2xl bg-[#fafafa] border border-[#f0f0f0] px-4 py-3 mb-5 space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] tracking-[0.15em] uppercase text-[#b0b0b0]">5 Hour</span>
                        <span className="text-xs font-medium text-[#5a5a5a]">{car.price5hr}</span>
                      </div>
                      <div className="h-px bg-[#efefef]" />
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] tracking-[0.15em] uppercase text-[#b0b0b0]">10 Hour</span>
                        <span className="text-xs font-medium text-[#5a5a5a]">{car.price10hr}</span>
                      </div>
                    </div>

                    <p className="text-[13px] leading-[1.85] text-[#777] font-light mb-6 line-clamp-2">
                      {car.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/fleet/${slug}/${car.slug}`}
                        className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-[#AB5461] text-xs font-medium text-white hover:bg-[#964754] transition-colors"
                      >
                        View & Book
                      </Link>
                      <a
                        href={`https://wa.me/971509200818?text=${encodeURIComponent(
                          `Hi, I'd like to book the ${car.name}. Can you share availability and pricing?`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-full border border-[#efefef] text-xs font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-[#AB5461]/7 to-[#ab5461]/3">
        <div className="max-w-3xl mx-auto px-6 rounded-3xl md:p-16 border border-[#AB4561]/50 text-center">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
            Need Help Choosing?
          </span>
          <h2 className="text-3xl font-light text-[#0a0a0a] tracking-tight mb-4">
            Our team is available
            <br />
            <span className="text-[#AB5461] italic font-extralight">24/7 to assist you</span>
          </h2>
          <p className="text-sm text-[#9a9a9a] font-light mb-10 max-w-sm mx-auto">
            Not sure which vehicle is right for your journey? Call or message us instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971509200818"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+971509200818"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#AB5461] text-[#AB5461] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#AB5461] hover:text-white transition-all"
            >
              +971 50 920 0818
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}