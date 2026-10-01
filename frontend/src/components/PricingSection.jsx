import React from 'react';
import { Zap, Check, Sparkles, ArrowRight, ShieldCheck, Clock, Coins, Terminal, RefreshCw } from 'lucide-react';

export default function PricingSection({ onOpenCreditsModal }) {
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

  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '350px',
        background: 'radial-gradient(ellipse at center, rgba(162, 213, 171, 0.12) 0%, rgba(57, 174, 169, 0.05) 50%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(40px)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
          <div 
            className="badge badge-mint" 
            style={{ 
              marginBottom: '14px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px',
              background: 'rgba(162, 213, 171, 0.18)',
              border: '1px solid rgba(162, 213, 171, 0.45)',
              color: 'var(--teal)',
              fontWeight: '800',
              padding: '6px 14px'
            }}
          >
            <Coins size={15} color="var(--teal)" />
            <span>Simple Credit-Based Usage Model</span>
          </div>

          <h2 style={{ 
            fontSize: '2.6rem', 
            fontWeight: '800', 
            letterSpacing: '-0.025em', 
            marginBottom: '14px', 
            color: 'var(--text-title)' 
          }}>
            Buy Credits. Make Requests. <span className="gradient-text-teal">Track Usage.</span>
          </h2>

          <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
            No subscriptions or hidden overages. Pay strictly for the trademark queries you execute. 
            All tiers include full access to 20L+ Indian & Global trademark records.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid-cols-3" style={{ gap: '24px', marginBottom: '40px' }}>
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="glass-panel"
              style={{
                padding: '36px 28px',
                borderRadius: '22px',
                background: pkg.popular 
                  ? 'linear-gradient(180deg, rgba(57, 174, 169, 0.16) 0%, var(--bg-card) 100%)' 
                  : 'var(--bg-card)',
                border: pkg.popular 
                  ? '2px solid var(--teal)' 
                  : '1px solid var(--border-subtle)',
                boxShadow: pkg.popular 
                  ? '0 16px 36px -10px rgba(57, 174, 169, 0.35)' 
                  : 'var(--shadow-sm)',
                transform: pkg.popular ? 'translateY(-6px)' : 'none',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Popular Ribbon */}
              {pkg.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-13px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, var(--teal) 0%, var(--mint) 100%)',
                  color: '#081315',
                  fontSize: '0.74rem',
                  fontWeight: '800',
                  padding: '4px 16px',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  boxShadow: '0 4px 14px rgba(57, 174, 169, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={12} />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-title)' }}>
                    {pkg.name}
                  </h3>
                  {!pkg.popular && (
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: '600', padding: '2px 8px', borderRadius: '6px', background: 'rgba(85, 123, 131, 0.12)' }}>
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--text-title)', letterSpacing: '-0.03em' }}>
                    {pkg.price}
                  </span>
                  <span style={{ fontSize: '0.86rem', color: 'var(--text-dim)', fontWeight: '600' }}>
                    one-time
                  </span>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: '700', marginBottom: '18px' }}>
                  {pkg.costPerQuery}
                </div>

                {/* Credits badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, rgba(229, 239, 193, 0.28) 0%, rgba(162, 213, 171, 0.22) 100%)',
                  border: '1px solid rgba(162, 213, 171, 0.5)',
                  color: 'var(--text-title)',
                  fontSize: '0.9rem',
                  fontWeight: '800',
                  marginBottom: '26px',
                  width: '100%',
                  justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(162, 213, 171, 0.18)'
                }}>
                  <Zap size={15} fill="var(--teal)" color="var(--teal)" />
                  <span>{pkg.credits.toLocaleString()} API Credits</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'rgba(57, 174, 169, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px',
                        flexShrink: 0
                      }}>
                        <Check size={12} color="var(--teal)" strokeWidth={3} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenCreditsModal}
                className={pkg.popular ? "btn-primary" : "btn-secondary"}
                style={{
                  width: '100%',
                  padding: '13px 18px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  justifyContent: 'center',
                  boxShadow: pkg.popular ? '0 6px 20px rgba(57, 174, 169, 0.35)' : 'none'
                }}
              >
                <span>Get Started with {pkg.credits.toLocaleString()} Credits</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Feature Highlights Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          padding: '24px 28px',
          borderRadius: '18px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(57, 174, 169, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)' }}>
              <Zap size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.92rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '2px' }}>Instant Balance Delivery</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Credits sync immediately to your API keys.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(162, 213, 171, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--mint)' }}>
              <Clock size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.92rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '2px' }}>Zero Expiration</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Unused query credits roll over forever.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(57, 174, 169, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.92rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '2px' }}>Enterprise SLA</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Sub-15ms latency & 99.99% gateway uptime.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
