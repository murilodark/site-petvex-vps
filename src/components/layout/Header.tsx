import React, { useState } from "react";
import { siteConfig } from "../../config/site.config";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Menu, X, Rocket } from "lucide-react";
// @ts-ignore
import logoImg from "../../assets/images/logo.png";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const scrollPosition = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isScrolled = scrollPosition > 20;

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-lg shadow-slate-100/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand area */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="flex items-center gap-2.5 group"
          >
            <img
              src={logoImg}
              alt="Petvex Logo"
              className="w-10 h-10 object-contain group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg text-slate-900 leading-none tracking-tight">
                Petvex
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest font-semibold uppercase mt-0.5">
                Plataforma SaaS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Cluster */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/40 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-xs">
            {siteConfig.navigation.map((navItem) => {
              const isActive = currentPath === navItem.href;
              return (
                <a
                  key={navItem.href}
                  href={navItem.href}
                  onClick={(e) => handleLinkClick(e, navItem.href)}
                  className={`font-display text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-emerald-700 bg-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
                  }`}
                >
                  {navItem.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-emerald-700 bg-emerald-50/70 rounded-full hover:bg-emerald-100/80 transition-all cursor-pointer"
            >
              Suporte
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open("https://app.petvex.com.br/login", "_blank")}
              className="flex items-center gap-1.5 font-display text-xs rounded-full px-6 py-2.5 shadow-lg shadow-emerald-500/20 font-semibold cursor-pointer"
            >
              <Rocket size={14} />
              Área do Cliente
            </Button>
          </div>

          {/* Mobile Menu Action Icon */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Slide Down Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl shadow-slate-900/10 border-b border-slate-200 animate-slideDown overflow-hidden z-30">
          <div className="px-4 pt-3 pb-6 space-y-2.5">
            {siteConfig.navigation.map((navItem) => {
              const isActive = currentPath === navItem.href;
              return (
                <a
                  key={navItem.href}
                  href={navItem.href}
                  onClick={(e) => handleLinkClick(e, navItem.href)}
                  className={`block px-4 py-3 rounded-xl font-display font-semibold text-base transition-all duration-200 ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50/80 border-l-4 border-emerald-500"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {navItem.label}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-3 min-w-full">
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 font-semibold text-slate-750 text-sm hover:bg-slate-50 rounded-xl transition"
              >
                Chamar no WhatsApp
              </a>
              <Button
                variant="primary"
                onClick={() => window.open("https://app.petvex.com.br/login", "_blank")}
                className="w-full font-display cursor-pointer"
              >
                Área do Cliente
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
