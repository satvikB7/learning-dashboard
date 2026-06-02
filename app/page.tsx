import { DashboardClient } from "@/components/dashboard-client";
import { supabase } from "@/lib/supabase";
import type { Course } from "@/types/course";


export const dynamic = "force-dynamic";

export default async function Page(){
  await new Promise((resolve) => setTimeout(resolve, 2000)); //I kept this promise to explicity show the loading page in the website

  const {data, error} = await supabase.from("courses").select("id, title, progress, icon_name").order("created_at", {ascending: true});


  if(error)
  {
    throw new Error(error.message);
  }

  return <DashboardClient courses={(data ?? []) as Course[]} />;
}