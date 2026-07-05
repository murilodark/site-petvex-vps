import React from "react";
import { Container } from "../ui/Container";
import { MockupBrowser } from "../ui/MockupBrowser";
import { motion } from "motion/react";
import { Calendar, MessageSquare, Check, Clock } from "lucide-react";

export const AgendaDemoSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100" id="agenda-demo">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct objective copy and notes */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div>
              <span className="text-emerald-600 text-xs font-black uppercase tracking-widest font-display">
                Demonstração Prática
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-slate-950 mt-1.5 leading-tight tracking-tight">
                Veja como sua rotina fica organizada em poucos cliques.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4 font-semibold">
                Esqueça os cadernos rasurados e planilhas confusas. Gerencie agendamentos de forma rápida e intuitiva.
              </p>
            </div>

            {/* Core highlight message */}
            <div className="flex flex-col gap-4 border-l-4 border-emerald-500 pl-4 py-1">
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-bold">
                Identifique instantaneamente quem confirmou e mantenha seus horários sempre preenchidos sem perder tempo mandando mensagens uma a uma.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup representation of the daily agenda */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-3xl blur-xl opacity-5"></div>
              
              <MockupBrowser url="app.petvex.com.br/agenda">
                <div className="bg-slate-900 text-slate-100 p-4 sm:p-6 rounded-xl flex flex-col gap-4 h-full font-sans">
                  {/* Mock Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-emerald-400" />
                      <span className="font-display font-bold text-sm text-white">Agenda do Dia</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-bold">Lembretes WhatsApp Ativos</span>
                  </div>
                  
                  {/* Daily grid slots */}
                  <div className="space-y-2.5">
                    {[
                      { time: "09:00", pet: "Tobias", breed: "Golden Retriever", service: "Banho & Tosa", status: "confirmado", tutor: "Juliana Costa" },
                      { time: "10:30", pet: "Mia", breed: "Persa", service: "Tosa de Máquina", status: "lembrete-enviado", tutor: "Arthur Silva" },
                      { time: "14:00", pet: "Rex", breed: "Pastor Alemão", service: "Banho & Hidratação", status: "pendente", tutor: "Geraldo Neto" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-slate-950 p-3 rounded-lg border border-slate-800/80 hover:border-emerald-500/20 transition">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-slate-400 font-bold">{item.time}</span>
                          <div>
                            <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
                              {item.pet} <span className="text-[9px] text-slate-500 font-normal">({item.breed})</span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-medium">{item.service} • <span className="text-slate-500">Tutor: {item.tutor}</span></div>
                          </div>
                        </div>
                        
                        {/* Status Badge */}
                        <div>
                          {item.status === "confirmado" && (
                            <span className="inline-flex items-center gap-1 text-[9px] bg-emerald-500/15 text-emerald-400 px-2.5 py-1 rounded-full font-extrabold border border-emerald-500/20">
                              <Check size={10} className="stroke-[3]" /> Confirmado
                            </span>
                          )}
                          {item.status === "lembrete-enviado" && (
                            <span className="inline-flex items-center gap-1 text-[9px] bg-sky-500/15 text-sky-400 px-2.5 py-1 rounded-full font-extrabold border border-sky-500/20">
                              <MessageSquare size={10} /> Lembrete Enviado
                            </span>
                          )}
                          {item.status === "pendente" && (
                            <span className="inline-flex items-center gap-1 text-[9px] bg-amber-500/15 text-amber-400 px-2.5 py-1 rounded-full font-extrabold border border-amber-500/20">
                              <Clock size={10} /> Pendente
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MockupBrowser>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AgendaDemoSection;
