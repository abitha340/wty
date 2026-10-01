import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Database, Layers, CheckCircle2, Compass, BookOpen } from 'lucide-react';

export default function HeroSection({ onExecuteSearch, onNavigateTab }) {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '64px',
      paddingBottom: '88px',
      background: 'linear-gradient(180deg, var(--brand-tint) 0%, var(--bg-page) 100%)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto' }}>
        
        {/* Top Intro Badge - Clean without Search wording */}
        <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
          <div className="badge badge-blue" style={{ padding: '8px 20px', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="var(--brand-primary)" />
            <span>Welcome to Wyt • Trademark Intelligence Platform</span>
          </div>
        </div>

        {/* Main Application Introduction Heading */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
          fontWeight: '900',
          letterSpacing: '-0.035em',
          marginBottom: '22px',
          color: 'var(--text-title)',
          lineHeight: 1.15
        }}>
          Discover, Understand & Explore Trademarks in One Place
        </h1>

        {/* Comprehensive Application Introduction Text */}
        <p style={{
          fontSize: '1.18rem',
          color: 'var(--text-muted)',
          lineHeight: 1.75,
          maxWidth: '780px',
          margin: '0 auto 36px auto'
        }}>
          <strong>Wyt</strong> is a modern trademark intelligence platform designed for business owners, brand managers, researchers, and legal professionals. We bring millions of structured trademark records together in a unified interface so you can easily verify brand availability, explore ownership history, track application statuses, and inspect international classifications without complexity.
        </p>

        {/* Introduction Call-to-Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '48px'
        }}>
          <button
            type="button"
            className="btn-primary"
            onClick={() => onNavigateTab ? onNavigateTab('search') : onExecuteSearch({ query: '', searchType: 'trademark', searchMode: 'contains' })}
            style={{ padding: '14px 32px', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
          >
            <Compass size={18} />
            <span>Launch Trademark Explorer</span>
            <ArrowRight size={18} />
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => onNavigateTab ? onNavigateTab('how-it-works') : null}
            style={{ padding: '14px 28px', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <BookOpen size={18} />
            <span>Learn How It Works</span>
          </button>
        </div>

        {/* Value Pillars Showcase Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          textAlign: 'left'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'var(--brand-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '14px'
            }}>
              <ShieldCheck size={22} color="var(--brand-primary)" />
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '6px' }}>
              Verified Registry Data
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              Directly aligned with official trademark registry standards, ensuring authentic legal record transparency.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'var(--brand-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '14px'
            }}>
              <Database size={22} color="var(--brand-primary)" />
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '6px' }}>
              20+ Lakh Structured Records
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              Vast catalog of trademarks across industries, indexed for lightning-fast exploration and multi-mode matching.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'var(--brand-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '14px'
            }}>
              <Layers size={22} color="var(--brand-primary)" />
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '6px' }}>
              All 45 Trademark Classes
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              Comprehensive Nice classification coverage spanning goods (1-34) and services (35-45) with status insights.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
