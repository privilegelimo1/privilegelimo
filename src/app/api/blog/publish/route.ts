import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { putFile, getFile } from "@/lib/github";
import { buildMdx } from "@/lib/mdxUtils";
import { clearPostCache } from "@/lib/blog";

async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  const {
    filename,
    content,
    title,
    date,
    excerpt,
    tags,
    author,
    coverImage,
    metaTitle,
    metaDescription,
  } = await req.json();

  if (!filename || !content) {
    return NextResponse.json(
      { error: "Missing filename or content" },
      { status: 400 }
    );
  }

  const filePath = `content/blog/${filename}.mdx`;

  try {
    const mdx = buildMdx({
      title,
      date:            date            ?? "",
      excerpt:         excerpt         ?? "",
      tags:            tags            ?? [],
      author:          author          ?? "",
      coverImage:      coverImage      ?? "",
      metaTitle:       metaTitle       ?? "",
      metaDescription: metaDescription ?? "",
      content,
    });

    const existing = await getFile(filePath);
    await putFile(
      filePath,
      mdx,
      existing ? `blog: update "${filename}"` : `blog: add "${filename}"`
    );

    clearPostCache();

    return NextResponse.json({ success: true, path: filePath });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "GitHub commit failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}