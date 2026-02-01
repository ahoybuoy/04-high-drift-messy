import React, { useState } from 'react';

// DRIFT: Tooltip implementations with different styles

export const Tooltip = ({ content, children }: { content: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
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
          marginBottom: '7px',
          padding: '7px 13px',
          backgroundColor: '#1f2937',
          color: 'white',
          fontSize: '12px',
          borderRadius: '5px',
          whiteSpace: 'nowrap',
          zIndex: 1000
        }}>
          {content}
        </div>
      )}
    </div>
  );
};

export const InfoTooltip = ({ text }: { text: string }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-block cursor-help"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <span className="w-[16px] h-[16px] rounded-full bg-[#9ca3af] text-white text-[11px] inline-flex items-center justify-center">
        i
      </span>
      {visible && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[9px] px-[11px] py-[6px] bg-[#374151] text-white text-[11px] rounded-[4px] whitespace-nowrap">
          {text}
        </span>
      )}
    </span>
  );
};

export const Popover = ({
  trigger,
  content
}: {
  trigger: React.ReactNode;
  content: React.ReactNode
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          marginTop: '9px',
          padding: '15px 19px',
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          minWidth: '200px'
        }}>
          {content}
        </div>
      )}
    </div>
  );
};

export const HoverCard = ({
  children,
  content
}: {
  children: React.ReactNode;
  content: React.ReactNode
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute top-full left-0 mt-[11px] p-[17px] bg-white border-[1px] border-[#e2e8f0] rounded-[10px] shadow-xl min-w-[250px] z-50">
          {content}
        </div>
      )}
    </div>
  );
};
