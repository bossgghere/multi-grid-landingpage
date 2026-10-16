import React from 'react';
import { Download } from 'lucide-react';

export default function HeroSection({ onDownloadClick }) {
  return (
    <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white leading-[1.1] max-w-4xl mb-3 sm:mb-4">
        Run 9 Terminals in One Window. <br />
        <span className="text-[#ccff00]">Zero Lag. Pure Swift.</span>
      </h1>

      {/* Clean, Simple Subtitle */}
      <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal">
        A fast, minimal macOS terminal workspace. Choose any grid layout from 1×1 to 3×3, navigate instantly with <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 font-mono text-xs border border-zinc-700">⌘1–⌘9</kbd>, and run independent shells without closing sessions.
      </p>

      {/* Clean Action Button */}
      <div className="flex items-center justify-center w-full max-w-xs">
        <button
          onClick={onDownloadClick}
          className="w-full px-6 py-3 rounded bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-transform active:translate-y-0.5 shadow-sm cursor-pointer"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span>Download for macOS</span>
        </button>
      </div>

      {/* Minimal Tech Specs Strip */}
      <div className="mt-8 sm:mt-10 flex items-center justify-center flex-wrap gap-3 sm:gap-6 text-[11px] sm:text-xs font-mono text-zinc-500">
        <span>2.4 MB Binary</span>
        <span>•</span>
        <span>&lt;40 MB RAM</span>
        <span>•</span>
        <span>100% Offline</span>
        <span>•</span>
        <span>Apple Silicon & Intel</span>
      </div>
    </section>
  );
}
