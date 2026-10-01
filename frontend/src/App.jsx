import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchTypesSection from './components/SearchTypesSection';
import TrademarkInfoSection from './components/TrademarkInfoSection';
import HowItWorksSection from './components/HowItWorksSection';
import SearchFeaturesSection from './components/SearchFeaturesSection';
import FilteringSortingSection from './components/FilteringSortingSection';
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
            LANDING PAGE (17 User-Side Sections)
           ========================================================================= */}
        {activeTab === 'landing' && (
          <>
            {/* Section 4: Hero Section with Large Search Component */}
            <HeroSection onExecuteSearch={handleExecuteSearch} onNavigateTab={setActiveTab} />

            {/* Section 5: What Can You Search? (4 Cards) */}
            <SearchTypesSection onExecuteSearch={handleExecuteSearch} />

            {/* Section 6: Everything You Need to Know (8 Info Cards) */}
            <TrademarkInfoSection />

            {/* Section 7: How Wyt Works (3 Step Journey) */}
            <HowItWorksSection onNavigateSearch={() => handleExecuteSearch({ query: 'NIKE', searchType: 'trademark', searchMode: 'contains' })} />

            {/* Section 8: Search Features (Exact, Starts With, Contains) */}
            <SearchFeaturesSection onExecuteSearch={handleExecuteSearch} />

            {/* Sections 9 & 10: Filtering & Sorting Showcase */}
            <FilteringSortingSection onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />

            {/* Section 11: Explore Millions of Trademark Records */}
            <DatasetSection onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />


            {/* Section 13: Built for Trademark Research (Use Cases) */}
            <UseCasesSection onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />

            {/* Section 14: Trademark Information, All in One Place (Why Choose Wyt) */}
            <WhyWytSection />

            {/* Section 15: Need Help Finding Trademark Information? (Documentation) */}
            
            {/* Section 16: Final Call-to-Action Section */}
            <FinalCTA
              onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })}
              onOpenAuthModal={handleOpenAuthModal}
            />
          </>
        )}

        {/* How It Works Tab (Deep View) */}
        {activeTab === 'how-it-works' && (
          <div style={{ padding: '40px 0' }}>
            <HowItWorksSection onNavigateSearch={() => handleExecuteSearch({ query: 'NIKE', searchType: 'trademark', searchMode: 'contains' })} />
            <SearchFeaturesSection onExecuteSearch={handleExecuteSearch} />
            <FilteringSortingSection onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />
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
