import React, { useState } from 'react';
import { Search, ChevronDown, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HeroSection({ onExecuteSearch }) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('trademark'); // 'trademark' | 'app_number' | 'tm_number' | 'owner'
  const [searchMode, setSearchMode] = useState('contains'); // 'exact' | 'startswith' | 'contains'

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onExecuteSearch({
      query: query.trim() || 'NIKE',
      searchType,
      searchMode
    });
  };

  const searchTypeLabels = {
    trademark: "Trademark Name",
    app_number: "Application Number",
    tm_number: "Trademark Number",
    owner: "Owner / Proprietor"
  };

  return (
    <section style={{
      position: 'relative',
      paddingTop: '64px',
      paddingBottom: '80px',
      background: 'linear-gradient(180deg, var(--brand-tint) 0%, var(--bg-page) 100%)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        
        {/* Top Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '18px' }}>
          <div className="badge badge-blue">
            <Sparkles size={14} />
            <span>Official Trademark Search Platform</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
          fontWeight: '900',
          letterSpacing: '-0.03em',
          marginBottom: '18px',
          color: 'var(--text-title)'
        }}>
          Search Trademark Information Easily
        </h1>

        {/* Supporting Text */}
        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-muted)',
          lineHeight: 1.65,
          marginBottom: '40px',
          maxWidth: '720px',
          margin: '0 auto 40px auto'
        }}>
          Find trademark information from millions of structured trademark records. Search by trademark name, application number, trademark number, owner, class, status, or country.
        </p>

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
                autoFocus
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
