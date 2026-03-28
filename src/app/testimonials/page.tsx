import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | Privilege Luxury Travel Dubai",
  description:
    "Read real Google reviews from our clients. 5-star chauffeur service, luxury van rentals, airport transfers and more - trusted by hundreds across Dubai and UAE.",
  alternates: { canonical: "https://privilegelimo.com/testimonials" },
};

// ─── DATA - only reviews with actual text ────────────────────────────────────

const reviews = [
  {
    name: "Sara Quinn",
    badge: "Local Guide · 13 reviews",
    time: "3 months ago",
    rating: 5,
    text: "Excellent service, 5 star ⭐️ Fast response, reliable punctual and super premium quality vehicle. Very pleased as was travelling with A lister and he was happy. Highly recommend.",
  },
  {
    name: "Pierre",
    badge: "1 review",
    time: "2 weeks ago",
    rating: 5,
    text: "Great service, great chauffeur; you can rely on the service!!",
  },
  {
    name: "Norina Jane Portillo",
    badge: "3 reviews",
    time: "3 months ago",
    rating: 5,
    text: "Reliable car service provider. Their cars are clean, new and drivers are professional and drive safely. Ravi is always responsive. Smooth transaction all the time.",
  },
  {
    name: "Jonny McCarthy",
    badge: "5 reviews · 1 photo",
    time: "a year ago",
    rating: 5,
    text: "Recently worked with Privilege for a 5-day conference I was running in Abu Dhabi, with over 20 cars used. 5-Star customer service from Prasad. Can not thank him enough for the excellent customer service and support over the event.",
  },
  {
    name: "Dayle Carden",
    badge: "2 reviews",
    time: "a year ago",
    rating: 5,
    text: "We hired Privilege for a one-day city experience. The service was exceptional, they accommodated the multiple schedule changes and adjusted to all our requests. The driver, Sudheer, was excellent - pleasant, friendly, and very skilled.",
  },
  {
    name: "Giuliana Krebs",
    badge: "7 reviews · 4 photos",
    time: "2 years ago",
    rating: 5,
    text: "We rented from Privilege a 19pax Mercedes sprinter bus for a VIP work event, and were very pleased with the professionalism of the team and the quality of the bus. The driver was polite and followed the route perfectly.",
  },
  {
    name: "Fabrizio Facetti",
    badge: "Local Guide · 47 reviews",
    time: "2 years ago",
    rating: 5,
    text: "I recently had the pleasure of using the services of Privilege Luxury Travel and felt compelled to share my outstanding experience. From start to finish, their attention to detail and commitment to customer satisfaction were truly impressive.",
  },
  {
    name: "Sudev K",
    badge: "8 reviews",
    time: "3 years ago",
    rating: 5,
    text: "Chauffer picked us from airport on time. He was not only professional but also informative and polite. We loved the experience so much. We will never call any other car service in Dubai! We LOVED it! Thanks again.",
  },
  {
    name: "Sanal V",
    badge: "3 reviews · 4 photos",
    time: "3 years ago",
    rating: 5,
    text: "Outstanding service. The chauffeur was right at the airport lobby with our name card. He was professional and polite. Car was clean. All the process went smooth starting from airport and then for next 7 days.",
  },
  {
    name: "Nadia Karoui",
    badge: "Local Guide · 32 reviews",
    time: "a year ago",
    rating: 5,
    text: "Excellent service, fast replies and reliable - they accommodated all our requests. I 100% recommend them for your Dubai visit.",
  },
  {
    name: "Dina El Jisr",
    badge: "3 reviews · 1 photo",
    time: "9 months ago",
    rating: 5,
    text: "Amazing service, driver super nice, well spoken, drove perfectly and van was clean and very nice.",
  },
  {
    name: "Mini Thomas",
    badge: "2 reviews",
    time: "2 years ago",
    rating: 5,
    text: "We were impressed by the professionalism of Privilege Team's service. The luxury van was well-maintained and clean seats with professional driver. Thank you for the excellent service and hassle-free trip.",
  },
  {
    name: "Akshay Ar",
    badge: "Local Guide · 56 reviews",
    time: "3 years ago",
    rating: 5,
    text: "If you're planning a trip to Dubai, you absolutely must check out the awesome vehicles offered by Privilege Luxury Travel.",
  },
  {
    name: "SU Issa",
    badge: "1 review",
    time: "2 years ago",
    rating: 5,
    text: "Great service our driver Buba was amazing super patient with the kids and very helpful. We had the best experience in Dubai and Abu Dhabi!!! ❤️",
  },
  {
    name: "LIJO JOSEPH",
    badge: "2 reviews",
    time: "2 years ago",
    rating: 5,
    text: "We have hired the Sprinter van for two days for our guests. Service was excellent and nice interior etc for the VIP travel.",
  },
  {
    name: "sharon ann Alder",
    badge: "Local Guide · 21 reviews",
    time: "3 years ago",
    rating: 5,
    text: "Excellent cars and drivers and the service was outstanding. Extremely professional and on point! Our GO TO ground services company!",
  },
  {
    name: "Aisha Alali",
    badge: "Local Guide · 11 reviews",
    time: "3 years ago",
    rating: 5,
    text: "I am really happy with the service I had. The chauffeur was very professional and polite and his driving was very smooth and careful. This was my 1st time with them and hopefully not the last time.",
  },
  {
    name: "Ramachandar e.s",
    badge: "Local Guide · 51 reviews",
    time: "3 years ago",
    rating: 5,
    text: "Outstanding hospitality with highly quality vehicle and chauffeurs. Prompt, knowledgeable & hospitable chauffeurs, wide range of quality vehicles. Myself had a great time in Dubai. Thank you.",
  },
  {
    name: "Anoop Sadarangani",
    badge: "10 reviews",
    time: "a year ago",
    rating: 5,
    text: "Been using the service since a year, fantastic and will always use.",
  },
  {
    name: "shanavas shaji",
    badge: "4 reviews · 2 photos",
    time: "3 months ago",
    rating: 5,
    text: "Best service and classy luxury cars.",
  },
  {
    name: "Shareek Aramkuniyil",
    badge: "1 review",
    time: "3 years ago",
    rating: 5,
    text: "Team provided an awesome service and I was impressed with the cleanliness of the cars, overall it's a great outfit.",
  },
  {
    name: "Shabin",
    badge: "8 reviews",
    time: "2 years ago",
    rating: 5,
    text: "Limousine service was excellent, maintaining the vehicles very well, staffs are very supportive.",
  },
  {
    name: "V M George",
    badge: "Local Guide · 34 reviews",
    time: "3 years ago",
    rating: 5,
    text: "Prompt and good service by the team. Well maintained fleet.",
  },
  {
    name: "Divya Nair",
    badge: "6 reviews",
    time: "3 years ago",
    rating: 5,
    text: "Exceptional customer service. Would highly recommend.",
  },
  {
    name: "Shareek Ali",
    badge: "9 reviews · 4 photos",
    time: "2 years ago",
    rating: 5,
    text: "Excellent service and quality vehicles.",
  },
  {
    name: "Dilnoza Abdusattorova",
    badge: "Local Guide · 28 reviews",
    time: "3 years ago",
    rating: 5,
    text: "Service is in high level. Keep it up!",
  },
  {
    name: "Anilkrishna Kannankattil",
    badge: "Local Guide · 12 reviews",
    time: "3 years ago",
    rating: 5,
    text: "Very professional and reliable services.",
  },
  {
    name: "Mehar",
    badge: "9 reviews · 4 photos",
    time: "2 years ago",
    rating: 5,
    text: "Great service, great staff as well.",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3 h-3 text-[#AB5461]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  const colors = [
    "bg-[#AB5461] text-white",
    "bg-[#0a0a0a] text-white",
    "bg-[#e8d9a0] text-[#0a0a0a]",
    "bg-[#f5f5f5] text-[#0a0a0a]",
  ];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${color}`}>
      {initials}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TestimonialsPage() {
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]">
              Testimonials
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#AB5461]" />
                <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">
                  Google Reviews
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-6">
                What our clients
                <br />
                <span className="text-[#AB5461] italic font-extralight">say about us</span>
              </h1>
              <p className="text-[#7a7a7a] text-base font-light leading-relaxed max-w-lg mb-10">
                Real reviews from real clients - from individual travelers and families to VIP delegations and corporate event managers across Dubai and the UAE.
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

            {/* Summary stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4.9 ⭐️", label: "Google Rating" },
                { value: "28+", label: "Verified Reviews" },
                { value: "100%", label: "5 Star Reviews" },
                { value: "3+", label: "Years on Google" },
              ].map((s) => (
                <div key={s.label} className="p-8 rounded-3xl border border-[#efefef] text-center hover:border-[#AB5461] transition-colors duration-300">
                  <div className="text-4xl font-extralight text-[#0a0a0a] tracking-tight mb-2">{s.value}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE BADGE ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center gap-4 flex-wrap">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#efefef] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-sm font-light text-[#0a0a0a] tracking-tight">Verified Google Reviews</span>
          <div className="flex items-center gap-1">
            <Stars count={5} />
            <span className="text-xs text-[#9a9a9a] font-light ml-1">5.0</span>
          </div>
        </div>
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#b0b0b0] font-light">
          All reviews are from real Google clients
        </span>
      </div>

      {/* ── FEATURED REVIEWS (top 4 large) ───────────────────────── */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">Featured</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.slice(0, 4).map((r) => (
              <div
                key={r.name}
                className="group rounded-[1.75rem] border border-[#efefef] bg-white p-7 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[#e8d9a0] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Avatar name={r.name} />
                  <div>
                    <div className="text-sm font-medium text-[#0a0a0a] tracking-tight">{r.name}</div>
                    <div className="text-[10px] text-[#b0b0b0] font-light mt-0.5">{r.badge}</div>
                  </div>
                  <div className="ml-auto flex flex-col items-end gap-1">
                    <Stars count={r.rating} />
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#c0c0c0] font-light">{r.time}</span>
                  </div>
                </div>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed">{r.text}</p>
                <div className="mt-4 pt-4 border-t border-[#f5f5f5] flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#AB5461]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[#AB5461] font-light">Verified Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL REVIEWS GRID (3 col) ──────────────────────────────── */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#AB5461]" />
            <span className="text-[#AB5461] text-[10px] tracking-[0.5em] uppercase font-light">All Reviews</span>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {reviews.slice(4).map((r) => (
              <div
                key={r.name}
                className="group break-inside-avoid rounded-[1.5rem] border border-[#efefef] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)] hover:border-[#e8d9a0] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Avatar name={r.name} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-[#0a0a0a] tracking-tight truncate">{r.name}</div>
                    <div className="text-[9px] text-[#b0b0b0] font-light mt-0.5">{r.badge}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <Stars count={r.rating} />
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#c0c0c0] font-light">{r.time}</span>
                </div>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed">{r.text}</p>
                <div className="mt-3 pt-3 border-t border-[#f5f5f5] flex items-center gap-2">
                  <svg className="w-3 h-3 text-[#AB5461]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[8px] tracking-[0.25em] uppercase text-[#AB5461] font-light">Verified</span>
                </div>
              </div>
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
              Join hundreds of happy
              <br />
              <span className="text-[#AB5461] italic font-extralight">clients in Dubai</span>
            </h2>
            <p className="text-[#9a9a9a] text-sm font-light mb-8 max-w-sm mx-auto leading-relaxed">
              Book Now and Travel in Comfort - On Your Next Trip.
              <br />
              Do You Want To Talk With Us? So Don't Be Late.
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
                href="tel:+971509200818"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              >
                +971 50 920 0818
              </a>
            </div>
            <p className="text-[#9a9a9a] text-xs font-light">
              We provide luxury transportation in UAE, ensuring you enjoy sophistication, comfort, and style in one of the world's most glamorous destinations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}