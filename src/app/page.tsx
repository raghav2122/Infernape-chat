// app/page.tsx
import React from 'react';
import { HeroSection } from '../components/hero-section';

export default function HomePage() {
  return (
    <div className="page-content flex justify-start items-start">
      <div className="content-area">
        <HeroSection />
      </div>
    </div>
  );
}
