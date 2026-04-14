const WHATSAPP_NUMBER = "971509852818"; // no + or spaces

export function buildWhatsAppURL(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildBookingMessage(data: {
  name: string;
  phone: string;
  email?: string;
  pickup: string;
  dropoff?: string;
  date: string;
  service: string;
  vehicle?: string;
  notes?: string;
}): string {
  return `
Hello Privilege Limo 👋

*New Booking Request*

*Name:* ${data.name}
*Phone:* ${data.phone}
${data.email ? `*Email:* ${data.email}` : ""}
*Service:* ${data.service}
${data.vehicle ? `*Vehicle:* ${data.vehicle}` : ""}
*Pickup:* ${data.pickup}
${data.dropoff ? `*Drop-off:* ${data.dropoff}` : ""}
*Date & Time:* ${data.date}
${data.notes ? `*Notes:* ${data.notes}` : ""}

Please confirm my booking. Thank you!
  `.trim();
}

export function buildQuickEnquiry(context: string): string {
  return `Hello Privilege Limo 👋\n\nI'm interested in: *${context}*\n\nPlease send me more details.`;
}
