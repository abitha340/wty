import React, { useState } from 'react';
import { 
  Shield, ArrowRight, CheckCircle2, Sparkles, Database, 
  Zap, Clock, Layers, Building2, Calendar, FileText, Check
} from 'lucide-react';

export default function HeroSection({ setActiveTab, onRunDemoSearch }) {
  const [selectedBrand, setSelectedBrand] = useState('nike');

  const trademarkCards = {
    nike: {
      mark: "NIKE",
      appNo: "1948201",
      tmNo: "TM-849201",
      owner: "Nike Innovate C.V.",
      classNo: 25,
      classLabel: "Class 25 · Clothing, Footwear & Headgear",
      status: "Registered",
      country: "India & Global",
      filingDate: "12 May 2018",
      validUpto: "12 May 2028",
      desc: "Footwear, athletic apparel, sports footwear, clothing and headgear for men, women and children.",
      totalActive: 142
    },
    apple: {
      mark: "APPLE",
      appNo: "1092834",
      tmNo: "TM-1092834",
      owner: "Apple Inc.",
      classNo: 9,
      classLabel: "Class 9 · Hardware, Software & Electronics",
      status: "Registered",
      country: "India & Global",
      filingDate: "18 Aug 2016",
      validUpto: "18 Aug 2026",
      desc: "Computers, computer hardware, computer software, telecommunications devices, wearable smart devices.",
      totalActive: 289
    },
    tata: {
      mark: "TATA",
      appNo: "100293",
      tmNo: "TM-100293",
      owner: "Tata Sons Private Limited",
      classNo: 12,
      classLabel: "Class 12 · Vehicles & Automotive",
      status: "Registered",
      country: "India",
      filingDate: "15 Jan 2014",
      validUpto: "15 Jan 2034",
      desc: "Motor vehicles, commercial vehicles, electric automobiles, passenger vehicles, and structural parts thereof.",
      totalActive: 412
    },
    swiggy: {
      mark: "SWIGGY",
      appNo: "3049182",
      tmNo: "TM-3049182",
      owner: "Bundl Technologies Pvt Ltd (Swiggy)",
      classNo: 39,
      classLabel: "Class 39 · Delivery & Logistics Services",
      status: "Registered",
      country: "India",
      filingDate: "04 Nov 2017",
      validUpto: "04 Nov 2027",
      desc: "Transport, packaging and storage of goods, rapid food ordering and hyper-local doorstep delivery services.",
      totalActive: 86
    }
  };

  const current = trademarkCards[selectedBrand];

  return (
    <section style={{
      position: 'relative',
      paddingTop: '60px',
      paddingBottom: '80px',
      borderBottom: '1px solid var(--border-subtle)',
      overflow: 'hidden'
    }}>
      {/* Ambient background glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '500px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(57, 174, 169, 0.14) 0%, rgba(162, 213, 171, 0.05) 50%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(50px)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          
          {/* ================= LEFT COLUMN ================= */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(162, 213, 171, 0.15)',
              border: '1px solid rgba(162, 213, 171, 0.4)',
              marginBottom: '20px'
            }}>
              <Sparkles size={15} color="var(--teal)" />
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: 'var(--teal)', letterSpacing: '0.04em' }}>
                THE TRADEMARK DATA LAYER FOR APPLICATIONS
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
              fontWeight: '800',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              color: 'var(--text-title)'
            }}>
              Trademark Data. <br />
              <span className="gradient-text-teal">Structured & Search-Ready.</span>
            </h1>

            <p style={{
              fontSize: '1.12rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              marginBottom: '32px',
              maxWidth: '540px'
            }}>
              Wyt gives your product instant access to search, verify, and monitor structured trademark records across <strong style={{ color: 'var(--text-title)' }}>20+ Lakh official catalog entries</strong> with sub-15ms execution.
            </p>

            {/* Key Assurance Bullets */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px',
              marginBottom: '36px',
              maxWidth: '520px'
            }}>
              {[
                { title: "20L+ Indexed Records", desc: "India & global registries" },
                { title: "3 Search Modes", desc: "Exact, StartsWith, Contains" },
                { title: "< 15ms Latency", desc: "High-speed indexed queries" },
                { title: "Air-Gapped Cloud", desc: "Zero database credentials exposed" },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{
                    marginTop: '2px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'rgba(57, 174, 169, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckCircle2 size={13} color="var(--teal)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-title)' }}>{item.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActiveTab('search')}
                className="btn-primary"
                style={{ padding: '14px 28px', fontSize: '0.95rem' }}
              >
                <span>Explore Live Dataset</span>
                <ArrowRight size={17} />
              </button>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="btn-secondary"
                style={{ padding: '14px 24px', fontSize: '0.95rem' }}
              >
                <Zap size={16} />
                <span>Developer Portal</span>
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className="btn-outline-slate"
                style={{ padding: '14px 22px', fontSize: '0.95rem' }}
              >
                <span>Contact Team</span>
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: USER-FRIENDLY TRADEMARK SHOWCASE ================= */}
          <div style={{ position: 'relative' }}>
            
            {/* Top Live Sync Pill */}
            <div className="glass-panel float-card" style={{
              position: 'absolute',
              top: '-18px',
              right: '12px',
              zIndex: 10,
              padding: '8px 16px',
              borderRadius: '9999px',
              border: '1px solid var(--border-focus)',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: 'var(--shadow-md)'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }}></span>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--text-title)' }}>
                20L+ Records Synchronized
              </span>
            </div>

            {/* Main Interactive Trademark Profile Card */}
            <div className="glass-panel" style={{
              padding: '32px 28px',
              borderRadius: '24px',
              border: '1px solid var(--border-focus)',
              background: 'var(--bg-surface)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}>
              
              {/* Brand Switcher Pills */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Live Preview:
                </span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {Object.keys(trademarkCards).map(key => (
                    <button
                      key={key}
                      onClick={() => setSelectedBrand(key)}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '0.76rem',
                        fontWeight: '800',
                        background: selectedBrand === key ? 'var(--teal)' : 'var(--bg-card)',
                        color: selectedBrand === key ? '#FFFFFF' : 'var(--text-muted)',
                        border: selectedBrand === key ? '1px solid var(--teal)' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {trademarkCards[key].mark}
                    </button>
                  ))}
                </div>
              </div>

              {/* Verified Trademark Header */}
              <div style={{
                background: 'var(--bg-card)',
                padding: '20px',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--text-title)', letterSpacing: '-0.02em', margin: 0 }}>
                      {current.mark}
                    </h3>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10B981',
                      fontSize: '0.74rem',
                      fontWeight: '800',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}>
                      <Check size={12} strokeWidth={3} />
                      <span>{current.status}</span>
                    </span>
                  </div>
                  
                  <span style={{ fontSize: '0.78rem', fontFamily: 'JetBrains Mono', color: 'var(--text-dim)', background: 'var(--bg-surface)', padding: '3px 8px', borderRadius: '6px' }}>
                    App #{current.appNo}
                  </span>
                </div>

                <div style={{ fontSize: '0.84rem', fontWeight: '700', color: 'var(--teal)', marginBottom: '8px' }}>
                  {current.classLabel}
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  {current.desc}
                </p>
              </div>

              {/* 4 Structured Trademark Attributes */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '22px'
              }}>
                <div style={{ padding: '12px 14px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '2px', textTransform: 'uppercase', fontWeight: '700' }}>
                    <Building2 size={13} color="var(--teal)" />
                    <span>Proprietor / Owner</span>
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: '800', color: 'var(--text-title)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {current.owner}
                  </div>
                </div>

                <div style={{ padding: '12px 14px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '2px', textTransform: 'uppercase', fontWeight: '700' }}>
                    <Layers size={13} color="var(--mint)" />
                    <span>Jurisdiction & Scope</span>
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: '800', color: 'var(--text-title)' }}>
                    {current.country}
                  </div>
                </div>

                <div style={{ padding: '12px 14px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '2px', textTransform: 'uppercase', fontWeight: '700' }}>
                    <Calendar size={13} color="var(--teal)" />
                    <span>Filing Date</span>
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: '800', color: 'var(--text-title)' }}>
                    {current.filingDate}
                  </div>
                </div>

                <div style={{ padding: '12px 14px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '2px', textTransform: 'uppercase', fontWeight: '700' }}>
                    <CheckCircle2 size={13} color="#10B981" />
                    <span>Validity Period</span>
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: '800', color: '#10B981' }}>
                    {current.validUpto}
                  </div>
                </div>
              </div>

              {/* Action & Explorer Jump */}
              <button
                onClick={() => onRunDemoSearch(current.mark, 'contains')}
                className="btn-secondary"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Search All {current.totalActive} Records for "{current.mark}"</span>
                <ArrowRight size={15} />
              </button>

              {/* Bottom Guarantee */}
              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.74rem',
                color: 'var(--text-dim)'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Zap size={13} color="var(--teal)" />
                  <span>Sub-15ms Query Speed</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Shield size={13} color="var(--teal)" />
                  <span>100% Registry Accuracy</span>
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
