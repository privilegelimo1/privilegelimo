import AdminBlogCMS from "@/components/AdminBlogCMS";

export const metadata = {
  title: "Admin Blog CMS",
  description: "Create and publish blog posts",
};

export default function AdminBlogPage() {
  return (
    <main className="admin-page">
      <div className="container">
        <AdminBlogCMS />
      </div>
    </main>
  );
}