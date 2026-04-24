"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Shield, Lock, RefreshCw, AlertTriangle, MessageCircle, Gift } from "lucide-react";
import { useTrackSection } from "../hooks/useTrackSection";
import { useCheckoutUrl } from "../hooks/useCheckoutUrl";

const included = [
  "Lives semanais com quem fatura milhões usando IA (52 por ano)",
  "7 trilhas com +20h de sistemas prontos pra copiar e implementar",
  "Suporte de especialistas que já resolveram o SEU tipo de problema",
  "100+ agentes de IA prontos pra copiar, colar e rodar no seu negócio",
  "Arsenal de 100+ ferramentas, prompts e templates testados em produção",
  "Conteúdo atualizado toda semana — nunca fica obsoleto",
  "Rede exclusiva de CEOs e empreendedores que usam IA pra faturar",
  "Biblioteca completa de gravações — assista quando e onde quiser",
  "Bônus: Curso Claude Code do zero ao avançado (Valor: R$497)",
];


export default function Pricing() {
  const trackRef = useTrackSection('pricing');
  const checkoutUrl = useCheckoutUrl();
  return (
    <section ref={trackRef} id="pricing" aria-labelledby="pricing-heading" className="relative py-24 md:py-32 bg-surface-0 noise-bg overflow-hidden">
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
            id="pricing-heading"
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

        {/* Scarcity callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-lg mx-auto mb-8 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-5 py-4 space-y-3"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary leading-relaxed">
              <span className="font-bold text-text-primary">Estamos em 117/120 vagas.</span>{" "}
              Limitamos a 120 membros para manter a qualidade do suporte individual.
              Quando lotarmos, a mensalidade sobe para R$147. Quem entrar agora tem{" "}
              <span className="font-bold text-brand-gold">assinatura congelada</span>{" "}
              no preço atual — para sempre.
            </p>
          </div>
          <div className="h-px bg-amber-500/15" />
          <div className="flex items-start gap-3">
            <Gift className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary leading-relaxed">
              <span className="font-semibold text-brand-gold">Bônus para os 3 últimos:</span>{" "}
              curso completo de{" "}
              <span className="font-bold text-text-primary">Claude Code: do zero ao avançado</span>{" "}
              — Valor: R$497.
            </p>
          </div>
        </motion.div>

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
              {/* Value stack */}
              <div className="space-y-2.5 mb-8">
                {[
                  { item: "Lives semanais com especialistas (52/ano)", value: "R$6.000" },
                  { item: "7 trilhas com +20h de sistemas prontos", value: "R$3.000" },
                  { item: "Suporte individual de especialistas", value: "R$2.400" },
                  { item: "100+ agentes e templates prontos", value: "R$1.500" },
                  { item: "Rede exclusiva de CEOs e empreendedores", value: "R$1.200" },
                  { item: "Atualizações semanais de conteúdo", value: "R$1.200" },
                ].map((row) => (
                  <div key={row.item} className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">{row.item}</span>
                    <span className="text-text-muted line-through ml-3 shrink-0">{row.value}/ano</span>
                  </div>
                ))}
                <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-text-primary">Valor total de mercado</span>
                  <span className="text-text-muted line-through">R$15.300/ano</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-10">
                <p className="text-text-muted text-xs tracking-wider uppercase mb-4">Seu investimento</p>
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

              {/* CTA */}
              <motion.a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ph-capture-attribute-cta="pricing_main_checkout"
                data-ph-capture-attribute-position="pricing_card"
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
                Garantir Minha Vaga Antes Que o Preço Suba
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

        {/* Support guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto mt-8 flex items-center justify-center gap-2.5 text-text-tertiary"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400/60" />
          <p className="text-xs">
            <span className="font-semibold text-text-secondary">Garantia de suporte</span>{" "}
            — todas as dúvidas respondidas. Sem tíquete perdido.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
