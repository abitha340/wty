import React, { useState } from 'react';
import { Target, AlignLeft, Search, ArrowRight, Sparkles } from 'lucide-react';

export default function SearchFeaturesSection({ onExecuteSearch }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const modes = [
    {
      id: 'exact',
      title: 'Exact Match',
      desc: 'Find records that match your search term exactly, perfect for statutory verification and exact brand clearance.',
      exampleLabel: 'Example:',
      exampleValue: '"NIKE"',
      btnText: 'Search with Exact Match',
      sampleQuery: 'NIKE',
      icon: Target
    },
    {
      id: 'startswith',
      title: 'Starts With',
      desc: 'Find trademarks that begin with your search term, helping you discover brand extensions and product variations.',
      exampleLabel: 'Example:',
      exampleValue: '"NIKE"',
      btnText: 'Search with Starts With',
      sampleQuery: 'NIKE',
      icon: AlignLeft
    },
    {
      id: 'contains',
      title: 'Contains',
      desc: 'Find trademarks containing your search term anywhere within the name, ideal for broad market research.',
      exampleLabel: 'Example:',
      exampleValue: '"TECH"',
      btnText: 'Search with Contains',
      sampleQuery: 'TECH',
      icon: Search
    }
  ];

  return (
    <section style={{
      paddingTop: '92px',
      paddingBottom: '100px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)',
      borderBottom: '1px solid #e1ecf9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* =========================================================================
            CENTERED HEADER AREA
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 68px auto' }}>
          
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
              Flexible Matching Engines
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
            fontWeight: '900',
            letterSpacing: '-0.035em',
            color: '#0d1d2e',
            marginBottom: '14px',
            lineHeight: 1.15
          }}>
            Search the Way You Need
          </h2>

          {/* Description */}
          <p style={{
            fontSize: '1.1rem',
            color: '#556980',
            lineHeight: 1.6,
            margin: 0
          }}>
            Choose the exact matching method that fits your trademark research goals.
          </p>
        </div>

        {/* =========================================================================
            3-CARD UNIFIED BLUE GRID
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {modes.map((mode) => {
            const IconComp = mode.icon;
            const isHovered = hoveredCard === mode.id;

            return (
              <div
                key={mode.id}
                onMouseEnter={() => setHoveredCard(mode.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '40px 32px 32px 32px',
                  border: isHovered ? '1.5px solid #083866' : '1.5px solid #e1ecf9',
                  boxShadow: isHovered ? '0 20px 44px rgba(8, 56, 102, 0.16)' : '0 10px 32px rgba(15, 90, 162, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                
                {/* Floating Soft Ambient Blue Bubbles */}
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  left: '24px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(225, 236, 249, 0.85)',
                  filter: 'blur(2px)',
                  pointerEvents: 'none'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '40px',
                  right: '28px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(240, 246, 252, 0.85)',
                  filter: 'blur(3px)',
                  pointerEvents: 'none'
                }} />

                {/* Top Floating 3D Icon Box */}
                <div style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '20px',
                  background: isHovered ? '#f0f6fc' : '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '26px',
                  border: isHovered ? '1.5px solid #083866' : '1.5px solid #e1ecf9',
                  boxShadow: isHovered ? '0 8px 24px rgba(8, 56, 102, 0.12)' : '0 8px 24px rgba(15, 90, 162, 0.06)',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'all 0.3s ease'
                }}>
                  <IconComp size={36} color={isHovered ? '#083866' : '#0f5aa2'} />
                </div>

                {/* Card Title */}
                <h3 style={{
                  fontSize: '1.45rem',
                  fontWeight: '900',
                  color: isHovered ? '#083866' : '#0d1d2e',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s ease'
                }}>
                  {mode.title}
                </h3>

                {/* Card Description */}
                <p style={{
                  fontSize: '0.94rem',
                  color: '#556980',
                  lineHeight: 1.65,
                  marginBottom: '28px',
                  maxWidth: '300px'
                }}>
                  {mode.desc}
                </p>

                {/* Example Pill Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: isHovered ? '#e1ecf9' : '#f0f6fc',
                  padding: '8px 20px',
                  borderRadius: '12px',
                  fontSize: '0.92rem',
                  marginBottom: '32px',
                  color: isHovered ? '#083866' : '#0f5aa2',
                  border: '1px solid rgba(15, 90, 162, 0.15)',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}>
                  <span>{mode.exampleLabel}</span>
                  <span style={{ fontWeight: '800' }}>{mode.exampleValue}</span>
                </div>

                {/* Bottom Primary Action Button (Blue -> Dark Blue on Hover) */}
                <button
                  type="button"
                  onClick={() => onExecuteSearch && onExecuteSearch({ query: mode.sampleQuery, searchType: 'trademark', searchMode: mode.id })}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    background: isHovered ? 'linear-gradient(135deg, #083866 0%, #052646 100%)' : 'linear-gradient(135deg, #0f5aa2 0%, #1572c6 100%)',
                    color: '#ffffff',
                    fontSize: '0.96rem',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: isHovered ? '0 8px 22px rgba(8, 56, 102, 0.35)' : '0 6px 18px rgba(15, 90, 162, 0.28)',
                    marginTop: 'auto',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>{mode.btnText}</span>
                  <ArrowRight size={17} />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
