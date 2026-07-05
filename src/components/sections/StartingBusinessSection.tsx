import React from "react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface StartingBusinessSectionProps {
  onOpenSignup?: (plan: any) => void;
}

export const StartingBusinessSection: React.FC<StartingBusinessSectionProps> = ({ onOpenSignup }) => {
  const specialties = [
    {
      icon: "✂",
      title: "Groomers",
      description: "Organize sua agenda de cortes por porte e pelagem, envie lembretes automáticos e tenha total controle dos seus lucros do dia.",
      color: "bg-amber-500/10 text-amber-600 border-amber-500/20"
    },
    {
      icon: "🛁",
      title: "Banho e tosa",
      description: "Controle a escala de tosadores, acompanhe comissões sem erro e evite filas no atendimento com agendamentos precisos.",
      color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20"
    },
    {
      icon: "🩺",
      title: "Veterinários autônomos",
      description: "Acesse prontuários, receitas, vacinas e todo o histórico clínico dos pacientes direto do celular, em qualquer lugar.",
      color: "bg-rose-500/10 text-rose-600 border-rose-500/20"
    },
    {
      icon: "🏪",
      title: "Pequenos pet shops",
      description: "Integre as vendas de produtos do balcão à sua prestação de serviços e controle seu estoque e financeiro sem complicação.",
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    }
  ];

  const handleCpfClick = () => {
    if (onOpenSignup) {
      onOpenSignup({
        id: 1,
        name: "Petvex Completo",
        slug: "petvex-completo",
        monthly_price: 1
      });
    } else {
      const pricingEl = document.getElementById("precos");
      if (pricingEl) {
        pricingEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <React.Fragment>
      {/* SECTION: Para quem é */}
      <section className="py-12 sm:py-20 bg-white relative overflow-hidden border-b border-slate-100" id="especialidades">
        <Container size="lg">
          <SectionTitle
            badge="Para quem é"
            title="Feito para quem trabalha com pets todos os dias"
            subtitle="Nossas soluções foram planejadas para se adaptar perfeitamente ao seu modelo de negócio pet."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
            {specialties.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <Card
                  className="p-5 sm:p-6 h-full flex flex-col items-center text-center gap-4 border border-slate-200/60 bg-white hover:border-emerald-500/25 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-inner ${card.color} border`}>
                    {card.icon}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-black text-slate-900 text-sm sm:text-base leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                      {card.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION: Comece com CPF */}
      <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-100 relative" id="comece-com-cpf">
        <Container size="md">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm text-left flex flex-col md:flex-row items-center gap-8">
            
            <div className="flex-1 flex flex-col gap-4 sm:gap-5">
              <span className="inline-flex self-start items-center gap-1.5 text-[10px] bg-emerald-100 border border-emerald-300 text-emerald-800 px-3 py-1 rounded-full font-black uppercase font-display tracking-wider">
                Sem Burocracia
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-950 leading-tight">
                Ainda não tem CNPJ? Comece com CPF.
              </h2>
              
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                Você pode começar a utilizar o Petvex hoje mesmo utilizando apenas seu CPF. Quando seu negócio crescer, basta atualizar seu cadastro para CNPJ.
              </p>

              {/* Bullet points exactly as requested */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
                <div className="flex items-center gap-2 text-xs text-slate-850 font-black">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>✔ Ideal para autônomos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-850 font-black">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>✔ Sem burocracia</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-850 font-black">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>✔ Atualização simples para CNPJ</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto flex justify-center">
              <button
                onClick={handleCpfClick}
                className="inline-flex items-center justify-center font-display font-black text-xs sm:text-sm uppercase tracking-wide px-8 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl transition duration-300 gap-2 cursor-pointer shadow-md w-full md:w-auto"
              >
                Começar agora
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default StartingBusinessSection;
