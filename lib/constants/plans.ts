export const PLANS = {
  FREE: {
    id: 'free',
    name: 'Free',
    price: 0,
    interval: 'month',
    features: [
      'Basic business profile',
      'QR code generation',
      '1 location',
      'Basic contact buttons',
      'Limited styling options',
      'AlwaysOpenQR branding',
    ],
    limits: {
      locations: 1,
      links: 5,
      galleryImages: 3,
      scheduledContent: 0,
    },
  },
  STARTER: {
    id: 'starter',
    name: 'Starter',
    price: 19,
    interval: 'month',
    features: [
      'Everything in Free',
      'Custom business profile',
      'Dynamic content scheduling',
      'Unlimited contact buttons',
      'Photo gallery (up to 10 images)',
      'Promotional links',
      'Analytics dashboard',
      'Remove branding',
      'Priority email support',
    ],
    limits: {
      locations: 1,
      links: 15,
      galleryImages: 10,
      scheduledContent: 5,
    },
  },
  PRO: {
    id: 'pro',
    name: 'Pro',
    price: 49,
    interval: 'month',
    features: [
      'Everything in Starter',
      'Multiple locations',
      'Advanced scheduling (unlimited)',
      'Unlimited gallery images',
      'Lead capture forms',
      'Advanced analytics',
      'Custom branding',
      'Decal fulfillment support',
      'Priority phone & email support',
    ],
    limits: {
      locations: 999,
      links: 999,
      galleryImages: 999,
      scheduledContent: 999,
    },
  },
} as const;

export type PlanId = keyof typeof PLANS;

export function getPlanLimits(planId: string) {
  const plan = PLANS[planId.toUpperCase() as PlanId] || PLANS.FREE;
  return plan.limits;
}

export function canAccessFeature(
  currentPlan: string,
  requiredPlan: PlanId
): boolean {
  const planHierarchy: PlanId[] = ['FREE', 'STARTER', 'PRO'];
  const currentIndex = planHierarchy.indexOf(currentPlan.toUpperCase() as PlanId);
  const requiredIndex = planHierarchy.indexOf(requiredPlan);

  return currentIndex >= requiredIndex;
}
