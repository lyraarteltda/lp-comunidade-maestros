"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rodrigo",
    role: "Empresário",
    quote: "Formação bem clara e prática. Comunidade WhatsApp muito forte — o suporte faz diferença real. Já apliquei os sistemas no meu negócio.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Lucas",
    quote: "Melhor aquisição que poderia ter feito. Conteúdo direto ao ponto e suporte que realmente resolve.",
    role: "Consultor",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Alice",
    role: "Empreendedora",
    quote: "Muito mais do que esperava. IA como aliada estratégica — mudou a forma como eu enxergo meu negócio. O suporte é absurdo de bom.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Bruno",
    role: "Gestor de Tráfego",
    quote: "Processo que levava uma semana, hoje em 4-6 horas com automação. O ROI se pagou no primeiro mês.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Ricardo",
    role: "Analista de Dados",
    quote: "Metade do que eu achava impossível, hoje faço em casa e no trabalho. A comunidade abriu minha cabeça.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "André",
    role: "Freelancer",
    quote: "Pouco tempo de curso, já vendi projetos com ticket médio considerável. O arsenal de ferramentas é absurdo.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Rodrigo Eve",
    role: "Membro desde Jan/2026",
    quote: "Se eu consegui, você vai conseguir também. A comunidade te carrega quando você trava.",
    gradient: "from-brand-gold to-amber-600",
  },
  {
    name: "Fernanda",
    role: "CEO · E-commerce",
    quote: "Automatizei meu funil inteiro em 2 semanas. Hoje meu time de 3 faz o trabalho de 10 — tudo com os sistemas da comunidade.",
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    name: "Carlos",
    role: "Dono de Agência",
    quote: "Comecei sem saber nada de IA. Hoje entrego projetos de automação com ticket médio de R$5k. A comunidade mudou meu negócio.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    name: "Mariana",
    role: "Consultora de Marketing",
    quote: "O conteúdo é atualizado toda semana — não tem como ficar pra trás. As lives são um diferencial absurdo.",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    name: "Pedro",
    role: "Desenvolvedor",
    quote: "Os agentes prontos pra copiar e colar economizaram semanas de desenvolvimento. Qualidade de produção real.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Juliana",
    role: "Empreendedora Digital",
    quote: "O suporte é o que faz a diferença. Não é FAQ genérica — são especialistas que entendem o contexto do seu negócio.",
    gradient: "from-sky-500 to-blue-600",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="shrink-0 w-[300px] md:w-[340px] rounded-2xl p-6 mx-2 border border-white/[0.04] bg-surface-2/40 backdrop-blur-sm hover:border-white/[0.08] transition-all duration-500 group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-brand-gold/80 text-brand-gold/80" />
          ))}
        </div>
        <Quote className="w-4 h-4 text-white/[0.06] group-hover:text-white/[0.1] transition-colors duration-500" />
      </div>

      <p className="text-text-secondary text-[13px] leading-relaxed mb-5 line-clamp-4">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.gradient} shrink-0 opacity-80`}>
          <div className="w-full h-full rounded-full bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div>
          <p className="text-text-primary text-sm font-medium">{t.name}</p>
          <p className="text-text-muted text-[11px]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const allCards = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="relative py-20 md:py-28 bg-surface-1 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold/80 mb-4"
          >
            Quem já faz parte
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
          >
            Resultados Reais de Membros Reais
          </motion.h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-surface-1 via-surface-1/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-surface-1 via-surface-1/80 to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: [0, -(testimonials.length * 356)] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" } }}
        >
          {allCards.map((t, i) => (
            <TestimonialCard key={`t-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
