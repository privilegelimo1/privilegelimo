import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { putFile, getFile } from "@/lib/github";
import { buildMdx } from "@/lib/mdxUtils";

async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

const { filename, content, title, date, excerpt, tags, author, coverImage } = await req.json();

  if (!filename || !content) {
    return NextResponse.json({ error: "Missing filename or content" }, { status: 400 });
  }

  const path = `content/blog/${filename}.mdx`;

  try {
const mdx = buildMdx({ title, date, excerpt, tags, author, coverImage, content });
    const existing = await getFile(path);
    await putFile(path, mdx, existing ? `blog: update "${filename}"` : `blog: add "${filename}"`);
    return NextResponse.json({ success: true, path });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "GitHub commit failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}