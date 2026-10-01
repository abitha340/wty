import React from 'react';
import { Tag, Hash, FileText, Building2, ArrowRight } from 'lucide-react';

export default function SearchTypesSection({ onExecuteSearch }) {
  const types = [
    {
      title: "Trademark Name",
      desc: "Search for a trademark or brand by its commercial name, wordmark, or phonetic sound.",
      example: "NIKE",
      searchType: "trademark",
      icon: Tag
    },
    {
      title: "Application Number",
      desc: "Find a trademark application using its official government application serial number.",
      example: "1948201",
      searchType: "app_number",
      icon: Hash
    },
    {
      title: "Trademark Number",
      desc: "Search for a registered trademark using its formal registration certificate number.",
      example: "TM-849201",
      searchType: "tm_number",
      icon: FileText
    },
    {
      title: "Owner / Proprietor",
      desc: "Find all trademarks filed by or associated with a particular enterprise or individual.",
      example: "Nike Innovate C.V.",
      searchType: "owner",
      icon: Building2
    }
  ];

  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', background: '#ffffff' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            Search Identifiers
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '12px', color: 'var(--text-title)' }}>
            What Can You Search?
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)' }}>
            Search using the trademark information you already have.
          </p>
        </div>

        <div className="grid-4">
          {types.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div 
                key={idx}
                className="card-clean"
                style={{
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#ffffff'
                }}
              >
                <div>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--brand-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-primary)',
                    marginBottom: '20px'
                  }}>
                    <Icon size={22} />
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '10px' }}>
                    {t.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '20px' }}>
                    {t.desc}
                  </p>
                </div>

                <div>
                  <div style={{
                    background: 'var(--bg-page)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    color: 'var(--text-main)',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ color: 'var(--text-dim)', fontWeight: '600' }}>Example:</span>
                    <strong style={{ color: 'var(--brand-primary)' }}>{t.example}</strong>
                  </div>

                  <button
                    onClick={() => onExecuteSearch({ query: t.example, searchType: t.searchType, searchMode: 'contains' })}
                    className="btn-secondary"
                    style={{ width: '100%', padding: '9px 14px', fontSize: '0.85rem' }}
                  >
                    <span>Try Search</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
