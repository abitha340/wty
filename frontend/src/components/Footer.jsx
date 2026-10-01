import React from 'react';

export default function Footer({ setActiveTab, onOpenAuthModal }) {
  const handleNav = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid var(--border-subtle)', padding: '60px 0 36px 0' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--brand-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' }}>
                W
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--brand-primary)' }}>Wyt</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '280px' }}>
              Trademark information. Ready when you need it. Search 20L+ structured records in one place.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '16px' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><a onClick={() => handleNav('search')} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Trademark Search</a></li>
              <li><a onClick={() => handleNav('how-it-works')} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>How It Works</a></li>
              <li><a onClick={() => handleNav('docs')} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Documentation</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '16px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><a onClick={() => handleNav('landing')} style={{ cursor: 'pointer' }}>About Wyt</a></li>
              <li><a onClick={() => handleNav('landing')} style={{ cursor: 'pointer' }}>Terms of Service</a></li>
              <li><a onClick={() => handleNav('landing')} style={{ cursor: 'pointer' }}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '16px' }}>Account</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><a onClick={() => onOpenAuthModal('login')} style={{ cursor: 'pointer' }}>Sign In</a></li>
              <li><a onClick={() => onOpenAuthModal('register')} style={{ cursor: 'pointer' }}>Register</a></li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.84rem', color: 'var(--text-dim)', flexWrap: 'wrap', gap: '12px' }}>
          <span>© 2026 Wyt. All rights reserved.</span>
          <span>Official Trademark Search & Discovery Platform</span>
        </div>

      </div>
    </footer>
  );
}
