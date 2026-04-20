"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";
import posthog from "posthog-js";

gsap.registerPlugin(ScrollTrigger);

function SplitText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll(".char");
    gsap.from(chars, {
      y: 80,
      rotateX: -40,
      filter: "blur(8px)",
      stagger: 0.025,
      duration: 0.7,
      delay,
      ease: "power3.out",
      clearProps: "transform,filter",
    });
  }, { scope: ref });

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="char inline-block"
            style={{ transformOrigin: "bottom center" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.to(".hero-orb-1", {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".hero-orb-2", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
    gsap.to(".hero-orb-3", {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  }, { scope: sectionRef });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !posthog.__loaded) return;
    let firedView = false;
    let dwellStart: number | null = null;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!firedView) { posthog.capture('section_viewed', { section: 'hero' }); firedView = true; }
        dwellStart = performance.now();
      } else if (dwellStart != null) {
        const dwellMs = Math.round(performance.now() - dwellStart);
        if (dwellMs > 500) posthog.capture('section_dwell', { section: 'hero', dwell_ms: dwellMs });
        dwellStart = null;
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden bg-surface-0 noise-bg"
    >
      {/* Layered mesh gradient background with parallax */}
      <div className="absolute inset-0">
        <div className="hero-orb-1 orb -top-[20%] -left-[10%] w-[700px] h-[700px] bg-amber-500/[0.07] blur-[180px]" />
        <div className="hero-orb-2 orb top-[10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/[0.05] blur-[140px]" />
        <div className="hero-orb-3 orb bottom-[5%] left-[30%] w-[400px] h-[400px] bg-yellow-500/[0.04] blur-[120px]" />
      </div>

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating decorative elements */}
      <div
        className="absolute top-[15%] right-[12%] w-24 h-24 rounded-2xl border border-brand-gold/10 rotate-12 opacity-20"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[20%] left-[8%] w-16 h-16 rounded-full border border-white/[0.06] opacity-15"
        style={{ animation: "float-slow 10s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[40%] left-[5%] w-2 h-2 rounded-full bg-brand-gold/40"
        style={{ animation: "breathe 4s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[30%] right-[8%] w-1.5 h-1.5 rounded-full bg-white/20"
        style={{ animation: "breathe 5s ease-in-out infinite 1s" }}
      />
      <div
        className="absolute bottom-[35%] right-[15%] w-2.5 h-2.5 rounded-full bg-amber-400/30"
        style={{ animation: "breathe 6s ease-in-out infinite 2s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-8 md:pt-36 md:pb-12 lg:pt-44 lg:pb-16">
        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/[0.08] border border-brand-gold/15">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-[11px] font-bold text-brand-gold tracking-[0.12em] uppercase">
              Comunidade Exclusiva
            </span>
          </div>
        </motion.div>

        {/* Headline — massive, split text animated, 3-line layout */}
        <div className="text-center mb-8">
          <h1
            className="font-[var(--font-display)] font-extrabold leading-[0.95] tracking-[-0.04em]"
            style={{ fontSize: "clamp(1.85rem, 6.5vw, 5.5rem)" }}
          >
            <span className="block gradient-text-white-strong">
              <SplitText text="A Comunidade Que" delay={0.2} />
            </span>
            <span className="block mt-1 md:mt-2 gradient-text-white-strong">
              <SplitText text="Te Mantém na" delay={0.4} />
            </span>
            <span className="block mt-1 md:mt-2">
              <SplitText text="Vanguarda da IA" delay={0.55} className="gradient-text-gold" />
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center text-text-secondary leading-relaxed mb-12"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}
        >
          Lives semanais com especialistas, +20 horas de sistemas prontos pra implementar,
          100+ agentes plug &amp; play e conteúdo que evolui com o mercado. Tudo que você precisa
          pra dominar IA — sem ficar pra trás.
        </motion.p>

      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface-1 to-transparent pointer-events-none" />

    </section>
  );
}
