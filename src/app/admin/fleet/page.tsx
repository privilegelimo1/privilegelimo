"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Plus } from "lucide-react";

export default function AdminFleetPage() {
  const supabase = createClient();
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [seeding, setSeeding]   = useState(false);
  const [msg, setMsg]           = useState("");

  async function load() {
    const { data } = await supabase
      .from("vehicles")
      .select("id, slug, name, class_slug, category, passengers, transfer_price, available, badge, images")
      .order("class_slug")
      .order("sort_order");
    setVehicles(data ?? []);
  }

  useEffect(() => { load(); }, []);

  async function seedFleet() {
    setSeeding(true);
    setMsg("");
    const res  = await fetch("/api/admin/seed-fleet", { method: "POST" });
    const data = await res.json();
    setSeeding(false);
    if (!res.ok) { setMsg("Error: " + data.error); return; }
    setMsg(`Seeded ${data.count} vehicles ✓`);
    load();
  }

  const grouped = vehicles.reduce<Record<string, any[]>>((acc, v) => {
    if (!acc[v.class_slug]) acc[v.class_slug] = [];
    acc[v.class_slug].push(v);
    return acc;
  }, {});

  const classLabels: Record<string, string> = {
    "business-class": "Business Class",
    "first-class":    "First Class",
    "business-van":   "Business Van",
    "suv":            "SUV",
  };

  return (
    <div className="px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-light text-[#0a0a0a] tracking-tight">Fleet</h1>
          <p className="text-sm text-[#9a9a9a] font-light mt-1">
            {vehicles.length} vehicles across {Object.keys(grouped).length} categories
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={seedFleet}
            disabled={seeding}
            className="bg-[#0a0a0a] hover:bg-[#333] disabled:opacity-50 text-white font-medium text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-all"
          >
            {seeding ? "Seeding…" : "⚡ Seed from JSON"}
          </button>
          <Link
            href="/admin/fleet/new"
            className="inline-flex items-center gap-2 bg-[#AB5461] hover:bg-[#923847] text-white text-[11px] tracking-[0.2em] uppercase font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            <Plus size={13} />
            Add Vehicle
          </Link>
        </div>
      </div>

      {msg && (
        <p className={`mb-6 text-sm font-medium ${msg.startsWith("Error") ? "text-red-500" : "text-green-600"}`}>
          {msg}
        </p>
      )}

      {/* Grouped by class */}
      <div className="space-y-8">
        {Object.entries(grouped).map(([classSlug, items]) => (
          <div key={classSlug}>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#b0b0b0] font-medium">
                {classLabels[classSlug] ?? classSlug}
              </p>
              <div className="flex-1 h-px bg-[#f0f0f0]" />
              <span className="text-[10px] text-[#b0b0b0]">{items.length}</span>
            </div>

            <div className="bg-white rounded-2xl border border-[#efefef] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <div className="grid grid-cols-12 px-5 py-3 border-b border-[#f5f5f5] bg-[#fafafa]">
                <div className="col-span-5 text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-medium">Vehicle</div>
                <div className="col-span-2 text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-medium">Pax</div>
                <div className="col-span-2 text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-medium">From</div>
                <div className="col-span-2 text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-medium">Status</div>
                <div className="col-span-1" />
              </div>

              {items.map((v, i) => (
                <div
                  key={v.id}
                  className={`grid grid-cols-12 items-center px-5 py-4 hover:bg-[#fafafa] transition-colors ${
                    i !== items.length - 1 ? "border-b border-[#f5f5f5]" : ""
                  }`}
                >
                  <div className="col-span-5 flex items-center gap-3 min-w-0">
                    <div className="w-12 h-10 rounded-lg overflow-hidden bg-[#f5f5f5] shrink-0">
                      {v.images?.[0] ? (
                        <img src={v.images[0]} alt={v.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#d0d0d0] text-xs">
                          No img
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-[#0a0a0a] text-sm truncate">{v.name}</p>
                      <p className="text-[11px] text-[#b0b0b0] truncate mt-0.5">/fleet/{v.class_slug}/{v.slug}</p>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <span className="text-sm text-[#7a7a7a] font-light">{v.passengers} pax</span>
                  </div>

                  <div className="col-span-2">
                    <span className="text-sm text-[#0a0a0a] font-light">{v.transfer_price}</span>
                  </div>

                  <div className="col-span-2 flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border ${
                      v.available
                        ? "bg-green-50 text-green-600 border-green-200"
                        : "bg-zinc-100 text-zinc-500 border-zinc-200"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${v.available ? "bg-green-500" : "bg-zinc-400"}`} />
                      {v.available ? "Active" : "Hidden"}
                    </span>
                    {v.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-[#f9f0f1] text-[#AB5461] border border-[#f0dde0]">
                        {v.badge}
                      </span>
                    )}
                  </div>

                  <div className="col-span-1 flex justify-end">
                    <Link
                      href={`/admin/fleet/${v.slug}`}
                      className="text-xs font-medium text-[#AB5461] hover:text-[#923847] transition-colors"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {vehicles.length === 0 && (
          <div className="bg-white rounded-2xl border border-[#efefef] py-20 text-center">
            <p className="text-[#9a9a9a] font-light mb-1">No vehicles yet</p>
            <p className="text-[#b0b0b0] text-sm font-light mb-5">
              Seed from your fleet.json or add manually
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={seedFleet}
                disabled={seeding}
                className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#333] disabled:opacity-50 text-white text-[11px] tracking-[0.2em] uppercase font-medium px-5 py-2.5 rounded-full transition-colors"
              >
                {seeding ? "Seeding…" : "⚡ Seed from JSON"}
              </button>
              <Link
                href="/admin/fleet/new"
                className="inline-flex items-center gap-2 bg-[#AB5461] hover:bg-[#923847] text-white text-[11px] tracking-[0.2em] uppercase font-medium px-5 py-2.5 rounded-full transition-colors"
              >
                + Add Vehicle
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}