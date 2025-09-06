import { createClient } from '@supabase/supabase-js'

// این دوتا رو از Supabase → Settings → API بردار
const supabaseUrl = "https://xudqwdgxbgqboqlxrnen.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1ZHF3ZGd4YmdxYm9xbHhybmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxNDg4MjMsImV4cCI6MjA3MjcyNDgyM30.8xz6hvsT5dQ3ABSBWhHcPCmP9riIo8A-1nzNfG4IYlM"

// ساخت کلاینت
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
