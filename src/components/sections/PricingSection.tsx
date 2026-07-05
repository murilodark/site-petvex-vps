import React from "react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Check, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  onOpenSignup?: (plan: any) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenSignup }) => {
  const planFeatures = [
    "Agenda",
    "Clientes e pets",
    "Serviços",
    "Produtos",
    "PDV",
    "Estoque",
    "Financeiro",
    "Suporte"
  ];

  const handleCtaClick = () => {
    if (onOpenSignup) {
      onOpenSignup({
        id: 1,
        name: "Petvex Completo",
        slug: "petvex-completo",
        monthly_price: 1
      });
    } else {
      window.open(getWhatsappLink("Olá! Quero conhecer o Petvex Completo e iniciar meu teste gratuito de 14 dias."), "_blank");
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-slate-950 text-white relative overflow-hidden" id="precos">
      {/* Visual background glowing orbs */}
      <div className="absolute top-[30%] left-[-15%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] bg-teal-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="lg" className="relative z-10">
        
        <SectionTitle
          badge="Preço Justo"
          title="Um plano simples para começar"
          subtitle="Todos os recursos do Petvex em um único plano, sem taxas ocultas e sem fidelidade."
          titleColor="text-emerald-400"
        />

        <div className="max-w-3xl mx-auto bg-slate-900/40 border border-slate-800 p-6 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl relative mt-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Left Panel: Plan description and pricing */}
            <div className="md:col-span-5 flex flex-col justify-between text-left border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-10">
              <div>
                <span className="text-emerald-400 text-[10px] sm:text-[11px] font-black uppercase tracking-wider font-display bg-emerald-500/10 px-2.5 py-1 rounded-md">
                  Oferta de lançamento
                </span>
                
                <h3 className="text-2xl font-display font-black text-white mt-4 leading-none">
                  Petvex Completo
                </h3>
                
                <p className="text-slate-400 text-xs mt-3 leading-relaxed font-semibold">
                  Ideal para groomers, veterinários autônomos e pequenos pet shops gerenciarem sua agenda, caixa e estoque sem complicação.
                </p>

                {/* Highlights logo acima do preço */}
                <div className="mt-5 space-y-1.5 text-xs text-slate-300 font-bold pl-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✔</span>
                    <span>Teste grátis por 7 dias</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✔</span>
                    <span>Sem cartão</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✔</span>
                    <span>Sem fidelidade</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✔</span>
                    <span>Tudo incluso</span>
                  </div>
                </div>

                {/* Price representation */}
                <div className="mt-5 flex flex-col justify-center bg-slate-950 p-5 rounded-2xl border border-slate-800/85 shadow-inner">
                  <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider">Valor do investimento</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-slate-400 font-display font-extrabold text-sm">R$</span>
                    <span className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight leading-none">
                      1,00
                    </span>
                    <span className="text-slate-500 font-display text-xs sm:text-sm font-semibold">
                      /mês
                    </span>
                  </div>
                  
                  {/* Required notice exactly as specified */}
                  <p className="text-[10px] text-emerald-400 font-bold mt-3 leading-normal">
                    Valor promocional por tempo limitado para os primeiros usuários.
                  </p>
                </div>
              </div>

              {/* Security trust badge */}
              <div className="mt-4 md:mt-6 flex items-center gap-2 text-slate-400 text-[11px]">
                <span className="text-base">🔒</span>
                <span className="font-semibold leading-relaxed">Conexão segura. Seus dados estão protegidos.</span>
              </div>
            </div>

            {/* Right Panel: Features Checklist & Direct CTA Conversion */}
            <div className="md:col-span-7 flex flex-col justify-between text-left md:pl-6 pt-2 md:pt-0">
              <div>
                <h4 className="text-xs font-display font-black uppercase text-slate-400 tracking-wider mb-4">
                  O que está incluso:
                </h4>
                <ul className="grid grid-cols-2 gap-3">
                  {planFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span className="leading-tight text-slate-300 font-bold">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Giant Conversion Call to Action */}
              <div className="mt-8 border-t border-slate-800 pt-6">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full font-display font-black text-xs sm:text-sm tracking-wide py-4 sm:py-5 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-xl shadow-emerald-500/20 group cursor-pointer border border-emerald-400/20"
                  id="pricing-cta-contratar"
                  onClick={handleCtaClick}
                >
                  Criar conta grátis
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                {/* Requested microcopy exactly */}
                <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-slate-400 font-black tracking-wide uppercase font-display">
                  <span>Teste grátis por 7 dias • Sem cartão • Sem fidelidade</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default PricingSection;
