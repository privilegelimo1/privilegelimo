import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { getFile } from "@/lib/github";
import { parseFrontmatter } from "@/lib/blog";
import PostEditor from "@/components/admin/PostEditor";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const cookieStore = await cookies();
  if (cookieStore.get("admin_session")?.value !== "authenticated") {
    redirect("/admin");
  }

  const { slug } = await params;
  const file = await getFile(`content/blog/${slug}.mdx`);
  if (!file) notFound();

  const parsed = parseFrontmatter(file.content);

  return (
    <PostEditor
      initialData={{
        slug,
        title:   parsed.title   ?? "",
        date:    parsed.date    ?? "",
        excerpt: parsed.excerpt ?? "",
        tags:    parsed.tags    ?? [],
        content: parsed.content ?? "",
      }}
      isEditing
    />
  );
}