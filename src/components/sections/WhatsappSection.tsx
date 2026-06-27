import React from "react";
import { siteConfig } from "../../config/site.config";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { MessageSquare, Clock, ShieldCheck, Smile } from "lucide-react";
import { motion } from "motion/react";

export const WhatsappSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <Container size="lg">
        
        <Card className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 border-none shadow-2xl relative overflow-hidden">
          
          {/* Background decorative vector */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left text column info */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <span className="text-emerald-400 font-display text-xs font-bold uppercase tracking-widest bg-emerald-800/40 border border-emerald-500/20 px-3.5 py-1.5 rounded-full self-start">
                Atendimento Rápido
              </span>

              <h2 className="text-2xl sm:text-4xl font-display font-black leading-tight tracking-tight text-white max-w-xl">
                Prefere conversar diretamente com nossa equipe no WhatsApp?
              </h2>

              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-lg">
                Se você tem dúvidas sobre importação de dados, relatórios avançados ou prefere agendar uma chamada de apresentação, nossa equipe de suporte comercial está online para te atender em menos de 5 minutos.
              </p>

              {/* Support bullet badges */}
              <div className="flex flex-wrap gap-5 mt-2">
                <div className="flex items-center gap-1.5 text-xs text-emerald-150">
                  <Clock size={16} className="text-emerald-400" />
                  <span>Espera menor que 5 min</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-150">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>Migração Grátis Garantida</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-150">
                  <Smile size={16} className="text-emerald-400" />
                  <span>Tire dúvidas comerciais</span>
                </div>
              </div>

            </div>

            {/* Right button action column */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <a
                  href={getWhatsappLink("Olá, quero conhecer o Petvex e entender como ele pode ajudar na gestão do meu negócio pet.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-display font-extrabold text-base px-8 py-4 bg-white text-emerald-950 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 gap-3 hover:bg-emerald-50 w-full"
                >
                  <MessageSquare size={22} className="text-emerald-600 fill-emerald-600/10" />
                  Chamar no WhatsApp
                </a>
              </motion.div>
            </div>

          </div>

        </Card>

      </Container>
    </section>
  );
};

export default WhatsappSection;
