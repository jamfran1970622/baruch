-- Lock down quote_requests from the anon key; inserts go through the
-- service-role client in app/api/quotes/route.ts, which bypasses RLS.
alter table quote_requests enable row level security;
