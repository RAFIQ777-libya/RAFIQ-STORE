// ضع بيانات مشروع Supabase هنا.
// استخدم anon/public key فقط — لا تستخدم service_role key.
window.RAFIQ_SUPABASE_URL="PASTE_SUPABASE_PROJECT_URL";
window.RAFIQ_SUPABASE_ANON_KEY="PASTE_SUPABASE_ANON_KEY";
window.sb=supabase.createClient(window.RAFIQ_SUPABASE_URL,window.RAFIQ_SUPABASE_ANON_KEY);
