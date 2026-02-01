import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button, PrimaryButton, SecondaryButton } from '../components/Button';
import { Card, ProductCard, InfoCard } from '../components/Card';
import { Badge, SuccessBadge, PremiumBadge } from '../components/Badge';

// DRIFT: Messy page with inconsistent styling throughout

export default function HomePage() {
  return (
    <div>
      <Header />

      {/* Hero section - inline styles */}
      <section style={{
        backgroundColor: '#0f172a',
        padding: '87px 31px',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: '#ffffff',
          fontSize: '53px',
          fontWeight: 'bold',
          marginBottom: '23px',
          lineHeight: '1.1'
        }}>
          Welcome to Our <span style={{ color: '#f472b6' }}>Amazing</span> Platform
        </h1>
        <p style={{
          color: '#94a3b8',
          fontSize: '19px',
          maxWidth: '600px',
          margin: '0 auto 37px'
        }}>
          Build incredible products with our tools and services.
        </p>
        <div style={{ display: 'flex', gap: '17px', justifyContent: 'center' }}>
          <Button>Get Started</Button>
          <SecondaryButton>Learn More</SecondaryButton>
        </div>
      </section>

      {/* Features - Tailwind arbitrary values */}
      <section className="py-[67px] px-[31px] bg-[#f8fafc]">
        <h2 className="text-[37px] font-bold text-[#0f172a] text-center mb-[43px]">
          Our Features
        </h2>
        <div className="grid grid-cols-3 gap-[27px] max-w-[1100px] mx-auto">
          <Card title="Fast Performance">
            <p style={{ color: '#64748b', fontSize: '14px' }}>
              Lightning fast load times and optimized rendering.
            </p>
            <Badge>New</Badge>
          </Card>
          <Card title="Secure">
            <p style={{ color: '#64748b', fontSize: '14px' }}>
              Enterprise-grade security for your data.
            </p>
            <SuccessBadge>Verified</SuccessBadge>
          </Card>
          <Card title="Scalable">
            <p style={{ color: '#64748b', fontSize: '14px' }}>
              Grows with your business needs.
            </p>
            <PremiumBadge />
          </Card>
        </div>
      </section>

      {/* Products - Mixed styles */}
      <section style={{ padding: '71px 31px' }}>
        <center>
          <font size="6" color="#1e293b">
            <b>Featured Products</b>
          </font>
        </center>
        <br /><br />
        <div className="grid grid-cols-4 gap-[23px] max-w-[1200px] mx-auto">
          <ProductCard name="Product A" price={99.99} image="/product1.jpg" />
          <ProductCard name="Product B" price={149.99} image="/product2.jpg" />
          <ProductCard name="Product C" price={79.99} image="/product3.jpg" />
          <ProductCard name="Product D" price={199.99} image="/product4.jpg" />
        </div>
      </section>

      {/* CTA - More inconsistency */}
      <InfoCard>
        <div style={{ textAlign: 'center', padding: '21px 0' }}>
          <h3 style={{ fontSize: '29px', marginBottom: '15px' }}>Ready to get started?</h3>
          <p style={{ marginBottom: '23px', opacity: 0.9 }}>Join thousands of satisfied customers today.</p>
          <button className="bg-white text-[#667eea] px-[29px] py-[13px] rounded-[8px] font-semibold text-[15px]">
            Sign Up Free
          </button>
        </div>
      </InfoCard>

      <Footer />
    </div>
  );
}
