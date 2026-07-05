import React from "react";
import { siteConfig } from "../../config/site.config";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
// @ts-ignore
import logoImg from "../../assets/images/logo.png";

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
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 sm:py-14 font-sans relative overflow-hidden text-left">
      
      {/* Visual top border styling details */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Column 1: Brand Profile */}
          <div className="flex flex-col gap-3.5">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="flex items-center gap-2"
            >
              <img
                src={logoImg}
                alt="Petvex Logo"
                className="w-8 h-8 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-extrabold text-lg text-white leading-none">
                Petvex
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Gestão simples, prática e focada no dia a dia para quem cuida dos pets.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2 rounded-xl transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2 rounded-xl transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              )}
              {siteConfig.socials.youtube && (
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2 rounded-xl transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Institutional Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-black text-white text-xs uppercase tracking-wider">
              Links Principais
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
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

          {/* Column 3: Contact & Channels */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-black text-white text-xs uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-emerald-500 shrink-0" />
                <a href={getWhatsappLink()} className="hover:text-white transition">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-emerald-500 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright alignment */}
        <div className="border-t border-slate-800/80 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>{siteConfig.footer.copyright}</p>
            <p className="font-medium text-slate-650">
              Petvex Tecnologia Ltda • CNPJ: 45.987.654/0001-21
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 font-bold uppercase tracking-wider text-[10px]">
            <a
              href="/politica-de-privacidade"
              onClick={(e) => handleLinkClick(e, "/politica-de-privacidade")}
              className="hover:text-slate-300 transition"
            >
              Privacidade
            </a>
            <a
              href="/termos-de-servico"
              onClick={(e) => handleLinkClick(e, "/termos-de-servico")}
              className="hover:text-slate-300 transition"
            >
              Termos
            </a>
            <a
              href="/exclusao-de-dados"
              onClick={(e) => handleLinkClick(e, "/exclusao-de-dados")}
              className="hover:text-rose-400 transition text-rose-500/80"
            >
              Exclusão
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
