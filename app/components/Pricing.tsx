"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Shield, Lock, RefreshCw, Clock } from "lucide-react";

const CHECKOUT_URL = "https://pay.onprofit.com.br/M5Ene7El?off=ZNpmS2";

const included = [
  "Lives semanais ao vivo com fundadores e especialistas convidados",
  "+20h de sistemas prontos para implementar no seu negócio",
  "7 trilhas completas: de automação a vendas autônomas com IA",
  "Suporte rápido com quem já faturou milhões usando IA",
  "Conteúdo atualizado toda semana — acompanha o ritmo do mercado",
  "Rede exclusiva de CEOs e empreendedores que usam IA na prática",
  "Biblioteca completa de gravações — assista quando e onde quiser",
  "Arsenal de 100+ ferramentas, prompts e templates testados",
  "100+ agentes de IA prontos pra copiar, colar e rodar",
];

const comingSoon = [
  "Curso exclusivo de Claude Code (em breve — só pros próximos 10)",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-44 bg-surface-0 noise-bg overflow-hidden">
      {/* Layered background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-gold/[0.04] blur-[200px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-600/[0.03] blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-orange-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
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
          {/* Multi-layer outer glow */}
          <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-b from-brand-gold/15 via-amber-500/5 to-transparent blur-2xl" />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-brand-gold/20 via-brand-gold/5 to-transparent" />

          <div className="relative rounded-2xl overflow-hidden" style={{ background: "linear-gradient(180deg, rgba(28, 35, 51, 0.95) 0%, rgba(12, 16, 24, 0.98) 100%)" }}>
            {/* Premium top accent — thin gold line */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

            {/* Top badge */}
            <div className="relative py-4 text-center" style={{ background: "linear-gradient(180deg, rgba(245, 166, 35, 0.08) 0%, transparent 100%)" }}>
              <span className="text-brand-gold text-[11px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Comunidade Maestros da IA
              </span>
            </div>

            <div className="p-8 md:p-10">
              {/* Price */}
              <div className="text-center mb-10">
                <p className="text-text-muted text-xs tracking-wider uppercase mb-4">Investimento mensal</p>
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-text-tertiary text-lg font-medium">R$</span>
                  <span className="font-[var(--font-display)] font-extrabold text-5xl md:text-6xl tracking-tight gradient-text-gold">
                    97
                  </span>
                  <span className="text-text-muted text-sm">/mês</span>
                </div>
                <p className="text-brand-gold/60 text-xs mt-3 font-medium tracking-wide">
                  Preço especial de lançamento
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent mb-8" />

              {/* Included list */}
              <div className="space-y-3.5 mb-6">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/[0.07] border border-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-gold" />
                    </div>
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Coming soon */}
              <div className="space-y-3.5 mb-10 pt-4 border-t border-white/[0.04]">
                {comingSoon.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-3 h-3 text-violet-400" />
                    </div>
                    <span className="text-violet-300/90 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="cta-shimmer w-full flex items-center justify-center gap-3 font-bold py-4 rounded-xl text-lg shadow-xl shadow-brand-gold/15"
                style={{
                  background: "linear-gradient(135deg, #F5A623 0%, #CC8400 100%)",
                  color: "var(--color-surface-0)",
                  animation: "pulse-gold 3s infinite",
                }}
              >
                Garantir Minha Vaga
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-5 mt-7 text-text-muted">
                <div className="flex items-center gap-1.5 text-[11px]">
                  <Shield className="w-3.5 h-3.5 text-brand-gold/40" />
                  <span>Garantia 7 dias</span>
                </div>
                <div className="h-3 w-px bg-white/[0.06]" />
                <div className="flex items-center gap-1.5 text-[11px]">
                  <Lock className="w-3.5 h-3.5 text-brand-gold/40" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="h-3 w-px bg-white/[0.06] hidden sm:block" />
                <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
                  <RefreshCw className="w-3.5 h-3.5 text-brand-gold/40" />
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
