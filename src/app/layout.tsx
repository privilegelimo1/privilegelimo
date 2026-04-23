import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.privilegelimo.com"), // ← ADD THIS — fixes all relative canonical/OG URLs
  title: {
  default: "Privilege Limo | Luxury Chauffeur Services in Dubai",
  template: "%s | Privilege Limo",
},
  description:
    "Privilege Luxury Travel LLC - Dubai's most trusted chauffeur service. Premium airport transfers, corporate travel, weddings & events across Dubai, Abu Dhabi & Sharjah. Available 24/7. Call +971 50 920 0818.",
  keywords: [
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
    title: "Privilege Limo | Luxury Chauffeur Service in Dubai",
    description:
      "25 years of premium chauffeur services in Dubai. Airport transfers, corporate travel, weddings & VIP events. Available 24/7.",
    url: "https://www.privilegelimo.com",
    siteName: "Privilege Luxury Travel LLC",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privilege Limo | Luxury Chauffeur Service in Dubai",
    description:
      "Premium chauffeur & limousine services across Dubai & UAE. Book now.",
    site: "@privilegeuae",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // ← REMOVED hardcoded canonical here — each page sets its own
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              name: "Privilege Luxury Travel LLC",
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
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
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
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Transfer Dubai", description: "Luxury airport transfers from DXB, DWC, Abu Dhabi & Sharjah airports" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Chauffeur Service Dubai" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Car Hire Dubai" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mercedes Sprinter Rental Dubai" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Bus Rental Dubai" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rent a Car with Driver Dubai" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children} <FloatingContact /></body>
    </html>
  );
}