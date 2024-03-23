import supabase from "./supabase";

export async function createUser(newUser) {
    let query = supabase.from("users").insert([{ ...newUser }]);
  
    const { data, error } = await query.select().single();
  
    if (error) {
      console.error(error);
      throw new Error("User could not be created");
    }

    return data;
  }