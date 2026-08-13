import React from 'react';
import { ShieldCheck, FileText, ArrowRight, CheckCircle2, Sparkles, Cpu, Clock, DollarSign } from 'lucide-react';
import { IMAGES } from '../data/consultingData';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24 border-b border-slate-800">
      {/* Background Graphic & Glow Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <img
          src={IMAGES.heroBanner}
          alt="High tech consulting background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-medium shadow-md shadow-emerald-950/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>100% Remote Engagements • US Citizen (Henderson, NV)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Automate, Scale & Modernize with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                40+ Years of Engineering
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Specialized consultancy in <strong className="text-cyan-300 font-semibold">AI/LLM Pipelines</strong>,{' '}
              <strong className="text-blue-300 font-semibold">Robotic Process Automation (RPA)</strong>, and{' '}
              <strong className="text-indigo-300 font-semibold">Enterprise Systems Architecture</strong>. Backed by enterprise security expertise.
            </p>

            {/* Core Capability Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'n8n & Local LLMs (Ollama)',
                'Python & Go RPA',
                'Cybersecurity Hardening',
                'C++ / C# / Java Systems',
                'Elasticsearch & Telemetry',
                'AirTable & Zapier Workflows',
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book AI & Automation Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('resume')}
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-950 text-slate-200 hover:bg-slate-900 border border-slate-700/80 transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>View /resume</span>
              </button>
            </div>

            {/* Quick Requirements Bar */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="block font-semibold text-slate-200">Full-Time W2</span>
                  <span>$120,000 / Year</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <div>
                  <span className="block font-semibold text-slate-200">Contract Rate</span>
                  <span>$65.00 / Hour</span>
                </div>
              </div>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <div>
                  <span className="block font-semibold text-slate-200">Credentials</span>
                  <span>Security • Cloud</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Profile Card & Graphics */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 border border-slate-800 shadow-2xl">
              {/* Profile Image & Badges */}
              <div className="relative mb-6 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 aspect-square max-h-80 mx-auto">
                <img
                  src={IMAGES.avatar}
                  alt="Delbert Aud - Senior IT Consultant"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">Delbert Aud</h3>
                  <p className="text-xs text-cyan-300 font-medium">
                    Senior IT Consultant & Solutions Architect
                  </p>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-3">
                {[
                  '40+ Years enterprise software development & IT leadership',
                  'AI data pipelines using n8n, Ollama & Gemini API',
                  'Robotic Process Automation (Automation Anywhere & Python)',
                  'Former Technical Lead for Bank of America & HP Enterprise',
                  '100% Remote availability on W2 or Contract basis',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Link to Resume */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Looking for full resume & requirements?</span>
                <button
                  onClick={() => setActiveTab('resume')}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
                >
                  <span>Go to /resume</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
