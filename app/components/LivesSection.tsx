"use client";
import { motion } from "framer-motion";
import { Play, Calendar, MessageCircle, Zap, Radio } from "lucide-react";
import { useTrackSection } from "../hooks/useTrackSection";

const topicExamples = [
  {
    icon: Zap,
    topic: "Como usar agentes de IA para prospectar clientes automaticamente",
    tag: "Automação",
    accent: "text-amber-400",
    tagBg: "bg-amber-500/10",
  },
  {
    icon: Play,
    topic: "Novas ferramentas de vídeo com IA: o que vale a pena em 2026",
    tag: "Ferramentas",
    accent: "text-violet-400",
    tagBg: "bg-violet-500/10",
  },
  {
    icon: Calendar,
    topic: "Construindo um funil 100% automatizado com Make + n8n",
    tag: "Funis",
    accent: "text-emerald-400",
    tagBg: "bg-emerald-500/10",
  },
  {
    icon: MessageCircle,
    topic: "Q&A: tire suas dúvidas ao vivo com os fundadores",
    tag: "Q&A",
    accent: "text-blue-400",
    tagBg: "bg-blue-500/10",
  },
];

export default function LivesSection() {
  const trackRef = useTrackSection('lives');
  return (
    <section ref={trackRef} id="lives" className="relative py-16 md:py-24 bg-surface-2 overflow-hidden">
      <div className="absolute -top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-violet-500/[0.025] blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-gold/[0.02] blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-red-400">
                  Toda semana ao vivo
                </span>
              </div>

              <h2
                className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em] mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Lives Semanais:<br />
                <span className="text-text-tertiary">Estratégia, Tendências</span><br />
                <span className="text-text-tertiary">e Q&A</span>
              </h2>

              <p className="text-text-secondary leading-relaxed mb-8 max-w-md">
                Imagine terminar cada semana sabendo exatamente qual ferramenta de IA
                usar, como automatizar o próximo processo do seu negócio, e com um
                sistema novo pra implementar na segunda-feira. Isso é o que cada live entrega.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: Radio, label: "Ao vivo toda semana" },
                  { icon: Play, label: "Gravações disponíveis" },
                  { icon: MessageCircle, label: "Q&A interativo" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-text-tertiary font-medium"
                    >
                      <Icon className="w-3 h-3" /> {item.label}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: topic cards with stagger */}
          <div className="lg:col-span-7 space-y-3.5">
            {topicExamples.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: -4, transition: { duration: 0.2 } }}
                  className="group glass-card glass-card-hover rounded-xl p-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-brand-gold/20 transition-colors">
                    <Icon className={`w-5 h-5 ${item.accent}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-text-primary text-sm font-medium leading-relaxed">
                      {item.topic}
                    </p>
                  </div>
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded ${item.tagBg} ${item.accent} shrink-0 hidden sm:block`}>
                    {item.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
