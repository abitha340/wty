import React from 'react';
import { ArrowRight } from 'lucide-react';
import imgName from '../assets/tm_name_card.jpg';
import imgApp from '../assets/tm_app_card.jpg';
import imgCert from '../assets/tm_cert_card.jpg';
import imgOwner from '../assets/tm_owner_card.jpg';
import imgClasses from '../assets/tm_classes_card.jpg';
import imgPhonetic from '../assets/tm_phonetic_card.jpg';

export default function SearchTypesSection({ onExecuteSearch }) {
  const searchCards = [
    {
      id: 'trademark',
      title: 'Trademark Name',
      desc: 'Search for any brand name, commercial wordmark, logo text, or phonetic sound to verify availability and inspect conflicting registrations across global registries.',
      image: imgName,
      btnLabel: 'Explore Trademark Name',
      sample: 'NIKE'
    },
    {
      id: 'application_no',
      title: 'Application Number',
      desc: 'Track pending and examined trademark applications using official government serial numbers to follow formalities and examination stages in real time.',
      image: imgApp,
      btnLabel: 'Explore Application Number',
      sample: '1948201'
    },
    {
      id: 'trademark_no',
      title: 'Trademark Certificate No.',
      desc: 'Look up registered trademarks by their formal registration certificate number to verify legal protection validity, statutory dates, and renewal deadlines.',
      image: imgCert,
      btnLabel: 'Explore Trademark Number',
      sample: 'TM-84920'
    },
    {
      id: 'owner',
      title: 'Owner & Enterprise Portfolio',
      desc: 'Inspect all trademark filings owned by a specific corporation, startup, holding entity, or individual to map out full intellectual property portfolios.',
      image: imgOwner,
      btnLabel: 'Explore Owner Portfolio',
      sample: 'Tata Sons'
    },
    {
      id: 'classes',
      title: 'Nice Classes & Classification',
      desc: 'Explore goods and services across all 45 international Nice classes to understand commercial coverage, product scope, and discover open categories.',
      image: imgClasses,
      btnLabel: 'Explore Classification',
      sample: 'Class 9'
    },
    {
      id: 'phonetic',
      title: 'Phonetic & Similar Marks',
      desc: 'Run advanced similarity algorithms to identify sound-alike trademarks, deceptive spelling variations, and potential market confusion risks before filing.',
      image: imgPhonetic,
      btnLabel: 'Explore Phonetic Search',
      sample: 'Acme'
    }
  ];

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '130px',
      background: 'rgb(250, 184, 38)',
      width: '100%',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
    }}>
      
      <div style={{
        width: '100%',
        maxWidth: '100%',
        padding: '0 clamp(24px, 5vw, 84px)',
        margin: '0 auto'
      }}>

        {/* =========================================================================
            CENTERED HEADER: Clean & Authoritative
           ========================================================================= */}
        <div style={{
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto 72px auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.6rem, 4.8vw, 4rem)',
            fontWeight: '900',
            color: '#0d1d2e',
            letterSpacing: '-0.035em',
            lineHeight: 1.15,
            marginBottom: '20px'
          }}>
            What can you search for?
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: '#475569',
            lineHeight: 1.75,
            margin: '0 auto',
            fontWeight: '500',
            maxWidth: '820px'
          }}>
            Your search comes with its own unique criteria—that is why generic lookup tools fall short. Search across millions of structured registry records using flexible trademark identifiers, certificate numbers, or enterprise portfolios.
          </p>
        </div>

        {/* =========================================================================
            3 CARDS IN A ROW GRID (Height Enlarged to > 15cm / ~620px)
           ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '36px'
        }} className="search-cards-3-col-grid">
          {searchCards.map((card) => (
            <div
              key={card.id}
              style={{
                background: 'rgb(250, 184, 38)',
                borderRadius: '26px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
                padding: '20px 20px 28px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '620px',
                transition: 'transform 0.28s ease, box-shadow 0.28s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.05)';
              }}
              onClick={() => onExecuteSearch && onExecuteSearch({ query: card.sample, searchType: card.id === 'classes' || card.id === 'phonetic' ? 'trademark' : card.id, searchMode: 'contains' })}
            >
              
              {/* Card Image Area (Enlarged Height with White Theme Visual) */}
              <div style={{
                width: '100%',
                height: '290px',
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#f8fafc',
                border: '1px solid #f1f5f9',
                position: 'relative'
              }}>
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.45s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Card Body Content (Generous Space & Typography) */}
              <div style={{ padding: '24px 8px 20px 8px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontSize: '1.45rem',
                  fontWeight: '800',
                  color: '#0d1d2e',
                  marginBottom: '14px',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.25
                }}>
                  {card.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1
                }}>
                  {card.desc}
                </p>
              </div>

              {/* Bottom Rounded Pill Button (Black Pill matching Reference) */}
              <div style={{ padding: '0 8px' }}>
                <button
                  type="button"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    borderRadius: '32px',
                    background: '#0d1d2e',
                    color: '#ffffff',
                    fontSize: '0.94rem',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1e293b';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0d1d2e';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span>{card.btnLabel}</span>
                  <ArrowRight size={16} strokeWidth={2.4} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1200px) {
          .search-cards-3-col-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .search-cards-3-col-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
