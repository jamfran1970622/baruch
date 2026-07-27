-- Quote requests table for Ferre Aceros Baruch
create table if not exists quote_requests (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text not null,
  product_category text not null,
  quantity text,
  message text,
  created_at timestamptz default now()
);

-- Index for viewing latest quotes first
create index if not exists idx_quote_requests_created_at on quote_requests(created_at desc);
