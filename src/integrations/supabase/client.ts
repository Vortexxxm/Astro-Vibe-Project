// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://cwyvtudssemuarayxnls.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3eXZ0dWRzc2VtdWFyYXl4bmxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNjU4ODEsImV4cCI6MjA2NTg0MTg4MX0.MdMgV422MNbLsrTx3FAVzh4UVVaM2rNT-qoQjdxcyxE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);