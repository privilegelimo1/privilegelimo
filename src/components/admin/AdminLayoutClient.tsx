"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Car,
  BookOpen,
  Search,
  Tag,
  Menu,
  X,
  LogOut,
  ChevronRight,
} from "lucide-react";

const NAV = [
  { href: "/admin",            label: "Dashboard",  icon: LayoutDashboard },
  { href: "/admin/fleet",      label: "Fleet",      icon: Car },
  { href: "/admin/fleet/categories", label: "Categories", icon: Tag },
  { href: "/admin/blogs",      label: "Blogs",      icon: BookOpen },
  { href: "/admin/seo",        label: "SEO",        icon: Search },
];

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router   = useRouter();
  const [open, setOpen] = useState(false);

 const supabase = createClient(); // add this at top of component

async function logout() {
  await supabase.auth.signOut();
  router.push("/admin/login");
  router.refresh();
}

  const Sidebar = ({ mobile = false }) => (
    <div className={`flex flex-col h-full bg-white border-r border-[#efefef] ${mobile ? "w-72" : "w-60"}`}>
      {/* Brand */}
      <div className="px-6 py-5 border-b border-[#f5f5f5]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#AB5461] flex items-center justify-center shrink-0">
            <span className="text-white text-[10px] font-bold">P</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#0a0a0a]">Privilege Limo</p>
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#0a0a0a]">Admin</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                active
                  ? "bg-[#f9f0f1] text-[#AB5461] font-medium"
                  : "text-[#7a7a7a] hover:bg-[#fafafa] hover:text-[#0a0a0a]"
              }`}
            >
              <Icon size={15} className="shrink-0" />
              {label}
              {active && <ChevronRight size={12} className="ml-auto opacity-50" />}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-[#f5f5f5]">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-[#0a0a0a] hover:bg-[#fafafa] hover:text-red-500 transition-all"
        >
          <LogOut size={15} className="shrink-0" />
          Sign out
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#faf9f7] overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden md:flex shrink-0">
        <Sidebar />
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="flex-1 bg-black/40" onClick={() => setOpen(false)} />
          <div className="h-full shadow-2xl">
            <Sidebar mobile />
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile topbar */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-[#efefef]">
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-lg text-[#7a7a7a] hover:bg-[#fafafa]"
          >
            <Menu size={18} />
          </button>
          <p className="text-xs font-semibold text-[#0a0a0a] tracking-wide">
            Privilege Limo Admin
          </p>
          <div className="w-8" />
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}