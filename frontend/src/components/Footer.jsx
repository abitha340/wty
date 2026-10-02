import React from 'react';
import { ShieldCheck, Zap, Globe, Lock, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenAuthModal }) {
  const handleNav = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #083866 0%, #052444 100%)',
      color: '#ffffff',
      borderTop: '1px solid rgba(225, 236, 249, 0.15)',
      paddingTop: '72px',
      paddingBottom: '36px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Soft Ambient Radial Light in Footer */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '200px',
        background: 'radial-gradient(ellipse at center, rgba(15, 90, 162, 0.4) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* =========================================================================
            TOP TRUST & ASSURANCE PILLARS STRIP
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          paddingBottom: '48px',
          marginBottom: '48px',
          borderBottom: '1px solid rgba(225, 236, 249, 0.12)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(225, 236, 249, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(225, 236, 249, 0.15)'
            }}>
              <ShieldCheck size={20} color="#60a5fa" />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: '700', color: '#ffffff' }}>Verified Registry Data</div>
              <div style={{ fontSize: '0.78rem', color: '#a5c8eb' }}>Official statutory records</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(225, 236, 249, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(225, 236, 249, 0.15)'
            }}>
              <Zap size={20} color="#60a5fa" />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: '700', color: '#ffffff' }}>Sub-15ms Latency</div>
              <div style={{ fontSize: '0.78rem', color: '#a5c8eb' }}>Instant indexed queries</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(225, 236, 249, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(225, 236, 249, 0.15)'
            }}>
              <Globe size={20} color="#60a5fa" />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: '700', color: '#ffffff' }}>All 45 Nice Classes</div>
              <div style={{ fontSize: '0.78rem', color: '#a5c8eb' }}>Goods (1-34) & Services (35-45)</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(225, 236, 249, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(225, 236, 249, 0.15)'
            }}>
              <Lock size={20} color="#60a5fa" />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: '700', color: '#ffffff' }}>Zero Direct DB Exposure</div>
              <div style={{ fontSize: '0.78rem', color: '#a5c8eb' }}>Enterprise data security</div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN FOOTER COLUMNS
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '56px'
        }} className="footer-links-grid">
          
          {/* Brand Column */}
          <div>
            <div
              onClick={() => handleNav('landing')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '18px', cursor: 'pointer' }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#083866',
                fontWeight: '900',
                fontSize: '1.25rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}>
                W
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '1.45rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                  Wyt
                </span>
                <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#a5c8eb', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  TRADEMARK
                </span>
              </div>
            </div>

            <p style={{
              fontSize: '0.94rem',
              color: '#c6ddf4',
              lineHeight: 1.7,
              maxWidth: '320px',
              marginBottom: '20px'
            }}>
              Trademark information. Ready when you need it. Search 20+ Lakh verified structured records in one place.
            </p>

            {/* System Status Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              fontSize: '0.78rem',
              fontWeight: '700',
              color: '#34d399'
            }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <span>Registry Services Operational</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.01em' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#c6ddf4' }}>
              <li>
                <a
                  onClick={() => handleNav('search')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#c6ddf4'}
                >
                  <span>Trademark Search</span>
                  <ArrowUpRight size={13} opacity={0.6} />
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNav('how-it-works')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#c6ddf4'}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNav('docs')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#c6ddf4'}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNav('search')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#c6ddf4'}
                >
                  Nice Class Lookups
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.01em' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#c6ddf4' }}>
              <li>
                <a
                  onClick={() => handleNav('landing')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#c6ddf4'}
                >
                  About Wyt
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNav('landing')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#c6ddf4'}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNav('landing')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#c6ddf4'}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNav('docs')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#c6ddf4'}
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.01em' }}>
              Account
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#c6ddf4' }}>
              <li>
                <a
                  onClick={() => onOpenAuthModal('login')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#c6ddf4'}
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  onClick={() => onOpenAuthModal('register')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#c6ddf4'}
                >
                  Register Account
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM COPYRIGHT BAR
           ========================================================================= */}
        <div style={{
          borderTop: '1px solid rgba(225, 236, 249, 0.12)',
          paddingTop: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.86rem',
          color: '#8aaacb',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            © 2026 Wyt. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Official Trademark Search & Intelligence Platform</span>
            <span>•</span>
            <span style={{ color: '#a5c8eb' }}>Global Registry Abstraction</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-links-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
