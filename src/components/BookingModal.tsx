"use client";

import { useState, useMemo } from "react";
import {
  X, Phone, User, Mail, Calendar, Clock, Users,
  ChevronDown, MessageCircle, MapPin, CheckCircle, Car,
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { fleet } from "@/data/index";

const goldGradient = "linear-gradient(135deg, #AB5461, #e8c97a, #b8943e)";

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

const bookingTypes: { value: BookingType; label: string }[] = [
  { value: "transfer", label: "Airport Transfer" },
  { value: "5hr",      label: "5 Hour Package"   },
  { value: "10hr",     label: "10 Hour Package"  },
  { value: "point",    label: "Point to Point"   },
  { value: "weekly",   label: "Weekly"           },
  { value: "monthly",  label: "Monthly"          },
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

  // ── Fleet selection state ──────────────────────────────────────────────────
  const [selectedClass, setSelectedClass]     = useState<string>("");
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");

  const [form, setForm] = useState({
    name: "", phone: "", email: "", passengers: "1",
    pickup: "", dropoff: "", time: "", notes: "",
  });

  // ── Derive unique classes from fleet data ──────────────────────────────────
  const fleetClasses = useMemo(() => {
  const seen = new Set<string>();
  const classes: { classSlug: string; category: string }[] = [];
  for (const car of fleet) {
    if (!car.classSlug || !car.category) continue;
    if (!seen.has(car.classSlug)) {
      seen.add(car.classSlug);
      classes.push({ classSlug: car.classSlug, category: car.category });
    }
  }
  return classes;
}, []);

  // ── Vehicles filtered by selected class ────────────────────────────────────
 const vehiclesInClass = useMemo(
  () => fleet.filter((car) => car.classSlug != null && car.classSlug === selectedClass),
  [selectedClass]
);

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
    type === "weekly" || type === "monthly" ? "Contact for Rate" : `From ${priceMap[type]}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    const chosenVehicle = selectedVehicle
      ? fleet.find((c) => c.slug === selectedVehicle)?.name ?? selectedVehicle
      : carName;
    const msg = [
      `New Booking Request — Privilege Limo`,
      ``,
      `Vehicle: ${chosenVehicle} (${carCategory})`,
      `Booking Type: ${bookingTypes.find((b) => b.value === bookingType)?.label}`,
      `Price: ${displayPrice(bookingType)}`,
      ``,
      `Client Details`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Passengers: ${form.passengers}`,
      ``,
      `Journey Details`,
      `Date: ${selectedDate ? format(selectedDate, "dd MMM yyyy") : "Not specified"}`,
      isMultiDay && endDate ? `End Date: ${format(endDate, "dd MMM yyyy")}` : null,
      form.time    ? `Time: ${form.time}`        : null,
      form.pickup  ? `Pickup: ${form.pickup}`    : null,
      form.dropoff ? `Drop-off: ${form.dropoff}` : null,
      form.notes   ? `Notes: ${form.notes}`      : null,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/971509200818?text=${encodeURIComponent(msg)}`, "_blank");
    setTimeout(() => setSent(true), 2500);
  };

  // ── Shared tiny input style ──────────────────────────────────────────────
  const inp = "w-full pl-8 pr-3 py-2 rounded-lg border border-[#e8d9a0] focus:border-[#AB5461] focus:outline-none text-xs text-[#0a0a0a] placeholder:text-[#c0c0c0] bg-white";
  const sel = "w-full pl-8 pr-7 py-2 rounded-lg border border-[#e8d9a0] focus:border-[#AB5461] focus:outline-none text-xs text-[#0a0a0a] appearance-none bg-white";
  const lbl = "text-[9px] font-semibold text-[#0a0a0a] uppercase tracking-[0.25em] mb-1 block";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[80vh] sm:max-h-[85vh] overflow-hidden">

        {/* ── SUCCESS ───────────────────────────────────────────── */}
        {sent ? (
          <div className="flex flex-col items-center justify-center py-12 px-8 text-center">
            <div className="relative mb-5">
              <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#22c55e]" />
              <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-[#22c55e]">
                <CheckCircle size={34} color="white" strokeWidth={2} />
              </div>
            </div>
            <h2 className="text-lg font-light text-[#0a0a0a] mb-2 tracking-tight">Request Sent</h2>
            <p className="text-[#7a7a7a] text-xs leading-relaxed mb-6 max-w-xs font-light">
              Your request for the{" "}
              <span className="font-medium text-[#0a0a0a]">
                {selectedVehicle
                  ? fleet.find((c) => c.slug === selectedVehicle)?.name ?? carName
                  : carName}
              </span>{" "}
              has been sent. Our team will confirm shortly.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-2.5 rounded-full text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:opacity-90 transition-opacity"
              style={{ background: goldGradient }}
            >
              Close
            </button>
          </div>

        ) : (
          <>
            {/* ── HEADER ────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#efefef] bg-[#fdf8ec] shrink-0">
              <div>
                <p className="text-[9px] font-light uppercase tracking-[0.4em] text-[#AB5461]">
                  Reserve · Privilege Limo
                </p>
                <h2 className="text-sm font-light text-[#0a0a0a] tracking-tight mt-0.5">
                  {selectedVehicle
                    ? fleet.find((c) => c.slug === selectedVehicle)?.name ?? carName
                    : carName}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-white border border-[#efefef] flex items-center justify-center hover:border-[#0a0a0a] transition-colors"
              >
                <X size={13} className="text-[#6a6a6a]" />
              </button>
            </div>

            {/* ── STEP BAR ──────────────────────────────────────── */}
            <div className="flex gap-1.5 px-5 py-2 shrink-0">
              {[1, 2].map((s) => (
                <div key={s} className="h-0.5 flex-1 rounded-full transition-all duration-300"
                  style={{ background: step >= s ? goldGradient : "#efefef" }} />
              ))}
            </div>

            {/* ── BODY ──────────────────────────────────────────── */}
            <div className="overflow-y-auto flex-1 min-h-0 px-5 py-3 space-y-3">

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  
                  {/* Booking type — compact pill grid */}
                  <div>
                    <label className={lbl}>Booking Type</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {bookingTypes.map((bt) => (
                        <button
                          key={bt.value}
                          onClick={() => setBookingType(bt.value)}
                          className="py-2 px-2 rounded-lg border text-center transition-all duration-150 text-[10px] font-medium leading-tight"
                          style={{
                            borderColor: bookingType === bt.value ? "#AB5461" : "#efefef",
                            background:  bookingType === bt.value ? "#fdf8ec" : "white",
                            color:       bookingType === bt.value ? "#0a0a0a" : "#6a6a6a",
                          }}
                        >
                          {bt.label}
                          <div
                            className="text-[9px] mt-0.5 font-light"
                            style={{ color: bookingType === bt.value ? "#AB5461" : "#c0c0c0" }}
                          >
                            {bt.value === "weekly" || bt.value === "monthly"
                              ? "Custom"
                              : priceMap[bt.value]}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ── FLEET CLASS DROPDOWN ──────────────────────── */}
                  <div>
                    <label className={lbl}>Vehicle Class</label>
                    <div className="relative">
                      <Car size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#AB5461] pointer-events-none" />
                      <select
                        value={selectedClass}
                        onChange={(e) => {
                          setSelectedClass(e.target.value);
                          setSelectedVehicle(""); // reset vehicle when class changes
                        }}
                        className={sel}
                      >
                        <option value="">Select a vehicle class</option>
                        {fleetClasses.map(({ classSlug, category }) => (
                          <option key={classSlug} value={classSlug}>
                            {category}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={11} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#0a0a0a] pointer-events-none" />
                    </div>
                  </div>

                  {/* ── VEHICLE DROPDOWN (appears after class selected) ── */}
                  {selectedClass && (
                    <div>
                      <label className={lbl}>Select Vehicle</label>
                      <div className="relative">
                        <Car size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#AB5461] pointer-events-none" />
                        <select
                          value={selectedVehicle}
                          onChange={(e) => setSelectedVehicle(e.target.value)}
                          className={sel}
                        >
                          <option value="">Choose a vehicle</option>
                          {vehiclesInClass.map((car) => (
                            <option key={car.slug} value={car.slug}>
                              {car.name}
                              {car.priceLabel ? ` — ${car.priceLabel}` : ""}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={11} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#0a0a0a] pointer-events-none" />
                      </div>
                      {/* Show selected vehicle quick specs */}
                      {selectedVehicle && (() => {
                        const car = fleet.find((c) => c.slug === selectedVehicle);
                        return car ? (
                          <div className="mt-1.5 flex items-center gap-3 px-3 py-2 rounded-lg bg-[#fdf8ec] border border-[#e8d9a0] text-[10px] text-[#0a0a0a]">
                            <span>{car.passengers} passengers</span>
                            <span className="text-[#e8d9a0]">·</span>
                            <span>{car.luggage} luggage</span>
                            {car.features?.[0] && (
                              <>
                                <span className="text-[#e8d9a0]">·</span>
                                <span className="text-[#AB5461]">{car.features[0]}</span>
                              </>
                            )}
                          </div>
                        ) : null;
                      })()}
                    </div>
                  )}

                  {/* Divider */}
                  <div className="h-px bg-[#f4f4f4]" />


                  {/* Date */}
                  <div>
                    <label className={lbl}>{isMultiDay ? "Start Date" : "Journey Date"}</label>
                    <button
                      onClick={() => { setShowCalendar((v) => !v); setShowEndCalendar(false); }}
                      className="w-full flex items-center gap-2 pl-2.5 pr-3 py-2 rounded-lg border border-[#e8d9a0] text-xs bg-white hover:border-[#AB5461] transition-colors"
                    >
                      <Calendar size={13} className="text-[#AB5461] shrink-0" />
                      <span className={selectedDate ? "text-[#0a0a0a]" : "text-[#c0c0c0]"}>
                        {selectedDate ? format(selectedDate, "dd MMM yyyy") : "Select a date"}
                      </span>
                    </button>
                    {showCalendar && (
                      <div className="mt-1.5 rounded-xl border border-[#e8d9a0] overflow-hidden">
                        <style>{`
                          .rdp { margin: 0 !important; }
                          .rdp-day_selected { background: #AB5461 !important; color: white !important; }
                          .rdp-day:hover:not(.rdp-day_selected) { background: #fdf8ec !important; }
                        `}</style>
                        <DayPicker
                          mode="single"
                          selected={selectedDate}
                          onSelect={(d) => { setSelectedDate(d); setShowCalendar(false); }}
                          disabled={{ before: new Date() }}
                          className="!font-sans text-sm"
                        />
                      </div>
                    )}
                  </div>

                  {isMultiDay && (
                    <div>
                      <label className={lbl}>End Date</label>
                      <button
                        onClick={() => { setShowEndCalendar((v) => !v); setShowCalendar(false); }}
                        className="w-full flex items-center gap-2 pl-2.5 pr-3 py-2 rounded-lg border border-[#e8d9a0] text-xs bg-white hover:border-[#AB5461] transition-colors"
                      >
                        <Calendar size={13} className="text-[#AB5461] shrink-0" />
                        <span className={endDate ? "text-[#0a0a0a]" : "text-[#c0c0c0]"}>
                          {endDate ? format(endDate, "dd MMM yyyy") : "Select end date"}
                        </span>
                      </button>
                      {showEndCalendar && (
                        <div className="mt-1.5 rounded-xl border border-[#e8d9a0] overflow-hidden">
                          <DayPicker
                            mode="single"
                            selected={endDate}
                            onSelect={(d) => { setEndDate(d); setShowEndCalendar(false); }}
                            disabled={{ before: selectedDate ?? new Date() }}
                            className="!font-sans text-sm"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {!isMultiDay && (
                    <div>
                      <label className={lbl}>Pickup Time</label>
                      <div className="relative">
                        <Clock size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#AB5461]" />
                        <input type="time" name="time" value={form.time} onChange={handleChange} className={inp} />
                      </div>
                    </div>
                  )}

                  {/* Price pill */}
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#fdf8ec] border border-[#e8d9a0]">
                    <span className="text-[9px] text-[#0a0a0a] uppercase tracking-[0.25em] font-light">Est. Price</span>
                    <span className="text-sm font-medium text-[#AB5461]">{displayPrice(bookingType)}</span>
                  </div>
                </>
              )}

              {/* STEP 2 — unchanged */}
              {step === 2 && (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className={lbl}>Full Name *</label>
                      <div className="relative">
                        <User size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#AB5461]" />
                        <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} className={inp} />
                      </div>
                    </div>
                    <div>
                      <label className={lbl}>Phone *</label>
                      <div className="relative">
                        <Phone size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#AB5461]" />
                        <input type="tel" name="phone" placeholder="+971 50…" value={form.phone} onChange={handleChange} className={inp} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className={lbl}>Email</label>
                      <div className="relative">
                        <Mail size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#AB5461]" />
                        <input type="email" name="email" placeholder="email@…" value={form.email} onChange={handleChange} className={inp} />
                      </div>
                    </div>
                    <div>
                      <label className={lbl}>Passengers</label>
                      <div className="relative">
                        <Users size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#AB5461]" />
                        <select name="passengers" value={form.passengers} onChange={handleChange}
                          className="w-full pl-7 pr-6 py-2 rounded-lg border border-[#e8d9a0] focus:border-[#AB5461] focus:outline-none text-xs text-[#0a0a0a] appearance-none bg-white">
                          {passengerOptions.map((n) => (
                            <option key={n} value={n}>{n} pax</option>
                          ))}
                        </select>
                        <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0a0a0a] pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={lbl}>{needsRoute ? "Pickup Location" : "Base Location"}</label>
                    <div className="relative">
                      <MapPin size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#AB5461]" />
                      <input type="text" name="pickup"
                        placeholder={needsRoute ? "Hotel, airport or landmark" : "Your base area"}
                        value={form.pickup} onChange={handleChange} className={inp} />
                    </div>
                  </div>

                  {needsRoute && (
                    <div>
                      <label className={lbl}>Drop-off Location</label>
                      <div className="relative">
                        <MapPin size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#AB5461]" />
                        <input type="text" name="dropoff" placeholder="Destination"
                          value={form.dropoff} onChange={handleChange} className={inp} />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className={lbl}>Notes</label>
                    <textarea name="notes" rows={2}
                      placeholder="Flight number, special requests..."
                      value={form.notes} onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-[#e8d9a0] focus:border-[#AB5461] focus:outline-none text-xs text-[#0a0a0a] placeholder:text-[#c0c0c0] bg-white resize-none"
                    />
                  </div>

                  {/* Compact summary */}
                  <div className="rounded-xl p-3 bg-[#fdf8ec] border border-[#e8d9a0]">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                      {[
                        ["Vehicle",  selectedVehicle
                          ? fleet.find((c) => c.slug === selectedVehicle)?.name ?? carName
                          : carName],
                        ["Type",     bookingTypes.find((b) => b.value === bookingType)?.label ?? ""],
                        ["Date",     selectedDate ? format(selectedDate, "dd MMM yyyy") : "—"],
                        ["Price",    displayPrice(bookingType)],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-2">
                          <span className="text-[#0a0a0a]">{k}</span>
                          <span className="text-[#0a0a0a] font-medium text-right truncate">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* ── FOOTER ────────────────────────────────────────── */}
            <div className="px-5 py-3 border-t border-[#efefef] bg-white flex gap-2 shrink-0">
              {step === 2 && (
                <button onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-full border border-[#e8d9a0] text-xs font-light text-[#AB5461] hover:bg-[#fdf8ec] transition-colors">
                  Back
                </button>
              )}
              {step === 1 ? (
                <button onClick={() => setStep(2)}
                  className="flex-1 py-2.5 rounded-full text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:opacity-90 transition-opacity"
                  style={{ background: goldGradient }}>
                  Continue
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={!form.name || !form.phone}
                  className="flex-1 py-2.5 rounded-full text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: goldGradient }}>
                  <MessageCircle size={13} />
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