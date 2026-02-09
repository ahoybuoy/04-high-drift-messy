import React from 'react';

// Quick fix for launch - will clean up later
export const LaunchBanner = ({ message, cta }: { message: string; cta: string }) => (
  <div style={{
    background: 'linear-gradient(90deg, #ff6b35, #f7c948)',
    padding: '18px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0',
    position: 'sticky',
    top: 0,
    zIndex: 9999,
    boxShadow: '0 2px 12px rgba(255, 107, 53, 0.35)'
  }}>
    <span style={{ color: '#1a1a1a', fontSize: '15px', fontWeight: 600 }}>{message}</span>
    <button style={{
      backgroundColor: '#1a1a1a',
      color: '#f7c948',
      padding: '8px 22px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '13px',
      fontWeight: 700,
      cursor: 'pointer',
      textTransform: 'uppercase' as any,
      letterSpacing: '0.5px'
    }}>
      {cta}
    </button>
  </div>
);

export const CountdownTimer = ({ deadline }: { deadline: string }) => (
  <div style={{
    display: 'inline-flex',
    gap: '6px',
    alignItems: 'center',
    backgroundColor: '#1e1e2e',
    padding: '10px 16px',
    borderRadius: '8px'
  }}>
    {['Days', 'Hrs', 'Min', 'Sec'].map((label) => (
      <div key={label} style={{ textAlign: 'center' as any }}>
        <span style={{
          display: 'block',
          fontSize: '22px',
          fontWeight: 'bold',
          color: '#e94560',
          fontFamily: 'monospace',
          lineHeight: 1.1
        }}>
          00
        </span>
        <span style={{
          fontSize: '9px',
          color: '#888',
