import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.privilegelimo.com";

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getBlogSlugs();

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    // ── Core pages ────────────────────────────────────────────────────────
    { url: `${BASE_URL}/`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/services`,    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/fleet`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/blog`,        lastModified: new Date(), changeFrequency: "daily",   priority: 0.8 },
    { url: `${BASE_URL}/why-us`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact-us`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // ── Service pages ─────────────────────────────────────────────────────
    { url: `${BASE_URL}/services/airport-transfer`,                              lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/luxury-chauffeur-service-in-dubai`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/corporate-chauffeur-services`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/monthly-car-rental-with-driver`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/mercedes-sprinter-van-rental`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/mercedes-van-rental-dubai`,                     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/bus-and-van-rental-in-dubai`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/luxury-van-rental-in-dubai`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/vip-chauffeur-service`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/event-transportation`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/private-driver-for-sightseeing-services`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/wedding-limo-services`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/full-day-and-hourly-chauffeur-services`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },


    // ── Fleet category pages ──────────────────────────────────────────────
    { url: `${BASE_URL}/fleet/business-class`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fleet/first-class`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fleet/luxury-suv`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fleet/business-van`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fleet/mercedes-sprinter-luxury-van`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fleet/mercedes-sprinter-luxury-vip`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fleet/stretch-limousine`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fleet/rolls-royce`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fleet/standard-bus`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/luxury-coach-bus`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    // ── Individual fleet vehicles ─────────────────────────────────────────
    { url: `${BASE_URL}/fleet/business-class/audi-a6`,                              lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/business-class/lexus-es300`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/business-class/byd-han`,                              lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/business-class/toyota-granvia`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/business-class/citroen-space-tourer`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/first-class/mercedes-s500`,                           lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/first-class/bmw-7-series`,                            lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/luxury-suv/gmc-yukon-denali`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/luxury-suv/range-rover-sport`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/luxury-suv/cadillac-escalade`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/business-van/mercedes-v-class`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/business-van/mercedes-vito-tourer`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/business-van/mercedes-v300-tiffany`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/business-van/mercedes-vip-trend-250`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/mercedes-sprinter-luxury-van/mercedes-sprinter-19`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/mercedes-sprinter-luxury-van/mercedes-sprinter-ultra-luxury`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/mercedes-sprinter-luxury-vip/mercedes-sprinter-avant-garde`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/mercedes-sprinter-luxury-vip/mercedes-sprinter-business-vip`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/stretch-limousine/gmc-yukon-limousine`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/stretch-limousine/gmc-yukon-diamond-limousine`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/stretch-limousine/chevy-suburban-titanium-limousine`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/stretch-limousine/chrysler-emerald-limousine`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/rolls-royce/rolls-royce-ghost`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/rolls-royce/rolls-royce-cullinan`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/fleet/standard-bus/toyota-hiace-11`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/fleet/standard-bus/toyota-coaster-21`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/fleet/luxury-coach-bus/50-seater-luxury-coach`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },

    // ── Blog posts (dynamic) ──────────────────────────────────────────────
    ...blogEntries,
  ];
}