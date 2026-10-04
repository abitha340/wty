import React from 'react';

export default function HowItWorksSection({ setActiveTab }) {
  const handleNav = () => {
    if (setActiveTab) {
      setActiveTab('how-it-works');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      paddingTop: '80px',
      paddingBottom: '88px',
      background: '#000000',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      
      <div className="container" style={{
        width: '100%',
        maxWidth: '1680px',
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 56px)',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* =========================================================================
            2-COLUMN SPLIT LAYOUT (MATCHING REFERENCE DESIGN)
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1fr) minmax(500px, 2fr)',
          gap: '48px',
          alignItems: 'center'
        }} className="how-it-works-split-row">
          
          {/* =======================================================================
              LEFT COLUMN: LARGE HEADING + LEARN MORE LINK
             ======================================================================= */}
          <div>
            <h2 style={{
              fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
              fontWeight: '900',
              letterSpacing: '-0.04em',
              color: '#ffffff',
              lineHeight: 1.12,
              marginBottom: '28px',
              maxWidth: '440px'
            }}>
              How Wyt Works.
            </h2>

            <a
              onClick={handleNav}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#ffffff',
                fontSize: '1.05rem',
                fontWeight: '600',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: 0.9
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.color = '#38bdf8';
                e.currentTarget.style.transform = 'translateX(3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <span>Learn more</span>
              <span style={{ fontSize: '1.15rem' }}>↗</span>
            </a>
          </div>

          {/* =======================================================================
              RIGHT COLUMN: SLEEK DARK CONTAINER WITH 3 OUTLINE ICON BADGES
             ======================================================================= */}
          <div style={{
            background: '#121418',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.09)',
            padding: '48px 44px',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.6)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '36px'
          }} className="how-it-works-cards-box">
            
            {/* ITEM 1: CHOOSE SEARCH IDENTIFIER */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '20px'
            }}>
              {/* Shield Icon SVG */}
              <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M32 6 L52 14 C52 38 32 56 32 56 C32 56 12 38 12 14 Z" stroke="#ffffff" strokeWidth="2.2" />
                  <path d="M24 30 L30 36 L42 22" stroke="#ffffff" strokeWidth="2.5" />
                </svg>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.18rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em'
                }}>
                  Choose Search Identifier
                </h3>
                <p style={{
                  fontSize: '0.92rem',
                  color: '#94a3b8',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Enter a brand name, company owner, class, or application serial number.
                </p>
              </div>
            </div>

            {/* ITEM 2: APPLY SMART MATCHING */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '20px'
            }}>
              {/* Hexagon Icon SVG */}
              <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
                  <polygon points="32,6 54,18 54,46 32,58 10,46 10,18" stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="32" y="36" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">
                    MATCH
                  </text>
                </svg>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.18rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em'
                }}>
                  Apply Smart Matching
                </h3>
                <p style={{
                  fontSize: '0.92rem',
                  color: '#94a3b8',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Search using Exact, Starts With, or Contains across 20L+ structured records.
                </p>
              </div>
            </div>

            {/* ITEM 3: REVIEW FULL RECORD DETAILS */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '20px'
            }}>
              {/* Overlapping Shield & Globe Icon SVG */}
              <div style={{ width: '92px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <svg width="88" height="56" viewBox="0 0 88 56" fill="none">
                  <path d="M22 6 L38 12 C38 34 22 48 22 48 C22 48 6 34 6 12 Z" stroke="#ffffff" strokeWidth="2" fill="#121418" />
                  <text x="22" y="30" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="800" fontFamily="system-ui, sans-serif">
                    TM
                  </text>
                  <circle cx="58" cy="28" r="22" stroke="#ffffff" strokeWidth="2" fill="none" />
                  <ellipse cx="58" cy="28" rx="10" ry="22" stroke="#ffffff" strokeWidth="1.6" fill="none" />
                  <line x1="36" y1="28" x2="80" y2="28" stroke="#ffffff" strokeWidth="1.6" />
                  <text x="58" y="32" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="800" fontFamily="system-ui, sans-serif">
                    20L+
                  </text>
                </svg>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.18rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em'
                }}>
                  Review Full Record Details
                </h3>
                <p style={{
                  fontSize: '0.92rem',
                  color: '#94a3b8',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Inspect legal status, ownership history, Nice classes, and official filing dates.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 960px) {
          .how-it-works-split-row {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .how-it-works-cards-box {
            grid-template-columns: 1fr !important;
            padding: 32px 24px !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
