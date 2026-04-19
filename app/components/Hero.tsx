"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-0 noise-bg">
      {/* Mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] rounded-full bg-amber-500/[0.06] blur-[150px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-orange-500/[0.04] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/[0.03] blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-40 lg:py-48 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/[0.1] border border-brand-gold/20 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs font-semibold text-brand-gold tracking-wide uppercase">
              Comunidade Exclusiva
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-[var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
        >
          <span className="gradient-text-white">A Comunidade Que</span>
          <br />
          <span className="gradient-text-white">Te Mantém na </span>
          <span className="gradient-text-gold">Vanguarda da IA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-text-secondary leading-relaxed mb-10"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
        >
          Acesso contínuo a lives semanais, +20 horas de conteúdo estruturado,
          suporte diário de especialistas e atualizações constantes. Tudo que
          você precisa para dominar IA — sem ficar pra trás.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="cta-shimmer inline-flex items-center gap-3 bg-brand-gold text-surface-0 font-bold px-8 py-4 rounded-xl text-lg"
            style={{ animation: "pulse-gold 3s infinite" }}
          >
            Quero Fazer Parte
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <a
            href="#pilares"
            className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary transition-colors text-sm font-medium"
          >
            Conheça os pilares
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-8 text-text-muted"
        >
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
            Lives toda semana
          </div>
          <div className="h-3 w-px bg-white/[0.08]" />
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-brand-gold/80" />
            +20h de conteúdo
          </div>
          <div className="h-3 w-px bg-white/[0.08] hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-blue-400/80" />
            Suporte diário
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-1 to-transparent" />
    </section>
  );
}
