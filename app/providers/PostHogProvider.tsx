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
  }, []);

  if (!ready && !process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>;
  }

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
