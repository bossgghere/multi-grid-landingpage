import React, { useState, useEffect } from 'react';
import { Terminal, Download, Cpu, Sparkles } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Navbar({ onDownloadClick }) {
  const [fps, setFps] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      // slight fluctuation between 119 and 120 fps for realistic telemetry
      setFps(Math.random() > 0.3 ? 120 : 119);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050608]/90 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 rounded bg-[#11141c] border border-white/15 flex items-center justify-center group-hover:border-[#ccff00] transition-colors shadow-sm">
            <span className="text-[#ccff00] font-mono font-black text-sm tracking-tighter">H▞</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <span className="font-mono font-black text-lg tracking-tight text-white uppercase group-hover:text-[#ccff00] transition-colors">
              HYPERGRID
            </span>
            <span className="hidden sm:inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-400 border border-white/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse"></span>
              <span>v1.0.4 NATIVE</span>
            </span>
          </div>
        </div>

        {/* Telemetry pill (Center) */}
        <div className="hidden lg:flex items-center space-x-4 px-3 py-1 rounded bg-[#0a0c12] border border-white/[0.06] text-[11px] font-mono text-zinc-400">
          <div className="flex items-center space-x-1.5">
            <Cpu className="w-3 h-3 text-[#ccff00]" />
            <span className="text-zinc-500">ENGINE:</span>
            <span className="text-zinc-200">SWIFT 6 / METAL</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div>
            <span className="text-zinc-500">FPS:</span>
            <span className="text-[#00f0ff] ml-1">{fps}</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div>
            <span className="text-zinc-500">RESIDENCY:</span>
            <span className="text-zinc-200 ml-1">&lt;38 MB</span>
          </div>
        </div>

        {/* Links & CTA */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a
            href="https://github.com/bossgghere/multi-grid-terminal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">SRC</span>
          </a>

          <button
            onClick={onDownloadClick}
            className="px-3.5 py-1.5 rounded bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center space-x-2 transition-transform active:translate-y-0.5 shadow-[0_2px_0_0_#99bf00]"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>GET APP</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
