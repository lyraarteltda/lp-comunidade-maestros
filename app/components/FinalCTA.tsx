"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, TrendingUp, Clock } from "lucide-react";
import { useTrackSection } from "../hooks/useTrackSection";
import { useCheckoutUrl } from "../hooks/useCheckoutUrl";

export default function FinalCTA() {
  const trackRef = useTrackSection('final_cta');
  const checkoutUrl = useCheckoutUrl();
  return (
    <section ref={trackRef} aria-labelledby="final-cta-heading" className="relative py-24 md:py-32 bg-surface-0 overflow-hidden">
      {/* Dramatic ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-brand-gold/[0.06] blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/[0.08] border border-brand-gold/15 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-[11px] font-bold text-brand-gold tracking-[0.1em] uppercase">
              Sua vez de agir
            </span>
          </div>

          <h2
            id="final-cta-heading"
            className="font-[var(--font-display)] font-extrabold tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
          >
            <span className="gradient-text-white-strong">Semana Que Vem Tem Live Nova.</span>
            <br />
            <span className="gradient-text-gold">Você Vai Estar Dentro ou Vai Ficar Sabendo Depois?</span>
          </h2>

          <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto" style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}>
            Enquanto você pensa, os membros da comunidade já estão implementando
            o sistema desta semana. Cada semana que passa é uma live, uma ferramenta
            e uma oportunidade que você não recupera.
          </p>

          {/* Urgency indicators */}
          <div className="flex items-center justify-center gap-6 mb-10 text-text-tertiary">
            <div className="flex items-center gap-2 text-xs">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Acesso imediato</span>
            </div>
            <div className="h-3 w-px bg-white/[0.08]" />
            <div className="flex items-center gap-2 text-xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>3 vagas com preço atual</span>
            </div>
            <div className="h-3 w-px bg-white/[0.08] hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <Users className="w-3.5 h-3.5 text-brand-gold" />
              <span>Garantia 7 dias</span>
            </div>
          </div>

          <motion.a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ph-capture-attribute-cta="final_cta_checkout"
            data-ph-capture-attribute-position="final_cta"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="cta-shimmer inline-flex items-center gap-3 font-bold px-12 py-5 rounded-xl text-lg shadow-xl shadow-brand-gold/25"
            style={{
              background: "linear-gradient(135deg, #F5A623 0%, #CC8400 100%)",
              color: "var(--color-surface-0)",
              animation: "pulse-gold 3s infinite",
            }}
          >
            Entrar Agora e Receber Meu Primeiro Sistema
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <p className="text-text-muted text-xs mt-6">
            Garantia incondicional de 7 dias &middot; Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
}
