import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
let fixed = 0;

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  const raw = fs.readFileSync(filePath, "utf-8");

  // Extract the FIRST valid frontmatter block only (between first pair of ---)
  const match = raw.match(/^(---[\s\S]*?---)([\s\S]*)$/);
  if (!match) {
    console.log(`⚠️  ${file} — no frontmatter found, skipping`);
    continue;
  }

  const firstBlock = match[1];
  let body = match[2];

  // Remove any extra --- blocks that leaked into body
  body = body.replace(/---[\s\S]*?---/g, "");

  // Remove any bare frontmatter key: value lines outside ---
  body = body.replace(/^(title|date|author|excerpt|description|tags|category|featured|coverImage|image|slug):\s*(".*?"|'.*?'|.*?)\s*$/gm, "");

  // Remove leftover base64 data lines
  body = body.replace(/^.*data:image\/[^\s]+.*$/gm, "");

  // Clean up excessive blank lines (max 2 consecutive)
  body = body.replace(/\n{3,}/g, "\n\n");

  const cleaned = firstBlock + "\n" + body.trim() + "\n";

  if (cleaned !== raw) {
    fs.writeFileSync(filePath, cleaned, "utf-8");
    console.log(`✅ Fixed: ${file}`);
    fixed++;
  } else {
    console.log(`⏭️  Clean: ${file}`);
  }
}

console.log(`\n🎉 Done — ${fixed} file(s) fixed out of ${files.length} total.`);