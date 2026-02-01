import React from 'react';

// DRIFT: Rating components with different approaches

export const StarRating = ({ value, max = 5 }: { value: number; max?: number }) => (
  <div style={{ display: 'flex', gap: '3px' }}>
    {Array.from({ length: max }, (_, i) => (
      <span key={i} style={{
        color: i < value ? '#fbbf24' : '#d1d5db',
        fontSize: '19px'
      }}>
        ★
      </span>
    ))}
  </div>
);

export const HeartRating = ({ value, max = 5 }: { value: number; max?: number }) => (
  <div className="flex gap-[5px]">
    {Array.from({ length: max }, (_, i) => (
      <span key={i} className={`text-[21px] ${i < value ? 'text-[#ef4444]' : 'text-[#e5e7eb]'}`}>
        ♥
      </span>
    ))}
  </div>
);

export const NumberRating = ({ value }: { value: number }) => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    padding: '5px 11px',
    backgroundColor: '#fef3c7',
    borderRadius: '6px'
  }}>
    <span style={{ color: '#fbbf24', fontSize: '16px' }}>★</span>
    <span style={{ color: '#92400e', fontSize: '15px', fontWeight: '600' }}>{value.toFixed(1)}</span>
  </div>
);

export const ThumbsRating = ({ likes, dislikes }: { likes: number; dislikes: number }) => (
  <div className="flex items-center gap-[17px]">
    <button className="flex items-center gap-[5px] text-[#10b981] text-[14px]">
      👍 <span>{likes}</span>
    </button>
    <button className="flex items-center gap-[5px] text-[#ef4444] text-[14px]">
      👎 <span>{dislikes}</span>
    </button>
  </div>
);

export const PercentageRating = ({ value }: { value: number }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '11px'
  }}>
    <div style={{
      width: '120px',
      height: '8px',
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: `${value}%`,
        height: '100%',
        backgroundColor: '#8b5cf6'
      }} />
    </div>
    <span style={{ fontSize: '13px', color: '#6b7280' }}>{value}%</span>
  </div>
);
