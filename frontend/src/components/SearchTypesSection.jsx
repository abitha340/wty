import React from 'react';
import { Tag, Hash, FileText, Building2, ArrowRight, Sparkles, Search } from 'lucide-react';
import fullBgImage from '../assets/search_identifiers_full_bg.png';

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
      paddingTop: '100px',
      paddingBottom: '116px',
      background: `#ffffff url(${fullBgImage}) no-repeat left center`,
      backgroundSize: 'contain',
      borderBottom: '1px solid #e1ecf9'
    }}>
      
      {/* Soft Ambient Blend Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 45%, rgba(255, 255, 255, 0.95) 75%, #ffffff 100%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        
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
            MAIN LAYOUT: SPACIOUS 3D BACKGROUND ON LEFT + 4 FROSTED CARDS ON RIGHT
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(340px, 480px) 1fr',
          gap: '36px',
          alignItems: 'center'
        }} className="search-identifiers-grid">
          
          {/* Left Space (Transparent area so 3D background artwork shines through) */}
          <div style={{ minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hide-mobile">
            {/* Visual spacing holder */}
          </div>

          {/* Right: 4 Frosted Glass Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(215px, 1fr))',
            gap: '20px'
          }}>
            {searchTypes.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onExecuteSearch && onExecuteSearch({ query: item.sample, searchType: item.id, searchMode: 'contains' })}
                  style={{
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: '24px',
                    padding: '30px 24px',
                    border: '1.5px solid #e1ecf9',
                    boxShadow: '0 10px 30px rgba(15, 90, 162, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '350px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = '#0f5aa2';
                    e.currentTarget.style.boxShadow = '0 20px 48px rgba(15, 90, 162, 0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e1ecf9';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 90, 162, 0.08)';
                  }}
                >
                  <div>
                    {/* Top Row: Icon Box + Step Index Badge */}
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
                        boxShadow: '0 4px 12px rgba(15, 90, 162, 0.06)'
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
                      fontSize: '1.2rem',
                      fontWeight: '800',
                      color: '#0d1d2e',
                      marginBottom: '10px',
                      lineHeight: 1.25
                    }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#687d94',
                      lineHeight: 1.6,
                      margin: '0 0 24px 0'
                    }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Footer Action */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(225, 236, 249, 0.6)'
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.82rem',
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
        @media (max-width: 1040px) {
          .search-identifiers-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
