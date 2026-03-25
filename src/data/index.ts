import fleetData from "./fleet.json";
import type { Vehicle } from "./types";

export const fleet: Vehicle[] = fleetData as Vehicle[];

export const getVehicleBySlug = (slug: string): Vehicle | undefined =>
  fleet.find((v) => v.slug === slug);

export const getVehiclesByCategory = (category: string): Vehicle[] =>
  fleet.filter((v) => v.category === category);

export const getAvailableVehicles = (): Vehicle[] =>
  fleet.filter((v) => v.available);

export const categories = [...new Set(fleet.map((v) => v.category))];
