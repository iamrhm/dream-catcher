import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SB_PROJECT_URL
const supabaseKey = import.meta.env.VITE_SB_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;