import React, { useState } from 'react';
import { Search, Menu, X, ArrowRight, ShieldCheck, BookOpen, Layers, HelpCircle, User } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenAuthModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'landing', label: 'Home' },
    { id: 'search', label: 'Trademark Search' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'docs', label: 'Documentation' }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.94)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Left: Brand Logo */}
        <div 
          onClick={() => handleNavClick('landing')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #0f5aa2 0%, #0b3b6d 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: '900',
            fontSize: '1.25rem',
            boxShadow: '0 3px 10px rgba(15, 90, 162, 0.25)'
          }}>
            W
          </div>
          <div>
            <span style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--brand-primary)', letterSpacing: '-0.03em' }}>
              Wyt
            </span>
            <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--text-muted)', marginLeft: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Trademark
            </span>
          </div>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-only">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: isActive ? 'var(--brand-light)' : 'transparent',
                  color: isActive ? 'var(--brand-primary)' : 'var(--text-main)',
                  fontWeight: isActive ? '700' : '600',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--brand-primary)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: User Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-only">
          <button
            onClick={() => onOpenAuthModal('login')}
            className="btn-outline"
          >
            <User size={15} />
            <span>Sign In</span>
          </button>
          
          <button
            onClick={() => handleNavClick('search')}
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          >
            <span>Get Started</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-title)',
            cursor: 'pointer',
            padding: '8px'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                textAlign: 'left',
                padding: '10px 14px',
                borderRadius: '8px',
                background: activeTab === link.id ? 'var(--brand-light)' : 'transparent',
                color: activeTab === link.id ? 'var(--brand-primary)' : 'var(--text-title)',
                fontWeight: '700',
                border: 'none',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => { setMobileMenuOpen(false); onOpenAuthModal('login'); }} className="btn-secondary" style={{ width: '100%' }}>
              Sign In
            </button>
            <button onClick={() => handleNavClick('search')} className="btn-primary" style={{ width: '100%' }}>
              Get Started
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
