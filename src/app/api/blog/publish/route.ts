import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      slug,
      excerpt,
      date,
      author,
      category,
      tags,
      featuredImage,
      featuredImageAlt,
      metaTitle,
      metaDescription,
      canonical,
      keywords,
      ogImage,
      index,
      draft,
      content,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required." },
        { status: 400 }
      );
    }

    const owner = process.env.GITHUB_OWNER!;
    const repo = process.env.GITHUB_REPO!;
    const branch = process.env.GITHUB_BRANCH || "main";
    const token = process.env.GITHUB_TOKEN!;

    const filePath = `content/blogs/${slug}.mdx`;

    const frontmatter = `---
title: "${title}"
slug: "${slug}"
excerpt: "${excerpt || ""}"
date: "${date || ""}"
author: "${author || ""}"
category: "${category || ""}"
tags: [${(tags || []).map((tag: string) => `"${tag}"`).join(", ")}]
featuredImage: "${featuredImage || ""}"
featuredImageAlt: "${featuredImageAlt || ""}"
draft: ${Boolean(draft)}
seo:
  metaTitle: "${metaTitle || ""}"
  metaDescription: "${metaDescription || ""}"
  canonical: "${canonical || ""}"
  keywords: "${keywords || ""}"
  ogImage: "${ogImage || ""}"
  index: ${Boolean(index)}
---

${content}
`;

    const encodedContent = Buffer.from(frontmatter).toString("base64");

    const existingFileRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    let sha: string | undefined = undefined;

    if (existingFileRes.ok) {
      const existingFile = await existingFileRes.json();
      sha = existingFile.sha;
    }

    const githubRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `${sha ? "update" : "create"} blog post: ${slug}`,
          content: encodedContent,
          branch,
          ...(sha ? { sha } : {}),
        }),
      }
    );

    if (!githubRes.ok) {
      const error = await githubRes.json();
      return NextResponse.json(
        { error: error.message || "GitHub publish failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      slug,
      path: filePath,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}