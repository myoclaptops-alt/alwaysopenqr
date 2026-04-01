import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CircleCheck as CheckCircle, CircleHelp as HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Pricing - AlwaysOpenQR',
  description: 'Choose the perfect plan for your business',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your needs. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Basic business profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>QR code generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>1 location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Up to 5 contact links</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Up to 3 gallery images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Basic analytics</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button variant="outline" className="w-full">
                    Get Started Free
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 shadow-xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$19</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Everything in Free, plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Dynamic content scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Up to 15 contact links</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Up to 10 gallery images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Remove AlwaysOpenQR branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Priority email support</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                    Start Free Trial
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$49</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Everything in Starter, plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Unlimited locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Unlimited links & images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Advanced scheduling (unlimited)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Lead capture forms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Priority phone & email support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Decal fulfillment support</span>
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

          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-600" />
                    <span>Can I change my plan later?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! You can upgrade or downgrade your plan at any time. Changes will be
                  reflected in your next billing cycle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-600" />
                    <span>Is there a setup fee?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  No setup fees, ever. You only pay for your chosen subscription plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-600" />
                    <span>What if I need help setting up?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We offer email support for all plans, with priority support for Starter and
                  Pro subscribers. Our setup guide makes it easy to get started in minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-600" />
                    <span>Do I need to print my own QR code?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  You can download your QR code and print it yourself, or use a local print
                  shop. Pro plan members get access to our decal fulfillment service for
                  professionally printed, weatherproof decals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-600" />
                    <span>Can I cancel anytime?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, you can cancel your subscription at any time. Your service will
                  continue until the end of your current billing period.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of local businesses connecting with customers 24/7
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              Start Free Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
