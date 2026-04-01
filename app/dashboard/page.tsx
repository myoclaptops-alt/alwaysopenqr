import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, TrendingUp, Users, Eye, ExternalLink, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard - AlwaysOpenQR',
  description: 'Manage your business profile',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back!</p>
              </div>
            </div>
            <Link href="/dashboard/settings">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
              <Eye className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-gray-600">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-gray-600">+0% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CTA Clicks</CardTitle>
              <Users className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-gray-600">Total button clicks</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Status</CardTitle>
              <QrCode className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-400">Draft</div>
              <p className="text-xs text-gray-600">Not published yet</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-orange-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Create your business profile</h3>
                    <p className="text-sm text-gray-600">Add your business info, hours, and contact details</p>
                  </div>
                </div>
                <Link href="/dashboard/profile">
                  <Button>Start</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg opacity-50">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-400">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Generate your QR code</h3>
                    <p className="text-sm text-gray-600">Download your QR code to display on your storefront</p>
                  </div>
                </div>
                <Button disabled>Generate</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg opacity-50">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-400">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Publish your profile</h3>
                    <p className="text-sm text-gray-600">Make your profile live and start connecting with customers</p>
                  </div>
                </div>
                <Button disabled>Publish</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/dashboard/profile">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </Link>
              <Link href="/dashboard/qr-code">
                <Button variant="outline" className="w-full justify-start">
                  <QrCode className="w-4 h-4 mr-2" />
                  Manage QR Code
                </Button>
              </Link>
              <Link href="/dashboard/analytics">
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">Free Plan</div>
                  <p className="text-sm text-gray-600">Perfect for getting started</p>
                </div>
                <Link href="/dashboard/billing">
                  <Button variant="outline" className="w-full">
                    Upgrade Plan
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
