export function buildMdx(data: {
  title: string;
  date: string;
  excerpt: string;
  tags: string;
  author: string;
  coverImage: string;
  content: string;
}): string {
  const tags = data.tags
    ? data.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .map((t) => `"${t}"`)
        .join(", ")
    : "";

  const frontmatter = [
    "---",
    `title: "${data.title.replace(/"/g, '\\"')}"`,
    `date: "${data.date}"`,
    data.excerpt ? `excerpt: "${data.excerpt.replace(/"/g, '\\"')}"` : "",
    tags ? `tags: [${tags}]` : "",
    data.author ? `author: "${data.author}"` : "",
    data.coverImage ? `coverImage: "${data.coverImage}"` : "",
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  return `${frontmatter}\n\n${data.content}`;
}

export function parseMdxFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { content: raw };

  const frontmatterStr = match[1];
  const content = match[2].trim();
  const meta: Record<string, string | string[]> = {};

  frontmatterStr.split("\n").forEach((line) => {
    const colon = line.indexOf(":");
    if (colon === -1) return;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim();

    if (val.startsWith("[")) {
      // Parse array like ["a", "b"]
      meta[key] = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^"|"$/g, ""));
    } else {
      meta[key] = val.replace(/^"|"$/g, "");
    }
  });

  return { ...meta, content };
}
