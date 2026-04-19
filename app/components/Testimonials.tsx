"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rodrigo",
    role: "Empresário",
    quote: "Formação bem clara e prática. Comunidade WhatsApp muito forte — o suporte faz diferença real. Já apliquei os sistemas no meu negócio.",
    gradient: "from-violet-500 to-purple-600",
    stars: 5,
  },
  {
    name: "Lucas",
    quote: "Melhor aquisição que poderia ter feito. Mentoria excelente, conteúdo direto ao ponto.",
    role: "Consultor",
    gradient: "from-blue-500 to-cyan-600",
    stars: 5,
  },
  {
    name: "Alice",
    role: "Empreendedora",
    quote: "Muito mais do que esperava. IA como aliada estratégica — mudou a forma como eu enxergo meu negócio. O suporte é absurdo de bom.",
    gradient: "from-emerald-500 to-teal-600",
    stars: 5,
  },
  {
    name: "Bruno",
    role: "Gestor de Tráfego",
    quote: "Processo que levava uma semana, hoje em 4-6 horas com automação. O ROI se pagou no primeiro mês.",
    gradient: "from-amber-500 to-orange-600",
    stars: 5,
  },
  {
    name: "Ricardo",
    role: "Analista de Dados",
    quote: "Metade do que eu achava impossível, hoje faço em casa e no trabalho. A comunidade abriu minha cabeça.",
    gradient: "from-rose-500 to-pink-600",
    stars: 5,
  },
  {
    name: "André",
    role: "Freelancer",
    quote: "Pouco tempo de curso, já vendi projetos com ticket médio considerável. O arsenal de ferramentas é absurdo.",
    gradient: "from-cyan-500 to-blue-600",
    stars: 5,
  },
  {
    name: "Rodrigo Eve",
    role: "Membro desde Jan/2026",
    quote: "Se eu consegui, você vai conseguir também. A comunidade te carrega quando você trava.",
    gradient: "from-brand-gold to-amber-600",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-36 bg-surface-1 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4"
          >
            Quem já faz parte
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Resultados Reais de Membros Reais
          </motion.h2>
        </div>

        {/* Masonry grid with varied rotation */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => {
            const rotation = ["-0.8deg", "0.4deg", "-0.3deg", "0.7deg", "-0.5deg", "0.2deg", "-0.6deg"][i];
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{
                  rotate: 0,
                  scale: 1.02,
                  transition: { duration: 0.2, type: "spring", stiffness: 300 },
                }}
                className="break-inside-avoid mb-4 md:mb-5 glass-card rounded-2xl p-6 transition-colors duration-300 hover:border-brand-gold/15 group"
                style={{ transform: `rotate(${rotation})` }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                <Quote className="w-5 h-5 text-brand-gold/20 mb-3" />

                <p className="text-text-primary text-sm leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  {/* Gradient orb avatar — abstract, not letter */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} shrink-0 shadow-lg shadow-black/20`}>
                    <div className="w-full h-full rounded-full bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
