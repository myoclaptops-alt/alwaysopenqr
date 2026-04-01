/*
  # Seed Demo Businesses and Analytics
  
  ## Overview
  Populates database with 3 complete demo businesses and 90 days of analytics data.
  
  ## Demo Businesses
  1. Sunrise Cafe - Popular coffee shop
  2. Bliss Salon & Spa - Beauty and wellness
  3. TechFix Repairs - Electronics repair shop
  
  ## Data Included
  - Complete business profiles with contact info
  - Operating hours
  - Action buttons/links
  - Photo galleries (Pexels stock images)
  - Time-based scheduled content
  - QR codes
  - 90 days of scan analytics
  - CTA click conversion data
*/

DO $$
DECLARE
  cafe_id UUID;
  salon_id UUID;
  repair_id UUID;
  days_back INTEGER;
  hour_offset INTEGER;
  scan_count INTEGER;
  i INTEGER;
BEGIN
  -- Demo Business 1: Sunrise Cafe
  INSERT INTO businesses (
    id, owner_id, name, slug, category, tagline, description,
    phone, email, address, website_url, maps_url, timezone,
    review_url, booking_url, announcement_bar, is_published, created_at
  ) VALUES (
    uuid_generate_v4(), NULL, 'Sunrise Cafe', 'sunrise-cafe-demo',
    'Restaurant & Cafe', 'Fresh coffee, homemade pastries, and friendly faces',
    'Welcome to Sunrise Cafe! We serve artisan coffee, fresh-baked pastries, and wholesome breakfast and lunch options. Join us for your morning coffee or a relaxing lunch break.',
    '(555) 123-4567', 'hello@sunrisecafe.local',
    '123 Main Street, San Francisco, CA 94102',
    'https://sunrisecafe.local',
    'https://maps.google.com/?q=123+Main+Street+San+Francisco+CA',
    'America/Los_Angeles',
    'https://g.page/r/review-link',
    'https://booking.sunrisecafe.local',
    '☀️ Try our new Autumn Spice Latte!',
    true, NOW() - INTERVAL '120 days'
  ) RETURNING id INTO cafe_id;

  INSERT INTO business_hours (business_id, day_of_week, open_time, close_time, is_closed) VALUES
    (cafe_id, 0, '08:00', '15:00', false), (cafe_id, 1, '07:00', '19:00', false),
    (cafe_id, 2, '07:00', '19:00', false), (cafe_id, 3, '07:00', '19:00', false),
    (cafe_id, 4, '07:00', '19:00', false), (cafe_id, 5, '07:00', '20:00', false),
    (cafe_id, 6, '08:00', '20:00', false);

  INSERT INTO business_links (business_id, label, url, icon, sort_order, is_primary) VALUES
    (cafe_id, 'Call Us', 'tel:+15551234567', 'phone', 1, true),
    (cafe_id, 'Get Directions', 'https://maps.google.com/?q=123+Main+Street+San+Francisco+CA', 'map-pin', 2, false),
    (cafe_id, 'View Menu', 'https://sunrisecafe.local/menu', 'coffee', 3, true),
    (cafe_id, 'Order Online', 'https://order.sunrisecafe.local', 'shopping-bag', 4, false),
    (cafe_id, 'Instagram', 'https://instagram.com/sunrisecafe', 'instagram', 5, false),
    (cafe_id, 'Leave a Review', 'https://g.page/r/review-link', 'star', 6, false);

  INSERT INTO gallery_images (business_id, image_url, alt_text, sort_order) VALUES
    (cafe_id, 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800', 'Cozy cafe interior', 1),
    (cafe_id, 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800', 'Fresh coffee and pastries', 2),
    (cafe_id, 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=800', 'Latte art', 3),
    (cafe_id, 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=800', 'Breakfast sandwich', 4);

  INSERT INTO scheduled_content (business_id, title, body, cta_text, cta_url, start_time, end_time, days_of_week, priority, is_enabled) VALUES
    (cafe_id, '☕ Morning Special', 'Get 20% off any breakfast combo before 10am!', 'Order Now', 'https://order.sunrisecafe.local', '07:00', '10:00', '[1,2,3,4,5]', 10, true),
    (cafe_id, '🥗 Lunch Menu Available', 'Check out our fresh salads, sandwiches, and daily soups.', 'View Menu', 'https://sunrisecafe.local/lunch-menu', '11:00', '14:30', '[1,2,3,4,5,6,0]', 5, true);

  INSERT INTO qr_codes (business_id, qr_value) VALUES
    (cafe_id, 'https://alwaysopenqr.com/p/sunrise-cafe-demo');

  -- Demo Business 2: Bliss Salon & Spa
  INSERT INTO businesses (
    id, owner_id, name, slug, category, tagline, description,
    phone, email, address, website_url, maps_url, timezone,
    review_url, booking_url, announcement_bar, is_published, created_at
  ) VALUES (
    uuid_generate_v4(), NULL, 'Bliss Salon & Spa', 'bliss-salon-demo',
    'Beauty & Wellness', 'Where beauty meets relaxation',
    'Bliss Salon & Spa offers premium hair styling, coloring, spa treatments, and massage therapy. Book your appointment today and experience the Bliss difference.',
    '(555) 234-5678', 'info@blisssalon.local',
    '456 Elm Avenue, San Francisco, CA 94103',
    'https://blisssalon.local',
    'https://maps.google.com/?q=456+Elm+Avenue+San+Francisco+CA',
    'America/Los_Angeles',
    'https://g.page/r/bliss-review',
    'https://book.blisssalon.local',
    '✨ New clients get 15% off first visit!',
    true, NOW() - INTERVAL '90 days'
  ) RETURNING id INTO salon_id;

  INSERT INTO business_hours (business_id, day_of_week, open_time, close_time, is_closed) VALUES
    (salon_id, 0, NULL, NULL, true), (salon_id, 1, '09:00', '18:00', false),
    (salon_id, 2, '09:00', '20:00', false), (salon_id, 3, '09:00', '20:00', false),
    (salon_id, 4, '09:00', '20:00', false), (salon_id, 5, '09:00', '20:00', false),
    (salon_id, 6, '08:00', '17:00', false);

  INSERT INTO business_links (business_id, label, url, icon, sort_order, is_primary) VALUES
    (salon_id, 'Book Appointment', 'https://book.blisssalon.local', 'calendar', 1, true),
    (salon_id, 'Call Now', 'tel:+15552345678', 'phone', 2, true),
    (salon_id, 'Get Directions', 'https://maps.google.com/?q=456+Elm+Avenue+San+Francisco+CA', 'map-pin', 3, false),
    (salon_id, 'Services & Pricing', 'https://blisssalon.local/services', 'scissors', 4, false),
    (salon_id, 'Instagram', 'https://instagram.com/blisssalon', 'instagram', 5, false);

  INSERT INTO gallery_images (business_id, image_url, alt_text, sort_order) VALUES
    (salon_id, 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800', 'Modern salon interior', 1),
    (salon_id, 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800', 'Hair styling', 2),
    (salon_id, 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800', 'Spa treatment room', 3);

  INSERT INTO scheduled_content (business_id, title, body, cta_text, cta_url, start_time, end_time, days_of_week, priority, is_enabled) VALUES
    (salon_id, '💆 Spa Day Special', 'Book a massage + facial combo and save 25%', 'Book Now', 'https://book.blisssalon.local', '09:00', '18:00', '[1,2,3,4]', 8, true);

  INSERT INTO qr_codes (business_id, qr_value) VALUES
    (salon_id, 'https://alwaysopenqr.com/p/bliss-salon-demo');

  -- Demo Business 3: TechFix Repairs
  INSERT INTO businesses (
    id, owner_id, name, slug, category, tagline, description,
    phone, email, address, website_url, maps_url, timezone,
    review_url, booking_url, announcement_bar, is_published, created_at
  ) VALUES (
    uuid_generate_v4(), NULL, 'TechFix Repairs', 'techfix-repairs-demo',
    'Electronics Repair', 'Fast, reliable phone and tablet repairs',
    'TechFix specializes in smartphone and tablet repairs. Cracked screens, battery replacements, water damage - we fix it all. Most repairs completed in under an hour.',
    '(555) 345-6789', 'service@techfix.local',
    '789 Market Street, San Francisco, CA 94104',
    'https://techfix.local',
    'https://maps.google.com/?q=789+Market+Street+San+Francisco+CA',
    'America/Los_Angeles',
    'https://g.page/r/techfix-review',
    'https://schedule.techfix.local',
    '📱 Same-day screen repairs available!',
    true, NOW() - INTERVAL '60 days'
  ) RETURNING id INTO repair_id;

  INSERT INTO business_hours (business_id, day_of_week, open_time, close_time, is_closed) VALUES
    (repair_id, 0, '10:00', '18:00', false), (repair_id, 1, '09:00', '19:00', false),
    (repair_id, 2, '09:00', '19:00', false), (repair_id, 3, '09:00', '19:00', false),
    (repair_id, 4, '09:00', '19:00', false), (repair_id, 5, '09:00', '20:00', false),
    (repair_id, 6, '09:00', '20:00', false);

  INSERT INTO business_links (business_id, label, url, icon, sort_order, is_primary) VALUES
    (repair_id, 'Schedule Repair', 'https://schedule.techfix.local', 'calendar', 1, true),
    (repair_id, 'Call Us', 'tel:+15553456789', 'phone', 2, true),
    (repair_id, 'Get Directions', 'https://maps.google.com/?q=789+Market+Street+San+Francisco+CA', 'map-pin', 3, false),
    (repair_id, 'Get a Quote', 'https://techfix.local/quote', 'dollar-sign', 4, false);

  INSERT INTO gallery_images (business_id, image_url, alt_text, sort_order) VALUES
    (repair_id, 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800', 'Phone repair workstation', 1),
    (repair_id, 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800', 'Smartphone repair', 2);

  INSERT INTO qr_codes (business_id, qr_value) VALUES
    (repair_id, 'https://alwaysopenqr.com/p/techfix-repairs-demo');

  -- Analytics: 90 days of scan data
  FOR days_back IN 0..89 LOOP
    scan_count := 15 + (RANDOM() * 25)::INTEGER;
    FOR i IN 1..scan_count LOOP
      hour_offset := CASE WHEN RANDOM() < 0.6 THEN 7 + (RANDOM() * 12)::INTEGER ELSE (RANDOM() * 24)::INTEGER END;
      INSERT INTO scans (business_id, scanned_at, device_type) VALUES (
        cafe_id,
        (NOW() - (days_back || ' days')::INTERVAL) + (hour_offset || ' hours')::INTERVAL,
        CASE (RANDOM() * 3)::INTEGER WHEN 0 THEN 'mobile' WHEN 1 THEN 'tablet' ELSE 'desktop' END
      );
    END LOOP;

    scan_count := 10 + (RANDOM() * 15)::INTEGER;
    FOR i IN 1..scan_count LOOP
      hour_offset := CASE WHEN RANDOM() < 0.7 THEN 9 + (RANDOM() * 11)::INTEGER ELSE (RANDOM() * 24)::INTEGER END;
      INSERT INTO scans (business_id, scanned_at, device_type) VALUES (
        salon_id,
        (NOW() - (days_back || ' days')::INTERVAL) + (hour_offset || ' hours')::INTERVAL,
        CASE (RANDOM() * 3)::INTEGER WHEN 0 THEN 'mobile' WHEN 1 THEN 'tablet' ELSE 'desktop' END
      );
    END LOOP;

    scan_count := 12 + (RANDOM() * 18)::INTEGER;
    FOR i IN 1..scan_count LOOP
      hour_offset := CASE WHEN RANDOM() < 0.65 THEN 9 + (RANDOM() * 10)::INTEGER ELSE (RANDOM() * 24)::INTEGER END;
      INSERT INTO scans (business_id, scanned_at, device_type) VALUES (
        repair_id,
        (NOW() - (days_back || ' days')::INTERVAL) + (hour_offset || ' hours')::INTERVAL,
        CASE (RANDOM() * 3)::INTEGER WHEN 0 THEN 'mobile' WHEN 1 THEN 'tablet' ELSE 'desktop' END
      );
    END LOOP;
  END LOOP;

  -- CTA clicks with realistic conversion rates
  INSERT INTO cta_clicks (business_id, link_label, link_url, clicked_at)
  SELECT cafe_id,
    CASE (RANDOM() * 3)::INTEGER WHEN 0 THEN 'Call Us' WHEN 1 THEN 'View Menu' ELSE 'Order Online' END,
    'https://sunrisecafe.local',
    scanned_at + (RANDOM() * 120 || ' seconds')::INTERVAL
  FROM scans WHERE business_id = cafe_id AND RANDOM() < 0.30;

  INSERT INTO cta_clicks (business_id, link_label, link_url, clicked_at)
  SELECT salon_id,
    CASE (RANDOM() * 2)::INTEGER WHEN 0 THEN 'Book Appointment' ELSE 'Call Now' END,
    'https://book.blisssalon.local',
    scanned_at + (RANDOM() * 120 || ' seconds')::INTERVAL
  FROM scans WHERE business_id = salon_id AND RANDOM() < 0.35;

  INSERT INTO cta_clicks (business_id, link_label, link_url, clicked_at)
  SELECT repair_id,
    CASE (RANDOM() * 2)::INTEGER WHEN 0 THEN 'Schedule Repair' ELSE 'Call Us' END,
    'https://schedule.techfix.local',
    scanned_at + (RANDOM() * 120 || ' seconds')::INTERVAL
  FROM scans WHERE business_id = repair_id AND RANDOM() < 0.28;

END $$;