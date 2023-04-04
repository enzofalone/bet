import { createClient } from "@supabase/supabase-js";

const URL = 'https://vxhsxyabpijnnmnduqxf.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4aHN4eWFicGlqbm5tbmR1cXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1NzcwOTQsImV4cCI6MTk5NjE1MzA5NH0.xgjpMKZidaqz-dBanQ2STPzdc4VufEzWJtpqjyDNE9c';

export const supabase = createClient(URL, API_KEY);