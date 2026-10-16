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
    <div className="min-h-screen bg-[#050608] text-zinc-100 relative selection:bg-[#ccff00] selection:text-black">
      <Navbar onDownloadClick={scrollToDownload} />
      
      <main className="relative">
        <HeroSection onDownloadClick={scrollToDownload} />

        {/* High-speed Marquee Banner */}
        <div className="w-full border-y border-white/10 bg-[#07090e] py-2.5 overflow-hidden text-xs font-mono text-zinc-400 select-none">
          <div className="animate-marquee flex items-center space-x-8">
            <span className="text-[#ccff00]">⚡ PURE SWIFT 6</span>
            <span>•</span>
            <span>GPU METAL GLYPH RASTERIZER</span>
            <span>•</span>
            <span className="text-[#00f0ff]">ZERO ELECTRON OVERHEAD</span>
            <span>•</span>
            <span>PERSISTENT SUB-SHELL PTYS</span>
            <span>•</span>
            <span className="text-[#ccff00]">⌘1–⌘9 PHYSICAL KEY HOPPING</span>
            <span>•</span>
            <span>SUB-40MB MEMORY FOOTPRINT</span>
            <span>•</span>
            <span>100% OFFLINE PRIVACY</span>
            <span>•</span>
            <span className="text-purple-400">PROPORTIONAL SPLIT DIVIDERS</span>
            <span>•</span>
            <span>CLAUDE & GEMINI AGENT COMPATIBLE</span>
            <span>•</span>
            {/* Duplicate for infinite loop */}
            <span className="text-[#ccff00]">⚡ PURE SWIFT 6</span>
            <span>•</span>
            <span>GPU METAL GLYPH RASTERIZER</span>
            <span>•</span>
            <span className="text-[#00f0ff]">ZERO ELECTRON OVERHEAD</span>
            <span>•</span>
            <span>PERSISTENT SUB-SHELL PTYS</span>
            <span>•</span>
            <span className="text-[#ccff00]">⌘1–⌘9 PHYSICAL KEY HOPPING</span>
            <span>•</span>
            <span>SUB-40MB MEMORY FOOTPRINT</span>
            <span>•</span>
            <span>100% OFFLINE PRIVACY</span>
            <span>•</span>
            <span className="text-purple-400">PROPORTIONAL SPLIT DIVIDERS</span>
            <span>•</span>
            <span>CLAUDE & GEMINI AGENT COMPATIBLE</span>
          </div>
        </div>

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
