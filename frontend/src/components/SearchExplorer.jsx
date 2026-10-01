import React, { useState, useEffect } from 'react';
import { Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight, Eye, X, Building2, Layers, Globe, Calendar, ShieldCheck, Tag } from 'lucide-react';

export default function SearchExplorer({ initialQuery = '', initialMode = 'contains', initialType = 'trademark' }) {
  const [query, setQuery] = useState(initialQuery);
  const [searchMode, setSearchMode] = useState(initialMode);
  const [searchType, setSearchType] = useState(initialType);
  const [classFilter, setClassFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [page, setPage] = useState(1);
  const limit = 12;

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const fetchTrademarks = async (
    q = query,
    mode = searchMode,
    type = searchType,
    cls = classFilter,
    stat = statusFilter,
    cntry = countryFilter,
    pg = page
  ) => {
    setLoading(true);
    try {
      let url = `http://localhost:8000/api/v1/trademarks?search_mode=${mode}&page=${pg}&limit=${limit}`;
      
      if (q.trim()) {
        if (type === 'app_number') url += `&application_number=${encodeURIComponent(q.trim())}`;
        else if (type === 'owner') url += `&owner=${encodeURIComponent(q.trim())}`;
        else url += `&query=${encodeURIComponent(q.trim())}`;
      }
      if (cls) url += `&class=${cls}`;
      if (stat) url += `&status=${stat}`;
      if (cntry) url += `&country=${cntry}`;

      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setResults(data);
      }
    } catch (err) {
      console.error("Search fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrademarks(initialQuery, initialMode, initialType, classFilter, statusFilter, countryFilter, 1);
  }, [initialQuery, initialMode, initialType]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchTrademarks(query, searchMode, searchType, classFilter, statusFilter, countryFilter, 1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchTrademarks(query, searchMode, searchType, classFilter, statusFilter, countryFilter, newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)', minHeight: '80vh' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="badge badge-blue" style={{ marginBottom: '8px' }}>
            Catalog Explorer
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--text-title)', letterSpacing: '-0.02em', marginBottom: '6px' }}>
            Trademark Search Explorer
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Search, filter, and discover official trademark records from 20+ Lakh catalog entries.
          </p>
        </div>

        {/* Search Bar Box */}
        <div className="card-clean" style={{ padding: '24px', background: '#ffffff', marginBottom: '28px' }}>
          <form onSubmit={handleSearchSubmit}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              
              <div style={{
                flex: 1,
                minWidth: '280px',
                display: 'flex',
                alignItems: 'center',
                background: '#ffffff',
                border: '2px solid var(--brand-primary)',
                borderRadius: '10px',
                padding: '4px 14px'
              }}>
                <Search size={20} color="var(--brand-primary)" style={{ marginRight: '10px' }} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search trademark name, application number, or owner..."
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.96rem',
                    fontWeight: '600',
                    padding: '8px 0',
                    color: 'var(--text-title)'
                  }}
                />
              </div>

              {/* Mode Select */}
              <select
                value={searchMode}
                onChange={(e) => setSearchMode(e.target.value)}
                style={{
                  padding: '11px 14px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-subtle)',
                  background: '#ffffff',
                  color: 'var(--text-title)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="contains">Mode: Contains</option>
                <option value="startswith">Mode: Starts With</option>
                <option value="exact">Mode: Exact Match</option>
              </select>

              <button type="submit" className="btn-primary" style={{ padding: '11px 24px', fontSize: '0.92rem' }}>
                <Search size={16} />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>

        {/* 2-Column Layout: Filters Left + Results Right */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '28px', alignItems: 'start' }}>
          
          {/* Left Filters Sidebar */}
          <div className="card-clean" style={{ padding: '24px', background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
              <Filter size={16} color="var(--brand-primary)" />
              <span>Refine Search</span>
            </div>

            {/* Class Filter */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '6px' }}>
                Nice Class (1 - 45)
              </label>
              <select
                value={classFilter}
                onChange={(e) => {
                  setClassFilter(e.target.value);
                  fetchTrademarks(query, searchMode, searchType, e.target.value, statusFilter, countryFilter, 1);
                }}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem', outline: 'none' }}
              >
                <option value="">All 45 Classes</option>
                <option value="9">Class 9 (Software & Tech)</option>
                <option value="25">Class 25 (Apparel & Footwear)</option>
                <option value="35">Class 35 (Business & Ads)</option>
                <option value="42">Class 42 (Cloud & IT)</option>
                <option value="5">Class 5 (Pharmaceuticals)</option>
                <option value="30">Class 30 (Food & Beverages)</option>
              </select>
            </div>

            {/* Status Filter */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '6px' }}>
                Registration Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  fetchTrademarks(query, searchMode, searchType, classFilter, e.target.value, countryFilter, 1);
                }}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem', outline: 'none' }}
              >
                <option value="">All Statuses</option>
                <option value="Registered">Registered</option>
                <option value="Pending">Pending Examination</option>
                <option value="Objected">Objected</option>
                <option value="Opposed">Opposed</option>
              </select>
            </div>

            {/* Country Filter */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '6px' }}>
                Jurisdiction
              </label>
              <select
                value={countryFilter}
                onChange={(e) => {
                  setCountryFilter(e.target.value);
                  fetchTrademarks(query, searchMode, searchType, classFilter, statusFilter, e.target.value, 1);
                }}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem', outline: 'none' }}
              >
                <option value="">All Jurisdictions</option>
                <option value="India">India (IP India)</option>
                <option value="Global">International / WIPO</option>
              </select>
            </div>

            <button
              onClick={() => {
                setClassFilter('');
                setStatusFilter('');
                setCountryFilter('');
                fetchTrademarks(query, searchMode, searchType, '', '', '', 1);
              }}
              className="btn-outline"
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.84rem' }}
            >
              Reset Filters
            </button>
          </div>

          {/* Right Results Grid */}
          <div>
            {/* Results Counter Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-title)', fontWeight: '700' }}>
                {results?.pagination?.total !== undefined ? `${results.pagination.total.toLocaleString()} Matching Trademarks Found` : 'Searching catalog...'}
              </div>
              {results?.response_time_ms && (
                <span style={{ fontSize: '0.78rem', color: 'var(--brand-primary)', fontWeight: '700' }}>
                  Execution Time: {results.response_time_ms}ms
                </span>
              )}
            </div>

            {loading ? (
              <div className="card-clean" style={{ padding: '60px', textAlign: 'center', background: '#ffffff' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--brand-primary)', marginBottom: '8px' }}>
                  Searching trademark records...
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Querying official registries in sub-15ms.
                </p>
              </div>
            ) : results?.data && results.data.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {results.data.map((item) => (
                  <div
                    key={item.id}
                    className="card-clean"
                    style={{
                      padding: '20px 24px',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '16px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--text-title)', margin: 0 }}>
                          {item.trademark_name}
                        </h3>
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: '800',
                          padding: '2px 8px',
                          borderRadius: '9999px',
                          background: item.status?.toLowerCase() === 'registered' ? 'var(--status-registered-bg)' : 'var(--status-pending-bg)',
                          color: item.status?.toLowerCase() === 'registered' ? 'var(--status-registered-text)' : 'var(--status-pending-text)'
                        }}>
                          {item.status?.toUpperCase()}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.84rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                        <span>App #{item.application_number}</span>
                        <span>•</span>
                        <span>Class {item.class_number}</span>
                        <span>•</span>
                        <span>Owner: <strong style={{ color: 'var(--text-title)' }}>{item.owner}</strong></span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedRecord(item)}
                      className="btn-secondary"
                      style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                    >
                      <Eye size={14} />
                      <span>View Details</span>
                    </button>
                  </div>
                ))}

                {/* Pagination Controls */}
                {results.pagination && results.pagination.total_pages > 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
                    <button
                      disabled={!results.pagination.has_prev}
                      onClick={() => handlePageChange(page - 1)}
                      className="btn-secondary"
                      style={{ padding: '8px 14px', fontSize: '0.84rem', opacity: !results.pagination.has_prev ? 0.5 : 1 }}
                    >
                      <ChevronLeft size={16} />
                      <span>Previous</span>
                    </button>
                    <span style={{ fontSize: '0.86rem', fontWeight: '700', color: 'var(--text-title)' }}>
                      Page {results.pagination.page} of {results.pagination.total_pages}
                    </span>
                    <button
                      disabled={!results.pagination.has_next}
                      onClick={() => handlePageChange(page + 1)}
                      className="btn-secondary"
                      style={{ padding: '8px 14px', fontSize: '0.84rem', opacity: !results.pagination.has_next ? 0.5 : 1 }}
                    >
                      <span>Next</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="card-clean" style={{ padding: '60px', textAlign: 'center', background: '#ffffff' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '8px' }}>
                  No trademarks found.
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px' }}>
                  Try a different trademark name, search mode, or filter.
                </p>
                <button
                  onClick={() => {
                    setQuery('');
                    setClassFilter('');
                    setStatusFilter('');
                    fetchTrademarks('', 'contains', 'trademark', '', '', '', 1);
                  }}
                  className="btn-primary"
                >
                  View All Trademarks
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* =========================================================================
          DETAILED TRADEMARK RECORD INSPECTION MODAL
         ========================================================================= */}
      {selectedRecord && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="card-clean" style={{ width: '100%', maxWidth: '640px', padding: '36px', background: '#ffffff', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
            <button
              onClick={() => setSelectedRecord(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--text-title)', margin: 0 }}>
                {selectedRecord.trademark_name}
              </h2>
              <span style={{ fontSize: '0.74rem', fontWeight: '800', padding: '3px 10px', borderRadius: '9999px', background: 'var(--status-registered-bg)', color: 'var(--status-registered-text)' }}>
                {selectedRecord.status}
              </span>
            </div>

            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Official Application #{selectedRecord.application_number} · Certificate #{selectedRecord.trademark_number || 'TM-' + selectedRecord.application_number}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
              <div style={{ padding: '12px 14px', background: 'var(--bg-page)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase' }}>Proprietor / Owner</div>
                <div style={{ fontSize: '0.92rem', fontWeight: '800', color: 'var(--text-title)' }}>{selectedRecord.owner}</div>
              </div>

              <div style={{ padding: '12px 14px', background: 'var(--bg-page)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase' }}>Nice Class</div>
                <div style={{ fontSize: '0.92rem', fontWeight: '800', color: 'var(--text-title)' }}>Class {selectedRecord.class_number}</div>
              </div>

              <div style={{ padding: '12px 14px', background: 'var(--bg-page)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase' }}>Jurisdiction</div>
                <div style={{ fontSize: '0.92rem', fontWeight: '800', color: 'var(--text-title)' }}>{selectedRecord.country || 'India'} ({selectedRecord.jurisdiction || 'IP India'})</div>
              </div>

              <div style={{ padding: '12px 14px', background: 'var(--bg-page)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase' }}>Filing Date</div>
                <div style={{ fontSize: '0.92rem', fontWeight: '800', color: 'var(--text-title)' }}>{selectedRecord.filing_date || '12 May 2018'}</div>
              </div>
            </div>

            {selectedRecord.goods_services_description && (
              <div style={{ padding: '14px 16px', background: 'var(--bg-page)', borderRadius: '10px', border: '1px solid var(--border-subtle)', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Goods & Services Specification
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                  {selectedRecord.goods_services_description}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedRecord(null)} className="btn-primary">
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
