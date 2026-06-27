import React from "react";
import { getWhatsappLink } from "../../lib/whatsapp";
import { MessageSquare } from "lucide-react";

export const FloatingWhatsappButton: React.FC = () => {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group border border-emerald-400/20"
      aria-label="Falar no WhatsApp"
    >
      {/* Tooltip on hover */}
      <span className="absolute right-15 bg-slate-900 border border-slate-800 text-white text-xs px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-display font-medium shadow-xl shadow-slate-950/20">
        Suporte WhatsApp
      </span>
      {/* Dynamic indicator dot */}
      <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-emerald-500 animate-ping"></span>
      <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-emerald-500"></span>
      
      <MessageSquare size={26} className="fill-white/10" />
    </a>
  );
};

export default FloatingWhatsappButton;
