import React, { useState } from 'react';
import { Layers, Search, Database, Sparkles, ShieldCheck, Zap, Globe, FileCheck2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhyWytSection({ onNavigateSearch }) {
  const [isPaused, setIsPaused] = useState(false);

  const advantagesCol1 = [
    {
      title: "Structured Information",
      tag: "Data Cleanliness",
      desc: "Trademark data organized into clear, standardized attributes without raw XML noise.",
      icon: Layers
    },
    {
      title: "Multiple Search Options",
      tag: "Flexible Lookup",
      desc: "Search by brand name, official application number, registered ID, or company proprietor.",
      icon: Search
    },
    {
      title: "20+ Lakh Records",
      tag: "Vast Coverage",
      desc: "Access millions of verified trademark entries spanning active and pending classes.",
      icon: Database
    },
    {
      title: "Zero Direct DB Exposure",
      tag: "Enterprise Security",
      desc: "High-performance abstraction layer protecting core registry datasets and credentials.",
      icon: ShieldCheck
    }
  ];

  const advantagesCol2 = [
    {
      title: "Sub-15ms Latency",
      tag: "Lightning Fast",
      desc: "Optimized indexing algorithms deliver instant exact and pattern-matched records.",
      icon: Zap
    },
    {
      title: "All 45 Nice Classes",
      tag: "Complete Classification",
      desc: "Comprehensive categorisation across goods (1-34) and services (35-45) with status insights.",
      icon: FileCheck2
    },
    {
      title: "Global Jurisdictions",
      tag: "Multi-Region",
      desc: "Track regional branch filings and national office statuses from a unified interface.",
      icon: Globe
    },
    {
      title: "Workflow Ready",
      tag: "Seamless Export",
      desc: "Structured data readily prepared for brand due-diligence and clearance reports.",
      icon: Sparkles
    }
  ];

  // Duplicate for seamless infinite loop
  const infiniteCol1 = [...advantagesCol1, ...advantagesCol1];
  const infiniteCol2 = [...advantagesCol2, ...advantagesCol2];

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '110px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f7fbfe 50%, #ffffff 100%)',
      borderBottom: '1px solid #e1ecf9'
    }}>
      
      {/* Background Soft Ambient Light */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(225, 236, 249, 0.75) 0%, rgba(240, 246, 252, 0.3) 55%, transparent 75%)',
        filter: 'blur(45px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* =========================================================================
            SPLIT 2-COLUMN LAYOUT: LEFT = HEADLINE & VALUE PILLARS | RIGHT = VERTICAL MARQUEE
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1.2fr',
          gap: '56px',
          alignItems: 'center'
        }} className="advantages-split-grid">
          
          {/* =========================================================================
              LEFT COLUMN: CONTENT & ACTION CTA
             ========================================================================= */}
          <div>
            
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
                <span>Core Advantages</span>
              </div>
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              fontWeight: '900',
              letterSpacing: '-0.035em',
              color: '#0d1d2e',
              marginBottom: '18px',
              lineHeight: 1.15
            }}>
              Trademark Information,<br />
              <span style={{ color: '#0f5aa2' }}>All in One Place</span>
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.12rem',
              color: '#556980',
              lineHeight: 1.7,
              marginBottom: '32px',
              maxWidth: '520px'
            }}>
              Wyt brings structured trademark intelligence into a single, unified experience. Discover why researchers, legal professionals, and enterprises rely on our platform for absolute speed and accuracy.
            </p>

            {/* 3 Key Feature Checkmarks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#e1ecf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={16} color="#0f5aa2" />
                </div>
                <span style={{ fontSize: '0.98rem', fontWeight: '700', color: '#0d1d2e' }}>
                  Sub-15ms query execution across 20+ Lakh records
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#e1ecf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={16} color="#0f5aa2" />
                </div>
                <span style={{ fontSize: '0.98rem', fontWeight: '700', color: '#0d1d2e' }}>
                  Standardized Nice Classification coverage (Classes 1–45)
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#e1ecf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={16} color="#0f5aa2" />
                </div>
                <span style={{ fontSize: '0.98rem', fontWeight: '700', color: '#0d1d2e' }}>
                  Zero technical database complexity with clear visual analytics
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => onNavigateSearch ? onNavigateSearch() : null}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 30px',
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
              <span>Explore Trademark Records</span>
              <ArrowRight size={17} />
            </button>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 2-COLUMN SLOW-MOTION VERTICAL SCROLLING CAROUSEL
             ========================================================================= */}
          <div
            style={{
              position: 'relative',
              height: '540px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              padding: '10px 0'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Top Fade Mask */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '80px',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
              zIndex: 3,
              pointerEvents: 'none'
            }} />

            {/* Bottom Fade Mask */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '80px',
              background: 'linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
              zIndex: 3,
              pointerEvents: 'none'
            }} />

            {/* Column 1: Slow Motion Vertical Scroll Up */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                animation: 'verticalScrollUp 24s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {infiniteCol1.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      padding: '24px 20px',
                      border: '1.5px solid #e1ecf9',
                      boxShadow: '0 6px 20px rgba(15, 90, 162, 0.05)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#0f5aa2';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 90, 162, 0.14)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e1ecf9';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 90, 162, 0.05)';
                      e.currentTarget.style.transform = 'scale(1.0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #f0f6fc 0%, #e1ecf9 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #d4e3f3'
                      }}>
                        <IconComp size={22} color="#0f5aa2" />
                      </div>

                      <span style={{
                        fontSize: '0.74rem',
                        fontWeight: '700',
                        color: '#0f5aa2',
                        background: '#f0f6fc',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        border: '1px solid rgba(15, 90, 162, 0.12)'
                      }}>
                        {item.tag}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.06rem', fontWeight: '800', color: '#0d1d2e', marginBottom: '6px' }}>
                      {item.title}
                    </h4>

                    <p style={{ fontSize: '0.84rem', color: '#687d94', lineHeight: 1.55, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Column 2: Slow Motion Vertical Scroll Down */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                animation: 'verticalScrollDown 24s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {infiniteCol2.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      padding: '24px 20px',
                      border: '1.5px solid #e1ecf9',
                      boxShadow: '0 6px 20px rgba(15, 90, 162, 0.05)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#0f5aa2';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 90, 162, 0.14)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e1ecf9';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 90, 162, 0.05)';
                      e.currentTarget.style.transform = 'scale(1.0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #f0f6fc 0%, #e1ecf9 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #d4e3f3'
                      }}>
                        <IconComp size={22} color="#0f5aa2" />
                      </div>

                      <span style={{
                        fontSize: '0.74rem',
                        fontWeight: '700',
                        color: '#0f5aa2',
                        background: '#f0f6fc',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        border: '1px solid rgba(15, 90, 162, 0.12)'
                      }}>
                        {item.tag}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.06rem', fontWeight: '800', color: '#0d1d2e', marginBottom: '6px' }}>
                      {item.title}
                    </h4>

                    <p style={{ fontSize: '0.84rem', color: '#687d94', lineHeight: 1.55, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes verticalScrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes verticalScrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @media (max-width: 960px) {
          .advantages-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
