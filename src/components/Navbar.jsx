import React from 'react';
import { Download } from 'lucide-react';

export default function Navbar({ onDownloadClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.06] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand */}
        <div 
          className="flex items-center space-x-2.5 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-[#2a2d36] to-[#12141a] p-[1px] shadow-sm flex items-center justify-center">
            <span className="text-[#2997ff] font-mono font-bold text-xs">▞</span>
          </div>
          <span className="font-semibold text-base tracking-tight text-[#1d1d1f]">
            HyperGrid
          </span>
        </div>

        {/* Center Apple-style navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium text-[#86868b]">
          <a href="#demo" className="hover:text-[#1d1d1f] transition-colors">Grid Demo</a>
          <a href="#features" className="hover:text-[#1d1d1f] transition-colors">Features</a>
          <a href="#shortcuts" className="hover:text-[#1d1d1f] transition-colors">Shortcuts</a>
          <a href="#performance" className="hover:text-[#1d1d1f] transition-colors">Performance</a>
        </nav>

        {/* CTA */}
        <button
          onClick={onDownloadClick}
          className="px-4 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-xs tracking-tight transition-all active:scale-[0.98] shadow-sm cursor-pointer"
        >
          Download .dmg
        </button>
      </div>
    </header>
  );
}
