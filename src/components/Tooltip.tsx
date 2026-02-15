import React, { useState } from 'react';

export const Tooltip = ({ children, text }: { children: React.ReactNode; text: string }) => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#1f2937',
          color: '#f9fafb',
          padding: '6px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          marginBottom: '6px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          zIndex: 50,
        }}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
