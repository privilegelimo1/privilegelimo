import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getFile, putFile, deleteFile } from "@/lib/github";
import { buildMdx } from "@/lib/mdxUtils";

async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

// PUT /api/admin/post/[slug] — update existing post
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;

  try {
    const body = await req.json();
    const { title, date, excerpt, tags, content } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const path = `content/blog/${slug}.mdx`;
    const existing = await getFile(path);

    if (!existing) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const mdx = buildMdx({ title, date, excerpt, tags, content });
    await putFile(path, mdx, `blog: update "${title}"`);

    return NextResponse.json({ ok: true, slug });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE /api/admin/post/[slug] — delete a post
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;

  try {
    const path = `content/blog/${slug}.mdx`;
    const existing = await getFile(path);

    if (!existing) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    await deleteFile(path, `blog: delete "${slug}"`);

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to delete post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}