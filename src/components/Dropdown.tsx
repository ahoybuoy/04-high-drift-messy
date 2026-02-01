import React, { useState, useRef, useEffect } from 'react';

// DRIFT: Dropdown components with different styling patterns

interface DropdownItem {
  label: string;
  value: string;
}

export const Dropdown = ({ items, placeholder }: { items: DropdownItem[]; placeholder?: string }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownItem | null>(null);

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: '11px 15px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          backgroundColor: 'white',
          fontSize: '14px',
          color: selected ? '#1f2937' : '#9ca3af',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {selected?.label || placeholder || 'Select...'}
        <span style={{ fontSize: '10px' }}>▼</span>
      </button>
      {open && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '5px',
          backgroundColor: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          zIndex: 100,
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => { setSelected(item); setOpen(false); }}
              style={{
                width: '100%',
                padding: '11px 15px',
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: '14px',
                color: '#374151',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const MenuDropdown = ({ trigger, items }: { trigger: React.ReactNode; items: { label: string; onClick: () => void }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className="absolute top-full right-0 mt-[7px] py-[5px] bg-white border-[1px] border-[#e5e7eb] rounded-[8px] shadow-lg min-w-[160px] z-50">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => { item.onClick(); setIsOpen(false); }}
              className="w-full px-[15px] py-[9px] text-left text-[13px] text-[#374151] hover:bg-[#f3f4f6]"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const Autocomplete = ({ options, onSelect }: { options: string[]; onSelect: (value: string) => void }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const filtered = options.filter(o => o.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
        placeholder="Type to search..."
        style={{
          width: '100%',
          padding: '10px 14px',
          border: '2px solid #e2e8f0',
          borderRadius: '8px',
          fontSize: '14px'
        }}
      />
      {isOpen && filtered.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '4px',
          backgroundColor: 'white',
          border: '2px solid #e2e8f0',
          borderRadius: '8px',
          maxHeight: '180px',
          overflowY: 'auto'
        }}>
          {filtered.map((option, i) => (
            <button
              key={i}
              onClick={() => { onSelect(option); setQuery(option); setIsOpen(false); }}
              style={{
                width: '100%',
                padding: '10px 14px',
                border: 'none',
                backgroundColor: 'transparent',
                textAlign: 'left',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
