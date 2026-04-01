/*
  # AlwaysOpenQR Database Schema

  ## Overview
  Complete database schema for AlwaysOpenQR SaaS platform - a QR-based digital storefront solution for local businesses.

  ## Tables Created

  1. **profiles** - User profile information
     - Links to auth.users
     - Stores basic user metadata

  2. **subscriptions** - Stripe subscription management
     - Tracks subscription status, plan, and billing info
     - Links to user accounts

  3. **businesses** - Core business profile data
     - Business information, branding, contact details
     - Public URL slug for profile pages
     - Owner relationship

  4. **business_hours** - Operating hours configuration
     - Day of week and time ranges
     - Supports closed days

  5. **business_links** - Custom CTA buttons and links
     - Social links, booking links, menu links
     - Sortable with priority

  6. **gallery_images** - Business photo gallery
     - Stores image URLs from Supabase Storage
     - Sortable images

  7. **scheduled_content** - Time-based dynamic content
     - Rules for showing content at specific times/days
     - Priority-based display logic

  8. **qr_codes** - Generated QR codes for businesses
     - Stores QR data and downloadable assets

  9. **scans** - Analytics for QR code scans
     - Tracks when profiles are viewed
     - Device and referrer information

  10. **cta_clicks** - Analytics for button clicks
      - Tracks which CTAs are clicked
      - Conversion tracking

  11. **locations** - Multi-location support (Pro plan)
      - Additional business locations
      - Each can have own profile

  12. **lead_submissions** - Lead capture forms
      - Contact form submissions from public profiles
      - Lead generation tracking

  ## Security
  - Row Level Security enabled on all tables
  - Users can only access their own data
  - Public can view published business profiles
  - Public can submit analytics and leads for published businesses
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan TEXT NOT NULL DEFAULT 'free',
  status TEXT NOT NULL DEFAULT 'active',
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(owner_id)
);

-- Businesses table
CREATE TABLE IF NOT EXISTS businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT,
  tagline TEXT,
  description TEXT,
  logo_url TEXT,
  cover_url TEXT,
  phone TEXT,
  email TEXT,
  address TEXT,
  website_url TEXT,
  maps_url TEXT,
  timezone TEXT DEFAULT 'America/Los_Angeles',
  review_url TEXT,
  booking_url TEXT,
  announcement_bar TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Business hours table
CREATE TABLE IF NOT EXISTS business_hours (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  open_time TEXT,
  close_time TEXT,
  is_closed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Business links table (CTA buttons, social links, etc.)
CREATE TABLE IF NOT EXISTS business_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Scheduled content table (dynamic time-based content)
CREATE TABLE IF NOT EXISTS scheduled_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body TEXT,
  cta_text TEXT,
  cta_url TEXT,
  start_time TEXT,
  end_time TEXT,
  days_of_week JSONB,
  priority INTEGER DEFAULT 0,
  is_enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- QR codes table
CREATE TABLE IF NOT EXISTS qr_codes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  qr_value TEXT NOT NULL,
  png_url TEXT,
  svg_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(business_id)
);

-- Scans table (analytics)
CREATE TABLE IF NOT EXISTS scans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  scanned_at TIMESTAMPTZ DEFAULT NOW(),
  user_agent TEXT,
  referrer TEXT,
  device_type TEXT,
  location_data JSONB
);

-- CTA clicks table (analytics)
CREATE TABLE IF NOT EXISTS cta_clicks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  link_label TEXT,
  link_url TEXT,
  clicked_at TIMESTAMPTZ DEFAULT NOW()
);

-- Locations table (multi-location support for Pro plan)
CREATE TABLE IF NOT EXISTS locations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  location_name TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lead submissions table
CREATE TABLE IF NOT EXISTS lead_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_businesses_owner_id ON businesses(owner_id);
CREATE INDEX IF NOT EXISTS idx_businesses_slug ON businesses(slug);
CREATE INDEX IF NOT EXISTS idx_businesses_published ON businesses(is_published);
CREATE INDEX IF NOT EXISTS idx_business_hours_business_id ON business_hours(business_id);
CREATE INDEX IF NOT EXISTS idx_business_links_business_id ON business_links(business_id);
CREATE INDEX IF NOT EXISTS idx_gallery_images_business_id ON gallery_images(business_id);
CREATE INDEX IF NOT EXISTS idx_scheduled_content_business_id ON scheduled_content(business_id);
CREATE INDEX IF NOT EXISTS idx_scans_business_id ON scans(business_id);
CREATE INDEX IF NOT EXISTS idx_scans_scanned_at ON scans(scanned_at);
CREATE INDEX IF NOT EXISTS idx_cta_clicks_business_id ON cta_clicks(business_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_owner_id ON subscriptions(owner_id);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_hours ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE scheduled_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE qr_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE cta_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- RLS Policies for subscriptions
CREATE POLICY "Users can view own subscription"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = owner_id);

CREATE POLICY "Users can insert own subscription"
  ON subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Users can update own subscription"
  ON subscriptions FOR UPDATE
  TO authenticated
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

-- RLS Policies for businesses
CREATE POLICY "Users can view own businesses"
  ON businesses FOR SELECT
  TO authenticated
  USING (auth.uid() = owner_id);

CREATE POLICY "Public can view published businesses"
  ON businesses FOR SELECT
  TO anon
  USING (is_published = true);

CREATE POLICY "Users can insert own businesses"
  ON businesses FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Users can update own businesses"
  ON businesses FOR UPDATE
  TO authenticated
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Users can delete own businesses"
  ON businesses FOR DELETE
  TO authenticated
  USING (auth.uid() = owner_id);

-- RLS Policies for business_hours
CREATE POLICY "Users can manage own business hours"
  ON business_hours FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = business_hours.business_id
      AND businesses.owner_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = business_hours.business_id
      AND businesses.owner_id = auth.uid()
    )
  );

CREATE POLICY "Public can view published business hours"
  ON business_hours FOR SELECT
  TO anon
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = business_hours.business_id
      AND businesses.is_published = true
    )
  );

-- RLS Policies for business_links
CREATE POLICY "Users can manage own business links"
  ON business_links FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = business_links.business_id
      AND businesses.owner_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = business_links.business_id
      AND businesses.owner_id = auth.uid()
    )
  );

CREATE POLICY "Public can view published business links"
  ON business_links FOR SELECT
  TO anon
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = business_links.business_id
      AND businesses.is_published = true
    )
  );

-- RLS Policies for gallery_images
CREATE POLICY "Users can manage own gallery images"
  ON gallery_images FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = gallery_images.business_id
      AND businesses.owner_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = gallery_images.business_id
      AND businesses.owner_id = auth.uid()
    )
  );

CREATE POLICY "Public can view published gallery images"
  ON gallery_images FOR SELECT
  TO anon
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = gallery_images.business_id
      AND businesses.is_published = true
    )
  );

-- RLS Policies for scheduled_content
CREATE POLICY "Users can manage own scheduled content"
  ON scheduled_content FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = scheduled_content.business_id
      AND businesses.owner_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = scheduled_content.business_id
      AND businesses.owner_id = auth.uid()
    )
  );

CREATE POLICY "Public can view enabled scheduled content for published businesses"
  ON scheduled_content FOR SELECT
  TO anon
  USING (
    is_enabled = true AND
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = scheduled_content.business_id
      AND businesses.is_published = true
    )
  );

-- RLS Policies for qr_codes
CREATE POLICY "Users can manage own QR codes"
  ON qr_codes FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = qr_codes.business_id
      AND businesses.owner_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = qr_codes.business_id
      AND businesses.owner_id = auth.uid()
    )
  );

-- RLS Policies for scans (analytics)
CREATE POLICY "Users can view own business scans"
  ON scans FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = scans.business_id
      AND businesses.owner_id = auth.uid()
    )
  );

CREATE POLICY "Public can insert scans for published businesses"
  ON scans FOR INSERT
  TO anon
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = scans.business_id
      AND businesses.is_published = true
    )
  );

-- RLS Policies for cta_clicks (analytics)
CREATE POLICY "Users can view own business CTA clicks"
  ON cta_clicks FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = cta_clicks.business_id
      AND businesses.owner_id = auth.uid()
    )
  );

CREATE POLICY "Public can insert CTA clicks for published businesses"
  ON cta_clicks FOR INSERT
  TO anon
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = cta_clicks.business_id
      AND businesses.is_published = true
    )
  );

-- RLS Policies for locations
CREATE POLICY "Users can manage own business locations"
  ON locations FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = locations.business_id
      AND businesses.owner_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = locations.business_id
      AND businesses.owner_id = auth.uid()
    )
  );

CREATE POLICY "Public can view locations for published businesses"
  ON locations FOR SELECT
  TO anon
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = locations.business_id
      AND businesses.is_published = true
    )
  );

-- RLS Policies for lead_submissions
CREATE POLICY "Users can view leads for own businesses"
  ON lead_submissions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = lead_submissions.business_id
      AND businesses.owner_id = auth.uid()
    )
  );

CREATE POLICY "Public can submit leads for published businesses"
  ON lead_submissions FOR INSERT
  TO anon
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = lead_submissions.business_id
      AND businesses.is_published = true
    )
  );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_businesses_updated_at
  BEFORE UPDATE ON businesses
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_scheduled_content_updated_at
  BEFORE UPDATE ON scheduled_content
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
