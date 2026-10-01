import React from 'react';
import { Tag, Hash, FileText, Building2, ArrowRight } from 'lucide-react';

export default function SearchTypesSection({ onExecuteSearch }) {
  const searchTypes = [
    {
      id: 'trademark',
      title: 'Trademark Name',
      desc: 'Search for a trademark or brand by its commercial name, wordmark, or phonetic sound.',
      icon: Tag,
      sample: 'NIKE'
    },
    {
      id: 'application_no',
      title: 'Application Number',
      desc: 'Find a trademark application using its official government application serial number.',
      icon: Hash,
      sample: '1948201'
    },
    {
      id: 'trademark_no',
      title: 'Trademark Number',
      desc: 'Search for a registered trademark using its formal registration certificate number.',
      icon: FileText,
      sample: 'TM-84920'
    },
    {
      id: 'owner',
      title: 'Owner / Proprietor',
      desc: 'Find all trademarks filed by or associated with a particular enterprise or individual.',
      icon: Building2,
      sample: 'Tata Sons'
    }
  ];

  return (
    <section style={{
      paddingTop: '80px',
      paddingBottom: '90px',
      background: '#ffffff',
      borderBottom: '1px solid #e1ecf9'
    }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* =========================================================================
            CENTERED HEADER
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          
          {/* Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 18px',
              borderRadius: '20px',
              background: '#e1ecf9',
              color: '#0f5aa2',
              fontSize: '0.86rem',
              fontWeight: '700',
              letterSpacing: '-0.01em'
            }}>
              Search Identifiers
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
            fontWeight: '900',
            letterSpacing: '-0.035em',
            color: '#0d1d2e',
            marginBottom: '14px',
            lineHeight: 1.15
          }}>
            What Can You Search?
          </h2>

          {/* Description */}
          <p style={{
            fontSize: '1.1rem',
            color: '#556980',
            lineHeight: 1.65,
            margin: 0
          }}>
            Search using the trademark information you already have.
          </p>
        </div>

        {/* =========================================================================
            RESPONSIVE 4-CARD GRID
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {searchTypes.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onExecuteSearch && onExecuteSearch({ query: item.sample, searchType: item.id, searchMode: 'contains' })}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  padding: '28px 24px',
                  border: '1px solid #e1ecf9',
                  boxShadow: '0 4px 18px rgba(15, 90, 162, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#0f5aa2';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 90, 162, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e1ecf9';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(15, 90, 162, 0.05)';
                }}
              >
                <div>
                  {/* Top Icon Box */}
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: '#f0f6fc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    border: '1px solid #e1ecf9'
                  }}>
                    <IconComp size={24} color="#0f5aa2" />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.18rem',
                    fontWeight: '800',
                    color: '#0d1d2e',
                    marginBottom: '10px',
                    lineHeight: 1.25
                  }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.92rem',
                    color: '#687d94',
                    lineHeight: 1.6,
                    marginBottom: '24px'
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid #f0f6fc'
                }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#0f5aa2' }}>
                    Try: {item.sample}
                  </span>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: '#f0f6fc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f5aa2'
                  }}>
                    <ArrowRight size={15} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
