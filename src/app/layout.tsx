import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import FloatingContactWrapper from "@/components/FloatingContactWrapper";
import { createClient } from "@/lib/supabase/server"

export async function generateMetadata(): Promise<Metadata> {
  const supabase = await createClient()
  const { data } = await supabase
    .from("seo_pages")
    .select("title, description, og_image, canonical, keywords")
    .eq("page_path", "/")
    .single()

  const title       = data?.title       ?? "Privilege Limo | Luxury Chauffeur Services in Dubai"
  const description = data?.description ?? "Dubai's most trusted luxury chauffeur services. Premium airport transfers, corporate travel, weddings, VIP transfer & events across Dubai, Abu Dhabi & Sharjah."
  const ogImage     = data?.og_image    ?? "https://www.privilegelimo.com/og-image.jpg"

  return {
    metadataBase: new URL("https://www.privilegelimo.com"),
    title,
    description,
    keywords: data?.keywords ?? [
      "luxury chauffeur Dubai",
      "chauffeur service Dubai",
      "airport transfer Dubai",
      "airport transfer UAE",
      "rent a car with driver Dubai",
      "car hire with driver Dubai",
      "corporate transfer Dubai",
      "business transfer Dubai",
      "limousine service Dubai",
      "limo service Dubai",
      "Mercedes Sprinter rental Dubai",
      "luxury van rental Dubai",
      "luxury bus rental Dubai",
      "chauffeur driven cars Dubai",
      "VIP transportation Dubai",
      "wedding car Dubai",
      "minivan rental Dubai",
      "luxury car rental Dubai with driver",
      "DXB airport transfer",
      "chauffeur hire Dubai",
      "Privilege Luxury Travel",
      "privilegelimo.com",
    ],
    openGraph: {
      title,
      description,
      url:      "https://www.privilegelimo.com",
      siteName: "Privilege Limo",
      locale:   "en_AE",
      type:     "website",
      images:   [{ url: ogImage, width: 1200, height: 630, alt: title, type: "image/jpeg" }],
    },
    twitter: {
      card:        "summary_large_image",
      title,
      description,
      site:        "@privilegeuae",
      images:      [ogImage],
    },
    other: { "og:logo": "https://www.privilegelimo.com/logo.webp" },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? headersList.get("x-invoke-path") ?? "";
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Privilege Limo",
              alternateName: "Privilege Limo",
              description:
                "Dubai's most trusted luxury chauffeur service. Premium airport transfers, corporate travel, weddings and VIP events across UAE.",
              url: "https://www.privilegelimo.com",
              telephone: ["+971509200818", "+971509200818"],
              email: "booking@privilegelimo.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Suite# 45, Shraifi One Building, Za'abeel St",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "25.2285",
                longitude: "55.3028",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday",
                  "Friday", "Saturday", "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "AED 350 - AED 1100",
              currenciesAccepted: "AED",
              paymentAccepted: "Cash, Credit Card",
              areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah", "UAE"],
              sameAs: [
                "https://www.facebook.com/privilegelimo",
                "https://x.com/privilegeuae",
                "https://www.instagram.com/privilegeluxurylimo/",
                "https://www.youtube.com/@privilegechauffeurandlimousine",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "9",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Luxury Chauffeur Services Dubai",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Airport Transfer Dubai",
                      description:
                        "Luxury airport transfers from DXB, DWC, Abu Dhabi & Sharjah airports",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Corporate Chauffeur Service Dubai" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Wedding Car Hire Dubai" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Mercedes Sprinter Rental Dubai" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Luxury Bus Rental Dubai" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Rent a Car with Driver Dubai" },
                  },
                ],
              },
            }),
          }}
        />

        <link rel="apple-touch-icon" href="/icons/icon-192.png" />

      </head>
      <body>
        {children}
        <FloatingContactWrapper />
      </body>
    </html>
  );
}