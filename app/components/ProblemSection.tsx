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
    title: "Cursos que nascem velhos",
    description: "Você compra um curso de IA, estuda 3 semanas, e quando termina, metade das ferramentas já mudou. O conteúdo congela — o mercado não.",
    accent: "from-red-500/20 to-orange-500/10",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10",
  },
  {
    icon: HelpCircle,
    title: "Travou? Google não resolve SEU problema",
    description: "Seu webhook do n8n deu erro 403 às 11 da noite. Você busca no Google, acha 14 respostas genéricas de 2024, nenhuma pro seu cenário. Quem você pergunta?",
    accent: "from-orange-500/20 to-amber-500/10",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: AlertTriangle,
    title: "47 ferramentas novas essa semana. Qual importa?",
    description: "Manus, Devin, Claude Code, Gemini 3, GPT-5... toda semana nasce uma IA \"revolucionária\". Sem um filtro curado, você testa tudo e não domina nada.",
    accent: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: Users,
    title: "Grupos com 500 pessoas e zero profundidade",
    description: "Você entra num grupo de WhatsApp sobre IA. 200 mensagens por dia, memes, links aleatórios, e ninguém que realmente usa IA pra faturar. Barulho sem sinal.",
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
              <span className="gradient-text-white">Você Passa Horas</span>
              <br />
              <span className="gradient-text-white">Pesquisando IA Sozinho —</span>
              <br />
              <span className="text-text-tertiary">E Quando Finalmente Aprende,</span>
              <br />
              <span className="text-text-tertiary">Já Ficou Obsoleto</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-sm leading-relaxed max-w-md"
            >
              É a esteira da IA: você descobre uma ferramenta, passa 2 semanas aprendendo,
              monta seu primeiro fluxo... e descobre que já saiu algo melhor. O mercado se
              reinventa a cada 90 dias. Sozinho, você nunca sai desse ciclo.
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
