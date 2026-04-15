"use client";

import { useState } from "react";

const SERVICES = [
  "Airport Transfer — Arrival",
  "Airport Transfer — Departure",
  "Corporate / Business Travel",
  "Wedding / Special Occasion",
  "City Tour / Sightseeing",
  "Full Day Disposal",
  "Hourly Hire",
  "Intercity Transfer",
  "Event Transportation",
  "Monthly / Long-Term Hire",
  "Other — I will explain on WhatsApp",
];

const AIRPORTS = [
  "DXB — Dubai International",
  "DWC — Al Maktoum",
  "AUH — Abu Dhabi",
  "SHJ — Sharjah",
];

export default function FleetBookingForm({
  vehicleName,
  priceLabel,
  maxPassengers = 50,
}: {
  vehicleName: string;
  priceLabel: string;
  maxPassengers?: number;
}) {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [airport, setAirport] = useState("");
  const [flight, setFlight] = useState("");
  const [notes, setNotes] = useState("");

  const isAirport = service.toLowerCase().includes("airport");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines = [
      `Hello Privilege Limo,`,
      ``,
      `I would like to book the *${vehicleName}* (${priceLabel}).`,
      ``,
      `*Service:* ${service}`,
      date && `*Date:* ${date}`,
      time && `*Time:* ${time}`,
      pickup && `*Pickup:* ${pickup}`,
      dropoff && `*Drop-off:* ${dropoff}`,
      passengers && `*Passengers:* ${passengers}`,
      isAirport && airport && `*Airport:* ${airport}`,
      isAirport && flight && `*Flight No:* ${flight}`,
      notes && `*Additional Notes:* ${notes}`,
      ``,
      `Please confirm availability and pricing. Thank you.`,
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/971509200818?text=${encoded}`, "_blank");
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-2xl border border-[#efefef] bg-white text-sm text-[#0a0a0a] font-light placeholder:text-[#c0c0c0] focus:outline-none focus:border-[#AB5461] transition-colors duration-200";
  const labelClass =
    "block text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] font-light mb-2";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-[#efefef] p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] flex flex-col gap-5"
    >
      {/* Service select */}
      <div>
        <label className={labelClass}>Service Required *</label>
        <select
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            Select a service...
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Date *</label>
          <input
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Time *</label>
          <input
            required
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Airport fields — shown only for airport transfers */}
      {isAirport && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Airport</label>
            <select
              value={airport}
              onChange={(e) => setAirport(e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="">Select airport...</option>
              {AIRPORTS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Flight Number</label>
            <input
              type="text"
              placeholder="e.g. EK 201"
              value={flight}
              onChange={(e) => setFlight(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      )}

      {/* Pickup + Dropoff */}
      <div>
        <label className={labelClass}>Pickup Location *</label>
        <input
          required
          type="text"
          placeholder="e.g. Dubai Marina, Hotel name, Terminal 3..."
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Drop-off Location</label>
        <input
          type="text"
          placeholder="e.g. Downtown Dubai, Abu Dhabi..."
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Passengers */}
      <div>
        <label className={labelClass}>
          Number of Passengers{" "}
          <span className="text-[#AB5461] normal-case tracking-normal font-light">
            (max {maxPassengers})
          </span>
        </label>
        <select
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          {Array.from({ length: maxPassengers }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "passenger" : "passengers"}
            </option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label className={labelClass}>Additional Notes</label>
        <textarea
          rows={3}
          placeholder="Child seat, meet & greet, specific route, special requests..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!service || !date || !time || !pickup}
        className="mt-2 w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-[11px] tracking-[0.25em] uppercase font-medium text-white hover:bg-[#20bd5a] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)]"
      >
        <svg
          className="w-4 h-4 shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Send Booking Request on WhatsApp
      </button>

      <p className="text-center text-[10px] text-[#c0c0c0] tracking-[0.2em] uppercase font-light -mt-2">
        Opens WhatsApp with your details pre-filled
      </p>
    </form>
  );
}