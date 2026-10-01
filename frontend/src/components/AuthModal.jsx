import React, { useState } from 'react';
import { X, User, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1200);
  };

  return (
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
      <div 
        className="card-clean"
        style={{
          width: '100%',
          maxWidth: '460px',
          padding: '36px',
          background: '#ffffff',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'var(--brand-light)',
            color: 'var(--brand-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px auto'
          }}>
            <User size={22} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '4px' }}>
            {mode === 'login' ? 'Sign In to Wyt' : 'Create Your Wyt Account'}
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            {mode === 'login' ? 'Access your saved trademark searches & watchlists' : 'Start exploring 20L+ structured trademark records'}
          </p>
        </div>

        {success ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#dcfce7', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
              <ShieldCheck size={28} />
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-title)' }}>
              {mode === 'login' ? 'Signed in successfully!' : 'Account registered!'}
            </h4>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {mode === 'register' && (
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '6px' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '6px' }}>
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-title)', marginBottom: '6px' }}>
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px', fontSize: '0.95rem', marginTop: '8px' }}>
              <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight size={16} />
            </button>

            <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {mode === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <button type="button" onClick={() => setMode('register')} style={{ background: 'transparent', border: 'none', color: 'var(--brand-primary)', fontWeight: '700', cursor: 'pointer' }}>
                    Register
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button type="button" onClick={() => setMode('login')} style={{ background: 'transparent', border: 'none', color: 'var(--brand-primary)', fontWeight: '700', cursor: 'pointer' }}>
                    Sign In
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
