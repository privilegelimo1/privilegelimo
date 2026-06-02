import { NextResponse } from "next/server";
import { adminClient } from "@/lib/supabase/admin";
import fleet from "@/data/fleet.json";

const DOMAIN = "https://www.privilegelimo.com";

// All your static pages
const staticPages = [
  {
    page_path: "/",
    title: "Luxury Chauffeur Service Dubai | Privilege Limo",
    description: "Premium chauffeur-driven cars in Dubai, Abu Dhabi & Sharjah. Airport transfers, hourly hire & corporate travel. Available 24/7. Book online or call now.",
    keywords: "chauffeur Dubai, luxury car hire Dubai, airport transfer Dubai, private driver Dubai",
    og_title: "Privilege Limo | Luxury Chauffeur Service Dubai",
    og_desc: "Premium chauffeur-driven cars in Dubai, Abu Dhabi & Sharjah. Available 24/7.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/`,
  },
  {
    page_path: "/fleet",
    title: "Our Fleet | Luxury Chauffeur Cars Dubai — Privilege Limo",
    description: "Browse our full fleet of luxury chauffeur cars in Dubai. Business Class, First Class, Vans & SUVs. From AED 300. Book online today.",
    keywords: "luxury fleet Dubai, chauffeur cars Dubai, business class car Dubai, first class sedan Dubai",
    og_title: "Luxury Fleet Dubai | Privilege Limo",
    og_desc: "Browse our full fleet of luxury chauffeur cars in Dubai. From AED 300.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/fleet`,
  },
  {
    page_path: "/fleet/business-class",
    title: "Business Class Chauffeur Cars Dubai | Privilege Limo",
    description: "Book a business class chauffeur car in Dubai. Audi A6, Lexus ES 300, BYD Han EV & more. Professional drivers, 24/7 availability. From AED 300.",
    keywords: "business class chauffeur Dubai, executive sedan Dubai, Audi A6 hire Dubai, Lexus ES Dubai",
    og_title: "Business Class Cars Dubai | Privilege Limo",
    og_desc: "Book a business class chauffeur car in Dubai. From AED 300.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/fleet/business-class`,
  },
  {
    page_path: "/fleet/first-class",
    title: "First Class Chauffeur Cars Dubai | Privilege Limo",
    description: "Book a first class chauffeur car in Dubai. Mercedes S 500, BMW 7 Series & more. The pinnacle of luxury travel. From AED 750.",
    keywords: "first class chauffeur Dubai, Mercedes S500 hire Dubai, BMW 7 series chauffeur Dubai",
    og_title: "First Class Cars Dubai | Privilege Limo",
    og_desc: "Book a first class chauffeur car in Dubai. From AED 750.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/fleet/first-class`,
  },
  {
    page_path: "/fleet/business-van",
    title: "Luxury Van & MPV Chauffeur Dubai | Privilege Limo",
    description: "Book a luxury van or MPV chauffeur in Dubai. Mercedes V-Class, Vito, Sprinter & more. Up to 19 passengers. From AED 350.",
    keywords: "luxury van hire Dubai, Mercedes V-Class Dubai, group transfer Dubai, MPV chauffeur Dubai",
    og_title: "Luxury Vans & MPVs Dubai | Privilege Limo",
    og_desc: "Book a luxury van or MPV chauffeur in Dubai. From AED 350.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/fleet/business-van`,
  },
  {
    page_path: "/fleet/suv",
    title: "Luxury SUV Chauffeur Dubai | Privilege Limo",
    description: "Book a luxury SUV chauffeur in Dubai. Range Rover, Cadillac Escalade, Mercedes GLS & more. From AED 500.",
    keywords: "luxury SUV hire Dubai, Range Rover chauffeur Dubai, Cadillac Escalade Dubai, Mercedes GLS Dubai",
    og_title: "Luxury SUV Chauffeur Dubai | Privilege Limo",
    og_desc: "Book a luxury SUV chauffeur in Dubai. From AED 500.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/fleet/suv`,
  },
  {
    page_path: "/services",
    title: "Chauffeur Services Dubai | Privilege Limo",
    description: "Explore our chauffeur services in Dubai — airport transfers, hourly hire, corporate travel, weddings, tours & monthly packages. Book 24/7.",
    keywords: "chauffeur services Dubai, airport transfer Dubai, corporate car hire Dubai, wedding car Dubai",
    og_title: "Chauffeur Services Dubai | Privilege Limo",
    og_desc: "Airport transfers, hourly hire, corporate travel, weddings & more.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/services`,
  },
  {
    page_path: "/services/airport-transfer",
    title: "Airport Transfer Dubai | Luxury Chauffeur — Privilege Limo",
    description: "Book a luxury airport transfer in Dubai. Meet & greet, flight tracking, DXB & DWC airports. Professional chauffeurs. From AED 300.",
    keywords: "airport transfer Dubai, DXB airport transfer, luxury transfer Dubai, meet and greet Dubai airport",
    og_title: "Airport Transfer Dubai | Privilege Limo",
    og_desc: "Luxury airport transfers in Dubai. Meet & greet, flight tracking. From AED 300.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/services/airport-transfer`,
  },
  {
    page_path: "/services/hourly-hire",
    title: "Hourly Car Hire Dubai | Chauffeur by the Hour — Privilege Limo",
    description: "Hire a chauffeur-driven car by the hour in Dubai. 5hr & 10hr packages available. Business meetings, events & city tours. Book 24/7.",
    keywords: "hourly car hire Dubai, chauffeur by the hour Dubai, hourly driver Dubai, as directed chauffeur Dubai",
    og_title: "Hourly Chauffeur Hire Dubai | Privilege Limo",
    og_desc: "Hire a chauffeur by the hour in Dubai. 5hr & 10hr packages. Book 24/7.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/services/hourly-hire`,
  },
  {
    page_path: "/services/corporate",
    title: "Corporate Chauffeur Dubai | Business Travel — Privilege Limo",
    description: "Premium corporate chauffeur services in Dubai. Executive travel, roadshows, client transfers & corporate accounts. Discreet, professional, 24/7.",
    keywords: "corporate chauffeur Dubai, business car hire Dubai, executive travel Dubai, corporate account Dubai",
    og_title: "Corporate Chauffeur Dubai | Privilege Limo",
    og_desc: "Premium corporate chauffeur services in Dubai. Executive travel & corporate accounts.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/services/corporate`,
  },
  {
    page_path: "/services/wedding",
    title: "Wedding Car Hire Dubai | Luxury Chauffeur — Privilege Limo",
    description: "Luxury wedding car hire in Dubai. Rolls-Royce, Mercedes S-Class & more. Bridal transfers, wedding party vehicles. Book your special day.",
    keywords: "wedding car hire Dubai, bridal car Dubai, luxury wedding chauffeur Dubai, Rolls-Royce wedding Dubai",
    og_title: "Wedding Car Hire Dubai | Privilege Limo",
    og_desc: "Luxury wedding car hire in Dubai. Rolls-Royce, Mercedes S-Class & more.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/services/wedding`,
  },
  {
    page_path: "/services/tours",
    title: "City Tours Dubai | Luxury Chauffeur Sightseeing — Privilege Limo",
    description: "Explore Dubai in style with a private chauffeur-guided city tour. Burj Khalifa, Palm Jumeirah, Desert Safari & more. Book today.",
    keywords: "Dubai city tour chauffeur, private tour Dubai, sightseeing Dubai chauffeur, luxury tour Dubai",
    og_title: "Dubai City Tours | Privilege Limo",
    og_desc: "Explore Dubai in style with a private chauffeur city tour.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/services/tours`,
  },
  {
    page_path: "/services/monthly",
    title: "Monthly Car Hire Dubai | Chauffeur Package — Privilege Limo",
    description: "Book a monthly chauffeur package in Dubai. Fixed monthly rate, dedicated driver, unlimited transfers. Ideal for executives & expats.",
    keywords: "monthly car hire Dubai, monthly chauffeur Dubai, dedicated driver Dubai, monthly driver package Dubai",
    og_title: "Monthly Chauffeur Package Dubai | Privilege Limo",
    og_desc: "Fixed monthly chauffeur packages in Dubai. Dedicated driver, unlimited transfers.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/services/monthly`,
  },
  {
    page_path: "/about",
    title: "About Us | Privilege Limo Dubai",
    description: "25+ years of luxury chauffeur excellence in Dubai. Learn about Privilege Limo — our story, values and commitment to world-class service.",
    keywords: "about Privilege Limo, luxury chauffeur Dubai company, Privilege Limo",
    og_title: "About Privilege Limo Dubai",
    og_desc: "25+ years of luxury chauffeur excellence in Dubai.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/about`,
  },
  {
    page_path: "/contact-us",
    title: "Contact Us | Privilege Limo Dubai",
    description: "Get in touch with Privilege Limo — available 24/7 for bookings, enquiries and corporate accounts. Call, WhatsApp or email our team in Dubai.",
    keywords: "contact Privilege Limo, book chauffeur Dubai, WhatsApp chauffeur Dubai, Privilege Limo phone",
    og_title: "Contact Privilege Limo Dubai",
    og_desc: "Available 24/7 for bookings, enquiries and corporate accounts.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/contact-us`,
  },
  {
    page_path: "/blog",
    title: "Blog | Luxury Travel Tips & Dubai Guides — Privilege Limo",
    description: "Explore luxury travel tips, Dubai guides and chauffeur insights from the Privilege Limo blog. Updated regularly.",
    keywords: "luxury travel blog Dubai, Dubai travel guide, chauffeur tips Dubai, Privilege Limo blog",
    og_title: "Privilege Limo Blog | Dubai Luxury Travel",
    og_desc: "Luxury travel tips, Dubai guides and chauffeur insights.",
    og_image: `${DOMAIN}/og-image.jpg`,
    canonical: `${DOMAIN}/blog`,
  },
];

// Fleet vehicle pages from fleet.json
const fleetPages = (fleet as any[]).map((v) => ({
  page_path:   `/fleet/${v.classSlug}/${v.slug}`,
  title:       v.seoTitle        ?? `${v.name} Chauffeur Dubai — Privilege Limo`,
  description: v.seoDescription  ?? v.metaDesc ?? "",
  keywords:    v.seoKeywords     ?? "",
  og_title:    v.seoTitle        ?? `${v.name} Chauffeur Dubai — Privilege Limo`,
  og_desc:     v.seoDescription  ?? v.metaDesc ?? "",
  og_image:    `${DOMAIN}${v.images?.[0] ?? ""}`,
  canonical:   `${DOMAIN}/fleet/${v.classSlug}/${v.slug}`,
}));

export async function POST() {
  const allPages = [...staticPages, ...fleetPages];

  const { error } = await adminClient
    .from("seo_pages")
    .upsert(allPages, { onConflict: "page_path", ignoreDuplicates: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ count: allPages.length });
}