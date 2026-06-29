import React from "react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { motion } from "motion/react";

export const StartingBusinessSection: React.FC = () => {
  const cards = [
    {
      icon: "🐶",
      title: "Groomers",
      description: "Organize seus atendimentos.",
      color: "bg-amber-500/10 text-amber-600 border-amber-500/20"
    },
    {
      icon: "🩺",
      title: "Veterinários",
      description: "Gerencie consultas e clientes.",
      color: "bg-rose-500/10 text-rose-600 border-rose-500/20"
    },
    {
      icon: "🛁",
      title: "Banho e Tosa",
      description: "Controle toda sua rotina.",
      color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20"
    },
    {
      icon: "🏪",
      title: "Pequenos Pet Shops",
      description: "Venda, estoque e financeiro.",
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="lg" className="relative z-10">
        
        {/* Section title header */}
        <SectionTitle
          badge="Feito para quem está começando"
          title="Sem CNPJ? Sem problemas. Comece pequeno, cresça com a gente."
          subtitle="Muitos profissionais do mercado pet iniciam suas atividades antes mesmo de abrir uma empresa. O Petvex foi desenvolvido para acompanhar essa jornada. Você pode começar utilizando apenas seu CPF e, quando seu negócio crescer, atualizar seus dados para CNPJ sem perder nenhuma informação."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card
                className="p-6 h-full flex flex-col items-center text-center gap-4 border border-slate-200/60 bg-white hover:border-emerald-500/25 hover:shadow-md transition-all duration-300"
              >
                {/* Custom Styled Emoji Sphere */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-sm ${card.color} border`}>
                  {card.icon}
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display font-extrabold text-slate-900 text-base">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default StartingBusinessSection;
