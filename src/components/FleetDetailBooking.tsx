"use client";

import { useState } from "react";
import BookingModal from "@/components/BookingModal";

type Vehicle = {
  name: string;
  category: string;
  priceLabel: string;
  passengers: number;
};

export default function FleetDetailBooking({
  vehicle,
  waUrl,
}: {
  vehicle: Vehicle;
  waUrl: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => setModalOpen(true)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:opacity-90 transition-all duration-300"
          style={{ background: "linear-gradient(135deg, #AB5461, #e8c97a, #b8943e)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Reserve This Vehicle
        </button>
        <a
          href="tel:+971509200818"
          className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
        >
          Call Us Now
        </a>
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        carName={vehicle.name}
        carCategory={vehicle.category}
        transferPrice={vehicle.priceLabel}
        price5hr="Contact for Rate"
        price10hr="Contact for Rate"
        maxPassengers={vehicle.passengers}
      />
    </>
  );
}
