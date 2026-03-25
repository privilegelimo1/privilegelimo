import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Rent a Car with Driver Dubai | Chauffeur Driven Car Hire — Privilege Limo",
  description: "Rent a car with driver in Dubai. Hourly and full-day luxury chauffeur service. Mercedes, BMW & premium vehicles. Book now — +971 50 920 0818.",
  keywords: ["rent a car with driver Dubai", "car hire with driver Dubai", "chauffeur driven car Dubai", "hourly car hire Dubai", "private driver Dubai"],
  alternates: { canonical: "https://privilegelimo.com/services/bus-and-van-rental-in-dubai" },
};

export default function RentACarWithDriverPage() {
  return (
    <ServicePage
      title="Rent a Car with Driver Dubai"
      subtitle="Hourly · Daily · City Tours"
      slug="rent-a-car-with-driver"
      heroHeading={"Your city.\nYour schedule.\nYour chauffeur."}
      heroSub="Rent a car with a professional driver in Dubai and explore the city entirely on your own terms — with zero stress, zero parking, zero hassle."
      description="Our rent a car with driver service in Dubai gives you the freedom to explore the city on your own terms — without the stress of traffic, navigation, or parking. A professional chauffeur and your chosen luxury vehicle are completely at your disposal."
      longDescription="Perfect for tourists, residents, and business visitors alike, our chauffeur-driven car rental service covers everything from quick city errands to full-day Dubai explorations. Visit the Burj Khalifa, explore the Palm Jumeirah, shop at Dubai Mall, or conduct back-to-back business meetings — all with a dedicated, knowledgeable chauffeur who knows the city inside out. Hourly, half-day, and full-day bookings available."
      keyPoints={[
        "Flexible hourly or full-day bookings from 2 hours",
        "Professional knowledgeable chauffeur included",
        "Choose from our full premium fleet",
        "Ideal for city tours, shopping & business errands",
        "Burj Khalifa, Palm Jumeirah & all Dubai landmarks",
        "No parking stress, no navigation, no traffic worries",
        "Available 24/7 across Dubai and UAE",
        "Transparent fixed hourly rates",
      ]}
      idealFor={[
        "Tourists exploring Dubai for the first time",
        "Residents needing errands & shopping runs",
        "Business visitors between meetings",
        "Full-day city tours & sightseeing",
        "School runs & family transport",
        "Medical appointments & hospital visits",
      ]}
      whyUs={[
        { title: "Local Knowledge", desc: "Our chauffeurs know every corner of Dubai — the best routes, hidden gems, and fastest ways to get anywhere." },
        { title: "Fully Flexible", desc: "Book by the hour with no commitment. Add more time as you go. Your schedule drives everything." },
        { title: "Zero Stress", desc: "No parking, no navigation, no traffic stress. Just sit back, relax, and enjoy Dubai from the back seat." },
        { title: "Premium Fleet", desc: "Choose from our full fleet — from the Mercedes S-Class for solo travellers to the V-Class for families." },
      ]}
      fleetSlugs={["mercedes-s500", "bmw-7-series", "mercedes-vip-trend-250", "mercedes-v300-tiffany"]}
      faq={[
        { q: "What is the minimum booking duration?", a: "Our minimum booking for hourly disposal is 2 hours. Half-day and full-day packages are also available at preferential rates." },
        { q: "Can I extend my booking on the day?", a: "Yes, subject to availability. Simply inform your chauffeur and we will extend your booking in real time." },
        { q: "Is fuel and parking included?", a: "Fuel costs are included in your rate. Parking fees at venues and attractions are charged separately." },
        { q: "Can I use this service for a Dubai city tour?", a: "Absolutely. Our chauffeurs can guide you through all of Dubai's iconic landmarks at your own pace and schedule." },
      ]}
    />
  );
}
