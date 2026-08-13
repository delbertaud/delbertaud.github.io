import './index.css';
import {
  EXECUTIVE_PROFILE,
  SERVICE_PILLARS,
  CODE_SNIPPETS,
  CASE_STUDIES,
  WORK_HISTORY,
  DOWNLOADABLE_ASSETS
} from './data/portfolioData';

/**
 * DELBERT AUD — Business Process Automation Architect
 * Pure Vanilla JavaScript Client Application
 */

// State tracking
let activePillarId = 'bpa';
let activeSnippetId = 'rpa';
let activeCaseStudyId = 'industrial-liquid-filling';
let activeModalTab: 'resume' | 'work_history' = 'resume';
let isSimulating = false;
let simulationTimeout: any = null;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initEmailCopyHandlers();
  initMobileMenu();
  initPillarInteractions();
  initIdeInteractions();
  initCaseStudyInteractions();
  initRoiCalculator();
  initDownloadHandlers();
  initOutreachBuilder();
  initResumeModal();
});

/* ==========================================================================
   1. Email Copy & Clipboard Handlers
   ========================================================================== */
function initEmailCopyHandlers() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(EXECUTIVE_PROFILE.email).then(() => {
        const textSpan = btn.querySelector('.copy-text');
        const originalText = textSpan ? textSpan.textContent : 'Copy';
        if (textSpan) textSpan.textContent = 'Copied!';
        btn.classList.add('bg-cyan-900', 'text-cyan-200');

        setTimeout(() => {
          if (textSpan) textSpan.textContent = originalText;
          btn.classList.remove('bg-cyan-900', 'text-cyan-200');
        }, 2000);
      });
    });
  });
}

/* ==========================================================================
   2. Mobile Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = drawer.classList.contains('hidden');
    if (isHidden) {
      drawer.classList.remove('hidden');
    } else {
      drawer.classList.add('hidden');
    }
  });

  const mobileNavLinks = drawer.querySelectorAll('a');
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  });
}

/* ==========================================================================
   3. Technical Pillars Tab & Detail Card
   ========================================================================== */
function initPillarInteractions() {
  const pillarTabs = document.querySelectorAll('[data-pillar-tab]');
  pillarTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const pillarId = tab.getAttribute('data-pillar-tab');
      if (pillarId) {
        activePillarId = pillarId;
        updatePillarsUI();
      }
    });
  });
  updatePillarsUI();
}

function updatePillarsUI() {
  const pillar = SERVICE_PILLARS.find((p) => p.id === activePillarId) || SERVICE_PILLARS[0];

  // Update tab styles
  const pillarTabs = document.querySelectorAll('[data-pillar-tab]');
  pillarTabs.forEach((tab) => {
    const id = tab.getAttribute('data-pillar-tab');
    if (id === activePillarId) {
      tab.className = 'w-full text-left p-5 rounded-sm bg-[#111C30] border-2 border-[#00C4EE] transition-all shadow-lg text-white';
    } else {
      tab.className = 'w-full text-left p-5 rounded-sm bg-[#0D1527] border border-white/10 hover:border-white/20 transition-all text-slate-300';
    }
  });

  // Update Detail Card
  const detailContainer = document.getElementById('pillar-detail-content');
  if (!detailContainer) return;

  detailContainer.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
      <div>
        <span class="text-xs font-mono font-bold text-[#00C4EE] uppercase tracking-wider block mb-1">
          ${pillar.positioningLevel}
        </span>
        <h3 class="text-2xl font-black text-white tracking-tight">
          ${pillar.title}
        </h3>
      </div>
      <a href="#interactive-ide" onclick="window.selectIdeSnippet('${pillar.id}')" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#0A111E] hover:bg-white/10 text-xs font-mono font-bold text-[#00C4EE] border border-white/10 transition-all">
        <span>Inspect Code in IDE</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </a>
    </div>

    <!-- Strategic Focus -->
    <div class="p-4 rounded-sm bg-[#0A111E] border border-white/10">
      <div class="text-[11px] font-mono text-[#00C4EE] uppercase font-bold mb-1">Strategic Objective &amp; Scope:</div>
      <p class="text-sm text-slate-200 leading-relaxed">${pillar.strategicFocus}</p>
    </div>

    <!-- Key Architectural Capabilities -->
    <div class="space-y-3">
      <div class="text-xs font-mono font-bold text-white uppercase tracking-wider">Key Architectural Capabilities:</div>
      <ul class="space-y-2">
        ${pillar.capabilities.map((cap, i) => `
          <li class="flex items-start gap-2.5 text-xs text-slate-300">
            <span class="text-[#00C4EE] font-mono font-bold shrink-0">[0${i + 1}]</span>
            <span class="leading-relaxed">${cap}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <!-- Metrics & Technology -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
      <div class="space-y-2">
        <div class="text-xs font-mono font-bold text-white uppercase tracking-wider">Demonstrated Metrics:</div>
        <div class="grid grid-cols-2 gap-2">
          ${pillar.metrics.map(m => `
            <div class="p-3 rounded-sm bg-[#0A111E] border border-white/10 text-center">
              <div class="text-xl font-mono font-black text-[#00C4EE]">${m.value}</div>
              <div class="text-[10px] text-slate-400 font-mono mt-0.5">${m.label}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="space-y-2">
        <div class="text-xs font-mono font-bold text-white uppercase tracking-wider">Technology Stack:</div>
        <div class="flex flex-wrap gap-1.5 p-3 rounded-sm bg-[#0A111E] border border-white/10">
          ${pillar.techStack.map(tech => `
            <span class="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-[#111C30] text-slate-200 border border-white/10">
              ${tech}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Global helper for jumping from Pillar to IDE
(window as any).selectIdeSnippet = (pillarId: string) => {
  const map: Record<string, string> = {
    'bpa': 'rpa',
    'ai-workflow': 'ai-agent',
    'web-solutions': 'web-lead-ops',
    'iot-hardware': 'hardware-iot'
  };
  const targetSnippet = map[pillarId] || 'rpa';
  activeSnippetId = targetSnippet;
  updateIdeUI();
};

/* ==========================================================================
   4. Interactive IDE & Code Simulation
   ========================================================================== */
function initIdeInteractions() {
  const ideTabs = document.querySelectorAll('[data-ide-tab]');
  ideTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const snippetId = tab.getAttribute('data-ide-tab');
      if (snippetId) {
        activeSnippetId = snippetId;
        updateIdeUI();
      }
    });
  });

  const copyCodeBtn = document.getElementById('ide-copy-code-btn');
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const snippet = CODE_SNIPPETS.find(s => s.id === activeSnippetId) || CODE_SNIPPETS[0];
      navigator.clipboard.writeText(snippet.code).then(() => {
        const textSpan = copyCodeBtn.querySelector('span');
        if (textSpan) textSpan.textContent = 'Copied!';
        setTimeout(() => {
          if (textSpan) textSpan.textContent = 'Copy Code';
        }, 2000);
      });
    });
  }

  const runSimBtn = document.getElementById('ide-run-simulation-btn');
  if (runSimBtn) {
    runSimBtn.addEventListener('click', () => {
      executeSimulation();
    });
  }

  const clearLogBtn = document.getElementById('ide-clear-log-btn');
  if (clearLogBtn) {
    clearLogBtn.addEventListener('click', () => {
      const logBody = document.getElementById('ide-terminal-logs');
      if (logBody) {
        logBody.innerHTML = '<div class="text-[#94A3B8] italic">Ready. Click "Execute Live Simulation" to start daemon.</div>';
      }
    });
  }

  updateIdeUI();
}

function updateIdeUI() {
  const snippet = CODE_SNIPPETS.find(s => s.id === activeSnippetId) || CODE_SNIPPETS[0];

  // Update tabs
  const ideTabs = document.querySelectorAll('[data-ide-tab]');
  ideTabs.forEach((tab) => {
    const id = tab.getAttribute('data-ide-tab');
    if (id === activeSnippetId) {
      tab.className = 'px-4 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 bg-[#111C30] text-[#00C4EE] border border-cyan-500/40 shadow-sm';
    } else {
      tab.className = 'px-4 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 bg-[#0A111E] text-[#94A3B8] border border-white/10 hover:text-white hover:bg-white/5';
    }
  });

  // Update Code File Header info
  const filenameEl = document.getElementById('ide-filename-display');
  const descEl = document.getElementById('ide-description-display');
  if (filenameEl) filenameEl.textContent = snippet.filename;
  if (descEl) descEl.textContent = `${snippet.title} — ${snippet.description}`;

  // Render Code Lines
  const codeLinesContainer = document.getElementById('ide-code-content');
  if (codeLinesContainer) {
    const lines = snippet.code.trim().split('\n');
    codeLinesContainer.innerHTML = lines.map((line, idx) => {
      const lineNum = idx + 1;
      const formattedLine = escapeHtml(line);
      return `<div class="table-row font-mono text-xs leading-relaxed"><span class="table-cell select-none text-right pr-4 text-slate-600 font-mono w-10">${lineNum}</span><span class="table-cell whitespace-pre text-slate-200">${formattedLine}</span></div>`;
    }).join('');
  }

  // Clear or render initial terminal state
  const logBody = document.getElementById('ide-terminal-logs');
  if (logBody) {
    logBody.innerHTML = `
      <div class="text-[#94A3B8] text-xs font-mono">
        Loaded architecture file: <span class="text-[#00C4EE] font-bold">${snippet.filename}</span>. Click <span class="text-white font-bold">"Execute Live Simulation"</span> to run daemon.
      </div>
    `;
  }
}

function executeSimulation() {
  if (isSimulating) return;
  const snippet = CODE_SNIPPETS.find(s => s.id === activeSnippetId) || CODE_SNIPPETS[0];
  const logBody = document.getElementById('ide-terminal-logs');
  const runBtn = document.getElementById('ide-run-simulation-btn');
  if (!logBody || !runBtn) return;

  isSimulating = true;
  runBtn.classList.add('opacity-50', 'pointer-events-none');
  const runText = runBtn.querySelector('span');
  if (runText) runText.textContent = 'Simulating...';

  logBody.innerHTML = '';
  const logs = snippet.simulationLogs;
  let index = 0;

  function printNextLog() {
    if (index >= logs.length) {
      isSimulating = false;
      runBtn.classList.remove('opacity-50', 'pointer-events-none');
      if (runText) runText.textContent = 'Execute Live Simulation';
      return;
    }

    const log = logs[index];
    let badgeClass = 'bg-cyan-950 text-cyan-400 border-cyan-800';
    if (log.level === 'EXEC') badgeClass = 'bg-blue-950 text-blue-400 border-blue-800';
    if (log.level === 'SUCCESS') badgeClass = 'bg-emerald-950 text-emerald-400 border-emerald-800';
    if (log.level === 'WARN') badgeClass = 'bg-amber-950 text-amber-400 border-amber-800';

    const logRow = document.createElement('div');
    logRow.className = 'flex items-start gap-2.5 font-mono text-xs animate-fadeIn';
    logRow.innerHTML = `
      <span class="text-slate-500 shrink-0 select-none">[${log.time}]</span>
      <span class="px-1.5 py-0.2 rounded text-[10px] uppercase font-bold border ${badgeClass} shrink-0">${log.level}</span>
      <span class="text-slate-200">${escapeHtml(log.message)}</span>
    `;

    logBody.appendChild(logRow);
    logBody.scrollTop = logBody.scrollHeight;

    index++;
    simulationTimeout = setTimeout(printNextLog, 300);
  }

  printNextLog();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   5. Case Studies Switcher
   ========================================================================== */
function initCaseStudyInteractions() {
  const tabs = document.querySelectorAll('[data-case-tab]');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const caseId = tab.getAttribute('data-case-tab');
      if (caseId) {
        activeCaseStudyId = caseId;
        updateCaseStudyUI();
      }
    });
  });
  updateCaseStudyUI();
}

function updateCaseStudyUI() {
  const cs = CASE_STUDIES.find(c => c.id === activeCaseStudyId) || CASE_STUDIES[0];

  // Update tabs
  const tabs = document.querySelectorAll('[data-case-tab]');
  tabs.forEach((tab) => {
    const id = tab.getAttribute('data-case-tab');
    if (id === activeCaseStudyId) {
      tab.className = 'w-full text-left p-4 rounded-sm bg-[#111C30] border-2 border-[#00C4EE] shadow-md transition-all text-white';
    } else {
      tab.className = 'w-full text-left p-4 rounded-sm bg-[#0D1527] border border-white/10 hover:border-white/20 transition-all text-slate-300';
    }
  });

  // Render Case Study Container
  const container = document.getElementById('case-study-detail-content');
  if (!container) return;

  container.innerHTML = `
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
      <div>
        <span class="text-xs font-mono font-bold text-[#00C4EE] uppercase tracking-wider block mb-1">
          ${cs.badge}
        </span>
        <h3 class="text-2xl font-black text-white tracking-tight">
          ${cs.title}
        </h3>
        <p class="text-xs font-mono text-[#94A3B8] mt-1">${cs.category}</p>
      </div>

      <div class="flex flex-wrap gap-2">
        ${cs.metrics.map(m => `
          <div class="px-3 py-1.5 rounded-sm bg-[#0A111E] border border-white/10 text-center">
            <span class="text-sm font-mono font-bold text-[#00C4EE] block">${m.value}</span>
            <span class="text-[10px] text-slate-400 font-mono">${m.label}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 3-Box Architectural Breakdown: Problem / Architecture / Result -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
      
      <!-- 1. Problem & Bottleneck -->
      <div class="p-6 rounded-sm bg-[#0D1527] border border-rose-500/20 space-y-3">
        <div class="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          <span>1. Operational Problem</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${cs.problem}</p>
      </div>

      <!-- 2. System Architecture -->
      <div class="p-6 rounded-sm bg-[#0D1527] border border-cyan-500/20 space-y-3">
        <div class="flex items-center gap-2 text-[#00C4EE] font-mono text-xs font-bold uppercase tracking-wider">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
          <span>2. System Architecture</span>
        </div>
        <ul class="space-y-2 text-xs text-slate-300">
          ${cs.systemArchitecture.map(arch => `
            <li class="flex items-start gap-2">
              <span class="text-[#00C4EE] font-mono shrink-0">•</span>
              <span class="leading-relaxed">${arch}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- 3. Measurable Result -->
      <div class="p-6 rounded-sm bg-[#0D1527] border border-emerald-500/20 space-y-3">
        <div class="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>3. Verified Outcomes</span>
        </div>
        <ul class="space-y-2 text-xs text-slate-300">
          ${cs.businessResult.map(res => `
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-mono shrink-0">✓</span>
              <span class="leading-relaxed">${res}</span>
            </li>
          `).join('')}
        </ul>
      </div>

    </div>

    <!-- Tags -->
    <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
      <div class="flex flex-wrap gap-1.5">
        ${cs.tags.map(tag => `
          <span class="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-[#0A111E] text-slate-400 border border-white/10">
            ${tag}
          </span>
        `).join('')}
      </div>
      <a href="#interactive-ide" class="text-xs font-mono text-[#00C4EE] hover:underline inline-flex items-center gap-1">
        <span>Inspect associated architecture source code</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </a>
    </div>
  `;
}

/* ==========================================================================
   6. Operational Bottleneck & ROI Simulator
   ========================================================================== */
function initRoiCalculator() {
  const teamSlider = document.getElementById('slider-team-size') as HTMLInputElement;
  const hoursSlider = document.getElementById('slider-hours') as HTMLInputElement;
  const rateSlider = document.getElementById('slider-rate') as HTMLInputElement;
  const effSlider = document.getElementById('slider-efficiency') as HTMLInputElement;

  if (!teamSlider || !hoursSlider || !rateSlider || !effSlider) return;

  const updateCalculations = () => {
    const teamSize = parseInt(teamSlider.value, 10);
    const manualHours = parseInt(hoursSlider.value, 10);
    const hourlyRate = parseInt(rateSlider.value, 10);
    const efficiency = parseInt(effSlider.value, 10);

    // Update Slider Labels
    const teamLabel = document.getElementById('label-team-size');
    const hoursLabel = document.getElementById('label-hours');
    const rateLabel = document.getElementById('label-rate');
    const effLabel = document.getElementById('label-efficiency');

    if (teamLabel) teamLabel.textContent = `${teamSize} Engineers / Specialists`;
    if (hoursLabel) hoursLabel.textContent = `${manualHours} hrs / person / week`;
    if (rateLabel) rateLabel.textContent = `$${hourlyRate} / hr`;
    if (effLabel) effLabel.textContent = `${efficiency}% automation rate`;

    // Calculate
    const totalWeeklyHours = teamSize * manualHours;
    const annualHoursReclaimed = Math.round(totalWeeklyHours * 52 * (efficiency / 100));
    const annualSavings = Math.round(annualHoursReclaimed * hourlyRate);
    const monthlySavings = Math.round(annualSavings / 12);

    // Update outputs
    const annualEl = document.getElementById('output-annual-savings');
    const monthlyEl = document.getElementById('output-monthly-savings');
    const hoursEl = document.getElementById('output-hours-reclaimed');

    if (annualEl) annualEl.textContent = `$${annualSavings.toLocaleString()}`;
    if (monthlyEl) monthlyEl.textContent = `$${monthlySavings.toLocaleString()} / mo`;
    if (hoursEl) hoursEl.textContent = `${annualHoursReclaimed.toLocaleString()} hrs / yr`;
  };

  [teamSlider, hoursSlider, rateSlider, effSlider].forEach(slider => {
    slider.addEventListener('input', updateCalculations);
  });

  updateCalculations();
}

/* ==========================================================================
   7. Static Document Generator & Downloads
   ========================================================================== */
function initDownloadHandlers() {
  const downloadBtns = document.querySelectorAll('[data-download-asset]');
  downloadBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filename = btn.getAttribute('data-download-asset');
      if (filename) {
        triggerDocumentDownload(filename);
      }
    });
  });
}

function triggerDocumentDownload(filename: string) {
  let content = '';
  let mimeType = filename.endsWith('.docx')
    ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    : 'application/pdf';

  if (filename.includes('work_history')) {
    content = generateWorkHistoryText();
  } else {
    content = generateResumeText();
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

function generateResumeText(): string {
  return `================================================================================
DELBERT AUD
Business Process Automation Architect
Email: ${EXECUTIVE_PROFILE.email} | LinkedIn: ${EXECUTIVE_PROFILE.linkedinUrl}
Website: https://${EXECUTIVE_PROFILE.domain}
Location: United States / Remote
================================================================================

EXECUTIVE SUMMARY
-----------------
${EXECUTIVE_PROFILE.summary}

CORE SPECIALIZATIONS & ARCHITECTURAL PILLARS
-------------------------------------------
1. Business Process Automation (Primary Core):
   - Robotic Process Automation (RPA), end-to-end process streamlining, operational bottleneck elimination.
   - Technologies: Python, Playwright/Selenium, Celery/Redis, PostgreSQL, ETL Pipelines, Make/Zapier.

2. AI & Workflow Integration (Primary Core):
   - Custom AI workflows, intelligent document extraction, LLM agents, and operational performance optimization.
   - Technologies: TypeScript, Python, LLM Function Calling, RAG, Zod/Pydantic validation, Vector Stores.

3. Online Solutions Development (Primary Core):
   - Custom web-based solutions engineered specifically for operational enhancement and lead management.
   - Technologies: React, TypeScript, Node.js, Tailwind CSS, REST/GraphQL APIs, Cloud Run.

4. IoT & Custom Hardware Automation (Secondary / Niche Case Study):
   - Embedded C and Arduino-based control systems for industrial settings and liquid filling hardware.
   - Technologies: Embedded C/C++, Arduino Architecture, Hardware Interrupts, Solenoid Actuators, UART.

KEY MEASURABLE IMPACT
---------------------
• 84% Average Manual Labor Reduction across implemented enterprise automation pipelines.
• 99.9% System Process Reliability on autonomous background daemons.
• 10x Scaled Throughput on batch transaction processing and lead ingestion pipelines.
• 350% Increase in industrial liquid bottling line throughput via custom embedded C microcontroller systems.

PROFESSIONAL EXPERIENCE
-----------------------
${WORK_HISTORY.map(w => `
${w.role.toUpperCase()}
${w.organization} | ${w.period} | ${w.location}
Key Achievements:
${w.highlights.map(h => `  • ${h}`).join('\n')}
Core Skills: ${w.skills.join(', ')}
`).join('\n')}

CASE STUDY SUMMARY: INDUSTRIAL LIQUID FILLING SYSTEM
----------------------------------------------------
Problem: High fill variance (±7.5%), product overflow spills, and low throughput (<12 bpm).
Architecture: Embedded C interrupt-driven firmware on ATmega architecture, dual-stage pump/solenoid cutoff, optical bottle detection (INT0), hardware E-Stop (INT1).
Result: +350% throughput (42+ bpm), variance slashed to < ±0.5%, zero spill incidents, ROI payback in under 45 days.

================================================================================
`;
}

function generateWorkHistoryText(): string {
  return `================================================================================
DELBERT AUD — COMPREHENSIVE WORK HISTORY & PROJECT CHRONICLE
Business Process Automation Architect • Senior Systems Analyst
Email: ${EXECUTIVE_PROFILE.email} | LinkedIn: ${EXECUTIVE_PROFILE.linkedinUrl}
Website: https://${EXECUTIVE_PROFILE.domain}
================================================================================

CAREER CHRONICLE & ENGAGEMENTS
------------------------------
${WORK_HISTORY.map((item, idx) => `
[Phase 0${idx + 1}] ${item.role}
Organization: ${item.organization}
Tenure: ${item.period} | Location: ${item.location}

Scope & Core Responsibilities:
${item.highlights.map(h => `  • ${h}`).join('\n')}

Technical & Domain Competencies:
  ${item.skills.join(' • ')}
`).join('\n--------------------------------------------------------------------------------\n')}

DETAILED TECHNICAL CASE STUDIES & ARCHITECTURAL DELIVERABLES
------------------------------------------------------------
${CASE_STUDIES.map(cs => `
CASE STUDY: ${cs.title.toUpperCase()}
Category: ${cs.category} (${cs.badge})

1. Business Problem:
   ${cs.problem}

2. System Architecture & Technical Implementation:
${cs.systemArchitecture.map(a => `   - ${a}`).join('\n')}

3. Business & ROI Outcomes:
${cs.businessResult.map(r => `   - ${r}`).join('\n')}

4. Metrics & Performance Indicators:
${cs.metrics.map(m => `   - ${m.label}: ${m.value}`).join('\n')}
`).join('\n--------------------------------------------------------------------------------\n')}
================================================================================
`;
}

/* ==========================================================================
   8. Direct Outreach Message Builder
   ========================================================================== */
function initOutreachBuilder() {
  const templates = {
    fulltime: {
      subject: 'Executive Inquiry: Business Process Automation Architect Role',
      body: `Hi Delbert,\n\nI reviewed your systems architecture portfolio and work history on ${EXECUTIVE_PROFILE.domain}. We have high-priority operational workflows and scaling initiatives where your background in business process automation, AI pipelines, and systems analysis would create immediate impact.\n\nCould we connect this week for a preliminary technical discussion?\n\nBest regards,\n[Your Name]\n[Your Organization]`
    },
    consulting: {
      subject: 'Consulting Engagement / Systems Analysis Audit Inquiry',
      body: `Hi Delbert,\n\nWe are looking to eliminate critical operational bottlenecks and automate cross-platform workflows across our systems. We would like to explore a consulting engagement or technical audit.\n\nPlease let us know your availability for a 20-minute architecture discovery call.\n\nBest regards,\n[Your Name]\n[Your Company]`
    },
    hardware: {
      subject: 'Hardware & IoT Embedded Automation Advisory',
      body: `Hi Delbert,\n\nI came across your embedded C industrial automation and microcontroller case studies. We are developing custom physical/sensor-driven hardware automation and would value your architectural guidance.\n\nLooking forward to connecting.\n\nBest regards,\n[Your Name]`
    }
  };

  const templateButtons = document.querySelectorAll('[data-template]');
  const subjectInput = document.getElementById('outreach-subject') as HTMLInputElement;
  const bodyInput = document.getElementById('outreach-body') as HTMLTextAreaElement;
  const copyBtn = document.getElementById('outreach-copy-btn');

  const setTemplate = (key: 'fulltime' | 'consulting' | 'hardware') => {
    const t = templates[key] || templates.fulltime;
    if (subjectInput) subjectInput.value = t.subject;
    if (bodyInput) bodyInput.value = t.body;

    templateButtons.forEach((btn) => {
      const bKey = btn.getAttribute('data-template');
      if (bKey === key) {
        btn.className = 'px-3 py-1.5 rounded-sm bg-cyan-950 text-[#00C4EE] border border-cyan-500/50 text-xs font-mono font-bold uppercase tracking-wider';
      } else {
        btn.className = 'px-3 py-1.5 rounded-sm bg-[#0A111E] text-slate-400 border border-white/10 hover:text-white text-xs font-mono font-bold uppercase tracking-wider';
      }
    });
  };

  templateButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-template') as any;
      if (key) setTemplate(key);
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = `Subject: ${subjectInput?.value || ''}\n\n${bodyInput?.value || ''}`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const textSpan = copyBtn.querySelector('span');
        if (textSpan) textSpan.textContent = 'Message Copied!';
        setTimeout(() => {
          if (textSpan) textSpan.textContent = 'Copy Formatted Message';
        }, 2000);
      });
    });
  }

  setTemplate('fulltime');
}

/* ==========================================================================
   9. Resume & Detailed Work History Modal
   ========================================================================== */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const openButtons = document.querySelectorAll('[data-open-resume-modal]');
  const closeBtn = document.getElementById('resume-modal-close-btn');

  if (!modal) return;

  const openModal = (tab: 'resume' | 'work_history' = 'resume') => {
    activeModalTab = tab;
    updateModalContent();
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  openButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-modal-tab') as any;
      openModal(tab === 'work_history' ? 'work_history' : 'resume');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Modal Tab Switchers
  const tabResumeBtn = document.getElementById('modal-tab-resume');
  const tabHistoryBtn = document.getElementById('modal-tab-history');

  if (tabResumeBtn) {
    tabResumeBtn.addEventListener('click', () => {
      activeModalTab = 'resume';
      updateModalContent();
    });
  }

  if (tabHistoryBtn) {
    tabHistoryBtn.addEventListener('click', () => {
      activeModalTab = 'work_history';
      updateModalContent();
    });
  }

  // Modal Download Buttons
  const downloadPdfBtn = document.getElementById('modal-download-pdf-btn');
  const downloadDocxBtn = document.getElementById('modal-download-docx-btn');

  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', () => {
      triggerDocumentDownload(activeModalTab === 'resume' ? 'delbert_aud_resume.pdf' : 'delbert_aud_work_history.pdf');
    });
  }

  if (downloadDocxBtn) {
    downloadDocxBtn.addEventListener('click', () => {
      triggerDocumentDownload(activeModalTab === 'resume' ? 'delbert_aud_resume.docx' : 'delbert_aud_work_history.docx');
    });
  }
}

function updateModalContent() {
  const tabResumeBtn = document.getElementById('modal-tab-resume');
  const tabHistoryBtn = document.getElementById('modal-tab-history');
  const bodyContainer = document.getElementById('modal-document-body');

  if (tabResumeBtn && tabHistoryBtn) {
    if (activeModalTab === 'resume') {
      tabResumeBtn.className = 'px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 bg-cyan-950 text-[#00C4EE] border border-cyan-500/50 shadow-sm';
      tabHistoryBtn.className = 'px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 text-[#94A3B8] hover:text-white hover:bg-white/5';
    } else {
      tabHistoryBtn.className = 'px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 bg-cyan-950 text-[#00C4EE] border border-cyan-500/50 shadow-sm';
      tabResumeBtn.className = 'px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 text-[#94A3B8] hover:text-white hover:bg-white/5';
    }
  }

  if (!bodyContainer) return;

  if (activeModalTab === 'resume') {
    bodyContainer.innerHTML = `
      <div class="space-y-8 animate-fadeIn">
        
        <!-- Executive Summary -->
        <div>
          <h3 class="text-xs font-mono font-bold text-[#00C4EE] uppercase tracking-wider pb-2 border-b border-white/10 mb-3">
            Executive Summary
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed">
            ${EXECUTIVE_PROFILE.summary}
          </p>
        </div>

        <!-- Core Architectural Pillars -->
        <div>
          <h3 class="text-xs font-mono font-bold text-[#00C4EE] uppercase tracking-wider pb-2 border-b border-white/10 mb-3">
            Core Specializations &amp; Architectural Pillars
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${SERVICE_PILLARS.map(p => `
              <div class="p-3.5 rounded-sm bg-[#111C30] border border-white/10">
                <div class="flex items-center justify-between mb-1">
                  <h4 class="text-xs font-bold text-white">${p.title}</h4>
                  <span class="text-[9px] font-mono text-[#00C4EE]">${p.positioningLevel}</span>
                </div>
                <p class="text-[11px] text-[#94A3B8] leading-relaxed mb-2">
                  ${p.strategicFocus}
                </p>
                <div class="flex flex-wrap gap-1">
                  ${p.techStack.slice(0, 4).map(tech => `
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-[#0A111E] text-slate-300 border border-white/10">
                      ${tech}
                    </span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Quantified Impact Highlights -->
        <div>
          <h3 class="text-xs font-mono font-bold text-[#00C4EE] uppercase tracking-wider pb-2 border-b border-white/10 mb-3">
            Verified Performance Metrics
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            ${EXECUTIVE_PROFILE.stats.map(s => `
              <div class="p-3 rounded-sm bg-[#0A111E] border border-white/10 text-center">
                <div class="text-xl font-mono font-black text-[#00C4EE]">${s.value}</div>
                <div class="text-[11px] text-slate-300 font-bold mt-0.5">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Professional Experience -->
        <div>
          <h3 class="text-xs font-mono font-bold text-[#00C4EE] uppercase tracking-wider pb-2 border-b border-white/10 mb-4">
            Professional Experience
          </h3>
          <div class="space-y-6">
            ${WORK_HISTORY.map(exp => `
              <div class="space-y-2">
                <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 class="text-sm font-bold text-white">${exp.role}</h4>
                  <span class="text-xs font-mono text-[#00C4EE]">${exp.period}</span>
                </div>
                <div class="text-xs font-medium text-[#94A3B8]">${exp.organization} • ${exp.location}</div>
                <ul class="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  ${exp.highlights.map(hl => `<li class="leading-relaxed">${hl}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;
  } else {
    bodyContainer.innerHTML = `
      <div class="space-y-8 animate-fadeIn">
        
        <div>
          <h3 class="text-xs font-mono font-bold text-[#00C4EE] uppercase tracking-wider pb-2 border-b border-white/10 mb-4">
            Comprehensive Career Chronicle &amp; Technical Deliverables
          </h3>
          <div class="space-y-6">
            ${WORK_HISTORY.map(item => `
              <div class="p-5 rounded-sm bg-[#111C30] border border-white/10 space-y-3">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 class="text-base font-bold text-white">${item.role}</h4>
                  <span class="text-xs font-mono text-[#00C4EE] px-2.5 py-0.5 rounded-sm bg-[#0A111E] border border-white/10">
                    ${item.period}
                  </span>
                </div>
                <div class="text-xs text-[#94A3B8]">${item.organization} • ${item.location}</div>
                
                <div class="space-y-2 pt-2">
                  <div class="text-xs font-mono text-slate-300 uppercase font-bold">Core Deliverables &amp; Outcomes:</div>
                  <ul class="space-y-2 text-xs text-slate-300">
                    ${item.highlights.map(h => `
                      <li class="flex items-start gap-2">
                        <span class="text-[#00C4EE] font-mono shrink-0">•</span>
                        <span class="leading-relaxed">${h}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div class="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                  ${item.skills.map(s => `
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#0A111E] text-[#94A3B8] border border-white/10">
                      ${s}
                    </span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Case Study Summaries -->
        <div>
          <h3 class="text-xs font-mono font-bold text-[#00C4EE] uppercase tracking-wider pb-2 border-b border-white/10 mb-4">
            Archived Systems Case Studies
          </h3>
          <div class="space-y-4">
            ${CASE_STUDIES.map(cs => `
              <div class="p-4 rounded-sm bg-[#111C30] border border-white/10 space-y-2">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-bold text-white">${cs.title}</h4>
                  <span class="text-[10px] font-mono text-[#00C4EE]">${cs.category}</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">
                  <span class="text-slate-400 font-semibold">Problem: </span>${cs.problem}
                </p>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  ${cs.metrics.map(m => `
                    <div class="p-2 rounded-sm bg-[#0A111E] text-center border border-white/5">
                      <span class="text-xs font-mono font-black text-[#00C4EE] block">${m.value}</span>
                      <span class="text-[10px] text-[#94A3B8]">${m.label}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;
  }
}
