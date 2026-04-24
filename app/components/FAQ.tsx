"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { useTrackSection } from "../hooks/useTrackSection";

const faqs = [
  {
    question: "Preciso saber programar?",
    answer: "Não. O Arthur é músico. A Lyria é administradora. 80% dos membros nunca escreveram uma linha de código. Tudo que ensinamos é feito pra ser implementado por não-programadores — com ferramentas no-code, templates prontos e tutoriais passo a passo. Se você sabe usar WhatsApp, consegue implementar o que ensinamos.",
  },
  {
    question: "Qual a diferença da Comunidade para a Formação?",
    answer: "A Formação Maestros da IA é um programa intensivo de 10 semanas que custa R$3.000 — é o mergulho profundo pra quem quer dominar IA do zero. A Comunidade (R$97/mês) é o acesso contínuo: lives semanais, suporte, atualizações e networking. São complementares, não substitutos. Muitos membros fazem a Formação primeiro e entram na Comunidade pra continuar evoluindo. Outros começam pela Comunidade porque querem testar o nível antes de investir na Formação.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "Enquanto sua assinatura estiver ativa, você tem acesso a tudo: as 7 trilhas, todas as lives (ao vivo e gravadas), suporte de especialistas, os 100+ agentes e templates, e todas as atualizações semanais. Não existe conteúdo travado ou módulo extra. Tudo está incluído nos R$97/mês.",
  },
  {
    question: "As lives ficam gravadas?",
    answer: "Sim, todas. Temos uma biblioteca completa com todas as lives organizadas por tema. Se você perdeu a de terça, assiste no fim de semana. Se entrou agora, pode assistir todas as anteriores desde o lançamento. Muitos membros dizem que a biblioteca sozinha já vale a assinatura — são centenas de horas de estratégia prática.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "Você posta sua dúvida na comunidade e nossa equipe responde — geralmente em poucas horas, não em dias. A diferença: quem responde já implementou exatamente o que você está tentando fazer. Travou no n8n? Quem responde já montou 50 automações no n8n. Agente dando erro? Quem responde já construiu dezenas de agentes. Não é suporte genérico — é mentoria disfarçada de suporte.",
  },
  {
    question: "E se eu já fiz a Formação?",
    answer: "A Formação te deu a fundação. A Comunidade te dá a evolução. Os sistemas são diferentes — a Formação ensina o framework, a Comunidade entrega sistemas novos toda semana que você implementa em cima do que aprendeu. Pense assim: a Formação é o diploma, a Comunidade é o laboratório onde você continua praticando com suporte.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, com um clique. Sem SAC, sem período mínimo, sem multa. Mas aqui vai o dado: nossa taxa de cancelamento é uma das mais baixas do mercado. Quando o conteúdo da semana já vale mais que a mensalidade, as pessoas ficam. Você não vai cancelar porque alguém travou o botão — vai ficar porque toda semana tem live nova, sistema novo, ferramenta nova.",
  },
  {
    question: "Tem garantia?",
    answer: "Garantia incondicional de 7 dias. Entre, explore tudo, assista às lives, converse no suporte, baixe os templates. Se em 7 dias você sentir que não é pra você, devolvemos 100% — sem perguntas, sem formulário, sem burocracia. Oferecemos essa garantia porque sabemos que quem entra e participa não sai. É um investimento de R$97 com risco literalmente zero.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
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
  return (
    <section ref={trackRef} id="faq" aria-labelledby="faq-heading" className="relative py-20 md:py-28 bg-surface-1">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4"
          >
            Tire suas dúvidas
          </motion.p>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            Perguntas Frequentes
          </motion.h2>
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
