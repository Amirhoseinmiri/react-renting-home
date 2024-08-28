import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bdtulmysnncjqkmamimz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdHVsbXlzbm5janFrbWFtaW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4MjU1MTQsImV4cCI6MjA0MDQwMTUxNH0.W7WrEDXayohipw9Sskyqd0lwNleNasUX8y_FgeRXszc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
