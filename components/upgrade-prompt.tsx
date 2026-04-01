import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface UpgradePromptProps {
  feature: string;
  requiredPlan: 'STARTER' | 'PRO';
  description?: string;
}

export function UpgradePrompt({ feature, requiredPlan, description }: UpgradePromptProps) {
  return (
    <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
          <Crown className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{feature}</h3>
        <p className="text-gray-700 mb-6">
          {description || `This feature requires the ${requiredPlan} plan`}
        </p>
        <Link href="/dashboard/billing">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
            Upgrade to {requiredPlan}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

interface FeatureLockedBadgeProps {
  requiredPlan: 'STARTER' | 'PRO';
}

export function FeatureLockedBadge({ requiredPlan }: FeatureLockedBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-semibold">
      <Crown className="w-3 h-3" />
      {requiredPlan}
    </span>
  );
}
