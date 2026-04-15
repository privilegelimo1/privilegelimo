"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import fleet from "@/data/fleet.json";

type FleetItem = (typeof fleet)[number];

type Props = {
  classSlug?: string;
  heading?: string;
  subheading?: string;
};

function WhatsAppIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function getRandomThree<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, 3);
}

// Skeleton card shown during SSR and before client hydrates
function SkeletonCard() {
  return (
    <div className="rounded-[2rem] border border-[#efefef] bg-white overflow-hidden">
      <div className="h-[220px] bg-[#f3f0ee] animate-pulse" />
      <div className="p-7 space-y-3">
        <div className="h-4 bg-[#f3f0ee] rounded-full animate-pulse w-3/4" />
        <div className="h-3 bg-[#f3f0ee] rounded-full animate-pulse w-1/2" />
        <div className="h-3 bg-[#f3f0ee] rounded-full animate-pulse w-full" />
        <div className="h-3 bg-[#f3f0ee] rounded-full animate-pulse w-5/6" />
        <div className="flex gap-3 pt-2">
          <div className="flex-1 h-11 bg-[#f3f0ee] rounded-full animate-pulse" />
          <div className="w-24 h-11 bg-[#f3f0ee] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function FleetPreview({
  classSlug,
}: Props) {
  const [vehicles, setVehicles] = useState<FleetItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const pool = classSlug
      ? fleet.filter((v) => v.classSlug === classSlug)
      : fleet;
    setVehicles(getRandomThree(pool));
    setMounted(true);
  }, [classSlug]);

  return (
    <section className="py-1">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {!mounted
            ? // SSR + pre-hydration: render skeletons (no random data, no mismatch)
              [0, 1, 2].map((i) => <SkeletonCard key={i} />)
            : vehicles.map((car) => (
                <div
                  key={car.slug}
                  className="group rounded-[2rem] border border-[#efefef] bg-white overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(171,84,97,0.10)] hover:border-[#AB5461]/20 transition-all duration-300"
                >
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
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-lg font-light text-[#0a0a0a] tracking-tight">{car.name}</h3>
                      <span className="shrink-0 text-sm font-semibold text-[#AB5461]">{car.transferPrice}</span>
                    </div>
                    <p className="text-xs text-[#b3b3b3] mb-4 font-light">
                      Up to {car.passengers} passenger{car.passengers > 1 ? "s" : ""} · {car.luggage} bags
                    </p>
                    <p className="text-[13px] leading-[1.85] text-[#777] font-light mb-6 line-clamp-2">
                      {car.desc}
                    </p>
                    <div className="flex gap-3">
                      <Link
                        href={`/fleet/${car.classSlug}/${car.slug}`}
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
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full border border-[#efefef] text-xs font-medium text-[#0a0a0a] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                      >
                        <WhatsAppIcon /> Book
                      </a>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Bottom CTA — all screen sizes */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#0a0a0a] border border-[#0a0a0a] px-10 py-4 rounded-full hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
          >
            View Full Fleet
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}