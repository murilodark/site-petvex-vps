import React from "react";
import { siteConfig } from "../../config/site.config";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { X, MessageSquare, Compass } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, currentPath, onNavigate }) => {
  if (!isOpen) return null;

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden font-sans">
      {/* Translucent backdrop overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      {/* Sliding card panel drawer */}
      <div className="fixed top-0 bottom-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between z-10 transition-transform duration-300">
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐾</span>
              <span className="font-display font-extrabold text-slate-900 text-lg">Petvex</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl focus:outline-none"
              aria-label="Minimizar Menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-1">
            {siteConfig.navigation.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl font-display font-semibold transition ${
                    isActive
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-slate-650 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  <Compass size={16} className={isActive ? "text-emerald-500" : "text-slate-400"} />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3 pt-6 border-t border-slate-100">
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-50 text-emerald-800 rounded-xl font-bold hover:bg-emerald-100/80 transition text-xs font-display"
          >
            <MessageSquare size={16} className="fill-emerald-800/10" />
            Suporte WhatsApp
          </a>
          <Button
            variant="primary"
            className="w-full text-xs font-bold font-display"
            onClick={(e) => handleLinkClick(e, "/demonstracao")}
          >
            Experimentar Grátis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
