export function buildMdx(fields: {
  title: string;
  date: string;
  excerpt?: string;
  tags?: string | string[];
  content: string;
  author?: string;
  coverImage?: string;
  metaTitle?: string;
  metaDescription?: string;
}): string {
  const tags = Array.isArray(fields.tags)
    ? fields.tags
    : (fields.tags ?? "").split(",").map((t) => t.trim()).filter(Boolean);

  const lines = [
    "---",
    `title: "${fields.title.replace(/"/g, "'")}"`,
    `date: "${fields.date}"`,
    fields.author          ? `author: "${fields.author}"` : null,
    fields.excerpt         ? `excerpt: "${fields.excerpt.replace(/"/g, "'")}"` : null,
    tags.length            ? `tags: [${tags.map((t) => `"${t}"`).join(", ")}]` : null,
    fields.coverImage      ? `coverImage: "${fields.coverImage}"` : null,
    fields.metaTitle       ? `metaTitle: "${fields.metaTitle.replace(/"/g, "'")}"` : null,
    fields.metaDescription ? `metaDescription: "${fields.metaDescription.replace(/"/g, "'")}"` : null,
    "---",
    "",
    fields.content.trim(),
    "",
  ].filter((l): l is string => l !== null);

  return lines.join("\n");
}