-- Create waitlist table for user signups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  terms_accepted BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist (public signup)
CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
TO public
WITH CHECK (true);

-- Only allow users to view their own waitlist entry
CREATE POLICY "Users can view their own entry"
ON public.waitlist
FOR SELECT
TO public
USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);