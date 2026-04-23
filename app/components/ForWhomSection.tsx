"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTrackSection } from "../hooks/useTrackSection";

const forWhom = [
  "Empreendedores que querem usar IA pra escalar sem aumentar equipe",
  "Profissionais que precisam se manter relevantes no mercado de IA",
  "Donos de negócio que querem automatizar processos repetitivos",
  "Quem já tentou aprender IA sozinho e se perdeu no excesso de informação",
  "Quem quer implementar IA no negócio mas não sabe por onde começar",
];

const notForWhom = [
  "Quem busca fórmula mágica de dinheiro fácil sem implementar nada",
  "Quem quer apenas teoria acadêmica sobre inteligência artificial",
  "Quem não está disposto a dedicar pelo menos 2h por semana pra implementar",
];

export default function ForWhomSection() {
  const trackRef = useTrackSection('for_whom');
  return (
    <section ref={trackRef} id="para-quem" aria-labelledby="for-whom-heading" className="relative py-20 md:py-28 bg-surface-2 noise-bg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4"
          >
            Transparência total
          </motion.p>
          <motion.h2
            id="for-whom-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Para Quem É (e Para Quem Não É)
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* For whom */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-7 md:p-8"
          >
            <h3 className="font-[var(--font-display)] font-semibold text-lg text-emerald-400 mb-6 flex items-center gap-2">
              <Check className="w-5 h-5" />
              A Comunidade é pra você se...
            </h3>
            <div className="space-y-4">
              {forWhom.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not for whom */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-7 md:p-8"
          >
            <h3 className="font-[var(--font-display)] font-semibold text-lg text-red-400 mb-6 flex items-center gap-2">
              <X className="w-5 h-5" />
              Não é pra você se...
            </h3>
            <div className="space-y-4">
              {notForWhom.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
