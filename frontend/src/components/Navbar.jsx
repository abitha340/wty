import React from 'react';
import { Zap, Sun, Moon } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, dashboardData, onOpenCreditsModal, theme, setTheme }) {
  const navLinks = [
    { id: 'landing', label: 'Overview' },
    { id: 'search', label: 'Search Explorer' },
    { id: 'dashboard', label: 'Developer Portal' },
    { id: 'docs', label: 'Documentation' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const themes = [
    { id: 'dark', label: 'Dark', icon: Moon, title: 'Dark Mode' },
    { id: 'light', label: 'Bright', icon: Sun, title: 'Bright Mode' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      background: 'var(--header-bg)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px',
      }}>
        {/* Left: Clean Brand Logo */}
        <div 
          onClick={() => setActiveTab('landing')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '9px',
            background: 'linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(57, 174, 169, 0.35)',
            border: '1px solid rgba(229, 239, 193, 0.3)'
          }}>
            <span style={{ fontWeight: '800', fontSize: '1.15rem', color: '#FFFFFF' }}>W</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-title)' }}>
              Wyt
            </span>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: '700',
              padding: '2px 6px',
              borderRadius: '4px',
              background: 'rgba(27, 122, 117, 0.15)',
              color: 'var(--text-accent)',
              letterSpacing: '0.05em'
            }}>
              API
            </span>
          </div>
        </div>

        {/* Center: Minimalist Text Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '26px'
        }}>
          {navLinks.map(link => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '6px 0',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'var(--text-title)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  position: 'relative',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-title)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '0',
                    right: '0',
                    height: '2px',
                    borderRadius: '2px',
                    background: 'linear-gradient(90deg, var(--mint) 0%, var(--teal) 100%)',
                    boxShadow: '0 0 8px var(--teal)'
                  }}></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Mode Switcher + Credits + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          
          {/* 2-Way Mode Switcher (Dark / Bright) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--input-bg)',
            padding: '3px',
            borderRadius: '9999px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {themes.map(t => {
              const Icon = t.icon;
              const isCurrent = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  title={t.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '5px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: isCurrent ? '700' : '500',
                    background: isCurrent ? 'var(--teal)' : 'transparent',
                    color: isCurrent ? '#FFFFFF' : 'var(--text-dim)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <Icon size={13} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Credits Counter Pill */}
          <button 
            onClick={onOpenCreditsModal}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '9999px',
              background: 'rgba(27, 122, 117, 0.1)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-title)',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            title="Click to top up credits"
          >
            <Zap size={13} fill="var(--teal)" color="var(--teal)" />
            <span>{(dashboardData?.credits_available ?? 7519).toLocaleString()}</span>
          </button>

          {/* Primary CTA */}
          <button 
            onClick={() => setActiveTab('dashboard')}
            className="btn-primary"
            style={{
              padding: '8px 18px',
              fontSize: '0.85rem',
              fontWeight: '700'
            }}
          >
            <span>Get API Key</span>
          </button>
        </div>
      </div>
    </header>
  );
}
