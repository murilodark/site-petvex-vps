import React from "react";
import { motion } from "motion/react";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { GradientBlob } from "../ui/GradientBlob";
import { AppScreenshotGallery } from "../shared/AppMedia";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (path: string) => void;
  onOpenSignup?: (plan: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenSignup }) => {
  const handleCtaClick = () => {
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
    <section className="relative pt-12 pb-10 sm:pt-20 sm:pb-16 overflow-hidden bg-slate-50/50">
      
      {/* Decorative Ambient Blobs */}
      <GradientBlob color="emerald" size="lg" className="-top-36 -left-16" />
      <GradientBlob color="cyan" size="lg" className="bottom-8 -right-16" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Direct and Punchy CRO Copy */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 text-left">
            
            {/* Action Highlight Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-500/20 shadow-sm"
            >
              <Sparkles size={12} className="text-emerald-600 animate-pulse" />
              <span className="text-emerald-800 text-[10px] sm:text-[11px] font-black font-display uppercase tracking-wider">
                Inicie Hoje Mesmo com seu CPF
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-950 leading-tight tracking-tight"
            >
              Você cuida dos animais. <br className="block mt-1" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 font-extrabold block mt-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                O Petvex cuida da gestão.
              </span>
            </motion.h1>

            {/* Short Objective Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-semibold"
            >
              Agenda, clientes, pets, estoque, vendas e financeiro em um único sistema para groomers, veterinários autônomos e pequenos pet shops.
            </motion.p>

            {/* Primary & Secondary Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-1"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleCtaClick}
                className="font-display font-black text-xs sm:text-sm uppercase tracking-wide px-8 py-4 sm:py-4.5 rounded-xl shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 group cursor-pointer text-center flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
                id="hero-cta-primary"
              >
                Criar conta grátis
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleCtaClick}
                className="font-display font-black uppercase transition border border-slate-300 py-3.5 sm:py-4 hover:bg-slate-50 text-slate-800 px-7 rounded-xl hover:text-slate-950 bg-white shadow-sm text-xs tracking-wide cursor-pointer text-center flex items-center justify-center"
                id="hero-cta-secondary"
              >
                Teste grátis por 7 dias
              </Button>
            </motion.div>

            {/* Micro-Copy: 4 small distinct highlights with check icon below CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mt-2 max-w-lg text-slate-600 font-bold text-xs"
            >
              <div className="flex items-center gap-1.5 pl-1">
                <span className="text-emerald-500 font-bold shrink-0">✅</span>
                <span>Teste grátis por 7 dias</span>
              </div>
              <div className="flex items-center gap-1.5 pl-1">
                <span className="text-emerald-500 font-bold shrink-0">✅</span>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-1.5 pl-1">
                <span className="text-emerald-500 font-bold shrink-0">✅</span>
                <span>Não precisa de CNPJ</span>
              </div>
              <div className="flex items-center gap-1.5 pl-1">
                <span className="text-emerald-500 font-bold shrink-0">✅</span>
                <span>Ambiente criado automaticamente</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High Fidelity Dashboard Device Frame mockup */}
          <div className="lg:col-span-6 w-full mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              {/* Decorative lighting detrás de las screenshots */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 to-cyan-400 rounded-3xl blur-2xl opacity-10"></div>
              
              <AppScreenshotGallery
                folder="dashboard"
                device="all"
                autoPlay
                delay={3500}
                showDots
                showArrows={false}
                loop
              />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
