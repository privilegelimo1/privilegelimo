"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type SeoRow = {
  id?:         string;
  page_path:   string;
  title:       string;
  description: string;
  keywords:    string;
  og_title:    string;
  og_desc:     string;
  og_image:    string;
  canonical:   string;
};

const emptyRow = (): SeoRow => ({
  page_path: "", title: "", description: "",
  keywords: "", og_title: "", og_desc: "",
  og_image: "", canonical: "",
});

export default function AdminSEOPage() {
  const supabase = createClient();
  const [rows,    setRows]    = useState<SeoRow[]>([]);
  const [editing, setEditing] = useState<SeoRow | null>(null);
  const [saving,  setSaving]  = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [msg,     setMsg]     = useState("");
  const [search,  setSearch]  = useState("");

  async function load() {
    const { data } = await supabase.from("seo_pages").select("*").order("page_path");
    setRows(data ?? []);
  }

  useEffect(() => { load(); }, []);

  async function seedFleetPages() {
    setSeeding(true);
    setMsg("");
    const res  = await fetch("/api/admin/seed-seo", { method: "POST" });
    const data = await res.json();
    setSeeding(false);
    if (!res.ok) { setMsg("Seed error: " + data.error); return; }
    setMsg(`Seeded ${data.count} vehicle pages ✓`);
    load();
  }

  async function save() {
    if (!editing) return;
    setSaving(true);
    setMsg("");
    const { error } = editing.id
      ? await supabase.from("seo_pages").update({ ...editing, updated_at: new Date().toISOString() }).eq("id", editing.id)
      : await supabase.from("seo_pages").insert(editing);
    setSaving(false);
    if (error) { setMsg("Error: " + error.message); return; }
    setMsg("Saved ✓");
    setEditing(null);
    load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this SEO entry?")) return;
    await supabase.from("seo_pages").delete().eq("id", id);
    load();
  }

  const filtered = rows.filter(
    (r) =>
      r.page_path.toLowerCase().includes(search.toLowerCase()) ||
      r.title.toLowerCase().includes(search.toLowerCase())
  );

  const field = (key: keyof SeoRow, label: string, rowCount = 1) => (
    <div key={key}>
      <label className="block text-[10px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-1.5">
        {label}
      </label>
      {rowCount > 1 ? (
        <textarea
          rows={rowCount}
          value={(editing as any)[key] ?? ""}
          onChange={(e) => setEditing((p) => ({ ...p!, [key]: e.target.value }))}
          className="w-full border border-[#e5e5e5] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#AB5461] resize-none transition-colors"
        />
      ) : (
        <input
          type="text"
          value={(editing as any)[key] ?? ""}
          onChange={(e) => setEditing((p) => ({ ...p!, [key]: e.target.value }))}
          className="w-full border border-[#e5e5e5] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#AB5461] transition-colors"
        />
      )}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-light text-[#0a0a0a] tracking-tight">SEO Manager</h1>
          <p className="text-sm text-[#0a0a0a] font-light mt-1">
            Manage metadata for every page
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={seedFleetPages}
            disabled={seeding}
            className="bg-[#0a0a0a] hover:bg-[#333] disabled:opacity-50 text-white font-medium text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-all"
          >
            {seeding ? "Seeding…" : "⚡ Seed Fleet Pages"}
          </button>
          <button
            onClick={() => { setEditing(emptyRow()); setMsg(""); }}
            className="bg-[#AB5461] hover:bg-[#923847] text-white font-medium text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-all"
          >
            + Add Page
          </button>
        </div>
      </div>

      {msg && (
        <p className={`mb-4 text-sm font-medium ${msg.startsWith("Error") || msg.startsWith("Seed error") ? "text-red-500" : "text-green-600"}`}>
          {msg}
        </p>
      )}

      <input
        type="text"
        placeholder="Search by path or title…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-[#e5e5e5] rounded-xl px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-[#AB5461] transition-colors"
      />

      <div className="bg-white rounded-2xl border border-[#efefef] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
        <table className="w-full text-sm">
          <thead className="bg-[#fafafa] border-b border-[#f0f0f0]">
            <tr>
              <th className="text-left px-5 py-3 text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] font-medium">Path</th>
              <th className="text-left px-5 py-3 text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] font-medium">Title</th>
              <th className="text-left px-5 py-3 text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] font-medium hidden md:table-cell">Description</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-b border-[#f5f5f5] hover:bg-[#fafafa] transition-colors">
                <td className="px-5 py-3 font-mono text-xs text-[#7a7a7a] max-w-[180px] truncate">{r.page_path}</td>
                <td className="px-5 py-3 text-[#0a0a0a] text-sm max-w-[200px] truncate font-light">{r.title}</td>
                <td className="px-5 py-3 text-[#0a0a0a] text-sm max-w-[240px] truncate hidden md:table-cell font-light">{r.description}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => { setEditing(r); setMsg(""); }}
                      className="text-xs font-medium text-[#AB5461] hover:text-[#923847] transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => remove(r.id!)}
                      className="text-xs font-medium text-[#0a0a0a] hover:text-red-500 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-5 py-12 text-center text-[#0a0a0a] text-sm font-light">
                  {rows.length === 0
                    ? 'No SEO entries yet. Click "⚡ Seed Fleet Pages" to auto-populate.'
                    : "No results match your search."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="px-5 py-3 text-[10px] text-[#0a0a0a] border-t border-[#f5f5f5]">
          {filtered.length} of {rows.length} pages
        </div>
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0] sticky top-0 bg-white z-10">
              <h2 className="font-light text-[#0a0a0a] text-lg tracking-tight">
                {editing.id ? "Edit" : "Add"} SEO{" "}
                <span className="font-mono text-xs text-[#0a0a0a]">
                  {editing.page_path || "new page"}
                </span>
              </h2>
              <button
                onClick={() => setEditing(null)}
                className="text-[#0a0a0a] hover:text-[#0a0a0a] text-xl font-light"
              >
                ×
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              {field("page_path",   "Page Path (e.g. /fleet/business-van/mercedes-v-class)")}
              {field("title",       "Meta Title")}
              {field("description", "Meta Description", 3)}
              {field("keywords",    "Keywords (comma separated)")}
              {field("og_title",    "OG Title")}
              {field("og_desc",     "OG Description", 2)}
              {field("og_image",    "OG Image URL")}
              {field("canonical",   "Canonical URL")}
              <div className="flex gap-6 text-xs">
                <span className={editing.title.length > 60 ? "text-red-500" : "text-[#0a0a0a]"}>
                  Title: {editing.title.length}/60
                </span>
                <span className={editing.description.length > 160 ? "text-red-500" : "text-[#0a0a0a]"}>
                  Description: {editing.description.length}/160
                </span>
              </div>
              {msg && (
                <p className={`text-sm font-medium ${msg.startsWith("Error") ? "text-red-500" : "text-green-600"}`}>
                  {msg}
                </p>
              )}
            </div>

            <div className="px-6 py-4 border-t border-[#f0f0f0] flex justify-end gap-3 sticky bottom-0 bg-white">
              <button
                onClick={() => setEditing(null)}
                className="text-sm font-medium text-[#7a7a7a] hover:text-[#0a0a0a] px-4 py-2.5 rounded-xl border border-[#e5e5e5] transition-all"
              >
                Cancel
              </button>
              <button
                onClick={save}
                disabled={saving}
                className="bg-[#AB5461] hover:bg-[#923847] disabled:opacity-50 text-white font-medium text-sm px-6 py-2.5 rounded-xl transition-all"
              >
                {saving ? "Saving…" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}