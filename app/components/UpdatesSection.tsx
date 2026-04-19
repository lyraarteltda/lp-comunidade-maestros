"use client";
import { motion } from "framer-motion";
import { Zap, Bot, Wrench, TrendingUp, ArrowUpRight } from "lucide-react";

const updates = [
  {
    icon: Bot,
    title: "Novo agente de SDR com IA",
    date: "Abril 2026",
    tag: "Agente",
    tagColor: "bg-violet-500/10 text-violet-300",
  },
  {
    icon: Wrench,
    title: "Pipeline de vídeo com Sora + ElevenLabs",
    date: "Abril 2026",
    tag: "Ferramenta",
    tagColor: "bg-blue-500/10 text-blue-300",
  },
  {
    icon: TrendingUp,
    title: "Template de dashboard CEO atualizado",
    date: "Março 2026",
    tag: "Template",
    tagColor: "bg-emerald-500/10 text-emerald-300",
  },
  {
    icon: Zap,
    title: "Automação de funil com Make 2.0",
    date: "Março 2026",
    tag: "Automação",
    tagColor: "bg-amber-500/10 text-amber-300",
  },
];

export default function UpdatesSection() {
  return (
    <section className="relative py-24 md:py-36 bg-surface-2 noise-bg overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: headline */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-blue-400 mb-4">
                Em constante evolução
              </p>
              <h2
                className="font-[var(--font-display)] font-bold tracking-[-0.02em] mb-6"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                <span className="gradient-text-white">Sempre na</span>
                <br />
                <span className="gradient-text-gold">Vanguarda</span>
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                Diferente de cursos estáticos, a comunidade evolui com o mercado.
                Novas ferramentas, novos agentes, novas automações — você recebe
                tudo primeiro.
              </p>
            </motion.div>
          </div>

          {/* Right: timeline feed */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-gold/40 via-blue-500/20 to-transparent" />

              <div className="space-y-4">
                {updates.map((update, i) => {
                  const Icon = update.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="relative pl-12"
                    >
                      {/* Dot */}
                      <div className="absolute left-2 top-5 w-4 h-4 rounded-full bg-surface-3 border-2 border-brand-gold/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      </div>

                      <div className="glass-card glass-card-hover rounded-xl p-5 group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-text-tertiary group-hover:text-brand-gold transition-colors" />
                            <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${update.tagColor}`}>
                              {update.tag}
                            </span>
                          </div>
                          <span className="text-text-muted text-xs">{update.date}</span>
                        </div>
                        <p className="text-text-primary text-sm font-medium flex items-center gap-1.5 group-hover:text-brand-gold-light transition-colors">
                          {update.title}
                          <ArrowUpRight className="w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="ml-12 mt-6"
            >
              <p className="text-text-muted text-sm">
                E muito mais a cada semana...
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
