import React from "react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { Calendar, DollarSign, Heart } from "lucide-react";
import { motion } from "motion/react";

export const BenefitsSection: React.FC = () => {
  const benefitsList = [
    {
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
      title: "Menos faltas",
      description: "Lembretes e confirmações automáticas pelo WhatsApp reduzem faltas em até 80%, evitando horários vazios na sua agenda.",
      bg: "bg-emerald-50"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
      title: "Caixa organizado",
      description: "Acompanhe suas vendas, receitas, despesas e comissões de forma simples, garantindo clareza financeira todos os dias.",
      bg: "bg-emerald-50"
    },
    {
      icon: <Heart className="w-6 h-6 text-emerald-600" />,
      title: "Histórico completo",
      description: "Tenha todas as informações do pet, prontuários, vacinas e contatos do tutor sempre à mão, economizando tempo no atendimento.",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white border-b border-slate-100" id="beneficios">
      <Container size="lg">
        {/* Section Title */}
        <SectionTitle
          badge="O que muda na sua rotina"
          title="O que muda na sua rotina com o Petvex"
          subtitle="Menos papel. Menos planilhas. Mais controle para cuidar melhor dos pets e do seu negócio."
        />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {benefitsList.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col items-start gap-4 border border-slate-200/60 bg-white hover:border-emerald-500/25 hover:shadow-md transition-all duration-300">
                {/* Icon Sphere */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${benefit.bg} border border-emerald-500/10`}>
                  {benefit.icon}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-black text-slate-900 text-base sm:text-lg leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                    {benefit.description}
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

export default BenefitsSection;
