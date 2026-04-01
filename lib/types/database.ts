export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          owner_id: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          plan: string
          status: string
          current_period_end: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          plan?: string
          status?: string
          current_period_end?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          plan?: string
          status?: string
          current_period_end?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      businesses: {
        Row: {
          id: string
          owner_id: string
          name: string
          slug: string
          category: string | null
          tagline: string | null
          description: string | null
          logo_url: string | null
          cover_url: string | null
          phone: string | null
          email: string | null
          address: string | null
          website_url: string | null
          maps_url: string | null
          timezone: string
          review_url: string | null
          booking_url: string | null
          announcement_bar: string | null
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          name: string
          slug: string
          category?: string | null
          tagline?: string | null
          description?: string | null
          logo_url?: string | null
          cover_url?: string | null
          phone?: string | null
          email?: string | null
          address?: string | null
          website_url?: string | null
          maps_url?: string | null
          timezone?: string
          review_url?: string | null
          booking_url?: string | null
          announcement_bar?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          name?: string
          slug?: string
          category?: string | null
          tagline?: string | null
          description?: string | null
          logo_url?: string | null
          cover_url?: string | null
          phone?: string | null
          email?: string | null
          address?: string | null
          website_url?: string | null
          maps_url?: string | null
          timezone?: string
          review_url?: string | null
          booking_url?: string | null
          announcement_bar?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      business_hours: {
        Row: {
          id: string
          business_id: string
          day_of_week: number
          open_time: string | null
          close_time: string | null
          is_closed: boolean
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          day_of_week: number
          open_time?: string | null
          close_time?: string | null
          is_closed?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          day_of_week?: number
          open_time?: string | null
          close_time?: string | null
          is_closed?: boolean
          created_at?: string
        }
      }
      business_links: {
        Row: {
          id: string
          business_id: string
          label: string
          url: string
          icon: string | null
          sort_order: number
          is_primary: boolean
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          label: string
          url: string
          icon?: string | null
          sort_order?: number
          is_primary?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          label?: string
          url?: string
          icon?: string | null
          sort_order?: number
          is_primary?: boolean
          created_at?: string
        }
      }
      gallery_images: {
        Row: {
          id: string
          business_id: string
          image_url: string
          alt_text: string | null
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          image_url: string
          alt_text?: string | null
          sort_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          image_url?: string
          alt_text?: string | null
          sort_order?: number
          created_at?: string
        }
      }
      scheduled_content: {
        Row: {
          id: string
          business_id: string
          title: string
          body: string | null
          cta_text: string | null
          cta_url: string | null
          start_time: string | null
          end_time: string | null
          days_of_week: Json | null
          priority: number
          is_enabled: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          business_id: string
          title: string
          body?: string | null
          cta_text?: string | null
          cta_url?: string | null
          start_time?: string | null
          end_time?: string | null
          days_of_week?: Json | null
          priority?: number
          is_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          title?: string
          body?: string | null
          cta_text?: string | null
          cta_url?: string | null
          start_time?: string | null
          end_time?: string | null
          days_of_week?: Json | null
          priority?: number
          is_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      qr_codes: {
        Row: {
          id: string
          business_id: string
          qr_value: string
          png_url: string | null
          svg_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          qr_value: string
          png_url?: string | null
          svg_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          qr_value?: string
          png_url?: string | null
          svg_url?: string | null
          created_at?: string
        }
      }
      scans: {
        Row: {
          id: string
          business_id: string
          scanned_at: string
          user_agent: string | null
          referrer: string | null
          device_type: string | null
          location_data: Json | null
        }
        Insert: {
          id?: string
          business_id: string
          scanned_at?: string
          user_agent?: string | null
          referrer?: string | null
          device_type?: string | null
          location_data?: Json | null
        }
        Update: {
          id?: string
          business_id?: string
          scanned_at?: string
          user_agent?: string | null
          referrer?: string | null
          device_type?: string | null
          location_data?: Json | null
        }
      }
      cta_clicks: {
        Row: {
          id: string
          business_id: string
          link_label: string | null
          link_url: string | null
          clicked_at: string
        }
        Insert: {
          id?: string
          business_id: string
          link_label?: string | null
          link_url?: string | null
          clicked_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          link_label?: string | null
          link_url?: string | null
          clicked_at?: string
        }
      }
      locations: {
        Row: {
          id: string
          business_id: string
          location_name: string
          address: string | null
          phone: string | null
          is_primary: boolean
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          location_name: string
          address?: string | null
          phone?: string | null
          is_primary?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          location_name?: string
          address?: string | null
          phone?: string | null
          is_primary?: boolean
          created_at?: string
        }
      }
      lead_submissions: {
        Row: {
          id: string
          business_id: string
          name: string | null
          email: string | null
          phone: string | null
          message: string | null
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          name?: string | null
          email?: string | null
          phone?: string | null
          message?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          name?: string | null
          email?: string | null
          phone?: string | null
          message?: string | null
          created_at?: string
        }
      }
    }
  }
}
