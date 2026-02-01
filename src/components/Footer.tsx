import React from 'react';

// DRIFT: More inconsistent styling

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#16213e',
      color: '#b8b8b8',
      padding: '47px 31px',
      marginTop: '67px'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '37px', maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '17px', marginBottom: '19px' }}>About Us</h4>
          <p style={{ fontSize: '13px', lineHeight: '1.7' }}>
            We are a company doing things and stuff.
          </p>
        </div>
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '17px', marginBottom: '19px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '11px' }}><a href="#" style={{ color: '#b8b8b8', fontSize: '13px', textDecoration: 'none' }}>Home</a></li>
            <li style={{ marginBottom: '11px' }}><a href="#" style={{ color: '#b8b8b8', fontSize: '13px', textDecoration: 'none' }}>Services</a></li>
            <li style={{ marginBottom: '11px' }}><a href="#" style={{ color: '#b8b8b8', fontSize: '13px', textDecoration: 'none' }}>Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '17px', marginBottom: '19px' }}>Contact</h4>
          <p style={{ fontSize: '13px', marginBottom: '9px' }}>Email: hello@example.com</p>
          <p style={{ fontSize: '13px', marginBottom: '9px' }}>Phone: (555) 123-4567</p>
        </div>
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '17px', marginBottom: '19px' }}>Newsletter</h4>
          <input
            type="email"
            placeholder="Your email"
            style={{
              width: '100%',
              padding: '11px 13px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '13px',
              marginBottom: '11px'
            }}
          />
          <button style={{
            width: '100%',
            backgroundColor: '#e94560',
            color: 'white',
            padding: '11px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer'
          }}>
            Subscribe
          </button>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid #2a3f5f',
        marginTop: '41px',
        paddingTop: '23px',
        textAlign: 'center',
        fontSize: '12px'
      }}>
        &copy; 2024 MyApp. All rights reserved.
      </div>
    </footer>
  );
};
