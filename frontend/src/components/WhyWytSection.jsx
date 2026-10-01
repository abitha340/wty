import React from 'react';
import { Layers, Search, Database, Sparkles, ShieldCheck } from 'lucide-react';

export default function WhyWytSection() {
  const benefits = [
    {
      title: "Structured Information",
      desc: "Trademark information is presented in a clean, organized, and standardized format.",
      icon: Layers
    },
    {
      title: "Multiple Search Options",
      desc: "Search using different identifiers (name, app number, owner) and exact/prefix/contains modes.",
      icon: Search
    },
    {
      title: "Large Dataset",
      desc: "Access verified information from over 20+ Lakh registered and pending trademark records.",
      icon: Database
    },
    {
      title: "Easy Discovery",
      desc: "Search, filter, sort, and explore records seamlessly from one intuitive interface.",
      icon: Sparkles
    },
    {
      title: "Ready for Workflows",
      desc: "Trademark information can be used directly as part of research and business workflows.",
      icon: ShieldCheck
    }
  ];

  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', background: '#ffffff' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px auto' }}>
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            Core Advantages
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '12px', color: 'var(--text-title)' }}>
            Trademark Information, All in One Place
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)' }}>
            Why researchers and businesses rely on Wyt for trademark discovery.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx}
                className="card-clean"
                style={{ padding: '28px 20px', background: '#ffffff', textAlign: 'center' }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--brand-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-primary)',
                  margin: '0 auto 16px auto'
                }}>
                  <Icon size={22} />
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '8px' }}>
                  {b.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
