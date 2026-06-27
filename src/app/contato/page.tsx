import React, { useState, useEffect } from "react";
import { updateDocumentSeo } from "../../lib/seo";
import { siteConfig } from "../../config/site.config";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Mail, Phone, Clock, Send, MessageSquare, CheckCircle, ShieldAlert } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updateDocumentSeo("Fale Conosco", "Entre em contato com o Petvex. Tire dúvidas sobre planos, suporte e implantação.");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return;
    
    // Simulate successful form dispatch
    setSubmitted(true);
    
    // Clear inputs
    setName("");
    setEmail("");
    setWhatsapp("");
    setBusinessName("");
    setMessage("");

    // Hide success alert after 5s
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50/40 relative min-h-screen font-sans">
      
      {/* Visual gradients */}
      <div className="absolute top-[8%] left-[-10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="lg">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-display text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
            Fale Conosco
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mt-4 tracking-tight leading-tight">
            Estamos prontos para te ajudar
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Seja para esclarecer recursos, obter faturas personalizadas ou solicitar suporte de implantação, nossa equipe responde de maneira ágil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-5xl mx-auto">
          
          {/* Column 1: Core contacts & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Context support box */}
            <div className="space-y-6">
              
              <Card className="p-6 bg-white border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-650 rounded-xl">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm tracking-wide uppercase">Suporte WhatsApp</h4>
                  <a 
                    href={getWhatsappLink("Olá! Preciso de atendimento do suporte técnico do Petvex.")}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-semibold text-sm hover:underline mt-1 block"
                  >
                    {siteConfig.phone} (Chamar agora)
                  </a>
                  <p className="text-slate-500 text-xs mt-1">Tempo estimado de retorno: menor que 5 minutos.</p>
                </div>
              </Card>

              <Card className="p-6 bg-white border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-650 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm tracking-wide uppercase">E-mail Comercial</h4>
                  <a 
                    href={`mailto:${siteConfig.email}`}
                    className="text-emerald-600 font-semibold text-sm hover:underline mt-1 block"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-slate-500 text-xs mt-1">Ótimo para propostas comerciais e parcerias.</p>
                </div>
              </Card>

              <Card className="p-6 bg-white border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-650 rounded-xl">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm tracking-wide uppercase">Horário de Plantão</h4>
                  <p className="text-slate-700 text-sm mt-1 leading-relaxed font-semibold">
                    {siteConfig.hours}
                  </p>
                </div>
              </Card>

            </div>

            {/* Support guarantee badge */}
            <div className="bg-emerald-950 text-white rounded-2xl p-6 flex items-start gap-3.5">
              <span className="text-xl">🛡️</span>
              <p className="text-xs text-emerald-100 leading-relaxed">
                <span className="font-bold block mb-1">Onboarding Assistido Incluído</span>
                Garantimos que você não se sinta perdido. Todos os planos dão direito a treinamento guiado ao vivo da equipe para cadastrar sua equipe e importar dados antigos.
              </p>
            </div>

          </div>

          {/* Column 2: Simulated contact form without backend */}
          <div className="lg:col-span-7">
            <Card className="p-8 bg-white border border-slate-200/60 shadow-lg shadow-slate-205/10 rounded-3xl h-full flex flex-col justify-between">
              
              <div className="space-y-4">
                <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl">
                  Envie uma mensagem direta
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Preencha o formulário e um consultor entrará em contato via WhatsApp ou e-mail com todas as instruções necessárias.
                </p>

                {submitted && (
                  <div className="bg-emerald-50 border border-emerald-550/20 text-emerald-800 p-4 rounded-2xl flex items-start gap-2.5 animate-fadeIn">
                    <CheckCircle size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm">Mensagem enviada com sucesso!</p>
                      <p className="text-xs text-emerald-650 mt-0.5">Obrigado pelo contato. Nossa equipe de atendimento retornará em breve.</p>
                    </div>
                  </div>
                )}

                {/* Form Tag */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1 text-left">
                      <label htmlFor="user-name" className="text-xs font-semibold text-slate-700">Seu Nome *</label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Carlos Andrade"
                        className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1 text-left">
                      <label htmlFor="user-whatsapp" className="text-xs font-semibold text-slate-700">WhatsApp *</label>
                      <input
                        id="user-whatsapp"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="Ex: (11) 99999-0000"
                        className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <label htmlFor="user-email" className="text-xs font-semibold text-slate-700">E-mail para Retorno</label>
                    <input
                      id="user-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: carlos@petshop.com.br"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <label htmlFor="user-business" className="text-xs font-semibold text-slate-700">Nome do seu Negócio Pet</label>
                    <input
                      id="user-business"
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Ex: Pet Shop Late & Mia"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <label htmlFor="user-message" className="text-xs font-semibold text-slate-700">Como podemos te ajudar?</label>
                    <textarea
                      id="user-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Sua dúvida ou necessidade em aberto..."
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none"
                    ></textarea>
                  </div>

                  {/* Submission Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full flex items-center justify-center gap-2 py-3 tracking-wide"
                    >
                      <Send size={15} />
                      Enviar Mensagem por E-mail
                    </Button>
                  </div>

                </form>
              </div>

            </Card>
          </div>

        </div>

      </Container>
    </div>
  );
}
