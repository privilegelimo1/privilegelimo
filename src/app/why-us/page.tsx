import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why Choose Privilege Luxury Travel | Premium Chauffeur Service Dubai",
  description:
    "Discover why Privilege Luxury Travel LLC is Dubai's trusted choice for luxury chauffeur services, airport transfers, business transportation, and premium car rentals.",
  alternates: { canonical: "https://privilegelimo.com/why-us" },
};

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "100+", label: "Luxury Vehicles" },
  { value: "24/7", label: "Always Available" },
  { value: "5★", label: "Client Rating" },
];

const fleet = [
  "Mercedes-Benz S-Class & E-Class",
  "Lexus ES",
  "Cadillac Escalade",
  "Premium SUVs",
  "Mercedes V-Class",
  "Mercedes Sprinter Vans",
  "Stretch Limousines",
];

const services = [
  {
    icon: "",
    title: "Luxury Chauffeur Services",
    sub: "Airport Transfer · Car with Driver · Limousine Rental",
    href: "/luxury-chauffeur-service-in-dubai",
    desc: "Whether you're visiting for business or pleasure, we offer insights into the best luxury transportation choices, including eco-friendly options, to elevate your travel experience in Dubai.",
  },
  {
    icon: "",
    title: "Airport Transfer",
    sub: "Dubai · Sharjah · Abu Dhabi",
    href: "/luxury-chauffeur-service-in-dubai",
    desc: "Booking airport transfers in advance guarantees that a professional driver will be waiting upon arrival. Luxury vehicles include sedans, SUVs, and premium vans and buses.",
  },
  {
    icon: "",
    title: "Car with Driver",
    sub: "24/7 · All UAE",
    href: "/luxury-chauffeur-service-in-dubai",
    desc: "We provide the best services to meet all your requirements. You can hire our services 24 hours a day throughout the week. Traveling across UAE with a car with driver services is the best choice.",
  },
  {
    icon: "",
    title: "Event & Corporate Transportation",
    sub: "Meetings · Conferences · VIP",
    href: "/luxury-chauffeur-service-in-dubai",
    desc: "We offer the most comprehensive round-the-clock services so that everyone benefits. Our fleets are equipped with the latest amenities designed for an exceptional ride.",
  },
  {
    icon: "",
    title: "Luxury Bus & Van Rental",
    sub: "Groups · Events · Transfers",
    href: "/bus-and-van-rental-in-dubai",
    desc: "For your long-term or short-term travel needs, we provide the most luxurious and comfortable coaches and minibuses with responsible and friendly chauffeurs.",
  },
  {
    icon: "",
    title: "Dubai City Tour",
    sub: "Old Dubai · Sightseeing · Family",
    href: "/luxury-chauffeur-service-in-dubai",
    desc: "We will arrange the best car with the chauffeur so you can have a comfortable ride throughout the trip. Whether traveling with family, friends or alone — enjoy Dubai in style.",
  },
];

function MiniCard({ tag, title, children }: { tag: string; title: string; children: React.ReactNode }) {
  return (
    <div className="group rounded-[1.75rem] border border-[#efefef] bg-white p-7 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[#e8d9a0] transition-all duration-300 hover:-translate-y-0.5">
      <span className="text-[9px] tracking-[0.45em] uppercase text-[#c9a84c] mb-3 block font-light">
        {tag}
      </span>
      <h3 className="text-base md:text-lg font-light text-[#0a0a0a] mb-4 tracking-tight leading-snug">
        {title}
      </h3>
      <div className="text-[#7a7a7a] text-sm font-light leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
export default function WhyUsPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-40 pb-28 border-b border-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors">
              Home
            </Link>
            <span className="text-[#d5d5d5]">/</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]">Why Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">
                  Privilege Luxury Travel LLC
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-6">
                Redefining
                <br />
                <span className="text-[#c9a84c] italic font-extralight">Luxury Chauffeur</span>
                <br />
                Services in Dubai
              </h1>
              <p className="text-[#7a7a7a] text-base font-light leading-relaxed max-w-lg mb-4">
                Welcome to Privilege Luxury Travel LLC, a premium transportation company committed to delivering world-class chauffeur service in Dubai, reliable airport transfer UAE, professional business transfer solutions, and luxury car rental with driver services for travelers who demand excellence.
              </p>
              <p className="text-[#9a9a9a] text-sm font-light leading-relaxed max-w-lg mb-10">
                Built on a foundation of trust, quality, and hospitality, Privilege Luxury Travel has grown into one of the UAE's most reputable names in luxury ground transportation. Our mission is simple — to create a seamless, stylish, and comfortable travel experience for every client.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/971509200818"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+971509200818"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                >
                  +971 50 920 0818
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="p-8 rounded-3xl border border-[#efefef] text-center hover:border-[#c9a84c] transition-colors duration-300">
                  <div className="text-4xl font-extralight text-[#0a0a0a] tracking-tight mb-2">{s.value}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">Who We Are</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          About Privilege Luxury Travel
          <br />
          <span className="text-[#c9a84c] italic font-extralight">LLC</span>
        </h2>
      </div>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Who We Are" title="Privilege Luxury Travel LLC">
              <p>Privilege Luxury Travel LLC is a team of dedicated professionals with years of experience in the transportation and hospitality sector. We understand the importance of punctuality, safety, and comfort — and we combine all three to deliver a truly premium travel experience.</p>
            </MiniCard>

            <MiniCard tag="Who We Serve" title="From Individuals to VIPs">
              <p>From individuals to corporate clients, VIP delegations to families, our services are designed to meet the diverse travel needs of residents, tourists, and business travelers across Dubai and the UAE.</p>
              <p>Our commitment is to offer an elevated standard of service that reflects the luxury and sophistication Dubai is known for.</p>
            </MiniCard>

            <MiniCard tag="Our Promise" title="Seamless, Stylish & Comfortable">
              <p>Built on a foundation of trust, quality, and hospitality, Privilege Luxury Travel has grown into one of the UAE's most reputable names in luxury ground transportation.</p>
              <p>Our mission is simple — to create a seamless, stylish, and comfortable travel experience for every client.</p>
            </MiniCard>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">What We Offer</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Fields of
          <br />
          <span className="text-[#c9a84c] italic font-extralight">Expertise</span>
        </h2>
      </div>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-[1.75rem] border border-[#efefef] bg-white p-7 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[#e8d9a0] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-2xl mb-4 block">{s.icon}</span>
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] mb-2 block font-light">{s.sub}</span>
                <h3 className="text-base md:text-lg font-light text-[#0a0a0a] mb-3 tracking-tight group-hover:text-[#c9a84c] transition-colors">{s.title}</h3>
                <p className="text-[#7a7a7a] text-sm font-light leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] group-hover:text-[#c9a84c] transition-colors">
                  Explore
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE & EXPERTISE ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">EEAT</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Our Experience
          <br />
          <span className="text-[#c9a84c] italic font-extralight">& Expertise</span>
        </h2>
      </div>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Experience" title="25 Years of Premium Travel Services">
              <p>Privilege Luxury Travel brings years of experience serving high-profile clients, business travelers, families, and VIPs across Dubai and the UAE.</p>
              <p>We at Privilege Luxury Travel being one of the leading companies allow the customers to quickly search and book limousine Dubai services within a few minutes. Our user-friendly website allows you to compare and book services efficiently.</p>
            </MiniCard>

            <MiniCard tag="Our Chauffeurs" title="Professionally Trained & Verified">
              <p>Our chauffeurs are professionally trained, licensed and background-verified, and experienced in handling VIP and executive clients.</p>
              <p>They are knowledgeable about Dubai's routes, traffic patterns, and landmarks — making us one of the most trusted names for chauffeur service in Dubai and luxury transportation in the UAE.</p>
            </MiniCard>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">Values</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Our
          <br />
          <span className="text-[#c9a84c] italic font-extralight">Core Values</span>
        </h2>
      </div>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MiniCard tag="Value 01" title="Excellence in Service">
              <p>We consistently deliver top-tier hospitality, professional driving, and meticulous vehicle maintenance across every journey.</p>
            </MiniCard>

            <MiniCard tag="Value 02" title="Safety & Reliability">
              <p>Your safety is our priority. All vehicles undergo regular inspections and chauffeurs follow strict safety standards on every trip.</p>
            </MiniCard>

            <MiniCard tag="Value 03" title="Luxury & Comfort">
              <p>Our services are designed to provide maximum comfort, from premium interiors to smooth ride quality for every client.</p>
            </MiniCard>

            <MiniCard tag="Value 04" title="Transparency & Trust">
              <p>With upfront pricing, no hidden fees, and 24/7 customer support, we ensure trust in every single interaction.</p>
            </MiniCard>
          </div>
        </div>
      </section>

      {/* ── OUR FLEET ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">Luxury at Its Finest</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Our Fleet
          <br />
          <span className="text-[#c9a84c] italic font-extralight">High-End Vehicles</span>
        </h2>
      </div>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Fleet Overview" title="A Carefully Selected Range">
              <p>We offer a carefully selected range of high-end vehicles, maintained to the highest standards and equipped with modern amenities to enhance your travel experience.</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {fleet.map((v) => (
                  <span key={v} className="px-3 py-1.5 rounded-full border border-[#efefef] text-[10px] tracking-[0.15em] text-[#7a7a7a] font-light bg-[#fafafa]">
                    {v}
                  </span>
                ))}
              </div>
            </MiniCard>

            <MiniCard tag="Fleet Stats" title="Luxury Cars · Premium SUVs · Stretch Limos">
              <p>From individual sedans to group sprinter vans and luxury coaches, every vehicle in our fleet is selected for elegance, comfort, and reliability.</p>
              <div className="grid grid-cols-3 gap-3 pt-3">
                {[
                  { val: "LUXURY CARS", num: "10+" },
                  { val: "PREMIUM SUV", num: "8+" },
                  { val: "STRETCH LIMO", num: "3+" },
                ].map((item) => (
                  <div key={item.val} className="text-center p-3 rounded-2xl bg-[#fafafa] border border-[#efefef]">
                    <div className="text-xl font-light text-[#0a0a0a] mb-1">{item.num}</div>
                    <div className="text-[8px] tracking-[0.2em] uppercase text-[#9a9a9a]">{item.val}</div>
                  </div>
                ))}
              </div>
            </MiniCard>
          </div>
        </div>
      </section>

      {/* ── VISION ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">Vision</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Our
          <br />
          <span className="text-[#c9a84c] italic font-extralight">Vision</span>
        </h2>
      </div>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Our Vision" title="Most Trusted Luxury Chauffeur in Dubai">
              <p>At Privilege Luxury Travel LLC, our vision is to become the most trusted and preferred provider of luxury chauffeur service in Dubai and premium ground transportation across the UAE.</p>
              <p>We aim to redefine the standards of comfort, professionalism, and reliability by offering exceptional travel experiences that reflect Dubai's world-class hospitality.</p>
            </MiniCard>

            <MiniCard tag="Vision — Fleet" title="A Premium Fleet for Every Need">
              <p>We strive to lead the region with a premium fleet of luxury vehicles and highly trained and professional chauffeurs available around the clock.</p>
              <p>Cutting-edge travel technology and seamless, personalized transportation solutions form the backbone of our vision for the future.</p>
            </MiniCard>

            <MiniCard tag="Vision — Future" title="Safe, Elegant, Stress-Free Travel">
              <p>Our vision is to create a future where every resident, tourist, and business traveler enjoys safe, elegant, and stress-free travel.</p>
              <p>Through our commitment to luxury and customer satisfaction, we are building a legacy of excellence in Dubai's transportation industry.</p>
            </MiniCard>
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase font-light">Mission</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] tracking-tight leading-tight mt-4">
          Our
          <br />
          <span className="text-[#c9a84c] italic font-extralight">Mission</span>
        </h2>
      </div>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Mission Statement" title="Superior-Quality Chauffeur Services">
              <p>The mission of Privilege Luxury Travel LLC is to deliver superior-quality chauffeur services in Dubai, dependable airport transfer UAE, and professional business transfer solutions that exceed client expectations.</p>
              <p>We are dedicated to providing luxury transportation that prioritizes safety, punctuality, comfort, and exceptional customer service.</p>
            </MiniCard>

            <MiniCard tag="Mission — Core Purpose" title="Every Journey Memorable">
              <p>Our purpose is to provide a seamless blend of luxury, comfort, and professionalism — making every journey memorable, smooth, and stress-free.</p>
              <p>As a leader in chauffeur service in Dubai, we are committed to building long-term trust with our clients through transparency, dedication, and exceptional service.</p>
            </MiniCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MiniCard tag="Mission — 01" title="Excellence in Luxury Transportation">
              <p>To offer top-tier travel experiences with a refined fleet of sedans, SUVs, vans, limousines, and premium business vehicles for every occasion.</p>
            </MiniCard>

            <MiniCard tag="Mission — 02" title="Professionalism & Service Quality">
              <p>To maintain the highest standards of courtesy, discipline, and professionalism through our team of skilled chauffeurs on every single trip.</p>
            </MiniCard>

            <MiniCard tag="Mission — 03" title="Safety & Reliability">
              <p>To ensure every trip is secure, reliable, and carefully managed — from airport transfers to long-distance and corporate travel across the UAE.</p>
            </MiniCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard tag="Mission — 04" title="Customer-Centric Approach">
              <p>To deliver tailored travel solutions that meet the needs of families, corporate clients, VIP guests, and business travelers across Dubai and the UAE.</p>
            </MiniCard>

            <MiniCard tag="Mission — 05" title="Innovation & Growth">
              <p>To continuously invest in technology, fleet upgrades, and service enhancements that elevate the luxury transportation experience in Dubai and beyond.</p>
            </MiniCard>
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
            <h2 className="text-4xl font-light text-[#0a0a0a] tracking-tight mb-2">
              Book Now and Travel
              <br />
              <span className="text-[#c9a84c] italic font-extralight">in Comfort</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-3 max-w-sm mx-auto leading-relaxed">
              Chauffeur Service in Dubai — Unparalleled Service and Convenience
            </p>
            <p className="text-[#9a9a9a] text-sm font-light mb-8 max-w-sm mx-auto leading-relaxed">
              On Your Next Trip — Do You Want To Talk With Us?
              <br />So Don't Be Late.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://wa.me/971509200818"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              >
                Contact Now
              </a>
            </div>
            <p className="text-[#9a9a9a] text-xs font-light">
              We provide luxury transportation in UAE, ensuring you enjoy a sophisticated with comfort, and style in one of the world's most glamorous destinations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}