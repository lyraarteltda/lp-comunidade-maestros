"use client";
import { motion } from "framer-motion";
import { Play, Calendar, MessageCircle, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const topicExamples = [
  {
    icon: Zap,
    topic: "Como usar agentes de IA para prospectar clientes automaticamente",
  },
  {
    icon: Play,
    topic: "Novas ferramentas de vídeo com IA: o que vale a pena em 2026",
  },
  {
    icon: Calendar,
    topic: "Construindo um funil 100% automatizado com Make + n8n",
  },
  {
    icon: MessageCircle,
    topic: "Q&A: tire suas dúvidas ao vivo com os fundadores",
  },
];

export default function LivesSection() {
  return (
    <section id="lives" className="relative py-24 md:py-32 bg-surface-2">
      <div className="absolute -top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <AnimatedSection>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
              Toda semana
            </p>
            <h2
              className="font-[var(--font-display)] font-bold gradient-text-white tracking-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Lives Semanais: Estratégia,
              <br />
              Tendências e Q&A
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Cada semana, uma sessão ao vivo com foco estratégico. Discutimos
              as ferramentas mais recentes, analisamos cases reais e respondemos
              suas dúvidas ao vivo. Nada de teoria seca — só o que você precisa
              para aplicar no seu negócio.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-text-tertiary">
                <Play className="w-3 h-3" /> Ao vivo toda semana
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-text-tertiary">
                <Calendar className="w-3 h-3" /> Gravações disponíveis
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-text-tertiary">
                <MessageCircle className="w-3 h-3" /> Q&A interativo
              </span>
            </div>
          </AnimatedSection>

          {/* Right: topic cards */}
          <div className="space-y-4">
            {topicExamples.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group glass-card glass-card-hover rounded-xl p-5 flex items-start gap-4 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/[0.08] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-medium leading-relaxed">
                      {item.topic}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
