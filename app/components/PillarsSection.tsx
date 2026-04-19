"use client";
import { motion } from "framer-motion";
import { Video, BookOpen, Headphones, RefreshCw } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: Video,
    title: "Lives Semanais Estratégicas",
    description: "Toda semana, uma sessão ao vivo discutindo tendências de IA, novas ferramentas, estratégias de negócio e Q&A direto com fundadores e especialistas.",
    accent: "from-violet-500 to-purple-600",
    accentBg: "bg-violet-500/[0.08]",
    iconColor: "text-violet-400",
    size: "large",
  },
  {
    icon: BookOpen,
    title: "+20h de Conteúdo Estruturado",
    description: "Blocos de conhecimento com sistemas acionáveis — não teoria chata. Cada trilha é um sistema completo que você implementa no seu negócio.",
    accent: "from-brand-gold to-amber-600",
    accentBg: "bg-brand-gold/[0.08]",
    iconColor: "text-brand-gold",
    size: "large",
  },
  {
    icon: Headphones,
    title: "Suporte Diário de Especialistas",
    description: "Cada dúvida respondida em até 24 horas por quem já implementou. Você nunca fica travado.",
    accent: "from-emerald-500 to-teal-600",
    accentBg: "bg-emerald-500/[0.08]",
    iconColor: "text-emerald-400",
    size: "small",
  },
  {
    icon: RefreshCw,
    title: "Atualizações Constantes",
    description: "Conteúdo que evolui com o mercado. Novas ferramentas, agentes e automações — você recebe tudo primeiro.",
    accent: "from-blue-500 to-cyan-600",
    accentBg: "bg-blue-500/[0.08]",
    iconColor: "text-blue-400",
    size: "small",
  },
];

export default function PillarsSection() {
  return (
    <section id="pilares" className="relative py-24 md:py-32 bg-surface-2 noise-bg">
      <div className="absolute -top-1/2 left-1/3 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.02] blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
            A solução
          </p>
          <h2
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Os 4 Pilares da Comunidade
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Um ecossistema completo que te mantém atualizado, suportado e conectado com quem está na vanguarda.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={`group relative glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                pillar.size === "large" ? "p-8 md:p-10" : "p-7"
              }`}
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-12 h-12 rounded-xl ${pillar.accentBg} flex items-center justify-center mb-5`}>
                <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
              </div>

              <h3 className="font-[var(--font-display)] font-semibold text-xl text-text-primary mb-3">
                {pillar.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
