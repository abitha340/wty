import React from 'react';
import { Tag, Hash, FileText, Building2, Layers, ShieldCheck, Globe, Calendar } from 'lucide-react';
import docIllustration from '../assets/modern_tm_document.png';

export default function TrademarkInfoSection() {
  const attributes = [
    {
      id: 'trademark',
      title: 'Trademark',
      desc: 'The name, representation, wordmark, or brand phrase filed in the registry.',
      icon: Tag
    },
    {
      id: 'application_no',
      title: 'Application Number',
      desc: 'The unique statutory application identifier assigned upon initial government filing.',
      icon: Hash
    },
    {
      id: 'trademark_no',
      title: 'Trademark Number',
      desc: 'The formal registration certificate identifier issued upon granting.',
      icon: FileText
    },
    {
      id: 'owner',
      title: 'Owner / Proprietor',
      desc: 'Information about the company, organization, or individual holding legal ownership.',
      icon: Building2
    },
    {
      id: 'class',
      title: 'Class',
      desc: 'The international Nice Classification (Classes 1 to 45) categorizing goods or services.',
      icon: Layers
    },
    {
      id: 'status',
      title: 'Status',
      desc: 'The current legal lifecycle state: Registered, Pending Examination, Objected, or Opposed.',
      icon: ShieldCheck
    },
    {
      id: 'country',
      title: 'Country',
      desc: 'The official jurisdiction and regional branch office handling the trademark filing.',
      icon: Globe
    },
    {
      id: 'dates',
      title: 'Important Dates',
      desc: 'Key statutory dates including filing date, publication date, registration date, and renewal deadlines.',
      icon: Calendar
    }
  ];

  return (
    <section style={{
      paddingTop: '88px',
      paddingBottom: '96px',
      background: '#ffffff',
      borderBottom: '1px solid #e1ecf9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* =========================================================================
            2-COLUMN GRID: LEFT = HEADER & 2x4 ATTRIBUTES | RIGHT = SEAMLESS 3D TM DOCUMENT
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          
          {/* =========================================================================
              LEFT COLUMN: HEADER & 8 STRUCTURED ATTRIBUTES (2-COL SUBGRID)
             ========================================================================= */}
          <div>
            
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
                Structured Data Attributes
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
              fontWeight: '900',
              letterSpacing: '-0.035em',
              color: '#0d1d2e',
              marginBottom: '16px',
              lineHeight: 1.15
            }}>
              Everything You Need to<br />
              Know About a Trademark
            </h2>

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              color: '#556980',
              lineHeight: 1.65,
              marginBottom: '40px',
              maxWidth: '620px'
            }}>
              Explore structured trademark information in one place, from basic trademark details to ownership, classification, status, country, and important dates.
            </p>

            {/* 2x4 Sub-Grid for Attributes */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px 28px'
            }}>
              {attributes.map((attr) => {
                const IconComp = attr.icon;
                return (
                  <div
                    key={attr.id}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    {/* Icon Box */}
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#f0f6fc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid #e1ecf9',
                      boxShadow: '0 2px 6px rgba(15, 90, 162, 0.04)'
                    }}>
                      <IconComp size={20} color="#0f5aa2" />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '800',
                        color: '#0d1d2e',
                        marginBottom: '4px',
                        lineHeight: 1.25
                      }}>
                        {attr.title}
                      </h4>
                      <p style={{
                        fontSize: '0.84rem',
                        color: '#687d94',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {attr.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: SEAMLESSLY BLENDED 3D TM DOCUMENT WITH SOFT AURA
             ========================================================================= */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '440px'
          }}>
            
            {/* Soft Ambient Radial Glow merging with the page */}
            <div style={{
              position: 'absolute',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(ellipse at center, rgba(225, 236, 249, 0.65) 0%, rgba(240, 246, 252, 0.3) 50%, rgba(255, 255, 255, 0) 75%)',
              pointerEvents: 'none',
              zIndex: 1
            }} />

            {/* Floating Document Container */}
            <div style={{
              width: '100%',
              maxWidth: '580px',
              position: 'relative',
              zIndex: 2,
              animation: 'subtleDocFloat 5s ease-in-out infinite'
            }}>
              <img
                src={docIllustration}
                alt="Modern Trademark Document Illustration"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 75%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 75%, transparent 100%)'
                }}
              />
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes subtleDocFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
