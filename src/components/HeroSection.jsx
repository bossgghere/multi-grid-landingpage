import React from 'react';
import { Download } from 'lucide-react';

export default function HeroSection({ onDownloadClick }) {
  return (
    <section className="relative pt-36 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white leading-[1.05] max-w-4xl mb-6">
        Run 9 Terminals in One Window. <br />
        <span className="text-[#ccff00]">Zero Lag. Pure Swift.</span>
      </h1>

      {/* Clean, Simple Subtitle */}
      <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        A fast, minimal macOS terminal workspace. Choose any grid layout from 1×1 to 3×3, navigate instantly with <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 font-mono text-xs border border-zinc-700">⌘1–⌘9</kbd>, and run independent shells without closing sessions.
      </p>

      {/* Clean Actions */}
      <div className="flex items-center justify-center w-full max-w-xs">
        <button
          onClick={onDownloadClick}
          className="w-full px-8 py-3.5 rounded bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2.5 transition-transform active:translate-y-0.5 shadow-sm cursor-pointer"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span>Download for macOS</span>
        </button>
      </div>

      {/* Minimal Tech Specs Strip */}
      <div className="mt-14 flex items-center justify-center flex-wrap gap-6 text-xs font-mono text-zinc-500">
        <div>2.4 MB Binary</div>
        <div>•</div>
        <div>&lt;40 MB RAM</div>
        <div>•</div>
        <div>100% Offline</div>
        <div>•</div>
        <div>Apple Silicon & Intel</div>
      </div>
    </section>
  );
}
