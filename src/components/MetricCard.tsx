import React from 'react';

export function MetricCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      padding: '32px 28px',
      color: '#ffffff',
      minWidth: '260px',
      boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)',
    }}>
      <p style={{ fontSize: '13px', fontWeight: 500, opacity: 0.85, textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>
        {title}
      </p>
      <p style={{ fontSize: '48px', fontWeight: 800, marginTop: '8px', lineHeight: 1 }}>
        {value}
      </p>
      <p style={{ fontSize: '14px', marginTop: '12px', opacity: 0.7 }}>
        {subtitle}
      </p>
    </div>
  );
}
