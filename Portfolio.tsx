import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, CheckCircle2, ChevronRight, Layers, ExternalLink } from 'lucide-react';
import { CASE_STUDIES } from '../data/consultingData';
import { CaseStudy } from '../types';

interface PortfolioProps {
  setActiveTab: (tab: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ setActiveTab }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(CASE_STUDIES[0]);

  const categories = ['All', 'AI & Automation', 'Robotic Process Automation', 'Software Engineering', 'Data & Cloud'];

  const filteredCases = filterCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === filterCategory);

  return (
    <section className="py-16 lg:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Enterprise Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Real-World Impact & Project Track Record
          </h2>
          <p className="text-slate-300 text-base">
            Explore how Delbert Aud solves complex operational bottlenecks using custom AI data pipelines, RPA automation bots, high-speed C++/Python tools, and cloud infrastructure.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filterCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((study) => {
            const isSelected = activeCase?.id === study.id;
            return (
              <div
                key={study.id}
                onClick={() => setActiveCase(study)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/50 shadow-xl shadow-cyan-500/10'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {study.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-black text-sm">
                      <span>{study.metricValue}</span>
                      <span className="text-[10px] text-slate-400 font-sans font-normal">{study.metricLabel}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300">
                      {study.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      Client: {study.clientContext}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {study.techStack.slice(0, 4).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800">
                        {t}
                      </span>
                    ))}
                    {study.techStack.length > 4 && (
                      <span className="text-[10px] text-slate-500 font-mono">+{study.techStack.length - 4}</span>
                    )}
                  </div>

                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Case Study Modal / Full Detail Panel */}
        {activeCase && (
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {activeCase.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {activeCase.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  Context: {activeCase.clientContext}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 text-right shrink-0">
                <div className="text-2xl font-black text-emerald-400 font-mono">{activeCase.metricValue}</div>
                <div className="text-xs text-slate-400 font-medium">{activeCase.metricLabel}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Challenge & Solution */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    The Problem & Challenge
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                    {activeCase.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    Delbert Aud's Solution & Architecture
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                    {activeCase.solution}
                  </p>
                </div>
              </div>

              {/* Measured Results & Tech */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    Verified Project Deliverables & Metrics
                  </h4>
                  <div className="space-y-2">
                    {activeCase.results.map((res, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.techStack.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-cyan-300 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Need a similar custom solution built for your organization?
              </span>
              <button
                onClick={() => setActiveTab('contact')}
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
              >
                Discuss Similar Project
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
