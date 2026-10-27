import { createClient } from "@supabase/supabase-js";

export const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://efkdzlycubfhhkqogbej.supabase.co";
const supabaseKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma2R6bHljdWJmaGhrcW9nYmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5MjY3OTcsImV4cCI6MjEwODUwMjc5N30.viKnYdfb-gJNKsYj_D1CZSu6U-OF7TutwWt5EvK76Dg";

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
