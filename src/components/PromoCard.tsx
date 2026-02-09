import React from 'react';

// TODO: Use design tokens after launch
export const PromoCard = ({ title, discount, expires }: { title: string; discount: number; expires: string }) => (
  <div style={{
    background: '#ffffff',
    border: '2px dashed #e94560',
    borderRadius: '12px',
    padding: '24px',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      backgroundColor: '#e94560',
      color: 'white',
      padding: '6px 18px',
      fontSize: '11px',
      fontWeight: 700,
      transform: 'rotate(12deg)',
      transformOrigin: 'top right'
    }}>
      SALE
    </div>
    <h3 style={{ color: '#1a1a2e', fontSize: '17px', marginBottom: '8px', marginTop: 0 }}>{title}</h3>
    <p style={{
      color: '#e94560',
      fontSize: '36px',
      fontWeight: 900,
      margin: '12px 0',
      lineHeight: 1
    }}>
      {discount}% OFF
    </p>
    <span style={{
      color: '#999',
      fontSize: '12px',
      display: 'block',
      marginTop: '8px'
    }}>
      Expires: {expires}
