'use client';
import { useEffect, useRef } from 'react';
import posthog from 'posthog-js';

export function useTrackSection(name: string, options?: { threshold?: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !posthog.__loaded) return;

    let firedView = false;
    let dwellStart: number | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!firedView) {
            posthog.capture('section_viewed', { section: name });
            firedView = true;
          }
          dwellStart = performance.now();
        } else if (dwellStart != null) {
          const dwellMs = Math.round(performance.now() - dwellStart);
          if (dwellMs > 500) {
            posthog.capture('section_dwell', { section: name, dwell_ms: dwellMs });
          }
          dwellStart = null;
        }
      },
      { threshold: options?.threshold ?? 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [name, options?.threshold]);

  return ref;
}
