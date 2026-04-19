"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, HelpCircle, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const painPoints = [
  {
    icon: Clock,
    title: "Cursos estáticos",
    description: "Você aprende algo, e em semanas já está desatualizado. IA muda rápido demais para conteúdo congelado.",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: HelpCircle,
    title: "Sem suporte",
    description: "Travou em uma automação? Em um agente? Ninguém pra perguntar. Google e fórum não resolvem o seu contexto.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: AlertTriangle,
    title: "Ferramentas mudam toda semana",
    description: "Novas IAs, novos frameworks, novas APIs. Impossível acompanhar sozinho e saber o que realmente importa.",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: Users,
    title: "Comunidades genéricas",
    description: "Sem foco, sem profundidade, sem resultado. Um mar de conteúdo raso que não move o ponteiro do seu negócio.",
    gradient: "from-yellow-500/20 to-red-500/20",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32 bg-surface-1">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
            O problema
          </p>
          <h2
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Aprender IA Sozinho É Uma Corrida
            <br className="hidden sm:block" />
            <span className="text-text-tertiary"> Que Você Nunca Vai Ganhar</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative glass-card glass-card-hover rounded-2xl p-7 transition-all duration-300"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-text-tertiary group-hover:text-brand-gold transition-colors" />
                </div>
                <h3 className="font-[var(--font-display)] font-semibold text-lg text-text-primary mb-2">
                  {point.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
