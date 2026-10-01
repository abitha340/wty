import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import RecordSchemaSection from './components/RecordSchemaSection';
import PricingSection from './components/PricingSection';
import UseCaseSection from './components/UseCaseSection';
import SearchExplorer from './components/SearchExplorer';
import Dashboard from './components/Dashboard';
import ApiDocs from './components/ApiDocs';
import ContactSection from './components/ContactSection';
import CreditPurchaseModal from './components/CreditPurchaseModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [dashboardData, setDashboardData] = useState(null);
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);

  // Theme Management: 'dark' | 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('wyt_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wyt_theme', theme);
  }, [theme]);

  // Search explorer transfer state
  const [initialSearchQuery, setInitialSearchQuery] = useState('');
  const [initialSearchMode, setInitialSearchMode] = useState('contains');

  const fetchDashboardData = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/v1/usage/dashboard');
      if (res.ok) {
        const data = await res.json();
        setDashboardData(data);
      }
    } catch (err) {
      console.warn("Dashboard sync warning:", err);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleRunDemoSearch = (query, mode) => {
    setInitialSearchQuery(query);
    setInitialSearchMode(mode);
    setActiveTab('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        dashboardData={dashboardData}
        onOpenCreditsModal={() => setIsCreditsModalOpen(true)}
        theme={theme}
        setTheme={setTheme}
      />

      <main style={{ flex: 1 }}>
        {activeTab === 'landing' && (
          <>
            <HeroSection
              setActiveTab={setActiveTab}
              onRunDemoSearch={handleRunDemoSearch}
            />
            <FeaturesSection
              onRunDemoSearch={handleRunDemoSearch}
            />
            <RecordSchemaSection />
            <PricingSection
              onOpenCreditsModal={() => setIsCreditsModalOpen(true)}
            />
            <UseCaseSection
              setActiveTab={setActiveTab}
            />
          </>
        )}

        {activeTab === 'search' && (
          <SearchExplorer
            initialQuery={initialSearchQuery}
            initialMode={initialSearchMode}
            onDeductCredit={fetchDashboardData}
          />
        )}

        {activeTab === 'dashboard' && (
          <Dashboard
            dashboardData={dashboardData}
            refreshDashboard={fetchDashboardData}
            onOpenCreditsModal={() => setIsCreditsModalOpen(true)}
          />
        )}

        {activeTab === 'docs' && (
          <ApiDocs />
        )}

        {activeTab === 'contact' && (
          <ContactSection />
        )}
      </main>

      <CreditPurchaseModal
        isOpen={isCreditsModalOpen}
        onClose={() => setIsCreditsModalOpen(false)}
        onCreditPurchased={fetchDashboardData}
      />

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
