/**
 * DELBERT AUD (GOOGLE GEMINI EXPERT) - PORTFOLIO & ENGINEERING SHOWCASE
 * Pure Vanilla JavaScript - Zero Framework Dependencies - GitHub Pages Ready
 */

// Projects Data for Modal Deep Dive
const PROJECTS_DATA = {
  pipeline: {
    title: "AI-Powered Data Pipeline & Business Intelligence",
    category: "AI & Data Engineering",
    desc: "Designed and deployed an end-to-end automated intelligence pipeline combining n8n visual orchestration with Ollama local LLM execution. Ingests raw business logs and structured records to autonomously classify, summarize, and extract actionable business insights without sending sensitive client data outside the enterprise boundary.",
    tech: ["n8n", "Ollama", "LangChain", "PostgreSQL", "Docker", "Python"],
    impact: "Cut manual data analysis time by 75% while keeping all proprietary data 100% on-premises."
  },
  arduino: {
    title: "Automated Hardware Liquid Filling Station",
    category: "IoT & Hardware Automation",
    desc: "Architected an industrial IoT precision fluid dispensing system using custom Arduino microcontrollers, flow meters, load sensors, and relay valves. Programmed in optimized C/C++ with robust fault-detection algorithms and real-time calibration.",
    tech: ["Arduino", "C++", "Hardware IoT", "Relay Control", "Sensors"],
    impact: "Reduced fluid material waste by over 40% with sub-milliliter precision repeatability."
  },
  sumreyes: {
    title: "Enterprise Avaya Telephony Hub (Sumreyes)",
    category: "Enterprise Data Hub",
    desc: "Designed and engineered a high-volume data aggregation platform that captures Call Detail Records (CDR) and telemetry from Avaya communication systems. Streamed events via high-throughput REST endpoints into clustered Microsoft SQL Server tables with custom reporting views.",
    tech: ["Avaya CTI", "REST API", "Microsoft SQL Server", "C# / .NET", "DCOM"],
    impact: "Unified 50,000+ daily telephony records across distributed branches into single real-time warehouse."
  },
  ivanti: {
    title: "Ivanti Ticket Automation & Smart Routing",
    category: "AI & Process Automation",
    desc: "Developed a Python automation service that continuously monitors new incoming Ivanti Service Manager tickets. Performs natural language skill matching against active support engineers' shifts and specialized expertise, automatically routing work orders without human dispatcher bottlenecks.",
    tech: ["Python", "Ivanti API", "NLP", "Process Automation", "SQL"],
    impact: "Reduced initial ticket assignment response time from 45 minutes to under 15 seconds."
  },
  oracle: {
    title: "Oracle OBIEE Automated Reporting & ETL",
    category: "Data Warehousing",
    desc: "Managed mission-critical Oracle OBIEE enterprise business intelligence clusters. Designed unattended batch reporting systems utilizing AutoSys scheduling, RoboFTP encrypted transfers, and PowerShell automation to reliably deliver daily executive digests.",
    tech: ["Oracle OBIEE", "AutoSys", "RoboFTP", "PowerShell", "SQL"],
    impact: "Guaranteed 99.99% on-time delivery of daily compliance and executive reporting packets."
  },
  elastic: {
    title: "Help Desk Elastic Intelligence Dashboard",
    category: "Dashboards & Search",
    desc: "Engineered a high-performance web dashboard with Classic ASP and ASP.NET backed by Elasticsearch and SQL Server. Allowed IT support supervisors to perform instantaneous full-text searches across millions of historical support tickets.",
    tech: ["Elasticsearch", "SQL Server", "Classic ASP", "ASP.NET", "Kibana"],
    impact: "Decreased ticket investigation and resolution lookup times from minutes to sub-second search speeds."
  }
};

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initProjectModals();
  initScrollSpy();
});

/* ==========================================================================
   Theme Switcher (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('da_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('da_theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById('themeIcon');
  if (!iconSpan) return;
  
  if (theme === 'dark') {
    // Moon Icon
    iconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    // Sun Icon
    iconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

/* ==========================================================================
   Navigation & Mobile Drawer
   ========================================================================== */
function initNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Close mobile nav on link click
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ==========================================================================
   Scroll Spy for Active Link
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;
    
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Project Deep Dive Modal
   ========================================================================== */
function initProjectModals() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalCloseBtn');
  const openButtons = document.querySelectorAll('[data-project-target]');
  
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalTech = document.getElementById('modalProjectTech');
  const modalImpact = document.getElementById('modalProjectImpact');
  
  function openModal(projectId) {
    const project = PROJECTS_DATA[projectId];
    if (!project || !modalBackdrop) return;
    
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalCategory) modalCategory.textContent = project.category;
    if (modalDesc) modalDesc.textContent = project.desc;
    if (modalImpact) modalImpact.textContent = project.impact;
    
    if (modalTech) {
      modalTech.innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    }
    
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-project-target');
      openModal(targetId);
    });
  });
  
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;
  
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
