import { requireAuth } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import VehicleForm from "@/components/admin/VehicleForm";

export default async function NewVehiclePage() {
  await requireAuth();
  const supabase = await createClient();
  const { data: categories } = await supabase
    .from("vehicle_categories")
    .select("slug, display_name")
    .order("sort_order");

  return (
    <div className="px-6 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-light text-[#0a0a0a] tracking-tight">Add Vehicle</h1>
        <p className="text-sm text-[#0a0a0a] font-light mt-1">Add a new vehicle to the fleet</p>
      </div>
      <VehicleForm categories={categories ?? []} />
    </div>
  );
}