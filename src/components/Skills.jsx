import { motion } from 'framer-motion';
import { Code, Layout, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code style={{ color: 'var(--accent-cyan)' }} size={24} />,
    skills: ['Python', 'C++', 'C# (OOP)', 'JavaScript']
  },
  {
    title: 'Web Development',
    icon: <Layout style={{ color: 'var(--accent-purple)' }} size={24} />,
    skills: ['HTML5 & CSS3', 'React.js', 'Node.js', 'Express.js', 'Bootstrap']
  },
  {
    title: 'Databases',
    icon: <Database style={{ color: 'var(--accent-pink)' }} size={24} />,
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Prisma ORM']
  },
  {
    title: 'Tools & Concepts',
    icon: <Wrench style={{ color: 'var(--accent-cyan)' }} size={24} />,
    skills: ['Git & GitHub', 'VS Code', 'Data Structures & Algorithms', 'OOP Principles', 'Software Engineering']
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Mastery</h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '-20px auto 50px',
          fontSize: '1.05rem',
        }}>
          A summary of the programming languages, framework stacks, databases, and core computer science foundations.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
        }}>
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                rotateX: -2,
                boxShadow: '0 15px 40px rgba(0, 242, 254, 0.15)'
              }}
              style={{
                padding: '30px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'rgba(13, 13, 37, 0.4)',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
              }}>
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{cat.title}</h3>
              </div>

              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {cat.skills.map((skill, sIdx) => (
                  <li 
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan)',
                      boxShadow: '0 0 8px var(--accent-cyan)',
                    }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
