import React from 'react';

// DRIFT: Various navigation patterns with inconsistent styling

export const Tabs = ({ tabs, activeTab, onChange }: { tabs: string[]; activeTab: number; onChange: (i: number) => void }) => (
  <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb' }}>
    {tabs.map((tab, i) => (
      <button
        key={i}
        onClick={() => onChange(i)}
        style={{
          padding: '11px 19px',
          fontSize: '14px',
          fontWeight: activeTab === i ? '600' : '400',
          color: activeTab === i ? '#2563eb' : '#6b7280',
          borderBottom: activeTab === i ? '2px solid #2563eb' : '2px solid transparent',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '-1px'
        }}
      >
        {tab}
      </button>
    ))}
  </div>
);

export const PillTabs = ({ tabs, active }: { tabs: string[]; active: number }) => (
  <div className="flex gap-[9px] bg-[#f3f4f6] p-[5px] rounded-[10px]">
    {tabs.map((tab, i) => (
      <button
        key={i}
        className={`px-[17px] py-[7px] rounded-[7px] text-[13px] font-medium transition-all ${
          active === i ? 'bg-white text-[#1f2937] shadow-sm' : 'text-[#6b7280]'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export const Breadcrumb = ({ items }: { items: { label: string; href?: string }[] }) => (
  <nav style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>
    {items.map((item, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span style={{ color: '#9ca3af' }}>/</span>}
        {item.href ? (
          <a href={item.href} style={{ color: '#6b7280', textDecoration: 'none' }}>{item.label}</a>
        ) : (
          <span style={{ color: '#1f2937', fontWeight: '500' }}>{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

export const Pagination = ({ current, total }: { current: number; total: number }) => (
  <div className="flex items-center gap-[7px]">
    <button className="px-[11px] py-[7px] border-[1px] border-[#d1d5db] rounded-[5px] text-[13px] text-[#374151]">
      Prev
    </button>
    {Array.from({ length: Math.min(5, total) }, (_, i) => (
      <button
        key={i}
        className={`w-[32px] h-[32px] rounded-[5px] text-[13px] ${
          i + 1 === current
            ? 'bg-[#2563eb] text-white'
            : 'border-[1px] border-[#d1d5db] text-[#374151]'
        }`}
      >
        {i + 1}
      </button>
    ))}
    <button className="px-[11px] py-[7px] border-[1px] border-[#d1d5db] rounded-[5px] text-[13px] text-[#374151]">
      Next
    </button>
  </div>
);

export const SideNav = ({ items }: { items: { label: string; icon?: string; active?: boolean }[] }) => (
  <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
    {items.map((item, i) => (
      <a
        key={i}
        href="#"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '11px',
          padding: '11px 15px',
          borderRadius: '6px',
          fontSize: '14px',
          textDecoration: 'none',
          backgroundColor: item.active ? '#eff6ff' : 'transparent',
          color: item.active ? '#2563eb' : '#4b5563',
          fontWeight: item.active ? '500' : '400'
        }}
      >
        {item.icon && <span>{item.icon}</span>}
        {item.label}
      </a>
    ))}
  </nav>
);
