"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, Clock, HelpCircle, Users } from "lucide-react";
import posthog from "posthog-js";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  {
    icon: Clock,
    title: "Cursos estáticos",
    description: "Você aprende algo, e em semanas já está desatualizado. IA muda rápido demais para conteúdo congelado.",
    accent: "from-red-500/20 to-orange-500/10",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10",
  },
  {
    icon: HelpCircle,
    title: "Zero suporte real",
    description: "Travou em uma automação? Em um agente? Ninguém pra perguntar. Google não resolve o seu contexto.",
    accent: "from-orange-500/20 to-amber-500/10",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: AlertTriangle,
    title: "Tudo muda toda semana",
    description: "Novas IAs, frameworks, APIs. Impossível acompanhar sozinho e saber o que realmente importa.",
    accent: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: Users,
    title: "Comunidades genéricas",
    description: "Sem foco, sem profundidade, sem resultado. Conteúdo raso que não move o ponteiro do seu negócio.",
    accent: "from-yellow-500/20 to-red-500/10",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10",
  },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(sectionRef.current.querySelectorAll(".pain-card"), {
      x: -60,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
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
        if (!firedView) { posthog.capture('section_viewed', { section: 'problem' }); firedView = true; }
        dwellStart = performance.now();
      } else if (dwellStart != null) {
        const dwellMs = Math.round(performance.now() - dwellStart);
        if (dwellMs > 500) posthog.capture('section_dwell', { section: 'problem', dwell_ms: dwellMs });
        dwellStart = null;
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 bg-surface-1 noise-bg overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red-500/[0.03] blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Asymmetric layout: text left, cards right on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column — dramatic statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-bold tracking-[0.15em] uppercase text-red-400/80 mb-4"
            >
              O problema
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[var(--font-display)] font-bold tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              <span className="gradient-text-white">Aprender IA Sozinho</span>
              <br />
              <span className="text-text-tertiary">É Uma Corrida Que Você</span>
              <br />
              <span className="text-text-tertiary">Nunca Vai Ganhar</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-sm leading-relaxed max-w-md"
            >
              O mercado de IA se reinventa a cada 90 dias. Quem tenta aprender sozinho
              fica preso num ciclo: descobre uma ferramenta, começa a usar, e quando domina,
              já existe algo melhor. É exaustivo — e desnecessário.
            </motion.p>
          </div>

          {/* Right column — pain cards stacked */}
          <div className="lg:col-span-7 space-y-4">
            {painPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="pain-card group relative glass-card glass-card-hover rounded-2xl p-6 md:p-7 overflow-hidden"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${point.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 flex items-start gap-5">
                    <div className={`w-11 h-11 rounded-xl ${point.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${point.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-display)] font-semibold text-text-primary text-base mb-1.5">
                        {point.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-connector absolute bottom-0 left-0 right-0" />
    </section>
  );
}
