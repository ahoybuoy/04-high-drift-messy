import React from 'react';

// DRIFT: Inconsistent modal styles and patterns

export const Modal = ({
  isOpen,
  onClose,
  title,
  children
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode
}) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '27px',
        maxWidth: '500px',
        width: '90%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '19px' }}>
          <h2 style={{ margin: 0, fontSize: '21px', color: '#1f2937' }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#6b7280'
            }}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export const ConfirmModal = ({
  isOpen,
  onConfirm,
  onCancel,
  message
}: {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-[8px] p-[23px] max-w-[400px] w-[90%]">
        <p className="text-[#374151] text-[15px] mb-[21px]">{message}</p>
        <div className="flex gap-[11px] justify-end">
          <button
            onClick={onCancel}
            className="px-[17px] py-[9px] bg-[#f3f4f6] text-[#374151] rounded-[5px] text-[14px]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-[17px] py-[9px] bg-[#ef4444] text-white rounded-[5px] text-[14px]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export const SlideoutPanel = ({
  isOpen,
  children
}: {
  isOpen: boolean;
  children: React.ReactNode
}) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: '400px',
      backgroundColor: 'white',
      boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease-in-out',
      zIndex: 1001,
      padding: '31px'
    }}
  >
    {children}
  </div>
);
