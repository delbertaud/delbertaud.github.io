import React, { useState } from 'react';
import {
  FileText,
  Download,
  Printer,
  ShieldCheck,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  ExternalLink,
  DollarSign,
  Clock,
  Briefcase,
  Code2,
  Award,
  ChevronDown,
  ChevronUp,
  FileCode,
  Sparkles,
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ResumeViewProps {
  setActiveTab: (tab: string) => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ setActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedRole, setExpandedRole] = useState<number | null>(0);

  const handlePrint = () => {
    window.print();
  };

  const categories = ['All', ...RESUME_DATA.skillCategories.map((c) => c.category)];

  const filteredSkillCategories =
    selectedCategory === 'All'
      ? RESUME_DATA.skillCategories
      : RESUME_DATA.skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-12 lg:py-20 bg-slate-950 text-white relative print:bg-white print:text-black print:p-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Control Bar & Download Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 print:hidden">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white">Delbert Aud — Resume & Requirements</h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300">
                  /resume
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Senior IT Professional & Consultant | Automation, Software & AI Architect
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <a
              href="/api/resume/markdown"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-950 text-cyan-300 border border-slate-800 hover:bg-slate-800 transition-all flex items-center gap-1.5"
            >
              <FileCode className="w-4 h-4 text-cyan-400" />
              <span>Download Markdown (.md)</span>
            </a>

            <a
              href="/api/resume/requirements"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-950 text-emerald-300 border border-slate-800 hover:bg-slate-800 transition-all flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Requirements (.json)</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all flex items-center gap-1.5 font-bold shadow-md shadow-cyan-500/20"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* WORK ENGAGEMENT REQUIREMENTS BANNER */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-2 border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6 print:border-black print:bg-slate-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800 print:border-gray-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Immediate Availability • Work Requirements</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 print:text-black">
                Work Engagement Criteria
              </h2>
            </div>

            <button
              onClick={() => setActiveTab('contact')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all print:hidden shadow-lg shadow-cyan-500/20"
            >
              Hire / Book Consultation
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Requirement 1 */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-1 print:bg-white print:border-gray-300">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Work Location</span>
              <div className="text-lg font-black text-white print:text-black">100% Remote</div>
              <span className="text-xs text-slate-400 block">US Citizen (Henderson, NV)</span>
            </div>

            {/* Requirement 2 */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-1 print:bg-white print:border-gray-300">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Full-Time W2 Basis</span>
              <div className="text-lg font-black text-emerald-400 print:text-black">$120,000 / Year</div>
              <span className="text-xs text-slate-400 block">Annual salary target</span>
            </div>

            {/* Requirement 3 */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-1 print:bg-white print:border-gray-300">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Contract Rate</span>
              <div className="text-lg font-black text-cyan-400 print:text-black">$65.00 / Hour</div>
              <span className="text-xs text-slate-400 block">Contract / advisory rate</span>
            </div>

            {/* Requirement 4 */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-1 print:bg-white print:border-gray-300">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Target Positions</span>
              <div className="text-xs font-bold text-white print:text-black">
                Automation Architect, AI Consultant, Lead RPA Engineer
              </div>
            </div>
          </div>
        </div>

        {/* CANDIDATE HEADER / BIO */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 print:border-gray-300 print:bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black">
                  {RESUME_DATA.candidate.name}
                </h1>
                <p className="text-lg font-semibold text-cyan-400 print:text-gray-800 mt-1">
                  {RESUME_DATA.candidate.title}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 print:text-gray-700 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  {RESUME_DATA.candidate.location}
                </span>
                <a
                  href={`mailto:${RESUME_DATA.candidate.email}`}
                  className="flex items-center gap-1.5 text-cyan-300 hover:underline"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  {RESUME_DATA.candidate.email}
                </a>
                <a
                  href={`tel:${RESUME_DATA.candidate.phone}`}
                  className="flex items-center gap-1.5 text-cyan-300 hover:underline"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  {RESUME_DATA.candidate.phone}
                </a>
              </div>

              <p className="text-sm text-slate-300 print:text-gray-800 leading-relaxed">
                {RESUME_DATA.candidate.bio}
              </p>
            </div>

            <div className="md:col-span-4 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 print:bg-gray-100 print:border-gray-300">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-gray-700 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Professional Credentials</span>
              </h3>
              <div className="space-y-2">
                {RESUME_DATA.candidate.certifications.map((cert, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 print:bg-white print:text-black print:border-gray-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS MATRIX SECTION */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
            <div>
              <h2 className="text-2xl font-extrabold text-white">Technical Skills & Expertise Matrix</h2>
              <p className="text-xs text-slate-400">Deep domain proficiency built over 40+ years in technology</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkillCategories.map((group, groupIdx) => (
              <div
                key={groupIdx}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4 print:bg-white print:border-gray-300"
              >
                <div>
                  <h3 className="text-lg font-bold text-white print:text-black">{group.category}</h3>
                  <p className="text-xs text-slate-400 print:text-gray-600 mt-0.5">{group.description}</p>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-200 print:text-black">{skill.name}</span>
                        <span className="font-mono text-cyan-400 print:text-gray-700 text-[11px] font-semibold">
                          {skill.experienceYears}
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800 print:bg-gray-200">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-400 print:text-gray-600">{skill.highlights}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAREER HISTORY & HIGHLIGHTS */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 print:bg-white print:border-gray-300">
          <h2 className="text-2xl font-extrabold text-white print:text-black flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <span>Professional Work Experience</span>
          </h2>

          <div className="space-y-6">
            {RESUME_DATA.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 print:bg-slate-50 print:border-gray-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3 print:border-gray-300">
                  <div>
                    <h3 className="text-lg font-bold text-white print:text-black">{exp.role}</h3>
                    <p className="text-xs text-cyan-300 font-semibold print:text-gray-700">{exp.company} — {exp.location}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 print:bg-gray-200 print:text-black self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-300 print:text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION & CERTIFICATIONS */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 print:bg-white print:border-gray-300">
          <h2 className="text-2xl font-extrabold text-white print:text-black flex items-center gap-2">
            <Award className="w-6 h-6 text-emerald-400" />
            <span>Certifications & Education</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RESUME_DATA.educationAndCerts.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 print:bg-slate-50 print:border-gray-300">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 print:bg-gray-200 print:text-black">
                  {item.year}
                </span>
                <h3 className="text-sm font-bold text-white print:text-black">{item.title}</h3>
                <p className="text-xs text-cyan-400 font-medium">{item.issuer}</p>
                <p className="text-xs text-slate-400 print:text-gray-600 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
