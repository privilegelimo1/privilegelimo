import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getFile, putFile, deleteFile } from "@/lib/github";
import { buildMdx, parseMdxFrontmatter } from "@/lib/mdxUtils";

async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// GET /api/admin/post/[slug] — load post for editing
export async function GET(_req: NextRequest, { params }: RouteParams) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const file = await getFile(`content/blog/${slug}.mdx`);
  if (!file) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const parsed = parseMdxFrontmatter(file.content);
  return NextResponse.json({ slug, ...parsed });
}

// PUT /api/admin/post/[slug] — update existing post
export async function PUT(req: NextRequest, { params }: RouteParams) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const body = await req.json();
  const path = `content/blog/${slug}.mdx`;

  try {
    const existing = await getFile(path);
    const mdx = buildMdx(body);
    await putFile(path, mdx, `blog: update "${body.title}"`, existing?.sha);
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE /api/admin/post/[slug] — delete post
export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const path = `content/blog/${slug}.mdx`;

  try {
    const file = await getFile(path);
    if (!file) return NextResponse.json({ error: "Not found" }, { status: 404 });
    await deleteFile(path, file.sha, `blog: delete "${slug}"`);
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to delete post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
