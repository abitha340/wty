import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, ShieldCheck, Database, Layers, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onExecuteSearch }) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('trademark');
  const [searchMode, setSearchMode] = useState('contains');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onExecuteSearch({
      query: query.trim(),
      searchType,
      searchMode
    });
  };

  const searchTypeLabels = {
    trademark: "Trademark Name",
    application_no: "Application Number",
    trademark_no: "Trademark Number",
    owner: "Owner / Proprietor"
  };

  return (
    <section style={{
      position: 'relative',
      paddingTop: '60px',
      paddingBottom: '80px',
      background: 'linear-gradient(180deg, var(--brand-tint) 0%, var(--bg-page) 100%)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
        
        {/* Top Intro Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '18px' }}>
          <div className="badge badge-blue" style={{ padding: '8px 18px', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={15} color="var(--brand-primary)" />
            <span>Welcome to Wyt • Trademark Intelligence Platform</span>
          </div>
        </div>

        {/* Main Application Introduction Heading */}
        <h1 style={{
          fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)',
          fontWeight: '900',
          letterSpacing: '-0.03em',
          marginBottom: '20px',
          color: 'var(--text-title)',
          lineHeight: 1.15
        }}>
          Discover, Understand & Explore Trademarks in One Place
        </h1>

        {/* Comprehensive Application Introduction Text */}
        <p style={{
          fontSize: '1.14rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          maxWidth: '760px',
          margin: '0 auto 28px auto'
        }}>
          <strong>Wyt</strong> is a modern trademark intelligence platform built for business owners, brand managers, researchers, and legal professionals. We bring millions of structured trademark records together so you can easily verify brand names, explore ownership history, track application statuses, and inspect international classifications without complexity.
        </p>

        {/* Intro Value Highlights */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '18px',
          flexWrap: 'wrap',
          marginBottom: '36px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: '700', color: 'var(--brand-primary)', background: '#ffffff', padding: '6px 14px', borderRadius: '20px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
            <ShieldCheck size={16} color="var(--brand-primary)" />
            <span>Verified Registry Records</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: '700', color: 'var(--brand-primary)', background: '#ffffff', padding: '6px 14px', borderRadius: '20px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
            <Database size={16} color="var(--brand-primary)" />
            <span>20+ Lakh Structured Records</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: '700', color: 'var(--brand-primary)', background: '#ffffff', padding: '6px 14px', borderRadius: '20px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
            <Layers size={16} color="var(--brand-primary)" />
            <span>All 45 Trademark Classes</span>
          </div>
        </div>

        {/* =========================================================================
            LARGE MAIN SEARCH COMPONENT
           ========================================================================= */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-subtle)',
          textAlign: 'left',
          marginBottom: '20px'
        }}>
          <form onSubmit={handleSearchSubmit}>
            
            {/* Search Type Selector Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                Search by:
              </span>
              {Object.keys(searchTypeLabels).map((typeKey) => (
                <button
                  key={typeKey}
                  type="button"
                  onClick={() => setSearchType(typeKey)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    background: searchType === typeKey ? 'var(--brand-light)' : 'var(--bg-surface)',
                    color: searchType === typeKey ? 'var(--brand-primary)' : 'var(--text-main)',
                    border: searchType === typeKey ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {searchTypeLabels[typeKey]}
                </button>
              ))}
            </div>

            {/* Main Search Input Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#ffffff',
              border: '2px solid var(--brand-primary)',
              borderRadius: '12px',
              padding: '6px 8px 6px 18px',
              marginBottom: '20px',
              boxShadow: '0 4px 12px rgba(15, 90, 162, 0.1)'
            }}>
              <Search size={22} color="var(--brand-primary)" style={{ marginRight: '12px', flexShrink: 0 }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Enter ${searchTypeLabels[searchType]} (e.g. NIKE, 1948201, Tata)...`}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: 'var(--text-title)',
                  fontFamily: 'inherit'
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '1rem', flexShrink: 0 }}
              >
                <span>Search</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Search Mode Radios */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              paddingTop: '12px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                  Search Mode:
                </span>

                {[
                  { id: 'contains', label: 'Contains' },
                  { id: 'startswith', label: 'Starts With' },
                  { id: 'exact', label: 'Exact Match' }
                ].map((mode) => (
                  <label
                    key={mode.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem',
                      fontWeight: searchMode === mode.id ? '700' : '500',
                      color: searchMode === mode.id ? 'var(--brand-primary)' : 'var(--text-main)',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="searchMode"
                      value={mode.id}
                      checked={searchMode === mode.id}
                      onChange={() => setSearchMode(mode.id)}
                      style={{ accentColor: 'var(--brand-primary)', cursor: 'pointer' }}
                    />
                    <span>{mode.label}</span>
                  </label>
                ))}
              </div>

              {/* Quick Preset Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)' }}>Popular:</span>
                {['NIKE', 'APPLE', 'TATA', 'SWIGGY'].map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => {
                      setQuery(sample);
                      onExecuteSearch({ query: sample, searchType: 'trademark', searchMode: 'contains' });
                    }}
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: '700',
                      color: 'var(--brand-primary)',
                      background: 'var(--brand-light)',
                      border: '1px solid rgba(15, 90, 162, 0.2)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>

          </form>
        </div>

        {/* Example Explanation Display */}
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Search by exact match, starts with, or contains across 20+ Lakh verified records.
        </p>

      </div>
    </section>
  );
}
