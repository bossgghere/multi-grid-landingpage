import React, { useState } from 'react';
import { Download, Terminal, Check, Copy } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function HeroSection({ onDownloadClick }) {
  const [copied, setCopied] = useState(false);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('curl -fsSL https://raw.githubusercontent.com/bossgghere/multi-grid-terminal/main/install.sh | bash');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md">
        <button
          onClick={onDownloadClick}
          className="w-full sm:w-auto px-6 py-3.5 rounded bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-transform active:translate-y-0.5 shadow-sm cursor-pointer"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span>Download for macOS</span>
        </button>

        <a
          href="https://github.com/bossgghere/multi-grid-terminal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-5 py-3.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 font-mono text-xs flex items-center justify-center space-x-2 transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View Source</span>
        </a>
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
