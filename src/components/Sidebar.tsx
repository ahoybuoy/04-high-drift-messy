import React from 'react';

// Sidebar with messy, inconsistent styling
export function Sidebar() {
  return (
    <aside style={{
      width: '260px',
      padding: '18px',
      backgroundColor: '#1a1a2e',
      color: '#eaeaea',
      minHeight: '100vh',
      borderRight: '1px solid #2d2d4a',
      boxShadow: '4px 0 16px rgba(0, 0, 0, 0.3)',
      zIndex: 50,
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <div style={{
        padding: '12px 14px',
        marginBottom: '24px',
        borderBottom: '1px solid #3d3d5c',
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.01em',
        }}>
          Dashboard
        </h2>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
        {['Overview', 'Analytics', 'Reports', 'Settings'].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              padding: '10px 14px',
              borderRadius: '6px',
              color: '#b8b8d0',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background 150ms ease',
              opacity: 0.85,
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      <div style={{
        position: 'absolute' as const,
        bottom: '20px',
        left: '18px',
        right: '18px',
        padding: '14px',
        backgroundColor: '#16213e',
        borderRadius: '10px',
        border: '1px solid #2d2d4a',
      }}>
        <p style={{
          fontSize: '12px',
          color: '#8888a8',
          marginBottom: '8px',
        }}>
          Storage used: 4.2 GB
        </p>
        <div style={{
          height: '6px',
          backgroundColor: '#2d2d4a',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: '68%',
            height: '100%',
            backgroundColor: '#e94560',
            borderRadius: '3px',
          }} />
        </div>
      </div>
    </aside>
  );
}
