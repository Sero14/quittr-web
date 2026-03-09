-- Run this in Supabase SQL Editor to create the leads table for email capture.
-- Dashboard → SQL Editor → New query → paste and run.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  quiz_data jsonb,
  created_at timestamptz not null default now()
);

-- Optional: enable RLS and allow service role to insert (API uses service role).
alter table public.leads enable row level security;

create policy "Service role can insert leads"
  on public.leads
  for insert
  to service_role
  with check (true);

create policy "Service role can read leads"
  on public.leads
  for select
  to service_role
  using (true);
