"use client";
import { motion } from "framer-motion";
import { Zap, Bot, Wrench, TrendingUp, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const updates = [
  {
    icon: Bot,
    title: "Novo agente de SDR com IA",
    date: "Abril 2026",
    tag: "Agente",
  },
  {
    icon: Wrench,
    title: "Pipeline de vídeo com Sora + ElevenLabs",
    date: "Abril 2026",
    tag: "Ferramenta",
  },
  {
    icon: TrendingUp,
    title: "Template de dashboard CEO atualizado",
    date: "Março 2026",
    tag: "Template",
  },
  {
    icon: Zap,
    title: "Automação de funil com Make 2.0",
    date: "Março 2026",
    tag: "Automação",
  },
];

export default function UpdatesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-surface-2 noise-bg">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-blue-400 mb-4">
            Em constante evolução
          </p>
          <h2
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Sempre na Vanguarda
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Diferente de cursos estáticos, a comunidade evolui com o mercado.
            Novas ferramentas, novos agentes, novas automações — você recebe tudo primeiro.
          </p>
        </AnimatedSection>

        {/* Timeline-style feed */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/40 via-blue-500/20 to-transparent" />

            {updates.map((update, i) => {
              const Icon = update.icon;
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 pb-8 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-3 top-1 w-5 h-5 rounded-full bg-surface-3 border-2 border-brand-gold/40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                </div>

                <div className="glass-card glass-card-hover rounded-xl p-5 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-brand-gold" />
                      <span className="text-[10px] font-bold tracking-wider uppercase text-brand-gold bg-brand-gold/[0.08] px-2 py-0.5 rounded">
                        {update.tag}
                      </span>
                    </div>
                    <span className="text-text-muted text-xs">{update.date}</span>
                  </div>
                  <p className="text-text-primary text-sm font-medium flex items-center gap-1.5">
                    {update.title}
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />
                  </p>
                </div>
              </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-text-muted text-sm italic">
              E muito mais a cada semana...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
