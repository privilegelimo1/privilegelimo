export default function Footer() {
  const services = [
    "Airport Transfers",
    "Corporate Travel",
    "Weddings & Events",
    "City Tours",
    "Hourly Disposals",
    "VIP Nightlife",
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-6">
              <span className="text-xl font-light tracking-[0.25em] uppercase">
                Privilege
              </span>
              <span className="text-xl font-semibold tracking-[0.25em] uppercase">
                Limo
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light max-w-sm mb-10">
              Dubai&apos;s most trusted luxury chauffeur service. We deliver
              world-class transportation for discerning clients who accept nothing
              but the finest.
            </p>
            <div className="flex gap-6">
              {["Instagram", "Facebook", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] tracking-widest uppercase text-white/25 hover:text-white transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-7">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-light"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-7">
              Contact
            </h4>
            <ul className="flex flex-col gap-5">
              {[
                { label: "Phone", value: "+971 50 985 2818", href: "tel:+97100000000" },
                { label: "Email", value: "booking@privilegelimo.com", href: "mailto:booking@privilegelimo.com" },
                { label: "Location", value: "Dubai, UAE", href: undefined },
                { label: "Hours", value: "24 / 7 - Always Available", href: undefined },
              ].map((item) => (
                <li key={item.label}>
                  <span className="text-[9px] tracking-[0.35em] uppercase text-white/25 block mb-1">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/50 hover:text-white transition-colors font-light"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-white/50 font-light">
                      {item.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-light">
            © {new Date().getFullYear()} Privilege Limo. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 text-xs hover:text-white/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
