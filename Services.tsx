import React, { useState } from 'react';
import { Bot, Cpu, Code2, ShieldCheck, ArrowRight, Check, Sparkles, Layers } from 'lucide-react';
import { SERVICE_PILLARS } from '../data/consultingData';
import { ServicePillar } from '../types';

interface ServicesProps {
  setActiveTab: (tab: string) => void;
  setSelectedServiceForContact?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ setActiveTab, setSelectedServiceForContact }) => {
  const [selectedPillar, setSelectedPillar] = useState<ServicePillar | null>(SERVICE_PILLARS[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleBookService = (pillarId: string) => {
    if (setSelectedServiceForContact) {
      setSelectedServiceForContact(pillarId);
    }
    setActiveTab('contact');
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consulting Services & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Automation, Programming & AI Solutions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Delbert Aud provides high-impact technical consulting to streamline business workflows, automate legacy systems, and integrate next-generation AI into your operational stack.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_PILLARS.map((pillar) => {
            const isSelected = selectedPillar?.id === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-cyan-500/50 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500/30'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      {getIcon(pillar.iconName)}
                    </div>
                    {pillar.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {pillar.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between mt-4">
                  <span className="text-xs font-semibold text-slate-400">
                    {pillar.techStack.length} Core Technologies
                  </span>
                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Detailed View */}
        {selectedPillar && (
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    {getIcon(selectedPillar.iconName)}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedPillar.title}
                    </h3>
                    <p className="text-sm text-cyan-300 font-medium">
                      {selectedPillar.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedPillar.description}
                </p>

                {/* Key Capabilities List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Deliverables & Technical Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPillar.keyCapabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Primary Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPillar.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950 text-cyan-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleBookService(selectedPillar.id)}
                    className="px-6 py-3 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                  >
                    <span>Request Proposal for {selectedPillar.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Illustration Image */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl aspect-video lg:aspect-square">
                  <img
                    src={selectedPillar.image}
                    alt={selectedPillar.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
