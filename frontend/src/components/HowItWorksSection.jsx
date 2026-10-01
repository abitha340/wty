import React from 'react';
import { Search, Compass, FileText } from 'lucide-react';

export default function HowItWorksSection({ onNavigateSearch }) {
  const steps = [
    {
      step: '01',
      title: 'Search',
      desc: 'Enter a trademark name, application number, trademark number, owner, or other available information in the search bar.',
      icon: Search,
      primaryColor: '#0f5aa2',
      badgeBg: '#0f5aa2',
      arcColor: 'rgba(15, 90, 162, 0.4)',
      haloBg: 'radial-gradient(circle, rgba(225, 236, 249, 0.85) 0%, rgba(240, 246, 252, 0.4) 65%, transparent 75%)',
      circleBg: '#f0f6fc',
      barColor: '#0f5aa2'
    },
    {
      step: '02',
      title: 'Explore',
      desc: 'Browse matching trademark records and narrow your results using intuitive filters, search modes, and sorting options.',
      icon: Compass,
      primaryColor: '#7c3aed',
      badgeBg: '#7c3aed',
      arcColor: 'rgba(124, 58, 237, 0.4)',
      haloBg: 'radial-gradient(circle, rgba(243, 232, 255, 0.85) 0%, rgba(250, 245, 255, 0.4) 65%, transparent 75%)',
      circleBg: '#faf5ff',
      barColor: '#7c3aed'
    },
    {
      step: '03',
      title: 'View Details',
      desc: 'Select any trademark to view the complete structured record, ownership timeline, classification details, and legal validity.',
      icon: FileText,
      primaryColor: '#059669',
      badgeBg: '#059669',
      arcColor: 'rgba(5, 150, 105, 0.4)',
      haloBg: 'radial-gradient(circle, rgba(209, 250, 229, 0.85) 0%, rgba(236, 253, 245, 0.4) 65%, transparent 75%)',
      circleBg: '#ecfdf5',
      barColor: '#059669'
    }
  ];

  return (
    <section style={{
      paddingTop: '92px',
      paddingBottom: '100px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fbfe 100%)',
      borderBottom: '1px solid #e1ecf9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* =========================================================================
            CENTERED HEADER
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 68px auto' }}>
          
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
              Simple 3-Step Journey
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
            How Wyt Works
          </h2>

          {/* Description */}
          <p style={{
            fontSize: '1.1rem',
            color: '#556980',
            lineHeight: 1.6,
            margin: 0
          }}>
            Discover how easy it is to research and verify trademark records in seconds.
          </p>
        </div>

        {/* =========================================================================
            3-STEP HORIZONTAL CONNECTED TIMELINE WITH ENLARGED UPPER ARCS
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '40px',
          position: 'relative'
        }}>
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  padding: '0 10px'
                }}
              >
                
                {/* Horizontal Dotted Connector Line */}
                {idx < 2 && (
                  <div className="hide-mobile" style={{
                    position: 'absolute',
                    top: '84px',
                    left: 'calc(50% + 80px)',
                    width: 'calc(100% - 160px)',
                    height: '2px',
                    borderTop: `2px dashed ${item.primaryColor}`,
                    opacity: 0.35,
                    zIndex: 1
                  }}>
                    {/* Glowing Connector Node Dot */}
                    <div style={{
                      position: 'absolute',
                      right: '-4px',
                      top: '-4px',
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      background: item.primaryColor,
                      boxShadow: `0 0 10px ${item.primaryColor}`
                    }} />
                  </div>
                )}

                {/* Top Interactive Circle Assembly with Enlarged Upper Curve */}
                <div style={{
                  position: 'relative',
                  width: '168px',
                  height: '168px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                  zIndex: 2
                }}>
                  
                  {/* Enlarged Outer Semi-Circular Arc (Bigger Radius & Prominence) */}
                  <svg
                    width="168"
                    height="168"
                    viewBox="0 0 168 168"
                    fill="none"
                    style={{ position: 'absolute', inset: 0, overflow: 'visible' }}
                  >
                    <path
                      d="M 14 96 A 70 70 0 0 1 154 96"
                      stroke={item.arcColor}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Top Step Number Pill Badge positioned atop the arch */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: item.badgeBg,
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.16)',
                    zIndex: 4,
                    border: '2px solid #ffffff'
                  }}>
                    {item.step}
                  </div>

                  {/* Ambient Radiant Halo */}
                  <div style={{
                    position: 'absolute',
                    width: '126px',
                    height: '126px',
                    borderRadius: '50%',
                    background: item.haloBg,
                    zIndex: 1
                  }} />

                  {/* Center Rounded Circle with Icon */}
                  <div style={{
                    position: 'relative',
                    width: '94px',
                    height: '94px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `2px solid ${item.arcColor}`,
                    boxShadow: '0 10px 28px rgba(15, 90, 162, 0.1)',
                    zIndex: 2,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.06)';
                    e.currentTarget.style.boxShadow = '0 14px 36px rgba(15, 90, 162, 0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1.0)';
                    e.currentTarget.style.boxShadow = '0 10px 28px rgba(15, 90, 162, 0.1)';
                  }}>
                    <IconComp size={38} color={item.primaryColor} />
                  </div>

                </div>

                {/* Step Title */}
                <h3 style={{
                  fontSize: '1.48rem',
                  fontWeight: '800',
                  color: '#0d1d2e',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em'
                }}>
                  {item.title}
                </h3>

                {/* Step Description */}
                <p style={{
                  fontSize: '0.96rem',
                  color: '#556980',
                  lineHeight: 1.68,
                  marginBottom: '24px',
                  maxWidth: '340px'
                }}>
                  {item.desc}
                </p>

                {/* Bottom Color-Coded Accent Line */}
                <div style={{
                  width: '52px',
                  height: '4px',
                  borderRadius: '3px',
                  background: item.barColor,
                  marginTop: 'auto'
                }} />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
