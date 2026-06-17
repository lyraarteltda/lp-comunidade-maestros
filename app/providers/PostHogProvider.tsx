'use client';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, useState, type ReactNode } from 'react';

export function PostHogProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';
    if (!key) return;
    if (typeof window !== 'undefined' && navigator.doNotTrack === '1') return;

    // Defer PostHog init off the critical loading path. autocapture +
    // session_recording (rrweb) is heavy JS that otherwise competes for the
    // main thread while the hero is still hydrating/painting, inflating LCP on
    // mobile. We init once the browser is idle (capped at 2.5s) so the initial
    // pageview is still captured, just after the page is interactive.
    let cancelled = false;
    const start = () => {
      if (cancelled) return;
      posthog.init(key, {
        api_host: host,
        person_profiles: 'identified_only',
        capture_pageview: true,
        capture_pageleave: true,
        autocapture: true,
        disable_session_recording: false,
        session_recording: { maskAllInputs: true, maskTextSelector: '[data-sensitive]' },
        loaded: (ph) => {
          if (process.env.NODE_ENV === 'development') ph.debug();
          setReady(true);
        },
      });
    };

    const schedule = () => {
      const ric = (window as unknown as {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      }).requestIdleCallback;
      if (ric) ric(start, { timeout: 2500 });
      else setTimeout(start, 1500);
    };

    // Wait until the page has loaded before scheduling, so analytics never
    // contends with first paint / hydration.
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener('load', schedule);
    };
  }, []);

  if (!ready && !process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>;
  }

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
