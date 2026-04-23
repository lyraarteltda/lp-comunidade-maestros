'use client';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

const BASE_CHECKOUT_URL = "https://pay.onprofit.com.br/M5Ene7El?off=ZNpmS2";
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

export function useCheckoutUrl() {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const url = new URL(BASE_CHECKOUT_URL);
    for (const key of UTM_KEYS) {
      const value = searchParams.get(key);
      if (value) url.searchParams.set(key, value);
    }
    return url.toString();
  }, [searchParams]);
}
