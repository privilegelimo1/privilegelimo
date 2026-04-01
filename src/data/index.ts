import fleetData from "./fleet.json";
import type { Vehicle } from "./types";

export const fleet: Vehicle[] = fleetData as unknown as Vehicle[];

export const fleetCategories = [
  { slug: "business-class",               label: "Business Class",      description: "Premium executive sedans & MPVs" },
  { slug: "first-class",                  label: "First Class",         description: "The pinnacle of executive motoring" },
  { slug: "business-van",                 label: "Business Van",        description: "Premium MPVs for groups" },
  { slug: "mercedes-sprinter-luxury-van", label: "Mercedes Sprinter",   description: "Executive large-group transport" },
  { slug: "mercedes-sprinter-luxury-vip", label: "Sprinter VIP",        description: "Handcrafted VIP Sprinter interiors" },
  { slug: "luxury-suv",                   label: "Luxury SUV",          description: "Commanding presence on every road" },
  { slug: "rolls-royce",                  label: "Rolls-Royce",         description: "The ultimate expression of luxury" },
  { slug: "stretch-limousine",            label: "Stretch Limousine",   description: "For events, weddings & VIP nights" },
  { slug: "standard-bus",                 label: "Standard Bus",        description: "Dependable group transport" },
  { slug: "luxury-coach-bus",             label: "Luxury Coach",        description: "Large group coach transport" },
];

export const getVehicleBySlug = (slug: string): Vehicle | undefined =>
  fleet.find((v) => v.slug === slug);

export const getVehiclesByClassSlug = (classSlug: string): Vehicle[] =>
  fleet.filter((v) => v.classSlug === classSlug);

export const getVehiclesByCategory = (category: string): Vehicle[] =>
  fleet.filter((v) => v.category === category);

export const getAvailableVehicles = (): Vehicle[] =>
  fleet.filter((v) => v.available);

export const categories = [...new Set(fleet.map((v) => v.category))];