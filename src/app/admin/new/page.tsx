import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PostEditor from "@/components/admin/PostEditor";

export default async function NewPostPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("admin_session")?.value !== "authenticated") {
    redirect("/admin");
  }

  return <PostEditor />;
}