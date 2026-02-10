import React from 'react';

export function TestDrift() {
  return (
    <div className="bg-[#1f2937] p-[17px] rounded-[9px]" style={{ boxShadow: '0 2px 8px #00000040' }}>
      <h1 className="text-[#ff0000] text-[28px] font-[700]" style={{ letterSpacing: '-0.5px' }}>
        Messy Dashboard
      </h1>
      <div className="flex gap-[13px] mt-[22px]">
        <div
          className="bg-[#3B82F6] p-[11px] rounded-[5px]"
          style={{ color: '#ffffff', minWidth: '120px' }}
        >
          <span className="text-[12px]">Revenue</span>
          <p className="text-[24px] font-[800]" style={{ color: '#00ff00' }}>$42,000</p>
        </div>
        <div
          className="bg-[#ef4444] p-[11px] rounded-[5px]"
          style={{ color: '#ffffff', minWidth: '120px' }}
        >
          <span className="text-[12px]">Expenses</span>
          <p className="text-[24px] font-[800]" style={{ color: '#fbbf24' }}>$18,500</p>
        </div>
      </div>
      <button
        className="mt-[20px] bg-[#10b981] hover:bg-[#059669] p-[10px] px-[24px] rounded-[6px]"
        style={{ color: '#fff', border: 'none', fontSize: '14px', cursor: 'pointer' }}
      >
        Export Report
      </button>
    </div>
  );
}
