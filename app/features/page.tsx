import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Clock, Phone, Image, Zap, Star, TrendingUp, MapPin, Calendar, Link as LinkIcon, Users, Shield, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features - AlwaysOpenQR',
  description: 'Discover all the powerful features that help your business stay connected with customers 24/7',
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Everything You Need to Connect with Customers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AlwaysOpenQR gives you all the tools to create a powerful mobile presence for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Mobile Business Profile</h3>
              <p className="text-gray-600">
                Beautiful, mobile-optimized profile page that works on any device without requiring an app download
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Business Hours Display</h3>
              <p className="text-gray-600">
                Automatically show open/closed status with real-time updates based on your business hours
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">One-Tap Contact Actions</h3>
              <p className="text-gray-600">
                Let customers call, text, email, or get directions with a single tap on their phone
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Dynamic Smart Content</h3>
              <p className="text-gray-600">
                Show different promotions, menus, or offers based on time of day and day of week
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Image className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Photo Gallery</h3>
              <p className="text-gray-600">
                Showcase your products, services, and space with a beautiful image gallery
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Booking Integration</h3>
              <p className="text-gray-600">
                Link directly to your booking system so customers can schedule appointments anytime
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Review Links</h3>
              <p className="text-gray-600">
                Drive customers to your Google, Yelp, or Facebook reviews to build social proof
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track scans, button clicks, and engagement to understand your customer behavior
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Multiple Locations</h3>
              <p className="text-gray-600">
                Manage multiple business locations with unique QR codes and profiles (Pro plan)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <LinkIcon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Custom Links</h3>
              <p className="text-gray-600">
                Add links to your menu, online store, social media, or any other web destination
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Lead Capture</h3>
              <p className="text-gray-600">
                Collect customer contact information with optional lead capture forms (Pro plan)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and 99.9% uptime so your business is always accessible
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
