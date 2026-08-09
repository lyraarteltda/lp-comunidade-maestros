'use client';
import { useEffect, useState } from 'react';

const BASE_CHECKOUT_URL = "https://pay.onprofit.com.br/M5Ene7El?off=ZNpmS2";
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

/**
 * NOTE (incident fix 2026-08-09): this used to call `useSearchParams()`. Under
 * `output: "export"`, any component reading search params opts its closest
 * <Suspense> boundary out of prerendering — and the only boundary was the one
 * wrapping the WHOLE page, so the exported index.html shipped ZERO content and
 * the entire landing page depended on client JS. On a slow connection the page
 * came up blank and then revealed section-by-section (the classic "only the hero
 * loads"). Reading `window.location.search` in an effect keeps the UTM
 * pass-through while letting the page prerender to real HTML.
 */
export function useCheckoutUrl() {
  const [href, setHref] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const url = new URL(BASE_CHECKOUT_URL);
    let touched = false;
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) {
        url.searchParams.set(key, value);
        touched = true;
      }
    }
    if (touched) setHref(url.toString());
  }, []);

  return href;
}
