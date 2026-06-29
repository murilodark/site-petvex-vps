import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "../../config/site.config";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { GradientBlob } from "../ui/GradientBlob";
import { MockupBrowser } from "../ui/MockupBrowser";
import { DashboardPreview } from "../shared/DashboardPreview";
import { MessageCircle, PlayCircle, ShieldCheck, Check } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50/40">
      
      {/* Decorative Blur Background Blobs */}
      <GradientBlob color="emerald" size="lg" className="-top-40 -left-20" />
      <GradientBlob color="cyan" size="lg" className="bottom-10 -right-20" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline Copy & Anchors */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/10"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-emerald-700 text-xs font-semibold font-display tracking-wide uppercase">
                {siteConfig.tagline}
              </span>
            </motion.div>

            {/* Giant Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 leading-tight tracking-tight text-glow"
            >
              {siteConfig.hero.headline}
            </motion.h1>

            {/* Subheading sentence */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {siteConfig.hero.subheadline}
            </motion.p>

            {/* Active CTAs row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate("/planos")}
                className="font-display font-bold text-sm tracking-wide px-8 py-3.5 rounded-full shadow-xl shadow-emerald-500/15 hover:shadow-emerald-500/30 group"
              >
                {siteConfig.hero.ctaPrimary}
                <PlayCircle size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-display font-bold transition border border-slate-200/80 py-3.5 hover:bg-slate-50 text-slate-705 px-7 rounded-full hover:text-slate-950 bg-white shadow-xs"
              >
                <MessageCircle size={18} className="mr-2 text-emerald-500 animate-pulse" />
                {siteConfig.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Security reassurance indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-5 mt-1 text-xs text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>14 dias grátis</span>
              </div>
              <span>•</span>
              <div>Sem cartão de crédito</div>
              <span>•</span>
              <div>Suporte VIP</div>
            </motion.div>

            {/* Visual Highlight Card: Start with CPF */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-2 p-5 bg-gradient-to-br from-white to-slate-50 border border-emerald-500/15 rounded-2xl shadow-md shadow-emerald-500/5 relative overflow-hidden"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400"></div>
              
              <h3 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2 mb-3">
                <span className="flex h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center text-xs font-black">✓</span>
                Você não precisa ter CNPJ para começar.
              </h3>
              <ul className="space-y-2">
                {[
                  "Cadastre-se utilizando apenas seu CPF.",
                  "Ideal para groomers e veterinários autônomos.",
                  "Organize seu negócio desde o primeiro cliente.",
                  "Quando abrir sua empresa, basta atualizar seu cadastro.",
                  "Sem burocracia."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-slate-600 font-sans leading-normal">
                    <Check size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* Right Column: High Fidelity Dashboard Device Frame mockup */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative radial lighting detrás del browser */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 to-cyan-400 rounded-3xl blur-2xl opacity-10"></div>
              
              <MockupBrowser url="app.petvex.com.br/dashboard">
                <DashboardPreview />
              </MockupBrowser>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
