import React from 'react';
import { Layers, ShieldCheck, Globe, Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import filterIllustration from '../assets/advanced_filters_ui.png';

export default function FilteringSortingSection({ onNavigateSearch }) {
  const filterPillars = [
    {
      id: 'class',
      title: 'Class (1 to 45)',
      desc: 'Software, Apparel, Food, Pharma, etc.',
      icon: Layers
    },
    {
      id: 'status',
      title: 'Status',
      desc: 'Registered, Pending, Objected, Opposed',
      icon: ShieldCheck
    },
    {
      id: 'country',
      title: 'Country & Branch',
      desc: 'India (Delhi, Mumbai, Chennai) & Global',
      icon: Globe
    },
    {
      id: 'dates',
      title: 'Filing Dates',
      desc: 'Filter by exact chronological dates',
      icon: Calendar
    },
    {
      id: 'owner',
      title: 'Owner / Proprietor',
      desc: 'Filter by specific corporate applicants',
      icon: User
    }
  ];

  return (
    <section style={{
      paddingTop: '92px',
      paddingBottom: '104px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)',
      borderBottom: '1px solid #e1ecf9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* =========================================================================
            2-COLUMN GRID: LEFT = HEADER, 5 CONNECTED PILLARS & CTA | RIGHT = 3D FILTERS UI
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.18fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }} className="filters-section-grid">
          
          {/* =========================================================================
              LEFT COLUMN: HEADER, 5 CONNECTED FILTER PILLARS & CTA
             ========================================================================= */}
          <div>
            
            {/* Badge */}
            <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 18px',
                borderRadius: '20px',
                background: '#e1ecf9',
                color: '#0f5aa2',
                fontSize: '0.84rem',
                fontWeight: '700'
              }}>
                <Sparkles size={15} color="#0f5aa2" />
                <span>Precision Narrowing</span>
              </div>
            </div>

            {/* Main Heading with Blue Accent */}
            <h2 style={{
              fontSize: 'clamp(2.3rem, 3.8vw, 3.4rem)',
              fontWeight: '900',
              letterSpacing: '-0.035em',
              color: '#0d1d2e',
              marginBottom: '16px',
              lineHeight: 1.15
            }}>
              Find the Records<br />
              That <span style={{ color: '#0f5aa2' }}>Matter</span>
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.08rem',
              color: '#556980',
              lineHeight: 1.68,
              marginBottom: '40px',
              maxWidth: '600px'
            }}>
              Easily narrow down millions of search results using multi-attribute filters. Refine by international class, legal status, jurisdiction, or filing date with zero complexity.
            </p>

            {/* 5 Connected Horizontal Filter Pillars */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '12px',
              position: 'relative',
              marginBottom: '44px'
            }} className="pillars-grid">
              
              {filterPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    
                    {/* Horizontal Connector Line (Between circles) */}
                    {idx < 4 && (
                      <div className="hide-mobile" style={{
                        position: 'absolute',
                        top: '24px',
                        left: 'calc(50% + 24px)',
                        width: 'calc(100% - 24px)',
                        height: '2px',
                        borderTop: '2px dashed #0f5aa2',
                        opacity: 0.3,
                        zIndex: 1
                      }}>
                        <div style={{
                          position: 'absolute',
                          right: '-3px',
                          top: '-3px',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#0f5aa2'
                        }} />
                      </div>
                    )}

                    {/* Circular Icon Container */}
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#f0f6fc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1.5px solid #e1ecf9',
                      boxShadow: '0 4px 12px rgba(15, 90, 162, 0.08)',
                      marginBottom: '14px',
                      zIndex: 2,
                      transition: 'transform 0.25s ease, background 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.background = '#e1ecf9';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1.0)';
                      e.currentTarget.style.background = '#f0f6fc';
                    }}>
                      <IconComp size={22} color="#0f5aa2" />
                    </div>

                    {/* Pillar Title */}
                    <h4 style={{
                      fontSize: '0.94rem',
                      fontWeight: '800',
                      color: '#0d1d2e',
                      marginBottom: '4px',
                      lineHeight: 1.25
                    }}>
                      {pillar.title}
                    </h4>

                    {/* Pillar Subtext */}
                    <p style={{
                      fontSize: '0.76rem',
                      color: '#687d94',
                      lineHeight: 1.45,
                      margin: 0
                    }}>
                      {pillar.desc}
                    </p>

                  </div>
                );
              })}
            </div>

            {/* Try Advanced Filters Button */}
            <button
              type="button"
              onClick={() => onNavigateSearch ? onNavigateSearch() : null}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                borderRadius: '10px',
                background: '#0f5aa2',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(15, 90, 162, 0.28)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span>Try Advanced Filters</span>
              <ArrowRight size={17} />
            </button>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 3D ADVANCED FILTERS UI ILLUSTRATION
             ========================================================================= */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '440px'
          }}>
            
            {/* Ambient Radial Soft Glow */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(ellipse at center, rgba(225, 236, 249, 0.8) 0%, rgba(240, 246, 252, 0.35) 60%, transparent 80%)',
              pointerEvents: 'none',
              zIndex: 1
            }} />

            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              zIndex: 2,
              animation: 'subtleFiltersFloat 5s ease-in-out infinite'
            }}>
              <img
                src={filterIllustration}
                alt="Advanced Filters UI Illustration"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 16px 36px rgba(15, 90, 162, 0.12))'
                }}
              />
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes subtleFiltersFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 980px) {
          .filters-section-grid {
            grid-template-columns: 1fr !important;
          }
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
