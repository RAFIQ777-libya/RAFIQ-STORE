RAFIQ STORE V5 — SaaS-ready starter
====================================
V5 adds:
- Real Supabase database
- Authentication per store owner
- Products CRUD
- Store settings CRUD
- Real orders saved to database before WhatsApp
- Order status management
- Sales/order/product dashboard
- Row Level Security
- Static GitHub Pages compatible
- Multi-store data model (each owner gets a store)

SETUP
1. Create a Supabase project.
2. Run supabase/schema.sql in SQL Editor.
3. Put Project URL + anon/public key in js/config.js.
4. Upload to GitHub Pages.
5. Open admin.html and create an account.
6. Add products/settings from the dashboard.

SECURITY
Never put service_role key in browser code.
RLS is enabled. Review policies before production.

IMAGE UPLOAD
V5 uses image URLs for simplicity. V6 can add Supabase Storage upload with image buckets, drag/drop, product variants, coupons and custom domains.

IMPORTANT
The storefront inserts orders without requiring customer login. This is intentional for guest checkout. For production, add rate limiting/anti-spam and validate order fields server-side (Edge Function is recommended).
