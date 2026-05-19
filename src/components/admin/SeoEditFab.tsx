"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Settings, X } from "lucide-react";

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

const EMPTY: SeoRow = {
  page_path: "", title: "", description: "",
  keywords: "", og_title: "", og_desc: "",
  og_image: "", canonical: "",
};

export default function SeoEditFab() {
  const pathname            = usePathname();
  const supabase            = createClient();
  const [open,   setOpen]   = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg,    setMsg]    = useState("");
  const [row,    setRow]    = useState<SeoRow>(EMPTY);

  const isAdminPage = pathname.startsWith("/admin");

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("seo_pages")
      .select("*")
      .eq("page_path", pathname)
      .single();
    setRow(
      data ?? {
        ...EMPTY,
        page_path: pathname,
        canonical: `https://www.privilegelimo.com${pathname}`,
      }
    );
  }, [pathname]);

  useEffect(() => { if (open) load(); }, [open, load]);

  async function save() {
    setSaving(true);
    setMsg("");
    const { error } = row.id
      ? await supabase.from("seo_pages").update({ ...row, updated_at: new Date().toISOString() }).eq("id", row.id)
      : await supabase.from("seo_pages").insert(row);
    setSaving(false);
    if (error) { setMsg("Error: " + error.message); return; }
    setMsg("Saved ✓");
  }

  const field = (key: keyof SeoRow, label: string, rows = 1) => (
    <div key={key}>
      <label className="block text-[10px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-1">
        {label}
      </label>
      {rows > 1 ? (
        <textarea
          rows={rows}
          value={row[key] as string}
          onChange={(e) => setRow((p) => ({ ...p, [key]: e.target.value }))}
          className="w-full border border-[#e5e5e5] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#AB5461] resize-none transition-colors"
        />
      ) : (
        <input
          type="text"
          value={row[key] as string}
          onChange={(e) => setRow((p) => ({ ...p, [key]: e.target.value }))}
          className="w-full border border-[#e5e5e5] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#AB5461] transition-colors"
        />
      )}
    </div>
  );

  if (isAdminPage) return null;

  return (
    <>
      <button
        onClick={() => { setOpen(true); setMsg(""); }}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#AB5461] text-white text-xs font-medium px-4 py-3 rounded-full shadow-xl transition-all duration-300"
      >
        <Settings size={13} />
        Edit SEO
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={() => setOpen(false)} />
          <div className="w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0] sticky top-0 bg-white z-10">
              <div>
                <p className="font-medium text-[#0a0a0a] text-sm">Edit SEO</p>
                <p className="font-mono text-[10px] text-[#0a0a0a] mt-0.5">{pathname}</p>
              </div>
              <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg text-[#0a0a0a] hover:bg-[#f5f5f5] transition-all">
                <X size={15} />
              </button>
            </div>

            <div className="px-6 py-5 space-y-4 flex-1">
              {field("title",       "Meta Title")}
              {field("description", "Meta Description", 3)}
              {field("keywords",    "Keywords")}
              {field("og_title",    "OG Title")}
              {field("og_desc",     "OG Description", 2)}
              {field("og_image",    "OG Image URL")}
              {field("canonical",   "Canonical URL")}
              <div className="flex gap-6 text-xs">
                <span className={row.title.length > 60 ? "text-red-500" : "text-[#0a0a0a]"}>
                  Title: {row.title.length}/60
                </span>
                <span className={row.description.length > 160 ? "text-red-500" : "text-[#0a0a0a]"}>
                  Desc: {row.description.length}/160
                </span>
              </div>
              {msg && (
                <p className={`text-sm font-medium ${msg.startsWith("Error") ? "text-red-500" : "text-green-600"}`}>
                  {msg}
                </p>
              )}
            </div>

            <div className="px-6 py-4 border-t border-[#f0f0f0] sticky bottom-0 bg-white flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 text-sm font-medium text-[#7a7a7a] hover:text-[#0a0a0a] py-2.5 rounded-xl border border-[#e5e5e5] transition-all"
              >
                Cancel
              </button>
              <button
                onClick={save}
                disabled={saving}
                className="flex-1 bg-[#AB5461] hover:bg-[#923847] disabled:opacity-50 text-white font-medium text-sm py-2.5 rounded-xl transition-all"
              >
                {saving ? "Saving…" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}