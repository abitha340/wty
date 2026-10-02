import React, { useState } from 'react';
import { Search, Compass, Scale, ShieldCheck, BarChart3, Layers, ArrowRight, Sparkles, Zap, Star } from 'lucide-react';

export default function UseCasesSection({ onNavigateSearch }) {
  const [hoveredId, setHoveredId] = useState(null);

  const useCases = [
    {
      id: 'search',
      title: 'Trademark Search',
      tag: 'Clearance & Discovery',
      desc: 'Quickly find, verify, and explore trademark records across brand names, registration identifiers, and application numbers.',
      icon: Search,
      sampleQuery: 'NIKE',
      delay: '0s'
    },
    {
      id: 'brand',
      title: 'Brand Research',
      tag: 'Brand Availability',
      desc: 'Research existing commercial brand names and mark availability before launching new products or entering new markets.',
      icon: Compass,
      sampleQuery: 'APPLE',
      delay: '0.15s'
    },
    {
      id: 'legal',
      title: 'Legal & IP Research',
      tag: 'IP Due-Diligence',
      desc: 'Support formal trademark clearance, conflict detection, class overlap analysis, and intellectual property litigation prep.',
      icon: Scale,
      sampleQuery: 'GOOGLE',
      delay: '0.3s'
    },
    {
      id: 'mgmt',
      title: 'Brand Management',
      tag: 'Portfolio Monitoring',
      desc: 'Help businesses monitor their trademark portfolios, renewal milestones, status transitions, and registered international classes.',
      icon: ShieldCheck,
      sampleQuery: 'TATA',
      delay: '0.45s'
    },
    {
      id: 'business',
      title: 'Business Research',
      tag: 'Market Intelligence',
      desc: 'Analyze competitor brand filings and industry expansion trends as part of commercial market research and strategy.',
      icon: BarChart3,
      sampleQuery: 'SWIGGY',
      delay: '0.6s'
    },
    {
      id: 'platforms',
      title: 'Trademark Platforms',
      tag: 'Workflows & Integration',
      desc: 'Incorporate structured trademark intelligence into company incorporation, brand governance, and naming workflows.',
      icon: Layers,
      sampleQuery: 'INFOSYS',
      delay: '0.75s'
    }
  ];

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '116px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f6faff 50%, #ffffff 100%)',
      borderBottom: '1px solid #e1ecf9'
    }}>
      
      {/* Dynamic Animated Ambient Background Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(225, 236, 249, 0.8) 0%, rgba(240, 246, 252, 0.2) 60%, transparent 80%)',
        filter: 'blur(45px)',
        animation: 'orbFloat1 12s ease-in-out infinite alternate',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(209, 232, 255, 0.7) 0%, rgba(240, 246, 252, 0.2) 60%, transparent 80%)',
        filter: 'blur(50px)',
        animation: 'orbFloat2 14s ease-in-out infinite alternate',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* =========================================================================
            CENTERED SECTION HEADER WITH ANIMATED BADGE
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          
          {/* Animated Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 22px',
              borderRadius: '24px',
              background: '#e1ecf9',
              color: '#0f5aa2',
              fontSize: '0.88rem',
              fontWeight: '700',
              boxShadow: '0 2px 12px rgba(15, 90, 162, 0.1)',
              animation: 'badgePulse 3s ease-in-out infinite'
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
            6 ANIMATED USE CASE CARDS GRID (3 COLUMNS x 2 ROWS)
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '28px'
        }}>
          {useCases.map((item) => {
            const IconComp = item.icon;
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onNavigateSearch ? onNavigateSearch(item.sampleQuery) : null}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '36px 30px',
                  border: isHovered ? '1.5px solid #0f5aa2' : '1.5px solid #e1ecf9',
                  boxShadow: isHovered
                    ? '0 22px 50px rgba(15, 90, 162, 0.16), 0 0 20px rgba(15, 90, 162, 0.08)'
                    : '0 8px 28px rgba(15, 90, 162, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '280px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: isHovered ? 'translateY(-10px) scale(1.015)' : 'translateY(0) scale(1.0)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                
                {/* Light Shimmer / Streak Effect on Hover */}
                {isHovered && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '50%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(225, 236, 249, 0.4), transparent)',
                    transform: 'skewX(-25deg)',
                    animation: 'cardShine 0.8s ease forwards',
                    pointerEvents: 'none'
                  }} />
                )}

                {/* Top Row: Animated Dual-Layer Icon on Left & Feature Tag on Right */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '24px'
                }}>
                  
                  {/* Dual-Layer Rounded Icon Box with Hover Physics */}
                  <div style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '18px',
                    background: isHovered
                      ? 'linear-gradient(135deg, #0f5aa2 0%, #1572c6 100%)'
                      : 'linear-gradient(135deg, #f0f6fc 0%, #e1ecf9 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: isHovered ? '1.5px solid #0f5aa2' : '1.5px solid #d0e2f5',
                    boxShadow: isHovered
                      ? '0 8px 24px rgba(15, 90, 162, 0.35)'
                      : '0 4px 14px rgba(15, 90, 162, 0.08)',
                    transform: isHovered ? 'scale(1.1) rotate(-6deg)' : 'scale(1.0) rotate(0deg)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}>
                    <IconComp size={26} color={isHovered ? '#ffffff' : '#0f5aa2'} />
                  </div>

                  {/* Feature Tag Pill with Hover Glow */}
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: isHovered ? '#0f5aa2' : '#556980',
                    background: isHovered ? '#e1ecf9' : '#f8fafc',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: isHovered ? '1px solid #0f5aa2' : '1px solid #eef2f6',
                    transform: isHovered ? 'scale(1.04)' : 'scale(1.0)',
                    transition: 'all 0.25s ease'
                  }}>
                    {item.tag}
                  </span>

                </div>

                {/* Middle Content: Title & Description */}
                <div>
                  <h3 style={{
                    fontSize: '1.26rem',
                    fontWeight: '800',
                    color: isHovered ? '#0f5aa2' : '#0d1d2e',
                    marginBottom: '10px',
                    lineHeight: 1.25,
                    transition: 'color 0.25s ease'
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

                {/* Bottom Row: Animated Action Trigger Bar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '18px',
                  borderTop: isHovered ? '1px solid #e1ecf9' : '1px solid #f8fafc',
                  marginTop: 'auto',
                  transition: 'border-color 0.25s ease'
                }}>
                  <span style={{
                    fontSize: '0.86rem',
                    fontWeight: '700',
                    color: isHovered ? '#0f5aa2' : '#8aa2ba',
                    transition: 'color 0.25s ease'
                  }}>
                    Explore Workflows
                  </span>

                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: isHovered ? '#0f5aa2' : '#f0f6fc',
                    color: isHovered ? '#ffffff' : '#0f5aa2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isHovered
                      ? '0 4px 14px rgba(15, 90, 162, 0.35)'
                      : '0 2px 6px rgba(15, 90, 162, 0.06)',
                    transform: isHovered ? 'translateX(5px) scale(1.08)' : 'translateX(0) scale(1.0)',
                    transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}>
                    <ArrowRight size={17} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @keyframes orbFloat1 {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(40px, 30px); }
          100% { transform: translate(-20px, 50px); }
        }
        @keyframes orbFloat2 {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(-40px, -30px); }
          100% { transform: translate(30px, -40px); }
        }
        @keyframes badgePulse {
          0% { box-shadow: 0 2px 8px rgba(15, 90, 162, 0.08); }
          50% { box-shadow: 0 4px 18px rgba(15, 90, 162, 0.22); }
          100% { box-shadow: 0 2px 8px rgba(15, 90, 162, 0.08); }
        }
        @keyframes cardShine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </section>
  );
}
