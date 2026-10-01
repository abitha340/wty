import React from 'react';
import { Tag, Hash, FileText, Building2, ArrowRight, Search } from 'lucide-react';
import searchVisual from '../assets/search_identifiers_visual.png';

export default function SearchTypesSection({ onExecuteSearch }) {
  const searchTypes = [
    {
      id: 'trademark',
      title: 'Trademark Name',
      desc: 'Search for a trademark or brand by its commercial name, wordmark, or phonetic sound.',
      icon: Tag,
      iconBg: '#eef6fc',
      iconColor: '#0f5aa2',
      sample: 'NIKE'
    },
    {
      id: 'application_no',
      title: 'Application Number',
      desc: 'Find a trademark application using its official government application serial number.',
      icon: Hash,
      iconBg: '#eef6fc',
      iconColor: '#0f5aa2',
      sample: '1948201'
    },
    {
      id: 'trademark_no',
      title: 'Trademark Number',
      desc: 'Search for a registered trademark using its formal registration certificate number.',
      icon: FileText,
      iconBg: '#eef6fc',
      iconColor: '#0f5aa2',
      sample: 'TM-84920'
    },
    {
      id: 'owner',
      title: 'Owner / Proprietor',
      desc: 'Find all trademarks filed by or associated with a particular enterprise or individual.',
      icon: Building2,
      iconBg: '#eef6fc',
      iconColor: '#0f5aa2',
      sample: 'Tata Sons'
    }
  ];

  return (
    <section style={{
      paddingTop: '80px',
      paddingBottom: '90px',
      background: '#ffffff',
      borderBottom: '1px solid #e1ecf9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div style={{ marginBottom: '48px', maxWidth: '640px' }}>
          
          {/* Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              background: '#e1ecf9',
              color: '#0f5aa2',
              fontSize: '0.84rem',
              fontWeight: '700',
              letterSpacing: '-0.01em'
            }}>
              Search Identifiers
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
            fontWeight: '900',
            letterSpacing: '-0.035em',
            color: '#0d1d2e',
            marginBottom: '12px',
            lineHeight: 1.15
          }}>
            What Can You Search?
          </h2>

          {/* Description */}
          <p style={{
            fontSize: '1.08rem',
            color: '#556980',
            lineHeight: 1.6,
            margin: 0
          }}>
            Search using the trademark information you already have.
          </p>
        </div>

        {/* =========================================================================
            SPLIT LAYOUT: 4 Left Cards + Right 3D Visual Graphic
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          
          {/* LEFT COLUMN: 4 Stacked Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {searchTypes.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onExecuteSearch && onExecuteSearch({ query: item.sample, searchType: item.id, searchMode: 'contains' })}
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    border: '1px solid #e1ecf9',
                    boxShadow: '0 4px 16px rgba(15, 90, 162, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(6px)';
                    e.currentTarget.style.borderColor = '#0f5aa2';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 90, 162, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderColor = '#e1ecf9';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 90, 162, 0.04)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                    {/* Icon Box */}
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: item.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(15, 90, 162, 0.12)'
                    }}>
                      <IconComp size={22} color={item.iconColor} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 style={{
                        fontSize: '1.05rem',
                        fontWeight: '800',
                        color: '#0d1d2e',
                        marginBottom: '4px',
                        lineHeight: 1.25
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontSize: '0.86rem',
                        color: '#687d94',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#f4f8fd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#0f5aa2'
                  }}>
                    <ArrowRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: 3D Visual Illustration */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '560px',
              position: 'relative'
            }}>
              <img
                src={searchVisual}
                alt="Search Identifiers 3D Illustration"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
