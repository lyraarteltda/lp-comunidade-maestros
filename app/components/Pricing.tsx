"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Shield, Lock, RefreshCw } from "lucide-react";

const CHECKOUT_URL = "https://pay.onprofit.com.br/M5Ene7El?off=ZNpmS2";

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
    <section id="pricing" className="relative py-28 md:py-44 bg-surface-0 noise-bg overflow-hidden">
      {/* Dramatic background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-brand-gold/[0.05] blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4"
          >
            Faça parte
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            <span className="gradient-text-white">Invista na Sua</span>{" "}
            <span className="gradient-text-gold">Evolução</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-text-secondary max-w-xl mx-auto"
          >
            Acesso completo a tudo que a Comunidade Maestros da IA oferece.
            Um investimento que se paga no primeiro mês.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-lg mx-auto"
        >
          {/* Outer glow */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-brand-gold/20 via-brand-gold/5 to-transparent blur-xl" />
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-brand-gold/25 to-transparent opacity-50" />

          <div className="relative bg-surface-3/80 backdrop-blur-xl rounded-2xl border border-brand-gold/20 overflow-hidden">
            {/* Top badge */}
            <div className="bg-gradient-to-r from-brand-gold to-amber-500 py-3 text-center">
              <span className="text-surface-0 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Comunidade Maestros da IA
              </span>
            </div>

            <div className="p-8 md:p-10">
              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-text-muted text-sm mb-3">Investimento mensal</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-text-muted text-lg">R$</span>
                  <span className="font-[var(--font-display)] font-extrabold text-5xl md:text-6xl text-text-primary tracking-tight">
                    97
                  </span>
                  <span className="text-text-muted text-sm">/mês</span>
                </div>
                <p className="text-text-muted text-xs mt-2">
                  Preço especial de lançamento
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8" />

              {/* Included list */}
              <div className="space-y-3.5 mb-8">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-gold" />
                    </div>
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="cta-shimmer w-full flex items-center justify-center gap-3 bg-brand-gold text-surface-0 font-bold py-4 rounded-xl text-lg shadow-lg shadow-brand-gold/20"
                style={{ animation: "pulse-gold 3s infinite" }}
              >
                Garantir Minha Vaga
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-5 mt-6 text-text-muted">
                <div className="flex items-center gap-1.5 text-xs">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Garantia 7 dias</span>
                </div>
                <div className="h-3 w-px bg-white/[0.08]" />
                <div className="flex items-center gap-1.5 text-xs">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="h-3 w-px bg-white/[0.08] hidden sm:block" />
                <div className="hidden sm:flex items-center gap-1.5 text-xs">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
