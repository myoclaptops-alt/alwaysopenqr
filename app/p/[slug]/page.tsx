import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Phone, MapPin, Globe, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Business Profile - AlwaysOpenQR',
};

export default function PublicProfilePage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="relative h-48 bg-gradient-to-br from-red-500 to-orange-500">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
            </div>
          </div>
        </div>

        <div className="pt-20 px-4 pb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Sample Business</h1>
            <p className="text-gray-600 mb-4">Your local coffee shop</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              <span>Open Now</span>
            </div>
          </div>

          <div className="mb-6 text-center">
            <p className="text-sm text-gray-600">Today: 7:00 AM - 8:00 PM</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            <Button className="bg-gradient-to-r from-red-500 to-orange-500">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Directions
            </Button>
            <Button variant="outline">
              <Globe className="w-4 h-4 mr-2" />
              Website
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Book
            </Button>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="font-bold text-lg mb-2">About Us</h2>
              <p className="text-gray-600 text-sm">
                Welcome to our business! We&apos;re here to serve you with the best products and
                services. Visit us or get in touch to learn more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="font-bold text-lg mb-4">Hours</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday</span>
                  <span className="font-medium">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tuesday</span>
                  <span className="font-medium">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Wednesday</span>
                  <span className="font-medium">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thursday</span>
                  <span className="font-medium">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Friday</span>
                  <span className="font-medium">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Powered by AlwaysOpenQR</p>
          </div>
        </div>
      </div>
    </div>
  );
}
