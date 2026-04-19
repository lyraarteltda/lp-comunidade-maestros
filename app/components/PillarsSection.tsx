"use client";
import { motion } from "framer-motion";
import { Video, BookOpen, Headphones, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: Video,
    title: "Lives Semanais Estratégicas",
    description: "Toda semana, uma sessão ao vivo: tendências, ferramentas novas, estratégias de negócio e Q&A direto com fundadores e especialistas.",
    detail: "Todas ficam gravadas",
    accent: "violet",
    gradient: "from-violet-500 to-purple-600",
    bgGlow: "bg-violet-500/[0.06]",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: BookOpen,
    title: "+20h de Conteúdo Estruturado",
    description: "Blocos de conhecimento com sistemas acionáveis. Cada trilha é um sistema completo que você implementa.",
    detail: "7 trilhas práticas",
    accent: "gold",
    gradient: "from-brand-gold to-amber-600",
    bgGlow: "bg-brand-gold/[0.06]",
    span: "",
    featured: false,
  },
  {
    icon: Headphones,
    title: "Suporte Rápido",
    description: "Suporte rápido com especialistas que já implementaram na prática.",
    detail: "Respostas reais de quem vive IA",
    accent: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/[0.06]",
    span: "",
    featured: false,
  },
  {
    icon: RefreshCw,
    title: "Atualizações Constantes",
    description: "Conteúdo que evolui com o mercado. Novas ferramentas, agentes e automações — você recebe tudo primeiro.",
    detail: "Novidades toda semana",
    accent: "blue",
    gradient: "from-blue-500 to-cyan-600",
    bgGlow: "bg-blue-500/[0.06]",
    span: "md:col-span-2",
    featured: false,
  },
];

const accentMap: Record<string, { icon: string; border: string; tag: string }> = {
  violet: { icon: "text-violet-400", border: "border-violet-500/20", tag: "bg-violet-500/10 text-violet-300" },
  gold: { icon: "text-brand-gold", border: "border-brand-gold/20", tag: "bg-brand-gold/10 text-brand-gold" },
  emerald: { icon: "text-emerald-400", border: "border-emerald-500/20", tag: "bg-emerald-500/10 text-emerald-300" },
  blue: { icon: "text-blue-400", border: "border-blue-500/20", tag: "bg-blue-500/10 text-blue-300" },
};

export default function PillarsSection() {
  return (
    <section id="pilares" className="relative py-28 md:py-40 bg-surface-2 noise-bg overflow-hidden">
      <div className="absolute -top-1/3 left-1/3 w-[700px] h-[700px] rounded-full bg-brand-gold/[0.02] blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4"
          >
            A solução
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Os 4 Pilares da Comunidade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-text-secondary max-w-xl mx-auto"
          >
            Um ecossistema completo que te mantém atualizado, suportado e
            conectado com quem está na vanguarda.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const colors = accentMap[pillar.accent];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
                className={`group relative glass-card rounded-2xl overflow-hidden transition-colors duration-500 ${pillar.span} ${
                  pillar.featured ? "p-8 md:p-10" : "p-7"
                }`}
              >
                {/* Top accent line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Background glow */}
                {pillar.featured && (
                  <div className={`absolute -bottom-1/3 -right-1/4 w-[300px] h-[300px] rounded-full ${pillar.bgGlow} blur-[100px] transition-opacity duration-700 opacity-30 group-hover:opacity-60`} />
                )}

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${pillar.bgGlow} flex items-center justify-center mb-5 border ${colors.border}`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>

                  <h3 className={`font-[var(--font-display)] font-semibold text-text-primary mb-3 ${
                    pillar.featured ? "text-xl md:text-2xl" : "text-lg"
                  }`}>
                    {pillar.title}
                  </h3>

                  <p className={`text-text-secondary leading-relaxed mb-4 ${
                    pillar.featured ? "text-sm md:text-base" : "text-sm"
                  }`}>
                    {pillar.description}
                  </p>

                  <span className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${colors.tag}`}>
                    {pillar.detail}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
