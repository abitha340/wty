import React, { useState, useEffect } from 'react';
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

  // Global Down-to-Up Scroll Reveal Intersection Observer
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    const elements = document.querySelectorAll('.motion-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

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
            LANDING PAGE (Every field comes down-to-up with smooth motion)
           ========================================================================= */}
        {activeTab === 'landing' && (
          <>
            {/* Field 1: Hero Section */}
            <div className="motion-reveal motion-visible animate-fade-up">
              <HeroSection onExecuteSearch={handleExecuteSearch} onNavigateTab={setActiveTab} />
            </div>

            {/* Field 2: What Can You Search? */}
            <div className="motion-reveal">
              <SearchTypesSection onExecuteSearch={handleExecuteSearch} />
            </div>

            {/* Field 3: Everything You Need to Know (Bento Grid) */}
            <div className="motion-reveal">
              <TrademarkInfoSection />
            </div>

            {/* Field 4: How Wyt Works (3 Step Split Layout) */}
            <div className="motion-reveal">
              <HowItWorksSection onNavigateSearch={() => handleExecuteSearch({ query: 'NIKE', searchType: 'trademark', searchMode: 'contains' })} />
            </div>

            {/* Field 5: Search Features (Exact, Starts With, Contains) */}
            <div className="motion-reveal">
              <SearchFeaturesSection onExecuteSearch={handleExecuteSearch} />
            </div>

            {/* Field 6: Explore Millions of Trademark Records */}
            <div className="motion-reveal">
              <DatasetSection onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />
            </div>

            {/* Field 7: Built for Trademark Research (Scrollytelling) */}
            <div className="motion-reveal">
              <UseCasesSection onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />
            </div>

            {/* Field 8: Trademark Information, All in One Place */}
            <div className="motion-reveal">
              <WhyWytSection onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />
            </div>
          </>
        )}

        {/* How It Works Tab (Deep View with Down-to-Up Motion) */}
        {activeTab === 'how-it-works' && (
          <div style={{ padding: '40px 0' }}>
            <div className="motion-reveal motion-visible animate-fade-up">
              <HowItWorksSection onNavigateSearch={() => handleExecuteSearch({ query: 'NIKE', searchType: 'trademark', searchMode: 'contains' })} />
            </div>
            <div className="motion-reveal">
              <SearchFeaturesSection onExecuteSearch={handleExecuteSearch} />
            </div>
            <div className="motion-reveal">
              <FinalCTA
                onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })}
                onOpenAuthModal={handleOpenAuthModal}
              />
            </div>
          </div>
        )}

        {/* Search Explorer Page */}
        {activeTab === 'search' && (
          <div className="motion-reveal motion-visible animate-fade-up">
            <SearchExplorer
              initialQuery={searchParams.query}
              initialMode={searchParams.searchMode}
              initialType={searchParams.searchType}
            />
          </div>
        )}

        {/* User Documentation Page */}
        {activeTab === 'docs' && (
          <div className="motion-reveal motion-visible animate-fade-up">
            <UserDocs onNavigateSearch={() => handleExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })} />
          </div>
        )}

      </main>

      {/* Auth Modal (Sign In / Register) */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />

      {/* User Footer with Motion */}
      <div className="motion-reveal">
        <Footer setActiveTab={setActiveTab} onOpenAuthModal={handleOpenAuthModal} />
      </div>

    </div>
  );
}
