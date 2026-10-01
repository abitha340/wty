import React from 'react';
import { BookOpen, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DocumentationSection({ onNavigateDocs }) {
  const docTopics = [
    "How to Search Trademarks",
    "Understanding Search Modes",
    "Using Filters & Sorting",
    "Trademark Status Meanings",
    "Nice Classes (1 to 45) Guide",
    "Application & TM Numbers",
    "Owner & Proprietor Lookup",
    "Important Filing Dates & FAQs"
  ];

  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-subtle)', background: 'var(--brand-tint)' }}>
      <div className="container">
        
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '48px 40px',
          border: '1px solid rgba(15, 90, 162, 0.15)',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <div className="badge badge-blue" style={{ marginBottom: '14px' }}>
              User Guides & Resources
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '14px', color: 'var(--text-title)' }}>
              Need Help Finding Trademark Information?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
              Learn how to search trademarks, understand search results, and make the most of the information available in Wyt with our comprehensive guides.
            </p>

            <button onClick={onNavigateDocs} className="btn-primary" style={{ padding: '12px 28px' }}>
              <BookOpen size={16} />
              <span>Explore Documentation</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div style={{
            background: 'var(--bg-page)',
            padding: '24px 28px',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>
            {docTopics.map((topic, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }}>
                <CheckCircle2 size={14} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
