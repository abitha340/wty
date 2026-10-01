import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Database, Layers, ShieldCheck, Zap, ArrowDown, Check, 
  CheckCircle2, Globe, FileText, Filter, Tag, Hash, Building2, 
  Calendar, ListChecks, ArrowRight, Play, Sparkles, ChevronRight, ChevronLeft,
  Fish, Anchor, Compass, Target, Waves, Send, RefreshCw, Cpu
} from 'lucide-react';

export default function FeaturesSection({ onRunDemoSearch }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeModeTab, setActiveModeTab] = useState('startswith');
  const [isCasting, setIsCasting] = useState(false);
  const [activePipelineStage, setActivePipelineStage] = useState(1);
  const [isSimulatingRequest, setIsSimulatingRequest] = useState(false);
  const stackContainerRef = useRef(null);

  const handleSimulateRequest = () => {
    if (isSimulatingRequest) return;
    setIsSimulatingRequest(true);
    setActivePipelineStage(1);
    let step = 1;
    const timer = setInterval(() => {
      step += 1;
      if (step <= 5) {
        setActivePipelineStage(step);
      } else {
        clearInterval(timer);
        setIsSimulatingRequest(false);
      }
    }, 900);
  };

  const pipelineStages = [
    {
      id: 1,
      title: "01. Search Request",
      sub: "User Query",
      icon: Search,
      desc: "Your application initiates a search for target trademark 'NIKE'. The search parameters are transmitted securely via encrypted HTTPS.",
      badge: "Encrypted Request",
      details: {
        label: "Search Parameter",
        query: "NIKE",
        category: "Class 25 · Footwear & Apparel",
        filter: "Active Trademarks Only",
        mode: "Exact & Prefix Match"
      }
    },
    {
      id: 2,
      title: "02. Security Gateway",
      sub: "Access Verification",
      icon: ShieldCheck,
      desc: "Wyt's gateway validates the session and rate limits in sub-2ms. Direct database connection strings remain completely isolated and sealed.",
      badge: "Zero DB Exposure",
      details: {
        label: "Security Shield",
        status: "Session Verified",
        protection: "Database Ports Sealed (Port 5432 Closed)",
        isolation: "100% Air-Gapped Private VPC",
        rateLimit: "100 Requests/sec Protected"
      }
    },
    {
      id: 3,
      title: "03. Catalog Indexing",
      sub: "High-Speed Scan",
      icon: Cpu,
      desc: "The query scans across 20L+ indexed trademark records using our specialized phonetic and prefix search engine in under 12ms.",
      badge: "20L+ Indexed",
      details: {
        label: "Registry Search",
        indexedRecords: "20,00,000+ Trademarks",
        matchedCount: "142 Matching Marks Found",
        lookupTime: "11.4ms Scan Latency",
        jurisdiction: "IP India & Global Registry"
      }
    },
    {
      id: 4,
      title: "04. Normalized Trademark Data",
      sub: "Data Assembly",
      icon: CheckCircle2,
      desc: "Raw trademark registry data is cleaned, validated, and packaged into a structured, user-friendly profile with all 8 core attributes.",
      badge: "Structured Output",
      details: {
        label: "Structured Trademark Record",
        markName: "NIKE",
        owner: "Nike Innovate C.V.",
        trademarkClass: "Class 25 (Footwear & Apparel)",
        status: "Registered & Active",
        appNumber: "4589201"
      }
    },
    {
      id: 5,
      title: "05. Live UI Delivery",
      sub: "Instant Display",
      icon: Sparkles,
      desc: "Clean trademark information is delivered straight to your user interface, ready for instant viewing with zero database exposure.",
      badge: "Instant Delivery",
      details: {
        label: "Delivery Complete",
        uiStatus: "Rendered in UI",
        dbCredentialsExposed: "0% (Zero Credentials Shared)",
        latency: "Sub-15ms Round Trip",
        dataIntegrity: "100% Verified Registry Accuracy"
      }
    }
  ];

  const currentStageInfo = pipelineStages.find(s => s.id === activePipelineStage) || pipelineStages[0];

const attributesStack = [
    {
      id: "trademark-name",
      title: "Trademark Name & Brand Marks",
      badge: "Brand Identity",
      icon: Tag,
      color: "var(--teal)",
      query: "NIKE AIR",
      sampleValue: "NIKE AIR (Registered Mark)",
      desc: "Instant exact, prefix, and phonetic brand lookups across 20+ lakh registered, pending, and published marks.",
      benefit: "Phonetic similarity and conflicting mark clearance",
      coverage: "20L+ Brand Names & Wordmarks",
      authority: "IP India & International Registry",
      keyInsight: "Direct wordmark matching across 45 statutory classes"
    },
    {
      id: "application-number",
      title: "Application Number Resolution",
      badge: "Statutory Identifier",
      icon: Hash,
      color: "var(--mint)",
      query: "2491024",
      sampleValue: "Application #2491024 (TM-958102)",
      desc: "Deterministic statutory identifier retrieval providing the complete official IP registry file, history, and certified records.",
      benefit: "Fast deterministic lookup by filing number",
      coverage: "100% Unique Official Registry Keys",
      authority: "Statutory Gazette Records",
      keyInsight: "Instant mapping to certified registration certificates"
    },
    {
      id: "class-number",
      title: "Nice Classification (Class 1 - 45)",
      badge: "Class Taxonomy",
      icon: Layers,
      color: "var(--cream)",
      query: "42",
      sampleValue: "Class 42 · Software, Cloud & Tech Services",
      desc: "Filter and verify marks under the standardized Nice Classification system across all 45 international goods and service classes.",
      benefit: "Precise industry sector filtering",
      coverage: "All 45 Nice International Classes",
      authority: "WIPO & Nice Classification 12th Ed.",
      keyInsight: "Multi-class cross-search capabilities"
    },
    {
      id: "owner-proprietor",
      title: "Proprietor & Portfolio Holdings",
      badge: "Ownership Intelligence",
      icon: Building2,
      color: "var(--teal)",
      query: "Nike Innovate",
      sampleValue: "Nike Innovate C.V. (142 Active Marks)",
      desc: "Aggregate entire IP holdings, corporate subsidiaries, and brand portfolios registered by specific corporate entities.",
      benefit: "Complete corporate portfolio tracking",
      coverage: "Enterprise & Individual Applicants",
      authority: "Registered Proprietor Records",
      keyInsight: "Roll up parent corporations and subsidiaries"
    },
    {
      id: "statutory-status",
      title: "Statutory Legal Validity Status",
      badge: "Legal State",
      icon: ShieldCheck,
      color: "var(--mint)",
      query: "Registered",
      sampleValue: "Registered & Active (Valid through 2032)",
      desc: "Verify live statutory status: Registered, Pending Examination, Objected by Examiner, Opposed by Third Party, or Refused.",
      benefit: "Real-time legal risk & validity verification",
      coverage: "Full Statutory Lifecycle Stages",
      authority: "Official Examiner & Journal Records",
      keyInsight: "Live monitoring of contested or objected marks"
    },
    {
      id: "jurisdiction-country",
      title: "Jurisdiction & Regional Registry",
      badge: "Jurisdiction Authority",
      icon: Globe,
      color: "var(--cream)",
      query: "India",
      sampleValue: "IP India · Mumbai, Delhi & Chennai Branches",
      desc: "Geographic jurisdiction normalization spanning all Indian trademark branch offices and international treaty filings.",
      benefit: "Multi-branch regional verification",
      coverage: "All 5 Indian IP Branches & Global",
      authority: "CGPDTM & Regional Offices",
      keyInsight: "Standardized regional classification"
    },
    {
      id: "filing-dates",
      title: "Chronological Timelines & Dates",
      badge: "Timeline Audit",
      icon: Calendar,
      color: "var(--teal)",
      query: "2018-05-12",
      sampleValue: "Filed: 12 May 2018 · Registered: 11 Feb 2019",
      desc: "Track critical legal milestones: initial application filing, examination reports, journal publication dates, and renewal deadlines.",
      benefit: "Statutory timeline and renewal compliance",
      coverage: "Complete Lifecycle Milestones",
      authority: "Official Gazette Timelines",
      keyInsight: "10-year statutory validity tracking"
    },
    {
      id: "goods-services",
      title: "Goods & Services Specifications",
      badge: "Scope of Protection",
      icon: ListChecks,
      color: "var(--mint)",
      query: "Footwear",
      sampleValue: "Footwear, athletic shoes, sports apparel...",
      desc: "Search complete legal specifications of goods and services protected under statutory classes for conflicting overlap detection.",
      benefit: "Detailed commercial scope analysis",
      coverage: "Full Text Goods & Services Clauses",
      authority: "Nice Classification Specifications",
      keyInsight: "Granular keyword and category matching"
    }
  ];

  // Auto advance attribute stack
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveCardIndex(prev => (prev + 1) % attributesStack.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, attributesStack.length]);

  const activeAttr = attributesStack[activeCardIndex];
  const ActiveIcon = activeAttr.icon;

  // Search modes data with fisherman animation hooks
  const searchModes = [
    {
      id: 'exact',
      title: 'Exact Match',
      fishingMetaphor: 'Precision Harpoon',
      catchPhrase: 'Hooks single exact mark',
      desc: 'Find the exact trademark, application number, or statutory registration identifier without partial noise.',
      exampleInput: 'NIKE',
      returns: ['NIKE (Registration #TM-849201)'],
      caughtData: '1 Precise Record Captured',
      color: 'var(--cream)'
    },
    {
      id: 'startswith',
      title: 'Starts With',
      fishingMetaphor: 'Prefix Surface Cast',
      catchPhrase: 'Reels in all brand extensions',
      desc: 'Retrieve all brand records that begin with a specific prefix term, ideal for portfolio naming and brand families.',
      exampleInput: 'NIKE',
      returns: ['NIKE', 'NIKE AIR', 'NIKE SPORTS', 'NIKE RUN CLUB'],
      caughtData: '4 Brand Family Marks Hooked',
      color: 'var(--mint)'
    },
    {
      id: 'contains',
      title: 'Contains',
      fishingMetaphor: 'Deep-Ocean Trawl Net',
      catchPhrase: 'Captures all substring matches',
      desc: 'Deep search across the entire 20L+ dataset for any occurrence in brand name, proprietor, or wordmark.',
      exampleInput: 'TECH',
      returns: ['TECH', 'TECHWORLD', 'FINTECH', 'TECH SOLUTIONS', 'AGRITECH PRO'],
      caughtData: '5 Distributed Marks Captured',
      color: 'var(--teal)'
    }
  ];

  const handleSelectMode = (modeId) => {
    setIsCasting(true);
    setActiveModeTab(modeId);
    setTimeout(() => setIsCasting(false), 600);
  };

  const currentMode = searchModes.find(m => m.id === activeModeTab) || searchModes[1];

  return (
    <section style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        
        {/* =========================================================================
            SECTION 1: CONTINUOUS FLOWING STRUCTURED TRADEMARK ATTRIBUTES CARDS
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px auto' }}>
          <div className="badge badge-mint" style={{ marginBottom: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} color="var(--teal)" />
            <span>Structured Trademark Intelligence</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.025em', marginBottom: '14px', color: 'var(--text-title)' }}>
            Structured Trademark Attributes
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            8 Core dimensions of normalized trademark intelligence flowing in real-time across 20+ Lakh catalog entries. Hover any card to pause and inspect.
          </p>
        </div>

        {/* Continuous Flowing Card Carousel Container */}
        <div 
          style={{
            position: 'relative',
            marginBottom: '100px',
            overflow: 'hidden',
            padding: '20px 0'
          }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Left / Right Fade Gradients */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '80px',
            background: 'linear-gradient(to right, var(--bg-main) 0%, transparent 100%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '80px',
            background: 'linear-gradient(to left, var(--bg-main) 0%, transparent 100%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}></div>

          {/* Continuous Animated Marquee Track (Duplicated list for seamless infinite loop) */}
          <div 
            className="continuous-card-track"
            style={{
              display: 'flex',
              gap: '24px',
              width: 'max-content',
              animation: isAutoPlaying ? 'scrollContinuous 35s linear infinite' : 'none',
              cursor: 'grab'
            }}
          >
            {[...attributesStack, ...attributesStack].map((attr, index) => {
              const Icon = attr.icon;
              const originalIndex = index % attributesStack.length;

              return (
                <div
                  key={`${attr.id}-${index}`}
                  style={{
                    width: '360px',
                    flexShrink: 0,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '22px',
                    padding: '28px',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-focus)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px -10px rgba(57, 174, 169, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  {/* Top Bar: Icon, Title & Badge */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(57, 174, 169, 0.15)',
                        border: '1px solid rgba(57, 174, 169, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--teal)'
                      }}>
                        <Icon size={20} />
                      </div>
                      <span className="badge badge-mint" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>
                        {attr.badge}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontWeight: '700', marginBottom: '4px' }}>
                      Dimension 0{originalIndex + 1} of 0{attributesStack.length}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-title)', marginBottom: '10px' }}>
                      {attr.title}
                    </h3>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '18px' }}>
                      {attr.desc}
                    </p>

                    {/* Verified Sample Value Pill Box */}
                    <div style={{
                      background: 'var(--bg-surface)',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-subtle)',
                      marginBottom: '18px'
                    }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '3px' }}>
                        Sample Registry Record
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-title)' }}>
                        {attr.sampleValue}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.76rem', color: '#10B981', fontWeight: '700' }}>
                      ✓ 100% Normalized
                    </span>
                    <button
                      onClick={() => onRunDemoSearch(attr.query, "contains")}
                      className="btn-secondary"
                      style={{ padding: '6px 14px', fontSize: '0.78rem', borderRadius: '8px' }}
                    >
                      <span>Search Records</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continuous Scroll Indicator Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>
              {isAutoPlaying ? "⚡ Continuous Live Stream Active (Hover to pause)" : "⏸️ Stream Paused for Inspection"}
            </span>
          </div>
        </div>

        <style>{`
          @keyframes scrollContinuous {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 12px));
            }
          }
          .continuous-card-track:hover {
            animation-play-state: paused !important;
          }
        `}</style>

        {/* =========================================================================
            SECTION 4: INTERACTIVE GLOWING TIMELINE FLOW
            "Zero Direct DB Credentials Exposed"
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px auto' }}>
          <div className="badge badge-mint" style={{ marginBottom: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={14} color="var(--teal)" />
            <span>Zero Direct DB Credentials Exposed</span>
          </div>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '800', letterSpacing: '-0.025em', marginBottom: '14px', color: 'var(--text-title)' }}>
            Your Application Sends the Request. <br />
            <span className="gradient-text-teal">Wyt Returns Structured Data.</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            No PostgreSQL connection strings are shared. No database ports are opened to the public. 
            Follow the chronological timeline below to see how queries traverse our secure air-gapped gateway in sub-15ms.
          </p>
        </div>

        {/* High-Tech Animated Timeline Simulator Panel */}
        <div className="glass-panel" style={{
          padding: '44px 36px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-focus)',
          borderRadius: '24px',
          boxShadow: 'var(--shadow-md)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* Top Timeline Control Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '16px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: isSimulatingRequest ? 'var(--teal)' : '#10B981',
                boxShadow: `0 0 12px ${isSimulatingRequest ? 'var(--teal)' : '#10B981'}`
              }}></div>
              <span style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--text-title)' }}>
                {isSimulatingRequest ? 'Data Packet In Transit...' : 'Air-Gapped Timeline Flow Ready'}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', padding: '2px 8px', borderRadius: '6px', background: 'var(--bg-card)' }}>
                Step {activePipelineStage} of 5
              </span>
            </div>

            <button
              onClick={handleSimulateRequest}
              disabled={isSimulatingRequest}
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.86rem' }}
            >
              {isSimulatingRequest ? <RefreshCw size={14} style={{ animation: 'spin 1.2s linear infinite' }} /> : <Send size={14} />}
              <span>{isSimulatingRequest ? 'Transmitting Packet...' : 'Simulate Data Flow'}</span>
            </button>
          </div>

          {/* ================= CONTINUOUS HORIZONTAL GLOWING TIMELINE ================= */}
          <div style={{ position: 'relative', marginBottom: '50px', padding: '10px 0' }}>
            
            {/* Base Timeline Laser Beam Track */}
            <div style={{
              position: 'absolute',
              top: '32px',
              left: '5%',
              right: '5%',
              height: '4px',
              background: 'var(--border-subtle)',
              borderRadius: '9999px',
              zIndex: 1
            }}></div>

            {/* Glowing Active Progress Flow Beam */}
            <div style={{
              position: 'absolute',
              top: '32px',
              left: '5%',
              width: `${((activePipelineStage - 1) / (pipelineStages.length - 1)) * 90}%`,
              height: '4px',
              background: 'linear-gradient(90deg, var(--teal) 0%, var(--mint) 100%)',
              borderRadius: '9999px',
              boxShadow: '0 0 14px var(--teal)',
              zIndex: 2,
              transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              {/* Moving Pulse Head */}
              <div style={{
                position: 'absolute',
                right: '-6px',
                top: '-5px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#FFFFFF',
                boxShadow: '0 0 16px var(--mint), 0 0 30px var(--teal)'
              }}></div>
            </div>

            {/* 5 Milestone Timeline Nodes */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              position: 'relative',
              zIndex: 3,
              gap: '12px'
            }}>
              {pipelineStages.map((stage) => {
                const Icon = stage.icon;
                const isCurrent = activePipelineStage === stage.id;
                const isPassed = activePipelineStage > stage.id;

                return (
                  <div
                    key={stage.id}
                    onClick={() => setActivePipelineStage(stage.id)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    {/* Glowing Circular Milestone Node */}
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: isCurrent 
                        ? 'linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%)' 
                        : (isPassed ? 'var(--bg-card)' : 'var(--bg-main)'),
                      border: isCurrent 
                        ? '3px solid var(--mint)' 
                        : (isPassed ? '2px solid var(--teal)' : '2px solid var(--border-subtle)'),
                      boxShadow: isCurrent ? '0 0 25px rgba(57, 174, 169, 0.6)' : 'none',
                      transform: isCurrent ? 'scale(1.15)' : 'scale(1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      color: isCurrent ? '#FFFFFF' : (isPassed ? 'var(--teal)' : 'var(--text-dim)'),
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative'
                    }}>
                      {isPassed ? <Check size={22} strokeWidth={3} /> : <Icon size={22} />}
                      
                      {/* Floating Step Number Pill */}
                      <span style={{
                        position: 'absolute',
                        bottom: '-6px',
                        fontSize: '0.66rem',
                        fontWeight: '800',
                        padding: '1px 6px',
                        borderRadius: '9999px',
                        background: isCurrent ? 'var(--mint)' : 'var(--bg-card)',
                        color: isCurrent ? '#081315' : 'var(--text-dim)',
                        border: '1px solid var(--border-subtle)'
                      }}>
                        0{stage.id}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h4 style={{
                      fontSize: '0.92rem',
                      fontWeight: '800',
                      color: isCurrent ? 'var(--teal)' : 'var(--text-title)',
                      marginBottom: '4px',
                      transition: 'color 0.2s ease'
                    }}>
                      {stage.title.split('. ')[1]}
                    </h4>

                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '8px' }}>
                      {stage.sub}
                    </div>

                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: '700',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      background: isCurrent ? 'rgba(57, 174, 169, 0.2)' : 'rgba(85, 123, 131, 0.12)',
                      color: isCurrent ? 'var(--teal)' : 'var(--text-dim)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      {stage.badge}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* ================= ACTIVE NODE DEEP INSPECTOR & DATA CARD ================= */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '24px',
            background: 'var(--bg-card)',
            padding: '28px',
            borderRadius: '18px',
            border: '1px solid var(--border-subtle)',
            position: 'relative',
            zIndex: 2
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge badge-teal" style={{ fontSize: '0.74rem' }}>
                  Timeline Milestone 0{activePipelineStage}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-title)' }}>
                  {currentStageInfo.title}
                </span>
              </div>

              <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', lineHeight: 1.65, marginBottom: '20px' }}>
                {currentStageInfo.desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--teal)' }}>
                  <ShieldCheck size={16} />
                  <span style={{ fontWeight: '800' }}>Database Port 5432 Sealed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981' }}>
                  <CheckCircle2 size={16} />
                  <span style={{ fontWeight: '800' }}>Direct DB Access: 0%</span>
                </div>
              </div>
            </div>

            {/* Clean User-Centric Structured Data Card */}
            <div style={{
              background: 'var(--bg-surface)',
              padding: '20px 24px',
              borderRadius: '14px',
              border: '1px solid var(--border-focus)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ color: 'var(--teal)', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {currentStageInfo.details?.label || "Structured Data"}
                  </span>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(162, 213, 171, 0.2)',
                    color: 'var(--teal)',
                    border: '1px solid rgba(162, 213, 171, 0.4)'
                  }}>
                    {currentStageInfo.badge}
                  </span>
                </div>

                {activePipelineStage === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Target Brand:</span>
                      <strong style={{ color: 'var(--text-title)', fontFamily: 'JetBrains Mono' }}>"NIKE"</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Nice Class:</span>
                      <strong style={{ color: 'var(--text-title)' }}>Class 25 (Apparel)</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Matching Mode:</span>
                      <strong style={{ color: 'var(--teal)' }}>Exact & Starts With</strong>
                    </div>
                  </div>
                )}

                {activePipelineStage === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Security Check:</span>
                      <strong style={{ color: '#10B981' }}>Session Verified</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>DB Connection:</span>
                      <strong style={{ color: 'var(--text-title)' }}>Port 5432 Closed</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>VPC Air-Gap:</span>
                      <strong style={{ color: 'var(--teal)' }}>100% Isolated</strong>
                    </div>
                  </div>
                )}

                {activePipelineStage === 3 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Indexed Catalog:</span>
                      <strong style={{ color: 'var(--text-title)' }}>20,00,000+ Records</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Marks Found:</span>
                      <strong style={{ color: 'var(--teal)' }}>142 Active Records</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Lookup Latency:</span>
                      <strong style={{ color: '#10B981' }}>11.4ms Scan Time</strong>
                    </div>
                  </div>
                )}

                {activePipelineStage === 4 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Mark Name:</span>
                      <strong style={{ color: 'var(--text-title)', fontSize: '0.95rem' }}>NIKE</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Proprietor:</span>
                      <strong style={{ color: 'var(--text-title)' }}>Nike Innovate C.V.</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Registry Status:</span>
                      <strong style={{ color: '#10B981' }}>Registered & Active</strong>
                    </div>
                  </div>
                )}

                {activePipelineStage === 5 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Delivery State:</span>
                      <strong style={{ color: '#10B981' }}>Rendered in User UI</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Direct DB Exposure:</span>
                      <strong style={{ color: 'var(--teal)' }}>0% (Zero Shared)</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Execution Speed:</span>
                      <strong style={{ color: 'var(--text-title)' }}>Sub-15ms Roundtrip</strong>
                    </div>
                  </div>
                )}
              </div>

              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.76rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>Format: <strong style={{ color: 'var(--text-title)' }}>Normalized Data</strong></span>
                <span style={{ color: 'var(--teal)', fontWeight: '700' }}>Zero Direct DB Access</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
