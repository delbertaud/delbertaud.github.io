import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles, ArrowRight, Check } from 'lucide-react';
import { CalculatorState } from '../types';

interface RoiCalculatorProps {
  setActiveTab: (tab: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ setActiveTab }) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    processType: 'data-entry',
    manualHoursPerWeek: 25,
    teamMembers: 4,
    avgHourlyRate: 45,
  });

  // Calculations
  const totalWeeklyManualHours = calcState.manualHoursPerWeek * calcState.teamMembers;
  const totalAnnualManualCost = totalWeeklyManualHours * calcState.avgHourlyRate * 52;

  // Automation savings factors
  const savingsFactorMap = {
    'data-entry': 0.9, // 90% savings
    'report-generation': 0.85, // 85% savings
    'legacy-integration': 0.8, // 80% savings
    'ai-document-parsing': 0.92, // 92% savings
    'telecom-sysadmin': 0.75, // 75% savings
  };

  const savingsPercent = savingsFactorMap[calcState.processType] || 0.85;
  const annualHoursSaved = Math.round(totalWeeklyManualHours * 52 * savingsPercent);
  const annualDollarsSaved = Math.round(totalAnnualManualCost * savingsPercent);

  // Estimated implementation investment
  const estimatedProjectCost = Math.min(Math.max(Math.round(annualDollarsSaved * 0.25), 3500), 18000);
  const monthsToPayoff = Math.max(1, Math.round((estimatedProjectCost / (annualDollarsSaved / 12)) * 10) / 10);

  const processLabels = {
    'data-entry': 'Manual Data Entry & Database Ingestion',
    'report-generation': 'Spreadsheet & Report Compilation',
    'legacy-integration': 'Legacy Application Copy-Pasting',
    'ai-document-parsing': 'Invoice, Contract & PDF Parsing',
    'telecom-sysadmin': 'Software Deployment & Patch Management',
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Business Impact Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Automation ROI & Time Savings Calculator
          </h2>
          <p className="text-slate-300 text-base">
            Quantify how much manual operational overhead, employee burnout, and budget your team can reclaim by deploying custom AI pipelines and RPA bots.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Project Parameters</span>
            </h3>

            {/* Process Type Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-400">Target Process Type</label>
              <select
                value={calcState.processType}
                onChange={(e) =>
                  setCalcState({ ...calcState, processType: e.target.value as CalculatorState['processType'] })
                }
                className="w-full bg-slate-950 text-slate-100 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
              >
                {Object.entries(processLabels).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Manual Hours Per Week */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase text-slate-400">Manual Hours / Week (Per Person)</span>
                <span className="font-mono text-cyan-400 font-bold text-sm">{calcState.manualHoursPerWeek} hrs</span>
              </div>
              <input
                type="range"
                min={5}
                max={50}
                step={1}
                value={calcState.manualHoursPerWeek}
                onChange={(e) => setCalcState({ ...calcState, manualHoursPerWeek: Number(e.target.value) })}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>5 hrs</span>
                <span>25 hrs</span>
                <span>50 hrs</span>
              </div>
            </div>

            {/* Team Members */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase text-slate-400">Team Size Performing Task</span>
                <span className="font-mono text-blue-400 font-bold text-sm">{calcState.teamMembers} staff</span>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={calcState.teamMembers}
                onChange={(e) => setCalcState({ ...calcState, teamMembers: Number(e.target.value) })}
                className="w-full accent-blue-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 staff</span>
                <span>12 staff</span>
                <span>25 staff</span>
              </div>
            </div>

            {/* Average Hourly Cost */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase text-slate-400">Blended Hourly Labor Rate ($)</span>
                <span className="font-mono text-emerald-400 font-bold text-sm">${calcState.avgHourlyRate}/hr</span>
              </div>
              <input
                type="range"
                min={25}
                max={150}
                step={5}
                value={calcState.avgHourlyRate}
                onChange={(e) => setCalcState({ ...calcState, avgHourlyRate: Number(e.target.value) })}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$25/hr</span>
                <span>$85/hr</span>
                <span>$150/hr</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>Projected Annual Savings & ROI</span>
            </h3>

            {/* Metric Displays */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Annual Hours Reclaimed</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
                  {annualHoursSaved.toLocaleString()} <span className="text-xs text-slate-400 font-sans font-normal">hrs/yr</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">
                  ~{Math.round(annualHoursSaved / 8)} full workdays saved!
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>Annual Cost Savings</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  ${annualDollarsSaved.toLocaleString()}
                </div>
                <span className="text-[10px] text-slate-400 font-semibold">
                  {Math.round(savingsPercent * 100)}% process cost reduction
                </span>
              </div>
            </div>

            {/* Payoff Timeline */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">Estimated Time to Full ROI Payoff:</span>
                <span className="font-mono text-cyan-300 font-bold text-sm">{monthsToPayoff} Months</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                  style={{ width: `${Math.min(100, Math.max(15, (12 - monthsToPayoff) * 10))}%` }}
                />
              </div>
              <p className="text-xs text-slate-400">
                After month {monthsToPayoff}, all ongoing operational savings flow directly to your net margin.
              </p>
            </div>

            {/* Recommended Technical Stack for this calculation */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-slate-400">Recommended Tech Architecture:</span>
              <div className="flex flex-wrap gap-2">
                {['n8n Workflow Engine', 'Python / Go Bots', 'Local Ollama LLM', 'PostgreSQL / AirTable', 'Slack Webhooks'].map(
                  (tech, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950 text-xs text-cyan-300 border border-slate-800">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{tech}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('contact')}
                className="w-full py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Book Call with Delbert Aud to Capture These Savings</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
