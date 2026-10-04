import React, { useState, useEffect, useRef } from 'react';
import { Database, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

export default function DatasetSection({ onNavigateSearch }) {
  const [count20, setCount20] = useState(0);
  const [count100, setCount100] = useState(0);
  const [count15, setCount15] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters over 2000ms
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic: 1 - (1 - progress)^3
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCount20(Math.floor(easeOut * 20));
            setCount100(Math.floor(easeOut * 100));
            setCount15(Math.floor(easeOut * 15));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount20(20);
              setCount100(100);
              setCount15(15);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: '96px',
        paddingBottom: '104px',
        background: 'rgb(244, 232, 227)',
        color: '#1a1816',
        position: 'relative',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      <div className="container" style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 48px)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
          <span style={{
            display: 'inline-block',
            padding: '7px 20px',
            borderRadius: '9999px',
            background: 'rgba(0, 0, 0, 0.06)',
            color: '#1a1816',
            fontSize: '0.88rem',
            fontWeight: '700',
            letterSpacing: '-0.01em',
            border: '1px solid rgba(0, 0, 0, 0.08)'
          }}>
            Comprehensive Catalog Coverage
          </span>
        </div>

        {/* Section Heading */}
        <h2 style={{
          fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
          fontWeight: '900',
          letterSpacing: '-0.035em',
          marginBottom: '18px',
          color: '#1a1816',
          lineHeight: 1.15
        }}>
          Explore Millions of Trademark Records
        </h2>

        {/* Section Description */}
        <p style={{
          fontSize: '1.12rem',
          color: '#5c544e',
          lineHeight: 1.65,
          marginBottom: '48px',
          maxWidth: '720px',
          margin: '0 auto 48px auto'
        }}>
          Wyt brings structured trademark information together in one place, making it easier to search, explore, and understand trademark records with instant speed.
        </p>

        {/* Large Visual Statistic Tile with Dynamic Count-Up Numbers */}
        <div style={{
          background: '#ffffff',
          borderRadius: '28px',
          padding: '48px 36px',
          boxShadow: '0 20px 48px rgba(70, 50, 40, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '44px'
        }} className="dataset-stats-grid">
          
          {/* Stat 1: 20+ Lakh */}
          <div>
            <div style={{
              fontSize: 'clamp(2.8rem, 4.2vw, 4rem)',
              fontWeight: '900',
              color: '#083866',
              letterSpacing: '-0.03em',
              lineHeight: 1
            }}>
              {count20}+ Lakh
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1a1816', marginTop: '12px' }}>
              Trademark Records
            </div>
            <div style={{ fontSize: '0.88rem', color: '#736b64', marginTop: '4px' }}>
              Classes 1 to 45
            </div>
          </div>

          {/* Stat 2: 100% */}
          <div className="stat-middle-col" style={{
            borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
            borderRight: '1px solid rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{
              fontSize: 'clamp(2.8rem, 4.2vw, 4rem)',
              fontWeight: '900',
              color: '#083866',
              letterSpacing: '-0.03em',
              lineHeight: 1
            }}>
              {count100}%
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1a1816', marginTop: '12px' }}>
              Structured Data
            </div>
            <div style={{ fontSize: '0.88rem', color: '#736b64', marginTop: '4px' }}>
              Normalized Fields
            </div>
          </div>

          {/* Stat 3: < 15ms */}
          <div>
            <div style={{
              fontSize: 'clamp(2.8rem, 4.2vw, 4rem)',
              fontWeight: '900',
              color: '#083866',
              letterSpacing: '-0.03em',
              lineHeight: 1
            }}>
              &lt; {count15}ms
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1a1816', marginTop: '12px' }}>
              High-Speed Execution
            </div>
            <div style={{ fontSize: '0.88rem', color: '#736b64', marginTop: '4px' }}>
              Instant Search Delivery
            </div>
          </div>

        </div>

        {/* Primary CTA Button */}
        <button
          onClick={onNavigateSearch}
          style={{
            padding: '16px 36px',
            fontSize: '1.05rem',
            fontWeight: '800',
            borderRadius: '16px',
            background: '#083866',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 10px 24px rgba(8, 56, 102, 0.28)',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 14px 32px rgba(8, 56, 102, 0.4)';
            e.currentTarget.style.background = '#0c4d87';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 24px rgba(8, 56, 102, 0.28)';
            e.currentTarget.style.background = '#083866';
          }}
        >
          <span>Search the 20L+ Catalog</span>
          <ArrowRight size={18} />
        </button>

      </div>

      <style>{`
        @media (max-width: 820px) {
          .dataset-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .stat-middle-col {
            border-left: none !important;
            border-right: none !important;
            border-top: 1px solid rgba(0, 0, 0, 0.08) !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
            padding: 24px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
