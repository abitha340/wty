import React, { useState } from 'react';
import { X, Zap, Check, Sparkles, Shield, ArrowRight, CheckCircle2, Coins, Clock, RefreshCw, Cpu } from 'lucide-react';

export default function CreditPurchaseModal({ isOpen, onClose, onCreditPurchased }) {
  const [loadingPkg, setLoadingPkg] = useState(null);
  const [purchasedPkg, setPurchasedPkg] = useState(null);
  const [selectedTier, setSelectedTier] = useState('pro_25k');

  if (!isOpen) return null;

  const packages = [
    {
      id: "starter_5k",
      name: "Starter Tier",
      badge: "For Indie Hackers",
      credits: 5000,
      price: "$29",
      costPerQuery: "$0.0058 / query",
      popular: false,
      features: [
        "5,000 Production API Queries",
        "Exact, Prefix and Substring Search",
        "Full 45 Nice Classes Data",
        "Sub-15ms Query Latency",
        "Community and Docs Support"
      ]
    },
    {
      id: "pro_25k",
      name: "Pro Growth",
      badge: "Most Popular",
      credits: 25000,
      price: "$99",
      costPerQuery: "$0.0039 / query",
      popular: true,
      features: [
        "25,000 Production API Queries",
        "Priority Sub-10ms Routing Pool",
        "All 3 Search Matching Engines",
        "Dedicated API Key Rotation",
        "Real-Time Usage Telemetry",
        "Direct Developer Email Support"
      ]
    },
    {
      id: "scale_100k",
      name: "Enterprise Scale",
      badge: "High Volume",
      credits: 100000,
      price: "$299",
      costPerQuery: "$0.0029 / query",
      popular: false,
      features: [
        "100,000 Production API Queries",
        "Unlimited API Key Generation",
        "Custom Class Webhooks and Alerts",
        "Dedicated Neon DB Read Replica",
        "99.99% Query Uptime SLA",
        "24/7 Priority Support and Slack"
      ]
    }
  ];

  const handlePurchase = async (pkg) => {
    setLoadingPkg(pkg.id);
    try {
      const res = await fetch('http://localhost:8000/api/v1/credits/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          package_id: pkg.id,
          amount: pkg.credits,
          package_name: pkg.name
        })
      });
      if (res.ok) {
        setPurchasedPkg(pkg);
        if (onCreditPurchased) onCreditPurchased();
      }
    } catch (err) {
      console.error("Purchase error:", err);
    } finally {
      setLoadingPkg(null);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 999,
      background: 'rgba(5, 12, 14, 0.82)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      overflowY: 'auto'
    }}>
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '960px',
          padding: '40px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-focus)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 40px rgba(57, 174, 169, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Ambient Light Glows */}
        <div style={{
          position: 'absolute',
          top: '-80px',
          left: '30%',
          width: '400px',
          height: '250px',
          background: 'radial-gradient(ellipse at center, rgba(162, 213, 171, 0.18) 0%, rgba(57, 174, 169, 0.08) 50%, transparent 80%)',
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }}></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '22px',
            right: '22px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--teal)';
            e.currentTarget.style.color = 'var(--text-title)';
            e.currentTarget.style.transform = 'scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={18} />
        </button>

        {purchasedPkg ? (
          /* ================= SUCCESS STATE ================= */
          <div style={{ textAlign: 'center', padding: '50px 20px', position: 'relative', zIndex: 2 }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(57, 174, 169, 0.25) 0%, rgba(162, 213, 171, 0.3) 100%)',
              border: '2px solid var(--teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              color: 'var(--mint)',
              boxShadow: '0 0 30px rgba(57, 174, 169, 0.4)'
            }}>
              <Check size={40} />
            </div>

            <div className="badge badge-mint" style={{ marginBottom: '14px', display: 'inline-flex', gap: '6px' }}>
              <Coins size={14} color="var(--teal)" />
              <span>Instant Balance Provisioned</span>
            </div>

            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '12px', color: 'var(--text-title)' }}>
              Credits Added Successfully!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--teal)', fontWeight: '800' }}>+{purchasedPkg.credits.toLocaleString()} API Credits</strong> have been immediately credited to your live balance. Your rate limits and search quota are active.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              background: 'var(--bg-card)',
              borderRadius: '14px',
              border: '1px solid var(--border-focus)',
              marginBottom: '32px'
            }}>
              <Zap size={18} fill="var(--cream)" color="var(--cream)" />
              <span style={{ fontSize: '0.95rem', color: 'var(--text-title)', fontWeight: '700' }}>
                Tier: {purchasedPkg.name} ({purchasedPkg.price})
              </span>
            </div>

            <div>
              <button 
                onClick={onClose} 
                className="btn-primary" 
                style={{ padding: '14px 40px', fontSize: '1rem', fontWeight: '700', borderRadius: '12px' }}
              >
                Return to Developer Console
              </button>
            </div>
          </div>
        ) : (
          /* ================= TIER SELECTION ================= */
          <div style={{ position: 'relative', zIndex: 2 }}>
            
            {/* Header */}
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px auto' }}>
              <div 
                className="badge badge-mint" 
                style={{ 
                  marginBottom: '12px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px',
                  background: 'rgba(162, 213, 171, 0.15)',
                  border: '1px solid rgba(162, 213, 171, 0.4)',
                  color: 'var(--teal)',
                  fontWeight: '700',
                  padding: '6px 14px'
                }}
              >
                <Zap size={14} fill="var(--teal)" />
                <span>Simple Credit-Based Usage Model</span>
              </div>
              
              <h2 style={{ 
                fontSize: '2.4rem', 
                fontWeight: '800', 
                letterSpacing: '-0.025em', 
                marginBottom: '10px', 
                color: 'var(--text-title)' 
              }}>
                Buy Credits. Make Requests. <span className="gradient-text-teal">Track Usage.</span>
              </h2>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Purchase the exact amount of API usage you need. Credits deduct transparently at <strong style={{ color: 'var(--text-title)' }}>1 credit per query</strong> with zero monthly expiration or lock-in.
              </p>
            </div>

            {/* 3 Pricing Packages Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginBottom: '32px'
            }}>
              {packages.map((pkg) => {
                const isSelected = selectedTier === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedTier(pkg.id)}
                    style={{
                      padding: '28px 24px',
                      borderRadius: '20px',
                      background: pkg.popular 
                        ? 'linear-gradient(180deg, rgba(57, 174, 169, 0.14) 0%, var(--bg-card) 100%)' 
                        : 'var(--bg-card)',
                      border: pkg.popular 
                        ? '2px solid var(--teal)' 
                        : (isSelected ? '2px solid var(--border-focus)' : '1px solid var(--border-subtle)'),
                      boxShadow: pkg.popular 
                        ? '0 12px 30px -10px rgba(57, 174, 169, 0.35)' 
                        : 'var(--shadow-sm)',
                      transform: pkg.popular ? 'translateY(-4px)' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    {/* Ribbon Tag */}
                    {pkg.popular && (
                      <div style={{
                        position: 'absolute',
                        top: '-13px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, var(--teal) 0%, var(--mint) 100%)',
                        color: '#081315',
                        fontSize: '0.72rem',
                        fontWeight: '800',
                        padding: '3px 14px',
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        boxShadow: '0 4px 12px rgba(57, 174, 169, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <Sparkles size={11} />
                        <span>{pkg.badge}</span>
                      </div>
                    )}

                    <div>
                      {/* Tier Name & Sub-badge */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-title)' }}>
                          {pkg.name}
                        </h3>
                        {!pkg.popular && (
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: '600', padding: '2px 8px', borderRadius: '6px', background: 'rgba(85, 123, 131, 0.12)' }}>
                            {pkg.badge}
                          </span>
                        )}
                      </div>

                      {/* Price & Rate */}
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-title)', letterSpacing: '-0.03em' }}>
                          {pkg.price}
                        </span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontWeight: '600' }}>
                          one-time
                        </span>
                      </div>

                      <div style={{ fontSize: '0.78rem', color: 'var(--teal)', fontWeight: '700', marginBottom: '16px' }}>
                        {pkg.costPerQuery}
                      </div>

                      {/* Glowing Credits Badge */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(135deg, rgba(229, 239, 193, 0.25) 0%, rgba(162, 213, 171, 0.2) 100%)',
                        border: '1px solid rgba(162, 213, 171, 0.5)',
                        color: 'var(--text-title)',
                        fontSize: '0.84rem',
                        fontWeight: '800',
                        marginBottom: '22px',
                        width: '100%',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(162, 213, 171, 0.15)'
                      }}>
                        <Zap size={14} fill="var(--teal)" color="var(--teal)" />
                        <span>{pkg.credits.toLocaleString()} API Credits</span>
                      </div>

                      {/* Feature Checkmarks */}
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                            <div style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              background: 'rgba(57, 174, 169, 0.18)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: '2px',
                              flexShrink: 0
                            }}>
                              <Check size={11} color="var(--teal)" strokeWidth={3} />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePurchase(pkg);
                      }}
                      disabled={loadingPkg === pkg.id}
                      className={pkg.popular ? "btn-primary" : "btn-secondary"}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '0.92rem',
                        fontWeight: '700',
                        borderRadius: '12px',
                        justifyContent: 'center',
                        boxShadow: pkg.popular ? '0 6px 20px rgba(57, 174, 169, 0.35)' : 'none'
                      }}
                    >
                      {loadingPkg === pkg.id ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <RefreshCw size={15} style={{ animation: 'spin 1s linear infinite' }} />
                          <span>Adding Credits...</span>
                        </span>
                      ) : (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>Buy {pkg.credits.toLocaleString()} Credits</span>
                          <ArrowRight size={15} />
                        </span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bottom Trust and Assurance Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              padding: '16px 20px',
              borderRadius: '14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-main)', fontWeight: '600' }}>
                <Zap size={16} color="var(--teal)" />
                <span>Instant Credit Delivery</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-main)', fontWeight: '600' }}>
                <Clock size={16} color="var(--mint)" />
                <span>Credits Never Expire</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-main)', fontWeight: '600' }}>
                <Shield size={16} color="var(--teal)" />
                <span>256-Bit Encrypted Secure API</span>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
