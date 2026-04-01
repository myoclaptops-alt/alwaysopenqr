import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder';

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2026-03-25.dahlia',
});

export const STRIPE_PRICE_IDS = {
  STARTER: process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID || '',
  PRO: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || '',
};

export const PLAN_LIMITS = {
  FREE: {
    locations: 1,
    scheduledContent: 3,
    analytics: false,
    customDomain: false,
    leadCapture: false,
  },
  STARTER: {
    locations: 1,
    scheduledContent: 10,
    analytics: true,
    customDomain: false,
    leadCapture: false,
  },
  PRO: {
    locations: 10,
    scheduledContent: -1,
    analytics: true,
    customDomain: true,
    leadCapture: true,
  },
};
