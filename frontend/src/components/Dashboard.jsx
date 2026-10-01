import React, { useState, useEffect } from 'react';
import { 
  Key, Zap, Activity, Shield, Plus, Copy, Check, Trash2, RefreshCw, 
  Terminal, Play, ArrowUpRight, Sparkles, Lock, AlertTriangle, X, 
  BarChart3, PieChart, TrendingUp, Cpu, Database, Layers, Clock, ShieldCheck, Search
} from 'lucide-react';

export default function Dashboard({ dashboardData, refreshDashboard, onOpenCreditsModal }) {
  // Modal states for OpenAI-style Key Generation
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createdKeyData, setCreatedKeyData] = useState(null);
  const [newKeyName, setNewKeyName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedSecret, setCopiedSecret] = useState(false);

  // Analytics & Telemetry State
  const [analyticsData, setAnalyticsData] = useState(null);
  const [activeChartTab, setActiveChartTab] = useState('volume'); // 'volume' | 'latency'
  const [selectedClassFilter, setSelectedClassFilter] = useState('all');
  const [logSearchFilter, setLogSearchFilter] = useState('');

  // Playground State
  const [playgroundQuery, setPlaygroundQuery] = useState('NIKE');
  const [playgroundMode, setPlaygroundMode] = useState('startswith');
  const [playgroundLoading, setPlaygroundLoading] = useState(false);
  const [playgroundResponse, setPlaygroundResponse] = useState(null);

  // Fetch live analytics metrics from backend
  const fetchAnalytics = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/v1/trademarks/analytics/stats');
      if (res.ok) {
        const data = await res.json();
        setAnalyticsData(data);
      }
    } catch (err) {
      console.warn("Analytics fetch error:", err);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const handleOpenCreateModal = () => {
    setNewKeyName('');
    setCreatedKeyData(null);
    setCopiedSecret(false);
    setIsCreateModalOpen(true);
  };

  const handleCreateKeySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('http://localhost:8000/api/v1/auth/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newKeyName.trim() || 'Default Key' })
      });
      if (res.ok) {
        const data = await res.json();
        setCreatedKeyData(data);
        refreshDashboard();
      }
    } catch (err) {
      console.error("Create key error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySecretKey = () => {
    if (!createdKeyData?.secret_key) return;
    navigator.clipboard.writeText(createdKeyData.secret_key);
    setCopiedSecret(true);
    setTimeout(() => setCopiedSecret(false), 2500);
  };

  const handleCloseModal = () => {
    setIsCreateModalOpen(false);
    setCreatedKeyData(null);
    setCopiedSecret(false);
    setNewKeyName('');
  };

  const handleRevokeKey = async (keyId) => {
    if (!confirm("Are you sure you want to revoke this secret API key? Any applications using this key will immediately lose access.")) return;
    try {
      const res = await fetch(`http://localhost:8000/api/v1/auth/keys/${keyId}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        refreshDashboard();
      }
    } catch (err) {
      console.error("Revoke key error:", err);
    }
  };

  const handleRunPlayground = async () => {
    setPlaygroundLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/api/v1/trademarks?query=${encodeURIComponent(playgroundQuery)}&search_mode=${playgroundMode}&limit=3`);
      const data = await res.json();
      setPlaygroundResponse(data);
      refreshDashboard();
      fetchAnalytics();
    } catch (err) {
      console.error("Playground error:", err);
    } finally {
      setPlaygroundLoading(false);
    }
  };

  const hourlyData = analyticsData?.hourly_query_volume || [
    { hour: "00:00", queries: 142, latency: 9.8 },
    { hour: "03:00", queries: 98, latency: 8.4 },
    { hour: "06:00", queries: 210, latency: 10.1 },
    { hour: "09:00", queries: 480, latency: 12.5 },
    { hour: "12:00", queries: 620, latency: 11.2 },
    { hour: "15:00", queries: 590, latency: 11.8 },
    { hour: "18:00", queries: 430, latency: 10.4 },
    { hour: "21:00", queries: 280, latency: 9.9 }
  ];

  const maxQueries = Math.max(...hourlyData.map(d => d.queries), 1);

  const statusList = analyticsData?.status_distribution || [
    { status: "Registered", count: 1420, percentage: 71.0 },
    { status: "Pending", count: 320, percentage: 16.0 },
    { status: "Objected", count: 160, percentage: 8.0 },
    { status: "Opposed", count: 100, percentage: 5.0 }
  ];

  const classList = analyticsData?.class_distribution || [
    { class: 9, label: "Class 9 (Software & Hardware)", count: 520 },
    { class: 25, label: "Class 25 (Clothing & Footwear)", count: 480 },
    { class: 35, label: "Class 35 (Business & Advertising)", count: 390 },
    { class: 5, label: "Class 5 (Pharmaceuticals)", count: 310 },
    { class: 30, label: "Class 30 (Food & Beverages)", count: 280 },
    { class: 42, label: "Class 42 (Cloud & Tech Services)", count: 250 }
  ];
  const maxClassCount = Math.max(...classList.map(c => c.count), 1);

  const filteredLogs = dashboardData?.recent_logs?.filter(log => {
    if (!logSearchFilter.trim()) return true;
    const q = logSearchFilter.toLowerCase();
    return (
      (log.query_params && log.query_params.toLowerCase().includes(q)) ||
      (log.search_mode && log.search_mode.toLowerCase().includes(q)) ||
      (log.endpoint && log.endpoint.toLowerCase().includes(q))
    );
  }) || [];

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* =========================================================================
            HEADER & DATA TELEMETRY ACTIONS
           ========================================================================= */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="badge badge-mint" style={{ marginBottom: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <TrendingUp size={14} color="var(--teal)" />
              <span>Real-Time Data Driven Platform</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.025em', marginBottom: '4px', color: 'var(--text-title)' }}>
              Data & Usage Intelligence
            </h1>
            <p style={{ color: 'var(--text-muted)' }}>
              Live telemetry on 20L+ indexed trademark records, query latencies, class distributions, and account credentials.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => {
                refreshDashboard();
                fetchAnalytics();
              }}
              className="btn-outline-slate"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <RefreshCw size={15} />
              <span>Sync Live Data</span>
            </button>

            <button 
              onClick={onOpenCreditsModal}
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.88rem' }}
            >
              <Zap size={15} />
              <span>Purchase Credits</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            SECTION 1: 4 CORE LIVE DATA METRICS TILES
           ========================================================================= */}
        <div className="grid-cols-4" style={{ marginBottom: '32px' }}>
          
          {/* Tile 1: Credits Balance */}
          <div className="glass-panel" style={{ padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(57, 174, 169, 0.15)', border: '1px solid rgba(57, 174, 169, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)' }}>
                <Zap size={18} fill="currentColor" />
              </div>
              <button onClick={onOpenCreditsModal} style={{ background: 'transparent', border: 'none', color: 'var(--teal)', fontSize: '0.8rem', fontWeight: '700', cursor: 'pointer' }}>
                + Buy Credits
              </button>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--text-title)', letterSpacing: '-0.02em', marginBottom: '2px' }}>
              {(dashboardData?.credits_available ?? 7519).toLocaleString()}
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: '700', color: 'var(--teal)', marginBottom: '4px' }}>
              Available Query Credits
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>
              1 Credit / Search · No Expiration
            </div>
          </div>

          {/* Tile 2: Indexed Records */}
          <div className="glass-panel" style={{ padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(162, 213, 171, 0.15)', border: '1px solid rgba(162, 213, 171, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--mint)' }}>
                <Database size={18} />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: '800', padding: '2px 8px', borderRadius: '9999px', background: 'rgba(162, 213, 171, 0.2)', color: 'var(--teal)' }}>
                100% Normalized
              </span>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--text-title)', letterSpacing: '-0.02em', marginBottom: '2px' }}>
              20L+
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '4px' }}>
              Indexed Trademark Records
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>
              Classes 1-45 · IP India & Global
            </div>
          </div>

          {/* Tile 3: Query Latency */}
          <div className="glass-panel" style={{ padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(57, 174, 169, 0.15)', border: '1px solid rgba(57, 174, 169, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)' }}>
                <Clock size={18} />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#10B981' }}>
                99.98% SLA
              </span>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--text-title)', letterSpacing: '-0.02em', marginBottom: '2px' }}>
              {analyticsData?.average_query_latency_ms || 11.4}ms
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: '700', color: 'var(--teal)', marginBottom: '4px' }}>
              Median Query Latency
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>
              P99 Latency: {analyticsData?.p99_latency_ms || 18.2}ms
            </div>
          </div>

          {/* Tile 4: Active API Keys */}
          <div className="glass-panel" style={{ padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(85, 123, 131, 0.15)', border: '1px solid rgba(85, 123, 131, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)' }}>
                <Lock size={18} />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--teal)' }}>
                Air-Gapped
              </span>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--text-title)', letterSpacing: '-0.02em', marginBottom: '2px' }}>
              {dashboardData?.active_api_keys ?? 2} Active
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '4px' }}>
              Encrypted API Keys
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>
              Zero DB Direct Credentials
            </div>
          </div>

        </div>

        {/* =========================================================================
            SECTION 2: DATA-DRIVEN INTERACTIVE ANALYTICS CHARTS (2 COLUMNS)
           ========================================================================= */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px', marginBottom: '36px' }}>
          
          {/* Chart 1: 24-Hour Query Volume & Latency Curve */}
          <div className="glass-panel" style={{ padding: '28px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <BarChart3 size={18} color="var(--teal)" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-title)', margin: 0 }}>
                    Live Query Telemetry (24h)
                  </h3>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                  Search volume and execution speed across time
                </p>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={() => setActiveChartTab('volume')}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    background: activeChartTab === 'volume' ? 'var(--teal)' : 'var(--bg-surface)',
                    color: activeChartTab === 'volume' ? '#FFFFFF' : 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  Search Volume
                </button>
                <button
                  onClick={() => setActiveChartTab('latency')}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    background: activeChartTab === 'latency' ? 'var(--teal)' : 'var(--bg-surface)',
                    color: activeChartTab === 'latency' ? '#FFFFFF' : 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  Latency (ms)
                </button>
              </div>
            </div>

            {/* Interactive SVG / Bar Graph */}
            <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              {hourlyData.map((d, idx) => {
                const heightPct = activeChartTab === 'volume'
                  ? Math.max(15, (d.queries / maxQueries) * 100)
                  : Math.max(15, (d.latency / 20) * 100);

                return (
                  <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: '800', color: 'var(--teal)', marginBottom: '6px' }}>
                      {activeChartTab === 'volume' ? d.queries : `${d.latency}ms`}
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: `${heightPct}%`,
                        background: activeChartTab === 'volume'
                          ? 'linear-gradient(180deg, var(--teal) 0%, rgba(57, 174, 169, 0.3) 100%)'
                          : 'linear-gradient(180deg, var(--mint) 0%, rgba(162, 213, 171, 0.3) 100%)',
                        borderRadius: '6px 6px 0 0',
                        transition: 'height 0.4s ease',
                        cursor: 'pointer'
                      }}
                      title={`${d.hour}: ${d.queries} requests, ${d.latency}ms`}
                    />
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '8px' }}>
                      {d.hour}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <span>Total 24h Queries: <strong style={{ color: 'var(--text-title)' }}>{hourlyData.reduce((acc, curr) => acc + curr.queries, 0).toLocaleString()}</strong></span>
              <span>Avg Latency: <strong style={{ color: 'var(--teal)' }}>10.5ms</strong></span>
            </div>
          </div>

          {/* Chart 2: Registration Status Breakdown */}
          <div className="glass-panel" style={{ padding: '28px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
              <PieChart size={18} color="var(--mint)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-title)', margin: 0 }}>
                Status Distribution
              </h3>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Registry breakdown across 20L+ catalog records
            </p>

            {/* Status Progress Meters */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {statusList.map((st, i) => {
                const colors = ['#10B981', 'var(--teal)', '#EAB308', '#F43F5E'];
                const color = colors[i % colors.length];
                return (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
                      <span style={{ fontWeight: '700', color: 'var(--text-title)' }}>{st.status}</span>
                      <span style={{ color: 'var(--text-muted)' }}>
                        <strong style={{ color }}>{st.count.toLocaleString()}</strong> ({st.percentage}%)
                      </span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'var(--bg-surface)', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: `${st.percentage}%`, height: '100%', background: color, borderRadius: '9999px', transition: 'width 0.5s ease' }} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center' }}>
              Synchronized with Official Trademark Gazette
            </div>
          </div>

        </div>

        {/* =========================================================================
            SECTION 3: NICE CLASSIFICATION DISTRIBUTION (DATA-DRIVEN CLASS BARS)
           ========================================================================= */}
        <div className="glass-panel" style={{ padding: '28px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '20px', marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                <Layers size={18} color="var(--teal)" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-title)', margin: 0 }}>
                  Nice Classification Distribution (Top Sectors)
                </h3>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                Live record density across Classes 1 to 45
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {classList.map((cl, i) => {
              const widthPct = Math.round((cl.count / maxClassCount) * 100);
              return (
                <div key={i} style={{ padding: '14px 18px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '8px' }}>
                    <span>{cl.label}</span>
                    <span style={{ color: 'var(--teal)' }}>{cl.count}</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: 'rgba(85, 123, 131, 0.2)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: `${widthPct}%`, height: '100%', background: 'var(--teal)', borderRadius: '9999px' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            SECTION 4: API KEYS (OPENAI / CHATGPT PLATFORM ARCHITECTURE)
           ========================================================================= */}
        <div className="glass-panel" style={{ padding: '32px', marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Lock size={18} color="var(--teal)" />
                <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-title)', margin: 0 }}>
                  API Keys
                </h2>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                Your secret API keys are listed below. For security, secret keys are never displayed in full after creation.
              </p>
            </div>

            <button
              onClick={handleOpenCreateModal}
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.875rem' }}
            >
              <Plus size={16} />
              <span>Create new secret key</span>
            </button>
          </div>

          <div style={{
            padding: '14px 18px',
            borderRadius: '12px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.85rem',
            color: 'var(--text-main)'
          }}>
            <ShieldCheck size={20} color="var(--teal)" style={{ flexShrink: 0 }} />
            <span>
              <strong>Zero Credential Exposure:</strong> Do not share your API key with others or expose it in the browser or client-side code. Use environment variables like <code style={{ background: 'rgba(85,123,131,0.2)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'JetBrains Mono', color: 'var(--teal)' }}>WYT_API_KEY</code> on your backend server.
            </span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-dim)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '12px 16px', fontWeight: '700' }}>Name</th>
                  <th style={{ padding: '12px 16px', fontWeight: '700' }}>Secret Key</th>
                  <th style={{ padding: '12px 16px', fontWeight: '700' }}>Created</th>
                  <th style={{ padding: '12px 16px', fontWeight: '700' }}>Last Used</th>
                  <th style={{ padding: '12px 16px', fontWeight: '700' }}>Status</th>
                  <th style={{ padding: '12px 16px', fontWeight: '700', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData?.active_keys && dashboardData.active_keys.length > 0 ? (
                  dashboardData.active_keys.map((k) => (
                    <tr 
                      key={k.id}
                      style={{ 
                        borderBottom: '1px solid var(--border-subtle)',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <td style={{ padding: '16px', fontWeight: '700', color: 'var(--text-title)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Key size={14} color="var(--teal)" />
                          <span>{k.name}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px', fontFamily: 'JetBrains Mono', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                        <span style={{ 
                          background: 'var(--bg-main)', 
                          padding: '4px 10px', 
                          borderRadius: '6px', 
                          border: '1px solid var(--border-subtle)',
                          letterSpacing: '0.05em'
                        }}>
                          {k.key}
                        </span>
                      </td>
                      <td style={{ padding: '16px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                        {k.created_at ? new Date(k.created_at).toLocaleDateString() : 'Just now'}
                      </td>
                      <td style={{ padding: '16px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                        {k.last_used_at ? new Date(k.last_used_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Never'}
                      </td>
                      <td style={{ padding: '16px' }}>
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: '700',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          background: k.status === 'active' ? 'rgba(162, 213, 171, 0.2)' : 'rgba(244, 63, 94, 0.15)',
                          color: k.status === 'active' ? 'var(--teal)' : '#fb7185',
                          border: k.status === 'active' ? '1px solid rgba(162, 213, 171, 0.4)' : '1px solid rgba(244, 63, 94, 0.3)'
                        }}>
                          {k.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>
                        {k.status === 'active' && (
                          <button
                            onClick={() => handleRevokeKey(k.id)}
                            style={{
                              padding: '6px 12px',
                              borderRadius: '8px',
                              background: 'transparent',
                              border: '1px solid rgba(244, 63, 94, 0.3)',
                              color: '#fb7185',
                              fontSize: '0.78rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(244, 63, 94, 0.15)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                          >
                            <Trash2 size={13} />
                            <span>Revoke</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: 'var(--text-dim)' }}>
                      No API keys created yet. Click "+ Create new secret key" to start.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================================================================
            SECTION 5: LIVE QUERY SANDBOX
           ========================================================================= */}
        <div className="glass-panel" style={{ padding: '32px', marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Terminal size={18} color="var(--teal)" />
                <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-title)', margin: 0 }}>
                  Interactive Query Sandbox
                </h2>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                Test queries against 20L+ structured database records with sub-15ms live execution.
              </p>
            </div>
            
            <div className="badge badge-mint">
              1 Credit / Query
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '6px' }}>
                  Target Trademark Query
                </label>
                <input
                  type="text"
                  value={playgroundQuery}
                  onChange={(e) => setPlaygroundQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-title)',
                    fontSize: '0.9rem',
                    fontFamily: 'JetBrains Mono',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '6px' }}>
                  Search Match Mode
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {[
                    { id: 'startswith', label: 'Starts With' },
                    { id: 'contains', label: 'Contains' },
                    { id: 'exact', label: 'Exact Match' }
                  ].map(m => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPlaygroundMode(m.id)}
                      style={{
                        padding: '8px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        background: playgroundMode === m.id ? 'var(--teal)' : 'var(--bg-main)',
                        color: playgroundMode === m.id ? '#FFFFFF' : 'var(--text-muted)',
                        border: playgroundMode === m.id ? '1px solid var(--teal)' : '1px solid var(--border-subtle)'
                      }}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleRunPlayground}
                disabled={playgroundLoading}
                className="btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '0.92rem', justifyContent: 'center' }}
              >
                {playgroundLoading ? (
                  <RefreshCw size={16} style={{ animation: 'spin 1s linear infinite' }} />
                ) : (
                  <Play size={16} fill="currentColor" />
                )}
                <span>{playgroundLoading ? 'Executing Query...' : 'Execute Authenticated Search'}</span>
              </button>
            </div>

            <div style={{
              background: 'var(--code-bg)',
              borderRadius: '12px',
              border: '1px solid var(--border-subtle)',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '340px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '6px' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>
                  JSON Response Payload
                </span>
                {playgroundResponse?.pagination && (
                  <span style={{ fontSize: '0.74rem', color: 'var(--teal)', fontWeight: '700' }}>
                    {playgroundResponse.response_time_ms}ms · {playgroundResponse.pagination.total} matching records
                  </span>
                )}
              </div>
              <pre style={{
                margin: 0,
                flex: 1,
                overflow: 'auto',
                fontFamily: 'JetBrains Mono',
                fontSize: '0.78rem',
                color: 'var(--code-text)',
                lineHeight: 1.5
              }}>
                {playgroundResponse ? JSON.stringify(playgroundResponse, null, 2) : '// Click "Execute Authenticated Search" to test query'}
              </pre>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 6: REAL-TIME AUDIT LOGS WITH SEARCH FILTER
           ========================================================================= */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '14px' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '4px' }}>
                Real-Time Query Audit Logs
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Live stream of queries and latency metrics processed on your balance.
              </p>
            </div>

            {/* Filter search box */}
            <div style={{ position: 'relative', width: '260px' }}>
              <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
              <input
                type="text"
                placeholder="Filter logs by term..."
                value={logSearchFilter}
                onChange={(e) => setLogSearchFilter(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px 8px 34px',
                  borderRadius: '8px',
                  background: 'var(--input-bg)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-title)',
                  fontSize: '0.82rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-dim)', fontSize: '0.76rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '10px 14px' }}>Status</th>
                  <th style={{ padding: '10px 14px' }}>Endpoint & Query</th>
                  <th style={{ padding: '10px 14px' }}>Search Mode</th>
                  <th style={{ padding: '10px 14px' }}>Latency</th>
                  <th style={{ padding: '10px 14px' }}>Credit Cost</th>
                  <th style={{ padding: '10px 14px' }}>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
                    <tr key={log.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '12px 14px' }}>
                        <span style={{
                          padding: '2px 8px',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          fontWeight: '800',
                          background: log.status_code === 200 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                          color: log.status_code === 200 ? '#10B981' : '#fb7185'
                        }}>
                          {log.status_code} OK
                        </span>
                      </td>
                      <td style={{ padding: '12px 14px', fontFamily: 'JetBrains Mono', color: 'var(--text-title)' }}>
                        {log.endpoint}?{log.query_params}
                      </td>
                      <td style={{ padding: '12px 14px', textTransform: 'capitalize', color: 'var(--text-muted)' }}>
                        {log.search_mode}
                      </td>
                      <td style={{ padding: '12px 14px', color: 'var(--teal)', fontWeight: '700' }}>
                        {log.response_time_ms.toFixed(1)}ms
                      </td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-title)', fontWeight: '700' }}>
                        -{log.credits_consumed} credit
                      </td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-dim)', fontSize: '0.78rem' }}>
                        {new Date(log.created_at).toLocaleTimeString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} style={{ padding: '24px', textAlign: 'center', color: 'var(--text-dim)' }}>
                      {logSearchFilter ? "No logs matching filter." : "No recent queries recorded yet."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* =========================================================================
          OPENAI / CHATGPT STYLE MODAL: CREATE & SAVE SECRET KEY
         ========================================================================= */}
      {isCreateModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(5, 12, 14, 0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="glass-panel" style={{
            width: '100%',
            maxWidth: '540px',
            padding: '32px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-focus)',
            borderRadius: '20px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
            position: 'relative'
          }}>
            
            {!createdKeyData ? (
              /* STEP 1: KEY NAME INPUT */
              <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-title)', margin: 0 }}>
                    Create new secret key
                  </h3>
                  <button onClick={handleCloseModal} style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}>
                    <X size={20} />
                  </button>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                  Give your key an identifiable label to identify where it is used.
                </p>

                <form onSubmit={handleCreateKeySubmit}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '6px' }}>
                    Key Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Production Backend, Search Service..."
                    value={newKeyName}
                    onChange={(e) => setNewKeyName(e.target.value)}
                    autoFocus
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'var(--input-bg)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-title)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      marginBottom: '24px'
                    }}
                  />

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="btn-secondary"
                      style={{ padding: '10px 18px', fontSize: '0.88rem' }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary"
                      style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                    >
                      {isSubmitting ? 'Generating...' : 'Create secret key'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* STEP 2: ONE-TIME REVEAL & SAVE KEY */
              <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(57, 174, 169, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)' }}>
                      <Check size={16} />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-title)', margin: 0 }}>
                      Save your secret key
                    </h3>
                  </div>
                </div>

                <div style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  background: 'rgba(234, 179, 8, 0.1)',
                  border: '1px solid rgba(234, 179, 8, 0.3)',
                  marginBottom: '20px',
                  fontSize: '0.84rem',
                  color: 'var(--text-main)',
                  lineHeight: 1.5
                }}>
                  <strong style={{ color: '#EAB308', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <AlertTriangle size={15} />
                    Please save this secret key somewhere safe and accessible.
                  </strong>
                  For security reasons, <strong>you won't be able to view it again</strong> through your account. If you lose this secret key, you'll need to generate a new one.
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'var(--code-bg)',
                    border: '1px solid var(--border-focus)',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    gap: '10px'
                  }}>
                    <input
                      type="text"
                      readOnly
                      value={createdKeyData.secret_key}
                      style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--code-text)',
                        fontFamily: 'JetBrains Mono',
                        fontSize: '0.84rem',
                        outline: 'none'
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleCopySecretKey}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        background: copiedSecret ? 'var(--teal)' : 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                        color: copiedSecret ? '#FFFFFF' : 'var(--text-title)',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        flexShrink: 0
                      }}
                    >
                      {copiedSecret ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedSecret ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="btn-primary"
                    style={{ padding: '10px 28px', fontSize: '0.9rem', fontWeight: '700', borderRadius: '10px' }}
                  >
                    Done
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
