import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GraduationCap, Award, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '40px',
    }}>
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '40px',
        alignItems: 'center',
      }}>
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 242, 254, 0.1)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            color: 'var(--accent-cyan)',
            fontWeight: 600,
            marginBottom: '20px',
            letterSpacing: '1px',
          }}>
            <Award size={16} /> PORTFOLIO
          </div>

          <h1 className="gradient-text" style={{
            fontSize: '4rem',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '16px',
            textAlign: 'left',
          }}>
            Hafiz Usman Ashfaq
          </h1>

          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 500,
            color: 'var(--text-primary)',
            marginBottom: '24px',
            textAlign: 'left',
          }}>
            Intern @ NetSol Technologies | Full Stack Developer
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            marginBottom: '32px',
            textAlign: 'left',
          }}>
            Currently interning at <strong style={{ color: 'var(--accent-cyan)' }}>NetSol Technologies</strong> and maintaining a near-perfect <strong style={{ color: 'var(--accent-cyan)' }}>3.9 / 4.00 CGPA</strong> at UET Lahore. Specialized in architecting modern web apps (React, Node, SQL, Postgres) and deep interest in AI Prompt Engineering.
          </p>

          {/* Quick Info Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
          }}>
            <div className="glass-panel" style={infoCardStyle}>
              <Mail size={18} style={{ color: 'var(--accent-cyan)' }} />
              <div>
                <p style={infoCardLabel}>Email</p>
                <a href="mailto:ua1891@gmail.com" style={infoCardVal}>ua1891@gmail.com</a>
              </div>
            </div>
            <div className="glass-panel" style={infoCardStyle}>
              <Phone size={18} style={{ color: 'var(--accent-purple)' }} />
              <div>
                <p style={infoCardLabel}>Phone</p>
                <a href="tel:+923154361297" style={infoCardVal}>+92 315 436 1297</a>
              </div>
            </div>
            <div className="glass-panel" style={infoCardStyle}>
              <MapPin size={18} style={{ color: 'var(--accent-pink)' }} />
              <div>
                <p style={infoCardLabel}>Location</p>
                <span style={infoCardVal}>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#projects" className="glass-panel" style={primaryBtnStyle}>
              View My Work
            </a>
            <a
              href="file:///C:/Users/User/Downloads/Hafiz Usman Ashfaq(CV).docx"
              download
              className="glass-panel"
              style={secondaryBtnStyle}
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Visual Showcase (3D-like floating abstract card) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <div className="glass-panel" style={{
            position: 'relative',
            padding: '30px',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            transform: 'perspective(1000px) rotateY(-10deg) rotateX(10deg)',
            transformStyle: 'preserve-3d',
            background: 'linear-gradient(135deg, rgba(13, 13, 37, 0.8), rgba(25, 20, 50, 0.6))',
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '700',
              boxShadow: '0 5px 15px rgba(0, 242, 254, 0.4)',
            }}>
              TA @ UET Lahore
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <GraduationCap size={40} style={{ color: 'var(--accent-cyan)' }} />
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Academic Excellence</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>UET Lahore BS CS</p>
              </div>
            </div>

            <div style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1,
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'baseline',
              gap: '4px',
            }}>
              <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 400 }}>3.9/ 4.00</span>
            </div>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '20px' }}>
              Near-Perfect CGPA
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'between', marginBottom: '8px', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>AI Essentials</span>
                <span style={{ color: 'var(--accent-pink)', fontWeight: 600, marginLeft: 'auto' }}>Certified</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Prompt Engineering</span>
                <span style={{ color: 'var(--accent-pink)', fontWeight: 600, marginLeft: 'auto' }}>Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const infoCardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  borderRadius: '12px',
  textAlign: 'left',
};

const infoCardLabel = {
  fontSize: '0.75rem',
  color: 'var(--text-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const infoCardVal = {
  fontSize: '0.9rem',
  color: 'var(--text-primary)',
  fontWeight: '500',
  textDecoration: 'none',
};

const primaryBtnStyle = {
  padding: '12px 28px',
  borderRadius: '30px',
  fontWeight: 600,
  fontSize: '1rem',
  color: '#000',
  background: 'linear-gradient(90deg, var(--accent-cyan), #fff)',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
  boxShadow: '0 4px 15px rgba(0, 242, 254, 0.3)',
};

const secondaryBtnStyle = {
  padding: '12px 28px',
  borderRadius: '30px',
  fontWeight: 600,
  fontSize: '1rem',
  color: 'var(--text-primary)',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid var(--glass-border)',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
};
