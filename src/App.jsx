import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UnifiedSection from './components/UnifiedSection';
import Footer from './components/Footer';

export default function App() {
  const emailInputRef = useRef(null);

  const focusDownload = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
      emailInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050608] text-zinc-100 selection:bg-[#ccff00] selection:text-black">
      <Navbar onDownloadClick={focusDownload} />
      
      <main>
        <HeroSection emailInputRef={emailInputRef} />
        <UnifiedSection />
      </main>

      <Footer />
    </div>
  );
}
