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
      paddingTop: '88px',
      paddingBottom: '96px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f7fbfe 100%)',
      borderBottom: '1px solid #e1ecf9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* =========================================================================
            CENTERED SECTION HEADER
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px auto' }}>
          
          {/* Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 18px',
              borderRadius: '24px',
              background: '#e1ecf9',
              color: '#0f5aa2',
              fontSize: '0.86rem',
              fontWeight: '700',
              boxShadow: '0 2px 8px rgba(15, 90, 162, 0.08)'
            }}>
              <Sparkles size={16} color="#0f5aa2" />
              <span>Search Identifiers</span>
            </div>
          </div>

          {/* Heading with Blue Accent */}
          <h2 style={{
            fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
            fontWeight: '900',
            letterSpacing: '-0.035em',
            color: '#0d1d2e',
            marginBottom: '14px',
            lineHeight: 1.15
          }}>
            What Can You <span style={{ color: '#0f5aa2' }}>Search?</span>
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.1rem',
            color: '#556980',
            lineHeight: 1.65,
            margin: 0
          }}>
            Search using the trademark information you already have across millions of structured registry records.
          </p>
        </div>

        {/* =========================================================================
            MAIN SECTION LAYOUT: LEFT 3D ILLUSTRATION + RIGHT 4 CARDS IN A ROW
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 380px) 1fr',
          gap: '24px',
          alignItems: 'center'
        }} className="search-identifiers-grid">
          
          {/* =========================================================================
              LEFT: 3D SEARCH & BROWSER ILLUSTRATION
             ========================================================================= */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px'
          }}>
            {/* Ambient Radial Soft Glow */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(ellipse at center, rgba(225, 236, 249, 0.7) 0%, rgba(240, 246, 252, 0.3) 60%, transparent 80%)',
              pointerEvents: 'none',
              zIndex: 1
            }} />

            <div style={{
              position: 'relative',
              width: '100%',
              zIndex: 2,
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
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>

          {/* =========================================================================
              RIGHT: 4 CARDS ROW
             ========================================================================= */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '18px'
          }}>
            {searchTypes.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onExecuteSearch && onExecuteSearch({ query: item.sample, searchType: item.id, searchMode: 'contains' })}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '24px 20px',
                    border: '1px solid #e1ecf9',
                    boxShadow: '0 6px 20px rgba(15, 90, 162, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '310px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = '#0f5aa2';
                    e.currentTarget.style.boxShadow = '0 14px 32px rgba(15, 90, 162, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e1ecf9';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 90, 162, 0.05)';
                  }}
                >
                  <div>
                    {/* Top Row: Icon + Step Badge */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '18px'
                    }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: '#f0f6fc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #e1ecf9'
                      }}>
                        <IconComp size={22} color="#0f5aa2" />
                      </div>

                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: '800',
                        color: '#0f5aa2',
                        background: '#f0f6fc',
                        padding: '4px 10px',
                        borderRadius: '10px',
                        border: '1px solid #e1ecf9'
                      }}>
                        {item.index}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.08rem',
                      fontWeight: '800',
                      color: '#0d1d2e',
                      marginBottom: '8px',
                      lineHeight: 1.25
                    }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.82rem',
                      color: '#687d94',
                      lineHeight: 1.55,
                      margin: '0 0 20px 0'
                    }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Footer: Pill Example + Arrow Button */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    marginTop: 'auto'
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.76rem',
                      fontWeight: '700',
                      color: '#0f5aa2',
                      background: '#f0f6fc',
                      padding: '6px 10px',
                      borderRadius: '8px',
                      border: '1px solid rgba(15, 90, 162, 0.12)',
                      flex: 1,
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}>
                      <Search size={12} color="#0f5aa2" style={{ flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>e.g. {item.sample}</span>
                    </div>

                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#0f5aa2',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(15, 90, 162, 0.25)'
                    }}>
                      <ArrowRight size={15} />
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
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 960px) {
          .search-identifiers-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
