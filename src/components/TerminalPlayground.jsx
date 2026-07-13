import { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';

const INITIAL_HISTORY = [
  { text: 'USMAN OS v1.0.4 - Creative AI Assistant Module Initialized.', type: 'info' },
  { text: 'Type "help" to view a list of available system commands.', type: 'muted' },
  { text: 'Or click the quick-command chips below to interact.', type: 'muted' },
];

export default function TerminalPlayground() {
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `> ${cmd}`, type: 'command' }];

    if (trimmed === '') {
      setHistory(newHistory);
      return;
    }

    switch (trimmed) {
      case 'help':
        newHistory.push({
          text: 'Available Commands:\n  about    - Who is Hafiz Usman Ashfaq?\n  skills   - List technical skills with grading\n  projects - View developed project stack\n  hack     - Initialize creative simulation\n  system   - View AI system specs\n  clear    - Clear console display',
          type: 'info'
        });
        break;
      case 'about':
        newHistory.push({
          text: 'Hafiz Usman Ashfaq is a high-achieving BS CS student at UET Lahore (CGPA 3.959) and Teaching Assistant. He specializes in full-stack engineering, performance optimizations, and backend architectures.',
          type: 'text'
        });
        break;
      case 'skills':
        newHistory.push({
          text: 'Technical Skills & Competency Matrix:\n  - Python / C++ / C#   [██████████████░] 92%\n  - React / Web Dev      [███████████████] 95%\n  - PostgreSQL / MySQL   [████████████░░░] 80%\n  - Git / Versioning     [███████████████] 96%\n  - Prompt Engineering   [███████████████] 98%',
          type: 'success'
        });
        break;
      case 'projects':
        newHistory.push({
          text: 'Featured Projects:\n  - TrackFlow: 3-tier tracking, background cron, Express/Node + Postgres.\n  - Police Management: Node + React + SQL Server admin panel.\n  - Angry Birds Clone: Custom 2D C# framework & physics engine.\n  - Point of Sale: Windows Forms POS manager.',
          type: 'info'
        });
        break;
      case 'hack':
        newHistory.push({ text: '⚡ INITIALIZING CYBERNETIC DECRYPT SEQUENCE...', type: 'warning' });
        setTimeout(() => {
          setHistory(prev => [
            ...prev,
            { text: '🔑 Accessing UET Lahore Student Records database...', type: 'muted' },
            { text: '🔓 [BYPASS SUCCESS] Decrypting Student Profile...', type: 'muted' },
            { text: '🏆 ACADEMIC PROFILE RETRIEVED:\n  - Name: Hafiz Usman Ashfaq\n  - CGPA: 3.959 / 4.00 (Rank: Top Tier)\n  - Status: TA Workstation Active\n  - AI Creative Factor: Maximum 🔥', type: 'success' }
          ]);
        }, 1000);
        break;
      case 'system':
        newHistory.push({
          text: 'AI Agent Specs:\n  - Agent Identity: Antigravity Code Assistant\n  - Creative Directives: Build premium UI, optimize loops, wow user\n  - Current Shell: React 19 + Canvas 3D Particle Constellation',
          type: 'info'
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push({ text: `Command not found: "${cmd}". Type "help" for a list of commands.`, type: 'error' });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <section id="playground">
      <div className="container">
        <h2 className="section-title">Interactive Terminal</h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '-20px auto 50px',
          fontSize: '1.05rem',
        }}>
          Query my profile directly using this custom terminal simulation showcasing the creativity built on my behalf.
        </p>

        <div className="glass-panel" style={{
          maxWidth: '800px',
          margin: '0 auto',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
          {/* Terminal Title Bar */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '10px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={16} style={{ color: 'var(--accent-cyan)' }} />
              <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                usman@workspace: ~
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
            </div>
          </div>

          {/* Terminal Console Output */}
          <div style={{
            background: '#070712',
            height: '350px',
            padding: '20px',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {history.map((item, idx) => (
              <div key={idx} style={{
                color: item.type === 'error' ? 'var(--accent-pink)' : 
                       item.type === 'success' ? '#27c93f' : 
                       item.type === 'warning' ? '#ffbd2e' : 
                       item.type === 'command' ? 'var(--accent-cyan)' : 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
                opacity: item.type === 'muted' ? 0.6 : 1,
              }}>
                {item.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Area */}
          <form onSubmit={handleSubmit} style={{
            background: 'rgba(255, 255, 255, 0.01)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <span style={{
              color: 'var(--accent-cyan)',
              fontFamily: 'var(--font-mono)',
              marginRight: '8px',
              fontWeight: 'bold',
            }}>
              $
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter system command..."
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                flexGrow: 1,
              }}
            />
            <button type="submit" style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}>
              <CornerDownLeft size={16} />
            </button>
          </form>
        </div>

        {/* Quick Commands */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '20px',
          flexWrap: 'wrap',
        }}>
          {['help', 'about', 'skills', 'projects', 'hack'].map((btn) => (
            <button
              key={btn}
              onClick={() => executeCommand(btn)}
              className="glass-panel"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '6px 16px',
                borderRadius: '20px',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
              }}
            >
              run {btn}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
