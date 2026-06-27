import React from "react";
import { cn } from "../../lib/cn";

export interface MockupBrowserProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string;
  children: React.ReactNode;
}

export const MockupBrowser: React.FC<MockupBrowserProps> = ({ className, url = "app.petvex.com.br/dashboard", children, id, ...props }) => {
  return (
    <div
      id={id}
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-slate-900 shadow-2xl overflow-hidden flex flex-col w-full",
        className
      )}
      {...props}
    >
      {/* Top navigation container */}
      <div className="bg-slate-100 border-b border-slate-200/80 px-4 py-3.5 flex items-center select-none">
        {/* macOS Control Window Buttons */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-slate-300 block hover:bg-rose-400 transition" />
          <span className="w-3 h-3 rounded-full bg-slate-250 block hover:bg-amber-400 transition" />
          <span className="w-3 h-3 rounded-full bg-slate-200 block hover:bg-emerald-400 transition" />
        </div>
        
        {/* Browser address bar */}
        <div className="flex-1 flex justify-center max-w-[400px] sm:max-w-[450px] mx-auto">
          <div className="w-full bg-white border border-slate-200/70 shadow-inner rounded-xl px-4 py-1.5 text-xs text-slate-500 font-sans tracking-wide flex items-center justify-center gap-1.5">
            <span className="text-slate-300">🔐</span>
            <span className="text-slate-300 font-mono">https://</span>
            <span className="font-semibold text-slate-700">{url}</span>
          </div>
        </div>
        <div className="w-12 hidden sm:block"></div> {/* Spacer for visual balance */}
      </div>
      
      {/* Main client application viewport */}
      <div className="bg-slate-50 flex-1 relative">
        {children}
      </div>
    </div>
  );
};

export default MockupBrowser;
