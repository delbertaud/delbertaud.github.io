import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { RoiCalculator } from './components/RoiCalculator';
import { Portfolio } from './components/Portfolio';
import { ResumeView } from './components/ResumeView';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('services');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Enterprise AI Strategy, Custom RAG & Gemini API Deployment');

  // Handle URL hash routing (e.g. /#resume or /#calculator)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['services', 'calculator', 'portfolio', 'resume', 'contact'].includes(hash)) {
        setActiveTab(hash);
      } else if (window.location.pathname.startsWith('/resume')) {
        setActiveTab('resume');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
      <div>
        {/* Navigation Header */}
        <Header activeTab={activeTab} setActiveTab={handleTabChange} />

        {/* Hero Section displayed on top when on 'services' tab */}
        {activeTab === 'services' && <Hero setActiveTab={handleTabChange} />}

        {/* Main Active Tab Content */}
        <main>
          {activeTab === 'services' && (
            <Services
              setActiveTab={handleTabChange}
              setSelectedServiceForContact={setSelectedServiceForContact}
            />
          )}

          {activeTab === 'calculator' && <RoiCalculator setActiveTab={handleTabChange} />}

          {activeTab === 'portfolio' && <Portfolio setActiveTab={handleTabChange} />}

          {activeTab === 'resume' && <ResumeView setActiveTab={handleTabChange} />}

          {activeTab === 'contact' && (
            <ContactForm
              selectedServiceForContact={selectedServiceForContact}
              setActiveTab={handleTabChange}
            />
          )}
        </main>
      </div>

      {/* Shared Footer */}
      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}
