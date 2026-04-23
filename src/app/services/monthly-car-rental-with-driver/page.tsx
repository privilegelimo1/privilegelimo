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
  title: "Monthly Car Rental with Driver Dubai | Long-Term Chauffeur Service UAE",
  description:
    "Monthly car rental with driver in Dubai. Long-term chauffeur hire for executives, families and businesses across the UAE. Luxury sedans, SUVs and vans on monthly contracts.",
  keywords: [
    "monthly car rental with driver dubai",
    "long term chauffeur hire dubai",
    "monthly chauffeur service dubai",
    "monthly driver rental dubai",
    "rent a car with driver monthly dubai",
    "monthly car hire with driver uae",
    "executive driver monthly dubai",
    "personal driver monthly dubai",
    "long term car hire with driver uae",
    "monthly limousine service dubai",
    "corporate driver hire monthly dubai",
    "monthly driver service uae",
    "dedicated chauffeur monthly dubai",
    "monthly vehicle with driver dubai",
    "car with driver monthly contract dubai",
    "monthly chauffeur hire uae",
    "personal chauffeur dubai monthly",
    "long-term driver rental uae",
    "monthly rental mercedes with driver",
    "business driver hire monthly dubai",
  ],
  alternates: {
    canonical: "https://www.privilegelimo.com/services/monthly-car-rental-with-driver",
  },
};

// ─── STATIC DATA ──────────────────────────────────────────────────────────────

const seoKeywords = [
  "monthly car rental with driver dubai",
  "long term chauffeur hire dubai",
  "monthly chauffeur service dubai",
  "monthly driver rental dubai",
  "rent a car with driver monthly dubai",
  "monthly car hire with driver uae",
  "executive driver monthly dubai",
  "personal driver monthly dubai",
  "long term car hire with driver uae",
  "monthly limousine service dubai",
  "corporate driver hire monthly dubai",
  "monthly driver service uae",
  "dedicated chauffeur monthly dubai",
  "monthly vehicle with driver dubai",
  "car with driver monthly contract dubai",
  "monthly chauffeur hire uae",
  "personal chauffeur dubai monthly",
  "long-term driver rental uae",
  "monthly rental mercedes with driver",
  "business driver hire monthly dubai",
];

const stats = [
  { value: `${pageFleet.length}+`, label: "Vehicles available" },
  { value: "30+", label: "Day contracts" },
  { value: "Fixed", label: "Monthly pricing" },
  { value: "5★", label: "Service standard" },
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

export default function MonthlyChauffeurServicePage() {
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
                  Monthly Car Rental with Driver
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-light text-[#0a0a0a] tracking-tight leading-[1.1]">
                Monthly Car Rental
                <br />
                <span className="text-[#AB5461] italic font-extralight">
                  with Driver in Dubai
                </span>
              </h1>

              <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a] font-light max-w-lg">
                Dedicated monthly chauffeur service for executives, families and
                businesses across Dubai and the UAE — with a professional driver
                assigned to your schedule, your vehicle and your needs.
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
                  "30-day contracts",
                  "Dedicated driver",
                  "Flexible hours",
                  "Premium fleet",
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
                src="/images/services/monthly-car-with-driver.webp"
                alt="Monthly car rental with driver Dubai"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-5 py-4 min-w-[160px]">
                <p className="text-2xl font-light text-[#AB5461] tracking-tight">30+</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mt-0.5 font-light">
                  Day contracts
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
              Monthly Chauffeur Hire in UAE
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight">
              Choose Your Monthly Vehicle
              <br />
              <span className="text-[#AB5461] italic font-extralight">
                with a dedicated driver
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
            Long-Term Chauffeur Hire in Dubai, UAE
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Everything about our
          <br />
          <span className="text-[#AB5461] italic font-extralight">monthly rental service</span>
        </h2>
      </div>

      {/* ── MINI CARDS GRID ───────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">

          {/* Row 1: Overview + Convenience + Flexibility */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Overview" title="Monthly Car Rental with Driver in Dubai, UAE">
              <p>
                For those who require consistent, high-quality transportation without the hassle of daily bookings, Privilege Limo offers dedicated monthly car rental with driver packages across Dubai and the UAE. Whether you are an expatriate executive, a relocating family or a business with ongoing transport needs, our monthly chauffeur service delivers reliability and comfort every single day.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 01" title="One Driver. Your Schedule.">
              <p>
                A monthly rental means you get the same dedicated professional driver assigned specifically to your contract. No re-briefing, no inconsistency — your chauffeur learns your preferences, regular routes, meeting timings and personal requirements from day one.
              </p>
              <p>
                This continuity makes daily travel significantly smoother and more productive.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 02" title="Flexible Hours and Routes">
              <p>
                Unlike fixed transfer bookings, our monthly packages are built around your lifestyle. Need your driver available from early morning to late evening? Require multi-stop daily itineraries across Dubai? We structure the contract around your hours, not ours.
              </p>
              <p>
                School runs, business meetings, airport pickups and personal errands — all covered under one agreement.
              </p>
            </MiniCard>
          </div>

          {/* Row 2: Cost + Image + Book */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Benefit 03" title="Cost-Effective Long-Term Travel">
              <p>
                Hiring a chauffeur on a monthly basis is significantly more economical than booking individual trips or maintaining a private vehicle with all the associated ownership costs in Dubai.
              </p>
              <p>
                One fixed monthly rate covers your driver, the vehicle, insurance and maintenance — giving you full control of your transport budget without unexpected expenses.
              </p>
            </MiniCard>

            <MiniCard tag="Benefit 04" title="Maintain Your Professional Image">
              <p>
                Arriving consistently in a premium, immaculately presented vehicle with a uniformed professional chauffeur speaks volumes about your standards — whether you are visiting clients, attending board meetings, or welcoming business guests from the airport.
              </p>
              <p>
                Monthly chauffeur hire ensures that image is maintained without exception.
              </p>
            </MiniCard>

            <MiniCard tag="Book Now" title="Start Your Monthly Contract Today">
              <p>
                Ready to simplify your daily transport? Our team will match you with the right vehicle and driver based on your schedule, passenger requirements and preferred routes across Dubai and the UAE.
              </p>
              <p>
                Reach out on WhatsApp to discuss your needs and receive a tailored monthly rental proposal.
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

          {/* Row 3: Who is it for */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Who It's For — 01" title="Executives and Senior Management">
              <p>
                For C-level professionals, directors and senior executives based in Dubai, a monthly car rental with driver removes the burden of managing transport logistics entirely. Your driver is briefed, punctual and always ready — so you can focus entirely on your work from the moment you step out the door.
              </p>
            </MiniCard>

            <MiniCard tag="Who It's For — 02" title="Families and Residents">
              <p>
                Relocating to Dubai or settling in as a long-term resident? A monthly chauffeur gives your family a trusted, familiar driver for school runs, appointments, shopping and leisure travel — without the stress of driving in unfamiliar areas or relying on ride-hailing services.
              </p>
            </MiniCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Who It's For — 03" title="Businesses and Corporate Teams">
              <p>
                Companies with regular staff movement, visiting delegations or recurring client pickups benefit greatly from a monthly vehicle and driver arrangement. It removes coordination overhead and guarantees a consistent standard of transport across all your business travel requirements.
              </p>
            </MiniCard>

            <MiniCard tag="Who It's For — 04" title="Visitors on Extended Stays">
              <p>
                Spending 30 days or more in Dubai for work, a project or a personal trip? A monthly rental with driver gives you fully managed transport for the entire duration — far more convenient and refined than daily bookings or rental cars with self-drive.
              </p>
            </MiniCard>
          </div>

          {/* Row 4: The Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="The Service" title="What's Included in Monthly Rental">
              <p>
                Each monthly package includes a dedicated professional driver, a premium vehicle from our fleet, daily availability during your agreed hours, fuel, vehicle maintenance and insurance. There are no hidden costs or per-trip charges — everything is covered in your fixed monthly agreement.
              </p>
            </MiniCard>

            <MiniCard tag="Vehicle Choice" title="Choose the Right Vehicle for Your Needs">
              <p>
                Select from luxury sedans like the Mercedes S-Class or BMW 7 Series for individual executive travel, the Mercedes V-Class for families and small groups, or a Sprinter VIP van for corporate teams and delegations.
              </p>
              <p>
                Our fleet is maintained to the highest standard with regular servicing and presentation checks.
              </p>
            </MiniCard>

            <MiniCard tag="Reliability" title="Consistent, Punctual Daily Service">
              <p>
                Reliability is the core of any monthly rental arrangement. Your dedicated driver is accountable to your schedule — monitoring your calendar, planning routes in advance and ensuring you are never kept waiting.
              </p>
              <p>
                Our operations team provides backup support so your service is never interrupted.
              </p>
            </MiniCard>
          </div>

          {/* Row 5: Why Choose + Our Fleet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Why Choose Us" title="Why Privilege Limo for Monthly Chauffeur Hire?">
              <p>
                Privilege Limo has built a reputation for consistent, high-standard transport across Dubai and the UAE. Our monthly clients stay with us because we deliver exactly what we promise — the same driver, the same vehicle standard and the same level of service every single day throughout the contract period.
              </p>
              <p>
                We handle the logistics, the vehicle and the driver so you never have to think about your daily transport again.
              </p>
            </MiniCard>

            <MiniCard tag="Our Fleet" title="Premium Vehicles Maintained to the Highest Standard">
              <p>
                Every vehicle in our monthly rental fleet is presented immaculately, kept to full mechanical standard and replaced on a regular cycle to ensure our clients always travel in modern, well-maintained luxury vehicles.
              </p>
              <p>
                From first-class sedans to business-class vans, our fleet is curated specifically for clients who expect nothing less than the best from long-term chauffeur arrangements.
              </p>
            </MiniCard>
          </div>

          {/* Row 6: Contract + Coverage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Contract Terms" title="Simple, Transparent Monthly Agreements">
              <p>
                Our monthly rental contracts are straightforward and transparent. We agree on the vehicle, driver, working hours and duration upfront — then handle everything else so the arrangement runs smoothly from day one.
              </p>
              <p>
                Contracts can be extended, adjusted or upgraded as your requirements change, with no complex cancellation terms or hidden renewal clauses.
              </p>
            </MiniCard>

            <MiniCard tag="Coverage" title="Dubai, Abu Dhabi and Across the UAE">
              <p>
                While most monthly contracts are Dubai-based, we regularly arrange inter-emirate coverage for clients who travel frequently between Dubai, Abu Dhabi, Sharjah and other emirates.
              </p>
              <p>
                Your dedicated monthly driver can handle all intra-UAE movement as part of your agreed service scope — no separate booking required for regular route coverage.
              </p>
            </MiniCard>
          </div>

          {/* Row 7: Customization + Professionalism */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Customization" title="Tailored to Your Exact Schedule and Preferences">
              <p>
                No two monthly contracts are alike. Some clients need their driver from 7am to 10pm for a full working day across multiple locations. Others require a focused morning and evening service around a fixed office schedule.
              </p>
              <p>
                We design each monthly rental around your specific pattern of movement, ensuring the service adds genuine value to your daily routine from the very first day.
              </p>
            </MiniCard>

            <MiniCard tag="Professionalism" title="Experienced, Trained and Discreet Drivers">
              <p>
                All drivers assigned to monthly contracts are specifically selected for long-term client relationships. They are trained in executive protocol, client confidentiality and professional conduct — understanding that consistency and discretion are as important as punctuality and driving skill.
              </p>
              <p>
                For clients handling sensitive business or personal schedules, this professionalism is non-negotiable.
              </p>
            </MiniCard>
          </div>

        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────── */}
            <section className="py-10 bg-gradient-to-b from-[#AB5461]/6 to-[#ab5461]/5">
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
      <section className="py-16 bg-gradient-to-b from-[#AB5461]/5 to-[#ab5461]/4">
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
      <section className="py-24 bg-gradient-to-b from-[#AB5461]/4 to-[#ab5461]/3">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 md:p-16 rounded-3xl border border-[#AB5461]/30 text-center">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[#b0b0b0] mb-5 block">
              GET A MONTHLY QUOTE
            </span>
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-4">
              Your Dedicated Driver,
              <br />
              <span className="text-[#AB5461] italic font-extralight">every single day</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-8 max-w-sm mx-auto leading-relaxed">
              Tell us your vehicle preference, daily schedule and contract duration.
              <br />
              We'll put together a tailored monthly proposal for you.
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
              Monthly car rental with driver available across Dubai, Abu Dhabi, Sharjah and the wider UAE — with flexible contract terms and a premium fleet.
            </p>
          </div>
        </div>
            <RelatedServices currentHref="/services/monthly-car-rental-with-driver" />
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
      <Footer />
    </main>
  );
}