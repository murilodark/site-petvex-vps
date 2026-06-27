import React from "react";
import { siteConfig } from "../../config/site.config";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { FeatureIcon } from "../shared/FeatureIcon";
import { motion } from "motion/react";

export const DifferentialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Visual embellishments */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="lg" className="relative z-10">
        
        {/* Title details */}
        <SectionTitle
          badge="Nossos Diferenciais"
          title="Por que somos a melhor escolha do varejo pet?"
          subtitle="Mais do que um simples banco de dados. Somos a inteligência e o motor que aceleram a produtividade da sua operação diária."
        />

        {/* Differentials Catalog columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.differentials.map((diff, i) => (
            <motion.div
              key={diff.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className="p-8 h-full flex flex-col items-center text-center gap-5 border border-slate-100 hover:border-slate-200/80 shadow-sm shadow-slate-100"
              >
                {/* Differential Accent Circle Chassis */}
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20">
                  <FeatureIcon name={diff.iconName} className="text-emerald-600 animate-pulse" size={26} />
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="font-display font-bold text-slate-900 text-lg leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                    {diff.description}
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

export default DifferentialsSection;
