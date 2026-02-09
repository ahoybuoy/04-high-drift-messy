import React from 'react';

// DRIFT: Completely inconsistent card implementations

export const Card = ({ children, title }: { children: React.ReactNode; title?: string }) => {
  return (
    <div style={{
      backgroundColor: '#fafafa',
      border: '1px solid #e0e0e0',
      borderRadius: '11px',
      padding: '29px',
      marginBottom: '17px',
      minHeight: '185px',
      maxWidth: '472px',
    }}>
      {title && <h3 style={{ color: '#333333', fontSize: '19px', marginBottom: '14px' }}>{title}</h3>}
      {children}
    </div>
  );
};

export const ProductCard = ({ name, price, image }: { name: string; price: number; image: string }) => (
  <div className="bg-[#f5f5f5] border-[1px] border-[#d0d0d0] rounded-[10px] p-[19px] mb-[21px]">
    <img src={image} alt={name} className="w-full h-[180px] object-cover rounded-[6px] mb-[13px]" />
    <h4 className="text-[#2c2c2c] text-[16px] font-medium mb-[7px]">{name}</h4>
    <p className="text-[#4caf50] text-[19px] font-bold">${price}</p>
  </div>
);

export const InfoCard = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '31px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
    }}
  >
    {children}
  </div>
);

export const WarningCard = ({ message }: { message: string }) => (
  <div className="bg-[#fff3cd] border-l-[4px] border-[#ffc107] p-[15px] rounded-r-[4px]">
    <p className="text-[#856404] text-[14px] m-0">{message}</p>
  </div>
);

export const ErrorCard = ({ error }: { error: string }) => (
  <div style={{
    backgroundColor: '#ffebee',
    borderLeft: '3px solid #f44336',
    padding: '14px 18px',
    borderRadius: '0 5px 5px 0',
    marginTop: '11px'
  }}>
    <span style={{ color: '#c62828', fontSize: '13px' }}>{error}</span>
  </div>
);
