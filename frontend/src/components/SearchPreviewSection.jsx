import React from 'react';
import { Search, Filter, Eye, CheckCircle2, Building2, Layers, Globe } from 'lucide-react';

export default function SearchPreviewSection({ onNavigateSearch }) {
  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', background: '#ffffff' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px auto' }}>
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            Product Interface Preview
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '12px', color: 'var(--text-title)' }}>
            A Simple Way to Explore Trademark Records
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)' }}>
            Experience an intuitive interface designed for clear trademark inspection, instant filtering, and comprehensive record verification.
          </p>
        </div>

        {/* UI Mockup Card Preview */}
        <div style={{
          background: 'var(--bg-page)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: 'var(--shadow-lg)',
          maxWidth: '1020px',
          margin: '0 auto'
        }}>
          {/* Mockup Header */}
          <div style={{
            background: '#ffffff',
            padding: '16px 20px',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Search size={18} color="var(--brand-primary)" />
              <span style={{ fontWeight: '800', color: 'var(--text-title)', fontSize: '1rem' }}>NIKE</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>· Mode: Contains</span>
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--brand-primary)' }}>
              1,248 Records Found
            </div>
          </div>

          {/* Mockup 2-Column Split: Filters Left + Results Right */}
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '20px' }}>
            
            {/* Left Filter Sidebar Mockup */}
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '14px' }}>
                <Filter size={15} color="var(--brand-primary)" />
                <span>Filters Applied</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ background: 'var(--brand-light)', padding: '6px 10px', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--brand-dark)', fontWeight: '700' }}>
                  Class: 25 (Apparel)
                </div>
                <div style={{ background: 'var(--brand-light)', padding: '6px 10px', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--brand-dark)', fontWeight: '700' }}>
                  Status: Registered
                </div>
                <div style={{ background: 'var(--brand-light)', padding: '6px 10px', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--brand-dark)', fontWeight: '700' }}>
                  Country: India & Global
                </div>
              </div>
            </div>

            {/* Right Results Mockup */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                background: '#ffffff',
                padding: '20px 24px',
                borderRadius: '12px',
                border: '1px solid var(--border-focus)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--text-title)', margin: 0 }}>NIKE</h4>
                    <span style={{ fontSize: '0.72rem', fontWeight: '800', padding: '2px 8px', borderRadius: '9999px', background: 'var(--status-registered-bg)', color: 'var(--status-registered-text)' }}>
                      REGISTERED
                    </span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    App #1948201 · Owner: <strong>Nike Innovate C.V.</strong> · Class 25
                  </div>
                </div>

                <button onClick={onNavigateSearch} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.82rem' }}>
                  <span>View Details →</span>
                </button>
              </div>

              <div style={{
                background: '#ffffff',
                padding: '16px 24px',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                opacity: 0.8
              }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-title)', margin: 0 }}>NIKE AIR</h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>App #2491024 · Class 25 · Registered</div>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--brand-primary)', fontWeight: '700' }}>View Details →</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
