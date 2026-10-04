import React, { useState } from 'react';
import exactUiAsset from '../assets/tm_mode_exact_match_ui.jpg';
import startswithUiAsset from '../assets/tm_mode_startswith_ui.jpg';
import containsUiAsset from '../assets/tm_mode_contains_ui.jpg';
import { Target, AlignLeft, Search, ArrowRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export default function SearchFeaturesSection({ onExecuteSearch, setActiveTab }) {
  const [activeMode, setActiveMode] = useState('exact');

  const modes = [
    {
      id: 'exact',
      label: 'Exact Match',
      icon: Target,
      headline: 'Pinpoint exact trademark records with 100% precision',
      desc: 'Search for the exact brand name with zero false positives. Instantly verify identical filings, active certificate numbers, and direct trademark conflicts.',
      sampleQuery: 'NIKE',
      btnText: 'Run Exact Match Search',
      badges: [
        { icon: ShieldCheck, label: '100% Exact Precision' },
        { icon: Zap, label: 'Instant Status Verification' }
      ],
      imgAsset: exactUiAsset
    },
    {
      id: 'startswith',
      label: 'Starts With',
      icon: AlignLeft,
      headline: 'Discover brand extensions, prefixes, and variations',
      desc: 'Find all trademarks that begin with your specific prefix. Ideal for monitoring brand families, product extensions, and newly filed competitor lines.',
      sampleQuery: 'TECH',
      btnText: 'Run Starts With Search',
      badges: [
        { icon: Layers, label: 'Prefix & Autocomplete' },
        { icon: ShieldCheck, label: 'Class 01–45 Categorization' }
      ],
      imgAsset: startswithUiAsset
    },
    {
      id: 'contains',
      label: 'Contains',
      icon: Search,
      headline: 'Explore substring matches across entire brand names',
      desc: 'Search anywhere inside multi-word, compound, or stylized trademark names. Uncover hidden market similarities, partial overlaps, and phonetic risks.',
      sampleQuery: 'SPARK',
      btnText: 'Run Contains Search',
      badges: [
        { icon: Sparkles, label: 'Compound Word Lookup' },
        { icon: Target, label: 'Phonetic & Substring Score' }
      ],
      imgAsset: containsUiAsset
    }
  ];

  const currentMode = modes.find((m) => m.id === activeMode) || modes[0];

  const handleLaunch = () => {
    if (onExecuteSearch) {
      onExecuteSearch({
        query: currentMode.sampleQuery,
        searchType: 'trademark',
        searchMode: currentMode.id
      });
    } else if (setActiveTab) {
      setActiveTab('search');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      paddingTop: '88px',
      paddingBottom: '96px',
      background: '#ca8643',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      
      {/* Subtle Warm Amber Highlights */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '10%',
        width: '600px',
        height: '350px',
        background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 48px)',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* =========================================================================
            TOP HEADER (MATCHING REFERENCE TWO-LINE BOLD TITLE)
           ========================================================================= */}
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 4.4vw, 4rem)',
            fontWeight: '900',
            letterSpacing: '-0.04em',
            color: '#ffffff',
            lineHeight: 1.12,
            margin: 0
          }}>
            Search the Way You Need.<br />
            Powering Trademark Discovery.
          </h2>
        </div>

        {/* =========================================================================
            HORIZONTAL PILL SWITCHER (BACKGROUND #ca8643, WHEN CLICKED BECOMES BLACK)
           ========================================================================= */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px',
          borderRadius: '9999px',
          background: 'rgba(0, 0, 0, 0.16)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          marginBottom: '52px',
          flexWrap: 'wrap'
        }} className="search-mode-pill-bar">
          {modes.map((mode) => {
            const isActive = activeMode === mode.id;
            const IconComponent = mode.icon;

            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 26px',
                  borderRadius: '9999px',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.18)' : '1px solid transparent',
                  background: isActive ? '#000000' : 'transparent',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: isActive ? '800' : '600',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 6px 20px rgba(0, 0, 0, 0.35)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <IconComponent size={18} strokeWidth={isActive ? 2.5 : 2} color="#ffffff" />
                <span>{mode.label}</span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            2-COLUMN CONTENT SECTION: LEFT = INFO & CTA | RIGHT = SOFTWARE UI WINDOW
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 420px) minmax(500px, 1fr)',
          gap: '48px',
          alignItems: 'center'
        }} className="search-mode-content-grid">
          
          {/* =======================================================================
              LEFT COLUMN: HEADLINE, DESCRIPTION, BADGES, CTA BUTTON
             ======================================================================= */}
          <div>
            <h3 style={{
              fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: '900',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '18px'
            }}>
              {currentMode.headline}
            </h3>

            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.92)',
              lineHeight: 1.65,
              marginBottom: '32px'
            }}>
              {currentMode.desc}
            </p>

            {/* Sub-feature Icon Badges */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '36px',
              flexWrap: 'wrap'
            }}>
              {currentMode.badges.map((b, idx) => {
                const BadgeIcon = b.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 18px',
                      borderRadius: '14px',
                      background: 'rgba(0, 0, 0, 0.22)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      color: '#ffffff'
                    }}
                  >
                    <BadgeIcon size={18} color="#ffffff" />
                    <span>{b.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Launch Search Button (Black Button with White Text) */}
            <button
              onClick={handleLaunch}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 32px',
                borderRadius: '14px',
                background: '#000000',
                color: '#ffffff',
                fontSize: '1.02rem',
                fontWeight: '800',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5)';
                e.currentTarget.style.background = '#111317';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.35)';
                e.currentTarget.style.background = '#000000';
              }}
            >
              <span>{currentMode.btnText}</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* =======================================================================
              RIGHT COLUMN: LARGE SOFTWARE UI WINDOW MOCKUP (ACTIVE ASSET)
             ======================================================================= */}
          <div style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: '#0f1115',
              transition: 'transform 0.4s ease'
            }}>
              <img
                key={currentMode.id}
                src={currentMode.imgAsset}
                alt={currentMode.headline}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  animation: 'fadeInUi 0.35s ease-in-out'
                }}
              />
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeInUi {
          from {
            opacity: 0.7;
            transform: scale(0.985);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 1024px) {
          .search-mode-content-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
