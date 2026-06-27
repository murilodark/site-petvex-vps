import { siteConfig } from "../config/site.config";

export function getWhatsappLink(message?: string): string {
  const number = siteConfig.whatsappNumber;
  const encodedText = encodeURIComponent(message || "Olá, quero conhecer o Petvex e entender como ele pode ajudar na gestão do meu negócio pet.");
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodedText}`;
}
