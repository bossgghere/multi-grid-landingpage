import React from 'react';
import { Download, Zap, Shield, Cpu, LayoutGrid, ArrowRight } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function HeroSection({ onDownloadClick }) {
  return (
    <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto text-center flex flex-col items-center">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-purple-600/20 blur-[120px] pointer-events-none rounded-full" />

      {/* Release Pill Badge */}
      <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8 backdrop-blur-md hover:border-cyan-500/40 transition-colors cursor-pointer" onClick={onDownloadClick}>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="text-xs font-medium text-slate-300">
          Kadra v1.0 Early Access is now live for Apple Silicon & Intel
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
        One Window.{' '}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
          Multiple Terminals.
        </span>{' '}
        Zero Distractions.
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
        A lightweight native macOS terminal workspace. Choose your grid layout and run multiple independent terminals in one window. Switch between 1×1, 1×2, 2×2, 2×3, and 3×3 with zero session loss.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
        <button
          onClick={onDownloadClick}
          className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Download className="w-4 h-4" />
          <span>Download Kadra for macOS</span>
          <span className="text-xs font-mono opacity-80 bg-black/20 px-2 py-0.5 rounded ml-1">.dmg</span>
        </button>

        <a
          href="https://github.com/bossgghere/multi-grid-terminal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-sm border border-white/10 transition-all duration-200"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View on GitHub</span>
        </a>
      </div>

      {/* Architectural Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl text-left">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Native Metal</div>
            <div className="text-[11px] text-slate-400">&lt;40MB RAM footprint</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
            <LayoutGrid className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Dynamic Grid</div>
            <div className="text-[11px] text-slate-400">1×1 up to 5×5 Matrix</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Zero Session Loss</div>
            <div className="text-[11px] text-slate-400">Preserves background PIDs</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">100% Offline</div>
            <div className="text-[11px] text-slate-400">Zero telemetry or cloud</div>
          </div>
        </div>
      </div>
    </section>
  );
}
