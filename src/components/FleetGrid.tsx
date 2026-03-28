"use client";

import Link from "next/link";
import Image from "next/image";
import { fleet } from "@/data/index";
import BookingButton from "@/components/BookingButton";

type Props = {
  fleet: typeof import("@/data/index").fleet;
  categories: string[];
};

export default function FleetGrid({ fleet, categories }: Props) {
  return (
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
                <h3 className="text-[10px] tracking-[0.45em] uppercase text-[#c9a84c] font-light">{cat}</h3>
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
                            <span className="text-[10px] tracking-[0.3em] uppercase text-[#d5d5d5]">Vehicle Image</span>
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
                      <div className="flex items-center justify-between mb-4">
                        <Link
                          href={`/fleet/${v.slug}`}
                          className="text-[10px] tracking-[0.25em] uppercase text-[#0a0a0a] hover:text-[#c9a84c] transition-colors flex items-center gap-2"
                        >
                          View Details
                          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>

                      {/* Booking Button */}
                      <BookingButton
                        carName={v.name}
                        carCategory={v.category}
                        transferPrice={v.priceLabel}
                        price5hr="Contact for Rate"
                        price10hr="Contact for Rate"
                        maxPassengers={v.passengers}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
