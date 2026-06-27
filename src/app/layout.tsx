import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-root min-h-screen bg-slate-50">
      {children}
    </div>
  );
}
