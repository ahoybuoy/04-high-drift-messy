import React from 'react';

// DRIFT: Inconsistent table styling

interface Column {
  key: string;
  header: string;
}

export const Table = ({ columns, data }: { columns: Column[]; data: Record<string, any>[] }) => (
  <table style={{
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #e5e7eb'
  }}>
    <thead>
      <tr style={{ backgroundColor: '#f9fafb' }}>
        {columns.map(col => (
          <th key={col.key} style={{
            padding: '13px 17px',
            textAlign: 'left',
            fontSize: '12px',
            fontWeight: '600',
            color: '#6b7280',
            textTransform: 'uppercase',
            borderBottom: '1px solid #e5e7eb'
          }}>
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
          {columns.map(col => (
            <td key={col.key} style={{
              padding: '15px 17px',
              fontSize: '14px',
              color: '#374151'
            }}>
              {row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export const StripedTable = ({ columns, data }: { columns: Column[]; data: Record<string, any>[] }) => (
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-[#1f2937] text-white">
        {columns.map(col => (
          <th key={col.key} className="px-[19px] py-[11px] text-left text-[11px] uppercase tracking-wider">
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f3f4f6]'}>
          {columns.map(col => (
            <td key={col.key} className="px-[19px] py-[13px] text-[13px] text-[#4b5563]">
              {row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export const DataGrid = ({ columns, data }: { columns: Column[]; data: Record<string, any>[] }) => (
  <div style={{
    display: 'grid',
    gap: '1px',
    backgroundColor: '#d1d5db',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    overflow: 'hidden'
  }}>
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr)`, backgroundColor: '#e5e7eb' }}>
      {columns.map(col => (
        <div key={col.key} style={{ padding: '11px 15px', fontWeight: '600', fontSize: '13px', color: '#374151' }}>
          {col.header}
        </div>
      ))}
    </div>
    {data.map((row, i) => (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr)`, backgroundColor: 'white' }}>
        {columns.map(col => (
          <div key={col.key} style={{ padding: '11px 15px', fontSize: '14px', color: '#4b5563' }}>
            {row[col.key]}
          </div>
        ))}
      </div>
    ))}
  </div>
);
