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
      paddingTop: '60px',
      paddingBottom: '68px',
      background: '#000000',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      
      <div className="container" style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* =========================================================================
            2-COLUMN COMPACT SPLIT LAYOUT (CLOSE PROXIMITY)
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(240px, 320px) 1fr',
          gap: '28px',
          alignItems: 'center'
        }} className="how-it-works-split-row">
          
          {/* =======================================================================
              LEFT COLUMN: COMPACT HEADING + LEARN MORE LINK
             ======================================================================= */}
          <div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              fontWeight: '900',
              letterSpacing: '-0.035em',
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '20px',
              maxWidth: '300px'
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
                fontSize: '0.98rem',
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
              <span style={{ fontSize: '1.1rem' }}>↗</span>
            </a>
          </div>

          {/* =======================================================================
              RIGHT COLUMN: CARD WITH MOVING WHITE SLIGHT LIGHT BORDER
             ======================================================================= */}
          <div className="moving-border-card-wrapper" style={{
            position: 'relative',
            borderRadius: '24px',
            padding: '1.5px',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)'
          }}>
            
            {/* Animated Rotating Conic Gradient (Moving White Light Beam) */}
            <div className="moving-border-beam" style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'conic-gradient(from 0deg, transparent 0%, transparent 68%, rgba(255, 255, 255, 0.15) 78%, rgba(255, 255, 255, 0.95) 88%, #ffffff 92%, rgba(255, 255, 255, 0.95) 94%, rgba(255, 255, 255, 0.15) 98%, transparent 100%)',
              zIndex: 1
            }} />

            {/* Inner Content Card (Sits atop the rotating beam with 1.5px border visible) */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              background: '#121418',
              borderRadius: '22.5px',
              padding: '36px 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }} className="how-it-works-cards-box">
              
              {/* ITEM 1: CHOOSE SEARCH IDENTIFIER */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px'
              }}>
                {/* Shield Icon SVG */}
                <div style={{ width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M32 6 L52 14 C52 38 32 56 32 56 C32 56 12 38 12 14 Z" stroke="#ffffff" strokeWidth="2.2" />
                    <path d="M24 30 L30 36 L42 22" stroke="#ffffff" strokeWidth="2.5" />
                  </svg>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.08rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    marginBottom: '6px',
                    letterSpacing: '-0.01em'
                  }}>
                    Choose Search Identifier
                  </h3>
                  <p style={{
                    fontSize: '0.86rem',
                    color: '#94a3b8',
                    lineHeight: '1.48',
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
                gap: '16px'
              }}>
                {/* Hexagon Icon SVG */}
                <div style={{ width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
                    <polygon points="32,6 54,18 54,46 32,58 10,46 10,18" stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="32" y="36" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">
                      MATCH
                    </text>
                  </svg>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.08rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    marginBottom: '6px',
                    letterSpacing: '-0.01em'
                  }}>
                    Apply Smart Matching
                  </h3>
                  <p style={{
                    fontSize: '0.86rem',
                    color: '#94a3b8',
                    lineHeight: '1.48',
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
                gap: '16px'
              }}>
                {/* Overlapping Shield & Globe Icon SVG */}
                <div style={{ width: '74px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <svg width="72" height="48" viewBox="0 0 88 56" fill="none">
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
                    fontSize: '1.08rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    marginBottom: '6px',
                    letterSpacing: '-0.01em'
                  }}>
                    Review Full Record Details
                  </h3>
                  <p style={{
                    fontSize: '0.86rem',
                    color: '#94a3b8',
                    lineHeight: '1.48',
                    margin: 0
                  }}>
                    Inspect legal status, ownership history, Nice classes, and official filing dates.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Moving Light Beam Animation and Responsiveness */}
      <style>{`
        @keyframes rotateMovingLight {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .moving-border-beam {
          animation: rotateMovingLight 5s linear infinite;
        }

        @media (max-width: 960px) {
          .how-it-works-split-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .how-it-works-cards-box {
            grid-template-columns: 1fr !important;
            padding: 28px 20px !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
