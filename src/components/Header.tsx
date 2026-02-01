import React from 'react';

// DRIFT: Inline styles with hardcoded values everywhere

export const Header = () => {
  return (
    <header style={{
      backgroundColor: '#1a1a2e',
      padding: '17px 29px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
        <span style={{
          color: '#e94560',
          fontSize: '26px',
          fontWeight: 'bold'
        }}>
          MyApp
        </span>
      </div>
      <nav style={{ display: 'flex', gap: '23px' }}>
        <a href="/" style={{ color: '#eaeaea', fontSize: '15px', textDecoration: 'none' }}>Home</a>
        <a href="/about" style={{ color: '#eaeaea', fontSize: '15px', textDecoration: 'none' }}>About</a>
        <a href="/products" style={{ color: '#eaeaea', fontSize: '15px', textDecoration: 'none' }}>Products</a>
        <a href="/contact" style={{ color: '#e94560', fontSize: '15px', textDecoration: 'none', fontWeight: '600' }}>Contact</a>
      </nav>
      <button style={{
        backgroundColor: '#e94560',
        color: 'white',
        padding: '9px 21px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer'
      }}>
        Sign Up
      </button>
    </header>
  );
};

export const SecondaryHeader = () => (
  <header className="bg-[#2d3748] px-[31px] py-[14px] flex justify-between items-center">
    <h1 className="text-[#f7fafc] text-[22px] font-semibold m-0">Dashboard</h1>
    <div className="flex gap-[17px] items-center">
      <span className="text-[#a0aec0] text-[13px]">Welcome, User</span>
      <button className="bg-[#4299e1] text-white px-[15px] py-[7px] rounded-[4px] text-[13px]">
        Logout
      </button>
    </div>
  </header>
);

export const MinimalHeader = () => (
  <div style={{
    borderBottom: '1px solid #eee',
    padding: '19px 0',
    marginBottom: '31px'
  }}>
    <center>
      <font color="#666" size="5">Simple Header</font>
    </center>
  </div>
);
