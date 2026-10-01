import React from 'react';
import { Search, Compass, FileCheck2, ArrowRight } from 'lucide-react';

export default function HowItWorksSection({ onNavigateSearch }) {
  const steps = [
    {
      step: "01",
      title: "Search",
      desc: "Enter a trademark name, application number, trademark number, owner, or other available information in the search bar.",
      icon: Search
    },
    {
      step: "02",
      title: "Explore",
      desc: "Browse matching trademark records and narrow your results using intuitive filters, search modes, and sorting options.",
      icon: Compass
    },
    {
      step: "03",
      title: "View Details",
      desc: "Select any trademark to view the complete structured record, ownership timeline, classification details, and legal validity.",
      icon: FileCheck2
    }
  ];

  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', background: '#ffffff' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            Simple 3-Step Journey
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '12px', color: 'var(--text-title)' }}>
            How Wyt Works
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)' }}>
            Discover how easy it is to research and verify trademark records in seconds.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: '40px' }}>
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="card-clean"
                style={{
                  padding: '36px 28px',
                  position: 'relative',
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  fontSize: '2.4rem',
                  fontWeight: '900',
                  color: 'rgba(15, 90, 162, 0.12)',
                  fontFamily: 'JetBrains Mono',
                  lineHeight: 1
                }}>
                  {s.step}
                </div>

                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--brand-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-primary)',
                  marginBottom: '20px'
                }}>
                  <Icon size={24} />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '12px' }}>
                  Step {s.step} – {s.title}
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Workflow Ribbon */}
        <div style={{
          background: 'var(--brand-light)',
          border: '1px solid rgba(15, 90, 162, 0.2)',
          borderRadius: '14px',
          padding: '20px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--brand-primary)' }}>Search</span>
          <ArrowRight size={18} color="var(--brand-primary)" />
          <span style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--brand-primary)' }}>Explore</span>
          <ArrowRight size={18} color="var(--brand-primary)" />
          <span style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--brand-primary)' }}>View Details</span>
        </div>

      </div>
    </section>
  );
}
