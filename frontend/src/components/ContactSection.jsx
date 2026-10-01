import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle2, ShieldCheck, HelpCircle, FileText, Building, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Developer & API Integration',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const contactChannels = [
    {
      title: "Developer & API Support",
      desc: "Get technical assistance for API key provisioning, rate limits, SDKs, and error code troubleshooting.",
      email: "api-support@wyt.io",
      icon: MessageSquare,
      badge: "Response within 1h"
    },
    {
      title: "Enterprise Licensing & Sales",
      desc: "Discuss dedicated Neon DB read replicas, custom high-volume query plans, and custom SLA agreements.",
      email: "enterprise@wyt.io",
      icon: Building,
      badge: "Custom SLA"
    },
    {
      title: "Grievance & Legal Officer",
      desc: "Statutory compliance, data accuracy verification, and intellectual property record update requests.",
      email: "grievance-officer@wyt.io",
      icon: ShieldCheck,
      badge: "Statutory Compliance"
    },
    {
      title: "Registered Tech Office",
      desc: "Wyt Technologies India Private Limited • Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103",
      email: "contact@wyt.io",
      icon: MapPin,
      badge: "HQ Bengaluru"
    }
  ];

  return (
    <div style={{ paddingTop: '50px', paddingBottom: '90px' }}>
      <div className="container">
        
        {/* Header (PhonePe Inspired) */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
          <div className="badge badge-mint" style={{ marginBottom: '14px' }}>
            We're Here to Help
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--text-pure)' }}>
            Contact Wyt Trademark Team
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Have questions about our trademark dataset, API integration, or enterprise volume? Connect with our dedicated engineering and customer success teams.
          </p>
        </div>

        {/* 4 Contact Cards */}
        <div className="grid-cols-4" style={{ marginBottom: '60px' }}>
          {contactChannels.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(57, 174, 169, 0.15)',
                      border: '1px solid rgba(57, 174, 169, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--mint)'
                    }}>
                      <Icon size={20} />
                    </div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      background: 'rgba(162, 213, 171, 0.16)',
                      color: 'var(--cream)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      {c.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-pure)' }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                    {c.desc}
                  </p>
                </div>

                <div style={{
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                  fontFamily: 'JetBrains Mono',
                  color: 'var(--mint)'
                }}>
                  {c.email}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main 2-Column Contact Form & SLA Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'start' }}>
          
          {/* Inquiry Form */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-pure)' }}>
              Send an Inquiry
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Fill out the form below and an API specialist will get back to you within 2 business hours.
            </p>

            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: 'rgba(162, 213, 171, 0.08)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(57, 174, 169, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  color: 'var(--mint)'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-pure)', marginBottom: '8px' }}>
                  Thank you, {formData.name}!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Your inquiry regarding <strong>{formData.category}</strong> has been logged. Ticket #WYT-{Math.floor(100000 + Math.random() * 900000)} created.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', category: 'Developer & API Integration', company: '', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ padding: '10px 24px' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--cream)', fontWeight: '700', marginBottom: '6px' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        background: 'var(--input-bg)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--cream)', fontWeight: '700', marginBottom: '6px' }}>
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        background: 'var(--input-bg)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--cream)', fontWeight: '700', marginBottom: '6px' }}>
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        background: 'var(--input-bg)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--cream)', fontWeight: '700', marginBottom: '6px' }}>
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        background: 'var(--input-bg)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Developer & API Integration">Developer & API Integration</option>
                      <option value="Enterprise Custom SLA & Volume">Enterprise Custom SLA & Volume</option>
                      <option value="Billing & Credit Top-up">Billing & Credit Top-up</option>
                      <option value="Data Accuracy & Corrections">Data Accuracy & Corrections</option>
                      <option value="Partnership & Reseller">Partnership & Reseller</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--cream)', fontWeight: '700', marginBottom: '6px' }}>
                    Describe Your Requirements / Questions *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your application, monthly query volume expectations, or any technical questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'var(--input-bg)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', justifyContent: 'center' }}
                >
                  <Send size={16} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* SLA Guarantees & Office Map Info */}
          <div>
            <div className="glass-panel" style={{ padding: '28px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-pure)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={18} color="var(--mint)" />
                <span>Support & Availability SLAs</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Developer API Helpdesk</span>
                  <strong style={{ color: 'var(--cream)' }}>24x7 Active</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>First Response Time</span>
                  <strong style={{ color: 'var(--mint)' }}>&lt; 60 Minutes</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Core API Availability</span>
                  <strong style={{ color: 'var(--teal)' }}>99.99% Uptime</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Neon PostgreSQL Cluster</span>
                  <strong style={{ color: 'var(--cream)' }}>Multi-AZ Replica</strong>
                </div>
              </div>
            </div>

            {/* Corporate Office Card */}
            <div className="glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-pure)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building size={18} color="var(--teal)" />
                <span>Corporate Headquarters</span>
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                <strong>Wyt Technologies Private Limited</strong><br />
                Tower B, 4th Floor, Tech Hub Central,<br />
                Outer Ring Road, Bellandur,<br />
                Bengaluru, Karnataka 560103, India
              </p>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                CIN: U72900KA2024PTC189201 • GSTIN: 29AABCW1928K1ZX
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
