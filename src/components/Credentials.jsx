import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Calendar, CheckCircle } from 'lucide-react';

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="container">
        <h2 className="section-title">Credentials & Experience</h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '-20px auto 50px',
          fontSize: '1.05rem',
        }}>
          A timeline of my professional roles, academic accomplishments, and certified competencies.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
        }} className="credentials-grid">

          {/* Experience side */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Briefcase size={26} style={{ color: 'var(--accent-purple)' }} />
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700 }}>Work History</h3>
            </div>

            <motion.div
              className="glass-panel"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                padding: '30px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(13, 13, 37, 0.4)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* Role 1: NetSol */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  color: 'var(--accent-purple)',
                  fontWeight: 600,
                  background: 'rgba(155, 81, 224, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  marginBottom: '12px',
                }}>
                  <Calendar size={12} /> ACTIVE INTERNSHIP
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '4px' }}>
                  Software Engineering Intern
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 500, marginBottom: '12px' }}>
                  NetSol Technologies
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Gaining hands-on enterprise-level industry experience in software systems development, collaborating with agile engineering teams, and developing clean scalable solutions.
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

              {/* Role 2: TA */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  color: 'var(--accent-purple)',
                  fontWeight: 600,
                  background: 'rgba(155, 81, 224, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  marginBottom: '12px',
                }}>
                  <Calendar size={12} /> ACADEMIC ROLE
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '4px' }}>
                  Teaching Assistant
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 500, marginBottom: '12px' }}>
                  University of Engineering and Technology (UET), Lahore
                </p>
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                }}>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <CheckCircle size={16} style={{ color: 'var(--accent-purple)', flexShrink: 0, marginTop: '4px' }} />
                    <span>Facilitated technical workshops on Frontend Development and Git/GitHub for CS cohorts.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <CheckCircle size={16} style={{ color: 'var(--accent-purple)', flexShrink: 0, marginTop: '4px' }} />
                    <span>Evaluated student assignments and projects, providing constructive, production-grade review feedback.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Education & Certs side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Education */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <GraduationCap size={26} style={{ color: 'var(--accent-cyan)' }} />
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700 }}>Education</h3>
              </div>

              <motion.div
                className="glass-panel"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  padding: '30px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  background: 'rgba(13, 13, 37, 0.4)',
                }}
              >
                <h4 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '4px' }}>
                  BS in Computer Science
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 500, marginBottom: '8px' }}>
                  UET Lahore
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '12px' }}>
                  Maintained <strong style={{ color: '#fff' }}>3.9 / 4.00 CGPA</strong> while mastering core computing, algorithms, and software engineering.
                </p>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>2025 - Present</span>
              </motion.div>
            </div>

            {/* Certifications */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <Award size={26} style={{ color: 'var(--accent-pink)' }} />
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700 }}>Specializations</h3>
              </div>

              <motion.div
                className="glass-panel"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  padding: '30px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  background: 'rgba(13, 13, 37, 0.4)',
                  display: 'grid',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-pink)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.05rem', fontWeight: 600 }}>Google Prompting Essentials Specialization</h5>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Google via Coursera</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-pink)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.05rem', fontWeight: 600 }}>Google AI Essentials Specialization</h5>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Google via Coursera</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
