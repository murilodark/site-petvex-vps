import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./app/page";
import FeaturesPage from "./app/funcionalidades/page";
import PlansPage from "./app/planos/page";
import ContactPage from "./app/contato/page";
import DemoPage from "./app/demonstracao/page";
import PrivacyPolicyPage from "./app/politica-de-privacidade/page";
import TermsOfServicePage from "./app/termos-de-servico/page";
import DataDeletionPage from "./app/exclusao-de-dados/page";
import FloatingWhatsappButton from "./components/shared/FloatingWhatsappButton";
import SeoJsonLd from "./components/shared/SeoJsonLd";
import { ClientSignupModal } from "./modules/clients/components/ClientSignupModal";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      return pathname && pathname !== "/index.html" ? pathname : "/";
    }
    return "/";
  });

  const [selectedPlanForSignup, setSelectedPlanForSignup] = useState<any | null>(null);

  // Keep state and browser address bar in sync
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleNavigate = (path: string) => {
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <HomePage onNavigate={handleNavigate} onOpenSignup={setSelectedPlanForSignup} />;
      case "/funcionalidades":
        return <FeaturesPage />;
      case "/planos":
        return <PlansPage onOpenSignup={setSelectedPlanForSignup} />;
      case "/contato":
        return <ContactPage />;
      case "/demonstracao":
        return <DemoPage />;
      case "/politica-de-privacidade":
        return <PrivacyPolicyPage />;
      case "/termos-de-servico":
        return <TermsOfServicePage />;
      case "/exclusao-de-dados":
        return <DataDeletionPage />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenSignup={setSelectedPlanForSignup} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/20 flex flex-col justify-between selection:bg-emerald-500/10 selection:text-emerald-900 overflow-x-hidden">
      {/* 1. SEOMeta structured schemas */}
      <SeoJsonLd />

      {/* 2. Global Sticky Header Nav */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* 3. Responsive Page Component Outlet */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* 4. Global Site Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 5. Floating channels */}
      <FloatingWhatsappButton />

      {/* 6. Dynamic Client Signup Flow Modal */}
      <ClientSignupModal
        isOpen={selectedPlanForSignup !== null}
        onClose={() => setSelectedPlanForSignup(null)}
        selectedPlan={selectedPlanForSignup}
      />
    </div>
  );
}
