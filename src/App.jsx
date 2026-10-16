import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TerminalPreview from './components/TerminalPreview';
import FeaturesSection from './components/FeaturesSection';
import ShortcutsSection from './components/ShortcutsSection';
import BenchmarksSection from './components/BenchmarksSection';
import Footer from './components/Footer';

export default function App() {
  const emailInputRef = useRef(null);

  const handleDownloadClick = () => {
    if (emailInputRef.current) {
      emailInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 400);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#0071e3] selection:text-white relative overflow-x-hidden font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Text','SF_Pro_Display','Segoe_UI',Roboto,sans-serif]">
      {/* Soft Apple Ambient Glow in the background */}
      <div className="apple-ambient" />

      {/* Navigation Header */}
      <Navbar onDownloadClick={handleDownloadClick} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <HeroSection emailInputRef={emailInputRef} />
        <TerminalPreview />
        <FeaturesSection />
        <ShortcutsSection />
        <BenchmarksSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
