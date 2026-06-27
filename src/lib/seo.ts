import { seoConfig } from "../config/site.config";

export function updateDocumentSeo(titleSuffix?: string, description?: string) {
  if (typeof document === "undefined") return;
  
  const baseTitle = seoConfig.title;
  document.title = titleSuffix ? `${titleSuffix} | ${siteConfigName()}` : baseTitle;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  const targetDesc = description || seoConfig.description;
  
  if (metaDescription) {
    metaDescription.setAttribute("content", targetDesc);
  } else {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = targetDesc;
    document.head.appendChild(meta);
  }
}

function siteConfigName() {
  return "Petvex";
}
