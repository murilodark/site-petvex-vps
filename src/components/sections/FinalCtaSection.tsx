import React from "react";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";

interface FinalCtaSectionProps {
  onNavigate: (path: string) => void;
  onOpenSignup?: (plan: any) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate, onOpenSignup }) => {
  const handlePrimaryClick = () => {
    if (onOpenSignup) {
      onOpenSignup({
        id: 1,
        name: "Petvex Completo",
        slug: "petvex-completo",
        monthly_price: 1
      });
    } else {
      onNavigate("/planos");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Decorative ambient indicators */}
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="md" className="relative z-10 text-center flex flex-col items-center gap-6">
        
        {/* Sparkle icon */}
        <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center">
          <Sparkles size={24} className="animate-spin" style={{ animationDuration: "15s" }} />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black leading-tight tracking-tight max-w-2xl">
          Pronto para organizar seu negócio pet?
        </h2>

        {/* Subhead details */}
        <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
          Comece gratuitamente em poucos minutos e veja como o Petvex pode transformar sua rotina.
        </p>

        {/* Conversion Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2 w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={handlePrimaryClick}
            className="font-display font-black text-xs sm:text-sm uppercase tracking-wide gap-2 py-4 cursor-pointer"
          >
            Criar conta grátis
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>

          <a
            href={getWhatsappLink("Olá, quero conhecer o Petvex e entender como ele pode ajudar na gestão do meu negócio pet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-display font-black text-xs sm:text-sm uppercase tracking-wide transition border border-slate-800 py-4 hover:bg-slate-800 text-slate-200 px-6 rounded-xl hover:text-white"
          >
            <MessageCircle size={16} className="mr-2 text-emerald-400" />
            Falar pelo WhatsApp
          </a>
        </div>

        {/* Footnote indicators */}
        <p className="text-[10px] sm:text-xs text-slate-500 mt-2 font-bold uppercase tracking-wider flex items-center gap-1.5 flex-wrap justify-center">
          <span>Teste grátis por 7 dias</span>
          <span>•</span>
          <span>Sem cartão de crédito</span>
          <span>•</span>
          <span>Não precisa de CNPJ</span>
        </p>

      </Container>
    </section>
  );
};

export default FinalCtaSection;
