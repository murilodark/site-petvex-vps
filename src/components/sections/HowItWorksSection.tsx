import React from "react";
import { siteConfig } from "../../config/site.config";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { motion } from "motion/react";

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative">
      <Container size="lg">
        
        {/* Header Alignment */}
        <SectionTitle
          badge="Passo a Passo"
          title="Pronto em três etapas simples"
          subtitle="Implementação rápida e sem atritos para você começar a aproveitar o Petvex ainda hoje."
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          
          {/* Decorative connecting lines for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-dashed border-t-2 border-slate-200 border-dashed z-0"></div>

          {siteConfig.howItWorks.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-4 relative z-10"
            >
              {/* Step number disc */}
              <div className="w-14 h-14 rounded-2xl bg-slate-905 border border-slate-800 text-white font-display font-extrabold text-xl flex items-center justify-center shadow-lg shadow-slate-900/10">
                {step.step}
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-lg leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default HowItWorksSection;
