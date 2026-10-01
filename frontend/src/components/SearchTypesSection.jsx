import React from 'react';
import { Tag, Hash, FileText, Building2, ArrowRight, Sparkles, Search } from 'lucide-react';

export default function SearchTypesSection({ onExecuteSearch }) {
  const searchTypes = [
    {
      id: 'trademark',
      index: '01',
      title: 'Trademark Name',
      desc: 'Search for a trademark or brand by its commercial name, wordmark, logo text, or phonetic sound.',
      icon: Tag,
      sample: 'NIKE',
      category: 'Brand & Wordmark'
    },
    {
      id: 'application_no',
      index: '02',
      title: 'Application Number',
      desc: 'Find a trademark application using its official government application serial number.',
      icon: Hash,
      sample: '1948201',
      category: 'Filing Identifier'
    },
    {
      id: 'trademark_no',
      index: '03',
      title: 'Trademark Number',
      desc: 'Search for a registered trademark using its formal registration certificate number.',
      icon: FileText,
      sample: 'TM-84920',
      category: 'Registration ID'
    },
    {
      id: 'owner',
      index: '04',
      title: 'Owner / Proprietor',
      desc: 'Find all trademarks filed by or associated with a particular enterprise, company, or individual.',
      icon: Building2,
      sample: 'Tata Sons',
      category: 'Company & Entity'
    }
  ];

  return (
    <section style={{
      paddingTop: '96px',
      paddingBottom: '110px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)',
      borderBottom: '1px solid #e1ecf9',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* =========================================================================
            CENTERED HEADER AREA
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          
          {/* Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '24px',
              background: '#e1ecf9',
              color: '#0f5aa2',
              fontSize: '0.88rem',
              fontWeight: '700',
              boxShadow: '0 2px 8px rgba(15, 90, 162, 0.08)'
            }}>
              <Sparkles size={16} color="#0f5aa2" />
              <span>Search Identifiers</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)',
            fontWeight: '900',
            letterSpacing: '-0.035em',
            color: '#0d1d2e',
            marginBottom: '16px',
            lineHeight: 1.15
          }}>
            What Can You Search?
          </h2>

          {/* Supporting Text */}
          <p style={{
            fontSize: '1.16rem',
            color: '#556980',
            lineHeight: 1.7,
            margin: 0
          }}>
            Search using the trademark information you already have across millions of structured registry records.
          </p>
        </div>

        {/* =========================================================================
            RESPONSIVE 4-CARD LARGE GRID
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {searchTypes.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onExecuteSearch && onExecuteSearch({ query: item.sample, searchType: item.id, searchMode: 'contains' })}
                style={{
                  background: '#ffffff',
                  borderRadius: '22px',
                  padding: '36px 30px',
                  border: '1px solid #e1ecf9',
                  boxShadow: '0 8px 28px rgba(15, 90, 162, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#0f5aa2';
                  e.currentTarget.style.boxShadow = '0 20px 44px rgba(15, 90, 162, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e1ecf9';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(15, 90, 162, 0.06)';
                }}
              >
                {/* Top Header inside Card */}
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '26px'
                  }}>
                    {/* Big Rounded Icon Container */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #f0f6fc 0%, #e1ecf9 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #d4e3f3',
                      boxShadow: '0 4px 12px rgba(15, 90, 162, 0.08)'
                    }}>
                      <IconComp size={28} color="#0f5aa2" />
                    </div>

                    {/* Step Index Badge */}
                    <span style={{
                      fontSize: '0.84rem',
                      fontWeight: '800',
                      color: '#8aa2ba',
                      background: '#f8fafc',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      border: '1px solid #eef2f6'
                    }}>
                      {item.index}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 style={{
                    fontSize: '1.28rem',
                    fontWeight: '800',
                    color: '#0d1d2e',
                    marginBottom: '12px',
                    lineHeight: 1.25
                  }}>
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p style={{
                    fontSize: '0.98rem',
                    color: '#556980',
                    lineHeight: 1.65,
                    marginBottom: '28px'
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Interactive Action Footer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid #f0f6fc'
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.86rem',
                    fontWeight: '700',
                    color: '#0f5aa2',
                    background: '#f0f6fc',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(15, 90, 162, 0.12)'
                  }}>
                    <Search size={14} color="#0f5aa2" />
                    <span>e.g. {item.sample}</span>
                  </div>

                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#0f5aa2',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(15, 90, 162, 0.25)',
                    transition: 'transform 0.2s ease'
                  }}>
                    <ArrowRight size={17} />
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
