import React from 'react';
import { Tag, Hash, FileText, Building2, ArrowRight, Sparkles, Search } from 'lucide-react';
import leftIllustration from '../assets/search_identifier_3d_left.png';

export default function SearchTypesSection({ onExecuteSearch }) {
  const searchTypes = [
    {
      id: 'trademark',
      index: '01',
      title: 'Trademark Name',
      desc: 'Search for a trademark or brand by its commercial name, wordmark, logo text, or phonetic sound.',
      icon: Tag,
      sample: 'NIKE'
    },
    {
      id: 'application_no',
      index: '02',
      title: 'Application Number',
      desc: 'Find a trademark application using its official government application serial number.',
      icon: Hash,
      sample: '1948201'
    },
    {
      id: 'trademark_no',
      index: '03',
      title: 'Trademark Number',
      desc: 'Search for a registered trademark using its formal registration certificate number.',
      icon: FileText,
      sample: 'TM-84920'
    },
    {
      id: 'owner',
      index: '04',
      title: 'Owner / Proprietor',
      desc: 'Find all trademarks filed by or associated with a particular enterprise, company, or individual.',
      icon: Building2,
      sample: 'Tata Sons'
    }
  ];

  return (
    <section style={{
      paddingTop: '96px',
      paddingBottom: '108px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f7fbfe 100%)',
      borderBottom: '1px solid #e1ecf9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Soft Ambient Light Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '2%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(225, 236, 249, 0.7) 0%, rgba(240, 246, 252, 0.3) 50%, transparent 75%)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* =========================================================================
            CENTERED SECTION HEADER
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          
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

          {/* Heading with Highlight */}
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.2vw, 3.5rem)',
            fontWeight: '900',
            letterSpacing: '-0.035em',
            color: '#0d1d2e',
            marginBottom: '16px',
            lineHeight: 1.15
          }}>
            What Can You <span style={{ color: '#0f5aa2' }}>Search?</span>
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.14rem',
            color: '#556980',
            lineHeight: 1.68,
            margin: 0
          }}>
            Search using the trademark information you already have across millions of structured registry records.
          </p>
        </div>

        {/* =========================================================================
            MAIN SECTION: 3D GRAPHIC ON LEFT & 4 ENLARGED CARDS ON RIGHT
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 440px) 1fr',
          gap: '32px',
          alignItems: 'center'
        }} className="search-identifiers-grid">
          
          {/* =========================================================================
              LEFT: 3D SEARCH & BROWSER ILLUSTRATION (SLIGHTLY ENLARGED)
             ========================================================================= */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              animation: 'subtleSearchFloat 5s ease-in-out infinite'
            }}>
              <img
                src={leftIllustration}
                alt="Search Identifiers 3D Illustration"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 14px 32px rgba(15, 90, 162, 0.12))'
                }}
              />
            </div>
          </div>

          {/* =========================================================================
              RIGHT: 4 SLIGHTLY ENLARGED CARDS IN A ROW
             ========================================================================= */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
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
                    padding: '28px 22px',
                    border: '1px solid #e1ecf9',
                    boxShadow: '0 8px 24px rgba(15, 90, 162, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '340px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = '#0f5aa2';
                    e.currentTarget.style.boxShadow = '0 18px 40px rgba(15, 90, 162, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e1ecf9';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 90, 162, 0.06)';
                  }}
                >
                  <div>
                    {/* Top Row: Icon + Step Badge */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '22px'
                    }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: '#f0f6fc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #e1ecf9',
                        boxShadow: '0 4px 10px rgba(15, 90, 162, 0.06)'
                      }}>
                        <IconComp size={24} color="#0f5aa2" />
                      </div>

                      <span style={{
                        fontSize: '0.82rem',
                        fontWeight: '800',
                        color: '#0f5aa2',
                        background: '#f0f6fc',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        border: '1px solid #e1ecf9'
                      }}>
                        {item.index}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.16rem',
                      fontWeight: '800',
                      color: '#0d1d2e',
                      marginBottom: '10px',
                      lineHeight: 1.25
                    }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.88rem',
                      color: '#687d94',
                      lineHeight: 1.6,
                      margin: '0 0 24px 0'
                    }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Footer: Pill Example + Blue Arrow Button */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid #f8fafc'
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: '#0f5aa2',
                      background: '#f0f6fc',
                      padding: '7px 12px',
                      borderRadius: '10px',
                      border: '1px solid rgba(15, 90, 162, 0.12)',
                      flex: 1,
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}>
                      <Search size={13} color="#0f5aa2" style={{ flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>e.g. {item.sample}</span>
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
                      flexShrink: 0,
                      boxShadow: '0 3px 10px rgba(15, 90, 162, 0.28)'
                    }}>
                      <ArrowRight size={16} />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @keyframes subtleSearchFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 1040px) {
          .search-identifiers-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
