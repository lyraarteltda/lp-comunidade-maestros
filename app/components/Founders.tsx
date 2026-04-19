"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Users, Eye, TrendingUp, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    name: "Arthur Endo",
    role: "Co-founder & CEO",
    gradient: "from-brand-gold via-amber-500 to-orange-600",
    bio: "Pioneiro em IA aplicada a negócios. Doutor Honoris Causa e especialista no desenvolvimento de sistemas autônomos para médias e grandes empresas. Transformou uma das escolas de violão online que mais cresce no Brasil usando conhecimento potencializado por IA.",
    highlight: "Sistemas autônomos para empresas",
  },
  {
    name: "Lyria Zoccal",
    role: "Co-founder & CEO da Maestria e Lyria Academy",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    bio: "Formada em Administração de Empresas, com passagem por grandes empresas de SaaS como GoLive e TOTVS. CEO de duas empresas — Maestria e Lyria Academy — que juntas faturam mais de R$5M/ano. Especialista em soluções de IA para produção de conteúdo, bots de WhatsApp e agentes autônomos.",
    highlight: "CEO de 2 empresas · +R$5M/ano",
  },
];

const sharedAchievements = [
  { icon: Building2, text: "Projetos com Hostinger, Pipefy e outras empresas de tecnologia" },
  { icon: Eye, text: "De 0 a 4M+ de visualizações/mês e 170k+ seguidores em menos de 1 ano" },
  { icon: Users, text: "Criadores de uma comunidade com centenas de CEOs e donos de negócio" },
  { icon: Cpu, text: "Criadores da Galeria AI — sistema operacional proprietário com agentes autônomos gerindo departamentos inteiros em holdings bilionárias" },
];

export default function Founders() {
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!statsRef.current) return;
    const counters = statsRef.current.querySelectorAll(".founder-stat");
    counters.forEach((el) => {
      const target = Number(el.getAttribute("data-value"));
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          (el as HTMLElement).textContent = Math.round(obj.val).toLocaleString("pt-BR");
        },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });
  }, { scope: statsRef });

  return (
    <section className="relative py-28 md:py-40 bg-surface-2 noise-bg overflow-hidden">
      <div className="absolute -bottom-1/3 -left-1/4 w-[700px] h-[700px] rounded-full bg-brand-gold/[0.025] blur-[160px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/[0.02] blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
            Quem está por trás
          </p>
          <h2
            className="font-[var(--font-display)] font-bold tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            <span className="gradient-text-white">Referências em IA</span>
            <br />
            <span className="gradient-text-gold">Aplicada a Negócios</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            De projetos com grandes empresas de tecnologia à criação de um sistema operacional
            com agentes autônomos para holdings bilionárias.
          </p>
        </motion.div>

        {/* Stats bar */}
        <div ref={statsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8 mb-10 grid grid-cols-3 gap-6 divide-x divide-white/[0.06]"
          >
            <div className="text-center">
              <div className="font-[var(--font-display)] font-bold text-lg md:text-3xl gradient-text-gold">
                <span className="founder-stat" data-value="5000000">5.000.000</span>
              </div>
              <div className="text-text-muted text-xs mt-1">Faturamento anual em R$</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-display)] font-bold text-2xl md:text-3xl text-text-primary">
                <span className="founder-stat" data-value="170">170</span>k+
              </div>
              <div className="text-text-muted text-xs mt-1">Seguidores em &lt;1 ano</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-display)] font-bold text-2xl md:text-3xl text-text-primary">
                4M+
              </div>
              <div className="text-text-muted text-xs mt-1">Views/mês</div>
            </div>
          </motion.div>
        </div>

        {/* Founder cards */}
        <div className="space-y-6">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`glass-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 ${
                i === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="shrink-0">
                <div className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br ${founder.gradient} shadow-lg shadow-brand-gold/10 flex items-center justify-center`}>
                  <div className="w-full h-full rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              <div className={`flex-1 ${i === 1 ? "md:text-right" : ""}`}>
                <h3 className="font-[var(--font-display)] font-bold text-xl text-text-primary">
                  {founder.name}
                </h3>
                <p className="text-brand-gold text-sm font-medium mb-3">{founder.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{founder.bio}</p>
                <div className="inline-block glass-card-featured rounded-lg px-4 py-2">
                  <p className="text-brand-gold text-xs font-bold tracking-wide">{founder.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shared achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 glass-card rounded-2xl p-8 md:p-10"
        >
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-6 text-center">
            Juntos, eles construíram
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sharedAchievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-text-primary text-sm leading-relaxed">{item.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/10 blur-sm" />
            <p className="relative glass-card rounded-xl px-8 py-4 text-sm text-text-secondary italic">
              &ldquo;IA não é sobre código — é sobre estratégia. Quem entende isso
              primeiro, domina o mercado.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
