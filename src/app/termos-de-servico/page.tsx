import React, { useEffect } from "react";
import { updateDocumentSeo } from "../../lib/seo";
import { Container } from "../../components/ui/Container";
import { FileText, BookOpen, AlertTriangle, ShieldAlert, Scale, Info } from "lucide-react";
import { motion } from "motion/react";
import { TermsOfServiceContent } from "../../components/shared/TermsOfServiceContent";

export default function TermsOfServicePage() {
  useEffect(() => {
    updateDocumentSeo(
      "Termos de Serviço",
      "Leia os Termos de Serviço da Petvex. Conheça as regras de uso, cobrança, cancelamento e responsabilidades ao utilizar nossa plataforma SaaS."
    );
  }, []);

  return (
    <div className="pt-28 pb-20 bg-slate-50/40 relative min-h-screen font-sans">
      {/* Decorative gradient background blur */}
      <div className="absolute top-[15%] left-[-10%] w-[400px] h-[400px] bg-emerald-550/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-100 shadow-xl shadow-slate-900/5"
        >
          {/* Header */}
          <div className="border-b border-slate-100 pb-8 mb-8">
            <div className="flex items-center gap-2.5 text-emerald-600 mb-4">
              <FileText size={24} className="stroke-[2.5]" />
              <span className="font-display font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
                Regras de Uso & Condições
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Termos de Serviço
            </h1>
            <p className="mt-3 text-slate-500 text-sm flex items-center gap-2">
              <Info size={14} />
              <span>Última atualização: 26 de junho de 2026</span>
            </p>
          </div>

          <TermsOfServiceContent />
        </motion.div>
      </Container>
    </div>
  );
}
