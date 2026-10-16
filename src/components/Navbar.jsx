import React from 'react';
import { Download } from 'lucide-react';

export default function Navbar({ onDownloadClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050608]/90 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-6 py-3 sm:py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-zinc-900 border border-white/15 flex items-center justify-center">
            <span className="text-[#ccff00] font-mono font-bold text-xs">▞</span>
          </div>
          <span className="font-mono font-bold text-sm sm:text-base tracking-tight text-white uppercase">
            HyperGrid
          </span>
        </div>

        {/* Minimal Navigation */}
        <div className="hidden sm:flex items-center space-x-6 text-xs font-mono text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#features" className="hover:text-white transition-colors">Shortcuts</a>
          <a href="#features" className="hover:text-white transition-colors">Benchmarks</a>
        </div>

        {/* CTA */}
        <button
          onClick={onDownloadClick}
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-bold text-[11px] sm:text-xs tracking-wide uppercase transition-transform active:translate-y-0.5 cursor-pointer shrink-0"
        >
          Download .dmg
        </button>
      </div>
    </nav>
  );
}
