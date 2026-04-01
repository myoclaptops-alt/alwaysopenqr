'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuth } from './auth-context';
import { supabase } from '@/lib/supabase/client';
import { PLAN_LIMITS } from '@/lib/stripe/config';

type PlanType = 'FREE' | 'STARTER' | 'PRO';

interface SubscriptionContextType {
  subscription: any;
  currentPlan: PlanType;
  isLoading: boolean;
  canAccessFeature: (feature: keyof typeof PLAN_LIMITS.FREE) => boolean;
  getLimit: (feature: keyof typeof PLAN_LIMITS.FREE) => number | boolean;
  hasFeature: (feature: keyof typeof PLAN_LIMITS.FREE) => boolean;
  refreshSubscription: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  subscription: null,
  currentPlan: 'FREE',
  isLoading: true,
  canAccessFeature: () => false,
  getLimit: () => 0,
  hasFeature: () => false,
  refreshSubscription: async () => {},
});

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<any>(null);
  const [currentPlan, setCurrentPlan] = useState<PlanType>('FREE');
  const [isLoading, setIsLoading] = useState(true);

  const fetchSubscription = async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('owner_id', user.id)
        .maybeSingle();

      if (error) throw error;

      setSubscription(data);

      if (data && data.status === 'active') {
        setCurrentPlan(data.plan.toUpperCase() as PlanType);
      } else {
        setCurrentPlan('FREE');
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
      setCurrentPlan('FREE');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, [user]);

  const canAccessFeature = (feature: keyof typeof PLAN_LIMITS.FREE): boolean => {
    const limit = PLAN_LIMITS[currentPlan][feature];
    if (typeof limit === 'boolean') {
      return limit;
    }
    return limit !== 0;
  };

  const getLimit = (feature: keyof typeof PLAN_LIMITS.FREE): number | boolean => {
    return PLAN_LIMITS[currentPlan][feature];
  };

  const hasFeature = (feature: keyof typeof PLAN_LIMITS.FREE): boolean => {
    const value = PLAN_LIMITS[currentPlan][feature];
    if (typeof value === 'boolean') {
      return value;
    }
    return value === -1 || value > 0;
  };

  const refreshSubscription = async () => {
    await fetchSubscription();
  };

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        currentPlan,
        isLoading,
        canAccessFeature,
        getLimit,
        hasFeature,
        refreshSubscription,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}
