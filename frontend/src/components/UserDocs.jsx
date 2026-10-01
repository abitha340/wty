import React, { useState } from 'react';
import { BookOpen, Search, Filter, Layers, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

export default function UserDocs({ onNavigateSearch }) {
  const [activeSection, setActiveSection] = useState('how-to-search');

  const topics = [
    { id: 'how-to-search', label: 'How to Search Trademarks' },
    { id: 'search-modes', label: 'Exact vs StartsWith vs Contains' },
    { id: 'filters-sorting', label: 'Filters and Sorting Options' },
    { id: 'trademark-statuses', label: 'Understanding Trademark Status' },
    { id: 'nice-classes', label: 'Nice Classification (1 - 45)' },
    { id: 'faqs', label: 'Frequently Asked Questions' }
  ];

  return (
    <div style={{ padding: '60px 0 100px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            User Guide & Documentation
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-title)', marginBottom: '10px' }}>
            Wyt Trademark Knowledge Base
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Everything you need to know about searching, filtering, and understanding trademark records.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px', alignItems: 'start' }}>
          
          {/* Sidebar Nav */}
          <div className="card-clean" style={{ padding: '16px', background: '#ffffff' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '12px', paddingLeft: '8px' }}>
              Documentation Topics
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveSection(t.id)}
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: activeSection === t.id ? 'var(--brand-light)' : 'transparent',
                    color: activeSection === t.id ? 'var(--brand-primary)' : 'var(--text-main)',
                    fontWeight: activeSection === t.id ? '700' : '500',
                    border: 'none',
                    fontSize: '0.88rem',
                    cursor: 'pointer'
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="card-clean" style={{ padding: '36px 40px', background: '#ffffff' }}>
            
            {activeSection === 'how-to-search' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-title)' }}>
                  How to Search Trademarks on Wyt
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Wyt makes it easy to look up any trademark across 20+ Lakh records. You can search by entering any information you have:
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-main)', marginBottom: '24px' }}>
                  <li><strong>Trademark Name</strong>: The brand or mark name (e.g. "NIKE", "APPLE", "TATA").</li>
                  <li><strong>Application Number</strong>: The official government filing number (e.g. "1948201").</li>
                  <li><strong>Trademark Registration Number</strong>: Official granted certificate identifier.</li>
                  <li><strong>Owner / Proprietor</strong>: Company or individual applicant name (e.g. "Nike Innovate C.V.").</li>
                </ul>
                <button onClick={onNavigateSearch} className="btn-primary">
                  <span>Start Searching Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

            {activeSection === 'search-modes' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-title)' }}>
                  Search Modes Explained
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Choose between three distinct matching methods:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ padding: '16px', background: 'var(--bg-page)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                    <h4 style={{ color: 'var(--brand-primary)', fontWeight: '800', marginBottom: '4px' }}>1. Exact Match</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Matches only records whose name is identical to your search query. Best for trademark clearance verification.</p>
                  </div>
                  <div style={{ padding: '16px', background: 'var(--bg-page)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                    <h4 style={{ color: 'var(--brand-primary)', fontWeight: '800', marginBottom: '4px' }}>2. Starts With</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Finds any trademark starting with your query. E.g. Searching "NIKE" finds "NIKE", "NIKE AIR", "NIKE PRO".</p>
                  </div>
                  <div style={{ padding: '16px', background: 'var(--bg-page)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                    <h4 style={{ color: 'var(--brand-primary)', fontWeight: '800', marginBottom: '4px' }}>3. Contains</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Finds trademarks containing your term anywhere in the name or description. E.g. Searching "TECH" finds "FINTECH", "TECHWORLD".</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'filters-sorting' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-title)' }}>
                  Filtering & Sorting Options
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  When searching through thousands of results, use our filter controls on the left side of the Search Explorer to narrow your results by:
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-main)', marginBottom: '24px' }}>
                  <li><strong>Class Filter</strong>: Filter specifically by any of the 45 Nice international classes.</li>
                  <li><strong>Status Filter</strong>: Limit results to Registered, Pending, Objected, or Opposed marks.</li>
                  <li><strong>Country / Branch</strong>: Refine by jurisdiction or regional branch.</li>
                  <li><strong>Sorting</strong>: Sort by relevance, alphabetical name (A–Z), or filing date (newest first).</li>
                </ul>
              </div>
            )}

            {activeSection === 'trademark-statuses' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-title)' }}>
                  Understanding Trademark Status
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                  <div style={{ padding: '12px 16px', background: 'var(--status-registered-bg)', borderRadius: '8px', color: 'var(--status-registered-text)', fontWeight: '700' }}>
                    Registered: The trademark has completed examination, opposition window, and has an official certificate issued.
                  </div>
                  <div style={{ padding: '12px 16px', background: 'var(--status-pending-bg)', borderRadius: '8px', color: 'var(--status-pending-text)', fontWeight: '700' }}>
                    Pending: The application has been filed and is undergoing examination or awaiting publication.
                  </div>
                  <div style={{ padding: '12px 16px', background: 'var(--status-objected-bg)', borderRadius: '8px', color: 'var(--status-objected-text)', fontWeight: '700' }}>
                    Objected: The trademark examiner raised objections under statutory sections (e.g. descriptive or conflicting mark).
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'nice-classes' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-title)' }}>
                  Nice Classification (Classes 1 to 45)
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  The Nice Classification is an international standard dividing goods (Classes 1–34) and services (Classes 35–45). Popular classes include:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.88rem' }}>
                  <div style={{ padding: '8px 12px', background: 'var(--bg-page)', borderRadius: '6px' }}><strong>Class 9</strong>: Software, Hardware & Electronics</div>
                  <div style={{ padding: '8px 12px', background: 'var(--bg-page)', borderRadius: '6px' }}><strong>Class 25</strong>: Clothing, Footwear & Apparel</div>
                  <div style={{ padding: '8px 12px', background: 'var(--bg-page)', borderRadius: '6px' }}><strong>Class 35</strong>: Business, Advertising & Retail</div>
                  <div style={{ padding: '8px 12px', background: 'var(--bg-page)', borderRadius: '6px' }}><strong>Class 42</strong>: IT, SaaS & Cloud Computing</div>
                </div>
              </div>
            )}

            {activeSection === 'faqs' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-title)' }}>
                  Frequently Asked Questions (FAQs)
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '4px' }}>How often is Wyt trademark data updated?</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>Data is synchronized continuously with official trademark gazettes and government registries.</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '4px' }}>Do I need technical skills to search?</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>No technical skills are needed. Simply type your brand name and explore results.</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
