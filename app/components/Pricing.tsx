"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const included = [
  "Lives semanais estratégicas ao vivo",
  "+20 horas de conteúdo estruturado",
  "7 trilhas de conhecimento prático",
  "Suporte diário de especialistas",
  "Atualizações constantes de conteúdo",
  "Comunidade exclusiva de membros",
  "Acesso a gravações de todas as lives",
  "Arsenal de 100+ ferramentas e templates",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-40 bg-surface-0 noise-bg">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.04] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
            Faça parte
          </p>
          <h2
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Faça Parte da Comunidade
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Acesso completo a tudo que a Comunidade Maestros da IA oferece.
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-lg mx-auto"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-brand-gold/20 via-brand-gold/5 to-transparent blur-xl" />

          <div className="relative glass-card rounded-2xl border-brand-gold/20 overflow-hidden">
            {/* Top badge */}
            <div className="bg-gradient-to-r from-brand-gold to-amber-500 py-2.5 text-center">
              <span className="text-surface-0 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Comunidade Maestros da IA
              </span>
            </div>

            <div className="p-8 md:p-10">
              {/* Placeholder price */}
              <div className="text-center mb-8">
                <p className="text-text-muted text-sm mb-2">Investimento mensal</p>
                <div className="font-[var(--font-display)] font-bold text-5xl text-text-primary mb-1">
                  Em breve
                </div>
                <p className="text-text-muted text-sm">
                  Preço especial de lançamento
                </p>
              </div>

              {/* Included list */}
              <div className="space-y-3 mb-8">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="cta-shimmer w-full flex items-center justify-center gap-3 bg-brand-gold text-surface-0 font-bold py-4 rounded-xl text-lg"
                style={{ animation: "pulse-gold 3s infinite" }}
              >
                Quero Fazer Parte
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <p className="text-center text-text-muted text-xs mt-4">
                Cancele quando quiser. Sem burocracia.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
