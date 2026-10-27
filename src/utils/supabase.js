import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isHS256Token = (token) => {
  if (!token || typeof token !== "string") return false;
  try {
    const parts = token.split(".");
    if (parts.length < 2) return false;
    let b64 = parts[0].replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const jsonStr = atob(b64);
    const header = JSON.parse(jsonStr);
    return header?.alg === "HS256";
  } catch {
    return false;
  }
};

const supabaseClient = async (supabaseAccessToken) => {
  const options = {};
  if (isHS256Token(supabaseAccessToken)) {
    options.global = {
      headers: { Authorization: `Bearer ${supabaseAccessToken}` },
    };
  }
  const supabase = createClient(supabaseUrl, supabaseKey, options);
  return supabase;
};

export default supabaseClient;
