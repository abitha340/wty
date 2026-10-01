import React from 'react';
import { Tag, Hash, FileText, Building2, Layers, ShieldCheck, Globe, Calendar } from 'lucide-react';

export default function TrademarkInfoSection() {
  const cards = [
    {
      title: "Trademark",
      desc: "The name, representation, wordmark, or brand phrase filed in the official trademark registry.",
      icon: Tag,
      sample: "NIKE AIR"
    },
    {
      title: "Application Number",
      desc: "The unique statutory application identifier assigned upon initial government filing.",
      icon: Hash,
      sample: "App #1948201"
    },
    {
      title: "Trademark Number",
      desc: "The formal registration certificate identifier issued upon official trademark granting.",
      icon: FileText,
      sample: "TM-849201"
    },
    {
      title: "Owner / Proprietor",
      desc: "Information about the company, organization, or individual holding legal ownership.",
      icon: Building2,
      sample: "Nike Innovate C.V."
    },
    {
      title: "Class",
      desc: "The international Nice Classification (Classes 1 to 45) categorizing the goods or services.",
      icon: Layers,
      sample: "Class 25 (Apparel)"
    },
    {
      title: "Status",
      desc: "The current legal lifecycle state: Registered, Pending Examination, Objected, or Opposed.",
      icon: ShieldCheck,
      sample: "Registered & Active"
    },
    {
      title: "Country",
      desc: "The official jurisdiction and regional branch office handling the trademark filing.",
      icon: Globe,
      sample: "India & Global"
    },
    {
      title: "Important Dates",
      desc: "Key statutory dates including filing date, publication date, registration date, and renewal deadlines.",
      icon: Calendar,
      sample: "Filing: 12 May 2018"
    }
  ];

  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-page)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            Structured Data Attributes
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '12px', color: 'var(--text-title)' }}>
            Everything You Need to Know About a Trademark
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)' }}>
            Explore structured trademark information in one place, from basic trademark details to ownership, classification, status, country, and important dates.
          </p>
        </div>

        <div className="grid-4">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="card-clean"
                style={{ padding: '24px', background: '#ffffff' }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'var(--brand-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-primary)',
                  marginBottom: '16px'
                }}>
                  <Icon size={20} />
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '8px' }}>
                  {c.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                  {c.desc}
                </p>

                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  color: 'var(--brand-primary)',
                  background: 'var(--brand-tint)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  display: 'inline-block'
                }}>
                  {c.sample}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
