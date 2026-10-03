import React from 'react';
import footerMapTm from '../assets/footer_dark_map_tm.png';

export default function Footer({ setActiveTab, onOpenAuthModal }) {
  const handleNav = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #083866 0%, #0c4d87 50%, #083866 100%)',
      color: '#ffffff',
      borderTop: '1px solid rgba(225, 236, 249, 0.2)',
      paddingTop: '56px',
      paddingBottom: '28px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Ambient Blue Radial Glow */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        right: '15%',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.25) 0%, rgba(15, 90, 162, 0.1) 50%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Top Left Section Number Pill '03' */}
      <div style={{
        position: 'absolute',
        top: '24px',
        left: '28px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px 14px',
        borderRadius: '10px',
        background: '#0f5aa2',
        color: '#ffffff',
        fontSize: '0.84rem',
        fontWeight: '800',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(225, 236, 249, 0.3)',
        zIndex: 10
      }}>
        03
      </div>

      {/* Right Side Seamlessly Blended Dotted World Map with Glowing TM Badge */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '54%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.85,
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.85) 30%, black 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.85) 30%, black 100%)'
      }}>
        <img
          src={footerMapTm}
          alt="Global Trademark Network"
          style={{
            height: '100%',
            width: 'auto',
            maxHeight: '280px',
            objectFit: 'contain',
            objectPosition: 'right center',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        
        {/* =========================================================================
            MAIN FOOTER GRID: BRAND INFO + VERTICAL DIVIDER + 3 LINK COLUMNS
           ========================================================================= */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '44px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }} className="footer-main-row">
          
          {/* Brand Info Column */}
          <div style={{ maxWidth: '320px', paddingRight: '28px', borderRight: '1px solid rgba(225, 236, 249, 0.2)' }} className="footer-brand-col">
            
            {/* Logo */}
            <div
              onClick={() => handleNav('landing')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '14px', cursor: 'pointer' }}
            >
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#083866',
                fontWeight: '900',
                fontSize: '1.25rem',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
              }}>
                W
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                Wyt
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '0.88rem',
              color: '#d0e3f7',
              lineHeight: 1.6,
              marginBottom: '20px'
            }}>
              Trademark information. Ready when you need it. Search 20L+ structured records in one place.
            </p>

            {/* Social Icons Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* LinkedIn */}
              <a
                href="#linkedin"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(225, 236, 249, 0.25)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#083866';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#twitter"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(225, 236, 249, 0.25)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: '800',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#083866';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                𝕏
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(225, 236, 249, 0.25)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#083866';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(225, 236, 249, 0.25)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#083866';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>

          </div>

          {/* Product Column */}
          <div style={{ minWidth: '140px' }}>
            <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#7dd3fc', marginBottom: '16px', letterSpacing: '-0.01em' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '0.88rem', color: '#e0f2fe' }}>
              <li>
                <a
                  onClick={() => handleNav('search')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#e0f2fe'}
                >
                  Trademark Search
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNav('how-it-works')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#e0f2fe'}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNav('docs')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#e0f2fe'}
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div style={{ minWidth: '140px' }}>
            <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#7dd3fc', marginBottom: '16px', letterSpacing: '-0.01em' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '0.88rem', color: '#e0f2fe' }}>
              <li>
                <a
                  onClick={() => handleNav('landing')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#e0f2fe'}
                >
                  About Wyt
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNav('landing')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#e0f2fe'}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNav('landing')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#e0f2fe'}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Account Column */}
          <div style={{ minWidth: '120px' }}>
            <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#7dd3fc', marginBottom: '16px', letterSpacing: '-0.01em' }}>
              Account
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '0.88rem', color: '#e0f2fe' }}>
              <li>
                <a
                  onClick={() => onOpenAuthModal('login')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#e0f2fe'}
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  onClick={() => onOpenAuthModal('register')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#e0f2fe'}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM COPYRIGHT BAR
           ========================================================================= */}
        <div style={{
          borderTop: '1px solid rgba(225, 236, 249, 0.18)',
          paddingTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.84rem',
          color: '#a5c8eb',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            © 2026 Wyt. All rights reserved.
          </div>
          <div>
            Official Trademark Search & Discovery Platform
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 820px) {
          .footer-brand-col {
            border-right: none !important;
            padding-right: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
}
