"use client";

import { useState } from "react";
import { X, Phone, User, Mail, Calendar, Clock, Users, ChevronDown, MessageCircle, MapPin, StickyNote, CheckCircle } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const goldGradient = "linear-gradient(135deg, #c9a84c, #e8c97a, #b8943e)";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  carName: string;
  carCategory: string;
  transferPrice: string;
  price5hr: string;
  price10hr: string;
  maxPassengers: number;
}

type BookingType = "transfer" | "5hr" | "10hr" | "point" | "weekly" | "monthly";

const bookingTypes: { value: BookingType; label: string; desc: string }[] = [
  { value: "transfer", label: "Airport Transfer",  desc: "One-way or return transfer"  },
  { value: "5hr",      label: "5 Hour Package",    desc: "Half day with chauffeur"     },
  { value: "10hr",     label: "10 Hour Package",   desc: "Full day with chauffeur"     },
  { value: "point",    label: "Point to Point",    desc: "Custom route, fixed price"   },
  { value: "weekly",   label: "Weekly Package",    desc: "7 days dedicated chauffeur"  },
  { value: "monthly",  label: "Monthly Package",   desc: "Dedicated monthly driver"    },
];

export default function BookingModal({
  isOpen, onClose, carName, carCategory,
  transferPrice, price5hr, price10hr, maxPassengers,
}: BookingModalProps) {
  const [step, setStep]                       = useState<1 | 2>(1);
  const [sent, setSent]                       = useState(false);
  const [bookingType, setBookingType]         = useState<BookingType>("transfer");
  const [selectedDate, setSelectedDate]       = useState<Date | undefined>();
  const [endDate, setEndDate]                 = useState<Date | undefined>();
  const [showCalendar, setShowCalendar]       = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", passengers: "1",
    pickup: "", dropoff: "", time: "", notes: "",
  });

  if (!isOpen) return null;

  const seatCount        = maxPassengers > 0 ? maxPassengers : 4;
  const passengerOptions = Array.from({ length: seatCount }, (_, i) => i + 1);
  const isMultiDay       = bookingType === "weekly" || bookingType === "monthly";
  const needsRoute       = bookingType === "transfer" || bookingType === "point";

  const priceMap: Record<BookingType, string> = {
    transfer: transferPrice, "5hr": price5hr, "10hr": price10hr,
    point: transferPrice, weekly: "Contact for Rate", monthly: "Contact for Rate",
  };

  const displayPrice = (type: BookingType) =>
    type === "weekly" || type === "monthly" ? "Contact for Rate" : `Starting from ${priceMap[type]}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    const dateStr    = selectedDate ? format(selectedDate, "dd MMM yyyy") : "Not specified";
    const endDateStr = isMultiDay && endDate ? format(endDate, "dd MMM yyyy") : null;

    const msg = [
      `*New Booking Request — Privilege Limo*`,
      ``,
      `*Vehicle:* ${carName} (${carCategory})`,
      `*Booking Type:* ${bookingTypes.find((b) => b.value === bookingType)?.label}`,
      `*Price:* ${displayPrice(bookingType)}`,
      ``,
      `*Client Details*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Passengers: ${form.passengers}`,
      ``,
      `*Journey Details*`,
      `Date: ${dateStr}`,
      endDateStr   ? `End Date: ${endDateStr}`   : null,
      form.time    ? `Time: ${form.time}`        : null,
      form.pickup  ? `Pickup: ${form.pickup}`    : null,
      form.dropoff ? `Drop-off: ${form.dropoff}` : null,
      form.notes   ? `\nNotes: ${form.notes}`    : null,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/971509200818?text=${encodeURIComponent(msg)}`, "_blank");
    setTimeout(() => setSent(true), 2500);
  };

  const inputClass = "w-full pl-9 pr-4 py-3 rounded-xl border border-[#e8d9a0] focus:border-[#c9a84c] focus:outline-none text-sm text-[#0a0a0a] placeholder:text-[#c0c0c0] bg-[#fdf8ec]/30";
  const labelClass = "text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-[0.3em] mb-2 block";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">

        {/* SUCCESS */}
        {sent ? (
          <div className="flex flex-col items-center justify-center py-20 px-10 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full animate-ping opacity-25 bg-[#22c55e]" />
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-[#22c55e]">
                <CheckCircle size={50} color="white" strokeWidth={2.5} />
              </div>
            </div>
            <h2 className="text-2xl font-light text-[#0a0a0a] mb-2 tracking-tight">Booking Sent!</h2>
            <p className="text-[#7a7a7a] text-sm leading-relaxed mb-8 max-w-xs font-light">
              Your request for the <span className="font-medium text-[#0a0a0a]">{carName}</span> has been sent via WhatsApp. Our team will confirm shortly.
            </p>
            <button onClick={onClose} className="w-full max-w-xs py-3 rounded-full text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:opacity-90 transition-opacity" style={{ background: goldGradient }}>
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#efefef] bg-[#fdf8ec]">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#c9a84c]">Reserve This Vehicle</p>
                <h2 className="text-lg font-light text-[#0a0a0a] tracking-tight">{carName}</h2>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <X size={16} className="text-[#9a9a9a]" />
              </button>
            </div>

            {/* Step indicator */}
            <div className="flex gap-2 px-6 pt-4">
              {[1, 2].map((s) => (
                <div key={s} className="h-1 flex-1 rounded-full transition-all duration-300"
                  style={{ background: step >= s ? goldGradient : "#efefef" }} />
              ))}
            </div>

            {/* Body */}
            <div className="overflow-y-auto flex-1 px-6 py-4 space-y-5">

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <div>
                    <label className={labelClass}>Booking Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {bookingTypes.map((bt) => (
                        <button
                          key={bt.value}
                          onClick={() => setBookingType(bt.value)}
                          className="text-left p-3 rounded-xl border-2 transition-all"
                          style={{
                            borderColor: bookingType === bt.value ? "#c9a84c" : "#efefef",
                            background:  bookingType === bt.value ? "#fdf8ec" : "white",
                          }}
                        >
                          <p className="text-sm font-medium" style={{ color: bookingType === bt.value ? "#c9a84c" : "#0a0a0a" }}>
                            {bt.label}
                          </p>
                          <p className="text-xs text-[#9a9a9a] mt-0.5 font-light">{bt.desc}</p>
                          <p className="text-xs font-medium mt-1.5" style={{ color: bookingType === bt.value ? "#c9a84c" : "#b0b0b0" }}>
                            {bt.value === "weekly" || bt.value === "monthly" ? "Contact for Rate" : `From ${priceMap[bt.value]}`}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl px-4 py-3 flex items-center justify-between bg-[#fdf8ec] border border-[#e8d9a0]">
                    <span className="text-[10px] font-medium text-[#9a9a9a] uppercase tracking-[0.3em]">Estimated Price</span>
                    <span className="font-medium text-base text-[#c9a84c]">{displayPrice(bookingType)}</span>
                  </div>

                  {isMultiDay && (
                    <div className="rounded-xl px-4 py-3 border border-[#e8d9a0] text-xs text-[#7a7a7a] leading-relaxed bg-[#fdf8ec]">
                      For <strong>{bookingType}</strong> packages, our team will provide a custom quote based on your schedule.
                    </div>
                  )}

                  {/* Journey Date */}
                  <div>
                    <label className={labelClass}>{isMultiDay ? "Start Date" : "Journey Date"}</label>
                    <button
                      onClick={() => { setShowCalendar((v) => !v); setShowEndCalendar(false); }}
                      className="w-full flex items-center gap-3 pl-3 pr-4 py-3 rounded-xl border border-[#e8d9a0] text-sm bg-white"
                    >
                      <Calendar size={16} className="text-[#c9a84c] shrink-0" />
                      <span className={selectedDate ? "text-[#0a0a0a]" : "text-[#c0c0c0]"}>
                        {selectedDate ? format(selectedDate, "dd MMM yyyy") : "Select a date"}
                      </span>
                    </button>
                    {showCalendar && (
                      <div className="mt-2 rounded-2xl border border-[#e8d9a0] overflow-hidden">
                        <DayPicker mode="single" selected={selectedDate}
                          onSelect={(d) => { setSelectedDate(d); setShowCalendar(false); }}
                          disabled={{ before: new Date() }} className="!font-sans" />
                      </div>
                    )}
                  </div>

                  {isMultiDay && (
                    <div>
                      <label className={labelClass}>End Date</label>
                      <button
                        onClick={() => { setShowEndCalendar((v) => !v); setShowCalendar(false); }}
                        className="w-full flex items-center gap-3 pl-3 pr-4 py-3 rounded-xl border border-[#e8d9a0] text-sm bg-white"
                      >
                        <Calendar size={16} className="text-[#c9a84c] shrink-0" />
                        <span className={endDate ? "text-[#0a0a0a]" : "text-[#c0c0c0]"}>
                          {endDate ? format(endDate, "dd MMM yyyy") : "Select end date"}
                        </span>
                      </button>
                      {showEndCalendar && (
                        <div className="mt-2 rounded-2xl border border-[#e8d9a0] overflow-hidden">
                          <DayPicker mode="single" selected={endDate}
                            onSelect={(d) => { setEndDate(d); setShowEndCalendar(false); }}
                            disabled={{ before: selectedDate ?? new Date() }} />
                        </div>
                      )}
                    </div>
                  )}

                  {!isMultiDay && (
                    <div>
                      <label className={labelClass}>Pickup Time</label>
                      <div className="relative">
                        <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a84c]" />
                        <input type="time" name="time" value={form.time} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a84c]" />
                      <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a84c]" />
                      <input type="tel" name="phone" placeholder="+971 50 920 0818" value={form.phone} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a84c]" />
                      <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Number of Passengers</label>
                    <div className="relative">
                      <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a84c]" />
                      <select name="passengers" value={form.passengers} onChange={handleChange}
                        className="w-full pl-9 pr-10 py-3 rounded-xl border border-[#e8d9a0] focus:border-[#c9a84c] focus:outline-none text-sm text-[#0a0a0a] appearance-none bg-white">
                        {passengerOptions.map((n) => (
                          <option key={n} value={n}>{n} Passenger{n > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9a9a9a] pointer-events-none" />
                    </div>
                    <p className="text-xs text-[#9a9a9a] mt-1.5 font-light">
                      Vehicle capacity: <span className="font-medium text-[#c9a84c]">{seatCount} passenger{seatCount > 1 ? "s" : ""}</span>
                    </p>
                  </div>

                  <div>
                    <label className={labelClass}>{needsRoute ? "Pickup Location" : "Primary Location / Base"}</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a84c]" />
                      <input type="text" name="pickup"
                        placeholder={needsRoute ? "Hotel, address or landmark" : "Your base location / area"}
                        value={form.pickup} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  {needsRoute && (
                    <div>
                      <label className={labelClass}>Drop-off Location</label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a84c]" />
                        <input type="text" name="dropoff" placeholder="Destination address"
                          value={form.dropoff} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className={labelClass}>Additional Notes</label>
                    <div className="relative">
                      <StickyNote size={16} className="absolute left-3 top-3.5 text-[#c9a84c]" />
                      <textarea name="notes" rows={3}
                        placeholder={isMultiDay ? "Describe your schedule, daily usage, special requirements..." : "Special requests, flight number, luggage details..."}
                        value={form.notes} onChange={handleChange}
                        className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#e8d9a0] focus:border-[#c9a84c] focus:outline-none text-sm text-[#0a0a0a] placeholder:text-[#c0c0c0] bg-[#fdf8ec]/30 resize-none" />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="rounded-2xl p-4 space-y-1.5 text-sm bg-[#fdf8ec] border border-[#e8d9a0]">
                    <p className="text-[10px] font-medium text-[#9a9a9a] uppercase tracking-[0.3em] mb-2">Booking Summary</p>
                    {[
                      { label: "Vehicle", value: carName },
                      { label: "Type", value: bookingTypes.find((b) => b.value === bookingType)?.label },
                      { label: "Date", value: selectedDate ? format(selectedDate, "dd MMM yyyy") : "-" },
                      ...(!isMultiDay ? [{ label: "Time", value: form.time || "-" }] : []),
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between">
                        <span className="text-[#9a9a9a] font-light">{row.label}</span>
                        <span className="text-[#0a0a0a] font-medium">{row.value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between border-t border-[#e8d9a0] pt-1.5 mt-1">
                      <span className="text-[#9a9a9a] font-light">Est. Price</span>
                      <span className="font-medium text-[#c9a84c]">{displayPrice(bookingType)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#efefef] flex gap-3">
              {step === 2 && (
                <button onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-full border border-[#e8d9a0] text-sm font-medium text-[#c9a84c] hover:bg-[#fdf8ec] transition-colors">
                  Back
                </button>
              )}
              {step === 1 ? (
                <button onClick={() => setStep(2)}
                  className="flex-1 py-3 rounded-full text-white text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
                  style={{ background: goldGradient }}>
                  Continue →
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={!form.name || !form.phone}
                  className="flex-1 py-3 rounded-full text-white text-sm font-medium tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: goldGradient }}>
                  <MessageCircle size={16} />
                  Send via WhatsApp
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
