import React from 'react';

// DRIFT: Inconsistent avatar implementations

export const Avatar = ({ src, name }: { src?: string; name?: string }) => (
  <div style={{
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    backgroundColor: '#e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }}>
    {src ? (
      <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    ) : (
      <span style={{ color: '#64748b', fontSize: '16px', fontWeight: '600' }}>
        {name?.charAt(0) || '?'}
      </span>
    )}
  </div>
);

export const SmallAvatar = ({ src }: { src: string }) => (
  <img
    src={src}
    className="w-[28px] h-[28px] rounded-full object-cover border-[2px] border-white shadow-sm"
  />
);

export const LargeAvatar = ({ src, status }: { src: string; status?: 'online' | 'offline' }) => (
  <div className="relative inline-block">
    <img
      src={src}
      className="w-[72px] h-[72px] rounded-full object-cover border-[3px] border-[#e5e7eb]"
    />
    {status && (
      <span
        className={`absolute bottom-[3px] right-[3px] w-[14px] h-[14px] rounded-full border-[2px] border-white ${
          status === 'online' ? 'bg-[#22c55e]' : 'bg-[#9ca3af]'
        }`}
      />
    )}
  </div>
);

export const AvatarGroup = ({ avatars }: { avatars: string[] }) => (
  <div style={{ display: 'flex' }}>
    {avatars.slice(0, 4).map((src, i) => (
      <img
        key={i}
        src={src}
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '2px solid white',
          marginLeft: i > 0 ? '-12px' : 0,
          objectFit: 'cover'
        }}
      />
    ))}
    {avatars.length > 4 && (
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: '#6b7280',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        marginLeft: '-12px',
        border: '2px solid white'
      }}>
        +{avatars.length - 4}
      </div>
    )}
  </div>
);

export const SquareAvatar = ({ src, size = 48 }: { src: string; size?: number }) => (
  <img
    src={src}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '8px',
      objectFit: 'cover'
    }}
  />
);
