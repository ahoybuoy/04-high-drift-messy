import React from 'react';

// DRIFT: Completely inconsistent input styles

export const Input = ({ placeholder, type = 'text' }: { placeholder?: string; type?: string }) => (
  <input
    type={type}
    placeholder={placeholder}
    style={{
      width: '100%',
      padding: '13px 17px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '15px',
      outline: 'none',
    }}
  />
);

export const SearchInput = ({ onSearch }: { onSearch?: (value: string) => void }) => (
  <div className="relative">
    <input
      type="search"
      placeholder="Search..."
      className="w-full px-[14px] py-[11px] pr-[42px] border-[1px] border-[#d1d5db] rounded-[8px] text-[14px] outline-none focus:border-[#3b82f6]"
      onChange={(e) => onSearch?.(e.target.value)}
    />
    <span className="absolute right-[13px] top-1/2 -translate-y-1/2 text-[#9ca3af]">🔍</span>
  </div>
);

export const TextArea = ({ rows = 4 }: { rows?: number }) => (
  <textarea
    rows={rows}
    style={{
      width: '100%',
      padding: '11px 15px',
      border: '2px solid #e2e8f0',
      borderRadius: '4px',
      fontSize: '14px',
      resize: 'vertical',
      fontFamily: 'inherit'
    }}
  />
);

export const SelectInput = ({ options }: { options: string[] }) => (
  <select className="w-full px-[12px] py-[10px] border-[1px] border-[#cbd5e1] rounded-[5px] text-[14px] bg-white">
    {options.map((opt, i) => (
      <option key={i} value={opt}>{opt}</option>
    ))}
  </select>
);

export const Checkbox = ({ label }: { label: string }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: '9px', cursor: 'pointer' }}>
    <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: '#10b981' }} />
    <span style={{ fontSize: '14px', color: '#374151' }}>{label}</span>
  </label>
);

export const RadioButton = ({ name, label, value }: { name: string; label: string; value: string }) => (
  <label className="flex items-center gap-[7px] cursor-pointer">
    <input type="radio" name={name} value={value} className="w-[17px] h-[17px] accent-[#8b5cf6]" />
    <span className="text-[13px] text-[#4b5563]">{label}</span>
  </label>
);
