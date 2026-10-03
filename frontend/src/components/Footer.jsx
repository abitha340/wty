import React from 'react';
import footerTmHologram from '../assets/footer_tm_hologram_3d.png';

export default function Footer({ setActiveTab, onOpenAuthModal }) {
  const handleNav = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #092c53 0%, #0d4885 50%, #082a50 100%)',
      color: '#ffffff',
      borderTop: '1px solid rgba(125, 211, 252, 0.25)',
      paddingTop: '64px',
      paddingBottom: '32px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Ambient Blue Glowing Light Spheres */}
      <div style={{
        position: 'absolute',
        top: '-60px',
        right: '15%',
        width: '600px',
        height: '340px',
        background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.28) 0%, rgba(15, 90, 162, 0.15) 50%, transparent 75%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '8%',
        width: '420px',
        height: '220px',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.14) 0%, transparent 70%)',
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
        background: '#0284c7',
        color: '#ffffff',
        fontSize: '0.84rem',
        fontWeight: '800',
        boxShadow: '0 2px 10px rgba(2, 132, 199, 0.4)',
        border: '1px solid rgba(225, 236, 249, 0.4)',
        zIndex: 10
      }}>
        03
      </div>

      {/* Right Side Seamlessly Blended 3D Trademark Intelligence Hologram */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '1%',
        transform: 'translateY(-50%)',
        width: '46%',
        maxWidth: '620px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.95
      }}>
        <img
          src={footerTmHologram}
          alt="3D Trademark Network Intelligence"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '290px',
            objectFit: 'contain',
            mixBlendMode: 'screen',
            filter: 'drop-shadow(0 0 25px rgba(56, 189, 248, 0.4))'
          }}
        />
      </div>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        
        {/* =========================================================================
            MAIN FOOTER ROW: BRAND INFO + VERTICAL DIVIDER + 3 LINK COLUMNS
           ========================================================================= */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '44px',
          marginBottom: '44px',
          flexWrap: 'wrap'
        }} className="footer-main-row">
          
          {/* Brand Info Column */}
          <div style={{ maxWidth: '330px', paddingRight: '30px', borderRight: '1px solid rgba(225, 236, 249, 0.22)' }} className="footer-brand-col">
            
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
                fontWeight: '900',
                color: '#083866',
                fontSize: '1.25rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)'
              }}>
                W
              </div>
              <span style={{ fontSize: '1.45rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                Wyt
              </span>
            </div>

            <p style={{
              fontSize: '0.92rem',
              lineHeight: '1.65',
              color: 'rgba(225, 236, 249, 0.88)',
              marginBottom: '20px',
              maxWidth: '290px'
            }}>
              Trademark information. Ready when you need it. Search 20L+ structured records in one place.
            </p>

            {/* Social Icons matching uploaded screenshot: LinkedIn, X, YouTube, Instagram */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.18)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#083866';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.64 1.66 1.66 0 0 0 1.66 1.66 1.65 1.65 0 0 0 1.64-1.66c0-.91-.73-1.64-1.64-1.64Z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.18)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#083866';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.18)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#083866';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.18)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#083866';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Navigation Link Columns */}
          <div style={{
            display: 'flex',
            gap: '36px',
            flex: 1,
            flexWrap: 'wrap'
          }}>
            
            {/* Column 1: Product */}
            <div style={{ minWidth: '130px' }}>
              <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#7dd3fc', marginBottom: '16px', letterSpacing: '0.02em' }}>
                Product
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <li>
                  <a 
                    onClick={() => handleNav('search')}
                    style={{ cursor: 'pointer', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.91rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                  >
                    Trademark Search
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => handleNav('how-it-works')}
                    style={{ cursor: 'pointer', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.91rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => handleNav('docs')}
                    style={{ cursor: 'pointer', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.91rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div style={{ minWidth: '130px' }}>
              <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#7dd3fc', marginBottom: '16px', letterSpacing: '0.02em' }}>
                Company
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <li>
                  <a 
                    onClick={() => handleNav('landing')}
                    style={{ cursor: 'pointer', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.91rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                  >
                    About Wyt
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => handleNav('docs')}
                    style={{ cursor: 'pointer', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.91rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => handleNav('docs')}
                    style={{ cursor: 'pointer', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.91rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Account */}
            <div style={{ minWidth: '110px' }}>
              <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#7dd3fc', marginBottom: '16px', letterSpacing: '0.02em' }}>
                Account
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <li>
                  <a 
                    onClick={() => onOpenAuthModal && onOpenAuthModal('login')}
                    style={{ cursor: 'pointer', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.91rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                  >
                    Sign In
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                    style={{ cursor: 'pointer', color: '#e2e8f0', textDecoration: 'none', fontSize: '0.91rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* =========================================================================
            FOOTER BOTTOM BAR: COPYRIGHT & PLATFORM TAGLINE
           ========================================================================= */}
        <div style={{
          borderTop: '1px solid rgba(225, 236, 249, 0.16)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.84rem',
          color: 'rgba(225, 236, 249, 0.75)'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Wyt. All rights reserved.
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(225, 236, 249, 0.9)',
            fontWeight: '500'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#38bdf8',
              boxShadow: '0 0 8px #38bdf8'
            }} />
            Official Trademark Search & Discovery Platform
          </div>
        </div>

      </div>

    </footer>
  );
}
