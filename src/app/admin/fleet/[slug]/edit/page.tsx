import { requireAuth } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import VehicleForm from "@/components/admin/VehicleForm";
import { notFound } from "next/navigation";

export default async function EditVehiclePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await requireAuth();
  const { slug } = await params;
  const supabase = await createClient();

  const [{ data: vehicle }, { data: categories }] = await Promise.all([
    supabase.from("vehicles").select("*").eq("slug", slug).single(),
    supabase.from("vehicle_categories").select("slug, display_name").order("sort_order"),
  ]);

  if (!vehicle) notFound();

  return (
    <div className="px-6 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-light text-[#0a0a0a] tracking-tight">Edit Vehicle</h1>
        <p className="text-sm text-[#0a0a0a] font-light mt-1">{vehicle.name}</p>
      </div>
      <VehicleForm vehicle={vehicle} categories={categories ?? []} />
    </div>
  );
}