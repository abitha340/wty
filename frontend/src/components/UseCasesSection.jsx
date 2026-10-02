import React from 'react';
import { Search, Compass, Scale, ShieldCheck, BarChart3, Layers, ArrowRight, Sparkles } from 'lucide-react';
import search3d from '../assets/usecase_search_3d.png';
import brand3d from '../assets/usecase_brand_3d.png';
import legal3d from '../assets/usecase_legal_3d.png';
import mgmt3d from '../assets/usecase_mgmt_3d.png';
import business3d from '../assets/usecase_business_3d.png';
import platforms3d from '../assets/usecase_platforms_3d.png';

export default function UseCasesSection({ onNavigateSearch }) {
  const useCases = [
    {
      id: 'search',
      title: 'Trademark Search',
      desc: 'Quickly find, verify, and explore trademark records across brand names and application numbers.',
      icon: Search,
      artwork: search3d,
      sampleQuery: 'NIKE'
    },
    {
      id: 'brand',
      title: 'Brand Research',
      desc: 'Research existing commercial brand names and mark availability before launching new products.',
      icon: Compass,
      artwork: brand3d,
      sampleQuery: 'APPLE'
    },
    {
      id: 'legal',
      title: 'Legal & IP Research',
      desc: 'Support trademark clearance, conflict detection, and intellectual property due-diligence workflows.',
      icon: Scale,
      artwork: legal3d,
      sampleQuery: 'GOOGLE'
    },
    {
      id: 'mgmt',
      title: 'Brand Management',
      desc: 'Help businesses monitor their trademark portfolios, renewal milestones, and registered classes.',
      icon: ShieldCheck,
      artwork: mgmt3d,
      sampleQuery: 'TATA'
    },
    {
      id: 'business',
      title: 'Business Research',
      desc: 'Analyze competitor brand filings and industry expansion trends as part of commercial market research.',
      icon: BarChart3,
      artwork: business3d,
      sampleQuery: 'SWIGGY'
    },
    {
      id: 'platforms',
      title: 'Trademark Platforms',
      desc: 'Incorporate structured trademark intelligence into company incorporation and naming workflows.',
      icon: Layers,
      artwork: platforms3d,
      sampleQuery: 'INFOSYS'
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
      
      {/* Top Left Section Number Pill '01' */}
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
        01
      </div>

      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px' }}>
        
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
              padding: '7px 18px',
              borderRadius: '20px',
              background: '#e1ecf9',
              color: '#0f5aa2',
              fontSize: '0.84rem',
              fontWeight: '700'
            }}>
              <Sparkles size={15} color="#0f5aa2" />
              <span>Tailored Applications</span>
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
            Built for <span style={{ color: '#0f5aa2' }}>Trademark Research</span>
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.1rem',
            color: '#556980',
            lineHeight: 1.65,
            margin: 0
          }}>
            Designed for business owners, legal researchers, brand managers, and companies exploring trademark data.
          </p>
        </div>

        {/* =========================================================================
            6 USE CASE CARDS GRID (3 COLUMNS x 2 ROWS)
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {useCases.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onNavigateSearch ? onNavigateSearch(item.sampleQuery) : null}
                style={{
                  background: '#ffffff',
                  borderRadius: '22px',
                  padding: '28px 26px',
                  border: '1.5px solid #e1ecf9',
                  boxShadow: '0 6px 20px rgba(15, 90, 162, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#0f5aa2';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(15, 90, 162, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e1ecf9';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 90, 162, 0.05)';
                }}
              >
                
                {/* Top Row: Icon on Left & 3D Illustration on Right */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '18px'
                }}>
                  
                  {/* Left Rounded Icon Box */}
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: '#f0f6fc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e1ecf9',
                    boxShadow: '0 2px 8px rgba(15, 90, 162, 0.06)'
                  }}>
                    <IconComp size={22} color="#0f5aa2" />
                  </div>

                  {/* Right 3D Visual Artwork */}
                  <div style={{
                    width: '84px',
                    height: '84px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img
                      src={item.artwork}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply'
                      }}
                    />
                  </div>

                </div>

                {/* Middle Content: Title & Description */}
                <div>
                  <h3 style={{
                    fontSize: '1.16rem',
                    fontWeight: '800',
                    color: '#0d1d2e',
                    marginBottom: '8px',
                    lineHeight: 1.25
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: '#556980',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                    maxWidth: '320px'
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Row: Right-aligned Arrow Action Button */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: 'auto'
                }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: '#e1ecf9',
                    color: '#0f5aa2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}>
                    <ArrowRight size={16} />
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
