import { fleet as allFleet } from "@/data/index";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import { fleet } from "@/data/index";
import FleetPreview from "@/components/FleetPreview";

// ─── FILTERED DATA ────────────────────────────────────────────────────────────

const CHAUFFEUR_SLUGS = [
  "mercedes-s500", "bmw-7-series", "mercedes-vip-trend-250", "mercedes-v300-tiffany",
  "mercedes-vito-tourer", "mercedes-v-class", "gmc-yukon-denali", "cadillac-escalade",
  "range-rover-sport", "rolls-royce-ghost", "rolls-royce-cullinan",
  "mercedes-sprinter-avant-garde", "mercedes-sprinter-ultra-luxury",
  "mercedes-sprinter-business", "mercedes-sprinter-standard", "gmc-yukon-limousine",
  "chevy-suburban-titanium-limousine", "toyota-granvia", "lexus-es300", "audi-a6",
  "byd-han", "citroen-space-tourer"
];

const chauffeurFleet = allFleet.filter((car) =>
  CHAUFFEUR_SLUGS.includes(car.slug)
);


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
  title: "Luxury Chauffeur Service in Dubai | Chauffeur Driven Cars UAE - Privilege Limo",
  description:
    "Discover the pinnacle of comfort with luxury chauffeur services in Dubai. Chauffeur driven Mercedes, BMW, SUVs, vans and buses for airport transfers, business and city tours.",
  keywords: [
    "rent a car with driver",
    "airport transfer dubai",
    "limousine rental dubai",
    "mercedes s class rent",
    "mercedes v class rent with driver",
    "chauffeur hire in dubai",
    "mercedes sprinter rent in dubai",
    "mercedes van chauffeur service",
    "mercedes benz van rent",
    "chauffeur service abu dhabi",
    "luxury bus booking in dubai",
    "mercedes vito rental dubai",
    "mercedes v class rental dubai",
    "mercedes sprinter rental dubai",
    "chauffeur service dubai",
    "car hire in dubai with driver",
    "sprinter van rental dubai",
    "mercedes sprinter rent dubai",
    "mercedes van rental dubai",
    "car hire with driver in dubai",
  ],
  alternates: {
    canonical: "https://privilegelimo.com/luxury-chauffeur-service-in-dubai",
  },
};


// ─── STATIC DATA ──────────────────────────────────────────────────────────────

const seoKeywords = [
  "rent a car with driver",
  "airport transfer dubai",
  "limousine rental dubai",
  "mercedes s class rent",
  "mercedes v class rent with driver",
  "chauffeur hire in dubai",
  "mercedes sprinter rent in dubai",
  "mercedes van chauffeur service",
  "mercedes benz van rent",
  "chauffeur service abu dhabi",
  "luxury bus booking in dubai",
  "mercedes vito rental dubai",
  "mercedes v class rental dubai",
  "mercedes sprinter rental dubai",
  "chauffeur service dubai",
  "car hire in dubai with driver",
  "sprinter van rental dubai",
  "mercedes sprinter rent dubai",
  "mercedes van rental dubai",
  "car hire with driver in dubai",
];

const stats = [
{ value: `${chauffeurFleet.length}+`, label: "Vehicles in fleet" },
  { value: "24/7", label: "Always available" },
  { value: "Fixed", label: "Transparent pricing" },
  { value: "5★", label: "Service standard" },
];

const blogLinks = [
  {
    title: "Reliable Chauffeur Services in Dubai",
    href: "https://privilegelimo.com/reliable-chauffeur-services-in-dubai/",
  },
  {
    title: "Chauffeur Services in Dubai",
    href: "https://privilegelimo.com/chauffeur-services-in-dubai/",
  },
  {
    title: "Transfers from Dubai to Abu Dhabi",
    href: "https://privilegelimo.com/transfers-from-dubai-to-abu-dhabi/",
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

export default function LuxuryChauffeurServicePage() {
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
            Chauffeur Services Dubai
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-light text-[#0a0a0a] tracking-tight leading-[1.1]">
          Luxury Chauffeur
          <br />
          <span className="text-[#AB5461] italic font-extralight">
            Services in Dubai
          </span>
        </h1>

        <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg">
          Personalised chauffeur-driven transport across Dubai and the UAE —
          with professional drivers, premium vehicles and a seamless experience
          tailored to your schedule and comfort.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://wa.me/971509852818"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white hover:bg-[#20bd5a] transition-colors"
          >
            <WAIcon />
            Book on WhatsApp
          </a>
          <a
            href="tel:+971509852818"
            className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium text-[#0a0a0a] hover:border-[#AB5461] hover:text-[#AB5461] transition-colors"
          >
            +971 50 985 2818
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Personalised service",
            "Professional chauffeurs",
            "Premium fleet",
            "24/7 available",
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
          src="/images/fleet/audi-a6-1.webp"
          alt="Luxury chauffeur service Dubai"
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
      <section className="py-28 bg-[#ffffff] border-t border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              Chauffeur Driven Vehicles in UAE
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Rent a Car with Driver
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                chauffeur driven vehicles
              </span>
            </h2>
          </div>
        </div>
        <FleetPreview/>
      </section>

      {/* ── SECTION LABEL ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-6">
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-[#AB5461]" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#AB5461] font-light">
            Experience Luxury Travel with Chauffeur Driven Cars in Dubai, UAE
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Everything about our
          <br />
          <span className="text-[#AB5461] italic font-extralight">chauffeur service</span>
        </h2>
      </div>

      {/* ── MINI CARDS GRID ───────────────────────────────────────── */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">

          {/* Row 1: Intro + Convenience + Safety */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Overview" title="Chauffeur Driven Cars in Dubai, UAE">
              <p>
                When it comes to traveling in style and comfort, nothing beats the convenience of chauffeur driven cars. Whether you are a tourist exploring the vibrant city of Dubai or a business executive attending important meetings, Privilege Luxury Travel is here to take you to your destination in the most luxurious and hassle-free way possible.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 01" title="Convenience and Comfort">
              <p>
                With a chauffeur driven car, you can say goodbye to the stress of navigating unfamiliar roads or dealing with public transportation. Our professional and experienced chauffeurs are well-versed in the city's routes and will ensure that you reach your destination on time, every time.
              </p>
              <p>
                Sit back, relax, and enjoy the comfort of our luxurious vehicles while we take care of the driving.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 02" title="Safety and Security">
              <p>
                At our service, your safety is not just a priority, it's an exclusive privilege. Whether you choose to travel with our fleet, you can be confident that your mode of transportation meets the highest safety standards.
              </p>
              <p>
                This ensures your peace of mind throughout your journey.
              </p>
            </MiniCard>
          </div>

          {/* Row 2: Time + Luxury + Booking */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Benefit 03" title="Time Efficiency">
              <p>
                Remember, time is precious, especially when you have a busy schedule. Opting for a chauffeur-driven car can maximize your productivity and make the most of your time.
              </p>
              <p>
                Catch up on emails, make important phone calls, or relax and prepare for your upcoming meetings while our chauffeur takes care of the driving.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 04" title="Luxury and Style">
              <p>
                Arrive at your destination in style with our fleet of luxurious vehicles. Whether you prefer a sleek sedan, a spacious SUV, or an elegant limousine, we have the perfect car to suit your preferences.
              </p>
              <p>
                Our fleets feature hybrid and electric vehicles, which are becoming increasingly popular among luxury travellers in Dubai.
              </p>
            </MiniCard>

            <MiniCard tag="Book Now" title="Book Your Chauffeur Driven Car Today">
              <p>
                Ready to experience luxury travel in Dubai, UAE? Book your chauffeur driven car with Privilege Luxury Travel today and enjoy a seamless and memorable journey.
              </p>
              <p>
                Whether you are visiting Dubai for leisure or business, our professional chauffeurs and luxurious vehicles will ensure that you travel in style and comfort.
              </p>
              <a
                href="https://wa.me/971509852818"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white text-[9px] tracking-[0.25em] uppercase font-medium hover:bg-[#AB5461] transition-all duration-300"
              >
                Book on WhatsApp
              </a>
            </MiniCard>
          </div>

          {/* Row 3: Why Choose - 4 reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Why Us - 01" title="Extensive Fleet">
              <p>
                We offer a wide range of vehicles to cater to your specific requirements. From sedans and SUVs to limousines and luxury vans, our fleet has something for everyone. All our vehicles are equipped with modern amenities to ensure a comfortable and enjoyable journey.
              </p>
            </MiniCard>

            <MiniCard tag="Why Us - 02" title="Professional Chauffeurs">
              <p>
                Our chauffeurs are not just skilled drivers but also trained professionals who prioritize your safety and comfort. They are well-versed in the city's roads and can provide you with valuable insights and recommendations to enhance your stay in Dubai.
              </p>
            </MiniCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Why Us - 03" title="Personalized Service">
              <p>
                At Privilege Luxury Travel, we understand that every client is unique. That's why we offer personalized services tailored to your specific needs.
              </p>
              <p>
                Whether you require airport transfers, city tours, or corporate transportation, we can customize our services to meet your requirements.
              </p>
            </MiniCard>

            <MiniCard tag="Why Us - 04" title="Competitive Pricing">
              <p>
                We believe that luxury travel should be accessible to everyone. That's why we offer competitive pricing without compromising on the quality of our services.
              </p>
              <p>
                With Privilege Luxury Travel, you can enjoy the luxury and comfort of chauffeur driven cars at affordable rates.
              </p>
            </MiniCard>
          </div>

          {/* Row 4: Professional Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Professional Service" title="Professional Chauffeur Services in Dubai">
              <p>
                Striking through the flabbergasting modern city of Dubai or going to business meetings, our chauffeur services provide the top level of comfort. We guarantee Dubai airport transfers with the highest level of convenience.
              </p>
            </MiniCard>

            <MiniCard tag="Exceptional Options" title="Choose from Exceptional Options">
              <p>
                Sitting behind the steering wheel of a luxurious sedan, Dubai stretch limo services or other premium vehicles like the Rolls Royce and Bentley will exceed your expectations.
              </p>
              <p>
                These become the perfect addition to corporate events and non-business gatherings alike.
              </p>
            </MiniCard>

            <MiniCard tag="Reliable Transfers" title="Efficient and Reliable Transfers">
              <p>
                Reliable and punctual chauffeurs with deep knowledge of Dubai guarantee comfort for cater, leisure, limo and Dubai airport transfer services rentals. Rent a car with a driver and have the journey of your life.
              </p>
              <p>
                No matter if it's a quick trip or a full-day itinerary, our services offer professional chauffeurs who augment your travel plans in the city.
              </p>
            </MiniCard>
          </div>

          {/* Row 5: Why Choose + Fleet Heart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Our Services" title="Why Choose Our Chauffeur Services in Dubai?">
              <p>
                Privilege Luxury Travel offers the best luxury chauffeur services in Dubai that will redefine your experience of premium travel. With us, you never have to worry about comfort or style, as our carefully curated fleet includes luxurious sedans, spacious SUVs, and versatile vans.
              </p>
              <p>
                All our chauffeurs are professionally background-checked, providing you with both security and peace of mind. Thanks to their extensive local knowledge, our drivers deliver seamless, hassle-free travel across Dubai, always maintaining punctuality.
              </p>
            </MiniCard>

            <MiniCard tag="Our Fleet" title="Luxury Fleet: The Heart of Our Service">
              <p>
                In Dubai, customers renting a chauffeur service will quickly notice that we pay special attention to our luxury fleet, as it serves the dual purpose of captivating and comforting even the most discerning travelers.
              </p>
              <p>
                Our collection primarily focuses on a wide range of elegant and sophisticated SUVs and sedans. Each vehicle is handpicked to conform to strict standards of quality so that they can provide unrivaled travel experiences.
              </p>
            </MiniCard>
          </div>

          {/* Row 6: Fleet Detail + Chauffeurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Fleet Detail" title="Rolls-Royce, Mercedes-Benz, Tesla & BMW">
              <p>
                Some of our luxury fleet boasts industry leaders such as Rolls-Royce, Mercedes-Benz, Tesla, and BMW. Apart from having elegant and modern looks, these vehicles are equipped with cutting edge technology tailored to improve the travel experience.
              </p>
              <p>
                Our fleet has advanced climate control systems, quality sound systems, and supple leather seats that provide maximum comfort. Enhanced comfort and space are offered by our Premium Sprinter Vans - perfect for groups, business travel, or families.
              </p>
            </MiniCard>

            <MiniCard tag="Our Chauffeurs" title="Experienced and Trained Chauffeurs">
              <p>
                The importance of professional and trained chauffeurs is paramount when it comes to chauffeur services. Our chauffeurs embody a distinctive blend of seasoned professionalism, robust training, and acute knowledge of the local environment.
              </p>
              <p>
                All chauffeurs undergo advanced training and are practically assessed, which implies that they are proficient in driving and customer care amply enough to improve travel to unprecedented levels.
              </p>
            </MiniCard>
          </div>

          {/* Row 7: Local Expertise + Customization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Local Expertise" title="Deep Knowledge of Dubai">
              <p>
                Chauffeurs' outstanding knowledge of Dubai is one of the most striking areas of expertise. Their understanding of many ways means that they can navigate the city without getting caught up in heavy traffic.
              </p>
              <p>
                Whether it is a business appointment at one of the city's skyscrapers or just a calm sightseeing session with your family, they are guaranteed to meet you on time. Their knowledge of sights also helps turn more than a simple drive into an enlightening journey.
              </p>
            </MiniCard>

            <MiniCard tag="Customization" title="Customization and Flexibility for All Your Needs">
              <p>
                Extreme customization and flexibility are among the most exclusive traits of chauffeur services in Dubai. Dubai chauffeur services go above and beyond to meet their client's demands. Customers have comfort and satisfaction guaranteed during their journeys, right from the moment they place a booking.
              </p>
              <p>
                Clients with specific preferences are provided with bespoke itineraries that showcase the best of Dubai - be it a quick visit to the popular Burj Khalifa or a slow drive through the beautiful Palm Jumeirah.
              </p>
            </MiniCard>
          </div>

        </div>
      </section>

{/* ── CTA BAND ───────────────────────────────────────── */}
      <section className="py-10 bg-white">
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
                  href="tel:+971509852818"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-white/20 px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium text-[#AB5461]"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO KEYWORDS CLOUD ───────────────────────────────────── */}
      <section className="py-16 border-t border-[#efefef] bg-[#fafafa]">
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

      {/* ── BLOG LINKS STRIP ──────────────────────────────────────── */}
      <section className="py-16 border-t border-[#efefef]">
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
      <section className="py-24 border-t border-[#efefef]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#efefef] text-center">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              CALL US 24/7
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              Book Now and Travel
              <br />
              <span className="text-[#AB5461] italic font-extralight">in Comfort</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-8 max-w-sm mx-auto leading-relaxed">
              On Your Next Trip - Do You Want To Talk With Us?
              <br />
              So Don't Be Late.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/971509852818"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
              >
                <WAIcon />
                Book on WhatsApp
              </a>
              <a
                href="tel:+971509852818"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              >
                +971 50 985 2818
              </a>
            </div>
            <p className="text-[#9a9a9a] text-xs font-light">
              We provide luxury transportation in UAE, ensuring you enjoy a sophisticated experience with comfort, and style in one of the world's most glamorous destinations.
            </p>
          </div>
        </div>
      </section>

      <RelatedServices currentHref="/services/luxury-chauffeur-service-in-dubai" />
      <Footer />
    </main>
  );
}
