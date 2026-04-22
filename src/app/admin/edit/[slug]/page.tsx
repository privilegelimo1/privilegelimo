import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
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
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <PostEditor
      isEditing
      initialData={{
        slug,
        title:   post.title       ?? "",
        date:    post.date        ?? "",
        excerpt: post.description ?? "",
        tags:    post.tags        ?? [],
        content: post.content     ?? "",
      }}
    />
  );
}