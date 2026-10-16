import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InteractiveTerminalPreview from './components/InteractiveTerminalPreview';
import SpecComparison from './components/SpecComparison';
import FeatureGrid from './components/FeatureGrid';
import ShortcutsShowcase from './components/ShortcutsShowcase';
import EmailAccessGate from './components/EmailAccessGate';
import Footer from './components/Footer';

export default function App() {
  const scrollToDownload = () => {
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050608] text-zinc-100 selection:bg-[#ccff00] selection:text-black">
      <Navbar onDownloadClick={scrollToDownload} />
      
      <main>
        <HeroSection onDownloadClick={scrollToDownload} />
        <InteractiveTerminalPreview />
        <SpecComparison />
        <FeatureGrid />
        <ShortcutsShowcase />
        <EmailAccessGate />
      </main>

      <Footer />
    </div>
  );
}
