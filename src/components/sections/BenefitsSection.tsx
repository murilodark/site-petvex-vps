import React from "react";
import { siteConfig } from "../../config/site.config";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { FeatureIcon } from "../shared/FeatureIcon";
import { motion } from "motion/react";

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <Container size="lg">
        
        {/* Section title header */}
        <SectionTitle
          badge="Por que Petvex?"
          title="Simplifique sua rotina e tenha mais tempo para cuidar dos animais."
          subtitle="Menos tempo com burocracia, mais tempo fazendo o que você ama. Criado especialmente para quem atende pets todos os dias."
        />

        {/* Benefits Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.benefits.map((benefit, i) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card 
                hoverEffect
                className="p-6 h-full flex flex-col items-start gap-4 border border-slate-100 hover:border-emerald-500/10 shadow-sm"
              >
                {/* Icon Circle chassis */}
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-500/10 shrink-0">
                  <FeatureIcon name={benefit.iconName} className="text-emerald-600" size={24} />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
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
