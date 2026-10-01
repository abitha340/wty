import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

export default function FinalCTA({ onNavigateSearch, onOpenAuthModal }) {
  return (
    <section style={{ padding: '90px 0', background: 'linear-gradient(135deg, #0f5aa2 0%, #0b3b6d 100%)', color: '#ffffff', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
        
        <h2 style={{ fontSize: '2.6rem', fontWeight: '900', letterSpacing: '-0.025em', marginBottom: '16px', color: '#ffffff' }}>
          Find the Trademark Information You Need
        </h2>

        <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, marginBottom: '36px' }}>
          Search, explore, and understand trademark information in one place with Wyt.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button 
            onClick={onNavigateSearch}
            style={{
              padding: '14px 32px',
              borderRadius: '10px',
              background: '#ffffff',
              color: 'var(--brand-primary)',
              fontWeight: '800',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            <Search size={16} />
            <span>Search Trademarks</span>
            <ArrowRight size={16} />
          </button>

          <button 
            onClick={() => onOpenAuthModal('register')}
            style={{
              padding: '14px 28px',
              borderRadius: '10px',
              background: 'transparent',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '1rem',
              border: '1.5px solid rgba(255, 255, 255, 0.5)',
              cursor: 'pointer'
            }}
          >
            <span>Get Started</span>
          </button>
        </div>

      </div>
    </section>
  );
}
