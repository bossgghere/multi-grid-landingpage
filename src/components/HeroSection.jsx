import React, { useState } from 'react';
import { Download, Terminal, Copy, Check, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function HeroSection({ onDownloadClick }) {
  const [copied, setCopied] = useState(false);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('curl -fsSL https://raw.githubusercontent.com/bossgghere/multi-grid-terminal/main/install.sh | bash');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      {/* Cyber Hardware Status Tag */}
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#0e1118] border border-white/10 mb-8 text-[11px] font-mono text-zinc-300">
        <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
        <span className="text-zinc-400">[RELEASE // 2026.1]</span>
        <span className="text-white font-semibold">NATIVE MULTI-GRID TERMINAL WORKSPACE</span>
        <span className="text-[#ccff00] hidden sm:inline">• APPLE SILICON & INTEL</span>
      </div>

      {/* Giant Brutalist Headline */}
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-[0.95] max-w-5xl mb-6">
        RUN <span className="text-[#ccff00] underline decoration-[#ccff00]/40 decoration-4 underline-offset-8">9 TERMINALS</span> IN ONE WINDOW. <br />
        <span className="text-zinc-400">ZERO ELECTRON SLOB.</span>
      </h1>

      {/* Razor Sharp Subtitle */}
      <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
        A brutalist, hardware-accelerated macOS terminal workspace. Switch between 1×1 to 3×3 matrix layouts instantly, jump panes with <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[#ccff00] font-mono text-xs border border-zinc-700 font-bold">⌘1–⌘9</kbd>, and run real CLI agents at native Metal speed.
      </p>

      {/* CTA Buttons & Quick Install Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mb-12">
        <button
          onClick={onDownloadClick}
          className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-black text-sm tracking-wide uppercase flex items-center justify-center space-x-2.5 transition-all transform active:translate-y-1 shadow-[0_4px_0_0_#99bf00] cursor-pointer"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span>DOWNLOAD FOR MACOS (.DMG)</span>
        </button>

        <button
          onClick={handleCopyCmd}
          className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-[#0e1118] hover:bg-[#141822] border border-white/10 hover:border-white/20 text-zinc-300 font-mono text-xs flex items-center justify-center space-x-2.5 transition-all group"
        >
          <Terminal className="w-3.5 h-3.5 text-[#ccff00]" />
          <span className="text-zinc-400 group-hover:text-zinc-200">curl install script</span>
          {copied ? (
            <span className="text-[#ccff00] text-[11px] font-bold flex items-center space-x-1">
              <Check className="w-3 h-3" />
              <span>COPIED!</span>
            </span>
          ) : (
            <Copy className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300" />
          )}
        </button>
      </div>

      {/* Hardware Ticker Strip with Crosshairs */}
      <div className="w-full max-w-4xl relative deck-panel rounded-lg p-3 overflow-hidden border border-white/10 bg-[#090b10]">
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 flex-wrap gap-3 px-2">
          <div className="flex items-center space-x-2">
            <span className="text-[#ccff00]">●</span>
            <span className="text-white font-bold">2.4 MB</span>
            <span className="text-zinc-500">BINARY SIZE</span>
          </div>
          <div className="hidden sm:block text-zinc-700">|</div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00f0ff]">⚡</span>
            <span className="text-white font-bold">&lt;38 MB</span>
            <span className="text-zinc-500">MEMORY RESIDENCY</span>
          </div>
          <div className="hidden sm:block text-zinc-700">|</div>
          <div className="flex items-center space-x-2">
            <span className="text-[#ccff00]">⚡</span>
            <span className="text-white font-bold">0.4 MS</span>
            <span className="text-zinc-500">KEYSTROKE LATENCY</span>
          </div>
          <div className="hidden sm:block text-zinc-700">|</div>
          <div className="flex items-center space-x-2">
            <span className="text-purple-400">🛡️</span>
            <span className="text-white font-bold">100% OFFLINE</span>
            <span className="text-zinc-500">ZERO TRACKING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
