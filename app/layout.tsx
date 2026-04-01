import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/lib/contexts/auth-context';
import { SubscriptionProvider } from '@/lib/contexts/subscription-context';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AlwaysOpenQR - Your business is always open, even when you\'re closed',
  description: 'Turn your storefront door into a digital storefront with a smart QR code. Show customers your hours, photos, services, booking links, reviews, menus, and more.',
  openGraph: {
    title: 'AlwaysOpenQR - Your business is always open',
    description: 'Smart QR codes for local businesses. Show customers what they need, even when you\'re closed.',
    images: [
      {
        url: 'https://alwaysopenqr.com/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlwaysOpenQR',
    description: 'Smart QR codes for local businesses',
    images: [
      {
        url: 'https://alwaysopenqr.com/og-image.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SubscriptionProvider>
            {children}
            <Toaster />
          </SubscriptionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
