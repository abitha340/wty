import React from 'react';
import { Tag, Hash, FileText, Building2, ArrowRight, Sparkles } from 'lucide-react';
import docIllustration from '../assets/search_identifier_right_doc.png';

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
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '96px',
      paddingBottom: '108px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f7fbfe 100%)',
      borderBottom: '1px solid #e1ecf9'
    }}>
      
      {/* Top Left Section Number Pill '03' */}
      <div style={{
        position: 'absolute',
        top: '32px',
        left: '32px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 14px',
        borderRadius: '12px',
        background: '#e1ecf9',
        color: '#0f5aa2',
        fontSize: '0.88rem',
        fontWeight: '800',
        boxShadow: '0 2px 8px rgba(15, 90, 162, 0.08)'
      }}>
        03
      </div>

      {/* Large Ambient Fluid Aura Merging across Left and Center */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '-5%',
        width: '750px',
        height: '650px',
        background: 'radial-gradient(ellipse at center, rgba(225, 236, 249, 0.85) 0%, rgba(240, 246, 252, 0.5) 45%, transparent 75%)',
        filter: 'blur(35px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* =========================================================================
            CENTERED SECTION HEADER
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
          
          {/* Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 18px',
              borderRadius: '20px',
              background: '#e1ecf9',
              color: '#0f5aa2',
              fontSize: '0.84rem',
              fontWeight: '700'
            }}>
              <Sparkles size={15} color="#0f5aa2" />
              <span>Search Identifiers</span>
            </div>
          </div>

          {/* Main Heading with Blue Accent */}
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

          {/* Description */}
          <p style={{
            fontSize: '1.1rem',
            color: '#556980',
            lineHeight: 1.65,
            margin: 0,
            maxWidth: '600px'
          }}>
            Search using the trademark information you already have across millions of structured registry records.
          </p>
        </div>

        {/* =========================================================================
            2-COLUMN GRID: ENLARGED 3D IMAGE ON LEFT (MERGED) | 4 CARDS ON RIGHT
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: '24px',
          alignItems: 'center'
        }} className="search-identifiers-swapped-grid">
          
          {/* =========================================================================
              LEFT COLUMN: ENLARGED 3D TM DOCUMENT ILLUSTRATION WITH ORGANIC BLEND
             ========================================================================= */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '520px',
            marginRight: '-20px',
            zIndex: 1
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '660px',
              animation: 'subtleSearchFloat 5s ease-in-out infinite'
            }}>
              <img
                src={docIllustration}
                alt="Search Identifiers 3D Document Illustration"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  WebkitMaskImage: 'radial-gradient(ellipse 95% 95% at 50% 50%, black 72%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 95% 95% at 50% 50%, black 72%, transparent 100%)',
                  filter: 'drop-shadow(0 18px 40px rgba(15, 90, 162, 0.14))'
                }}
              />
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: 4 STACKED CARDS WITH NUMBER BADGES
             ========================================================================= */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {searchTypes.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => onExecuteSearch && onExecuteSearch({ query: item.sample, searchType: item.id, searchMode: 'contains' })}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      cursor: 'pointer',
                      transition: 'transform 0.25s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(6px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                  >
                    
                    {/* Left Circular Number Badge (01, 02, 03, 04) */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#0f5aa2',
                      color: '#ffffff',
                      fontSize: '0.84rem',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(15, 90, 162, 0.28)'
                    }}>
                      {item.index}
                    </div>

                    {/* Main Card Box */}
                    <div style={{
                      flex: 1,
                      background: 'rgba(255, 255, 255, 0.96)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: '18px',
                      padding: '18px 22px',
                      border: '1px solid #e1ecf9',
                      boxShadow: '0 6px 20px rgba(15, 90, 162, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#0f5aa2';
                      e.currentTarget.style.boxShadow = '0 10px 28px rgba(15, 90, 162, 0.14)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e1ecf9';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 90, 162, 0.06)';
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        
                        {/* Icon Box */}
                        <div style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: '#f0f6fc',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: '1px solid #e1ecf9'
                        }}>
                          <IconComp size={22} color="#0f5aa2" />
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h3 style={{
                            fontSize: '1.08rem',
                            fontWeight: '800',
                            color: '#0d1d2e',
                            marginBottom: '3px',
                            lineHeight: 1.25
                          }}>
                            {item.title}
                          </h3>
                          <p style={{
                            fontSize: '0.84rem',
                            color: '#687d94',
                            lineHeight: 1.5,
                            margin: 0
                          }}>
                            {item.desc}
                          </p>
                        </div>

                      </div>

                      {/* Right Circular Blue Arrow Button */}
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

      </div>

      <style>{`
        @keyframes subtleSearchFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 1040px) {
          .search-identifiers-swapped-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
