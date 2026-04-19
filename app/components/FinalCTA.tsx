"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-surface-0 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-gold/[0.05] blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2
            className="font-[var(--font-display)] font-bold tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            <span className="gradient-text-white">O Futuro É de</span>
            <br />
            <span className="gradient-text-gold">Quem Age Agora</span>
          </h2>

          <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto text-lg">
            A cada semana que passa, novas ferramentas surgem, novas estratégias
            são validadas e novas oportunidades aparecem. Quem está dentro,
            aproveita. Quem está fora, fica pra trás.
          </p>

          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="cta-shimmer inline-flex items-center gap-3 bg-brand-gold text-surface-0 font-bold px-10 py-5 rounded-xl text-lg"
            style={{ animation: "pulse-gold 3s infinite" }}
          >
            Quero Fazer Parte da Comunidade
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <p className="text-text-muted text-sm mt-6">
            Junte-se a centenas de profissionais que já estão dominando IA.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
