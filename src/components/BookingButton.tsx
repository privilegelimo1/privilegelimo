"use client";

import { useState } from "react";
import { X, CheckCircle, CalendarCheck } from "lucide-react";

const goldGradient = "linear-gradient(135deg, #c9a84c, #e8c97a, #b8943e)";

type BookingType = "transfer" | "5hr" | "10hr" | "point" | "weekly" | "monthly";

const BOOKING_TYPES: { key: BookingType; label: string; desc: string }[] = [
  { key: "transfer", label: "Transfer",      desc: "Airport / one-way"   },
  { key: "5hr",      label: "5 Hours",       desc: "Half day package"    },
  { key: "10hr",     label: "10 Hours",      desc: "Full day package"    },
  { key: "point",    label: "Point to Point",desc: "Custom route"        },
  { key: "weekly",   label: "Weekly",        desc: "7 days dedicated"    },
  { key: "monthly",  label: "Monthly",       desc: "Monthly driver"      },
];

type BookingButtonProps = {
  carName: string;
  carCategory: string;
  transferPrice: string;
  price5hr: string;
  price10hr: string;
  maxPassengers: number;
  variant?: "default" | "light";
};

export default function BookingButton({
  carName,
  carCategory,
  transferPrice,
  price5hr,
  price10hr,
  maxPassengers,
  variant = "default",
}: BookingButtonProps) {
  const [open, setOpen]               = useState(false);
  const [sent, setSent]               = useState(false);
  const [bookingType, setBookingType] = useState<BookingType>("transfer");
  const [name, setName]               = useState("");
  const [phone, setPhone]             = useState("");
  const [date, setDate]               = useState("");
  const [endDate, setEndDate]         = useState("");
  const [time, setTime]               = useState("");
  const [passengers, setPassengers]   = useState(1);
  const [pickup, setPickup]           = useState("");
  const [dropoff, setDropoff]         = useState("");
  const [notes, setNotes]             = useState("");

  const isMultiDay = bookingType === "weekly" || bookingType === "monthly";
  const needsRoute = bookingType === "transfer" || bookingType === "point";

  const priceMap: Record<BookingType, string> = {
    transfer: transferPrice,
    "5hr":    price5hr,
    "10hr":   price10hr,
    point:    transferPrice,
    weekly:   "Contact for Rate",
    monthly:  "Contact for Rate",
  };

  const displayPrice = (type: BookingType) =>
    type === "weekly" || type === "monthly"
      ? "Contact for Rate"
      : `Starting from ${priceMap[type]}`;

  const bookingTypeLabel = BOOKING_TYPES.find((b) => b.key === bookingType)?.label ?? "";

  function resetForm() {
    setBookingType("transfer"); setName(""); setPhone(""); setDate("");
    setEndDate(""); setTime(""); setPassengers(1); setPickup(""); setDropoff(""); setNotes("");
  }

  function handleClose() { setOpen(false); setSent(false); resetForm(); }

  function handleSend() {
    const msg = [
      `*New Booking Request — Privilege Limo*`,
      ``,
      `*Vehicle:* ${carName} (${carCategory})`,
      `*Booking Type:* ${bookingTypeLabel}`,
      `*Price:* ${displayPrice(bookingType)}`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Date:* ${date}`,
      isMultiDay && endDate ? `*End Date:* ${endDate}` : "",
      !isMultiDay && time   ? `*Time:* ${time}`        : "",
      `*Passengers:* ${passengers}`,
      pickup                ? `*Pickup:* ${pickup}`    : "",
      needsRoute && dropoff ? `*Drop-off:* ${dropoff}` : "",
      notes                 ? `*Notes:* ${notes}`      : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/971509200818?text=${encodeURIComponent(msg)}`, "_blank");
    setTimeout(() => setSent(true), 2500);
  }

  const isValid = name && phone && date && pickup;

  const inputClass = "w-full border border-[#e8d9a0] rounded-xl px-3 py-2.5 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#c9a84c] bg-[#fdf8ec]/50 placeholder:text-[#b0b0b0]";
  const labelClass = "text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-[0.3em] mb-1.5 block";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 w-full text-white font-medium text-[11px] tracking-[0.25em] uppercase py-3.5 rounded-full hover:opacity-90 transition-all"
        style={{ background: goldGradient }}
      >
        <CalendarCheck size={15} />
        Book Now
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden">

            {/* SUCCESS */}
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-[#22c55e]">
                  <CheckCircle size={52} color="white" strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-light text-[#0a0a0a] mb-2 tracking-tight">Booking Sent!</h2>
                <p className="text-[#7a7a7a] text-sm leading-relaxed mb-8 font-light">
                  Your booking request for the{" "}
                  <span className="font-medium text-[#0a0a0a]">{carName}</span> has been sent via WhatsApp. Our team will confirm within minutes.
                </p>
                <button
                  onClick={handleClose}
                  className="w-full max-w-xs py-3 rounded-full text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:opacity-90 transition-opacity"
                  style={{ background: goldGradient }}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="p-5 text-white" style={{ background: goldGradient }}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-white/70 text-[10px] uppercase tracking-[0.4em] mb-0.5">Booking Request</p>
                      <h2 className="text-lg font-light leading-tight tracking-tight">{carName}</h2>
                      <p className="text-white/70 text-[11px] mt-0.5 font-light">{carCategory}</p>
                    </div>
                    <button onClick={handleClose} className="text-white/70 hover:text-white transition-colors mt-0.5">
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Form */}
                <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">

                  {/* Booking Type */}
                  <div>
                    <label className={labelClass}>Booking Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {BOOKING_TYPES.map(({ key, label, desc }) => (
                        <button
                          key={key}
                          onClick={() => setBookingType(key)}
                          className={`rounded-xl p-2.5 text-center border transition-all ${
                            bookingType === key ? "border-[#c9a84c] text-white" : "border-[#efefef] text-[#5a5a5a] hover:border-[#c9a84c]/40"
                          }`}
                          style={bookingType === key ? { background: goldGradient } : { background: "#fdf8ec" }}
                        >
                          <p className="text-xs font-medium">{label}</p>
                          <p className="text-[10px] opacity-70 mt-0.5 leading-tight">{desc}</p>
                          <p className="text-[10px] font-medium mt-1">
                            {key === "weekly" || key === "monthly" ? "Custom" : `From ${priceMap[key]}`}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Preview */}
                  <div className="rounded-xl px-4 py-2.5 flex items-center justify-between bg-[#fdf8ec] border border-[#e8d9a0]">
                    <span className="text-[10px] font-medium text-[#9a9a9a] uppercase tracking-[0.3em]">Estimated Price</span>
                    <span className="font-medium text-sm text-[#c9a84c]">{displayPrice(bookingType)}</span>
                  </div>

                  {/* Info banners */}
                  {isMultiDay && (
                    <p className="text-xs text-[#7a7a7a] bg-[#fdf8ec] border border-[#e8d9a0] rounded-xl px-4 py-3 leading-relaxed">
                      For <strong>{bookingType}</strong> packages, our team will provide a custom quote. Fill in your details and we&apos;ll confirm within the hour.
                    </p>
                  )}
                  {bookingType === "point" && (
                    <p className="text-xs text-[#7a7a7a] bg-[#fdf8ec] border border-[#e8d9a0] rounded-xl px-4 py-3 leading-relaxed">
                      📍 Enter your pickup and drop-off locations below.
                    </p>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Your Name *</label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Smith" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone *</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+971 50 000 0000" className={inputClass} />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>{isMultiDay ? "Start Date *" : "Date *"}</label>
                      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      {isMultiDay ? (
                        <>
                          <label className={labelClass}>End Date</label>
                          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={inputClass} />
                        </>
                      ) : (
                        <>
                          <label className={labelClass}>Time *</label>
                          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className={inputClass} />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Passengers */}
                  <div>
                    <label className={labelClass}>Passengers (max {maxPassengers})</label>
                    <input
                      type="number" min={1} max={maxPassengers} value={passengers}
                      onChange={(e) => setPassengers(Math.min(Number(e.target.value), maxPassengers))}
                      className={inputClass}
                    />
                  </div>

                  {/* Pickup */}
                  <div>
                    <label className={labelClass}>{needsRoute ? "Pickup Location *" : "Base Location *"}</label>
                    <input
                      type="text" value={pickup} onChange={(e) => setPickup(e.target.value)}
                      placeholder={needsRoute ? "Hotel, airport terminal, address…" : "Your base area or location…"}
                      className={inputClass}
                    />
                  </div>

                  {/* Drop-off */}
                  {needsRoute && (
                    <div>
                      <label className={labelClass}>Drop-off Location</label>
                      <input type="text" value={dropoff} onChange={(e) => setDropoff(e.target.value)} placeholder="Destination address…" className={inputClass} />
                    </div>
                  )}

                  {/* Notes */}
                  <div>
                    <label className={labelClass}>Special Requests</label>
                    <textarea
                      value={notes} onChange={(e) => setNotes(e.target.value)} rows={2}
                      placeholder={isMultiDay ? "Describe your schedule, daily requirements…" : "Flight number, child seat, meet & greet…"}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 pb-5">
                  <button
                    onClick={handleSend}
                    disabled={!isValid}
                    className="flex items-center justify-center gap-2 w-full text-white font-medium text-[11px] tracking-[0.25em] uppercase py-3.5 rounded-full transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
                    style={{ background: goldGradient }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    Send Booking via WhatsApp
                  </button>
                  <p className="text-center text-[11px] text-[#b0b0b0] mt-2 font-light">Opens WhatsApp · Confirmed within minutes</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
