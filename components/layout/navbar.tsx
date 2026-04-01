'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QrCode, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">AlwaysOpenQR</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Pricing
            </Link>
            <Link
              href="/demo"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Demo
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                Start Free
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/features"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/demo"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500">
                  Start Free
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
