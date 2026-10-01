import React from 'react';
import { Compass, BookOpen, ArrowRight, Globe, ShieldCheck, Search, FileText, Sparkles } from 'lucide-react';

export default function HeroSection({ onExecuteSearch, onNavigateTab }) {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)',
      paddingTop: '64px',
      paddingBottom: '90px',
      borderBottom: '1px solid #e1ecf9'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '48px',
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
          <div style={{ display: 'inline-flex', marginBottom: '24px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
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
            marginBottom: '24px'
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
            marginBottom: '38px',
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
                borderRadius: '10px',
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
            RIGHT COLUMN: Interactive Dotted World Map with 4 Floating Glass Cards
           ========================================================================= */}
        <div style={{
          position: 'relative',
          minHeight: '440px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          
          {/* Dotted World Map Graphic */}
          <div style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0.9,
            pointerEvents: 'none'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 650 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              
              {/* Connection Arcs */}
              <path d="M 60 200 C 180 80, 420 60, 560 200" stroke="#0f5aa2" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" />
              <path d="M 120 280 C 260 380, 480 320, 580 180" stroke="#0f5aa2" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
              <path d="M 180 140 C 300 240, 440 220, 520 300" stroke="#0f5aa2" strokeWidth="1.2" opacity="0.25" />
              
              {/* Glowing Nodes */}
              <circle cx="100" cy="190" r="5" fill="#0f5aa2" />
              <circle cx="100" cy="190" r="10" stroke="#0f5aa2" strokeWidth="1.5" opacity="0.4" />
              
              <circle cx="280" cy="120" r="4" fill="#0f5aa2" />
              <circle cx="280" cy="120" r="8" stroke="#0f5aa2" strokeWidth="1" opacity="0.35" />

              <circle cx="380" cy="270" r="5.5" fill="#0f5aa2" />
              <circle cx="380" cy="270" r="11" stroke="#0f5aa2" strokeWidth="1.5" opacity="0.45" />

              <circle cx="540" cy="195" r="4.5" fill="#0f5aa2" />
              <circle cx="540" cy="195" r="9" stroke="#0f5aa2" strokeWidth="1.2" opacity="0.4" />

              {/* Dotted Global Density Cluster (Continents representation) */}
              <g fill="#0f5aa2" opacity="0.38">
                {/* North & South America Region */}
                <circle cx="80" cy="140" r="2.2" /><circle cx="95" cy="135" r="2.2" /><circle cx="110" cy="140" r="2.2" />
                <circle cx="70" cy="155" r="2.2" /><circle cx="85" cy="150" r="2.2" /><circle cx="100" cy="155" r="2.2" /><circle cx="115" cy="150" r="2.2" />
                <circle cx="80" cy="170" r="2.2" /><circle cx="95" cy="165" r="2.2" /><circle cx="110" cy="170" r="2.2" /><circle cx="125" cy="165" r="2.2" />
                <circle cx="90" cy="185" r="2.2" /><circle cx="105" cy="180" r="2.2" /><circle cx="120" cy="185" r="2.2" />
                <circle cx="110" cy="220" r="2.2" /><circle cx="125" cy="235" r="2.2" /><circle cx="135" cy="250" r="2.2" />
                <circle cx="130" cy="270" r="2.2" /><circle cx="140" cy="290" r="2.2" /><circle cx="135" cy="310" r="2.2" />

                {/* Europe & Africa Region */}
                <circle cx="260" cy="120" r="2.2" /><circle cx="275" cy="115" r="2.2" /><circle cx="290" cy="120" r="2.2" /><circle cx="305" cy="115" r="2.2" />
                <circle cx="255" cy="135" r="2.2" /><circle cx="270" cy="130" r="2.2" /><circle cx="285" cy="135" r="2.2" /><circle cx="300" cy="130" r="2.2" />
                <circle cx="265" cy="160" r="2.2" /><circle cx="280" cy="155" r="2.2" /><circle cx="295" cy="160" r="2.2" /><circle cx="310" cy="155" r="2.2" />
                <circle cx="270" cy="180" r="2.2" /><circle cx="285" cy="175" r="2.2" /><circle cx="300" cy="180" r="2.2" /><circle cx="315" cy="185" r="2.2" />
                <circle cx="275" cy="210" r="2.2" /><circle cx="290" cy="225" r="2.2" /><circle cx="305" cy="240" r="2.2" /><circle cx="310" cy="260" r="2.2" />
                <circle cx="295" cy="280" r="2.2" /><circle cx="300" cy="300" r="2.2" /><circle cx="305" cy="320" r="2.2" />

                {/* Asia & Pacific Region */}
                <circle cx="370" cy="110" r="2.2" /><circle cx="390" cy="105" r="2.2" /><circle cx="410" cy="110" r="2.2" /><circle cx="430" cy="105" r="2.2" /><circle cx="450" cy="110" r="2.2" /><circle cx="470" cy="105" r="2.2" /><circle cx="490" cy="110" r="2.2" />
                <circle cx="360" cy="130" r="2.2" /><circle cx="380" cy="125" r="2.2" /><circle cx="400" cy="130" r="2.2" /><circle cx="420" cy="125" r="2.2" /><circle cx="440" cy="130" r="2.2" /><circle cx="460" cy="125" r="2.2" /><circle cx="480" cy="130" r="2.2" /><circle cx="500" cy="125" r="2.2" />
                <circle cx="375" cy="150" r="2.2" /><circle cx="395" cy="145" r="2.2" /><circle cx="415" cy="150" r="2.2" /><circle cx="435" cy="145" r="2.2" /><circle cx="455" cy="150" r="2.2" /><circle cx="475" cy="145" r="2.2" /><circle cx="495" cy="150" r="2.2" />
                <circle cx="410" cy="170" r="2.2" /><circle cx="430" cy="165" r="2.2" /><circle cx="450" cy="170" r="2.2" /><circle cx="470" cy="165" r="2.2" /><circle cx="490" cy="170" r="2.2" /><circle cx="520" cy="165" r="2.2" />
                <circle cx="420" cy="190" r="2.2" /><circle cx="440" cy="185" r="2.2" /><circle cx="460" cy="190" r="2.2" /><circle cx="480" cy="185" r="2.2" /><circle cx="530" cy="190" r="2.2" />
                <circle cx="430" cy="215" r="2.2" /><circle cx="450" cy="210" r="2.2" /><circle cx="470" cy="225" r="2.2" /><circle cx="490" cy="240" r="2.2" />
                <circle cx="490" cy="280" r="2.2" /><circle cx="510" cy="290" r="2.2" /><circle cx="530" cy="285" r="2.2" /><circle cx="540" cy="305" r="2.2" />
              </g>
            </svg>
          </div>

          {/* =========================================================================
              4 FLOATING GLASS CARDS (Exactly as in Reference Image)
             ========================================================================= */}
          
          {/* Card 1: Global Coverage (Top-Right) */}
          <div style={{
            position: 'absolute',
            top: '18px',
            right: '28px',
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 12px 32px rgba(15, 90, 162, 0.12)',
            border: '1px solid rgba(225, 236, 249, 0.95)',
            zIndex: 3,
            minWidth: '190px',
            animation: 'floating 4s ease-in-out infinite'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: '#f0f6fc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Globe size={22} color="#0f5aa2" />
            </div>
            <div>
              <div style={{ fontSize: '0.96rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
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
            top: '140px',
            left: '10px',
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 12px 32px rgba(15, 90, 162, 0.12)',
            border: '1px solid rgba(225, 236, 249, 0.95)',
            zIndex: 3,
            minWidth: '180px',
            animation: 'floating 4.5s ease-in-out infinite 0.5s'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: '#0f5aa2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShieldCheck size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '0.96rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
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
            top: '185px',
            right: '0px',
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 12px 32px rgba(15, 90, 162, 0.12)',
            border: '1px solid rgba(225, 236, 249, 0.95)',
            zIndex: 3,
            minWidth: '190px',
            animation: 'floating 5s ease-in-out infinite 1s'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: '#f0f6fc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Search size={22} color="#0f5aa2" />
            </div>
            <div>
              <div style={{ fontSize: '0.96rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
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
            bottom: '22px',
            left: '140px',
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 12px 32px rgba(15, 90, 162, 0.12)',
            border: '1px solid rgba(225, 236, 249, 0.95)',
            zIndex: 3,
            minWidth: '205px',
            animation: 'floating 4.2s ease-in-out infinite 1.5s'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: '#0f5aa2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FileText size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '0.96rem', fontWeight: '800', color: '#0d1d2e', lineHeight: 1.2 }}>
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
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
