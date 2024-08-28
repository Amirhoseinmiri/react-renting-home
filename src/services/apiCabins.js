import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("cabins can loaded");
    throw new Error("cabins get error");
  }
  return data;
}
export const deleteCabin = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error("can delete that cabins try again");
};
