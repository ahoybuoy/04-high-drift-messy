import React from 'react';

// DRIFT: List components with varying styles

interface ListItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
}

export const SimpleList = ({ items }: { items: ListItem[] }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    {items.map(item => (
      <li key={item.id} style={{
        padding: '13px 0',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <span style={{ fontSize: '14px', color: '#1f2937' }}>{item.title}</span>
      </li>
    ))}
  </ul>
);

export const IconList = ({ items }: { items: ListItem[] }) => (
  <ul className="list-none p-0 m-0">
    {items.map(item => (
      <li key={item.id} className="flex items-center gap-[11px] py-[11px] border-b-[1px] border-[#f3f4f6]">
        <span className="text-[18px]">{item.icon}</span>
        <div>
          <p className="text-[14px] text-[#1f2937] font-medium m-0">{item.title}</p>
          {item.description && (
            <p className="text-[12px] text-[#6b7280] m-0 mt-[3px]">{item.description}</p>
          )}
        </div>
      </li>
    ))}
  </ul>
);

export const NumberedList = ({ items }: { items: string[] }) => (
  <ol style={{ paddingLeft: '21px', margin: 0 }}>
    {items.map((item, i) => (
      <li key={i} style={{
        padding: '9px 0',
        fontSize: '14px',
        color: '#374151'
      }}>
        {item}
      </li>
    ))}
  </ol>
);

export const CheckList = ({ items, checked }: { items: string[]; checked: boolean[] }) => (
  <ul className="list-none p-0 m-0">
    {items.map((item, i) => (
      <li key={i} className="flex items-center gap-[9px] py-[7px]">
        <span className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] ${
          checked[i] ? 'bg-[#10b981] text-white' : 'bg-[#e5e7eb] text-[#9ca3af]'
        }`}>
          {checked[i] ? '✓' : ''}
        </span>
        <span className={`text-[14px] ${checked[i] ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
          {item}
        </span>
      </li>
    ))}
  </ul>
);

export const DescriptionList = ({ items }: { items: { term: string; description: string }[] }) => (
  <dl style={{ margin: 0 }}>
    {items.map((item, i) => (
      <div key={i} style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '17px',
        padding: '13px 0',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <dt style={{ fontSize: '13px', fontWeight: '600', color: '#6b7280' }}>{item.term}</dt>
        <dd style={{ fontSize: '14px', color: '#1f2937', margin: 0 }}>{item.description}</dd>
      </div>
    ))}
  </dl>
);
