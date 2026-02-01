import React from 'react';

// DRIFT: Spinner variations with different approaches

export const Spinner = ({ size = 24 }: { size?: number }) => (
  <div style={{
    width: `${size}px`,
    height: `${size}px`,
    border: '3px solid #e5e7eb',
    borderTopColor: '#3b82f6',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite'
  }} />
);

export const DotsSpinner = () => (
  <div className="flex gap-[5px]">
    {[0, 1, 2].map(i => (
      <div
        key={i}
        className="w-[8px] h-[8px] bg-[#6366f1] rounded-full animate-bounce"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

export const PulseLoader = () => (
  <div style={{
    width: '48px',
    height: '48px',
    backgroundColor: '#10b981',
    borderRadius: '50%',
    animation: 'pulse 1.2s ease-in-out infinite'
  }} />
);

export const BarLoader = () => (
  <div className="flex gap-[4px] items-end h-[24px]">
    {[0, 1, 2, 3, 4].map(i => (
      <div
        key={i}
        className="w-[4px] bg-[#f59e0b] rounded-[2px] animate-pulse"
        style={{
          height: '100%',
          animationDelay: `${i * 0.12}s`
        }}
      />
    ))}
  </div>
);

export const RingSpinner = ({ color = '#8b5cf6' }: { color?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" style={{ animation: 'spin 1s linear infinite' }}>
    <circle
      cx="20"
      cy="20"
      r="16"
      fill="none"
      stroke={color}
      strokeWidth="4"
      strokeDasharray="80"
      strokeDashoffset="60"
      strokeLinecap="round"
    />
  </svg>
);

export const SkeletonLoader = ({ width = '100%', height = '20px' }: { width?: string; height?: string }) => (
  <div
    style={{
      width,
      height,
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      animation: 'shimmer 1.5s infinite'
    }}
  />
);

export const FullPageLoader = () => (
  <div style={{
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 9999
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '17px'
    }}>
      <Spinner size={48} />
      <span style={{ color: '#6b7280', fontSize: '14px' }}>Loading...</span>
    </div>
  </div>
);
