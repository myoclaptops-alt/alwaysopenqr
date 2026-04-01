# AlwaysOpenQR

**Your business is always open, even when you're closed.**

AlwaysOpenQR is a complete SaaS platform that helps local brick-and-mortar businesses stay connected with customers 24/7 through QR code-powered digital storefronts.

## Features

- **Mobile Business Profiles**: Beautiful, mobile-optimized profile pages with business info, hours, photos, and contact actions
- **Smart QR Codes**: Generate custom QR codes that link to your business profile
- **Dynamic Content Scheduling**: Show different content based on time of day and day of week
- **Real-Time Hours Display**: Automatically show open/closed status
- **One-Tap Actions**: Call, directions, booking, and more
- **Photo Gallery**: Showcase your products and space
- **Analytics Dashboard**: Track scans, clicks, and engagement
- **Multi-Location Support**: Manage multiple business locations (Pro plan)
- **Lead Capture**: Collect customer information (Pro plan)
- **Subscription Management**: Free, Starter, and Pro tiers with Stripe integration

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Backend**: Supabase (Database, Auth, Storage)
- **Payments**: Stripe
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Charts**: Recharts

## Prerequisites

- Node.js 18+ and npm
- A Supabase account (free tier available)
- A Stripe account (optional, for payment processing)

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd alwaysopenqr
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings > API to get your credentials
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Update `.env` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

### 4. Run Database Migrations

The database schema has already been created via the Supabase migration file located at:
```
supabase/migrations/20260401010440_create_alwaysopenqr_schema.sql
```

This migration includes:
- All required tables (businesses, profiles, subscriptions, etc.)
- Row Level Security (RLS) policies
- Indexes for optimal performance
- Triggers for automatic timestamp updates

The migration has been applied to your Supabase database automatically.

### 5. Set Up Storage Buckets (Optional)

For image uploads, create the following storage buckets in your Supabase dashboard:

1. Go to Storage in your Supabase dashboard
2. Create a new bucket called `business-assets`
3. Set it to public
4. Configure appropriate policies for uploads

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 7. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
alwaysopenqr/
├── app/                        # Next.js app router pages
│   ├── (marketing)/           # Marketing pages (home, pricing, features)
│   ├── dashboard/             # Authenticated dashboard pages
│   ├── p/[slug]/              # Public business profiles
│   ├── login/                 # Authentication pages
│   └── signup/
├── components/                # React components
│   ├── auth/                  # Authentication forms
│   ├── layout/                # Layout components (Navbar, Footer)
│   └── ui/                    # shadcn/ui components
├── lib/                       # Utility functions and configurations
│   ├── constants/             # App constants (plans, etc.)
│   ├── contexts/              # React contexts (auth)
│   ├── supabase/              # Supabase clients
│   ├── types/                 # TypeScript types
│   └── utils/                 # Utility functions
├── supabase/
│   └── migrations/            # Database migration files
└── public/                    # Static assets
```

## Key Features Implementation

### Authentication

- Email/password authentication via Supabase Auth
- Protected routes with middleware
- Auth context for managing user state
- Automatic profile creation on signup

### Database Schema

The database includes these main tables:
- `profiles` - User profile information
- `businesses` - Business profile data
- `business_hours` - Operating hours
- `business_links` - CTA buttons and links
- `gallery_images` - Photo gallery
- `scheduled_content` - Time-based dynamic content
- `qr_codes` - Generated QR codes
- `scans` - Analytics for profile views
- `cta_clicks` - Analytics for button clicks
- `subscriptions` - Stripe subscription management
- `locations` - Multi-location support
- `lead_submissions` - Lead capture forms

### Dynamic Content Scheduling

The app supports showing different content based on:
- Day of week
- Time of day
- Priority levels

Content is evaluated in real-time using the business's timezone.

### Analytics

Track:
- Total profile scans
- Button clicks
- Engagement trends
- Top performing CTAs

## Environment Variables

Required:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

Optional (for full features):
- `SUPABASE_SERVICE_ROLE_KEY` - For server-side operations
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret
- `NEXT_PUBLIC_APP_URL` - Your app's public URL

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy

Vercel will automatically:
- Build your Next.js app
- Set up serverless functions
- Configure custom domains
- Enable automatic deployments

### Environment Setup for Production

Make sure to set all required environment variables in your Vercel project settings.

## Subscription Plans

### Free
- Basic business profile
- QR code generation
- 1 location
- Up to 5 links
- Up to 3 gallery images
- Basic analytics

### Starter ($19/month)
- Everything in Free
- Dynamic content scheduling
- Up to 15 links
- Up to 10 gallery images
- Advanced analytics
- Remove branding

### Pro ($49/month)
- Everything in Starter
- Unlimited locations
- Unlimited links and images
- Lead capture forms
- Custom branding
- Priority support

## Adding Stripe Integration

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe dashboard
3. Add them to your `.env` file
4. Set up webhook endpoints for subscription events
5. Configure products and prices in Stripe dashboard

## Roadmap

- [ ] QR code generation with downloadable PNG/SVG
- [ ] Complete dashboard profile editor
- [ ] Analytics charts and visualizations
- [ ] Stripe subscription integration
- [ ] Email notifications
- [ ] Mobile app companion
- [ ] API for third-party integrations
- [ ] White-label options for agencies

## Contributing

This is a commercial SaaS product. For partnership or licensing inquiries, please contact the team.

## License

Proprietary - All rights reserved

## Support

For support, email hello@alwaysopenqr.com or visit our website at alwaysopenqr.com.

---

Built with ❤️ for local businesses
