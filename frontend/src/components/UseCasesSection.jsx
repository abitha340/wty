import React from 'react';
import { Search, Compass, Scale, ShieldCheck, BarChart3, Layers, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function UseCasesSection({ onNavigateSearch }) {
  const useCases = [
    {
      id: 'search',
      title: 'Trademark Search',
      tag: 'Clearance & Discovery',
      desc: 'Quickly find, verify, and explore trademark records across brand names, registration identifiers, and application numbers.',
      icon: Search,
      sampleQuery: 'NIKE'
    },
    {
      id: 'brand',
      title: 'Brand Research',
      tag: 'Brand Availability',
      desc: 'Research existing commercial brand names and mark availability before launching new products or entering new markets.',
      icon: Compass,
      sampleQuery: 'APPLE'
    },
    {
      id: 'legal',
      title: 'Legal & IP Research',
      tag: 'IP Due-Diligence',
      desc: 'Support formal trademark clearance, conflict detection, class overlap analysis, and intellectual property litigation prep.',
      icon: Scale,
      sampleQuery: 'GOOGLE'
    },
    {
      id: 'mgmt',
      title: 'Brand Management',
      tag: 'Portfolio Monitoring',
      desc: 'Help businesses monitor their trademark portfolios, renewal milestones, status transitions, and registered international classes.',
      icon: ShieldCheck,
      sampleQuery: 'TATA'
    },
    {
      id: 'business',
      title: 'Business Research',
      tag: 'Market Intelligence',
      desc: 'Analyze competitor brand filings and industry expansion trends as part of commercial market research and strategy.',
      icon: BarChart3,
      sampleQuery: 'SWIGGY'
    },
    {
      id: 'platforms',
      title: 'Trademark Platforms',
      tag: 'Workflows & Integration',
      desc: 'Incorporate structured trademark intelligence into company incorporation, brand governance, and naming workflows.',
      icon: Layers,
      sampleQuery: 'INFOSYS'
    }
  ];

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '96px',
      paddingBottom: '108px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f7fbfe 100%)',
      borderBottom: '1px solid #e1ecf9'
    }}>
      
      {/* Background Soft Glow Aura */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(225, 236, 249, 0.7) 0%, rgba(240, 246, 252, 0.3) 55%, transparent 75%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* =========================================================================
            CENTERED SECTION HEADER
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          
          {/* Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '24px',
              background: '#e1ecf9',
              color: '#0f5aa2',
              fontSize: '0.88rem',
              fontWeight: '700',
              boxShadow: '0 2px 8px rgba(15, 90, 162, 0.08)'
            }}>
              <Sparkles size={16} color="#0f5aa2" />
              <span>Tailored Applications</span>
            </div>
          </div>

          {/* Heading with Blue Accent */}
          <h2 style={{
            fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
            fontWeight: '900',
            letterSpacing: '-0.035em',
            color: '#0d1d2e',
            marginBottom: '14px',
            lineHeight: 1.15
          }}>
            Built for <span style={{ color: '#0f5aa2' }}>Trademark Research</span>
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.12rem',
            color: '#556980',
            lineHeight: 1.68,
            margin: 0
          }}>
            Designed for business owners, legal researchers, brand managers, and companies exploring trademark data.
          </p>
        </div>

        {/* =========================================================================
            6 USE CASE CARDS GRID (3 COLUMNS x 2 ROWS)
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '28px'
        }}>
          {useCases.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onNavigateSearch ? onNavigateSearch(item.sampleQuery) : null}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '34px 30px',
                  border: '1.5px solid #e1ecf9',
                  boxShadow: '0 8px 28px rgba(15, 90, 162, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '270px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#0f5aa2';
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(15, 90, 162, 0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e1ecf9';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(15, 90, 162, 0.05)';
                }}
              >
                
                {/* Top Row: Dual-Layer Icon on Left & Feature Tag on Right */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '22px'
                }}>
                  
                  {/* Dual-Layer Rounded Icon Box */}
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #f0f6fc 0%, #e1ecf9 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1.5px solid #d0e2f5',
                    boxShadow: '0 4px 14px rgba(15, 90, 162, 0.08)'
                  }}>
                    <IconComp size={26} color="#0f5aa2" />
                  </div>

                  {/* Feature Tag Pill */}
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: '#0f5aa2',
                    background: '#f0f6fc',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(15, 90, 162, 0.15)'
                  }}>
                    {item.tag}
                  </span>

                </div>

                {/* Middle Content: Title & Description */}
                <div>
                  <h3 style={{
                    fontSize: '1.24rem',
                    fontWeight: '800',
                    color: '#0d1d2e',
                    marginBottom: '10px',
                    lineHeight: 1.25
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '0.92rem',
                    color: '#556980',
                    lineHeight: 1.65,
                    margin: '0 0 24px 0'
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Row: Action Trigger */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid #f8fafc',
                  marginTop: 'auto'
                }}>
                  <span style={{ fontSize: '0.84rem', fontWeight: '700', color: '#0f5aa2' }}>
                    Explore Workflows
                  </span>

                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: '#0f5aa2',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 3px 10px rgba(15, 90, 162, 0.28)',
                    transition: 'transform 0.2s ease'
                  }}>
                    <ArrowRight size={16} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
