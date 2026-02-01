import React from 'react';

// DRIFT: Every badge has different colors and sizes

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '4px 11px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: '500'
  }}>
    {children}
  </span>
);

export const SuccessBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-[#d1fae5] text-[#065f46] px-[9px] py-[3px] rounded-[4px] text-[11px] font-medium">
    {children}
  </span>
);

export const WarningBadge = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    backgroundColor: '#fef3c7',
    color: '#92400e',
    padding: '5px 13px',
    borderRadius: '6px',
    fontSize: '13px'
  }}>
    {children}
  </span>
);

export const ErrorBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-[#fee2e2] text-[#991b1b] px-[8px] py-[4px] rounded-full text-[10px] uppercase tracking-wide font-semibold">
    {children}
  </span>
);

export const NeutralBadge = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    backgroundColor: '#f3f4f6',
    color: '#374151',
    padding: '3px 8px',
    borderRadius: '3px',
    fontSize: '11px'
  }}>
    {children}
  </span>
);

export const PremiumBadge = () => (
  <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#78350f] px-[14px] py-[5px] rounded-[20px] text-[12px] font-bold shadow-md">
    PREMIUM
  </span>
);

export const NewBadge = () => (
  <span style={{
    background: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
    color: 'white',
    padding: '2px 10px',
    borderRadius: '4px',
    fontSize: '10px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }}>
    New
  </span>
);
