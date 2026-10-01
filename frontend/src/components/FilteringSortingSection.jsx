import React from 'react';
import { Filter, ArrowUpDown, CheckCircle2, Layers, ShieldCheck, Globe, Calendar } from 'lucide-react';

export default function FilteringSortingSection({ onNavigateSearch }) {
  const filters = [
    { label: "Class (1 to 45)", desc: "Software, Apparel, Food, Pharma, etc." },
    { label: "Status", desc: "Registered, Pending, Objected, Opposed" },
    { label: "Country & Branch", desc: "India (Delhi, Mumbai, Chennai) & Global" },
    { label: "Filing & Registration Dates", desc: "Filter by exact chronological dates" },
    { label: "Owner / Proprietor", desc: "Filter by specific corporate applicants" }
  ];

  const sortingOptions = [
    "Relevance",
    "Trademark Name: A to Z",
    "Trademark Name: Z to A",
    "Filing Date: Newest First",
    "Filing Date: Oldest First",
    "Class Number"
  ];

  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', background: '#ffffff' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Left: Filtering Capabilities */}
          <div>
            <div className="badge badge-blue" style={{ marginBottom: '14px' }}>
              Precision Narrowing
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '14px', color: 'var(--text-title)' }}>
              Find the Records That Matter
            </h2>
            <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
              Easily narrow down millions of search results using multi-attribute filters. Refine by international class, legal status, jurisdiction, or filing date with zero complexity.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {filters.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)', flexShrink: 0 }}>
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--text-title)' }}>{f.label}: </strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={onNavigateSearch} className="btn-primary">
              <span>Try Advanced Filters</span>
            </button>
          </div>

          {/* Right: Sorting & Organization Box */}
          <div className="card-clean" style={{ padding: '36px 30px', background: 'var(--bg-page)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)' }}>
                <ArrowUpDown size={20} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-title)', margin: 0 }}>
                Sort & Organize Results
              </h3>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '22px' }}>
              Sort results instantly to discover newest filings, verify statutory order, or alphabetize portfolios.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sortingOptions.map((opt, oIdx) => (
                <div 
                  key={oIdx}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.86rem',
                    fontWeight: '700',
                    color: 'var(--text-title)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{opt}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--brand-primary)', background: 'var(--brand-light)', padding: '2px 8px', borderRadius: '4px' }}>Supported</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
