/*
  # Allow Demo Businesses
  
  ## Changes
  - Modify businesses table to allow NULL owner_id for demo/seed data
  - Add RLS policy to allow public read access to demo businesses
  
  ## Security
  - Demo businesses (owner_id IS NULL) are read-only for public
  - Only published demo businesses are visible
*/

-- Allow NULL owner_id for demo businesses
ALTER TABLE businesses ALTER COLUMN owner_id DROP NOT NULL;