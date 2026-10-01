import React from 'react';

export default function Footer({ setActiveTab }) {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--header-bg)',
      padding: '64px 0 32px 0',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                color: '#FFFFFF'
              }}>
                W
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-title)' }}>Wyt Trademark API</span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '320px', color: 'var(--text-dim)' }}>
              Enterprise trademark data layer for applications, platforms, and legal workflows. Search and retrieve structured records across 20+ Lakh marks through a single developer API.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ color: 'var(--text-title)', fontSize: '0.9rem', fontWeight: '700', marginBottom: '14px' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('landing'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Trademark API</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('search'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Search Explorer</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }} style={{ color: 'inherit', textDecoration: 'none' }}>API Credits & Usage</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('docs'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Documentation</a></li>
            </ul>
          </div>

          {/* Developers Links */}
          <div>
            <h4 style={{ color: 'var(--text-title)', fontSize: '0.9rem', fontWeight: '700', marginBottom: '14px' }}>Developers</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('docs'); }} style={{ color: 'inherit', textDecoration: 'none' }}>API Documentation</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('docs'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Authentication Guide</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }} style={{ color: 'inherit', textDecoration: 'none' }}>API Key Management</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('docs'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Python & JS SDKs</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ color: 'var(--text-title)', fontSize: '0.9rem', fontWeight: '700', marginBottom: '14px' }}>Company & Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }} style={{ color: 'var(--teal)', fontWeight: '700', textDecoration: 'none' }}>Contact Us / Support</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Grievance Officer</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Enterprise Sales</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('landing'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Terms & Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: 'var(--text-dim)',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>© 2026 Wyt Technologies Private Limited. All rights reserved.</div>
          <div>Built with React, FastAPI & Neon PostgreSQL</div>
        </div>

      </div>
    </footer>
  );
}
