import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.0.17"],
  pageExtensions: ["ts", "tsx", "mdx"],

  async redirects() {
    return [
      // Chauffeur / general service pages
      {
        source: "/reliable-chauffeur-services-in-dubai",
        destination: "/services/corporate-chauffeur-services",
        permanent: true,
      },
      {
        source: "/luxury-chauffeur-services-in-dubai",
        destination: "/services/luxury-chauffeur-service-in-dubai",
        permanent: true,
      },
      {
        source: "/rent-a-car-with-driver-in-dubai",
        destination: "/services/monthly-car-rental-with-driver",
        permanent: true,
      },

      // Airport transfers
      {
        source: "/reliable-airport-transfers",
        destination: "/services/airport-transfer",
        permanent: true,
      },

      // Bus & Van rental
      {
        source: "/bus-and-van-rental-in-dubai",
        destination: "/services/bus-and-van-rental-in-dubai",
        permanent: true,
      },
      {
        source: "/mercedes-van-rental-dubai",
        destination: "/services/mercedes-van-rental-dubai",
        permanent: true,
      },
      {
        source: "/mercedes-sprinter-van-rental",
        destination: "/services/mercedes-sprinter-van-rental",
        permanent: true,
      },
      {
        source: "/mercedes-sprinter-chauffeur-service",
        destination: "/services/mercedes-sprinter-van-rental",
        permanent: true,
      },

      // Inter-city transfers
      {
        source: "/transfers-from-dubai-to-abu-dhabi",
        destination: "/services/airport-transfer",
        permanent: true,
      },

      // Blog / news
      {
        source: "/chauffeur-service-news-trends",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/limousine-service",
        destination: "/blog",
        permanent: true,
      },

      // Static pages
      {
        source: "/contact-us",
        destination: "/contact-us",
        permanent: false, // same slug — remove this entry, no redirect needed
      },
      {
        source: "/privacy-policy",
        destination: "/privacy-policy",
        permanent: false, // same slug — remove this entry, no redirect needed
      },
    ];
  },
};

export default nextConfig;