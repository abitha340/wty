import React from 'react';
import { Compass, BookOpen, ArrowRight, Sparkles, Globe, ShieldCheck, Search, FileText } from 'lucide-react';
import heroGlobe from '../assets/hero_globe.png';

export default function HeroSection({ onExecuteSearch, onNavigateTab }) {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#ffffff',
      paddingTop: '64px',
      paddingBottom: '84px',
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
            RIGHT COLUMN: Globe with High-Definition Floating Text Cards
           ========================================================================= */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '440px'
        }}>
          
          {/* Base Globe Visual */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '600px'
          }}>
            <img
              src={heroGlobe}
              alt="Global Trademark Intelligence"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />

            {/* Overlaid Vector Cards For Maximum Sharpness and Hover Effects */}
            
            {/* 1. Global Coverage (Top Right) */}
            <div style={{
              position: 'absolute',
              top: '6%',
              right: '4%',
              background: '#ffffff',
              borderRadius: '16px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 10px 28px rgba(15, 90, 162, 0.12)',
              border: '1px solid #e1ecf9',
              zIndex: 10,
              cursor: 'default',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(15, 90, 162, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(15, 90, 162, 0.12)';
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: '#f0f6fc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Globe size={22} color="#0f5aa2" />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
                  Global Coverage
                </div>
                <div style={{ fontSize: '0.78rem', color: '#687d94', fontWeight: '600', marginTop: '2px' }}>
                  190+ Countries
                </div>
              </div>
            </div>

            {/* 2. Verified Data (Middle Left) */}
            <div style={{
              position: 'absolute',
              top: '38%',
              left: '6%',
              background: '#ffffff',
              borderRadius: '16px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 10px 28px rgba(15, 90, 162, 0.12)',
              border: '1px solid #e1ecf9',
              zIndex: 10,
              cursor: 'default',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(15, 90, 162, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(15, 90, 162, 0.12)';
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: '#0f5aa2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldCheck size={22} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
                  Verified Data
                </div>
                <div style={{ fontSize: '0.78rem', color: '#687d94', fontWeight: '600', marginTop: '2px' }}>
                  Trusted Sources
                </div>
              </div>
            </div>

            {/* 3. Easy Search (Middle Right) */}
            <div style={{
              position: 'absolute',
              top: '46%',
              right: '2%',
              background: '#ffffff',
              borderRadius: '16px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 10px 28px rgba(15, 90, 162, 0.12)',
              border: '1px solid #e1ecf9',
              zIndex: 10,
              cursor: 'default',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(15, 90, 162, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(15, 90, 162, 0.12)';
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: '#f0f6fc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Search size={22} color="#0f5aa2" />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
                  Easy Search
                </div>
                <div style={{ fontSize: '0.78rem', color: '#687d94', fontWeight: '600', marginTop: '2px' }}>
                  Find & Explore Fast
                </div>
              </div>
            </div>

            {/* 4. Track Applications (Bottom Center) */}
            <div style={{
              position: 'absolute',
              bottom: '4%',
              left: '26%',
              background: '#ffffff',
              borderRadius: '16px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 10px 28px rgba(15, 90, 162, 0.12)',
              border: '1px solid #e1ecf9',
              zIndex: 10,
              cursor: 'default',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(15, 90, 162, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(15, 90, 162, 0.12)';
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: '#0f5aa2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FileText size={22} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
                  Track Applications
                </div>
                <div style={{ fontSize: '0.78rem', color: '#687d94', fontWeight: '600', marginTop: '2px' }}>
                  Stay Updated
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
