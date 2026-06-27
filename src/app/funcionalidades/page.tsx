import React, { useState, useEffect } from "react";
import { updateDocumentSeo } from "../../lib/seo";
import { siteConfig } from "../../config/site.config";
import { getWhatsappLink } from "../../lib/whatsapp";
import { FeatureIcon } from "../../components/shared/FeatureIcon";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Search, Scissors, Heart, DollarSign, Settings, CornerDownRight } from "lucide-react";
import { motion } from "motion/react";

export default function FeaturesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "estetica" | "clinica" | "financeiro" | "operacao">("all");

  useEffect(() => {
    updateDocumentSeo("Funcionalidades", "Conheça em detalhes todas as 14 ferramentas de gestão e automação do Petvex.");
  }, []);

  // Filter features based on search query or categories
  const filteredFeatures = siteConfig.features.filter((feat) => {
    const matchesSearch = 
      feat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      feat.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    if (activeCategory === "all") return true;
    
    // Categorize tags logically
    if (activeCategory === "estetica") {
      return ["f3", "f9", "f10"].includes(feat.id); // Agenda, Banho, Histórico
    }
    if (activeCategory === "clinica") {
      return ["f2", "f4", "f11", "f12"].includes(feat.id); // Prontuário, Vacinas, Vet, Upload
    }
    if (activeCategory === "financeiro") {
      return ["f6", "f7", "f8"].includes(feat.id); // PDV, Financeiro, Relatórios
    }
    if (activeCategory === "operacao") {
      return ["f1", "f5", "f13", "f14"].includes(feat.id); // Clientes, Estoque, Multiusuário, Dash
    }
    
    return true;
  });

  return (
    <div className="pt-28 pb-20 bg-slate-50/40 relative min-h-screen font-sans">
      
      {/* Background blobs for premium depth */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-emerald-550/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="lg">
        
        {/* Banner header and search index */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-display text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
            Catálogo Completo
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mt-4 tracking-tight leading-tight">
            Ferramentas pensadas para o seu crescimento
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Elimine planilhas antigas e cadernos rasgados. O Petvex centraliza todos os setores da recepção até o faturamento em fluxos integrados e super simples.
          </p>

          {/* Interactive Search Grid */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por banho, prontuário, comissão, etc..."
                className="w-full bg-white border border-slate-250 rounded-2xl pl-12 pr-4 py-3 text-sm text-slate-850 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-xs placeholder:text-slate-400"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 hover:bg-slate-200 text-slate-500 rounded-xl text-xs font-bold focus:outline-none"
              >
                Limpar Busca
              </button>
            )}
          </div>

          {/* Filters category tabs row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display cursor-pointer transition border ${
                activeCategory === "all"
                  ? "bg-slate-900 border-slate-900 text-white"
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-650"
              }`}
            >
              🚀 Ver Todas ({siteConfig.features.length})
            </button>
            <button
              onClick={() => setActiveCategory("estetica")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display cursor-pointer transition border flex items-center gap-1.5 ${
                activeCategory === "estetica"
                  ? "bg-emerald-650 border-emerald-600 text-white"
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-650"
              }`}
            >
              <Scissors size={14} />
              Estética & Banho
            </button>
            <button
              onClick={() => setActiveCategory("clinica")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display cursor-pointer transition border flex items-center gap-1.5 ${
                activeCategory === "clinica"
                  ? "bg-emerald-650 border-emerald-600 text-white"
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-650"
              }`}
            >
              <Heart size={14} />
              Clínica & Veterinário
            </button>
            <button
              onClick={() => setActiveCategory("financeiro")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display cursor-pointer transition border flex items-center gap-1.5 ${
                activeCategory === "financeiro"
                  ? "bg-emerald-650 border-emerald-600 text-white"
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-650"
              }`}
            >
              <DollarSign size={14} />
              PDV & Financeiro
            </button>
            <button
              onClick={() => setActiveCategory("operacao")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display cursor-pointer transition border flex items-center gap-1.5 ${
                activeCategory === "operacao"
                  ? "bg-emerald-650 border-emerald-600 text-white"
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-650"
              }`}
            >
              <Settings size={14} />
              Op. & Retaguarda
            </button>
          </div>
        </div>

        {/* Features list items grid */}
        {filteredFeatures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feat) => (
              <Card
                key={feat.id}
                className="p-8 h-full bg-white border border-slate-200/50 hover:border-emerald-500/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Block with subtle tag badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-emerald-50 border border-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center">
                      <FeatureIcon name={feat.iconName} className="text-emerald-700" size={24} />
                    </div>
                    <Badge variant="secondary" className="text-[10px] uppercase font-display font-medium px-2 py-0.5 border-slate-100">
                      ID: {feat.id}
                    </Badge>
                  </div>

                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-1.5 text-xs text-emerald-650 font-bold font-display">
                  <CornerDownRight size={14} />
                  <span>Configuração e ativação inclusa no onboarding</span>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center shadow-sm max-w-2xl mx-auto">
            <span className="text-4xl">🔍</span>
            <h3 className="font-display font-bold text-slate-900 text-xl mt-4">
              Nenhuma funcionalidade encontrada
            </h3>
            <p className="text-slate-500 text-sm mt-1.5 leading-relaxed max-w-md mx-auto">
              Experimente alterar os termos de pesquisa ou resetar os filtros para encontrar o módulo de gestão desejado.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-6 font-display text-xs"
            >
              Ver Todas Funcionalidades
            </Button>
          </div>
        )}

        {/* Final call to action box inside funcionalidades */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
            <span className="text-emerald-400 text-xs tracking-wider uppercase font-semibold">Suporte Ilimitado</span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold">Ficou curioso de como funciona mais a fundo?</h2>
            <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
              Temos vídeos guiados e demonstramos cada recurso rodando com dados reais por WhatsApp em chamadas de vídeo rápidas ou em uma conta sandbox.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full sm:w-auto mt-2">
              <a
                href={getWhatsappLink("Olá! Gostaria de ver uma demonstração por vídeo das 14 funcionalidades do Petvex.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-display font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl shadow-lg transition duration-200"
              >
                Vídeo das Funcionalidades
              </a>
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-display font-semibold text-xs border border-slate-700 hover:bg-slate-800 text-slate-205 px-5 py-3 rounded-xl transition duration-200"
              >
                Suporte de Plantão
              </a>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
