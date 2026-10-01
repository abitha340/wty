import React from 'react';
import { Compass, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import heroGlobe from '../assets/hero_globe.png';

export default function HeroSection({ onExecuteSearch, onNavigateTab }) {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#ffffff',
      paddingTop: '64px',
      paddingBottom: '80px',
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
            RIGHT COLUMN: The Exact hero_globe.png Visual Asset
           ========================================================================= */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '380px'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '620px',
            transition: 'transform 0.3s ease'
          }}>
            <img
              src={heroGlobe}
              alt="Global Trademark Intelligence Visualization"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
