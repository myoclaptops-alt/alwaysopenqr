import Link from 'next/link';
import { QrCode } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">AlwaysOpenQR</span>
            </Link>
            <p className="text-sm text-gray-400">
              Your business is always open, even when you&apos;re closed.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-white transition">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@alwaysopenqr.com" className="hover:text-white transition">
                  hello@alwaysopenqr.com
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-white transition">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AlwaysOpenQR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
