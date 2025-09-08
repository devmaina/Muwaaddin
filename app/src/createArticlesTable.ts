import { supabase } from "./supabaseClient";
import { loadSQL } from "./utils/loadSQL";

export async function createArticlesTable() {
  try {
    // load the SQL file served from public/
    const sql = await loadSQL("/articles.sql");

    const { error } = await supabase.rpc("exec_sql", { sql });

    if (error) {
      console.error("Error creating table:", error.message);
    } else {
      console.log("✅ Articles table created (or already exists).");
    }
  } catch (err) {
    console.error("Failed to run createArticlesTable:", err);
  }
}

