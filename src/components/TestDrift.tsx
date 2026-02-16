export function TestDrift() {
  return (
    <div style={{
      backgroundColor: '#0ea5e9',
      padding: '32px',
      borderRadius: '16px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    }}>
      <h1 style={{ color: '#be123c', fontSize: '36px', marginBottom: '24px' }}>
        High Drift Test
      </h1>
      <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.75' }}>
        Messy component with many hardcoded values and no tokens.
      </p>
      <button style={{ backgroundColor: '#16a34a', color: '#ffffff', padding: '12px 24px', borderRadius: '6px' }}>
        Click me
      </button>
    </div>
  );
}
