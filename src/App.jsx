import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InteractiveTerminalPreview from './components/InteractiveTerminalPreview';
import EmailAccessGate from './components/EmailAccessGate';
import FeatureGrid from './components/FeatureGrid';
import ShortcutsShowcase from './components/ShortcutsShowcase';
import Footer from './components/Footer';

export default function App() {
  const scrollToDownload = () => {
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-slate-200 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar onDownloadClick={scrollToDownload} />
      
      <main>
        <HeroSection onDownloadClick={scrollToDownload} />
        <InteractiveTerminalPreview />
        <FeatureGrid />
        <ShortcutsShowcase />
        <EmailAccessGate />
      </main>

      <Footer />
    </div>
  );
}
