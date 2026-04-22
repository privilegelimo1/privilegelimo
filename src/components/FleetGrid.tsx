"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BookingButton from "@/components/BookingButton";

type FleetItem = {
  slug: string;
  classSlug?: string;
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  transferPrice?: string;
  price5hr?: string;
  price10hr?: string;
  images?: string[];
  badge?: string | null;
  desc?: string;
  description?: string;
  features?: string[];
};

type CategoryItem = {
  slug: string;
  label: string;
  description?: string;
};

type Props = {
  fleet: FleetItem[];
  categories: CategoryItem[];
};

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function FleetGrid({ fleet, categories }: Props) {
  const [activeClass, setActiveClass] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const availableClasses = useMemo(() => {
    return categories.filter((cat) =>
      fleet.some((vehicle) => vehicle.classSlug === cat.slug)
    );
  }, [fleet, categories]);

  const grouped = useMemo(() => {
    return availableClasses.reduce<Record<string, FleetItem[]>>((acc, cat) => {
      acc[cat.slug] = fleet.filter((vehicle) => vehicle.classSlug === cat.slug);
      return acc;
    }, {});
  }, [fleet, availableClasses]);

  const visibleCategories = activeClass
    ? availableClasses.filter((cat) => cat.slug === activeClass)
    : availableClasses;

  const visibleVehiclesCount = activeClass
    ? grouped[activeClass]?.length || 0
    : fleet.length;

  const handleSelect = (slug: string) => {
    setActiveClass(slug);
    setOpen(false);
  };

  const handleClear = () => {
    setActiveClass(null);
    setOpen(false);
  };

  return (
    <>
      <section className="py-28 bg-gradient-to-b from-[#AB5461]/3 to-[#ab5461]/10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
                Full Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
                Every vehicle,
                <span className="text-[#AB5461] italic font-extralight"> every occasion</span>
              </h2>
            </div>
          </div>

          {/* Stats + filter bar */}
          <div className="mb-16 rounded-[32px] border border-[#AB5461]/50 bg-gradient-to-br from-[#fff8f9] via-[#fffdfd] to-[#faf7f7] overflow-visible">
            <div className="py-8 px-4 sm:px-6 lg:px-8 ">
              <div className="max-w-7xl mx-auto">
                {/* Stats row */}
                <div className="flex flex-wrap justify-center gap-8 text-center mb-8">
                  {[
                    { value: `${fleet.length}+`, label: "Vehicles Available" },
                    { value: `${availableClasses.length}`, label: "Fleet Classes" },
                    { value: "24/7", label: "UAE-Wide Availability" },
                    { value: "AED 350", label: "Starting From" },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <p className="text-2xl font-semibold text-[#AB5461]">{value}</p>
                      <p className="text-xs text-[#8c8c8c] uppercase tracking-[0.22em] mt-1">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="w-full h-px bg-[#f0dadd] mb-6" />

                {/* Filter row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="shrink-0">
                    <p className="text-sm font-semibold text-[#3d3d3d]">
                      Filter by Fleet Class
                    </p>
                    <p className="text-xs text-[#9a9a9a] mt-1">
                      {activeClass
                        ? `Showing: ${
                            availableClasses.find((c) => c.slug === activeClass)?.label
                          } - ${visibleVehiclesCount} vehicle${
                            visibleVehiclesCount > 1 ? "s" : ""
                          }`
                        : `Showing all ${fleet.length} vehicles across ${availableClasses.length} classes`}
                    </p>
                  </div>

                  <div className="sm:ml-auto flex items-center gap-3">
                    {activeClass && (
                      <button
                        onClick={handleClear}
                        className="text-xs font-semibold text-[#c18490] hover:text-[#AB5461] underline underline-offset-2 transition-colors whitespace-nowrap"
                      >
                        Clear filter
                      </button>
                    )}

                    <div className="relative">
                      <button
                        onClick={() => setOpen((v) => !v)}
                        className="flex items-center justify-between gap-3 px-5 py-3 rounded-2xl border-2 bg-white text-sm font-semibold transition-all min-w-[240px] shadow-[0_6px_20px_rgba(171,84,97,0.06)]"
                        style={{
                          borderColor: activeClass ? "#AB5461" : "#f0dadd",
                          color: activeClass ? "#AB5461" : "#52525b",
                        }}
                      >
                        <span>
                          {activeClass
                            ? availableClasses.find((c) => c.slug === activeClass)?.label
                            : "All Fleet Classes"}
                        </span>
                        <ChevronDown
                          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${activeClass ? "text-[#AB5461]" : "text-[#d0a2aa]"}`}
                        />
                      </button>

                      {open && (
                        <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl border border-[#f1dfe2] shadow-[0_18px_50px_rgba(0,0,0,0.12)] overflow-hidden z-50">
                          <button
                            onClick={handleClear}
                            className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between gap-2 transition-all ${
                              !activeClass
                                ? "font-semibold text-white"
                                : "font-medium text-[#5f5f5f] hover:bg-[#fcf6f7]"
                            }`}
                            style={
                              !activeClass
                                ? {
                                    background:
                                      "linear-gradient(135deg, #AB5461 0%, #c67b86 100%)",
                                  }
                                : {}
                            }
                          >
                            <span className="flex items-center gap-2">
                              All Fleet Classes
                              <span className="text-xs opacity-70">({fleet.length})</span>
                            </span>
                            {!activeClass && (
                              <Check className="text-white shrink-0" />
                            )}
                          </button>

                          <div className="border-t border-[#f5eaec]" />

                          {availableClasses.map((cls, i) => (
                            <button
                              key={cls.slug}
                              onClick={() => handleSelect(cls.slug)}
                              className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between gap-2 transition-all ${
                                activeClass === cls.slug
                                  ? "font-semibold text-white"
                                  : "font-medium text-[#5f5f5f] hover:bg-[#fcf6f7]"
                              } ${i !== 0 ? "border-t border-[#faf0f2]" : ""}`}
                              style={
                                activeClass === cls.slug
                                  ? {
                                      background:
                                        "linear-gradient(135deg, #AB5461 0%, #c67b86 100%)",
                                    }
                                  : {}
                              }
                            >
                              <span className="flex items-center gap-2">
                                {cls.label}
                                <span className="text-xs opacity-70">
                                  ({grouped[cls.slug]?.length || 0})
                                </span>
                              </span>
                              {activeClass === cls.slug && (
                                <Check className="text-white shrink-0" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category groups */}
          {visibleCategories.map((cat) => {
            const vehicles = grouped[cat.slug] || [];
            if (!vehicles.length) return null;

            return (
              <div key={cat.slug} className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-6 bg-[#AB5461]" />
                  <h3 className="text-[10px] tracking-[0.45em] uppercase text-[#AB5461] font-light">
                    {cat.label}
                  </h3>
                  <div className="h-px flex-1 bg-[#f0f0f0]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c0c0c0] font-light">
                    {vehicles.length} vehicle{vehicles.length > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {vehicles.map((v) => {
                    const imageSrc = v.images?.[0];
                    const shortDescription = (v.desc || v.description || "").substring(0, 85);
                    const feature = v.features?.[0];

                    return (
                      <div
                        key={v.slug}
                        className="group rounded-3xl border border-[#AB5461]/40 hover:border-[#AB5461] hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] transition-all duration-500 overflow-hidden bg-white"
                      >
<Link href={`/fleet/${v.classSlug}/${v.slug}`} className="block">
                          <div className="relative h-52 bg-[#fafafa] overflow-hidden">
                            {imageSrc ? (
                              <Image
                                src={imageSrc}
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

                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#AB5461]/40 to-transparent" />
                          </div>
                        </Link>

                        <div className="p-7">
<Link href={`/fleet/${v.classSlug}/${v.slug}`} className="block">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <span className="text-[9px] tracking-[0.3em] uppercase text-[#9a9a9a] block mb-1.5">
                                  {v.category}
                                </span>
                                <h3 className="text-base font-semibold text-[#0a0a0a] tracking-tight group-hover:text-[#AB5461] transition-colors duration-300">
                                  {v.name}
                                </h3>
                              </div>
                              <span className="text-sm text-[#AB5461] font-light whitespace-nowrap ml-4 mt-1">
                                {v.transferPrice || "Contact"}
                              </span>
                            </div>

                            <p className="text-xs text-[#9a9a9a] font-light leading-relaxed mb-5">
                              {shortDescription}...
                            </p>

                            <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#f5f5f5]">
                              <div className="flex items-center gap-1.5">
                                <svg
                                  className="w-3.5 h-3.5 text-[#b0b0b0]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1.5}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                  />
                                </svg>
                                <span className="text-[10px] text-[#7a7a7a] font-light">
                                  {v.passengers} pax
                                </span>
                              </div>

                              <div className="flex items-center gap-1.5">
                                <svg
                                  className="w-3.5 h-3.5 text-[#b0b0b0]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1.5}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                  />
                                </svg>
                                <span className="text-[10px] text-[#7a7a7a] font-light">
                                  {v.luggage} bags
                                </span>
                              </div>

                              {feature && (
                                <span className="text-[9px] tracking-[0.15em] uppercase text-[#b0b0b0] font-light truncate">
                                  · {feature}
                                </span>
                              )}
                            </div>
                          </Link>

                          <div className="flex items-center justify-between mb-4">
                            <Link
  href={`/fleet/${v.classSlug}/${v.slug}`}
  className="text-[10px] tracking-[0.25em] uppercase text-[#0a0a0a] hover:text-[#AB5461] transition-colors flex items-center gap-2"
>
                              View Details
                              <svg
                                className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </Link>
                          </div>

                          <BookingButton
                            carName={v.name}
                            carCategory={v.category}
                            transferPrice={v.transferPrice || "Contact for Rate"}
                            price5hr={v.price5hr || "Contact for Rate"}
                            price10hr={v.price10hr || "Contact for Rate"}
                            maxPassengers={v.passengers}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}