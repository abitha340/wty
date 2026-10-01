import React, { useState, useEffect } from 'react';
import { 
  Scale, Layers, Sparkles, Building2, BarChart3, ArrowRight, 
  ShieldCheck, Globe, Cpu, RotateCw, Play, Pause, ChevronLeft, ChevronRight 
} from 'lucide-react';

export default function UseCaseSection({ setActiveTab }) {
  const [isRotating, setIsRotating] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [manualRotation, setManualRotation] = useState(0);

  const workflows = [
    {
      id: 1,
      title: "Legal & IP Platforms",
      subtitle: "TRADEMARK CLEARANCE",
      desc: "Add instant trademark conflict monitoring, watch services, and official IP gazette lookups directly to legal workflows.",
      icon: Scale,
      color: "var(--teal)",
      bgGradient: "linear-gradient(135deg, rgba(57, 174, 169, 0.28) 0%, rgba(13, 23, 26, 0.9) 100%)",
      badge: "Automated Search"
    },
    {
      id: 2,
      title: "SaaS & Brand Tools",
      subtitle: "AVAILABILITY CHECKS",
      desc: "Integrate real-time brand availability checks into domain registrars, logo generators, and business incorporation tools.",
      icon: Layers,
      color: "var(--mint)",
      bgGradient: "linear-gradient(135deg, rgba(162, 213, 171, 0.25) 0%, rgba(13, 23, 26, 0.9) 100%)",
      badge: "Sub-15ms Speed"
    },
    {
      id: 3,
      title: "Brand Asset Portals",
      subtitle: "PORTFOLIO INTELLIGENCE",
      desc: "Connect live registered trademark data with brand asset management, licensing, and merchandising compliance systems.",
      icon: Sparkles,
      color: "var(--cream)",
      bgGradient: "linear-gradient(135deg, rgba(229, 239, 193, 0.22) 0%, rgba(13, 23, 26, 0.9) 100%)",
      badge: "Brand Security"
    },
    {
      id: 4,
      title: "Enterprise ERP & M&A",
      subtitle: "IP DUE DILIGENCE",
      desc: "Audit corporate trademark portfolios, parent-subsidiary holdings, and commercial brand valuations across 45 classes.",
      icon: Building2,
      color: "var(--teal)",
      bgGradient: "linear-gradient(135deg, rgba(85, 123, 131, 0.3) 0%, rgba(13, 23, 26, 0.9) 100%)",
      badge: "Corporate Rollup"
    },
    {
      id: 5,
      title: "FinTech & Payments",
      subtitle: "STATUTORY COMPLIANCE",
      desc: "Verify merchant business names, trade identities, and registered trademarks against official government registries.",
      icon: ShieldCheck,
      color: "var(--mint)",
      bgGradient: "linear-gradient(135deg, rgba(162, 213, 171, 0.28) 0%, rgba(13, 23, 26, 0.9) 100%)",
      badge: "Zero Direct DB"
    },
    {
      id: 6,
      title: "Analytics & Research",
      subtitle: "CATALOG INTELLIGENCE",
      desc: "Query industry trademark volume trends, Nice class density, and patent-to-trademark filing lifecycle analytics.",
      icon: BarChart3,
      color: "var(--teal)",
      bgGradient: "linear-gradient(135deg, rgba(57, 174, 169, 0.25) 0%, rgba(13, 23, 26, 0.9) 100%)",
      badge: "20L+ Indexed"
    }
  ];

  const totalCards = workflows.length;
  const angleStep = 360 / totalCards;
  const cylinderRadius = 380; // Distance from center in 3D space

  const handleNext = () => {
    setManualRotation(prev => prev - angleStep);
    setActiveCardIndex(prev => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setManualRotation(prev => prev + angleStep);
    setActiveCardIndex(prev => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <section style={{
      padding: '90px 0 100px 0',
      borderTop: '1px solid var(--border-subtle)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background ambient radial lights */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(57, 174, 169, 0.12) 0%, rgba(162, 213, 171, 0.04) 50%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(50px)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <div className="badge badge-mint" style={{ marginBottom: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} color="var(--teal)" />
            <span>Built for Enterprise Workflows</span>
          </div>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '800', letterSpacing: '-0.025em', marginBottom: '14px', color: 'var(--text-title)' }}>
            From Search to <span className="gradient-text-teal">Your Product</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Seamlessly integrate 20L+ structured trademark records into any business workflow, legal platform, or SaaS application with sub-15ms speed.
          </p>
        </div>

        {/* 3D CYLINDER RIBBON CAROUSEL WRAPPER */}
        <div 
          style={{
            position: 'relative',
            height: '460px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1400px',
            marginBottom: '40px'
          }}
          onMouseEnter={() => setIsRotating(false)}
          onMouseLeave={() => setIsRotating(true)}
        >
          
          {/* 3D Rotating Cylinder Ring */}
          <div 
            className="cylinder-3d-ring"
            style={{
              position: 'relative',
              width: '320px',
              height: '320px',
              transformStyle: 'preserve-3d',
              transform: `rotateX(-12deg) rotateZ(3deg) rotateY(${manualRotation}deg)`,
              animation: isRotating ? 'spinCylinderRing 38s linear infinite' : 'none',
              transition: isRotating ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {workflows.map((wf, idx) => {
              const Icon = wf.icon;
              const cardAngle = idx * angleStep;

              return (
                <div
                  key={wf.id}
                  onClick={() => setActiveCardIndex(idx)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '300px',
                    height: '240px',
                    borderRadius: '24px',
                    background: wf.bgGradient,
                    border: '1.5px solid var(--border-focus)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    padding: '26px 22px',
                    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                    transform: `rotateY(${cardAngle}deg) translateZ(${cylinderRadius}px)`,
                    backfaceVisibility: 'visible',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'all 0.35s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--teal)';
                    e.currentTarget.style.boxShadow = '0 25px 50px -10px rgba(57, 174, 169, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-focus)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
                  }}
                >
                  {/* Top Bar with Orbital Icon Badge (matching reference image) */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(57, 174, 169, 0.4) 0%, rgba(13, 23, 26, 0.8) 100%)',
                      border: '1.5px solid var(--teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 0 15px rgba(57, 174, 169, 0.4)'
                    }}>
                      <Icon size={22} />
                    </div>

                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: '800',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: 'rgba(229, 239, 193, 0.2)',
                      color: 'var(--cream)',
                      border: '1px solid rgba(229, 239, 193, 0.4)',
                      letterSpacing: '0.04em'
                    }}>
                      {wf.badge}
                    </span>
                  </div>

                  {/* Middle: Title & Subtitle */}
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                      {wf.subtitle}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-title)', letterSpacing: '-0.01em', marginBottom: '8px', lineHeight: 1.25 }}>
                      {wf.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0 }}>
                      {wf.desc}
                    </p>
                  </div>

                  {/* Bottom: Status Pill */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--teal)', fontWeight: '700' }}>
                    <span>⚡ Air-Gapped Flow</span>
                    <span style={{ color: 'var(--text-dim)' }}>0{idx + 1}/0{totalCards}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Carousel Control Bar & Interactive Status */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '50px'
        }}>
          <button
            onClick={handlePrev}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-title)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Rotate Left"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => setIsRotating(!isRotating)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '9999px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-focus)',
              color: 'var(--text-title)',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            {isRotating ? <Pause size={14} color="var(--teal)" /> : <Play size={14} fill="var(--teal)" color="var(--teal)" />}
            <span>{isRotating ? "3D Continuous Ribbon Active (Hover to pause)" : "Click to Resume 3D Rotation"}</span>
          </button>

          <button
            onClick={handleNext}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-title)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Rotate Right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Callout Action Banner */}
        <div className="glass-panel" style={{
          padding: '36px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-focus)',
          borderRadius: '22px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <div className="badge badge-mint" style={{ marginBottom: '8px' }}>
              Instant Integration
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '4px', color: 'var(--text-title)' }}>
              Ready to integrate trademark data into your enterprise product?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', margin: 0 }}>
              Generate your API key in seconds and run authenticated queries with sub-15ms guaranteed SLA.
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('dashboard')}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '0.95rem' }}
          >
            <span>Launch Developer Portal</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

      <style>{`
        @keyframes spinCylinderRing {
          0% {
            transform: rotateX(-12deg) rotateZ(3deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(-12deg) rotateZ(3deg) rotateY(360deg);
          }
        }
        .cylinder-3d-ring:hover {
          animation-play-state: paused !important;
        }
      `}</style>

    </section>
  );
}
