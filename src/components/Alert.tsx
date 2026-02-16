import React from 'react';

// DRIFT: Every alert variant is styled differently

export const Alert = ({ children, type }: { children: React.ReactNode; type: 'info' | 'success' | 'warning' | 'error' }) => {
  const colors = {
    info: { bg: '#e0f2fe', border: '#0ea5e9', text: '#0369a1' },
    success: { bg: '#dcfce7', border: '#22c55e', text: '#15803d' },
    warning: { bg: '#fef9c3', border: '#eab308', text: '#a16207' },
    error: { bg: '#fee2e2', border: '#ef4444', text: '#b91c1c' }
  };

  return (
    <div style={{
      backgroundColor: colors[type].bg,
      borderLeft: `4px solid ${colors[type].border}`,
      color: colors[type].text,
      padding: '14px 18px',
      borderRadius: '0 6px 6px 0',
      fontSize: '14px'
    }}>
      {children}
    </div>
  );
};

export const ToastAlert = ({ message, variant }: { message: string; variant: 'success' | 'error' }) => (
  <div className={`
    fixed bottom-[23px] right-[23px] px-[19px] py-[13px] rounded-[8px] shadow-lg
    ${variant === 'success' ? 'bg-[#10b981] text-white' : 'bg-[#dc2626] text-white'}
  `}>
    <span className="text-[14px]">{message}</span>
  </div>
);

export const BannerAlert = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    backgroundColor: '#fef3c7',
    color: '#92400e',
    padding: '11px 19px',
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: '500'
  }}>
    {children}
  </div>
);

export const InlineAlert = ({ text, icon }: { text: string; icon?: string }) => (
  <span
    className="inline-flex items-center gap-[6px] text-[12px]"
    style={{ color: '#dc2626', borderBottom: '2px solid #ef4444' }}
  >
    {icon && <span>{icon}</span>}
    {text}
  </span>
);

export const DismissibleAlert = ({
  message,
  onDismiss
}: {
  message: string;
  onDismiss: () => void
}) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '12px 16px',
    borderRadius: '8px'
  }}>
    <span style={{ fontSize: '14px' }}>{message}</span>
    <button
      onClick={onDismiss}
      style={{
        background: 'none',
        border: 'none',
        color: '#1e40af',
        fontSize: '18px',
        cursor: 'pointer'
      }}
    >
      ×
    </button>
  </div>
);
