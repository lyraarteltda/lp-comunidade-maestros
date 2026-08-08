'use client';
import { useState, useEffect } from 'react';

const BASE_CHECKOUT_URL = "https://pay.onprofit.com.br/M5Ene7El?off=ZNpmS2";
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

// NOTE: intentionally does NOT use next/navigation's useSearchParams().
// With `output: export`, reading useSearchParams() during render forces the
// entire page to bail out to client-side rendering (an empty static shell),
// which delays first paint of the hero (large LCP). We read
// window.location.search after mount instead — the page can now be fully
// prerendered to static HTML, and the UTM params are appended to the checkout
// href before any realistic user click.
export function useCheckoutUrl() {
  const [url, setUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const next = new URL(BASE_CHECKOUT_URL);
      let changed = false;
      for (const key of UTM_KEYS) {
        const value = params.get(key);
        if (value) {
          next.searchParams.set(key, value);
          changed = true;
        }
      }
      if (changed) setUrl(next.toString());
    } catch {
      /* window unavailable or malformed query — keep base url */
    }
  }, []);

  return url;
}
