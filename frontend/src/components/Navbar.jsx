import React, { useState } from 'react';
import { User, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenAuthModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'landing', label: 'Home' },
    { id: 'search', label: 'Trademark Search' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'docs', label: 'Documentation' }
  ];

  return (
    <header style={{
      background: '#ffffff',
      borderBottom: '1px solid #e1ecf9',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 10px rgba(15, 90, 162, 0.03)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px',
        padding: '0 24px'
      }}>
        
        {/* Brand Logo - [W] Wyt TRADEMARK */}
        <div
          onClick={() => { setActiveTab('landing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: '#0f5aa2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: '900',
            fontSize: '1.25rem',
            letterSpacing: '-0.03em',
            boxShadow: '0 4px 10px rgba(15, 90, 162, 0.25)'
          }}>
            W
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontSize: '1.45rem', fontWeight: '800', color: '#0f5aa2', letterSpacing: '-0.02em' }}>
              Wyt
            </span>
            <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#8aa2ba', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              TRADEMARK
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hide-mobile">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '0.94rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? '#0f5aa2' : '#4a5d73',
                  cursor: 'pointer',
                  padding: '6px 2px',
                  position: 'relative',
                  transition: 'color 0.2s ease'
                }}
              >
                {link.label}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '2.5px',
                    borderRadius: '2px',
                    background: '#0f5aa2'
                  }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons (Right) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="hide-mobile">
          <button
            type="button"
            onClick={() => onOpenAuthModal('login')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 18px',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: '600',
              color: '#1e324a',
              background: '#ffffff',
              border: '1px solid #d4e2f2',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <User size={16} color="#0f5aa2" />
            <span>Sign In</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenAuthModal('register')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: '700',
              color: '#ffffff',
              background: '#0f5aa2',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(15, 90, 162, 0.25)',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="show-mobile"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#0f5aa2' }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          padding: '20px 24px',
          background: '#ffffff',
          borderTop: '1px solid #e1ecf9',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                textAlign: 'left',
                fontSize: '1rem',
                fontWeight: activeTab === link.id ? '700' : '500',
                color: activeTab === link.id ? '#0f5aa2' : '#4a5d73',
                padding: '8px 0',
                cursor: 'pointer'
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <button
              onClick={() => { onOpenAuthModal('login'); setMobileMenuOpen(false); }}
              style={{ padding: '10px', borderRadius: '8px', border: '1px solid #d4e2f2', fontWeight: '600', color: '#1e324a' }}
            >
              Sign In
            </button>
            <button
              onClick={() => { onOpenAuthModal('register'); setMobileMenuOpen(false); }}
              style={{ padding: '12px', borderRadius: '8px', background: '#0f5aa2', color: '#ffffff', fontWeight: '700', border: 'none' }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
