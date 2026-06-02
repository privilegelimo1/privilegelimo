import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// ─── Static Params ─────────────────────────────────────────────
export async function generateStaticParams() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data } = await supabase.from("vehicle_categories").select("slug");
  return (data ?? []).map((c) => ({ slug: c.slug }));
}

export const dynamicParams = true;

// ─── Metadata ──────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: category } = await supabase
    .from("vehicle_categories")
    .select("slug, display_name, description, hero_image, meta_title, meta_description, og_image") // ← add new fields
    .eq("slug", slug)
    .single();
  if (!category) return {};

  // OG image priority: og_image → hero_image → default
  const ogImage =
    category.og_image ??
    category.hero_image ??
    "https://www.privilegelimo.com/og-image.jpg";

  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `https://www.privilegelimo.com${ogImage}`;

  // Title/desc priority: custom SEO fields → auto-generated fallback
  const metaTitle       = category.meta_title       ?? `${category.display_name} Chauffeur Dubai`
  const metaDescription = category.meta_description ?? category.description ?? ""

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `https://www.privilegelimo.com/fleet/${slug}` },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.privilegelimo.com/fleet/${slug}`,
      siteName: "Privilege Limo",
      locale: "en_AE",
      type: "website",
      images: [{ url: fullOgImage, width: 1200, height: 630, alt: metaTitle, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      site: "@privilegeuae",
      images: [fullOgImage],
    },
    other: { "og:logo": "https://www.privilegelimo.com/logo.webp" },
  };
}

// ─── Page ──────────────────────────────────────────────────────
export default async function FleetClassPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const [{ data: category, error }, { data: vehicles }] = await Promise.all([
    supabase
      .from("vehicle_categories")
      .select("slug, display_name, description, hero_image")
      .eq("slug", slug)
      .single(),
    supabase
      .from("vehicles")
      .select("*")
      .eq("class_slug", slug)
      .eq("is_active", true)
      .order("sort_order"),
  ]);

  console.log("[fleet/slug] slug:", slug, "| category:", category, "| error:", error);

  if (!category) notFound();

  const heroImage = category.hero_image ?? "/images/fleet/default.webp";
  const cars = vehicles ?? [];

  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-[340px] sm:h-[480px] flex items-end overflow-hidden pt-20">
        <Image
          src={heroImage}
          alt={`${category.display_name} chauffeur Dubai`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <div className="flex items-center gap-2 mb-5">
            <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/fleet" className="text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors">Fleet</Link>
            <span className="text-white/30">/</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/80">{category.display_name}</span>
          </div>
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[#e8a4a0] text-[10px] tracking-[0.5em] uppercase font-light">
              {cars.length} vehicle{cars.length !== 1 ? "s" : ""}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight max-w-2xl">
            {category.display_name}
            <br />
            <span className="text-[#e8a4a0] italic font-extralight">Chauffeur Dubai</span>
          </h1>
          {category.description && (
            <p className="text-white/60 mt-3 max-w-xl text-sm font-light leading-relaxed">
              {category.description}
            </p>
          )}
        </div>
      </section>

      {/* ── VEHICLES GRID ─────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-[#AB5461]/4 to-[#ab5461]/7">
        <div className="max-w-7xl mx-auto px-6">
          {cars.length === 0 ? (
            <div className="flex flex-col items-center text-center py-24">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#0a0a0a] mb-3">No vehicles</p>
              <p className="text-sm text-[#0a0a0a] font-light mb-6">No vehicles are currently listed in this class.</p>
              <Link
                href="/fleet"
                className="text-[11px] tracking-[0.3em] uppercase text-[#AB5461] border border-[#AB5461]/30 px-6 py-3 rounded-full hover:bg-[#AB5461] hover:text-white transition-all"
              >
                View All Fleet
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <div
                  key={car.slug}
                  className="group rounded-[2rem] border border-[#efefef] bg-white overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(171,84,97,0.10)] hover:border-[#AB5461]/20 transition-all duration-300"
                >
                  <div className="relative h-[220px] bg-[#f8f4f5] overflow-hidden">
                    {car.images?.[0] && (
                      <Image
                        src={car.images[0]}
                        alt={`${car.name} chauffeur Dubai`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    )}
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-[#AB5461]">
                      {category.display_name}
                    </span>
                    {car.is_featured && (
                      <span className="absolute top-4 right-4 rounded-full bg-[#AB5461] px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h2 className="text-lg font-light text-[#0a0a0a] tracking-tight">{car.name}</h2>
                      <span className="shrink-0 text-sm font-semibold text-[#AB5461]">{car.transfer_price}</span>
                    </div>
                    <p className="text-xs text-[#b3b3b3] mb-3 font-light">
                      Up to {car.passengers} passenger{car.passengers > 1 ? "s" : ""} · {car.luggage} bags
                    </p>

                    {(car.price_5hr || car.price_10hr) && (
                      <div className="rounded-2xl bg-[#fafafa] border border-[#f0f0f0] px-4 py-3 mb-5 space-y-1.5">
                        {car.price_5hr && (
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] tracking-[0.15em] uppercase text-[#0a0a0a]">5 Hour</span>
                            <span className="text-xs font-medium text-[#5a5a5a]">{car.price_5hr}</span>
                          </div>
                        )}
                        {car.price_5hr && car.price_10hr && <div className="h-px bg-[#efefef]" />}
                        {car.price_10hr && (
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] tracking-[0.15em] uppercase text-[#0a0a0a]">10 Hour</span>
                            <span className="text-xs font-medium text-[#5a5a5a]">{car.price_10hr}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <p className="text-[13px] leading-[1.85] text-[#777] font-light mb-6 line-clamp-2">
                      {car.description}
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
          <span className="text-[10px] tracking-[0.45em] uppercase text-[#0a0a0a] mb-5 block">Need Help Choosing?</span>
          <h2 className="text-3xl font-light text-[#0a0a0a] tracking-tight mb-4">
            Our team is available
            <br />
            <span className="text-[#AB5461] italic font-extralight">24/7 to assist you</span>
          </h2>
          <p className="text-sm text-[#0a0a0a] font-light mb-10 max-w-sm mx-auto">
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