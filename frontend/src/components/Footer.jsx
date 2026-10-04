import React from 'react';

export default function Footer({ setActiveTab, onOpenAuthModal }) {
  const handleNav = (id) => {
    if (setActiveTab) {
      setActiveTab(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      color: '#111827',
      borderTop: '1px solid rgba(0, 0, 0, 0.08)',
      paddingTop: '64px',
      paddingBottom: '36px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>

      <div className="container" style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 48px)',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* =========================================================================
            MAIN FOOTER GRID: BRAND INFO + 3 LINK COLUMNS
           ========================================================================= */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '48px',
          marginBottom: '52px',
          flexWrap: 'wrap'
        }} className="footer-main-row">
          
          {/* Brand Info Column */}
          <div style={{ maxWidth: '380px' }} className="footer-brand-col">
            
            {/* Logo */}
            <div 
              onClick={() => handleNav('landing')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px', cursor: 'pointer' }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: '#083866',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '900',
                color: '#ffffff',
                fontSize: '1.25rem',
                boxShadow: '0 2px 8px rgba(8, 56, 102, 0.25)'
              }}>
                W
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#111827', letterSpacing: '-0.02em' }}>
                Wyt
              </span>
            </div>

            <p style={{
              fontSize: '0.96rem',
              lineHeight: '1.68',
              color: '#4b5563',
              marginBottom: '24px',
              maxWidth: '340px'
            }}>
              Trademark information. Ready when you need it. Search 20L+ structured records in one place.
            </p>

            {/* Social Icons: LinkedIn, X, YouTube, Instagram */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#111827',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  textDecoration: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#083866';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.color = '#111827';
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
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#111827',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  textDecoration: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#083866';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.color = '#111827';
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
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#111827',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  textDecoration: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#083866';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.color = '#111827';
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
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#111827',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  textDecoration: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#083866';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.color = '#111827';
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
            gap: '56px',
            flexWrap: 'wrap'
          }}>
            
            {/* Column 1: Product */}
            <div style={{ minWidth: '140px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#111827', marginBottom: '18px', letterSpacing: '-0.01em' }}>
                Product
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <a 
                    onClick={() => handleNav('search')}
                    style={{ cursor: 'pointer', color: '#4b5563', textDecoration: 'none', fontSize: '0.94rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#083866'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
                  >
                    Trademark Search
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => handleNav('how-it-works')}
                    style={{ cursor: 'pointer', color: '#4b5563', textDecoration: 'none', fontSize: '0.94rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#083866'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => handleNav('docs')}
                    style={{ cursor: 'pointer', color: '#4b5563', textDecoration: 'none', fontSize: '0.94rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#083866'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div style={{ minWidth: '140px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#111827', marginBottom: '18px', letterSpacing: '-0.01em' }}>
                Company
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <a 
                    onClick={() => handleNav('landing')}
                    style={{ cursor: 'pointer', color: '#4b5563', textDecoration: 'none', fontSize: '0.94rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#083866'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
                  >
                    About Wyt
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => handleNav('docs')}
                    style={{ cursor: 'pointer', color: '#4b5563', textDecoration: 'none', fontSize: '0.94rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#083866'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => handleNav('docs')}
                    style={{ cursor: 'pointer', color: '#4b5563', textDecoration: 'none', fontSize: '0.94rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#083866'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Account */}
            <div style={{ minWidth: '120px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#111827', marginBottom: '18px', letterSpacing: '-0.01em' }}>
                Account
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <a 
                    onClick={() => onOpenAuthModal && onOpenAuthModal('login')}
                    style={{ cursor: 'pointer', color: '#4b5563', textDecoration: 'none', fontSize: '0.94rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#083866'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
                  >
                    Sign In
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                    style={{ cursor: 'pointer', color: '#4b5563', textDecoration: 'none', fontSize: '0.94rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#083866'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
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
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.88rem',
          color: '#6b7280'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Wyt. All rights reserved.
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#374151',
            fontWeight: '600'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#083866',
              boxShadow: '0 0 6px rgba(8, 56, 102, 0.4)'
            }} />
            Official Trademark Search & Discovery Platform
          </div>
        </div>

      </div>

    </footer>
  );
}
