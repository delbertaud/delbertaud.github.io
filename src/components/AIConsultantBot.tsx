import React, { useState } from 'react';
import { Bot, Send, Sparkles, RefreshCw, CheckCircle2, Terminal, Code } from 'lucide-react';

interface AIConsultantBotProps {
  setActiveTab: (tab: string) => void;
}

export const AIConsultantBot: React.FC<AIConsultantBotProps> = ({ setActiveTab }) => {
  const [query, setQuery] = useState('');
  const [processType, setProcessType] = useState('Data Extraction & Document Analysis');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const samplePrompts = [
    'How can we automate parsing 500 daily PDF invoices into PostgreSQL using n8n and Ollama?',
    'We have legacy Windows software without APIs—how can RPA automate our repetitive daily reporting?',
    'How do we set up a private local LLM on-premise to keep financial data secure under enterprise security guidelines?',
    'Can you build an AirTable + Zapier + Slack workflow hub for dispatching field maintenance teams?',
  ];

  const handleConsult = async (customPrompt?: string) => {
    const promptToUse = customPrompt || query;
    if (!promptToUse.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/consult-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: promptToUse,
          processType,
        }),
      });

      const data = await res.json();
      if (data.recommendation) {
        setResponse(data.recommendation);
      } else {
        setResponse('Failed to retrieve AI consultation. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setResponse('Connection error while contacting AI Virtual Advisor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-950 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Server-Side Gemini AI Powered Advisor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Consult Delbert's AI Virtual Advisor
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Describe your business bottleneck, tech stack, or automation query below. Our AI advisor applies Delbert Aud's 40+ years of engineering knowledge to generate an instant technical architecture proposal.
          </p>
        </div>

        {/* Advisor Interactive Box */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Controls Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Interactive Architecture Generator</h3>
                <p className="text-xs text-slate-400">Powered by Gemini AI & Delbert Aud's Solution Framework</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs text-slate-400 font-medium">Domain Category:</label>
              <select
                value={processType}
                onChange={(e) => setProcessType(e.target.value)}
                className="bg-slate-950 text-slate-200 border border-slate-700 rounded-lg text-xs px-3 py-1.5 focus:outline-none focus:border-cyan-500"
              >
                <option value="Data Extraction & Document Analysis">Data Extraction & LLM</option>
                <option value="Robotic Process Automation (RPA)">Robotic Process Automation (RPA)</option>
                <option value="Legacy Systems & Software Migration">Legacy Systems & C++/Python</option>
                <option value="Enterprise Security & Cloud Architecture">Enterprise Security & Cloud</option>
              </select>
            </div>
          </div>

          {/* Prompt Buttons */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Click a sample engineering challenge to test:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {samplePrompts.map((promptText, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(promptText);
                    handleConsult(promptText);
                  }}
                  className="text-left p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-cyan-300 transition-all flex items-start gap-2"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{promptText}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Input */}
          <div className="space-y-2">
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Or describe your custom process, system challenge, or automation goals here..."
                rows={3}
                className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 rounded-2xl border border-slate-800 p-4 text-sm focus:outline-none focus:border-cyan-500 transition-all resize-none"
              />
              <button
                onClick={() => handleConsult()}
                disabled={loading || !query.trim()}
                className="absolute bottom-3 right-3 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Proposal</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* AI Response Display */}
          {response && (
            <div className="mt-6 rounded-2xl bg-slate-950 border border-cyan-500/30 p-6 space-y-4 animate-fade-in shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Architecture Recommendation for Delbert Aud Engagement</span>
                </div>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-all"
                >
                  Schedule Implementation Call
                </button>
              </div>

              <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed font-sans">
                {response}
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span>Want Delbert Aud to lead or build this architecture?</span>
                <button
                  onClick={() => setActiveTab('resume')}
                  className="text-cyan-400 font-bold hover:underline"
                >
                  View Engagement Requirements ($120k W2 / $65/hr)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
