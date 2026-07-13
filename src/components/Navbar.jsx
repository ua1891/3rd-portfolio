import { useState } from 'react';
import { Terminal, Cpu, FolderGit2, GraduationCap } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Navbar() {
  return (
    <nav className="glass-panel" style={{
      position: 'sticky',
      top: '20px',
      margin: '0 auto',
      width: '90%',
      maxWidth: '1100px',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Terminal style={{ color: 'var(--accent-cyan)' }} size={24} />
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: '1.2rem',
          letterSpacing: '1px',
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          USMAN.DEV
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '32px',
        alignItems: 'center',
      }} className="nav-links">
        <li>
          <a href="#hero" style={linkStyle}>
            <Cpu size={16} /> Home
          </a>
        </li>
        <li>
          <a href="#skills" style={linkStyle}>
            <Cpu size={16} /> Skills
          </a>
        </li>
        <li>
          <a href="#projects" style={linkStyle}>
            <FolderGit2 size={16} /> Projects
          </a>
        </li>
        <li>
          <a href="#credentials" style={linkStyle}>
            <GraduationCap size={16} /> Credentials
          </a>
        </li>
        <li>
          <a href="#playground" style={linkStyle}>
            <Terminal size={16} /> Playground
          </a>
        </li>
      </ul>

      {/* Social Icons */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <a href="https://github.com/ua1891" target="_blank" rel="noreferrer" style={socialIconStyle}>
          <GithubIcon />
        </a>
        <a href="https://linkedin.com/in/usman-ashfaq-4118a2380" target="_blank" rel="noreferrer" style={socialIconStyle}>
          <LinkedinIcon />
        </a>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--text-secondary)',
  fontSize: '0.95rem',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'var(--transition-smooth)',
};

const socialIconStyle = {
  color: 'var(--text-secondary)',
  transition: 'var(--transition-smooth)',
  display: 'flex',
  alignItems: 'center',
};
