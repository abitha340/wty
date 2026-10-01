import React from 'react';
import { Compass, BookOpen, ArrowRight, Globe, ShieldCheck, Search, FileText, Sparkles } from 'lucide-react';
import heroGlobe from '../assets/hero_globe.jpg';

export default function HeroSection({ onExecuteSearch, onNavigateTab }) {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#ffffff',
      paddingTop: '64px',
      paddingBottom: '88px',
      borderBottom: '1px solid #e1ecf9'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '40px',
        alignItems: 'center',
        padding: '0 24px',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        
        {/* =========================================================================
            LEFT COLUMN: Intro Content & Action CTAs
           ========================================================================= */}
        <div style={{ zIndex: 2 }}>
          
          {/* Top Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '22px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 18px',
              borderRadius: '24px',
              background: '#e1ecf9',
              color: '#0f5aa2',
              fontSize: '0.86rem',
              fontWeight: '700',
              boxShadow: '0 2px 8px rgba(15, 90, 162, 0.08)'
            }}>
              <Sparkles size={16} color="#0f5aa2" />
              <span>Welcome to Wyt • Trademark Intelligence Platform</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.3vw, 3.8rem)',
            fontWeight: '900',
            lineHeight: 1.15,
            letterSpacing: '-0.035em',
            color: '#0d1d2e',
            marginBottom: '22px'
          }}>
            Discover, Understand &<br />
            Explore Trademarks<br />
            in One Place
          </h1>

          {/* Description Paragraph */}
          <p style={{
            fontSize: '1.08rem',
            color: '#556980',
            lineHeight: 1.75,
            marginBottom: '36px',
            maxWidth: '560px'
          }}>
            Wyt is a modern trademark intelligence platform designed for business owners, brand managers, researchers, and legal professionals. We bring millions of structured trademark records together in a unified interface so you can easily verify brand availability, explore ownership history, track application statuses, and inspect international classifications without complexity.
          </p>

          {/* Two Buttons Side-by-Side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => onNavigateTab ? onNavigateTab('search') : onExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                borderRadius: '8px',
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
              <Compass size={19} />
              <span>Launch Trademark Explorer</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab ? onNavigateTab('how-it-works') : null}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 24px',
                borderRadius: '8px',
                background: '#ffffff',
                color: '#0f5aa2',
                fontSize: '1rem',
                fontWeight: '700',
                border: '1px solid #d0e1f4',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(15, 90, 162, 0.06)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f4f8fd';
                e.currentTarget.style.borderColor = '#0f5aa2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#d0e1f4';
              }}
            >
              <BookOpen size={18} color="#0f5aa2" />
              <span>Learn How It Works</span>
            </button>
          </div>

        </div>

        {/* =========================================================================
            RIGHT COLUMN: Realistic 3D Globe with 4 Floating Glass Cards
           ========================================================================= */}
        <div style={{
          position: 'relative',
          minHeight: '460px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          
          {/* Globe Background Image */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}>
            <img
              src={heroGlobe}
              alt="Global Trademark Intelligence Coverage"
              style={{
                width: '100%',
                maxWidth: '560px',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '24px',
                mixBlendMode: 'multiply'
              }}
            />
          </div>

          {/* =========================================================================
              4 FLOATING GLASS CARDS (Exactly as in Reference Image)
             ========================================================================= */}
          
          {/* Card 1: Global Coverage (Top-Right) */}
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '18px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '13px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 12px 30px rgba(15, 90, 162, 0.12)',
            border: '1px solid #e1ecf9',
            zIndex: 4,
            minWidth: '185px',
            animation: 'floating 4.5s ease-in-out infinite'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: '#f0f6fc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Globe size={22} color="#0f5aa2" />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
                Global Coverage
              </div>
              <div style={{ fontSize: '0.78rem', color: '#687d94', fontWeight: '600', marginTop: '2px' }}>
                190+ Countries
              </div>
            </div>
          </div>

          {/* Card 2: Verified Data (Middle-Left) */}
          <div style={{
            position: 'absolute',
            top: '155px',
            left: '-6px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '13px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 12px 30px rgba(15, 90, 162, 0.12)',
            border: '1px solid #e1ecf9',
            zIndex: 4,
            minWidth: '180px',
            animation: 'floating 5s ease-in-out infinite 0.6s'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: '#0f5aa2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShieldCheck size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
                Verified Data
              </div>
              <div style={{ fontSize: '0.78rem', color: '#687d94', fontWeight: '600', marginTop: '2px' }}>
                Trusted Sources
              </div>
            </div>
          </div>

          {/* Card 3: Easy Search (Middle-Right) */}
          <div style={{
            position: 'absolute',
            top: '190px',
            right: '-10px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '13px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 12px 30px rgba(15, 90, 162, 0.12)',
            border: '1px solid #e1ecf9',
            zIndex: 4,
            minWidth: '185px',
            animation: 'floating 4.8s ease-in-out infinite 1.2s'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: '#f0f6fc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Search size={22} color="#0f5aa2" />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
                Easy Search
              </div>
              <div style={{ fontSize: '0.78rem', color: '#687d94', fontWeight: '600', marginTop: '2px' }}>
                Find & Explore Fast
              </div>
            </div>
          </div>

          {/* Card 4: Track Applications (Bottom-Center/Right) */}
          <div style={{
            position: 'absolute',
            bottom: '18px',
            left: '120px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '13px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 12px 30px rgba(15, 90, 162, 0.12)',
            border: '1px solid #e1ecf9',
            zIndex: 4,
            minWidth: '205px',
            animation: 'floating 4.2s ease-in-out infinite 1.8s'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: '#0f5aa2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FileText size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
                Track Applications
              </div>
              <div style={{ fontSize: '0.78rem', color: '#687d94', fontWeight: '600', marginTop: '2px' }}>
                Stay Updated
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
