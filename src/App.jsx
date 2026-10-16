import React from 'react';
import HeroSection from './components/HeroSection';
import UnifiedSection from './components/UnifiedSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050608] text-zinc-100 selection:bg-[#ccff00] selection:text-black relative overflow-x-hidden">
      {/* Background Ambient Glowing Mesh */}
      <div className="ambient-mesh pointer-events-none" />

      <main>
        <HeroSection />
        <UnifiedSection />
      </main>

      <Footer />
    </div>
  );
}
