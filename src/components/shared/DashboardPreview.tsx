import React, { useState } from "react";
import { 
  Users, 
  Heart, 
  Calendar, 
  AlertTriangle, 
  TrendingUp, 
  Plus, 
  Search, 
  Scissors, 
  Check, 
  Clock, 
  Activity, 
  Bell, 
  ChevronRight, 
  DollarSign 
} from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface Appointment {
  id: string;
  time: string;
  pet: string;
  breed: string;
  type: string;
  tutor: string;
  status: "completed" | "active" | "waiting" | "scheduled";
}

interface StockItem {
  name: string;
  qty: number;
  min: number;
}

export const DashboardPreview: React.FC = () => {
  // Live states to make the dashboard interactive
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: "1", time: "08:30", pet: "Mel", breed: "Golden Retriever", type: "Banho & Tosa Completa", tutor: "Carlos Eduardo", status: "completed" },
    { id: "2", time: "10:00", pet: "Floquinho", breed: "Gato Persa", type: "Vacina Tríplice Felina", tutor: "Paula Souza", status: "active" },
    { id: "3", time: "11:30", pet: "Thor", breed: "Bulldog Francês", type: "Consulta Geral", tutor: "Andreia Lima", status: "waiting" },
    { id: "4", time: "14:15", pet: "Luna", breed: "Shih Tzu", type: "Hidratação de Pelos", tutor: "Marcos Ribeiro", status: "scheduled" }
  ]);

  const [stock, setStock] = useState<StockItem[]>([
    { name: "Shampoo Hipoalergênico 5L", qty: 1, min: 2 },
    { name: "Vacina V10 Importada", qty: 5, min: 10 },
    { name: "Ração Premium Renal 3kg", qty: 2, min: 4 }
  ]);

  const [recentClients, setRecentClients] = useState([
    { name: "Felipe Melo", pet: "Zeca (Spitz)", time: "Há 10 min", value: "R$ 145,00" },
    { name: "Bruna Dias", pet: "Athena (Rottweiler)", time: "Há 24 min", value: "R$ 220,00" },
    { name: "Regina Duarte", pet: "Mimi (SRD)", time: "Há 1 hora", value: "R$ 80,00" }
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  // Toggle appointment status
  const cycleStatus = (id: string) => {
    setAppointments(prev => prev.map(apt => {
      if (apt.id === id) {
        let newStatus: Appointment["status"] = "scheduled";
        if (apt.status === "scheduled") newStatus = "waiting";
        else if (apt.status === "waiting") newStatus = "active";
        else if (apt.status === "active") newStatus = "completed";
        else newStatus = "scheduled";

        // Trigger safe notification alert
        setNotification(`Status de ${apt.pet} alterado com sucesso!`);
        setTimeout(() => setNotification(null), 3000);

        return { ...apt, status: newStatus };
      }
      return apt;
    }));
  };

  // Simulated quick action to Add Pet
  const simulateAddPet = () => {
    const names = ["Pipoca", "Bidu", "Amora", "Max", "Lola"];
    const breeds = ["Poodle", "Vira-lata", "Maltês", "Pastor Alemão", "Siamês"];
    const types = ["Grooming", "Consulta", "Banho Avulso", "Vermífugo"];
    const tutors = ["Juliana Ferreira", "Ricardo Alves", "Clarice Lis", "Guilherme Reis"];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomTutor = tutors[Math.floor(Math.random() * tutors.length)];
    
    const newApt: Appointment = {
      id: String(appointments.length + 1),
      time: "15:30",
      pet: randomName,
      breed: randomBreed,
      type: randomType,
      tutor: randomTutor,
      status: "scheduled"
    };

    setAppointments([...appointments, newApt]);
    setNotification(`${randomName} adicionado à agenda do dia!`);
    setTimeout(() => setNotification(null), 3500);
  };

  return (
    <div className="bg-slate-900 text-slate-100 font-sans p-2 sm:p-5 min-h-[480px] select-none flex flex-col md:flex-row gap-4">
      {/* Mini Sidebar Nav */}
      <div className="w-full md:w-52 shrink-0 bg-slate-950 rounded-xl p-3 flex flex-col gap-1 border border-slate-800">
        <div className="px-3 py-2.5 mb-2 hover:bg-slate-900 rounded-lg flex items-center gap-2 cursor-pointer transition">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <span className="text-emerald-400 font-bold text-sm">🐶</span>
          </div>
          <span className="font-display font-semibold text-sm tracking-wide text-white">Petvex</span>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-semibold cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Dashboard Geral
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-xs font-medium cursor-pointer transition">
            <Calendar size={14} />
            Agenda Agenda
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-xs font-medium cursor-pointer transition">
            <Users size={14} />
            Clientes (Tutores)
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-xs font-medium cursor-pointer transition">
            <Heart size={14} />
            Prontuários Pets
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-xs font-medium cursor-pointer transition">
            <Scissors size={14} />
            Banho e Tosa
          </div>
        </div>

        {/* Quick Help Box */}
        <div className="mt-auto pt-4 hidden md:block">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-[11px] text-slate-400">
            <p className="font-semibold text-slate-200 mb-1">Dica Interativa</p>
            Clique no status de agendamento na tabela para atualizar o andamento.
          </div>
        </div>
      </div>

      {/* Main Content Feed */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Top Mini Header */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-1.5 w-full sm:max-w-xs">
            <Search size={14} className="text-slate-500" />
            <input 
              type="text" 
              placeholder="Buscar pet, tutor ou vacina..." 
              className="bg-transparent border-none text-xs text-slate-200 focus:outline-none placeholder:text-slate-600 w-full"
              disabled
            />
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-rose-500 rounded-full animate-bounce"></span>
              <Bell size={18} className="text-slate-400 cursor-pointer hover:text-white" />
            </div>
            <Button
              size="sm" 
              onClick={simulateAddPet}
              className="bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 font-display text-xs"
            >
              <Plus size={14} />
              Novo Pet
            </Button>
          </div>
        </div>

        {/* Dynamic App Notification Banner */}
        {notification && (
          <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs py-2 px-3.5 rounded-lg flex items-center gap-2 animate-fadeIn shadow-lg shadow-emerald-900/10">
            <Check size={14} className="text-emerald-400" />
            <span className="font-medium">{notification}</span>
          </div>
        )}

        {/* Summary Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Card className="bg-slate-950 border-slate-800 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Receita Mensal</span>
              <TrendingUp size={12} className="text-emerald-400" />
            </div>
            <div className="mt-1.5">
              <span className="text-sm font-semibold text-slate-400 font-mono">R$ </span>
              <span className="text-lg font-bold text-white font-mono">24.850</span>
              <span className="text-xs font-semibold text-emerald-400 ml-1">+12%</span>
            </div>
          </Card>
          
          <Card className="bg-slate-950 border-slate-800 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Pets Cadastrados</span>
              <Heart size={12} className="text-rose-400" />
            </div>
            <div className="mt-1.5">
              <span className="text-lg font-bold text-white font-mono">1.482</span>
              <span className="text-[10px] bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded-full ml-2 font-semibold">Ativos</span>
            </div>
          </Card>

          <Card className="bg-slate-950 border-slate-800 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Agenda de Hoje</span>
              <Calendar size={12} className="text-amber-400" />
            </div>
            <div className="mt-1.5">
              <span className="text-lg font-bold text-white font-mono">{appointments.length}</span>
              <span className="text-[10px] text-slate-400 ml-1.5">agendados</span>
            </div>
          </Card>

          <Card className="bg-slate-950 border-rose-950/40 border-slate-800 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-rose-400">
              <span>Estoque Crítico</span>
              <AlertTriangle size={12} className="text-rose-400" />
            </div>
            <div className="mt-1.5">
              <span className="text-lg font-bold text-rose-400 font-mono">{stock.length}</span>
              <span className="text-[10px] text-slate-400 ml-1.5">itens em falta</span>
            </div>
          </Card>
        </div>

        {/* Grid: Appointments + Stock/Clients */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Section: Daily Appointments */}
          <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-slate-950 pb-2">
              <span className="font-display font-semibold text-sm text-white">Agenda do Dia</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-medium">Auto-Sync Ativo</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-900">
                    <th className="pb-2 font-medium">Horário</th>
                    <th className="pb-2 font-medium">Pet (Raça)</th>
                    <th className="pb-2 font-medium">Serviço</th>
                    <th className="pb-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900/30">
                  {appointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-slate-900/40 transition">
                      <td className="py-2.5 text-slate-350 font-mono">{apt.time}</td>
                      <td className="py-2.5">
                        <div className="font-semibold text-white">{apt.pet}</div>
                        <div className="text-[10px] text-slate-500">{apt.breed}</div>
                      </td>
                      <td className="py-2.5">
                        <div className="text-slate-300 font-medium">{apt.type}</div>
                        <div className="text-[10px] text-slate-500">Tutor: {apt.tutor}</div>
                      </td>
                      <td className="py-2.5">
                        <button 
                          onClick={() => cycleStatus(apt.id)}
                          className="cursor-pointer focus:outline-none block"
                        >
                          {apt.status === "completed" && (
                            <Badge variant="success" className="text-[10px] lowercase px-2">
                              ✓ Concluído
                            </Badge>
                          )}
                          {apt.status === "active" && (
                            <Badge variant="info" className="text-[10px] lowercase px-2 animate-pulse">
                              ● Atendimento
                            </Badge>
                          )}
                          {apt.status === "waiting" && (
                            <Badge variant="warning" className="text-[10px] lowercase px-2">
                              ⏱ Em espera
                            </Badge>
                          )}
                          {apt.status === "scheduled" && (
                            <Badge variant="secondary" className="text-[10px] lowercase px-2">
                              📅 agendado
                            </Badge>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right column: Recent Sales & Stock Alerts */}
          <div className="flex flex-col gap-4">
            
            {/* Box: Recent Clients / Cash Registers */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex flex-col gap-2">
              <span className="font-display font-semibold text-sm text-white">Vendas Recentes</span>
              <div className="space-y-2.5">
                {recentClients.map((client, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-slate-900/40 pb-2 last:border-none last:pb-0">
                    <div>
                      <div className="text-xs font-semibold text-slate-200">{client.pet}</div>
                      <div className="text-[10px] text-slate-500">{client.name} • {client.time}</div>
                    </div>
                    <div className="font-mono text-xs font-bold text-emerald-400">
                      {client.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Box: Critical Stock Warnings */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-sm text-white">Reposição Estoque</span>
                <Badge variant="danger" className="text-[9px] uppercase px-1.5">Crítico</Badge>
              </div>
              <div className="space-y-2">
                {stock.map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-900/60 p-2 rounded-lg border border-rose-950/20">
                    <div>
                      <div className="text-xs font-medium text-slate-305">{item.name}</div>
                      <div className="text-[10px] text-slate-500">Mínimo necessário: {item.min} un.</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-rose-450 font-mono">{item.qty} un</div>
                      <span className="text-[9px] font-semibold text-rose-500">Repor</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardPreview;
