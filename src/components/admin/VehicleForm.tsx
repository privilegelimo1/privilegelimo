"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Plus, Trash2 } from "lucide-react";
import ImageUploader from "@/components/admin/ImageUploader";

type Category = { slug: string; display_name: string };
type Spec = { label: string; value: string };

type Vehicle = {
  id?: string;
  slug: string;
  class_slug: string;
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  transfer_price: string;
  price_5hr: string;
  price_10hr: string;
  images: string[];
  short_desc: string;
  long_desc: string;
  features: string[];
  specs: Spec[];
  meta_title: string;
  meta_desc: string;
  seo_keywords: string;
  seo_title: string;
  seo_description: string;
  available: boolean;
  badge: string | null;
  sort_order: number;
};

const empty = (): Vehicle => ({
  slug: "", class_slug: "", name: "", category: "",
  passengers: 3, luggage: 3,
  transfer_price: "", price_5hr: "", price_10hr: "",
  images: [], short_desc: "", long_desc: "",
  features: [], specs: [],
  meta_title: "", meta_desc: "", seo_keywords: "",
  seo_title: "", seo_description: "",
  available: true, badge: null, sort_order: 0,
});

export default function VehicleForm({
  vehicle,
  categories,
}: {
  vehicle?: Vehicle;
  categories: Category[];
}) {
  const router   = useRouter();
  const supabase = createClient();
  const isEdit   = !!vehicle?.id;

  const [form,     setForm]     = useState<Vehicle>(vehicle ?? empty());
  const [saving,   setSaving]   = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [msg,      setMsg]      = useState("");
  const [tab,      setTab]      = useState<"basic" | "content" | "seo">("basic");

  // ── Name → auto slug ───────────────────────────────────────────────────────
  function handleNameChange(name: string) {
    setForm((p) => ({
      ...p,
      name,
      slug: isEdit
        ? p.slug
        : name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    }));
  }

  // ── Images ─────────────────────────────────────────────────────────────────
  function addImage() {
    setForm((p) => ({ ...p, images: [...p.images, ""] }));
  }
  function updateImage(i: number, url: string) {
    setForm((p) => {
      const imgs = [...p.images];
      imgs[i] = url;
      return { ...p, images: imgs };
    });
  }
  function removeImage(i: number) {
    setForm((p) => ({ ...p, images: p.images.filter((_, idx) => idx !== i) }));
  }

  // ── Features ───────────────────────────────────────────────────────────────
  function addFeature() {
    setForm((p) => ({ ...p, features: [...p.features, ""] }));
  }
  function updateFeature(i: number, val: string) {
    setForm((p) => {
      const arr = [...p.features];
      arr[i] = val;
      return { ...p, features: arr };
    });
  }
  function removeFeature(i: number) {
    setForm((p) => ({ ...p, features: p.features.filter((_, idx) => idx !== i) }));
  }

  // ── Specs ──────────────────────────────────────────────────────────────────
  function addSpec() {
    setForm((p) => ({ ...p, specs: [...p.specs, { label: "", value: "" }] }));
  }
  function updateSpec(i: number, key: "label" | "value", val: string) {
    setForm((p) => {
      const arr = [...p.specs];
      arr[i] = { ...arr[i], [key]: val };
      return { ...p, specs: arr };
    });
  }
  function removeSpec(i: number) {
    setForm((p) => ({ ...p, specs: p.specs.filter((_, idx) => idx !== i) }));
  }

  // ── Save / Delete ──────────────────────────────────────────────────────────
  async function save() {
    setSaving(true);
    setMsg("");
    const payload = {
      ...form,
      images:     form.images.filter(Boolean),
      features:   form.features.filter(Boolean),
      updated_at: new Date().toISOString(),
    };
    const { error } = isEdit
      ? await supabase.from("vehicles").update(payload).eq("id", vehicle!.id!)
      : await supabase.from("vehicles").insert(payload);
    setSaving(false);
    if (error) { setMsg("Error: " + error.message); return; }
    setMsg("Saved ✓");
    if (!isEdit) router.push("/admin/fleet");
  }

  async function deleteVehicle() {
    if (!confirm(`Delete ${form.name}? This cannot be undone.`)) return;
    setDeleting(true);
    await supabase.from("vehicles").delete().eq("id", vehicle!.id!);
    router.push("/admin/fleet");
  }

  // ── Reusable field helpers ─────────────────────────────────────────────────
  const inputField = (
    key: keyof Vehicle,
    label: string,
    opts?: { type?: string; placeholder?: string }
  ) => (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light mb-1.5">
        {label}
      </label>
      <input
        type={opts?.type ?? "text"}
        placeholder={opts?.placeholder}
        value={(form[key] as string | number) ?? ""}
        onChange={(e) =>
          setForm((p) => ({
            ...p,
            [key]: opts?.type === "number" ? Number(e.target.value) : e.target.value,
          }))
        }
        className="w-full border border-[#e5e5e5] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#AB5461] transition-colors"
      />
    </div>
  );

  const textareaField = (key: keyof Vehicle, label: string, rows = 3) => (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light mb-1.5">
        {label}
      </label>
      <textarea
        rows={rows}
        value={(form[key] as string) ?? ""}
        onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
        className="w-full border border-[#e5e5e5] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#AB5461] transition-colors resize-none"
      />
    </div>
  );

  const TABS = [
    { id: "basic",   label: "Basic Info" },
    { id: "content", label: "Content"    },
    { id: "seo",     label: "SEO"        },
  ] as const;

  return (
    <div className="bg-white rounded-2xl border border-[#efefef] shadow-[0_2px_8px_rgba(0,0,0,0.03)] overflow-hidden">

      {/* ── Tabs ── */}
      <div className="flex border-b border-[#f0f0f0] px-6 pt-4 gap-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 text-xs font-medium rounded-t-lg transition-all ${
              tab === t.id
                ? "bg-[#f9f0f1] text-[#AB5461] border border-[#f0dde0] border-b-[#f9f0f1]"
                : "text-[#9a9a9a] hover:text-[#0a0a0a]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-6 space-y-6">

        {/* ── BASIC INFO ── */}
        {tab === "basic" && (
          <>
            {/* Name + Slug */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="Mercedes V-Class"
                  className="w-full border border-[#e5e5e5] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#AB5461] transition-colors"
                />
              </div>
              {inputField("slug", "Slug", { placeholder: "mercedes-v-class" })}
            </div>

            {/* Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light mb-1.5">
                  Fleet Class
                </label>
                <select
                  value={form.class_slug}
                  onChange={(e) => setForm((p) => ({ ...p, class_slug: e.target.value }))}
                  className="w-full border border-[#e5e5e5] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#AB5461] transition-colors bg-white"
                >
                  <option value="">Select class…</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.display_name}</option>
                  ))}
                </select>
              </div>
              {inputField("category", "Category Label", { placeholder: "Luxury MPV" })}
            </div>

            {/* Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {inputField("passengers", "Passengers", { type: "number" })}
              {inputField("luggage",    "Luggage",    { type: "number" })}
              {inputField("sort_order", "Sort Order", { type: "number" })}
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light mb-1.5">
                  Badge
                </label>
                <input
                  type="text"
                  value={form.badge ?? ""}
                  onChange={(e) => setForm((p) => ({ ...p, badge: e.target.value || null }))}
                  placeholder="Most Popular"
                  className="w-full border border-[#e5e5e5] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#AB5461] transition-colors"
                />
              </div>
            </div>

            {/* Prices */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {inputField("transfer_price", "Transfer Price", { placeholder: "AED 400" })}
              {inputField("price_5hr",      "5 Hr Price",     { placeholder: "AED 1,000 / 5 Hr" })}
              {inputField("price_10hr",     "10 Hr Price",    { placeholder: "AED 1,400 / 10 Hr" })}
            </div>

            {/* Available toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setForm((p) => ({ ...p, available: !p.available }))}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  form.available ? "bg-[#AB5461]" : "bg-[#e5e5e5]"
                }`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                  form.available ? "translate-x-5" : "translate-x-0"
                }`} />
              </button>
              <span className="text-sm font-light text-[#0a0a0a]">
                {form.available ? "Visible on site" : "Hidden from site"}
              </span>
            </div>

            {/* Images */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                  Images
                </label>
                <button
                  onClick={addImage}
                  className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#AB5461] hover:text-[#923847] flex items-center gap-1 transition-colors"
                >
                  <Plus size={11} /> Add Image
                </button>
              </div>

              <div className="space-y-4">
                {form.images.length === 0 ? (
                  <button
                    onClick={addImage}
                    className="w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#f0dadd] rounded-2xl py-8 text-[#c0b0b3] hover:border-[#AB5461]/40 hover:text-[#AB5461] transition-all"
                  >
                    <Plus size={18} />
                    <span className="text-xs font-light tracking-wider">Add first image</span>
                  </button>
                ) : (
                  form.images.map((img, i) => (
                    <div key={i} className="relative">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] font-light">
                          Image {i + 1}{i === 0 ? " · Cover" : ""}
                        </span>
                        <button
                          onClick={() => removeImage(i)}
                          className="text-[#d0d0d0] hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                      <ImageUploader
                        value={img}
                        onChange={(url) => updateImage(i, url)}
                        bucket="fleet-images"
                        folder="vehicles"
                      />
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Specs */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                  Specs
                </label>
                <button
                  onClick={addSpec}
                  className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#AB5461] hover:text-[#923847] flex items-center gap-1 transition-colors"
                >
                  <Plus size={11} /> Add
                </button>
              </div>
              <div className="space-y-2">
                {form.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={spec.label}
                      onChange={(e) => updateSpec(i, "label", e.target.value)}
                      placeholder="Label"
                      className="w-1/3 border border-[#e5e5e5] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#AB5461] transition-colors"
                    />
                    <input
                      type="text"
                      value={spec.value}
                      onChange={(e) => updateSpec(i, "value", e.target.value)}
                      placeholder="Value"
                      className="flex-1 border border-[#e5e5e5] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#AB5461] transition-colors"
                    />
                    <button
                      onClick={() => removeSpec(i)}
                      className="text-[#d0d0d0] hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
                {form.specs.length === 0 && (
                  <p className="text-xs text-[#0a0a0a] font-light py-2">No specs added yet</p>
                )}
              </div>
            </div>
          </>
        )}

        {/* ── CONTENT ── */}
        {tab === "content" && (
          <>
            {textareaField("short_desc", "Short Description", 2)}
            {textareaField("long_desc",  "Long Description",  5)}

            {/* Features */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">
                  Features
                </label>
                <button
                  onClick={addFeature}
                  className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#AB5461] hover:text-[#923847] flex items-center gap-1 transition-colors"
                >
                  <Plus size={11} /> Add
                </button>
              </div>
              <div className="space-y-2">
                {form.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={f}
                      onChange={(e) => updateFeature(i, e.target.value)}
                      placeholder="e.g. Panoramic sunroof"
                      className="flex-1 border border-[#e5e5e5] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#AB5461] transition-colors"
                    />
                    <button
                      onClick={() => removeFeature(i)}
                      className="text-[#d0d0d0] hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
                {form.features.length === 0 && (
                  <p className="text-xs text-[#0a0a0a] font-light py-2">No features added yet</p>
                )}
              </div>
            </div>
          </>
        )}

        {/* ── SEO ── */}
        {tab === "seo" && (
          <>
            {inputField("seo_title",       "SEO Title")}
            {textareaField("seo_description", "SEO Description", 3)}
            {inputField("seo_keywords",    "SEO Keywords")}
            <hr className="border-[#f0f0f0]" />
            {inputField("meta_title",      "Meta Title (fallback)")}
            {textareaField("meta_desc",    "Meta Description (fallback)", 2)}
            <div className="flex gap-6 text-xs">
              <span className={(form.seo_title || form.meta_title).length > 60 ? "text-red-500" : "text-[#0a0a0a]"}>
                Title: {(form.seo_title || form.meta_title).length}/60
              </span>
              <span className={(form.seo_description || form.meta_desc).length > 160 ? "text-red-500" : "text-[#0a0a0a]"}>
                Desc: {(form.seo_description || form.meta_desc).length}/160
              </span>
            </div>
          </>
        )}

        {/* Message */}
        {msg && (
          <p className={`text-sm font-medium ${msg.startsWith("Error") ? "text-red-500" : "text-green-600"}`}>
            {msg}
          </p>
        )}
      </div>

      {/* ── Footer ── */}
      <div className="px-6 py-4 border-t border-[#f0f0f0] flex items-center justify-between bg-[#fafafa]">
        <div>
          {isEdit && (
            <button
              onClick={deleteVehicle}
              disabled={deleting}
              className="text-xs font-medium text-[#0a0a0a] hover:text-red-500 disabled:opacity-50 transition-colors"
            >
              {deleting ? "Deleting…" : "Delete vehicle"}
            </button>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/admin/fleet")}
            className="text-sm font-medium text-[#7a7a7a] hover:text-[#0a0a0a] px-4 py-2.5 rounded-xl border border-[#e5e5e5] transition-all"
          >
            Cancel
          </button>
          <button
            onClick={save}
            disabled={saving}
            className="bg-[#AB5461] hover:bg-[#923847] disabled:opacity-50 text-white font-medium text-sm px-6 py-2.5 rounded-xl transition-all"
          >
            {saving ? "Saving…" : isEdit ? "Save Changes" : "Add Vehicle"}
          </button>
        </div>
      </div>
    </div>
  );
}