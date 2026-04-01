import { supabase } from '@/lib/supabase/client';

export async function trackScan(businessId: string) {
  try {
    const userAgent = navigator.userAgent;
    const referrer = document.referrer;

    let deviceType = 'desktop';
    if (/Mobile|Android|iPhone/i.test(userAgent)) {
      deviceType = 'mobile';
    } else if (/Tablet|iPad/i.test(userAgent)) {
      deviceType = 'tablet';
    }

    await supabase.from('scans').insert({
      business_id: businessId,
      user_agent: userAgent,
      referrer: referrer || null,
      device_type: deviceType,
    });
  } catch (error) {
    console.error('Error tracking scan:', error);
  }
}

export async function trackCtaClick(
  businessId: string,
  linkLabel: string,
  linkUrl: string
) {
  try {
    await supabase.from('cta_clicks').insert({
      business_id: businessId,
      link_label: linkLabel,
      link_url: linkUrl,
    });
  } catch (error) {
    console.error('Error tracking CTA click:', error);
  }
}
