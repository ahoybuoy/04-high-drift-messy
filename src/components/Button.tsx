import React from 'react';

// DRIFT: Multiple button implementations with inconsistent styles
export const Button = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#4a7c59', // DRIFT: Random hardcoded color
        color: '#fff',
        padding: '13px 27px', // DRIFT: Arbitrary spacing
        borderRadius: '7px', // DRIFT: Inconsistent radius
        border: 'none',
        fontSize: '15px', // DRIFT: Non-standard font size
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

export const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-[#2d5a3d] text-white px-[19px] py-[11px] rounded-[5px] text-[14px]">
    {children}
  </button>
);

export const SecondaryButton = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      background: '#8b4513', // DRIFT: Another random color
      color: 'white',
      padding: '12px 24px',
      borderRadius: '4px'
    }}
  >
    {children}
  </button>
);

export const DangerButton = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-[#cc3333] hover:bg-[#aa2222] text-[#ffffff] px-[21px] py-[9px] rounded-[6px]">
    {children}
  </button>
);

export const GhostButton = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      background: 'transparent',
      color: '#1a5f2a',
      padding: '10px 18px',
      border: '1px solid #1a5f2a',
      borderRadius: '3px'
    }}
  >
    {children}
  </button>
);
