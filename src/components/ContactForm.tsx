import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, FileText } from 'lucide-react';

interface ContactFormProps {
  selectedServiceForContact?: string;
  setActiveTab: (tab: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ setActiveTab }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-950 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get in Touch with Delbert Aud
          </h2>
          <p className="text-slate-300 text-base">
            Reach out directly via email or phone to discuss your enterprise automation roadmap, AI integration, RPA deployment, or contract engagement opportunities.
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct Email</h3>
                  <span className="text-xs text-slate-400">Primary Contact Channel</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</span>
              <div className="flex items-center justify-between">
                <a href="mailto:delbert.aud@gmail.com" className="text-sm sm:text-base font-bold text-cyan-300 hover:underline">
                  delbert.aud@gmail.com
                </a>
                <button
                  onClick={() => copyToClipboard('delbert.aud@gmail.com', 'email')}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs flex items-center gap-1 transition-all"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <a
              href="mailto:delbert.aud@gmail.com"
              className="w-full py-3 rounded-xl text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>
          </div>

          {/* Phone Card */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Phone Line</h3>
                  <span className="text-xs text-slate-400">Direct Telephone</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone Number</span>
              <div className="flex items-center justify-between">
                <a href="tel:7024492337" className="text-sm sm:text-base font-bold text-cyan-300 hover:underline">
                  (702) 449-2337
                </a>
                <button
                  onClick={() => copyToClipboard('7024492337', 'phone')}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs flex items-center gap-1 transition-all"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <a
              href="tel:7024492337"
              className="w-full py-3 rounded-xl text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct Phone Line</span>
            </a>
          </div>
        </div>

        {/* Location & Resume Footer Card */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Location & Work Availability</h4>
              <p className="text-xs text-slate-400">Henderson, NV (US Citizen) • 100% Remote Engagements</p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('resume')}
            className="w-full md:w-auto px-6 py-3 rounded-xl text-xs font-bold bg-slate-950 text-slate-200 hover:bg-slate-800 border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Review Full Resume & Requirements</span>
          </button>
        </div>
      </div>
    </section>
  );
};

