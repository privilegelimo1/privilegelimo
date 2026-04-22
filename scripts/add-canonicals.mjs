import fs from "fs";
import path from "path";
import { readdirSync, statSync } from "fs";

const APP_DIR = path.join(process.cwd(), "src/app");

// Recursive file finder — no glob needed
function findPages(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      findPages(full, results);
    } else if (entry === "page.tsx" || entry === "page.ts") {
      results.push(full);
    }
  }
  return results;
}

function fileToCanonical(filePath) {
  let route = filePath
    .replace(APP_DIR, "")
    .replace(/\/page\.(tsx|ts)$/, "")
    .replace(/\\/g, "/");

  if (route.includes("[")) return null;
  if (route === "") route = "/";

  return route;
}

const pages = findPages(APP_DIR);
let updated = 0;
let skipped = 0;

for (const filePath of pages) {
  const canonical = fileToCanonical(filePath);

  if (!canonical)                        { skipped++; continue; }
  if (canonical.startsWith("/admin"))    { skipped++; continue; }
  if (canonical.startsWith("/api"))      { skipped++; continue; }

  const raw = fs.readFileSync(filePath, "utf-8");

  if (raw.includes("alternates") && raw.includes("canonical")) {
    console.log(`⏭️  Already has canonical: ${canonical}`);
    skipped++;
    continue;
  }

  if (!raw.includes("export const metadata") && !raw.includes("export async function generateMetadata")) {
    console.log(`⚠️  No metadata found, skipping: ${canonical}`);
    skipped++;
    continue;
  }

  const updated_content = raw.replace(
    /(export const metadata[^=]*=\s*{)/,
    `$1\n  alternates: { canonical: "${canonical}" },`
  );

  if (updated_content === raw) {
    console.log(`⚠️  Could not inject into: ${canonical}`);
    skipped++;
    continue;
  }

  fs.writeFileSync(filePath, updated_content, "utf-8");
  console.log(`✅ Added canonical: ${canonical}`);
  updated++;
}

console.log(`\n🎉 Done — ${updated} pages updated, ${skipped} skipped.`);