import React, { useState, useEffect } from 'react';
import { Search, Filter, RefreshCw, ChevronLeft, ChevronRight, Eye, ShieldCheck, Clock, ExternalLink, X, Zap } from 'lucide-react';

export default function SearchExplorer({ initialQuery = '', initialMode = 'contains', onDeductCredit }) {
  const [query, setQuery] = useState(initialQuery);
  const [searchMode, setSearchMode] = useState(initialMode);
  const [classFilter, setClassFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      setSearchMode(initialMode);
      fetchTrademarks(initialQuery, initialMode, classFilter, statusFilter, countryFilter, 1);
    } else {
      fetchTrademarks('', 'contains', '', '', '', 1);
    }
  }, [initialQuery, initialMode]);

  const fetchTrademarks = async (
    q = query,
    mode = searchMode,
    cls = classFilter,
    st = statusFilter,
    cntry = countryFilter,
    p = page
  ) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (q) params.append('query', q);
      if (mode) params.append('search_mode', mode);
      if (cls) params.append('class', cls);
      if (st) params.append('status', st);
      if (cntry) params.append('country', cntry);
      params.append('page', p.toString());
      params.append('limit', limit.toString());

      const res = await fetch(`http://localhost:8000/api/v1/trademarks?${params.toString()}`);
      if (!res.ok) {
        throw new Error(`API Error: ${res.statusText}`);
      }
      const data = await res.json();
      setResults(data);
      if (onDeductCredit) onDeductCredit();
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch records. Make sure the FastAPI backend is running on port 8000.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchTrademarks(query, searchMode, classFilter, statusFilter, countryFilter, 1);
  };

  const getStatusBadge = (status) => {
    const s = (status || '').toLowerCase();
    if (s.includes('registered')) return <span className="badge badge-registered">Registered</span>;
    if (s.includes('pending')) return <span className="badge badge-pending">Pending</span>;
    if (s.includes('objected')) return <span className="badge badge-objected">Objected</span>;
    if (s.includes('opposed')) return <span className="badge badge-opposed">Opposed</span>;
    return <span className="badge badge-abandoned">{status}</span>;
  };

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="badge badge-mint" style={{ marginBottom: '12px' }}>
            Interactive Search Console
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '8px', color: 'var(--text-title)' }}>
            Live Trademark Search Explorer
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Test live query resolution across 20+ Lakh records with real-time latency and structured JSON metadata.
          </p>
        </div>

        {/* Search Control Card */}
        <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px' }}>
          <form onSubmit={handleSearchSubmit}>
            {/* Main Search Bar */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <div style={{
                flex: 1,
                minWidth: '280px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Search size={18} color="var(--teal)" style={{ position: 'absolute', left: '16px' }} />
                <input
                  type="text"
                  placeholder="Search brand name, application number, or proprietor (e.g. NIKE, TECH, TATA, APPLE)..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 46px',
                    borderRadius: '9999px',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-title)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ padding: '14px 28px' }}
              >
                {loading ? <RefreshCw size={18} className="pulse-glow" /> : <Search size={18} />}
                <span>Execute Query</span>
              </button>
            </div>

            {/* Filter Row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.85rem'
            }}>
              {/* Search Mode */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--text-title)', fontWeight: '700' }}>Search Mode:</span>
                {['exact', 'startswith', 'contains'].map(mode => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => {
                      setSearchMode(mode);
                      setPage(1);
                      fetchTrademarks(query, mode, classFilter, statusFilter, countryFilter, 1);
                    }}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      background: searchMode === mode ? 'var(--teal)' : 'rgba(85, 123, 131, 0.15)',
                      color: searchMode === mode ? '#FFFFFF' : 'var(--text-muted)',
                      border: 'none',
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Class Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--text-title)', fontWeight: '700' }}>Class:</span>
                <select
                  value={classFilter}
                  onChange={(e) => {
                    setClassFilter(e.target.value);
                    setPage(1);
                    fetchTrademarks(query, searchMode, e.target.value, statusFilter, countryFilter, 1);
                  }}
                  style={{
                    background: 'var(--input-bg)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-title)',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    outline: 'none'
                  }}
                >
                  <option value="">All Classes (1-45)</option>
                  <option value="9">Class 9 (Software & Electronics)</option>
                  <option value="12">Class 12 (Vehicles & EV)</option>
                  <option value="25">Class 25 (Clothing & Footwear)</option>
                  <option value="35">Class 35 (Advertising & Retail)</option>
                  <option value="36">Class 36 (Fintech & Banking)</option>
                  <option value="39">Class 39 (Logistics & Delivery)</option>
                  <option value="41">Class 41 (Media & Entertainment)</option>
                  <option value="42">Class 42 (IT & Cloud Services)</option>
                  <option value="43">Class 43 (Food & Restaurants)</option>
                </select>
              </div>

              {/* Status Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--text-title)', fontWeight: '700' }}>Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setPage(1);
                    fetchTrademarks(query, searchMode, classFilter, e.target.value, countryFilter, 1);
                  }}
                  style={{
                    background: 'var(--input-bg)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-title)',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    outline: 'none'
                  }}
                >
                  <option value="">All Statuses</option>
                  <option value="Registered">Registered</option>
                  <option value="Pending">Pending</option>
                  <option value="Objected">Objected</option>
                  <option value="Opposed">Opposed</option>
                </select>
              </div>

              {/* Reset button */}
              {(query || classFilter || statusFilter || countryFilter || searchMode !== 'contains') && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setSearchMode('contains');
                    setClassFilter('');
                    setStatusFilter('');
                    setCountryFilter('');
                    setPage(1);
                    fetchTrademarks('', 'contains', '', '', '', 1);
                  }}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    background: 'rgba(244, 63, 94, 0.12)',
                    border: '1px solid rgba(244, 63, 94, 0.3)',
                    color: '#e11d48',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    marginLeft: 'auto'
                  }}
                >
                  Reset Filters
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Results Metadata Bar */}
        {results && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            fontSize: '0.88rem',
            color: 'var(--text-muted)'
          }}>
            <div>
              Showing <strong style={{ color: 'var(--text-title)' }}>{results.data.length}</strong> of{' '}
              <strong style={{ color: 'var(--text-title)' }}>{results.pagination.total}</strong> matching records
              {query && <span> for "<span style={{ color: 'var(--teal)' }}>{query}</span>"</span>}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span>Latency: <strong style={{ color: 'var(--teal)' }}>{results.response_time_ms} ms</strong></span>
              <span>Credits Left: <strong style={{ color: 'var(--text-title)' }}>{results.credits_remaining}</strong></span>
            </div>
          </div>
        )}

        {/* Results Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <RefreshCw size={32} color="var(--teal)" className="pulse-glow" style={{ animation: 'spin 1.5s linear infinite' }} />
            <div style={{ marginTop: '16px', color: 'var(--text-muted)' }}>Querying trademark database...</div>
          </div>
        ) : results && results.data.length > 0 ? (
          <div className="grid-cols-3" style={{ marginBottom: '40px' }}>
            {results.data.map((tm) => (
              <div
                key={tm.id}
                className="glass-panel glass-panel-interactive"
                style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    {getStatusBadge(tm.status)}
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      background: 'rgba(27, 122, 117, 0.1)',
                      color: 'var(--text-title)'
                    }}>
                      Class {tm.class}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '6px' }}>
                    {tm.trademark}
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    {tm.owner}
                  </div>

                  <div style={{
                    background: 'var(--bg-surface)',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.78rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '8px',
                    marginBottom: '16px'
                  }}>
                    <div>
                      <div style={{ color: 'var(--text-dim)' }}>App No:</div>
                      <div style={{ fontFamily: 'JetBrains Mono', color: 'var(--text-title)', fontWeight: '700' }}>
                        {tm.application_number}
                      </div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-dim)' }}>Reg No:</div>
                      <div style={{ fontFamily: 'JetBrains Mono', color: 'var(--text-main)' }}>
                        {tm.trademark_number || 'Pending'}
                      </div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-dim)' }}>Country:</div>
                      <div style={{ color: 'var(--text-main)' }}>{tm.country}</div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-dim)' }}>Filing Date:</div>
                      <div style={{ color: 'var(--text-main)' }}>{tm.filing_date}</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRecord(tm)}
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    padding: '8px',
                    justifyContent: 'center',
                    fontSize: '0.82rem'
                  }}
                >
                  <Eye size={14} />
                  <span>Inspect Full Record</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ textAlign: 'center', padding: '60px 20px', marginBottom: '40px' }}>
            <Search size={40} color="var(--slate)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-title)' }}>No matching trademark records found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '460px', margin: '0 auto' }}>
              Try searching for common marks like <strong style={{ color: 'var(--teal)' }}>NIKE</strong>, <strong style={{ color: 'var(--teal)' }}>TECH</strong>, <strong style={{ color: 'var(--teal)' }}>TATA</strong>, or change your search mode to <strong>Contains</strong>.
            </p>
          </div>
        )}

        {/* Pagination Bar */}
        {results && results.pagination.total_pages > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-center', justifyContent: 'center', gap: '12px' }}>
            <button
              disabled={!results.pagination.has_prev}
              onClick={() => {
                const prev = page - 1;
                setPage(prev);
                fetchTrademarks(query, searchMode, classFilter, statusFilter, countryFilter, prev);
              }}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: results.pagination.has_prev ? 'var(--text-title)' : 'var(--text-dim)',
                cursor: results.pagination.has_prev ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Page <strong style={{ color: 'var(--text-title)' }}>{results.pagination.page}</strong> of <strong style={{ color: 'var(--text-title)' }}>{results.pagination.total_pages}</strong>
            </span>

            <button
              disabled={!results.pagination.has_next}
              onClick={() => {
                const next = page + 1;
                setPage(next);
                fetchTrademarks(query, searchMode, classFilter, statusFilter, countryFilter, next);
              }}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: results.pagination.has_next ? 'var(--text-title)' : 'var(--text-dim)',
                cursor: results.pagination.has_next ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Record Detail Modal */}
        {selectedRecord && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div className="glass-panel" style={{
              width: '100%',
              maxWidth: '680px',
              padding: '32px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-focus)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {getStatusBadge(selectedRecord.status)}
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    App #{selectedRecord.application_number}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedRecord(null)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-title)' }}>
                {selectedRecord.trademark}
              </h2>
              <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Proprietor: <strong style={{ color: 'var(--text-title)' }}>{selectedRecord.owner}</strong>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                background: 'var(--bg-surface)',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)',
                marginBottom: '20px',
                fontSize: '0.875rem'
              }}>
                <div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>CLASS</div>
                  <div style={{ fontWeight: '700', color: 'var(--teal)', fontSize: '1rem' }}>
                    Class {selectedRecord.class}
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>REGISTRATION NUMBER</div>
                  <div style={{ fontFamily: 'JetBrains Mono', color: 'var(--text-title)' }}>
                    {selectedRecord.trademark_number || 'Awaiting Certificate'}
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>COUNTRY / JURISDICTION</div>
                  <div style={{ color: 'var(--text-title)' }}>{selectedRecord.country} ({selectedRecord.jurisdiction})</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>FILING DATE</div>
                  <div style={{ color: 'var(--text-title)' }}>{selectedRecord.filing_date}</div>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ color: 'var(--text-title)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '8px', fontWeight: '700' }}>
                  Goods & Services Specification
                </div>
                <div style={{
                  background: 'var(--bg-main)',
                  padding: '16px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: 'var(--text-main)'
                }}>
                  {selectedRecord.goods_services_description}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="btn-secondary"
                  style={{ padding: '8px 24px' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
