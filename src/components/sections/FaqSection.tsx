import React, { useState } from "react";
import { siteConfig } from "../../config/site.config";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("f1"); // pre-expand first item

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-slate-50/50 border-t border-slate-100 relative">
      <Container size="sm">
        
        {/* Header content Titles */}
        <SectionTitle
          badge="Dúvidas Frequentes"
          title="Perguntas Frequentes"
          subtitle="Ainda tem alguma dúvida sobre o funcionamento do Petvex? Veja as respostas para as principais dúvidas dos nossos clientes."
        />

        {/* Dynamic Accordion list */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {siteConfig.faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <Card
                key={item.id}
                className={`overflow-hidden transition-all duration-300 border ${
                  isOpen ? "border-emerald-500/20 shadow-md shadow-emerald-500/5 bg-white" : "border-slate-200/60 bg-white"
                }`}
              >
                {/* Header question button */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-bold text-slate-800 hover:text-slate-900 transition focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-transform duration-300 ${isOpen ? "bg-emerald-50 text-emerald-600 rotate-180" : "bg-slate-50 text-slate-400"}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Animated content expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
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
