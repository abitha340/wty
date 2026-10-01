import React from 'react';
import { Database, FileCheck, Layers, Calendar, MapPin, Tag, Shield } from 'lucide-react';

export default function RecordSchemaSection() {
  const schemaFields = [
    { field: "trademark", type: "string", example: '"NIKE AIR"', desc: "The registered or searched mark name." },
    { field: "application_number", type: "string", example: '"2491024"', desc: "The application's unique statutory identifier." },
    { field: "trademark_number", type: "string | null", example: '"TM-958102"', desc: "The official registration identifier where granted." },
    { field: "owner", type: "string", example: '"Nike Innovate C.V."', desc: "The legal proprietor or entity associated with the record." },
    { field: "class", type: "integer (1-45)", example: '25', desc: "The relevant standardized Nice Classification." },
    { field: "status", type: "string", example: '"Registered"', desc: "The legal status (Registered, Pending, Objected, Opposed, etc.)." },
    { field: "country", type: "string", example: '"India"', desc: "The jurisdiction associated with the filing." },
    { field: "filing_date", type: "string (YYYY-MM-DD)", example: '"2012-07-15"', desc: "Official date when application was submitted." },
    { field: "registration_date", type: "string | null", example: '"2014-02-11"', desc: "Date of trademark grant / registration certificate." },
    { field: "goods_services_description", type: "string", example: '"Cushioned athletic shoes..."', desc: "Statement of goods and services covered under the class." }
  ];

  return (
    <section style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
          <div className="badge badge-mint" style={{ marginBottom: '16px' }}>
            Structured Data Specification
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--text-title)' }}>
            What a Trademark Record Contains
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Every Wyt API response delivers clean, predictable, machine-readable trademark attributes.
          </p>
        </div>

        <div className="glass-panel" style={{ overflow: 'hidden' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '220px 140px 220px 1fr',
            padding: '16px 24px',
            background: 'var(--header-bg)',
            borderBottom: '1px solid var(--border-subtle)',
            fontWeight: '700',
            fontSize: '0.8rem',
            color: 'var(--text-title)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <div>Field Name</div>
            <div>Data Type</div>
            <div>Sample Value</div>
            <div>Description</div>
          </div>

          <div>
            {schemaFields.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '220px 140px 220px 1fr',
                  padding: '16px 24px',
                  borderBottom: idx < schemaFields.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  fontSize: '0.875rem',
                  alignItems: 'center'
                }}
              >
                <div style={{ fontFamily: 'JetBrains Mono', color: 'var(--teal)', fontWeight: '700' }}>
                  {item.field}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono', color: 'var(--slate)', fontSize: '0.78rem' }}>
                  {item.type}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono', color: 'var(--text-title)', fontSize: '0.8rem' }}>
                  {item.example}
                </div>
                <div style={{ color: 'var(--text-muted)' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
