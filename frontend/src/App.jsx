import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchTypesSection from './components/SearchTypesSection';
import TrademarkInfoSection from './components/TrademarkInfoSection';
import HowItWorksSection from './components/HowItWorksSection';
import SearchFeaturesSection from './components/SearchFeaturesSection';
import DatasetSection from './components/DatasetSection';
import UseCasesSection from './components/UseCasesSection';
import WhyWytSection from './components/WhyWytSection';
import FinalCTA from './components/FinalCTA';
import SearchExplorer from './components/SearchExplorer';
import UserDocs from './components/UserDocs';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing'); // 'landing' | 'search' | 'how-it-works' | 'docs'
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login'); // 'login' | 'register'

  // Search parameters transferred from landing hero to search page
  const [searchParams, setSearchParams] = useState({
    query: '',
    searchType: 'trademark',
    searchMode: 'contains'
  });

  const handleExecuteSearch = ({ query, searchType, searchMode }) => {
    setSearchParams({ query, searchType, searchMode });
    setActiveTab('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuthModal = (mode = 'login') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-page)' }}>
      
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAuthModal={handleOpenAuthModal}
      />

      {/* Main Content Areas */}
      <main style={{ flex: 1 }}>
        
        {/* =========================================================================
            LANDING PAGE
           ========================================================================= */}
        {activeTab === 'landing' && (
          <>
            {/* Hero Section with Large Search Component */}
            <HeroSection onExecuteSearch={handleExecuteSearch} onNavigateTab={setActiveTab} />

            {/* What Can You Search? (4 Cards) */}
            <SearchTypesSection onExecuteSearch={handleExecuteSearch} />

            {/* Everything You Need to Know (Bento Grid) */}
            <TrademarkInfoSection />

            {/* How Wyt Works (3 Step Split Layout) */}
            <HowItWorksSection onNavigateSearch={() => handleExecuteSearch({ query: 'NIKE', searchType: 'trademark', searchMode: 'contains' })} />

            {/* Search Features (Exact, Starts With, Contains) */}
            <SearchFeaturesSection onExecuteSearch={handleExecuteSearch} />

            {/* Explore Millions of Trademark Records */}
            <DatasetSection onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />

            {/* Built for Trademark Research (Use Cases) */}
            <UseCasesSection onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />

            {/* Trademark Information, All in One Place (Why Choose Wyt) */}
            <WhyWytSection onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />
          </>
        )}

        {/* How It Works Tab (Deep View) */}
        {activeTab === 'how-it-works' && (
          <div style={{ padding: '40px 0' }}>
            <HowItWorksSection onNavigateSearch={() => handleExecuteSearch({ query: 'NIKE', searchType: 'trademark', searchMode: 'contains' })} />
            <SearchFeaturesSection onExecuteSearch={handleExecuteSearch} />
            <FinalCTA
              onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })}
              onOpenAuthModal={handleOpenAuthModal}
            />
          </div>
        )}

        {/* Search Explorer Page */}
        {activeTab === 'search' && (
          <SearchExplorer
            initialQuery={searchParams.query}
            initialMode={searchParams.searchMode}
            initialType={searchParams.searchType}
          />
        )}

        {/* User Documentation Page */}
        {activeTab === 'docs' && (
          <UserDocs onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />
        )}

      </main>

      {/* Auth Modal (Sign In / Register) */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />

      {/* User Footer */}
      <Footer setActiveTab={setActiveTab} onOpenAuthModal={handleOpenAuthModal} />

    </div>
  );
}
