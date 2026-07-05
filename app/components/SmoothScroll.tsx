"use client";
import { useEffect } from "react";

/**
 * Native, dependency-free smooth navigation.
 *
 * NOTE (incident fix): the previous version ran Lenis (smoothWheel) driven by the
 * GSAP ticker RAF, WHILE `html { scroll-behavior: smooth }` was set in globals.css
 * AND the Lenis stylesheet (which forces `scroll-behavior: auto !important`) was
 * never imported. That made the browser's native smooth-scroll fight Lenis'
 * per-frame programmatic scroll — and both fight GSAP ScrollTrigger `scrub` — so
 * the wheel/touch scroll janked, stuck and, on lower-powered/mobile devices,
 * froze completely. We removed the scroll-hijack entirely: native scrolling can
 * never freeze. GSAP ScrollTrigger keeps working on the native scroll listener,
 * and anchor navigation stays smooth via the JS `behavior: 'smooth'` option
 * (which is independent of the CSS `scroll-behavior` value).
 */

const HEADER_OFFSET = 72; // fixed header is h-16 (64px) + a little breathing room

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onClick = (e: MouseEvent) => {
      // Let modified clicks (new tab, etc.) and already-handled clicks pass through.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href") || "";
      if (hash.length < 2) return; // ignore bare "#"

      let dest: HTMLElement | null = null;
      try {
        dest = document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch {
        dest = null;
      }
      if (!dest) return;

      e.preventDefault();

      // The mobile menu locks the page with `body { overflow: hidden }`; release it
      // immediately so window.scrollTo isn't blocked when a menu link is tapped.
      document.body.style.overflow = "";

      const scrollToDest = () => {
        const top = dest!.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior: prefersReduced ? "auto" : "smooth" });
      };

      // Wait two frames so any menu-close state update / overflow reset lands first.
      requestAnimationFrame(() => requestAnimationFrame(scrollToDest));

      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <>{children}</>;
}
