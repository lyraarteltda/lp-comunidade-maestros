"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useTrackSection } from "../hooks/useTrackSection";
import { useScarcity } from "../hooks/useScarcity";

function buildFaqs(price: number) {
  return [
    {
      question: "Preciso saber programar?",
      answer: "Não. A Comunidade é feita para quem quer resultado rápido, não para desenvolvedores. Todo o conteúdo é focado em implementação prática — só tocamos em assuntos técnicos quando são realmente necessários para construir algo que gera resultado. Temos membros com mais de 70 anos de idade implementando tudo sem dificuldades. E se travar em algum ponto, nosso suporte técnico está disponível diariamente para te ajudar.",
    },
    {
      question: "Precisarei comprar outros produtos depois?",
      answer: "Não. Todo o conteúdo gravado — as 7 trilhas, o Curso de Claude Code, os 100+ agentes e templates, e todas as atualizações semanais — está incluído na sua assinatura. Não existe módulo travado ou curso extra pra desbloquear. Nossa proposta é formar uma comunidade que permaneça conosco no longo prazo, e por isso conseguimos cobrar um valor tão acessível por mês. Temos também um Clube de Negócios AI e programas de implementação para empresas, mas você não precisa adquirir nada disso para ter acesso a 100% dos cursos gravados, lives, suporte técnico ou espaços de interação.",
    },
    {
      question: "Por quanto tempo tenho acesso?",
      answer: `Enquanto sua assinatura estiver ativa, você tem acesso a tudo: as 7 trilhas, todas as lives (ao vivo e gravadas), suporte de especialistas, os 100+ agentes e templates, e todas as atualizações semanais. Não existe conteúdo travado ou módulo extra. Tudo está incluído nos R$${price}/mês.`,
    },
    {
      question: "As lives ficam gravadas?",
      answer: "Sim, todas. Temos uma biblioteca completa com todas as lives organizadas por tema. Se você perdeu a de terça, assiste no fim de semana. Se entrou agora, pode assistir todas as anteriores desde o lançamento. Muitos membros dizem que a biblioteca sozinha já vale a assinatura — são centenas de horas de estratégia prática.",
    },
    {
      question: "Como funciona o suporte?",
      answer: "Qualquer dúvida, dificuldade, trava ou bloqueio que você encontrar não vai parar o seu progresso. O suporte técnico está disponível 7 dias por semana para todos os membros — ninguém fica sem resposta. Diferente de cursos onde você paga, assiste e nunca mais tem com quem contar, aqui a lógica é outra: como a assinatura é mensal, o compromisso é entregar o melhor serviço possível para que você continue evoluindo e queira ficar. Seu avanço é a nossa prioridade.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, com um clique. Sem SAC, sem período mínimo, sem multa. Mas aqui vai o dado: nossa taxa de cancelamento é uma das mais baixas do mercado. Quando o conteúdo da semana já vale mais que a mensalidade, as pessoas ficam. Você não vai cancelar porque alguém travou o botão — vai ficar porque toda semana tem live nova, sistema novo, ferramenta nova.",
    },
    {
      question: "Tem garantia?",
      answer: `Garantia incondicional de 7 dias. Entre, explore tudo, assista às lives, converse no suporte, baixe os templates. Se em 7 dias você sentir que não é pra você, devolvemos 100% — sem perguntas, sem formulário, sem burocracia. Oferecemos essa garantia porque sabemos que quem entra e participa não sai. É um investimento de R$${price} com risco literalmente zero.`,
    },
  ];
}

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: 15 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`border-b border-white/[0.05] last:border-0 ${open ? "bg-white/[0.01]" : ""} transition-colors duration-300`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className={`text-sm md:text-base font-medium pr-6 transition-colors duration-200 ${
          open ? "text-brand-gold" : "text-text-primary group-hover:text-brand-gold"
        }`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-6 h-6 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center"
        >
          <Plus className={`w-3.5 h-3.5 transition-colors ${open ? "text-brand-gold" : "text-text-muted"}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-sm leading-relaxed pb-5 md:pb-6 pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const trackRef = useTrackSection('faq');
  const { price } = useScarcity();
  const faqs = buildFaqs(price);
  return (
    <section ref={trackRef} id="faq" aria-labelledby="faq-heading" className="relative py-20 md:py-28 bg-surface-1">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
            Tire suas dúvidas
          </p>
          <h2
            id="faq-heading"
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            Perguntas Frequentes
          </h2>
        </div>

        <div className="glass-card rounded-2xl px-6 md:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
