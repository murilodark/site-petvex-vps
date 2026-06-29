import React from "react";
import { siteConfig } from "../../config/site.config";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Mail, Phone, Clock, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 font-sans relative overflow-hidden">
      
      {/* Visual top border styling details */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Profile */}
          <div className="flex flex-col gap-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                🐾
              </div>
              <span className="font-display font-extrabold text-xl text-white leading-none">
                Petvex
              </span>
            </a>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.footer.about}
            </p>

            {/* Social Icons mapping */}
            <div className="flex items-center gap-3.5 mt-2">
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2.5 rounded-xl transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2.5 rounded-xl transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              )}
              {siteConfig.socials.youtube && (
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2.5 rounded-xl transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Institucional
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-white transition duration-200 block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Features quick link lists */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Funcionalidades
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/funcionalidades"
                  onClick={(e) => handleLinkClick(e, "/funcionalidades")}
                  className="hover:text-white transition duration-200 block"
                >
                  Banho e Tosa Completo
                </a>
              </li>
              <li>
                <a
                  href="/funcionalidades"
                  onClick={(e) => handleLinkClick(e, "/funcionalidades")}
                  className="hover:text-white transition duration-200 block"
                >
                  Agenda Online & WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="/funcionalidades"
                  onClick={(e) => handleLinkClick(e, "/funcionalidades")}
                  className="hover:text-white transition duration-200 block"
                >
                  Prontuários Veterinários
                </a>
              </li>
              <li>
                <a
                  href="/funcionalidades"
                  onClick={(e) => handleLinkClick(e, "/funcionalidades")}
                  className="hover:text-white transition duration-200 block"
                >
                  Fluxo de Caixa & DRE
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Channels */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Canais Oficiais
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <a href={getWhatsappLink()} className="hover:text-white transition">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.hours}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright alignment */}
        <div className="border-t border-slate-800/80 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <p>{siteConfig.footer.copyright}</p>
            <p className="font-medium text-slate-600">
              Petvex Tecnologia Ltda • CNPJ: 45.987.654/0001-21 • São Paulo, SP
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-semibold">
            <a
              href="/politica-de-privacidade"
              onClick={(e) => handleLinkClick(e, "/politica-de-privacidade")}
              className="hover:text-slate-300 transition"
            >
              Política de Privacidade
            </a>
            <a
              href="/termos-de-servico"
              onClick={(e) => handleLinkClick(e, "/termos-de-servico")}
              className="hover:text-slate-300 transition"
            >
              Termos de Serviço
            </a>
            <a
              href="/exclusao-de-dados"
              onClick={(e) => handleLinkClick(e, "/exclusao-de-dados")}
              className="hover:text-slate-300 transition text-rose-500/85 hover:text-rose-400"
            >
              Exclusão de Dados
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
