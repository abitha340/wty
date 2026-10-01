import React, { useState } from 'react';
import { Target, AlignLeft, Search, ArrowRight } from 'lucide-react';

export default function SearchFeaturesSection({ onExecuteSearch }) {
  const [activeTab, setActiveTab] = useState('contains');

  const modes = [
    {
      id: 'exact',
      title: 'Exact Match',
      desc: 'Find records that match your search term exactly, perfect for statutory verification and exact brand clearance.',
      exampleQuery: 'NIKE',
      returns: ['NIKE (Class 25)'],
      icon: Target
    },
    {
      id: 'startswith',
      title: 'Starts With',
      desc: 'Find trademarks that begin with your search term, helping you discover brand extensions and product variations.',
      exampleQuery: 'NIKE',
      returns: ['NIKE', 'NIKE AIR', 'NIKE SPORTS', 'NIKE PRO'],
      icon: AlignLeft
    },
    {
      id: 'contains',
      title: 'Contains',
      desc: 'Find trademarks containing your search term anywhere within the name, ideal for broad market research.',
      exampleQuery: 'TECH',
      returns: ['TECH', 'TECHWORLD', 'FINTECH GLOBAL', 'TECH SOLUTIONS'],
      icon: Search
    }
  ];

  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-page)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 48px auto' }}>
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            Flexible Matching Engines
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '12px', color: 'var(--text-title)' }}>
            Search the Way You Need
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)' }}>
            Choose the exact matching method that fits your trademark research goals.
          </p>
        </div>

        <div className="grid-3">
          {modes.map((m) => {
            const Icon = m.icon;
            return (
              <div 
                key={m.id}
                className="card-clean"
                style={{ padding: '32px 26px', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--brand-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-primary)',
                    marginBottom: '18px'
                  }}>
                    <Icon size={22} />
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '10px' }}>
                    {m.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '20px' }}>
                    {m.desc}
                  </p>

                  <div style={{
                    background: 'var(--bg-page)',
                    padding: '14px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Searching: <strong style={{ color: 'var(--brand-primary)' }}>"{m.exampleQuery}"</strong>
                    </div>
                    <div style={{ fontSize: '0.84rem', fontWeight: '600', color: 'var(--text-main)' }}>
                      Returns:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '6px 0 0 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {m.returns.map((ret, rIdx) => (
                        <li key={rIdx} style={{ fontSize: '0.82rem', color: 'var(--brand-dark)', fontWeight: '700' }}>
                          • {ret}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onExecuteSearch({ query: m.exampleQuery, searchType: 'trademark', searchMode: m.id })}
                  className="btn-primary"
                  style={{ width: '100%', padding: '10px 16px', fontSize: '0.88rem' }}
                >
                  <span>Search with {m.title}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
