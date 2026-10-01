import React from 'react';
import { Database, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

export default function DatasetSection({ onNavigateSearch }) {
  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', background: 'var(--brand-tint)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
        
        <div className="badge badge-blue" style={{ marginBottom: '14px' }}>
          Comprehensive Catalog Coverage
        </div>

        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '14px', color: 'var(--text-title)' }}>
          Explore Millions of Trademark Records
        </h2>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '40px' }}>
          Wyt brings structured trademark information together in one place, making it easier to search, explore, and understand trademark records.
        </p>

        {/* Large Visual Statistic Tile */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '44px 32px',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid rgba(15, 90, 162, 0.2)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '36px'
        }}>
          <div>
            <div style={{ fontSize: '3.2rem', fontWeight: '900', color: 'var(--brand-primary)', letterSpacing: '-0.03em', lineHeight: 1 }}>
              20+ Lakh
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-title)', marginTop: '8px' }}>
              Trademark Records
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Classes 1 to 45
            </div>
          </div>

          <div style={{ borderLeft: '1px solid var(--border-subtle)', borderRight: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '3.2rem', fontWeight: '900', color: 'var(--brand-primary)', letterSpacing: '-0.03em', lineHeight: 1 }}>
              100%
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-title)', marginTop: '8px' }}>
              Structured Data
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Normalized Fields
            </div>
          </div>

          <div>
            <div style={{ fontSize: '3.2rem', fontWeight: '900', color: 'var(--brand-primary)', letterSpacing: '-0.03em', lineHeight: 1 }}>
              &lt; 15ms
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-title)', marginTop: '8px' }}>
              High-Speed Execution
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Instant Search Delivery
            </div>
          </div>
        </div>

        <button onClick={onNavigateSearch} className="btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
          <span>Search the 20L+ Catalog</span>
          <ArrowRight size={16} />
        </button>

      </div>
    </section>
  );
}
