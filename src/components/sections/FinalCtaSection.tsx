import React from "react";
import { siteConfig } from "../../config/site.config";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

interface FinalCtaSectionProps {
  onNavigate: (path: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Decorative ambient indicators */}
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="md" className="relative z-10 text-center flex flex-col items-center gap-6">
        
        {/* Sparkle icon */}
        <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center">
          <Sparkles size={24} className="animate-spin" style={{ animationDuration: "15s" }} />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight tracking-tight max-w-2xl">
          Pronto para simplificar sua rotina e focar nos animais?
        </h2>

        {/* Subhead details */}
        <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
          Assuma as rédeas do seu agendamento, reduza as faltas dos tutores e tenha total controle do seu banho e tosa, consultório ou pequeno pet shop.
        </p>

        {/* Conversion Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4 w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              onNavigate("/planos");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display font-extrabold text-sm tracking-wide gap-2 group py-4 cursor-pointer"
          >
            Começar Gratuitamente
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>

          <a
            href={getWhatsappLink("Olá, quero conhecer o Petvex e entender como ele pode ajudar na gestão do meu negócio pet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-display font-semibold transition border border-slate-800 py-4 hover:bg-slate-800 text-slate-200 px-6 rounded-xl hover:text-white"
          >
            <MessageCircle size={18} className="mr-2 text-emerald-400" />
            Falar pelo WhatsApp
          </a>
        </div>

        {/* Footnote indicators */}
        <p className="text-xs text-slate-500 mt-2 font-medium">
          Ativação imediata sem fidelidade • Suporte de instalação integral incluso.
        </p>

      </Container>
    </section>
  );
};

export default FinalCtaSection;
