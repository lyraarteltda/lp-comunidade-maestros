"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
    <div className="shrink-0 w-[320px] md:w-[360px] glass-card rounded-2xl p-6 mx-2.5 hover:border-brand-gold/15 transition-colors duration-300">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
        ))}
      </div>

      <p className="text-text-primary text-sm leading-relaxed mb-5">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} shrink-0 shadow-lg shadow-black/20`}>
          <div className="w-full h-full rounded-full bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div>
          <p className="text-text-primary text-sm font-semibold">{t.name}</p>
          <p className="text-text-muted text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 6);
  const row2 = testimonials.slice(6);

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
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-5">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-1 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-1 to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: [0, -(row1.length * 380)] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
        >
          {[...row1, ...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-1 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-1 to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: [-(row2.length * 380), 0] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
        >
          {[...row2, ...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
