"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, Clock, CheckCircle2, Shield, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function StatCounter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.from(ref.current, {
      textContent: 0,
      duration: 1.8,
      delay,
      ease: "power2.out",
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  });

  return (
    <div className="text-center">
      <div className="font-[var(--font-display)] font-bold text-xl text-text-primary">
        <span ref={ref}>{value}</span>{suffix}
      </div>
      <div className="text-text-muted text-[11px] mt-0.5">{label}</div>
    </div>
  );
}

export default function SupportSection() {
  return (
    <section className="relative py-16 md:py-24 bg-surface-1 noise-bg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: chat mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Glow behind */}
            <div className="absolute -inset-4 rounded-3xl bg-emerald-500/[0.04] blur-[40px]" />

            <div className="relative glass-card rounded-2xl p-5 md:p-6 space-y-3.5 border-emerald-500/10">
              {/* Header */}
              <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-text-tertiary text-xs font-medium">Suporte Maestros — Online</span>
              </div>

              {/* Question */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">M</span>
                </div>
                <div className="bg-surface-3 rounded-xl rounded-tl-sm px-4 py-2.5 max-w-[280px]">
                  <p className="text-text-primary text-[13px] leading-relaxed">
                    Como faço pra conectar meu agente no WhatsApp com n8n? Está dando erro de webhook.
                  </p>
                  <p className="text-text-muted text-[10px] mt-1">14:32</p>
                </div>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-gold to-amber-600 shrink-0 flex items-center justify-center">
                  <span className="text-surface-0 text-[10px] font-bold">E</span>
                </div>
                <div className="bg-brand-gold/[0.06] border border-brand-gold/15 rounded-xl rounded-tr-sm px-4 py-2.5 max-w-[320px]">
                  <p className="text-text-primary text-[13px] leading-relaxed">
                    Opa! Isso acontece quando o webhook não está registrado. Faz o seguinte:
                    <br />1. Abre o n8n → Webhook node
                    <br />2. Copia a URL de produção
                    <br />3. Cola no Evolution API...
                  </p>
                  <p className="text-emerald-400 text-[10px] mt-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Resolvido
                  </p>
                </div>
              </div>

              {/* Resolved */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">M</span>
                </div>
                <div className="bg-surface-3 rounded-xl rounded-tl-sm px-4 py-2.5">
                  <p className="text-text-primary text-[13px]">
                    Funcionou!! Era exatamente isso 🚀
                  </p>
                </div>
              </div>
            </div>

            {/* Stats below chat */}
            <div className="mt-4 glass-card rounded-xl p-4 grid grid-cols-3 gap-4 divide-x divide-white/[0.06]">
              <StatCounter value={98} suffix="%" label="Respostas rápidas" delay={0} />
              <StatCounter value={100} suffix="%" label="Humanos reais" delay={0.15} />
              <StatCounter value={7} suffix="/7" label="Dias por semana" delay={0.3} />
            </div>
          </motion.div>

          {/* Right: content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-emerald-400 mb-4">
                Suporte real
              </p>
              <h2
                className="font-[var(--font-display)] font-bold tracking-[-0.02em] mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                <span className="gradient-text-white">Nunca Mais</span>
                <br />
                <span className="gradient-text-white">Fique Travado</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8 max-w-md">
                Dúvidas respondidas por quem já implementou — especialistas
                que vivem IA todos os dias. Sem robô, sem FAQ genérica,
                sem esperar semanas.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Respostas rápidas de quem já implementou", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { icon: Shield, text: "Especialistas dedicados, não voluntários", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { icon: MessageSquare, text: "Suporte ativo todos os dias", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { icon: Clock, text: "Contexto do SEU negócio, não resposta genérica", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3.5"
                    >
                      <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <span className="text-text-primary text-sm font-medium">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
