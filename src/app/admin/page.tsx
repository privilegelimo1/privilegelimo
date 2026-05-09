import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

const roseGold = "linear-gradient(135deg, #b76e79, #AB5461, #c9956c)";

export default async function AdminPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const [
    { count: totalVehicles },
    { count: totalCategories },
    { count: totalPosts },
    { count: publishedPosts },
    { count: totalSeo },
  ] = await Promise.all([
    supabase.from("vehicles").select("*", { count: "exact", head: true }),
    supabase.from("vehicle_categories").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }).eq("published", true),
    supabase.from("seo_pages").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    { label: "Vehicles",   value: totalVehicles   ?? 0, href: "/admin/fleet",      color: "#AB5461" },
    { label: "Categories", value: totalCategories ?? 0, href: "/admin/categories", color: "#0a0a0a" },
    { label: "Blog Posts", value: totalPosts      ?? 0, href: "/admin/blogs",      color: "#AB5461" },
    { label: "Published",  value: publishedPosts  ?? 0, href: "/admin/blogs",      color: "#22c55e" },
    { label: "SEO Pages",  value: totalSeo        ?? 0, href: "/admin/seo",        color: "#0a0a0a" },
  ];

  const quickLinks = [
    { href: "/admin/fleet/new",      label: "Add Vehicle"   },
    { href: "/admin/categories/new", label: "Add Category"  },
    { href: "/admin/blogs/new",      label: "New Blog Post" },
    { href: "/admin/seo",            label: "Manage SEO"    },
  ];

  return (
    <div className="px-6 py-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-light text-[#0a0a0a] tracking-tight">Dashboard</h1>
        <p className="text-sm text-[#9a9a9a] font-light mt-1">
          Manage your fleet, blog and SEO — Privilege Limo
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="bg-white rounded-2xl border border-[#efefef] shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#e0e0e0] transition-all"
          >
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#b0b0b0] font-light mb-2">
              {s.label}
            </p>
            <p className="text-3xl font-extralight tracking-tight" style={{ color: s.color }}>
              {s.value}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#b0b0b0] font-light mb-4">
          Quick Actions
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickLinks.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="flex items-center justify-center gap-2 bg-white rounded-xl border border-[#efefef] px-4 py-3 text-[11px] tracking-[0.2em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-all shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
            >
              + {q.label}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div
        className="rounded-2xl px-8 py-7 text-white"
        style={{ background: roseGold }}
      >
        <p className="text-[10px] tracking-[0.4em] uppercase font-light opacity-80 mb-2">
          Getting Started
        </p>
        <p className="text-lg font-light tracking-tight mb-1">
          Migrate your fleet data to Supabase
        </p>
        <p className="text-sm font-light opacity-75 mb-4">
          Go to Fleet → use the seed button to import all vehicles from your JSON file.
        </p>
        <Link
          href="/admin/fleet"
          className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full px-5 py-2 text-[11px] tracking-[0.2em] uppercase font-medium transition-all"
        >
          Go to Fleet →
        </Link>
      </div>
    </div>
  );
}