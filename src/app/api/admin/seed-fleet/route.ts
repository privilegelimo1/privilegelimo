import { NextResponse } from "next/server";
import { adminClient } from "@/lib/supabase/admin";
import fleet from "@/data/fleet.json";

export async function POST() {
  // Step 1: seed categories first and verify
  const categories = [
  { slug: "business-class",                name: "business-class",                display_name: "Business Class",               sort_order: 1 },
  { slug: "first-class",                   name: "first-class",                   display_name: "First Class",                  sort_order: 2 },
  { slug: "business-van",                  name: "business-van",                  display_name: "Business Van",                 sort_order: 3 },
  { slug: "luxury-suv",                    name: "luxury-suv",                    display_name: "Luxury SUV",                   sort_order: 4 },
  { slug: "mercedes-sprinter-luxury-van",  name: "mercedes-sprinter-luxury-van",  display_name: "Mercedes Sprinter Luxury Van", sort_order: 5 },
  { slug: "mercedes-sprinter-luxury-vip",  name: "mercedes-sprinter-luxury-vip",  display_name: "Mercedes Sprinter Luxury VIP", sort_order: 6 },
  { slug: "rolls-royce",                   name: "rolls-royce",                   display_name: "Rolls-Royce",                  sort_order: 7 },
  { slug: "stretch-limousine",             name: "stretch-limousine",             display_name: "Stretch Limousine",            sort_order: 8 },
  { slug: "standard-bus",                  name: "standard-bus",                  display_name: "Standard Bus",                 sort_order: 9 },
  { slug: "luxury-coach-bus",              name: "luxury-coach-bus",              display_name: "Luxury Coach Bus",             sort_order: 10 },
];

  const { error: catError } = await adminClient
    .from("vehicle_categories")
    .upsert(categories, { onConflict: "slug" });

  if (catError) {
    return NextResponse.json({ error: "Categories failed: " + catError.message }, { status: 500 });
  }

  // Step 2: verify categories actually exist
  const { data: existingCats } = await adminClient
    .from("vehicle_categories")
    .select("slug");

  const catSlugs = (existingCats ?? []).map((c) => c.slug);

  // Step 3: only insert vehicles whose class_slug exists
  const vehicles = (fleet as any[])
    .filter((v) => catSlugs.includes(v.classSlug))
    .map((v, i) => ({
      slug:            v.slug,
      class_slug:      v.classSlug,
      name:            v.name,
      category:        v.category,
      passengers:      v.passengers,
      luggage:         v.luggage,
      transfer_price:  v.transferPrice,
      price_5hr:       v.price5hr,
      price_10hr:      v.price10hr,
      images:          v.images ?? [],
      short_desc:      v.desc ?? "",
      long_desc:       v.longDesc ?? "",
      features:        v.features ?? [],
      specs:           v.specs ?? [],
      meta_title:      v.seoTitle ?? "",
      meta_desc:       v.metaDesc ?? "",
      seo_keywords:    v.seoKeywords ?? "",
      seo_title:       v.seoTitle ?? "",
      seo_description: v.seoDescription ?? "",
      available:       v.available ?? true,
      badge:           v.badge ?? null,
      sort_order:      i,
    }));

  // Log any skipped vehicles
  const skipped = (fleet as any[]).filter((v) => !catSlugs.includes(v.classSlug));
  if (skipped.length > 0) {
    console.warn("Skipped vehicles (unknown classSlug):", skipped.map((v) => `${v.slug} → ${v.classSlug}`));
  }

  const { error: vehError } = await adminClient
    .from("vehicles")
    .upsert(vehicles, { onConflict: "slug" });

  if (vehError) {
    return NextResponse.json({ error: "Vehicles failed: " + vehError.message }, { status: 500 });
  }

  return NextResponse.json({
    count: vehicles.length,
    skipped: skipped.length,
    categories: catSlugs,
  });
}