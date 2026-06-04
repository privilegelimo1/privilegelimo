import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import HomePageClient from "./HomePageClient"

export async function generateMetadata(): Promise<Metadata> {
  const supabase = await createClient()
  const { data } = await supabase
    .from("seo_pages")
    .select("title, description, og_image, canonical, keywords")
    .eq("page_path", "/")
    .single()

  const title =
    data?.title ?? "Our Services | Luxury Chauffeur & Van Rental Dubai"
  const description =
    data?.description ??
    "Explore all Privilege Limo chauffeur services in Dubai & UAE. Luxury chauffeur service, Mercedes Sprinter van rental, Mercedes V-Class, Vito, bus hire and more."
  const canonical =
    data?.canonical ?? "https://www.privilegelimo.com"
  const ogImage =
    data?.og_image ?? "https://www.privilegelimo.com/og-image.jpg"

  return {
    title,
    description,
    keywords: data?.keywords ?? [
      "luxury chauffeur dubai",
      "mercedes van rental in dubai",
      "mercedes sprinter rental in dubai",
      "airport transfer in dubai",
      "bus rental in dubai",
      "car with driver in dubai",
      "privilege limo services",
      "luxury transport in dubai",
      "corporate chauffeur in dubai",
      "vip transfer in dubai",
    ],
    alternates: { canonical },
    openGraph: {
      title:
        data?.title ?? "Luxury Chauffeur & Transportation Services Dubai",
      description:
        data?.description ??
        "Explore the full range of luxury chauffeur services by Privilege Limo — airport transfers, monthly rentals, corporate travel, van & bus hire, wedding cars, and more. Available 24/7 across Dubai and the UAE.",
      url: canonical,
      siteName: "Privilege Limo",
      locale: "en_AE",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Luxury Chauffeur Services Dubai | Privilege Limo",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        data?.title ?? "Luxury Chauffeur & Transportation Services Dubai",
      description:
        data?.description ??
        "Explore the full range of luxury chauffeur services by Privilege Limo — airport transfers, monthly rentals, corporate travel, van & bus hire, wedding cars, and more. Available 24/7 across Dubai and the UAE.",
      site: "@privilegeuae",
      images: [ogImage],
    },
    other: {
      "og:logo": "https://www.privilegelimo.com/logo.webp",
    },
  }
}

export default function HomePage() {
  return <HomePageClient />
}