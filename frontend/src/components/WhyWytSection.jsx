import React from 'react';

export default function WhyWytSection({ onNavigateSearch }) {
  const cards = [
    {
      id: 'nuances',
      title: 'Understands Trademark Nuances',
      desc: 'Wyt is engineered specifically for trademark and brand intelligence workflows. Every query instantly surfaces structured Nice classifications, certified registration certificates, and owner legal details, not generic approximations.'
    },
    {
      id: 'security',
      title: 'Keeps Your Research Confidential',
      desc: 'All search queries, brand clearance investigations, and watchlist monitoring stay strictly private within your session. Wyt guarantees total research confidentiality across every query.'
    },
    {
      id: 'engines',
      title: 'Multi-Engine Search Flexibility',
      desc: 'Seamlessly switch between Exact Match, Starts With prefix discovery, and Contains substring engines to uncover direct identical filings, brand variations, and compound word overlaps.'
    },
    {
      id: 'instant',
      title: 'Deploys Instant Search on Day One',
      desc: 'Query over 20+ Lakh structured trademark records in under 15 milliseconds. Access statutory filing dates, legal status milestones, and official registry documentation with zero complex setup.'
    }
  ];

  return (
    <section style={{
      paddingTop: '96px',
      paddingBottom: '112px',
      background: 'rgb(249, 255, 215)',
      color: '#111827',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      
      <div className="container" style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 48px)',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* =========================================================================
            CENTERED HEADER (MATCHING REFERENCE TWO-ROW CLEAN TITLE)
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
            fontWeight: '900',
            letterSpacing: '-0.04em',
            color: '#111827',
            marginBottom: '16px',
            lineHeight: 1.12
          }}>
            Trademark Information, All in One Place
          </h2>
          <p style={{
            fontSize: '1.12rem',
            color: '#4b5563',
            lineHeight: 1.65,
            margin: 0
          }}>
            Everything you need to discover, verify, and monitor trademark records across all classes and jurisdictions.
          </p>
        </div>

        {/* =========================================================================
            2x2 CLEAN GRID OF WHITE ROUNDED CARDS (MATCHING REFERENCE LAYOUT)
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '28px'
        }} className="why-wyt-cards-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                background: '#ffffff',
                borderRadius: '28px',
                padding: '44px 40px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 12px 32px rgba(40, 50, 20, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 44px rgba(40, 50, 20, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(40, 50, 20, 0.05)';
              }}
            >
              <h3 style={{
                fontSize: '1.45rem',
                fontWeight: '800',
                color: '#111827',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
                lineHeight: 1.25
              }}>
                {card.title}
              </h3>

              <p style={{
                fontSize: '1.04rem',
                color: '#4b5563',
                lineHeight: 1.7,
                margin: 0
              }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-wyt-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
