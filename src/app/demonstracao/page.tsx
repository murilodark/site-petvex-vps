import React, { useState, useEffect } from "react";
import { updateDocumentSeo } from "../../lib/seo";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { MockupBrowser } from "../../components/ui/MockupBrowser";
import { DashboardPreview } from "../../components/shared/DashboardPreview";
import { Check, ShieldAlert, Rocket, MessageSquare, Play, HelpCircle } from "lucide-react";

export default function DemoPage() {
  const [userName, setUserName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [phone, setPhone] = useState("");
  const [simulationActive, setSimulationActive] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    updateDocumentSeo("Solicitar Demonstração", "Faça um teste simulado grátis do Petvex de forma imediata.");
  }, []);

  const handleStartSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !phone) return;
    
    // Simulate successful activation of simulation sandbox on the page
    setStep(2);
    setSimulationActive(true);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50/40 relative min-h-screen font-sans">
      
      {/* Background decorations */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="lg">
        
        {/* Banner Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-display text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
            Sandbox Interativo
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mt-4 tracking-tight leading-tight">
            Crie sua conta de testes grátis em segundos
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Nada melhor do que testar o sistema na prática. Forneça os dados básicos e ative seu painel demonstrativo imediatamente em tempo real.
          </p>
        </div>

        {/* 2-Column layout structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Column 1: Sandbox Registration Form & benefits */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <Card className="p-8 bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 rounded-3xl flex flex-col justify-between">
              
              {step === 1 ? (
                <div className="space-y-5">
                  <div className="flex items-center gap-2 text-slate-900 font-display font-extrabold text-base sm:text-lg border-b border-slate-50 pb-3">
                    <span>⚡</span>
                    <span>Ativar Painel de Demonstração</span>
                  </div>
                  
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Preencha as informações do seu negócio para gerarmos uma conta sandbox com dados fictícios para você experimentar.
                  </p>

                  {/* HTML simulated Form */}
                  <form onSubmit={handleStartSimulation} className="space-y-4">
                    
                    <div className="flex flex-col gap-1 text-left">
                      <label htmlFor="user-name" className="text-xs font-semibold text-slate-700">Seu Nome *</label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Ex: Ana Clara"
                        className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1 text-left">
                      <label htmlFor="user-phone" className="text-xs font-semibold text-slate-700">Celular / WhatsApp *</label>
                      <input
                        id="user-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ex: (11) 99999-5555"
                        className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1 text-left">
                      <label htmlFor="clinic-name" className="text-xs font-semibold text-slate-700">Nome do Pet Shop / Clínica</label>
                      <input
                        id="clinic-name"
                        type="text"
                        value={clinicName}
                        onChange={(e) => setClinicName(e.target.value)}
                        placeholder="Ex: Vet Clinic Petvex"
                        className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full flex items-center justify-center gap-2 py-3"
                      >
                        <Rocket size={15} />
                        Ativar Conta Sandbox
                      </Button>
                    </div>

                  </form>
                </div>
              ) : (
                <div className="space-y-6 text-center py-6">
                  <div className="w-16 h-16 bg-emerald-55/90 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check size={32} className="stroke-[3]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-slate-900 text-lg">
                      Parabéns, {userName}!
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                      Seu painel demonstrativo do <span className="font-bold text-slate-800">{clinicName || "Petvex"}</span> foi montado com sucesso e preenchido com dados fiscais simulados!
                    </p>
                  </div>

                  {/* Sandbox status logs */}
                  <div className="bg-slate-50 rounded-2xl p-4 text-left space-y-2 font-mono text-[10px] text-slate-500">
                    <div>● Criando perfil de banco de dados... OK</div>
                    <div>● Populando vacinas de rotina... OK</div>
                    <div>● Adicionando agenda fictícia... OK</div>
                    <div className="text-emerald-600 font-bold">● Painel online no lado direito!</div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <Button
                      variant="primary"
                      onClick={() => {
                        // Let users play around or reset
                        setStep(1);
                        setSimulationActive(false);
                      }}
                      className="w-full text-xs"
                    >
                      Reiniciar Simulação Sandbox
                    </Button>
                    
                    <a
                      href={getWhatsappLink(`Olá! Acabei de rodar a simulação da clínica no site institucional, meu nome é ${userName}. Gostaria de migrar para uma conta real!`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-xs border-slate-300">
                        <MessageSquare size={14} className="text-emerald-500" />
                        Migrar para Conta Ativa Real
                      </Button>
                    </a>
                  </div>

                </div>
              )}

            </Card>

            {/* Benefits Bullet checklist */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-4">
              <span className="font-display font-bold text-xs uppercase text-emerald-400 tracking-wider">
                O que você ganha com a Sandbox?
              </span>
              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">🐾</span>
                  <span>14 dias completos para testar com sua equipe real</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">🐾</span>
                  <span>Suporte VIP para tirar dúvidas sobre cálculos de DRE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">🐾</span>
                  <span>Migração técnica de dados cadastrais 100% grátis</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Column 2: Live rendering of sandbox preview device browser */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative">
              
              {/* Context label */}
              <div className="absolute -top-6 right-6 z-25 bg-emerald-600 text-white font-display text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                {simulationActive ? `Sandbox: ${clinicName || "Minha Clínica"}` : "Visão Geral do Painel"}
              </div>

              {/* Underlying background light bubble */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-10"></div>

              <MockupBrowser url="app.petvex.com.br/dashboard-sandbox">
                <DashboardPreview />
              </MockupBrowser>
            </div>
          </div>

        </div>

      </Container>
    </div>
  );
}
