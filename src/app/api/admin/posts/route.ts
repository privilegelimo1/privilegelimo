import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { listFiles, getFile } from "@/lib/github";
import { buildMdx, parseMdxFrontmatter } from "@/lib/mdxUtils";
import { putFile } from "@/lib/github";

async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

// GET /api/admin/posts — list all posts
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const files = await listFiles("content/blog");
    const posts = await Promise.all(
      files
        .filter((f) => f.name.endsWith(".mdx"))
        .map(async (f) => {
          const slug = f.name.replace(/\.mdx$/, "");
          const file = await getFile(f.path);
          if (!file) return null;
          const parsed = parseMdxFrontmatter(file.content);
          return { slug, ...parsed, content: undefined };
        })
    );

    const sorted = posts
      .filter(Boolean)
      .sort((a, b) =>
        new Date(b!.date as string).getTime() - new Date(a!.date as string).getTime()
      );

    return NextResponse.json(sorted);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to list posts" }, { status: 500 });
  }
}

// POST /api/admin/posts — create new post
export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { slug, ...rest } = body;

    if (!slug || !rest.title || !rest.content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const path = `content/blog/${slug}.mdx`;
    const existing = await getFile(path);
    if (existing) {
      return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
    }

    const mdx = buildMdx(rest);
    await putFile(path, mdx, `blog: add "${rest.title}"`);

    return NextResponse.json({ ok: true, slug });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
