import React, { useState } from 'react';
import globeAsset from '../assets/tm_bento_jurisdiction_globe.jpg';
import metallicCardAsset from '../assets/tm_bento_metallic_card.jpg';

export default function TrademarkInfoSection({ setActiveTab }) {
  const [activeTabSample, setActiveTabSample] = useState('wordmark');

  return (
    <section style={{
      paddingTop: '80px',
      paddingBottom: '96px',
      background: '#000000',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Subtle Ambient Radial Glows */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '20%',
        width: '500px',
        height: '300px',
        background: 'radial-gradient(ellipse at center, rgba(15, 90, 162, 0.18) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* =========================================================================
            HEADER ROW: TITLE + ACTION BUTTON (MATCHING REFERENCE AESTHETICS)
           ========================================================================= */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
              fontWeight: '900',
              letterSpacing: '-0.035em',
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.15
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
              padding: '10px 22px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.28)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#ffffff',
              fontSize: '0.92rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.borderColor = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
            }}
          >
            Explore all attributes
          </button>
        </div>

        {/* =========================================================================
            BENTO GRID LAYOUT: 3 COLUMNS OF ASYMMETRIC SIZED CARDS
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '20px'
        }} className="bento-trademark-grid">
          
          {/* =======================================================================
              CARD 1 (TOP LEFT - SPAN 4): WORDMARK & LOGO
             ======================================================================= */}
          <div style={{
            gridColumn: 'span 4',
            background: '#131518',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '230px',
            transition: 'border-color 0.3s ease, transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          className="bento-card-col4">
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                Wordmark & Visual Logo
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                The literal trademark word, brand name, slogan, or visual figurative logo design.
              </p>
            </div>

            {/* Wordmark Preview Tag Box */}
            <div style={{
              marginTop: '20px',
              padding: '12px 16px',
              borderRadius: '14px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  background: '#0f5aa2',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  color: '#ffffff'
                }}>
                  TM
                </span>
                <span style={{ fontSize: '0.96rem', fontWeight: '700', color: '#f8fafc', letterSpacing: '-0.01em' }}>
                  Wyt Trademark™
                </span>
              </div>
              <span style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: '600' }}>
                Type: Word & Logo
              </span>
            </div>
          </div>

          {/* =======================================================================
              CARD 3 (TOP MIDDLE - SPAN 4): NICE CLASSIFICATION
             ======================================================================= */}
          <div style={{
            gridColumn: 'span 4',
            background: '#131518',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '230px',
            transition: 'border-color 0.3s ease, transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          className="bento-card-col4">
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                Nice Classification (Classes 1–45)
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                The international Nice Classification categorizing specific goods or services.
              </p>
            </div>

            {/* Nice Class Chip Preview */}
            <div style={{
              marginTop: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                alignSelf: 'flex-end',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#e2e8f0',
                fontSize: '0.82rem',
                fontWeight: '600',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}>
                Class 09 &bull; Software & AI Systems
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '12px',
                background: '#1a1d22',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                fontSize: '0.8rem',
                color: '#94a3b8'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                <span>Class 42 &bull; Cloud SaaS & Research</span>
              </div>
            </div>
          </div>

          {/* =======================================================================
              CARD 4 (TOP RIGHT - SPAN 4, TALL CARD WITH 3D GLOBE BACKGROUND): JURISDICTION & COUNTRY
             ======================================================================= */}
          <div style={{
            gridColumn: 'span 4',
            gridRow: 'span 1',
            background: '#131518',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '28px 28px 0 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '340px',
            transition: 'border-color 0.3s ease, transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          className="bento-card-col4 bento-card-tall">
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                Jurisdiction & Country
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.5', margin: 0, maxWidth: '280px' }}>
                Official national jurisdictions, regional branch offices, and international WIPO treaties.
              </p>
            </div>

            {/* 3D Holographic Globe Asset */}
            <div style={{
              width: '100%',
              height: '200px',
              position: 'relative',
              zIndex: 1,
              marginTop: '12px'
            }}>
              <img
                src={globeAsset}
                alt="Global Jurisdiction Network"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '16px 16px 0 0',
                  maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
                }}
              />
            </div>
          </div>

          {/* =======================================================================
              CARD 2 (BOTTOM LEFT - SPAN 4, TALL WITH PHONE TIMELINE): STATUS & STATUTORY DATES
             ======================================================================= */}
          <div style={{
            gridColumn: 'span 4',
            background: '#131518',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '28px 28px 0 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '430px',
            marginTop: '-110px',
            transition: 'border-color 0.3s ease, transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          className="bento-card-col4 bento-phone-card">
            
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                Status & Important Dates
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                Legal lifecycle status from filing to registration and statutory renewal deadlines.
              </p>
            </div>

            {/* Smartphone UI Mockup inside card (Matching reference phone mockup) */}
            <div style={{
              width: '84%',
              margin: '24px auto 0 auto',
              background: '#0d0e11',
              borderRadius: '24px 24px 0 0',
              border: '2px solid rgba(255, 255, 255, 0.12)',
              borderBottom: 'none',
              padding: '16px',
              boxShadow: '0 -8px 24px rgba(0, 0, 0, 0.6)'
            }}>
              
              {/* Phone Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>&lsaquo; Trademark Timeline</span>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34d399',
                  border: '1px solid rgba(52, 211, 153, 0.3)'
                }}>
                  ● REGISTERED
                </span>
              </div>

              {/* Status Box */}
              <div style={{
                background: '#17191e',
                borderRadius: '12px',
                padding: '12px',
                marginBottom: '10px',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '2px' }}>Filing Reference</div>
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#ffffff' }}>APP-2023-889410</div>
              </div>

              {/* Milestones */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.75rem', color: '#94a3b8' }}>
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
                marginTop: '12px',
                paddingTop: '8px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.72rem',
                color: '#cbd5e1'
              }}>
                <span>Expiry Auto-Alert</span>
                <span style={{ width: '28px', height: '16px', borderRadius: '10px', background: '#0284c7', display: 'inline-block', position: 'relative' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffffff', position: 'absolute', right: '2px', top: '2px' }} />
                </span>
              </div>

            </div>

          </div>

          {/* =======================================================================
              CARD 5 (BOTTOM WIDE CARD - SPAN 8): OWNER, APPLICATION & CERTIFICATE
             ======================================================================= */}
          <div style={{
            gridColumn: 'span 8',
            background: '#131518',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '28px 28px 20px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '320px',
            gap: '24px',
            transition: 'border-color 0.3s ease, transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          className="bento-card-col8">
            
            {/* Left Content */}
            <div style={{ maxWidth: '340px', zIndex: 2 }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
                Owner & Certificate Identifiers
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
                Information about legal proprietors, official filing serials, and certified registration numbers granted by patent & trademark offices.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#e2e8f0' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }} />
                  <strong>Proprietor:</strong> Corporate & Individual Assignees
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#e2e8f0' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }} />
                  <strong>Certificates:</strong> Verified Digital Registration IDs
                </div>
              </div>
            </div>

            {/* Right Metallic Card 3D Asset (Matching reference Mastercard graphic) */}
            <div style={{
              flex: 1,
              maxWidth: '380px',
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
                  borderRadius: '16px',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.7)',
                  transform: 'rotate(-2deg) scale(1.04)',
                  transition: 'transform 0.4s ease'
                }}
              />
            </div>

          </div>

        </div>

      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 992px) {
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
