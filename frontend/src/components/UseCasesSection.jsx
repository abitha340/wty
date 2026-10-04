import React, { useState, useEffect, useRef } from 'react';
import clearanceAsset from '../assets/tm_mode_exact_match_ui.jpg';
import competitorAsset from '../assets/tm_mode_startswith_ui.jpg';
import phoneticAsset from '../assets/tm_mode_contains_ui.jpg';
import duediligenceAsset from '../assets/advanced_filters_ui.png';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function UseCasesSection({ onNavigateSearch, setActiveTab }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'clearance',
      title: 'Brand name clearance & availability',
      desc: 'Check whether your prospective brand name, slogan, or logo is legally available across 20L+ records with instant risk scoring, identical mark detection, and direct conflicting filing checks.',
      imgAsset: clearanceAsset,
      badge: 'Step 01 • Clearance',
      query: 'NIKE'
    },
    {
      id: 'competitor',
      title: 'Competitor filings & market intelligence',
      desc: 'Track new brand registrations, prefix variations, and emerging portfolio expansions across leading enterprises, competitor companies, and emerging market players.',
      imgAsset: competitorAsset,
      badge: 'Step 02 • Intelligence',
      query: 'TECH'
    },
    {
      id: 'phonetic',
      title: 'Compound words & phonetic risk analysis',
      desc: 'Search within compound words, stylized names, and phonetic sound-alikes to discover partial overlaps and prevent costly opposition disputes before filing.',
      imgAsset: phoneticAsset,
      badge: 'Step 03 • Risk Analysis',
      query: 'SPARK'
    },
    {
      id: 'duediligence',
      title: 'Class exploration & statutory due diligence',
      desc: 'Inspect international Nice classifications (Classes 1 to 45), certified registration certificates, ownership chains of title, and upcoming renewal statutory deadlines.',
      imgAsset: duediligenceAsset,
      badge: 'Step 04 • Due Diligence',
      query: ''
    }
  ];

  // High-precision scroll tracking to detect which content step is currently in the reading zone
  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.45;
      
      steps.forEach((step, index) => {
        const el = document.getElementById(`usecase-step-${step.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom >= triggerY) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps]);

  const scrollToStep = (index) => {
    setActiveStep(index);
    const el = document.getElementById(`usecase-step-${steps[index].id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleLearnMore = () => {
    if (setActiveTab) {
      setActiveTab('docs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onNavigateSearch) {
      onNavigateSearch('');
    }
  };

  return (
    <section style={{
      paddingTop: '96px',
      paddingBottom: '140px',
      background: 'rgb(244, 232, 227)',
      color: '#1a1816',
      position: 'relative',
      width: '100%'
    }}>
      
      <div className="container" style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 48px)',
        position: 'relative'
      }}>
        
        {/* =========================================================================
            TOP HEADER AREA
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 88px auto' }}>
          
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
            fontWeight: '900',
            letterSpacing: '-0.04em',
            color: '#1a1816',
            marginBottom: '16px',
            lineHeight: 1.12
          }}>
            Built for Trademark Research
          </h2>

          <p style={{
            fontSize: '1.12rem',
            color: '#5c544e',
            lineHeight: 1.65,
            marginBottom: '20px'
          }}>
            Successful trademark clearance requires deep intelligence across filings, classes, and ownership history. Wyt brings all search engines together to give you total market clarity.
          </p>

          <a
            onClick={handleLearnMore}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '1rem',
              fontWeight: '800',
              color: '#1a1816',
              textDecoration: 'underline',
              cursor: 'pointer',
              textUnderlineOffset: '4px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#083866'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1a1816'}
          >
            <span>Learn More</span>
            <span style={{ fontSize: '1.1rem' }}>&rarr;</span>
          </a>
        </div>

        {/* =========================================================================
            STICKY SCROLLYTELLING CONTAINER:
            LEFT = MULTIPLE SCROLLABLE CONTENT BLOCKS | RIGHT = FIXED/STICKY LAPTOP DISPLAY
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 440px) minmax(500px, 1fr)',
          gap: '56px',
          alignItems: 'start',
          position: 'relative'
        }} className="scrollytelling-split-layout">
          
          {/* =======================================================================
              LEFT COLUMN: SCROLLABLE USE CASE CONTENT BLOCKS (MULTIPLE CONTENT SCROLL)
             ======================================================================= */}
          <div style={{ display: 'flex', flexDirection: 'column' }} className="scrollytelling-left-col">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.id}
                  id={`usecase-step-${step.id}`}
                  onClick={() => scrollToStep(idx)}
                  style={{
                    paddingTop: '60px',
                    paddingBottom: '100px',
                    minHeight: '68vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    opacity: isActive ? 1 : 0.28,
                    transform: isActive ? 'translateX(0px)' : 'translateX(-8px)',
                    borderLeft: isActive ? '3px solid #083866' : '3px solid rgba(0, 0, 0, 0.08)',
                    paddingLeft: '28px'
                  }}
                >
                  
                  {/* Step Pill Indicator */}
                  <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
                    <span style={{
                      padding: '5px 14px',
                      borderRadius: '9999px',
                      background: isActive ? '#083866' : 'rgba(0, 0, 0, 0.06)',
                      color: isActive ? '#ffffff' : '#736b64',
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      transition: 'all 0.3s ease'
                    }}>
                      {step.badge}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 style={{
                    fontSize: 'clamp(1.85rem, 2.7vw, 2.4rem)',
                    fontWeight: '900',
                    letterSpacing: '-0.035em',
                    color: '#1a1816',
                    marginBottom: '16px',
                    lineHeight: 1.16
                  }}>
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p style={{
                    fontSize: '1.05rem',
                    color: isActive ? '#2d2723' : '#736b64',
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: '420px'
                  }}>
                    {step.desc}
                  </p>

                  {/* Interactive Explore Trigger */}
                  {isActive && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onNavigateSearch) onNavigateSearch(step.query);
                      }}
                      style={{
                        marginTop: '24px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.96rem',
                        fontWeight: '800',
                        color: '#083866',
                        cursor: 'pointer'
                      }}
                    >
                      <span>Explore this workflow</span>
                      <ArrowRight size={17} />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* =======================================================================
              RIGHT COLUMN: FIXED POSITION STICKY LAPTOP MOCKUP
              (Remains pinned in place while left content scrolls beside it!)
             ======================================================================= */}
          <div style={{
            position: 'sticky',
            top: '120px',
            alignSelf: 'flex-start',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }} className="sticky-laptop-wrapper">
            
            {/* Realistic Laptop Hardware Frame */}
            <div style={{
              width: '100%',
              maxWidth: '840px',
              position: 'relative'
            }}>
              
              {/* Laptop Screen Top Lid Frame */}
              <div style={{
                background: '#0d0e11',
                borderRadius: '20px 20px 0 0',
                padding: '14px 14px 10px 14px',
                boxShadow: '0 28px 70px rgba(0, 0, 0, 0.28)',
                border: '1.5px solid #22252c',
                borderBottom: 'none',
                position: 'relative'
              }}>
                
                {/* Camera dot & sensor notch */}
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#1a1c22',
                  border: '1px solid #333842'
                }} />

                {/* Display Screen Viewport */}
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#000000',
                  aspectRatio: '16 / 10',
                  position: 'relative',
                  boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.8)'
                }}>
                  
                  {/* Dynamic Switching Screen Image matching the active scrolling content */}
                  <img
                    key={steps[activeStep].id}
                    src={steps[activeStep].imgAsset}
                    alt={steps[activeStep].title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      animation: 'laptopScreenFade 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />

                  {/* Subtle Screen Glass Reflection Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '60%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, transparent 60%)',
                    pointerEvents: 'none'
                  }} />

                </div>

              </div>

              {/* Laptop Base Bottom Lip */}
              <div style={{
                height: '15px',
                background: 'linear-gradient(180deg, #d1d5db 0%, #9ca3af 60%, #6b7280 100%)',
                borderRadius: '0 0 16px 16px',
                position: 'relative',
                boxShadow: '0 18px 40px rgba(0, 0, 0, 0.38)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Opening Thumb Notch */}
                <div style={{
                  width: '68px',
                  height: '4.5px',
                  borderRadius: '0 0 4px 4px',
                  background: '#4b5563'
                }} />
              </div>

              {/* Laptop Shadow on Table Surface */}
              <div style={{
                width: '94%',
                height: '26px',
                margin: '0 auto',
                background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.28) 0%, transparent 75%)',
                filter: 'blur(9px)',
                marginTop: '-4px'
              }} />

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes laptopScreenFade {
          from {
            opacity: 0.35;
            transform: scale(0.985);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 992px) {
          .scrollytelling-split-layout {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .sticky-laptop-wrapper {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 40px;
          }
          .scrollytelling-left-col > div {
            min-height: auto !important;
            padding: 32px 0 32px 20px !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
