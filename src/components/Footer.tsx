import React from 'react';
import { ShieldCheck, FileText, FileCode, Download, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 font-bold text-cyan-300 flex items-center justify-center text-sm">
                DA
              </div>
              <span className="text-base font-bold text-white">Delbert Aud</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Security & Cloud
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Senior IT Professional & Consultant offering high-impact Automation, Custom Programming, and AI Consulting services. Over 40 years of enterprise technical excellence.
            </p>
            <div className="flex items-center gap-2 text-slate-300 pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Henderson, NV (100% Remote Engagements)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Consulting Navigation</h4>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">
                  Services & Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('ai-consultant')} className="hover:text-cyan-400 transition-colors">
                  AI Virtual Advisor
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('calculator')} className="hover:text-cyan-400 transition-colors">
                  Automation ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('portfolio')} className="hover:text-cyan-400 transition-colors">
                  Case Studies & Track Record
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('resume')} className="hover:text-cyan-400 transition-colors font-semibold text-cyan-300">
                  /resume & Requirements
                </button>
              </li>
            </ul>
          </div>

          {/* Downloads & Files */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Files & Resume Assets</h4>
            <div className="space-y-2">
              <a
                href="/api/resume/markdown"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-cyan-400" />
                  <span>Delbert_Aud_Resume.md</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold">Markdown</span>
              </a>

              <a
                href="/api/resume/requirements"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Delbert_Aud_Requirements.json</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">JSON</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Delbert Aud. All rights reserved. Automation, Programming & AI Consulting.
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:delbert.aud@gmail.com" className="hover:text-slate-300">
              delbert.aud@gmail.com
            </a>
            <span>•</span>
            <a href="tel:7024492337" className="hover:text-slate-300">
              (702) 449-2337
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
