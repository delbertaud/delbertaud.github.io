import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, DollarSign, ShieldCheck, Copy, Check } from 'lucide-react';
import { ConsultationForm } from '../types';

interface ContactFormProps {
  selectedServiceForContact?: string;
  setActiveTab: (tab: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedServiceForContact, setActiveTab }) => {
  const [formData, setFormData] = useState<ConsultationForm>({
    name: '',
    email: '',
    company: '',
    serviceType: selectedServiceForContact || 'AI & Machine Learning Consulting',
    engagementType: 'Contract ($65/hr)',
    projectDetails: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.message) {
        setSubmittedMessage(data.message);
      } else {
        setSubmittedMessage('Thank you! Your inquiry has been sent to Delbert Aud.');
      }
    } catch (err) {
      console.error(err);
      setSubmittedMessage('Thank you! Your inquiry has been registered.');
    } finally {
      setSubmitting(false);
    }
  };

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Consultation & Direct Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Schedule a Consulting Discussion
          </h2>
          <p className="text-slate-300 text-base">
            Reach out directly to discuss your automation roadmap, AI integration, RPA deployment, or contract engagement requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Direct Contact Info */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Direct Contact Info</h3>
              <p className="text-xs text-slate-400 mt-1">100% Remote Engagements • US Citizen based in Henderson, NV</p>
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</span>
              <div className="flex items-center justify-between">
                <a href="mailto:delbert.aud@gmail.com" className="text-sm font-bold text-cyan-300 hover:underline">
                  delbert.aud@gmail.com
                </a>
                <button
                  onClick={() => copyToClipboard('delbert.aud@gmail.com', 'email')}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs flex items-center gap-1"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone Number</span>
              <div className="flex items-center justify-between">
                <a href="tel:7024492337" className="text-sm font-bold text-cyan-300 hover:underline">
                  (702) 449-2337
                </a>
                <button
                  onClick={() => copyToClipboard('7024492337', 'phone')}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs flex items-center gap-1"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Engagement Summary */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Work Engagement Parameters</span>
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Work Model:</span>
                  <strong className="text-white">100% Remote Only</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Full-Time W2:</span>
                  <strong className="text-emerald-400">$120,000 / Year</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Contract Rate:</span>
                  <strong className="text-cyan-400">$65.00 / Hour</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Specialization:</span>
                  <strong className="text-slate-200">Security & Cloud</strong>
                </div>
              </div>
            </div>

            {/* Resume button link */}
            <button
              onClick={() => setActiveTab('resume')}
              className="w-full py-3 rounded-xl text-xs font-bold bg-slate-950 text-slate-200 hover:bg-slate-800 border border-slate-700 transition-all text-center"
            >
              Review Full /resume & Requirements
            </button>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Inquiry & Project Details</h3>
              <p className="text-xs text-slate-400 mt-1">Fill out the form below for an prompt response from Delbert Aud.</p>
            </div>

            {submittedMessage ? (
              <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{submittedMessage}</p>
                <button
                  onClick={() => setSubmittedMessage(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-cyan-300 border border-slate-800 hover:bg-slate-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-400">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-slate-950 text-slate-100 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-400">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@enterprise.com"
                      className="w-full bg-slate-950 text-slate-100 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-400">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Financials"
                      className="w-full bg-slate-950 text-slate-100 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-400">Engagement Type</label>
                    <select
                      value={formData.engagementType}
                      onChange={(e) =>
                        setFormData({ ...formData, engagementType: e.target.value as ConsultationForm['engagementType'] })
                      }
                      className="w-full bg-slate-950 text-slate-100 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Contract ($65/hr)">Contract Basis ($65/hr)</option>
                      <option value="Full-Time W2">Full-Time W2 ($120k/yr)</option>
                      <option value="Advisory Consultation">Advisory / Project Consultation</option>
                      <option value="Project Based">Project-Based Deliverable</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-400">Primary Capability Needed</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-950 text-slate-100 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyan-500"
                  >
                    <option value="AI & Machine Learning Consulting">AI & Machine Learning (n8n, Ollama, RAG, Gemini)</option>
                    <option value="Robotic Process Automation (RPA)">Robotic Process Automation (Automation Anywhere, Python)</option>
                    <option value="Custom Programming & Systems">Custom Programming (C++, Python, Go, Java, SQL)</option>
                    <option value="Cloud Infrastructure & Security">Cloud Architecture & Security</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-400">Project / Role Requirements</label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe your current bottleneck, system requirements, or open position parameters..."
                    className="w-full bg-slate-950 text-slate-100 border border-slate-800 rounded-xl p-3 text-xs focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
