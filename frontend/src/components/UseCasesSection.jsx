import React from 'react';
import { Search, Compass, Scale, Shield, Building2, Layers } from 'lucide-react';

export default function UseCasesSection({ onNavigateSearch }) {
  const useCases = [
    {
      title: "Trademark Search",
      desc: "Quickly find, verify, and explore trademark records across brand names and application numbers.",
      icon: Search
    },
    {
      title: "Brand Research",
      desc: "Research existing commercial brand names and mark availability before launching new products.",
      icon: Compass
    },
    {
      title: "Legal & IP Research",
      desc: "Support trademark clearance, conflict detection, and intellectual property due-diligence workflows.",
      icon: Scale
    },
    {
      title: "Brand Management",
      desc: "Help businesses monitor their trademark portfolios, renewal milestones, and registered classes.",
      icon: Shield
    },
    {
      title: "Business Research",
      desc: "Analyze competitor brand filings and industry expansion trends as part of commercial market research.",
      icon: Building2
    },
    {
      title: "Trademark Platforms",
      desc: "Incorporate structured trademark intelligence into company incorporation and naming workflows.",
      icon: Layers
    }
  ];

  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-page)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 48px auto' }}>
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            Tailored Applications
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '12px', color: 'var(--text-title)' }}>
            Built for Trademark Research
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)' }}>
            Designed for business owners, legal researchers, brand managers, and companies exploring trademark data.
          </p>
        </div>

        <div className="grid-3">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;
            return (
              <div 
                key={idx}
                className="card-clean"
                style={{ padding: '30px 24px', background: '#ffffff' }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'var(--brand-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-primary)',
                  marginBottom: '18px'
                }}>
                  <Icon size={22} />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '8px' }}>
                  {uc.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {uc.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
