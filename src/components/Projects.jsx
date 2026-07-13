import { motion } from 'framer-motion';
import { ExternalLink, Layers, ShieldCheck, Gamepad2, Landmark } from 'lucide-react';

// const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'TrackFlow',
    subtitle: 'Shipment Tracking & Order Confirmation System',
    desc: 'A robust 3-tier full-stack platform featuring JWT authentication, bcrypt, and rate limiting. Automated shipment tracking via background cron jobs polling courier APIs with real-time email alerts.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Jest'],
    icon: <Layers size={32} style={{ color: 'var(--accent-cyan)' }} />,
    github: 'https://github.com/ua1891'
  },
  {
    title: 'Police Management System (PMS)',
    subtitle: 'Administrative Record System',
    desc: 'Designed to digitize complex police station workflows and log record histories. Implemented dynamic interfaces supporting both administrators and officers with custom access controls.',
    tech: ['React.js', 'Node.js', 'SQL Server', 'Express'],
    icon: <ShieldCheck size={32} style={{ color: 'var(--accent-purple)' }} />,
    github: 'https://github.com/ua1891'
  },
  {
    title: 'Angry Birds Clone',
    subtitle: '2D Physics Game Framework',
    desc: 'An interactive 2D physics simulation built completely from scratch using C# and standard object-oriented design patterns. Features structural game loops, vector math, collision detection, and UI.',
    tech: ['C#', 'OOP', 'Custom 2D Engine', '.NET'],
    icon: <Gamepad2 size={32} style={{ color: 'var(--accent-pink)' }} />,
    github: 'https://github.com/ua1891'
  },
  {
    title: 'Point of Sale (POS) Desktop App',
    subtitle: 'Retail Billing & Inventory Manager',
    desc: 'A desktop program built with Windows Forms to track sales records, manage stock inventories, automate bill generations, and handle local customer databases with offline reliability.',
    tech: ['C#', 'Windows Forms', 'Local Database', '.NET'],
    icon: <Landmark size={32} style={{ color: 'var(--accent-cyan)' }} />,
    github: 'https://github.com/ua1891'
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Showcase</h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '-20px auto 50px',
          fontSize: '1.05rem',
        }}>
          Explore a selection of full-stack systems, desktop applications, and algorithmic simulations created by Usman.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
        }}>
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                borderRadius: '24px',
                padding: '30px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'rgba(13, 13, 37, 0.45)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '12px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}>
                    {proj.icon}
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a href={proj.github} target="_blank" rel="noreferrer" style={{
                      color: 'var(--text-secondary)',
                      transition: 'var(--transition-smooth)',
                    }} className="project-link">
                      <GithubIcon />
                    </a>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>
                  {proj.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)',
                  marginBottom: '16px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}>
                  {proj.subtitle}
                </p>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  marginBottom: '24px',
                  lineHeight: '1.5',
                }}>
                  {proj.desc}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
