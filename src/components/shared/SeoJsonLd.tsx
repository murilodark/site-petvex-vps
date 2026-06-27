import React from "react";
import { siteConfig } from "../../config/site.config";

export const SeoJsonLd: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Petvex",
    "url": "https://petvex.com.br",
    "logo": "https://petvex.com.br/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "customer service",
      "email": siteConfig.email
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Petvex",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication / ERP",
    "offers": {
      "@type": "Offer",
      "price": "129.00",
      "priceCurrency": "BRL"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteConfig.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </>
  );
};

export default SeoJsonLd;
