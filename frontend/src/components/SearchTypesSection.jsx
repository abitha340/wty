import React from 'react';
import { Tag, Hash, FileText, Building2, ArrowRight, Sparkles } from 'lucide-react';
import rightIllustration from '../assets/search_identifier_right_doc.png';

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
      paddingTop: '92px',
      paddingBottom: '100px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fbfe 100%)',
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

      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* =========================================================================
            2-COLUMN GRID: LEFT = HEADER & 4 STACKED CARDS | RIGHT = 3D TM DOCUMENT
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          
          {/* =========================================================================
              LEFT COLUMN: HEADER & 4 STACKED CARDS WITH NUMBER BADGES
             ========================================================================= */}
          <div>
            
            {/* Header Area */}
            <div style={{ marginBottom: '36px' }}>
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
                fontSize: 'clamp(2.3rem, 3.8vw, 3.2rem)',
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
                fontSize: '1.05rem',
                color: '#556980',
                lineHeight: 1.65,
                margin: 0,
                maxWidth: '560px'
              }}>
                Search using the trademark information you already have across millions of structured registry records.
              </p>
            </div>

            {/* 4 Horizontal Stacked Cards with Left Number Badges */}
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
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: '#0f5aa2',
                      color: '#ffffff',
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 3px 10px rgba(15, 90, 162, 0.25)'
                    }}>
                      {item.index}
                    </div>

                    {/* Main Card Box */}
                    <div style={{
                      flex: 1,
                      background: '#ffffff',
                      borderRadius: '18px',
                      padding: '16px 20px',
                      border: '1px solid #e1ecf9',
                      boxShadow: '0 4px 18px rgba(15, 90, 162, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      transition: 'all 0.25s ease'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        
                        {/* Icon Box */}
                        <div style={{
                          width: '44px',
                          height: '44px',
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
                            fontSize: '1.04rem',
                            fontWeight: '800',
                            color: '#0d1d2e',
                            marginBottom: '3px',
                            lineHeight: 1.25
                          }}>
                            {item.title}
                          </h3>
                          <p style={{
                            fontSize: '0.82rem',
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
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: '#0f5aa2',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(15, 90, 162, 0.25)'
                      }}>
                        <ArrowRight size={16} />
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 3D TM DOCUMENT & MAGNIFYING GLASS ILLUSTRATION
             ========================================================================= */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '440px'
          }}>
            
            {/* Soft Ambient Radial Glow */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(ellipse at center, rgba(225, 236, 249, 0.75) 0%, rgba(240, 246, 252, 0.35) 60%, transparent 80%)',
              pointerEvents: 'none',
              zIndex: 1
            }} />

            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              zIndex: 2,
              animation: 'subtleSearchFloat 5s ease-in-out infinite'
            }}>
              <img
                src={rightIllustration}
                alt="Search Identifiers 3D Document Illustration"
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

        </div>

      </div>

      <style>{`
        @keyframes subtleSearchFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
