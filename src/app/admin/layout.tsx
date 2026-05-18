import type { Metadata } from "next";
import AdminLayoutClient from "@/components/admin/AdminLayoutClient";
import SeoEditFab from "@/components/admin/SeoEditFab";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  themeColor: "#b76e79",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PL Admin",
  },
  title: "Admin | Privilege Limo",
  robots: { index: false, follow: false },
};

<link rel="apple-touch-icon" href="/icons/icon-192.png" />

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayoutClient>
      {children}
      <SeoEditFab />
    </AdminLayoutClient>
  );
}