import React, { useState } from 'react';
import globeAsset from '../assets/tm_bento_jurisdiction_globe.jpg';
import metallicCardAsset from '../assets/tm_bento_metallic_card.jpg';

export default function TrademarkInfoSection({ setActiveTab }) {
  return (
    <section style={{
      paddingTop: '96px',
      paddingBottom: '112px',
      background: '#000000',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      
      {/* Subtle Ambient Radial Glows */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        left: '25%',
        width: '700px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(15, 90, 162, 0.22) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Full-width Screen Container */}
      <div style={{
        width: '100%',
        maxWidth: '1680px',
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 56px)',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* =========================================================================
            HEADER ROW: EXPANDED TITLE + PILL ACTION BUTTON
           ========================================================================= */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '48px',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
              fontWeight: '900',
              letterSpacing: '-0.04em',
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.12
            }}>
              Everything You Need to Know About a Trademark
            </h2>
          </div>

          <button
            onClick={() => {
              if (setActiveTab) setActiveTab('search');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              padding: '12px 28px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.28)',
              background: 'rgba(255, 255, 255, 0.06)',
              color: '#ffffff',
              fontSize: '0.98rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              backdropFilter: 'blur(12px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.borderColor = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
            }}
          >
            Explore all attributes &rarr;
          </button>
        </div>

        {/* =========================================================================
            EXPANDED FULL-SCREEN BENTO GRID: ENLARGED CARDS
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px'
        }} className="bento-trademark-grid">
          
          {/* =======================================================================
              CARD 1 (TOP LEFT - SPAN 4): WORDMARK & LOGO (ENLARGED)
             ======================================================================= */}
          <div style={{
            gridColumn: 'span 4',
            background: '#121418',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '270px',
            transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          className="bento-card-col4">
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
                Wordmark & Visual Logo
              </h3>
              <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                The literal trademark word, brand name, slogan, or visual figurative logo design.
              </p>
            </div>

            {/* Wordmark Preview Tag Box */}
            <div style={{
              marginTop: '28px',
              padding: '16px 20px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  padding: '5px 10px',
                  borderRadius: '8px',
                  background: '#0f5aa2',
                  fontSize: '0.82rem',
                  fontWeight: '800',
                  color: '#ffffff'
                }}>
                  TM
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#f8fafc', letterSpacing: '-0.01em' }}>
                  Wyt Trademark™
                </span>
              </div>
              <span style={{ fontSize: '0.84rem', color: '#38bdf8', fontWeight: '600' }}>
                Type: Word & Logo
              </span>
            </div>
          </div>

          {/* =======================================================================
              CARD 3 (TOP MIDDLE - SPAN 4): NICE CLASSIFICATION (ENLARGED)
             ======================================================================= */}
          <div style={{
            gridColumn: 'span 4',
            background: '#121418',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '270px',
            transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          className="bento-card-col4">
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
                Nice Classification (Classes 1–45)
              </h3>
              <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                The international Nice Classification categorizing specific goods or services.
              </p>
            </div>

            {/* Nice Class Chip Preview */}
            <div style={{
              marginTop: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                alignSelf: 'flex-end',
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#f1f5f9',
                fontSize: '0.88rem',
                fontWeight: '600',
                border: '1px solid rgba(255, 255, 255, 0.14)'
              }}>
                Class 09 &bull; Software & AI Systems
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 18px',
                borderRadius: '14px',
                background: '#191d24',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.86rem',
                color: '#94a3b8'
              }}>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#10b981' }} />
                <span>Class 42 &bull; Cloud SaaS & Research</span>
              </div>
            </div>
          </div>

          {/* =======================================================================
              CARD 4 (TOP RIGHT - SPAN 4, TALL WITH 3D GLOBE): JURISDICTION & COUNTRY (ENLARGED)
             ======================================================================= */}
          <div style={{
            gridColumn: 'span 4',
            gridRow: 'span 1',
            background: '#121418',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '36px 32px 0 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '390px',
            transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          className="bento-card-col4 bento-card-tall">
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
                Jurisdiction & Country
              </h3>
              <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: '1.6', margin: 0, maxWidth: '320px' }}>
                Official national jurisdictions, regional branch offices, and international WIPO treaties.
              </p>
            </div>

            {/* 3D Holographic Globe Asset */}
            <div style={{
              width: '100%',
              height: '240px',
              position: 'relative',
              zIndex: 1,
              marginTop: '16px'
            }}>
              <img
                src={globeAsset}
                alt="Global Jurisdiction Network"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '20px 20px 0 0',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
              />
            </div>
          </div>

          {/* =======================================================================
              CARD 2 (BOTTOM LEFT - SPAN 4, TALL PHONE MOCKUP): STATUS & DATES (ENLARGED)
             ======================================================================= */}
          <div style={{
            gridColumn: 'span 4',
            background: '#121418',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '36px 32px 0 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '490px',
            marginTop: '-120px',
            transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          className="bento-card-col4 bento-phone-card">
            
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
                Status & Important Dates
              </h3>
              <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                Legal lifecycle status from filing to registration and statutory renewal deadlines.
              </p>
            </div>

            {/* Smartphone UI Mockup inside card (Matching reference phone mockup) */}
            <div style={{
              width: '88%',
              margin: '28px auto 0 auto',
              background: '#0a0c0f',
              borderRadius: '28px 28px 0 0',
              border: '2px solid rgba(255, 255, 255, 0.14)',
              borderBottom: 'none',
              padding: '20px',
              boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.7)'
            }}>
              
              {/* Phone Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.84rem', color: '#94a3b8' }}>&lsaquo; Trademark Timeline</span>
                <span style={{
                  fontSize: '0.74rem',
                  fontWeight: '700',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.22)',
                  color: '#34d399',
                  border: '1px solid rgba(52, 211, 153, 0.35)'
                }}>
                  ● REGISTERED
                </span>
              </div>

              {/* Status Box */}
              <div style={{
                background: '#16191f',
                borderRadius: '14px',
                padding: '14px',
                marginBottom: '14px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ fontSize: '0.76rem', color: '#64748b', marginBottom: '3px' }}>Filing Reference</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#ffffff' }}>APP-2023-889410</div>
              </div>

              {/* Milestones */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem', color: '#94a3b8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Filing Date</span>
                  <strong style={{ color: '#e2e8f0' }}>Oct 12, 2022</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Registration</span>
                  <strong style={{ color: '#e2e8f0' }}>Nov 26, 2023</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Next Renewal</span>
                  <strong style={{ color: '#38bdf8' }}>Nov 26, 2033</strong>
                </div>
              </div>

              {/* Toggle row */}
              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                color: '#cbd5e1'
              }}>
                <span>Expiry Auto-Alert</span>
                <span style={{ width: '32px', height: '18px', borderRadius: '12px', background: '#0284c7', display: 'inline-block', position: 'relative' }}>
                  <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ffffff', position: 'absolute', right: '2px', top: '2px' }} />
                </span>
              </div>

            </div>

          </div>

          {/* =======================================================================
              CARD 5 (BOTTOM WIDE CARD - SPAN 8): OWNER & CERTIFICATES (ENLARGED)
             ======================================================================= */}
          <div style={{
            gridColumn: 'span 8',
            background: '#121418',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '36px 36px 28px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '370px',
            gap: '32px',
            transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          className="bento-card-col8">
            
            {/* Left Content */}
            <div style={{ maxWidth: '380px', zIndex: 2 }}>
              <h3 style={{ fontSize: '1.55rem', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
                Owner & Certificate Identifiers
              </h3>
              <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: '1.65', marginBottom: '24px' }}>
                Information about legal proprietors, official filing serials, and certified registration numbers granted by patent & trademark offices.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#38bdf8' }} />
                  <strong>Proprietor:</strong> Corporate & Individual Assignees
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#38bdf8' }} />
                  <strong>Certificates:</strong> Verified Digital Registration IDs
                </div>
              </div>
            </div>

            {/* Right Metallic Card 3D Asset */}
            <div style={{
              flex: 1,
              maxWidth: '440px',
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={metallicCardAsset}
                alt="3D Metallic Trademark Certificate Card"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '20px',
                  boxShadow: '0 16px 44px rgba(0, 0, 0, 0.75)',
                  transform: 'rotate(-2deg) scale(1.05)',
                  transition: 'transform 0.4s ease'
                }}
              />
            </div>

          </div>

        </div>

      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .bento-trademark-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-card-col4,
          .bento-card-col8,
          .bento-phone-card {
            grid-column: span 12 !important;
            margin-top: 0 !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
