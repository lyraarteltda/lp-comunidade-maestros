"use client";
import { motion } from "framer-motion";
import { Video, BookOpen, Headphones, RefreshCw, Users, ArrowRight } from "lucide-react";
import { useTrackSection } from "../hooks/useTrackSection";
import { useCheckoutUrl } from "../hooks/useCheckoutUrl";

const pillars = [
  {
    icon: Video,
    title: "Lives Semanais com Quem Fatura Milhões com IA",
    description: "Não é teoria de professor — é estratégia de quem implementa. Toda semana, fundadores e especialistas convidados mostram exatamente o que estão usando pra gerar resultado com IA agora.",
    detail: "Todas ficam gravadas",
    accent: "violet",
    gradient: "from-violet-500 to-purple-600",
    bgGlow: "bg-violet-500/[0.06]",
    span: "md:col-span-2 lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    icon: BookOpen,
    title: "7 Trilhas de Sistemas Prontos pra Implementar",
    description: "De automação com n8n a vendas autônomas com agentes de IA. Cada trilha é um sistema que você copia, cola e roda no seu negócio.",
    detail: "+20h de conteúdo prático",
    accent: "gold",
    gradient: "from-brand-gold to-amber-600",
    bgGlow: "bg-brand-gold/[0.06]",
    span: "",
    featured: false,
  },
  {
    icon: Headphones,
    title: "Suporte de Quem Já Implementou na Prática",
    description: "Travou no webhook? Agente dando erro? Pergunta pra quem já resolveu esse exato problema — não pra um chatbot genérico.",
    detail: "Respostas reais em horas",
    accent: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/[0.06]",
    span: "",
    featured: false,
  },
  {
    icon: RefreshCw,
    title: "Conteúdo Que Envelhece? Aqui Não.",
    description: "O mercado muda toda semana — e o conteúdo da Comunidade acompanha. Novas ferramentas, agentes e automações entram antes de virar notícia.",
    detail: "Atualizado toda semana",
    accent: "blue",
    gradient: "from-blue-500 to-cyan-600",
    bgGlow: "bg-blue-500/[0.06]",
    span: "",
    featured: false,
  },
  {
    icon: Users,
    title: "Rede de CEOs e Empreendedores que Usam IA",
    description: "Não é grupo de curiosos — é uma rede de profissionais que usam IA pra faturar. Troque experiências, parcerias e atalhos com quem está no mesmo nível.",
    detail: "Networking de alto nível",
    accent: "rose",
    gradient: "from-rose-500 to-pink-600",
    bgGlow: "bg-rose-500/[0.06]",
    span: "",
    featured: false,
  },
];

const accentMap: Record<string, { icon: string; border: string; tag: string }> = {
  violet: { icon: "text-violet-400", border: "border-violet-500/20", tag: "bg-violet-500/10 text-violet-300" },
  gold: { icon: "text-brand-gold", border: "border-brand-gold/20", tag: "bg-brand-gold/10 text-brand-gold" },
  emerald: { icon: "text-emerald-400", border: "border-emerald-500/20", tag: "bg-emerald-500/10 text-emerald-300" },
  blue: { icon: "text-blue-400", border: "border-blue-500/20", tag: "bg-blue-500/10 text-blue-300" },
  rose: { icon: "text-rose-400", border: "border-rose-500/20", tag: "bg-rose-500/10 text-rose-300" },
};

export default function PillarsSection() {
  const trackRef = useTrackSection('pillars');
  const checkoutUrl = useCheckoutUrl();
  return (
    <section ref={trackRef} id="pilares" aria-labelledby="pilares-heading" className="relative py-24 md:py-32 bg-surface-2 noise-bg overflow-hidden">
      <div className="absolute -top-1/3 left-1/3 w-[700px] h-[700px] rounded-full bg-brand-gold/[0.02] blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4"
          >
            A solução
          </motion.p>
          <motion.h2
            id="pilares-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Os 5 Pilares da Comunidade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-text-secondary max-w-xl mx-auto"
          >
            Um ecossistema completo que te mantém atualizado, suportado e
            conectado com quem está na vanguarda.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const colors = accentMap[pillar.accent];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
                className={`group relative glass-card rounded-2xl overflow-hidden transition-colors duration-500 ${pillar.span} ${
                  pillar.featured ? "p-8 md:p-10 border-brand-gold/15" : "p-7"
                }`}
              >
                {/* Top accent line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Background glow */}
                {pillar.featured && (
                  <div className={`absolute -bottom-1/3 -right-1/4 w-[300px] h-[300px] rounded-full ${pillar.bgGlow} blur-[100px] transition-opacity duration-700 opacity-30 group-hover:opacity-60`} />
                )}

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${pillar.bgGlow} flex items-center justify-center mb-5 border ${colors.border}`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>

                  <h3 className={`font-[var(--font-display)] font-semibold text-text-primary mb-3 ${
                    pillar.featured ? "text-xl md:text-2xl" : "text-lg"
                  }`}>
                    {pillar.title}
                  </h3>

                  <p className={`text-text-secondary leading-relaxed mb-4 ${
                    pillar.featured ? "text-sm md:text-base" : "text-sm"
                  }`}>
                    {pillar.description}
                  </p>

                  <span className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${colors.tag}`}>
                    {pillar.detail}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ph-capture-attribute-cta="pillars_checkout"
            data-ph-capture-attribute-position="pillars"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="cta-shimmer inline-flex items-center gap-3 font-bold px-10 py-4 rounded-xl text-base shadow-lg shadow-brand-gold/15"
            style={{
              background: "linear-gradient(135deg, #F5A623 0%, #CC8400 100%)",
              color: "var(--color-surface-0)",
            }}
          >
            Quero Acesso a Tudo Isso — R$97/mês
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <p className="text-text-tertiary text-xs mt-3">
            Garantia de 7 dias · Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
}
