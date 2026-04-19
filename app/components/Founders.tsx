"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const founders = [
  {
    initials: "AE",
    name: "Arthur Endo",
    role: "Co-founder",
    gradient: "from-brand-gold via-amber-500 to-orange-600",
    bio: "Doutor Honoris Causa, pioneiro em IA aplicada a negócios. Músico que virou empreendedor de IA — saiu de R$2.300/mês dando aula de violão para R$2.5 milhões em 15 meses orquestrando agentes de IA.",
  },
  {
    initials: "LZ",
    name: "Lyria Zoccal",
    role: "Co-founder",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    bio: "Consultora Enterprise, especialista em IA aplicada a processos corporativos e ERP/SAP. Transforma operações complexas em sistemas inteligentes que rodam no piloto automático.",
  },
];

export default function Founders() {
  return (
    <section className="relative py-24 md:py-32 bg-surface-2 noise-bg overflow-hidden">
      <div className="absolute -bottom-1/3 -left-1/4 w-[700px] h-[700px] rounded-full bg-brand-gold/[0.03] blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
            Quem está por trás
          </p>
          <h2
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Dois Não-Programadores.
            <br />
            <span className="gradient-text-gold">R$2.5 Milhões em 15 Meses.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Saíram de um curso de violão com R$2.300/mês para construir uma empresa de IA
            que fatura milhões — sem escrever uma linha de código. Orquestrando agentes
            inteligentes, não programando.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:border-white/[0.1]"
            >
              {/* Gradient orb avatar */}
              <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center mb-6 shadow-lg shadow-brand-gold/10`}>
                <span className="text-white text-xl font-bold">{founder.initials}</span>
              </div>

              <h3 className="font-[var(--font-display)] font-bold text-xl text-text-primary">
                {founder.name}
              </h3>
              <p className="text-brand-gold text-sm font-medium mb-4">{founder.role}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{founder.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="glass-card inline-block rounded-xl px-6 py-3 text-sm text-text-secondary italic">
            &ldquo;Nenhum dos dois sabia programar. Provamos que IA é sobre
            estratégia, não sobre código.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
