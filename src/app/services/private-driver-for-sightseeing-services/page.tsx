import { fleet as allFleet } from "@/data/index";
const pageFleet = allFleet;
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import FleetPreview from "@/components/FleetPreview";


// ─── TYPE ─────────────────────────────────────────────────────────────────────

type Vehicle = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  priceLabel: string;
  priceNote: string;
  passengers: number;
  luggage: number;
  description: string;
  features: string[];
  featureLabel: string;
  image: string;
  available: boolean;
  badge: string | null;
};



// ─── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Private Driver for Sightseeing Dubai | City Tour with Driver UAE",
  description:
    "Explore Dubai in comfort with a private driver for sightseeing. Customised city tours in luxury vehicles — Burj Khalifa, Palm Jumeirah, Old Dubai, Desert and more. Book your private tour driver today.",
  keywords: [
    "private driver for sightseeing dubai",
    "dubai city tour with driver",
    "private sightseeing tour dubai",
    "hire a driver for a day dubai",
    "private driver dubai tour",
    "luxury city tour dubai",
    "dubai tour with private chauffeur",
    "private driver hire dubai",
    "sightseeing car hire dubai",
    "dubai day trip with driver",
    "private guided tour dubai by car",
    "hire car with driver for sightseeing uae",
    "burj khalifa tour with driver",
    "palm jumeirah tour dubai",
    "old dubai tour with driver",
    "full day driver hire dubai",
    "half day sightseeing dubai",
    "private driver abu dhabi tour",
    "dubai desert tour with driver",
    "tourist driver dubai",
  ],
  alternates: { canonical: "/services/private-driver-for-sightseeing-services" },
  openGraph: {
  title:       "Private Driver for Sightseeing Dubai | Personal Chauffeur City Tours UAE",
  description: "Explore Dubai in style with a private driver. Visit the Burj Khalifa, Palm Jumeirah, Dubai Frame, and more at your own pace — fully flexible sightseeing tours with a professional chauffeur. Book 24/7.",
  url:         "https://www.privilegelimo.com/services/private-driver-for-sightseeing-services",
  siteName:    "Privilege Luxury Travel LLC",
  locale:      "en_AE",
  type:        "website",
  images: [
    {
      url:    "https://www.privilegelimo.com/og-image.jpg",
      width:  1200,
      height: 630,
      alt:    "Private Driver for Sightseeing Dubai | Privilege Limo",
      type:   "image/jpeg",
    },
  ],
},
twitter: {
  card:        "summary_large_image",
  title:       "Private Driver for Sightseeing Dubai | Personal Chauffeur City Tours UAE",
  description: "Explore Dubai in style with a private driver. Visit the Burj Khalifa, Palm Jumeirah, Dubai Frame, and more at your own pace — fully flexible sightseeing tours with a professional chauffeur. Book 24/7.",
  site:        "@privilegeuae",
  images:      ["https://www.privilegelimo.com/og-image.jpg"],
},
other: {
  "og:logo": "https://www.privilegelimo.com/logo.webp",
},
};

// ─── STATIC DATA ──────────────────────────────────────────────────────────────

const seoKeywords = [
  "private driver for sightseeing dubai",
  "dubai city tour with driver",
  "private sightseeing tour dubai",
  "hire a driver for a day dubai",
  "private driver dubai tour",
  "luxury city tour dubai",
  "dubai tour with private chauffeur",
  "private driver hire dubai",
  "sightseeing car hire dubai",
  "dubai day trip with driver",
  "private guided tour dubai by car",
  "hire car with driver for sightseeing uae",
  "burj khalifa tour with driver",
  "palm jumeirah tour dubai",
  "old dubai tour with driver",
  "full day driver hire dubai",
  "half day sightseeing dubai",
  "private driver abu dhabi tour",
  "dubai desert tour with driver",
  "tourist driver dubai",
];

const blogLinks = [
  {
    title: "Reliable Chauffeur Services in Dubai",
    href: "https://www.privilegelimo.com/services/corporate-chauffeur-services",
  },
  {
    title: "Chauffeur Services in Dubai",
    href: "https://www.privilegelimo.com/services/luxury-chauffeur-service-in-dubai",
  },
  {
    title: "Transfers from Dubai to Abu Dhabi",
    href: "https://www.privilegelimo.com/services/airport-transfer",
  },
];

// ─── REUSABLE MINI CARD ───────────────────────────────────────────────────────

function MiniCard({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[1.75rem] border border-[#efefef] bg-white p-7 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.07)] hover:border-[#e0e0e0] transition-all duration-400">
      <span className="text-[9px] tracking-[0.45em] uppercase text-[#AB5461] mb-2 block font-light">
        {tag}
      </span>
      <h3 className="text-base md:text-lg font-light text-[#0a0a0a] mb-3 tracking-tight leading-snug">
        {title}
      </h3>
      <div className="text-[#7a7a7a] text-sm font-light leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

// ─── WA ICON ─────────────────────────────────────────────────────────────────

function WAIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PrivateDriverSightseeingPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-32 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 lg:items-end">

            {/* Left */}
            <div className="pb-12 lg:pb-16 pr-0 lg:pr-12">
              <div className="flex items-center gap-2 mb-8">
                <Link
                  href="/services"
                  className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light hover:text-[#AB5461] transition-colors"
                >
                  Services
                </Link>
                <span className="text-[#ddd]">/</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#AB5461] font-light">
                  Private Driver for Sightseeing
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-light text-[#0a0a0a] tracking-tight leading-[1.1]">
                Private Driver for
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  Sightseeing in Dubai
                </span>
              </h1>

              <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg">
                Discover Dubai at your own pace with a dedicated private driver — covering iconic landmarks, hidden gems and day trips across the UAE in a premium, air-conditioned vehicle tailored to your group and itinerary.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white hover:bg-[#20bd5a] transition-colors"
                >
                  <WAIcon />
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+971509200818"
                  className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
                >
                  +971 50 920 0818
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Custom itineraries",
                  "Half or full day",
                  "Premium vehicles",
                  "Local expertise",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f9f4f5] border border-[#f0e8ea] px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-light text-[#AB5461]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — hero image */}
            <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] rounded-t-[32px] overflow-hidden">
              <Image
                src="/images/services/private-driver.webp"
                alt="Private driver for sightseeing Dubai"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-5 py-4 min-w-[160px]">
                <p className="text-2xl font-light text-[#AB5461] tracking-tight">5★</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mt-0.5 font-light">
                  Rated service
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FLEET PRICING ─────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#AB5461]/3 to-[#ab5461]/4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Sightseeing Vehicles in Dubai & UAE
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Choose Your Sightseeing Vehicle
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                with a private driver included
              </span>
            </h2>
          </div>

          <FleetPreview/>
        </div>
      </section>

      {/* ── SECTION LABEL ─────────────────────────────────────────── */}
            <section className="pb-20 bg-gradient-to-b from-[#AB5461]/4 to-[#ab5461]/6">
<div className="max-w-7xl mx-auto px-6 pt-20 pb-6">
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-[#AB5461]" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#AB5461] font-light">
            Explore Dubai Your Way with a Private Driver
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Everything about our
          <br />
          <span className="text-[#AB5461] italic font-extralight">sightseeing driver service</span>
        </h2>
      </div>

      {/* ── MINI CARDS GRID ───────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">

          {/* Row 1: Overview + Freedom + Comfort */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Overview" title="Private Driver for Sightseeing in Dubai">
              <p>
                Dubai is one of the world's most remarkable cities to explore — but doing it justice requires the right transport. Privilege Limo provides private drivers exclusively for sightseeing tours, allowing you to move between landmarks at your own pace, in absolute comfort, without the limitations of group tours or public transport.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 01" title="Explore at Your Own Pace">
              <p>
                With a private driver at your disposal, the itinerary is entirely yours to decide. Spend as long as you wish at the Burj Khalifa, detour to the Gold Souk on impulse, or extend your visit to the Dubai Frame without worrying about a fixed group schedule.
              </p>
              <p>
                Your driver waits, adjusts and moves whenever you are ready — no rushing, no compromises.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 02" title="Comfortable in Dubai's Climate">
              <p>
                Exploring Dubai on foot or via public transport in the heat can be exhausting, particularly during summer months when temperatures exceed 40°C. A private sightseeing driver keeps you in a fully air-conditioned premium vehicle between every stop, ensuring you arrive at each landmark refreshed and comfortable.
              </p>
            </MiniCard>
          </div>

          {/* Row 2: Local Knowledge + Groups + Book */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Benefit 03" title="Local Knowledge at Your Service">
              <p>
                Our drivers know Dubai intimately — the best photo spots, the quickest routes between attractions, the ideal times to visit each landmark and the lesser-known areas that most tourists never discover.
              </p>
              <p>
                This local insight transforms a standard sightseeing trip into a genuinely enriching experience of the city.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 04" title="Perfect for Families and Groups">
              <p>
                Travelling with children, elderly guests or a larger group? Our Mercedes V-Class and Sprinter VIP options accommodate families and groups comfortably, keeping everyone together in one premium vehicle throughout the entire tour.
              </p>
              <p>
                No splitting across taxis, no waiting at pick-up points — just seamless group sightseeing from start to finish.
              </p>
            </MiniCard>

            <MiniCard tag="Book Now" title="Plan Your Dubai Sightseeing Tour Today">
              <p>
                Tell us how many guests, which landmarks you want to visit and whether you prefer a half-day or full-day tour. We will arrange the right vehicle, assign a knowledgeable driver and confirm your itinerary before the tour begins.
              </p>
              <p>
                Message us on WhatsApp to get started — we respond promptly and can often accommodate same-day requests.
              </p>
              <a
                href="https://wa.me/971509200818"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#AB5461] transition-all duration-300"
              >
                Book on WhatsApp
              </a>
            </MiniCard>
          </div>

          {/* Row 3: Popular Tours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Popular Tour — 01" title="Modern Dubai: Skyline and Icons">
              <p>
                Cover the very best of modern Dubai in one seamless tour — the Burj Khalifa, Dubai Mall, Dubai Fountain, Museum of the Future, Dubai Frame and the iconic Burj Al Arab coastal drive. Your private driver handles all parking and routing so you simply step out, explore and step back in.
              </p>
            </MiniCard>

            <MiniCard tag="Popular Tour — 02" title="Old Dubai: Heritage and Culture">
              <p>
                Discover the historic heart of the city — the Al Fahidi Historical Neighbourhood, Dubai Creek, the Gold Souk, Spice Souk and Deira. Your driver will take you across to the old side of the creek and wait while you explore at your own speed through the winding lanes of one of the city's most atmospheric districts.
              </p>
            </MiniCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Popular Tour — 03" title="Palm Jumeirah and Waterfront">
              <p>
                Explore the world-famous Palm Jumeirah, drive the trunk and fronds, stop at Atlantis The Palm and take in the sweeping views of the Dubai Marina skyline from the Palm's western crescent. A stunning half-day route with some of the most photographed scenery in the UAE.
              </p>
            </MiniCard>

            <MiniCard tag="Popular Tour — 04" title="Day Trip to Abu Dhabi">
              <p>
                Make the most of your time in the UAE with a full-day private driver tour to Abu Dhabi — visiting the Sheikh Zayed Grand Mosque, the Corniche, Ferrari World or Louvre Abu Dhabi before returning comfortably to Dubai in the evening.
              </p>
              <p>
                All inter-emirate travel is covered under the one tour booking with no additional charges.
              </p>
            </MiniCard>
          </div>

          {/* Row 4: Service Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Tour Options" title="Half Day and Full Day Packages">
              <p>
                Whether you have a few hours between meetings or a full day to dedicate to exploring, we offer both half-day (4–5 hours) and full-day (8–10 hours) private driver packages. Both options include a dedicated driver and vehicle for the entire duration with no per-stop charges.
              </p>
            </MiniCard>

            <MiniCard tag="Flexibility" title="Fully Customisable Itineraries">
              <p>
                You are not bound to a set list of stops. Share your interests — architecture, culture, food, photography, shopping — and we will suggest a route that matches. Alternatively, bring your own wish list and your driver will plan the most efficient way through it.
              </p>
              <p>
                Itineraries can be adjusted on the day as you go, completely at your discretion.
              </p>
            </MiniCard>

            <MiniCard tag="Multi-Day" title="Multi-Day Sightseeing Arrangements">
              <p>
                Staying in Dubai for several days and want a private driver across multiple days? We can arrange consecutive day bookings or a tailored multi-day package covering different areas of Dubai and the wider UAE — all at a preferential rate compared to individual bookings.
              </p>
            </MiniCard>
          </div>

          {/* Row 5: Why Choose + Our Fleet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Why Choose Us" title="Why Privilege Limo for Sightseeing Tours?">
              <p>
                Unlike generic tour operators, we provide a private, personalised experience with no other passengers and no fixed stops you did not choose. Our vehicles are premium, our drivers are professional and our service is built entirely around your comfort and preferences — from the moment of pickup to the final drop-off.
              </p>
              <p>
                Every sightseeing booking is handled with the same care and attention as our executive and corporate services.
              </p>
            </MiniCard>

            <MiniCard tag="Our Fleet" title="The Right Vehicle for Every Group Size">
              <p>
                Solo travellers and couples are best suited to our luxury sedans — the Mercedes E-Class or S-Class offer a refined and intimate touring experience. Families and small groups travel best in the Mercedes V-Class with its generous cabin space and comfort. For larger groups, our Sprinter VIP provides a full group touring solution in a single vehicle.
              </p>
            </MiniCard>
          </div>

          {/* Row 6: Fleet + Drivers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Fleet Detail" title="Premium Vehicles for a Premium Experience">
              <p>
                Every vehicle used for sightseeing tours is maintained to impeccable standards — clean, serviced and presented to the highest level before each booking. Our touring fleet includes sedans, SUVs and vans from Mercedes-Benz, all equipped with climate control, quality audio and generous luggage capacity for your day bags and shopping.
              </p>
            </MiniCard>

            <MiniCard tag="Our Drivers" title="Professional, Knowledgeable and Discreet">
              <p>
                Our sightseeing drivers are selected not just for their driving ability but for their knowledge of Dubai and their ability to communicate confidently and warmly with guests from around the world.
              </p>
              <p>
                They are punctual, professionally presented and happy to share insights about the city — while knowing exactly when to give you space and quiet during the journey.
              </p>
            </MiniCard>
          </div>

          {/* Row 7: Hotel Pickup + Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Hotel Pickup" title="Pickup from Your Hotel or Residence">
              <p>
                All sightseeing tours begin and end at your preferred location across Dubai — whether that is your hotel lobby, apartment building, cruise terminal or airport. There is no need to arrange your own way to a departure point.
              </p>
              <p>
                Your driver tracks your readiness and arrives precisely on time so your day begins without a moment of unnecessary waiting.
              </p>
            </MiniCard>

            <MiniCard tag="Photography Stops" title="Designed for the Perfect Photographs">
              <p>
                Dubai is one of the most photogenic cities on earth, and our drivers know every premium vantage point — from the Dubai Creek skyline at golden hour to the best angle on the Burj Al Arab or the full-frame view of the Dubai Marina at night.
              </p>
              <p>
                Mention photography as a priority when booking and your driver will plan the routing to maximise the light and timing at each location.
              </p>
            </MiniCard>
          </div>

        </div>
      </section>

       {/* ── CTA BAND ───────────────────────────────────────── */}
            <section className="py-10 bg-gradient-to-b from-[#AB5461]/6 to-[#ab5461]/7">
              <div className="max-w-7xl mx-auto px-6">
                <div className="rounded-[28px] bg-[#AB5461] px-8 py-10 sm:px-14 sm:py-14">
                  <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <span className="text-[10px] tracking-[0.45em] uppercase text-white font-light block mb-4">
                        Flexible Chauffeur Hire
                      </span>
                      <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
                        Need a driver for a few hours
                        <br />
                        <span className="text-white italic font-extralight">or the entire day?</span>
                      </h2>
                      <p className="mt-4 text-sm leading-[1.9] text-white font-light max-w-xl">
                        Tell us your start time, how many hours you need and your
                        preferred vehicle. We'll handle the rest.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[180px]">
                      <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium text-[#AB5461]"
                      >
                        Get a Quote
                      </Link>
                      <a
                        href="tel:+971509200818"
                        className="inline-flex items-center justify-center rounded-full bg-white border border-white/20 px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium text-[#AB5461]"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
      {/* ── BLOG LINKS STRIP ──────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#AB5461]/7 to-[#ab5461]/6">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-3 block">
            More About Chauffeur Services
          </span>
          <h2 className="text-xl md:text-2xl font-light text-[#0a0a0a] tracking-tight mb-8">
            Explore more articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogLinks.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-3xl border border-[#efefef] hover:border-[#0a0a0a] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 bg-white"
              >
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#b0b0b0] block mb-2">
                  Article
                </span>
                <h3 className="text-sm text-[#0a0a0a] font-light group-hover:text-[#AB5461] leading-relaxed">
                  {b.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a]">
                  Read More
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-[#AB5461]/6 to-[#ab5461]/4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#AB5461]/50 text-center">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              BOOK YOUR TOUR TODAY
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              See Dubai the Right Way —
              <br />
              <span className="text-[#AB5461] italic font-extralight">privately and in comfort</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-8 max-w-sm mx-auto leading-relaxed">
              Half day, full day or multi-day — tell us what you want to see and we will take care of everything else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/971509200818"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
              >
                <WAIcon />
                Book on WhatsApp
              </a>
              <a
                href="tel:+971509200818"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              >
                +971 50 920 0818
              </a>
            </div>
            <p className="text-[#9a9a9a] text-xs font-light">
              Private sightseeing tours available across Dubai, Abu Dhabi, Sharjah and the wider UAE — with professional drivers, premium vehicles and fully flexible itineraries.
            </p>
          </div>
        </div>      
        <RelatedServices currentHref="/services/private-driver-for-sightseeing-services" />

      </section>

      
      {/* ── SEO KEYWORDS CLOUD ───────────────────────────────────── */}
      <section className="py-16 bg-[#AB5461]/3">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-6 block">
            Our Services
          </span>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((kw) => (
              <span
                key={kw}
                className="px-4 py-2 rounded-full border border-[#efefef] bg-white text-[10px] tracking-[0.15em] text-[#7a7a7a] font-light shadow-[0_2px_8px_rgba(0,0,0,0.03)] capitalize"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}