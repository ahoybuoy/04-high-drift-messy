import React from 'react';

// DRIFT: Divider components with inconsistent styling

export const Divider = () => (
  <hr style={{
    border: 'none',
    height: '1px',
    backgroundColor: '#e5e7eb',
    margin: '23px 0'
  }} />
);

export const DottedDivider = () => (
  <hr className="border-0 border-t-[2px] border-dotted border-[#d1d5db] my-[19px]" />
);

export const DashedDivider = () => (
  <div style={{
    borderTop: '2px dashed #9ca3af',
    margin: '17px 0'
  }} />
);

export const TextDivider = ({ text }: { text: string }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    margin: '21px 0'
  }}>
    <div style={{ flex: 1, height: '1px', backgroundColor: '#d1d5db' }} />
    <span style={{ color: '#6b7280', fontSize: '12px', fontWeight: '500' }}>{text}</span>
    <div style={{ flex: 1, height: '1px', backgroundColor: '#d1d5db' }} />
  </div>
);

export const GradientDivider = () => (
  <div className="h-[2px] my-[25px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent" />
);

export const VerticalDivider = () => (
  <div style={{
    width: '1px',
    backgroundColor: '#e5e7eb',
    alignSelf: 'stretch',
    margin: '0 13px'
  }} />
);

export const ThickDivider = () => (
  <hr className="border-0 h-[4px] bg-[#1f2937] my-[31px] rounded-full" />
);
