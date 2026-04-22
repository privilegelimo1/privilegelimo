import fs from "fs";
import path from "path";

// Pages where canonical doesn't match the actual URL
const fixes = [
  {
    file: "src/app/services/bus-and-van-rental-in-dubai/page.tsx",
    canonical: "/services/bus-and-van-rental-in-dubai",
  },
  {
    file: "src/app/services/luxury-chauffeur-service-in-dubai/page.tsx",
    canonical: "/services/luxury-chauffeur-service-in-dubai",
  },
  {
    file: "src/app/services/luxury-van-rental-in-dubai/page.tsx",
    canonical: "/services/luxury-van-rental-in-dubai",
  },
  {
    file: "src/app/services/private-driver-for-sightseeing-services/page.tsx",
    canonical: "/services/private-driver-for-sightseeing-services",
  },
];

for (const { file, canonical } of fixes) {
  const filePath = path.join(process.cwd(), file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`);
    continue;
  }

  let raw = fs.readFileSync(filePath, "utf-8");

  // Replace any existing wrong canonical
  if (raw.includes("alternates") && raw.includes("canonical")) {
    raw = raw.replace(
      /alternates:\s*\{[^}]*canonical:[^}]*\}/gs,
      `alternates: { canonical: "${canonical}" }`
    );
    fs.writeFileSync(filePath, raw, "utf-8");
    console.log(`✅ Fixed canonical → ${canonical}`);
  } else if (raw.includes("export const metadata")) {
    // Inject if missing
    const updated = raw.replace(
      /(export const metadata[^=]*=\s*\{)/,
      `$1\n  alternates: { canonical: "${canonical}" },`
    );
    fs.writeFileSync(filePath, updated, "utf-8");
    console.log(`✅ Injected canonical → ${canonical}`);
  } else {
    console.log(`⚠️  No metadata export found: ${file}`);
  }
}

console.log("\n🎉 Done.");