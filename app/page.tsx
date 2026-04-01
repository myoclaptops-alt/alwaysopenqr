import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { QrCode, Clock, Phone, MapPin, Star, Calendar, Image, TrendingUp, Smartphone, Zap, CircleCheck as CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-semibold text-sm mb-6">
                Smart QR Codes for Local Businesses
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900">
                Never miss a customer again
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
                Turn window shoppers into customers—even after hours.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                One QR code on your door gives customers everything they need: your hours, menu, booking link, reviews, and more. No app required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-10 py-6 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600">
                    See a Demo
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Free plan available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>2-minute setup</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl aspect-[9/16] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

                  <div className="absolute top-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-2xl">
                        ☕
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg text-gray-900">Sunrise Cafe</div>
                        <div className="text-sm text-green-600 flex items-center gap-2 font-medium">
                          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                          Open until 9:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 text-xs">
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full font-medium">
                        <Star className="w-3 h-3 fill-current" />
                        4.8
                      </div>
                      <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                        0.3 mi away
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                    <button className="bg-white/95 backdrop-blur rounded-xl py-4 px-2 text-center hover:bg-white transition shadow-lg">
                      <Phone className="w-5 h-5 mx-auto mb-1.5 text-gray-700" />
                      <span className="text-xs font-semibold text-gray-900">Call</span>
                    </button>
                    <button className="bg-white/95 backdrop-blur rounded-xl py-4 px-2 text-center hover:bg-white transition shadow-lg">
                      <MapPin className="w-5 h-5 mx-auto mb-1.5 text-gray-700" />
                      <span className="text-xs font-semibold text-gray-900">Directions</span>
                    </button>
                    <button className="bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-xl py-4 px-2 text-center hover:from-orange-600 hover:to-amber-600 transition shadow-lg">
                      <Calendar className="w-5 h-5 mx-auto mb-1.5" />
                      <span className="text-xs font-semibold">Book Now</span>
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="flex-1 text-center">
                    <div className="inline-block p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200">
                      <QrCode className="w-20 h-20 text-gray-800" />
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <p className="text-sm font-semibold text-gray-700">Scan to view</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-3">2 min</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Setup Time</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-3">24/7</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Always Available</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-3">$0</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">To Start</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-3">No App</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Required</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-semibold text-sm mb-4">
              Simple Setup
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get started in minutes</h2>
            <p className="text-xl text-gray-600">No technical skills needed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative">
              <Card className="border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all h-full bg-white">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-4xl font-black text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Set up your profile</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Add your business hours, photos, services, and contact info. It takes about 2 minutes.
                  </p>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-orange-400 text-3xl z-10">
                →
              </div>
            </div>

            <div className="relative">
              <Card className="border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all h-full bg-white">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-4xl font-black text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Print your QR code</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Download and print your unique QR code. Stick it on your door, window, or anywhere visible.
                  </p>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-orange-400 text-3xl z-10">
                →
              </div>
            </div>

            <Card className="border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all h-full bg-white">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Start getting customers</h3>
                <p className="text-gray-600 leading-relaxed">
                  People scan your code and see everything about your business—even when you're closed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-semibold text-sm mb-4">
              Everything You Need
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Built for local businesses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Give customers the info they need in one tap—no app downloads, no frustration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group p-6 rounded-2xl hover:bg-orange-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Live Business Hours</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically show if you're open or closed right now. Customers always know when to visit.
              </p>
            </div>

            <div className="group p-6 rounded-2xl hover:bg-orange-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">One-Tap Contact</h3>
              <p className="text-gray-600 leading-relaxed">
                Customers can call, text, get directions, or book appointments with a single tap.
              </p>
            </div>

            <div className="group p-6 rounded-2xl hover:bg-orange-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                <Image className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Beautiful Photo Gallery</h3>
              <p className="text-gray-600 leading-relaxed">
                Showcase your space, products, and team. Let customers see what you're all about.
              </p>
            </div>

            <div className="group p-6 rounded-2xl hover:bg-orange-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Smart Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                Show lunch specials at noon, happy hour deals at 5pm. Set it once, it runs forever.
              </p>
            </div>

            <div className="group p-6 rounded-2xl hover:bg-orange-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Reviews & Social Links</h3>
              <p className="text-gray-600 leading-relaxed">
                Drive customers to your Google reviews, Instagram, Facebook—all in one place.
              </p>
            </div>

            <div className="group p-6 rounded-2xl hover:bg-orange-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Track What Works</h3>
              <p className="text-gray-600 leading-relaxed">
                See how many people scan, what they click, and when they visit. Make better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white font-semibold text-sm mb-4">
              Set It and Forget It
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The right message at the right time</h2>
            <p className="text-xl text-white/95 max-w-2xl mx-auto">
              Schedule content to appear automatically based on the time of day or day of week
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">☕</div>
                <div className="text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">11am - 2pm</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Lunch Menu Front & Center</h3>
                <p className="text-gray-700">
                  Automatically show your lunch specials and daily deals when people are hungry and looking for food.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎉</div>
                <div className="text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">4pm - 7pm</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Happy Hour Promos</h3>
                <p className="text-gray-700">
                  Switch to drink specials and appetizer deals right when the after-work crowd arrives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌙</div>
                <div className="text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">After Hours</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Book for Tomorrow</h3>
                <p className="text-gray-700">
                  When you're closed, show your booking link so customers can schedule for the next day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎊</div>
                <div className="text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">Weekends</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Weekend-Only Deals</h3>
                <p className="text-gray-700">
                  Feature brunch menus on Saturdays and Sundays, or run special weekend promotions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic business profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">QR code generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1 location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic contact buttons</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 shadow-lg transform scale-105">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything in Free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dynamic content scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Photo gallery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Remove branding</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500">
                    Start Free Trial
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything in Starter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multiple locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Lead capture forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Business Owners Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;We put our QR code on the door and immediately started getting more
                  calls and bookings. Customers love being able to book even when
                  we&apos;re closed!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-gray-600">Bliss Salon & Spa</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;The time-based content is genius. We show our breakfast menu in the
                  morning and happy hour specials in the evening. So simple but so
                  effective.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Mike Rodriguez</div>
                    <div className="text-sm text-gray-600">Corner Cafe & Bistro</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;Setup took literally 5 minutes. Now people can see our latest
                  arrivals, hours, and get directions without calling. It&apos;s saved us
                  so much time.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Jessica Park</div>
                    <div className="text-sm text-gray-600">Park Avenue Boutique</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;We&apos;ve gotten several new customers who found us after hours
                  through the QR code. They can see our work, read reviews, and book
                  online. Worth every penny.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">David Thompson</div>
                    <div className="text-sm text-gray-600">QuickFix Phone Repair</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Stop losing customers<br/>after closing time
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 font-medium">
            Join local businesses turning every window shopper into a potential customer—24 hours a day
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <Link href="/signup">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-lg px-12 py-7 shadow-2xl hover:shadow-orange-500/50 transition-all font-bold"
              >
                Start Free Trial
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-12 py-7 font-bold transition-all"
              >
                See a Demo
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Setup in 2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
