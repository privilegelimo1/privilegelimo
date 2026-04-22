import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate type
    const allowedTypes = ["image/webp", "image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type. Use WebP, JPEG or PNG." }, { status: 400 });
    }

    // Max 5MB
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Max 5MB." }, { status: 400 });
    }

    const bytes  = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitise filename
    const ext      = path.extname(file.name).toLowerCase() || ".webp";
    const basename = path.basename(file.name, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 60);
    const filename  = `${basename}-${Date.now()}${ext}`;

    const uploadDir = path.join(process.cwd(), "public", "images", "blog");
    if (!existsSync(uploadDir)) await mkdir(uploadDir, { recursive: true });

    await writeFile(path.join(uploadDir, filename), buffer);

    return NextResponse.json({ url: `/images/blog/${filename}` });
  } catch (err) {
    console.error("Image upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
