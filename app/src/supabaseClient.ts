import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lfbrglqiokmsbxnbjaks.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmYnJnbHFpb2ttc2J4bmJqYWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NDU4NzIsImV4cCI6MjA3MjEyMTg3Mn0.cx5CFTlv_6fUYqfKx97q0zgmtQ76Hk_VbzwPKOUYXi4'

export const supabase = createClient(supabaseUrl, supabaseKey)
