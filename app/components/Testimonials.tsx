"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Rodrigo",
    quote: "Formação bem clara e prática. Comunidade WhatsApp muito forte — o suporte faz diferença real.",
    gradient: "from-violet-500 to-purple-600",
    rotate: "-1deg",
  },
  {
    name: "Lucas",
    quote: "Melhor aquisição que poderia ter feito. Mentoria excelente, conteúdo direto ao ponto.",
    gradient: "from-blue-500 to-cyan-600",
    rotate: "0.5deg",
  },
  {
    name: "Alice",
    quote: "Muito mais do que esperava. IA como aliada estratégica — mudou a forma como eu enxergo meu negócio.",
    gradient: "from-emerald-500 to-teal-600",
    rotate: "-0.5deg",
  },
  {
    name: "Bruno",
    quote: "Processo que levava uma semana, hoje em 4-6 horas com automação. O ROI se pagou no primeiro mês.",
    gradient: "from-amber-500 to-orange-600",
    rotate: "1deg",
  },
  {
    name: "Ricardo",
    quote: "Metade do que eu achava impossível, hoje faço em casa e no trabalho. A comunidade abriu minha cabeça.",
    gradient: "from-rose-500 to-pink-600",
    rotate: "-0.8deg",
  },
  {
    name: "André",
    quote: "Pouco tempo de curso, já vendi projetos com ticket médio considerável. O arsenal de ferramentas é absurdo.",
    gradient: "from-cyan-500 to-blue-600",
    rotate: "0.3deg",
  },
  {
    name: "Rodrigo Eve",
    quote: "Se eu consegui, você vai conseguir também. A comunidade te carrega quando você trava.",
    gradient: "from-brand-gold to-amber-600",
    rotate: "-0.3deg",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-32 bg-surface-1">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
            Quem já faz parte
          </p>
          <h2
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Resultados Reais de Membros Reais
          </h2>
        </AnimatedSection>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="break-inside-avoid glass-card rounded-2xl p-6 transition-all duration-300 hover:border-brand-gold/20"
              style={{ transform: `rotate(${t.rotate})` }}
            >
              <Quote className="w-6 h-6 text-brand-gold/30 mb-4" />

              <p className="text-text-primary text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {/* Gradient orb avatar */}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                  <span className="text-white text-xs font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-text-primary text-sm font-semibold">{t.name}</p>
                  <p className="text-text-muted text-xs">Membro da Comunidade</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
