"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Plus, Pencil, Trash2, Loader2, AlertCircle, Check, X, Tag, GripVertical, ChevronDown, ChevronUp } from "lucide-react"
import ImageUploader from "@/components/admin/ImageUploader"

export const dynamic = "force-dynamic"

const roseGold = "linear-gradient(135deg, #b76e79, #e8a4a0, #c9956c)"
const inputClass = "w-full bg-white border border-rose-100 rounded-xl px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all text-sm shadow-sm"
const textareaClass = `${inputClass} resize-none`
const labelClass = "block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5"

type Category = {
  id: string
  name: string
  slug: string
  display_name: string
  sort_order: number
  hero_image: string | null
  meta_title: string | null
  meta_description: string | null
  og_image: string | null
}

type FormData = {
  name: string
  slug: string
  display_name: string
  sort_order: number
  hero_image: string
  meta_title: string
  meta_description: string
  og_image: string
}

function toSlug(v: string) {
  return v.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim()
}

export default function FleetCategoriesPage() {
  const supabase = createClient()
  const [cats,       setCats]       = useState<Category[]>([])
  const [loading,    setLoading]    = useState(true)
  const [saving,     setSaving]     = useState(false)
  const [error,      setError]      = useState("")
  const [editing,    setEditing]    = useState<string | null>(null)
  const [form,       setForm]       = useState<FormData>({
    name: "", slug: "", display_name: "", sort_order: 99,
    hero_image: "", meta_title: "", meta_description: "", og_image: "",
  })
  const [confirmDel, setConfirmDel] = useState<string | null>(null)
  const [deleting,   setDeleting]   = useState<string | null>(null)

  const loadCats = async () => {
    setLoading(true)
    const { data } = await supabase
      .from("vehicle_categories")
      .select("*")
      .order("sort_order")
    setCats((data as Category[]) ?? [])
    setLoading(false)
  }

  useEffect(() => { loadCats() }, [])

  const handleChange = (key: keyof FormData, val: string | number) => {
    if (key === "name" && typeof val === "string") {
      setForm((p) => ({ ...p, name: val, slug: toSlug(val), display_name: val }))
    } else {
      setForm((p) => ({ ...p, [key]: val }))
    }
  }

  const openNew = () => {
    setForm({ name: "", slug: "", display_name: "", sort_order: cats.length + 1, hero_image: "", meta_title: "", meta_description: "", og_image: "" })
    setEditing("new")
  }
  const openEdit = (c: Category) => {
    setForm({
      name: c.name, slug: c.slug, display_name: c.display_name,
      sort_order: c.sort_order, hero_image: c.hero_image ?? "",
      meta_title: c.meta_title ?? "", meta_description: c.meta_description ?? "",
      og_image: c.og_image ?? "",
    })
    setEditing(c.id)
  }
  const cancel = () => { setEditing(null); setError("") }

  const save = async () => {
    if (!form.name || !form.slug) { setError("Name and slug are required."); return }
    setSaving(true); setError("")

    const payload = {
      name:             form.slug,
      slug:             form.slug,
      display_name:     form.display_name || form.name,
      sort_order:       form.sort_order,
      hero_image:       form.hero_image.trim() || null,
      meta_title:       form.meta_title.trim() || null,
      meta_description: form.meta_description.trim() || null,
      og_image:         form.og_image.trim() || null,
    }

    if (editing === "new") {
      const { error: e } = await supabase.from("vehicle_categories").insert(payload)
      if (e) { setError(e.message); setSaving(false); return }
    } else {
      const { error: e } = await supabase.from("vehicle_categories").update(payload).eq("id", editing!)
      if (e) { setError(e.message); setSaving(false); return }
    }

    setSaving(false); cancel(); loadCats()
  }

  const del = async (id: string) => {
    setDeleting(id)
    const { error: e } = await supabase.from("vehicle_categories").delete().eq("id", id)
    if (!e) setCats((p) => p.filter((c) => c.id !== id))
    setDeleting(null); setConfirmDel(null)
  }

  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-bold text-zinc-900">Fleet Categories</h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            {cats.length} categories · new categories appear instantly in Add Vehicle form
          </p>
        </div>
        {editing !== "new" && (
          <button
            onClick={openNew}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-xl shadow-md"
            style={{ background: roseGold }}
          >
            <Plus size={15} /> New Category
          </button>
        )}
      </div>

      {error && (
        <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2">
          <AlertCircle size={15} /> {error}
        </div>
      )}

      <div className="space-y-3">
        {editing === "new" && (
          <InlineForm
            form={form} onChange={handleChange}
            onSave={save} onCancel={cancel}
            saving={saving} title="New Category"
          />
        )}

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 size={18} className="animate-spin" style={{ color: "#b76e79" }} />
          </div>
        ) : cats.length === 0 ? (
          <div className="text-center py-16 text-zinc-400 text-sm">
            No categories yet. Create your first one.
          </div>
        ) : cats.map((cat) =>
          editing === cat.id ? (
            <InlineForm
              key={cat.id} form={form} onChange={handleChange}
              onSave={save} onCancel={cancel}
              saving={saving} title="Edit Category"
            />
          ) : (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-rose-100 shadow-sm px-5 py-4 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <GripVertical size={16} className="text-zinc-300" />
                {cat.hero_image ? (
                  <div className="w-10 h-7 rounded-lg overflow-hidden border border-rose-100 shrink-0">
                    <img src={cat.hero_image} alt="" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                    <Tag size={13} style={{ color: "#b76e79" }} />
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{cat.display_name}</p>
                  <p className="text-xs text-zinc-400">
                    <code className="bg-zinc-100 px-1.5 py-0.5 rounded-md">{cat.slug}</code>
                    <span className="ml-2">· order: {cat.sort_order}</span>
                    {cat.meta_title && (
                      <span className="ml-2 text-emerald-500">· SEO ✓</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => openEdit(cat)}
                  className="p-2 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-all"
                >
                  <Pencil size={14} />
                </button>
                {confirmDel === cat.id ? (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => del(cat.id)}
                      disabled={deleting === cat.id}
                      className="px-2.5 py-1 text-[10px] font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      {deleting === cat.id ? <Loader2 size={10} className="animate-spin" /> : "Delete"}
                    </button>
                    <button
                      onClick={() => setConfirmDel(null)}
                      className="px-2.5 py-1 text-[10px] border border-zinc-200 text-zinc-500 rounded-lg hover:bg-zinc-50"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmDel(cat.id)}
                    className="p-2 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-all"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

function InlineForm({ form, onChange, onSave, onCancel, saving, title }: {
  form: FormData
  onChange: (k: keyof FormData, v: string | number) => void
  onSave: () => void
  onCancel: () => void
  saving: boolean
  title: string
}) {
  const [seoOpen, setSeoOpen] = useState(false)

  const metaTitleLen = form.meta_title.length
  const metaDescLen  = form.meta_description.length

  return (
    <div className="bg-white rounded-2xl border-2 border-rose-200 shadow-sm p-5">
      <p className="text-sm font-bold text-zinc-700 mb-4">{title}</p>

      {/* Core fields */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-3">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="Business Class"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Display Name</label>
          <input
            type="text"
            value={form.display_name}
            onChange={(e) => onChange("display_name", e.target.value)}
            placeholder="Business Class"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Slug *</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => onChange("slug", e.target.value)}
            placeholder="business-class"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Sort Order</label>
          <input
            type="number"
            value={form.sort_order}
            onChange={(e) => onChange("sort_order", parseInt(e.target.value) || 1)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Hero Image */}
      <div className="mb-4">
        <label className={labelClass}>Hero Image</label>
        <ImageUploader
          value={form.hero_image}
          onChange={(url) => onChange("hero_image", url)}
          bucket="vehicle-images"
          folder="categories"
        />
        <p className="text-[10px] text-zinc-400 mt-1.5">
          Displayed as the hero background on the /fleet/[slug] page.
        </p>
      </div>

      {/* SEO accordion */}
      <div className="border border-rose-100 rounded-xl overflow-hidden mb-4">
        <button
          type="button"
          onClick={() => setSeoOpen((p) => !p)}
          className="w-full flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:bg-rose-50/50 transition-all"
        >
          <span className="flex items-center gap-2">
            SEO & Open Graph
            {(form.meta_title || form.meta_description) && (
              <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-600 rounded-md text-[10px] font-bold normal-case tracking-normal">
                Filled
              </span>
            )}
          </span>
          {seoOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {seoOpen && (
          <div className="px-4 pb-4 pt-1 space-y-3 border-t border-rose-100">
            {/* Meta Title */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className={labelClass + " mb-0"}>Meta Title</label>
                <span className={`text-[10px] font-medium ${metaTitleLen > 60 ? "text-red-400" : "text-zinc-400"}`}>
                  {metaTitleLen}/60
                </span>
              </div>
              <input
                type="text"
                value={form.meta_title}
                onChange={(e) => onChange("meta_title", e.target.value)}
                placeholder={`${form.display_name || form.name} | Privilege Limo Dubai`}
                className={inputClass}
              />
              <p className="text-[10px] text-zinc-400 mt-1">Ideal 50–60 characters. Defaults to display name if empty.</p>
            </div>

            {/* Meta Description */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className={labelClass + " mb-0"}>Meta Description</label>
                <span className={`text-[10px] font-medium ${metaDescLen > 160 ? "text-red-400" : "text-zinc-400"}`}>
                  {metaDescLen}/160
                </span>
              </div>
              <textarea
                rows={3}
                value={form.meta_description}
                onChange={(e) => onChange("meta_description", e.target.value)}
                placeholder="Hire premium business class vehicles in Dubai with professional chauffeurs..."
                className={textareaClass}
              />
              <p className="text-[10px] text-zinc-400 mt-1">Ideal 120–160 characters. Shown in Google search results.</p>
            </div>

            {/* OG Image */}
            <div>
              <label className={labelClass}>OG Image</label>
              <ImageUploader
                value={form.og_image}
                onChange={(url) => onChange("og_image", url)}
                bucket="vehicle-images"
                folder="og"
              />
              <p className="text-[10px] text-zinc-400 mt-1.5">
                Shown when shared on WhatsApp, Twitter, LinkedIn. Recommended 1200×630px. Defaults to hero image if empty.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={onSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2 text-white text-sm font-semibold rounded-xl disabled:opacity-60"
          style={{ background: roseGold }}
        >
          {saving ? <Loader2 size={13} className="animate-spin" /> : <Check size={13} />}
          {saving ? "Saving..." : "Save"}
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm border border-zinc-200 text-zinc-500 rounded-xl hover:bg-zinc-50 transition-all flex items-center"
        >
          <X size={13} />
        </button>
      </div>
    </div>
  )
}