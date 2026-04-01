import { Metadata } from 'next';
import { SignupForm } from '@/components/auth/signup-form';
import Link from 'next/link';
import { QrCode } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Started - AlwaysOpenQR',
  description: 'Create your AlwaysOpenQR account and start connecting with customers',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl">AlwaysOpenQR</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-orange-600 hover:text-orange-500">
              Sign in
            </Link>
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
