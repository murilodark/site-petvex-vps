import React, { useState } from "react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(0); // pre-expand first item

  const toggleFaq = (idx: number) => {
    setOpenId(openId === idx ? null : idx);
  };

  const faqItems = [
    {
      question: "Preciso de CNPJ?",
      answer: "Não. Você pode começar hoje mesmo utilizando apenas seu CPF. Quando seu negócio crescer, basta atualizar seu cadastro para CNPJ de forma simples e sem perder nenhum dado ou histórico."
    },
    {
      question: "Preciso cadastrar cartão?",
      answer: "Não. Você não precisa cadastrar nenhum cartão de crédito ou forma de pagamento para iniciar seu teste gratuito. É sem compromisso."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, com certeza. O Petvex não tem contratos de fidelidade ou taxas de cancelamento. Você pode usar e cancelar quando quiser, sem burocracia."
    },
    {
      question: "Como funciona o teste?",
      answer: "Você tem 7 dias de acesso totalmente gratuito a todas as funcionalidades do Petvex. Seu ambiente é criado automaticamente na hora e você já pode começar a organizar seu negócio imediatamente."
    },
    {
      question: "O WhatsApp já está incluso?",
      answer: "Sim, os lembretes e confirmações automáticas de agendamento via WhatsApp já estão inclusos no seu plano, sem custos adicionais."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100 relative" id="faq">
      <Container size="sm">
        
        <SectionTitle
          badge="Dúvidas Frequentes"
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre o Petvex de forma rápida e transparente."
        />

        <div className="space-y-4 max-w-3xl mx-auto mt-12">
          {faqItems.map((item, idx) => {
            const isOpen = openId === idx;
            return (
              <Card
                key={idx}
                className={`overflow-hidden transition-all duration-300 border ${
                  isOpen ? "border-emerald-500/25 shadow-md shadow-emerald-500/5 bg-white" : "border-slate-200/60 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-bold text-slate-800 hover:text-slate-950 transition focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{item.question}</span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-transform duration-300 ${isOpen ? "bg-emerald-50 text-emerald-600 rotate-180" : "bg-slate-50 text-slate-400"}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50 font-medium">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default FaqSection;
