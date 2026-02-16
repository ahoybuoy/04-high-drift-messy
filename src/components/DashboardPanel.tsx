import React from 'react';

export function DashboardPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '24px', padding: '32px', backgroundColor: '#f9fafb' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>Dashboard</h1>
        <button style={{ padding: '10px 20px', backgroundColor: '#4f46e5', color: '#ffffff', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
          Export
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <p style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', fontWeight: 500 }}>Revenue</p>
          <p style={{ fontSize: '36px', fontWeight: 700, color: '#111827', marginTop: '8px' }}>$48.2k</p>
          <p style={{ fontSize: '13px', color: '#059669', marginTop: '4px' }}>+12.5% from last month</p>
        </div>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <p style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', fontWeight: 500 }}>Users</p>
          <p style={{ fontSize: '36px', fontWeight: 700, color: '#111827', marginTop: '8px' }}>2,847</p>
          <p style={{ fontSize: '13px', color: '#dc2626', marginTop: '4px' }}>-3.2% from last month</p>
        </div>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <p style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', fontWeight: 500 }}>Conversion</p>
          <p style={{ fontSize: '36px', fontWeight: 700, color: '#111827', marginTop: '8px' }}>4.3%</p>
          <p style={{ fontSize: '13px', color: '#059669', marginTop: '4px' }}>+0.8% from last month</p>
        </div>
      </div>

      <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>Recent Transactions</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontSize: '12px', fontWeight: 500, color: '#6b7280', textTransform: 'uppercase' as const }}>Name</th>
              <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontSize: '12px', fontWeight: 500, color: '#6b7280', textTransform: 'uppercase' as const }}>Amount</th>
              <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontSize: '12px', fontWeight: 500, color: '#6b7280', textTransform: 'uppercase' as const }}>Status</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
